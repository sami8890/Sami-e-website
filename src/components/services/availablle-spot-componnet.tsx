"use client"

import type React from "react"
import { useState } from "react"
import { Loader2 } from "lucide-react"

interface ProfessionalButtonProps {
  children: React.ReactNode
  className?: string
  loading?: boolean
  onClick?: () => void
}

const ProfessionalButton: React.FC<ProfessionalButtonProps> = ({
  children,
  className = "",
  loading = false,
  onClick,
}) => {
  const [isPressed, setIsPressed] = useState(false)

  const handleClick = () => {
    setIsPressed(true)

    // Add visual feedback with a timeout
    setTimeout(() => setIsPressed(false), 200)

    // Call the provided onClick handler if it exists
    if (onClick) onClick()
  }

  return (
    <button
      className={`relative flex items-center justify-center font-medium transition-all duration-200 
      bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg 
      hover:shadow-lg hover:shadow-green-500/20 hover:from-green-600 hover:to-green-700
      active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:shadow-none
      ${isPressed ? "scale-[0.98]" : ""}
      ${className}`}
      disabled={loading}
      onClick={handleClick}
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          <span>Loading...</span>
        </>
      ) : (
        children
      )}
    </button>
  )
}

export default function AvailableSpots() {
  const [isLoading, setIsLoading] = useState(false)

  const handleConsultation = () => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      alert("Thank you! We'll contact you shortly to schedule your consultation.")
    }, 1500)
  }

  return (
    <div className="mt-16 sm:mt-20 md:mt-32">
      {/* Add keyframes for the floating animation */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-10px) translateX(20px);
            opacity: 0.5;
          }
          75% {
            transform: translateY(10px) translateX(5px);
            opacity: 0.7;
          }
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
        }
      `}</style>

      <div className="relative overflow-hidden bg-gradient-to-br from-[#121212] to-[#0D1D15] rounded-3xl p-6 sm:p-8 md:p-12 border border-green-500/20 shadow-[0_0_45px_rgba(34,197,94,0.15)] transform transition-all duration-700 hover:shadow-[0_0_60px_rgba(34,197,94,0.25)] hover:border-green-500/30">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-[80px] -mr-20 -mt-20 opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-[80px] -ml-20 -mb-20 opacity-70"></div>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-green-500/30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.3 + Math.random() * 0.7,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-12">
          <div className="text-left md:max-w-xl">
            <div className="inline-flex items-center gap-2 mb-4 bg-[#1A1A1A] rounded-full pl-1.5 pr-4 py-1.5 border border-green-500/30">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
                <span className="animate-ping absolute h-3 w-3 rounded-full bg-green-500 opacity-75"></span>
                <span className="relative flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <span className="text-xs font-medium text-green-400">Limited spots available for this month</span>
            </div>

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to elevate your <span className="text-green-400">digital presence</span>?
            </h3>

            <p className="text-gray-300 mb-6 text-base leading-relaxed">
              Our team of experts is ready to help you build the perfect solution for your business needs. Get started
              today and see the difference quality design can make.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:min-w-[240px]">
            <div className="p-4 bg-black/30 backdrop-blur-sm rounded-xl border border-green-500/20 transition-all duration-300 hover:border-green-500/40 hover:shadow-lg hover:shadow-green-500/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-white">Available spots for March</span>
                <span className="text-sm font-bold text-green-400">3 left</span>
              </div>
              <div className="w-full bg-[#1A1A1A] rounded-full h-2 mb-4">
                <div className="bg-gradient-to-r from-green-500 to-green-500/70 h-2 rounded-full w-[15%]"></div>
              </div>
              <ProfessionalButton
                className="w-full px-6 py-3 text-sm font-medium"
                loading={isLoading}
                onClick={handleConsultation}
              >
                Schedule a Consultation
              </ProfessionalButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

