"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SITE_CONFIG } from "@/lib/config";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  ChevronDown,
  Sparkles,
  ArrowRight,
  Crown,
  Calendar,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const signatureServices = [
    {
      title: "Bridal Makeup",
      href: "/services/bridal-makeup",
      badge: "Royal Heritage",
      description: "HD & airbrush velvet base, heirloom jewelry setting & 16-hr tear resistance.",
      price: "From ₹35,000",
    },
    {
      title: "Engagement Makeup",
      href: "/services/engagement-makeup",
      badge: "Dewy Pastel",
      description: "Luminous glass skin, soft romantic waves & pastel floral coordination.",
      price: "From ₹22,000",
    },
    {
      title: "Reception Makeup",
      href: "/services/reception-makeup",
      badge: "Evening Glam",
      description: "Dramatic smokey eyes, sculpted contours & Hollywood red-carpet waves.",
      price: "From ₹25,000",
    },
  ];

  const specializedServices = [
    {
      title: "Party & Sangeet",
      href: "/services/party-makeup",
      badge: "Dance Proof",
      description: "Sweat-resistant, camera-ready glam for bridesmaids & sangeet nights.",
      price: "From ₹12,000",
    },
    {
      title: "Pre-Bridal Skincare",
      href: "/services/pre-bridal",
      badge: "Skin First",
      description: "Botanical facials, jade roller sculpting & 24K gold hydration masks.",
      price: "From ₹18,000",
    },
    {
      title: "Consultation & Trial",
      href: "/services/makeup-consultation",
      badge: "Trial Credit",
      description: "90-min outfit palette mapping & preview in our Mehrauli studio.",
      price: "₹5,000 (Adjustable)",
    },
  ];

  const navLinks = [
    { label: "Services", href: "/services", hasMegaMenu: true },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Packages", href: "/packages" },
    { label: "About", href: "/about" },
    { label: "Journal", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#C6A36A]/25"
          : "bg-[#FAF7F2] border-b border-[#E6DCD1]/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20 lg:h-22 gap-2">
          {/* Brand Wordmark Logo */}
          <Link
            href="/"
            className="flex flex-col items-start focus:outline-none group flex-shrink-0 min-w-0"
            aria-label="Aura Bridal Studio Homepage"
          >
            <span className="font-serif text-lg sm:text-2xl lg:text-3xl tracking-[0.2em] sm:tracking-[0.28em] font-light text-[#302622] group-hover:text-[#A47F46] transition-colors leading-none">
              AURA
            </span>
            <div className="flex items-center gap-1 mt-0.5 sm:mt-1">
              <span className="h-[1px] w-2 sm:w-2.5 bg-[#C6A36A]" />
              <span className="text-[7px] sm:text-[9px] tracking-[0.18em] sm:tracking-[0.32em] uppercase text-[#A47F46] font-medium truncate">
                Bridal Atelier • Mehrauli
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              if (link.hasMegaMenu) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`group inline-flex items-center gap-1 text-[11px] xl:text-xs 2xl:text-[13px] font-medium tracking-[0.12em] xl:tracking-[0.16em] uppercase whitespace-nowrap transition-colors py-2 ${
                        isActive
                          ? "text-[#A47F46] font-semibold"
                          : "text-[#302622] hover:text-[#C6A36A]"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${
                          servicesOpen ? "rotate-180 text-[#C6A36A]" : "text-neutral-400"
                        }`}
                      />
                    </Link>

                    {/* EDITORIAL MEGA-MENU DROPDOWN */}
                    <div
                      className={`absolute -left-48 xl:-left-36 top-full pt-2 w-[780px] xl:w-[840px] transition-all duration-300 ${
                        servicesOpen
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      }`}
                    >
                      <div className="mega-menu-glass rounded-sm p-6 grid grid-cols-12 gap-6 shadow-2xl">
                        {/* Column 1: Signature Ceremonies */}
                        <div className="col-span-4 space-y-3 border-r border-[#C6A36A]/20 pr-4">
                          <div className="flex items-center gap-2 mb-2 pb-2 border-b border-[#E6DCD1]">
                            <Crown className="w-3.5 h-3.5 text-[#C6A36A]" />
                            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#302622]">
                              Signature Looks
                            </span>
                          </div>

                          <div className="space-y-2">
                            {signatureServices.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className={`block p-2.5 rounded-xs transition-all duration-200 group/item border ${
                                  pathname === item.href
                                    ? "bg-white border-[#C6A36A] shadow-xs"
                                    : "border-transparent hover:bg-white hover:border-[#C6A36A]/40"
                                }`}
                              >
                                <div className="flex items-center justify-between gap-1 mb-1">
                                  <span className="font-serif text-sm text-[#302622] font-medium group-hover/item:text-[#A47F46] transition-colors">
                                    {item.title}
                                  </span>
                                  <span className="text-[9px] font-semibold uppercase tracking-wider text-[#8C662D] bg-[#FAF7F2] px-1.5 py-0.5 rounded-xs border border-[#C6A36A]/30">
                                    {item.badge}
                                  </span>
                                </div>
                                <p className="text-[11px] text-neutral-500 font-light line-clamp-2 leading-relaxed">
                                  {item.description}
                                </p>
                                <span className="text-[10px] font-serif text-[#C6A36A] mt-1 block">
                                  {item.price}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Column 2: Specialized Care */}
                        <div className="col-span-4 space-y-3 border-r border-[#C6A36A]/20 pr-4">
                          <div className="flex items-center gap-2 mb-2 pb-2 border-b border-[#E6DCD1]">
                            <Sparkles className="w-3.5 h-3.5 text-[#C6A36A]" />
                            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#302622]">
                              Specialized Care
                            </span>
                          </div>

                          <div className="space-y-2">
                            {specializedServices.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className={`block p-2.5 rounded-xs transition-all duration-200 group/item border ${
                                  pathname === item.href
                                    ? "bg-white border-[#C6A36A] shadow-xs"
                                    : "border-transparent hover:bg-white hover:border-[#C6A36A]/40"
                                }`}
                              >
                                <div className="flex items-center justify-between gap-1 mb-1">
                                  <span className="font-serif text-sm text-[#302622] font-medium group-hover/item:text-[#A47F46] transition-colors">
                                    {item.title}
                                  </span>
                                  <span className="text-[9px] font-semibold uppercase tracking-wider text-[#8C662D] bg-[#FAF7F2] px-1.5 py-0.5 rounded-xs border border-[#C6A36A]/30">
                                    {item.badge}
                                  </span>
                                </div>
                                <p className="text-[11px] text-neutral-500 font-light line-clamp-2 leading-relaxed">
                                  {item.description}
                                </p>
                                <span className="text-[10px] font-serif text-[#C6A36A] mt-1 block">
                                  {item.price}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Column 3: Atelier Spotlight Banner */}
                        <div className="col-span-4 flex flex-col justify-between bg-white border border-[#E6DCD1] p-4 rounded-xs shadow-xs relative overflow-hidden">
                          <div className="relative aspect-[16/10] rounded-xs overflow-hidden mb-3 border border-[#E6DCD1]">
                            <Image
                              src="/images/service_bridal.jpg"
                              alt="Bridal Spotlight"
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                            <div className="absolute bottom-2 left-2 right-2 text-white">
                              <span className="text-[9px] font-semibold tracking-widest uppercase text-[#DFCAA0] block">
                                2026/27 Reservations
                              </span>
                              <span className="font-serif text-xs font-normal">
                                Only 1 Bride Per Ceremony
                              </span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <p className="text-[11px] text-neutral-600 font-light leading-relaxed">
                              Dedicated on-location artistry by lead artist Ananya Sharma for Delhi NCR and destination weddings.
                            </p>
                            <Link
                              href="/services"
                              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#A47F46] hover:text-[#302622] transition-colors pt-1"
                            >
                              <span>View All Services</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative text-[11px] xl:text-xs 2xl:text-[13px] font-medium tracking-[0.12em] xl:tracking-[0.16em] uppercase whitespace-nowrap transition-colors py-2 ${
                    isActive
                      ? "text-[#A47F46] font-semibold"
                      : "text-[#302622] hover:text-[#C6A36A]"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#C6A36A]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs: Clean, Sleek, Single-line */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 flex-shrink-0">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="w-9 h-9 rounded-full border border-[#C6A36A]/40 text-[#302622] hover:text-[#C6A36A] hover:border-[#C6A36A] hover:bg-white flex items-center justify-center transition-all shadow-xs flex-shrink-0"
              title={`Call studio: ${SITE_CONFIG.phone}`}
              aria-label="Call studio telephone"
            >
              <Phone className="w-4 h-4 text-[#A47F46]" />
            </a>

            {/* Guaranteed Single-Line Luxury Pill Button */}
            <Link
              href="/book"
              className="btn-gold whitespace-nowrap px-4 py-2.5 xl:px-5 xl:py-2.5 text-xs font-bold tracking-[0.16em] uppercase rounded-full flex-shrink-0 inline-flex items-center gap-2 shadow-md"
            >
              <Calendar className="w-3.5 h-3.5 text-[#1E1715] flex-shrink-0" />
              <span className="whitespace-nowrap">Book Consultation</span>
            </Link>
          </div>

          {/* Mobile Navigation Header Items (320px - 1023px) */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden flex-shrink-0">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="w-8 h-8 rounded-full border border-[#C6A36A]/40 flex items-center justify-center text-[#302622] bg-white/70 active:scale-95 transition-transform"
              aria-label="Call studio phone"
            >
              <Phone className="w-3.5 h-3.5 text-[#A47F46]" />
            </a>

            <Link
              href="/book"
              className="px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase text-[#1E1715] bg-gradient-to-r from-[#C6A36A] via-[#DFCAA0] to-[#B38B46] rounded-full shadow-xs whitespace-nowrap active:scale-95 transition-transform inline-flex items-center gap-1"
            >
              <Calendar className="w-3 h-3 text-[#1E1715]" />
              <span>Book</span>
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-[#302622] hover:text-[#C6A36A] focus:outline-none p-1 rounded-md"
              aria-label={isOpen ? "Close menu" : "Open navigation menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu (Smooth 320px - 1023px responsiveness) */}
      {isOpen && (
        <div className="lg:hidden bg-[#FAF7F2]/98 backdrop-blur-xl border-b border-[#C6A36A]/30 px-4 py-5 space-y-4 shadow-2xl animate-in slide-in-from-top duration-300 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-2.5 pb-4 border-b border-[#E6DCD1]">
            <Link
              href="/"
              className={`text-xs tracking-widest uppercase font-semibold py-2 px-1 ${
                pathname === "/" ? "text-[#C6A36A]" : "text-[#302622]"
              }`}
            >
              Home
            </Link>

            {/* Mobile Services Accordion */}
            <div className="py-1">
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full flex items-center justify-between text-xs tracking-widest uppercase font-semibold py-2 px-1 text-[#302622]"
              >
                <span>Services Atelier</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    servicesOpen ? "rotate-180 text-[#C6A36A]" : ""
                  }`}
                />
              </button>
              {servicesOpen && (
                <div className="pl-3 mt-1 space-y-2 border-l-2 border-[#C6A36A]/50 py-1.5">
                  <Link
                    href="/services"
                    className="block text-[11px] font-bold tracking-wider uppercase text-[#C6A36A] py-1"
                  >
                    ✦ All Services Overview
                  </Link>
                  <Link
                    href="/services/bridal-makeup"
                    className="block text-[11px] tracking-wider uppercase text-[#302622] py-1"
                  >
                    Bridal Makeup (HD & Airbrush)
                  </Link>
                  <Link
                    href="/services/engagement-makeup"
                    className="block text-[11px] tracking-wider uppercase text-[#302622] py-1"
                  >
                    Engagement Makeup (Dewy Glow)
                  </Link>
                  <Link
                    href="/services/reception-makeup"
                    className="block text-[11px] tracking-wider uppercase text-[#302622] py-1"
                  >
                    Reception Makeup (Evening Glam)
                  </Link>
                  <Link
                    href="/services/party-makeup"
                    className="block text-[11px] tracking-wider uppercase text-[#302622] py-1"
                  >
                    Party & Sangeet Makeup
                  </Link>
                  <Link
                    href="/services/pre-bridal"
                    className="block text-[11px] tracking-wider uppercase text-[#302622] py-1"
                  >
                    Pre-Bridal Skincare Rituals
                  </Link>
                  <Link
                    href="/services/makeup-consultation"
                    className="block text-[11px] tracking-wider uppercase text-[#302622] py-1"
                  >
                    Consultation & Trial Session
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/portfolio"
              className={`text-xs tracking-widest uppercase font-semibold py-2 px-1 ${
                pathname === "/portfolio" ? "text-[#C6A36A]" : "text-[#302622]"
              }`}
            >
              Portfolio Lookbook
            </Link>
            <Link
              href="/packages"
              className={`text-xs tracking-widest uppercase font-semibold py-2 px-1 ${
                pathname === "/packages" ? "text-[#C6A36A]" : "text-[#302622]"
              }`}
            >
              Packages & Pricing
            </Link>
            <Link
              href="/about"
              className={`text-xs tracking-widest uppercase font-semibold py-2 px-1 ${
                pathname === "/about" ? "text-[#C6A36A]" : "text-[#302622]"
              }`}
            >
              About Ananya
            </Link>
            <Link
              href="/blog"
              className={`text-xs tracking-widest uppercase font-semibold py-2 px-1 ${
                pathname.startsWith("/blog") ? "text-[#C6A36A]" : "text-[#302622]"
              }`}
            >
              Beauty Journal
            </Link>
            <Link
              href="/faq"
              className={`text-xs tracking-widest uppercase font-semibold py-2 px-1 ${
                pathname === "/faq" ? "text-[#C6A36A]" : "text-[#302622]"
              }`}
            >
              FAQs & Policies
            </Link>
            <Link
              href="/contact"
              className={`text-xs tracking-widest uppercase font-semibold py-2 px-1 ${
                pathname === "/contact" ? "text-[#C6A36A]" : "text-[#302622]"
              }`}
            >
              Studio Contact
            </Link>
          </div>

          <div className="pt-2 space-y-2.5">
            <Link
              href="/book"
              className="btn-gold w-full flex justify-center py-3.5 rounded-full"
            >
              <Sparkles className="w-4 h-4 text-[#1E1715]" />
              <span>Book Wedding Consultation</span>
            </Link>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello! I would like to enquire about bridal bookings.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 text-xs font-semibold tracking-wider uppercase text-emerald-800 bg-emerald-50 border border-emerald-300 rounded-full"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-600 text-white" />
              <span>Direct WhatsApp Concierge</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
