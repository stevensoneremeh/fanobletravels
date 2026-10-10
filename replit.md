# Fanoble Travels and Tours Website

## Overview
This is a Next.js/React travel website for "Fanoble Travels and Tours Nigeria Limited" featuring religious tourism, medical tourism, and international trade fairs. The modern application also renders preserved legacy HTML content natively, and the original HTML pages and intro remain accessible.

## Content and Design Requirements
- Preserve existing image files and essential original travel information. The user permits refining copy/context and adding appropriate internet-sourced images where missing or useful; record sources and required attribution.
- Preserve the original logo image in the loader.
- Apply the shared modern visual system to all main and inner pages, including the legacy HTML and intro.
- Use the current Next.js structure; do not migrate or restructure the application without permission.

## Project Architecture
- **Frontend**: Next.js 15.5.27 with TypeScript and React components
- **App Structure**: App router with pages in src/app/ directory
- **Components**: Reusable React components in src/components/
- **Legacy Content**: Fixed-allowlist extraction in src/lib/legacy-content.ts renders original article and gallery sections without nested frames.
- **Legacy Intro**: Static intro at /intro/index.html.
- **Assets**: Consolidated under /public/ (CSS, JS, images, fonts, Revolution slider)
- **API**: Existing contact form API at /api/contact uses Replit Mail. Live email delivery requires the existing external mail service and has not been verified by sending a message.

## Key Features
- Modern React-based travel website with SSR/SSG
- Religious tourism packages (Israel, Rome, Greece, Turkey, Egypt, Jordan)
- Medical tourism services pages
- International trade fairs information
- Contact form with Next.js API and email integration
- Accessible hero slideshow with pause, previous/next, and reduced-motion support
- Flight/hotel inquiry form sends to an environment-configured inbox through the existing Replit mail service; this is not a live reservation system.
- Responsive design with Bootstrap and custom styles

## Development Setup
- **Framework**: Next.js 15.5.27 with TypeScript
- **Dev Server**: Port 5000 with cross-origin configuration
- **Host**: Configured for Replit proxy environment
- **Workflow**: "Next.js Dev Server" runs `npm run dev`
- **Path Aliases**: @/* resolves to src/* directory
- **Install**: `npm ci`
- **Run**: `npm run dev` (port 5000)
- **Verify**: `node --test tests/booking.test.cjs`, `npx tsc --noEmit` and `npm run build`
- **Styling**: src/app/globals.css and public/fanoble-redesign.css; load the shared stylesheet after legacy CSS.
- **Static enhancement**: public/fanoble-enhance.js handles legacy navigation and inquiry handoffs.

## Deployment Configuration
- **Target**: Autoscale deployment for static/serverless
- **Build**: `npm run build` for production optimization
- **Start**: `npm start` for production server

## Files Structure
- src/app/ - Next.js app router pages and layouts
- src/components/ - Reusable React components
- src/utils/ - Utility functions and integrations
- public/ - Static assets served by Next.js
- public/intro/ - Legacy intro site with Revolution slider
- package.json - Dependencies and scripts
- next.config.js - Next.js configuration for Replit
- tsconfig.json - TypeScript configuration with path aliases

## Known Limitations
- The absent original Greece photo was supplemented with licensed Acropolis photography, with visible attribution; original image files remain intact.
- Root/public asset copies are intentionally retained to preserve imported pages and images.
- Canvas sandbox artifacts are separate from the main application; the root TypeScript check includes src/ rather than all sandbox templates.

## Booking Inquiry Email
- Set `BOOKING_RECIPIENT_EMAIL` in environment variables to change the travel inquiry inbox. No recipient is hardcoded or accepted from visitors.
- Automatic sending uses the existing Replit Mail integration and platform-managed runtime identity; do not add credentials to code.
- The API validates inputs, date and same-site origin, applies instance-local rate limiting and retry deduplication, and only reports success after the mail service accepts the configured recipient.
- If sending fails, the form keeps entered details and provides an explicit “Open email app” option with the configured recipient. Opening the email app does not automatically send anything.
- Legacy HTML booking forms hand off their existing details to the modern homepage inquiry form.
- The separate general contact form still uses its existing company inbox; changing the booking recipient does not change that inbox.