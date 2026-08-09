# ORIVEX

Modern portfolio / digital studio website built with React, Vite, Tailwind CSS, and Lucide React.

## Run

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Replace your assets

You can replace the placeholder images inside:

- `src/assets/images/profile-placeholder.svg`
- `src/assets/images/armaso-preview.svg`
- `src/assets/images/sapa-desa-preview.svg`

Keep the filenames the same, or update the imports in `src/data/portfolio.js`.

## Main content

Most editable content is intentionally separated into:

- `src/data/portfolio.js`
- `src/data/services.js`
- `src/data/faq.js`

Personal information is in `src/sections/About.jsx`.

## Build

```bash
npm run build
```