import { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy | Aura Bridal Studio Delhi",
  description:
    "Privacy and data protection policy for Aura Bridal Studio. Learn how your consultation and booking details are respected and handled.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-12 pb-24">
      <Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy-policy" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <header className="border-b border-[#E6DCD1] pb-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A36A] block mb-2">
            Legal & Compliance
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#302622] font-light">
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs text-neutral-500">
            Last Updated: October 2026 • Effective for {SITE_CONFIG.businessName}
          </p>
        </header>

        <div className="space-y-6 text-xs sm:text-sm text-neutral-700 leading-relaxed font-light">
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#302622] font-normal">
              1. Our Privacy Commitment
            </h2>
            <p>
              At {SITE_CONFIG.businessName}, we respect your personal privacy. This Privacy Policy outlines how your contact information, event dates, and consultation preferences are collected and protected when interacting with our studio website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#302622] font-normal">
              2. How WhatsApp Enquiry Data Operates
            </h2>
            <p>
              Our website utilizes a direct client-to-WhatsApp messaging system. When you submit an enquiry form on our site, your entered details (name, phone number, event date, venue, and look preferences) are pre-formatted into a standard text link (<code>https://wa.me/...</code>).
            </p>
            <p>
              Your personal details are transmitted directly through WhatsApp’s end-to-end encrypted messaging network. We do not store, sell, or profile your personal data on external tracking databases.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#302622] font-normal">
              3. Information We Collect
            </h2>
            <p>
              We only collect information willingly provided by you during consultation requests:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Full Name and Contact Telephone/WhatsApp Number.</li>
              <li>Wedding or event date and ceremonial city/venue.</li>
              <li>Makeup service tier and party size preferences.</li>
              <li>Inspiration photos, skin type notes, and wardrobe color palettes shared with us.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#302622] font-normal">
              4. Cookies and Analytical Tracking
            </h2>
            <p>
              This website prioritizes fast loading performance and user privacy. We do not employ third-party advertising cookies or cross-site tracking pixels. Any basic server logs are used exclusively for system reliability and preventing malicious automated spam.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#302622] font-normal">
              5. Contact Us
            </h2>
            <p>
              For questions regarding this privacy policy or to request deletion of any consultation history, please contact our studio administrator at:
            </p>
            <div className="p-4 bg-white border border-[#E6DCD1] rounded-xs space-y-1">
              <p className="font-medium text-[#302622]">{SITE_CONFIG.businessName}</p>
              <p>{SITE_CONFIG.address}</p>
              <p>Email: <a href={`mailto:${SITE_CONFIG.email}`} className="underline">{SITE_CONFIG.email}</a></p>
              <p>Phone: {SITE_CONFIG.phone}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
