'use client';

import React from 'react';
import Link from 'next/link';
import { courses, getTrainerById } from '@/lib/educationData';
import { useApp } from '@/context/AppContext';
import { Calendar, Clock, MapPin, Users, BookOpen } from 'lucide-react';

export default function TrialClassesPage() {
  const { openTrialModal } = useApp();

  const intakeBatches = courses.slice(0, 15).map((c, i) => ({
    course: c,
    seats: c.trial_seats,
    date: `Cohort Term ${i + 1} • Saturday Session`,
    time: c.schedule_time,
  }));

  return (
    <div className="py-12 sm:py-16 bg-white min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Institutional Header */}
        <div className="border-b border-slate-200 pb-8 mb-10">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#047857] flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-[#047857]" />
            Academic Calendar & Public Seminars
          </div>
          <h1 className="font-heading font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mt-2">
            Academic Intake Calendar & Masterclasses
          </h1>
          <p className="text-sm text-[#6B7280] max-w-3xl mt-2 leading-relaxed">
            Prospective candidates and corporate sponsors may reserve admission to scheduled introductory seminars and faculty academic consultations across our Singapore campuses prior to formal matriculation.
          </p>
        </div>

        {/* Structured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {intakeBatches.map((tc) => {
            const trainer = getTrainerById(tc.course.trainer_id);
            return (
              <div
                key={tc.course.course_id}
                className="border border-slate-200/80 p-6 sm:p-7 flex flex-col justify-between bg-white rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-3.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#6B7280]">
                      {tc.course.course_id}
                    </span>
                    <span className="text-[10px] font-semibold text-[#047857] bg-emerald-50 px-2.5 py-0.5 rounded-full">
                      {tc.seats} Seminar Seats Available
                    </span>
                  </div>

                  <h3 className="font-heading font-serif text-base font-bold text-[#111827] mb-2 leading-snug">
                    <Link href={`/courses/${tc.course.course_id}`} className="hover:text-[#047857] transition">
                      {tc.course.course_name}
                    </Link>
                  </h3>

                  <div className="space-y-2 text-xs text-[#6B7280] mb-5 pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#6B7280]" />
                      <span>{tc.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#6B7280]" />
                      <span>{tc.course.campus} Centre</span>
                    </div>
                    {trainer && (
                      <div className="text-[11px] text-[#6B7280] pt-1">
                        Convened by: <span className="font-medium text-[#111827]">{trainer.display_name}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/courses/${tc.course.course_id}`}
                    className="text-xs text-[#6B7280] hover:text-[#111827] font-medium transition"
                  >
                    View Syllabus
                  </Link>
                  <button
                    onClick={() => openTrialModal(tc.course.course_id)}
                    className="btn-primary btn-sm text-xs font-semibold rounded-xl"
                  >
                    Reserve Seminar Seat
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
