"use client"

import type * as React from "react"
import { ArrowRight, ExternalLink, Code, Layers, Rocket, ImageIcon } from "lucide-react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badege"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { TechPreview } from "@/components/ui/tech-preview"
import { FeatureList } from "@/components/ui/featured-list"
import { GradientBorder } from "@/components/ui/gradient-border"

interface ServiceCardProps {
  type: "react" | "portfolio" | "landing" | "saas"
  className?: string
  index: number
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}


const ProfessionalButton = ({
  children,
  className = "",
  loading = false,
}: { children: React.ReactNode; className?: string; loading?: boolean }) => (
  <motion.button
    whileHover={{
      boxShadow: "0 10px 30px -10px rgba(0, 210, 133, 0.3)",
      y: -1,
    }}
    whileTap={{
      scale: 0.98,
      boxShadow: "0 5px 15px -5px rgba(0, 210, 133, 0.2)",
      y: 0,
    }}
    transition={{
      duration: 0.2,
      ease: "easeInOut",
    }}
    className={`
      group relative isolate flex items-center justify-center gap-2 
      overflow-hidden rounded-lg px-8 py-3
      bg-gradient-to-r from-[#002C25] to-[#004339]
      text-base font-medium text-[#00D285]
      shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_1px_2px_rgba(0,0,0,0.3)]
      transition-all duration-300
      before:absolute before:inset-0
      before:bg-[linear-gradient(110deg,transparent_45%,rgba(0,210,133,0.1),transparent_55%)]
      before:translate-x-[-100%]
      hover:before:translate-x-[100%]
      before:transition-transform
      before:duration-700
      hover:bg-gradient-to-r
      hover:from-[#003830]
      hover:to-[#005347]
      hover:text-[#00D285]
      focus:outline-none
      focus:ring-2
      focus:ring-[#00D285]/50
      focus:ring-offset-2
      focus:ring-offset-[#001814]
      disabled:cursor-not-allowed
      disabled:opacity-50
      disabled:hover:before:translate-x-[-100%]
      ${loading ? "cursor-wait" : "cursor-pointer"}
      ${className}
    `}
    disabled={loading}
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
        <div className="absolute inset-0 -z-10 bg-[#00D285]/0 transition-colors duration-300 group-hover:bg-[#00D285]/5" />
      </>
    )}
  </motion.button>
)


