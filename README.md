# Blitz - Your Ultimate Study Cheat Code

## Overview
Blitz is the ultimate AI study mate for BIUST students. 
Built as a lightning-fast, raw, and untamed chat app, Blitz helps engineering, 
science, and tech students crush assignments, exams, and late-night panic with 
“ngl Blitz is sick” vibes. It’s free, experimental, 
and packed with max aura—perfect for the BIUST grind.

This is the MVP (Minimum Viable Product), now scaling in a monorepo with a React frontend (`client/`) and Express backend (`server/`). We’re building it live—test it, break it, and help shape it into your secret weapon!

## Structure
- `client/`: Vite + React TypeScript frontend (plain HTML for testing, Tailwind coming).
- `server/`: Express + MongoDB backend (Gemini proxy, bookmarks, analytics).

## Features
- **Chat with Blitz**: Ask study questions, get Markdown-formatted, hyped responses.
- **Save Clutch Answers**: Bookmark responses in the “Saved” screen.
- **Mobile-First**: Works on any device, optimized for BIUST students.
- **Raw Power**: Uses untamed, fast answers—no fluff, max help.

## Usage
- [Live Demo](https://blitz-ai.netlify.app/) (client, plain version for testing).
- **Run Locally**:
  1. Clone this repo: `git clone https://github.com/Goitseone-Themba/blitz.git`
  2. Install: `cd blitz && npm install`
  3. Set `.env` files in `client/` and `server/` with API keys/MongoDB URI.
  4. Start: `npm run dev` (runs both client and server).
- **Chat**: Type in the textarea, hit Send—Blitz responds instantly.
- **Save**: Click ★ to bookmark answers.
- **Saved Screen**: Navigate to `/saved` to review/delete.
- **Feedback**: Drop feedback in [Discussions](https://github.com/Goitseone-Themba/blitz.git/discussions) or BIUST WhatsApp—help us mold Blitz!

## Tech Stack
- **Frontend**: Vite + React TypeScript + SWC
- **Backend**: Express + MongoDB + @google/generative-ai
- **AI**: Google Gemini 2.0 Flash Experimental
- **Styling**: Plain HTML/CSS (MVP), Tailwind CSS v4 (post-MVP)

## Contributing
BIUST students, test Blitz, report bugs, and suggest features via:
- This repo’s Issues or Discussions tab
- Your class WhatsApp group (updates every few hours)

## License
MIT License—use it, break it, make it yours (keep the BIUST love alive!).

## Easter Egg
Open dev tools (F12) after page load—Blitz drops a blue ASCII art surprise. Ngl, it’s sick! 🚀
