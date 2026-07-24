import { AboutInstructorSection } from "@/components/home/about-instructor-section";
import { FaqSection } from "@/components/home/faq-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { HeroSection } from "@/components/home/hero-section";
import { PricingSection } from "@/components/home/pricing-section";
import { ScheduleLocationSection } from "@/components/home/schedule-location-section";
import { SiteFooter } from "@/components/home/site-footer";
import { SubjectsSection } from "@/components/home/subjects-section";
import { WhyChooseSection } from "@/components/home/why-choose-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <WhyChooseSection />
      <SubjectsSection />
      <PricingSection />
      <ScheduleLocationSection />
      <AboutInstructorSection />
      <FaqSection />
      <FinalCtaSection />
      <SiteFooter />
    </main>
  );
}
