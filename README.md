<div align="center">
<img src="https://user-images.githubusercontent.com/42237442/175994428-1e40b718-2443-4aca-b8a0-35b4db34b304.svg"/>
<h1>WeMaAd Website</h1>
<p>Marketing website for WeMaAd, a Cairo-based senior product engineering studio.</p>
</div>

### Site Status [![Netlify Status](https://api.netlify.com/api/v1/badges/af95c054-5f8c-412c-96b9-ce1be6dc4b86/deploy-status)](https://app.netlify.com/sites/wemaad/deploys)

---

## Tech Stack

- **Framework:** Next.js 12 / React 17
- **Deployment:** Netlify (static export)

## Local Development

```bash
npm install
npm run dev       # http://localhost:3000
```

```bash
npm run build     # production build
npm run export    # static export (next build + next export)
```

## Content Structure

Most site copy lives in JSON files — no code changes needed for text updates:

| File | Controls |
|------|----------|
| `src/data/sections/intro.json` | Hero slider slides & taglines |
| `src/data/sections/about-us1.json` | About section heading & feature badges |
| `src/data/sections/services4.json` | Service cards (About page) |
| `src/data/sections/numbers1.json` | Trust signal stats |
| `src/data/sections/portfolio1.json` | Portfolio grid items |
| `src/data/showcases-full-screen-slider.json` | Full-screen showcase slider |
| `src/data/sections/clients1.json` | Client logo strip |
| `src/data/sections/clients-brands.json` | Brands section logos |
| `src/data/sections/clients-testimonial.json` | Testimonials |
| `src/data/sections/team1.json` | Team members |

Some sections have copy hardcoded directly in their components:

| Component | Controls |
|-----------|----------|
| `src/components/Blc-sec/` | "Know Us Better" section |
| `src/components/About-intro/` | "Who We Are" paragraph |
| `src/components/Minimal-area/` | Mission, Goals, Why Us |
| `src/components/Services2/` | Services grid (Home page) |
| `src/components/Footer/` | Footer contact info & newsletter |

## Active Portfolio Projects

| Project | URL |
|---------|-----|
| Birth Guardians Egypt | https://birthguardians-eg.org/ |
| Sitr Garments Store | https://sitrstore.com |
| Primo | https://primo.build/ |
