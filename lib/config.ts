export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  duration: string;
  startingPrice: string;
  whoItIsFor: string[];
  inclusions: string[];
  exclusions: string[];
  prepAdvice: string[];
  faqs: { question: string; answer: string }[];
  relatedServices: string[];
}

export interface PricingPackage {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  price: string;
  priceUnit: string;
  description: string;
  features: string[];
  exclusions: string[];
  idealFor: string;
  popular?: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: "Bridal" | "Engagement" | "Reception" | "HD Makeup" | "Party Makeup";
  image: string;
  description: string;
  tag: string;
  artistNote: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "Bridal Makeup Tips" | "Wedding Preparation" | "Makeup Trends" | "Skincare Preparation" | "Makeup Guides";
  readTime: string;
  publishDate: string;
  author: {
    name: string;
    role: string;
  };
  coverImage: string;
  content: {
    heading: string;
    body: string[];
  }[];
  keyTakeaways: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  event: string;
  city: string;
  isIllustrativeSample: boolean;
}

export const SITE_CONFIG = {
  businessName: "Aura Bridal Studio",
  tagline: "Your Bridal Look, Beautifully You",
  shortDescription: "Luxury editorial bridal makeup, high-definition styling, and personalized consultations in Delhi NCR and destination weddings across India.",
  artistName: "Ananya Sharma",
  artistRole: "Lead Bridal Artist & Creative Director",
  artistBio: "With an eye for effortless Indian elegance and modern high-definition beauty, Ananya Sharma curates timeless, skin-first bridal looks designed to look breathtaking both in intimate wedding moments and under cinematic photography.",
  
  // Contact & Conversion Config
  whatsappNumber: "919876543210", // No '+', spaces or punctuation for wa.me
  whatsappDisplayNumber: "+91 98765 43210",
  phone: "+91 98765 43210",
  email: "concierge@aurabridalstudio.com",
  city: "New Delhi",
  state: "Delhi NCR",
  country: "India",
  address: "Studio 4B, The Heritage Promenade, Mehrauli Heritage Corridor, New Delhi 110030",
  landmark: "Near Qutub Minar Complex (By Prior Appointment Only)",
  serviceAreas: [
    "Delhi NCR (South Delhi, Gurgaon, Noida)",
    "Jaipur & Udaipur",
    "Goa & Alibaug",
    "Pan-India & International Destination Weddings"
  ],
  businessHours: "Tuesday to Sunday: 09:30 AM – 07:30 PM IST (Consultations by Prior Appointment)",
  
  // Pricing & Currency
  currency: "INR",
  currencySymbol: "₹",
  pricingDisclaimer: "Note: All displayed rates are illustrative demo estimates for consultation purposes. Final investment depends on event date, venue location, travel requirements, and customized look choices.",
  
  // Domain & Social
  domain: "https://aurabridalstudio.com",
  social: {
    instagram: "https://instagram.com/aurabridalstudio",
    pinterest: "https://pinterest.com/aurabridalstudio",
    youtube: "https://youtube.com/@aurabridalstudio",
    facebook: "https://facebook.com/aurabridalstudio"
  },
  
  // Announcement banner
  announcement: {
    enabled: true,
    text: "✨ Accepting Bridal Reservations for 2026–2027 Wedding Season. Limited prime weekend dates available for Delhi NCR & Destination Weddings.",
    ctaText: "Check Date Availability",
    ctaLink: "/book"
  },
  
  // Nivora Attribution & Meta
  nivora: {
    name: "Nivora",
    url: "https://nivora.agency",
    caseStudyUrl: "/nivora-case-study",
    creditText: "Website Concept & Architecture by Nivora",
    isFictionalDemoNotice: "Aura Bridal Studio is a bespoke concept website engineered by Nivora to demonstrate high-converting, mobile-first web design for luxury beauty, bridal, and lifestyle brands."
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "bridal-makeup",
    slug: "bridal-makeup",
    title: "Bridal Makeup",
    shortDescription: "Signature high-definition bridal artistry celebrating royal heritage with luminous, modern glass skin.",
    fullDescription: "Our flagship Bridal Makeup service is an intensive, personalized beauty ritual crafted for the contemporary bride. We harmonize traditional bridal splendor with lightweight, high-definition cosmetic techniques that withstand emotion, lighting shifts, and long ceremony hours without creasing or oxidizing.",
    heroImage: "/images/service_bridal.jpg",
    duration: "3.5 to 4 Hours",
    startingPrice: "₹35,000",
    whoItIsFor: [
      "Brides seeking timeless elegance rather than heavy, cakey makeup",
      "Traditional North Indian, South Indian, and modern fusion wedding ceremonies",
      "Brides wanting a personalized veil draping and jewelry coordination consultation"
    ],
    inclusions: [
      "HD / Airbrush luxury foundation application suited to your skin type",
      "High-definition eye makeup, custom flutter false lashes & brow sculpting",
      "Long-wear lip contouring and bridal touch-up kit",
      "Intricate bridal hair styling (textured bun, traditional braid, or soft cascading waves)",
      "Dupatta / Saree draping with secure pinning and jewelry placement",
      "Real flower attachment assistance and luxury fragrance misting"
    ],
    exclusions: [
      "Hair extensions purchase (rental or client-provided)",
      "Fresh floral procurement (must be provided by client/florist)",
      "Outstation travel & accommodation charges outside South Delhi"
    ],
    prepAdvice: [
      "Avoid new facial treatments or harsh chemical peels within 10 days of your wedding date",
      "Keep skin deeply hydrated and drink adequate water leading up to the ceremony",
      "Arrive with clean, freshly washed and blow-dried hair without oil or serum",
      "Wear a button-down or zip-up shirt for ease during dressing"
    ],
    faqs: [
      {
        question: "How long does bridal makeup take on the wedding day?",
        answer: "We recommend reserving 3.5 to 4 hours. This includes complete skin prep, makeup application, elaborate bridal hair styling, dupatta draping, and jewelry setting."
      },
      {
        question: "Do you travel to wedding venues or destination hotels?",
        answer: "Yes, our team travels across Delhi NCR, Rajasthan (Udaipur, Jaipur), Goa, and international destinations. Travel and logistics are calculated based on venue distance."
      },
      {
        question: "Will the makeup last through crying, pheras, and humidity?",
        answer: "Absolutely. We utilize moisture-barrier primers, sweat-resistant setting mists, and luxury waterproof formulas tested to endure warmth and emotional moments."
      }
    ],
    relatedServices: ["pre-bridal", "reception-makeup", "makeup-consultation"]
  },
  {
    id: "engagement-makeup",
    slug: "engagement-makeup",
    title: "Engagement Makeup",
    shortDescription: "Fresh, youthful, and luminous pastel glam designed for daytime rings ceremonies and golden hour celebrations.",
    fullDescription: "The engagement look is all about radiant romanticism. We emphasize glowing skin, soft blush hues, rose-gold undertones, and delicate eye shimmer that complements contemporary lehengas, pastel sarees, or gowns.",
    heroImage: "/images/service_engagement.jpg",
    duration: "2.5 to 3 Hours",
    startingPrice: "₹22,000",
    whoItIsFor: [
      "Ring ceremonies, roka celebrations, and sundowner engagement parties",
      "Brides wearing pastel pinks, lavenders, mint greens, or ivory gowns",
      "Those who prefer soft romantic waves and dewy glass-skin aesthetics"
    ],
    inclusions: [
      "Radiance-boosting pre-makeup hydration ritual",
      "Soft-focus HD makeup tailored for daylight and studio photography",
      "Custom subtle flutter lashes and delicate eyeliner sculpting",
      "Romantic hair design (half-up half-down curls, floral braids, or soft modern buns)",
      "Dupatta draping and accessory setting"
    ],
    exclusions: [
      "Heavy heavy multi-dupatta layering",
      "Hair extension cost (can be added separately)",
      "Early morning call-out charges before 7:00 AM"
    ],
    prepAdvice: [
      "Exfoliate lips gently 24 hours prior for smooth lipstick application",
      "Share your outfit color and jewelry design with us during pre-consultation"
    ],
    faqs: [
      {
        question: "Can I do a trial specifically for the engagement look?",
        answer: "Yes, consultation and preview sessions can be booked at our Mehrauli studio to finalize the look beforehand."
      },
      {
        question: "How does engagement makeup differ from bridal makeup?",
        answer: "Engagement makeup is slightly softer and more playful, prioritizing sheer luminosity and fresh tones over the high-contrast drama of traditional wedding pheras."
      }
    ],
    relatedServices: ["bridal-makeup", "party-makeup", "makeup-consultation"]
  },
  {
    id: "reception-makeup",
    slug: "reception-makeup",
    title: "Reception Makeup",
    shortDescription: "Red-carpet evening drama, sculpted contours, and sultry eyes designed for high-impact night events.",
    fullDescription: "Make a striking statement for your grand finale. Our Reception Makeup combines sculpted cheekbones, sultry smokey eyes or graphic winged liner, and opulent evening glamour that commands attention under glittering chandeliers.",
    heroImage: "/images/service_reception.jpg",
    duration: "2.5 to 3 Hours",
    startingPrice: "₹25,000",
    whoItIsFor: [
      "Grand evening wedding receptions, cocktail dinners, and black-tie galas",
      "Brides wearing metallic gowns, velvet lehengas, or modern architectural sarees",
      "Anyone wanting bold, sophisticated red-carpet evening glamour"
    ],
    inclusions: [
      "High-definition illuminated evening base with 16-hour sweat resistance",
      "Dimensional smokey or halo eye makeup with metallic foil pigments",
      "Dramatic 3D faux mink lashes and precision lip contouring",
      "Glamour hair styling (Hollywood red-carpet waves, structured high buns, or sleek ponytails)",
      "Jewelry fastening and gown/saree finishing"
    ],
    exclusions: [
      "Outfit steaming or ironing",
      "Hair coloring or permanent treatments"
    ],
    prepAdvice: [
      "Ensure skin is cleansed if transitioning from an earlier day event",
      "Bring along your reception necklace and earrings for proportion matching"
    ],
    faqs: [
      {
        question: "If I already booked bridal makeup for the morning, can you do my reception look too?",
        answer: "Yes, we offer comprehensive Same-Day Bridal & Reception packages with on-site touch-ups and look changes."
      }
    ],
    relatedServices: ["bridal-makeup", "party-makeup", "pre-bridal"]
  },
  {
    id: "party-makeup",
    slug: "party-makeup",
    title: "Party & Sangeet Makeup",
    shortDescription: "Chic, trend-forward beauty for sangeet nights, bridesmaids, mother of the bride, and party attendees.",
    fullDescription: "Designed for the bride's closest circle and dynamic sangeet dance celebrations. We create camera-ready, sweat-proof looks that stay flawless through hours of dancing and celebration.",
    heroImage: "/images/service_party.jpg",
    duration: "1.5 to 2 Hours",
    startingPrice: "₹12,000",
    whoItIsFor: [
      "Sangeet & cocktail night attendees ready to dance the night away",
      "Bridesmaids, sisters of the bride/groom, and mothers of the couple",
      "Guests attending high-profile festive parties and milestone anniversaries"
    ],
    inclusions: [
      "Full HD party makeup application with skin prep",
      "Eye styling with complementary shimmer and standard party lashes",
      "Hair styling (curls, textured blowouts, or neat updos)",
      "Saree or lehenga dupatta draping"
    ],
    exclusions: [
      "Bridal accessories (kaliras, heavy maang tikka pinning)",
      "Multiple outfit changes"
    ],
    prepAdvice: [
      "Hair should be 100% dry and free of dampness upon arrival"
    ],
    faqs: [
      {
        question: "Do you offer group discounts for multiple bridesmaids?",
        answer: "Yes! For bookings of 4 or more party makeup services at the same venue, we offer preferential group packages."
      }
    ],
    relatedServices: ["engagement-makeup", "reception-makeup", "bridal-makeup"]
  },
  {
    id: "pre-bridal",
    slug: "pre-bridal",
    title: "Pre-Bridal Skincare & Prep",
    shortDescription: "Curated aesthetic rituals, botanical facials, and deep skin conditioning for a natural bridal glow.",
    fullDescription: "Great makeup begins with healthy skin. Our Pre-Bridal treatments combine gentle skin resurfacing, lymph-drainage facial massages, deep hydration masks, and expert lifestyle recommendations to ensure your skin is in peak condition weeks before your wedding.",
    heroImage: "/images/service_prebridal.jpg",
    duration: "Series of 3–5 Sessions (4–8 Weeks Before)",
    startingPrice: "₹18,000",
    whoItIsFor: [
      "Brides looking to address dullness, dehydration, or uneven skin texture",
      "Those wanting a systematic skin prep calendar leading to wedding week",
      "Brides seeking holistic relaxation and pampering away from wedding planning stress"
    ],
    inclusions: [
      "In-depth skin barrier analysis and consultation",
      "Targeted gentle enzyme exfoliation & botanical infusions",
      "Gua sha and jade roller facial sculpting massage",
      "Custom collagen-infused hydrogel and 24K gold masks",
      "Personalized at-home skincare roadmap"
    ],
    exclusions: [
      "Prescription dermatological treatments or chemical resurfacing",
      "Permanent laser procedures"
    ],
    prepAdvice: [
      "Schedule your final session at least 5 to 7 days before the first wedding function"
    ],
    faqs: [
      {
        question: "When should I begin pre-bridal skincare sessions?",
        answer: "Ideally 6 to 8 weeks prior to your wedding day for the most visible and lasting skin radiance."
      }
    ],
    relatedServices: ["bridal-makeup", "makeup-consultation"]
  },
  {
    id: "makeup-consultation",
    slug: "makeup-consultation",
    title: "Makeup Consultation & Look Preview",
    shortDescription: "One-on-one atelier session to map out your outfits, skin tone palette, and bridal mood board.",
    fullDescription: "Eliminate wedding-day uncertainty. In our private Mehrauli studio consultation, we review your wedding outfits, jewelry, lighting conditions, and skin preferences to design a harmonious look bible before your big day.",
    heroImage: "/images/service_consultation.jpg",
    duration: "90 Minutes",
    startingPrice: "₹5,000 (Adjustable against bridal package)",
    whoItIsFor: [
      "Brides wanting peace of mind and personalized look design before confirming dates",
      "Brides with sensitive or allergy-prone skin requiring patch testing",
      "Destination brides wanting to finalize hairstyles and draping styles in advance"
    ],
    inclusions: [
      "Comprehensive skin tone matching and undertone analysis",
      "Outfit swatch and jewelry mood board review",
      "Partial makeup trial (eye look options, lip shade swatching, base texture test)",
      "Digital bridal beauty timeline and prep guide"
    ],
    exclusions: [
      "Full 4-hour duplicate hair and makeup replicate (available as a premium trial add-on)"
    ],
    prepAdvice: [
      "Bring photos of your wedding attire, jewelry, and hair inspirations"
    ],
    faqs: [
      {
        question: "Is the consultation fee deductible from my bridal booking?",
        answer: "Yes, when you book our Signature or Luxe Bridal package, the consultation fee is credited toward your final booking balance."
      }
    ],
    relatedServices: ["bridal-makeup", "pre-bridal"]
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: "essential-bride",
    name: "Essential Bride",
    badge: "Classic Elegance",
    tagline: "Refined HD makeup and timeless hair design for the minimalist bride.",
    price: "35,000",
    priceUnit: "per bridal function",
    description: "Ideal for intimate ceremonies, morning weddings, or brides who appreciate subtle, understated luxury.",
    features: [
      "Signature High-Definition Bridal Makeup",
      "Skin barrier prep & hydration massage",
      "Custom lash design & brow refinement",
      "Classic bridal hair styling (textured bun or braid)",
      "Dupatta / Saree draping with secure pinning",
      "Jewelry setting & floral accessory placement",
      "Complimentary touch-up kit (mini powder & lip color)"
    ],
    exclusions: [
      "Hair extensions purchase (rental available)",
      "Outstation travel & lodging"
    ],
    idealFor: "Intimate weddings, temple ceremonies, and morning pheras",
    popular: false
  },
  {
    id: "signature-bride",
    name: "Signature Bride",
    badge: "Most Requested",
    tagline: "Complete luxury transformation with Airbrush HD finish and consultation.",
    price: "55,000",
    priceUnit: "per bridal function",
    description: "Our signature experience ensuring total radiant perfection from daytime pheras to night celebrations.",
    features: [
      "Ultra-Luxe Airbrush or HD Bridal Makeup by Lead Artist Ananya Sharma",
      "Complimentary 60-min Studio Look Consultation & Shade Matching",
      "Deluxe 3D Mink Lashes & 24K Gold hydrating eye masks",
      "Couture hair styling with imported styling texturizers",
      "Double dupatta draping & complex veil placement",
      "Complete bridal party touch-up assistant present until portrait shoot",
      "Luxury bridal emergency kit with full-size bespoke lip shade"
    ],
    exclusions: [
      "Second look change after 4 hours (available as add-on)"
    ],
    idealFor: "Grand palace weddings, hotel ballroom ceremonies, and luxury brides",
    popular: true
  },
  {
    id: "luxe-bridal-experience",
    name: "Luxe Bridal Experience",
    badge: "The Royal Suite",
    tagline: "Two full wedding functions, on-site artist accompaniment, and VIP pampering.",
    price: "85,000",
    priceUnit: "two wedding functions",
    description: "The ultimate couture experience covering both your Wedding & Reception or Sangeet & Pheras with dedicated artist attention.",
    features: [
      "Two Complete Bespoke Transformations (e.g. Wedding + Grand Reception)",
      "Complete Look Trial & Skin Prep Roadmap at our Mehrauli Studio",
      "Senior artist & styling assistant exclusively dedicated to the bride",
      "Seamless midday look change and hair restyling between ceremonies",
      "Luxury Pre-Bridal botanical glow facial session included",
      "Full hair extensions rental included",
      "Complimentary Party Makeup service for Mother of the Bride"
    ],
    exclusions: [
      "Airfare and five-star lodging for outstation destinations"
    ],
    idealFor: "Multi-day destination weddings, luxury royal celebrations, and discerning brides",
    popular: false
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "port-1",
    title: "Royal Heritage Crimson",
    category: "Bridal",
    image: "/images/service_bridal.jpg",
    description: "High-definition velvet base paired with heirloom kundan jewels and a timeless crimson lehenga veil.",
    tag: "North Indian Wedding",
    artistNote: "Focused on an ultra-smooth velvety finish that stays matte under studio halogen lights yet glows in candid photography."
  },
  {
    id: "port-2",
    title: "Golden Hour Glow",
    category: "Bridal",
    image: "/images/hero_bride.jpg",
    description: "Sun-kissed champagne undertones with delicate winged liner and soft blush for a royal Mehrauli terrace ceremony.",
    tag: "Signature Bridal",
    artistNote: "Balanced warm bronze tones with a dewy cheekbone highlight to capture the magic of sunset vows."
  },
  {
    id: "port-3",
    title: "Pastel Dreamscape",
    category: "Engagement",
    image: "/images/service_engagement.jpg",
    description: "Soft rose-tinted dewy complexion, textured waves, and baby's breath floral styling for a garden engagement.",
    tag: "Daytime Engagement",
    artistNote: "Created glass-skin transparency using sheer serum foundation and cream blushes."
  },
  {
    id: "port-4",
    title: "Midnight Starlight",
    category: "Reception",
    image: "/images/service_reception.jpg",
    description: "Architectural metallic gown paired with sultry smokey eyes, sculpted contours, and Hollywood gloss waves.",
    tag: "Evening Reception",
    artistNote: "Deep charcoal smokey eye softened with champagne inner-corner pigments for high-octane evening sparkle."
  },
  {
    id: "port-5",
    title: "Emerald Festive Radiance",
    category: "Party Makeup",
    image: "/images/service_party.jpg",
    description: "Luminous skin and statement emerald accents for an unforgettable sangeet dance night.",
    tag: "Sangeet Glam",
    artistNote: "Used long-wear waterproof fixing spray to withstand hours of vigorous sangeet choreography."
  },
  {
    id: "port-6",
    title: "Pre-Bridal Botanical Radiance",
    category: "HD Makeup",
    image: "/images/service_prebridal.jpg",
    description: "Skin preparation facial ritual infusing 24K gold serum and pure botanical oils.",
    tag: "Skin First",
    artistNote: "Prepping the skin's moisture barrier weeks prior ensures that wedding day makeup sits like a dream."
  },
  {
    id: "port-7",
    title: "The Atelier Consultation",
    category: "HD Makeup",
    image: "/images/service_consultation.jpg",
    description: "Collaborative bridal consultation mapping fabric textures and makeup tones.",
    tag: "Bespoke Styling",
    artistNote: "Aligning makeup hues with the undertones of the bride's jewellery and lehenga embroidery."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-prep-skin-for-bridal-makeup",
    title: "The 30-Day Bridal Skincare Roadmap: How to Achieve Luminous Glass Skin",
    excerpt: "Discover the exact timeline professional makeup artists recommend to hydrate, smooth, and prime your skin before the wedding week.",
    category: "Skincare Preparation",
    readTime: "5 min read",
    publishDate: "October 14, 2026",
    author: {
      name: "Ananya Sharma",
      role: "Lead Bridal Artist"
    },
    coverImage: "/images/service_prebridal.jpg",
    keyTakeaways: [
      "Avoid trying unfamiliar active ingredients or chemical peels less than 3 weeks prior",
      "Hydration layering (toner + hyaluronic serum + ceramide cream) creates makeup grip",
      "Regular lip exfoliation prevents feathering of matte bridal lipsticks"
    ],
    content: [
      {
        heading: "1. The 4-Week Countdown: Focus on Moisture Barrier Health",
        body: [
          "Every bride dreams of makeup that looks like skin—not a mask. However, even the most luxurious high-definition foundation cannot glide over dehydrated, flaky patches. In the month leading up to your wedding, strip back overly harsh scrubs and focus on replenishing your skin barrier.",
          "Introduce a gentle ceramide or peptide moisturizer and drink at least 2.5 liters of water daily. Consistent hydration plumps the epidermis from within, creating a smooth canvas that requires significantly less base product."
        ]
      },
      {
        heading: "2. The Golden Rule of Pre-Wedding Treatments",
        body: [
          "Never schedule your very first laser treatment, dermaplaning, or deep chemical peel within 14 days of your wedding ceremony. Any unexpected purging, redness, or sensitivity takes time to heal.",
          "Stick to proven, soothing botanical facials, gentle enzyme exfoliation, and relaxing lymph-drainage massages."
        ]
      },
      {
        heading: "3. Day-Of Preparation: Clean, Balanced Canvas",
        body: [
          "On your wedding morning, cleanse your face with a gentle gel or milk cleanser. Apply your standard lightweight moisturizer and avoid applying sunscreen with heavy white casts or facial oils right before your artist arrives, as these can interfere with foundation adherence."
        ]
      }
    ]
  },
  {
    slug: "hd-vs-airbrush-bridal-makeup-guide",
    title: "HD vs. Airbrush Bridal Makeup: Which One is Right for You?",
    excerpt: "A comprehensive breakdown of High Definition vs. Airbrush cosmetics for Indian weddings, climate considerations, and skin types.",
    category: "Makeup Guides",
    readTime: "6 min read",
    publishDate: "September 28, 2026",
    author: {
      name: "Ananya Sharma",
      role: "Lead Bridal Artist"
    },
    coverImage: "/images/service_bridal.jpg",
    keyTakeaways: [
      "Airbrush is ideal for humid outdoor ceremonies and oily or combination skin",
      "HD makeup offers superior precision for dry to normal skin and intense close-up portraits",
      "Both techniques provide 14+ hours of sweat-resistant longevity when applied expertly"
    ],
    content: [
      {
        heading: "Understanding the Technology Behind High-Definition (HD) Makeup",
        body: [
          "HD makeup relies on micro-fine cosmetic pigments with light-diffusing silicones and quartz micro-spheres. These ingredients bend and scatter light, effectively blurring pores and imperfections without adding noticeable physical texture.",
          "For brides with normal, dry, or textured skin, HD makeup is versatile because the artist retains tactile control over brush and sponge pressure, allowing customized coverage where needed."
        ]
      },
      {
        heading: "When Does Airbrush Reign Supreme?",
        body: [
          "Airbrush makeup is applied using a micro-compressor and specialized silicone or water-based liquid foundation. It is misted as microscopic droplets onto the face without touching the skin.",
          "For humid monsoon weddings, destination beach venues in Goa, or brides with oily skin prone to melting, airbrush formula sets into a resilient, transfer-resistant micro-film that holds up under tears and warm lights."
        ]
      }
    ]
  },
  {
    slug: "timeless-bridal-makeup-trends-2026",
    title: "5 Indian Bridal Makeup Trends Defining the 2026–2027 Wedding Season",
    excerpt: "From skin-tint bases to muted rosewood lips, explore how modern brides are balancing traditional royalty with understated minimalism.",
    category: "Bridal Makeup Tips",
    readTime: "4 min read",
    publishDate: "September 10, 2026",
    author: {
      name: "Ananya Sharma",
      role: "Lead Bridal Artist"
    },
    coverImage: "/images/hero_bride.jpg",
    keyTakeaways: [
      "Heavy matte baking has been replaced by soft-matte 'cloud skin'",
      "Rosewood, terracotta, and toasted caramel are the trending bridal lip hues",
      "Graphic liners are transitioning to smoked-out, feathered lash lines"
    ],
    content: [
      {
        heading: "1. The Rise of 'Cloud Skin'",
        body: [
          "Neither overly shiny like glass skin nor flat like 2016 ultra-matte, 'cloud skin' represents the perfect middle ground. It delivers a soft-focus, velvet-lit glow from within, ensuring the bride looks radiant in person and avoids flashback shine in flash photography."
        ]
      },
      {
        heading: "2. Monochromatic Rose & Cinnamon Palettes",
        body: [
          "Brides are harmonizing their cheek flush, eyeshadow transition, and lip color in complementary rosewood and cinnamon tones, allowing elaborate lehengas and heirloom kundan jewelry to take center stage."
        ]
      }
    ]
  }
];

