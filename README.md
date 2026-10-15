# StudySmart AI — Production Blog Platform

> **StudySmart AI** is a fast, editorial-grade blog website dedicated to **AI Tools for Students**. Built with semantic HTML5, modern CSS3, and vanilla JavaScript, it deploys seamlessly to [Vercel](https://vercel.com) with zero build configuration, zero external runtime dependencies, and instant global edge caching.

---

## 🚀 Instant Vercel Deployment Steps

You can deploy StudySmart AI to Vercel using any of the following three methods:

### Method 1: Deploy via GitHub (Recommended)
1. Initialize a git repository and commit all project files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: StudySmart AI production site"
   ```
2. Push your repository to your GitHub account:
   ```bash
   git remote add origin https://github.com/your-username/studysmart-ai.git
   git branch -M main
   git push -u origin main
   ```
3. Go to [vercel.com/new](https://vercel.com/new).
4. Click **Import** next to your `studysmart-ai` repository.
5. In the project configuration:
   - **Framework Preset:** Select **Other** (Static Site).
   - **Root Directory:** `./`
   - **Build Command:** Leave blank (no build step needed).
   - **Output Directory:** Leave blank (or `./`).
6. Click **Deploy**. Your site will be live on a global CDN in under 15 seconds!

---

### Method 2: Deploy via Vercel CLI
If you have Node.js and the Vercel CLI installed globally:
1. Open your terminal in this directory:
   ```bash
   npm i -g vercel
   vercel
   ```
2. Follow the terminal prompts (defaults are pre-configured in `vercel.json`).
3. Deploy to production:
   ```bash
   vercel --prod
   ```

---

### Method 3: Drag & Drop via Vercel Dashboard
1. Log into your [Vercel Dashboard](https://vercel.com).
2. Go to the **Projects** tab.
3. Drag and drop the root `studysmart-ai` folder into the browser window.
4. Vercel automatically detects the static HTML/CSS structure and deploys it immediately.

---

## 📁 Project Architecture & Clean URLs

This project follows an editorial directory layout where each article lives in its own keyword-based folder with an `index.html` file, pre-configured with `vercel.json` for clean, extension-free URLs:

```text
studysmart-ai/
├── index.html                                 # Homepage: /
├── best-ai-tools-for-college-students/
│   └── index.html                             # Article 1: /best-ai-tools-for-college-students
├── how-to-use-ai-to-study/
│   └── index.html                             # Article 2: /how-to-use-ai-to-study
├── are-ai-tools-good-or-bad-for-students/
│   └── index.html                             # Article 3: /are-ai-tools-good-or-bad-for-students
├── assets/
│   ├── css/
│   │   └── styles.css                         # Master editorial design system & responsive layout
│   ├── js/
│   │   └── main.js                            # Accessible mobile nav, scroll reveals, reading progress
│   └── images/
│       ├── favicon.svg                        # Branded vector favicon
│       ├── hero-home.svg                      # Homepage hero illustration (< 6 KB)
│       ├── hero-article-1.svg                 # Toolkit categories graphic (< 5 KB)
│       ├── hero-article-2.svg                 # Active recall & Feynman workflow (< 5 KB)
│       └── hero-article-3.svg                 # Ethics & Academic Integrity scales (< 5 KB)
├── robots.txt                                 # Production crawler directives
├── sitemap.xml                                # Search engine URL index
├── vercel.json                                # Clean URL routing & immutable asset caching
└── README.md                                  # Deployment & SEO documentation
```

---

## 🎨 Editorial Design System

- **Warm Palette:**
  - Background: Warm off-white (`#FAF8F5`)
  - Accent / Surfaces: Soft sand (`#E9E2D8`), Card White (`#FFFFFF`)
  - Typography: Warm Charcoal (`#3A3A38`), Heading Deep Grey (`#262624`)
  - Muted Accent: Sage Green (`#7C8F7A` / `#526350`), Light Sage Wash (`#EFF3EF`)
- **Typography:**
  - Headings: `Playfair Display` (Serif via Google Fonts)
  - Body Copy: `Inter` (Sans-Serif via Google Fonts)
  - Line-Height: `1.75` for optimal reading ergonomics
  - Reading Width: Constrained to `740px` (~70 characters per line)
- **Subtle Animations:**
  - Micro-reveal fade-and-slide on page load and viewport scroll (`IntersectionObserver`).
  - Soft card lift (`transform: translateY(-5px)`) on hover.
  - Fully accessible with strict `@media (prefers-reduced-motion: reduce)` support.

---

## 🔍 On-Page SEO & AEO (Answer Engine Optimization) Matrix

Every page incorporates:
- **Title Tag:** Max 60 characters with primary keyword at start and brand at end.
- **Meta Description:** 140–155 characters featuring primary and secondary keywords with soft CTA.
- **H1 Structure:** Exactly one `<h1>` per page incorporating the primary keyword.
- **First 100 Words:** Natural incorporation of primary and related keywords.
- **AEO Q&A Format:** Subheadings framed as direct questions with 2–3 sentence direct answers.
- **Structured Data:** Embedded JSON-LD schema (`WebSite`, `Article`, and `FAQPage`).
- **Internal Cross-Linking:** Contextual hyperlinks with descriptive anchor text between all articles.
