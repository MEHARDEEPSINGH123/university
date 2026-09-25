'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { campuses } from '@/lib/educationData';
import { useApp } from '@/context/AppContext';
import { MapPin, Phone, Mail, Clock, Building, Send } from 'lucide-react';

function ContactContent() {
  const searchParams = useSearchParams();
  const initialInquiry = searchParams.get('inquiry') || '';
  const { showToast } = useApp();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedCampus, setSelectedCampus] = useState('Orchard');
  const [message, setMessage] = useState(initialInquiry);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast(
      'Your inquiry has been submitted to the Office of the Registrar. A formal reply will be issued within one business day.',
      'success'
    );
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <div className="py-12 sm:py-16 bg-white min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Institutional Header */}
        <div className="border-b border-slate-200 pb-8 mb-10">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#047857] flex items-center gap-2">
            <Building className="w-3.5 h-3.5 text-[#047857]" />
            Institutional Coordinates
          </div>
          <h1 className="font-heading font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mt-2">
            Campus Facilities & Admissions Registry
          </h1>
          <p className="text-sm text-[#6B7280] max-w-3xl mt-2 leading-relaxed">
            Ten executive learning and academic preparatory centres strategically situated adjacent to major MRT transit interchanges across Singapore. Admissions offices are open Mondays through Fridays, 09:00 to 18:00 SGT.
          </p>
        </div>

        {/* Form & Support Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="border border-slate-200/80 p-6 sm:p-10 bg-white rounded-2xl shadow-sm">
              <h2 className="font-heading font-serif text-2xl font-bold text-[#111827] mb-1">
                Official Academic Inquiry Form
              </h2>
              <p className="text-xs text-[#6B7280] mb-8">
                Direct your questions regarding admission eligibility, curriculum syllabi, or corporate sponsorship to the Admissions Registry.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#111827] uppercase tracking-wider mb-1.5">
                      Full Name (NRIC / Passport) *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Dr. / Mr. / Ms. Tan Wei Ming"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#047857] text-[#111827] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#111827] uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@domain.com"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#047857] text-[#111827] transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#111827] uppercase tracking-wider mb-1.5">
                      Telephone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+65 9123 4567"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#047857] text-[#111827] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#111827] uppercase tracking-wider mb-1.5">
                      Target Campus Hub
                    </label>
                    <select
                      value={selectedCampus}
                      onChange={(e) => setSelectedCampus(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#047857] text-[#111827] transition"
                    >
                      {campuses.map((c) => (
                        <option key={c.id} value={c.name}>
                          {c.name} ({c.mrt} MRT)
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#111827] uppercase tracking-wider mb-1.5">
                    Nature of Inquiry & Academic Objectives *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="State details regarding course prerequisites, corporate invoicing, or appointment booking..."
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#047857] text-[#111827] transition"
                  />
                </div>

                <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-[10px] text-[#6B7280]">
                    Compliant with the Singapore Personal Data Protection Act (PDPA).
                  </span>
                  <button type="submit" className="btn-primary text-xs font-semibold px-7 py-3 rounded-xl shadow-sm">
                    Submit Inquiry to Registry
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Institutional Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border border-slate-200/80 p-6 sm:p-7 bg-[#F8FAFC] rounded-2xl shadow-sm space-y-4">
              <h3 className="font-heading font-serif text-lg font-bold text-[#111827]">
                Principal Campus & Headquarters
              </h3>
              <div className="space-y-4 text-xs text-[#6B7280]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#047857] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-[#111827]">Somerset Flagship Executive Centre</div>
                    <div>111 Somerset Road, #10-01 TripleOne Somerset, Singapore 238164</div>
                    <div className="text-[11px] text-[#6B7280] mt-0.5">Direct sheltered link to Somerset MRT (NS23, Exit A)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#047857] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-[#111827]">Admissions Central Hotline</div>
                    <div>+65 6732 8888 (Mondays to Fridays, 09:00 – 18:00 SGT)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#047857] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-[#111827]">Electronic Correspondence</div>
                    <div>admissions@apex.edu.sg (General Admissions)</div>
                    <div>executive@apex.edu.sg (Corporate Enterprise)</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-white border border-slate-200/80 rounded-2xl shadow-sm text-xs text-[#6B7280] space-y-1.5">
              <div className="font-semibold text-[#111827]">Committee for Private Education Disclosures</div>
              <p className="text-[11px] leading-relaxed">
                Registered Private Education Institution under the Private Education Act (Cap 247A). Registration Period: 15 July 2022 to 14 July 2026. UEN: 201829481E. Lonpac Insurance Fee Protection Scheme (FPS).
              </p>
            </div>
          </div>

        </div>

        {/* 10 Campus Hubs Directory */}
        <div>
          <div className="border-b border-slate-200 pb-4 mb-8">
            <h2 className="font-heading font-serif text-2xl font-bold text-[#111827]">
              Directory of All 10 Singapore Campus Facilities
            </h2>
            <p className="text-xs text-[#6B7280] mt-1">
              Equipped with executive seminar boardrooms, high-performance computing labs, and quiet study suites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campuses.map((campus) => (
              <div key={campus.id} className="border border-slate-200/80 p-6 bg-white rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition">
                <div>
                  <div className="flex items-center justify-between text-xs mb-2.5">
                    <span className="font-mono text-[10px] text-[#6B7280] uppercase">
                      CAMPUS CODE: {campus.id}
                    </span>
                    <span className="text-[10px] font-semibold text-[#047857] bg-emerald-50 px-2.5 py-0.5 rounded-full">
                      {campus.type}
                    </span>
                  </div>

                  <h3 className="font-heading font-serif text-base font-bold text-[#111827] mb-1">
                    {campus.name}
                  </h3>

                  <div className="text-xs text-[#6B7280] space-y-1.5 mt-2.5">
                    <div className="flex items-start gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#D97706] flex-shrink-0 mt-0.5" />
                      <span>{campus.address}</span>
                    </div>
                    <div className="pl-5 text-[#6B7280]">
                      MRT: <strong className="text-[#111827]">{campus.mrt} Station</strong>
                    </div>
                    <div className="pl-5 text-[#6B7280]">
                      Telephone: {campus.phone}
                    </div>
                    <div className="pl-5 text-[#6B7280]">
                      Operating Hours: {campus.hours}
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[#6B7280] text-[11px]">{campus.email}</span>
                  <a
                    href={`tel:${campus.phone.replace(/[^0-9+]/g, '')}`}
                    className="font-semibold text-[#047857] hover:underline"
                  >
                    Direct Line
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-xs text-[#6B7280]">Loading campus directory...</div>}>
      <ContactContent />
    </Suspense>
  );
}
