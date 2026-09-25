'use client';

import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler,
} from 'chart.js';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import { analytics, courses, categories } from '@/lib/educationData';
import { useApp } from '@/context/AppContext';
import { Download, Users, Award, DollarSign, TrendingUp, CheckCircle2, Building, FileSpreadsheet } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler
);

export default function AnalyticsCharts() {
  const { showToast } = useApp();
  const [timeframe, setTimeframe] = useState('Academic Year 2026/2027');

  // Set institutional default font & text color for ChartJS
  ChartJS.defaults.font.family = "'Inter', system-ui, -apple-system, sans-serif";
  ChartJS.defaults.color = '#6B7280';

  // 1. Students by Academic Category / Faculty
  const categoryLabels = Object.keys(analytics.studentsByCategory).slice(0, 8);
  const categoryCounts = categoryLabels.map((l) => analytics.studentsByCategory[l]);
  const categoryData = {
    labels: categoryLabels,
    datasets: [
      {
        label: 'Enrolled Candidates',
        data: categoryCounts,
        backgroundColor: '#111827',
        borderRadius: 4,
        hoverBackgroundColor: '#1E293B',
      },
    ],
  };

  // 2. Course Popularity
  const popCourses = analytics.coursePopularity.slice(0, 6);
  const popLabels = popCourses.map((c) =>
    c.course_name.length > 24 ? c.course_name.substring(0, 22) + '...' : c.course_name
  );
  const popCounts = popCourses.map((c) => c.enrolled);
  const popularityData = {
    labels: popLabels,
    datasets: [
      {
        label: 'Matriculated Scholars',
        data: popCounts,
        backgroundColor: '#047857',
        borderRadius: 4,
        hoverBackgroundColor: '#064E3B',
      },
    ],
  };

  // 3. Admissions Intake by Month
  const monthLabels = analytics.admissionsByMonth.map((m) => m.month);
  const monthCounts = analytics.admissionsByMonth.map((m) => m.count);
  const admissionsData = {
    labels: monthLabels,
    datasets: [
      {
        label: 'Monthly Matriculations',
        data: monthCounts,
        borderColor: '#111827',
        backgroundColor: 'rgba(17, 24, 39, 0.04)',
        borderWidth: 2,
        fill: true,
        tension: 0.3,
        pointBackgroundColor: '#111827',
        pointBorderColor: '#FFFFFF',
        pointBorderWidth: 1.5,
        pointRadius: 3.5,
        pointHoverRadius: 5,
      },
    ],
  };

  // 4. Faculty Teaching Evaluations
  const trainerLabels = analytics.trainerRatings.slice(0, 7).map((t) => t.name.split(' ')[0] + ' ' + (t.name.split(' ')[1] || ''));
  const trainerVals = analytics.trainerRatings.slice(0, 7).map((t) => t.rating);
  const trainerData = {
    labels: trainerLabels,
    datasets: [
      {
        label: 'Mean Evaluation (Score / 5.0)',
        data: trainerVals,
        backgroundColor: '#047857',
        borderRadius: 4,
      },
    ],
  };

  // 5. Completion Rates by Format
  const compLabels = Object.keys(analytics.completionRatesByFormat);
  const compVals = compLabels.map((k) => analytics.completionRatesByFormat[k]);
  const completionData = {
    labels: compLabels,
    datasets: [
      {
        label: 'Graduation Benchmark %',
        data: compVals,
        backgroundColor: '#D97706',
        borderRadius: 4,
      },
    ],
  };

  // 6. Learning Format Distribution
  const formatLabels = Object.keys(analytics.learningFormatDistribution);
  const formatVals = formatLabels.map((k) => analytics.learningFormatDistribution[k]);
  const formatData = {
    labels: formatLabels,
    datasets: [
      {
        data: formatVals,
        backgroundColor: ['#111827', '#047857', '#D97706', '#6B7280', '#94A3B8'],
        borderWidth: 1.5,
        borderColor: '#FFFFFF',
      },
    ],
  };

  const handleExportCSV = () => {
    let csv = 'Course ID,Programme Title,Academic Faculty,Tuition (SGD),Duration (Weeks),Format,Campus Hub,Lead Faculty ID,Enrolments,Rating\n';
    courses.forEach((c) => {
      csv += `"${c.course_id}","${c.course_name.replace(/"/g, '""')}","${c.category}",${c.fee_sgd},${c.duration_weeks},"${c.format}","${c.campus}","${c.trainer_id}",${c.enrolled_count},${c.rating}\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `Apex_Institute_Academic_Registry_Report_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast('Official institutional audit report exported as CSV.', 'success');
  };

  const totalEnrolled = courses.reduce((sum, c) => sum + c.enrolled_count, 0);
  const totalSubsidies = analytics.admissionsByMonth.reduce((sum, m) => sum + m.revenue_sgd, 0);

  return (
    <div className="space-y-10 text-[#111827]">
      
      {/* Top Controls & Audit Classification */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 bg-[#F8FAFC] border border-slate-200/80 rounded-2xl shadow-sm">
        <div>
          <div className="text-[10px] font-mono uppercase tracking-wider text-[#6B7280] font-semibold">
            Institutional Audit & Quality Assurance Council
          </div>
          <h2 className="font-heading font-serif text-lg font-bold text-[#111827] mt-0.5">
            Operational Telemetry & Academic Performance Benchmarks
          </h2>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <select
            value={timeframe}
            onChange={(e) => {
              setTimeframe(e.target.value);
              showToast(`Updated audit timeframe: ${e.target.value}`, 'success');
            }}
            className="px-3 py-2 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#047857] text-[#111827]"
          >
            <option value="Academic Year 2026/2027">Academic Year 2026/2027</option>
            <option value="Term 3 (July – October 2026)">Term 3 (July – October 2026)</option>
            <option value="Audited Historical (2022–2026)">Audited Historical (2022–2026)</option>
          </select>

          <button
            onClick={handleExportCSV}
            className="btn-primary text-xs font-semibold px-4 py-2 flex items-center gap-1.5 whitespace-nowrap rounded-xl shadow-sm"
          >
            <FileSpreadsheet className="w-3.5 h-3.5" /> Export Audit CSV
          </button>
        </div>
      </div>

      {/* Structured Institutional KPI Cards (Minimal University Style) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        <div className="border border-slate-200/80 p-6 bg-white rounded-2xl shadow-sm space-y-3">
          <div className="flex items-center justify-between text-xs text-[#6B7280]">
            <span className="uppercase tracking-wider font-semibold text-[10px]">Total Matriculated Scholars</span>
            <Users className="w-4 h-4 text-[#6B7280]" />
          </div>
          <div>
            <div className="font-heading font-serif text-3xl font-bold text-[#111827]">
              {totalEnrolled.toLocaleString()}
            </div>
            <div className="text-xs text-[#047857] font-semibold mt-1">
              ↑ 18.4% Academic cohort expansion
            </div>
          </div>
          <p className="text-[11px] text-[#6B7280] pt-2 border-t border-slate-100">
            Active learners across 10 academic faculties.
          </p>
        </div>

        <div className="border border-slate-200/80 p-6 bg-white rounded-2xl shadow-sm space-y-3">
          <div className="flex items-center justify-between text-xs text-[#6B7280]">
            <span className="uppercase tracking-wider font-semibold text-[10px]">Faculty Evaluation Index</span>
            <Award className="w-4 h-4 text-[#6B7280]" />
          </div>
          <div>
            <div className="font-heading font-serif text-3xl font-bold text-[#111827]">
              4.91 <span className="text-xs text-[#6B7280] font-sans font-normal">/ 5.0 Rating</span>
            </div>
            <div className="text-xs text-[#047857] font-semibold mt-1">
              99.1% Commendable / Distinction
            </div>
          </div>
          <p className="text-[11px] text-[#6B7280] pt-2 border-t border-slate-100">
            Derived from 200 audited student evaluations.
          </p>
        </div>

        <div className="border border-slate-200/80 p-6 bg-white rounded-2xl shadow-sm space-y-3">
          <div className="flex items-center justify-between text-xs text-[#6B7280]">
            <span className="uppercase tracking-wider font-semibold text-[10px]">Statutory Subsidies Administered</span>
            <DollarSign className="w-4 h-4 text-[#6B7280]" />
          </div>
          <div>
            <div className="font-heading font-serif text-3xl font-bold text-[#111827]">
              SGD ${(totalSubsidies / 1000000).toFixed(2)}M
            </div>
            <div className="text-xs text-[#6B7280] font-medium mt-1">
              SkillsFuture SG & NTUC UTAP
            </div>
          </div>
          <p className="text-[11px] text-[#6B7280] pt-2 border-t border-slate-100">
            Directly offset on behalf of Singapore citizens.
          </p>
        </div>

        <div className="border border-slate-200/80 p-6 bg-white rounded-2xl shadow-sm space-y-3">
          <div className="flex items-center justify-between text-xs text-[#6B7280]">
            <span className="uppercase tracking-wider font-semibold text-[10px]">Examination Distinction Benchmark</span>
            <TrendingUp className="w-4 h-4 text-[#6B7280]" />
          </div>
          <div>
            <div className="font-heading font-serif text-3xl font-bold text-[#111827]">
              98.6%
            </div>
            <div className="text-xs text-[#6B7280] font-medium mt-1">
              Passing & Distinction Standard
            </div>
          </div>
          <p className="text-[11px] text-[#6B7280] pt-2 border-t border-slate-100">
            Cambridge GCE and SSG credential cohorts.
          </p>
        </div>

      </div>

      {/* 6 Visualizations Grid (Clean Academic Cards, No Tacky Badges) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Chart 1: Students by Faculty */}
        <div className="border border-slate-200/80 p-6 bg-white rounded-2xl shadow-sm">
          <div className="flex items-start justify-between mb-4 border-b border-slate-100 pb-3">
            <div>
              <div className="text-[10px] font-mono uppercase text-[#6B7280]">AUDIT METRIC: MET-01</div>
              <h3 className="font-heading font-serif text-base font-bold text-[#111827]">
                Matriculated Scholars by Academic Faculty
              </h3>
              <p className="text-xs text-[#6B7280] mt-0.5">Enrollment distribution across executive and academic disciplines</p>
            </div>
          </div>
          <div className="h-64">
            <Bar
              data={categoryData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                  x: { grid: { display: false }, ticks: { font: { size: 10 } } },
                  y: { grid: { color: '#F1F5F9' }, beginAtZero: true },
                },
              }}
            />
          </div>
        </div>

        {/* Chart 2: Course Popularity */}
        <div className="border border-slate-200/80 p-6 bg-white rounded-2xl shadow-sm">
          <div className="flex items-start justify-between mb-4 border-b border-slate-100 pb-3">
            <div>
              <div className="text-[10px] font-mono uppercase text-[#6B7280]">AUDIT METRIC: MET-02</div>
              <h3 className="font-heading font-serif text-base font-bold text-[#111827]">
                Leading Curricula by Cohort Enrolment
              </h3>
              <p className="text-xs text-[#6B7280] mt-0.5">Highest volume executive specializations and preparatory curricula</p>
            </div>
          </div>
          <div className="h-64">
            <Bar
              data={popularityData}
              options={{
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                  x: { grid: { color: '#F1F5F9' }, beginAtZero: true },
                  y: { grid: { display: false }, ticks: { font: { size: 10 } } },
                },
              }}
            />
          </div>
        </div>

        {/* Chart 3: Monthly Admissions Velocity */}
        <div className="border border-slate-200/80 p-6 bg-white rounded-2xl shadow-sm">
          <div className="flex items-start justify-between mb-4 border-b border-slate-100 pb-3">
            <div>
              <div className="text-[10px] font-mono uppercase text-[#6B7280]">AUDIT METRIC: MET-03</div>
              <h3 className="font-heading font-serif text-base font-bold text-[#111827]">
                12-Month Admissions & Enrolment Velocity
              </h3>
              <p className="text-xs text-[#6B7280] mt-0.5">Monthly registration trajectory across all 10 Singapore campuses</p>
            </div>
          </div>
          <div className="h-64">
            <Line
              data={admissionsData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                  x: { grid: { display: false }, ticks: { font: { size: 10 } } },
                  y: { grid: { color: '#F1F5F9' } },
                },
              }}
            />
          </div>
        </div>

        {/* Chart 4: Faculty Teaching Evaluations */}
        <div className="border border-slate-200/80 p-6 bg-white rounded-2xl shadow-sm">
          <div className="flex items-start justify-between mb-4 border-b border-slate-100 pb-3">
            <div>
              <div className="text-[10px] font-mono uppercase text-[#6B7280]">AUDIT METRIC: MET-04</div>
              <h3 className="font-heading font-serif text-base font-bold text-[#111827]">
                Faculty Teaching Quality Benchmarks
              </h3>
              <p className="text-xs text-[#6B7280] mt-0.5">Independent student survey ratings across department chairs (out of 5.0)</p>
            </div>
          </div>
          <div className="h-64">
            <Bar
              data={trainerData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                  x: { grid: { display: false }, ticks: { font: { size: 10 } } },
                  y: { min: 4.5, max: 5.0, grid: { color: '#F1F5F9' } },
                },
              }}
            />
          </div>
        </div>

        {/* Chart 5: Completion Rates by Format */}
        <div className="border border-slate-200/80 p-6 bg-white rounded-2xl shadow-sm">
          <div className="flex items-start justify-between mb-4 border-b border-slate-100 pb-3">
            <div>
              <div className="text-[10px] font-mono uppercase text-[#6B7280]">AUDIT METRIC: MET-05</div>
              <h3 className="font-heading font-serif text-base font-bold text-[#111827]">
                Curriculum Graduation Benchmark by Format (%)
              </h3>
              <p className="text-xs text-[#6B7280] mt-0.5">Verified completion rates across in-person, hybrid, and online cohorts</p>
            </div>
          </div>
          <div className="h-64">
            <Bar
              data={completionData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                  x: { grid: { display: false }, ticks: { font: { size: 10 } } },
                  y: { min: 80, max: 100, grid: { color: '#F1F5F9' } },
                },
              }}
            />
          </div>
        </div>

        {/* Chart 6: Delivery Format Composition */}
        <div className="border border-slate-200/80 p-6 bg-white rounded-2xl shadow-sm">
          <div className="flex items-start justify-between mb-4 border-b border-slate-100 pb-3">
            <div>
              <div className="text-[10px] font-mono uppercase text-[#6B7280]">AUDIT METRIC: MET-06</div>
              <h3 className="font-heading font-serif text-base font-bold text-[#111827]">
                Delivery Format Distribution
              </h3>
              <p className="text-xs text-[#6B7280] mt-0.5">Enrolment proportion across On-Campus, Hybrid, and Synchronous modes</p>
            </div>
          </div>
          <div className="h-64">
            <Doughnut
              data={formatData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'bottom',
                    labels: { boxWidth: 10, padding: 12, font: { size: 11 } },
                  },
                },
                cutout: '70%',
              }}
            />
          </div>
        </div>

      </div>

      {/* Institutional Faculty Governance Matrix Table */}
      <div className="border border-slate-200/80 bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <h3 className="font-heading font-serif text-base font-bold text-[#111827]">
              Academic Faculty Governance Summary Table
            </h3>
            <p className="text-xs text-[#6B7280] mt-0.5">
              Audited overview of faculties, accredited curriculum count, active cohorts, and mean student rating.
            </p>
          </div>
          <span className="text-[10px] font-mono uppercase bg-[#F8FAFC] text-[#111827] px-2.5 py-1 rounded-md border border-slate-200 font-semibold">
            CPE Quality Framework Compliance
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#F8FAFC] text-[#111827] uppercase font-semibold text-[10px] tracking-wider border-b border-slate-200/80">
              <tr>
                <th className="py-3.5 px-5">Academic Division</th>
                <th className="py-3.5 px-5">Accredited Modules</th>
                <th className="py-3.5 px-5">Primary Campus Venue</th>
                <th className="py-3.5 px-5">Standard Tuition (SGD)</th>
                <th className="py-3.5 px-5">SkillsFuture Funding</th>
                <th className="py-3.5 px-5 text-right">Faculty Benchmark</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-[#6B7280]">
              {Object.keys(categories).map((catName, idx) => {
                const catCourses = courses.filter((c) => c.category === catName);
                const avgRating = (catCourses.reduce((sum, c) => sum + parseFloat(c.rating), 0) / catCourses.length).toFixed(2);
                const avgFee = Math.round(catCourses.reduce((sum, c) => sum + c.fee_sgd, 0) / catCourses.length);
                return (
                  <tr key={idx} className="hover:bg-slate-50 transition">
                    <td className="py-3.5 px-5 font-semibold text-[#111827]">
                      {catName}
                    </td>
                    <td className="py-3.5 px-5">{catCourses.length} Approved Curricula</td>
                    <td className="py-3.5 px-5 text-[#6B7280]">{catCourses[0]?.campus || 'Somerset Flagship'}</td>
                    <td className="py-3.5 px-5 font-mono font-medium text-[#111827]">
                      SGD ${Math.max(avgFee, 1950).toLocaleString()}
                    </td>
                    <td className="py-3.5 px-5">
                      <span className="text-[10px] font-semibold text-[#047857] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                        Up to 50% Subsidized
                      </span>
                    </td>
                    <td className="py-3.5 px-5 text-right font-semibold text-[#111827]">
                      {avgRating} / 5.0 ★
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
