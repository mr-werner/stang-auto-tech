# Stang Auto Tech — Blueprint WebStudio Concept

Independent, non-official redesign concept for http://www.stangautotech.com (redirects to broomfieldautorepair.com) (Broomfield, CO).
Preview: https://sat.blueprintwebstudio.com (noindex; the demo code lives in the Neon `demos` table).

This is a custom build for Stang, not the shared concept layout. Content and layout are in `src/App.jsx`, styles in `src/styles.css`, and the Blueprint WebStudio concept widget in `src/concept.jsx`.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Vercel project `stang-auto-tech` (framework: Vite). Connect the repo under Vercel → Settings → Git so pushes to `main` deploy automatically.
Domain `sat.blueprintwebstudio.com` is a CNAME at Porkbun pointing to the target Vercel shows for this project.

Environment variables (all optional):

| Variable | Purpose |
|---|---|
| `VITE_CONCEPT_END_DATE` | Countdown end date in the concept widget (defaults to 2026-11-24) |
| `GOOGLE_PLACES_API_KEY`, `GOOGLE_PLACE_ID` | Live Google rating and review excerpts (`api/google-reviews.js`) |
| `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` | Request-form emails (`api/contact.js`). Without them the form shows a demo message |

The "I'm Interested" form posts to `api/demo-interest.js`, which proxies to the main studio site.

## What changed from the current site

- All five "Schedule an Appointment" buttons on the current site are dead links. The concept's booking form works and asks for vehicle, service and preferred day.
- Puts the Stang Auto Tech name back front and center; the brand domain currently redirects to a generic "Broomfield Auto Repair" site.
- Fixes the placeholder "Write your caption here" under the team photo, the stray "Button" label in the hero, and the CARFAX badge mislabeled "Cargax".
- Shows the AAA Top Shop, CARFAX and ASA badges together, plus the 36-month/36,000-mile nationwide guarantee and perks (free shuttle, $25/day rentals, free 5th oil change).
- All ten service menus from the current site, with their full item lists, in a tabbed menu board.
- Custom design built from the business itself: the real Stang logo and its indigo and raspberry colors, twin Mustang racing stripes, a Colorado "Since 80" plate, a pit-pass perks strip, an odometer for the 36/36 guarantee, and the four core values including "Stay Gold".
- Real photos from the current site (owner, Kyle, team, shop, Mustang). The Google rating appears only when the live Google feed is connected; no reviews or ratings are invented.
- Adds a copyright line.

## Before client presentation

- The palette (indigo #383996, raspberry #bd2855) is sampled from the real logo; gold is used only for "Stay Gold".
- The rating badge shows only when `GOOGLE_PLACES_API_KEY` and `GOOGLE_PLACE_ID` are set; there is no fallback number.
- Confirm the CARFAX badge years (2024 and 2025), the AAA Top Shop award and ASA membership are current.
- Confirm the perks and prices ($15 valet, $25/day rentals, free 5th oil change) and Rescue Me Roadside Assistance terms.
- Find a contact email; none is listed on the current site, so the concept form falls back to a demo message.
- Real logo and photos are hotlinked from the current site; host copies (with permission) before launch.
- Keep the independent-concept disclaimer visible; do not imply this is the company's official site.
- The countdown is display-only, not access control. The subdomain is public to anyone with the URL.
