
import HeroSection from "@/components/main/hero";
import ClientSuccessStory from "@/components/main/succes-stories";
import TestimonialSection from "@/components/main/testimoniall-section";
import FaqSection from "@/components/main/faqs-section";
import AvatarCluster from "@/components/avatar-cluster";
import ServicesSection from "@/components/main/services-section";
import WhyUsSection from "@/components/main/why-choose-us";
import ProcessSection from "@/components/main/process-section";
import ProjectsGrid from "@/components/project-section";
import CTASection from "@/components/main/cta-buttons";
import AboutFounder from "@/components/main/about-me";
import CaseStudySection from "@/components/ui/featured-case-study";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 overflow-x-hidden">
      <HeroSection />
      <AvatarCluster />
      <ServicesSection />
      <CaseStudySection/>
      <ProjectsGrid />
      <AboutFounder />
      <WhyUsSection />
      <ProcessSection />
      <TestimonialSection />
      <ClientSuccessStory />
      <FaqSection />
      <CTASection />
    </div>
  );
}
