# 📊 HS Accounting & Advisory Office
> A modern, high-performance web application for a premier certified public accounting (CPA) and financial advisory firm, crafted with **React 19**, **Vite 8**, **Tailwind CSS v4**, and native RTL Arabic typography.

---

## 🌟 Key Features

### 1. 🧭 Navigation & Brand Identity (Header)
- **Interactive Logo & Scroll-To-Top**: Clicking the office logo instantly routes to the homepage and initiates a smooth scroll to the very top of the page (`window.scrollTo({ top: 0, behavior: 'smooth' })`).
- **Responsive Navigation Links**: Seamless hash navigation to key sections (`About`, `Services`, `Contact`, `Channel`).
- **Mobile Navigation Drawer**: Smooth slide-over navigation menu optimized for mobile screens (390px - 720px) with instant CTA booking button.
- **Custom Favicon**: The browser tab displays the official office emblem (`elshayb-logo.png`).

### 2. 🚀 Hero Section
- **Compelling Typography**: Tailored financial consulting headline and subtext using the Cairo font family.
- **Direct Action CTAs**: "Book a Consultation" button anchors directly to the contact form (`#contact`), alongside a secondary "Explore Services" button.
- **Trust Badges**: Highlighted indicators for accuracy, precision, and verified milestone delivery.
- **Hero Dashboard Artwork**: Custom dark financial dashboard mockup with subtle floating animation (`animate-hero-float`).

### 3. 🏢 About Us Section
- Highlights the firm's vision, certified accounting credentials, regulatory compliance, and advisory expertise in corporate tax, audits, and business planning.

### 4. 🎯 Target Audiences & Services Section
- Three distinct, responsive service cards tailored to key client segments:
  - 🏢 **Corporations & Enterprises**: Comprehensive accounting, tax filing, and data-driven financial decision-making.
  - 👤 **Individuals**: Personal wealth, tax advisory, and confidential financial planning.
  - 🚀 **Startups**: Structured bookkeeping, financial runway management, and scalable accounting foundations.
- Micro-interactions with card elevation (`hover:-translate-y-1`) and interactive arrow indicators.

### 5. 📬 Consultation & Office Location Section
- **Consultation Booking Form**:
  - Inputs for client name, phone/email, and inquiry details with custom focus ring styling.
  - Interactive submission state with loading feedback, error prevention, and clean success notification.
- **Office Location & Interactive Map Card**:
  - Quick-glance contact strip displaying telephone, office hours, and physical address.
  - Bespoke vector map visualizer featuring road outlines, a pulsating location pin, and a direct link to **Google Maps**.

### 6. ⚠️ Custom 404 Error Page
- Fully themed 404 Not Found experience:
  - Custom vector artwork (`not-found-dashboard.svg`) matching the hero dashboard aesthetic, featuring a broken chart line, 404 watermark, and floating alert badge.
  - Direct recovery actions returning the user to the homepage.

### 7. 📄 Official Footer
- Certified Public Accountant attribution: "مكتب الشايب — محاسبون قانونيون".
- Copyright declaration: `© 2026 El-Shayb Office. All rights reserved.`
- Interactive **YouTube channel** badge that launches the firm's official channel in a new tab.

---

## 🎨 Design System & Color Palette

The interface is built with **Tailwind CSS v4** utilizing unified theme tokens configured in `src/styles/global.css`:

| Token | Role / Usage | Hex Code |
| :--- | :--- | :--- |
| `charcoal` | Primary dark surface (Header, Footer, Hero) | `#202223` |
| `charcoal-soft` | Secondary dark background & borders | `#303234` |
| `brand-red` | Primary brand accent & button background | `#D43C35` |
| `brand-red-dark` | Hover states & emphasized red text | `#A92A25` |
| `brand-red-pale` | Light red icon container backgrounds | `#FAE9E7` |
| `bg-primary` | Main content background (white) | `#FFFFFF` |
| `bg-secondary` | Alternating section backgrounds | `#F6F5F4` |
| `text-heading` | Primary titles and card headings | `#202223` |
| `text-body` | Standard body text | `#55585A` |
| `font-cairo` | Primary Arabic typeface (Google Fonts) | Weights: `400`, `600`, `800` |

---

## 🗂️ Project Directory Structure

```text
HS-Accounting-Office/
├── public/
│   ├── elshayb-logo.png          # Official brand logo & browser favicon
│   └── favicon.svg
├── src/
│   ├── assets/                   # High-res graphics, logo & SVG illustrations
│   │   ├── elshayb-logo.png
│   │   ├── hero-dashboard.png
│   │   └── not-found-dashboard.svg
│   ├── components/
│   │   ├── layout/               # Global layout wrappers
│   │   │   ├── navbar/Navbar.jsx # Navigation header with smooth scroll
│   │   │   └── footer/Footer.jsx # Official footer & YouTube link
│   │   ├── sections/             # Page sections
│   │   │   ├── Hero/Hero.jsx
│   │   │   ├── About/About.jsx
│   │   │   ├── Audience/Audience.jsx
│   │   │   └── Contact/Contact.jsx
│   │   └── ui/                   # Reusable atomic UI components
│   │       ├── Button/Button.jsx
│   │       └── SectionTitle/SectionTitle.jsx
│   ├── data/                     # Static dataset definitions
│   │   └── audience.js
│   ├── pages/                    # Route entry pages
│   │   ├── Home.jsx              # Landing page
│   │   └── NotFound.jsx          # 404 error page
│   ├── styles/                   # Unified Tailwind CSS v4 design tokens
│   │   └── global.css
│   ├── App.jsx                   # Router provider & route-change scroll reset
│   └── main.jsx                  # React application entry point
├── package.json
└── vite.config.js
```

---

## 🛠️ Technology Stack

- **Frontend Core**: [React 19](https://react.dev/)
- **Build Tool & Bundler**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Typography**: [Cairo (Google Fonts)](https://fonts.google.com/specimen/Cairo)

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher recommended).
- npm (bundled with Node.js).

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/HS-Accounting-Office.git
   cd HS-Accounting-Office
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

### Development Server
Launch the local Vite development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Navigate to `http://localhost:5173` in your browser.

### Production Build
Generate an optimized production build:
```bash
npm run build
```
Preview the production build locally:
```bash
npm run preview
```

---

## 📬 Backend Setup

The contact form sends requests to `POST /api/contact`. To run the frontend and
API locally, configure `backend/.env` with `EMAIL_USER`, `EMAIL_PASS`, and
`CLIENT_URL` (for example, `http://localhost:5173`), then run these commands in
separate terminals:

```bash
npm run server
npm run dev
```

Vite proxies `/api` requests to the local API on port 5000. In production, set
`VITE_API_URL` to the deployed API's base URL when building the frontend, and
set `CLIENT_URL` on the API to the deployed frontend's origin. Keep email
credentials only in the backend environment; do not expose them as `VITE_*`
variables.

---

## 📄 License & Attribution

Copyright © 2026 El-Shayb Accounting & Tax Advisory Office. All rights reserved.
