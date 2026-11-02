# Dance in Medellín — Wix Studio Build Guide

Open `index.html` in a browser to view the reference build. Every section below can be rebuilt with native Wix Studio tools. Custom code is optional.

Sources:
- **Copy:** "Dance in Medellín — Website Copy" (Google Doc).
- **Brand:** "Eterna Primavera Brand Book" (Canva), pages 17–22 and the quick-reference page.
- **Photos:** "Photos for Website" (Drive folder), saved as optimized JPEGs in `images/`.

The mockup was used **only** for layout ideas: oversized type, a colored hero panel, overlapping photos, a gallery with type over it, and a colored trip-cards section. None of its colors, fonts or script lettering were used.

---

## 1. Site styles (Site Styles → Theme)

### Colors: six colors, distinct jobs
| Name | HEX | Use |
|---|---|---|
| Tropical Ink | `#263E46` | Headlines, body copy, logo, one dark section per page |
| Coconut | `#FFF4E7` | Primary page background (≈45%) |
| Papaya | `#E8785B` | Primary buttons, warm emphasis |
| Mango Cream | `#F3C77B` | Highlight fields, trip cards section |
| Caribbean Blue | `#79BFC0` | Secondary sections (hero panel, testimonials) |
| Bougainvillea | `#E83E78` | Tiny sparks only |

Brand-book neutrals also used: `#FFFAF4` (paper cards) and `#F1E8DD` (footer).

Brand rules followed:
- One bright lead color per section.
- Papaya and Bougainvillea are never used for small text on Coconut.
- Buttons are **Papaya with Ink text** at 19px bold, which passes contrast for large text. White on Papaya fails.

### Typography
- **Headings: Bree Serif** (Google font in Wix), weight 400, line-height 1.0–1.1, sentence case.
  - H1 hero: 86px desktop / 56px tablet / 42px mobile.
  - H2: 56 / 44 / 34px.
  - H3: 28 / 24 / 22px.
- **Body: Figtree** at 400/500/600/700. Body 17px / line-height 1.65. Lead 20px.
  - Labels: 12.5px, 700 weight, 0.16em tracking, uppercase, with a short line before them.
- If Figtree isn't available, the brand book allows **Proxima Nova** as a fallback. Don't mix the two.
- The brand book says to avoid decorative scripts, so the mockup's script accents were dropped. (Mango marker highlights on words were removed after client feedback on 29 Oct.)

### Breakpoints
The CSS uses Wix Studio's defaults: Desktop > 1000px, Tablet ≤ 1000px, Mobile ≤ 750px.

---

## 2. Pages & menu
Menu order follows the copy doc's site map:
**Home | The Experience | Participant Stories | About | FAQ |** plus a **Reserve Your Spot** button.

There is also a Cancellation / Refund Policy page, linked from the footer and the FAQ.

> The brief listed "Next Immersion" instead of "Participant Stories". I followed the copy doc, which is more detailed and newer. Upcoming trips appear on Home and Experience.

| File | Wix page | Main sections |
|---|---|---|
| index.html | Home | Hero → marquee → intro + glimpse of the week + price → what the week feels like → why different → testimonials → gallery → upcoming trips → Hi, I'm Nina → Still undecided (dark) |
| experience.html | The Experience | Hero → private lessons → dance floor → beyond the studio → **sample week calendar** → where you'll stay (slider + 2 suite cards) → included / not included → dates & pricing → who loves it → how joining works (dark) |
| stories.html | Participant Stories | Hero + wide photo → Dimple / Aaron / Carena stories in alternating layouts → photo strip → CTA |
| about.html | About | Nina hero → why it matters + quote → **About Me video + Medellín photos** → local partners (Siémbrala) → mission (dark) |
| faq.html | FAQ | 8 categories with a sticky category menu and accordions |
| reserve.html | Reserve Your Spot | Interest form + confirmation, call option, other ways to connect |
| policy.html | Cancellation / Refund Policy | Policy text |

---

## 3. Building each pattern in Wix Studio

