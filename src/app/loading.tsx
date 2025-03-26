"use client"

import React, { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { anton } from "@/lib/font"

// Define the particle interface to include all required properties
interface Particle {
    x: number
    y: number
    targetX: number
    targetY: number
    scale: number
    opacity: number
    size: number
    duration: number
    id: number
}

export default function Loading() {
    // This is the standard export for Next.js App Router loading.tsx
    return <PremiumLoadingAnimation />
}

// Separate wrapper component if you need to manually wrap content
export function LoadingWrapper({
    children,
    minLoadingTime = 50, // Reduced from 100ms to 50ms
}: {
    children: React.ReactNode
    minLoadingTime?: number
}) {
    const [loading, setLoading] = useState(true)
    const [contentReady, setContentReady] = useState(false)

    useEffect(() => {
        // Mark content as ready for pre-rendering
        setContentReady(true)

        // Only run timer code in browser
        if (typeof window === "undefined") return

        // Use a more reliable approach with setTimeout as the primary method
        const timer = setTimeout(() => {
            setLoading(false)
        }, minLoadingTime)

        return () => clearTimeout(timer)
    }, [minLoadingTime])

    return (
        <>
            <AnimatePresence mode="wait">
                {loading ? (
                    <PremiumLoadingAnimation key="loading" />
                ) : (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }} // Reduced from 0.4s to 0.2s
                        className="min-h-screen w-full bg-black"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Pre-render content for performance but hide it visually */}
            {loading && contentReady && (
                <div className="sr-only" aria-live="polite" aria-busy={loading}>
                    {children}
                </div>
            )}
        </>
    )
}

// Memoized loading animation for better performance
const PremiumLoadingAnimation = React.memo(function PremiumLoadingAnimation() {
    const [progress, setProgress] = useState(0)
    const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 }) // Default fallback values
    const [isMounted, setIsMounted] = useState(false)
    const particleCount = 5 // Reduced from 10 to 5 particles

    // Update progress with optimized animation frame
    useEffect(() => {
        if (typeof window === "undefined") return

        let rafId: number
        let lastTimestamp: number
        const startTime = performance.now()
        // Target duration for the entire animation in ms (reduced from ~3s to 1s)
        const targetDuration = 1000

        const updateProgress = (timestamp: number) => {
            if (!lastTimestamp) lastTimestamp = timestamp
            const elapsed = timestamp - startTime

            // Linear progress calculation based on elapsed time
            const newProgress = Math.min(100, (elapsed / targetDuration) * 100)
            setProgress(newProgress)

            if (newProgress < 100) {
                rafId = requestAnimationFrame(updateProgress)
            }
        }

        rafId = requestAnimationFrame(updateProgress)
        return () => cancelAnimationFrame(rafId)
    }, [])

    // Handle window dimensions with debounce
    useEffect(() => {
        if (typeof window === "undefined") return

        setIsMounted(true)

        // Set initial dimensions
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        })

        // Debounced resize handler
        let resizeTimer: NodeJS.Timeout
        const handleResize = () => {
            clearTimeout(resizeTimer)
            resizeTimer = setTimeout(() => {
                setDimensions({
                    width: window.innerWidth,
                    height: window.innerHeight,
                })
            }, 250)
        }

        window.addEventListener("resize", handleResize, { passive: true })

        return () => {
            clearTimeout(resizeTimer)
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    // Container animation variants - simplified
    const containerVariants = {
        initial: { backgroundPosition: "0% 0%" },
        animate: {
            backgroundPosition: ["0% 0%", "100% 100%"],
            transition: {
                duration: 4, // Reduced from 8s to 4s
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse" as const,
            },
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.2, // Reduced from 0.3s to 0.2s
            },
        },
    }

    // Logo animation variants - simplified
    const logoVariants = {
        initial: { scale: 0.95, opacity: 0 },
        animate: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.3, ease: "easeOut" }, // Reduced from 0.6s to 0.3s
        },
    }

    // Memoize particles to prevent recalculation - simplified
    const particles = useMemo(() => {
        if (!isMounted) {
            // Return placeholder particles for SSR
            return Array.from({ length: particleCount }).map(
                (_, i) =>
                    ({
                        x: (i % 5) * 200,
                        y: Math.floor(i / 5) * 150,
                        scale: 0.7,
                        opacity: 0.2,
                        size: 4,
                        id: i,
                        targetX: 0, // Add default values for SSR
                        targetY: 0, // Add default values for SSR
                        duration: 5, // Add default values for SSR
                    }) as Particle,
            )
        }

        // Generate particles based on screen dimensions
        return Array.from({ length: particleCount }).map(
            (_, i) =>
                ({
                    x: Math.random() * dimensions.width,
                    y: Math.random() * dimensions.height,
                    targetX: Math.random() * dimensions.width,
                    targetY: Math.random() * dimensions.height,
                    scale: Math.random() * 0.5 + 0.5,
                    opacity: Math.random() * 0.3 + 0.1,
                    size: Math.random() * 6 + 2,
                    duration: Math.random() * 5 + 5, // Reduced from 10-25s to 5-10s
                    id: i,
                }) as Particle,
        )
    }, [dimensions.width, dimensions.height, isMounted, particleCount])

    return (
        <motion.div
            className="fixed inset-0 flex items-center justify-center overflow-hidden h-screen w-screen z-[9999]"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={containerVariants}
            style={{
                background: "linear-gradient(135deg, #000000, #0f172a)",
                backgroundSize: "400% 400%",
            }}
            aria-live="polite"
            aria-label="Loading your experience"
        >
            {/* Particles - simplified */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-emerald-400/30 will-change-transform"
                    initial={{
                        x: particle.x,
                        y: particle.y,
                        scale: particle.scale,
                        opacity: particle.opacity,
                    }}
                    animate={{
                        x: particle.targetX,
                        y: particle.targetY,
                        transition: {
                            duration: particle.duration,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse" as const,
                            ease: "linear",
                        },
                    }}
                    style={{
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        transform: `translate3d(0,0,0)`, // Force GPU acceleration
                    }}
                />
            ))}

            {/* Grid background */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `
            linear-gradient(to right, #1a1a1a 1px, transparent 1px),
            linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)
          `,
                    backgroundSize: "50px 50px",
                }}
            />

            {/* Content container */}
            <div className="relative z-10 flex flex-col items-center px-4">
                {/* Logo */}
                <motion.div className="relative mb-8" variants={logoVariants}>
                    <div className="relative w-24 h-24 mb-2">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-green-400">
                            <div className="absolute inset-1 rounded-full bg-black" />
                        </div>
                        <div className="absolute inset-3 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
                            <div className="text-white text-4xl font-bold">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-10 h-10"
                                    aria-hidden="true"
                                >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Text and loading indicators - simplified */}
                <motion.div
                    className="text-center space-y-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }} // Reduced timing
                >
                    <h2
                        className={`${anton.className} text-4xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-600 tracking-wider`}
                    >
                        LOADING
                    </h2>

                    <div className="flex items-center justify-center space-x-2">
                        <span className="text-emerald-400 font-medium">Preparing your website</span>
                    </div>
                </motion.div>

                {/* Progress bar */}
                <motion.div
                    className="w-56 sm:w-64 h-1 bg-gray-700 rounded-full overflow-hidden mt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.2 }} // Reduced timing
                >
                    <motion.div
                        className="h-full bg-gradient-to-r from-emerald-400 to-green-500 rounded-full will-change-transform"
                        style={{ width: `${progress}%` }}
                    />
                </motion.div>
            </div>
        </motion.div>
    )
})

