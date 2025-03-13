"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ArrowRight, ExternalLink, Code, Layers, Rocket, ImageIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badege"

interface ServiceCardProps {
  type: "portfolio" | "landing"
  className?: string
  index: number
}

const ProfessionalButton = ({
  children,
  className = "",
  loading = false,
}: {
  children: React.ReactNode
  className?: string
  loading?: boolean
}) => {
  const [isPressed, setIsPressed] = useState(false)

  return (
    <button
      className={`group relative isolate flex items-center justify-center gap-2 
        overflow-hidden rounded-lg px-8 py-3
        bg-gradient-to-r from-[#00D285]/90 to-[#00D285]
        text-base font-medium text-black
        shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_1px_2px_rgba(0,0,0,0.3)]
        transition-all duration-300
        hover:bg-gradient-to-r
        hover:from-[#00D285]/80
        hover:to-[#00D285]/90
        focus:outline-none
        focus:ring-2
        focus:ring-[#00D285]/50
        focus:ring-offset-2
        focus:ring-offset-[#121212]
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${loading ? "cursor-wait" : "cursor-pointer"}
        ${isPressed ? "scale-[0.98] shadow-[inset_0_1px_1px_rgba(0,0,0,0.1)]" : ""}
        ${className}`}
      disabled={loading}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
    >
      {loading ? (
        <>
          <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span>Processing...</span>
        </>
      ) : (
        <>
          {children}
          <div className="absolute inset-0 -z-10 bg-[#00D285]/0 transition-colors duration-300 group-hover:bg-black/5" />
          <div className="absolute inset-0 -z-5 bg-[linear-gradient(110deg,transparent_45%,rgba(255,255,255,0.2),transparent_55%)] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
        </>
      )}
    </button>
  )
}

const GradientBorder = ({ children }: { children: React.ReactNode }) => (
  <div className="relative rounded-2xl p-[1px] overflow-hidden">
    <div className="absolute inset-0 rounded-2xl bg-[#00D285]/20" />
    <div className="absolute inset-[1px] rounded-2xl bg-[#121212] pointer-events-none" />
    {children}
  </div>
)

interface FeatureType {
  title: string
  description: string
  icon: JSX.Element
}

