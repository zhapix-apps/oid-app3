import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Audience from "@/components/sections/Audience";
import Problem from "@/components/sections/Problem";
import Features from "@/components/sections/Features";
import DashboardShowcase from "@/components/sections/DashboardShowcase";
import Integrations from "@/components/sections/Integrations";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Audience />
      <Problem />
      <Features />
      <DashboardShowcase />
      <Integrations />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
