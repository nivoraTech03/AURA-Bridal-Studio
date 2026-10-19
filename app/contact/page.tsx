import { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import Breadcrumbs from "@/components/Breadcrumbs";
import EnquiryForm from "@/components/EnquiryForm";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Sparkles,
  Navigation,
  MessageCircle,
} from "lucide-react";
import { InstagramIcon, YoutubeIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact & Studio Location | Aura Bridal Studio Delhi",
  description:
    "Get in touch with Aura Bridal Studio in Mehrauli, New Delhi. Book atelier appointments, consultations, and destination wedding makeup inquiries.",
};

export default function ContactPage() {
  return (
    <div className="space-y-16 pb-24">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#C6A36A]/40 text-[#8C662D] text-xs font-semibold tracking-[0.2em] uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A36A]" />
            <span>Connect With Our Team</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#302622] font-light tracking-tight">
            Contact Aura Bridal Studio
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
            Whether you are planning a local wedding in Delhi NCR or a destination celebration in Rajasthan or Goa, we welcome your inquiries and look forward to designing your bridal look.
          </p>
        </div>
      </section>

      {/* Main Info Blocks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Phone block */}
          <div className="bg-white border border-[#E6DCD1] p-6 rounded-sm shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#C6A36A] flex items-center justify-center text-[#A47F46]">
                <Phone className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-lg text-[#302622] font-medium">Direct Telephone</h3>
              <p className="text-xs text-neutral-500 font-light">
                For prompt telephone queries and date reservations.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#E6DCD1]/60">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="text-sm font-semibold text-[#302622] hover:text-[#C6A36A] transition-colors"
              >
                {SITE_CONFIG.phone}
              </a>
            </div>
          </div>

          {/* WhatsApp block */}
          <div className="bg-white border border-[#E6DCD1] p-6 rounded-sm shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#C6A36A] flex items-center justify-center text-[#25D366]">
                <MessageCircle className="w-4 h-4 fill-[#25D366] text-white" />
              </div>
              <h3 className="font-serif text-lg text-[#302622] font-medium">WhatsApp Concierge</h3>
              <p className="text-xs text-neutral-500 font-light">
                Direct messages, look swatches, and quote discussions.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#E6DCD1]/60">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello! I would like to enquire about bridal bookings.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                {SITE_CONFIG.whatsappDisplayNumber} →
              </a>
            </div>
          </div>

          {/* Email block */}
          <div className="bg-white border border-[#E6DCD1] p-6 rounded-sm shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#C6A36A] flex items-center justify-center text-[#A47F46]">
                <Mail className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-lg text-[#302622] font-medium">Written Concierge</h3>
              <p className="text-xs text-neutral-500 font-light">
                For detailed event briefs and corporate inquiries.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#E6DCD1]/60">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-xs font-semibold text-[#302622] hover:text-[#C6A36A] transition-colors truncate block"
              >
                {SITE_CONFIG.email}
              </a>
            </div>
          </div>

          {/* Hours block */}
          <div className="bg-white border border-[#E6DCD1] p-6 rounded-sm shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#C6A36A] flex items-center justify-center text-[#A47F46]">
                <Clock className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-lg text-[#302622] font-medium">Consultation Hours</h3>
              <p className="text-xs text-neutral-500 font-light">
                {SITE_CONFIG.businessHours}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#E6DCD1]/60">
              <span className="text-xs font-semibold text-[#A47F46]">
                By Prior Appointment
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Form & Studio Location */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form */}
          <div className="lg:col-span-7">
            <Suspense
              fallback={
                <div className="p-12 text-center bg-white border border-[#E6DCD1]">
                  Loading contact form...
                </div>
              }
            >
              <EnquiryForm />
            </Suspense>
          </div>

          {/* Studio Location & Destination Map info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#302622] text-[#FAF7F2] p-8 rounded-sm border border-[#C6A36A]/30 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#DFCAA0] text-xs font-semibold uppercase tracking-wider">
                <Navigation className="w-3.5 h-3.5 text-[#C6A36A]" />
                <span>Atelier Location</span>
              </div>

              <h3 className="font-serif text-2xl font-light text-white">
                Mehrauli Heritage Atelier
              </h3>

              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                {SITE_CONFIG.address}
              </p>
              <p className="text-xs text-[#DFCAA0] italic">
                {SITE_CONFIG.landmark}
              </p>

              <div className="pt-4 border-t border-white/10">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C6A36A] block mb-2">
                  Service Coverage Areas
                </span>
                <ul className="space-y-1.5 text-xs text-neutral-300">
                  {SITE_CONFIG.serviceAreas.map((area, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-[#C6A36A]">•</span>
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-4">
                <span className="text-xs uppercase tracking-wider text-neutral-400">
                  Social Channels:
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={SITE_CONFIG.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border border-white/20 text-white hover:text-[#C6A36A] hover:border-[#C6A36A] transition-colors"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={SITE_CONFIG.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border border-white/20 text-white hover:text-[#C6A36A] hover:border-[#C6A36A] transition-colors"
                    aria-label="YouTube"
                  >
                    <YoutubeIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Stylized Map View placeholder */}
            <div className="bg-white border border-[#E6DCD1] p-6 rounded-sm shadow-xs space-y-3 text-center">
              <MapPin className="w-8 h-8 text-[#C6A36A] mx-auto animate-bounce" />
              <h4 className="font-serif text-lg text-[#302622]">Mehrauli Heritage Corridor</h4>
              <p className="text-xs text-neutral-500 font-light max-w-sm mx-auto">
                Surrounded by iconic heritage courtyards, our studio offers a tranquil sanctuary for private bridal look design and trials.
              </p>
              <div className="pt-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(SITE_CONFIG.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#A47F46] hover:text-[#302622] transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <Navigation className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
