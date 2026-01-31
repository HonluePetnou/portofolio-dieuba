import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { ToolsSection } from "@/components/sections/ToolsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TimelineSection />
      <ToolsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <BlogSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
