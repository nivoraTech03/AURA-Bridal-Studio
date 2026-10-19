"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FaqItem {
  id?: string;
  category?: string;
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  allowMultiple?: boolean;
}

export default function FaqAccordion({ items, allowMultiple = false }: FaqAccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]); // Open first by default

  const toggleIndex = (index: number) => {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndices((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className="w-full space-y-4">
      {items.map((faq, index) => {
        const isOpen = openIndices.includes(index);
        const faqId = `faq-item-${index}`;
        const contentId = `faq-content-${index}`;

        return (
          <div
            key={index}
            className={`rounded-sm border transition-all duration-200 ${
              isOpen
                ? "bg-white border-[#C6A36A] shadow-xs"
                : "bg-white/80 border-[#E6DCD1] hover:border-[#C6A36A]/60"
            }`}
          >
            <h3>
              <button
                type="button"
                id={faqId}
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => toggleIndex(index)}
                className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="font-serif text-lg sm:text-xl text-[#302622] font-normal leading-snug">
                  {faq.question}
                </span>
                <span
                  className={`w-7 h-7 rounded-full border border-[#E6DCD1] flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-[#FAF7F2] text-[#C6A36A] border-[#C6A36A]" : "text-neutral-500"
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>
            </h3>

            {isOpen && (
              <div
                id={contentId}
                role="region"
                aria-labelledby={faqId}
                className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-neutral-600 font-light leading-relaxed border-t border-[#E6DCD1]/60 pt-3 animate-in fade-in duration-200"
              >
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
