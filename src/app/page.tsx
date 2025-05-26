import HeroSection from "@/components/main/hero"
import ProjectsSection from "@/components/main/project-section"
import ClientSuccessStory from "@/components/main/succes-stories"
import TestimonialSection from "@/components/main/testimoniall-section"
import FaqSection from "@/components/main/faqs-section"
import CtaSection from "@/components/main/why-choose-me"
import ProfessionalLogoMarquee from "@/components/main/marquee"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 overflow-x-hidden">
      <HeroSection />
      {/* <ServicesSection /> */}
      <ProfessionalLogoMarquee/>
      <ClientSuccessStory />
      <ProjectsSection />
      <TestimonialSection />
      <FaqSection />
      <CtaSection />
    </div>
  )
}
