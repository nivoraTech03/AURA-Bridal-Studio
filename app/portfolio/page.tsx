import { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import Breadcrumbs from "@/components/Breadcrumbs";
import PortfolioGallery from "@/components/PortfolioGallery";
import { Sparkles, Calendar, MessageCircle } from "lucide-react";
import { generateQuickWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Bridal Portfolio & Look Gallery | Aura Bridal Studio Delhi",
  description:
    "Browse our signature Indian bridal makeup looks, engagement pastel glam, reception evening artistry, and high-definition transformations.",
};

export default function PortfolioPage() {
  const whatsappUrl = generateQuickWhatsAppUrl("Portfolio Look Enquiry");

  return (
    <div className="space-y-16 pb-24">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: "Portfolio", href: "/portfolio" }]} />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#C6A36A]/40 text-[#8C662D] text-xs font-semibold tracking-[0.2em] uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A36A]" />
            <span>The Lookbook</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#302622] font-light tracking-tight">
            Bridal Artistry & Look Gallery
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
            Every look is an interplay of radiant skin, refined jewelry harmony, and ceremonial emotion. Filter by celebration category or click any image to view details in high resolution.
          </p>
        </div>
      </section>

      {/* Gallery with Interactive Filter & Lightbox */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PortfolioGallery />
      </section>

      {/* Consultation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#302622] text-[#FAF7F2] p-8 sm:p-14 rounded-sm border border-[#C6A36A]/30 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-white">
              Inspired by a Particular Look?
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
              Bring your outfit swatches and bridal mood board to our Mehrauli atelier. We will customize any look to match your skin tone, wedding palette, and personal aesthetic.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/book"
                className="px-8 py-3.5 bg-[#C6A36A] hover:bg-white text-[#1E1715] text-xs font-semibold tracking-widest uppercase transition-colors"
              >
                Schedule Look Consultation
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 border border-white/30 hover:border-[#C6A36A] text-white hover:text-[#C6A36A] text-xs font-semibold tracking-widest uppercase transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#302622]" />
                <span>Discuss on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
