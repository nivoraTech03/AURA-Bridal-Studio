import { SITE_CONFIG } from "./config";

export interface EnquiryFormData {
  fullName: string;
  whatsappNumber: string;
  serviceType: string;
  packagePreference?: string;
  eventDate: string;
  eventCity: string;
  eventVenue?: string;
  numberOfPeople?: string;
  additionalMessage?: string;
  consentAgreed: boolean;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateEnquiryForm(data: EnquiryFormData): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.fullName.trim() || data.fullName.trim().length < 2) {
    errors.fullName = "Please provide your full name (at least 2 characters).";
  }

  const cleanPhone = data.whatsappNumber.replace(/\D/g, "");
  if (!cleanPhone || cleanPhone.length < 10) {
    errors.whatsappNumber = "Please enter a valid WhatsApp phone number (minimum 10 digits).";
  }

  if (!data.serviceType) {
    errors.serviceType = "Please select a service type.";
  }

  if (!data.eventDate) {
    errors.eventDate = "Please select your intended event date.";
  } else {
    const selectedDate = new Date(data.eventDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (isNaN(selectedDate.getTime())) {
      errors.eventDate = "Please enter a valid date.";
    }
  }

  if (!data.eventCity.trim()) {
    errors.eventCity = "Please provide the event city or region.";
  }

  if (!data.consentAgreed) {
    errors.consentAgreed = "You must confirm consent to be contacted via WhatsApp for this enquiry.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function formatWhatsAppMessage(data: EnquiryFormData): string {
  const lines: string[] = [
    `✨ *NEW BRIDAL ENQUIRY* ✨`,
    `*Studio:* ${SITE_CONFIG.businessName}`,
    `--------------------------------`,
    `👰 *Name:* ${data.fullName.trim()}`,
    `📱 *WhatsApp:* ${data.whatsappNumber.trim()}`,
    `💄 *Service:* ${data.serviceType}`,
    data.packagePreference ? `💎 *Package:* ${data.packagePreference}` : "",
    `📅 *Event Date:* ${data.eventDate}`,
    `📍 *City/Destination:* ${data.eventCity.trim()}`,
    data.eventVenue?.trim() ? `🏛 *Venue:* ${data.eventVenue.trim()}` : "",
    data.numberOfPeople?.trim() ? `👥 *Guests for Makeup:* ${data.numberOfPeople.trim()}` : "",
    data.additionalMessage?.trim() ? `📝 *Notes:* ${data.additionalMessage.trim()}` : "",
    `--------------------------------`,
    `_Sent via ${SITE_CONFIG.businessName} Website Enquiries_`
  ];

  return lines.filter(Boolean).join("\n");
}

export function generateWhatsAppUrl(data: EnquiryFormData): { url: string; error?: string } {
  const rawNumber = SITE_CONFIG.whatsappNumber?.replace(/\D/g, "");
  
  if (!rawNumber || rawNumber.length < 8) {
    return {
      url: "#",
      error: "WhatsApp number is not configured in studio settings. Please contact via phone or email."
    };
  }

  const message = formatWhatsAppMessage(data);
  const encodedText = encodeURIComponent(message);
  return {
    url: `https://wa.me/${rawNumber}?text=${encodedText}`
  };
}

export function generateQuickWhatsAppUrl(context: string): string {
  const rawNumber = SITE_CONFIG.whatsappNumber?.replace(/\D/g, "");
  if (!rawNumber) return "#";

  const message = `Hello ${SITE_CONFIG.businessName}! I am planning my wedding look and would love to enquire regarding: *${context}*. Could you please share your availability and package details?`;
  return `https://wa.me/${rawNumber}?text=${encodeURIComponent(message)}`;
}
