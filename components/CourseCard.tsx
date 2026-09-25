'use client';

import React from 'react';
import Link from 'next/link';
import { Course, getTrainerById } from '@/lib/educationData';
import { Clock, MapPin, ChevronRight, Award, UserCheck } from 'lucide-react';

export default function CourseCard({ course }: { course: Course }) {
  const trainer = getTrainerById(course.trainer_id);
  const standardFee = Math.max(course.fee_sgd, 1950);

  return (
    <div className="inst-card flex flex-col bg-white overflow-hidden group hover:border-[#CBD5E1] transition-all duration-200 rounded-[14px]">
      
      {/* Visual Photography Container - Clean and clear */}
      <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
        <Link href={`/courses/${course.course_id}`}>
          <img
            src={course.image}
            alt={course.course_name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </Link>
        
        {/* Discrete Top Badge */}
        <div className="absolute top-3 right-3">
          <span className="bg-[#111827]/90 text-white font-medium px-2.5 py-1 rounded-md border border-white/20 text-[10px] flex items-center gap-1 shadow-sm backdrop-blur-sm">
            <Award className="w-3 h-3 text-[#FACC15]" /> CPE Accredited
          </span>
        </div>
      </div>

      {/* Structured Editorial Content BELOW the photo */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Metadata Row: Category, Campus, Duration */}
          <div className="flex flex-wrap items-center justify-between text-[11px] text-[#6B7280] mb-3 gap-2">
            <span className="text-[#047857] font-semibold bg-[#ECFDF5] px-2.5 py-0.5 rounded text-[10px] uppercase tracking-wide">
              {course.category}
            </span>
            <div className="flex items-center gap-2.5 text-[11px] text-[#6B7280]">
              <span className="flex items-center gap-1 font-medium text-[#111827]">
                <MapPin className="w-3 h-3 text-[#D97706]" /> {course.campus}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 font-medium text-[#111827]">
                <Clock className="w-3 h-3 text-[#047857]" /> {course.duration_weeks} Wks
              </span>
            </div>
          </div>

          {/* Academic Course Title */}
          <h3 className="font-heading font-serif text-lg font-bold text-[#111827] group-hover:text-[#047857] transition-colors leading-snug mb-2 line-clamp-2">
            <Link href={`/courses/${course.course_id}`}>
              {course.course_name}
            </Link>
          </h3>

          {/* Academic Overview */}
          <p className="text-xs text-[#6B7280] line-clamp-2 leading-relaxed mb-4">
            {course.overview}
          </p>

          {/* Lead Trainer */}
          {trainer && (
            <div className="flex items-center gap-2.5 pt-3 border-t border-[#F1F5F9] text-xs">
              <div className="w-7 h-7 rounded-full overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-200">
                <img
                  src={trainer.photo}
                  alt={trainer.display_name}
                  className="w-full h-full object-cover filter grayscale"
                />
              </div>
              <div className="text-[11px] truncate">
                <span className="text-[#6B7280]">Convened by </span>
                <span className="font-medium text-[#111827]">{trainer.display_name}</span>
              </div>
            </div>
          )}
        </div>

        {/* Tuition Fee & Action Link */}
        <div className="pt-4 border-t border-[#E5E7EB] flex items-end justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-[#6B7280]">Standard Tuition</div>
            <div className="text-base font-bold font-serif text-[#111827]">
              SGD ${standardFee.toLocaleString()}
            </div>
            <div className="text-[11px] text-[#047857] font-semibold mt-0.5">
              SkillsFuture Grant Eligible
            </div>
          </div>

          <Link
            href={`/courses/${course.course_id}`}
            className="btn-primary btn-sm text-xs font-semibold rounded-xl"
          >
            View Syllabus <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>

    </div>
  );
}
