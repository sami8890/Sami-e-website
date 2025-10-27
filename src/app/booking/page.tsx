"use client"

import { useEffect, useState } from "react"

export default function ClientBookingPage() {
  const [isMobile, setIsMobile] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let scriptLoaded = false
    let minTimeComplete = false

    // Check if both conditions are met
    const checkAndHideLoader = () => {
      if (scriptLoaded && minTimeComplete) {
        setIsLoading(false)
      }
    }

    // Set minimum 3 second loading time
    const minimumLoadTime = setTimeout(() => {
      minTimeComplete = true
      checkAndHideLoader()
    }, 3000)

    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    script.onload = () => {
      scriptLoaded = true
      // Wait a bit more for Calendly to fully initialize
      setTimeout(() => {
        checkAndHideLoader()
      }, 500)
    }
    document.body.appendChild(script)

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
      clearTimeout(minimumLoadTime)
    }
  }, [])

  const widgetHeight = isMobile ? "600px" : "700px"

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-12">
      <style>{`
        @keyframes spin-smooth {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes cube-rotate {
          0% { transform: rotateX(-30deg) rotateY(0deg); }
          100% { transform: rotateX(-30deg) rotateY(360deg); }
        }

        @keyframes cube-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .animate-spin-smooth {
          animation: spin-smooth 2s linear infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-in-out;
        }

        .cube-container {
          perspective: 1000px;
          animation: cube-float 3s ease-in-out infinite;
        }

        .cube {
          width: 60px;
          height: 60px;
          position: relative;
          transform-style: preserve-3d;
          animation: cube-rotate 3s linear infinite;
        }

        .cube-face {
          position: absolute;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          border: 2px solid rgba(255, 255, 255, 0.3);
          opacity: 0.9;
        }

        .cube-face-front { transform: rotateY(0deg) translateZ(30px); }
        .cube-face-back { transform: rotateY(180deg) translateZ(30px); }
        .cube-face-right { transform: rotateY(90deg) translateZ(30px); }
        .cube-face-left { transform: rotateY(-90deg) translateZ(30px); }
        .cube-face-top { transform: rotateX(90deg) translateZ(30px); }
        .cube-face-bottom { transform: rotateX(-90deg) translateZ(30px); }

        @media (max-width: 640px) {
          .calendly-inline-widget {
            min-height: 600px !important;
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .calendly-inline-widget {
            min-height: 650px !important;
          }
        }

        @media (min-width: 1025px) {
          .calendly-inline-widget {
            min-height: 700px !important;
          }
        }
      `}</style>

      <div className="w-full max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 pt-4 sm:pt-6 md:pt-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-4 text-balance leading-tight mt-16">
            Book a{" "}
            <span className="text-blue-600" style={{ fontFamily: "Instrument Serif, serif" }}>
              Bussines Call
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 text-balance leading-relaxed max-w-2xl mx-auto">
            Schedule a time that works best for you
          </p>
        </div>

        <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg md:shadow-xl overflow-hidden border border-slate-200 relative">
          {isLoading && (
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50 rounded-lg sm:rounded-xl md:rounded-2xl">
              <div className="flex flex-col items-center gap-6">
                <div className="cube-container -mt-16">
                  <div className="cube">
                    <div className="cube-face cube-face-front"></div>
                    <div className="cube-face cube-face-back"></div>
                    <div className="cube-face cube-face-right"></div>
                    <div className="cube-face cube-face-left"></div>
                    <div className="cube-face cube-face-top"></div>
                    <div className="cube-face cube-face-bottom"></div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 font-medium">Loading your booking calendar...</p>
              </div>
            </div>
          )}
          <div
            className="calendly-inline-widget w-full"
            data-url="https://calendly.com/samigabol12/discovery-call"
            style={{
              minWidth: "100%",
              height: widgetHeight,
              width: "100%",
            }}
          />
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 text-center">
          <p className="text-sm sm:text-base text-slate-600 text-balance leading-relaxed px-2">
            Questions? We&apos;ll follow up within 24 hours of your booking.
          </p>
          <p className="text-xs text-slate-500 mt-3 sm:mt-4">Powered by Calendly</p>
        </div>
      </div>
    </main>
  )
}