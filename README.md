# Aura Bridal Studio — Luxury Bridal & Editorial Beauty Website
> **Concept & Architecture by Nivora** | High-Converting, Mobile-First Editorial Experience

A complete, production-ready website built for **Aura Bridal Studio**, a premium bridal makeup and beauty atelier in Delhi NCR, India. This website serves as a flagship demonstration of **Nivora's** web development and conversion-engineering capabilities for high-end beauty, bridal, and lifestyle brands.

---

## 🌟 Visual Identity & Design System

- **Warm Ivory (`#FAF7F2`)**: Editorial warmth and generous, breathable whitespace.
- **Champagne Gold (`#C6A36A`)**: Refined luxury accents, badges, and focal points.
- **Muted Blush (`#E8D4D0`)**: Soft romantic undertones matching Indian bridal hues.
- **Deep Espresso (`#302622`)**: Grounding contrast, typography, and premium dark sections.
- **Editorial Typography**: *Cormorant Garamond* (headings) paired with *Plus Jakarta Sans* (clean modern UI).

---

## 🗺️ Complete Site Architecture & Routes

| Route | Page Name | Key Features |
|---|---|---|
| `/` | **Home Page** | Editorial Hero, Verified Trust Pillars, Featured Services, Lookbook, 3-Step Journey, Packages, Artist Bio, FAQs, Booking CTA |
| `/services` | **Services Overview** | Catalog of all 6 services with starting rates, durations, and custom group quotes |
| `/services/bridal-makeup` | **Bridal Makeup** | High-definition bridal artistry, prep advice, inclusions, exclusions, and FAQs |
| `/services/engagement-makeup`| **Engagement Makeup** | Pastel dewy glam for daylight ceremonies and ring rituals |
| `/services/reception-makeup` | **Reception Makeup** | High-impact evening glam with red-carpet wave styling and contouring |
| `/services/party-makeup` | **Party & Sangeet** | Camera-ready, sweat-resistant looks for sangeet nights and bridesmaids |
| `/services/pre-bridal` | **Pre-Bridal Skincare** | Botanical facials, jade roller lymphatic sculpting, and skin barrier prep |
| `/services/makeup-consultation`| **Consultation & Trial** | Atelier look mapping, outfit swatch review, and trial credit system |
| `/portfolio` | **Bridal Portfolio** | Interactive category filters (Bridal, Engagement, Reception, HD, Party) + Lightbox modal |
| `/packages` | **Packages & Pricing** | 3 Distinct tiers (Essential, Signature, Luxe) + Inclusions comparison matrix |
| `/book` | **Booking / Enquiry** | Full validated enquiry form + live formatted WhatsApp preview + copy tool |
| `/contact` | **Contact & Location** | Telephone, WhatsApp concierge, email, opening hours, Google Maps directions |
| `/about` | **About the Artist** | Ananya Sharma bio, makeup philosophy, hospital-grade kit hygiene standards |
| `/faq` | **Frequently Asked Questions**| Accessible accordion with FAQPage JSON-LD schema |
| `/blog` | **Beauty Journal** | Articles on 30-day bridal skin roadmaps, HD vs. Airbrush, and wedding trends |
| `/blog/[slug]` | **Article Detail Template** | Reading time, takeaways, table of contents, Article schema, WhatsApp share |
| `/privacy-policy` | **Privacy Policy** | Transparent disclosure of client privacy, WhatsApp P2P model, and data practices |
| `/terms` | **Terms & Conditions** | Date reservation deposits, rescheduling window, and destination travel rules |
| `/nivora-case-study` | **Nivora Case Study** | Architectural breakdown of design decisions, mobile-first UX, and agency pitch |
| `/*` | **Custom 404** | Branded error screen with quick navigation back to key pages |

---

## 📱 WhatsApp Conversion Engine

1. **Direct P2P Link**: Generates a standard `https://wa.me/CONFIGURED_NUMBER?text=...` URI.
2. **Pre-Formatted Message**: Organizes bride's name, wedding date, city, venue, and package into bullet points.
3. **No External CRM Required**: Runs zero client databases for instant setup without API fees.
4. **Live Message Preview**: Allows users to inspect and copy the formatted enquiry text before opening WhatsApp.
5. **Transparency Guidance**: Informs the user they must press "Send" in WhatsApp to dispatch the message.

---

## ⚙️ Central Business Configuration (`lib/config.ts`)

To customize the business details for a real client, update `lib/config.ts`:

```typescript
export const SITE_CONFIG = {
  businessName: "Aura Bridal Studio",
  tagline: "Your Bridal Look, Beautifully You",
  artistName: "Ananya Sharma",
  
  // WhatsApp & Phone (International format, no + or spaces for wa.me)
  whatsappNumber: "919876543210",
  whatsappDisplayNumber: "+91 98765 43210",
  phone: "+91 98765 43210",
  email: "concierge@aurabridalstudio.com",
  
  // Address & Hours
  city: "New Delhi",
  state: "Delhi NCR",
  address: "Studio 4B, The Heritage Promenade, Mehrauli Heritage Corridor, New Delhi 110030",
  businessHours: "Tuesday to Sunday: 09:30 AM – 07:30 PM IST",
  
  // Domain
  domain: "https://aurabridalstudio.com",
};
```

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

---

## 🔍 SEO & Structured Data Implementations

- **JSON-LD Schemas**:
  - `BeautySalon` (Studio coordinates, opening hours, pricing range, contact)
  - `Service` (On each service detail page with pricing and descriptions)
  - `BreadcrumbList` (On all subpages for Google rich snippets)
  - `FAQPage` (On FAQ page for accordion search results)
  - `Article` (On blog posts with author, date, and publisher info)
- **Automatic Sitemap**: Statically generated at `/sitemap.xml` via `app/sitemap.ts`.
- **Robots.txt**: Statically generated at `/robots.txt` via `app/robots.ts`.
- **OpenGraph & Twitter Cards**: High-resolution preview image cards for social sharing.

---

## 🛡️ Fictional Portfolio Disclaimer

*Aura Bridal Studio is a concept website created by Nivora to demonstrate high-converting, mobile-first web engineering for luxury beauty and bridal brands. All model imagery, pricing figures, and testimonials are illustrative samples.*
