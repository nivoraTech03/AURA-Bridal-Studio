import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import {
  Sparkles,
  ShieldCheck,
  Award,
  Heart,
  ArrowRight,
  CheckCircle2,
  Calendar,
  MessageCircle,
} from "lucide-react";
import { generateQuickWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "About Ananya Sharma | Lead Artist | Aura Bridal Studio Delhi",
  description:
    "Learn about Ananya Sharma's makeup philosophy, editorial training, hospital-grade hygiene approach, and bespoke bridal consultation process.",
};

export default function AboutPage() {
  const whatsappUrl = generateQuickWhatsAppUrl("Consultation Enquiry with Ananya Sharma");

  return (
    <div className="space-y-20 pb-24">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: "About", href: "/about" }]} />

      {/* 01. ARTIST HERO / BIO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden border border-[#E6DCD1] shadow-2xl">
              <Image
                src="/images/artist_portrait.jpg"
                alt={`${SITE_CONFIG.artistName} - Lead Bridal Makeup Artist`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#C6A36A]/40 text-[#8C662D] text-xs font-semibold tracking-[0.2em] uppercase shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A36A]" />
              <span>Artist & Creative Director</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#302622] font-light leading-tight">
              Ananya Sharma
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
              &ldquo;My belief is simple: on your wedding day, everyone should see you—not just your makeup. True bridal artistry doesn&apos;t mask your character; it illuminates your grace with effortless, high-definition refinement.&rdquo;
            </p>

            <p className="text-sm text-neutral-600 font-light leading-relaxed">
              With a background spanning high-fashion editorial masterclasses and traditional North & South Indian bridal draping, Ananya founded Aura Bridal Studio in Mehrauli to offer brides a private atelier sanctuary. Here, each look is custom-tailored to the bride&apos;s skin undertones, ceremonial lighting, and heirloom jewellery.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-neutral-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C6A36A] flex-shrink-0" />
                <span>Editorial Masterclasses (London & Mumbai)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C6A36A] flex-shrink-0" />
                <span>Prestige Pro Cosmetic Formulations</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C6A36A] flex-shrink-0" />
                <span>Only 1 Bride Per Ceremony</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C6A36A] flex-shrink-0" />
                <span>On-Location & Destination Accompaniment</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/book"
                className="px-8 py-3.5 bg-[#302622] hover:bg-[#C6A36A] text-[#FAF7F2] text-xs font-semibold tracking-widest uppercase transition-colors"
              >
                Schedule Consultation
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold tracking-widest uppercase transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat with Ananya</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 02. OUR BEAUTY PHILOSOPHY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Studio Philosophy"
          title="Beauty Rooted in Skin-First Elegance"
          subtitle="Three non-negotiable principles that shape every single brush stroke at Aura Bridal Studio."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-[#E6DCD1] p-8 rounded-sm shadow-xs space-y-4">
            <span className="font-serif text-3xl text-[#C6A36A] font-light">01</span>
            <h3 className="font-serif text-xl text-[#302622] font-medium">Luminous, Breathable Skin</h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
              We reject thick, powdery masks. By preparing the skin barrier with botanical serums, we apply featherlight micro-pigments that enhance your natural texture while delivering 100% camera-ready coverage.
            </p>
          </div>

          <div className="bg-white border border-[#E6DCD1] p-8 rounded-sm shadow-xs space-y-4">
            <span className="font-serif text-3xl text-[#C6A36A] font-light">02</span>
            <h3 className="font-serif text-xl text-[#302622] font-medium">Harmonized Heritage</h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
              Indian weddings are rich in vibrant color and intricate ornamentation. We study your lehenga embroidery, kundan or polki jewelry, and floral headpieces to ensure your makeup harmonizes rather than clashes.
            </p>
          </div>

          <div className="bg-white border border-[#E6DCD1] p-8 rounded-sm shadow-xs space-y-4">
            <span className="font-serif text-3xl text-[#C6A36A] font-light">03</span>
            <h3 className="font-serif text-xl text-[#302622] font-medium">Enduring Serenity</h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
              Wedding mornings can feel overwhelming. We curate a calm, luxurious atmosphere with soothing aromatherapy, mindful pacing, and unflappable professionalism so you can savor every precious moment.
            </p>
          </div>
        </div>
      </section>

      {/* 03. HYGIENE & PRESTIGE KIT STANDARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] border border-[#E6DCD1] p-8 sm:p-14 rounded-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-2">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#8C662D]">
                Safety & Sanitization
              </span>
              <h2 className="font-serif text-3xl text-[#302622] font-light">
                Hospital-Grade Kit Hygiene
              </h2>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                Your skin&apos;s health is paramount. We observe rigorous clinical hygiene protocols before, during, and after every client application.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-xs border border-[#E6DCD1] space-y-2">
                <ShieldCheck className="w-5 h-5 text-[#C6A36A]" />
                <h4 className="font-serif text-base text-[#302622] font-medium">Sterilized Brushes</h4>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">
                  Brushes undergo a 2-step sanitization cycle with pro brush cleansers and UV sterilization before each appointment.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xs border border-[#E6DCD1] space-y-2">
                <ShieldCheck className="w-5 h-5 text-[#C6A36A]" />
                <h4 className="font-serif text-base text-[#302622] font-medium">Stainless Steel Palettes</h4>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">
                  All liquid and cream products are decanted using sterile stainless spatulas. No wand or dropper ever touches the skin directly.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xs border border-[#E6DCD1] space-y-2">
                <ShieldCheck className="w-5 h-5 text-[#C6A36A]" />
                <h4 className="font-serif text-base text-[#302622] font-medium">Disposable Mascara Wands</h4>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">
                  Single-use disposable applicators for mascara and lash adhesion ensure total ocular hygiene and safety.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xs border border-[#E6DCD1] space-y-2">
                <ShieldCheck className="w-5 h-5 text-[#C6A36A]" />
                <h4 className="font-serif text-base text-[#302622] font-medium">Fresh Sponges & Puffs</h4>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">
                  Every bride receives brand-new, freshly unpacked powder puffs and blending sponges dedicated exclusively to her.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#302622] font-light">
            Ready to Begin with a Look Trial?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
            Visit our Mehrauli studio for a 90-minute Look Consultation & Trial where we map out your customized bridal beauty plan.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/services/makeup-consultation"
              className="px-6 py-3.5 bg-[#302622] hover:bg-[#C6A36A] text-white text-xs font-semibold tracking-widest uppercase transition-colors"
            >
              Learn About The Trial
            </Link>
            <Link
              href="/book"
              className="px-6 py-3.5 border border-[#302622] text-[#302622] hover:bg-[#FAF7F2] text-xs font-semibold tracking-widest uppercase transition-colors"
            >
              Book Date Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
