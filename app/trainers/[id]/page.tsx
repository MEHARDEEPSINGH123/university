'use client';

import React from 'react';
import Link from 'next/link';
import { getTrainerById, courses, reviews } from '@/lib/educationData';
import { ArrowLeft, Award, BookOpen, Clock, MapPin, CheckCircle2 } from 'lucide-react';

export default function TrainerDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const trainer = getTrainerById(id);

  if (!trainer) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4 text-center">
        <h2 className="text-2xl font-bold font-heading text-[#111827] mb-2">Faculty Member Not Found</h2>
        <p className="text-[#6B7280] mb-6">The requested faculty profile does not exist.</p>
        <Link href="/trainers" className="btn-primary btn-sm rounded-xl">
          Return to Faculty Directory
        </Link>
      </div>
    );
  }

  const taughtCourses = courses.filter((c) => c.trainer_id === trainer.trainer_id);
  const facultyReviews = reviews.filter((r) => r.category === trainer.specialization).slice(0, 4);

  return (
    <div className="py-12 sm:py-16 bg-white min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Back Navigation */}
        <Link
          href="/trainers"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#6B7280] hover:text-[#047857] transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Faculty Directory
        </Link>

        {/* Profile Card Header */}
        <div className="border border-slate-200/80 p-8 sm:p-10 bg-white rounded-2xl shadow-sm">
          <div className="flex flex-col sm:flex-row items-start gap-6 pb-8 border-b border-slate-200/80">
            <div className="w-32 h-40 bg-slate-100 rounded-xl overflow-hidden flex-shrink-0 border border-slate-200">
              <img
                src={trainer.photo}
                alt={trainer.full_name}
                className="w-full h-full object-cover filter grayscale contrast-110"
              />
            </div>

            <div className="flex-1">
              <div className="text-xs font-mono uppercase text-[#047857] font-semibold tracking-wider">
                {trainer.specialization}
              </div>
              <h1 className="font-heading font-serif text-2xl sm:text-4xl font-bold text-[#111827] mt-1">
                {trainer.full_name}
              </h1>
              <div className="text-xs text-[#6B7280] font-medium mt-1">{trainer.title}</div>
              
              <div className="flex flex-wrap items-center gap-4 mt-4 text-xs text-[#6B7280]">
                <span className="font-semibold text-[#111827]">{trainer.experience_years}+ Years Pedagogy & Research</span>
                <span className="text-slate-300">•</span>
                <span>{trainer.students_count}+ Scholars Mentored</span>
                <span className="text-slate-300">•</span>
                <span className="text-[#047857] font-medium">Evaluation: {trainer.rating} / 5.0</span>
              </div>
            </div>

            <Link
              href={`/contact?inquiry=${encodeURIComponent(`Academic consultation with ${trainer.full_name}`)}`}
              className="btn-primary text-xs font-medium rounded-xl px-5 py-2.5"
            >
              Academic Consultation
            </Link>
          </div>

          <div className="py-8 space-y-8">
            
            {/* Biography */}
            <div>
              <h2 className="font-heading font-serif text-xl font-bold text-[#111827] mb-3">
                Faculty Biography & Pedagogical Background
              </h2>
              <p className="text-sm text-[#6B7280] leading-relaxed max-w-4xl">
                {trainer.bio}
              </p>
            </div>

            {/* Qualifications & Degrees */}
            <div>
              <h2 className="font-heading font-serif text-xl font-bold text-[#111827] mb-3">
                Academic Degrees & Credentials
              </h2>
              <div className="flex flex-wrap gap-2">
                {trainer.qualifications.map((q, idx) => (
                  <span key={idx} className="bg-[#F8FAFC] border border-slate-200 text-[#111827] text-xs py-1.5 px-3.5 rounded-lg font-medium">
                    ✓ {q}
                  </span>
                ))}
              </div>
            </div>

            {/* Curricula Convened */}
            <div>
              <h2 className="font-heading font-serif text-xl font-bold text-[#111827] mb-4">
                Curricula & Modules Convened by {trainer.display_name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {taughtCourses.map((c) => (
                  <div key={c.course_id} className="border border-slate-200/80 p-5 bg-white rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition">
                    <div>
                      <div className="text-[10px] font-mono text-[#6B7280] uppercase mb-1">
                        CODE: {c.course_id}
                      </div>
                      <h3 className="font-heading font-serif text-sm font-bold text-[#111827] mb-2">
                        <Link href={`/courses/${c.course_id}`} className="hover:text-[#047857] transition">
                          {c.course_name}
                        </Link>
                      </h3>
                      <p className="text-xs text-[#6B7280] line-clamp-2 mb-3 leading-relaxed">
                        {c.overview}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#6B7280]">
                      <span>{c.duration_weeks} Weeks</span>
                      <Link href={`/courses/${c.course_id}`} className="font-semibold text-[#047857] hover:underline">
                        Syllabus →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