const FeatureList = ({ features }: { features: FeatureType[] }) => {
  return (
    <div className="space-y-6">
      {features.map((feature) => (
        <div key={feature.title} className="flex items-start gap-3">
          <div className="mt-0.5 rounded-md bg-[#1A1A1A] p-1.5">{feature.icon}</div>
          <div>
            <h3 className="text-sm font-medium text-white">{feature.title}</h3>
            <p className="text-sm text-gray-400">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

const ServiceCard: React.FC<ServiceCardProps> = ({ type, index }) => {
  const features = {
    portfolio: [
      {
        title: "Customizable Design Templates",
        description: "Tailor your portfolio to reflect your unique style",
        icon: <Layers className="h-4 w-4 text-[#00D285]" />,
      },
      {
        title: "Project Showcase Gallery",
        description: "Visually appealing display of your best work",
        icon: <ImageIcon className="h-4 w-4 text-[#00D285]" />,
      },
      {
        title: "Responsive Layouts",
        description: "Ensure your portfolio looks great on any device",
        icon: <ArrowRight className="h-4 w-4 text-[#00D285]" />,
      },
      {
        title: "SEO Optimization",
        description: "Increase visibility and attract more clients",
        icon: <Rocket className="h-4 w-4 text-[#00D285]" />,
      },
    ],
    landing: [
      {
        title: "Compelling Call-to-Actions",
        description: "Drive user engagement and conversions",
        icon: <Rocket className="h-4 w-4 text-[#00D285]" />,
      },
      {
        title: "A/B Testing Integration",
        description: "Optimize your landing page for maximum performance",
        icon: <Layers className="h-4 w-4 text-[#00D285]" />,
      },
      {
        title: "Performance Analytics",
        description: "Track key metrics and gain valuable insights",
        icon: <ArrowRight className="h-4 w-4 text-[#00D285]" />,
      },
      {
        title: "Lead Generation Forms",
        description: "Capture valuable leads and grow your customer base",
        icon: <Code className="h-4 w-4 text-[#00D285]" />,
      },
    ],
  }

  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, index * 200)

    return () => clearTimeout(timer)
  }, [index])

  if (type === "portfolio") {
    return (
      <div
        className={`transition-all duration-700 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <GradientBorder>
          <Card
            className={`border-0 bg-[#121212] p-8 transition-transform duration-300 ${isHovered ? "transform scale-[1.01] shadow-lg shadow-black/40" : "shadow-md shadow-black/20"
              }`}
          >
            <div className="relative">
              <CardHeader className="p-0 pb-6">
                <Badge
                  variant="outline"
                  className="mb-4 w-fit rounded-full border-[#00D285] bg-[#1A1A1A] px-4 py-1 text-xs font-medium text-[#00D285]"
                >
                  Showcase Your Work
                </Badge>
                <CardTitle className="mb-6 text-4xl font-bold text-white">Portfolio Website</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-0">
                <div className="group relative overflow-hidden rounded-2xl">
                  <Image
                    src="/portfolio-website.png"
                    alt="Portfolio Preview"
                    width={600}
                    height={300}
                    className="w-full object-cover"
                  />
                </div>
                <FeatureList features={features.portfolio} />
                <p className="text-base leading-relaxed text-gray-400">
                  Create a stunning portfolio website that showcases your work, skills, and achievements to potential
                  clients and employers. Stand out from the competition with a professional online presence.
                </p>
              </CardContent>
              <CardFooter className="p-0 pt-8">
                <Link
                  href="#"
                  className="group mt-4 flex items-center gap-2 rounded-lg bg-[#1A1A1A] px-8 py-3 text-[#00D285] transition-all duration-300 hover:bg-[#00D285] hover:text-black"
                >
                  <span className="text-base font-medium">Start Your Portfolio</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </CardFooter>
            </div>
          </Card>
        </GradientBorder>
      </div>
    )
  }

  if (type === "landing") {
    return (
      <div
        className={`transition-all duration-700 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <GradientBorder>
          <Card
            className={`border-0 bg-[#121212] p-8 transition-transform duration-300 ${isHovered ? "transform scale-[1.01] shadow-lg shadow-black/40" : "shadow-md shadow-black/20"
              }`}
          >
            <div className="relative">
              <CardHeader className="space-y-6 p-0">
                <div className="flex flex-wrap gap-3">
                  <Badge
                    variant="outline"
                    className="rounded-full border-[#00D285] bg-[#1A1A1A] px-4 py-1 text-xs font-medium text-[#00D285]"
                  >
                    Optimized
                  </Badge>
                  <Badge
                    variant="outline"
                    className="rounded-full border-[#00D285] bg-[#1A1A1A] px-4 py-1 text-xs font-medium text-[#00D285]"
                  >
                    SEO friendly
                  </Badge>
                  <Badge
                    variant="outline"
                    className="rounded-full border-[#00D285] bg-[#1A1A1A] px-4 py-1 text-xs font-medium text-[#00D285]"
                  >
                    Boost sales
                  </Badge>
                </div>
                <CardTitle className="text-4xl font-bold text-white">High-Converting Landing Page</CardTitle>
              </CardHeader>

              <CardContent className="space-y-6 p-0 pt-6">
                <div className="group relative overflow-hidden rounded-2xl">
                  <Image
                    src="/portfolio.png"
                    alt="Portfolio Preview"
                    width={600}
                    height={300}
                    className="w-full object-cover"
                  />
                </div>
                <p className="text-base leading-relaxed text-gray-400">
                  Get unique user interfaces, engaging content, mobile-friendly design, and eye-catching animations—all
                  crafted to elevate your digital presence and drive conversions.
                </p>
                <FeatureList features={features.landing} />
              </CardContent>
              <CardFooter className="p-0 pt-8">
                <Link
                  href="#"
                  className="group mt-4 flex items-center gap-2 rounded-lg bg-[#1A1A1A] px-8 py-3 text-[#00D285] transition-all duration-300 hover:bg-[#00D285] hover:text-black"
                >
                  <span className="text-base font-medium">Boost Your Conversions</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </CardFooter>
            </div>
          </Card>
        </GradientBorder>
      </div>
    )
  }

  return null
}

const VideoComponent = ({ src, label, className }: { src: string; label: string; className?: string }) => {
  return (
    <div className={`relative overflow-hidden rounded-xl aspect-video bg-black/20 shadow-xl ${className}`}>
      <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div className="absolute bottom-4 left-4">
        <Badge
          variant="outline"
          className="rounded-full border-[#00D285] bg-black/50 backdrop-blur-sm px-4 py-1 text-xs font-medium text-[#00D285]"
        >
          {label}
        </Badge>
      </div>
    </div>
  )
}

export default function ServicesShowcase() {
  const [isVisible, setIsVisible] = useState(false)
  const [, setScrollY] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className="relative min-h-screen bg-black py-24">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#00D285]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-[#00D285]/4 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-[#00D285]/3 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container relative mx-auto px-4">
        <div
          className={`mb-20 text-center transition-all duration-700 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <Badge
            variant="outline"
            className="mb-6 rounded-full border-[#00D285] bg-[#1A1A1A] px-6 py-2 text-sm font-medium text-[#00D285]"
          >
            Our Premium Services
          </Badge>
          <h2 className="mb-8 text-4xl font-bold text-white md:text-5xl lg:text-4xl">
            <span className="block">Stunning Digital Experiences</span>
            <span className="block">
              <span className="text-[#00D285]">Designed</span> for Impact
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            From <span className="text-white font-medium">captivating portfolios</span> to{" "}
            <span className="text-white font-medium">high-converting landing pages</span>, we craft tailored digital
            experiences that drive measurable results and elevate your brand.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[1fr,auto] lg:gap-16 justify-center items-start">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-10">
            <ServiceCard type="portfolio" index={0} />
            <ServiceCard type="landing" index={1} />
          </div>

          {/* Sticky Video Section */}
          <div className="w-full lg:w-[450px] space-y-8 self-start sticky top-24 transform transition-all duration-500 hover:translate-y-[-8px]">
            <div className="relative">
              <VideoComponent
                src="/second.mp4"
                label="Portfolio Demo"
                className="shadow-[0_10px_50px_rgba(0,210,133,0.15)]"
              />
              <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-[#00D285]/30 rounded-tr-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-[#00D285]/30 rounded-bl-xl"></div>
            </div>

            <div className="relative">
              <VideoComponent
                src="/dasm.mp4"
                label="Landing Page Demo"
                className="shadow-[0_10px_50px_rgba(0,210,133,0.15)]"
              />
              <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-[#00D285]/30 rounded-tr-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-[#00D285]/30 rounded-bl-xl"></div>
            </div>
          </div>
        </div>

        <div className="mt-32 text-center relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-[#00D285]/5 rounded-3xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to elevate your digital presence?</h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10">
              Our team of experts is ready to help you build the perfect solution for your business needs. Get started
              today and see the difference quality design can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <ProfessionalButton className="px-8 py-4 text-base">
                Schedule a Consultation
                <ArrowRight className="h-4 w-4 ml-2" />
              </ProfessionalButton>
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-2 text-[#00D285] hover:text-black transition-colors duration-300 px-8 py-4 rounded-lg border border-[#00D285]/30 hover:border-[#00D285] hover:bg-[#00D285]"
              >
                <span>View Our Portfolio</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}