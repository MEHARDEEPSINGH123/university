'use client';

import React from 'react';
import Link from 'next/link';
import { courses, getCourseById, getTrainerById, reviews } from '@/lib/educationData';
import { useApp } from '@/context/AppContext';
import SkillsFutureCalculator from '@/components/SkillsFutureCalculator';
import {
  Clock,
  Calendar,
  CheckCircle2,
  BookOpen,
  UserCheck,
  Award,
  Star,
  MapPin,
  ArrowLeft,
  Shield,
  FileDown,
  Building,
} from 'lucide-react';

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const course = getCourseById(id);
  const { openTrialModal, showToast } = useApp();

  if (!course) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4 text-center">
        <h2 className="text-2xl font-bold font-heading text-[#111827] mb-2">Curriculum Not Found</h2>
        <p className="text-[#6B7280] mb-6">The requested programme identifier does not exist in our institutional catalog.</p>
        <Link href="/courses" className="btn-primary btn-sm rounded-xl">
          Return to Programmes Catalog
        </Link>
      </div>
    );
  }

  const trainer = getTrainerById(course.trainer_id);
  const courseReviews = reviews.filter((r) => r.category === course.category).slice(0, 3);
  const standardFee = Math.max(course.fee_sgd, 1950);

  return (
    <div className="py-12 sm:py-16 bg-white min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-between text-xs border-b border-slate-200 pb-4">
          <Link
            href="/courses"
            className="inline-flex items-center gap-1.5 font-medium text-[#6B7280] hover:text-[#047857] transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Academic Catalog
          </Link>

          <div className="text-[#6B7280] font-mono text-[11px]">
            ACCREDITED PROGRAMME: <strong className="text-[#111827]">{course.course_id}</strong>
          </div>
        </div>

        {/* Academic Programme Header */}
        <div className="bg-[#F8FAFC] border border-slate-200/80 p-8 sm:p-10 rounded-2xl shadow-sm">
          <div className="max-w-4xl space-y-4">
            
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-white border border-slate-200 text-[#111827] text-[10px] font-semibold uppercase px-2.5 py-1 rounded-md">
                {course.category}
              </span>
              <span className="bg-[#047857] text-white text-[10px] font-semibold uppercase px-2.5 py-1 rounded-md">
                {course.format}
              </span>
              <span className="text-xs text-[#6B7280] ml-1">
                • Administered at {course.campus}
              </span>
            </div>

            <h1 className="font-heading font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
              {course.course_name}
            </h1>

            <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed font-normal">
              {course.overview}
            </p>

            {/* Key Academic Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-slate-200/80 text-xs">
              <div>
                <div className="text-[#6B7280] uppercase tracking-wider text-[10px] font-medium">Academic Duration</div>
                <div className="font-semibold text-[#111827] text-sm mt-0.5">{course.duration_weeks} Weeks (Term)</div>
              </div>
              <div>
                <div className="text-[#6B7280] uppercase tracking-wider text-[10px] font-medium">Standard Tuition Fee</div>
                <div className="font-semibold text-[#111827] text-sm mt-0.5">SGD ${standardFee.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-[#6B7280] uppercase tracking-wider text-[10px] font-medium">Delivery Format</div>
                <div className="font-semibold text-[#111827] text-sm mt-0.5">{course.format}</div>
              </div>
              <div>
                <div className="text-[#6B7280] uppercase tracking-wider text-[10px] font-medium">Academic Evaluation</div>
                <div className="font-semibold text-[#111827] text-sm mt-0.5">{course.rating} / 5.0 Rating</div>
              </div>
            </div>

          </div>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Academic Details Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Pedagogical Learning Outcomes */}
            <div className="border border-slate-200/80 p-6 sm:p-8 bg-white rounded-2xl shadow-sm">
              <h2 className="font-heading font-serif text-xl font-bold text-[#111827] mb-4">
                Core Competencies & Learning Outcomes
              </h2>
              <div className="space-y-3">
                {course.outcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#047857] flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modular Curriculum Syllabus */}
            <div className="border border-slate-200/80 p-6 sm:p-8 bg-white rounded-2xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-heading font-serif text-xl font-bold text-[#111827]">
                  Modular Curriculum & Topics Outline
                </h2>
                <span className="text-xs text-[#6B7280]">
                  {course.curriculum.length} Core Modules
                </span>
              </div>

              <div className="divide-y divide-slate-100 border-t border-slate-200">
                {course.curriculum.map((mod, idx) => (
                  <div key={idx} className="py-4">
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="font-heading font-serif text-sm font-bold text-[#111827]">
                        Module {idx + 1}: {mod.module}
                      </h3>
                      <span className="text-[11px] text-[#6B7280] font-mono">
                        {mod.duration}
                      </span>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pl-4 text-xs text-[#6B7280] list-disc">
                      {mod.topics.map((t, tIdx) => (
                        <li key={tIdx} className="leading-relaxed">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Faculty Profile */}
            {trainer && (
              <div className="border border-slate-200/80 p-6 sm:p-8 bg-white rounded-2xl shadow-sm">
                <div className="text-xs uppercase font-semibold tracking-wider text-[#047857] mb-3">
                  Lead Faculty & Programme Director
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-5">
                  <div className="w-20 h-24 bg-slate-100 rounded-xl overflow-hidden flex-shrink-0 border border-slate-200">
                    <img
                      src={trainer.photo}
                      alt={trainer.display_name}
                      className="w-full h-full object-cover filter grayscale contrast-110"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading font-serif text-lg font-bold text-[#111827]">
                      <Link href={`/trainers/${trainer.trainer_id}`} className="hover:text-[#047857] transition">
                        {trainer.display_name}
                      </Link>
                    </h3>
                    <div className="text-xs text-[#6B7280] font-medium mt-0.5">
                      {trainer.title} • {trainer.qualifications[0]}
                    </div>
                    <p className="text-xs text-[#6B7280] mt-2.5 leading-relaxed">
                      {trainer.bio}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* CPE Regulatory Disclosure */}
            <div className="p-5 bg-[#F8FAFC] border border-slate-200/80 rounded-xl text-xs text-[#6B7280] space-y-1.5">
              <div className="font-semibold text-[#111827] flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#047857]" />
                Institutional Governance & Student Protection Notice
              </div>
              <p className="leading-relaxed">
                All enrolled candidates execute a Committee for Private Education (CPE) Standard PEI-Student Contract. Course tuition fees are protected under the Lonpac Insurance Fee Protection Scheme (FPS) in compliance with the Private Education Act (Cap 247A).
              </p>
            </div>

          </div>

          {/* Admissions & Calculator Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Admissions Summary Card */}
            <div className="border border-slate-200/80 bg-white p-6 sm:p-7 rounded-2xl shadow-sm space-y-5">
              <div className="border-b border-slate-200/80 pb-3.5">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#047857] bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block">
                  Admissions Status: Open
                </span>
                <h3 className="font-heading font-serif text-lg font-bold text-[#111827] mt-2">
                  Enrolment & Intake Details
                </h3>
              </div>

              <div className="space-y-3 text-xs text-[#6B7280]">
                <div className="flex justify-between items-center">
                  <span className="text-[#6B7280]">Scheduled Time:</span>
                  <span className="font-semibold text-[#111827]">{course.schedule_time}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#6B7280]">Campus Venue:</span>
                  <span className="font-semibold text-[#111827]">{course.campus} Centre</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#6B7280]">Available Cohort Seats:</span>
                  <span className="font-semibold text-[#047857]">{course.trial_seats} Seats Remaining</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-[#6B7280]">Prerequisites:</span>
                  <span className="font-semibold text-[#111827] text-right max-w-[200px]">
                    {course.admission_requirement}
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/80 space-y-2.5">
                <Link
                  href={`/admissions?course=${course.course_id}`}
                  className="w-full btn-primary text-xs font-semibold py-3 block text-center rounded-xl"
                >
                  Apply for Programme Intake
                </Link>
                <button
                  type="button"
                  onClick={() => openTrialModal(course.course_id)}
                  className="w-full btn-secondary text-xs font-semibold py-3 rounded-xl"
                >
                  Request Academic Consultation
                </button>
              </div>

              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={() => showToast('Formal curriculum syllabus dispatched to admissions desk.', 'success')}
                  className="text-xs text-[#6B7280] hover:text-[#047857] font-medium flex items-center justify-center gap-1.5 mx-auto transition"
                >
                  <FileDown className="w-3.5 h-3.5" /> Download Full Course Syllabus (PDF)
                </button>
              </div>
            </div>

            {/* Institutional Subsidy Calculator */}
            <SkillsFutureCalculator feeSgd={standardFee} />

          </div>

        </div>

      </div>
    </div>
  );
}
