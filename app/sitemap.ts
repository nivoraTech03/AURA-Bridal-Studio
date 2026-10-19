import { MetadataRoute } from "next";
import { SITE_CONFIG, SERVICES_DATA, BLOG_POSTS } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.domain;

  const staticRoutes = [
    "",
    "/services",
    "/portfolio",
    "/packages",
    "/book",
    "/contact",
    "/about",
    "/faq",
    "/blog",
    "/privacy-policy",
    "/terms",
    "/nivora-case-study",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-10-19"),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const serviceRoutes = SERVICES_DATA.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date("2026-10-19"),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date("2026-10-19"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
