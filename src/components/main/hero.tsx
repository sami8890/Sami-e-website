// "use client"

// import type React from "react"
// import { useState, useEffect, useRef, useCallback } from "react"
// import { motion, useScroll, useTransform } from "framer-motion"
// import { ChevronDown } from 'lucide-react'
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { TextPlugin } from "gsap/TextPlugin"
// import { Anton } from 'next/font/google'
// const anton = Anton({
//   weight: ["400"],
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-anton",
// })
// import MainMarquee from "./hero-marquee"
// import { HeroCarousel } from "@/components/hero/hero-carousel"
// import { HeroButtons } from "@/components/hero/hero-buttons"
// import { VideoModal } from "@/components/hero/hero-video-modal"
// import { FloatingElements, useIntersectionObserver } from "@/components/hero/hero-floating-elements"
// import { sections, animations, prefersReducedMotion } from "@/components/hero/hero-data"

// gsap.registerPlugin(ScrollTrigger, TextPlugin)

// export function Hero() {
//   const [activeSection, setActiveSection] = useState(0)
//   const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
//   const [hasScrolled, setHasScrolled] = useState(false)
//   const [isReducedMotion, setIsReducedMotion] = useState(false)

//   const containerRef = useRef<HTMLDivElement>(null)
//   const titleRef = useRef<HTMLHeadingElement>(null)
//   const scrollIndicatorRef = useRef<HTMLDivElement>(null)

//   const { isIntersecting } = useIntersectionObserver(
//     containerRef as React.RefObject<Element>,
//     { threshold: 0.1, rootMargin: "50px" }
//   )

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end start"],
//   })

//   const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
//   const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.98])

//   useEffect(() => {
//     setIsReducedMotion(prefersReducedMotion())
//     const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
//     const handleChange = (e: MediaQueryListEvent) => {
//       setIsReducedMotion(e.matches)
//     }
//     mediaQuery.addEventListener("change", handleChange)
//     return () => mediaQuery.removeEventListener("change", handleChange)
//   }, [])

//   const handleSectionChange = useCallback(() => {
//     setActiveSection((prev) => (prev + 1) % sections.length)
//   }, [])

//   useEffect(() => {
//     if (!isIntersecting) return
//     const timer = setInterval(handleSectionChange, 5000)
//     return () => clearInterval(timer)
//   }, [isIntersecting, handleSectionChange])

//   useEffect(() => {
//     if (titleRef.current && !isReducedMotion) {
//       const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
//       tl.fromTo(
//         titleRef.current,
//         { opacity: 0, y: 30 },
//         { opacity: 1, y: 0, duration: 0.8 }
//       )
//     }
//   }, [isReducedMotion])

//   useEffect(() => {
//     if (isReducedMotion || isVideoModalOpen) return

//     const handleMouseMove = (e: MouseEvent) => {
//       requestAnimationFrame(() => {
//         setMousePosition({
//           x: (e.clientX / window.innerWidth - 0.5) * 10,
//           y: (e.clientY / window.innerHeight - 0.5) * 10,
//         })
//       })
//     }

//     const handleScroll = () => {
//       if (!hasScrolled && window.scrollY > 50) {
//         setHasScrolled(true)
//       }
//     }

//     window.addEventListener("mousemove", handleMouseMove, { passive: true })
//     window.addEventListener("scroll", handleScroll, { passive: true })
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove)
//       window.removeEventListener("scroll", handleScroll)
//     }
//   }, [hasScrolled, isReducedMotion, isVideoModalOpen])

//   useEffect(() => {
//     if (scrollIndicatorRef.current && !hasScrolled && !isReducedMotion) {
//       gsap.to(scrollIndicatorRef.current, {
//         y: 10,
//         opacity: 0.7,
//         duration: 1.5,
//         repeat: -1,
//         yoyo: true,
//         ease: "power1.inOut",
//       })
//     }
//     return () => {
//       if (scrollIndicatorRef.current) {
//         gsap.killTweensOf(scrollIndicatorRef.current)
//       }
//     }
//   }, [hasScrolled, isReducedMotion])

//   const handleScrollDown = () => {
//     if (typeof window !== "undefined") {
//       const targetY = window.innerHeight
//       window.scrollTo({
//         top: targetY,
//         behavior: isReducedMotion ? "auto" : "smooth",
//       })
//       setHasScrolled(true)
//     }
//   }

