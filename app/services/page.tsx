import { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG, SERVICES_DATA } from "@/lib/config";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Sparkles, Calendar, MessageCircle } from "lucide-react";
import { generateQuickWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Bridal & Beauty Services | Aura Bridal Studio Delhi",
  description:
    "Explore our complete range of bespoke bridal, engagement, reception, party makeup, and pre-bridal skincare services in Delhi NCR and destination weddings.",
};

export default function ServicesPage() {
  const whatsappUrl = generateQuickWhatsAppUrl("Bridal Makeup & Services Consultation");

  return (
    <div className="space-y-16 pb-24">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />

      {/* Services Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#C6A36A]/40 text-[#8C662D] text-xs font-semibold tracking-[0.2em] uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A36A]" />
            <span>Atelier Offerings</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#302622] font-light tracking-tight">
            Curated Bridal & Event Artistry
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
            From intimate morning ceremonies to high-drama midnight receptions, each service is meticulously calibrated to celebrate your individuality with high-definition, long-wear cosmetic precision.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Custom Destination / Group Booking Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#302622] text-[#FAF7F2] p-8 sm:p-12 rounded-sm border border-[#C6A36A]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl font-light">
              Planning a Destination Wedding or Group Booking?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 font-light">
              We curate custom multi-day packages for brides, families, and bridal parties across Udaipur, Jaipur, Goa, and worldwide destinations.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/book"
              className="px-6 py-3.5 bg-[#C6A36A] hover:bg-white text-[#1E1715] text-xs font-semibold tracking-widest uppercase transition-colors"
            >
              Request Custom Quote
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 border border-white/30 hover:border-[#C6A36A] text-white hover:text-[#C6A36A] text-xs font-semibold tracking-widest uppercase transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
