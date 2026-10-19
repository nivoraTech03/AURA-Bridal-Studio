import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/config";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Sparkles, Clock, Calendar, ArrowRight, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Bridal Beauty Journal & Expert Advice | Aura Bridal Studio Delhi",
  description:
    "Expert bridal skincare roadmaps, high-definition makeup guides, and wedding look trends curated by professional artist Ananya Sharma.",
};

export default function BlogIndexPage() {
  const featuredPost = BLOG_POSTS[0];
  const otherPosts = BLOG_POSTS.slice(1);

  return (
    <div className="space-y-16 pb-24">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#C6A36A]/40 text-[#8C662D] text-xs font-semibold tracking-[0.2em] uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A36A]" />
            <span>The Beauty Journal</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#302622] font-light tracking-tight">
            Bridal Beauty Journal & Insights
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
            Expert guidance, skin prep timelines, and cosmetic wisdom designed to help every bride feel radiant, educated, and completely at ease.
          </p>
        </div>
      </section>

      {/* Featured Article Card */}
      {featuredPost && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group block bg-white border border-[#E6DCD1] rounded-sm overflow-hidden shadow-sm hover:border-[#C6A36A] hover:shadow-xl transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-full min-h-[300px]">
                <Image
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="lg:col-span-5 p-8 sm:p-12 space-y-4">
                <div className="flex items-center gap-3 text-xs">
                  <span className="px-2.5 py-1 rounded-xs bg-[#FAF7F2] text-[#8C662D] font-semibold uppercase tracking-wider border border-[#C6A36A]/40">
                    {featuredPost.category}
                  </span>
                  <span className="text-neutral-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl text-[#302622] font-normal group-hover:text-[#A47F46] transition-colors leading-snug">
                  {featuredPost.title}
                </h2>

                <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed line-clamp-3">
                  {featuredPost.excerpt}
                </p>

                <div className="pt-4 border-t border-[#E6DCD1]/60 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-neutral-500">
                    <User className="w-3.5 h-3.5 text-[#C6A36A]" />
                    <span>{featuredPost.author.name}</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#A47F46] group-hover:text-[#302622] transition-colors">
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Grid of Other Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl sm:text-3xl text-[#302622] font-light mb-8">
          All Journal Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white border border-[#E6DCD1] rounded-sm overflow-hidden shadow-xs hover:border-[#C6A36A] hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#1E1715]/80 backdrop-blur-xs text-[#FAF7F2] text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-xs">
                  {post.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-3 text-[11px] text-neutral-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.publishDate}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-[#302622] font-normal group-hover:text-[#A47F46] transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-xs text-neutral-600 font-light line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E6DCD1]/60 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#302622] group-hover:text-[#A47F46] transition-colors">
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
