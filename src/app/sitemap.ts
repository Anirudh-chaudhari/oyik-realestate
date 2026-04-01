import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://oyik.realestate.ai";
  const routes = [
    "",
    "/services",
    "/services/chat",
    "/services/voice",
    "/services/reminders",
    "/services/maintenance",
    "/services/email",
    "/services/ai-marketing",
    "/about",
    "/how-it-works",
    "/faq",
    "/contact",
    "/privacy",
    "/terms",
    "/cookies",
  ];

  return routes.map((route, index) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/services" ? "weekly" : "monthly",
    priority: index === 0 ? 1 : route.startsWith("/services/") ? 0.88 : 0.76,
  }));
}
