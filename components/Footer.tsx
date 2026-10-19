import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { Phone, Mail, MapPin, Sparkles, ArrowUpRight } from "lucide-react";
import { InstagramIcon, YoutubeIcon } from "@/components/Icons";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#1E1715] text-[#FAF7F2] border-t border-[#C6A36A]/20">
      {/* Top Banner / Invitation */}
      <div className="border-b border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[#C6A36A] text-xs font-semibold tracking-[0.25em] uppercase flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              Private Atelier Consultations
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-light mt-1 text-[#FAF7F2]">
              Ready to Design Your Signature Bridal Look?
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-widest uppercase bg-[#C6A36A] hover:bg-[#FAF7F2] text-[#1E1715] transition-all duration-200"
            >
              <span>Reserve Wedding Date</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello! I would like to enquire about bridal makeup availability.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-widest uppercase border border-white/30 hover:border-[#C6A36A] text-white hover:text-[#C6A36A] transition-colors"
            >
              WhatsApp Concierge
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group">
              <span className="font-serif text-3xl tracking-[0.2em] font-medium text-[#FAF7F2] group-hover:text-[#C6A36A] transition-colors">
                AURA
              </span>
              <span className="block text-[11px] tracking-[0.35em] uppercase text-[#C6A36A] font-medium -mt-1">
                Bridal Studio
              </span>
            </Link>
            <p className="text-sm text-neutral-400 font-light leading-relaxed max-w-sm">
              Luxury editorial bridal makeup, high-definition styling, and personalized consultations curated by Ananya Sharma in Delhi NCR and destination weddings across India.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-neutral-300 hover:text-[#C6A36A] hover:border-[#C6A36A] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-neutral-300 hover:text-[#C6A36A] hover:border-[#C6A36A] transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Bridal Services */}
          <div>
            <h4 className="font-serif text-base text-[#FAF7F2] tracking-wider uppercase mb-4 text-[#C6A36A]">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider uppercase text-neutral-400">
              <li>
                <Link href="/services/bridal-makeup" className="hover:text-[#FAF7F2] transition-colors">
                  Bridal Makeup
                </Link>
              </li>
              <li>
                <Link href="/services/engagement-makeup" className="hover:text-[#FAF7F2] transition-colors">
                  Engagement Makeup
                </Link>
              </li>
              <li>
                <Link href="/services/reception-makeup" className="hover:text-[#FAF7F2] transition-colors">
                  Reception Makeup
                </Link>
              </li>
              <li>
                <Link href="/services/party-makeup" className="hover:text-[#FAF7F2] transition-colors">
                  Party & Sangeet
                </Link>
              </li>
              <li>
                <Link href="/services/pre-bridal" className="hover:text-[#FAF7F2] transition-colors">
                  Pre-Bridal Skincare
                </Link>
              </li>
              <li>
                <Link href="/services/makeup-consultation" className="hover:text-[#FAF7F2] transition-colors">
                  Consultation & Trial
                </Link>
              </li>
            </ul>
          </div>

          {/* Exploration */}
          <div>
            <h4 className="font-serif text-base text-[#FAF7F2] tracking-wider uppercase mb-4 text-[#C6A36A]">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider uppercase text-neutral-400">
              <li>
                <Link href="/portfolio" className="hover:text-[#FAF7F2] transition-colors">
                  Bridal Gallery
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-[#FAF7F2] transition-colors">
                  Packages & Rates
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FAF7F2] transition-colors">
                  About Ananya Sharma
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#FAF7F2] transition-colors">
                  Bridal Beauty Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#FAF7F2] transition-colors inline-flex items-center gap-1.5 text-[#DFCAA0]">
                  <span className="text-[#C6A36A] text-[10px]">❖</span>
                  <span className="font-medium text-[#FAF7F2]">Frequently Asked Questions (FAQ)</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FAF7F2] transition-colors">
                  Studio Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-base text-[#FAF7F2] tracking-wider uppercase mb-4 text-[#C6A36A]">
              Atelier
            </h4>
            <ul className="space-y-3 text-xs text-neutral-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C6A36A] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Studio 4B, The Heritage Promenade, Mehrauli, New Delhi 110030
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C6A36A] flex-shrink-0" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-[#FAF7F2]">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C6A36A] flex-shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-[#FAF7F2]">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="pt-2 text-[11px] text-neutral-500">
                {SITE_CONFIG.businessHours}
              </li>
            </ul>
          </div>
        </div>

        {/* Fictional Demo Notice */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-[11px] text-neutral-400 font-light max-w-3xl mx-auto leading-relaxed">
            * <strong className="text-neutral-300">Demonstration Notice:</strong> {SITE_CONFIG.nivora.isFictionalDemoNotice} All portfolio imagery, rates, and client vignettes are curated for illustrative demonstration.
          </p>
        </div>

        {/* Bottom Credits & Nivora link */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © {currentYear} {SITE_CONFIG.businessName}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link
              href="/nivora-case-study"
              className="text-[#C6A36A] hover:text-[#DFCAA0] transition-colors font-medium flex items-center gap-1"
            >
              <span>{SITE_CONFIG.nivora.creditText}</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
