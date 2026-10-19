import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Generate BreadcrumbList JSON-LD schema
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_CONFIG.domain,
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        item: item.href ? `${SITE_CONFIG.domain}${item.href}` : undefined,
      })),
    ],
  };

  return (
    <nav aria-label="Breadcrumb" className="py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <ol className="flex items-center flex-wrap gap-2 text-xs tracking-wider uppercase text-neutral-500 font-medium">
        <li>
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-[#C6A36A] transition-colors"
            title="Return to Home"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-neutral-400 flex-shrink-0" />
              {isLast || !item.href ? (
                <span className="text-[#302622] font-semibold" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-[#C6A36A] transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
