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
| Mango Cream | `#F3C77B` | Highlight fields, trip cards section, text highlights |
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
- The brand book says to avoid decorative scripts, so the mockup's script accents were replaced with Mango Cream marker highlights.

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
| index.html | Home | Hero → marquee → week at a glance → what the week feels like → why different → glimpse → testimonials → gallery → upcoming trips → Hi, I'm Nina → Still undecided (dark) |
| experience.html | The Experience | Hero → private lessons → dance floor → beyond the studio → **sample week calendar** → where you'll stay (slider + 2 suite cards) → included / not included → dates & pricing → who loves it → how joining works (dark) |
| stories.html | Participant Stories | Hero + wide photo → Dimple / Aaron / Carena stories in alternating layouts → photo strip → CTA |
| about.html | About | Nina hero → why it matters + quote → **video placeholder** → local partners (Siémbrala) → mission (dark) |
| faq.html | FAQ | 8 categories with a sticky category menu and accordions |
| reserve.html | Reserve Your Spot | Interest form + confirmation, call option, other ways to connect |
| policy.html | Cancellation / Refund Policy | Policy text |

---

## 3. Building each pattern in Wix Studio

| Pattern | How to build it |
|---|---|
| Hero (name + dancers) | Full-height section on Coconut with two soft Mango/Blue glows. Centered stack: a thin vertical line, "— DANCE IN —" (Figtree 600, 0.32em tracking), a huge "MEDELLÍN" (Bree Serif, about 17vw, with "ME" in Papaya), and "SALSA & BACHATA TRIPS" (Figtree 300, wide tracking). Two transparent dancer cutouts (images/hero-dancer-28434193.png on the left, hero-dancer-28434185.png on the right) are docked bottom-left and bottom-right, about 70% of section height, in front of the word. A round Ink "Reserve" button sits bottom-center with a thin line above it. Animations: letters stagger in, the line draws down, dancers rise and fade in, and the dancers and word use Track Mouse at low intensity. Tablet/mobile: the word sits near the top and the dancers fill the lower half. |
| Mouse-responsive depth | Animations → Mouse effects → "Track mouse" on the badge, chip, sparks and ghost text. Use different intensities. |
| Headline word stagger | Text → Entrance animation: "Reveal" or "Slide" set to **by word/line**, about 70ms stagger. |
| Scroll reveals | Entrance animations: Fade-up (40px, 1s, ease-out), Slide from left/right, and Reveal (clip from bottom) for photos. Stagger repeater/stack items by 0.1s. |
| Parallax | Scroll effects → "Parallax" / "Move vertical" at low intensity (5–15%) on the collage photos and gallery tiles. |
| Image hover zoom | Hover interaction on the image container: scale the image to 106% over 1.2s. |
| Buttons | Fill Papaya, text Ink. On hover: fill Ink, text Coconut, lift 2px. Fully rounded pill shape. |
| Marquee band | Wix Studio "Marquee"/ticker element, or a repeater with a horizontal loop animation. Pause on hover. |
| Staggered "why" cards | A 4-column CSS Grid where columns 2 and 4 get a 70px top margin. Tablet: 2 columns. Mobile: 1 column with the image left at 120px. |
| Gallery with overlay type | 12-column Grid with mixed row/column spans. Large Bree Serif text on top with a soft shadow. Mobile: 2 columns. |
| Sample week calendar | Two dark "arrival/departure" cards above a 7-column Grid of day cards (Saturday spans 2). Colored dots follow the legend. Tablet: 3 columns. Mobile: 1 column. |
| Hotel slider | Wix Pro Gallery (slider layout) or a Slideshow. Arrow buttons + captions. |
| FAQ | Wix **Accordion** element (one per category). The category menu is a sticky Container on desktop and wrapping pill buttons on tablet/mobile. |
| Interest form | **Wix Forms**, with fields exactly as in the copy doc. Email required, WhatsApp optional. Trip and dance level are required single-choice fields. Two required checkboxes. Button label: "Send My Interest Form". Show the "Got it! 🎉" text as the success message. |
| 20-minute call | Wix Bookings service named "Dance in Medellín — Ask Nina Anything", or a Calendly embed. |
| Page transitions | Site → Page transitions → Fade (300–600ms). |
| Reduced motion | Wix Studio respects the OS "reduce motion" setting automatically. The reference build disables all motion when it's on. |

---

## 4. Image map (`images/`)
| Page / section | Image |
|---|---|
| Home hero | Free-licence Pexels photos with backgrounds removed: images/hero-dancer-28434193.(webp/png) from pexels.com/photo/28434193 and images/hero-dancer-28434185.(webp/png) from pexels.com/photo/28434185. The Pexels License allows free commercial use with no attribution required. |
| Home "week feels like" | partner-turns, street-food, group-dinner |
| Home "why different" | nina, group-salsa-social, partners-connection, cooking-class |
| Home gallery | three-guests-venue, nueva-guardia-group, ice-pops, woman-dancing-partner, market-pineapple, partners-smiling, group-class-siembrala, coffee-tour |
| Experience | group-class-siembrala, market-pineapple, partners-connection, partner-turns, woman-local-dancer, partners-smiling, cooking-class, ice-pops, street-food, group-dinner + all hotel-* / suite-* photos |
| Stories | Dimple = coffee-tour ⚠️, Aaron = guest-red-door, Carena = woman-hats-street, hero = nueva-guardia-group |
| About | nina, carlos-aleja |

hotel-lobby-triptych wasn't used because it repeats the lobby and reception shots.

---

## 5. Open items — need client input before launch
1. **Logo:** still in progress. The header uses a text placeholder in Bree Serif ("DANCE IN / Medellín", accent kept).
2. **About Me video:** not recorded yet. A clearly labeled placeholder is on the About page.
3. **Contact details missing:** WhatsApp number, email, brand Instagram URL and calendar link. Fill in the `CONTACT` block at the top of `js/main.js`, or link them in Wix. Until then these links jump to the contact section.
4. **Privacy Policy and Terms:** no copy provided. The footer links are placeholders.
5. **Dimple's photo:** the client asked for "Dimple with sunglasses". I used `coffee-tour`, the closest match, so please confirm.
6. **Copy flags the client raised:**
   - The "week at a glance" block may be too wordy. It's kept, but easy to remove.
   - "Come for the dance. Leave with so much more." — the client wasn't sure about it. It's kept at the end of Home.
   - The sample week as a calendar is done.
7. **Not published (internal notes):**
   - "What if my flight arrives very late or leaves early?" has no answer yet and needs the confirmed MDE transfer window.
   - The "[Test the actual form…]" note was removed. The FAQ says "About 2 minutes."
8. **Doc's internal checklist:** dates, $2,199 / $2,399 pricing, the $500 deposit, and permission for Ellen's quote and all guest quotes and photos all need confirming before launch.
