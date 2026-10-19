"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO_ITEMS, PortfolioItem } from "@/lib/config";
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles, MessageSquare } from "lucide-react";
import { generateQuickWhatsAppUrl } from "@/lib/whatsapp";

const CATEGORIES = ["All", "Bridal", "Engagement", "Reception", "HD Makeup", "Party Makeup"] as const;

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredItems: PortfolioItem[] = activeCategory === "All"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  const currentItem = selectedImageIndex !== null ? filteredItems[selectedImageIndex] : null;

  const handleNext = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => (prev! + 1) % filteredItems.length);
  }, [selectedImageIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
  }, [selectedImageIndex, filteredItems.length]);

  const handleClose = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, handleClose, handleNext, handlePrev]);

  return (
    <div className="w-full">
      {/* Category Filter Pills */}
      <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-10">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveCategory(cat);
                setSelectedImageIndex(null);
              }}
              className={`px-4 sm:px-5 py-2 text-xs font-semibold tracking-wider uppercase transition-all duration-200 rounded-full border ${
                isActive
                  ? "bg-[#302622] text-[#FAF7F2] border-[#302622] shadow-sm"
                  : "bg-white text-[#302622] border-[#E6DCD1] hover:border-[#C6A36A] hover:bg-[#FAF7F2]"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            className="group relative aspect-[4/5] bg-neutral-100 rounded-sm overflow-hidden cursor-pointer shadow-sm border border-[#E6DCD1] transition-all duration-300 hover:shadow-xl hover:border-[#C6A36A]"
            onClick={() => setSelectedImageIndex(index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedImageIndex(index);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`View enlarged photo: ${item.title}`}
          >
            <Image
              src={item.image}
              alt={`${item.title} - ${item.category} makeup by Aura Bridal Studio`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

            {/* Category tag */}
            <div className="absolute top-3 left-3 bg-[#1E1715]/80 backdrop-blur-xs text-[#FAF7F2] text-[10px] font-medium tracking-widest uppercase px-2.5 py-1 rounded-xs border border-white/10">
              {item.category}
            </div>

            {/* Quick Enlarge Button */}
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-3.5 h-3.5" />
            </div>

            {/* Content Bottom */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[11px] font-medium tracking-wider text-[#DFCAA0] uppercase block mb-1">
                {item.tag}
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-normal leading-snug">
                {item.title}
              </h3>
              <p className="mt-1 text-xs text-neutral-300 font-light line-clamp-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Illustrative Notice */}
      <div className="mt-8 text-center">
        <span className="text-[11px] text-neutral-500 font-light italic">
          * Note: Portfolio works displayed are illustrative high-fashion editorial concepts created for Aura Bridal Studio demonstration.
        </span>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && currentItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label={`Expanded look: ${currentItem.title}`}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#C6A36A]"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation - Prev */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation - Next */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content Box */}
          <div className="max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
            <div className="relative w-full max-w-2xl aspect-[4/5] max-h-[65vh] rounded-xs overflow-hidden border border-white/20">
              <Image
                src={currentItem.image}
                alt={currentItem.title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Captions and Artist Note */}
            <div className="mt-4 text-center max-w-xl text-white px-4">
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="text-xs uppercase tracking-widest text-[#C6A36A]">
                  {currentItem.category} • {currentItem.tag}
                </span>
                <span className="text-neutral-500 text-xs">
                  ({selectedImageIndex + 1} of {filteredItems.length})
                </span>
              </div>
              <h3 className="font-serif text-2xl font-light">
                {currentItem.title}
              </h3>
              <p className="text-xs text-neutral-300 mt-1 font-light">
                {currentItem.description}
              </p>
              <div className="mt-2 text-[11px] text-[#DFCAA0] italic">
                &ldquo;{currentItem.artistNote}&rdquo; — Ananya Sharma
              </div>

              {/* Lightbox Quick WhatsApp CTA */}
              <div className="mt-4 flex items-center justify-center gap-3">
                <a
                  href={generateQuickWhatsAppUrl(`Inquiry about Look: ${currentItem.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C6A36A] hover:bg-white text-[#1E1715] text-xs font-semibold uppercase tracking-wider transition-colors rounded-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Enquire About This Look</span>
                </a>
                <Link
                  href="/book"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 border border-white/30 text-white hover:text-[#C6A36A] hover:border-[#C6A36A] text-xs font-semibold uppercase tracking-wider transition-colors rounded-xs"
                >
                  Book Date
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
