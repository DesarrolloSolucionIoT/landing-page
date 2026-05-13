# EduSpace Landing Page

A bilingual (EN/ES) marketing site for **EduSpace**, a SaaS platform that helps schools manage classrooms, resources, staff scheduling, and maintenance.

## About EduSpace

EduSpace is a comprehensive software-as-a-service solution for educational institutions. It centralises the operational side of running a school so administrators and teachers can focus on education.

Key capabilities highlighted on the site:

- **Space Manager** — classrooms, sports facilities, and equipment in one place
- **Maintenance & Tickets** — issue tracking and resolution for school facilities
- **Staff Coordinator** — staff scheduling and coordination
- **Admin Dashboard** — oversight for school administrators
- **Education Dashboard** — scheduling, reservations, and notifications for teachers

## Features

- **Single-page bilingual site** — one `index.html`, runtime i18n in vanilla JS, language toggle in the nav
- **Auto language detection** — picks EN/ES from `navigator.language`, persisted in `localStorage` (`eduspace.lang`)
- **Responsive, mobile-first** layout
- **Full-bleed hero** with IoT-focused messaging and animated counters
- **Testimonials carousel** powered by Swiper
- **Scroll-reveal animations** for section entrances
- **Mobile hamburger menu** and back-to-top button
- **SEO meta** — Open Graph and Twitter cards included
- **No build step** — static files, CDN-hosted libraries

## Tech Stack

- **HTML5 / CSS3 / Vanilla JS** — no framework, no bundler, no package manager
- **Swiper** — testimonials carousel
- **ScrollReveal** — scroll-triggered animations
- **RemixIcon** — icon set (including team social icons)
- **Google Fonts (Poppins)** — typography

## Project Structure

```
landing-page/
├── index.html       # Single source of markup, with data-i18n* attributes
├── i18n.js          # TRANSLATIONS dict (en/es) + applyTranslations/setLanguage/toggleLanguage
├── data.js          # Team, testimonials, and pricing data + render helpers
├── main.js          # Boot orchestrator: renders sections, applies i18n, inits libraries
├── styles.css       # Stylesheet
├── assets/          # Images (logo, hero, team photos, dashboards, testimonials)
├── CLAUDE.md        # Guidance for Claude Code contributors
├── STYLE_GUIDE.md   # Visual / content style guide
└── README.md
```

## How i18n Works

Every translatable string in `index.html` carries one of:

| Attribute              | Effect                              |
|------------------------|-------------------------------------|
| `data-i18n`            | replaces `textContent`              |
| `data-i18n-alt`        | replaces `alt`                      |
| `data-i18n-placeholder`| replaces `placeholder`              |
| `data-i18n-title`      | replaces `title`                    |
| `data-i18n-content`    | replaces `content` (on `<meta>`)    |

Adding a string:

1. Add `data-i18n="some.key"` to the element in `index.html`.
2. Add `"some.key": "..."` to **both** `TRANSLATIONS.en` and `TRANSLATIONS.es` in `i18n.js`.

Missing keys fall back to English; if English is also missing, the key itself renders so you notice.

## Repeating Sections

Team cards, testimonials, and pricing tiers are rendered from arrays in `data.js` into the empty containers `#team-grid`, `#testimonials-track`, and `#plans-grid`. To edit one of those sections, edit the array — not the HTML.

## Local Development

No dependencies. Serve the folder with any static server:

```bash
python3 -m http.server 5500
# or
npx serve .
```

Then open <http://localhost:5500/>. Use the **ES / EN** button in the nav to toggle language.

## Deployment

Deploy to any static host — Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc. No build step is required; publish the folder as-is.

## Team

Developed by **FullStack Fury** (UPC Peru — IoT Solutions Development, 2026-1):

- Andrés Alberto Torres García
- Camila Cristina Loli Ramirez
- Oscar Josué Antayhua Castillo
- Luis Andrés Alva Abanto
- Angie Christina Yalán Zhang

## Pricing (shown on site)

- **Basic** — $8/month — essentials for small schools
- **Medium** — $15/month — advanced tools for growing institutions
- **Premium** — $30/month — full suite for large educational complexes
