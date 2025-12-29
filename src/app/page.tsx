// import HeroSection from "@/components/main/hero"
// import ProjectsSection from "@/components/main/project-section"
// import ClientSuccessStory from "@/components/main/succes-stories"
// import TestimonialSection from "@/components/main/testimoniall-section"
// import FaqSection from "@/components/main/faqs-section"
// import PricingSection from "@/components/services/pricing-componet"
// import ImageMarquee from "@/components/main/marque"
// import CompetitiveAdvantages from "@/components/main/what-make-us-diffreent"

// export default function Home() {
//   return (

//     <div className="min-h-screen bg-white dark:bg-zinc-900 overflow-x-hidden">
//       <HeroSection />
//       {/* <ServicesSection /> */}
//       {/* <ProfessionalLogoMarquee/> */}
//       <ImageMarquee/>
//       <CompetitiveAdvantages/>
//       {/* <ProjectsSection /> */}
//       <TestimonialSection />
//       {/* <PricingSection/> */}
//       <ClientSuccessStory />
//       <FaqSection />
//    </div>
//   )
// }
import HeroSection from "@/components/main/hero";
import ClientSuccessStory from "@/components/main/succes-stories";
import TestimonialSection from "@/components/main/testimoniall-section";
import FaqSection from "@/components/main/faqs-section";
import { SocialFab } from "@/components/ui/call-to-action-button";
// import FeaturedProjects from "@/components/main/project-section";
import AvatarCluster from "@/components/avatar-cluster";
import ServicesSection from "@/components/main/services-section";
import WhyUsSection from "@/components/main/why-choose-us";
import ProcessSection from "@/components/main/process-section";
import ProjectsGrid from "@/components/project-section";
import CTASection from "@/components/main/cta-buttons";
import AboutFounder from "@/components/main/about-me";
// import PricingSection from "@/components/services/pricing-componet";
// import ProjectSection from "@/components/case-studies";
// import HeroRedesignSection from "./redesign/page"
// import PricingSection from "@/components/services/pricing-componet";
// import ClientBookingPage from "./booking/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 overflow-x-hidden">
      <SocialFab />
      <HeroSection />
      <AvatarCluster />
      <ServicesSection />
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
