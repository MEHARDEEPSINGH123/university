'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { courses, categories, campuses } from '@/lib/educationData';
import CourseCard from '@/components/CourseCard';
import { Search, RotateCcw, Filter, BookOpen } from 'lucide-react';

function CoursesContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const initialFormat = searchParams.get('format') || 'all';
  const initialSearch = searchParams.get('q') || '';

  const [search, setSearch] = useState(initialSearch);
  const [category, setCategory] = useState(initialCategory);
  const [format, setFormat] = useState(initialFormat);
  const [campus, setCampus] = useState('all');
  const [duration, setDuration] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredCourses = useMemo(() => {
    let list = [...courses];

    // Search query
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (c) =>
          c.course_name.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q) ||
          c.campus.toLowerCase().includes(q) ||
          c.course_id.toLowerCase().includes(q)
      );
    }

    // Category
    if (category !== 'all') {
      list = list.filter((c) => c.category === category);
    }

    // Format
    if (format !== 'all') {
      list = list.filter((c) => c.format.toLowerCase() === format.toLowerCase());
    }

    // Campus
    if (campus !== 'all') {
      list = list.filter((c) => c.campus === campus);
    }

    // Duration
    if (duration !== 'all') {
      if (duration === 'short') list = list.filter((c) => c.duration_weeks <= 6);
      else if (duration === 'medium')
        list = list.filter((c) => c.duration_weeks >= 7 && c.duration_weeks <= 10);
      else if (duration === 'long')
        list = list.filter((c) => c.duration_weeks > 10);
    }

    // Sort
    if (sortBy === 'fee-asc') {
      list.sort((a, b) => a.fee_sgd - b.fee_sgd);
    } else if (sortBy === 'fee-desc') {
      list.sort((a, b) => b.fee_sgd - a.fee_sgd);
    } else if (sortBy === 'duration') {
      list.sort((a, b) => a.duration_weeks - b.duration_weeks);
    } else if (sortBy === 'rating') {
      list.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    }

    return list;
  }, [search, category, format, campus, duration, sortBy]);

  const handleReset = () => {
    setSearch('');
    setCategory('all');
    setFormat('all');
    setCampus('all');
    setDuration('all');
    setSortBy('featured');
  };

  return (
    <div className="py-12 sm:py-16 bg-white min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Institutional Header */}
        <div className="border-b border-slate-200 pb-8 mb-8">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#047857] flex items-center gap-2">
            <BookOpen className="w-3.5 h-3.5 text-[#047857]" />
            Academic Registry & Curriculum Directory
          </div>
          <h1 className="font-heading font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mt-2">
            Academic Programmes & Executive Curricula
          </h1>
          <p className="text-sm text-[#6B7280] max-w-3xl mt-2 leading-relaxed">
            Explore accredited executive certificates, professional diplomas, and preparatory tuition curricula administered under the governance of the Academic Board across our 10 Singapore academic centres.
          </p>
        </div>

        {/* Clean Structured Filter Grid */}
        <div className="bg-[#F8FAFC] border border-slate-200/80 p-6 rounded-2xl shadow-sm mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            
            {/* Search Input */}
            <div className="lg:col-span-2">
              <label className="block text-[11px] font-semibold text-[#111827] uppercase tracking-wider mb-1.5">
                Programme Search
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by title, discipline, or code (e.g. CR006)..."
                  className="w-full pl-9 pr-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#047857] focus:ring-1 focus:ring-[#047857] transition text-[#111827]"
                />
                <Search className="w-4 h-4 text-[#6B7280] absolute left-3 top-3" />
              </div>
            </div>

            {/* Discipline Selector */}
            <div>
              <label className="block text-[11px] font-semibold text-[#111827] uppercase tracking-wider mb-1.5">
                Academic Discipline
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#047857] focus:ring-1 focus:ring-[#047857] transition text-[#111827]"
              >
                <option value="all">All Disciplines ({courses.length})</option>
                {Object.keys(categories).map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Format Selector */}
            <div>
              <label className="block text-[11px] font-semibold text-[#111827] uppercase tracking-wider mb-1.5">
                Delivery Format
              </label>
              <select
                value={format}
                onChange={(e) => setFormat(e.target.value)}
                className="w-full px-3 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#047857] focus:ring-1 focus:ring-[#047857] transition text-[#111827]"
              >
                <option value="all">All Formats</option>
                <option value="On-Campus">On-Campus</option>
                <option value="Online">Online Live</option>
                <option value="Hybrid">Executive Hybrid</option>
                <option value="Weekend">Weekend</option>
                <option value="Evening">Evening</option>
              </select>
            </div>

            {/* Campus Selector */}
            <div>
              <label className="block text-[11px] font-semibold text-[#111827] uppercase tracking-wider mb-1.5">
                Campus Location
              </label>
              <select
                value={campus}
                onChange={(e) => setCampus(e.target.value)}
                className="w-full px-3 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#047857] focus:ring-1 focus:ring-[#047857] transition text-[#111827]"
              >
                <option value="all">All 10 Campuses</option>
                {campuses.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

          </div>

          <div className="mt-5 pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="text-[#6B7280] font-medium">
              Showing <span className="font-bold text-[#111827]">{filteredCourses.length}</span> of {courses.length} accredited curricula
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-[#6B7280] text-[11px]">Sort By:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-2.5 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-[#047857] text-[#111827]"
                >
                  <option value="featured">Featured Curricula</option>
                  <option value="rating">Academic Rating</option>
                  <option value="duration">Duration (Weeks)</option>
                  <option value="fee-asc">Tuition (Low to High)</option>
                  <option value="fee-desc">Tuition (High to Low)</option>
                </select>
              </div>

              {(search || category !== 'all' || format !== 'all' || campus !== 'all' || duration !== 'all' || sortBy !== 'featured') && (
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1.5 text-xs text-[#047857] hover:text-[#047857]/80 font-semibold"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Reset Filters
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Results Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.course_id} course={course} />
            ))}
          </div>
        ) : (
          <div className="p-16 text-center bg-[#F8FAFC] border border-slate-200/80 rounded-2xl">
            <h3 className="font-heading font-serif text-lg font-bold text-[#111827]">
              No matching curricula found
            </h3>
            <p className="text-xs text-[#6B7280] mt-1.5 max-w-sm mx-auto">
              Please adjust your search criteria or discipline filter to view accredited offerings.
            </p>
            <button
              onClick={handleReset}
              className="mt-5 btn-secondary btn-sm text-xs font-semibold rounded-xl"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default function CoursesPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-xs text-[#6B7280]">Loading academic catalog...</div>}>
      <CoursesContent />
    </Suspense>
  );
}
