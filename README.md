# Task-1-Albin-Biju
Repository for Task-1
# Vaccination Tracker Frontend

## Overview
**Vaccination Tracker** is a responsive full-stack web application built using Python Flask, MySQL, and native HTML5, CSS3, and JavaScript, designed under a mobile-first paradigm for the DecodeLabs Industrial Training Program. 

The project architecture cleanly splits system files into a `templates/` folder for server-rendered semantic layouts and a `static/` folder for structural stylesheets and interactive orchestration scripts. It features a secure role-based authentication layer that automatically redirects users (patients) to a personal booking and history dashboard while providing nurses with a comprehensive administrative control panel.

---

## 📁 Repository Directory Structure

```text
├── app.py                  # Core Flask Backend Server & REST API Endpoints
├── static/                 # Client-Side Frontend Assets
│   ├── vacc_css.css        # Authentication Portal Stylesheet
│   ├── vacc_css2.css       # Dashboards Layout Configuration Theme
│   ├── vacc_addrec.css     # Record Creation Layout Blueprint
│   ├── vacc_upd.css        # Live Search & Editor Stylesheet
│   ├── vacc_record.css     # History Log Presentation Grid
│   ├── vacc_sched.css      # Appointment View Layout Theme
│   ├── vacc_js.js          # Authentication Login Controller
│   ├── vacc_js2.js         # Patient UI Workflow & Navigation Menu Router
│   ├── vacc_nurse.js       # Nurse Control Panel Routing Interface
│   ├── vacc_addrec.js      # Patient Entry Submission Pipeline Handler
│   ├── vacc_upd.js         # Asynchronous Search & PUT Request Handler
│   └── vacc_record.js      # Dynamic Multi-Role History Table Renderer
└── templates/              # Server-Side HTML5 Semantic Layouts
    ├── vacc_html.html      # Authentication Entry Gate / Login Page
    ├── vacc_html2.html     # Patient Core Dashboard Layout
    ├── vacc_nursehtml.html # Nurse Operational Dashboard Layout
    ├── vacc_addrec.html    # Medical Record Initialization Form
    ├── vacc_update.html    # Two-Stage Identity Lookup & Update Form
    ├── vacc_record.html    # Completed Immunization Tracking Ledger
    └── vacc_book.html      # Vaccine Booking Registration Interface
