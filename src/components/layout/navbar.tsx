"use client"

import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronRight, Home, Briefcase, Award, Info, } from "lucide-react"

// Advanced Logo Component
function Logo() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="flex items-center cursor-pointer"
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 100 100"
        className="mr-2"
      >
        {/* Base shape */}
        <motion.path
          d="M50 10 L90 50 L50 90 L10 50 Z"
          fill="none"
          stroke="url(#logoGradient)"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />

        {/* Inner geometric elements */}
        <motion.path
          d="M35 50 L50 35 L65 50 L50 65 Z"
          fill="url(#logoGradient)"
          initial={{ scale: 0 }}
          animate={{
            scale: isHovered ? 1.2 : 1,
            rotate: isHovered ? 45 : 0
          }}
          transition={{ type: "spring", stiffness: 300 }}
        />

        {/* Gradient Definition */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>
      </svg>

      <motion.span
        className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, x: -10 }}
        animate={{
          opacity: 1,
          x: 0,
          textShadow: isHovered
            ? "0 0 10px rgba(52, 211, 153, 0.3)"
            : "none"
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Sami-E
      </motion.span>
    </motion.div>
  )
}

// Main Navigation Component
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    // Performance optimization: debounce scroll event
    const debouncedHandleScroll = () => {
      requestAnimationFrame(handleScroll)
    }

    window.addEventListener("scroll", debouncedHandleScroll)
    return () => window.removeEventListener("scroll", debouncedHandleScroll)
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

  const navItems = [
    {
      name: "Home",
      href: "/",
      icon: Home,
      exactMatch: true
    },
    {
      name: "Works",
      href: "/works",
      icon: Briefcase
    },
    {
      name: "Testimonials",
      href: "/testimonials",
      icon: Award
    },
    {
      name: "About",
      href: "/about",
      icon: Info
    }
  ]

  const isActive = (href: string, exactMatch: boolean = false) => {
    return exactMatch
      ? pathname === href
      : pathname.startsWith(href)
  }

  return (
    <motion.header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-black/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
        }`}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "tween",
        duration: 0.5
      }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo with improved accessibility */}
          <Link
            href="/"
            aria-label="Home"
            className="flex items-center space-x-2"
          >
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const ActiveIcon = item.icon
              return (
                <motion.div
                  key={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    className={`
                      flex items-center gap-2 
                      text-sm font-medium 
                      transition-all duration-300 
                      ${isActive(item.href, item.exactMatch)
                        ? "text-emerald-400"
                        : "text-gray-300 hover:text-white"
                      }
                    `}
                    aria-current={isActive(item.href, item.exactMatch) ? "page" : undefined}
                  >
                    <ActiveIcon
                      className={`w-4 h-4 ${isActive(item.href, item.exactMatch)
                          ? "text-emerald-400"
                          : "text-gray-500"
                        }`}
                    />
                    {item.name}
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                className=" text-black bg-emerald-400 hover:bg-emerald-500 "
              > 
                Get in Touch
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/90 backdrop-blur-md"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navItems.map((item) => {
                const ActiveIcon = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      flex items-center gap-3 p-3 rounded-lg 
                      transition-all duration-300 
                      ${isActive(item.href, item.exactMatch)
                        ? "bg-emerald-400/20 text-emerald-400"
                        : "text-gray-300 hover:bg-gray-800"
                      }
                    `}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <ActiveIcon
                      className={`w-5 h-5 ${isActive(item.href, item.exactMatch)
                          ? "text-emerald-400"
                          : "text-gray-500"
                        }`}
                    />
                    {item.name}
                  </Link>
                ) 
              })}
              <Button
                variant="outline"
                className="w-full mt-4 border-emerald-400 text-emerald-400 hover:bg-emerald-400/10"
              >
                Get in Touch
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}