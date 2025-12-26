# CoPilotry Landing Page Spec (One Page)

Date: 2025-12-25  
Launch messaging: January 2026

## 1) Goal

Primary goal: collect emails for waitlist.  
Core promise: save months. write who you need once. get perfect matches with evidence and LinkedIn links.

Primary KPI: email conversion rate.  
Secondary KPIs: CTA click rate, scroll depth to How it works, tab switches in Use cases.

## 2) Brand and Theme

Project name: CoPilotry  
Visual metaphor: flight deck, radar, departure board.  
Hero word rotation: copilot rotates to adviser, co-founder, top-hire (departure board style).

## 3) Page Structure

### 3.1 Header
- Logo: CoPilotry
- Nav anchors: How it works, Filters, Use cases, FAQ
- Primary CTA button: Join waitlist

### 3.2 Hero (First Screen)
H1: Find your perfect copilot with unparalleled precision  
- The word “copilot” rotates to: adviser, co-founder, top-hire

Subheadline: Pick base filters. Add smart context. Get perfectly matching people with profile links.

Email capture:
- Email input
- Button: Join waitlist
- Microcopy under form: Launching January 2026.

Hero visual:
- Dark flight deck background with subtle radar grid
- Soft radial glow (blue to purple)
- Example results card with 2 to 3 candidate entries

### 3.3 Value Block (3 bullets)
- Save months of searching and guessing
- Describe who you need once, we interpret nuance
- Get a ranked shortlist with evidence and LinkedIn links

### 3.4 How it works (3 steps)
Step 1: Choose base search criteria  
Short text: Set hard filters to narrow the search.

Step 2: Add intelligent context  
Short text: Explain what “good” looks like beyond keywords.
Required subpoints:
- relevant experience in something (domain or function)
- experience in specific countries
- education and certifications

Step 3: Get your perfect matches  
Short text: Ranked shortlist with reasoning and LinkedIn links.

### 3.5 Filters (Base criteria examples)
Section title: Base criteria

Show 8 filter cards (examples):
1) Search query (fuzzy)
2) Locations
3) Current job titles
4) Seniority level
5) Function
6) Industry IDs
7) Years of experience
8) Current companies or past companies

Small Exclusions area:
- Exclude locations
- Exclude current companies
- Exclude industries

### 3.6 Use cases (Tabs)
Tabs: Adviser, Co-founder, Top-hire  
Each tab contains:
- Example query (plain English)
- Example intelligent context
- Example output preview (2 candidate cards)

### 3.7 January Launch Band
- Headline: Private beta starts in January 2026
- Sub: Join the waitlist to get the first invites

### 3.8 FAQ
Minimum 6 items:
1) What do I get: links only or exports?
2) What is intelligent context?
3) Can I exclude companies or locations?
4) How is deduplication handled?
5) When do you launch?
6) Do you support email discovery?

### 3.9 Footer
- Links: Privacy, Terms
- Contact email placeholder
- Copyright

## 4) UI Copy (Ready to Paste)

Buttons
- Primary CTA: Join waitlist
- Secondary CTA (scroll): See how it works

Microcopy
- Launching January 2026.
- Private beta starts in January 2026.

Step titles
- Choose base criteria
- Add intelligent context
- Get perfect matches

## 5) Visual Design System

### Palette
- Background: #070A12
- Surface: #0B1222
- Primary Blue: #3B82F6
- Primary Purple: #8B5CF6
- Accent Cyan: #22D3EE
- Main Text: #E5E7EB
- Muted Text: #94A3B8
- Border: #1F2A44

### Typography
- Body and headings: Inter
- Departure board word: JetBrains Mono (or similar monospace)

### Components
- Buttons: large, radius 14 to 16px, subtle glow on hover
- Cards: glass effect, thin border, slight blur
- Tabs: pill style
- FAQ: accordion
- Results card: name, title, company, match score, 2 to 3 reasons, Open LinkedIn link

### Motion
- Word rotation: flip or vertical slot animation, cycle 1.8 to 2.4s, pause for readability
- Section reveal: gentle fade and translate
- Optional: subtle radar sweep in hero background at very low opacity

## 6) Data Capture and Tracking

### Email form requirements
- Validate email format
- Rate limit and honeypot
- Success state inline, no redirect

### Analytics events
- submit_email
- click_cta_header
- click_cta_hero
- scroll_to_how_it_works
- switch_usecase_tab

## 7) Engineering Requirements

- Stack: Next.js (App Router), TailwindCSS, Framer Motion
- Accessibility: keyboard navigation for tabs and accordion, visible focus
- Performance: Lighthouse performance 90+ target
- SEO: title, description, OG tags
- EU: cookie consent only if non essential tracking is used

## 8) Acceptance Criteria (Checklist)

Hero
- H1 renders with rotating word: copilot, adviser, co-founder, top-hire
- Email form visible above the fold on desktop and mobile
- Launching January 2026 visible near the form

How it works
- Exactly 3 steps
- Step 2 includes all three context bullets: experience, countries, education and certifications

Filters
- Base criteria section shows 8 example filters
- Exclusions block shows 3 exclusion types

Use cases
- Tabs switch without layout shift
- Each tab shows query, context, and output preview

Tracking
- All listed analytics events fire appropriately

Quality
- Mobile layout clean, no overflow, form usable
- No heavy animations that reduce readability

## 9) Implementation Notes

- Keep copy minimal and sharp
- Avoid fake logos or fake customer claims
- Prefer links and evidence framing in multiple places
