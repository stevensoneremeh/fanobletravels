# Fanoble Travels audit

## Baseline
- The repository is a Next.js App Router project using Next 15.5.27, React 19, TypeScript, and a mixed legacy HTML/Bootstrap asset tree under `public/`.
- Live application routes are implemented under `src/app/`; legacy pages remain as static HTML and are not the primary Next route surface.
- Styling is split between `src/app/globals.css`, `src/app/home-below-hero.css`, and the imported legacy `/fanoble-redesign.css`. Google Fonts and multiple legacy Bootstrap, Font Awesome, Themify, Owl Carousel, and Revolution Slider styles are loaded globally.
- Existing reusable components include `Header`, `Footer`, `ContactForm`, `HomeSlider`, `HomeJourney`, `MilestoneSection`, `SearchSection`, and `LegacyContent`.
- Existing API routes: `/api/contact` and `/api/booking`; contact submission already has a client/server path.
- Existing image assets are mostly legacy JPG/JPEG/PNG files in `public/img`; a curated folder contains a small number of WebP assets and a sources file.

## Existing route coverage
- Home: `/`
- Pilgrimage: `/tours/israel`, `/tours/rome`, `/tours/greece`, `/tours/turkey`, `/tours/egypt`, `/tours/jordan`
- Medical: `/medical-tourism`, `/medical-tourism/cambodia`, `/medical-tourism/europe`
- Fairs: `/fairs/china`, `/fairs/turkey`, `/fairs/india`, `/fairs/professional`
- Company: `/about`, `/contact`
- Missing requested routes: `/tours/portugal`, `/medical-tourism/india`, `/medical-tourism/israel`, `/medical-tourism/turkey`, `/medical-tourism/dubai`, `/medical-tourism/uk`, `/medical-tourism/usa`, `/privacy`, `/terms`, and a custom not-found page.

## Findings and risks
1. **Mobile navigation is incomplete for the requested product.** The current Header uses a hamburger menu and desktop-style dropdowns below 900px. There is no fixed bottom tab bar, bottom-sheet navigation, focus trap, scroll lock, outside-tap handling, safe-area treatment, or shared complete destination data.
2. **Navigation data is incomplete and embedded in the component.** Existing menus omit Portugal and the expanded medical country set. Several legacy HTML links refer to files that are not present in the Next route surface.
3. **The current visual system is layered over legacy markup.** The redesign CSS improves the old pages but still carries Bootstrap/legacy selectors, repeated global font imports, and old Revolution/Owl dependencies. This increases layout and hydration risk and makes consistent new templates difficult.
4. **Page templates are inconsistent.** Current detail pages delegate large sections to `LegacyContent`, with content and markup sourced from legacy HTML. This makes it difficult to guarantee consistent hero, key-site cards, help section, FAQs, sticky inquiry CTA, and accessible semantics across all destinations.
5. **Requested content is missing.** Israel does not have the requested Holy Sepulchre/Tomb of Jesus and Dead Sea treatment in a typed destination model; Egypt lacks the requested Mount Sinai treatment; Fatima/Portugal is absent. Medical country pages and a shared partner-hospital placeholder model are absent. Fairs do not share a single complete template.
6. **Mobile affordances need work.** Current mobile styles use a collapsible menu rather than 48px bottom navigation and do not provide the requested floating WhatsApp placement above a tab bar or sticky detail-page inquiry CTA. Some legacy controls and forms inherit small typography and older spacing.
7. **SEO/PWA coverage is minimal.** Root metadata has only a generic title/description. There is no verified per-route metadata strategy, sitemap, robots, manifest, viewport-fit configuration, or JSON-LD layer visible in the current app files.
8. **Accessibility is inconsistent.** Legacy pages contain empty image alt text, duplicate viewport/title tags, non-semantic icon links, placeholder `#` links, and third-party scripts. Newer components have some labels and focus styles but do not yet cover the requested dialog focus management and complete keyboard behavior.
9. **Image handling is inconsistent.** Most legacy pages use raw `<img>` elements and original-size JPG/JPEG files, with no consistent `next/image` sizes/priority strategy. Existing asset attribution is partial and needs to be preserved/expanded rather than inventing credits.
10. **Configuration has production gaps.** `next.config.js` disables ESLint during build, uses unoptimized images, and only sets `X-Frame-Options`. The current global layout loads many legacy stylesheets and third-party CSS from CDNs.
11. **Content safety requirement.** Existing copy includes claims such as affordability, customer testimonies, and trust language that should not be expanded into unverifiable stats, awards, named hospitals, prices, doctors, or testimonials. New content will use clearly labelled placeholders where required.
12. **Responsive audit limitation.** The source audit covers all current app routes and the legacy route inventory. A browser pass at 360, 390, 768, and 1280px is required after the new app shell is running; it should verify no horizontal overflow, console errors, broken navigation, or missing route links.

## Implementation plan
1. Centralize typed navigation, pilgrimage destinations, medical countries/placeholder hospitals, fairs, contact details, and FAQs in `src/data/`.
2. Replace the legacy header experience with a shared responsive app shell: desktop sticky mega menus and mobile bottom tabs/bottom sheets, plus floating WhatsApp and sticky detail CTAs.
3. Build a coherent reusable visual system and page templates for pilgrimage, medical tourism, trade fairs, company pages, privacy/terms, and not-found handling.
4. Add requested routes and metadata, JSON-LD, sitemap, robots, manifest, and accessible inquiry/contact states while retaining the existing contact API path.
5. Run lint/type/build checks and browser validation across the requested route set and mobile/desktop viewports; record remaining placeholders and image credits in the final report.
