# SecureTech Redesign

Build a complete, professional, fully responsive website redesign for a real company called Secure Tech Consultancy. This is a portfolio/internship deliverable — make it polished, modern, and production-quality with zero layout bugs, zero broken images, and zero placeholder errors. Use React, Tailwind CSS, and shadcn/ui components. Set up React Router with three pages: Home ("/"), Careers ("/careers"), and Blog ("/blog"), sharing a common Navbar and Footer layout.

=== COMPANY BRIEF ===

Name: Secure Tech Consultancy (Pvt) Ltd

Industry: IT Consulting, Biometric & Identity Security Systems Integrator

Founded: 2008, Islamabad, Pakistan

Tagline: "Technology For Smarter Business — Gateway to a Secure Future"

Positioning: One of the top suppliers of real-time fingerprint verification terminals; 12+ years delivering biometric, cryptographic, and RFID-based identity solutions to governments, telecoms, and large enterprises across Pakistan, Iraq, Kenya, Sudan, and Nigeria.

About (rewrite in polished original wording, do not copy verbatim):

Secure Tech Consultancy is a Pakistan-based IT consulting and systems integration firm specializing in identity and security management. Core capabilities: ID cards, e-governance systems, secure access control, biometric verification/enrollment systems, IT consultancy, Android mobile app development for telecom (biometric verification, funds disbursement, mobile financial services), and enterprise software development.

Services (8 items, use icon cards from lucide-react):

1. Enterprise Software Development

2. Enterprise Mobility Solutions

3. Digital Transformation Services

4. Facial & Access Control Attendance Systems

5. Smart ID Cards

6. Real-time Biometric Verification & Enrolment Solutions

7. Backend Integration and Middleware Development

8. Enterprise-level Software Solutions

Hardware Products (product grid, each with name + one-line description + "Download Brochure" button):

TPS 360c, TPS 900, TPS 980 (facial recognition), TPS 950 (facial recognition), TPS 550s (integrated camera), TPS 470 (biometric tablet), TPS 550, TPS 350

Software Solutions / Case Studies (feature 3-4 as case study cards):

- Biometric-Based SIM Issuance System (NADRA-integrated retailer/device verification)

- Biometric Time & Attendance System

