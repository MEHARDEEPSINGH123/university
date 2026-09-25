'use client';

import React from 'react';
import AnalyticsCharts from '@/components/AnalyticsCharts';
import { BarChart3 } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="py-12 sm:py-16 bg-white min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Institutional Header */}
        <div className="border-b border-slate-200 pb-8 mb-8">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#047857] flex items-center gap-2">
            <BarChart3 className="w-3.5 h-3.5 text-[#047857]" />
            Academic Board Governance & Analytics
          </div>
          <h1 className="font-heading font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mt-2">
            Institutional Metrics & Audited Reports
          </h1>
          <p className="text-sm text-[#6B7280] max-w-3xl mt-2 leading-relaxed">
            Audited operational data across 100 accredited curricula, 30 faculty appointments, and 10 campus facilities in Singapore. Compiled in accordance with Committee for Private Education (CPE) quality frameworks.
          </p>
        </div>

        {/* Charts and KPIs */}
        <AnalyticsCharts />

      </div>
    </div>
  );
}
