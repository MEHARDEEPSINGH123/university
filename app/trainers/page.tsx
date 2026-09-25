'use client';

import React from 'react';
import Link from 'next/link';
import { trainers, courses } from '@/lib/educationData';
import { GraduationCap, Award, BookOpen, ChevronRight } from 'lucide-react';

export default function TrainersPage() {
  return (
    <div className="py-12 sm:py-16 bg-white min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Institutional Header */}
        <div className="border-b border-slate-200 pb-8 mb-10">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#047857] flex items-center gap-2">
            <GraduationCap className="w-3.5 h-3.5 text-[#047857]" />
            Academic Registry
          </div>
          <h1 className="font-heading font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mt-2">
            Academic Faculty & Research Fellows
          </h1>
          <p className="text-sm text-[#6B7280] max-w-3xl mt-2 leading-relaxed">
            Our faculty body comprises 30 distinguished doctoral scholars, former national curriculum directors, and senior enterprise practitioners holding appointments across our academic faculties.
          </p>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainers.map((t) => {
            const taughtCount = courses.filter((c) => c.trainer_id === t.trainer_id).length;
            return (
              <div
                key={t.trainer_id}
                className="inst-card p-6 sm:p-7 flex flex-col justify-between bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-20 h-24 bg-slate-100 rounded-xl overflow-hidden flex-shrink-0 border border-slate-200">
                      <img
                        src={t.photo}
                        alt={t.full_name}
                        className="w-full h-full object-cover filter grayscale contrast-110"
                      />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-[#047857] font-semibold tracking-wider">
                        {t.specialization}
                      </div>
                      <h2 className="font-heading font-serif text-base font-bold text-[#111827] mt-1 leading-snug">
                        <Link href={`/trainers/${t.trainer_id}`} className="hover:text-[#047857] transition">
                          {t.full_name}
                        </Link>
                      </h2>
                      <div className="text-[11px] text-[#6B7280] font-medium mt-0.5">
                        {t.title}
                      </div>
                      <div className="text-[10px] text-[#111827] mt-1.5 bg-[#F8FAFC] px-2 py-0.5 rounded-md border border-slate-200 inline-block font-medium">
                        {t.qualifications[0]}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-[#6B7280] line-clamp-3 mb-5 leading-relaxed">
                    {t.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-[#6B7280]">
                  <span className="text-[11px] font-medium text-[#111827]">{t.experience_years}+ Years Pedagogy</span>
                  <Link
                    href={`/trainers/${t.trainer_id}`}
                    className="font-semibold text-[#047857] hover:text-[#047857]/80 flex items-center gap-1 transition"
                  >
                    View Faculty Profile <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
