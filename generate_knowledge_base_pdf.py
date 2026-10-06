#!/usr/bin/env python3
"""
Apex Institute of Singapore — AI Chatbot Knowledge Base & Retrieval Corpus PDF Generator
Produces a high-density, beautifully styled, multi-page PDF reference document
specifically formatted for AI ingestion (RAG, vector databases, custom GPTs)
and human educational counselors.
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
            self.drawString(36, A4[1] - 25, "APEX INSTITUTE OF SINGAPORE")
            
            self.setFont("Helvetica", 7)
            self.setFillColor(colors.HexColor("#64748B"))
            self.drawString(170, A4[1] - 25, "•  AI Chatbot Knowledge Base & Retrieval Corpus")
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
    c_primary = colors.HexColor("#047857")      # Emerald
    c_primary_dark = colors.HexColor("#065F46")
    c_primary_light = colors.HexColor("#ECFDF5")
    c_secondary = colors.HexColor("#D97706")    # Amber
    c_dark = colors.HexColor("#111827")         # Charcoal Heading
    c_text = colors.HexColor("#1E293B")         # Body
    c_muted = colors.HexColor("#64748B")        # Slate Muted
    c_surface = colors.HexColor("#F8FAFC")
    c_border = colors.HexColor("#E2E8F0")

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
        fontSize=7.8,
        leading=11,
        textColor=c_text,
        spaceAfter=3,
    )

    bullet_style = ParagraphStyle(
        'Bullet_Custom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.8,
        leading=11,
        textColor=c_text,
        leftIndent=12,
        spaceAfter=2.5,
    )

    callout_style = ParagraphStyle(
        'Callout_Custom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.5,
        leading=10.5,
        textColor=c_dark,
    )

    table_header_style = ParagraphStyle(
        'TableHeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=7,
        leading=9,
        textColor=colors.white,
    )

    table_cell_style = ParagraphStyle(
        'TableCell',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=6.8,
        leading=8.8,
        textColor=c_text,
    )

    table_cell_bold = ParagraphStyle(
        'TableCellBold',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=6.8,
        leading=8.8,
        textColor=c_dark,
    )

    table_cell_green = ParagraphStyle(
        'TableCellGreen',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=6.8,
        leading=8.8,
        textColor=c_primary,
    )

    code_style = ParagraphStyle(
        'CodeStyle',
        parent=styles['Normal'],
        fontName='Courier',
        fontSize=7,
        leading=9.5,
        textColor=colors.HexColor("#0F172A"),
    )

    story = []

    # =========================================================================
    # COVER PAGE
    # =========================================================================
    story.append(Spacer(1, 10))

    # Top Statutory Banner
    badge_data = [[
        Paragraph("<font color='#047857'><b>REPUBLIC OF SINGAPORE  •  STATUTORY PRIVATE EDUCATION REPOSITORY</b></font>", ParagraphStyle('HBadge', fontName='Helvetica-Bold', fontSize=8, leading=10, textColor=c_primary)),
        Paragraph("<b>CPE UEN: 201829481E</b>", ParagraphStyle('RBadge', fontName='Helvetica-Bold', fontSize=8, leading=10, textColor=c_dark, alignment=2))
    ]]
    t_badge = Table(badge_data, colWidths=[340, printable_width - 340])
    t_badge.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), c_primary_light),
        ('BOX', (0, 0), (-1, -1), 0.8, colors.HexColor("#A7F3D0")),
        ('TOPPADDING', (0, 0), (-1, -1), 4),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
        ('LEFTPADDING', (0, 0), (-1, -1), 8),
        ('RIGHTPADDING', (0, 0), (-1, -1), 8),
    ]))
    story.append(t_badge)
    story.append(Spacer(1, 14))

    story.append(Paragraph("APEX INSTITUTE OF SINGAPORE", title_style))
    story.append(Paragraph("Executive Education & Academic Preparatory Tuition Platform<br/><font color='#64748B'>Official Comprehensive Knowledge Base, Context Retrieval Corpus & AI Chatbot Playbook</font>", subtitle_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=c_primary, spaceBefore=0, spaceAfter=14))

    # Document Metadata Table
    doc_specs = [
        [Paragraph("Document Title:", table_cell_bold), Paragraph("AI Chatbot Comprehensive Grounding & RAG Retrieval Corpus", table_cell_style),
         Paragraph("Document Ref:", table_cell_bold), Paragraph("APX-KB-2026-FINAL", table_cell_style)],
        [Paragraph("Statutory Status:", table_cell_bold), Paragraph("CPE Registered PEI (UEN: 201829481E) • EduTrust 4-Year", table_cell_style),
         Paragraph("Last Updated:", table_cell_bold), Paragraph("October 2026 / Academic Year 2026-2027", table_cell_style)],
        [Paragraph("Target AI Roles:", table_cell_bold), Paragraph("Admissions Advisor, Subsidy Calculator, Campus Navigator, Academic Registrar", table_cell_style),
         Paragraph("Fee Protection:", table_cell_bold), Paragraph("Lonpac Insurance Bhd Fee Protection Scheme (FPS)", table_cell_style)],
        [Paragraph("Corpus Breadth:", table_cell_bold), Paragraph("100 Approved Curricula • 30 Faculty • 10 Singapore Campuses • 20 Certifications", table_cell_style),
         Paragraph("Statutory Framework:", table_cell_bold), Paragraph("Private Education Act (Cap 247A) & SkillsFuture SG", table_cell_style)],
    ]
    t_specs = Table(doc_specs, colWidths=[95, 175, 95, printable_width - 365])
    t_specs.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), c_surface),
        ('BOX', (0, 0), (-1, -1), 0.8, c_border),
        ('INNERGRID', (0, 0), (-1, -1), 0.5, c_border),
        ('TOPPADDING', (0, 0), (-1, -1), 4),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
        ('LEFTPADDING', (0, 0), (-1, -1), 6),
        ('RIGHTPADDING', (0, 0), (-1, -1), 6),
    ]))
    story.append(t_specs)
    story.append(Spacer(1, 12))

    # Executive Guidance Callout
    callout_data = [[
        Paragraph(
            "<b>OPERATIONAL SPECIFICATION & AI INGESTION DIRECTIVE:</b><br/>"
            "This document constitutes the official knowledge repository for Apex Institute of Singapore. "
            "It is formatted specifically for RAG (Retrieval-Augmented Generation), vector databases, and LLM embedding workflows. "
            "All fee structures, SkillsFuture subsidies, Lonpac Fee Protection Scheme rules, CPE Schedule D refund matrices, "
            "and campus coordinates herein are binding and legally compliant under Singapore statutory law.",
            callout_style
        )
    ]]
    t_callout = Table(callout_data, colWidths=[printable_width])
    t_callout.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor("#FEF3C7")),
        ('BOX', (0, 0), (-1, -1), 1, colors.HexColor("#F59E0B")),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
        ('LEFTPADDING', (0, 0), (-1, -1), 10),
        ('RIGHTPADDING', (0, 0), (-1, -1), 10),
    ]))
    story.append(t_callout)
    story.append(Spacer(1, 14))

    # Table of Contents
    story.append(Paragraph("TABLE OF CONTENTS & CHAPTER BREAKDOWN", h2_style))
    toc_data = [
        [Paragraph("<b>Chapter 1:</b> Institutional Overview, Governance & Regulatory Compliance", table_cell_style), Paragraph("<b>Chapter 6:</b> Admissions, Enrolment & Student Lifecycle Protocols", table_cell_style)],
        [Paragraph("<b>Chapter 2:</b> Islandwide 10-Campus Network, Transit & Operating Hours", table_cell_style), Paragraph("<b>Chapter 7:</b> Central Credential Registry & Verification (20 Certs)", table_cell_style)],
        [Paragraph("<b>Chapter 3:</b> Complete Academic Curricula & Course Directory (100 Courses)", table_cell_style), Paragraph("<b>Chapter 8:</b> Canonical Chatbot Intent Playbook (25+ Q&As)", table_cell_style)],
        [Paragraph("<b>Chapter 4:</b> Academic Faculty Body & Department Leadership (30 Fellows)", table_cell_style), Paragraph("<b>Chapter 9:</b> AI System Prompt, Persona & Guardrails Playbook", table_cell_style)],
        [Paragraph("<b>Chapter 5:</b> Singapore Statutory Subsidies & Tuition Financial Aid", table_cell_style), Paragraph("<b>Chapter 10:</b> Emergency Contacts, Escalation & Registry Routing", table_cell_style)],
    ]
    t_toc = Table(toc_data, colWidths=[printable_width/2, printable_width/2])
    t_toc.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), colors.white),
        ('BOX', (0, 0), (-1, -1), 0.6, c_border),
        ('INNERGRID', (0, 0), (-1, -1), 0.4, c_border),
        ('TOPPADDING', (0, 0), (-1, -1), 4),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
        ('LEFTPADDING', (0, 0), (-1, -1), 6),
        ('RIGHTPADDING', (0, 0), (-1, -1), 6),
    ]))
    story.append(t_toc)

    story.append(PageBreak())

    # =========================================================================
    # CHAPTER 1: INSTITUTIONAL OVERVIEW & REGULATORY GOVERNANCE
    # =========================================================================
    story.append(Paragraph("CHAPTER 1: INSTITUTIONAL OVERVIEW, GOVERNANCE & REGULATORY COMPLIANCE", h1_style))
    story.append(HRFlowable(width="100%", thickness=1, color=c_primary, spaceBefore=2, spaceAfter=8))
    
    story.append(Paragraph("<b>1.1 Legal Identity & Statutory Authority</b>", h2_style))
    story.append(Paragraph(
        "Apex Institute of Singapore Pte. Ltd. is a registered Private Education Institution (PEI) governed by the Committee for Private Education (CPE), a statutory agency under SkillsFuture Singapore (SSG) created by the Private Education Act (Cap 247A). The Institute holds an uninterrupted 4-Year EduTrust Certification and adheres strictly to the Enhanced Registration Framework (ERF).",
        body_style
    ))
    
    inst_table = [
        [Paragraph("Statutory UEN:", table_cell_bold), Paragraph("201829481E", table_cell_style),
         Paragraph("Registration Period:", table_cell_bold), Paragraph("15 July 2022 to 14 July 2026 (4-Year Grant)", table_cell_style)],
        [Paragraph("EduTrust Status:", table_cell_bold), Paragraph("EduTrust 4-Year Certified (Quality Distinction)", table_cell_style),
         Paragraph("Academic Governance:", table_cell_bold), Paragraph("Governed by the Academic Board & Examination Board", table_cell_style)],
        [Paragraph("Fee Protection:", table_cell_bold), Paragraph("Lonpac Insurance Bhd (FPS Policy #LPC-PEI-201829481E)", table_cell_style),
         Paragraph("Student Medical Insurance:", table_cell_bold), Paragraph("Income Insurance Ltd (Min S$20,000 annual limit)", table_cell_style)],
        [Paragraph("Admissions Hotline:", table_cell_bold), Paragraph("+65 6732 8888 (Mondays–Fridays, 09:00–18:00 SGT)", table_cell_style),
         Paragraph("Official WhatsApp:", table_cell_bold), Paragraph("+65 8299 1234 (Automated & Human Registrar)", table_cell_style)],
    ]
    t_inst = Table(inst_table, colWidths=[95, 175, 100, printable_width - 370])
    t_inst.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), c_surface),
        ('BOX', (0, 0), (-1, -1), 0.6, c_border),
        ('INNERGRID', (0, 0), (-1, -1), 0.4, c_border),
        ('TOPPADDING', (0, 0), (-1, -1), 3),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3),
        ('LEFTPADDING', (0, 0), (-1, -1), 6),
        ('RIGHTPADDING', (0, 0), (-1, -1), 6),
    ]))
    story.append(t_inst)
    story.append(Spacer(1, 8))

    story.append(Paragraph("<b>1.2 Mandatory Fee Protection Scheme (FPS) & Standard PEI-Student Contract</b>", h2_style))
    story.append(Paragraph(
        "<b>Rule for Chatbot:</b> When users ask about fee security, assure them that 100% of their tuition fees are insured under Singapore law.<br/>"
        "• <b>FPS Insurance Mechanism:</b> Apex Institute purchases insurance from Lonpac Insurance Bhd for every enrolled candidate. If the PEI is unable to continue operations due to insolvency or regulatory closure, Lonpac reimburses the unconsumed portion of course fees within 14 business days.<br/>"
        "• <b>Standard PEI-Student Contract:</b> No course fees may be collected until candidate executes the official CPE Standard PEI-Student Contract (Version 3.1). The contract specifies Schedule A (Course Details), Schedule B (Fee Breakdown), Schedule C (Miscellaneous Fees), and Schedule D (Refund Policy).<br/>"
        "• <b>Statutory Cooling-Off Period:</b> Students have a mandatory <b>7 working days cooling-off period</b> commencing immediately upon contract signing. Within these 7 days, a student may withdraw for any reason and receive a <b>100% refund</b> of course fees paid (less non-refundable registration application fee of S$100).<br/>"
        "• <b>Fee Collection Cap:</b> Apex Institute is legally prohibited from collecting course fees exceeding 12 months' worth of tuition in advance.",
        body_style
    ))
    story.append(Spacer(1, 6))

    story.append(Paragraph("<b>1.3 CPE Standard Schedule D Refund Matrix</b>", h2_style))
    refund_table_data = [
        [Paragraph("Circumstance of Student Withdrawal", table_header_style), Paragraph("Refund Amount (%)", table_header_style), Paragraph("Chatbot Handling Guideline", table_header_style)],
        [Paragraph("Notice received within 7 working days cooling-off period", table_cell_bold), Paragraph("<b>100%</b> of Course Fees Paid", table_cell_green), Paragraph("Instant statutory refund; process within 7 working days.", table_cell_style)],
        [Paragraph("Notice received >= 30 calendar days before course commencement", table_cell_style), Paragraph("<b>80%</b> of Course Fees Paid", table_cell_style), Paragraph("Standard pre-commencement withdrawal; 20% retained as administrative processing.", table_cell_style)],
        [Paragraph("Notice received > 0 and < 30 calendar days before course commencement", table_cell_style), Paragraph("<b>50%</b> of Course Fees Paid", table_cell_style), Paragraph("Late pre-commencement notice; seat allocation fee retained.", table_cell_style)],
        [Paragraph("Notice received on or after course commencement date", table_cell_style), Paragraph("<b>0%</b> (No refund)", table_cell_style), Paragraph("Course underway; candidate may request deferment to next cohort instead.", table_cell_style)],
        [Paragraph("Course cancellation / PEI failure to commence cohort", table_cell_bold), Paragraph("<b>100%</b> + Full Registration Fee", table_cell_green), Paragraph("Immediate full reimbursement within 7 working days; offer alternative campus cohort.", table_cell_style)],
    ]
    t_refund = Table(refund_table_data, colWidths=[200, 110, printable_width - 310])
    t_refund.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), c_dark),
        ('BOX', (0, 0), (-1, -1), 0.6, c_border),
        ('INNERGRID', (0, 0), (-1, -1), 0.4, c_border),
        ('TOPPADDING', (0, 0), (-1, -1), 3),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3),
        ('LEFTPADDING', (0, 0), (-1, -1), 5),
        ('RIGHTPADDING', (0, 0), (-1, -1), 5),
    ]))
    story.append(t_refund)
    story.append(Spacer(1, 8))

    story.append(Paragraph("<b>1.4 Academic Attendance & Discipline Standards</b>", h2_style))
    story.append(Paragraph(
        "• <b>Minimum Attendance for Singapore Citizens / PRs:</b> <b>75%</b> aggregate session attendance required to sit for final qualifying examinations.<br/>"
        "• <b>Minimum Attendance for Grant Beneficiaries (SSG / UTAP):</b> <b>75% attendance AND sit for all formal assessments</b>. If a student fails attendance, the government subsidy is clawed back, and the student becomes personally liable for the full unsubsidized tuition fee.<br/>"
        "• <b>Minimum Attendance for International Student Pass Holders:</b> <b>90% monthly attendance</b> strictly monitored under Immigration & Checkpoints Authority (ICA) statutory regulations.",
        body_style
    ))

    story.append(PageBreak())

    # =========================================================================
    # CHAPTER 2: CAMPUS LOCATIONS & TRANSIT SPECIFICATIONS
    # =========================================================================
    story.append(Paragraph("CHAPTER 2: ISLANDWIDE 10-CAMPUS NETWORK, TRANSIT & OPERATING HOURS", h1_style))
    story.append(HRFlowable(width="100%", thickness=1, color=c_primary, spaceBefore=2, spaceAfter=8))
    story.append(Paragraph(
        "<b>Rule for Chatbot:</b> Whenever a user mentions their residential location or workplace, match them with the nearest transit-linked campus centre. "
        "All campuses feature executive seminar rooms, quiet study pods, gigabit fiber Wi-Fi, and dual-monitor computer workstations.",
        body_style
    ))

    campus_rows = [
        [
            Paragraph("Campus Name & ID", table_header_style),
            Paragraph("Address & Building", table_header_style),
            Paragraph("MRT Transit Interchanges", table_header_style),
            Paragraph("Operating Hours", table_header_style),
            Paragraph("Contact Hotline", table_header_style),
        ]
    ]

    for camp in data['campuses']:
        campus_rows.append([
            Paragraph(f"<b>{camp['name']}</b><br/><font color='#047857'>ID: {camp['id']} ({camp['type']})</font>", table_cell_style),
            Paragraph(f"{camp['address']}", table_cell_style),
            Paragraph(f"<b>{camp['mrt']} MRT</b>", table_cell_bold),
            Paragraph(f"{camp['hours']}", table_cell_style),
            Paragraph(f"{camp['phone']}<br/><font color='#64748B'>{camp['email']}</font>", table_cell_style),
        ])

    t_camp = Table(campus_rows, colWidths=[100, 140, 95, 95, printable_width - 430])
    t_camp.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), c_primary_dark),
        ('BOX', (0, 0), (-1, -1), 0.6, c_border),
        ('INNERGRID', (0, 0), (-1, -1), 0.4, c_border),
        ('TOPPADDING', (0, 0), (-1, -1), 3),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3),
        ('LEFTPADDING', (0, 0), (-1, -1), 4),
        ('RIGHTPADDING', (0, 0), (-1, -1), 4),
    ]))
    story.append(t_camp)
    story.append(Spacer(1, 10))

    story.append(Paragraph("<b>2.1 Somerset Flagship Executive Centre (Headquarters & Registry)</b>", h2_style))
    story.append(Paragraph(
        "• <b>Location:</b> TripleOne Somerset, 111 Somerset Road #10-01, Singapore 238164.<br/>"
        "• <b>Transit:</b> Sheltered link directly connected to Somerset MRT Station (North-South Line NS23, Exit A).<br/>"
        "• <b>Facilities:</b> Office of the Registrar, Academic Board boardroom, 4 tiered lecture theatres (80 pax), 6 executive seminar suites (25 pax), high-performance AI Computing Lab equipped with Nvidia GPU workstations.<br/>"
        "• <b>Admissions Desk Hours:</b> Mondays to Fridays 09:00–21:00; Saturdays & Sundays 09:00–18:00.<br/>"
        "• <b>Appointment Protocol:</b> Prospective candidates may walk in or schedule private 1-on-1 consultations via chatbot.",
        body_style
    ))

    story.append(PageBreak())

    # =========================================================================
    # CHAPTER 3: COMPLETE ACADEMIC CURRICULA & COURSE CATALOG (ALL 100 COURSES)
    # =========================================================================
    story.append(Paragraph("CHAPTER 3: COMPLETE ACADEMIC CURRICULA & COURSE CATALOG (100 APPROVED PROGRAMMES)", h1_style))
    story.append(HRFlowable(width="100%", thickness=1, color=c_primary, spaceBefore=2, spaceAfter=8))
    story.append(Paragraph(
        "This chapter lists the complete index of all 100 accredited curricula across our 21 academic divisions. "
        "Each course is registered under the CPE framework. Fees are in SGD and reflect Standard Approved Tuition vs. "
        "Estimated Net Tuition for Singapore Citizens aged 40+ after SkillsFuture Mid-Career Enhanced Subsidy (MCES).",
        body_style
    ))

    # All 100 courses table
    course_table_data = [
        [
            Paragraph("ID", table_header_style),
            Paragraph("Course Name & Curriculum Title", table_header_style),
            Paragraph("Discipline", table_header_style),
            Paragraph("Format", table_header_style),
            Paragraph("Dur.", table_header_style),
            Paragraph("Standard", table_header_style),
            Paragraph("SC 40+ Net", table_header_style),
            Paragraph("Prerequisites / Eligibility", table_header_style),
        ]
    ]

    for c in data['courses']:
        standard_fee = c['fee_sgd']
        ssg_subsidy = int(standard_fee * 0.7)
        sfc_offset = min(500, standard_fee - ssg_subsidy)
        net_fee = max(0, standard_fee - ssg_subsidy - sfc_offset)

        c_name = c['course_name']
        if len(c_name) > 30:
            c_name = c_name[:28] + ".."

        prereq = c['admission_requirement']
        if len(prereq) > 28:
            prereq = prereq[:26] + ".."

        course_table_data.append([
            Paragraph(f"<b>{c['course_id']}</b>", table_cell_bold),
            Paragraph(c_name, table_cell_style),
            Paragraph(c['category'], table_cell_style),
            Paragraph(c['format'], table_cell_style),
            Paragraph(f"{c['duration_weeks']}w", table_cell_style),
            Paragraph(f"S${c['fee_sgd']:,}", table_cell_style),
            Paragraph(f"<b>S${net_fee:,}</b>", table_cell_green),
            Paragraph(prereq, table_cell_style),
        ])

    t_all_courses = Table(course_table_data, colWidths=[38, 130, 80, 52, 28, 48, 50, printable_width - 426], repeatRows=1)
    t_all_courses.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), c_dark),
        ('BOX', (0, 0), (-1, -1), 0.6, c_border),
        ('INNERGRID', (0, 0), (-1, -1), 0.35, c_border),
        ('TOPPADDING', (0, 0), (-1, -1), 1.8),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 1.8),
        ('LEFTPADDING', (0, 0), (-1, -1), 3),
        ('RIGHTPADDING', (0, 0), (-1, -1), 3),
    ]))
    story.append(t_all_courses)

    story.append(PageBreak())

    # =========================================================================
    # CHAPTER 4: FACULTY BODY & DEPARTMENT CHAIRS (ALL 30 FELLOWS)
    # =========================================================================
    story.append(Paragraph("CHAPTER 4: ACADEMIC FACULTY BODY & DEPARTMENT LEADERSHIP (ALL 30 FELLOWS)", h1_style))
    story.append(HRFlowable(width="100%", thickness=1, color=c_primary, spaceBefore=2, spaceAfter=8))
    story.append(Paragraph(
        "<b>Rule for Chatbot:</b> Apex Institute maintains a strictly enforced 1:12 faculty-to-student seminar ratio. "
        "Our teaching faculty includes former MOE curriculum specialists, Cambridge scholars, and senior enterprise practitioners holding doctoral appointments. "
        "Below is the complete registry of all 30 faculty members.",
        body_style
    ))

    trainer_rows = [
        [
            Paragraph("ID", table_header_style),
            Paragraph("Faculty Fellow Name", table_header_style),
            Paragraph("Academic Title & Department", table_header_style),
            Paragraph("Specialization", table_header_style),
            Paragraph("Degrees & Conferred Institutions", table_header_style),
            Paragraph("Exp.", table_header_style),
            Paragraph("Rating", table_header_style),
        ]
    ]

    for tr in data['trainers']:
        quals = ", ".join(tr.get('qualifications', [])[:2])
        if len(quals) > 34:
            quals = quals[:32] + ".."
        trainer_rows.append([
            Paragraph(f"<b>{tr['trainer_id']}</b>", table_cell_bold),
            Paragraph(tr['display_name'], table_cell_style),
            Paragraph(tr['title'][:25], table_cell_style),
            Paragraph(tr['specialization'], table_cell_style),
            Paragraph(quals, table_cell_style),
            Paragraph(f"{tr['experience_years']}y", table_cell_style),
            Paragraph(f"★ {tr['rating']}", table_cell_green),
        ])

    t_all_train = Table(trainer_rows, colWidths=[35, 85, 95, 85, 140, 30, printable_width - 470], repeatRows=1)
    t_all_train.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), c_primary_dark),
        ('BOX', (0, 0), (-1, -1), 0.6, c_border),
        ('INNERGRID', (0, 0), (-1, -1), 0.35, c_border),
        ('TOPPADDING', (0, 0), (-1, -1), 2.2),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 2.2),
        ('LEFTPADDING', (0, 0), (-1, -1), 3),
        ('RIGHTPADDING', (0, 0), (-1, -1), 3),
    ]))
    story.append(t_all_train)
    story.append(Spacer(1, 10))

    story.append(Paragraph("<b>4.1 Academic Pedagogy & Quality Assurance Standards</b>", h2_style))
    story.append(Paragraph(
        "• <b>Heuristic & Applied Problem Solving:</b> Theoretical coursework is paired with live enterprise environments and real datasets.<br/>"
        "• <b>Independent Audits:</b> Student evaluations are audited quarterly by the Examination Board. Faculty maintain an aggregate satisfaction index of <b>4.91 / 5.0</b> across 24,500+ graduated scholars.<br/>"
        "• <b>Consultation Hours:</b> Each faculty fellow hosts weekly dedicated office hours (virtual and in-person at Somerset and Jurong) for academic guidance and research mentoring.",
        body_style
    ))

    story.append(PageBreak())

    # =========================================================================
    # CHAPTER 5: STATUTORY SUBSIDIES & TUITION AID
    # =========================================================================
    story.append(Paragraph("CHAPTER 5: SINGAPORE STATUTORY GRANTS, SUBSIDIES & TUITION AID", h1_style))
    story.append(HRFlowable(width="100%", thickness=1, color=c_primary, spaceBefore=2, spaceAfter=8))
    story.append(Paragraph(
        "<b>Rule for Chatbot:</b> This is the most critical commercial domain. Explain financial aid clearly, "
        "quote exact subsidy percentages, and perform instant fee simulation for any applicant based on age and citizenship.",
        body_style
    ))

    story.append(Paragraph("<b>5.1 Subsidies by Nationality & Age Tier</b>", h2_style))
    
    subsidy_matrix = [
        [Paragraph("Applicant Profile", table_header_style), Paragraph("Statutory Grant Name", table_header_style), Paragraph("SSG Subsidy %", table_header_style), Paragraph("SkillsFuture Credit", table_header_style), Paragraph("NTUC UTAP Co-Funding", table_header_style)],
        [
            Paragraph("<b>Singapore Citizen (SC)<br/>Aged 40 & Above</b>", table_cell_bold),
            Paragraph("SkillsFuture Mid-Career Enhanced Subsidy (MCES)", table_cell_style),
            Paragraph("<b>Up to 70%</b> Course Fee", table_cell_green),
            Paragraph("Applicable (S$500+ Opening + Top-Ups)", table_cell_style),
            Paragraph("Up to S$250/yr (or S$500 for age 40+ enhanced)", table_cell_style),
        ],
        [
            Paragraph("<b>Singapore Citizen (SC)<br/>Aged 25 to 39</b>", table_cell_bold),
            Paragraph("SkillsFuture Baseline Course Fee Subsidy", table_cell_style),
            Paragraph("<b>Up to 50%</b> Course Fee", table_cell_style),
            Paragraph("Applicable (S$500 Baseline Credit)", table_cell_style),
            Paragraph("Up to S$250/yr for active NTUC union members", table_cell_style),
        ],
        [
            Paragraph("<b>Singapore Citizen (SC)<br/>Under 25 Years</b>", table_cell_bold),
            Paragraph("SkillsFuture Baseline Subsidy / PSEA Eligible", table_cell_style),
            Paragraph("<b>Up to 50%</b> Course Fee", table_cell_style),
            Paragraph("Not eligible for opening credit until age 25", table_cell_style),
            Paragraph("Up to S$250/yr (if union member) / PSEA funds", table_cell_style),
        ],
        [
            Paragraph("<b>Permanent Resident (PR)<br/>Any Age</b>", table_cell_bold),
            Paragraph("SkillsFuture PR Course Subsidy Tier", table_cell_style),
            Paragraph("<b>Up to 30%</b> Course Fee", table_cell_style),
            Paragraph("Not eligible for citizen SkillsFuture credit", table_cell_style),
            Paragraph("Up to S$250/yr for active NTUC union members", table_cell_style),
        ],
        [
            Paragraph("<b>International Applicant / Non-PR</b>", table_cell_bold),
            Paragraph("Standard Unsubsidized International Tuition", table_cell_style),
            Paragraph("0% (Full Tuition Fee)", table_cell_style),
            Paragraph("Not eligible", table_cell_style),
            Paragraph("Not eligible", table_cell_style),
        ],
    ]
    t_sub = Table(subsidy_matrix, colWidths=[110, 115, 80, 110, printable_width - 415])
    t_sub.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), c_dark),
        ('BOX', (0, 0), (-1, -1), 0.6, c_border),
        ('INNERGRID', (0, 0), (-1, -1), 0.4, c_border),
        ('TOPPADDING', (0, 0), (-1, -1), 3),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3),
        ('LEFTPADDING', (0, 0), (-1, -1), 4),
        ('RIGHTPADDING', (0, 0), (-1, -1), 4),
    ]))
    story.append(t_sub)
    story.append(Spacer(1, 10))

    story.append(Paragraph("<b>5.2 Exact Fee Simulation Algorithm (Step-by-Step)</b>", h2_style))
    story.append(Paragraph(
        "<b>Formula for Chatbot Calculation:</b><br/>"
        "1. <b>Baseline Tuition:</b> Let standard approved tuition = <i>Fee</i>.<br/>"
        "2. <b>SSG Subsidy Deduction:</b> If SC 40+, deduct 70% (<i>Fee × 0.70</i>). If SC 25–39, deduct 50% (<i>Fee × 0.50</i>). If PR, deduct 30% (<i>Fee × 0.30</i>).<br/>"
        "3. <b>SkillsFuture Credit Deduction:</b> Subtract available SkillsFuture Credit (typically S$500 balance) from remaining payable balance.<br/>"
        "4. <b>UTAP Co-Funding Deduction:</b> If applicant is an NTUC member, deduct 50% of the remaining out-of-pocket tuition, capped at S$250 per calendar year.<br/>"
        "5. <b>Net Cash Outlay:</b> Remaining balance may be paid via PayNow, GIRO, SkillsFuture Credit top-up, or 0% interest credit card installments.<br/>"
        "<b>Example:</b> For a S$2,000 course taken by an SC aged 42 with NTUC membership: "
        "SSG pays S$1,400 (70%) → Remaining is S$600. SFC offset takes S$500 → Remaining is S$100. UTAP covers 50% (S$50) → <b>Net Cash Outlay = S$50 only!</b>",
        body_style
    ))
    story.append(Spacer(1, 6))

    story.append(Paragraph("<b>5.3 How to Claim SkillsFuture Credit via MySkillsFuture Portal</b>", h2_style))
    story.append(Paragraph(
        "1. <b>Enrollment:</b> Candidate submits formal application on Apex Institute website and receives formal Registry Student Contract.<br/>"
        "2. <b>Login:</b> Candidate visits <i>www.myskillsfuture.gov.sg</i> and logs in using Singpass.<br/>"
        "3. <b>Select Course:</b> Search for 'Apex Institute of Singapore' and select the course code (e.g. CR006).<br/>"
        "4. <b>Upload Invoice:</b> Attach the official fee breakdown schedule provided by the Registrar.<br/>"
        "5. <b>Disbursement:</b> SSG pays the approved credit directly to Apex Institute. Student only pays remaining net cash balance.<br/>"
        "• <b>Deadline:</b> Claims must be submitted within <b>60 days before course start date</b> and no later than course commencement day.",
        body_style
    ))

    story.append(PageBreak())

    # =========================================================================
    # CHAPTER 6: ADMISSIONS & STUDENT LIFECYCLE
    # =========================================================================
    story.append(Paragraph("CHAPTER 6: ADMISSIONS, ENROLMENT & STUDENT LIFECYCLE PROTOCOLS", h1_style))
    story.append(HRFlowable(width="100%", thickness=1, color=c_primary, spaceBefore=2, spaceAfter=8))

    story.append(Paragraph("<b>6.1 Four-Stage Formal Matriculation Journey</b>", h2_style))
    
    adm_steps = [
        [
            Paragraph("<b>Stage 1: Application</b>", table_cell_bold),
            Paragraph("Candidate submits full legal name (NRIC/Passport), contact coordinates, preferred campus, and target academic discipline via online portal.", table_cell_style)
        ],
        [
            Paragraph("<b>Stage 2: Review</b>", table_cell_bold),
            Paragraph("Academic Board verifies entry requirements (academic credentials, prior experience, language proficiency). Advisory issued within 24 hours.", table_cell_style)
        ],
        [
            Paragraph("<b>Stage 3: Contracting</b>", table_cell_bold),
            Paragraph("Execution of standard CPE Student Contract and Lonpac Fee Protection Scheme issuance. SkillsFuture and UTAP grant co-funding confirmed.", table_cell_style)
        ],
        [
            Paragraph("<b>Stage 4: Matriculation</b>", table_cell_bold),
            Paragraph("Student Portal credentials dispatched. Timetable, LMS syllabus, electronic learning materials, and seminar seat confirmed.", table_cell_style)
        ],
    ]
    t_adm = Table(adm_steps, colWidths=[120, printable_width - 120])
    t_adm.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), c_surface),
        ('BOX', (0, 0), (-1, -1), 0.6, c_border),
        ('INNERGRID', (0, 0), (-1, -1), 0.4, c_border),
        ('TOPPADDING', (0, 0), (-1, -1), 4),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
        ('LEFTPADDING', (0, 0), (-1, -1), 6),
        ('RIGHTPADDING', (0, 0), (-1, -1), 6),
    ]))
    story.append(t_adm)
    story.append(Spacer(1, 10))

    story.append(Paragraph("<b>6.2 Complimentary Trial Classes & Academic Diagnostic Assessments</b>", h2_style))
    story.append(Paragraph(
        "• <b>Eligibility:</b> Prospective candidates and parents may book one complimentary diagnostic masterclass per curriculum.<br/>"
        "• <b>Capacity Cap:</b> Each seminar caps trial seats between 2 to 5 candidates to preserve faculty interaction.<br/>"
        "• <b>What's Included:</b> Curriculum overview, 45-minute live faculty lecture, diagnostic baseline score report, and private 1-on-1 counselor evaluation.<br/>"
        "• <b>Booking via Chatbot:</b> Candidate provides Name, Mobile, Email, Target Course, and Preferred Campus. The chatbot generates an instant reservation code (e.g., <i>APX-ADM-2026-XXXX</i>).",
        body_style
    ))

    story.append(PageBreak())

    # =========================================================================
    # CHAPTER 7: CENTRAL CREDENTIAL REGISTRY (ALL 20 CERTIFICATIONS)
    # =========================================================================
    story.append(Paragraph("CHAPTER 7: CENTRAL CREDENTIAL REGISTRY, VERIFICATION & DIGITAL PARCHMENTS", h1_style))
    story.append(HRFlowable(width="100%", thickness=1, color=c_primary, spaceBefore=2, spaceAfter=8))
    story.append(Paragraph(
        "<b>Rule for Chatbot:</b> Employers, background-check firms, and overseas universities can instantly authenticate any certificate issued by Apex Institute.<br/>"
        "Below is the complete registry of all 20 institutional credentials and their official verification reference identifiers.",
        body_style
    ))

    cert_rows = [
        [
            Paragraph("Cert ID", table_header_style),
            Paragraph("Credential Name & Industry Title", table_header_style),
            Paragraph("Academic Division", table_header_style),
            Paragraph("Registry Ref Code", table_header_style),
            Paragraph("Level", table_header_style),
            Paragraph("Validity", table_header_style),
        ]
    ]

    for cert in data['certifications']:
        cert_rows.append([
            Paragraph(f"<b>{cert['certification_id']}</b>", table_cell_bold),
            Paragraph(f"<b>{cert['industry_title']}</b><br/><font color='#64748B'>{cert['name']}</font>", table_cell_style),
            Paragraph(cert['category'], table_cell_style),
            Paragraph(f"<code>{cert['verification_code']}</code>", table_cell_green),
            Paragraph(cert['credential_level'][:16], table_cell_style),
            Paragraph(cert['validity'], table_cell_style),
        ])

    t_all_certs = Table(cert_rows, colWidths=[45, 175, 95, 80, 65, printable_width - 460], repeatRows=1)
    t_all_certs.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), c_dark),
        ('BOX', (0, 0), (-1, -1), 0.6, c_border),
        ('INNERGRID', (0, 0), (-1, -1), 0.35, c_border),
        ('TOPPADDING', (0, 0), (-1, -1), 2.5),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 2.5),
        ('LEFTPADDING', (0, 0), (-1, -1), 4),
        ('RIGHTPADDING', (0, 0), (-1, -1), 4),
    ]))
    story.append(t_all_certs)
    story.append(Spacer(1, 10))

    story.append(Paragraph("<b>7.1 Verification Protocol & Digital Parchment Security</b>", h2_style))
    story.append(Paragraph(
        "• <b>Online Lookup:</b> Employers navigate to <i>apex.edu.sg/certifications</i> and enter the verification code.<br/>"
        "• <b>Data Returned:</b> Recipient Legal Name, Award Title, Conferred Specialization, Validation Body, and Academic Standing (Active/Distinction).<br/>"
        "• <b>Security Elements:</b> High-resolution digital transcripts feature an embedded cryptographic SHA-256 hash, CPE statutory seal, and instant QR verification link.",
        body_style
    ))

    story.append(PageBreak())

    # =========================================================================
    # CHAPTER 8: CANONICAL CHATBOT INTENT PLAYBOOK (25+ Q&As)
    # =========================================================================
    story.append(Paragraph("CHAPTER 8: CANONICAL CHATBOT INTENT PLAYBOOK & APPROVED RESPONSES", h1_style))
    story.append(HRFlowable(width="100%", thickness=1, color=c_primary, spaceBefore=2, spaceAfter=8))
    story.append(Paragraph(
        "<b>Instructions for AI Prompts:</b> Below are 16 essential conversational questions with metadata intent tags and verbatim, statutory-compliant answers. "
        "The chatbot must deliver these responses with warmth, professional accuracy, and clear calls-to-action.",
        body_style
    ))

    faq_items = [
        (
            "[INTENT: accreditation_inquiry]",
            "Q1: Is Apex Institute of Singapore accredited and recognized by the Singapore government?",
            "Yes. Apex Institute of Singapore is officially registered with the Committee for Private Education (CPE UEN: 201829481E) under the Private Education Act (Cap 247A). We hold an active 4-Year EduTrust Certification. Furthermore, our eligible professional programmes are approved by SkillsFuture Singapore (SSG) for government funding, Mid-Career Enhanced Subsidies (MCES), and NTUC UTAP union co-funding."
        ),
        (
            "[INTENT: subsidy_sc40_calculation]",
            "Q2: How much course subsidy do I get as a Singapore Citizen aged 40 or above?",
            "As a Singapore Citizen aged 40 and above, you qualify for the SkillsFuture Mid-Career Enhanced Subsidy (MCES), which covers up to 70% of approved course tuition. In addition, you can use your opening and top-up SkillsFuture Credits to offset the remaining fees, reducing your out-of-pocket cash outlay to as low as S$50–S$300. If you are an NTUC union member, UTAP covers an additional 50% of unfunded fees up to S$250–S$500/year."
        ),
        (
            "[INTENT: subsidy_pr_international]",
            "Q3: Can Permanent Residents (PRs) or international applicants receive funding?",
            "Singapore Permanent Residents (PRs) receive up to a 30% baseline course fee subsidy from SkillsFuture Singapore. PRs who are NTUC union members can also claim up to S$250/year in UTAP co-funding. International applicants pay the standard unsubsidized tuition fee in Singapore Dollars (SGD), protected 100% under our Lonpac Insurance Fee Protection Scheme (FPS)."
        ),
        (
            "[INTENT: refund_policy_withdrawal]",
            "Q4: What happens if I register and then need to cancel or withdraw? (Refund Policy)",
            "Under the CPE Standard PEI-Student Contract, you are protected by a mandatory 7-working-days cooling-off period from contract signing, during which you receive a 100% refund of course fees paid. If you withdraw >= 30 days before class starts, you receive an 80% refund; if between 1 to 29 days before, you receive a 50% refund. If the Institute ever fails to commence a course, 100% of all fees are refunded within 7 working days."
        ),
        (
            "[INTENT: fee_protection_insurance]",
            "Q5: Are my course tuition fees safe if the institute faces financial difficulty?",
            "Yes, completely safe. Under Singapore law and CPE regulations, Apex Institute maintains a mandatory Fee Protection Scheme (FPS) with Lonpac Insurance Bhd. Every dollar of your tuition fee is insured against insolvency or school closure from the date of payment until course graduation."
        ),
        (
            "[INTENT: trial_class_reservation]",
            "Q6: Can I attend a trial class before enrolling in a full programme?",
            "Yes! We offer complimentary diagnostic masterclasses and curriculum consultations across all 10 Singapore campuses. Trial classes cap outside attendees at 2–5 seats to preserve seminar quality. You can reserve your seat directly with me by providing your name, email, phone number, and preferred campus."
        ),
        (
            "[INTENT: campus_operating_hours]",
            "Q7: Where are your campuses located and what are their operating hours?",
            "We have 10 executive campuses directly linked to major MRT stations across Singapore: Somerset (TripleOne Somerset #10-01), Jurong East, Tampines, Bishan, Woodlands, Orchard, Marina Bay, Novena, Bugis, and Clementi. Admissions offices operate Mondays through Fridays 09:00 to 18:00 SGT, and Saturdays 09:00 to 13:00 SGT."
        ),
        (
            "[INTENT: sfc_portal_claim_steps]",
            "Q8: How do I claim my SkillsFuture Credit for my course?",
            "First, submit your course application with Apex Institute to receive your official Registry Letter and fee schedule. Next, log in to www.myskillsfuture.gov.sg using your Singpass, search for 'Apex Institute', select your course code (e.g. CR006), upload your invoice, and authorize the credit deduction. The government pays the credit directly to Apex Institute."
        ),
        (
            "[INTENT: attendance_regulations]",
            "Q9: What are the attendance requirements to graduate and retain my subsidy?",
            "Singapore Citizens and PRs must maintain at least 75% class attendance and sit for all prescribed module assessments. It is essential to maintain 75% attendance on grant-funded courses; otherwise, SkillsFuture clawbacks apply, and the student becomes liable for the full unsubsidized fee. International student pass holders must maintain 90% monthly attendance under ICA statutory regulations."
        ),
        (
            "[INTENT: certificate_verification_employer]",
            "Q10: How can my employer verify the certificate I earn from Apex Institute?",
            "All certificates feature a cryptographic verification code (e.g., SG-APX-1000). Employers or academic admissions boards can visit our official portal at apex.edu.sg/certifications, enter the credential code, and receive instant verification of your award title, graduation standing, and date of conferral."
        ),
        (
            "[INTENT: installment_payment_options]",
            "Q11: Can I pay in interest-free monthly installments?",
            "Yes. For self-funded portions not covered by SkillsFuture or UTAP, we offer 0% interest installment payment plans over 6 or 12 months with major Singapore banks (DBS/POSB, OCBC, UOB). In accordance with CPE rules, no fees exceeding 12 months in advance are ever collected."
        ),
        (
            "[INTENT: delivery_format_options]",
            "Q12: What learning formats do you offer for working adults?",
            "We offer four flexible delivery modes: 1) Executive Hybrid (bi-weekly Saturday physical seminars + online modules), 2) Live Online Synchronous (interactive evening Zoom classes), 3) On-Campus In-Person Seminars, and 4) Weekend Intensive Cohorts. You can switch formats during term breaks upon approval by the Registrar."
        ),
        (
            "[INTENT: teacher_student_ratio]",
            "Q13: What is your teacher-to-student ratio in classes?",
            "We strictly cap seminar sizes at a 1:12 faculty-to-student ratio for executive and postgraduate cohorts, and 1:15 for foundational academic prep. This ensures personalized code reviews, individual heuristic problem solving, and direct mentorship from our doctoral and master faculty fellows."
        ),
        (
            "[INTENT: prerequisite_exemption]",
            "Q14: Can I get academic credit exemptions if I have prior diploma or university experience?",
            "Yes. Candidates holding relevant tertiary diplomas, polytechnic credits, or at least 3 years of verified industry experience may apply for Recognition of Prior Learning (RPL). Exemption requests are reviewed individually by the Academic Board within 3 working days."
        ),
        (
            "[INTENT: exam_resit_policy]",
            "Q15: What happens if I fail an assessment or examination module?",
            "Candidates are permitted one complimentary module re-sit within 30 days of result notification. If a second re-assessment is required, a standard administrative re-examination fee of S$150 applies. Academic coaching is provided during office hours to ensure mastery."
        ),
        (
            "[INTENT: corporate_group_training]",
            "Q16: Do you provide corporate group training and Skills Development Fund (SDF) absentee payroll?",
            "Yes. We support corporate enterprises and statutory boards with bespoke cohort upskilling. Companies claiming absentee payroll and Skills Development Fund (SDF) subsidies can register through our Corporate Enterprise Desk (executive@apex.edu.sg) for consolidated corporate e-invoicing via Vendors@Gov."
        ),
    ]

    for tag, q, a in faq_items:
        story.append(Paragraph(f"<font color='#047857'><b>{tag}</b></font><br/><b>{q}</b>", h3_style))
        story.append(Paragraph(a, body_style))
        story.append(Spacer(1, 3))

    story.append(PageBreak())

    # =========================================================================
    # CHAPTER 9: AI SYSTEM PROMPT CONFIGURATION & GUARDRAILS SPECIFICATION
    # =========================================================================
    story.append(Paragraph("CHAPTER 9: AI CHATBOT SYSTEM PROMPT CONFIGURATION & GUARDRAILS SPECIFICATION", h1_style))
    story.append(HRFlowable(width="100%", thickness=1, color=c_primary, spaceBefore=2, spaceAfter=8))
    story.append(Paragraph(
        "Chatbot developers can directly copy and paste the below system prompt into OpenAI, Claude, Gemini, or Llama models to ground conversational AI assistants.",
        body_style
    ))

    system_prompt_text = (
        "&lt;system_prompt&gt;<br/>"
        "You are the Official AI Academic & Admissions Counselor for Apex Institute of Singapore.<br/>"
        "Your role is to assist prospective students, working professionals, and parents with course recommendations, "
        "SkillsFuture subsidy calculations, campus directions, and trial class bookings.<br/><br/>"
        "CORE PERSONA & TONE:<br/>"
        "- Tone: Professional, authoritative, warm, institutional, and transparent.<br/>"
        "- Standard Currency: Always quote tuition and fees in Singapore Dollars (SGD, S$).<br/>"
        "- Statutory Accreditation: Emphasize that Apex Institute is CPE Registered (UEN: 201829481E) and EduTrust 4-Year certified.<br/><br/>"
        "MANDATORY BEHAVIORAL GUARDRAILS:<br/>"
        "1. FEE & SUBSIDY ACCURACY:<br/>"
        "   - For Singapore Citizens 40+: Apply up to 70% SSG Mid-Career Enhanced Subsidy (MCES).<br/>"
        "   - For Singapore Citizens 25-39: Apply up to 50% SSG baseline subsidy.<br/>"
        "   - For Permanent Residents: Apply up to 30% SSG subsidy.<br/>"
        "   - For NTUC union members: Highlight UTAP 50% unfunded fee co-funding up to S$250/year (or S$500 for age 40+).<br/>"
        "   - Never quote unapproved custom discounts.<br/>"
        "2. STUDENT PROTECTION DISCLAIMER:<br/>"
        "   - Always clarify that fees are 100% protected under the Lonpac Insurance Fee Protection Scheme (FPS).<br/>"
        "   - Mention the 7-day cooling-off period under the CPE Standard PEI-Student Contract when users inquire about refunds.<br/>"
        "3. TRIAL CLASS PROTOCOL:<br/>"
        "   - When a user asks about trials, offer to book an instant complimentary diagnostic seminar.<br/>"
        "   - Collect: Full Name, Email, Singapore Mobile Number, Target Course ID, and Preferred Campus.<br/>"
        "4. ESCALATION PROTOCOL:<br/>"
        "   - For disputes, credit exemptions, or corporate contracts, direct the user to the Senior Admissions Registry:<br/>"
        "     Hotline: +65 6732 8888 (Mon-Fri 09:00-18:00 SGT) | WhatsApp: +65 8299 1234 | Email: admissions@apex.edu.sg<br/>"
        "&lt;/system_prompt&gt;"
    )

    t_prompt = Table([[Paragraph(system_prompt_text, code_style)]], colWidths=[printable_width])
    t_prompt.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor("#F1F5F9")),
        ('BOX', (0, 0), (-1, -1), 1, colors.HexColor("#CBD5E1")),
        ('TOPPADDING', (0, 0), (-1, -1), 8),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
        ('LEFTPADDING', (0, 0), (-1, -1), 10),
        ('RIGHTPADDING', (0, 0), (-1, -1), 10),
    ]))
    story.append(t_prompt)
    story.append(Spacer(1, 10))

    # =========================================================================
    # CHAPTER 10: EMERGENCY CONTACTS & ESCALATION DIRECTORY
    # =========================================================================
    story.append(Paragraph("CHAPTER 10: EMERGENCY CONTACTS & ESCALATION DIRECTORY", h1_style))
    story.append(HRFlowable(width="100%", thickness=1, color=c_primary, spaceBefore=2, spaceAfter=8))
    
    contacts_matrix = [
        [Paragraph("Department / Desk", table_header_style), Paragraph("Scope of Assistance", table_header_style), Paragraph("Telephone Hotline", table_header_style), Paragraph("Electronic Correspondence", table_header_style)],
        [Paragraph("Office of the Registrar", table_cell_bold), Paragraph("Matriculation, student contracts, transcripts, verification", table_cell_style), Paragraph("+65 6732 8888", table_cell_style), Paragraph("registrar@apex.edu.sg", table_cell_style)],
        [Paragraph("Admissions Counseling", table_cell_bold), Paragraph("Course selection, prerequisites, campus visits, trials", table_cell_style), Paragraph("+65 6732 8888 / WhatsApp +65 8299 1234", table_cell_style), Paragraph("admissions@apex.edu.sg", table_cell_style)],
        [Paragraph("Finance & Grants Desk", table_cell_bold), Paragraph("SkillsFuture Credit claims, UTAP, GIRO, PSEA, FPS insurance", table_cell_style), Paragraph("+65 6732 8889", table_cell_style), Paragraph("finance@apex.edu.sg", table_cell_style)],
        [Paragraph("Corporate Learning Desk", table_cell_bold), Paragraph("Enterprise cohort upskilling, SDF absentee payroll billing", table_cell_style), Paragraph("+65 6338 1200", table_cell_style), Paragraph("executive@apex.edu.sg", table_cell_style)],
        [Paragraph("Quality Assurance Council", table_cell_bold), Paragraph("Student dispute mediation, academic board appeals, CPE ERF", table_cell_style), Paragraph("+65 6732 8891", table_cell_style), Paragraph("academicboard@apex.edu.sg", table_cell_style)],
    ]
    t_contacts = Table(contacts_matrix, colWidths=[110, 155, 125, printable_width - 390])
    t_contacts.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), c_dark),
        ('BOX', (0, 0), (-1, -1), 0.6, c_border),
        ('INNERGRID', (0, 0), (-1, -1), 0.4, c_border),
        ('TOPPADDING', (0, 0), (-1, -1), 3),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3),
        ('LEFTPADDING', (0, 0), (-1, -1), 4),
        ('RIGHTPADDING', (0, 0), (-1, -1), 4),
    ]))
    story.append(t_contacts)
    story.append(Spacer(1, 12))

    story.append(Paragraph(
        "<b>OFFICIAL LEGAL DISCLAIMER:</b> This knowledge base is registered with the Academic Board of Apex Institute of Singapore. "
        "All terms herein comply with the Private Education Act (Cap 247A) and the Consumer Protection (Fair Trading) Act (CPFTA). "
        "Last audited and authenticated: Academic Year 2026-2027.",
        ParagraphStyle('LegalDiscl', fontName='Helvetica-Oblique', fontSize=7, leading=9.5, textColor=c_muted)
    ))

    # Build document
    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"Master Knowledge Base PDF generated at: {output_path}")


# ----------------------------------------------------------------------
# 4. Main Execution
# ----------------------------------------------------------------------
if __name__ == "__main__":
    data = load_data()
    print(f"Loaded: {len(data['courses'])} courses, {len(data['campuses'])} campuses, {len(data['trainers'])} trainers, {len(data['certifications'])} certs.")
    
    root_pdf = os.path.abspath("Apex_Institute_AI_Chatbot_Knowledge_Base.pdf")
    generate_pdf(root_pdf, data)
    
    public_pdf = os.path.abspath(os.path.join("public", "Apex_Institute_AI_Chatbot_Knowledge_Base.pdf"))
    generate_pdf(public_pdf, data)
