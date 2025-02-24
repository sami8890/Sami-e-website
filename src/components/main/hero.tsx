"use client"

import type React from "react"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, Play, ArrowDown } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap/TextPlugin"
import { anton } from "@/lib/font"  

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin)

// Constants
const SECTION_INTERVAL = 5000
const WATER_ANIMATION_DURATION = 9
const WAVE_ANIMATION_DURATION = 5

const sections = [
  {
    title: "Innovative Solutions",
    description: "We design websites that are more than just pages—they're powerful tools for your business.",
  },
  {
    title: "Expert Team",
    description: "With years of experience, we craft websites that combine creativity and functionality.",
  },
  {
    title: "Global Reach",
    description: "From local startups to global brands, we help businesses connect with their audiences everywhere.",
  },
  {
    title: "Your Vision, Our Mission",
    description: "We're here to bring your ideas to life, building a website that reflects who you are.",
  },
  {
    title: "Future-Ready Designs",
    description: "Our websites are built to grow with your business and keep up with new trends and technologies.",
  },
]

// Animation variants
const animations = {
  waterInside: {
    animate: {
      height: ["10%", "50%", "10%"],
      transition: {
        duration: WATER_ANIMATION_DURATION,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse" as const,
      },
    },
  },
  waterWave: {
    animate: {
      y: ["0%", "-50%"],
      transition: {
        duration: WAVE_ANIMATION_DURATION,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse" as const,
      },
    },
  },
  background: {
    animate: {
      background: [
        "linear-gradient(45deg, #000000, #1a1a1a)",
        "linear-gradient(45deg, #1a1a1a, #000000)",
        "linear-gradient(45deg, #000000, #1a1a1a)",
      ],
      transition: {
        duration: 10,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
      },
    },
  },
}

interface AnimatedButtonProps {
  variant?: "default" | "outline"
  children: React.ReactNode
  onClick?: () => void
  className?: string
  ariaLabel?: string
}

const AnimatedButton = ({ variant = "default", children, onClick, className = "", ariaLabel }: AnimatedButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 1.05,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      })
    }
  }, [])

  const baseStyles =
    "relative overflow-hidden font-semibold py-5 px-6 rounded-full text-lg transition-all duration-300 flex items-center gap-2"
  const variantStyles =
    variant === "outline"
      ? "bg-transparent text-white border-green-400 hover:bg-green-400/10"
      : "bg-gradient-to-r from-green-400 to-emerald-600 hover:opacity-90 text-white shadow-lg hover:shadow-xl"

  return (
    <Button
      ref={buttonRef}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
      aria-label={ariaLabel}
    >
      <motion.div
        animate="animate"
        variants={animations.waterInside}
        className="absolute bottom-0 left-0 w-full z-0 bg-gradient-to-t from-green-300 to-transparent opacity-30"
      >
        <motion.div
          animate="animate"
          variants={animations.waterWave}
          className="absolute bottom-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='0.4' d='M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat-x",
            backgroundSize: "100% 100%",
          }}
        />
      </motion.div>
      <span className="relative z-10">{children}</span>
    </Button>
  )
}

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
}

const VideoModal = ({ isOpen, onClose }: VideoModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && modalRef.current) {
      gsap.from(modalRef.current, {
        scale: 0.5,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
      })
    }

    if (isOpen) {
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = "unset"
      }
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      <div
        ref={modalRef}
        className="bg-gray-900 p-2 rounded-lg max-w-4xl w-full aspect-video relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Product Reviews"
          loading="lazy"
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </motion.div>
  )
}

// Custom hook for intersection observer
const useIntersectionObserver = (ref: React.RefObject<Element>, options: IntersectionObserverInit = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, options)

    observer.observe(element)
    return () => observer.unobserve(element)
  }, [ref, options])

  return { isIntersecting }
}

export function Hero() {
  const [activeSection, setActiveSection] = useState(0)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)

  const { isIntersecting } = useIntersectionObserver(containerRef as React.RefObject<Element>, {
    threshold: 0.1,
    rootMargin: "50px",
  })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.98])

  const handleSectionChange = useCallback(() => {
    setActiveSection((prev) => (prev + 1) % sections.length)
  }, [])

  useEffect(() => {
    if (!isIntersecting) return
    const timer = setInterval(handleSectionChange, SECTION_INTERVAL)
    return () => clearInterval(timer)
  }, [isIntersecting, handleSectionChange])

  useEffect(() => {
    if (titleRef.current && descriptionRef.current) {
      gsap.fromTo(titleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })

      gsap.fromTo(
        descriptionRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" },
      )
    }

    // Set up scroll animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    })

    tl.to(containerRef.current, {
      backgroundPosition: "0% 50%",
      ease: "none",
    })
  }, [])

  return (
    <main>
      <motion.div
        ref={containerRef}
        className="relative min-h-screen text-white font-sans overflow-hidden pt-8"
        variants={animations.background}
        animate="animate"
        aria-label="Hero section"
      >
        {/* Animated Grid Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(to right, #1a1a1a 1px, transparent 1px),
                linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
              animation: "moveGrid 15s linear infinite",
            }}
          ></div>
        </div>

        {/* Main Content */}
        <motion.div
          className="container relative z-10 mx-auto px-4 pt-32 pb-20 min-h-screen flex flex-col justify-center hero-content backdrop-blur-sm bg-black bg-opacity-30"
          style={{ opacity, scale }}
        >
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1
              ref={titleRef}
              className={`${anton.className} text-6xl md:text-8xl font-normal leading-[1.1] text-white drop-shadow-lg tracking-tight uppercase`}
            >
              TURNING <span className="text-emerald-400 mx-1 "> </span>YOUR IDEAS <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-600 drop-shadow-lg">
                INTO STUNNING WEBSITES
              </span>
            </h1>

            <div className="h-20">
              <AnimatePresence mode="wait">
                <motion.p
                  ref={descriptionRef}
                  key={activeSection}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl md:text-2xl text-gray-100 font-light drop-shadow-md"
                >
                  {sections[activeSection].description}
                </motion.p>
              </AnimatePresence>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <AnimatedButton ariaLabel="Get Started" className="relative">
                <span className="flex items-center gap-2">
                  <span>Get Started</span>
                  <ChevronRight className="w-5 h-5" />
                </span>
              </AnimatedButton>

              <AnimatedButton
                variant="outline"
                onClick={() => setIsVideoModalOpen(true)}
                ariaLabel="Watch Reviews"
                className="relative"
              >
                <span className="flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  <span>Watch Reviews</span>
                </span>
              </AnimatedButton>
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <ArrowDown className="w-6 h-6 text-white animate-bounce" aria-hidden="true" />
            <span className="sr-only">Scroll down</span>
          </motion.div>
        </motion.div>

        {/* Video Modal */}
        <AnimatePresence>
          {isVideoModalOpen && <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />}
        </AnimatePresence>
      </motion.div>
      <style jsx global>{`
        @media (max-width: 640px) {
          .hero-content {
            opacity: 0.9 !important;
          }
        }
      `}</style>
    </main>
  )
}

