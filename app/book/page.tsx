import { Metadata } from "next";
import { Suspense } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import EnquiryForm from "@/components/EnquiryForm";
import { SITE_CONFIG } from "@/lib/config";
import { Sparkles, Phone, Mail, MapPin, ShieldCheck, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Book Bridal Makeup & Consultation | Aura Bridal Studio Delhi",
  description:
    "Check availability and request a personalized bridal makeup reservation with Ananya Sharma. Direct WhatsApp enquiry and studio consultations.",
};

export default function BookPage() {
  return (
    <div className="space-y-16 pb-24">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: "Book Consultation", href: "/book" }]} />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#C6A36A]/40 text-[#8C662D] text-xs font-semibold tracking-[0.2em] uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A36A]" />
            <span>Direct Atelier Reservations</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#302622] font-light tracking-tight">
            Reserve Your Wedding Date
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
            Due to our commitment to unhurried, personalized bridal care, we accept only one bride per ceremony. Please submit your event details to check availability.
          </p>
        </div>
      </section>

      {/* Main Form & Trust Side column */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form column (with Suspense for searchParams) */}
          <div className="lg:col-span-8">
            <Suspense
              fallback={
                <div className="p-12 text-center bg-white border border-[#E6DCD1] text-neutral-500">
                  Loading enquiry concierge...
                </div>
              }
            >
              <EnquiryForm />
            </Suspense>
          </div>

          {/* Side Info & Direct Contacts */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Contact Card */}
            <div className="bg-white border border-[#E6DCD1] p-6 sm:p-8 rounded-sm shadow-sm space-y-5">
              <h3 className="font-serif text-xl text-[#302622] font-medium">
                Atelier Concierge
              </h3>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                Prefer to speak with our studio coordinator directly before filling out the form?
              </p>

              <div className="space-y-4 pt-2 border-t border-[#E6DCD1]">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center gap-3 text-xs text-[#302622] hover:text-[#C6A36A] transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#E6DCD1] flex items-center justify-center flex-shrink-0 text-[#C6A36A]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-neutral-400">Direct Call</span>
                    <span className="font-semibold">{SITE_CONFIG.phone}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-3 text-xs text-[#302622] hover:text-[#C6A36A] transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#E6DCD1] flex items-center justify-center flex-shrink-0 text-[#C6A36A]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-neutral-400">Email Inquiries</span>
                    <span className="font-semibold">{SITE_CONFIG.email}</span>
                  </div>
                </a>

                <div className="flex items-start gap-3 text-xs text-[#302622]">
                  <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#E6DCD1] flex items-center justify-center flex-shrink-0 text-[#C6A36A] mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-neutral-400">Studio Location</span>
                    <span className="leading-relaxed text-neutral-700">{SITE_CONFIG.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-[#302622]">
                  <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#E6DCD1] flex items-center justify-center flex-shrink-0 text-[#C6A36A] mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-neutral-400">Consultation Hours</span>
                    <span className="leading-relaxed text-neutral-700">{SITE_CONFIG.businessHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy & Transparency Guarantee */}
            <div className="bg-[#FAF7F2] border border-[#C6A36A]/40 p-6 rounded-sm shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C662D]">
                <ShieldCheck className="w-4 h-4 text-[#C6A36A]" />
                <span>Client Privacy Promise</span>
              </div>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                We never share your contact number with third-party vendors or marketing agencies. Your inquiry goes straight to our lead artist.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
