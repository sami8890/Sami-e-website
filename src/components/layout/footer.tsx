"use client"

import { useState, useEffect } from "react"
import { Mail, Phone, Twitter, Linkedin, Heart, ChevronUp, Calendar, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

export default function MYFooter() {
  const [isVisible, setIsVisible] = useState(false)
  const [year, setYear] = useState(new Date().getFullYear())
  const [showCalendly, setShowCalendly] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    setYear(new Date().getFullYear())
  }, [])

  // Close Calendly modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (showCalendly && !target.closest(".calendly-modal-content") && !target.closest(".schedule-button")) {
        setShowCalendly(false)
      }
    }

    if (showCalendly) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [showCalendly])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ]

  return (
    <footer className="relative w-full bg-zinc-950 text-white font-sans overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/10 via-zinc-900 to-zinc-950"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgtMXYxaDF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tMi0yaDF2MWgtMXYtMXptLTItMmgxdjFoLTF2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>

      {/* Top curved divider */}
      <div className="relative w-full">
        <svg className="w-full h-12 fill-zinc-950" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Main footer content */}
      <div className="relative pt-12 pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Column 1: About */}
            <div
              className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <span className="text-green-400 font-bold">SE</span>
                </div>
                <h3 className="text-xl font-bold">
                  Sami-<span className="text-green-400">e</span>
                </h3>
              </div>

              <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                I build websites that attract customers and grow your business. Let&apos;s create a digital presence
                that converts visitors into loyal customers.
              </p>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-green-400" />
                  <a
                    href="mailto:sami.gabol13@gmail.com"
                    className="text-sm text-zinc-300 hover:text-green-400 transition-colors"
                  >
                    sami.gabol13@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-green-400" />
                  <a
                    href="https://wa.me/923701247494"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-300 hover:text-green-400 transition-colors"
                  >
                    +92 370 124 7494 (WhatsApp)
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 mr-2"></span>
                  Follow Me
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-8 w-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-green-500/20 hover:border-green-500/30 hover:text-green-400 transition-all"
                        aria-label={social.label}
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Column 2: Contact Me */}
            <div
              className={`transition-all duration-1000 delay-100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <h3 className="text-lg font-semibold mb-6 flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 mr-2"></span>
                Contact Me
              </h3>
              <p className="text-sm text-zinc-400 mb-8">
                Have a project in mind? Let&apos;s discuss how I can help you achieve your goals.
              </p>

              {/* Calendly Card - Enhanced UI */}
              <div className="p-5 rounded-lg border border-zinc-800 bg-gradient-to-br from-zinc-900/80 to-zinc-900/30 backdrop-blur group hover:border-green-500/30 transition-all duration-300 shadow-lg shadow-black/50 hover:shadow-green-900/20">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-medium text-white flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-green-400 group-hover:rotate-12 transition-transform" />
                    Free Strategy Call
                  </h4>
                  <span className="text-xs text-green-400 bg-green-500/20 px-2 py-1 rounded-full">45 min</span>
                </div>
                <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                  Unlock your digital potential. Get personalized insights and a clear roadmap for your project in a
                  complimentary 45-minute consultation.
                </p>
                <button
                  onClick={() => setShowCalendly(true)}
                  className="schedule-button w-full bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-xs py-3 h-auto rounded-full text-black font-medium group-hover:scale-[1.02] transition-all duration-300 flex items-center justify-center"
                >
                  Book Your Free Consultation
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom section with copyright */}
          <div className="mt-16 pt-8 border-t border-zinc-800/50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-zinc-500">© {year} Sami-e. All rights reserved.</p>

              <div className="flex items-center gap-6">
                <button
                  onClick={scrollToTop}
                  className="h-8 w-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-green-500/20 hover:border-green-500/30 hover:text-green-400 transition-all"
                  aria-label="Scroll to top"
                >
                  <ChevronUp className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs text-zinc-600 flex items-center justify-center gap-1">
                Let&apos;s Connect <Heart className="h-3 w-3 text-green-500 fill-green-500" /> by Sami-e and helped you
                bussiness
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Calendly Modal */}
      {showCalendly && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-all duration-300">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="calendly-modal-content w-full max-w-4xl h-[80vh] bg-white rounded-2xl overflow-hidden shadow-2xl relative"
          >
            <button
              onClick={() => setShowCalendly(false)}
              className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Close calendar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-700"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <iframe
              src="https://calendly.com/samigabol12/45min?hide_gdpr_banner=1&background_color=121212&text_color=ffffff&primary_color=10b981"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Schedule a meeting"
              className="calendly-inline-widget"
            ></iframe>
          </motion.div>
        </div>
      )}

    </footer>
  )
}
