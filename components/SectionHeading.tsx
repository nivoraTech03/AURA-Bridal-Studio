import { Sparkles } from "lucide-react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={`max-w-3xl ${
        isCenter ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-semibold tracking-[0.22em] uppercase mb-4 ${
            isDark
              ? "bg-[#C6A36A]/15 text-[#DFCAA0] border border-[#C6A36A]/35"
              : "bg-[#FAF7F2] text-[#8C662D] border border-[#C6A36A]/45 shadow-xs"
          } ${isCenter ? "justify-center" : ""}`}
        >
          <Sparkles className="w-3 h-3 text-[#C6A36A] animate-pulse" />
          <span>{eyebrow}</span>
        </div>
      )}

      <h2
        className={`font-serif text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.18] ${
          isDark ? "text-[#FAF7F2]" : "text-[#302622]"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-sm sm:text-base font-light leading-relaxed ${
            isDark ? "text-neutral-400" : "text-neutral-600"
          }`}
        >
          {subtitle}
        </p>
      )}

      {/* Luxury Ornamental Divider */}
      <div
        className={`flex items-center gap-2 mt-6 ${
          isCenter ? "justify-center" : "justify-start"
        }`}
      >
        <span className="w-8 h-[1px] bg-[#C6A36A]/60" />
        <span className="text-[#C6A36A] text-[9px]">❖</span>
        <span className="w-8 h-[1px] bg-[#C6A36A]/60" />
      </div>
    </div>
  );
}
