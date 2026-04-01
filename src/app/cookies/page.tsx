import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | oyik.realestate.ai",
};

export default function CookiesPage() {
  return (
    <div className="container mx-auto px-4 py-32 max-w-4xl">
      <h1 className="text-4xl font-display font-bold mb-8 text-foreground">Cookie Policy</h1>
      <div className="text-muted-foreground space-y-6">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. This policy explains what cookies are and how we use them.</p>
        
        <h2 className="text-2xl font-bold text-foreground mt-8">Essential Cookies</h2>
        <p>These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as maintaining your session with the AI Chat widget across page navigations.</p>
        
        <h2 className="text-2xl font-bold text-foreground mt-8">Analytics Cookies</h2>
        <p>We use analytics (such as Google Analytics 4) to understand how our site is used, measuring factors like time spent on page and interaction with our service demonstrations, so we can improve the user experience.</p>

        <h2 className="text-2xl font-bold text-foreground mt-8">Marketing Cookies</h2>
        <p>Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third-party advertisers.</p>
      </div>
    </div>
  );
}
