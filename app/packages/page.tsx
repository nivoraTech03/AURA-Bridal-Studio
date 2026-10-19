import { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG, PRICING_PACKAGES } from "@/lib/config";
import Breadcrumbs from "@/components/Breadcrumbs";
import PackageCard from "@/components/PackageCard";
import SectionHeading from "@/components/SectionHeading";
import { Sparkles, HelpCircle, Check, MessageSquare } from "lucide-react";
import { generateQuickWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Bridal Packages & Investment | Aura Bridal Studio Delhi",
  description:
    "Explore transparent luxury bridal makeup packages by Ananya Sharma. From Essential Bride to Luxe Destination Suite, find your perfect wedding beauty package.",
};

export default function PackagesPage() {
  const customWhatsAppUrl = generateQuickWhatsAppUrl("Custom Multi-Event Bridal Package Quote");

  return (
    <div className="space-y-16 pb-24">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: "Packages & Pricing", href: "/packages" }]} />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#C6A36A]/40 text-[#8C662D] text-xs font-semibold tracking-[0.2em] uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A36A]" />
            <span>Curated Investments</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#302622] font-light tracking-tight">
            Bridal Packages & Pricing
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
            Transparent, all-inclusive luxury bridal packages with no hidden surprises. All packages include pre-makeup skin barrier preparation, high-definition makeup, custom lashes, hair design, and dupatta draping.
          </p>
        </div>
      </section>

      {/* 3 Packages Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PACKAGES.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* Pricing illustrative disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-neutral-500 font-light italic max-w-2xl mx-auto">
            {SITE_CONFIG.pricingDisclaimer}
          </p>
        </div>
      </section>

      {/* Comparison Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#E6DCD1] rounded-sm p-6 sm:p-10 shadow-sm overflow-x-auto">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#302622] font-light mb-6 text-center sm:text-left">
            Package Inclusions Comparison
          </h2>

          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-[#E6DCD1]">
                <th className="py-4 font-semibold text-[#302622] uppercase tracking-wider text-xs">
                  Feature / Service
                </th>
                <th className="py-4 text-center font-serif text-base text-[#302622]">
                  Essential Bride
                </th>
                <th className="py-4 text-center font-serif text-base text-[#C6A36A] font-semibold">
                  Signature Bride
                </th>
                <th className="py-4 text-center font-serif text-base text-[#302622]">
                  Luxe Experience
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E6DCD1]/60 text-neutral-600">
              <tr>
                <td className="py-3.5 font-medium text-[#302622]">Makeup Technique</td>
                <td className="py-3.5 text-center">High-Definition (HD)</td>
                <td className="py-3.5 text-center font-medium text-[#302622]">Airbrush or HD Luxe</td>
                <td className="py-3.5 text-center">Airbrush Couture HD</td>
              </tr>
              <tr>
                <td className="py-3.5 font-medium text-[#302622]">Ceremony Coverage</td>
                <td className="py-3.5 text-center">1 Wedding Function</td>
                <td className="py-3.5 text-center font-medium text-[#302622]">1 Wedding Function</td>
                <td className="py-3.5 text-center">2 Full Functions</td>
              </tr>
              <tr>
                <td className="py-3.5 font-medium text-[#302622]">Consultation & Trial Session</td>
                <td className="py-3.5 text-center">Available Separately</td>
                <td className="py-3.5 text-center text-emerald-600 font-medium">Included (60 mins)</td>
                <td className="py-3.5 text-center text-emerald-600 font-medium">Full Trial Included</td>
              </tr>
              <tr>
                <td className="py-3.5 font-medium text-[#302622]">Hair Styling & Dupatta Draping</td>
                <td className="py-3.5 text-center"><Check className="w-4 h-4 mx-auto text-emerald-600" /></td>
                <td className="py-3.5 text-center"><Check className="w-4 h-4 mx-auto text-emerald-600" /></td>
                <td className="py-3.5 text-center"><Check className="w-4 h-4 mx-auto text-emerald-600" /></td>
              </tr>
              <tr>
                <td className="py-3.5 font-medium text-[#302622]">Touch-Up Assistant on Site</td>
                <td className="py-3.5 text-center">—</td>
                <td className="py-3.5 text-center"><Check className="w-4 h-4 mx-auto text-emerald-600" /></td>
                <td className="py-3.5 text-center"><Check className="w-4 h-4 mx-auto text-emerald-600" /> (Full Event)</td>
              </tr>
              <tr>
                <td className="py-3.5 font-medium text-[#302622]">Mother of Bride Party Makeup</td>
                <td className="py-3.5 text-center">—</td>
                <td className="py-3.5 text-center">—</td>
                <td className="py-3.5 text-center text-emerald-600 font-medium">1 Complimentary</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Custom Quote Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] border border-[#C6A36A]/50 p-8 sm:p-12 rounded-sm text-center">
          <h3 className="font-serif text-2xl sm:text-3xl text-[#302622] font-light">
            Need a Bespoke Combination or Destination Quote?
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-neutral-600 font-light max-w-xl mx-auto">
            Hosting Mehendi, Haldi, Sangeet, Wedding, and Reception over multiple days? We curate custom wedding itineraries with dedicated team bookings.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/book?package=Custom+Bespoke+Quote"
              className="px-6 py-3.5 bg-[#302622] hover:bg-[#C6A36A] text-white text-xs font-semibold tracking-widest uppercase transition-colors"
            >
              Fill Custom Itinerary Form
            </Link>
            <a
              href={customWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold tracking-widest uppercase transition-colors flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>WhatsApp Direct Inquiry</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
