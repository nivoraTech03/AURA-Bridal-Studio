import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { SERVICES_DATA, SITE_CONFIG, PORTFOLIO_ITEMS } from "@/lib/config";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import {
  Clock,
  CheckCircle2,
  XCircle,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Calendar,
  AlertCircle,
  HelpCircle,
} from "lucide-react";
import { generateQuickWhatsAppUrl } from "@/lib/whatsapp";

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | ${SITE_CONFIG.businessName}`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | ${SITE_CONFIG.businessName}`,
      description: service.shortDescription,
      images: [{ url: service.heroImage }],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const related = SERVICES_DATA.filter((s) =>
    service.relatedServices.includes(s.slug)
  );

  const relatedPortfolio = PORTFOLIO_ITEMS.filter((item) =>
    item.category.toLowerCase().includes(service.title.toLowerCase().split(" ")[0])
  );

  const whatsappUrl = generateQuickWhatsAppUrl(`Inquiry for ${service.title} Service`);

  // Service JSON-LD Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    provider: {
      "@type": "BeautySalon",
      name: SITE_CONFIG.businessName,
      image: `${SITE_CONFIG.domain}${service.heroImage}`,
      telephone: SITE_CONFIG.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE_CONFIG.address,
        addressLocality: SITE_CONFIG.city,
        addressRegion: SITE_CONFIG.state,
        addressCountry: "IN",
      },
    },
    description: service.fullDescription,
    offers: {
      "@type": "Offer",
      price: service.startingPrice.replace(/[^0-9]/g, ""),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <div className="space-y-16 pb-24">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: service.title, href: `/services/${service.slug}` },
        ]}
      />

      {/* 01. SERVICE HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#C6A36A]/40 text-[#8C662D] text-xs font-semibold tracking-[0.2em] uppercase shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A36A]" />
              <span>Bespoke Service Atelier</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#302622] font-light leading-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
              {service.fullDescription}
            </p>

            {/* Price & Duration badges */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <div className="bg-white border border-[#E6DCD1] px-5 py-3 rounded-xs shadow-xs">
                <span className="text-[10px] uppercase tracking-wider text-neutral-400 block">
                  Starting Investment
                </span>
                <span className="font-serif text-2xl text-[#302622] font-normal">
                  {service.startingPrice}
                </span>
              </div>

              <div className="bg-white border border-[#E6DCD1] px-5 py-3 rounded-xs shadow-xs flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#C6A36A]" />
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400 block">
                    Duration
                  </span>
                  <span className="text-sm font-medium text-[#302622]">
                    {service.duration}
                  </span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold tracking-widest uppercase transition-all duration-200 shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Enquire on WhatsApp</span>
              </a>

              <Link
                href={`/book?service=${encodeURIComponent(service.title)}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#302622] hover:bg-[#C6A36A] text-[#FAF7F2] text-xs font-semibold tracking-widest uppercase transition-all duration-200 shadow-sm"
              >
                <Calendar className="w-4 h-4 text-[#C6A36A]" />
                <span>Reserve Ceremony Date</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden border border-[#E6DCD1] shadow-2xl">
              <Image
                src={service.heroImage}
                alt={`${service.title} by Aura Bridal Studio`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 02. WHO THIS IS FOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#E6DCD1] p-8 sm:p-12 rounded-sm shadow-sm">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#302622] font-light mb-6">
            Who This Service is Designed For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.whoItIsFor.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FAF7F2] border border-[#C6A36A] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A36A]" />
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03. INCLUSIONS & EXCLUSIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Inclusions */}
          <div className="bg-white border border-[#E6DCD1] p-8 rounded-sm shadow-sm space-y-4">
            <h3 className="font-serif text-2xl text-[#302622] font-light flex items-center gap-2">
              <span className="text-[#C6A36A]">✦</span> What is Included
            </h3>
            <ul className="space-y-3 pt-2">
              {service.inclusions.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-neutral-700 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Exclusions */}
          <div className="bg-[#FAF7F2] border border-[#E6DCD1] p-8 rounded-sm shadow-sm space-y-4">
            <h3 className="font-serif text-2xl text-[#302622] font-light flex items-center gap-2">
              <span className="text-neutral-400">✧</span> What is Excluded
            </h3>
            <ul className="space-y-3 pt-2">
              {service.exclusions.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-neutral-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-neutral-600 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-[#E6DCD1] text-xs text-neutral-500 font-light flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-[#A47F46] flex-shrink-0" />
              <span>Add-on hair extensions and outstation lodging can be quoted on request.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 04. PREPARATION ADVICE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#302622] text-[#FAF7F2] p-8 sm:p-12 rounded-sm border border-[#C6A36A]/30">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#DFCAA0] flex items-center gap-2 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Artist Advice
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-light text-white mb-6">
            How to Prepare for Your Appointment
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.prepAdvice.map((advice, i) => (
              <div key={i} className="space-y-2 border-l border-[#C6A36A]/40 pl-4">
                <span className="text-xs font-serif text-[#C6A36A] font-medium">
                  Step 0{i + 1}
                </span>
                <p className="text-xs text-neutral-300 font-light leading-relaxed">
                  {advice}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05. SERVICE FAQS */}
      {service.faqs.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#A47F46] flex items-center justify-center gap-1.5 mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              Service Questions
            </span>
            <h2 className="font-serif text-3xl text-[#302622] font-light">
              Frequently Asked About {service.title}
            </h2>
          </div>
          <FaqAccordion items={service.faqs} />
        </section>
      )}

      {/* 06. RELATED SERVICES */}
      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#302622] font-light">
              Complementary Services
            </h2>
            <Link
              href="/services"
              className="text-xs font-semibold uppercase tracking-wider text-[#A47F46] hover:text-[#302622] transition-colors"
            >
              All Services →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((s) => (
              <Link
                key={s.id}
                href={`/services/${s.slug}`}
                className="bg-white border border-[#E6DCD1] p-6 rounded-sm shadow-xs hover:border-[#C6A36A] transition-all group"
              >
                <span className="text-[10px] font-semibold tracking-wider uppercase text-[#C6A36A] block mb-1">
                  Starting {s.startingPrice}
                </span>
                <h3 className="font-serif text-xl text-[#302622] font-normal group-hover:text-[#A47F46] transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs text-neutral-600 font-light mt-2 line-clamp-2">
                  {s.shortDescription}
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs font-medium text-[#302622] group-hover:text-[#A47F46]">
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 07. BOOKING CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] border border-[#C6A36A]/40 rounded-sm p-8 sm:p-12 text-center">
          <h2 className="font-serif text-2xl sm:text-4xl text-[#302622] font-light mb-3">
            Check Availability for {service.title}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 font-light max-w-xl mx-auto mb-6">
            Share your event date and destination to check if our lead artist Ananya Sharma is available for your ceremony.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={`/book?service=${encodeURIComponent(service.title)}`}
              className="px-8 py-3.5 bg-[#302622] hover:bg-[#C6A36A] text-white text-xs font-semibold tracking-widest uppercase transition-colors"
            >
              Fill Booking Form
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold tracking-widest uppercase transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
