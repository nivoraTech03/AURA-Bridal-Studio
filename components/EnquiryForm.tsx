"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { SITE_CONFIG, SERVICES_DATA } from "@/lib/config";
import {
  EnquiryFormData,
  validateEnquiryForm,
  generateWhatsAppUrl,
  formatWhatsAppMessage,
} from "@/lib/whatsapp";
import {
  MessageCircle,
  Calendar,
  User,
  Phone,
  MapPin,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Copy,
  Check,
  Info,
} from "lucide-react";

interface EnquiryFormProps {
  initialService?: string;
  initialPackage?: string;
}

export default function EnquiryForm({
  initialService = "",
  initialPackage = "",
}: EnquiryFormProps) {
  const searchParams = useSearchParams();
  const pkgParam = searchParams.get("package") || initialPackage;
  const srvParam = searchParams.get("service") || initialService;

  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: "",
    whatsappNumber: "",
    serviceType: srvParam || "Bridal Makeup",
    packagePreference: pkgParam || "Signature Bride",
    eventDate: "",
    eventCity: "New Delhi",
    eventVenue: "",
    numberOfPeople: "1 (Bride)",
    additionalMessage: "",
    consentAgreed: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [lastGeneratedUrl, setLastGeneratedUrl] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateEnquiryForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      // Scroll to first error
      const firstErrorKey = Object.keys(validation.errors)[0];
      const errorElement = document.getElementById(`field-${firstErrorKey}`);
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: "smooth", block: "center" });
        errorElement.focus();
      }
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    const result = generateWhatsAppUrl(formData);

    if (result.error) {
      setErrors({ form: result.error });
      setIsSubmitting(false);
      return;
    }

    setLastGeneratedUrl(result.url);

    // Open WhatsApp in new tab safely
    try {
      window.open(result.url, "_blank", "noopener,noreferrer");
    } catch {
      // Fallback
      window.location.href = result.url;
    }

    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  };

  const handleCopyPreview = () => {
    const text = formatWhatsAppMessage(formData);
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const formattedPreview = formatWhatsAppMessage(formData);

  return (
    <div className="w-full max-w-3xl mx-auto bg-white border border-[#E6DCD1] rounded-sm shadow-xl p-6 sm:p-10">
      {/* Form Header */}
      <div className="border-b border-[#E6DCD1]/80 pb-6 mb-8 text-center sm:text-left">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#A47F46] flex items-center justify-center sm:justify-start gap-1.5 mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          Direct Atelier WhatsApp Concierge
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl text-[#302622] font-normal">
          Check Wedding Date Availability
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
          Fill in your wedding details below to generate a pre-formatted enquiry. Your enquiry will open directly in WhatsApp with Ananya Sharma.
        </p>
      </div>

      {/* Global Form Error or Unconfigured notice */}
      {errors.form && (
        <div className="mb-6 p-4 rounded-xs bg-amber-50 border border-amber-300 text-amber-900 text-xs flex items-start gap-3">
          <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">{errors.form}</p>
            <p className="mt-1">
              Please reach us directly at{" "}
              <a href={`tel:${SITE_CONFIG.phone}`} className="underline font-medium">
                {SITE_CONFIG.phone}
              </a>{" "}
              or email{" "}
              <a href={`mailto:${SITE_CONFIG.email}`} className="underline font-medium">
                {SITE_CONFIG.email}
              </a>
              .
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Full Name & WhatsApp Number */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div id="field-fullName">
            <label
              htmlFor="fullName"
              className="block text-xs font-medium uppercase tracking-wider text-[#302622] mb-1.5"
            >
              Full Name <span className="text-rose-600">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Meher Kapoor"
                className={`w-full px-3.5 py-3 text-sm bg-[#FAF7F2]/40 border rounded-xs focus:bg-white transition-colors ${
                  errors.fullName
                    ? "border-rose-400 focus:ring-1 focus:ring-rose-400"
                    : "border-[#E6DCD1] focus:border-[#C6A36A]"
                }`}
                aria-invalid={!!errors.fullName}
                aria-describedby={errors.fullName ? "error-fullName" : undefined}
                required
              />
              <User className="w-4 h-4 text-neutral-400 absolute right-3.5 top-3.5" />
            </div>
            {errors.fullName && (
              <p id="error-fullName" className="mt-1 text-xs text-rose-600">
                {errors.fullName}
              </p>
            )}
          </div>

          <div id="field-whatsappNumber">
            <label
              htmlFor="whatsappNumber"
              className="block text-xs font-medium uppercase tracking-wider text-[#302622] mb-1.5"
            >
              WhatsApp Number <span className="text-rose-600">*</span>
            </label>
            <div className="relative">
              <input
                type="tel"
                id="whatsappNumber"
                name="whatsappNumber"
                value={formData.whatsappNumber}
                onChange={handleChange}
                placeholder="e.g. 9876543210 (10 digits)"
                className={`w-full px-3.5 py-3 text-sm bg-[#FAF7F2]/40 border rounded-xs focus:bg-white transition-colors ${
                  errors.whatsappNumber
                    ? "border-rose-400 focus:ring-1 focus:ring-rose-400"
                    : "border-[#E6DCD1] focus:border-[#C6A36A]"
                }`}
                aria-invalid={!!errors.whatsappNumber}
                aria-describedby={errors.whatsappNumber ? "error-whatsappNumber" : undefined}
                required
              />
              <Phone className="w-4 h-4 text-neutral-400 absolute right-3.5 top-3.5" />
            </div>
            {errors.whatsappNumber && (
              <p id="error-whatsappNumber" className="mt-1 text-xs text-rose-600">
                {errors.whatsappNumber}
              </p>
            )}
          </div>
        </div>

        {/* Service Type & Package Preference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div id="field-serviceType">
            <label
              htmlFor="serviceType"
              className="block text-xs font-medium uppercase tracking-wider text-[#302622] mb-1.5"
            >
              Service Type <span className="text-rose-600">*</span>
            </label>
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className={`w-full px-3.5 py-3 text-sm bg-[#FAF7F2]/40 border rounded-xs focus:bg-white transition-colors ${
                errors.serviceType
                  ? "border-rose-400 focus:ring-1 focus:ring-rose-400"
                  : "border-[#E6DCD1] focus:border-[#C6A36A]"
              }`}
              required
            >
              {SERVICES_DATA.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title}
                </option>
              ))}
              <option value="Multiple Wedding Ceremonies">Multiple Wedding Ceremonies (Package)</option>
              <option value="Destination Wedding Inquiry">Destination Wedding Inquiry</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="packagePreference"
              className="block text-xs font-medium uppercase tracking-wider text-[#302622] mb-1.5"
            >
              Package Preference (Optional)
            </label>
            <select
              id="packagePreference"
              name="packagePreference"
              value={formData.packagePreference}
              onChange={handleChange}
              className="w-full px-3.5 py-3 text-sm bg-[#FAF7F2]/40 border border-[#E6DCD1] rounded-xs focus:bg-white focus:border-[#C6A36A] transition-colors"
            >
              <option value="Essential Bride (₹35,000)">Essential Bride (₹35,000)</option>
              <option value="Signature Bride (₹55,000)">Signature Bride (₹55,000) - Most Popular</option>
              <option value="Luxe Bridal Experience (₹85,000)">Luxe Bridal Experience (₹85,000)</option>
              <option value="Custom Bespoke Quote">Custom Bespoke Quote</option>
            </select>
          </div>
        </div>

        {/* Event Date & City */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div id="field-eventDate">
            <label
              htmlFor="eventDate"
              className="block text-xs font-medium uppercase tracking-wider text-[#302622] mb-1.5"
            >
              Event Date <span className="text-rose-600">*</span>
            </label>
            <div className="relative">
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                min="2026-10-19"
                className={`w-full px-3.5 py-3 text-sm bg-[#FAF7F2]/40 border rounded-xs focus:bg-white transition-colors ${
                  errors.eventDate
                    ? "border-rose-400 focus:ring-1 focus:ring-rose-400"
                    : "border-[#E6DCD1] focus:border-[#C6A36A]"
                }`}
                aria-invalid={!!errors.eventDate}
                aria-describedby={errors.eventDate ? "error-eventDate" : undefined}
                required
              />
              <Calendar className="w-4 h-4 text-neutral-400 absolute right-3.5 top-3.5 pointer-events-none" />
            </div>
            {errors.eventDate && (
              <p id="error-eventDate" className="mt-1 text-xs text-rose-600">
                {errors.eventDate}
              </p>
            )}
          </div>

          <div id="field-eventCity">
            <label
              htmlFor="eventCity"
              className="block text-xs font-medium uppercase tracking-wider text-[#302622] mb-1.5"
            >
              City / Destination <span className="text-rose-600">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                id="eventCity"
                name="eventCity"
                value={formData.eventCity}
                onChange={handleChange}
                placeholder="e.g. New Delhi, Udaipur, Goa"
                className={`w-full px-3.5 py-3 text-sm bg-[#FAF7F2]/40 border rounded-xs focus:bg-white transition-colors ${
                  errors.eventCity
                    ? "border-rose-400 focus:ring-1 focus:ring-rose-400"
                    : "border-[#E6DCD1] focus:border-[#C6A36A]"
                }`}
                aria-invalid={!!errors.eventCity}
                aria-describedby={errors.eventCity ? "error-eventCity" : undefined}
                required
              />
              <MapPin className="w-4 h-4 text-neutral-400 absolute right-3.5 top-3.5" />
            </div>
            {errors.eventCity && (
              <p id="error-eventCity" className="mt-1 text-xs text-rose-600">
                {errors.eventCity}
              </p>
            )}
          </div>
        </div>

        {/* Venue & Number of Guests */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="eventVenue"
              className="block text-xs font-medium uppercase tracking-wider text-[#302622] mb-1.5"
            >
              Wedding Venue / Hotel (Optional)
            </label>
            <input
              type="text"
              id="eventVenue"
              name="eventVenue"
              value={formData.eventVenue}
              onChange={handleChange}
              placeholder="e.g. Taj Palace / Farmhouse / Home"
              className="w-full px-3.5 py-3 text-sm bg-[#FAF7F2]/40 border border-[#E6DCD1] rounded-xs focus:bg-white focus:border-[#C6A36A] transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="numberOfPeople"
              className="block text-xs font-medium uppercase tracking-wider text-[#302622] mb-1.5"
            >
              People Needing Makeup
            </label>
            <input
              type="text"
              id="numberOfPeople"
              name="numberOfPeople"
              value={formData.numberOfPeople}
              onChange={handleChange}
              placeholder="e.g. Bride + 3 Bridesmaids"
              className="w-full px-3.5 py-3 text-sm bg-[#FAF7F2]/40 border border-[#E6DCD1] rounded-xs focus:bg-white focus:border-[#C6A36A] transition-colors"
            />
          </div>
        </div>

        {/* Additional Message / Look Notes */}
        <div>
          <label
            htmlFor="additionalMessage"
            className="block text-xs font-medium uppercase tracking-wider text-[#302622] mb-1.5"
          >
            Special Requests / Outfit Palette / Notes
          </label>
          <textarea
            id="additionalMessage"
            name="additionalMessage"
            rows={3}
            value={formData.additionalMessage}
            onChange={handleChange}
            placeholder="Tell us about your ceremony timings, lehenga color, skin concerns, or inspiration..."
            className="w-full px-3.5 py-3 text-sm bg-[#FAF7F2]/40 border border-[#E6DCD1] rounded-xs focus:bg-white focus:border-[#C6A36A] transition-colors"
          />
        </div>

        {/* Live Message Preview & Copy */}
        <div className="bg-[#FAF7F2] border border-[#E6DCD1] p-4 rounded-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8C662D] flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5" />
              Live WhatsApp Message Preview
            </span>
            <button
              type="button"
              onClick={handleCopyPreview}
              className="inline-flex items-center gap-1 text-[11px] font-medium text-neutral-600 hover:text-[#302622] transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Text</span>
                </>
              )}
            </button>
          </div>
          <pre className="text-xs text-neutral-700 font-mono whitespace-pre-wrap leading-relaxed max-h-36 overflow-y-auto p-2.5 bg-white border border-[#E6DCD1]/60 rounded-xs">
            {formattedPreview}
          </pre>
        </div>

        {/* Consent Checkbox */}
        <div id="field-consentAgreed">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              id="consentAgreed"
              name="consentAgreed"
              checked={formData.consentAgreed}
              onChange={handleChange}
              className="w-4 h-4 rounded-xs text-[#C6A36A] border-[#E6DCD1] focus:ring-[#C6A36A] mt-0.5 cursor-pointer"
            />
            <span className="text-xs text-neutral-600 leading-snug">
              I agree to be contacted via WhatsApp and phone regarding this bridal availability enquiry. I acknowledge this form generates a direct WhatsApp message to the studio. <span className="text-rose-600">*</span>
            </span>
          </label>
          {errors.consentAgreed && (
            <p className="mt-1 text-xs text-rose-600">{errors.consentAgreed}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.99] text-white text-sm font-semibold tracking-widest uppercase transition-all duration-200 shadow-md rounded-xs disabled:opacity-75 disabled:cursor-wait"
          >
            <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
            <span>
              {isSubmitting
                ? "Opening WhatsApp Concierge..."
                : "Send Availability Enquiry via WhatsApp"}
            </span>
          </button>
        </div>

        {/* Step Guide / Honest Transparency */}
        <div className="p-3.5 bg-amber-50/60 border border-amber-200/60 rounded-xs text-xs text-neutral-700 space-y-1">
          <p className="font-semibold text-[#8C662D] flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            How this conversion works:
          </p>
          <p className="text-[11px] leading-relaxed text-neutral-600">
            Tapping the button opens your official WhatsApp app with this enquiry text pre-filled. You must press <strong>&ldquo;Send&rdquo;</strong> inside WhatsApp to transmit your message. We do not store your personal details on external servers.
          </p>
        </div>

        {/* Fallback Contact Links */}
        <div className="pt-4 border-t border-[#E6DCD1] flex flex-wrap items-center justify-between text-xs text-neutral-500 gap-3">
          <span>Need immediate assistance?</span>
          <div className="flex items-center gap-4 font-medium">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="text-[#302622] hover:text-[#C6A36A] underline"
            >
              Direct Call: {SITE_CONFIG.phone}
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-[#302622] hover:text-[#C6A36A] underline"
            >
              Email Concierge
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
