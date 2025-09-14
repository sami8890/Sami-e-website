"use client"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, MessageSquare } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Clean Logo Component
function Logo() {
  return (
    <div className="flex items-center">
      <img
        src="/sami2.png"
        alt="Logo"
        className="h-20 w-auto object-contain"
      />
    </div>
  )
}

// Scroll Progress Indicator
function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return

    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx =
        document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = winHeightPx > 0 ? scrollPx / winHeightPx : 0
      setScrollProgress(scrolled)
    }

    updateScrollProgress()
    window.addEventListener("scroll", updateScrollProgress, { passive: true })
    return () => window.removeEventListener("scroll", updateScrollProgress)
  }, [])

  return (
    <div
      className="absolute bottom-0 left-0 h-0.5 bg-slate-900 origin-left"
      style={{ width: `${scrollProgress * 100}%` }}
    />
  )
}

// Navigation (routes only: "/" and "/..."; no "#" anchors)
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === "undefined") return
    const onScroll = () => setIsScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    if (typeof document === "undefined") return
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }
    if (isMobileMenuOpen) document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMobileMenuOpen])

  // Only route links (no "#")
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Redesign", href: "/redesign" },
    {name:"Testimonials",href:"/video"}
  ]

  const isActive = (href: string) => pathname === href

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm border-b border-slate-200" : "bg-white"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" aria-label="Home" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const active = isActive(item.href)
              const cls = `text-sm font-medium transition-all duration-300 px-3 py-2 rounded-lg ${
                active
                  ? "text-slate-900 bg-slate-100"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`
              return (
                <Link key={item.href} href={item.href} className={cls}>
                  {item.name}
                </Link>
              )
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-slate-900 hover:bg-slate-800 text-white font-medium shadow-sm hover:shadow-md transition-all duration-300"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.open(
                    "https://wa.me/923701247494?text=Hi%2C%20I%20want%20a%20website",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
              }}
            >
              <MessageSquare className="mr-2 w-4 h-4" />
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden relative">
            <button
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Modern Dropdown Menu */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <>
                  {/* Backdrop */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
                    onClick={() => setIsMobileMenuOpen(false)}
                  />

                  {/* Dropdown Card */}
                  <motion.div
                    ref={dropdownRef}
                    initial={{ opacity: 0, scale: 0.95, y: -10, transformOrigin: "top right" }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full right-0 mt-3 w-72 bg-white rounded-2xl shadow-2xl border overflow-hidden backdrop-blur-xl border-white/10"
                    style={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 10px 10px -5px",
                    }}
                  >
                    <div className="p-4 space-y-1">
                      {navItems.map((item, index) => {
                        const active = isActive(item.href)
                        const cls = `w-full p-3.5 rounded-xl transition-all duration-300 font-medium text-left group ${
                          active
                            ? "bg-slate-100/80 text-slate-900 shadow-sm"
                            : "text-slate-600 hover:bg-slate-50/80 hover:text-slate-900 hover:shadow-sm hover:scale-[1.02]"
                        }`
                        return (
                          <motion.div
                            key={item.href}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Link
                              href={item.href}
                              className={cls}
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <span className="text-sm">{item.name}</span>
                            </Link>
                          </motion.div>
                        )
                      })}

                      {/* CTA Button in Dropdown */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: navItems.length * 0.05 }}
                        className="pt-3 mt-3 border-t border-slate-100"
                      >
                        <Button
                          className="w-full bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white font-medium rounded-xl py-3.5 px-4 text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                          onClick={() => {
                            if (typeof window !== "undefined") {
                              window.open(
                                "https://wa.me/923701247494?text=Hi%2C%20I%20want%20a%20website",
                                "_blank",
                                "noopener,noreferrer",
                              )
                            }
                            setIsMobileMenuOpen(false)
                          }}
                        >
                          <MessageSquare className="mr-2 w-4 h-4" />
                          Book a Call
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>
      {/* Scroll Progress */}
      <ScrollProgress />
    </header>
  )
}