| Pattern | How to build it |
|---|---|
| Hero (name) | Dancer cutouts removed at client request (29 Oct) until a better option is found; the notes below describe the original version. Full-height section on Coconut with two soft Mango/Blue glows. Centered stack: a thin vertical line, "— DANCE IN —" (Figtree 600, 0.32em tracking), a huge "MEDELLÍN" (Bree Serif, about 17vw, with "ME" in Papaya), and "SALSA & BACHATA TRIPS" (Figtree 300, wide tracking). Two transparent dancer cutouts (images/hero-dancer-28434193.png on the left, hero-dancer-28434185.png on the right) are docked bottom-left and bottom-right, about 70% of section height, in front of the word. A round Ink "Reserve" button sits bottom-center with a thin line above it. Animations: letters stagger in, the line draws down, dancers rise and fade in, and the dancers and word use Track Mouse at low intensity. Tablet/mobile: the word sits near the top and the dancers fill the lower half. |
| Mouse-responsive depth | Animations → Mouse effects → "Track mouse" on the badge, chip, sparks and ghost text. Use different intensities. |
| Headline word stagger | Text → Entrance animation: "Reveal" or "Slide" set to **by word/line**, about 70ms stagger. |
| Scroll reveals | Entrance animations: Fade-up (40px, 1s, ease-out), Slide from left/right, and Reveal (clip from bottom) for photos. Stagger repeater/stack items by 0.1s. |
| Parallax | Scroll effects → "Parallax" / "Move vertical" at low intensity (5–15%) on the collage photos and gallery tiles. |
| Image hover zoom | Hover interaction on the image container: scale the image to 106% over 1.2s. |
| Buttons | Fill Papaya, text Ink. On hover: fill Ink, text Coconut, lift 2px. Fully rounded pill shape. |
| Marquee band | Wix Studio "Marquee"/ticker element, or a repeater with a horizontal loop animation. Pause on hover. |
| Staggered "why" cards | A 4-column CSS Grid where columns 2 and 4 get a 70px top margin. Tablet: 2 columns. Images are 4:3 so they stay secondary to the text. Mobile: 1 column with a square image left at 96px. |
| Gallery with overlay type | 12-column Grid with mixed row/column spans. Large Bree Serif text on top with a soft shadow. Mobile: 2 columns. |
| Sample week calendar | Two dark "arrival/departure" cards above a 7-column Grid of day cards (Saturday spans 2). Each activity is a tinted chip: Papaya = lessons, Ink = social dancing, Mango = food & culture, Blue = free time. No legend. Tablet: 3 columns. Mobile: 1 column. |
| Hotel slider | Wix Pro Gallery (slider layout) or a Slideshow. Arrow buttons + captions. |
| FAQ | Wix **Accordion** element (one per category). The category menu is a sticky Container on desktop and wrapping pill buttons on tablet/mobile. |
| Interest form | **Wix Forms**, with fields exactly as in the copy doc. Email required, WhatsApp optional. Trip and dance level are required single-choice fields. Conditional text fields: "Other" (how did you hear), "specific date" (which trip), and "Yes" (hesitant about Medellín). Optional Yes/No questions after dance level: traveled internationally for dance, been to Colombia, been to Medellín, hesitant. Send submissions to danceinmedellinco@gmail.com. Two required checkboxes. Button label: "Send My Interest Form". Show the "Got it! 🎉" text as the success message. |
| 20-minute call | Wix Bookings service named "Dance in Medellín — Ask Nina Anything", or a Calendly embed. |
| Sticky header | Header → Scroll behavior → "Sticky" (always visible; it does not hide on scroll). |
| Page transitions | Site → Page transitions → Fade (300–600ms). |
| Reduced motion | Wix Studio respects the OS "reduce motion" setting automatically. The reference build disables all motion when it's on. |

---

## 4. Image & video map (`images/`, `videos/`)
**Rule: every photo is used once across the whole site — no repeats.** Unused photos stay in `images/` for future pages or social posts.

