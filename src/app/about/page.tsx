"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { TextPlugin } from "gsap/dist/TextPlugin"
import { Anton } from "next/font/google"
import Image from "next/image"
import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin)
}

// Load font outside component to prevent re-evaluation
const anton = Anton({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anton",
})

// Animation variants defined outside component to prevent re-creation
const backgroundVariants = {
  animate: {
    backgroundPosition: ["0% 0%", "100% 100%"],
    transition: {
      duration: 20,
      ease: "linear",
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse" as const,
    },
  },
}

const AboutMe = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageWrapperRef = useRef<HTMLDivElement>(null)
  const iconsRef = useRef<HTMLDivElement>(null)
  const hookRef = useRef<HTMLDivElement>(null)
  const [, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isReducedMotion, setIsReducedMotion] = useState(false)

  // Animated text typing effect
  const typed = useRef<gsap.core.Tween | null>(null)
  const typedTextRef = useRef<HTMLSpanElement>(null)

  // Framer Motion scroll effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50])

  // Check for reduced motion preference
  useEffect(() => {
    if (typeof window === "undefined") return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    setIsReducedMotion(prefersReducedMotion)

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  // Mouse movement effect - optimized with throttling
  useEffect(() => {
    if (isReducedMotion) return

    let rafId: number
    let lastUpdateTime = 0
    const THROTTLE_MS = 50 // Only update every 50ms

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now()
      if (now - lastUpdateTime < THROTTLE_MS) return

      lastUpdateTime = now
      rafId = requestAnimationFrame(() => {
        setMousePosition({
          x: (e.clientX / window.innerWidth - 0.5) * 2, // Reduced intensity
          y: (e.clientY / window.innerHeight - 0.5) * 2,
        })
      })
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [isReducedMotion])

  // GSAP animations
  useEffect(() => {
    if (typeof window === "undefined") return

    const section = sectionRef.current
    const heading = headingRef.current
    const content = contentRef.current
    const imageWrapper = imageWrapperRef.current
    const icons = iconsRef.current
    const hook = hookRef.current

    if (!section || !heading || !content || !imageWrapper || !hook || !icons) return

    // Main timeline for coordinated animations
    const masterTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        onEnter: () => setIsVisible(true),
      },
    })

    // Hook animation - attention-grabbing
    if (!isReducedMotion) {
      masterTimeline.fromTo(
        hook,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        0,
      )

      // Animate the highlight underline
      masterTimeline.fromTo(
        hook.querySelector(".highlight-underline"),
        { width: 0 },
        {
          width: "100%",
          duration: 1,
          ease: "power2.inOut",
        },
        0.3,
      )
    } else {
      masterTimeline.fromTo(hook, { opacity: 0 }, { opacity: 1, duration: 0.5 }, 0)
    }

    // Image reveal with mask animation
    if (!isReducedMotion) {
      masterTimeline.fromTo(
        imageWrapper,
        { clipPath: "circle(0% at 50% 50%)" },
        {
          clipPath: "circle(100% at 50% 50%)",
          duration: 1.2,
          ease: "power3.out",
        },
        0.2,
      )
    } else {
      masterTimeline.fromTo(imageWrapper, { opacity: 0 }, { opacity: 1, duration: 0.5 }, 0.2)
    }

    // Social media icons animation
    if (!isReducedMotion && icons) {
      const iconsAnimation = gsap.timeline({ repeat: -1 })
      Array.from(icons.children).forEach((icon, index) => {
        // Initial reveal
        masterTimeline.fromTo(
          icon,
          { scale: 0, rotation: 0, opacity: 0 },
          {
            scale: 1,
            rotation: index % 2 === 0 ? 10 : -10,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          0.4 + index * 0.15,
        )

        // Continuous floating animation
        iconsAnimation
          .to(icon, {
            y: "-=10",
            rotation: index % 2 === 0 ? "+=5" : "-=5",
            duration: 1.5,
            ease: "sine.inOut",
          })
          .to(icon, {
            y: "+=10",
            rotation: index % 2 === 0 ? "-=5" : "+=5",
            duration: 1.5,
            ease: "sine.inOut",
          })
      })
    } else if (icons) {
      // Simplified animation for reduced motion
      masterTimeline.fromTo(icons.children, { opacity: 0 }, { opacity: 1, stagger: 0.1, duration: 0.3 }, 0.4)
    }

    // Typing effect for headline
    if (!isReducedMotion && typedTextRef.current) {
      typed.current = gsap.to(typedTextRef.current, {
        duration: 2,
        text: "crafting digital experiences that leave a lasting impression.",
        ease: "none",
        delay: 1,
      })
    } else if (typedTextRef.current) {
      // Instant text for reduced motion
      typedTextRef.current.textContent = "crafting digital experiences that leave a lasting impression."
    }

    // Content items animation with better staggering
    masterTimeline.fromTo(
      content.querySelectorAll(".content-item"),
      { y: isReducedMotion ? 0 : 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: isReducedMotion ? 0.3 : 0.6,
        stagger: isReducedMotion ? 0.1 : 0.15,
      },
      isReducedMotion ? 0.4 : 1,
    )

    return () => {
      // Clean up animations
      masterTimeline.kill()
      if (typed.current) typed.current.kill()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [isReducedMotion])

  return (
    <motion.section
    id="about"
      ref={sectionRef}
      className="relative bg-black text-white py-16 md:py-24 px-4 md:px-6 lg:px-12 overflow-hidden min-h-screen flex items-center"
      variants={isReducedMotion ? undefined : backgroundVariants}
      animate="animate"
      style={{
        backgroundImage: isReducedMotion
          ? undefined
          : "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
          
      }}
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle, rgba(16, 185, 129, 0.1) 1px, transparent 1px),
              linear-gradient(to right, #1a1a1a 1px, transparent 1px),
              linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px, 50px 50px, 50px 50px",
          }}
        ></div>
      </div>

      {/* Floating elements */}
      {!isReducedMotion && (
        <>
          <div className="absolute top-20 left-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-10 w-52 h-52 bg-emerald-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-1/3 w-64 h-64 bg-emerald-600/5 rounded-full blur-3xl"></div>
        </>
      )}

      <motion.div
        className="container relative z-10 mx-auto max-w-6xl backdrop-blur-sm bg-black/30 rounded-2xl p-6 md:p-8 lg:p-12"
        style={{
          opacity,
          scale,
          y,
          transform: isReducedMotion ? undefined : `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: "transform 0.2s ease-out",
        }}
      >
        {/* Attention-grabbing hook */}
        <div ref={hookRef} className="text-center mb-8 md:mb-12 max-w-3xl mx-auto">
          <motion.h2
            className={`${anton.className} text-3xl md:text-4xl lg:text-5xl font-normal mb-4 tracking-tight uppercase leading-tight`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-emerald-400">BRINGING</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-600">
              DIGITAL VISIONS
            </span>{" "}
            <span className="text-white">TO LIFE</span>
          </motion.h2>
          <div className="relative inline-block">
            <p className="text-lg md:text-xl text-gray-300 font-medium">
              Not just another developer — a{" "}
              <span className="text-emerald-400 relative">
                digital craftsman
                <span className="highlight-underline absolute bottom-0 left-0 h-[2px] bg-emerald-400/50 w-0"></span>
              </span>{" "}
              who turns concepts into captivating experiences.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 relative">
          {/* Left column - Image */}
          <div className="lg:col-span-5 relative">
            {/* Main profile area */}
            <motion.div
              ref={imageWrapperRef}
              className="relative bg-gradient-to-br from-emerald-900/30 to-emerald-600/20 rounded-full p-6 md:p-8 max-w-md mx-auto overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Glowing halo effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-green-600/20 animate-pulse"></div>

              {/* Profile image wrapper */}
              <div className="rounded-full overflow-hidden aspect-square border-4 border-emerald-400/30 relative shadow-2xl shadow-emerald-500/30">
                {/* Profile image */}
                <Image
                  src="/main.png"
                  alt="Your Name"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="text-emerald-400 font-medium">Hello, I&apos;m Your Name</span>
                </div>
              </div>
            </motion.div>

            {/* Floating social media icons */}
            <div ref={iconsRef} className="absolute inset-0">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -top-6 -right-4 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg p-2 shadow-lg transform rotate-12 z-10 hover:scale-110 transition-transform duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-8 h-8 text-white" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-12 -left-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full p-2 shadow-lg z-10 hover:scale-110 transition-transform duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-8 h-8 text-white" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-12 right-0 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg p-2 shadow-lg transform -rotate-12 z-10 hover:scale-110 transition-transform duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-8 h-8 text-white" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-32 -left-4 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg p-2 shadow-lg transform rotate-12 z-10 hover:scale-110 transition-transform duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-8 h-8 text-white" />
              </a>
            </div>
          </div>

          {/* Right column - Content */}
          <div className="lg:col-span-7">
            <div ref={headingRef} className="mb-6 md:mb-8">
              <motion.h2
                className={`${anton.className} text-3xl md:text-4xl lg:text-5xl font-normal mb-4 tracking-tight uppercase`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-white mx-3">ABOUT</span>
                <span className="bg-clip-text text-transparent bg-[#00D69F]">
                  ME
                </span>
              </motion.h2>
              <motion.p
                className="text-lg md:text-xl text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                I specialize in <span ref={typedTextRef} className="text-emerald-400 font-medium"></span>
              </motion.p>
            </div>

            <div ref={contentRef} className="space-y-6 md:space-y-8">
              <motion.div
                className="content-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p className="text-gray-300 leading-relaxed">
                  With 2 years of dedicated experience in web development, I&apos;ve mastered the art of transforming complex
                  ideas into elegant digital solutions. My passion lies in creating immersive user experiences that not
                  only look stunning but also perform flawlessly across all devices.
                </p>
              </motion.div>

              <motion.div
                className="content-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <p className="text-gray-300 leading-relaxed">
                  I believe that great design is not just about aesthetics, but about solving real problems. By
                  combining technical expertise with creative thinking, My approach is always user-centered, ensuring that every project I work on delivers
                  exceptional value and experience.
                </p>
              </motion.div>

           
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default AboutMe

