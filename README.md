# Abdelqader Al-Salem — One-page Portfolio

A complete, responsive one-page portfolio with an ambient constellation background and a modal-driven design inspired by the screenshots supplied by the user. The homepage matches the centered-portrait / compact-pill visual pattern. **Every information button opens a scrollable popup inside the same page**, including About (with a swipeable photo deck), Education, Location, Experience, Projects, Skills, and Contact. The CV button downloads the source CV.

## Open and preview

Open `index.html` in a browser. All media, JavaScript, and styles are local. For a local web server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish

Upload the extracted directory to a static host such as GitHub Pages, Netlify, or Vercel. Keep `index.html`, `styles.css`, `app.js`, `favicon.svg`, and the `assets/` folder together. No npm, build command, API key or server is needed.

## Features

- Single-page, full-height landing screen with photo, location/education chips, four popup buttons, social icons, CV download and animated tool marquee.
- Scrollable detail popups with real content sourced from the supplied 2026 CV, plus direct project / live-demo links.
- Nine original user-supplied photos, navigable carousel, swipe gestures, dot navigation and large photo viewer.
- Direct links and shareable URL hashes like `#projects` or `#experience`.
- Keyboard access, native `<dialog>` controls, responsive mobile layout, and reduced-motion support.
- Offline-friendly assets; no external analytics, tracking, or dependencies.

## Editing

- Biography, dates, projects and links: `app.js`.
- Main homepage intro, buttons, links and footer ticker: `index.html`.
- Colors, layout and animation: `styles.css`.
- Photos: `assets/photos/*.webp`.
- Resume: `assets/Abdelqader_Al-Salem_CV_2026.docx`.

Project links, personal contact details, education and experience were taken from the supplied CV; this site does not fabricate a contact form or booking calendar. The public NetPilot demo may run without private AI configuration.

## Email links and Saudi Arabia positioning (November 2026 update)

Every email control addresses **a.mhd.alsalem@gmail.com**:
- **Send me an email (Gmail)**, the home email icon, and the address row open a pre-addressed Gmail compose screen in a browser tab.
- **Outlook** buttons open Outlook Web compose addressed to Abdelqader.
- **Copy email address** provides a universal fallback for other email providers.

**Important:** Unlike `mailto:`, these links do not depend on a locally installed or configured desktop email application. Gmail or Outlook may request sign-in, and a visitor must still write the message and click **Send**. On a static site, clicking a link cannot automatically deliver mail; a contact form would need a verified backend/form provider.

The About and Location panels now mention **Istanbul, Türkiye and Jeddah, Saudi Arabia**, and the Location text highlights that Abdelqader was born in Saudi Arabia, currently lives in Istanbul, holds Turkish/Jordanian passports and Saudi Iqama, and is actively seeking engineering roles in Jeddah and Istanbul. The copy deliberately does not claim that he physically resides in both places simultaneously.
