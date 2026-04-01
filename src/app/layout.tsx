import type { Metadata, Viewport } from "next";
import { Roboto, Urbanist } from "next/font/google";
import AppShell from "@/components/shared/AppShell";
import "@n8n/chat/dist/style.css";
import "./globals.css";

const fontSans = Roboto({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fontMono = Roboto({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const fontDisplay = Urbanist({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f7f5f0",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://oyik.realestate.ai"),
  title: {
    default: "oyik.realestate.ai | Luxury AI Automation for Real Estate Growth",
    template: "%s | oyik.realestate.ai",
  },
  description:
    "oyik.realestate.ai helps real estate businesses automate website chat, voice calls, lead qualification, viewing bookings, reminders, maintenance intake, and AI property marketing with a premium client experience.",
  keywords: [
    "real estate AI",
    "real estate chatbot",
    "real estate voice agents",
    "property viewing automation",
    "maintenance intake automation",
    "real estate marketing automation",
    "AI employees for real estate",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://oyik.realestate.ai",
    title: "oyik.realestate.ai | Luxury AI Automation for Real Estate Growth",
    description:
      "Premium AI systems for real estate teams across chat, voice, booking, reminders, maintenance intake, and property marketing.",
    siteName: "oyik.realestate.ai",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "oyik.realestate.ai luxury real estate AI automation website",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "oyik.realestate.ai | Luxury AI Automation for Real Estate Growth",
    description:
      "Premium AI systems for real estate businesses that want faster lead response, better qualification, and more booked viewings.",
    creator: "@oyikai",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "oyik.realestate.ai",
  operatingSystem: "Web",
  applicationCategory: "BusinessApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "A luxury AI automation platform for real estate businesses, covering website chat, voice agents, lead qualification, viewing bookings, maintenance intake, reminders, email automation, and AI marketing.",
  provider: {
    "@type": "Organization",
    name: "oyik.realestate.ai",
    url: "https://oyik.realestate.ai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontMono.variable} ${fontDisplay.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="module" defer src="/chatbot.js"></script>
      </head>
      <body className="flex min-h-screen flex-col overflow-x-hidden bg-background font-sans text-foreground">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