| Page / section | Media |
|---|---|
| Home hero | Text only (dancer cutouts removed per client feedback, 29 Oct). The Pexels cutouts (hero-dancer-*) remain in images/ in case they're wanted later. |
| Home "week feels like" | partner-turns, street-food, group-dinner |
| Home "why different" | nina-olaf-viewpoint, group-salsa-social, partners-connection, cooking-class |
| Home gallery | social-dancer-spin, social-floor-wide, **video** couple-close-loop, social-couple-close, umbrella-street, **video** rooftop-social-loop, social-dip, social-group-dancing |
| Home trip cards | Bachata: social-couple-turn · Salsa: couple-salsa-social |
| Home "Hi, I'm Nina" | nina-olaf-pueblito-paisa |
| Experience hero | group-class-siembrala + market-pineapple (circle) |
| Experience private lessons | woman-local-dancer, social-turn-bar |
| Experience dance floor | **video** social-floor-loop, partners-smiling |
| Experience beyond the studio | group-cooking-hosts, ice-pops, group-market-visit |
| Experience hotel + suites | all hotel-* / suite-* photos |
| Experience dates cards | Bachata: social-floor-lines · Salsa: social-couple-laughing |
| Experience "who loves this" | group-outdoors-laughing |
| Stories | hero nueva-guardia-group · Dimple = coffee-tour ⚠️ · Aaron = guest-red-door · Carena = woman-hats-street · strip: three-guests-venue, social-group-smiles, woman-dancing-partner, **video** medellin-sign-couple-loop |
| About | hero nina · **About Me video** about-nina.mp4, framed by nina-olaf-umbrellas, medellin-night-hills, medellin-skyline-mountains · carlos-aleja |

**Videos in Wix Studio:**
- **Looping clips** (`*-loop.mp4`): add as Video Box elements set to autoplay, loop and muted, with no controls. Each one is silent, 7–12 seconds and 1.5–2.8 MB. Use the matching `-poster.jpg` as the cover image.
- **about-nina.mp4:** Video Player element with sound and play controls, vertical 9:16, cover image about-nina-poster.jpg.
- **Reduced motion:** the reference site pauses the loops and shows controls for visitors with "reduce motion" turned on.

**Not used yet:**
- Two more social-floor clips (PXL_20260813_031131200, PXL_20260815_042317417).
- Photos: medellin-night-panorama, medellin-hills-panorama, medellin-dusk, medellin-valley, medellin-green-city, medellin-sunset-trees, comuna-13-houses, colorful-street, botero-mural, yo-medellin-sign, social-crowd-lamps, social-friends-pose, olaf-* (Olaf solo shots), hotel-lobby-triptych.
- Several of these (comuna-13-houses, colorful-street, botero-mural, medellin-skyline-mountains, medellin-dusk, medellin-green-city) are Unsplash photos the client supplied. The Unsplash License allows free commercial use.

---

## 5. Open items — need client input before launch
1. **Logo:** still in progress. The header uses a text placeholder in Bree Serif ("DANCE IN / Medellín", accent kept).
2. **About Me video:** ✅ received (2 Nov) and live on the About page as videos/about-nina.mp4.
3. **Contact details:** WhatsApp (wa.me/nina_joven), Instagram (instagram.com/danceinmedellin) and email (danceinmedellinco@gmail.com) are set in the `CONTACT` block of `js/main.js`. **Calendar link still missing**, so "Book a call" links jump to the contact section.
4. **Privacy Policy and Terms:** no copy provided. The footer links are placeholders.
5. **Dimple's photo:** the client asked for "Dimple with sunglasses". I used `coffee-tour`, the closest match, so please confirm.
6. **Copy flags the client raised:**
   - "Week at a glance" was replaced by the "Glimpse of the week" list (29 Oct).
   - "Come for the dance. Leave with so much more." — the client wasn't sure about it. It's kept at the end of Home.
   - The sample week as a calendar is done.
7. **Not published (internal notes):**
   - "What if my flight arrives very late or leaves early?" has no answer yet and needs the confirmed MDE transfer window.
   - "What’s not included" list: the client says it needs changing, but the copy doc still shows the old list. Waiting on the new list.
   - The "[Test the actual form…]" note was removed. The FAQ says "About 2 minutes."
8. **Doc's internal checklist:** dates, $2,199 / $2,399 pricing, the $500 deposit, and permission for Ellen's quote and all guest quotes and photos all need confirming before launch.
