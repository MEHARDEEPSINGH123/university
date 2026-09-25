'use client';

import React, { useState } from 'react';
import { certifications } from '@/lib/educationData';
import { useApp } from '@/context/AppContext';
import { Award, ShieldCheck, CheckCircle2, Search, ExternalLink } from 'lucide-react';

export default function CertificationsPage() {
  const { openCertModal, showToast } = useApp();
  const [verifyCode, setVerifyCode] = useState('');
  const [verifyResult, setVerifyResult] = useState<any>(null);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!verifyCode.trim()) {
      showToast('Please enter an official credential verification code.', 'error');
      return;
    }

    const found = certifications.find(
      (c) =>
        c.verification_code.toLowerCase() === verifyCode.trim().toLowerCase() ||
        c.certification_id.toLowerCase() === verifyCode.trim().toLowerCase()
    );

    if (found) {
      setVerifyResult(found);
      showToast('Credential record authenticated in the central registry.', 'success');
    } else {
      setVerifyResult({
        notFound: true,
        code: verifyCode,
      });
      showToast('Record not found in the verified registry.', 'info');
    }
  };

  return (
    <div className="py-12 sm:py-16 bg-white min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Institutional Header */}
        <div className="border-b border-slate-200 pb-8 mb-10">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#047857] flex items-center gap-2">
            <Award className="w-3.5 h-3.5 text-[#047857]" />
            Academic Qualifications & Verification
          </div>
          <h1 className="font-heading font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mt-2">
            Institutional Certifications & Credential Registry
          </h1>
          <p className="text-sm text-[#6B7280] max-w-3xl mt-2 leading-relaxed">
            Every diploma, executive certificate, and competency attestation conferred by Apex Institute of Singapore is registered with our central academic records archive and verifiable by employers and institutions.
          </p>
        </div>

        {/* Verification Portal Box */}
        <div className="border border-slate-200/80 p-6 sm:p-8 bg-[#F8FAFC] max-w-3xl mx-auto mb-12 rounded-2xl shadow-sm">
          <div className="mb-4">
            <h2 className="font-heading font-serif text-xl font-bold text-[#111827]">
              Central Registry Credential Verification
            </h2>
            <p className="text-xs text-[#6B7280] mt-1">
              Enter the unique verification code printed on the official parchment (e.g. <span className="font-mono text-[#111827] font-semibold">SG-APX-1000</span> or <span className="font-mono text-[#111827] font-semibold">CERT001</span>).
            </p>
          </div>

          <form onSubmit={handleVerify} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={verifyCode}
              onChange={(e) => setVerifyCode(e.target.value)}
              placeholder="e.g. SG-APX-1000"
              className="flex-grow px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#047857] focus:ring-1 focus:ring-[#047857] text-[#111827] transition"
            />
            <button type="submit" className="btn-primary text-xs font-semibold px-6 py-2.5 rounded-xl shadow-sm">
              Authenticate Credential
            </button>
          </form>

          {verifyResult && (
            <div className="mt-5 pt-4 border-t border-slate-200/80 text-xs">
              {verifyResult.notFound ? (
                <div className="p-4 bg-amber-50 border border-amber-200 text-amber-900 rounded-xl">
                  No registered record was found matching code <strong className="font-mono">{verifyResult.code}</strong>. Please confirm the identifier with the candidate or contact the Registrar.
                </div>
              ) : (
                <div className="p-5 bg-white border border-[#047857] text-[#111827] space-y-3 rounded-xl shadow-sm">
                  <div className="flex items-center gap-2 text-[#047857] font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Official Qualification Record Confirmed</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-[11px] pt-2 border-t border-slate-100">
                    <div>
                      <span className="text-[#6B7280]">Award Title:</span>
                      <div className="font-bold text-[#111827] text-xs">{verifyResult.name}</div>
                    </div>
                    <div>
                      <span className="text-[#6B7280]">Industry Standard:</span>
                      <div className="font-bold text-[#111827] text-xs">{verifyResult.industry_title}</div>
                    </div>
                    <div>
                      <span className="text-[#6B7280]">Issuer:</span>
                      <div className="text-[#111827]">{verifyResult.issuer}</div>
                    </div>
                    <div>
                      <span className="text-[#6B7280]">Academic Standing:</span>
                      <div className="text-[#047857] font-semibold">{verifyResult.validity}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Accredited Credentials Catalog */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((c) => (
            <div key={c.certification_id} className="border border-slate-200/80 p-6 sm:p-7 flex flex-col justify-between bg-white rounded-2xl shadow-sm hover:shadow-md transition">
              <div>
                <div className="flex items-center justify-between text-xs mb-3.5">
                  <span className="text-[10px] font-mono text-[#6B7280] uppercase">
                    ID: {c.certification_id}
                  </span>
                  <span className="text-[10px] font-semibold text-[#047857] bg-emerald-50 px-2.5 py-0.5 rounded-full">
                    {c.validity}
                  </span>
                </div>

                <h3 className="font-heading font-serif text-base font-bold text-[#111827] mb-1.5 leading-snug">
                  {c.name}
                </h3>
                <div className="text-xs text-[#6B7280] mb-4 font-medium">
                  {c.industry_title}
                </div>

                <div className="space-y-2 text-xs text-[#6B7280] border-t border-slate-100 pt-3 mb-5">
                  <div className="flex justify-between">
                    <span className="text-[#6B7280]">Conferring Body:</span>
                    <span className="font-semibold text-[#111827]">{c.issuer}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B7280]">Curriculum Volume:</span>
                    <span className="font-semibold text-[#111827]">{c.learning_hours} Hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B7280]">Registry Code:</span>
                    <span className="font-mono text-[#111827] font-semibold">{c.verification_code}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => openCertModal(c)}
                  className="text-xs text-[#047857] hover:text-[#047857]/80 font-semibold flex items-center gap-1 transition"
                >
                  Inspect Specimen Parchment →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