export const FAQS_DATA = [
  {
    id: "faq-1",
    category: "Booking & Availability",
    question: "How far in advance should I reserve my wedding date?",
    answer: "We recommend securing your wedding date 4 to 8 months in advance, particularly for peak wedding months (October through March) and auspicious weekend dates. We take only one bride per ceremony to guarantee dedicated, unhurried attention."
  },
  {
    id: "faq-2",
    category: "Booking & Availability",
    question: "How do I enquire and confirm my booking?",
    answer: "You can enquire directly through our website via the WhatsApp Booking tool or consultation form. Share your wedding date, venue location, and event timing. If our calendar is open, we send a formal proposal. Bookings are confirmed upon receipt of a date-reservation advance."
  },
  {
    id: "faq-3",
    category: "Services & Inclusions",
    question: "What is included in the bridal makeup package?",
    answer: "All bridal packages include skin preparation, luxury HD or Airbrush makeup, 3D false eyelashes, eyebrow grooming, elaborate bridal hair styling, dupatta draping, jewelry placement, and a touch-up kit. Fresh floral flowers and custom extensions are provided by the client or arranged as an add-on."
  },
  {
    id: "faq-4",
    category: "Services & Inclusions",
    question: "Do you offer makeup trials before booking?",
    answer: "Yes, we offer one-on-one Makeup Consultation & Trial sessions at our Mehrauli Studio. During this 90-minute session, we analyze your skin, discuss your outfit embroidery, test base shades, and design eye styles. The trial fee is credited toward your package when booking Signature or Luxe tiers."
  },
  {
    id: "faq-5",
    category: "Travel & Logistics",
    question: "Do you travel outside Delhi NCR for destination weddings?",
    answer: "Yes, our team frequently travels for destination weddings in Udaipur, Jaipur, Jodhpur, Goa, Mussoorie, and international locations. For outstation assignments, round-trip travel, airport transfers, and hotel lodging for the artist and assistant are covered by the client."
  },
  {
    id: "faq-6",
    category: "Hygiene & Products",
    question: "What cosmetics brands do you use in your kit?",
    answer: "We curate our kit exclusively from prestige and pro cosmetic brands including Charlotte Tilbury, NARS, Dior Backstage, MAC Cosmetics, Huda Beauty, Bobbi Brown, Laura Mercier, and Kryolan HD. All brushes and beauty tools are sterilized between appointments with hospital-grade sanitizers."
  },
  {
    id: "faq-7",
    category: "Policies & Rescheduling",
    question: "What is your cancellation or date-change policy?",
    answer: "In the event of an unforeseen date change, advance payments may be transferred to a new date subject to calendar availability. Full terms, cancellation windows, and force majeure provisions are clearly detailed in your written confirmation agreement."
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    quote: "Ananya understood exactly what I meant by 'effortless royalty'. The makeup stayed immaculate from our 10 AM pheras through our sunset photo shoot without feeling heavy for a single second.",
    clientName: "Meher Kapoor",
    event: "Signature Bridal Look",
    city: "The Leela Palace, New Delhi",
    isIllustrativeSample: true
  },
  {
    id: "test-2",
    quote: "As someone who rarely wears makeup, I was nervous about looking unrecognizable. Aura Bridal created a dewy, glowing skin look that felt authentically me. My family couldn't stop praising how fresh I looked.",
    clientName: "Dr. Radhika Sen",
    event: "Engagement & Reception",
    city: "Taj Lake Palace, Udaipur",
    isIllustrativeSample: true
  },
  {
    id: "test-3",
    quote: "The draping and hair styling were architectural masterpieces. Not a single pin moved during four hours of energetic dancing. Truly the gold standard of bridal beauty.",
    clientName: "Simran Duggal",
    event: "Luxe Bridal Experience",
    city: "ITC Grand Bharat, Gurgaon",
    isIllustrativeSample: true
  }
];
