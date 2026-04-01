import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | oyik.realestate.ai",
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-32 max-w-4xl">
      <h1 className="text-4xl font-display font-bold mb-8 text-foreground">Privacy Policy</h1>
      <div className="text-muted-foreground space-y-6">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>
          At oyik.realestate.ai ("we", "us", or "our"), respecting your privacy is a core principle. This Privacy Policy describes how we collect, use, and protect your information when you interact with our AI agents and services.
        </p>
        
        <h2 className="text-2xl font-bold text-foreground mt-8">Information Collection</h2>
        <p>
          We collect information directly from you when you submit forms, use our chatbot, or speak with our voice agents. This includes names, contact details, property preferences, and chat/call transcripts.
        </p>
        
        <h2 className="text-2xl font-bold text-foreground mt-8">How We Use Your Data</h2>
        <p>
          Your data is used strictly to provide real estate services: qualifying leads, booking viewings, sending necessary communications, and training our AI models solely for your agency's use. We do not sell your personal data to third parties.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8">Data Security</h2>
        <p>
          All data is encrypted in transit and at rest. We employ industry-standard security protocols to ensure your CRM and calendar data remain fully secure during integration.
        </p>
      </div>
    </div>
  );
}