//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "ArrowLeft") {
//         setActiveSection((prev) => (prev - 1 + sections.length) % sections.length)
//       } else if (e.key === "ArrowRight") {
//         setActiveSection((prev) => (prev + 1) % sections.length)
//       }
//     }
//     window.addEventListener("keydown", handleKeyDown)
//     return () => window.removeEventListener("keydown", handleKeyDown)
//   }, [])

//   const parallaxY = useTransform(
//     scrollYProgress,
//     [0, 1],
//     ["0%", isReducedMotion ? "0%" : "20%"]
//   )

//   return (
//     <main>
//       <motion.div
//         ref={containerRef}
//         className="relative min-h-screen text-white font-sans overflow-hidden pt-8 bg-black"
//         variants={isReducedMotion ? undefined : animations.background}
//         animate="animate"
//         aria-label="Hero section"
//         style={{
//           backgroundImage: isReducedMotion
//             ? undefined
//             : "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
//         }}
//       >
//         <div className="absolute inset-0 z-0 overflow-hidden"
//           style={{ transform: isReducedMotion ? undefined : `translateY(${parallaxY})` }}>
//           <div className="absolute inset-0 bg-black opacity-70"></div>
//           <div className="absolute inset-0 opacity-20"
//             style={{
//               backgroundImage: `
//                                 radial-gradient(circle, rgba(16, 185, 129, 0.1) 1px, transparent 1px),
//                                 linear-gradient(to right, #1a1a1a 1px, transparent 1px),
//                                 linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)
//                             `,
//               backgroundSize: "50px 50px, 50px 50px, 50px 50px",
//               animation: isReducedMotion ? "none" : "moveGrid 15s linear infinite",
//             }}>
//           </div>
//         </div>

//         {!isReducedMotion && <FloatingElements />}

//         <motion.div
//           className="container relative z-10 mx-auto px-4 pt-24 sm:pt-32 pb-20 min-h-screen flex flex-col justify-center hero-content backdrop-blur-sm bg-black bg-opacity-30 rounded-2xl backdrop-filter"
//           style={{
//             opacity,
//             scale,
//             transform: isReducedMotion || isVideoModalOpen
//               ? undefined
//               : `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
//             transition: "transform 0.2s ease-out",
//           }}
//         >
//           <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
//             <h1 ref={titleRef} className={`${anton.className} text-5xl sm:text-6xl space-x-4 md:text-7xl lg:text-8xl font-normal leading-[1.1] text-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.4)] tracking-tight uppercase mb-6 sm:mb-8`}>
//               <motion.span
//                 className="text-emerald-400"
//                 initial={{ opacity: 0, y: isReducedMotion ? 0 : 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//               >
//                 TURNING
//               </motion.span>
//               <motion.span
//                 initial={{ opacity: 0, y: isReducedMotion ? 0 : 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.4 }}
//               >
//                 YOUR IDEAS
//               </motion.span>
//               <br />
//               <motion.span
//                 className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-600 drop-shadow-lg"
//                 initial={{ opacity: 0, y: isReducedMotion ? 0 : 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.6 }}
//               >
//                 INTO STUNNING WEBSITES
//               </motion.span>
//             </h1>

//             <HeroCarousel
//               activeSection={activeSection}
//               setActiveSection={setActiveSection}
//               isReducedMotion={isReducedMotion}
//             />

//             <HeroButtons
//               setIsVideoModalOpen={setIsVideoModalOpen}
//               isReducedMotion={isReducedMotion}
//             />
//           </div>

//           <div className="mt-16 mb-14">
//             <MainMarquee />
//           </div>

//           <motion.div
//             ref={scrollIndicatorRef}
//             className={`flex flex-col items-center absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${hasScrolled ? "opacity-0" : "opacity-100"}`}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: hasScrolled ? 0 : 1 }}
//             transition={{ delay: 1.5 }}
//           >
//             <span className="text-sm text-gray-300 mb-2">Scroll to explore</span>
//             <button
//               onClick={handleScrollDown}
//               className="text-emerald-400 hover:text-emerald-300 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black rounded-full p-1"
//               aria-label="Scroll down"
//             >
//               <ChevronDown className="w-6 h-6" />
//             </button>
//           </motion.div>
//         </motion.div>
//       </motion.div>

//       {isVideoModalOpen && (
//         <VideoModal
//           isOpen={isVideoModalOpen}
//           onClose={() => setIsVideoModalOpen(false)}
//         />
//       )}

//       <style jsx global>{`
//                 @keyframes moveGrid {
//                     0% { background-position: 0 0; }
//                     100% { background-position: 50px 50px; }
//                 }

