import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | oyik.realestate.ai",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-32 max-w-4xl">
      <h1 className="text-4xl font-display font-bold mb-8 text-foreground">Terms of Service</h1>
      <div className="text-muted-foreground space-y-6">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>
          By using oyik.realestate.ai services, you agree to these Terms of Service. Our AI systems are provided "as is" to facilitate real estate enquiries, lead qualification, and automated bookings.
        </p>
        
        <h2 className="text-2xl font-bold text-foreground mt-8">1. License and Usage</h2>
        <p>
          You are granted a non-exclusive, non-transferable license to integrate our AI widgets, voice agents, and APIs into your authorized agency websites and social channels. Programmatic abuse or reverse engineering of the AI is strictly prohibited.
        </p>
        
        <h2 className="text-2xl font-bold text-foreground mt-8">2. Liability and Accuracy</h2>
        <p>
          While our AI models (including language and voice) are highly trained specifically for real estate use cases, oyik.realestate.ai is not liable for missed viewings, miscommunications, or inaccuracies in AI-generated responses. You have full control to edit AI knowledge bases and instructions at any time.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8">3. Subscription and Billing</h2>
        <p>
          Services are billed according to your selected tier. Cancellations require 30-day notice. Excess usage of Voice AI minutes or Chat tokens above your tier limits will be billed at the standard overage rate.
        </p>
      </div>
    </div>
  );
}
