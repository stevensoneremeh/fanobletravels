# Fanoble Travels and Tours Website

## Overview
This is a hybrid Next.js/React travel website for "Fanoble Travels and Tours Nigeria Limited" featuring religious tourism, medical tourism, and international trade fairs. The project combines a modern Next.js application with a legacy HTML intro site.

## Recent Changes (September 15, 2025)
- Successfully set up Next.js TypeScript application with app router
- Installed Node.js dependencies and configured development workflow
- Consolidated static assets under /public directory for Next.js serving
- Set up intro site at /intro/index.html as static content
- Configured Next.js for Replit proxy environment with cross-origin handling
- Set up autoscale deployment configuration with build/start commands

## Project Architecture
- **Frontend**: Next.js 15.5.3 with TypeScript and React components
- **App Structure**: App router with pages in src/app/ directory
- **Components**: Reusable React components in src/components/
- **Legacy Intro**: Static HTML intro site with Revolution slider at /intro/
- **Assets**: Consolidated under /public/ (CSS, JS, images, fonts, Revolution slider)
- **API**: Contact form API route at /api/contact using Replit Mail integration

## Key Features
- Modern React-based travel website with SSR/SSG
- Religious tourism packages (Israel, Rome, Greece, Turkey, Egypt, Jordan)
- Medical tourism services pages
- International trade fairs information
- Contact form with Next.js API and email integration
- Legacy intro site with Revolution slider and animations
- Responsive design with Bootstrap and custom styles

## Development Setup
- **Framework**: Next.js 15.5.3 with TypeScript
- **Dev Server**: Port 5000 with cross-origin configuration
- **Host**: Configured for Replit proxy environment
- **Workflow**: "Next.js Dev Server" runs `npm run dev`
- **Path Aliases**: @/* resolves to src/* directory

## Deployment Configuration
- **Target**: Autoscale deployment for static/serverless
- **Build**: `npm run build` for production optimization
- **Start**: `npm start` for production server
- **Output**: Standalone mode for deployment flexibility

## Files Structure
- src/app/ - Next.js app router pages and layouts
- src/components/ - Reusable React components
- src/utils/ - Utility functions and integrations
- public/ - Static assets served by Next.js
- public/intro/ - Legacy intro site with Revolution slider
- package.json - Dependencies and scripts
- next.config.js - Next.js configuration for Replit
- tsconfig.json - TypeScript configuration with path aliases

## Known Issues & Future Improvements
- Minor hydration warnings in React components (non-blocking)
- Intro site may need jQuery explicitly included for Revolution slider
- Duplicate assets exist in root directory (can be cleaned up)
- Cross-origin warnings in development (resolved in production)