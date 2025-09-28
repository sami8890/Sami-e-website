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
import HeroSection from "@/components/main/hero"
import ClientSuccessStory from "@/components/main/succes-stories"
import TestimonialSection from "@/components/main/testimoniall-section"
import FaqSection from "@/components/main/faqs-section"
// import { SocialFab } from "@/components/ui/call-to-action-button"
// import HeroRedesignSection from "./redesign/page"
import PricingSection from "@/components/services/pricing-componet"
// import SmoothScroll from "@/components/ui/SmoothScroll"


export default function Home() {
  return (
      <div className="min-h-screen bg-white dark:bg-zinc-900 overflow-x-hidden">
        {/* <SocialFab/> */}
        <HeroSection />

        {/* <ProjectsSection /> */}
        <TestimonialSection />
        <ClientSuccessStory />
        {/* <HeroRedesignSection/> */}
        <PricingSection/>
        <FaqSection />

      </div>
  )
}

