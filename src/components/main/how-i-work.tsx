"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useCallback } from "react"
import { Check, ArrowRight, Lightbulb, Layout, Code, TestTube, Rocket, ArrowLeft } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { Anton } from "next/font/google"
import type { JSX } from "react"

const anton = Anton({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anton",
})

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0)
  const [, setIsMobile] = useState(false)
  const [, setMobileNavOpen] = useState(false)
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  // Check for mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkMobile()

    // Add resize listener
    window.addEventListener("resize", checkMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setActiveStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1))
      } else if (e.key === "ArrowLeft") {
        setActiveStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1))
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  interface Step {
    icon: JSX.Element
    title: string
    description: string
    points: string[]
  }

  const handleStepChange = (index: number): void => {
    setActiveStep(index)
    setMobileNavOpen(false) // Close mobile nav when selecting a step
  }

  const nextStep = useCallback(() => {
    setActiveStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1))
  }, [])

  const prevStep = useCallback(() => {
    setActiveStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1))
  }, [])

  const steps: Step[] = [
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Discovery & Planning",
      description:
        "We start by understanding your vision, goals, and requirements. Through in-depth consultation, we map out a strategic roadmap tailored to your specific needs.",
      points: ["Project scope definition", "Competitive analysis", "Tech stack selection", "Timeline planning"],
    },
    {
      icon: <Layout className="w-10 h-10" />,
      title: "Design & Prototyping",
      description:
        "Your ideas take visual form as we craft intuitive user experiences and engaging interfaces that align perfectly with your brand identity.",
      points: ["Wireframing", "UI/UX design", "Interactive prototypes", "Design system creation"],
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Development",
      description:
        "Our expert developers bring designs to life with clean, efficient code built on modern frameworks for optimal performance and scalability.",
      points: [
        "Front-end development",
        "Back-end integration",
        "Responsive implementation",
        "Performance optimization",
      ],
    },
    {
      icon: <TestTube className="w-10 h-10" />,
      title: "Testing & Refinement",
      description:
        "Rigorous testing across devices and platforms ensures your website functions flawlessly, with continuous refinement based on feedback.",
      points: ["Cross-browser testing", "Mobile responsiveness", "Performance audits", "User feedback integration"],
    },
    {
      icon: <Rocket className="w-10 h-10" />,
      title: "Launch & Support",
      description:
        "We handle deployment with precision, followed by ongoing support to ensure your website continues to evolve and perform at its best.",
      points: ["Deployment preparation", "SEO optimization", "Analytics setup", "Maintenance planning"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }


  return (
    <section
      ref={ref}
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-zinc-950 via-zinc-950/95 to-zinc-950 relative overflow-hidden"
      aria-labelledby="process-heading"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
    radial-gradient(circle, rgba(34, 197, 94, 0.1) 1px, transparent 1px),
    linear-gradient(to right, #1a1a1a 1px, transparent 1px),
    linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)
`,
            backgroundSize: "50px 50px, 50px 50px, 50px 50px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2
            id="process-heading"
            className={`${anton.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal uppercase mb-4 sm:mb-6 text-white`}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-400 to-green-600">
              Our 4‑Step  / Website Process
            </span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 max-w-3xl mx-auto px-2">
            A structured approach designed to transform your vision into a stunning digital reality. Each phase is
            carefully executed to ensure outstanding results.
          </p>

          {/* Keyboard navigation hint */}
          <div className="hidden md:flex items-center justify-center gap-2 mt-4 text-xs text-zinc-500">
            <span>Use</span>
            <kbd className="px-2 py-1 bg-zinc-800 rounded-md text-zinc-300 border border-zinc-700">←</kbd>
            <span>and</span>
            <kbd className="px-2 py-1 bg-zinc-800 rounded-md text-zinc-300 border border-zinc-700">→</kbd>
            <span>keys to navigate</span>
          </div>
        </motion.div>

        {/* Simple mobile navigation */}
        <div className="md:hidden flex justify-center gap-4 mb-8">
          <button
            onClick={prevStep}
            className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-green-400 hover:border-green-500/30 transition-colors flex items-center gap-2"
            aria-label="Previous step"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>
          <button
            onClick={nextStep}
            className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-green-400 hover:bg-green-500/10 hover:border-green-500/30 transition-colors flex items-center gap-2"
            aria-label="Next step"
          >
            <span>Next</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start">
          {/* Process timeline on desktop */}
          <div className="hidden md:block md:col-span-4 lg:col-span-3 sticky top-20 self-start">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-1 rounded-xl backdrop-blur-sm bg-zinc-900/40 p-4 border border-zinc-800/50 shadow-lg shadow-green-900/5"
              role="tablist"
              aria-label="Process steps"
            >
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex items-center p-3 rounded-lg cursor-pointer transition-all duration-300 ${activeStep === index
                      ? "bg-green-900/40 text-green-400 border-l-4 border-green-400"
                      : "hover:bg-zinc-800/40 text-zinc-400 border-l-4 border-transparent"
                    }`}
                  onClick={() => handleStepChange(index)}
                  role="tab"
                  aria-selected={activeStep === index}
                  aria-controls={`step-panel-${index}`}
                  id={`step-tab-${index}`}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleStepChange(index)
                      e.preventDefault()
                    }
                  }}
                >
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full mr-3 ${activeStep === index ? "bg-green-500/20 text-green-400" : "bg-zinc-800 text-zinc-400"
                      }`}
                  >
                    {index + 1}
                  </div>
                  <div className="flex flex-col">
                    <span className={`font-medium ${activeStep === index ? "text-green-400" : "text-zinc-300"}`}>
                      {step.title.split(" ")[0]}
                    </span>

                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Process content */}
          <div className="md:col-span-8 lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-zinc-900/80 to-zinc-900/30 backdrop-blur-sm border border-zinc-800 rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl shadow-green-900/5"
                role="tabpanel"
                id={`step-panel-${activeStep}`}
                aria-labelledby={`step-tab-${activeStep}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-500/20 text-green-400">
                    {steps[activeStep].icon}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{steps[activeStep].title}</h3>
                    <div className="flex items-center gap-1.5 mt-1 text-zinc-400 text-sm">
                      
                    </div>
                  </div>
                </div>

                <p className="text-zinc-300 text-base sm:text-lg mb-6 sm:mb-8">{steps[activeStep].description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {steps[activeStep].points.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 group"
                    >
                      <div className="mt-1 flex-shrink-0 bg-green-500/10 rounded-full p-1 group-hover:bg-green-500/20 transition-colors">
                        <Check className="w-4 h-4 text-green-400" />
                      </div>
                      <span className="text-zinc-200 group-hover:text-white transition-colors">{point}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-800 flex justify-between">
                  <button
                    onClick={prevStep}
                    className="text-zinc-400 hover:text-green-400 transition-colors flex items-center gap-1 min-h-[44px] px-4 py-2 rounded-lg hover:bg-zinc-800/50"
                    aria-label="Previous step"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>
                  <button
                    onClick={nextStep}
                    className="flex items-center gap-1 text-green-400 hover:text-green-300 transition-colors min-h-[44px] px-4 py-2 rounded-lg hover:bg-green-500/10"
                    aria-label="Next step"
                  >
                    <span>Next</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Connector line between steps (visual representation) - Desktop only */}
        <div className="mt-12 sm:mt-16 relative max-w-4xl mx-auto hidden lg:flex justify-between">
          {steps.map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center z-10 transition-colors duration-300 ${index <= activeStep ? "bg-green-500" : "bg-zinc-700"
                  }`}
              >
                {index < activeStep ? (
                  <Check className="w-5 h-5 text-black" />
                ) : (
                  <span className="text-white text-sm">{index + 1}</span>
                )}
              </div>
              {/* Step label */}
              <span className={`text-xs mt-2 ${index <= activeStep ? "text-green-400" : "text-zinc-500"}`}>
                {index === 0 ? "Start" : index === steps.length - 1 ? "Launch" : `Step ${index + 1}`}
              </span>
            </div>
          ))}
          {/* Connecting line */}
          <div className="absolute top-4 left-0 right-0 h-0.5 bg-zinc-700 -z-0 transform -translate-y-1/2">
            <div
              className="h-full bg-green-500 transition-all duration-500"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}

