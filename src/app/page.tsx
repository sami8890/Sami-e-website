import { Hero } from '@/components/main/hero'
import { ProjectsSection } from '@/components/main/project-section'
import { FloatingActionButton } from '@/components/floating-action-button'
import ServicesShowcase from '@/components/main/services-section'
import FAQSection from '@/components/main/faqs-section'
import { ProcessSection } from '@/components/main/how-i-work'
import Newsection from '@/components/main/testimoniall-section'


export default function Page() {
  return (
    <main className="min-h-screen ">
      
      <Hero />
      <ProcessSection/>
      <ProjectsSection />
      <Newsection/>
      <FloatingActionButton />
      <ServicesShowcase/>
      <FAQSection/>
    </main>
  )
}

