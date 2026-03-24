# VenoPay Design System

> Extracted from EcomGarden website. Use this as a complete design guide when building the VenoPay website with Claude.

---

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 + inline styles + global CSS utility classes
- **Font**: Roboto (Google Fonts) — weights: 300, 400, 500, 600, 700
- **Icons**: react-icons (FaXxx from "react-icons/fa")
- **Images**: Plain `<img>` tags (no next/image optimization)
- **Deployment**: Cloudflare Workers (static export with `output: "export"`)

---

## Color System

Adapt these for VenoPay's brand. Replace `--color-primary` with VenoPay's brand color.

```css
@theme {
  --color-primary: #16a34a;       /* Main brand color — CHANGE THIS for VenoPay */
  --color-primary-dark: #15803d;  /* Darker shade for hover states */
  --color-primary-light: #dcfce7; /* Light tint for backgrounds */
  --color-accent: #f59e0b;        /* Secondary/CTA color (amber) */
  --color-accent-dark: #d97706;   /* Accent hover */
  --color-dark: #1a1a2e;          /* Dark backgrounds, headings */
  --color-dark-light: #2d2d44;    /* Slightly lighter dark */
  --color-light-gray: #f8f9fa;    /* Card backgrounds */
  --color-text: #333;             /* Primary text */
  --color-text-light: #666;       /* Secondary/body text */
  --font-roboto: 'Roboto', sans-serif;
}
```

### Section Background Pattern

Sections alternate between two backgrounds:
- **Odd sections**: `#f6f7f9` (light gray)
- **Even sections**: `#ffffff` (white)
- **Body default**: `background-color: #f6f7f9`
- **CTA/Footer sections**: Dark bg using `var(--color-dark)`

---

## Typography System (CSS Classes)

Every text element uses one of these classes. NO random inline font sizes.

| Class | Size | Weight | Line-height | Color | Usage |
|---|---|---|---|---|---|
| `.typo-h1` | 40px | 800 | 1.15 | `--color-dark` | Page hero headings only |
| `.typo-h2` | 30px | 700 | 1.25 | `--color-dark` | Section titles |
| `.typo-h3` | 20px | 700 | 1.35 | `--color-dark` | Card titles, sub-headings |
| `.typo-h4` | 18px | 700 | 1.4 | `--color-dark` | Small headings |
| `.typo-label` | 13px | 700 | — | `--color-primary` | Section labels (uppercase, tracking 1.5px) |
| `.typo-subtext` | 15px | 400 | 1.6 | `--color-text-light` | Section descriptions |
| `.typo-body` | 15px | 400 | 1.7 | `--color-text-light` | Body/paragraph text |
| `.typo-small` | 13px | 400 | 1.5 | `--color-text-light` | Captions, small text |

### Section Header Pattern

Every section uses this consistent header structure:

```jsx
<div className="section-header">
  <span className="typo-label">SECTION LABEL</span>
  <h2 className="typo-h2">Section Title Here</h2>
  <p className="typo-subtext">
    Optional description text that explains the section.
  </p>
</div>
```

The `.section-header` class auto-centers text, adds bottom margin, and constrains subtext width.

---

## Button System (CSS Classes)

All buttons are pill-shaped (border-radius: 50px), font-size 16px, padding 15px 36px.

### `.btn-primary`
- Green filled button with shadow
- Use for main CTAs ("See Our Results", "Contact Us", "Get Started")
- Add `.btn-primary-pulse` class for animated pulse ring effect
```jsx
<Link href="/contact" className="btn-primary btn-primary-pulse">
  Contact Us
</Link>
```

