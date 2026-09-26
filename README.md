# IFRPS Web Frontend

Production-oriented front-end foundation for the International Federation of Rock Paper Scissors.

## Stack

- Next.js App Router
- TypeScript
- React
- CSS Modules + global design tokens
- Semantic HTML and accessible navigation
- Mock data isolated from UI components for future API/database integration

## Run locally

1. Install Node.js LTS.
2. Open a terminal in this folder.
3. Run:

```bash
npm install
npm run dev
```

4. Open `http://localhost:3000`.

## Current routes

- `/` — Home
- `/about` — About
- `/rules` — Official Rules
- `/rankings` — International Elo UI
- `/tournaments` — Tournament center
- `/organizations` — Recognized organizations
- `/news` — Federation news
- `/players` — Player directory
- `/players/[slug]` — Player profile
- `/competition` — League / Majors / Worlds structure
- `/register` — Registration front-end preview

## Architecture

- `src/app/` — routes/pages
- `src/components/` — reusable UI
- `src/data/` — temporary development/mock data
- `src/types/` — shared TypeScript types
- `public/assets/` — static branding and icon assets

The mock data exists only to build the interface. Real rankings, organizations, news, tournaments and accounts should later come from authenticated backend services / database APIs.

## Deployment note

This project replaces the current GitHub Pages-only static architecture. Do not overwrite the live repository until the Next.js deployment target is chosen and tested.
