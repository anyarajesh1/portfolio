# Anya Rajesh — AI Portfolio

A light-mode, full-stack portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS** — showcasing two original AI projects: **Vigil AI** (cybersecurity intelligence) and **MedInsight AI** (medical diagnostics).

---

## Overview

This repository contains the complete source for a personal portfolio site designed to present applied AI/ML work in depth. Rather than a simple link list, each project section includes architectural context, feature breakdowns, tech stack details, and live visual demonstrations of the model outputs.

### Projects Featured

**1. Vigil AI** (`components/VigilSection.tsx`)
An AI-native cybersecurity monitoring system that performs real-time threat detection, behavioral anomaly analysis, and automated incident response. Built on a FastAPI backend with a React dashboard, it processes log streams from any source and maps detections to the MITRE ATT&CK framework.

**2. MedInsight AI** (`components/MedInsightSection.tsx`)
An intelligent medical diagnostics platform that takes symptom inputs and returns ranked differential diagnoses with confidence scores. Integrates with PubMed and Semantic Scholar for live research retrieval, and generates structured clinical summaries using GPT-4.

---

## Tech Stack

**Frontend**
- Framework: Next.js 14 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS + CSS-in-JS (inline style props)
- Fonts: DM Serif Display, DM Sans, DM Mono (Google Fonts)
- Deployment: Vercel

**AI Projects (Vigil AI)**
- Backend: FastAPI + Python
- ML: PyTorch, scikit-learn (anomaly detection)
- Data: Elasticsearch, SQLite/PostgreSQL
- Parsing: Grok pattern matching
- Framework mapping: MITRE ATT&CK

**AI Projects (MedInsight AI)**
- ML: TensorFlow, scikit-learn, BERT (NLP)
- Data: Pandas, NumPy
- APIs: PubMed, Semantic Scholar, OpenAI GPT-4
- Interface: Streamlit + FastAPI

---

## Directory Structure

```
portfolio/
├── app/
│   ├── globals.css           # Design tokens, fonts, CSS variables, animations
│   ├── layout.tsx            # Root layout and page metadata
│   └── page.tsx              # Entry point — assembles all sections
├── components/
│   ├── Nav.tsx               # Sticky navigation with scroll-aware styling
│   ├── Hero.tsx              # Landing hero with animated blobs and stat cards
│   ├── VigilSection.tsx      # Vigil AI deep-dive: features, terminal demo, stack
│   ├── MedInsightSection.tsx # MedInsight AI: diagnostic UI, impact stats, stack
│   └── Skills.tsx            # Skills and technologies grid
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── vercel.json
└── package.json
```

---

## Getting Started

### Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
npm start
```

---

## Deploying to Vercel

**Step 1 — Push to GitHub**

```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/anyarajesh1/portfolio.git
git push -u origin main
```

**Step 2 — Deploy**

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New Project** and select your repository
3. Leave all settings as default — Vercel auto-detects Next.js
4. Click **Deploy** — live in ~60 seconds

---

## Customisation

| What to change | File |
|---|---|
| Name, bio, tagline | `components/Hero.tsx` |
| GitHub / social links | `components/Nav.tsx`, `components/Hero.tsx` |
| Vigil AI details | `components/VigilSection.tsx` |
| MedInsight AI details | `components/MedInsightSection.tsx` |
| Skills list | `components/Skills.tsx` |
| Color palette | `app/globals.css` → CSS variables |
| Page title / metadata | `app/layout.tsx` |

### Color Tokens (`globals.css`)

```css
--vigil-1:       #e63946   /* Vigil red — primary accent */
--med-1:         #2a9d8f   /* MedInsight teal — primary accent */
--accent-orange: #f4a261
--accent-blue:   #457b9d
--accent-purple: #7c5cbf
--bg:            #faf8f5   /* Page background */
--bg-subtle:     #f3f0eb   /* Section alternating background */
```

---

## License

MIT — free to use, adapt, and build on.
