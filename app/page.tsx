import Link from "next/link";
import Image from "next/image";
import {
  SITE_CONFIG,
  SERVICES_DATA,
  PRICING_PACKAGES,
  PORTFOLIO_ITEMS,
  FAQS_DATA,
  TESTIMONIALS_DATA,
} from "@/lib/config";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import PackageCard from "@/components/PackageCard";
import FaqAccordion from "@/components/FaqAccordion";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  HeartHandshake,
  MapPin,
  Calendar,
  MessageCircle,
  Clock,
  CheckCircle2,
  Crown,
} from "lucide-react";
import { generateQuickWhatsAppUrl } from "@/lib/whatsapp";

export default function HomePage() {
  const heroWhatsAppUrl = generateQuickWhatsAppUrl("Bridal Makeup Reservation for 2026-2027 Season");

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* 01. HERO SECTION */}
      <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center bg-[#FAF7F2] overflow-hidden pt-4 sm:pt-6 pb-12 sm:pb-16 lg:py-20">
        {/* Luxury Background ambient lights */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#E8D4D0]/40 via-[#DFCAA0]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-gradient-to-tr from-[#C6A36A]/20 via-[#FAF7F2] to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Hero Text Column */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-7 text-center lg:text-left">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/95 border border-[#C6A36A]/50 text-[#8C662D] text-[10px] sm:text-xs font-semibold tracking-[0.16em] sm:tracking-[0.22em] uppercase shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#C6A36A] animate-pulse flex-shrink-0" />
                <span>Atelier of Modern Bridal Beauty</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A36A] flex-shrink-0" />
                <span className="text-[10px] text-[#A47F46] font-medium">New Delhi</span>
              </div>

              {/* High Fashion Editorial Headline */}
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-[#302622] leading-[1.12] sm:leading-[1.08] tracking-tight">
                Your Bridal Look, <br className="hidden sm:inline" />
                <span className="italic font-normal text-gold-gradient block sm:inline mt-1 sm:mt-0">
                  Beautifully You.
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-neutral-600 font-light max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Step into your wedding day with confidence. We harmonize royal Indian heritage with modern, skin-first artistry—creating looks that stay luminous from daytime pheras to midnight celebrations.
              </p>

              {/* Luxury CTAs */}
              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
                <a
                  href={heroWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full sm:w-auto rounded-full px-6 py-3.5 text-xs sm:text-[13px] font-bold tracking-[0.16em] uppercase flex items-center justify-center gap-2 shadow-[0_6px_25px_rgba(198,163,106,0.35)]"
                >
                  <MessageCircle className="w-4 h-4 fill-[#1E1715] text-[#1E1715]" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <Link
                  href="/portfolio"
                  className="btn-outline-gold w-full sm:w-auto rounded-full px-6 py-3.5 text-xs sm:text-[13px] font-semibold tracking-[0.16em] uppercase flex items-center justify-center gap-2 group bg-white hover:bg-[#FAF7F2] border border-[#C6A36A]/50"
                >
                  <span>Explore Portfolio</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#C6A36A]" />
                </Link>
              </div>

              {/* Verified Trust Strip */}
              <div className="pt-6 border-t border-[#E6DCD1]/80 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-left">
                <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-1 p-2 sm:p-0 rounded-lg sm:rounded-none bg-white/50 sm:bg-transparent border border-[#E6DCD1]/60 sm:border-0">
                  <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#C6A36A]/40 flex items-center justify-center text-[#A47F46] flex-shrink-0 sm:hidden">
                    <Crown className="w-4 h-4 text-[#C6A36A]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase tracking-widest text-[#A47F46] font-semibold hidden sm:flex items-center gap-1 mb-0.5">
                      <Crown className="w-3 h-3 text-[#C6A36A]" />
                      Exclusivity
                    </span>
                    <span className="block text-xs sm:text-sm font-serif font-medium text-[#302622]">
                      1 Bride Per Ceremony
                    </span>
                    <span className="text-[11px] text-neutral-500 font-light block truncate">
                      Undivided artist attention
                    </span>
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-1 p-2 sm:p-0 rounded-lg sm:rounded-none bg-white/50 sm:bg-transparent border border-[#E6DCD1]/60 sm:border-0">
                  <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#C6A36A]/40 flex items-center justify-center text-[#A47F46] flex-shrink-0 sm:hidden">
                    <Sparkles className="w-4 h-4 text-[#C6A36A]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase tracking-widest text-[#A47F46] font-semibold hidden sm:flex items-center gap-1 mb-0.5">
                      <Sparkles className="w-3 h-3 text-[#C6A36A]" />
                      Cosmetics
                    </span>
                    <span className="block text-xs sm:text-sm font-serif font-medium text-[#302622]">
                      Prestige Products
                    </span>
                    <span className="text-[11px] text-neutral-500 font-light block truncate">
                      Charlotte Tilbury, NARS, Dior
                    </span>
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-1 p-2 sm:p-0 rounded-lg sm:rounded-none bg-white/50 sm:bg-transparent border border-[#E6DCD1]/60 sm:border-0">
                  <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#C6A36A]/40 flex items-center justify-center text-[#A47F46] flex-shrink-0 sm:hidden">
                    <MapPin className="w-4 h-4 text-[#C6A36A]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase tracking-widest text-[#A47F46] font-semibold hidden sm:flex items-center gap-1 mb-0.5">
                      <MapPin className="w-3 h-3 text-[#C6A36A]" />
                      Coverage
                    </span>
                    <span className="block text-xs sm:text-sm font-serif font-medium text-[#302622]">
                      Pan-India Travel
                    </span>
                    <span className="text-[11px] text-neutral-500 font-light block truncate">
                      Delhi NCR & Destinations
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Image Column with Gold Halo Frame */}
            <div className="lg:col-span-5 relative mt-4 lg:mt-0">
              <div className="relative max-w-sm sm:max-w-md mx-auto group">
                {/* Ambient Backlight Glow */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#C6A36A]/25 via-[#E8D4D0]/30 to-[#DFCAA0]/20 rounded-3xl blur-2xl -z-10 group-hover:scale-105 transition-transform duration-700" />

                {/* Outer Gold Hairline Border Frame */}
                <div className="p-2 sm:p-3 bg-gradient-to-b from-white/95 to-[#FAF7F2]/95 backdrop-blur-md border border-[#C6A36A]/50 rounded-2xl sm:rounded-3xl shadow-[0_20px_50px_rgba(48,38,34,0.12)]">
                  <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden border border-[#E6DCD1]">
                    <Image
                      src="/images/hero_bride.jpg"
                      alt="Aura Bridal Studio Signature Look by Ananya Sharma"
                      fill
                      priority
                      sizes="(max-width: 1024px) 90vw, 40vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Studio Badge: Top-Left */}
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 bg-white/95 backdrop-blur-md px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full border border-[#C6A36A]/40 shadow-lg flex items-center gap-1.5 sm:gap-2">
                      <Award className="w-3.5 h-3.5 text-[#C6A36A] flex-shrink-0" />
                      <span className="text-[10px] sm:text-xs font-serif font-medium text-[#302622] tracking-wide whitespace-nowrap">
                        Mehrauli Studio & On-Location
                      </span>
                    </div>

                    {/* Verified Bride Count: Bottom-Right */}
                    <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 bg-white/95 backdrop-blur-md px-2.5 sm:px-3 py-1.5 rounded-full border border-[#C6A36A]/40 shadow-md flex items-center gap-1.5 text-[#302622]">
                      <Sparkles className="w-3 h-3 text-[#C6A36A] flex-shrink-0" />
                      <span className="text-[10px] font-serif font-semibold">★ 4.98 (350+ Brides)</span>
                    </div>

                    {/* Limited Availability Indicator: Bottom-Left */}
                    <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20 bg-[#1E1715]/85 backdrop-blur-md px-2.5 sm:px-3 py-1.5 rounded-full border border-white/20 text-[#FAF7F2] flex items-center gap-1.5 shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                      <span className="text-[9px] sm:text-[10px] font-medium tracking-wide uppercase">Limited Dates</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. VERIFIED SERVICE BENEFITS / TRUST PILLARS */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#E6DCD1] p-5 sm:p-8 lg:p-12 rounded-2xl shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#FAF7F2] rounded-full blur-2xl -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#C6A36A]/40 flex items-center justify-center text-[#A47F46] shadow-xs">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg text-[#302622] font-medium">
                Hospital-Grade Hygiene
              </h3>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                Every brush, spatula, and sponge is sterilized between clients. We never double-dip creams or lip shades.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#C6A36A]/40 flex items-center justify-center text-[#A47F46] shadow-xs">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg text-[#302622] font-medium">
                16-Hour Tear Resistance
              </h3>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                Multi-layer moisture barrier primers keep makeup flawless through humidity, emotion, and warm ceremonial fires.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#C6A36A]/40 flex items-center justify-center text-[#A47F46] shadow-xs">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg text-[#302622] font-medium">
                Skin-First Philosophy
              </h3>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                We believe makeup should enhance your unique features, not mask your natural beauty with heavy layers.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#C6A36A]/40 flex items-center justify-center text-[#A47F46] shadow-xs">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg text-[#302622] font-medium">
                Seamless On-Site Travel
              </h3>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                Relax in your bridal suite. We arrive fully equipped with professional studio lighting and vanity setups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03. FEATURED SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Curated Artistry"
          title="Bridal & Event Beauty Services"
          subtitle="Explore tailored makeup transformations designed for every ceremonial milestone, from intimate roka rituals to grand wedding celebrations."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.slice(0, 3).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/services" className="btn-outline-gold group">
            <span>View All 6 Studio Services</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* 04. BRIDAL PORTFOLIO PREVIEW */}
      <section className="bg-[#FAF7F2] border-y border-[#E6DCD1] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#A47F46] flex items-center gap-1.5 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                The Gallery
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#302622] font-light">
                Recent Bridal Looks & Transformations
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#A47F46] hover:text-[#302622] transition-colors"
            >
              <span>Explore Complete Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Grid Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PORTFOLIO_ITEMS.slice(0, 4).map((item) => (
              <Link
                key={item.id}
                href="/portfolio"
                className="group relative aspect-[3/4] rounded-sm overflow-hidden shadow-sm border border-[#E6DCD1]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-[#DFCAA0] block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-base font-normal">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 05. THREE-STEP BOOKING JOURNEY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Experience"
          title="Your Journey to Wedding Day Radiance"
          subtitle="A smooth, transparent, stress-free consultation process designed around your schedule."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="bg-white p-8 rounded-sm border border-[#E6DCD1] relative shadow-xs hover:border-[#C6A36A] transition-colors">
            <span className="font-serif text-5xl font-light text-[#C6A36A]/40 block mb-4">
              01
            </span>
            <h3 className="font-serif text-xl text-[#302622] font-medium mb-2">
              Share Your Date & Event
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
              Use our simple WhatsApp enquiry system to share your wedding date, event timings, and venue location to confirm calendar availability.
            </p>
          </div>

          <div className="bg-white p-8 rounded-sm border border-[#E6DCD1] relative shadow-xs hover:border-[#C6A36A] transition-colors">
            <span className="font-serif text-5xl font-light text-[#C6A36A]/40 block mb-4">
              02
            </span>
            <h3 className="font-serif text-xl text-[#302622] font-medium mb-2">
              Bespoke Look Consultation
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
              We review your lehenga swatches, jewelry, lighting, and skin preferences in a dedicated atelier consultation to design your personalized beauty bible.
            </p>
          </div>

          <div className="bg-white p-8 rounded-sm border border-[#E6DCD1] relative shadow-xs hover:border-[#C6A36A] transition-colors">
            <span className="font-serif text-5xl font-light text-[#C6A36A]/40 block mb-4">
              03
            </span>
            <h3 className="font-serif text-xl text-[#302622] font-medium mb-2">
              Lock Your Date & Relax
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
              Confirm your booking with formal terms. Receive your customized pre-bridal skin roadmap and let us handle your wedding day transformation.
            </p>
          </div>
        </div>
      </section>

      {/* 06. PACKAGES PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Investments"
          title="Bridal Beauty Packages"
          subtitle="Three distinct luxury tiers tailored for morning pheras, grand evening receptions, and multi-day destination celebrations."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PACKAGES.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-neutral-500 font-light italic max-w-2xl mx-auto">
            {SITE_CONFIG.pricingDisclaimer}
          </p>
        </div>
      </section>

      {/* 07. ABOUT THE ARTIST PREVIEW */}
      <section className="bg-white border-y border-[#E6DCD1] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="p-3 bg-[#FAF7F2] border border-[#C6A36A]/40 rounded-sm shadow-xl">
                <div className="relative aspect-[4/5] rounded-xs overflow-hidden border border-[#E6DCD1]">
                  <Image
                    src="/images/artist_portrait.jpg"
                    alt={`Lead Artist ${SITE_CONFIG.artistName}`}
                    fill
                    sizes="(max-width: 1024px) 90vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#A47F46] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                The Artist Behind The Looks
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#302622] font-light">
                Meet Ananya Sharma
              </h2>

              <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
                {SITE_CONFIG.artistBio}
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C6A36A] flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-neutral-700">
                    <strong>Trained in London & Mumbai:</strong> Masterclasses in contemporary HD bridal base prep and editorial hair contouring.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C6A36A] flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-neutral-700">
                    <strong>Tailored to Your Personality:</strong> No cookie-cutter bridal templates—each bride receives a custom swatch session.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link href="/about" className="btn-espresso group">
                  <span>Read Full Philosophy</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link href="/book" className="btn-gold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Book Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 08. BRIDAL BEAUTY GUIDANCE & PREPARATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1E1715] text-[#FAF7F2] rounded-sm p-8 sm:p-14 relative overflow-hidden border border-[#C6A36A]/40 shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C6A36A]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl relative z-10 space-y-4">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#DFCAA0] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A36A]" />
              Bridal Beauty Guidance
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-white">
              Preparing for Your Big Day
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
              Explore our curated bridal journal for professional advice on wedding week skincare, tear-proof eye makeup, and veil draping secrets.
            </p>
            <div className="pt-4">
              <Link href="/blog" className="btn-gold group">
                <span>Read Beauty Journal</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 09. TESTIMONIALS (LABELLED ILLUSTRATIVE SAMPLE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Bride Reflections"
          title="What Our Brides Say"
          subtitle="Experiences and reflections from brides across royal heritage venues and intimate celebrations."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-[#E6DCD1] p-8 rounded-sm shadow-xs flex flex-col justify-between hover:border-[#C6A36A]/60 transition-colors"
            >
              <div className="space-y-4">
                <span className="font-serif text-4xl text-[#C6A36A] leading-none block">
                  &ldquo;
                </span>
                <p className="text-xs sm:text-sm text-neutral-700 font-light leading-relaxed italic">
                  {t.quote}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E6DCD1]/60">
                <span className="font-serif text-base text-[#302622] font-medium block">
                  {t.clientName}
                </span>
                <span className="text-[11px] text-[#A47F46] font-medium block">
                  {t.event}
                </span>
                <span className="text-[10px] text-neutral-400 block mt-0.5">
                  {t.city}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <span className="text-[10px] text-neutral-400 italic">
            * Sample illustrative testimonials formatted for concept demo purposes.
          </span>
        </div>
      </section>

      {/* 10. FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Clarity & Policies"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about bridal booking timelines, trials, and on-location travel."
        />

        <div className="mt-12">
          <FaqAccordion items={FAQS_DATA.slice(0, 5)} />
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="text-xs font-semibold tracking-wider uppercase text-[#A47F46] hover:text-[#302622] transition-colors"
          >
            Have More Questions? View All FAQs →
          </Link>
        </div>
      </section>

      {/* 11. PREMIUM FINAL BOOKING CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] border-2 border-[#C6A36A]/60 rounded-sm p-8 sm:p-16 text-center relative overflow-hidden shadow-xl">
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#A47F46] flex items-center justify-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A36A]" />
              Limited Dates Available
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#302622] leading-tight">
              Begin Your Bridal Look Journey Today
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
              We accept only one bridal reservation per ceremony to guarantee undivided attention. Check availability for your wedding date in seconds.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/book" className="btn-gold w-full sm:w-auto">
                <Calendar className="w-4 h-4 text-[#1E1715]" />
                <span>Open Date Enquiry Form</span>
              </Link>

              <a
                href={heroWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-espresso w-full sm:w-auto"
              >
                <MessageCircle className="w-4 h-4 fill-[#C6A36A] text-[#1E1715]" />
                <span>Instant WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
