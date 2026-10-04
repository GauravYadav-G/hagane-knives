# Hagane 鋼 — Hand-Forged Sakai Kitchen Knives

**Hand-Forged Craft & Cutlery · Sakai, Osaka** · Standalone Production Website

Traditional hand-forged Sakai kitchen knives crafted in Shirogami and Aogami Super steels by master smiths.

---

## Key Highlights & Features

- **Full Blade Ledger**: Gyuto, Santoku, Petty, Nakiri, Sujihiki, Honesuki with steel grades, Rockwell hardness, bevel profiles and specs.
- **Seven-Stage Forge Process**: Detailed craft narrative from bar forging to quench, cold-hammer, and water-stone sharpening.
- **Master Smiths Directory**: Profiles of the Sakai forge masters (Forging, Grinding, Urushi handle craft).
- **Atelier Booking Experience**: Interactive reservation drawer for Sakai forge floor visits with calendar selector and party configuration.
- **Authentic Japanese Typography**: Shippori Mincho Kanji typography paired with brutalist precision numerals.

---

## Quick Start

Run this website locally in development mode:

```bash
# Navigate to this website
cd websites/hagane

# Install dependencies
npm install

# Start Vite development server
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## Project Structure

```
websites/hagane/
├── index.html           # Bespoke page title, fonts, meta & theme color
├── package.json         # Standalone dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Bundler config with Tailwind CSS v4 & single-file
├── README.md            # Quick-start documentation
├── public/              # Dedicated assets
└── src/
    ├── main.tsx         # React root
    ├── App.tsx          # Standalone application entry
    ├── index.css        # Tailwind v4 theme & animation tokens
    ├── lib/             # Shared motion, WebGL canvas, smooth scroll & images
    └── ...              # Dedicated components and data
```
