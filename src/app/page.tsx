import { Hero } from '@/components/main/hero'
import { ProjectsSection } from '@/components/main/project-section'
import  TestimonialsSection  from '@/components/main/gallery'
import { FloatingActionButton } from '@/components/floating-action-button'
import ServicesShowcase from '@/components/main/services-section'
import MainMarquee from '@/components/main/hero-marquee'
import FAQSection from '@/components/main/faqs-section'


export default function Page() {
  return (
    <main className="min-h-screen ">
      
      <Hero />
      <MainMarquee/>
      <ProjectsSection />
      <FloatingActionButton />
      <ServicesShowcase/>
      <TestimonialsSection/>
      <FAQSection/>
    </main>
  )
}

