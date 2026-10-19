import Link from "next/link";
import { Sparkles, ArrowRight, Home, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full text-center space-y-6 bg-white border border-[#E6DCD1] p-8 sm:p-14 rounded-sm shadow-xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#C6A36A]/40 text-[#8C662D] text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#C6A36A]" />
          <span>Page Not Found</span>
        </div>

        <h1 className="font-serif text-6xl sm:text-7xl text-[#302622] font-light">
          404
        </h1>

        <h2 className="font-serif text-2xl text-[#302622] font-normal">
          This Bridal Suite is Unoccupied
        </h2>

        <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
          The page you are searching for may have been relocated or updated. Please navigate using our primary directory below.
        </p>

        <div className="pt-4 grid grid-cols-2 gap-3 text-xs uppercase tracking-wider font-semibold">
          <Link
            href="/"
            className="flex items-center justify-center gap-1.5 py-3 px-4 bg-[#302622] hover:bg-[#C6A36A] text-[#FAF7F2] transition-colors rounded-xs"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <Link
            href="/services"
            className="flex items-center justify-center gap-1.5 py-3 px-4 border border-[#E6DCD1] text-[#302622] hover:border-[#C6A36A] hover:bg-[#FAF7F2] transition-colors rounded-xs"
          >
            <span>Services</span>
          </Link>
          <Link
            href="/portfolio"
            className="flex items-center justify-center gap-1.5 py-3 px-4 border border-[#E6DCD1] text-[#302622] hover:border-[#C6A36A] hover:bg-[#FAF7F2] transition-colors rounded-xs"
          >
            <span>Portfolio</span>
          </Link>
          <Link
            href="/book"
            className="flex items-center justify-center gap-1.5 py-3 px-4 bg-[#C6A36A] hover:bg-[#A47F46] text-[#1E1715] transition-colors rounded-xs"
          >
            <span>Book Now</span>
          </Link>
        </div>

        <div className="pt-4 border-t border-[#E6DCD1] text-xs text-neutral-500">
          Need immediate guidance? Call our studio directly at{" "}
          <a href={`tel:${SITE_CONFIG.phone}`} className="text-[#302622] font-semibold underline">
            {SITE_CONFIG.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
