'use client';

import React from 'react';

interface ApexLogoProps {
  variant?: 'default' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
  className?: string;
}

export default function ApexLogo({
  variant = 'default',
  size = 'md',
  showWordmark = true,
  className = '',
}: ApexLogoProps) {
  const isLight = variant === 'light';

  // Sizing definitions
  const dimensions = {
    sm: { shield: 34, title: 'text-sm', sub: 'text-[9px]', gap: 'gap-2.5' },
    md: { shield: 44, title: 'text-base sm:text-lg', sub: 'text-[10px]', gap: 'gap-3.5' },
    lg: { shield: 54, title: 'text-xl sm:text-2xl', sub: 'text-xs', gap: 'gap-4' },
  }[size];

  const shieldColor = isLight ? '#FFFFFF' : '#111827';
  const innerBg = isLight ? '#1E293B' : '#111827';
  const goldColor = '#D97706';
  const emeraldColor = '#047857';

  return (
    <div className={`flex items-center ${dimensions.gap} ${className}`}>
      {/* Heraldic University Crest Emblem */}
      <svg
        width={dimensions.shield}
        height={dimensions.shield}
        viewBox="0 0 48 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 transition-transform duration-200 group-hover:scale-105"
        aria-label="Apex Institute Academic Crest"
      >
        {/* Outer Heraldic Shield */}
        <path
          d="M24 2L5 9V24C5 36.5 13.5 47.5 24 50C34.5 47.5 43 36.5 43 24V9L24 2Z"
          fill={innerBg}
          stroke={isLight ? '#334155' : '#111827'}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        {/* Inner Filigree Border */}
        <path
          d="M24 5L8 11.2V23.5C8 34.2 15.2 44.2 24 46.5C32.8 44.2 40 34.2 40 23.5V11.2L24 5Z"
          fill="none"
          stroke={goldColor}
          strokeWidth="0.8"
          strokeOpacity="0.7"
        />

        {/* Top: Open Book of Knowledge / Academic Scholarship */}
        <g transform="translate(14, 11) scale(0.85)">
          {/* Left Page */}
          <path
            d="M11.5 3C8 1.5 3 2 1 3V13C3 12 8 11.5 11.5 13V3Z"
            fill={isLight ? '#F8FAFC' : '#FFFFFF'}
            stroke={goldColor}
            strokeWidth="0.75"
          />
          {/* Right Page */}
          <path
            d="M12.5 3C16 1.5 21 2 23 3V13C21 12 16 11.5 12.5 13V3Z"
            fill={isLight ? '#F8FAFC' : '#FFFFFF'}
            stroke={goldColor}
            strokeWidth="0.75"
          />
          {/* Spine & Page lines */}
          <line x1="12" y1="3" x2="12" y2="13" stroke={goldColor} strokeWidth="1" />
          <line x1="4" y1="5.5" x2="9" y2="5" stroke="#94A3B8" strokeWidth="0.6" />
          <line x1="4" y1="8" x2="9" y2="7.5" stroke="#94A3B8" strokeWidth="0.6" />
          <line x1="4" y1="10.5" x2="8" y2="10" stroke="#94A3B8" strokeWidth="0.6" />
          <line x1="15" y1="5" x2="20" y2="5.5" stroke="#94A3B8" strokeWidth="0.6" />
          <line x1="15" y1="7.5" x2="20" y2="8" stroke="#94A3B8" strokeWidth="0.6" />
          <line x1="16" y1="10" x2="20" y2="10.5" stroke="#94A3B8" strokeWidth="0.6" />
        </g>

        {/* Center: The Apex Chevron & Academic Letter 'A' */}
        <path
          d="M24 24L15 39H20L24 31L28 39H33L24 24Z"
          fill={isLight ? '#FFFFFF' : '#FFFFFF'}
        />
        {/* Chevron Crossbar */}
        <rect x="18" y="34.5" width="12" height="1.8" fill={goldColor} rx="0.5" />

        {/* Star of Excellence Hallmark at Apex Point */}
        <polygon
          points="24,20 25.2,23.5 28.5,23.5 25.8,25.5 26.8,29 24,27 21.2,29 22.2,25.5 19.5,23.5 22.8,23.5"
          fill={goldColor}
        />

        {/* Foundation Year / Latin Marker Ribbon at Base */}
        <path
          d="M17 41.5H31L29 44H19L17 41.5Z"
          fill={emeraldColor}
        />
        <text
          x="24"
          y="43.5"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="3.2"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="bold"
          letterSpacing="0.08em"
        >
          EST. 2018
        </text>
      </svg>

      {/* Typography Wordmark */}
      {showWordmark && (
        <div className="flex flex-col text-left">
          <div
            className={`font-heading font-serif font-bold tracking-tight leading-tight ${dimensions.title} ${
              isLight ? 'text-white' : 'text-[#111827]'
            }`}
          >
            APEX INSTITUTE
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span
              className={`font-sans uppercase font-bold tracking-[0.2em] ${dimensions.sub} ${
                isLight ? 'text-emerald-400' : 'text-[#047857]'
              }`}
            >
              SINGAPORE
            </span>
            <span className={isLight ? 'text-slate-600' : 'text-slate-300'}>•</span>
            <span
              className={`font-sans uppercase font-medium tracking-wider text-[8px] sm:text-[9px] ${
                isLight ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              EXECUTIVE EDUCATION
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
