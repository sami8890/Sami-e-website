"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, Briefcase, Award, Info, HelpCircle, MessageSquare } from "lucide-react"

// Optimized Logo Component
function Logo() {
  return (
    <div className="flex items-center">
      <div className="w-10 h-10 mr-2 relative">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 100 100" aria-hidden="true">
          <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="none" stroke="url(#logoGradient)" strokeWidth="4" />
          <path d="M35 50 L50 35 L65 50 L50 65 Z" fill="url(#logoGradient)" />
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34D399" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
        Sami-E
      </span>
    </div>
  )
}

// Main Navigation Component
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [isHamburgerVisible, setIsHamburgerVisible] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const pathname = usePathname()

  // Check viewport dimensions for hamburger menu
  useEffect(() => {
    const checkViewport = () => {
      setIsHamburgerVisible(window.innerWidth <= 984 && window.innerHeight <= 1033)
    }

    // Initial check
    checkViewport()

    // Add event listener for resize
    window.addEventListener("resize", checkViewport)

    // Cleanup
    return () => window.removeEventListener("resize", checkViewport)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Optimize section detection with requestIdleCallback if available
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

    // Throttle scroll event for better performance
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

  // Accessibility: Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Close mobile menu when escape key is pressed
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
    {
      name: "Works",
      href: "#work",
      icon: Briefcase,
    },
    {
      name: "Testimonials",
      href: "#testimonial",
      icon: Award,
    },
    {
      name: "About",
      href: "#about",
      icon: Info,
    },
    {
      name: "FAQ",
      href: "#faq",
      icon: HelpCircle,
    },
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
        // Close mobile menu first to prevent layout shifts
        setIsMobileMenuOpen(false)

        // Set active section immediately on click
        setActiveSection(sectionId)

        // Small delay to ensure the menu is closed before scrolling
        setTimeout(() => {
          // Calculate header height to account for fixed header
          const headerHeight = headerRef.current?.offsetHeight || 0
          const elementPosition = element.getBoundingClientRect().top + window.scrollY

          // Scroll to element with offset for the header
          window.scrollTo({
            top: elementPosition - headerHeight,
            behavior: "smooth",
          })
        }, 300)

        return true
      }
    } else if (href === "/") {
      // Handle home link click
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
    // Reset active section when at top of page
    const handleTopScroll = () => {
      if (window.scrollY < 100 && pathname === "/") {
        setActiveSection("")
      }
    }

    window.addEventListener("scroll", handleTopScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleTopScroll)
  }, [pathname])

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-zinc-950/90 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo with improved accessibility */}
          <Link href="/" aria-label="Home" className="flex items-center space-x-2">
            <Logo />
          </Link>

          {/* Desktop Navigation - Hide when hamburger is visible */}
          <div className={`${isHamburgerVisible ? "hidden" : "hidden md:flex"} items-center space-x-6`}>
            {/* Home link (always non-active) */}
            <div className="relative">
              <Link
                href="/"
                className="flex items-center gap-2 text-sm font-medium transition-all duration-300 text-gray-300 hover:text-white relative py-1"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }}
              >
                <Home className="w-4 h-4 text-gray-500" />
                Home
              </Link>
            </div>

            {navItems.map((item) => {
              const ActiveIcon = item.icon
              const active = isActive(item.href)

              return (
                <div key={item.href} className="relative">
                  <Link
                    href={item.href}
                    className={`
                      flex items-center gap-2 
                      text-sm font-medium 
                      transition-all duration-300 
                      ${active ? "text-green-400" : "text-gray-300 hover:text-white"}
                      relative py-1
                    `}
                    aria-current={active ? "page" : undefined}
                    onClick={(e) => {
                      if (scrollToSection(item.href)) {
                        e.preventDefault()
                      }
                    }}
                  >
                    <ActiveIcon className={`w-4 h-4 ${active ? "text-green-400" : "text-gray-500"}`} />
                    {item.name}

                    {active && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-400" />}
                  </Link>
                </div>
              )
            })}
          </div>

          {/* Chat Now Button - Hide when hamburger is visible */}
          <div className={`${isHamburgerVisible ? "hidden" : "hidden md:block"}`}>
            <Button
              className="bg-green-500 hover:bg-green-600 text-zinc-950 font-medium border-none shadow-md shadow-green-500/20"
              onClick={() => {
                window.open(
                  "https://wa.me/923701247494?text=Hi%2C%20I%20would%20like%20to%20chat",
                  "_blank",
                  "noopener,noreferrer",
                )
              }}
            >
              <MessageSquare className="mr-2 w-4 h-4" />
              Chat Now
            </Button>
          </div>

          {/* Hamburger Menu Toggle - Show based on viewport dimensions */}
          <button
            className={`${isHamburgerVisible || isMobileMenuOpen ? "block" : "md:hidden"} text-gray-300 hover:text-white`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="text-green-400" /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="px-4 pt-2 pb-6 space-y-3">
            {/* Home link (always non-active) */}
            <div>
              <Link
                href="/"
                className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 text-gray-300 hover:bg-zinc-800"
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }}
              >
                <Home className="w-5 h-5 text-gray-500" />
                Home
              </Link>
            </div>

            {navItems.map((item) => {
              const ActiveIcon = item.icon
              const active = isActive(item.href)

              return (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className={`
                      flex items-center gap-3 p-3 rounded-lg 
                      transition-all duration-300 
                      ${active ? "bg-green-500/20 text-green-400" : "text-gray-300 hover:bg-zinc-800"}
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
                    <ActiveIcon className={`w-5 h-5 ${active ? "text-green-400" : "text-gray-500"}`} />
                    {item.name}
                  </Link>
                </div>
              )
            })}

            <div className="pt-2 mt-2 border-t border-zinc-800">
              <Button
                className="w-full bg-green-500 hover:bg-green-600 text-zinc-950 font-medium"
                onClick={() => {
                  window.open(
                    "https://wa.me/923701247494?text=Hi%2C%20I%20would%20like%20to%20chat",
                    "_blank",
                    "noopener,noreferrer",
                  )
                  setIsMobileMenuOpen(false)
                }}
              >
                <MessageSquare className="mr-2 w-4 h-4" />
                Chat Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
