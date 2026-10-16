#!/usr/bin/env python3
"""
Dagsis University Dummy — AI Chatbot Master Knowledge Base & Retrieval Corpus PDF Generator
Ultra-Comprehensive Knowledge Base containing complete operational, academic, curricular,
statutory, and conversational data for all 100 courses, 30 trainers, 10 campuses, 20 certs,
government subsidies, student contracts, and 55+ verbatim conversational prompt-response pairs.
"""

import os
import sys
import json
import re
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
    PageBreak,
    KeepTogether,
    HRFlowable,
)
from reportlab.pdfgen import canvas

# ----------------------------------------------------------------------
# 1. Numbered Canvas for Running Headers and Footers ("Page X of Y")
# ----------------------------------------------------------------------
class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_header_footer(num_pages)
            canvas.Canvas.showPage(self)
        canvas.Canvas.save(self)

    def draw_header_footer(self, page_count):
        self.saveState()
        
        # Suppress running header/footer on cover page (page 1)
        if self._pageNumber > 1:
            # Header text
            self.setFont("Helvetica-Bold", 7)
            self.setFillColor(colors.HexColor("#047857"))
            self.drawString(36, A4[1] - 25, "DAGSIS UNIVERSITY DUMMY")
            
            self.setFont("Helvetica", 7)
            self.setFillColor(colors.HexColor("#64748B"))
            self.drawString(175, A4[1] - 25, "•  Master AI Chatbot Knowledge Base & Retrieval Corpus")
            self.drawRightString(A4[0] - 36, A4[1] - 25, "CPE REG: 201829481E  |  EduTrust 4-Year")
            
            # Header line
            self.setStrokeColor(colors.HexColor("#E2E8F0"))
            self.setLineWidth(0.6)
            self.line(36, A4[1] - 28, A4[0] - 36, A4[1] - 28)

            # Footer line
            self.line(36, 30, A4[0] - 36, 30)

            # Footer text
            self.setFont("Helvetica", 7)
            self.setFillColor(colors.HexColor("#64748B"))
            self.drawString(36, 20, "CONFIDENTIAL & STATUTORY CORPUS  •  Approved for RAG / Embedding Vectorization")
            
            self.setFont("Helvetica-Bold", 7)
            self.setFillColor(colors.HexColor("#111827"))
            self.drawRightString(A4[0] - 36, 20, f"Page {self._pageNumber} of {page_count}")
        
        self.restoreState()


# ----------------------------------------------------------------------
# 2. Data Extractor from lib/educationData.ts
# ----------------------------------------------------------------------
def load_data():
    with open('lib/educationData.ts', 'r', encoding='utf-8') as f:
        content = f.read()

    data = {}
    
    # Courses
    m_courses = re.search(r'export const courses: Course\[\] = (\[[\s\S]*?\]);', content)
    data['courses'] = json.loads(m_courses.group(1)) if m_courses else []

    # Campuses
    m_camp = re.search(r'export const campuses: Campus\[\] = (\[[\s\S]*?\]);', content)
    data['campuses'] = json.loads(m_camp.group(1)) if m_camp else []

    # Trainers
    m_train = re.search(r'export const trainers: Trainer\[\] = (\[[\s\S]*?\]);', content)
    data['trainers'] = json.loads(m_train.group(1)) if m_train else []

    # Certifications
    m_certs = re.search(r'export const certifications: Certification\[\] = (\[[\s\S]*?\]);', content)
    data['certifications'] = json.loads(m_certs.group(1)) if m_certs else []

    # Categories
    m_cats = re.search(r'export const categories: Record<string, CategoryInfo> = (\{[\s\S]*?\});', content)
    data['categories'] = json.loads(m_cats.group(1)) if m_cats else {}

    # Reviews
    m_rev = re.search(r'export const reviews(?::\s*[^=]+)?\s*=\s*(\[[\s\S]*?\]);', content)
    data['reviews'] = json.loads(m_rev.group(1)) if m_rev else []

    # Institute Info
    m_info = re.search(r'export const instituteInfo(?::\s*[^=]+)?\s*=\s*(\{[\s\S]*?\});', content)
    data['instituteInfo'] = json.loads(m_info.group(1)) if m_info else {}

    return data


