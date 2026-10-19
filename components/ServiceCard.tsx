import Link from "next/link";
import Image from "next/image";
import { ServiceItem } from "@/lib/config";
import { Clock, ArrowRight, MessageSquare, Sparkles } from "lucide-react";
import { generateQuickWhatsAppUrl } from "@/lib/whatsapp";

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const whatsappUrl = generateQuickWhatsAppUrl(`${service.title} Service`);

  return (
    <article className="card-luxury rounded-sm overflow-hidden flex flex-col group h-full hover:border-[#C6A36A]/80 hover:shadow-2xl transition-all duration-300">
      {/* Image Container with Editorial Zoom */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
        <Image
          src={service.heroImage}
          alt={`${service.title} by Aura Bridal Studio`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90" />

        {/* Duration badge */}
        <div className="absolute top-3 left-3 bg-[#1E1715]/90 backdrop-blur-xs text-[#FAF7F2] text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-xs flex items-center gap-1.5 border border-[#C6A36A]/40 shadow-sm">
          <Clock className="w-3 h-3 text-[#C6A36A]" />
          <span>{service.duration}</span>
        </div>

        {/* Pricing indicator */}
        <div className="absolute bottom-3 left-4 text-white">
          <span className="text-[10px] uppercase tracking-widest text-[#DFCAA0] font-semibold block">
            Starting from
          </span>
          <span className="font-serif text-xl font-normal tracking-wide text-white">
            {service.startingPrice}
          </span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-xl sm:text-2xl text-[#302622] font-normal group-hover:text-[#A47F46] transition-colors leading-snug">
            {service.title}
          </h3>
          <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
            {service.shortDescription}
          </p>

          {/* Key Inclusions */}
          <div className="mt-4 pt-4 border-t border-[#E6DCD1]/60">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A47F46] block mb-2 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#C6A36A]" />
              Signature Highlights
            </span>
            <ul className="space-y-1.5 text-xs text-neutral-600">
              {service.inclusions.slice(0, 3).map((inc, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#C6A36A] font-bold">•</span>
                  <span className="line-clamp-1">{inc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="mt-6 pt-4 border-t border-[#E6DCD1] flex items-center justify-between gap-3">
          <Link
            href={`/services/${service.slug}`}
            className="px-4 py-2 bg-[#FAF7F2] hover:bg-[#302622] text-[#302622] hover:text-[#FAF7F2] border border-[#E6DCD1] hover:border-[#302622] text-xs font-semibold tracking-wider uppercase transition-all rounded-xs flex items-center gap-1.5 group/btn"
          >
            <span>View Details</span>
            <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 text-neutral-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-full border border-transparent hover:border-emerald-200 transition-all"
            title={`Enquire on WhatsApp about ${service.title}`}
            aria-label={`Enquire on WhatsApp about ${service.title}`}
          >
            <MessageSquare className="w-4 h-4 fill-emerald-600 text-emerald-600" />
          </a>
        </div>
      </div>
    </article>
  );
}