- Biometric Voter Verification System (used in Pakistan's NA-120 by-election, HSM-secured fingerprint storage)

- OTA (Over-The-Air) Platform for remote device/app management

- Banking & Financial Solutions using biometric verification

- Smart Debit Card System integrated with biometrics (Iraq deployment)

- Smart ID Card system for Pakistan Army (personnel & vehicle access control)

Industries Served: Government/Public Sector, Telecom, Banking & Financial Services, Defense/Military, Healthcare, Elections/Civil Registration

Timeline milestones (5-6 items, vertical timeline component):

2009 – Founded in Islamabad

2011 – National Entitlement Program enrolment system, Iraq; Smart Card ID system for Pakistan Army

2012 – Population Registration System consultancy, Kenya

2017 – First-ever biometric-verified polling pilot in Pakistan (Election Commission of Pakistan)

2020 – Groundbreaking of new Secure Tech HQ, Islamabad

Awards (badge strip): Global Top 50 Suppliers (Auto ID Industry), Star of Excellence Award (Government of Pakistan), Outstanding Achievement Award for Secure Documentation (Rome), Lifetime Achievement Award (NCR Corp)

Customers (logo strip, use clean text-based wordmarks in a consistent style, not real trademarked logos): Ufone, Jazz, Zong, Telenor, Warid, PTCL, PTA, PITB, Pakistan Army, Government of Pakistan, NayaPay, Karandaz

Contact: 391, Secure Tech Towers, Potohar Road, Sector I-9/3, Islamabad, Pakistan | +92-51-111-111-782 | social icons for Facebook, X/Twitter, LinkedIn linking to "#"

=== DESIGN SYSTEM ===

- Colors: brand-consistent blue + green theme, set up as Tailwind CSS variables in index.css / tailwind.config. Primary blue (trust/security) around hsl range for #0B3D5C to #1565C0, accent green (CTAs, highlights) around #1B9E5A to #34C77B, light neutral background, dark readable text. Define semantic tokens (primary, accent, background, foreground) rather than hardcoding hex values in components.

- Typography: modern sans-serif pairing (e.g. Inter or Poppins from Google Fonts), clear hierarchy (H1 40-56px, H2 28-32px, body 16-18px).

- Style: modern enterprise-tech aesthetic — generous white space, card-based sections with subtle shadows, rounded corners, smooth hover/transition states, consistent spacing scale.

- Icons: use lucide-react throughout for consistency.

- Images: use stable Unsplash source images relevant to technology, security, biometrics, servers, and data centers for hero/section imagery. Logo should be a clean text-based wordmark "SecureTech" styled in brand colors, not an image file. Every image must have descriptive alt text and render correctly — no broken links.

- Fully responsive: flawless at desktop (1440px), tablet (768px), and mobile (375px) — use Tailwind's responsive breakpoints (sm/md/lg/xl), no horizontal scroll or overlapping elements at any size.

=== PAGE STRUCTURE ===

Shared: Navbar (Logo | Home, About, Services, Products, Industries, Case Studies, Careers, Blog, Contact | green "Request a Demo" CTA button | mobile hamburger menu using shadcn Sheet component) and Footer (company links, address, phone, social icons, newsletter input, copyright) on every page.

HOME PAGE sections in order:

1. Hero — tagline, one-line value prop, two CTA buttons ("Request a Demo", "Explore Solutions")

2. About Us — rewritten summary + animated stat counters (12+ Years, 3+ Countries, 20+ Government Projects)

3. Services — 8 icon cards in a responsive grid (4 cols desktop / 2 tablet / 1 mobile), using shadcn Card component

4. Hardware Products — 4-card preview grid + "View All Products" button

5. Industries Served — icon + label grid

6. Case Studies — 3 featured cards with short blurb + "Read More" link

7. Customer logos strip (grayscale, color on hover)

8. Testimonials — 2-3 short quotes attributed to generic roles only (e.g. "Telecom Operations Director"), no invented named individuals, use shadcn Carousel if available

9. Awards & Recognition strip

10. Timeline / Our Journey

11. Floating live-chat button (bottom-right, opens a placeholder chat popover on click)

CAREERS PAGE:

- Hero: "Join Secure Tech Consultancy"

- Why Work With Us (3-4 value prop cards)

- Open Positions (3-4 job cards: title, department, location, "Apply Now" button)

- Culture/benefits icon row

- Application form using shadcn form components: Name, Email, Position dropdown, Resume upload, Submit button (client-side only, no backend needed)

BLOG PAGE (also include Certifications + Downloads sections here):

- Hero: "News & Insights"

- Blog post grid: 4-6 cards (image, title, excerpt, date, "Read More") — topics on biometric tech, digital identity, e-governance

- Certifications badge row (ISO 9001, ISO 27001 style placeholder badges)

- Downloads section — list of product brochure entries with download icons

=== TECHNICAL REQUIREMENTS ===

- Clean, well-organized component structure (separate components for Navbar, Footer, Hero, ServiceCard, ProductCard, Timeline, TestimonialCarousel, etc.) rather than one giant file.

- Use React Router Links for internal navigation, not full page reloads.

- Smooth-scroll behavior for in-page anchor links.

- Subtle scroll/fade-in animations for section entrances.

- Ensure the app builds and runs with no console errors or warnings.

- Do not use any real trademarked customer logos, real employee photos, or copyrighted material — use text-based or icon-based placeholders instead.

- Before finishing, verify: no broken imports, no missing images, consistent spacing and color usage across all pages, and full responsiveness at every breakpoint.

Build the complete website now.use the picture uploaded as refence

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://secure-tech-reboot.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/247ccf38-b476-451f-9c5d-54d7a741c626).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
