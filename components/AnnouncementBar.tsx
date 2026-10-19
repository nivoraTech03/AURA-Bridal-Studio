"use client";

import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { Sparkles, ArrowRight } from "lucide-react";

export default function AnnouncementBar() {
  if (!SITE_CONFIG.announcement.enabled) return null;

  return (
    <aside
      aria-label="Studio Announcement"
      className="bg-[#1A1412] text-[#FAF7F2] text-xs py-2 px-2.5 sm:px-4 border-b border-[#C6A36A]/30 relative z-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-1.5 sm:gap-4">
        {/* Left: Sparkling status and text */}
        <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 overflow-hidden">
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C6A36A] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C6A36A]" />
          </span>

          {/* Desktop full text */}
          <span className="hidden md:inline font-light tracking-wide text-xs text-[#E6DCD1] truncate">
            {SITE_CONFIG.announcement.text}
          </span>

          {/* Mobile / 320px compact text */}
          <span className="inline md:hidden font-light tracking-wide text-[10px] sm:text-xs text-[#E6DCD1] truncate">
            ✨ 2026–27 Bridal Dates Open • Limited Slots
          </span>
        </div>

        {/* Right: CTA pill */}
        <Link
          href={SITE_CONFIG.announcement.ctaLink}
          className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#C6A36A]/15 hover:bg-[#C6A36A]/30 border border-[#C6A36A]/40 text-[#DFCAA0] hover:text-[#FAF7F2] text-[9px] sm:text-xs font-semibold tracking-wider sm:tracking-widest uppercase transition-all duration-200 flex-shrink-0"
        >
          <span className="hidden sm:inline">{SITE_CONFIG.announcement.ctaText}</span>
          <span className="inline sm:hidden">Check Dates</span>
          <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
        </Link>
      </div>
    </aside>
  );
}
