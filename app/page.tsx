'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  courses,
  trainers,
  categories,
  campuses,
  certifications,
} from '@/lib/educationData';
import { useApp } from '@/context/AppContext';
import CourseCard from '@/components/CourseCard';
import {
  Search,
  BookOpen,
  Calendar,
  Clock,
  MapPin,
  ChevronRight,
  ChevronDown,
  Building,
  GraduationCap,
  FileText,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Mail,
  ArrowRight,
  Download,
  Users,
  Award,
  Laptop,
  Check,
  Sparkles,
} from 'lucide-react';

export default function HomePage() {
  const router = useRouter();
  const { openCertModal, openWhatsAppModal } = useApp();

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Featured programmes filter tab
  const [featuredTab, setFeaturedTab] = useState<string>('all');

  // FAQ accordion state
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  // Form submission state
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organisation: '',
    programme: 'Data Analytics',
    intakeTerm: 'October 2026',
    enquiry: '',
  });

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery.trim()) params.set('q', searchQuery.trim());
    if (selectedCategory !== 'all') params.set('category', selectedCategory);
    router.push(`/courses?${params.toString()}`);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnquirySubmitted(true);
  };

  // Filtered featured courses
  const filteredFeatured = courses.filter((c) => {
    if (featuredTab === 'all') {
      return ['CR006', 'CR001', 'CR009', 'CR010', 'CR005', 'CR041'].includes(c.course_id);
    }
    return c.category.toLowerCase().includes(featuredTab.toLowerCase());
  }).slice(0, 6);

  // Notable Academic Faculty Leads
  const featuredFaculty = [
    trainers[0], // Dr. Lin Chen (PhD NIE / NTU)
    trainers[4], // David Zhang (MSc Carnegie Mellon)
    trainers[1], // Dr. Sarah Lim (PhD Cambridge)
    trainers[2], // Dr. Kenneth Tan (PhD NUS)
  ];

  const faqs = [
    {
      q: 'What are the academic prerequisites for admission to Executive Programmes?',
      a: 'Applicants for Executive Certificates and Professional Diplomas are typically expected to hold a recognized undergraduate degree or a polytechnic diploma with a minimum of two years of relevant professional experience. Candidates possessing substantive industry experience without formal tertiary credentials may be considered via portfolio assessment by the Academic Admissions Board.',
    },
    {
      q: 'How does the SkillsFuture Singapore (SSG) credit claim process function?',
      a: 'Singapore Citizens aged 25 and above may utilize their opening SkillsFuture Credit ($500) and Mid-Career SkillsFuture top-ups to offset eligible course fees. Upon receiving your formal Letter of Offer from the Admissions Office, you can submit your claim via the MySkillsFuture portal using our institutional UEN (201829481E). The net payable balance is paid directly to the Institute.',
    },
    {
      q: 'How are student course fees protected under the Fee Protection Scheme (FPS)?',
      a: 'In accordance with the mandatory requirements of the Committee for Private Education (CPE) under the Private Education Act (Cap 247A), Apex Institute protects 100% of student course fees via an Industry-wide Insurance Scheme administered by Lonpac Insurance Bhd. An insurance certificate is issued to every enrolled student upon fee receipt.',
    },
    {
      q: 'What is the required attendance and assessment standard to graduate?',
      a: 'To be eligible for the award of an Executive Certificate or Diploma, candidates must achieve a minimum attendance record of 75% for working professionals (90% for student pass holders, where applicable) and successfully pass all modular capstone assessments and examinations evaluated by our Academic Examination Council.',
    },
    {
      q: 'Can enterprise corporations sponsor employees or commission customized cohorts?',
      a: 'Yes. Our Corporate Learning & Executive Development Division collaborates with statutory boards, financial institutions, and multinational corporations to design tailored corporate cohorts. Corporate sponsorships are eligible for enhanced training support subsidies under SkillsFuture Singapore and the Inland Revenue Authority of Singapore (IRAS) tax deduction schemes.',
    },
    {
      q: 'What is the format distinction between Executive Hybrid and Synchronous Online delivery?',
      a: 'Executive Hybrid combines fortnightly intensive in-person seminars at our Somerset Flagship or Raffles City campuses with guided asynchronous research. Synchronous Online offers live, faculty-led interactive seminars via our secure academic portal, preserving peer discussion without requiring in-person travel.',
    },
  ];

  return (
    <div className="bg-white text-[#111827]">

      {/* =======================================================================
           SECTION 1: MINIMAL HERO SECTION (SPLIT LAYOUT)
           ======================================================================= */}
      <section className="relative bg-white border-b border-[#E5E7EB] pt-12 pb-20 sm:pt-16 sm:pb-28">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Editorial Headline & Actions */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#047857] text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[#047857]" />
                <span>Apex Institute of Singapore • CPE Reg: 201829481E</span>
              </div>

              <h1 className="font-heading font-serif text-3xl sm:text-5xl lg:text-6xl leading-[1.12] text-[#111827] font-bold tracking-tight">
                Cultivating Intellectual Rigour, Executive Leadership & Academic Mastery
              </h1>

              <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed max-w-2xl font-normal">
                Established under the Private Education Act, Apex Institute delivers accredited executive diplomas, professional micro-credentials, and foundational academic preparatory tuition aligned with Singapore's national Skills Framework and Cambridge international standards.
              </p>

              {/* Clean Academic Search Bar */}
              <form onSubmit={handleHeroSearch} className="pt-2">
                <div className="flex flex-col sm:flex-row gap-2.5 max-w-xl">
                  <div className="relative flex-grow">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search programme by discipline, keyword, or code..."
                      className="w-full pl-9 pr-4 py-3 text-xs sm:text-sm bg-white border border-[#E5E7EB] rounded-xl text-[#111827] focus:outline-none focus:border-[#047857] focus:ring-1 focus:ring-[#047857]"
                    />
                    <Search className="w-4 h-4 text-[#6B7280] absolute left-3 top-3.5" />
                  </div>
                  <button type="submit" className="btn-primary text-xs sm:text-sm font-semibold px-6 py-3 whitespace-nowrap">
                    Search Catalog
                  </button>
                </div>
              </form>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href="/courses" className="btn-primary text-xs sm:text-sm font-semibold">
                  Explore Academic Catalog
                </Link>
                <Link href="/trial-classes" className="btn-secondary text-xs sm:text-sm font-semibold">
                  Academic Intake Calendar
                </Link>
                <Link href="/admissions" className="text-xs sm:text-sm font-semibold text-[#047857] hover:underline flex items-center gap-1">
                  SkillsFuture Credit Guidance <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Statutory Indicators */}
              <div className="pt-6 border-t border-[#E5E7EB] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-[#6B7280]">
                <div>
                  <div className="font-bold text-[#111827]">CPE Registered</div>
                  <div className="text-[11px] text-[#6B7280]">PEI Act (Cap 247A)</div>
                </div>
                <div>
                  <div className="font-bold text-[#111827]">EduTrust 4-Year</div>
                  <div className="text-[11px] text-[#6B7280]">Quality Certified</div>
                </div>
                <div>
                  <div className="font-bold text-[#111827]">SkillsFuture SG</div>
                  <div className="text-[11px] text-[#6B7280]">SSG & UTAP Approved</div>
                </div>
                <div>
                  <div className="font-bold text-[#111827]">10 Campus Hubs</div>
                  <div className="text-[11px] text-[#6B7280]">Islandwide Transit</div>
                </div>
              </div>

            </div>

            {/* Right Column: Architectural Photography Frame */}
            <div className="lg:col-span-5">
              <div className="border border-[#E5E7EB] bg-white p-3 rounded-2xl shadow-soft">
                {/* Photo Container - Clean unobstructed architectural view */}
                <div className="relative h-[260px] sm:h-[300px] overflow-hidden rounded-xl bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80"
                    alt="Somerset Flagship Executive Lecture Hall"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#047857] text-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-md shadow-sm">
                      Campus Facility
                    </span>
                  </div>
                </div>

                {/* Content BELOW the picture - no text sitting on the photo */}
                <div className="p-5 bg-white space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#047857] font-semibold bg-[#ECFDF5] px-2.5 py-0.5 rounded-md">
                      Executive Seminar Suite
                    </span>
                    <span className="text-[11px] text-[#6B7280]">
                      NS23 Somerset MRT (Exit A)
                    </span>
                  </div>
                  
                  <h2 className="font-heading font-serif text-xl font-bold text-[#111827]">
                    Somerset Flagship Executive Centre
                  </h2>
                  
                  <p className="text-xs text-[#6B7280] leading-relaxed">
                    TripleOne Somerset, 111 Somerset Road #10-01, Singapore 238164
                  </p>
                </div>

                <div className="p-4 bg-[#F8FAFC] rounded-b-xl text-xs text-[#6B7280] flex items-center justify-between border-t border-[#E5E7EB]">
                  <span>Admissions Consultation: Mon–Fri, 09:00–18:00</span>
                  <Link href="/contact" className="font-semibold text-[#047857] hover:underline flex items-center gap-1">
                    Schedule Visit <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =======================================================================
           SECTION 2: INSTITUTION HIGHLIGHTS
           ======================================================================= */}
      <section className="py-14 sm:py-16 bg-[#F8FAFC] border-b border-[#E5E7EB]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            
            <div className="p-6 bg-white border border-[#E5E7EB] rounded-card shadow-subtle space-y-2">
              <div className="text-xs uppercase font-semibold text-[#6B7280] tracking-wider">
                Years of Experience
              </div>
              <div className="font-heading font-serif text-3xl sm:text-4xl font-bold text-[#111827]">
                8+ Years
              </div>
              <p className="text-xs text-[#6B7280] pt-1 border-t border-slate-100">
                Established 2018 under CPE Singapore statutory regulations.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E5E7EB] rounded-card shadow-subtle space-y-2">
              <div className="text-xs uppercase font-semibold text-[#6B7280] tracking-wider">
                Accredited Courses
              </div>
              <div className="font-heading font-serif text-3xl sm:text-4xl font-bold text-[#111827]">
                100 Courses
              </div>
              <p className="text-xs text-[#6B7280] pt-1 border-t border-slate-100">
                Spanning Data, AI, Cloud, Cybersecurity, and Cambridge prep.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E5E7EB] rounded-card shadow-subtle space-y-2">
              <div className="text-xs uppercase font-semibold text-[#6B7280] tracking-wider">
                Faculty & Trainers
              </div>
              <div className="font-heading font-serif text-3xl sm:text-4xl font-bold text-[#111827]">
                30 Faculty
              </div>
              <p className="text-xs text-[#6B7280] pt-1 border-t border-slate-100">
                Doctoral scholars from NUS, NTU, Cambridge & Stanford.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E5E7EB] rounded-card shadow-subtle space-y-2">
              <div className="text-xs uppercase font-semibold text-[#6B7280] tracking-wider">
                Satisfaction Rate
              </div>
              <div className="font-heading font-serif text-3xl sm:text-4xl font-bold text-[#047857]">
                99.1%
              </div>
              <p className="text-xs text-[#6B7280] pt-1 border-t border-slate-100">
                Verified distinction and commendable evaluation index.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =======================================================================
           SECTION 3: PROGRAMME CATEGORIES (PREMIUM CARDS)
           ======================================================================= */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#047857]">
                Academic Structure
              </span>
              <h2 className="font-heading font-serif text-3xl sm:text-4xl font-bold text-[#111827] mt-1.5">
                Academic Faculties & Programme Categories
              </h2>
            </div>
            <p className="text-xs text-[#6B7280] max-w-md mt-2 md:mt-0 leading-relaxed">
              Curricula are organized into specialized academic divisions catering to working professionals, corporate teams, and academic scholars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Category 1 */}
            <div className="inst-card p-6 bg-white flex flex-col justify-between rounded-card">
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="text-[10px] font-mono text-[#6B7280] uppercase tracking-wider">
                    FACULTY CODE: AI-CS
                  </span>
                  <span className="text-[10px] font-semibold text-[#047857] bg-[#ECFDF5] px-2 py-0.5 rounded">
                    10 Programmes
                  </span>
                </div>
                <h3 className="font-heading font-serif text-lg font-bold text-[#111827] mb-2">
                  School of Computing & Artificial Intelligence
                </h3>
                <p className="text-xs text-[#6B7280] leading-relaxed mb-4">
                  Curricula covering Generative AI, Large Language Models, Deep Neural Networks, Natural Language Processing, and applied algorithmic systems.
                </p>
              </div>
              <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs">
                <span className="text-[#6B7280]">Executive Diplomas</span>
                <Link href="/courses?category=Artificial+Intelligence" className="font-semibold text-[#047857] hover:underline flex items-center gap-1">
                  View Programmes <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Category 2 */}
            <div className="inst-card p-6 bg-white flex flex-col justify-between rounded-card">
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="text-[10px] font-mono text-[#6B7280] uppercase tracking-wider">
                    FACULTY CODE: DS-BA
                  </span>
                  <span className="text-[10px] font-semibold text-[#047857] bg-[#ECFDF5] px-2 py-0.5 rounded">
                    10 Programmes
                  </span>
                </div>
                <h3 className="font-heading font-serif text-lg font-bold text-[#111827] mb-2">
                  Centre for Data Science & Business Analytics
                </h3>
                <p className="text-xs text-[#6B7280] leading-relaxed mb-4">
                  Advanced statistical modeling, SQL enterprise pipelines, executive business intelligence dashboards, and predictive forecasting.
                </p>
              </div>
              <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs">
                <span className="text-[#6B7280]">SkillsFuture Approved</span>
                <Link href="/courses?category=Data+Analytics" className="font-semibold text-[#047857] hover:underline flex items-center gap-1">
                  View Programmes <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Category 3 */}
            <div className="inst-card p-6 bg-white flex flex-col justify-between rounded-card">
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="text-[10px] font-mono text-[#6B7280] uppercase tracking-wider">
                    FACULTY CODE: SEC-GOV
                  </span>
                  <span className="text-[10px] font-semibold text-[#047857] bg-[#ECFDF5] px-2 py-0.5 rounded">
                    10 Programmes
                  </span>
                </div>
                <h3 className="font-heading font-serif text-lg font-bold text-[#111827] mb-2">
                  Institute of Cyber Security & Governance
                </h3>
                <p className="text-xs text-[#6B7280] leading-relaxed mb-4">
                  Defensive network architecture, penetration testing methodologies, risk governance, and ISO 27001 regulatory compliance.
                </p>
              </div>
              <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs">
                <span className="text-[#6B7280]">Professional Badges</span>
                <Link href="/courses?category=Cyber+Security" className="font-semibold text-[#047857] hover:underline flex items-center gap-1">
                  View Programmes <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Category 4 */}
            <div className="inst-card p-6 bg-white flex flex-col justify-between rounded-card">
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="text-[10px] font-mono text-[#6B7280] uppercase tracking-wider">
                    FACULTY CODE: CLOUD-SYS
                  </span>
                  <span className="text-[10px] font-semibold text-[#047857] bg-[#ECFDF5] px-2 py-0.5 rounded">
                    10 Programmes
                  </span>
                </div>
                <h3 className="font-heading font-serif text-lg font-bold text-[#111827] mb-2">
                  Department of Cloud Architecture & Systems
                </h3>
                <p className="text-xs text-[#6B7280] leading-relaxed mb-4">
                  Multi-cloud infrastructure, AWS Solutions Architect alignment, Docker containerization, Kubernetes, and enterprise microservices.
                </p>
              </div>
              <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs">
                <span className="text-[#6B7280]">AWS & Azure Mapped</span>
                <Link href="/courses?category=Cloud+Computing" className="font-semibold text-[#047857] hover:underline flex items-center gap-1">
                  View Programmes <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Category 5 */}
            <div className="inst-card p-6 bg-white flex flex-col justify-between rounded-card">
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="text-[10px] font-mono text-[#6B7280] uppercase tracking-wider">
                    FACULTY CODE: DEV-PY
                  </span>
                  <span className="text-[10px] font-semibold text-[#047857] bg-[#ECFDF5] px-2 py-0.5 rounded">
                    10 Programmes
                  </span>
                </div>
                <h3 className="font-heading font-serif text-lg font-bold text-[#111827] mb-2">
                  Division of Software Engineering & Applied Python
                </h3>
                <p className="text-xs text-[#6B7280] leading-relaxed mb-4">
                  Core algorithm design, object-oriented system development, enterprise automation scripting, and backend API engineering.
                </p>
              </div>
              <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs">
                <span className="text-[#6B7280]">Hands-On Labs</span>
                <Link href="/courses?category=Python+Programming" className="font-semibold text-[#047857] hover:underline flex items-center gap-1">
                  View Programmes <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Category 6 */}
            <div className="inst-card p-6 bg-white flex flex-col justify-between rounded-card">
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="text-[10px] font-mono text-[#6B7280] uppercase tracking-wider">
                    FACULTY CODE: PREP-ACAD
                  </span>
                  <span className="text-[10px] font-semibold text-[#047857] bg-[#ECFDF5] px-2 py-0.5 rounded">
                    10 Programmes
                  </span>
                </div>
                <h3 className="font-heading font-serif text-lg font-bold text-[#111827] mb-2">
                  Academy for Secondary & Cambridge GCE Studies
                </h3>
                <p className="text-xs text-[#6B7280] leading-relaxed mb-4">
                  Rigorous MOE-aligned preparatory tuition for GCE O-Level, A-Level, and PSLE distinction candidates under former MOE curriculum leads.
                </p>
              </div>
              <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs">
                <span className="text-[#6B7280]">Cambridge Benchmark</span>
                <Link href="/courses?category=O-Level+Preparation" className="font-semibold text-[#047857] hover:underline flex items-center gap-1">
                  View Programmes <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

          <div className="mt-10 text-center">
            <Link href="/courses" className="btn-secondary text-xs sm:text-sm font-semibold px-8 py-3">
              Browse All 10 Academic Faculties & 100 Accredited Programmes →
            </Link>
          </div>

        </div>
      </section>

      {/* =======================================================================
           SECTION 4: FEATURED PROGRAMMES (CLEAN EDITORIAL CARDS)
           ======================================================================= */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC] border-b border-[#E5E7EB]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#047857]">
                Curriculum Registry
              </span>
              <h2 className="font-heading font-serif text-3xl sm:text-4xl font-bold text-[#111827] mt-1.5">
                Featured Executive Programmes
              </h2>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 mt-4 md:mt-0 text-xs">
              <button
                onClick={() => setFeaturedTab('all')}
                className={`px-3.5 py-1.5 rounded-lg border transition ${
                  featuredTab === 'all'
                    ? 'bg-[#047857] text-white border-[#047857] font-semibold'
                    : 'bg-white text-[#6B7280] border-[#E5E7EB] hover:bg-slate-50'
                }`}
              >
                All Curricula
              </button>
              <button
                onClick={() => setFeaturedTab('analytics')}
                className={`px-3.5 py-1.5 rounded-lg border transition ${
                  featuredTab === 'analytics'
                    ? 'bg-[#047857] text-white border-[#047857] font-semibold'
                    : 'bg-white text-[#6B7280] border-[#E5E7EB] hover:bg-slate-50'
                }`}
              >
                Data Science
              </button>
              <button
                onClick={() => setFeaturedTab('intelligence')}
                className={`px-3.5 py-1.5 rounded-lg border transition ${
                  featuredTab === 'intelligence'
                    ? 'bg-[#047857] text-white border-[#047857] font-semibold'
                    : 'bg-white text-[#6B7280] border-[#E5E7EB] hover:bg-slate-50'
                }`}
              >
                Artificial Intelligence
              </button>
              <button
                onClick={() => setFeaturedTab('cloud')}
                className={`px-3.5 py-1.5 rounded-lg border transition ${
                  featuredTab === 'cloud'
                    ? 'bg-[#047857] text-white border-[#047857] font-semibold'
                    : 'bg-white text-[#6B7280] border-[#E5E7EB] hover:bg-slate-50'
                }`}
              >
                Cloud Computing
              </button>
            </div>
          </div>

          {/* Programmes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFeatured.map((course) => (
              <CourseCard key={course.course_id} course={course} />
            ))}
          </div>

          <div className="mt-12 p-6 bg-white border border-[#E5E7EB] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-subtle">
            <div>
              <div className="font-heading font-serif text-base font-bold text-[#111827]">
                Full Academic Prospectus & Course Index
              </div>
              <div className="text-xs text-[#6B7280] mt-0.5">
                Detailed syllabus breakdowns, admission criteria, and academic timetables for all 100 accredited courses.
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/courses" className="btn-primary btn-sm text-xs font-semibold">
                Browse Complete Catalogue
              </Link>
              <Link href="/admissions" className="btn-secondary btn-sm text-xs font-semibold">
                Admissions Guide
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* =======================================================================
           SECTION 5: WHY CHOOSE OUR INSTITUTE (STRUCTURED GRID)
           ======================================================================= */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#047857]">
              Institutional Excellence
            </span>
            <h2 className="font-heading font-serif text-3xl sm:text-4xl font-bold text-[#111827] mt-1.5">
              Why Choose Apex Institute of Singapore
            </h2>
            <div className="editorial-rule mt-3 mb-4" />
            <p className="text-sm text-[#6B7280] leading-relaxed">
              We stand apart through our combination of statutory private education governance, university-level academic research, and direct integration with Singapore's economic workforce priorities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="p-6 bg-[#F8FAFC] border border-[#E5E7EB] rounded-card space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E7EB] text-[#047857] flex items-center justify-center font-bold text-sm shadow-subtle">
                01
              </div>
              <h3 className="font-heading font-serif text-lg font-bold text-[#111827]">
                Academic Rigour & MOE Alignment
              </h3>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                Curricula are crafted under the direction of former senior MOE curriculum specialists and university fellows, prioritizing intellectual depth over superficial software vendor certifications.
              </p>
            </div>

            <div className="p-6 bg-[#F8FAFC] border border-[#E5E7EB] rounded-card space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E7EB] text-[#047857] flex items-center justify-center font-bold text-sm shadow-subtle">
                02
              </div>
              <h3 className="font-heading font-serif text-lg font-bold text-[#111827]">
                University-Trained Faculty
              </h3>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                Instruction is convened exclusively by doctoral scholars and master's degree holders from leading institutions including NUS, NTU, Cambridge, and Carnegie Mellon.
              </p>
            </div>

            <div className="p-6 bg-[#F8FAFC] border border-[#E5E7EB] rounded-card space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E7EB] text-[#047857] flex items-center justify-center font-bold text-sm shadow-subtle">
                03
              </div>
              <h3 className="font-heading font-serif text-lg font-bold text-[#111827]">
                Statutory CPE & EduTrust Accreditation
              </h3>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                Registered under the Private Education Act (Cap 247A). Certified with 4-Year EduTrust quality benchmark and mandatory student fee insurance under Lonpac Insurance Bhd.
              </p>
            </div>

            <div className="p-6 bg-[#F8FAFC] border border-[#E5E7EB] rounded-card space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E7EB] text-[#047857] flex items-center justify-center font-bold text-sm shadow-subtle">
                04
              </div>
              <h3 className="font-heading font-serif text-lg font-bold text-[#111827]">
                Government Subsidy Integration
              </h3>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                Eligible Singapore Citizens and Permanent Residents access up to 50% course fee support via SkillsFuture Credit and the NTUC Union Training Assistance Programme (UTAP).
              </p>
            </div>

            <div className="p-6 bg-[#F8FAFC] border border-[#E5E7EB] rounded-card space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E7EB] text-[#047857] flex items-center justify-center font-bold text-sm shadow-subtle">
                05
              </div>
              <h3 className="font-heading font-serif text-lg font-bold text-[#111827]">
                Islandwide MRT Campus Accessibility
              </h3>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                Ten purpose-built academic facilities located adjacent to major MRT interchange hubs provide state-of-the-art enterprise computing suites and quiet study rooms.
              </p>
            </div>

            <div className="p-6 bg-[#F8FAFC] border border-[#E5E7EB] rounded-card space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E7EB] text-[#047857] flex items-center justify-center font-bold text-sm shadow-subtle">
                06
              </div>
              <h3 className="font-heading font-serif text-lg font-bold text-[#111827]">
                Proven Distinction & Career Trajectory
              </h3>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                Documented 98.6% passing benchmark across Cambridge GCE examinations and rapid promotions for executive candidates in statutory boards and leading corporations.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =======================================================================
           SECTION 6: FACULTY & TRAINERS (LARGE PROFESSIONAL TRAINER CARDS)
           ======================================================================= */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC] border-b border-[#E5E7EB]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#047857]">
              Academic Faculty
            </span>
            <h2 className="font-heading font-serif text-3xl sm:text-4xl font-bold text-[#111827] mt-1.5">
              Distinguished Faculty & Executive Fellows
            </h2>
            <p className="text-sm text-[#6B7280] mt-2 leading-relaxed">
              Apex Institute’s faculty members hold advanced doctoral degrees and terminal professional qualifications from leading global research universities, combining deep pedagogical expertise with executive industry practice.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredFaculty.map((faculty) => (
              <div key={faculty.trainer_id} className="inst-card bg-white overflow-hidden flex flex-col justify-between rounded-card">
                <div>
                  <div className="h-64 bg-slate-200 relative overflow-hidden">
                    <img
                      src={faculty.photo}
                      alt={faculty.full_name}
                      className="w-full h-full object-cover filter grayscale contrast-110"
                    />
                    <div className="absolute bottom-3 left-3 right-3 bg-[#111827]/90 text-white text-[11px] px-2.5 py-1 rounded-md font-medium">
                      {faculty.qualifications[0]}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="text-[10px] font-mono uppercase text-[#047857] font-semibold tracking-wider">
                      {faculty.specialization}
                    </div>
                    <h3 className="font-heading font-serif text-base font-bold text-[#111827] mt-1">
                      <Link href={`/trainers/${faculty.trainer_id}`} className="hover:text-[#047857] transition">
                        {faculty.display_name}
                      </Link>
                    </h3>
                    <div className="text-xs text-[#6B7280] font-medium mt-0.5">
                      {faculty.title}
                    </div>

                    <p className="text-xs text-[#6B7280] mt-3 line-clamp-3 leading-relaxed">
                      {faculty.bio}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#F1F5F9] flex items-center justify-between text-xs text-[#6B7280]">
                  <span className="text-[11px] font-medium">{faculty.experience_years}+ Years Pedagogy</span>
                  <Link
                    href={`/trainers/${faculty.trainer_id}`}
                    className="font-semibold text-[#047857] hover:underline"
                  >
                    Faculty CV →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/trainers" className="btn-secondary text-xs sm:text-sm font-semibold px-8 py-3">
              View All 30 Faculty Fellows & Research Lecturers →
            </Link>
          </div>

        </div>
      </section>

      {/* =======================================================================
           SECTION 7: LEARNING EXPERIENCE (ONLINE, HYBRID, CLASSROOM)
           ======================================================================= */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#047857]">
              Pedagogical Delivery
            </span>
            <h2 className="font-heading font-serif text-3xl sm:text-4xl font-bold text-[#111827] mt-1.5">
              The Apex Learning Experience
            </h2>
            <p className="text-sm text-[#6B7280] mt-2">
              Flexible, high-impact study modes tailored for working professionals, corporate teams, and academic scholars across Singapore.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Mode 1: Classroom */}
            <div className="p-8 bg-[#F8FAFC] border border-[#E5E7EB] rounded-card space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E7EB] text-[#047857] flex items-center justify-center font-bold text-xl shadow-subtle">
                🏛️
              </div>
              <h3 className="font-heading font-serif text-xl font-bold text-[#111827]">
                Classroom Learning
              </h3>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                In-person seminars hosted at our 10 Singapore campuses. Experience high-spec executive computing labs, seminar theatres, and small-group syndicate rooms with direct faculty mentorship.
              </p>
              <ul className="text-xs text-[#111827] space-y-2 pt-2 border-t border-[#E5E7EB]">
                <li className="flex items-center gap-2">✓ Sheltered MRT hub access islandwide</li>
                <li className="flex items-center gap-2">✓ High-performance computing workstations</li>
                <li className="flex items-center gap-2">✓ Direct peer networking and cohort discussion</li>
              </ul>
            </div>

            {/* Mode 2: Hybrid */}
            <div className="p-8 bg-[#F8FAFC] border border-[#047857] rounded-card space-y-4 relative">
              <div className="absolute top-4 right-4 bg-[#ECFDF5] text-[#047857] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                Popular Model
              </div>
              <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E7EB] text-[#047857] flex items-center justify-center font-bold text-xl shadow-subtle">
                ⚖️
              </div>
              <h3 className="font-heading font-serif text-xl font-bold text-[#111827]">
                Executive Hybrid Learning
              </h3>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                The optimal blend for working executives. Fortnightly weekend or evening in-person masterclasses paired with guided digital project assignments and asynchronous lab environments.
              </p>
              <ul className="text-xs text-[#111827] space-y-2 pt-2 border-t border-[#E5E7EB]">
                <li className="flex items-center gap-2">✓ Fortnightly on-campus executive intensives</li>
                <li className="flex items-center gap-2">✓ Cloud-based sandbox lab access 24/7</li>
                <li className="flex items-center gap-2">✓ Optimized for demanding work schedules</li>
              </ul>
            </div>

            {/* Mode 3: Online */}
            <div className="p-8 bg-[#F8FAFC] border border-[#E5E7EB] rounded-card space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E7EB] text-[#047857] flex items-center justify-center font-bold text-xl shadow-subtle">
                💻
              </div>
              <h3 className="font-heading font-serif text-xl font-bold text-[#111827]">
                Live Synchronous Online
              </h3>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                Faculty-led interactive lectures delivered live via our secure academic portal. Participate in real-time Q&A, breakout case studies, and access recorded archives for revision.
              </p>
              <ul className="text-xs text-[#111827] space-y-2 pt-2 border-t border-[#E5E7EB]">
                <li className="flex items-center gap-2">✓ 100% live faculty engagement and Q&A</li>
                <li className="flex items-center gap-2">✓ High-definition session replay repository</li>
                <li className="flex items-center gap-2">✓ Flexible attendance from home or office</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* =======================================================================
           SECTION 8: CERTIFICATIONS & ACCREDITATION (TRUST INDICATORS)
           ======================================================================= */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC] border-b border-[#E5E7EB]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#047857]">
              Credentials & Governance
            </span>
            <h2 className="font-heading font-serif text-3xl sm:text-4xl font-bold text-[#111827] mt-1.5">
              Accreditations & Qualifications Conferred
            </h2>
            <p className="text-sm text-[#6B7280] mt-2 leading-relaxed">
              Qualifications conferred by Apex Institute of Singapore carry verified institutional credentials, cryptographic verification IDs, and alignment with Singapore's national competency benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 bg-white border border-[#E5E7EB] rounded-card space-y-3 shadow-subtle">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#111827]">
                Executive Diplomas
              </div>
              <h3 className="font-heading font-serif text-lg font-bold text-[#111827]">
                Board Conferred Diplomas
              </h3>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                Awarded upon the successful completion of a multi-module specialization. Endorsed by the Academic Board and accompanied by an official Academic Transcript documenting modular grades and credit hours.
              </p>
              <div className="pt-2 text-[11px] text-[#047857] font-semibold">
                ✓ Issued with Secure QR Verification Registry
              </div>
            </div>

            <div className="p-6 bg-white border border-[#E5E7EB] rounded-card space-y-3 shadow-subtle">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#111827]">
                SkillsFuture Statements
              </div>
              <h3 className="font-heading font-serif text-lg font-bold text-[#111827]">
                SSG National Competencies
              </h3>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                Modular units mapped directly to Singapore Skills Framework standards. Eligible participants receive national Statements of Attainment (SOA) recognized across Singapore statutory boards and enterprise employers.
              </p>
              <div className="pt-2 text-[11px] text-[#047857] font-semibold">
                ✓ Non-WSQ & Skills Framework Registered
              </div>
            </div>

            <div className="p-6 bg-white border border-[#E5E7EB] rounded-card space-y-3 shadow-subtle">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#111827]">
                Academic Distinction Citations
              </div>
              <h3 className="font-heading font-serif text-lg font-bold text-[#111827]">
                Preparatory Examination Honors
              </h3>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                Conferred upon scholars who attain top decile benchmark scores across mock Cambridge GCE O/A-Level and PSLE examinations administered under the oversight of our Examination Board.
              </p>
              <div className="pt-2 text-[11px] text-[#047857] font-semibold">
                ✓ Verified Portfolio for Tertiary Applications
              </div>
            </div>

          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between p-5 bg-white border border-[#E5E7EB] rounded-xl text-xs shadow-subtle">
            <div className="text-[#6B7280]">
              Need to authenticate a certificate issued to an alumnus? Consult the central verification registry.
            </div>
            <button
              onClick={() => openCertModal(certifications[0])}
              className="mt-3 sm:mt-0 btn-secondary btn-sm text-xs font-semibold"
            >
              Verify Certificate Registry Code
            </button>
          </div>

        </div>
      </section>

      {/* =======================================================================
           SECTION 9: CAMPUS LOCATIONS (MODERN LOCATION CARDS)
           ======================================================================= */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#047857]">
              Campus Network
            </span>
            <h2 className="font-heading font-serif text-3xl sm:text-4xl font-bold text-[#111827] mt-1.5">
              Singapore Campus Locations
            </h2>
            <p className="text-sm text-[#6B7280] mt-2 leading-relaxed">
              Ten modern, sheltered learning facilities conveniently located within walking distance of major Singapore MRT stations. Equipped with high-speed executive seminar suites and dedicated scholar facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campuses.slice(0, 6).map((campus) => (
              <div key={campus.id} className="inst-card p-6 bg-white flex flex-col justify-between rounded-card">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#6B7280]">
                      CAMPUS ID: {campus.id}
                    </span>
                    <span className="text-[10px] font-semibold text-[#047857] bg-[#ECFDF5] px-2 py-0.5 rounded">
                      {campus.type}
                    </span>
                  </div>

                  <h3 className="font-heading font-serif text-lg font-bold text-[#111827] mb-2">
                    {campus.name}
                  </h3>

                  <div className="flex items-start gap-1.5 text-xs text-[#6B7280] mt-2">
                    <MapPin className="w-3.5 h-3.5 text-[#D97706] mt-0.5 flex-shrink-0" />
                    <span>{campus.address}</span>
                  </div>

                  <div className="text-xs text-[#6B7280] mt-1 pl-5">
                    Nearest MRT: <span className="font-semibold text-[#111827]">{campus.mrt} Station</span>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F1F5F9] flex items-center justify-between text-xs text-[#6B7280]">
                  <span>{campus.phone}</span>
                  <Link href="/contact" className="font-semibold text-[#047857] hover:underline flex items-center gap-1">
                    Facility Details <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl flex flex-col sm:flex-row items-center justify-between text-xs text-[#6B7280]">
            <span>Also operating facilities at Bugis Heritage Hub, Marine Parade, Clementi, and Novena Medical Hub.</span>
            <Link href="/contact" className="font-semibold text-[#047857] hover:underline mt-2 sm:mt-0">
              View All 10 Campus Coordinates & Opening Hours →
            </Link>
          </div>

        </div>
      </section>

      {/* =======================================================================
           SECTION 10: STUDENT TESTIMONIALS (EDITORIAL LAYOUT)
           ======================================================================= */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC] border-b border-[#E5E7EB]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#047857]">
              Alumni Perspectives
            </span>
            <h2 className="font-heading font-serif text-3xl sm:text-4xl font-bold text-[#111827] mt-1.5">
              Reflections on Academic & Professional Impact
            </h2>
            <p className="text-sm text-[#6B7280] mt-2 leading-relaxed">
              Independent accounts from enterprise practitioners, government officers, and parents regarding our curriculum rigour, faculty mentorship, and educational outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-8 bg-white border border-[#E5E7EB] rounded-card space-y-5 flex flex-col justify-between shadow-subtle">
              <div>
                <div className="text-[#D97706] text-sm mb-3">★★★★★</div>
                <p className="text-xs sm:text-sm text-[#111827] italic leading-relaxed">
                  "The Executive Diploma in Machine Learning avoided superficial vendor tools and grounded us in mathematical optimization and production architecture. The depth of instruction under Dr. Lin Chen was equivalent to a graduate university seminar."
                </p>
              </div>
              <div className="pt-4 border-t border-[#F1F5F9]">
                <div className="font-heading font-serif text-base font-bold text-[#111827]">
                  Rachel Tan
                </div>
                <div className="text-xs text-[#6B7280]">
                  Vice President, Risk Analytics • DBS Bank
                </div>
                <div className="text-[11px] text-[#047857] font-semibold mt-0.5">
                  Alumna, Executive Class of 2025
                </div>
              </div>
            </div>

            <div className="p-8 bg-white border border-[#E5E7EB] rounded-card space-y-5 flex flex-col justify-between shadow-subtle">
              <div>
                <div className="text-[#D97706] text-sm mb-3">★★★★★</div>
                <p className="text-xs sm:text-sm text-[#111827] italic leading-relaxed">
                  "Having completed tertiary education abroad, I enrolled in the Enterprise Cloud Architecture curriculum to align with Singapore's public sector cloud migration guidelines. The enterprise laboratory environments were exceptionally thorough."
                </p>
              </div>
              <div className="pt-4 border-t border-[#F1F5F9]">
                <div className="font-heading font-serif text-base font-bold text-[#111827]">
                  Jonathan Wong
                </div>
                <div className="text-xs text-[#6B7280]">
                  Lead Cloud Solutions Architect • GovTech Singapore
                </div>
                <div className="text-[11px] text-[#047857] font-semibold mt-0.5">
                  Alumnus, Cloud Architecture Cohort
                </div>
              </div>
            </div>

            <div className="p-8 bg-white border border-[#E5E7EB] rounded-card space-y-5 flex flex-col justify-between shadow-subtle">
              <div>
                <div className="text-[#D97706] text-sm mb-3">★★★★★</div>
                <p className="text-xs sm:text-sm text-[#111827] italic leading-relaxed">
                  "The Cambridge GCE O-Level preparatory faculty provided my daughter with structured heuristic methods and intellectual confidence. Her subsequent distinction in Additional Mathematics was directly attributable to their structured pedagogy."
                </p>
              </div>
              <div className="pt-4 border-t border-[#F1F5F9]">
                <div className="font-heading font-serif text-base font-bold text-[#111827]">
                  Mrs. Evelyn Lim
                </div>
                <div className="text-xs text-[#6B7280]">
                  Parent of Secondary 4 Scholar, Raffles Girls' School
                </div>
                <div className="text-[11px] text-[#047857] font-semibold mt-0.5">
                  Academic Preparatory Division
                </div>
              </div>
            </div>

          </div>

          <div className="mt-10 text-center">
            <Link href="/reviews" className="font-semibold text-xs sm:text-sm text-[#047857] hover:underline">
              Read all 200 verified course evaluations and alumni reviews →
            </Link>
          </div>

        </div>
      </section>

      {/* =======================================================================
           SECTION 11: ADMISSIONS PROCESS (STEP-BY-STEP TIMELINE)
           ======================================================================= */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#047857]">
              Admissions Journey
            </span>
            <h2 className="font-heading font-serif text-3xl sm:text-4xl font-bold text-[#111827] mt-1.5">
              Four-Stage Admissions Process
            </h2>
            <p className="text-sm text-[#6B7280] mt-2">
              A clear, transparent matriculation process compliant with the Singapore Committee for Private Education regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 bg-[#F8FAFC] border border-[#E5E7EB] rounded-card space-y-3 relative">
              <div className="text-xs font-mono font-bold text-[#047857]">STAGE 01</div>
              <h3 className="font-heading font-serif text-lg font-bold text-[#111827]">
                Programme Advisory
              </h3>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                Consult with our academic admissions advisors to benchmark competency prerequisites and determine the suitable qualification track.
              </p>
              <div className="pt-2 text-[11px] text-[#6B7280]">
                • Syllabi Review & Schedule Mapping
              </div>
            </div>

            <div className="p-6 bg-[#F8FAFC] border border-[#E5E7EB] rounded-card space-y-3 relative">
              <div className="text-xs font-mono font-bold text-[#047857]">STAGE 02</div>
              <h3 className="font-heading font-serif text-lg font-bold text-[#111827]">
                Eligibility & Grants
              </h3>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                Academic Board verifies tertiary qualifications or portfolio. Submission of SkillsFuture Singapore and NTUC UTAP subsidy applications.
              </p>
              <div className="pt-2 text-[11px] text-[#6B7280]">
                • Up to 50% Subsidies Verified
              </div>
            </div>

            <div className="p-6 bg-[#F8FAFC] border border-[#E5E7EB] rounded-card space-y-3 relative">
              <div className="text-xs font-mono font-bold text-[#047857]">STAGE 03</div>
              <h3 className="font-heading font-serif text-lg font-bold text-[#111827]">
                CPE Contract & FPS
              </h3>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                Formal execution of the Committee for Private Education (CPE) Standard Student Contract and issuance of Lonpac Fee Protection certificate.
              </p>
              <div className="pt-2 text-[11px] text-[#6B7280]">
                • 100% Student Fee Insurance Issued
              </div>
            </div>

            <div className="p-6 bg-[#F8FAFC] border border-[#E5E7EB] rounded-card space-y-3 relative">
              <div className="text-xs font-mono font-bold text-[#047857]">STAGE 04</div>
              <h3 className="font-heading font-serif text-lg font-bold text-[#111827]">
                Matriculation
              </h3>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                Receipt of student ID credentials, digital learning portal access, course pack dispatch, and seminar orientation commencement.
              </p>
              <div className="pt-2 text-[11px] text-[#6B7280]">
                • Cohort Welcome & Lab Onboarding
              </div>
            </div>

          </div>

          <div className="mt-12 text-center">
            <Link href="/admissions" className="btn-primary text-xs sm:text-sm font-semibold px-8 py-3">
              Begin Admissions Application Portal →
            </Link>
          </div>

        </div>
      </section>

      {/* =======================================================================
           SECTION 12: FAQ (INSTITUTIONAL ACCORDION)
           ======================================================================= */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC] border-b border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#047857]">
              Inquiries & Regulations
            </span>
            <h2 className="font-heading font-serif text-3xl sm:text-4xl font-bold text-[#111827] mt-1.5">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#6B7280] mt-2">
              Official institutional responses to common questions regarding admissions, funding claims, academic policies, and CPE student protection.
            </p>
          </div>

          <div className="divide-y divide-[#E5E7EB] border-y border-[#E5E7EB] bg-white rounded-2xl shadow-subtle p-6">
            {faqs.map((faq, idx) => {
              const isExpanded = expandedFaq === idx;
              return (
                <div key={idx} className="py-4">
                  <button
                    type="button"
                    onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                    className="w-full flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="font-heading font-serif text-base font-bold text-[#111827] pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#6B7280] flex-shrink-0 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180 text-[#047857]' : ''
                      }`}
                    />
                  </button>
                  {isExpanded && (
                    <div className="mt-3 text-xs sm:text-sm text-[#6B7280] leading-relaxed pr-6">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center text-xs text-[#6B7280]">
            Have a specialized inquiry regarding exemptions or credit transfer? Contact our{' '}
            <Link href="/contact" className="font-semibold text-[#047857] hover:underline">
              Office of Admissions
            </Link>
            .
          </div>

        </div>
      </section>

      {/* =======================================================================
           SECTION 13: CONTACT & INQUIRY
           ======================================================================= */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Official Contact Coordinates */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#047857]">
                  Admissions Office
                </span>
                <h2 className="font-heading font-serif text-3xl sm:text-4xl font-bold text-[#111827] mt-1.5">
                  Connect with the Academic Registry
                </h2>
                <div className="editorial-rule mt-3" />
              </div>

              <p className="text-sm text-[#6B7280] leading-relaxed">
                The Office of Academic Admissions assists prospective scholars, working professionals, and corporate enterprise partners with curriculum selection, prerequisite verification, and SkillsFuture grant administration.
              </p>

              <div className="space-y-4 pt-2 text-xs">
                <div className="flex items-start gap-3">
                  <Building className="w-4 h-4 text-[#047857] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-[#111827]">Principal Campus & Registry</div>
                    <div className="text-[#6B7280] mt-0.5">
                      111 Somerset Road, #10-01 TripleOne Somerset, Singapore 238164
                    </div>
                    <div className="text-[11px] text-[#6B7280] mt-0.5">
                      Adjacent to Somerset MRT (North-South Line, Exit A)
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#047857] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-[#111827]">Admissions Telephone Hotline</div>
                    <div className="text-[#6B7280] mt-0.5">+65 6732 8888 / +65 8299 1234</div>
                    <div className="text-[11px] text-[#6B7280] mt-0.5">
                      Mondays to Fridays: 09:00 – 18:00 SGT
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#047857] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-[#111827]">Official Electronic Correspondence</div>
                    <div className="text-[#6B7280] mt-0.5">admissions@apex.edu.sg</div>
                    <div className="text-[11px] text-[#6B7280] mt-0.5">
                      Corporate Sponsorship: executive@apex.edu.sg
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-card text-xs space-y-1">
                <div className="font-bold text-[#111827]">Statutory Registration & Governance</div>
                <div className="text-[#6B7280]">Company Registration No: 201829481E</div>
                <div className="text-[#6B7280]">CPE Registration Period: 15 July 2022 to 14 July 2026</div>
                <div className="text-[#6B7280]">EduTrust 4-Year Quality Certification Award</div>
              </div>
            </div>

            {/* Right Column: Formal Academic Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-[#E5E7EB] p-6 sm:p-8 rounded-card shadow-soft">
                <h3 className="font-heading font-serif text-2xl font-bold text-[#111827] mb-1">
                  Official Programme Enquiry Form
                </h3>
                <p className="text-xs text-[#6B7280] mb-6">
                  Complete this form to request a formal syllabus prospectus, verify prerequisite eligibility, or schedule an academic consultation.
                </p>

                {enquirySubmitted ? (
                  <div className="p-8 bg-[#ECFDF5] border border-[#A7F3D0] rounded-xl text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-[#047857] mx-auto" />
                    <h4 className="font-heading font-serif text-xl font-bold text-[#111827]">
                      Enquiry Successfully Received
                    </h4>
                    <p className="text-xs text-[#6B7280] max-w-md mx-auto leading-relaxed">
                      Thank you for your inquiry. A formal prospectus and application guidance note have been dispatched to your email address. An Admissions Officer will contact you within one business day.
                    </p>
                    <button
                      onClick={() => setEnquirySubmitted(false)}
                      className="btn-secondary btn-sm text-xs font-semibold"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-semibold text-[#111827] uppercase tracking-wider mb-1">
                          Full Name (as in NRIC / Passport) *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Dr. / Mr. / Ms. Tan Wei Ming"
                          className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#E5E7EB] rounded-xl text-[#111827] focus:outline-none focus:border-[#047857]"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-[#111827] uppercase tracking-wider mb-1">
                          Corporate Organisation / School
                        </label>
                        <input
                          type="text"
                          value={formData.organisation}
                          onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                          placeholder="e.g. Government Agency, Bank, Self"
                          className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#E5E7EB] rounded-xl text-[#111827] focus:outline-none focus:border-[#047857]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-semibold text-[#111827] uppercase tracking-wider mb-1">
                          Official Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@organisation.com"
                          className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#E5E7EB] rounded-xl text-[#111827] focus:outline-none focus:border-[#047857]"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-[#111827] uppercase tracking-wider mb-1">
                          Contact Telephone *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+65 9123 4567"
                          className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#E5E7EB] rounded-xl text-[#111827] focus:outline-none focus:border-[#047857]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-semibold text-[#111827] uppercase tracking-wider mb-1">
                          Academic Discipline of Interest *
                        </label>
                        <select
                          value={formData.programme}
                          onChange={(e) => setFormData({ ...formData, programme: e.target.value })}
                          className="w-full px-3 py-2.5 text-xs bg-white border border-[#E5E7EB] rounded-xl text-[#111827] focus:outline-none focus:border-[#047857]"
                        >
                          {Object.keys(categories).map((cat) => (
                            <option key={cat} value={cat}>
                              {cat}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-[#111827] uppercase tracking-wider mb-1">
                          Preferred Intake Term
                        </label>
                        <select
                          value={formData.intakeTerm}
                          onChange={(e) => setFormData({ ...formData, intakeTerm: e.target.value })}
                          className="w-full px-3 py-2.5 text-xs bg-white border border-[#E5E7EB] rounded-xl text-[#111827] focus:outline-none focus:border-[#047857]"
                        >
                          <option value="October 2026">October 2026 Term</option>
                          <option value="November 2026">November 2026 Term</option>
                          <option value="January 2027">January 2027 Term</option>
                          <option value="March 2027">March 2027 Term</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#111827] uppercase tracking-wider mb-1">
                        Specific Questions or Objectives
                      </label>
                      <textarea
                        rows={3}
                        value={formData.enquiry}
                        onChange={(e) => setFormData({ ...formData, enquiry: e.target.value })}
                        placeholder="State any specific module topics, corporate sponsorship requirements, or prerequisite considerations..."
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#E5E7EB] rounded-xl text-[#111827] focus:outline-none focus:border-[#047857]"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <p className="text-[10px] text-[#6B7280]">
                        Information submitted is protected under the Singapore Personal Data Protection Act (PDPA).
                      </p>
                      <button type="submit" className="btn-primary text-xs font-semibold px-8 py-3 whitespace-nowrap">
                        Submit Enquiry to Admissions Office
                      </button>
                    </div>
                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
