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
    minLoadingTime = 50, // Already reduced from 100ms to 50ms
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
                        transition={{ duration: 0.15, ease: "easeOut" }} // Further reduced from 0.2s to 0.15s
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
    const particleCount = 3 // Further reduced from 5 to 3 particles

    // Update progress with optimized animation frame
    useEffect(() => {
        if (typeof window === "undefined") return

        let rafId: number
        const startTime = performance.now()
        // Target duration for the entire animation in ms (further reduced from 1s to 800ms)
        const targetDuration = 800

        const updateProgress = (timestamp: number) => {
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

        // Debounced resize handler with increased timeout
        let resizeTimer: NodeJS.Timeout
        const handleResize = () => {
            clearTimeout(resizeTimer)
            resizeTimer = setTimeout(() => {
                setDimensions({
                    width: window.innerWidth,
                    height: window.innerHeight,
                })
            }, 300) // Increased from 250ms to 300ms to reduce frequency
        }

        window.addEventListener("resize", handleResize, { passive: true })

        return () => {
            clearTimeout(resizeTimer)
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    // Container animation variants - further simplified
    const containerVariants = {
        initial: { backgroundPosition: "0% 0%" },
        animate: {
            backgroundPosition: ["0% 0%", "100% 100%"],
            transition: {
                duration: 3, // Further reduced from 4s to 3s
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse" as const,
            },
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.15, // Further reduced from 0.2s to 0.15s
            },
        },
    }

    // Logo animation variants - further simplified
    const logoVariants = {
        initial: { scale: 0.95, opacity: 0 },
        animate: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.25, ease: "easeOut" }, // Further reduced from 0.3s to 0.25s
        },
    }

    // Memoize particles to prevent recalculation - further simplified
    const particles = useMemo(() => {
        if (!isMounted) {
            // Return minimal placeholder particles for SSR
            return Array.from({ length: particleCount }).map(
                (_, i) =>
                    ({
                        x: (i % 3) * 200,
                        y: Math.floor(i / 3) * 150,
                        scale: 0.7,
                        opacity: 0.2,
                        size: 4,
                        id: i,
                        targetX: 0,
                        targetY: 0,
                        duration: 5,
                    }) as Particle,
            )
        }

        // Generate particles based on screen dimensions - simplified logic
        return Array.from({ length: particleCount }).map((_, i) => {
            const x = Math.random() * dimensions.width
            const y = Math.random() * dimensions.height

            return {
                x,
                y,
                targetX: Math.random() * dimensions.width,
                targetY: Math.random() * dimensions.height,
                scale: 0.5 + (i / particleCount) * 0.5, // More deterministic scaling
                opacity: 0.1 + (i / particleCount) * 0.2, // More deterministic opacity
                size: 3 + (i % 3) * 2, // More deterministic sizing
                duration: 5 + (i % 3) * 2, // Further reduced and more deterministic
                id: i,
            } as Particle
        })
    }, [dimensions.width, dimensions.height, isMounted, particleCount])

    // Use a simpler background gradient
    const backgroundStyle = {
        background: "linear-gradient(135deg, #000000, #0a1122)",
        backgroundSize: "200% 200%", // Reduced from 400% to 200%
    }

    return (
        <motion.div
            className="fixed inset-0 flex items-center justify-center overflow-hidden h-screen w-screen z-[9999]"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={containerVariants}
            style={backgroundStyle}
            aria-live="polite"
            aria-label="Loading your experience"
        >
            {/* Particles - further simplified */}
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

            {/* Grid background - simplified with larger grid size */}
            <div
                className="absolute inset-0 opacity-10" // Reduced opacity from 0.2 to 0.1
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #1a1a1a 1px, transparent 1px),
                        linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)
                    `,
                    backgroundSize: "100px 100px", // Increased from 50px to 100px
                }}
            />

            {/* Content container */}
            <div className="relative z-10 flex flex-col items-center px-4">
                {/* Logo - simplified */}
                <motion.div className="relative mb-6" variants={logoVariants}>
                    {" "}
                    {/* Reduced margin from mb-8 to mb-6 */}
                    <div className="relative w-20 h-20 mb-2">
                        {" "}
                        {/* Reduced size from 24 to 20 */}
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
                                    className="w-8 h-8" // Reduced from w-10 h-10 to w-8 h-8
                                    aria-hidden="true"
                                >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Text and loading indicators - further simplified */}
                <motion.div
                    className="text-center space-y-3" // Reduced from space-y-4 to space-y-3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: 0.1 }} // Further reduced from 0.3s to 0.25s
                >
                    <h2
                        className={`${anton.className} text-3xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500 tracking-wider`}
                    // Simplified gradient and reduced text size from 4xl to 3xl
                    >
                        LOADING
                    </h2>

                    <div className="flex items-center justify-center">
                        <span className="text-emerald-400 text-sm font-medium">Preparing your website</span>
                        {/* Added text-sm to reduce text size */}
                    </div>
                </motion.div>

                {/* Progress bar */}
                <motion.div
                    className="w-48 sm:w-56 h-1 bg-gray-800 rounded-full overflow-hidden mt-6"
                    // Reduced width from w-56/w-64 to w-48/w-56 and margin from mt-8 to mt-6
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.15, delay: 0.15 }} // Further reduced timing
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

