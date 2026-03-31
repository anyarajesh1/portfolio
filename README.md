# Anya Rajesh — AI Portfolio

A stunning, light-mode portfolio site showcasing **Vigil AI** and **MedInsight AI**, built with Next.js 14, TypeScript, and Tailwind CSS.

## Deploy to Vercel (Step-by-Step)

### Step 1 — Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Step 2 — Deploy on Vercel

1. Go to vercel.com and sign in with GitHub
2. Click "Add New Project"
3. Select your `portfolio` repository
4. Leave all settings as default (Vercel auto-detects Next.js)
5. Click "Deploy" — live in ~60 seconds!

### Step 3 — Run Locally

```bash
npm install
npm run dev
```

## Customising

| What | Where |
|---|---|
| Your name / bio | Hero.tsx, About.tsx |
| GitHub URL | Replace `anyarajesh1` throughout |
| Email | Contact.tsx → href="mailto:..." |
| Project details | VigilSection.tsx, MedInsightSection.tsx |
| Colors | globals.css → CSS variables |
