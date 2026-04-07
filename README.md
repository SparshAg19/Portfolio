# Sparsh Agarwal — Cybersecurity Portfolio

A modern, dark-themed personal portfolio built with **Vite + TypeScript**.

---

## 🗂 Project Structure

```
sparsh-portfolio/
├── index.html              ← HTML shell (structure only)
├── public/
│   └── profile.jpg         ← Profile photo
├── src/
│   ├── main.ts             ← App entry, rendering logic, animations
│   ├── data/
│   │   └── data.ts         ← ✏️  ALL editable content lives here
│   └── styles/
│       └── main.css        ← Full styling (CSS variables → easy theming)
├── vite.config.ts
├── tsconfig.json
├── vercel.json
└── package.json
```

---

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server (auto-opens http://localhost:3000)
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

---

## ✏️ How to Edit Content

**All content is in one file:** `src/data/data.ts`

| What to change | Where |
|---|---|
| Name, tagline, social links | `hero` object |
| About paragraphs | `about.paragraphs` array |
| Skills + levels | `skills` array |
| Projects | `projects` array |
| Certifications | `certifications` array |

---

## 🚀 Deploy to Vercel

### Option A — Vercel CLI
```bash
npm install -g vercel
vercel
# Follow prompts — framework auto-detected as Vite
```

### Option B — GitHub + Vercel Dashboard
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Select your repo
4. Vercel auto-detects Vite settings from `vercel.json`
5. Click **Deploy** ✅

Build command: `npm run build`  
Output directory: `dist`

---

## 🎨 Theming

All colours are CSS variables in `src/styles/main.css`:

```css
:root {
  --bg:     #050a0f;   /* page background */
  --cyan:   #00ffe0;   /* primary accent   */
  --red:    #ff3a3a;   /* alert / warning  */
}
```

Change `--cyan` to swap the entire accent colour instantly.

---

## 📝 Adding a Resume

Replace the `#` in `src/data/data.ts`:
```ts
resumeLink: 'https://drive.google.com/your-resume-link',
```
