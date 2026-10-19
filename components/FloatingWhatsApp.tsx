"use client";

import { useState } from "react";
import { SITE_CONFIG } from "@/lib/config";
import { MessageCircle, Phone, X } from "lucide-react";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false); // Clean initial state, doesn't block hero banner

  if (!SITE_CONFIG.whatsappNumber) return null;

  const defaultMessage = encodeURIComponent(
    `Hello ${SITE_CONFIG.businessName}! I am planning my wedding look and would love to enquire about your availability and bridal packages.`
  );
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${defaultMessage}`;

  return (
    <aside
      aria-label="Direct Studio Concierge"
      className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-50 flex items-end gap-3 select-none"
    >
      {/* Tooltip Card (Only opens on click or hover on desktop, never auto-blocks content) */}
      {showTooltip && (
        <div className="hidden sm:flex flex-col bg-white text-[#302622] rounded-md shadow-2xl border border-[#C6A36A]/40 p-3.5 text-xs max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-200 relative mb-1">
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 p-1 text-neutral-400 hover:text-neutral-700"
            aria-label="Dismiss WhatsApp hint"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="font-semibold text-[#8C662D] flex items-center gap-1.5 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Bridal Concierge Online</span>
          </div>
          <p className="text-neutral-600 text-[11px] leading-relaxed">
            Have questions about dates or bridal packages? Chat with Ananya Sharma directly on WhatsApp or call our atelier.
          </p>
        </div>
      )}

      {/* Floating Action Buttons Stack (WhatsApp + Call) */}
      <div className="flex flex-col items-center gap-2">
        {/* Quick WhatsApp Action Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          className="w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-transform duration-200 whatsapp-pulse focus:outline-none focus:ring-4 focus:ring-emerald-300"
          aria-label="Chat directly on WhatsApp with Aura Bridal Studio"
          title="Chat with us on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-[#25D366]" />
        </a>

        {/* Quick Studio Call Action Button */}
        <a
          href={`tel:${SITE_CONFIG.phone}`}
          className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1E1715] hover:bg-[#302622] text-[#DFCAA0] hover:text-white border border-[#C6A36A]/60 rounded-full flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#C6A36A]/30 group"
          aria-label={`Call Aura Bridal Studio directly at ${SITE_CONFIG.phone}`}
          title={`Call studio directly: ${SITE_CONFIG.phone}`}
        >
          <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#C6A36A] group-hover:text-white transition-colors" />
        </a>
      </div>
    </aside>
  );
}
