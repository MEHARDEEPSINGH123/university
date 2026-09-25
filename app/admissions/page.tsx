'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { courses } from '@/lib/educationData';
import { useApp } from '@/context/AppContext';
import { CheckCircle2, ShieldCheck, FileText, Building, Check, ArrowRight } from 'lucide-react';

function AdmissionsContent() {
  const searchParams = useSearchParams();
  const preselectedCourse = searchParams.get('course') || '';
  const { showToast } = useApp();

  const [fullName, setFullName] = useState('');
  const [nricPassport, setNricPassport] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [profileType, setProfileType] = useState('adult');
  const [selectedCourse, setSelectedCourse] = useState(preselectedCourse);
  const [format, setFormat] = useState('On-Campus');
  const [intake, setIntake] = useState('oct-2026');
  const [skillsfutureClaim, setSkillsfutureClaim] = useState(true);
  const [utapClaim, setUtapClaim] = useState(false);
  const [contractAgreed, setContractAgreed] = useState(false);

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contractAgreed) {
      showToast('Please acknowledge the CPE Student Contract declaration before submitting.', 'warning');
      return;
    }
    const ref = `SG-APX-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedRef(ref);
    showToast(`Admissions application ${ref} logged with the Registrar.`, 'success');
  };

  const currentCourseObj = courses.find((c) => c.course_id === selectedCourse);

  return (
    <div className="py-12 sm:py-16 bg-white min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Institutional Header */}
        <div className="border-b border-slate-200 pb-8 mb-10">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#047857] flex items-center gap-2">
            <FileText className="w-3.5 h-3.5 text-[#047857]" />
            Office of the Registrar
          </div>
          <h1 className="font-heading font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mt-2">
            Admissions, Enrolment & Statutory Grants
          </h1>
          <p className="text-sm text-[#6B7280] max-w-3xl mt-2 leading-relaxed">
            Official matriculation portal for candidates seeking entry into accredited executive diplomas, professional certificates, and academic preparatory cohorts under CPE and SkillsFuture Singapore statutory governance.
          </p>
        </div>

        {/* 4-Step Formal Admissions Journey */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          <div className="border border-slate-200/80 p-6 bg-white rounded-2xl shadow-sm">
            <div className="text-[11px] font-mono font-semibold text-[#047857] mb-1.5">STAGE 01</div>
            <h2 className="font-heading font-serif text-base font-bold text-[#111827] mb-1">Application Submission</h2>
            <p className="text-xs text-[#6B7280] leading-relaxed">Provide official particulars, target curriculum, and preferred campus schedule.</p>
          </div>
          <div className="border border-slate-200/80 p-6 bg-white rounded-2xl shadow-sm">
            <div className="text-[11px] font-mono font-semibold text-[#047857] mb-1.5">STAGE 02</div>
            <h2 className="font-heading font-serif text-base font-bold text-[#111827] mb-1">Prerequisite Review</h2>
            <p className="text-xs text-[#6B7280] leading-relaxed">Academic Board assesses tertiary credentials or professional portfolio.</p>
          </div>
          <div className="border border-slate-200/80 p-6 bg-white rounded-2xl shadow-sm">
            <div className="text-[11px] font-mono font-semibold text-[#047857] mb-1.5">STAGE 03</div>
            <h2 className="font-heading font-serif text-base font-bold text-[#111827] mb-1">CPE Contract & FPS</h2>
            <p className="text-xs text-[#6B7280] leading-relaxed">Execution of Standard PEI-Student Contract and Fee Protection issuance.</p>
          </div>
          <div className="border border-slate-200/80 p-6 bg-white rounded-2xl shadow-sm">
            <div className="text-[11px] font-mono font-semibold text-[#047857] mb-1.5">STAGE 04</div>
            <h2 className="font-heading font-serif text-base font-bold text-[#111827] mb-1">Matriculation</h2>
            <p className="text-xs text-[#6B7280] leading-relaxed">Dispatch of academic student portal credentials and seminar timetable.</p>
          </div>
        </div>

        {/* Form and Guide Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Application Form */}
          <div className="lg:col-span-8">
            <div className="border border-slate-200/80 p-6 sm:p-10 bg-white rounded-2xl shadow-sm">
              
              {!submittedRef ? (
                <>
                  <div className="border-b border-slate-200/80 pb-5 mb-8">
                    <h3 className="font-heading font-serif text-2xl font-bold text-[#111827]">
                      Formal Application for Programme Enrolment
                    </h3>
                    <p className="text-xs text-[#6B7280] mt-1.5">
                      Complete this official Singapore student application form. All submissions are processed in strict confidence.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Particulars */}
                    <div className="space-y-4">
                      <div className="text-xs font-semibold uppercase tracking-wider text-[#047857] border-b border-slate-100 pb-1.5">
                        1. Candidate Identification
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-semibold text-[#111827] uppercase tracking-wider mb-1.5">
                            Full Legal Name (as per NRIC / Passport) *
                          </label>
                          <input
                            type="text"
                            required
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="e.g. Tan Wei Ming"
                            className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#047857] focus:ring-1 focus:ring-[#047857] transition text-[#111827]"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-semibold text-[#111827] uppercase tracking-wider mb-1.5">
                            NRIC / FIN / Passport Number *
                          </label>
                          <input
                            type="text"
                            required
                            value={nricPassport}
                            onChange={(e) => setNricPassport(e.target.value)}
                            placeholder="e.g. SXXXX123A"
                            className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#047857] focus:ring-1 focus:ring-[#047857] transition text-[#111827]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                            className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#047857] focus:ring-1 focus:ring-[#047857] transition text-[#111827]"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-semibold text-[#111827] uppercase tracking-wider mb-1.5">
                            Mobile Contact (Singapore +65) *
                          </label>
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+65 9123 4567"
                            className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#047857] focus:ring-1 focus:ring-[#047857] transition text-[#111827]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Programme Selection */}
                    <div className="space-y-4">
                      <div className="text-xs font-semibold uppercase tracking-wider text-[#047857] border-b border-slate-100 pb-1.5">
                        2. Curriculum & Term Selection
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-[#111827] uppercase tracking-wider mb-1.5">
                          Accredited Curriculum of Choice *
                        </label>
                        <select
                          required
                          value={selectedCourse}
                          onChange={(e) => setSelectedCourse(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#047857] focus:ring-1 focus:ring-[#047857] transition text-[#111827]"
                        >
                          <option value="">Select an accredited programme...</option>
                          {courses.map((c) => (
                            <option key={c.course_id} value={c.course_id}>
                              [{c.course_id}] {c.course_name} — {c.campus} ({c.format})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-semibold text-[#111827] uppercase tracking-wider mb-1.5">
                            Delivery Format Preference
                          </label>
                          <select
                            value={format}
                            onChange={(e) => setFormat(e.target.value)}
                            className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#047857] focus:ring-1 focus:ring-[#047857] transition text-[#111827]"
                          >
                            <option value="On-Campus">On-Campus Physical Seminar</option>
                            <option value="Online">Online Synchronous Seminar</option>
                            <option value="Hybrid">Executive Hybrid</option>
                            <option value="Weekend">Weekend Intensive</option>
                            <option value="Evening">Executive Evening</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-[11px] font-semibold text-[#111827] uppercase tracking-wider mb-1.5">
                            Commencement Intake Term
                          </label>
                          <select
                            value={intake}
                            onChange={(e) => setIntake(e.target.value)}
                            className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#047857] focus:ring-1 focus:ring-[#047857] transition text-[#111827]"
                          >
                            <option value="oct-2026">October 2026 Term</option>
                            <option value="nov-2026">November 2026 Term</option>
                            <option value="jan-2027">January 2027 Term</option>
                            <option value="mar-2027">March 2027 Term</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Statutory Subsidies */}
                    <div className="space-y-3">
                      <div className="text-xs font-semibold uppercase tracking-wider text-[#047857] border-b border-slate-100 pb-1.5">
                        3. Statutory Subsidies & Financial Aid
                      </div>

                      <div className="p-4 bg-[#F8FAFC] border border-slate-200/80 rounded-xl text-xs space-y-2.5">
                        <label className="flex items-center gap-2.5 cursor-pointer text-[#111827]">
                          <input
                            type="checkbox"
                            checked={skillsfutureClaim}
                            onChange={(e) => setSkillsfutureClaim(e.target.checked)}
                            className="rounded text-[#047857] focus:ring-[#047857]"
                          />
                          <span className="font-medium">
                            I wish to apply my SkillsFuture Singapore (SSG) Credit towards tuition fees.
                          </span>
                        </label>

                        <label className="flex items-center gap-2.5 cursor-pointer text-[#111827]">
                          <input
                            type="checkbox"
                            checked={utapClaim}
                            onChange={(e) => setUtapClaim(e.target.checked)}
                            className="rounded text-[#047857] focus:ring-[#047857]"
                          />
                          <span className="font-medium">
                            I am an active NTUC Union Member eligible for UTAP co-funding.
                          </span>
                        </label>
                      </div>
                    </div>

                    {/* CPE Declaration */}
                    <div className="pt-2">
                      <label className="flex items-start gap-2.5 cursor-pointer text-xs text-[#6B7280]">
                        <input
                          type="checkbox"
                          required
                          checked={contractAgreed}
                          onChange={(e) => setContractAgreed(e.target.checked)}
                          className="mt-0.5 rounded text-[#047857] focus:ring-[#047857]"
                        />
                        <span className="leading-relaxed">
                          I acknowledge that admission is governed by the Committee for Private Education (CPE) Standard PEI-Student Contract and the mandatory Fee Protection Scheme (FPS) under Lonpac Insurance Bhd.
                        </span>
                      </label>
                    </div>

                    <div className="pt-4 border-t border-slate-200/80">
                      <button type="submit" className="btn-primary text-xs font-semibold px-8 py-3 rounded-xl shadow-sm">
                        Submit Formal Application for Admission
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="p-8 text-center space-y-5">
                  <CheckCircle2 className="w-14 h-14 text-[#047857] mx-auto" />
                  <h3 className="font-heading font-serif text-2xl font-bold text-[#111827]">
                    Application Successfully Registered
                  </h3>
                  <div className="bg-[#F8FAFC] border border-slate-200/80 p-5 max-w-md mx-auto rounded-xl text-xs space-y-1">
                    <div className="text-[#6B7280] uppercase tracking-wider text-[10px]">Official Registry Reference Code</div>
                    <div className="text-xl font-mono font-bold text-[#111827]">{submittedRef}</div>
                  </div>
                  <p className="text-xs text-[#6B7280] max-w-md mx-auto leading-relaxed">
                    A formal Letter of Acknowledgment and CPE Standard Student Contract preview have been dispatched to {email}. An Admissions Officer will contact you within one business day to verify prerequisites and finalize SkillsFuture grant claims.
                  </p>
                  <button
                    onClick={() => setSubmittedRef(null)}
                    className="btn-secondary btn-sm text-xs font-semibold rounded-xl"
                  >
                    Submit Additional Enrolment
                  </button>
                </div>
              )}

            </div>
          </div>

          {/* Right Guidance Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="border border-slate-200/80 bg-white p-6 rounded-2xl shadow-sm space-y-3">
              <h4 className="font-heading font-serif text-base font-bold text-[#111827]">
                CPE Statutory Disclosures
              </h4>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                As a Private Education Institution registered under the Private Education Act (Cap 247A), Apex Institute adheres to all statutory requirements administered by SkillsFuture Singapore (SSG).
              </p>
              <div className="pt-3 text-xs space-y-2.5 text-[#111827] border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#047857]" />
                  <span>CPE UEN: 201829481E (EduTrust 4-Year)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-[#047857]" />
                  <span>Fee Protection: Lonpac Insurance Bhd</span>
                </div>
              </div>
            </div>

            <div className="border border-slate-200/80 bg-[#F8FAFC] p-6 rounded-2xl shadow-sm space-y-2.5 text-xs text-[#6B7280]">
              <div className="font-semibold text-[#111827] uppercase tracking-wider text-[11px]">
                Admissions Enquiries
              </div>
              <p className="leading-relaxed">
                For questions regarding academic exemptions, credit transfers, or corporate cohort sponsorship:
              </p>
              <div className="pt-2 font-medium text-[#111827] leading-relaxed">
                Telephone: +65 6732 8888<br />
                Email: admissions@apex.edu.sg
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default function AdmissionsPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-xs text-[#6B7280]">Loading admissions portal...</div>}>
      <AdmissionsContent />
    </Suspense>
  );
}
