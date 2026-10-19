import { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms & Conditions | Aura Bridal Studio Delhi",
  description:
    "Standard terms of service, booking policies, date reservation advances, and cancellation terms for Aura Bridal Studio.",
};

export default function TermsPage() {
  return (
    <div className="space-y-12 pb-24">
      <Breadcrumbs items={[{ label: "Terms & Conditions", href: "/terms" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <header className="border-b border-[#E6DCD1] pb-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A36A] block mb-2">
            Studio Policies
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#302622] font-light">
            Terms & Conditions
          </h1>
          <p className="mt-2 text-xs text-neutral-500">
            Applicable for all Bridal and Atelier Bookings with {SITE_CONFIG.businessName}
          </p>
        </header>

        <div className="space-y-6 text-xs sm:text-sm text-neutral-700 leading-relaxed font-light">
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#302622] font-normal">
              1. Date Reservation and Booking Confirmation
            </h2>
            <p>
              Due to our strict policy of reserving only one bridal client per wedding ceremony, calendar dates are held on a first-come, first-confirmed basis. A date is formally locked in our studio calendar only upon receipt of the agreed booking advance and a countersigned client agreement. Verbal inquiries or preliminary messages do not constitute a confirmed hold.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#302622] font-normal">
              2. Look Trials and Atelier Consultations
            </h2>
            <p>
              Pre-wedding consultation and trial sessions are hosted at our Mehrauli Studio by prior appointment. If you book our Signature or Luxe Bridal package, the consultation fee is credited against your final booking balance.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#302622] font-normal">
              3. Rescheduling & Cancellation Policy
            </h2>
            <p>
              We understand wedding dates may need to shift due to unforeseen circumstances. If a ceremony date change is requested with at least 30 days prior written notice, advances may be transferred to a new date, subject strictly to calendar availability for the lead artist.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#302622] font-normal">
              4. Outstation Destination Logistics
            </h2>
            <p>
              For destination weddings outside the Delhi NCR boundary, round-trip travel (flights or car transfers) and suitable hotel accommodations at or adjacent to the wedding venue must be arranged for the artist and assistant.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#302622] font-normal">
              5. Concept Demonstration Notice
            </h2>
            <p className="p-4 bg-amber-50/70 border border-amber-200 rounded-xs text-amber-950 font-normal">
              * Note: {SITE_CONFIG.nivora.isFictionalDemoNotice} Rate figures and package descriptions displayed on this website represent sample illustrative pricing for concept evaluation. Formal contracts issued by the studio reflect current seasonal rates upon direct inquiry.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
