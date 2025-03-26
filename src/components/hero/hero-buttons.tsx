"use client"

import React, { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Play, ArrowRight } from "lucide-react"
import gsap from "gsap"

// Detect user preference for reduced motion
const prefersReducedMotion = () => {
    if (typeof window === "undefined") return false
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

interface AnimatedButtonProps {
    variant?: "default" | "outline"
    children: React.ReactNode
    onClick?: () => void
    className?: string
    ariaLabel?: string
}

// Update the AnimatedButton styles for better mobile experience
const baseStyles =
    "relative overflow-hidden font-semibold py-4 sm:py-5 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 flex items-center justify-center max-w-[280px] mx-auto sm:w-auto gap-2 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"

// Add loading and hover states to buttons
export const AnimatedButton = React.memo(
    ({ variant = "default", children, onClick, className = "", ariaLabel }: AnimatedButtonProps) => {
        const buttonRef = useRef<HTMLButtonElement>(null)
        const [isHovered, setIsHovered] = useState(false)
        const [isLoading, setIsLoading] = useState(false)
        const [isAnimating, setIsAnimating] = useState(true)

        // Check for reduced motion preference
        useEffect(() => {
            const prefersReduced = prefersReducedMotion()
            setIsAnimating(!prefersReduced)
        }, [])

        // Optimize the animation effect to be less resource-intensive
        useEffect(() => {
            if (buttonRef.current && isAnimating && !isHovered) {
                // Use a simpler animation
                gsap.to(buttonRef.current, {
                    scale: 1.03, // Reduced scale for better performance
                    duration: 0.8,
                    repeat: -1,
                    yoyo: true,
                    ease: "power1.inOut",
                })
            }

            if (isHovered && buttonRef.current) {
                gsap.killTweensOf(buttonRef.current)
                gsap.to(buttonRef.current, {
                    scale: 1.05, // Reduced scale
                    duration: 0.2, // Faster animation
                    ease: "power1.out", // Simpler easing
                })
            }

           
        }, [isHovered, isAnimating])

        const handleHoverStart = () => setIsHovered(true)
        const handleHoverEnd = () => setIsHovered(false)

        const variantStyles =
            variant === "outline"
                ? "bg-transparent text-white border-2 border-green-400 hover:bg-green-400/20 hover:border-green-300"
                : "bg-gradient-to-r from-green-400 to-emerald-600 hover:from-green-500 hover:to-emerald-700 text-white shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50"

        return (
            <Button
                ref={buttonRef}
                onClick={async () => {
                    if (onClick) {
                        setIsLoading(true)
                        try {
                            onClick()
                        } catch (error) {
                            console.error("Button action failed:", error)
                        } finally {
                            setIsLoading(false)
                        }
                    }
                }}
                disabled={isLoading}
                className={`${baseStyles} ${variantStyles} ${className} 
          ${isLoading ? "opacity-70 cursor-wait" : ""} 
          hover:shadow-lg hover:-translate-y-0.5 
          active:shadow-md active:translate-y-0
          disabled:opacity-50 disabled:cursor-not-allowed
          transition-all duration-200`}
                aria-label={ariaLabel}
                onMouseEnter={handleHoverStart}
                onMouseLeave={handleHoverEnd}
                onFocus={handleHoverStart}
                onBlur={handleHoverEnd}
            >
                {isLoading ? (
                    <span className="flex items-center gap-2">
                        <motion.div
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        />
                        <span className="opacity-90">Loading...</span>
                    </span>
                ) : (
                    <span className="relative z-10 flex items-center gap-2">
                        {children}
                        <motion.div
                            className="absolute inset-0 bg-white/10 rounded-full"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={isHovered ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        />
                        <motion.div
                            className="absolute inset-0 rounded-full"
                            initial={{ boxShadow: "0 0 0 0 rgba(16, 185, 129, 0)" }}
                            animate={
                                isHovered
                                    ? { boxShadow: "0 0 0 4px rgba(16, 185, 129, 0.3)" }
                                    : { boxShadow: "0 0 0 0 rgba(16, 185, 129, 0)" }
                            }
                            transition={{ duration: 0.3 }}
                        />
                    </span>
                )}
            </Button>
        )
    },
    // Add a custom comparison function to prevent unnecessary re-renders
    (prevProps, nextProps) => {
        return (
            prevProps.variant === nextProps.variant &&
            prevProps.className === nextProps.className &&
            prevProps.ariaLabel === nextProps.ariaLabel
        )
    },
)

AnimatedButton.displayName = "AnimatedButton"

interface HeroButtonsProps {
    setIsVideoModalOpen: (isOpen: boolean) => void
    isReducedMotion: boolean
}

export const HeroButtons = ({ setIsVideoModalOpen, isReducedMotion }: HeroButtonsProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: isReducedMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0 max-w-md mx-auto"
        >
            <AnimatedButton ariaLabel="Start Your Journey">
                <span className="flex items-center gap-2">
                    <span>Start Your Journey</span>
                    <ArrowRight className="w-5 h-5" />
                </span>
            </AnimatedButton>

            <AnimatedButton
                variant="outline"
                ariaLabel="Watch Now"
                onClick={() => setIsVideoModalOpen(true)}
                className="relative"
            >
                <span className="flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    <span>Watch Now</span>
                </span>
            </AnimatedButton>
        </motion.div>
    )
}