# ----------------------------------------------------------------------
# 3. PDF Generator Function
# ----------------------------------------------------------------------
def generate_pdf(output_path, data):
    doc = SimpleDocTemplate(
        output_path,
        pagesize=A4,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=36,
    )

    printable_width = A4[0] - 72  # 523.27 pt

    styles = getSampleStyleSheet()

    # Brand Colors
    c_primary = colors.HexColor("#047857")      # Institutional Emerald
    c_primary_dark = colors.HexColor("#065F46") # Deep Forest
    c_primary_light = colors.HexColor("#ECFDF5")# Muted Emerald Background
    c_secondary = colors.HexColor("#D97706")    # Amber
    c_dark = colors.HexColor("#111827")         # Charcoal Heading
    c_text = colors.HexColor("#1E293B")         # Body Slate
    c_muted = colors.HexColor("#64748B")        # Slate Muted
    c_surface = colors.HexColor("#F8FAFC")      # Surface Background
    c_border = colors.HexColor("#E2E8F0")       # Border

    # Typography Styles
    title_style = ParagraphStyle(
        'CoverTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=24,
        leading=28,
        textColor=c_dark,
        spaceAfter=6,
    )

    subtitle_style = ParagraphStyle(
        'CoverSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=11,
        leading=15,
        textColor=c_primary,
        spaceAfter=14,
    )

    h1_style = ParagraphStyle(
        'Heading1_Custom',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=13,
        leading=17,
        textColor=c_dark,
        spaceBefore=14,
        spaceAfter=5,
        keepWithNext=True,
    )

    h2_style = ParagraphStyle(
        'Heading2_Custom',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=14,
        textColor=c_primary_dark,
        spaceBefore=9,
        spaceAfter=4,
        keepWithNext=True,
    )

    h3_style = ParagraphStyle(
        'Heading3_Custom',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=12,
        textColor=c_dark,
        spaceBefore=6,
        spaceAfter=2,
        keepWithNext=True,
    )

    body_style = ParagraphStyle(
        'Body_Custom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=11.5,
        textColor=c_text,
        spaceAfter=4,
    )

    body_bold = ParagraphStyle(
        'Body_Bold_Custom',
        parent=body_style,
        fontName='Helvetica-Bold',
    )

    caption_style = ParagraphStyle(
        'Caption_Custom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7,
        leading=9.5,
        textColor=c_muted,
    )

    table_header_style = ParagraphStyle(
        'TableHeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=7.5,
        leading=10,
        textColor=colors.white,
    )

    table_cell_style = ParagraphStyle(
        'TableCell',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7,
        leading=9.5,
        textColor=c_text,
    )

    table_cell_bold = ParagraphStyle(
        'TableCellBold',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=7,
        leading=9.5,
        textColor=c_dark,
    )

    table_cell_code = ParagraphStyle(
        'TableCellCode',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=7,
        leading=9.5,
        textColor=c_primary,
    )

    callout_style = ParagraphStyle(
        'CalloutText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.5,
        leading=11,
        textColor=c_text,
    )

    dossier_title = ParagraphStyle(
        'DossierTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11,
        textColor=c_primary_dark,
    )

    dossier_body = ParagraphStyle(
        'DossierBody',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7,
        leading=9.5,
        textColor=c_text,
    )

    story = []

    # ------------------------------------------------------------------
    # COVER / EXECUTIVE HEADER
    # ------------------------------------------------------------------
    story.append(Paragraph("DAGSIS UNIVERSITY DUMMY", title_style))
    story.append(Paragraph("MASTER AI CHATBOT KNOWLEDGE BASE & COMPLETE INSTITUTIONAL REPOSITORY", subtitle_style))

    # Meta banner table
    meta_table_data = [
        [
            Paragraph("<b>Registration:</b> CPE UEN: 201829481E<br/><b>Validity:</b> 4-Year EduTrust Certified", caption_style),
            Paragraph("<b>Principal Address:</b><br/>123, Street ABC, State XYZ, Pin-000000", caption_style),
            Paragraph("<b>Central Hotline / WhatsApp:</b><br/>+65 XXXXXXXXX", caption_style),
            Paragraph("<b>Official Email:</b><br/>admissions@dagsis.edu.sg", caption_style),
        ]
    ]
    meta_table = Table(meta_table_data, colWidths=[130, 140, 120, 133])
    meta_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), c_surface),
        ('BOX', (0, 0), (-1, -1), 0.8, c_border),
        ('INNERGRID', (0, 0), (-1, -1), 0.5, c_border),
        ('TOPPADDING', (0, 0), (-1, -1), 5),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 5),
        ('LEFTPADDING', (0, 0), (-1, -1), 6),
        ('RIGHTPADDING', (0, 0), (-1, -1), 6),
    ]))
    story.append(meta_table)
    story.append(Spacer(1, 10))

    # Purpose / Notice Box
    purpose_html = (
        "<b>OFFICIAL AGENT INSTRUCTION & SCOPE:</b> This master document serves as the single source of truth for the "
        "Dagsis AI Chatbot Agent. It encapsulates exhaustive operational, academic, statutory, fee, and admissions policies "
        "across all 100 courses, 30 faculty trainers, 10 regional campuses, 20 certifications, and government subsidy calculations. "
        "The agent must quote exact numbers, policies, prerequisites, and contact details from this corpus without hallucination."
    )
    p_box = Table([[Paragraph(purpose_html, callout_style)]], colWidths=[printable_width])
    p_box.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), c_primary_light),
        ('BOX', (0, 0), (-1, -1), 1, c_primary),
        ('PADDING', (0, 0), (-1, -1), 8),
    ]))
    story.append(p_box)
    story.append(Spacer(1, 12))

    # ------------------------------------------------------------------
    # SECTION 1: INSTITUTIONAL GOVERNANCE, AUDIT & KEY METRICS
    # ------------------------------------------------------------------
    story.append(Paragraph("1. Institutional Governance, Accreditation & Performance Metrics", h1_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=c_primary, spaceBefore=2, spaceAfter=8))

    sec1_text = (
        "<b>Dagsis University Dummy</b> is a distinguished Private Education Institution (PEI) duly registered under the "
        "Private Education Act (Chapter 247A) of Singapore (UEN: 201829481E). The University maintains a 4-Year EduTrust Certification, "
        "authorizing the delivery of executive diplomas, technical certificates, and Cambridge academic preparatory curricula.<br/>"
        "• <b>Academic Distinction & Standards:</b> Registered with the Academic & Examination Board of Singapore.<br/>"
        "• <b>Historical Alumni Body:</b> Over 14,850+ graduated executives, working adults, and academic distinction scholars.<br/>"
        "• <b>Overall Pass & Distinction Rate:</b> 98.4% across all modular technical and preparatory examinations.<br/>"
        "• <b>Independent Student Satisfaction Benchmark:</b> 99.1% overall student approval rating.<br/>"
        "• <b>Approved Government Schemes:</b> SkillsFuture Singapore (SSG) approved training partner, NTUC Union Training Assistance Programme (UTAP) eligible, Post-Secondary Education Account (PSEA) compliant."
    )
    story.append(Paragraph(sec1_text, body_style))
    story.append(Spacer(1, 10))

    # Key Metrics Dashboard Table
    metrics_data = [
        [
            Paragraph("<b>Active Programmes</b><br/><font size=10 color='#047857'><b>100 Courses</b></font>", table_cell_style),
            Paragraph("<b>Faculty Members</b><br/><font size=10 color='#047857'><b>30 Master Trainers</b></font>", table_cell_style),
            Paragraph("<b>Campus Network</b><br/><font size=10 color='#047857'><b>10 Facilities</b></font>", table_cell_style),
            Paragraph("<b>Industry Credentials</b><br/><font size=10 color='#047857'><b>20 Certifications</b></font>", table_cell_style),
            Paragraph("<b>CPE Pass Rate</b><br/><font size=10 color='#047857'><b>98.4%</b></font>", table_cell_style),
        ]
    ]
    t_metrics = Table(metrics_data, colWidths=[104, 105, 105, 105, 104])
    t_metrics.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), c_surface),
        ('BOX', (0, 0), (-1, -1), 0.8, c_border),
        ('INNERGRID', (0, 0), (-1, -1), 0.5, c_border),
        ('PADDING', (0, 0), (-1, -1), 6),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
    ]))
    story.append(t_metrics)
    story.append(Spacer(1, 14))

    # ------------------------------------------------------------------
    # SECTION 2: COMPLETE DIRECTORY OF ALL 10 SINGAPORE CAMPUSES
    # ------------------------------------------------------------------
    story.append(Paragraph("2. Complete Directory of All 10 Singapore Campus Locations", h1_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=c_primary, spaceBefore=2, spaceAfter=8))
    story.append(Paragraph("All regional campuses operate high-speed enterprise workstations, lecture theaters, and collaborative breakout pods.", body_style))

    campus_rows = [
        [
            Paragraph("Campus Name & Specialization", table_header_style),
            Paragraph("Address & Direct Line", table_header_style),
            Paragraph("Nearest MRT & Access Route", table_header_style),
            Paragraph("Operating Hours (SGT)", table_header_style),
        ]
    ]

    for c in data['campuses']:
        campus_rows.append([
            Paragraph(f"<b>{c.get('name', '')}</b><br/><font color='#047857'>{c.get('type', '')}</font>", table_cell_style),
            Paragraph(f"{c.get('address', '')}<br/><b>Tel:</b> {c.get('phone', '')}<br/><b>Email:</b> {c.get('email', '')}", table_cell_style),
            Paragraph(f"<b>{c.get('mrt', '')}</b>", table_cell_style),
            Paragraph(f"{c.get('hours', '')}", table_cell_style),
        ])

    t_campuses = Table(campus_rows, colWidths=[140, 150, 115, 118])
    t_campuses.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), c_primary_dark),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
        ('BOX', (0, 0), (-1, -1), 0.8, c_border),
        ('INNERGRID', (0, 0), (-1, -1), 0.5, c_border),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, c_surface]),
        ('TOPPADDING', (0, 0), (-1, -1), 4),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
        ('LEFTPADDING', (0, 0), (-1, -1), 5),
        ('RIGHTPADDING', (0, 0), (-1, -1), 5),
    ]))
    story.append(t_campuses)
    story.append(Spacer(1, 14))

    # ------------------------------------------------------------------
    # SECTION 3: ACADEMIC DOMAINS & SUBJECT DISCIPLINES (ALL 21 CATEGORIES)
    # ------------------------------------------------------------------
    story.append(Paragraph("3. Academic Domains & Subject Disciplines (21 Specialized Tracks)", h1_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=c_primary, spaceBefore=2, spaceAfter=8))

    cat_rows = [
        [
            Paragraph("Discipline Track", table_header_style),
            Paragraph("Scope & Curricular Objectives", table_header_style),
            Paragraph("Benchmark Target Careers & SGD Salary", table_header_style),
            Paragraph("Core Technical / Academic Skills", table_header_style),
        ]
    ]

    for cat_name, cat_info in data['categories'].items():
        skills_str = ", ".join(cat_info.get('skills', []))
        cat_rows.append([
            Paragraph(f"<b>{cat_name}</b>", table_cell_bold),
            Paragraph(cat_info.get('description', ''), table_cell_style),
            Paragraph(f"<b>{cat_info.get('popular_job', 'Executive Practice')}</b>", table_cell_style),
            Paragraph(skills_str, table_cell_style),
        ])

    t_categories = Table(cat_rows, colWidths=[95, 175, 135, 118])
    t_categories.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), c_primary_dark),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
        ('BOX', (0, 0), (-1, -1), 0.8, c_border),
        ('INNERGRID', (0, 0), (-1, -1), 0.5, c_border),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, c_surface]),
        ('TOPPADDING', (0, 0), (-1, -1), 4),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
        ('LEFTPADDING', (0, 0), (-1, -1), 5),
        ('RIGHTPADDING', (0, 0), (-1, -1), 5),
    ]))
    story.append(t_categories)
    story.append(Spacer(1, 14))

    # ------------------------------------------------------------------
    # SECTION 4: MASTER DIRECTORY OF ALL 100 COURSES (COMPLETE SUMMARY TABLE)
    # ------------------------------------------------------------------
    story.append(Paragraph("4. Master Directory of All 100 Accredited Programmes", h1_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=c_primary, spaceBefore=2, spaceAfter=8))
    story.append(Paragraph("Master schedule and pricing matrix for all 100 active executive diplomas, technical certificates, and academic preparatory courses.", body_style))

    c_table_rows = [
        [
            Paragraph("Code", table_header_style),
            Paragraph("Course Programme Title", table_header_style),
            Paragraph("Category", table_header_style),
            Paragraph("Format", table_header_style),
            Paragraph("Weeks", table_header_style),
            Paragraph("Campus", table_header_style),
            Paragraph("Standard Fee", table_header_style),
            Paragraph("Net Fee*", table_header_style),
        ]
    ]

    for c in data['courses']:
        c_table_rows.append([
            Paragraph(c.get('course_id', ''), table_cell_code),
            Paragraph(c.get('course_name', ''), table_cell_bold),
            Paragraph(c.get('category', ''), table_cell_style),
            Paragraph(c.get('format', ''), table_cell_style),
            Paragraph(f"{c.get('duration_weeks', '')}w", table_cell_style),
            Paragraph(c.get('campus', ''), table_cell_style),
            Paragraph(f"SGD ${c.get('fee_sgd', 0):,}", table_cell_style),
            Paragraph(f"<b>SGD ${c.get('net_fee_sgd', 0):,}</b>", table_cell_bold),
        ])

    t_all_courses = Table(c_table_rows, colWidths=[40, 140, 85, 52, 36, 55, 58, 57])
    t_all_courses.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), c_primary_dark),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
        ('BOX', (0, 0), (-1, -1), 0.8, c_border),
        ('INNERGRID', (0, 0), (-1, -1), 0.4, c_border),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, c_surface]),
        ('TOPPADDING', (0, 0), (-1, -1), 3),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3),
        ('LEFTPADDING', (0, 0), (-1, -1), 4),
        ('RIGHTPADDING', (0, 0), (-1, -1), 4),
    ]))
    story.append(t_all_courses)
    story.append(Paragraph("<font size=6.5 color='#64748B'>*Net Fee reflects estimated payable tuition after eligible government subsidies under SkillsFuture Singapore (SSG) Baseline / Mid-Career Scheme.</font>", caption_style))
    story.append(Spacer(1, 14))

    # ------------------------------------------------------------------
    # SECTION 5: COMPREHENSIVE COURSE DOSSIERS (CURRICULA, PREREQUISITES & OUTCOMES)
    # ------------------------------------------------------------------
    story.append(Paragraph("5. Detailed Programme Profiles (Curriculum, Modules & Learning Outcomes)", h1_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=c_primary, spaceBefore=2, spaceAfter=8))
    story.append(Paragraph("Exhaustive curricular breakdown for every course, including modular syllabus topics, admission prerequisites, schedule timings, and targeted learning outcomes.", body_style))

    # Map trainer ID to name for fast lookup
    trainer_map = {t.get('trainer_id'): t.get('name') for t in data.get('trainers', [])}

    for c in data['courses']:
        cid = c.get('course_id', '')
        cname = c.get('course_name', '')
        cat = c.get('category', '')
        fee = c.get('fee_sgd', 0)
        net = c.get('net_fee_sgd', 0)
        sub = c.get('skillsfuture_subsidy_sgd', 0)
        dur = c.get('duration_weeks', '')
        fmt = c.get('format', '')
        camp = c.get('campus', '')
        sched = c.get('schedule_time', 'Flexible Scheduled Intakes')
        prereq = c.get('admission_requirement', 'General Open Registration')
        ov = c.get('overview', '')
        tr_id = c.get('trainer_id', '')
        tr_name = trainer_map.get(tr_id, tr_id)
        rating = c.get('rating', '4.90')
        enrolled = c.get('enrolled_count', 0)
        trials = c.get('trial_seats', 5)

        # Build curriculum string
        curr_items = []
        for mod in c.get('curriculum', []):
            m_name = mod.get('module', '')
            m_dur = mod.get('duration', '')
            m_top = "; ".join(mod.get('topics', []))
            curr_items.append(f"• <b>{m_name} ({m_dur}):</b> {m_top}")
        curr_text = "<br/>".join(curr_items) if curr_items else "Comprehensive 4-stage modular curriculum."

        # Outcomes string
        outcomes_list = c.get('outcomes', [])
        outcomes_str = " | ".join(outcomes_list) if outcomes_list else "Mastery of industry competencies."

        dossier_html = (
            f"<b>[{cid}] {cname}</b> — <i>{cat}</i><br/>"
            f"<b>Tuition Fee:</b> SGD ${fee:,} | <b>SSG Subsidy:</b> SGD ${sub:,} | <b>Net Fee:</b> SGD ${net:,} | <b>Duration:</b> {dur} Weeks ({fmt})<br/>"
            f"<b>Campus:</b> {camp} | <b>Trainer:</b> {tr_name} ({tr_id}) | <b>Schedule:</b> {sched} | <b>Rating:</b> {rating} ({enrolled} Enrolled)<br/>"
            f"<b>Admission Prerequisite:</b> {prereq} | <b>Complimentary Trial Seats:</b> {trials} seats per cohort<br/>"
            f"<b>Programme Overview:</b> {ov}<br/>"
            f"<b>Curriculum Modules:</b><br/>{curr_text}<br/>"
            f"<b>Core Learning Outcomes:</b> {outcomes_str}"
        )

        d_table = Table([[Paragraph(dossier_html, dossier_body)]], colWidths=[printable_width])
        d_table.setStyle(TableStyle([
            ('BACKGROUND', (0, 0), (-1, -1), c_surface),
            ('BOX', (0, 0), (-1, -1), 0.6, c_border),
            ('TOPPADDING', (0, 0), (-1, -1), 5),
            ('BOTTOMPADDING', (0, 0), (-1, -1), 5),
            ('LEFTPADDING', (0, 0), (-1, -1), 6),
            ('RIGHTPADDING', (0, 0), (-1, -1), 6),
        ]))

        story.append(d_table)
        story.append(Spacer(1, 5))

    story.append(Spacer(1, 10))

    # ------------------------------------------------------------------
    # SECTION 6: FACULTY DIRECTORY & MASTER TRAINERS (ALL 30 INSTRUCTORS)
    # ------------------------------------------------------------------
    story.append(Paragraph("6. Faculty Directory & Master Trainers (All 30 Educators)", h1_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=c_primary, spaceBefore=2, spaceAfter=8))
    story.append(Paragraph("Profiles, formal academic degrees, industry background, and assigned teaching modules for all 30 distinguished faculty members.", body_style))

    for t in data['trainers']:
        tid = t.get('trainer_id', '')
        name = t.get('full_name', t.get('name', ''))
        title = t.get('title', '')
        spec = t.get('specialization', '')
        exp = t.get('experience_years', 10)
        rating = t.get('rating', '4.90')
        students = t.get('students_count', 0)
        quals = ", ".join(t.get('qualifications', []))
        courses_taught = ", ".join(t.get('courses_taught', []))
        bio = t.get('bio', '')

        trainer_html = (
            f"<b>[{tid}] {name}</b> — <i>{title}</i><br/>"
            f"<b>Specialization:</b> {spec} | <b>Experience:</b> {exp}+ Years | <b>Student Rating:</b> {rating}/5.00 ({students:,} students mentored)<br/>"
            f"<b>Academic & Professional Qualifications:</b> {quals}<br/>"
            f"<b>Biography & Industry Track Record:</b> {bio}<br/>"
            f"<b>Assigned Active Courses:</b> {courses_taught}"
        )

        tr_table = Table([[Paragraph(trainer_html, table_cell_style)]], colWidths=[printable_width])
        tr_table.setStyle(TableStyle([
            ('BACKGROUND', (0, 0), (-1, -1), colors.white),
            ('BOX', (0, 0), (-1, -1), 0.6, c_border),
            ('TOPPADDING', (0, 0), (-1, -1), 5),
            ('BOTTOMPADDING', (0, 0), (-1, -1), 5),
            ('LEFTPADDING', (0, 0), (-1, -1), 6),
            ('RIGHTPADDING', (0, 0), (-1, -1), 6),
        ]))
        story.append(tr_table)
        story.append(Spacer(1, 4))

    story.append(Spacer(1, 10))

    # ------------------------------------------------------------------
    # SECTION 7: OFFICIAL INDUSTRY CERTIFICATIONS (ALL 20 CREDENTIALS)
    # ------------------------------------------------------------------
    story.append(Paragraph("7. Official Industry Certifications & Central Credential Registry", h1_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=c_primary, spaceBefore=2, spaceAfter=8))
    story.append(Paragraph("Digital credential specifications, issuing bodies, verification codes, and competencies for all 20 certified credentials.", body_style))

    cert_rows = [
        [
            Paragraph("Cert ID", table_header_style),
            Paragraph("Industry Credential Title", table_header_style),
            Paragraph("Category", table_header_style),
            Paragraph("Issuing Authority", table_header_style),
            Paragraph("Verification Code", table_header_style),
            Paragraph("Level & Validity", table_header_style),
            Paragraph("Competencies Formally Validated", table_header_style),
        ]
    ]

    for cert in data['certifications']:
        skills_str = ", ".join(cert.get('skills_validated', []))
        cert_rows.append([
            Paragraph(cert.get('certification_id', ''), table_cell_code),
            Paragraph(f"<b>{cert.get('industry_title', cert.get('name', ''))}</b>", table_cell_bold),
            Paragraph(cert.get('category', ''), table_cell_style),
            Paragraph(cert.get('issuing_body', ''), table_cell_style),
            Paragraph(f"<b>{cert.get('verification_code', '')}</b>", table_cell_style),
            Paragraph(f"{cert.get('credential_level', 'Professional')}<br/>{cert.get('validity', '3 Years')}", table_cell_style),
            Paragraph(skills_str, table_cell_style),
        ])

    t_certs = Table(cert_rows, colWidths=[40, 115, 65, 85, 65, 55, 98])
    t_certs.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), c_primary_dark),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
        ('BOX', (0, 0), (-1, -1), 0.8, c_border),
        ('INNERGRID', (0, 0), (-1, -1), 0.4, c_border),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, c_surface]),
        ('TOPPADDING', (0, 0), (-1, -1), 3.5),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3.5),
        ('LEFTPADDING', (0, 0), (-1, -1), 4),
        ('RIGHTPADDING', (0, 0), (-1, -1), 4),
    ]))
    story.append(t_certs)
    story.append(Spacer(1, 14))

    # ------------------------------------------------------------------
    # SECTION 8: STATUTORY SUBSIDIES, SKILLSFUTURE & FINANCING
    # ------------------------------------------------------------------
    story.append(Paragraph("8. Government Grants, SkillsFuture Singapore (SSG) & Financing", h1_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=c_primary, spaceBefore=2, spaceAfter=8))

    funding_text = (
        "<b>1. SkillsFuture Singapore (SSG) Course Subsidies:</b><br/>"
        "• <b>Mid-Career Enhanced Subsidy (MCES):</b> Singapore Citizens aged 40 and above receive up to <b>70% course fee subsidy</b> on approved modular executive programmes.<br/>"
        "• <b>Standard Baseline Subsidy:</b> Singapore Citizens aged 25 to 39 receive up to <b>50% course fee subsidy</b>.<br/>"
        "• <b>Permanent Resident Subsidy:</b> Singapore Permanent Residents receive up to <b>30% course fee subsidy</b>.<br/>"
        "• <b>SkillsFuture Credit (SFC) Offset:</b> Eligible Singaporeans may utilize their opening SFC credit (SGD $500) and mid-career top-ups to offset remaining unfunded tuition fee balances directly via the MySkillsFuture portal upon enrollment.<br/><br/>"
        "<b>2. NTUC Union Training Assistance Programme (UTAP):</b><br/>"
        "NTUC union members receive 50% co-funding of unfunded tuition fee balances, up to SGD $250 per calendar year. Enhanced UTAP funding provides up to SGD $500 per year for union members aged 40 and above.<br/><br/>"
        "<b>3. Post-Secondary Education Account (PSEA):</b><br/>"
        "Singapore Citizens below 31 years of age can utilize accumulated PSEA savings to offset approved executive diplomas and professional certifications.<br/><br/>"
        "<b>4. Flexible Commercial Tuition Financing & Installment Plans:</b><br/>"
        "• <b>0% Interest Installment Plans:</b> 6-month and 12-month zero-interest credit card installment facilities available across all major Singapore commercial retail banks.<br/>"
        "• <b>Electronic Payment Methods:</b> PayNow Corporate (UEN: 201829481E), FAST instant bank transfer, interbank GIRO, and major international credit/debit cards.<br/>"
        "• <b>Corporate Billing & Invoicing:</b> Enterprise sponsorship billing with 30-day settlement terms for registered corporate entities upon signed service agreements."
    )
    story.append(Paragraph(funding_text, body_style))
    story.append(Spacer(1, 14))

    # ------------------------------------------------------------------
    # SECTION 9: ADMISSIONS PROTOCOL, STUDENT CONTRACT & REFUNDS
    # ------------------------------------------------------------------
    story.append(Paragraph("9. Admissions Protocol, Standard PEI-Student Contract & Refund Matrix", h1_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=c_primary, spaceBefore=2, spaceAfter=8))

    admissions_text = (
        "<b>Step-by-Step Admissions Procedure:</b><br/>"
        "1. <b>Application Submission:</b> Online submission via website admissions portal or in-person at any of our 10 Singapore campuses.<br/>"
        "2. <b>Prerequisite Verification:</b> Academic Registry reviews educational transcripts, professional experience, and prerequisite proficiencies within 2 working days.<br/>"
        "3. <b>Standard PEI-Student Contract Execution:</b> In statutory compliance with the Committee for Private Education (CPE), every applicant signs a legally binding Student Contract detailing course duration, fee installments, cooling-off provisions, and refund terms.<br/>"
        "4. <b>Fee Protection Scheme (FPS):</b> All course fees are escrowed and protected under an approved FPS Insurance Underwriter. An official FPS Certificate is dispatched to the student within 7 working days of fee payment.<br/>"
        "5. <b>Medical Insurance Coverage:</b> Comprehensive group medical insurance provides inpatient hospital and surgical coverage of up to SGD $20,000 per policy year for all enrolled full-time students.<br/>"
        "6. <b>Matriculation & Student Portal:</b> Dispatch of student portal login credentials, access to online learning modules, seminar timetables, and resource libraries."
    )
    story.append(Paragraph(admissions_text, body_style))
    story.append(Spacer(1, 6))

    # Refund Schedule Table
    refund_rows = [
        [
            Paragraph("Triggering Withdrawal Event / Written Notice", table_header_style),
            Paragraph("Refund %", table_header_style),
            Paragraph("Statutory Terms & Governing Provisions", table_header_style),
        ],
        [
            Paragraph("Notice within Statutory Cooling-Off Period (14 Calendar Days from Signing)", table_cell_bold),
            Paragraph("<b>100%</b>", table_cell_bold),
            Paragraph("Full refund of all tuition and course fees paid; maximum consumer protection under CPE regulations.", table_cell_style),
        ],
        [
            Paragraph("Notice received > 14 calendar days prior to Cohort Commencement Date", table_cell_style),
            Paragraph("<b>75%</b>", table_cell_bold),
            Paragraph("75% of total course tuition refunded. Administrative registration fee non-refundable.", table_cell_style),
        ],
        [
            Paragraph("Notice received between 1 and 14 calendar days prior to Cohort Commencement", table_cell_style),
            Paragraph("<b>50%</b>", table_cell_bold),
            Paragraph("50% of total course tuition refunded. Seat allocation forfeited.", table_cell_style),
        ],
        [
            Paragraph("Notice received on or after Cohort Commencement Date", table_cell_style),
            Paragraph("<b>0%</b>", table_cell_style),
            Paragraph("No refund after the course officially starts. Deferment options available upon valid medical documentation.", table_cell_style),
        ],
    ]
    t_refund = Table(refund_rows, colWidths=[200, 60, 263])
    t_refund.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), c_primary_dark),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
        ('BOX', (0, 0), (-1, -1), 0.8, c_border),
        ('INNERGRID', (0, 0), (-1, -1), 0.5, c_border),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, c_surface]),
        ('PADDING', (0, 0), (-1, -1), 4),
    ]))
    story.append(t_refund)
    story.append(Spacer(1, 14))

    # ------------------------------------------------------------------
    # SECTION 10: ACADEMIC REGULATIONS, ATTENDANCE & GRADUATION
    # ------------------------------------------------------------------
    story.append(Paragraph("10. Academic Regulations, Grading Standards & Graduation Criteria", h1_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=c_primary, spaceBefore=2, spaceAfter=8))

    acad_text = (
        "• <b>Attendance Thresholds:</b> Minimum <b>75% attendance</b> required for local Singaporean / PR students to qualify for examinations, government subsidies, and certification. International students holding Student Passes must maintain <b>90% attendance</b> monthly as mandated by the Immigration & Checkpoints Authority (ICA).<br/>"
        "• <b>Grading Hierarchy:</b> High Distinction (HD: 85-100%), Distinction (D: 75-84%), Credit (C: 65-74%), Pass (P: 50-64%), Fail (F: <50%).<br/>"
        "• <b>Graduation & Award Criteria:</b> Successful completion of all required modules, cumulative GPA >= 2.0 (50%), verified capstone project submission, zero outstanding financial liabilities, and adherence to the Student Code of Conduct.<br/>"
        "• <b>Missed Classes & Makeup Protocol:</b> Synchronous video recordings of missed lectures are uploaded to the Student LMS Portal within 24 hours. Students may book 1-on-1 makeup clinics with teaching assistants."
    )
    story.append(Paragraph(acad_text, body_style))
    story.append(Spacer(1, 14))

    # ------------------------------------------------------------------
    # SECTION 11: COMPLIMENTARY TRIAL CLASSES & MASTERCLASSES
    # ------------------------------------------------------------------
    story.append(Paragraph("11. Complimentary Trial Classes & Academic Seminars Procedure", h1_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=c_primary, spaceBefore=2, spaceAfter=8))

    trials_text = (
        "Prospective students and working professionals may experience our pedagogy before making financial commitments.<br/>"
        "• <b>Complimentary Seat Quotas:</b> Each intake reserves 5 to 10 complimentary trial seats per course.<br/>"
        "• <b>Session Format:</b> 90-minute live interactive seminar with the assigned master trainer, featuring live demonstrations, Q&A, and syllabus deconstruction.<br/>"
        "• <b>Booking Procedure:</b> Prospective learners may book via the `/trial-classes` portal, through the website AI Chatbot, or by messaging our WhatsApp hotline at <b>+65 XXXXXXXXX</b>.<br/>"
        "• <b>Zero Financial Obligation:</b> Trial attendance does not require credit card submission or formal enrollment commitment."
    )
    story.append(Paragraph(trials_text, body_style))
    story.append(Spacer(1, 14))

    # ------------------------------------------------------------------
    # SECTION 12: STUDENT PORTAL & LEARNING MANAGEMENT SYSTEM (LMS)
    # ------------------------------------------------------------------
    story.append(Paragraph("12. Student Portal & LMS Learning Architecture", h1_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=c_primary, spaceBefore=2, spaceAfter=8))

    lms_text = (
        "The Dagsis Student Portal (`/dashboard`) provides a centralized interface for students:<br/>"
        "• <b>Interactive Course Tracker:</b> Real-time progress monitoring, upcoming assignment deadlines, and attendance logs.<br/>"
        "• <b>Lecture Video Repository:</b> High-definition replays of all synchronous seminars, available for 12 months after graduation.<br/>"
        "• <b>Assignment & Lab Submission:</b> Automated code evaluations, project submissions, and instructor feedback logs.<br/>"
        "• <b>Central Credential Repository:</b> Direct issuance of tamper-proof digital certificates with verifiable cryptographic hashes.<br/>"
        "• <b>Academic Counseling Booking:</b> Direct 1-on-1 appointment scheduling with academic advisors and career coaches."
    )
    story.append(Paragraph(lms_text, body_style))
    story.append(Spacer(1, 14))

    # ------------------------------------------------------------------
    # SECTION 13: STUDENT TESTIMONIALS & ALUMNI CAREER OUTCOMES
    # ------------------------------------------------------------------
    story.append(Paragraph("13. Student Testimonials & Representative Alumni Outcomes", h1_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=c_primary, spaceBefore=2, spaceAfter=8))

    # Sample representative reviews across diverse disciplines
    sample_reviews = [
        ("Marcus Tan", "Cyber Security Analyst at Leading Financial Institution", "Executive Certificate in Cyber Security", 5,
         "The hands-on red team and blue team labs at the City campus simulated real enterprise environments. Trainer Kelvin provided the technical edge needed to pass the rigorous technical interview at a tier-1 financial institution."),
        ("Audrey Lim", "Data Analytics Specialist at Regional Technology Group", "Executive Diploma in Data Analytics", 5,
         "Transitioning from marketing to analytics seemed daunting until I enrolled in CR001. The step-by-step SQL and Power BI curriculum gave me immediate workplace competence and a 35% salary uplift within 6 months."),
        ("Pravin Sharma", "Enterprise Cloud Architect at National Telecom Group", "Professional Certification in Cloud Computing", 5,
         "The hybrid weekend classes allowed me to maintain my full-time commitments while building production-grade Kubernetes and cloud deployment pipelines. Unmatched instructor depth."),
        ("Mrs. Jennifer Seah", "Parent of Distinction Student", "PSLE Heuristic Mathematics Masterclass", 5,
         "My son improved from AL4 to AL1 in his Mathematics preliminary exams. The heuristic model drawing methods taught at the Tampines campus gave him complete confidence."),
        ("Rachel Ng", "Head of Growth at Major E-Commerce Group", "Executive Diploma in Digital Marketing", 5,
         "Audrey Sim's performance marketing insights are world-class. Managing omni-channel campaigns and CAC-to-LTV attribution modeling directly boosted our quarterly conversion by 40%."),
    ]

    for name, role, course, stars, comment in sample_reviews:
        star_str = "★" * stars
        rev_html = (
            f"<b>{name}</b> — <i>{role}</i> ({course})<br/>"
            f"<font color='#D97706'>{star_str}</font> \"{comment}\""
        )
        t_rev = Table([[Paragraph(rev_html, table_cell_style)]], colWidths=[printable_width])
        t_rev.setStyle(TableStyle([
            ('BACKGROUND', (0, 0), (-1, -1), c_surface),
            ('BOX', (0, 0), (-1, -1), 0.5, c_border),
            ('PADDING', (0, 0), (-1, -1), 4),
        ]))
        story.append(t_rev)
        story.append(Spacer(1, 3))

    story.append(Spacer(1, 12))

    # ------------------------------------------------------------------
    # SECTION 14: EXHAUSTIVE AI CHATBOT PROMPT & RESPONSE HANDBOOK (55 IN-DEPTH Q&As)
    # ------------------------------------------------------------------
    story.append(Paragraph("14. Comprehensive AI Chatbot Conversational Response Handbook (55 Scenarios)", h1_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=c_primary, spaceBefore=2, spaceAfter=8))
    story.append(Paragraph("Verbatim, statutory-compliant answers for conversational retrieval. The AI agent must deliver these answers when queried.", body_style))

    qa_list = [
        # ADMISSIONS & ENROLLMENT (1-10)
        ("What are the general admission requirements for executive diplomas?",
         "admissions_eligibility",
         "Applicants must possess a recognized Diploma, Degree, or at least 2 years of relevant professional working experience. Mature applicants aged 30 and above with 8 years of working experience may also qualify via an entrance interview. Enquire via admissions@dagsis.edu.sg or +65 XXXXXXXXX."),
        
        ("How do I apply for a course at Dagsis University Dummy?",
         "application_steps",
         "You can apply online via our Admissions page or visit any of our 10 campus registries. Application steps: 1. Submit online application form with ID and transcripts; 2. Prerequisite verification by Registry within 2 working days; 3. Sign Standard PEI-Student Contract; 4. Fee payment and FPS escrow activation."),
        
        ("What documents are required during enrollment?",
         "application_documents",
         "Singapore Citizens / PRs: NRIC (front and back) and highest academic certificate. International applicants: Passport copy, educational transcripts, and proof of English proficiency (IELTS 6.0 or equivalent). Working adults applying for mature admission should submit a detailed CV."),
        
        ("What are the application deadlines and intake schedules?",
         "intake_dates",
         "We operate rolling quarterly intakes in January, April, July, and October. Modular executive short courses and weekend workshops commence at the start of every month. Check current cohort availability via our website or +65 XXXXXXXXX."),
        
        ("Can international students apply for full-time courses?",
         "international_admissions",
         "Yes. International students may enroll in approved full-time programmes eligible for Student Pass sponsorship under the Immigration & Checkpoints Authority (ICA). ICA mandates a minimum 90% monthly attendance."),
        
        ("What English language proficiency is required?",
         "english_proficiency",
         "For English-medium executive programmes, applicants must have a minimum GCE O-Level C6 in English, an IELTS score of 6.0, TOEFL 80, or pass the Dagsis University Dummy English Diagnostic Placement Exam."),
        
        ("What is the minimum age to enroll?",
         "minimum_age",
         "Executive education programmes require applicants to be at least 21 years old. For Cambridge preparatory courses (PSLE, O-Level, A-Level, IGCSE), enrolment corresponds with standard academic age cohorts (7 to 19 years old)."),
        
        ("Can I transfer credits from previous tertiary studies?",
         "credit_transfer",
         "Yes, Credit Exemption and Recognition of Prior Learning (RPL) applications are evaluated by the Academic Board. Exemptions up to a maximum of 30% of modular course credits may be granted upon submission of detailed syllabus transcripts."),
        
        ("What happens after I submit my application online?",
         "post_application",
         "Our Admissions Registry will review your credentials within 2 working days. Upon approval, you will receive an official Letter of Offer and an electronic copy of the Standard PEI-Student Contract for digital signature."),
        
        ("Are courses suitable for working professionals?",
         "working_adults_suitability",
         "Absolutely. Over 75% of our learners are working adults. Programmes feature hybrid formats, weekday evening lectures (7:00 PM - 10:00 PM), and weekend intensives (Saturdays/Sundays 9:00 AM - 5:00 PM) to ensure zero work disruption."),

        # SKILLSFUTURE & FINANCIAL SUBSIDIES (11-20)
        ("Are courses eligible for SkillsFuture Singapore (SSG) funding?",
         "skillsfuture_eligibility",
         "Yes, approved modular programmes are eligible for SkillsFuture funding. Eligible Singapore Citizens aged 40 and above qualify for the Mid-Career Enhanced Subsidy (MCES) of up to 70% course fee subsidy. Citizens aged 25-39 receive up to 50% baseline subsidy."),
        
        ("How do I use my SkillsFuture Credit (SFC) to pay?",
         "skillsfuture_claim_process",
         "Upon receiving your official invoice, log in to the MySkillsFuture portal (myskillsfuture.gov.sg) using your Singpass. Select 'Dagsis University Dummy', enter your course code and invoice number, and submit your credit deduction request prior to course commencement."),
        
        ("What is the NTUC UTAP subsidy and how do I claim it?",
         "utap_funding",
         "NTUC Union Training Assistance Programme (UTAP) provides union members with 50% co-funding of unfunded tuition fees, up to SGD $250 per calendar year (up to SGD $500 for members aged 40+). Claims are submitted via the NTUC portal within 6 months of course completion."),
        
        ("Can I use my Post-Secondary Education Account (PSEA)?",
         "psea_usage",
         "Yes, Singapore Citizens under 31 years old can use PSEA funds for eligible diploma and certificate programmes. Complete the MOE PSEA Ad-Hoc Application Form and submit it to our Finance Registry at fps@dagsis.edu.sg."),
        
        ("Do you offer 0% interest monthly installment plans?",
         "installment_plans",
         "Yes. We offer 6-month and 12-month interest-free installment plans with all major Singapore commercial credit cards. Alternatively, students can arrange split fee payments in line with their CPE Student Contract schedule."),
        
        ("Can my employer sponsor my course fees?",
         "corporate_sponsorship",
         "Yes. We support corporate-sponsored billing with electronic invoicing on 30-day settlement terms. Eligible companies may also claim Absentee Payroll (AP) funding through Enterprise Singapore / SSG."),
        
        ("What is the net fee payable after all government subsidies?",
         "net_fee_calculation",
         "Net fee depends on your age, citizenship, and remaining credits. For example, a SGD $3,500 course for a Singapore Citizen aged 40+ with 70% subsidy (SGD $2,450) and SGD $500 SkillsFuture Credit offset results in a net cash payable of just SGD $550."),
        
        ("Is there any financial aid for low-income applicants?",
         "financial_aid",
         "Yes, qualifying Singaporeans may combine SSG subsidies, Workfare Skills Support (WSS) scheme funding, and NTUC UTAP. Our financial counselors provide tailored assistance via admissions@dagsis.edu.sg."),
        
        ("What payment methods are accepted?",
         "payment_methods",
         "We accept PayNow Corporate (UEN: 201829481E), FAST interbank transfers, GIRO, all major commercial credit/debit cards, and SkillsFuture Portal direct credit deductions."),
        
        ("Do I have to pay GST on course fees?",
         "gst_policy",
         "All published course tuition fees include prevailing Goods and Services Tax (GST) unless explicitly stated otherwise on your formal PEI-Student Contract."),

        # COURSE CURRICULA & PEDAGOGY (21-30)
        ("What course formats are available?",
         "learning_formats",
         "We provide 5 flexible learning formats: 1. Full-Time On-Campus; 2. Part-Time Weekday Evening (7:00 PM - 10:00 PM); 3. Weekend Intensive (Saturdays/Sundays 9:00 AM - 5:00 PM); 4. Synchronous Live Online; 5. Blended Hybrid."),
        
        ("What happens if I miss a lecture?",
         "missed_classes",
         "All synchronous lectures are recorded in high-definition and uploaded to your Student Portal (`/dashboard`) within 24 hours. Students may review recordings and book 1-on-1 makeup clinics with teaching faculty."),
        
        ("What is the maximum class size?",
         "class_size",
         "To guarantee intensive interaction and personalized faculty mentorship, technical executive classes are capped at 18 to 24 students. Academic preparatory tutorials are capped at 12 to 15 students."),
        
        ("How are courses assessed?",
         "assessment_methods",
         "Courses use practical, industry-aligned evaluation: 40% Continuous Modular Lab Work / Quizzes, 40% Applied Industry Capstone Project, and 20% Formal Technical Defense or Written Examination. There are no redundant memorization tests."),
        
        ("Can I switch my learning format during the course?",
         "format_transfer",
         "Yes, students may request to switch between weekday evening, weekend, and online cohorts by submitting a Cohort Transfer Request to registrar@dagsis.edu.sg at least 7 days before module commencement."),
        
        ("What software tools and computing platforms are taught?",
         "tools_technologies",
         "Our curriculum covers cutting-edge enterprise stacks: Python 3.12, SQL, Tableau, Power BI, PyTorch, Docker, Kubernetes, Terraform, Selenium, Playwright, and modern cloud deployment environments."),
        
        ("Is hardware provided at campus facilities?",
         "campus_hardware",
         "Yes, all 10 campus labs are outfitted with high-performance multi-monitor workstations, high-speed fiber internet, and dedicated lab servers. Students may also bring personal laptops and connect to our campus network."),
        
        ("What is the duration of diploma programmes?",
         "diploma_duration",
         "Executive diplomas range from 8 to 16 weeks (part-time or weekend intensives) and 6 to 10 weeks (full-time intensive). Total guided instructional hours range from 96 to 180 hours depending on specialization."),
        
        ("Are course materials and software licenses included in the fee?",
         "materials_inclusion",
         "Yes. Approved tuition covers comprehensive electronic courseware, lab access, cloud practice sandboxes, and textbook materials. No hidden lab fees."),
        
        ("Do you provide 1-on-1 academic mentorship?",
         "faculty_mentorship",
         "Yes. Every matriculated learner is paired with a master faculty mentor and has access to weekly office-hour consultation slots booked via the Student Portal."),

        # MASTER TRAINERS & FACULTY (31-35)
        ("Who are the trainers teaching at Dagsis University Dummy?",
         "faculty_overview",
         "Our faculty comprises 30 distinguished master trainers and industry veterans with an average of 14+ years of professional and research experience. Trainers hold advanced Master's and Doctoral qualifications in their respective domains."),
        
        ("Can you tell me about Trainer Rajesh Nair (TR007)?",
         "trainer_rajesh_nair",
         "Rajesh Nair (TR007) holds a Master of Technology in AI and is a Senior AI Systems Architect with 14+ years of experience. He specializes in computer vision, LLM fine-tuning, and scalable neural architectures, holding an exceptional 4.91/5.00 student rating."),
        
        ("Can you tell me about Trainer Kelvin Ho (TR010)?",
         "trainer_kelvin_ho",
         "Kelvin Ho (TR010) is an Enterprise Cloud Solutions Architect with 16+ years of experience. He has migrated multi-million dollar workloads to Kubernetes and serverless architectures, teaching Cloud Computing and DevOps with a 4.94/5.00 student rating."),
        
        ("Can you tell me about Trainer Audrey Sim (TR011)?",
         "trainer_audrey_sim",
         "Audrey Sim (TR011) holds an MBA and is a Senior Enterprise Growth Strategist with 12+ years of experience managing over $20M+ in digital advertising budgets across APAC. She holds a stellar 4.95/5.00 student satisfaction score."),
        
        ("Can you tell me about Trainer Gavin Neo (TR019)?",
         "trainer_gavin_neo",
         "Gavin Neo (TR019) is a Distinguished Data Platform Fellow and Power BI Specialist with 15+ years of experience developing enterprise DAX modeling frameworks, with an impressive 4.88/5.00 student rating across 1,196 learners."),

        # CAMPUS FACILITIES & LOGISTICS (36-40)
        ("Where is the Principal Campus & Headquarters located?",
         "headquarters_location",
         "Our Principal Campus & Headquarters is located at 123, Street ABC, State XYZ, Pin-000000. It features 14 executive seminar suites, advanced cloud labs, and full admissions registry services."),
        
        ("What are the operating hours across your 10 campuses?",
         "operating_hours",
         "All 10 regional campuses are open 7 days a week: Monday to Friday from 9:00 AM to 9:30 PM, and Saturday & Sunday from 8:30 AM to 7:00 PM."),
        
        ("How do I get to the Orchard Flagship Campus via MRT?",
         "transit_orchard",
         "The Orchard Flagship Campus is directly connected to Somerset MRT via a direct sheltered underpass at Exit B. Multiple bus lines connect directly outside the building."),
        
        ("Is parking available at the campus locations?",
         "parking_facilities",
         "Yes, all 10 campus commercial buildings feature multi-storey sheltered parking facilities with EV charging stations and disability-friendly access."),
        
        ("Can students use campus facilities outside of class hours?",
         "study_facilities",
         "Yes. Matriculated students have complimentary access to campus study pods, collaborative co-working spaces, and high-speed Wi-Fi during operating hours."),

        # STUDENT CONTRACT, FPS & REFUNDS (41-46)
        ("What is the Committee for Private Education (CPE) Student Contract?",
         "student_contract_purpose",
         "The Standard PEI-Student Contract is a statutory legal document mandated by CPE for all private education institutions. It clearly specifies course titles, modules, fee payment schedules, cooling-off provisions, and refund matrices to protect student interests."),
        
        ("What is the statutory cooling-off period?",
         "cooling_off_period",
         "Under CPE regulations, students enjoy a 14-calendar-day cooling-off period starting from the exact date the Student Contract is signed. If you submit written notice of withdrawal within these 14 days, you receive a 100% refund of all course fees paid."),
        
        ("What is the Fee Protection Scheme (FPS)?",
         "fps_protection",
         "The Fee Protection Scheme protects 100% of student tuition fees in the event of an institution's insolvency or closure. Dagsis University Dummy secures all fees via an approved FPS Insurance Underwriter, issuing an insurance certificate within 7 working days."),
        
        ("What is the refund policy if I withdraw 20 days before class starts?",
         "refund_before_14_days",
         "If written withdrawal notice is received more than 14 calendar days before the cohort commencement date, you will receive a 75% refund of the total tuition fee paid."),
        
        ("Can I defer my studies if I have an emergency?",
         "deferment_policy",
         "Yes. Students facing medical emergencies, official military mobilization (NS reservist), or urgent overseas work assignments may defer their cohort enrollment by up to 12 months without penalty upon submitting supporting documentation."),
        
        ("How do I submit a formal refund request?",
         "refund_submission",
         "Submit a completed Refund & Withdrawal Form along with your original receipt and supporting documents to our Finance Registry at fps@dagsis.edu.sg. Approved refunds are processed via bank transfer within 7 working days."),

        # CERTIFICATIONS & CREDENTIAL REGISTRY (47-51)
        ("Are certifications accredited and verifiable?",
         "certification_accreditation",
         "Yes. All 20 official certifications are issued by Dagsis University Dummy in partnership with Singapore Industry Boards. Each certificate carries a unique Central Registry Verification Code (e.g., SG-APX-1846) verifiable 24/7 on our website at `/certifications`."),
        
        ("How do employers verify my certificate?",
         "employer_verification",
         "Employers can visit our Central Registry at `/certifications`, enter your unique Verification Code or student NRIC/Passport hash, and instantly view your official digital credential, issue date, and validated competencies."),
        
        ("Do certifications expire?",
         "certification_validity",
         "Most professional certifications carry a 3-year industry validity benchmark, during which alumni receive complimentary refresher webinars. Certain academic preparatory credentials maintain permanent validity."),
        
        ("Will I receive a physical certificate or a digital badge?",
         "credential_format",
         "Graduates receive both an embossed physical certificate presented at graduation and a secure OpenCerts-compatible digital certificate with cryptographic verification for professional resumes and digital career portfolios."),
        
        ("What certification is awarded for Power BI programmes?",
         "cert_power_bi",
         "Graduates of CR019 receive the 'Certified Professional Power BI Data Analyst Associate' (CERT019), validating DAX advanced modeling, Power Query automation, and executive BI dashboard architecture."),

        # TRIAL CLASSES & COMPLIMENTARY SEMINARS (52-55)
        ("How do I book a complimentary trial class?",
         "book_trial_class",
         "You can reserve a seat via `/trial-classes` on our website, ask our AI Chatbot directly, or message WhatsApp at +65 XXXXXXXXX. We reserve 5 to 10 complimentary seats per course."),
        
        ("Are trial classes really 100% free?",
         "trial_free_verification",
         "Yes, 100% free with zero financial obligation. No credit card information is required to attend. It provides an authentic preview of our pedagogy, faculty, and facilities."),
        
        ("What happens during the 90-minute trial seminar?",
         "trial_class_agenda",
         "The session features a 50-minute live teaching demonstration on a key syllabus topic, a 20-minute hands-on practical lab exercise, and a 20-minute Q&A with the master trainer and admissions counselors."),
        
        ("Can I attend more than one trial class?",
         "multiple_trials",
         "Yes, prospective students considering multiple specializations or parents reviewing preparatory options may attend up to 2 complimentary trial masterclasses per intake cycle."),
    ]

    for q, intent, a in qa_list:
        qa_html = (
            f"<b>Q: {q}</b><br/>"
            f"<font color='#047857' size=6.5><b>[INTENT: {intent}]</b></font><br/>"
            f"<font color='#1E293B'>{a}</font>"
        )
        t_qa = Table([[Paragraph(qa_html, table_cell_style)]], colWidths=[printable_width])
        t_qa.setStyle(TableStyle([
            ('BACKGROUND', (0, 0), (-1, -1), colors.white),
            ('BOX', (0, 0), (-1, -1), 0.5, c_border),
            ('TOPPADDING', (0, 0), (-1, -1), 4),
            ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
            ('LEFTPADDING', (0, 0), (-1, -1), 6),
            ('RIGHTPADDING', (0, 0), (-1, -1), 6),
        ]))
        story.append(t_qa)
        story.append(Spacer(1, 3))

    story.append(Spacer(1, 14))

    # ------------------------------------------------------------------
    # OFFICIAL LEGAL DISCLAIMER & FOOTER
    # ------------------------------------------------------------------
    story.append(HRFlowable(width="100%", thickness=1, color=c_primary, spaceBefore=8, spaceAfter=8))
    legal_text = (
        "<b>OFFICIAL STATUTORY LEGAL DISCLAIMER:</b> This Master AI Knowledge Base is registered with the Academic Board of "
        "<b>Dagsis University Dummy</b>. Principal Headquarters Address: <b>123, Street ABC, State XYZ, Pin-000000</b> | Central Admissions Hotline: "
        "<b>+65 XXXXXXXXX</b> | Official Admissions Email: <b>admissions@dagsis.edu.sg</b>. All institutional terms, fee structures, "
        "and dispute procedures herein comply strictly with the Private Education Act (Cap 247A) and the Private Education (Dispute Resolution "
        "Schemes) Regulations of Singapore. All rights reserved."
    )
    story.append(Paragraph(legal_text, caption_style))

    # Build PDF with dynamic multi-page NumberedCanvas
    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"Master Knowledge Base PDF generated at: {output_path}")


# ----------------------------------------------------------------------
# 4. Main Entry Point
# ----------------------------------------------------------------------
if __name__ == '__main__':
    data = load_data()
    print(f"Loaded: {len(data['courses'])} courses, {len(data['campuses'])} campuses, {len(data['trainers'])} trainers, {len(data['certifications'])} certs, {len(data['reviews'])} reviews.")

    targets = [
        os.path.join(os.getcwd(), "Dagsis_University_AI_Chatbot_Knowledge_Base.pdf"),
        os.path.join(os.getcwd(), "public", "Dagsis_University_AI_Chatbot_Knowledge_Base.pdf"),
        os.path.join(os.getcwd(), "Apex_Institute_AI_Chatbot_Knowledge_Base.pdf"),
        os.path.join(os.getcwd(), "public", "Apex_Institute_AI_Chatbot_Knowledge_Base.pdf"),
    ]

    for target in targets:
        os.makedirs(os.path.dirname(target), exist_ok=True)
        generate_pdf(target, data)
