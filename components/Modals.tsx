'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { courses } from '@/lib/educationData';
import { X, CheckCircle2, AlertCircle, Info, Building, Download, ExternalLink } from 'lucide-react';
import ApexLogo from '@/components/ApexLogo';

export default function Modals() {
  const {
    trialModalOpen,
    closeTrialModal,
    trialPreselectedCourse,
    whatsappModalOpen,
    closeWhatsAppModal,
    openWhatsAppModal,
    certModalOpen,
    selectedCert,
    closeCertModal,
    toasts,
    removeToast,
    showToast,
  } = useApp();

  // Trial form state
  const [trialName, setTrialName] = useState('');
  const [trialEmail, setTrialEmail] = useState('');
  const [trialPhone, setTrialPhone] = useState('');
  const [trialCourse, setTrialCourse] = useState(trialPreselectedCourse || '');
  const [trialCampus, setTrialCampus] = useState('Somerset');
  const [trialConfirmed, setTrialConfirmed] = useState(false);
  const [trialTicketNo, setTrialTicketNo] = useState('');

  // Update selected course if preselected changes
  React.useEffect(() => {
    if (trialPreselectedCourse) {
      setTrialCourse(trialPreselectedCourse);
    }
  }, [trialPreselectedCourse]);

  const handleTrialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tNo = `APX-ADM-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setTrialTicketNo(tNo);
    setTrialConfirmed(true);
    showToast(`Admissions reservation confirmed. Reference: ${tNo}`, 'success');
  };

  return (
    <>
      {/* =========================================================================
           ADMISSIONS TRIAL / SEMINAR RESERVATION MODAL
           ========================================================================= */}
      {trialModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white border border-slate-200 shadow-2xl max-w-lg w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto rounded-2xl">
            <button
              onClick={closeTrialModal}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center transition"
            >
              <X className="w-4 h-4" />
            </button>

            {!trialConfirmed ? (
              <>
                <div className="mb-5 border-b border-slate-200 pb-3.5">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#047857] font-semibold">
                    Admissions Desk
                  </div>
                  <h3 className="font-heading font-serif text-xl font-bold text-[#111827] mt-1">
                    Reserve Academic Seminar Seat
                  </h3>
                  <p className="text-xs text-[#6B7280] mt-1">
                    Meet with course conveners and receive a structured curriculum evaluation.
                  </p>
                </div>

                <form onSubmit={handleTrialSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#111827] uppercase mb-1.5">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={trialName}
                      onChange={(e) => setTrialName(e.target.value)}
                      placeholder="e.g. Jason Lim"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#047857] text-[#111827] transition"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-[#111827] uppercase mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={trialEmail}
                        onChange={(e) => setTrialEmail(e.target.value)}
                        placeholder="jason@domain.com"
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#047857] text-[#111827] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-[#111827] uppercase mb-1.5">
                        Singapore Contact *
                      </label>
                      <input
                        type="tel"
                        required
                        value={trialPhone}
                        onChange={(e) => setTrialPhone(e.target.value)}
                        placeholder="+65 9123 4567"
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#047857] text-[#111827] transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#111827] uppercase mb-1.5">
                      Curriculum of Interest *
                    </label>
                    <select
                      value={trialCourse}
                      onChange={(e) => setTrialCourse(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#047857] text-[#111827] transition"
                      required
                    >
                      <option value="">Choose a programme...</option>
                      {courses.map((c) => (
                        <option key={c.course_id} value={c.course_id}>
                          [{c.course_id}] {c.course_name} ({c.campus})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-[#111827] uppercase mb-1.5">
                        Preferred Campus
                      </label>
                      <select
                        value={trialCampus}
                        onChange={(e) => setTrialCampus(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#047857] text-[#111827] transition"
                      >
                        <option value="Somerset">Somerset Flagship Centre</option>
                        <option value="Jurong">Jurong Innovation Hub</option>
                        <option value="Tampines">Tampines Regional Centre</option>
                        <option value="Bishan">Bishan Central Centre</option>
                        <option value="Woodlands">Woodlands Civic Centre</option>
                        <option value="Online">Online Live Synchronous</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-[#111827] uppercase mb-1.5">
                        Preferred Time Slot
                      </label>
                      <select className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#047857] text-[#111827] transition">
                        <option>Upcoming Saturday 10:00 AM</option>
                        <option>Upcoming Sunday 2:00 PM</option>
                        <option>Weekday Evening 7:30 PM</option>
                      </select>
                    </div>
                  </div>

                  <div className="p-3 bg-[#F8FAFC] border border-slate-200 rounded-xl text-[11px] text-[#6B7280]">
                    Complimentary diagnostic benchmark and course syllabus preview provided.
                  </div>

                  <button type="submit" className="btn-primary w-full text-xs py-3 font-semibold rounded-xl shadow-sm">
                    Confirm Seminar Reservation
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-4 space-y-4">
                <CheckCircle2 className="w-14 h-14 text-[#047857] mx-auto" />
                <h3 className="font-heading font-serif text-2xl font-bold text-[#111827]">
                  Seminar Pass Issued
                </h3>
                <p className="text-xs text-[#6B7280]">
                  A reservation has been recorded for <strong>{trialName}</strong> at our <strong>{trialCampus}</strong> facility.
                </p>
                <div className="bg-[#F8FAFC] border border-slate-200 p-5 text-xs text-left max-w-sm mx-auto space-y-1.5 rounded-xl">
                  <div><strong>Reservation Code:</strong> <span className="font-mono">{trialTicketNo}</span></div>
                  <div><strong>Fee Status:</strong> Complimentary Institutional Pass</div>
                  <div><strong>Arrival:</strong> Please report to the reception desk 10 minutes prior to session start.</div>
                </div>
                <button
                  onClick={closeTrialModal}
                  className="btn-primary btn-sm text-xs rounded-xl px-6"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
           WHATSAPP ADMISSIONS DESK MODAL
           ========================================================================= */}
      {whatsappModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white border border-slate-200 shadow-2xl max-w-md w-full p-6 sm:p-7 relative rounded-2xl">
            <button
              onClick={closeWhatsAppModal}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center transition"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="mb-4 pb-3 border-b border-slate-200">
              <ApexLogo size="sm" />
            </div>

            <div className="p-4 bg-[#F8FAFC] border border-slate-200 rounded-xl text-xs text-[#111827] space-y-2 mb-4 leading-relaxed">
              <p>
                "Welcome to Apex Institute of Singapore. Please state your target curriculum, intake term, or question regarding SkillsFuture Credit funding."
              </p>
            </div>

            <div className="space-y-3">
              <input
                type="text"
                defaultValue="Inquiry regarding executive programme admission and SkillsFuture claim eligibility."
                className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#047857] text-[#111827]"
              />
              <button
                onClick={() => {
                  showToast('Redirecting to Admissions WhatsApp Registry (+65 8299 1234)...', 'success');
                  closeWhatsAppModal();
                }}
                className="btn-primary w-full text-xs py-3 font-semibold rounded-xl shadow-sm"
              >
                Connect to Admissions Desk (+65 8299 1234)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
           CERTIFICATE SPECIMEN PARCHMENT MODAL
           ========================================================================= */}
      {certModalOpen && selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white border border-slate-300 shadow-2xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto rounded-2xl">
            <button
              onClick={closeCertModal}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center transition"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Specimen Parchment Frame */}
            <div className="border-4 border-double border-slate-300 p-8 bg-[#F8FAFC]/50 text-center relative rounded-xl">
              <div className="flex items-center justify-between border-b border-slate-300 pb-4 mb-6">
                <ApexLogo size="sm" />
                <div className="text-[10px] font-mono text-[#6B7280] text-right">
                  <div className="font-semibold text-[#111827]">ACADEMIC BOARD SEAL</div>
                  <div className="text-[9px] text-[#6B7280]">CPE REG: 201829481E</div>
                </div>
              </div>

              <div className="text-[10px] uppercase tracking-widest text-[#6B7280] mb-2 font-semibold">
                Official Specimen Parchment
              </div>
              <h2 className="font-heading font-serif text-2xl text-[#111827] font-bold mb-3">
                {selectedCert.industry_title}
              </h2>
              <p className="text-xs text-[#6B7280] max-w-md mx-auto mb-6 leading-relaxed">
                By authority of the Academic Board, it is hereby certified that <strong>{selectedCert.sample_recipient}</strong> has fulfilled all academic requirements, satisfied prescribed examinations, and completed the approved curriculum.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-300 text-xs">
                <div>
                  <div className="text-[#6B7280] text-[10px] uppercase font-medium">Registry Code</div>
                  <div className="font-mono font-bold text-[#111827] mt-0.5">
                    {selectedCert.verification_code}
                  </div>
                </div>
                <div>
                  <div className="text-[#6B7280] text-[10px] uppercase font-medium">Conferring Body</div>
                  <div className="font-semibold text-[#111827] text-[11px] mt-0.5">
                    {selectedCert.issuing_body}
                  </div>
                </div>
                <div>
                  <div className="text-[#6B7280] text-[10px] uppercase font-medium">Standing</div>
                  <div className="font-semibold text-[#047857] mt-0.5">Verified Active</div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-[#6B7280]">
                Official electronic transcript backed by cryptographic registry verification.
              </span>
              <button
                onClick={() => {
                  showToast('Specimen parchment transcript downloaded.', 'success');
                }}
                className="btn-secondary btn-sm text-xs font-semibold rounded-xl"
              >
                Download Specimen (PDF)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
           NOTIFICATIONS
           ========================================================================= */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="pointer-events-auto min-w-[280px] max-w-md bg-white border border-slate-200 shadow-xl p-4 flex items-start gap-3 rounded-xl"
          >
            <div className="text-base mt-0.5">
              {toast.type === 'success' ? (
                <CheckCircle2 className="w-4 h-4 text-[#047857]" />
              ) : toast.type === 'error' ? (
                <AlertCircle className="w-4 h-4 text-red-600" />
              ) : (
                <Info className="w-4 h-4 text-[#111827]" />
              )}
            </div>
            <div className="flex-1 text-xs text-[#111827] leading-snug">
              <span className="font-bold text-[#111827] block mb-0.5">
                {toast.type === 'success' ? 'Confirmed' : 'Notification'}
              </span>
              {toast.message}
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-[#6B7280] hover:text-[#111827] text-xs ml-2"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Discreet Admissions Hotline Trigger */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={openWhatsAppModal}
          className="w-12 h-12 rounded-2xl bg-[#047857] text-white shadow-md flex items-center justify-center hover:bg-[#065F46] transition duration-150 border border-emerald-600"
          aria-label="Admissions Hotline"
        >
          <Building className="w-5 h-5 text-white" />
        </button>
      </div>
    </>
  );
}