//                 @media (max-width: 640px) {
//                     .hero-content {
//                         padding: 1rem;
//                         padding-top: 5rem;
//                     }
//                     .hero-content h1 {
//                         font-size: 2.75rem;
//                         line-height: 1.2;
//                         margin-bottom: 1.5rem;
//                     }
//                     .hero-content p {
//                         font-size: 1.125rem;
//                         line-height: 1.5;
//                     }
//                 }

//                 @media (hover: none) {
//                     .hover\\:scale-105:hover,
//                     .hover\\:-translate-y-0\\.5:hover {
//                         transform: none !important;
//                     }
//                     button {
//                         min-height: 44px;
//                         min-width: 44px;
//                     }
//                 }

//                 @media (hover: none) and (max-width: 480px) {
//                     .swipe-hint {
//                         animation: swipeHint 2s ease-in-out 1s;
//                     }
//                     @keyframes swipeHint {
//                         0% { opacity: 0; transform: translate(-80%, -50%); }
//                         20% { opacity: 0.7; transform: translate(-50%, -50%); }
//                         80% { opacity: 0.7; transform: translate(-20%, -50%); }
//                         100% { opacity: 0; transform: translate(10%, -50%); }
//                     }
//                 }

//                 @media (prefers-reduced-motion: reduce) {
//                     .parallax-bg,
//                     * {
//                         transform: none !important;
//                         animation-duration: 0.001ms !important;
//                         animation-iteration-count: 1 !important;
//                         transition-duration: 0.001ms !important;
//                     }
//                 }

//                 @media (hover: none) {
//                     button:active {
//                         transform: scale(0.97) !important;
//                         transition: transform 0.1s !important;
//                     }
//                     .active\\:scale-95:active {
//                         transform: scale(0.95) !important;
//                     }
//                 }

//                 @media (min-width: 480px) {
//                     .xs\\:flex { display: flex; }
//                     .xs\\:hidden { display: none; }
//                 }
//                 @media (max-width: 479px) {
//                     .hidden.xs\\:flex { display: none; }
//                     .xs\\:hidden { display: block; }
//                 }
//             `}</style>
//     </main>
//   )
// }
"use client"

import type React from "react"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Anton } from "next/font/google"
import MainMarquee from "./hero-marquee"
import { HeroCarousel } from "@/components/hero/hero-carousel"
import { HeroButtons } from "@/components/hero/hero-buttons"
import { VideoModal } from "@/components/hero/hero-video-modal"
import { FloatingElements, useIntersectionObserver } from "@/components/hero/hero-floating-elements"
import { sections, prefersReducedMotion } from "@/components/hero/hero-data"

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