const ServiceCard: React.FC<ServiceCardProps> = ({ type, index }) => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50 * (index + 1)])

  const features = {
    react: [
      {
        title: "Growth-Oriented Strategies",
        description: "Scale your business with proven development practices",
        icon: <Rocket className="h-4 w-4 text-[#00D285]" />,
      },
      {
        title: "Streamlined Website Management",
        description: "Efficient content updates and maintenance",
        icon: <Layers className="h-4 w-4 text-[#00D285]" />,
      },
      {
        title: "Effortless Data Migration",
        description: "Seamless transition from existing platforms",
        icon: <ArrowRight className="h-4 w-4 text-[#00D285]" />,
      },
      {
        title: "API Integration Solutions",
        description: "Connect with third-party services seamlessly",
        icon: <Code className="h-4 w-4 text-[#00D285]" />,
      },
    ],
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
    saas: [
      {
        title: "Scalable Solutions",
        description: "Adapt to growing user demands and business needs",
        icon: <Layers className="h-4 w-4 text-[#00D285]" />,
      },
      {
        title: "User-Centric Design",
        description: "Intuitive interfaces for enhanced user experience",
        icon: <ArrowRight className="h-4 w-4 text-[#00D285]" />,
      },
      {
        title: "Advanced Security Integration",
        description: "Protect sensitive data with robust security measures",
        icon: <Code className="h-4 w-4 text-[#00D285]" />,
      },
      {
        title: "Real-Time Analytics",
        description: "Monitor performance and make data-driven decisions",
        icon: <Rocket className="h-4 w-4 text-[#00D285]" />,
      },
    ],
  }

  if (type === "react") {
    return (
      <motion.div variants={item} style={{ y }}>
        <GradientBorder>
          <Card className="border-0 bg-gradient-to-br from-[#002F28] to-[#001F1B] p-8">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#001F1B]" />
            <div className="relative">
              <CardHeader className="p-0">
                <Badge
                  variant="outline"
                  className="mb-4 w-fit rounded-full border-[#00D285] bg-[#002C25] px-4 py-1 text-xs font-medium text-[#00D285]"
                >
                  Enterprise Solution
                </Badge>
                <CardTitle className="mb-6 text-4xl font-bold text-white">Enterprise React Development</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8 p-0">
                <FeatureList features={features.react} index={index} />
                <p className="text-sm leading-relaxed text-[#808785]">
                  Build your enterprise-level React website with unique interfaces, multilingual support, and custom
                  animations
                </p>
                <div className="flex gap-4">
                  <TechPreview name="react" />
                  <TechPreview name="next" />
                  <TechPreview name="typescript" />
                  <TechPreview name="tailwind" />
                </div>
              </CardContent>
              <CardFooter className="p-0">
                <button className="group mt-8 flex items-center gap-2 rounded-lg bg-[#002C25] px-8 py-3 text-[#00D285] transition-colors duration-300 hover:bg-[#00D285] hover:text-white">
                  <span className="text-base font-medium">Book a call</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </CardFooter>
            </div>
          </Card>
        </GradientBorder>
      </motion.div>
    )
  }

  if (type === "portfolio") {
    return (
      <motion.div variants={item} style={{ y }}>
        <GradientBorder>
          <Card className="border-0 bg-gradient-to-br from-[#002F28] to-[#001F1B] p-8">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#001F1B]" />
            <div className="relative">
              <CardHeader className="p-0">
                <Badge
                  variant="outline"
                  className="mb-4 w-fit rounded-full border-[#00D285] bg-[#002C25] px-4 py-1 text-xs font-medium text-[#00D285]"
                >
                  Showcase Your Work
                </Badge>
                <CardTitle className="mb-6 text-4xl font-bold text-white">Portfolio Website</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-0">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001F1B] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-60" />
                  <Image
                    src="/placeholder.svg"
                    alt="Portfolio Preview"
                    width={600}
                    height={300}
                    className="w-full transform object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <ProfessionalButton className="absolute bottom-4 right-4 bg-[#002C25]/80 backdrop-blur-sm">
                    View Demo
                    <ExternalLink className="h-4 w-4" />
                  </ProfessionalButton>
                </motion.div>
                <FeatureList features={features.portfolio} index={index} />
                <p className="text-sm leading-relaxed text-[#808785]">
                  Create a stunning portfolio website that showcases your work, skills, and achievements to potential
                  clients and employers.
                </p>
              </CardContent>
              <CardFooter className="p-0">
                <button className="group mt-6 flex items-center gap-2 rounded-lg bg-[#002C25] px-8 py-3 text-[#00D285] transition-colors duration-300 hover:bg-[#00D285] hover:text-white">
                  <span className="text-base font-medium">Start Your Portfolio</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </CardFooter>
            </div>
          </Card>
        </GradientBorder>
      </motion.div>
    )
  }

  if (type === "landing") {
    return (
      <motion.div variants={item} style={{ y }}>
        <GradientBorder>
          <Card className="border-0 bg-gradient-to-br from-[#002F28] to-[#001F1B] p-8">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#001F1B]" />
            <div className="relative">
              <CardHeader className="space-y-6 p-0">
                <div className="flex flex-wrap gap-3">
                  <Badge
                    variant="outline"
                    className="rounded-full border-[#00D285] bg-[#002C25] px-4 py-1 text-xs font-medium text-[#00D285]"
                  >
                    Optimized
                  </Badge>
                  <Badge
                    variant="outline"
                    className="rounded-full border-[#00D285] bg-[#002C25] px-4 py-1 text-xs font-medium text-[#00D285]"
                  >
                    SEO friendly
                  </Badge>
                  <Badge
                    variant="outline"
                    className="rounded-full border-[#00D285] bg-[#002C25] px-4 py-1 text-xs font-medium text-[#00D285]"
                  >
                    Boost sales
                  </Badge>
                </div>
                <CardTitle className="text-4xl font-bold text-white">High-Converting Landing Page</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-0">
                <p className="mt-6 text-sm leading-relaxed text-[#808785]">
                  Get unique user interfaces, engaging content, mobile-friendly design, and eye-catching animations—all
                  crafted to elevate your digital presence
                </p>
                <FeatureList features={features.landing} index={index} />
              </CardContent>
              <CardFooter className="p-0">
                <button className="group mt-6 flex items-center gap-2 rounded-lg bg-[#002C25] px-8 py-3 text-[#00D285] transition-colors duration-300 hover:bg-[#00D285] hover:text-white">
                  <span className="text-base font-medium">Boost Your Conversions</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </CardFooter>
            </div>
          </Card>
        </GradientBorder>
      </motion.div>
    )
  }

  if (type === "saas") {
    return (
      <motion.div variants={item} style={{ y }}>
        <GradientBorder>
          <Card className="border-0 bg-gradient-to-br from-[#002F28] to-[#001F1B] p-8">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#001F1B]" />
            <div className="relative">
              <CardHeader className="p-0">
                <Badge
                  variant="outline"
                  className="mb-4 w-fit rounded-full border-[#00D285] bg-[#002C25] px-4 py-1 text-xs font-medium text-[#00D285]"
                >
                  Cloud Solution
                </Badge>
                <CardTitle className="mb-6 text-4xl font-bold text-white">Custom SaaS Application</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-0">
                <FeatureList features={features.saas} index={index} />
                <p className="text-sm leading-relaxed text-[#808785]">
                  Unlock the potential of SaaS platforms with features that transform business processes and drive
                  sustainable growth.
                </p>
              </CardContent>
              <CardFooter className="p-0">
                <button className="group mt-6 flex items-center gap-2 rounded-lg bg-[#002C25] px-8 py-3 text-[#00D285] transition-colors duration-300 hover:bg-[#00D285] hover:text-white">
                  <span className="text-base font-medium">Transform Your Business</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </CardFooter>
            </div>
          </Card>
        </GradientBorder>
      </motion.div>
    )
  }

  return null
}

export default function ServicesShowcase() {
  return (
    <>
      <ScrollProgress />
      <section className="relative min-h-screen bg-[#001814] py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="container relative mx-auto px-4">
          <motion.div
            className="mb-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge
              variant="outline"
              className="mb-6 rounded-full border-[#00D285] bg-[#002C25] px-6 py-2 text-sm font-medium text-[#00D285]"
            >
              Our Services
            </Badge>
            <h2 className="mb-6 text-4xl font-bold text-white md:text-6xl">
              Personalized Strategies To{" "}
              <div className="relative mt-2 inline-block">
                Drive Your Business Forward
                <div className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-transparent via-[#00D285] to-transparent" />
              </div>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[#808785]">
              From landing page design to enterprise-level web-apps, we create solutions that drive growth and enhance
              user experience
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2"
          >
            <ServiceCard type="react" index={0} />
            <ServiceCard type="portfolio" index={1} />
            <ServiceCard type="landing" index={2} />
            <ServiceCard type="saas" index={3} />
          </motion.div>
        </div>
      </section>
    </>
  )
}

