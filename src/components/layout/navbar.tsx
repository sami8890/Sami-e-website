"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, MessageSquare, Briefcase, Award, HelpCircle, Folder } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Enhanced Logo Component
function Logo() {
  return (
    <motion.div className="flex items-center" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
      <div className="w-10 h-10 mr-3 relative">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 100 100"
          aria-hidden="true"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d="M50 10 L90 50 L50 90 L10 50 Z"
            fill="none"
            stroke="url(#logoGradient)"
            strokeWidth="3"
            filter="url(#glow)"
          />
          <path d="M35 50 L50 35 L65 50 L50 65 Z" fill="url(#logoGradient)" filter="url(#glow)" />
        </motion.svg>
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
        Sami-E
      </span>
    </motion.div>
  )
}

// Scroll Progress Indicator
function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = scrollPx / winHeightPx
      setScrollProgress(scrolled)
    }

    window.addEventListener("scroll", updateScrollProgress, { passive: true })
    return () => window.removeEventListener("scroll", updateScrollProgress)
  }, [])

  return (
    <motion.div
      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 origin-left"
      style={{ width: `${scrollProgress * 100}%` }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.1 }}
    />
  )
}

// Main Navigation Component
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const headerRef = useRef<HTMLElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const detectSections = () => {
        const sections = document.querySelectorAll("section[id]")
        const scrollPosition = window.scrollY + 100

        sections.forEach((section) => {
          const sectionTop = (section as HTMLElement).offsetTop
          const sectionHeight = section.clientHeight
          const sectionId = section.getAttribute("id") || ""

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionId)
          }
        })
      }

      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(detectSections)
      } else {
        detectSections()
      }
    }

    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscKey)
    return () => document.removeEventListener("keydown", handleEscKey)
  }, [])

  const navItems = [
    { name: "Services", href: "#services", icon: Briefcase },
    { name: "Projects", href: "#projects", icon: Folder },
    { name: "Testimonials", href: "#testimonial", icon: Award },
    { name: "FAQ", href: "#faq", icon: HelpCircle },
  ]

  const isActive = (href: string) => {
    if (href.startsWith("#")) {
      const sectionId = href.substring(1)
      return activeSection === sectionId
    }
    return false
  }

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const sectionId = href.substring(1)
      const element = document.getElementById(sectionId)
      if (element) {
        setIsMobileMenuOpen(false)
        setActiveSection(sectionId)

        setTimeout(() => {
          const headerHeight = headerRef.current?.offsetHeight || 0
          const elementPosition = element.getBoundingClientRect().top + window.scrollY

          window.scrollTo({
            top: elementPosition - headerHeight,
            behavior: "smooth",
          })
        }, 300)

        return true
      }
    } else if (href === "/") {
      setActiveSection("")
      setIsMobileMenuOpen(false)
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
      return true
    }
    return false
  }

  useEffect(() => {
    const handleTopScroll = () => {
      if (window.scrollY < 100 && pathname === "/") {
        setActiveSection("")
      }
    }

    window.addEventListener("scroll", handleTopScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleTopScroll)
  }, [pathname])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <motion.header
      ref={headerRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/80 backdrop-blur-xl shadow-xl border-b border-slate-200/50" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" aria-label="Home" className="flex items-center space-x-2">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Home link */}
            <motion.div className="relative" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/"
                className="flex items-center gap-2 text-sm font-medium transition-all duration-300 text-slate-700 hover:text-blue-600 relative py-2 px-3 rounded-lg hover:bg-blue-50"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }}
              >
                <Home className="w-4 h-4" />
                Home
              </Link>
            </motion.div>

            {navItems.map((item, index) => {
              const IconComponent = item.icon
              const active = isActive(item.href)

              return (
                <motion.div
                  key={item.href}
                  className="relative"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    className={`
                      flex items-center gap-2 
                      text-sm font-medium 
                      transition-all duration-300 
                      relative py-2 px-3 rounded-lg
                      ${active ? "text-blue-600 bg-blue-50" : "text-slate-700 hover:text-blue-600 hover:bg-blue-50"}
                    `}
                    aria-current={active ? "page" : undefined}
                    onClick={(e) => {
                      if (scrollToSection(item.href)) {
                        e.preventDefault()
                      }
                    }}
                  >
                    <IconComponent className="w-4 h-4" />
                    {item.name}

                    {active && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* Chat Now Button - Desktop */}
          <div className="hidden md:block">
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium border-none shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
                onClick={() => {
                  window.open(
                    "https://wa.me/923701247494?text=Hi%2C%20I%20want%20a%20website",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }}
              >
                <MessageSquare className="mr-2 w-4 h-4" />
                Get Started
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200/50 overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {/* Home link */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href="/"
                  className="flex items-center gap-3 p-4 rounded-xl transition-all duration-300 text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }}
                >
                  <Home className="w-5 h-5" />
                  <span className="font-medium">Home</span>
                </Link>
              </motion.div>

              {navItems.map((item, index) => {
                const IconComponent = item.icon
                const active = isActive(item.href)

                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: (index + 1) * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`
                        flex items-center gap-3 p-4 rounded-xl 
                        transition-all duration-300 font-medium
                        ${
                          active
                            ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 border border-blue-200/50"
                            : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                        }
                      `}
                      onClick={(e) => {
                        if (item.href.startsWith("#")) {
                          e.preventDefault()
                          scrollToSection(item.href)
                        } else {
                          setIsMobileMenuOpen(false)
                        }
                      }}
                      aria-current={active ? "page" : undefined}
                    >
                      <IconComponent className="w-5 h-5" />
                      <span>{item.name}</span>
                      {active && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="ml-auto w-2 h-2 bg-blue-600 rounded-full"
                        />
                      )}
                    </Link>
                  </motion.div>
                )
              })}

              <motion.div
                className="pt-4 mt-4 border-t border-slate-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
                  onClick={() => {
                    window.open(
                      "https://wa.me/923701247494?text=Hi%2C%20I%20want%20a%20website",
                      "_blank",
                      "noopener,noreferrer",
                    )
                    setIsMobileMenuOpen(false)
                  }}
                >
                  <MessageSquare className="mr-2 w-4 h-4" />
                  Get Started
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
