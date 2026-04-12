# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ReOil is a static marketing website for a university capstone project (NTUB, Dept. of Creative Technology & Product Design, Class of 115). The product is a home grease filtration unit using coconut husk fiber. The site is 7 pages of plain HTML — no build system, no bundler, no package.json.

## Architecture

- **Pure static HTML site**: Each page is a standalone `.html` file with inline `<style>` and `<script>` blocks.
- **Shared layout via `layout.js`**: Navbar (with mobile hamburger menu), awards badge strip, and footer are injected by `layout.js` at runtime. All pages include `<script src="layout.js"></script>` before `</body>`. To modify shared navigation or footer, edit `layout.js` only.
- **CDN-based dependencies**: Tailwind CSS (via CDN script tag), Google Fonts (Inter, Playfair Display, Material Symbols), AOS (scroll animations), Swiper (carousels), Chart.js, CountUp.js, GLightbox.
- **Tailwind config is inline** in each HTML file's `<script id="tailwind-config">` block, defining a custom Material Design 3-style color palette with semantic tokens (primary, secondary, surface, etc.).

## Pages

| File | Content |
|------|---------|
| `home.html` | Landing page (hero, awards, key stats, features) — serves as `index.html` equivalent |
| `issue.html` | Problem context: waste oil data gap, environmental impact, fatberg cases |
| `product.html` | Product details: 3-layer structure, coconut fiber, smart LED indicators |
| `how-to-use.html` | 4-step usage flow, scenarios, FAQ |
| `research.html` | Survey data (86 respondents), experiment results, SWOT, personas |
| `about.html` | Team members, advisor, department info, project timeline |
| `resources.html` | Downloads, award links, contact form |

## Development

No build step. Open any `.html` file directly in a browser or use a local server:

```bash
npx serve .
# or
python -m http.server
```

## Content Rules (from spec)

- Product name is always **ReOil** (not Reoil, RE-OIL, or re-oil)
- All data, statistics, and experimental results must match `docs/ReOil_Project_Report.md`
- All text must be in **Traditional Chinese (繁體中文)**
- Color scheme: green + white primary, no brown tones. Primary color: `#4F7C61`
- Use relative paths for all internal links
- Navbar and footer must stay consistent across all 7 pages
- Award info: MUSE Design Awards **2026** Silver Winner; 2025 為桃園做研究 **潛力研究獎**

## Reference Documents

- `docs/ReOil_Website_Spec.md` — Full content specification for all 7 pages (Chinese)
- `docs/ReOil_Project_Report.md` — Source research report for data verification
