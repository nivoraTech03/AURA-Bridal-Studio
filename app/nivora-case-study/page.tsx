import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_CONFIG } from "@/lib/config";
import {
  Sparkles,
  Smartphone,
  Zap,
  Search,
  MessageCircle,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Aura Bridal Studio — Concept Case Study | Built by Nivora",
  description:
    "An architectural case study showing how Nivora engineered a luxury, mobile-first, high-converting digital experience for modern bridal beauty studios.",
};

export default function NivoraCaseStudyPage() {
  return (
    <div className="space-y-16 pb-24">
      <Breadcrumbs
        items={[{ label: "Nivora Case Study", href: "/nivora-case-study" }]}
      />

      {/* Case Study Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#302622] text-[#DFCAA0] text-xs font-semibold tracking-widest uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A36A]" />
            <span>Nivora Architecture & Design Showcase</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#302622] font-light leading-tight">
            Engineering a High-Converting Luxury Web Presence for Bridal Studios
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
            How Nivora engineered Aura Bridal Studio: a bespoke concept website created to demonstrate how modern luxury beauty brands can eliminate template mediocrity, captivate high-net-worth brides, and drive effortless WhatsApp enquiries.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-neutral-500 border-t border-[#E6DCD1] pt-6">
            <div>
              <span className="block font-semibold uppercase tracking-wider text-[#302622]">Client Archetype</span>
              <span>Luxury Bridal & Beauty Studio</span>
            </div>
            <div>
              <span className="block font-semibold uppercase tracking-wider text-[#302622]">Market Focus</span>
              <span>Delhi NCR & Destination Weddings</span>
            </div>
            <div>
              <span className="block font-semibold uppercase tracking-wider text-[#302622]">Primary Conversion</span>
              <span>WhatsApp Direct Enquiry Flow</span>
            </div>
            <div>
              <span className="block font-semibold uppercase tracking-wider text-[#302622]">Engineered By</span>
              <span className="text-[#A47F46] font-semibold">Nivora Agency</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Mockup Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[16/9] rounded-sm overflow-hidden border border-[#E6DCD1] shadow-2xl">
          <Image
            src="/images/hero_bride.jpg"
            alt="Aura Bridal Studio Concept Preview"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8 sm:p-12">
            <div className="text-white max-w-xl space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#DFCAA0] font-semibold block">
                Editorial Aesthetics Meets Technical Rigor
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-light">
                Elevating Indian Bridal Beauty on the Web
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Core Architectural Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#A47F46] block mb-2">
            The Strategic Approach
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#302622] font-light">
            Why Generic Templates Fail Luxury Brands
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
            Most beauty and makeup artist websites look like cookie-cutter salon templates with clunky forms, blurry images, and slow loading times. Nivora built Aura Bridal Studio to demonstrate the difference a bespoke, editorial design system makes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="bg-white border border-[#E6DCD1] p-8 rounded-sm shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#C6A36A] flex items-center justify-center text-[#A47F46]">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl text-[#302622] font-medium">
              Zero-Friction WhatsApp Funnel
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
              In India, high-ticket bridal bookings happen over WhatsApp, not through cold contact forms. We built a real-time message generator that validates dates, guest counts, and package choices, preparing a perfectly formatted message ready to send with one tap.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white border border-[#E6DCD1] p-8 rounded-sm shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#C6A36A] flex items-center justify-center text-[#A47F46]">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl text-[#302622] font-medium">
              Mobile-First Editorial Layouts
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
              Over 85% of brides browse wedding portfolios on their smartphones. We tested touch targets (&gt;44px), thumb-friendly navigation, sticky contextual CTAs, and responsive image aspect ratios to ensure the site feels like a Vogue digital feature on mobile.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white border border-[#E6DCD1] p-8 rounded-sm shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#C6A36A] flex items-center justify-center text-[#A47F46]">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl text-[#302622] font-medium">
              Complete Semantic SEO Foundations
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
              Structured JSON-LD schema for LocalBusiness, Service, BreadcrumbList, FAQPage, and Article entities. Statically pre-rendered routes, optimized Open Graph cards, descriptive alt tags, and an automated XML sitemap.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Stack Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] border border-[#E6DCD1] rounded-sm p-8 sm:p-12">
          <h3 className="font-serif text-2xl sm:text-3xl text-[#302622] font-light mb-6">
            Technology Architecture
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-neutral-700">
            <div className="bg-white p-4 rounded-xs border border-[#E6DCD1] space-y-1">
              <span className="font-semibold text-[#A47F46] block uppercase tracking-wider text-[11px]">
                Framework
              </span>
              <p className="font-medium text-[#302622]">Next.js 16 (App Router)</p>
              <p className="text-neutral-500 font-light">Server components, static page generation, and instant route transitions.</p>
            </div>

            <div className="bg-white p-4 rounded-xs border border-[#E6DCD1] space-y-1">
              <span className="font-semibold text-[#A47F46] block uppercase tracking-wider text-[11px]">
                Styling Engine
              </span>
              <p className="font-medium text-[#302622]">Tailwind CSS 4</p>
              <p className="text-neutral-500 font-light">Curated bespoke design tokens, warm ivory palette, and reduced-motion support.</p>
            </div>

            <div className="bg-white p-4 rounded-xs border border-[#E6DCD1] space-y-1">
              <span className="font-semibold text-[#A47F46] block uppercase tracking-wider text-[11px]">
                Typography
              </span>
              <p className="font-medium text-[#302622]">Cormorant Garamond & Jakarta Sans</p>
              <p className="text-neutral-500 font-light">Loaded via Next Font with zero layout shifts and optimized font subsets.</p>
            </div>

            <div className="bg-white p-4 rounded-xs border border-[#E6DCD1] space-y-1">
              <span className="font-semibold text-[#A47F46] block uppercase tracking-wider text-[11px]">
                Conversion System
              </span>
              <p className="font-medium text-[#302622]">WhatsApp URL Engine</p>
              <p className="text-neutral-500 font-light">Privacy-first, zero third-party database dependency, immediate lead capture.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nivora Pitch & Agency Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1E1715] text-[#FAF7F2] p-8 sm:p-16 rounded-sm border border-[#C6A36A]/40 text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#DFCAA0] flex items-center justify-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A36A]" />
              Work With Nivora
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight">
              Want a Website That Commands Premium Pricing For Your Business?
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              Nivora crafts bespoke, performance-engineered web experiences for premium beauty ateliers, designers, wedding creators, and luxury hospitality brands worldwide.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/"
                className="px-8 py-4 bg-[#C6A36A] hover:bg-white text-[#1E1715] text-xs font-semibold tracking-widest uppercase transition-colors"
              >
                Experience Live Website Demo
              </Link>
              <a
                href="https://wa.me/919876543210?text=Hello%20Nivora!%20I%20saw%20the%20Aura%20Bridal%20Studio%20website%20and%20would%20love%20to%20discuss%20a%20website%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-white/40 hover:border-[#C6A36A] text-white hover:text-[#C6A36A] text-xs font-semibold tracking-widest uppercase transition-colors flex items-center gap-2"
              >
                <span>Hire Nivora to Build Your Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
