'use client';

import React from 'react';
import Link from 'next/link';
import ApexLogo from '@/components/ApexLogo';

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-slate-300 text-xs border-t border-slate-800 mt-auto">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        
        {/* Main University Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-12 mb-16">
          
          {/* Institutional Charter & CPE Statutory Details */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="group inline-block">
              <ApexLogo variant="light" size="md" />
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm pt-2">
              Registered under the Private Education Act (Cap 247A). Committee for Private Education (CPE Registration No: 201829481E, Period of Registration: 15 July 2022 to 14 July 2026). EduTrust 4-Year Certified. All student course fees are protected under the mandatory Lonpac Insurance Fee Protection Scheme (FPS).
            </p>

            <div className="pt-2 text-[11px] text-emerald-400 font-semibold space-y-1">
              <div>✓ SkillsFuture Singapore (SSG) Non-WSQ Approved Training Provider</div>
              <div>✓ NTUC Union Training Assistance Programme (UTAP) Supported</div>
            </div>
          </div>

          {/* Academic Faculties */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4 border-b border-slate-800 pb-2">
              Academic Faculties
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li><Link href="/courses?category=Data+Analytics" className="hover:text-white transition">School of Data Science</Link></li>
              <li><Link href="/courses?category=Artificial+Intelligence" className="hover:text-white transition">Centre for Artificial Intelligence</Link></li>
              <li><Link href="/courses?category=Cyber+Security" className="hover:text-white transition">Cyber Security & Governance</Link></li>
              <li><Link href="/courses?category=Cloud+Computing" className="hover:text-white transition">Enterprise Cloud Architecture</Link></li>
              <li><Link href="/courses?category=Business+Analytics" className="hover:text-white transition">Executive Business Analytics</Link></li>
              <li><Link href="/courses?category=O-Level+Preparation" className="hover:text-white transition">Academic Preparatory Division</Link></li>
            </ul>
          </div>

          {/* Singapore Campuses */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4 border-b border-slate-800 pb-2">
              Singapore Campuses
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li><Link href="/contact" className="hover:text-white transition">Somerset Flagship (Orchard)</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Raffles City Executive Centre</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Jurong Innovation Hub</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Tampines Regional Centre</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Woodlands Civic Centre</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-400 transition font-medium">All 10 Campus Facilities →</Link></li>
            </ul>
          </div>

          {/* Admissions & Student Registry */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4 border-b border-slate-800 pb-2">
              Admissions & Registry
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li><Link href="/admissions" className="hover:text-white transition">Application & Enrolment</Link></li>
              <li><Link href="/admissions" className="hover:text-white transition">SkillsFuture Credit Procedures</Link></li>
              <li><Link href="/trial-classes" className="hover:text-white transition">Intake Calendar & Schedules</Link></li>
              <li><Link href="/certifications" className="hover:text-white transition">Central Registry Verification</Link></li>
              <li><Link href="/dashboard" className="hover:text-white transition">Institutional Metrics & Audits</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Campus Visit Appointment</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Regulatory Strip */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © 2026 Apex Institute of Singapore Pte. Ltd. All rights reserved. Registered Private Education Institution.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer">PEI Standard Student Contract</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Fee Protection Scheme (FPS)</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Dispute Resolution Policy</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Personal Data Protection (PDPA)</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