### `.btn-outline`
- Light gray bg (#eef1f5), subtle border (#d8dce3)
- Use for secondary actions ("Quick WhatsApp", "Browse Services")
- Hover: fills with primary color
```jsx
<a href="#" className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: "7px" }}>
  <FaWhatsapp /> Quick WhatsApp
</a>
```

### `.btn-outline-white`
- Transparent with white border, for dark backgrounds
- Use in CTA sections and footer

### `.btn-accent`
- Amber/orange filled button with pulse animation
- Use for urgent CTAs ("Browse All Services", header CTA)

### Button Animations
```css
/* Pulse ring — expands OUTSIDE the button */
@keyframes btnPulse {
  0% { box-shadow: 0 4px 16px rgba(PRIMARY, 0.25), 0 0 0 0 rgba(PRIMARY, 0.35); }
  70% { box-shadow: 0 4px 16px rgba(PRIMARY, 0.25), 0 0 0 12px rgba(PRIMARY, 0); }
  100% { box-shadow: 0 4px 16px rgba(PRIMARY, 0.25), 0 0 0 0 rgba(PRIMARY, 0); }
}
```

---

## Layout System

### Container
```css
.container-main {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
}
```

### Section Padding
- **Standard sections**: `padding: 55px 0`
- **Hero sections**: `padding: 55px 0 110px` (extra bottom for floating stats)
- **Compact sections** (partners, affiliate): `padding: 20px 0` to `50px 0`
- **CTA section**: `padding: 55px 0` with dark gradient bg

### Floating Stats Card
A white card that overlaps between two sections:
```jsx
<section style={{
  position: "relative",
  zIndex: 20,
  marginTop: "-42px",
  marginBottom: "-42px",
}}>
  <div className="container-main">
    <div style={{
      backgroundColor: "#fff",
      borderRadius: "12px",
      padding: "22px 16px",
      boxShadow: "0 6px 30px rgba(0,0,0,0.07)",
      maxWidth: "780px",
      margin: "0 auto",
    }}>
      {/* Stats content */}
    </div>
  </div>
</section>
```

---

## Card System

### `.card-hover`
Standard card with lift-on-hover effect:
```css
.card-hover {
  transition: all 0.3s ease;
  box-shadow: 0 1px 12px rgba(0, 0, 0, 0.06);
}
.card-hover:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}
```

### Card Styles
- **Border**: `border: 1px solid rgba(0,0,0,0.06)` or `border: 1px solid #e8e8e8`
- **Border radius**: `10px`
- **Padding**: `20px` to `28px`
- **Background**: `#fff` on gray sections, `#f6f7f9` on white sections

---

## Hero Section Pattern

Two-column layout with content left, visual right:

```jsx
<section style={{ backgroundColor: "#f6f7f9", position: "relative", overflow: "hidden" }}>
  <div className="container-main">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
      {/* Left: Content */}
      <div style={{ padding: "55px 0 110px" }}>
        <span className="typo-label">LABEL</span>
        <h1 className="typo-h1">Main Heading</h1>
        <p className="typo-body" style={{ color: "var(--color-primary)", fontWeight: 600 }}>Subheading</p>
        <p className="typo-h3" style={{ color: "var(--color-accent)" }}>Highlight text</p>
        <p className="typo-body">Description paragraph</p>

        {/* 2x2 highlight pills grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
          {/* Pill cards with icon + title + desc */}
        </div>

        {/* CTA buttons */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          <Link className="btn-primary btn-primary-pulse">Primary CTA</Link>
          <a className="btn-outline">Secondary CTA</a>
        </div>
      </div>

      {/* Right: Visual (SVG, image, or video) */}
      <div className="hidden lg:flex items-center justify-center">
        {/* Interactive element */}
      </div>
    </div>
  </div>
</section>
```

---

## Animated SVG Dashboard (Hero Visual)

The hero uses a custom SVG that looks like a live dashboard with:
- Dark header bar with traffic light dots
- Revenue counter, ROI badge
- 3 stat cards (Orders, Profit, Active count)
- Bar chart with month labels
- **Data cycles every 3 seconds** through multiple datasets (JS `useState` + `useEffect`)
- Bar heights use `CSS transition: y 0.8s ease, height 0.8s ease` for smooth changes
- ROI badge has continuous pulse glow
- Play button overlay to open video popup modal

---

## Video Popup Modal

Click-to-play video that opens as a centered modal:
```jsx
{showVideo && (
  <div onClick={() => setShowVideo(false)} style={{
    position: "fixed", inset: 0, zIndex: 9999,
    backgroundColor: "rgba(0,0,0,0.85)",
    display: "flex", alignItems: "center", justifyContent: "center",
  }}>
    <div onClick={(e) => e.stopPropagation()} style={{
      width: "100%", maxWidth: "900px",
      borderRadius: "12px", overflow: "hidden",
    }}>
      <button onClick={() => setShowVideo(false)}>Close</button>
      <iframe src="https://youtube.com/embed/VIDEO_ID?autoplay=1" />
    </div>
  </div>
)}
```

---

## Page Structure (Section Order)

### Homepage
1. Hero (with animated SVG + video popup)
2. Floating Stats Card
3. Services (3-card grid)
4. Success Stories (video embeds)
5. Process Steps (icon + title + description)
6. Features Grid (4-column, 12 items)
7. Affiliate CTA Banner (boxed, centered, green gradient)
8. Warehouse / Feature Section (2-column with image)
9. Why Choose Us (3-card grid with icons + bullets)
10. Benefits (2-column: image + accordion)
11. Partners (logo strip, grayscale → color on hover)
12. CTA Section (dark bg, centered)

### Inner Pages
- Light hero (`#f6f7f9`, centered, typo-label + typo-h1 + typo-subtext)
- Alternating section backgrounds
- Consistent 55px padding
- CTA section at bottom

---

## Key Design Principles

1. **No random font sizes** — always use `typo-*` classes
2. **No highlight card borders** (no left border accents) — use flat background cards
3. **Alternating section backgrounds** — `#f6f7f9` / `#fff`
4. **Pill-shaped buttons** — border-radius 50px everywhere
5. **Consistent section padding** — 55px standard
6. **Section header pattern** — label + h2 + optional subtext, always centered
7. **Cards**: 10px border-radius, subtle border, card-hover class
8. **Icons**: Use react-icons (Font Awesome set), 13-22px depending on context
9. **Images**: Plain `<img>` tags, no Next.js Image component
10. **Content-dense** — less whitespace, more text, aggressive conversion copy
11. **Pulse animations** on primary CTA buttons
12. **Mobile-first grids** — `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` pattern

---

## How to Use This Guide

When starting the VenoPay project, give Claude this prompt:

```
I'm building a website for VenoPay using Next.js 16 App Router + Tailwind CSS v4.
Apply the exact design system from the attached DESIGN-SYSTEM.md file.
Change the primary color from green (#16a34a) to [YOUR VENOPAY BRAND COLOR].
Keep all typography, button styles, section patterns, and layout rules identical.
```

Then provide your page content and Claude will build it matching this design system exactly.
