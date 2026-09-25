'use client';

import React, { useState } from 'react';
import { reviews, categories } from '@/lib/educationData';
import { useApp } from '@/context/AppContext';
import { Star, MessageSquarePlus, CheckCircle2, MessageSquare } from 'lucide-react';

export default function ReviewsPage() {
  const { showToast } = useApp();
  const [selectedCat, setSelectedCat] = useState('all');
  const [submitModalOpen, setSubmitModalOpen] = useState(false);

  // Filtered reviews
  const filtered = selectedCat === 'all'
    ? reviews.slice(0, 24)
    : reviews.filter((r) => r.category === selectedCat).slice(0, 24);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitModalOpen(false);
    showToast('Academic feedback submitted to the Quality Assurance Committee.', 'success');
  };

  return (
    <div className="py-12 sm:py-16 bg-white min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Institutional Header */}
        <div className="border-b border-slate-200 pb-8 mb-10">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#047857] flex items-center gap-2">
            <MessageSquare className="w-3.5 h-3.5 text-[#047857]" />
            Quality Assurance & Student Voice
          </div>
          <h1 className="font-heading font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mt-2">
            Academic Evaluations & Alumni Testimonials
          </h1>
          <p className="text-sm text-[#6B7280] max-w-3xl mt-2 leading-relaxed">
            Independent evaluations and verified testimonials submitted by executive candidates, statutory board officers, and scholars across our academic faculties.
          </p>
        </div>

        {/* Aggregate Ratings Institutional Box */}
        <div className="border border-slate-200/80 p-6 sm:p-8 bg-[#F8FAFC] max-w-4xl mx-auto mb-10 rounded-2xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="text-center sm:text-left">
            <div className="text-xs uppercase font-semibold text-[#6B7280] tracking-wider">
              Institutional Quality Benchmark
            </div>
            <div className="text-4xl sm:text-5xl font-bold font-serif text-[#111827] mt-1">
              4.91 <span className="text-sm text-[#6B7280] font-sans font-normal">/ 5.0 Rating</span>
            </div>
            <div className="text-[#D97706] text-sm mt-1">★★★★★</div>
            <div className="text-xs text-[#6B7280] mt-1">
              Derived from 200 audited course feedback submissions
            </div>
          </div>

          <div className="flex-1 w-full max-w-xs space-y-1.5 text-xs">
            <div className="flex items-center justify-between text-[#6B7280]">
              <span>Distinction / Excellent (5★)</span>
              <span className="font-semibold text-[#111827]">92%</span>
            </div>
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div className="bg-[#047857] h-full rounded-full" style={{ width: '92%' }}></div>
            </div>

            <div className="flex items-center justify-between text-[#6B7280] pt-1">
              <span>Commendable / Good (4★)</span>
              <span className="font-semibold text-[#111827]">7%</span>
            </div>
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div className="bg-[#D97706] h-full rounded-full" style={{ width: '7%' }}></div>
            </div>
          </div>

          <div>
            <button
              onClick={() => setSubmitModalOpen(true)}
              className="btn-primary text-xs font-semibold px-5 py-3 rounded-xl shadow-sm"
            >
              Submit Course Feedback
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10 text-xs">
          <button
            onClick={() => setSelectedCat('all')}
            className={`px-4 py-2 rounded-xl font-medium transition ${
              selectedCat === 'all'
                ? 'bg-[#047857] text-white shadow-sm'
                : 'bg-[#F8FAFC] text-[#6B7280] hover:text-[#111827] border border-slate-200'
            }`}
          >
            All Academic Disciplines
          </button>
          {Object.keys(categories).map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCat(c)}
              className={`px-4 py-2 rounded-xl font-medium transition ${
                selectedCat === c
                  ? 'bg-[#047857] text-white shadow-sm'
                  : 'bg-[#F8FAFC] text-[#6B7280] hover:text-[#111827] border border-slate-200'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((rev) => (
            <div key={rev.review_id} className="border border-slate-200/80 p-6 sm:p-7 flex flex-col justify-between bg-white rounded-2xl shadow-sm hover:shadow-md transition">
              <div>
                <div className="flex items-center justify-between text-xs mb-3.5">
                  <span className="text-[#D97706]">★★★★★</span>
                  <span className="text-[10px] font-mono text-[#6B7280]">{rev.date}</span>
                </div>

                <p className="text-xs text-[#111827] italic leading-relaxed mb-5">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-3.5 border-t border-slate-100">
                <div className="font-heading font-serif text-sm font-bold text-[#111827]">
                  {rev.student_name}
                </div>
                <div className="text-[11px] text-[#047857] font-medium mt-0.5">
                  {rev.course_name}
                </div>
                <div className="text-[10px] text-[#6B7280] mt-0.5">
                  Accredited Cohort • {rev.campus}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feedback Submission Modal */}
        {submitModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
            <div className="bg-white border border-slate-200 p-6 sm:p-8 max-w-lg w-full rounded-2xl shadow-xl space-y-4">
              <div className="border-b border-slate-200 pb-3.5">
                <h3 className="font-heading font-serif text-xl font-bold text-[#111827]">
                  Submit Official Course Feedback
                </h3>
                <p className="text-xs text-[#6B7280] mt-1">
                  Evaluations are compiled anonymously for academic accreditation audits.
                </p>
              </div>

              <form onSubmit={handleReviewSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-[11px] font-semibold text-[#111827] uppercase mb-1.5">
                    Student / Alumni Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rachel Tan"
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-[#047857] text-[#111827]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#111827] uppercase mb-1.5">
                    Curriculum Completed
                  </label>
                  <select className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-[#047857] text-[#111827]">
                    {Object.keys(categories).map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#111827] uppercase mb-1.5">
                    Qualitative Feedback & Assessment
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Share your perspective on curriculum rigor, faculty instruction, and facility standards..."
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-[#047857] text-[#111827]"
                  />
                </div>

                <div className="pt-3 flex items-center justify-end gap-2.5">
                  <button
                    type="button"
                    onClick={() => setSubmitModalOpen(false)}
                    className="btn-secondary btn-sm text-xs rounded-xl"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn-primary btn-sm text-xs rounded-xl shadow-sm">
                    Submit Evaluation
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
