import type { Metadata, Viewport } from "next";
import { Roboto, Urbanist } from "next/font/google";
import AppShell from "@/components/shared/AppShell";
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
      </head>
      <body className="flex min-h-screen flex-col overflow-x-hidden bg-background font-sans text-foreground">
        <AppShell>{children}</AppShell>
        <script type="module" defer dangerouslySetInnerHTML={{ __html: `
          import Chatbot from "https://cdn.n8nchatui.com/v1/embed.js";
          Chatbot.init({
            "n8nChatUrl": "https://oyik.cloud/webhook/f5f0fe52-ef64-4641-b1b5-a0e72d5110bd/chat",
            "metadata": {}, // Include any custom data to send with each message to your n8n workflow
            "theme": {
              "button": {
                "backgroundColor": "#ffc8b8",
                "right": 20,
                "bottom": 20,
                "size": 50,
                "iconColor": "#373434",
                "customIconSrc": "https://www.svgrepo.com/show/362552/chat-centered-dots-bold.svg",
                "customIconSize": 60,
                "customIconBorderRadius": 15,
                "autoWindowOpen": {
                  "autoOpen": false,
                  "openDelay": 2
                },
                "borderRadius": "rounded",
                "draggable": false
              },
              "tooltip": {
                "showTooltip": true,
                "tooltipMessage": "Hello 👋 customize & connect me to n8n",
                "tooltipBackgroundColor": "#fff9f6",
                "tooltipTextColor": "#1c1c1c",
                "tooltipFontSize": 15,
                "hideTooltipOnMobile": true
              },
              "allowProgrammaticMessage": false,
              "chatWindow": {
                "borderRadiusStyle": "rounded",
                "avatarBorderRadius": 25,
                "messageBorderRadius": 6,
                "showTitle": true,
                "title": "N8N Chat UI Bot",
                "titleAvatarSrc": "https://www.svgrepo.com/show/362552/chat-centered-dots-bold.svg",
                "avatarSize": 40,
                "welcomeMessage": "Hello! This is the default welcome message",
                "errorMessage": "Please connect me to n8n first",
                "backgroundColor": "#ffffff",
                "height": 600,
                "width": 400,
                "fontSize": 16,
                "starterPrompts": [
                  "Who are you?",
                  "What do you do?"
                ],
                "starterPromptFontSize": 15,
                "renderHTML": false,
                "clearChatOnReload": false,
                "showScrollbar": false,
                "botMessage": {
                  "backgroundColor": "#f36539",
                  "textColor": "#fafafa",
                  "showAvatar": true,
                  "avatarSrc": "https://www.svgrepo.com/show/334455/bot.svg",
                  "showCopyToClipboardIcon": false
                },
                "userMessage": {
                  "backgroundColor": "#fff6f3",
                  "textColor": "#050505",
                  "showAvatar": true,
                  "avatarSrc": "https://www.svgrepo.com/show/532363/user-alt-1.svg"
                },
                "textInput": {
                  "placeholder": "Type your query",
                  "backgroundColor": "#ffffff",
                  "textColor": "#1e1e1f",
                  "sendButtonColor": "#f36539",
                  "maxChars": 50,
                  "maxCharsWarningMessage": "You exceeded the characters limit. Please input less than 50 characters.",
                  "autoFocus": false,
                  "borderRadius": 6,
                  "sendButtonBorderRadius": 50
                }
              }
            }
          });
        `}} />
      </body>
    </html>
  );
}
