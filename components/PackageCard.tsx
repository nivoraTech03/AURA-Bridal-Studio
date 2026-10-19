import Link from "next/link";
import { PricingPackage, SITE_CONFIG } from "@/lib/config";
import { Check, X, Sparkles, MessageSquare, ArrowRight } from "lucide-react";
import { generateQuickWhatsAppUrl } from "@/lib/whatsapp";

interface PackageCardProps {
  pkg: PricingPackage;
}

export default function PackageCard({ pkg }: PackageCardProps) {
  const whatsappUrl = generateQuickWhatsAppUrl(`Booking Enquiry for ${pkg.name} Package (₹${pkg.price})`);

  return (
    <div
      className={`relative rounded-sm transition-all duration-300 flex flex-col justify-between ${
        pkg.popular
          ? "bg-white border-2 border-[#C6A36A] shadow-2xl md:-translate-y-2 ring-1 ring-[#C6A36A]/40"
          : "bg-white border border-[#E6DCD1] hover:border-[#C6A36A] shadow-sm hover:shadow-xl"
      }`}
    >
      {/* Popular badge */}
      {pkg.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span
            className={`px-4 py-1 text-[10px] font-bold tracking-[0.2em] uppercase rounded-full shadow-md flex items-center gap-1.5 ${
              pkg.popular
                ? "bg-gradient-to-r from-[#C6A36A] via-[#E2C999] to-[#A47F46] text-[#1E1715] border border-white/60"
                : "bg-[#1E1715] text-[#DFCAA0] border border-[#C6A36A]/50"
            }`}
          >
            <Sparkles className="w-3 h-3 text-[#1E1715]" />
            {pkg.badge}
          </span>
        </div>
      )}

      {/* Package Header */}
      <div className="p-6 sm:p-8 border-b border-[#E6DCD1]/60">
        <h3 className="font-serif text-2xl text-[#302622] font-normal">
          {pkg.name}
        </h3>
        <p className="mt-1 text-xs text-neutral-500 font-light">
          {pkg.tagline}
        </p>

        {/* Pricing block */}
        <div className="mt-6 flex items-baseline gap-1">
          <span className="text-base font-serif text-[#C6A36A]">{SITE_CONFIG.currencySymbol}</span>
          <span className="font-serif text-4xl sm:text-5xl font-light text-[#302622] tracking-tight">
            {pkg.price}
          </span>
          <span className="text-xs text-neutral-500 font-light ml-2">
            / {pkg.priceUnit}
          </span>
        </div>

        <p className="mt-3 text-xs text-neutral-600 font-light leading-relaxed">
          {pkg.description}
        </p>
      </div>

      {/* Package Features & Inclusions */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
        <div>
          <span className="text-xs font-semibold tracking-wider uppercase text-[#A47F46] block mb-3">
            What&apos;s Included
          </span>
          <ul className="space-y-3 text-xs text-neutral-700">
            {pkg.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <div className="w-4 h-4 rounded-full bg-[#FAF7F2] border border-[#C6A36A] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5 text-[#C6A36A]" />
                </div>
                <span className="leading-snug">{feature}</span>
              </li>
            ))}
          </ul>

          {/* Exclusions */}
          {pkg.exclusions.length > 0 && (
            <div className="mt-5 pt-4 border-t border-[#E6DCD1]/60">
              <span className="text-[10px] font-semibold tracking-wider uppercase text-neutral-400 block mb-2">
                Not Included
              </span>
              <ul className="space-y-1.5 text-[11px] text-neutral-500">
                {pkg.exclusions.map((exclusion, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <X className="w-3 h-3 text-neutral-400 flex-shrink-0 mt-0.5" />
                    <span>{exclusion}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Action CTAs */}
        <div className="pt-4 space-y-2.5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={
              pkg.popular
                ? "btn-gold w-full flex justify-center py-3.5"
                : "btn-espresso w-full flex justify-center py-3.5"
            }
          >
            <MessageSquare className="w-4 h-4" />
            <span>Enquire on WhatsApp</span>
          </a>

          <Link
            href={`/book?package=${encodeURIComponent(pkg.name)}`}
            className="w-full flex items-center justify-center gap-1 text-center py-2 text-[11px] font-semibold tracking-wider uppercase text-neutral-500 hover:text-[#302622] transition-colors"
          >
            <span>Complete Full Booking Form</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
