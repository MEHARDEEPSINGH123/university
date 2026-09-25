'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import ApexLogo from '@/components/ApexLogo';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Academic Programmes', href: '/courses' },
    { label: 'Admissions & Subsidies', href: '/admissions' },
    { label: 'Faculty & Fellows', href: '/trainers' },
    { label: 'Intake Calendar', href: '/trial-classes' },
    { label: 'Credentials', href: '/certifications' },
    { label: 'Campuses', href: '/contact' },
    { label: 'Alumni Reviews', href: '/reviews' },
    { label: 'Institutional Metrics', href: '/dashboard' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E5E7EB]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* University Crest & Wordmark Logo */}
          <Link href="/" className="group flex items-center">
            <ApexLogo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs font-medium tracking-tight transition-colors duration-150 rounded-lg ${
                    isActive
                      ? 'text-[#047857] bg-[#ECFDF5] font-semibold'
                      : 'text-[#6B7280] hover:text-[#111827] hover:bg-[#F8FAFC]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Right Action */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/admissions"
              className="btn-primary btn-sm text-xs font-semibold"
            >
              Apply for Intake
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#111827] hover:bg-[#F8FAFC] rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-[#E5E7EB] px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 text-sm font-medium rounded-lg ${
                  isActive
                    ? 'bg-[#ECFDF5] text-[#047857] font-semibold'
                    : 'text-[#111827] hover:bg-[#F8FAFC]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-[#E5E7EB]">
            <Link
              href="/admissions"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full btn-primary btn-sm block text-center"
            >
              Apply for Intake
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
