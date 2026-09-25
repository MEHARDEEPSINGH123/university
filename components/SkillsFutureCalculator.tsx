'use client';

import React, { useState } from 'react';
import { ShieldCheck, HelpCircle, Check, Calculator } from 'lucide-react';

interface Props {
  feeSgd: number;
}

export default function SkillsFutureCalculator({ feeSgd }: Props) {
  const [profile, setProfile] = useState<'citizen40' | 'citizen25' | 'citizenUnder25' | 'pr' | 'international'>('citizen40');
  const [hasNtuc, setHasNtuc] = useState(true);

  // Subsidies calculation
  let skillsFutureCredit = 0;
  let ssgCourseSubsidy = 0;
  let utapSubsidy = 0;

  if (profile === 'citizen40') {
    ssgCourseSubsidy = Math.floor(feeSgd * 0.7);
    skillsFutureCredit = Math.min(500, feeSgd - ssgCourseSubsidy);
  } else if (profile === 'citizen25') {
    ssgCourseSubsidy = Math.floor(feeSgd * 0.5);
    skillsFutureCredit = Math.min(500, feeSgd - ssgCourseSubsidy);
  } else if (profile === 'citizenUnder25') {
    ssgCourseSubsidy = Math.floor(feeSgd * 0.5);
    skillsFutureCredit = 0;
  } else if (profile === 'pr') {
    ssgCourseSubsidy = Math.floor(feeSgd * 0.3);
    skillsFutureCredit = 0;
  } else {
    ssgCourseSubsidy = 0;
    skillsFutureCredit = 0;
  }

  const remainder = feeSgd - ssgCourseSubsidy - skillsFutureCredit;
  if (hasNtuc && profile !== 'international') {
    utapSubsidy = Math.min(250, Math.floor(remainder * 0.5));
  }

  const totalDeductions = ssgCourseSubsidy + skillsFutureCredit + utapSubsidy;
  const netPayable = Math.max(0, feeSgd - totalDeductions);

  return (
    <div className="bg-white border border-slate-200/80 p-6 sm:p-7 rounded-2xl shadow-sm">
      
      <div className="mb-4 pb-3.5 border-b border-slate-200/80">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#047857] mb-1">
          <Calculator className="w-3.5 h-3.5 text-[#047857]" />
          Statutory Grants Simulator
        </div>
        <h4 className="font-heading font-serif text-lg font-bold text-[#111827]">
          Singapore Government Subsidies & Net Fee
        </h4>
        <p className="text-xs text-[#6B7280] mt-1">
          Simulate statutory subsidies under the Singapore Skills Framework and NTUC UTAP.
        </p>
      </div>

      {/* Citizenship Selection */}
      <div className="mb-4">
        <label className="block text-[11px] font-semibold text-[#111827] uppercase tracking-wider mb-2">
          Applicant Status & Age Bracket
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
          <button
            type="button"
            onClick={() => setProfile('citizen40')}
            className={`p-2.5 rounded-xl border text-left transition ${
              profile === 'citizen40'
                ? 'border-[#047857] bg-[#047857] text-white font-medium shadow-sm'
                : 'border-slate-200 bg-white text-[#111827] hover:bg-slate-50'
            }`}
          >
            <div className="font-semibold text-[11px]">SC 40+ Years</div>
            <div className={`text-[10px] ${profile === 'citizen40' ? 'text-emerald-100' : 'text-[#6B7280]'}`}>
              Mid-Career (70% SSG)
            </div>
          </button>

          <button
            type="button"
            onClick={() => setProfile('citizen25')}
            className={`p-2.5 rounded-xl border text-left transition ${
              profile === 'citizen25'
                ? 'border-[#047857] bg-[#047857] text-white font-medium shadow-sm'
                : 'border-slate-200 bg-white text-[#111827] hover:bg-slate-50'
            }`}
          >
            <div className="font-semibold text-[11px]">SC 25–39 Years</div>
            <div className={`text-[10px] ${profile === 'citizen25' ? 'text-emerald-100' : 'text-[#6B7280]'}`}>
              Standard (50% SSG)
            </div>
          </button>

          <button
            type="button"
            onClick={() => setProfile('pr')}
            className={`p-2.5 rounded-xl border text-left transition ${
              profile === 'pr'
                ? 'border-[#047857] bg-[#047857] text-white font-medium shadow-sm'
                : 'border-slate-200 bg-white text-[#111827] hover:bg-slate-50'
            }`}
          >
            <div className="font-semibold text-[11px]">Permanent Resident</div>
            <div className={`text-[10px] ${profile === 'pr' ? 'text-emerald-100' : 'text-[#6B7280]'}`}>
              PR Subsidy (30% SSG)
            </div>
          </button>
        </div>
      </div>

      {/* NTUC UTAP Checkbox */}
      {profile !== 'international' && (
        <div className="mb-4 flex items-center justify-between p-3 bg-[#F8FAFC] border border-slate-200/80 rounded-xl text-xs">
          <label className="flex items-center gap-2.5 cursor-pointer text-[#111827]">
            <input
              type="checkbox"
              checked={hasNtuc}
              onChange={(e) => setHasNtuc(e.target.checked)}
              className="rounded text-[#047857] focus:ring-[#047857]"
            />
            <span className="font-medium text-[11px]">Include NTUC Union Training Assistance Programme (UTAP)</span>
          </label>
          <span className="text-[10px] text-[#6B7280]">Up to $250/yr</span>
        </div>
      )}

      {/* Statutory Fee Breakdown Table */}
      <div className="border border-slate-200/80 rounded-xl overflow-hidden divide-y divide-slate-100 text-xs mb-4">
        <div className="p-3 flex items-center justify-between bg-[#F8FAFC]">
          <span className="text-[#6B7280]">Standard Approved Tuition Fee:</span>
          <span className="font-semibold text-[#111827]">SGD ${feeSgd.toLocaleString()}</span>
        </div>
        {ssgCourseSubsidy > 0 && (
          <div className="p-3 flex items-center justify-between text-[#047857]">
            <span>Less: SSG Government Course Subsidy:</span>
            <span className="font-semibold">- SGD ${ssgCourseSubsidy.toLocaleString()}</span>
          </div>
        )}
        {skillsFutureCredit > 0 && (
          <div className="p-3 flex items-center justify-between text-[#047857]">
            <span>Less: SkillsFuture Credit Offset:</span>
            <span className="font-semibold">- SGD ${skillsFutureCredit.toLocaleString()}</span>
          </div>
        )}
        {utapSubsidy > 0 && (
          <div className="p-3 flex items-center justify-between text-[#047857]">
            <span>Less: NTUC UTAP Co-Funding:</span>
            <span className="font-semibold">- SGD ${utapSubsidy.toLocaleString()}</span>
          </div>
        )}
        <div className="p-3.5 flex items-center justify-between bg-[#111827] text-white font-semibold">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-slate-400">Estimated Net Fee Payable</div>
            <div className="text-xs text-slate-300">Payable via SkillsFuture / Corporate / Cash</div>
          </div>
          <div className="text-lg font-bold font-mono text-emerald-400">
            SGD ${netPayable.toLocaleString()}
          </div>
        </div>
      </div>

      <p className="text-[10px] text-[#6B7280] leading-relaxed">
        * Estimates subject to official verification of Singapore citizenship and remaining credit balance on MySkillsFuture portal upon formal registration.
      </p>

    </div>
  );
}
