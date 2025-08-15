# HMG Scrape Server

A simple Express server for serving static assets from the HMG website scrape.

## Features

- Serves all static files (CSS, JS, images, etc.)
- Routes work without `.html` extension
- Handles nested directory structures
- 404 error handling

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

Or for development with auto-restart:
```bash
npm run dev
```

## Usage

The server will run on `http://localhost:3000` by default.

### Available Routes

- `/` - Home page (index.html)
- `/kontakt` - Contact page (kontakt.html)
- `/om-oss` - About page (om-oss.html) 
- `/overnatting` - Accommodation page (overnatting.html)
- `/turar` - Tours page (turar.html)
- `/turar/arrangement` - Arrangement tours
- `/turar/familieturar` - Family tours
- `/turar/sommarturar` - Summer tours
- `/turar/vinterturar` - Winter tours

All static assets (CSS, JS, images) are served from their original paths.

## Environment Variables

- `PORT` - Server port (default: 3000)

## File Structure

The server serves files from `static-export/0.0.0.0:3944/` directory.
