import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import FinalCTA from "@/components/sections/FinalCTA";
import Logos from "@/components/sections/Logos";
import Testimonials from "@/components/sections/Testimonials";
import ContactFormSection from "@/components/sections/ContactFormSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 w-full min-h-screen bg-background">
      <Hero />
      <Products />
      <Logos />
      <HowItWorks />
      <Features />
      <Testimonials />
      <FinalCTA />
      <ContactFormSection />
    </div>
  );
}
