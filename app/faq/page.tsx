import { Metadata } from "next";
import Link from "next/link";
import { FAQS_DATA, SITE_CONFIG } from "@/lib/config";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import { Sparkles, HelpCircle, MessageCircle, Phone } from "lucide-react";
import { generateQuickWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Aura Bridal Studio Delhi",
  description:
    "Find answers to common questions about bridal makeup bookings, travel fees, look consultations, cosmetics kits, and cancellation policies.",
};

export default function FaqPage() {
  const whatsappUrl = generateQuickWhatsAppUrl("Specific FAQ Question not answered on website");

  // Generate FAQPage JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS_DATA.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="space-y-16 pb-24">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: "FAQs", href: "/faq" }]} />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#C6A36A]/40 text-[#8C662D] text-xs font-semibold tracking-[0.2em] uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A36A]" />
            <span>Clarity & Guidance</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#302622] font-light tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
            Transparent answers regarding our booking procedure, studio consultations, destination travel logistics, and day-of timing.
          </p>
        </div>
      </section>

      {/* Accordion Container */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FaqAccordion items={FAQS_DATA} allowMultiple={false} />
      </section>

      {/* Unanswered Question Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] border border-[#C6A36A]/40 rounded-sm p-8 text-center space-y-4">
          <h3 className="font-serif text-2xl text-[#302622] font-medium">
            Have a Question Not Listed Here?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 font-light max-w-lg mx-auto">
            Every wedding celebration is distinct. We are delighted to answer questions regarding unique timings, multiple looks, or destination itineraries.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold tracking-widest uppercase transition-colors flex items-center gap-2 rounded-xs"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Ask on WhatsApp</span>
            </a>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="px-6 py-3 border border-[#302622] text-[#302622] hover:bg-white text-xs font-semibold tracking-widest uppercase transition-colors flex items-center gap-2 rounded-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#C6A36A]" />
              <span>Call Us: {SITE_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
