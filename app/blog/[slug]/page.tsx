import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS, SITE_CONFIG } from "@/lib/config";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  Calendar,
  Clock,
  User,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Share2,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title} | ${SITE_CONFIG.businessName}`,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage }],
      authors: [post.author.name],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  // Article JSON-LD Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    image: `${SITE_CONFIG.domain}${post.coverImage}`,
    datePublished: "2026-10-14T09:00:00+05:30",
    dateModified: "2026-10-14T09:00:00+05:30",
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.businessName,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.domain}/images/hero_bride.jpg`,
      },
    },
    description: post.excerpt,
  };

  const shareText = encodeURIComponent(`Read "${post.title}" on ${SITE_CONFIG.businessName}: ${SITE_CONFIG.domain}/blog/${post.slug}`);
  const whatsappShareUrl = `https://wa.me/?text=${shareText}`;

  return (
    <article className="space-y-12 pb-24">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="flex items-center justify-center gap-2">
          <span className="px-3 py-1 rounded-full bg-[#FAF7F2] text-[#8C662D] text-xs font-semibold uppercase tracking-wider border border-[#C6A36A]/40">
            {post.category}
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#302622] font-light leading-tight tracking-tight">
          {post.title}
        </h1>

        <div className="flex items-center justify-center flex-wrap gap-4 text-xs text-neutral-500 pt-2 border-y border-[#E6DCD1]/60 py-3">
          <span className="flex items-center gap-1.5 font-medium text-[#302622]">
            <User className="w-3.5 h-3.5 text-[#C6A36A]" />
            {post.author.name} ({post.author.role})
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-neutral-400" />
            {post.publishDate}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-neutral-400" />
            {post.readTime}
          </span>
        </div>
      </header>

      {/* Article Cover Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[16/9] rounded-sm overflow-hidden border border-[#E6DCD1] shadow-xl">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 80vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Article Body & Key Takeaways */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Key Takeaways Box */}
        {post.keyTakeaways && post.keyTakeaways.length > 0 && (
          <div className="bg-[#FAF7F2] border-l-4 border-[#C6A36A] p-6 rounded-r-xs shadow-xs space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#8C662D] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A36A]" />
              Key Atelier Takeaways
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-700">
              {post.keyTakeaways.map((point, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C6A36A] flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Content Paragraphs */}
        <div className="space-y-8 text-neutral-700 text-sm sm:text-base leading-relaxed font-light">
          {post.content.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#302622] font-normal pt-2">
                {section.heading}
              </h2>
              {section.body.map((p, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>

        {/* Share Strip */}
        <div className="pt-8 border-t border-[#E6DCD1] flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#302622] hover:text-[#C6A36A] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Articles</span>
          </Link>

          <a
            href={whatsappShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 border border-emerald-300 text-xs font-semibold uppercase tracking-wider hover:bg-emerald-100 transition-colors rounded-xs"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-[#E6DCD1]">
          <h3 className="font-serif text-2xl sm:text-3xl text-[#302622] font-light mb-8 text-center sm:text-left">
            Related Bridal Reads
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="group bg-white border border-[#E6DCD1] p-5 rounded-sm hover:border-[#C6A36A] shadow-xs transition-all flex gap-4 items-center"
              >
                <div className="relative w-24 h-24 rounded-xs overflow-hidden flex-shrink-0">
                  <Image
                    src={r.coverImage}
                    alt={r.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-semibold text-[#C6A36A]">
                    {r.category}
                  </span>
                  <h4 className="font-serif text-base text-[#302622] group-hover:text-[#A47F46] line-clamp-2 leading-snug">
                    {r.title}
                  </h4>
                  <span className="text-[11px] text-neutral-400 block">
                    {r.readTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