export function Hero() {
  const [activeSection, setActiveSection] = useState(0)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hasScrolled, setHasScrolled] = useState(false)
  const [isReducedMotion, setIsReducedMotion] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)

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
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", isReducedMotion ? "0%" : "20%"])

  // Check for reduced motion preference once on mount
  useEffect(() => {
    setIsReducedMotion(prefersReducedMotion())

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  // Section rotation with memoized handler
  const handleSectionChange = useCallback(() => {
    setActiveSection((prev) => (prev + 1) % sections.length)
  }, [])

  useEffect(() => {
    if (!isIntersecting) return

    const timer = setInterval(handleSectionChange, 5000)
    return () => clearInterval(timer)
  }, [isIntersecting, handleSectionChange])

  // Simplified mouse movement effect with throttling
  useEffect(() => {
    if (isReducedMotion || isVideoModalOpen) return

    let rafId: number
    let lastUpdateTime = 0
    const THROTTLE_MS = 50 // Only update every 50ms

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now()
      if (now - lastUpdateTime < THROTTLE_MS) return

      lastUpdateTime = now
      rafId = requestAnimationFrame(() => {
        setMousePosition({
          x: (e.clientX / window.innerWidth - 0.5) * 5, // Reduced intensity
          y: (e.clientY / window.innerHeight - 0.5) * 5,
        })
      })
    }

    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 50) {
        setHasScrolled(true)
      }
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(rafId)
    }
  }, [hasScrolled, isReducedMotion, isVideoModalOpen])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setActiveSection((prev) => (prev - 1 + sections.length) % sections.length)
      } else if (e.key === "ArrowRight") {
        setActiveSection((prev) => (prev + 1) % sections.length)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const handleScrollDown = () => {
    if (typeof window !== "undefined") {
      const targetY = window.innerHeight
      window.scrollTo({
        top: targetY,
        behavior: isReducedMotion ? "auto" : "smooth",
      })
      setHasScrolled(true)
    }
  }

  return (
    <main>
      <motion.div
        ref={containerRef}
        className="relative min-h-screen text-white font-sans overflow-hidden pt-8 bg-black"
        variants={isReducedMotion ? undefined : backgroundVariants}
        animate="animate"
        aria-label="Hero section"
        style={{
          backgroundImage: isReducedMotion
            ? undefined
            : "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        }}
      >
        <div
          className="absolute inset-0 z-0 overflow-hidden"
          style={{ transform: isReducedMotion ? undefined : `translateY(${parallaxY})` }}
        >
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

        {!isReducedMotion && <FloatingElements />}

        <motion.div
          className="container relative z-10 mx-auto px-4 pt-24 sm:pt-32 pb-20 min-h-screen flex flex-col justify-center hero-content backdrop-blur-sm bg-black bg-opacity-30 rounded-2xl backdrop-filter"
          style={{
            opacity,
            scale,
            transform:
              isReducedMotion || isVideoModalOpen ? undefined : `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: "transform 0.2s ease-out",
          }}
        >
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
            <h1
              ref={titleRef}
              className={`${anton.className} text-5xl sm:text-6xl space-x-4 md:text-7xl lg:text-8xl font-normal leading-[1.1] text-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.4)] tracking-tight uppercase mb-6 sm:mb-8`}
            >
              <motion.span
                className="text-emerald-400"
                initial={{ opacity: 0, y: isReducedMotion ? 0 : 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                TURNING
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, y: isReducedMotion ? 0 : 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                YOUR IDEAS
              </motion.span>
              <br />
              <motion.span
                className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-600 drop-shadow-lg"
                initial={{ opacity: 0, y: isReducedMotion ? 0 : 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                INTO STUNNING WEBSITES
              </motion.span>
            </h1>

            <HeroCarousel
              activeSection={activeSection}
              setActiveSection={setActiveSection}
              isReducedMotion={isReducedMotion}
            />

            <HeroButtons setIsVideoModalOpen={setIsVideoModalOpen} isReducedMotion={isReducedMotion} />
          </div>

          <div className="mt-16 mb-14">
            <MainMarquee />
          </div>

          <motion.div
            ref={scrollIndicatorRef}
            className={`flex flex-col items-center absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${hasScrolled ? "opacity-0" : "opacity-100"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: hasScrolled ? 0 : 1 }}
            transition={{ delay: 1.5 }}
          >
            <span className="text-sm text-gray-300 mb-2">Scroll to explore</span>
            <button
              onClick={handleScrollDown}
              className="text-emerald-400 hover:text-emerald-300 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black rounded-full p-1"
              aria-label="Scroll down"
            >
              <ChevronDown className="w-6 h-6" />
            </button>
          </motion.div>
        </motion.div>
      </motion.div>

      {isVideoModalOpen && <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />}

      <style jsx global>{`
        @media (max-width: 640px) {
          .hero-content {
            padding: 1rem;
            padding-top: 5rem;
          }
          .hero-content h1 {
            font-size: 2.75rem;
            line-height: 1.2;
            margin-bottom: 1.5rem;
          }
          .hero-content p {
            font-size: 1.125rem;
            line-height: 1.5;
          }
        }

        @media (hover: none) {
          .hover\\:scale-105:hover,
          .hover\\:-translate-y-0\\.5:hover {
            transform: none !important;
          }
          button {
            min-height: 44px;
            min-width: 44px;
          }
        }

        @media (hover: none) and (max-width: 480px) {
          .swipe-hint {
            animation: swipeHint 2s ease-in-out 1s;
          }
          @keyframes swipeHint {
            0% { opacity: 0; transform: translate(-80%, -50%); }
            20% { opacity: 0.7; transform: translate(-50%, -50%); }
            80% { opacity: 0.7; transform: translate(-20%, -50%); }
            100% { opacity: 0; transform: translate(10%, -50%); }
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .parallax-bg,
          * {
            transform: none !important;
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.001ms !important;
          }
        }

        @media (hover: none) {
          button:active {
            transform: scale(0.97) !important;
            transition: transform 0.1s !important;
          }
          .active\\:scale-95:active {
            transform: scale(0.95) !important;
          }
        }

        @media (min-width: 480px) {
          .xs\\:flex { display: flex; }
          .xs\\:hidden { display: none; }
        }
        @media (max-width: 479px) {
          .hidden.xs\\:flex { display: none; }
          .xs\\:hidden { display: block; }
        }
      `}</style>
    </main>
  )
}

