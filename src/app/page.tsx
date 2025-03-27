import FAQSection from '@/components/main/faqs-section'
import { ProcessSection } from '@/components/main/how-i-work'
import Newsection from '@/components/main/testimoniall-section'
import { SocialFab } from '@/components/ui/call-to-action-button'
import AboutMe from './about/page'
import WhyChooseUs from '@/components/main/why-choose-me'
import EnhancedHeroSection from '@/components/main/hero'
import ProjectsSection from '@/components/main/project-section'
import ServicesShowcase from '@/components/services/services-showcase'


export default function Page() {
  return (
    <main className="min-h-screen ">
      <SocialFab/> 
      <EnhancedHeroSection />
      <ProjectsSection />
      <Newsection/>
      <ServicesShowcase/>
      <AboutMe />
      <WhyChooseUs/>
      <ProcessSection/> 
      <FAQSection/>
    </main> 
  )  
} 
  
