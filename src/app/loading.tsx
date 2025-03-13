"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { anton } from "@/lib/font"

export default function LoadingWrapper({
    children,
}: {
    children: React.ReactNode
}) {
    const [loading, setLoading] = useState(true)
    const [contentReady, setContentReady] = useState(false)

    useEffect(() => {
        setContentReady(true)

        // Safely handle requestIdleCallback
        const timer =
            typeof window !== "undefined" && "requestIdleCallback" in window
                ? window.requestIdleCallback(
                    () => {
                        setLoading(false)
                    },
                    { timeout: 800 },
                )
                : setTimeout(() => {
                    setLoading(false)
                }, 800)

        return () => {
            if (typeof window !== "undefined") {
                if ("requestIdleCallback" in window && "cancelIdleCallback" in window) {
                    window.cancelIdleCallback(timer as number)
                } else {
                    clearTimeout(timer)
                }
            }
        }
    }, [])

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
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="min-h-screen w-full bg-black" // Critical fix
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            {loading && contentReady && (
                <div className="sr-only" aria-hidden="true">
                    {children}
                </div>
            )}
        </>
    )
}

function PremiumLoadingAnimation() {
    const [progress, setProgress] = useState(0)
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
    const [isMounted, setIsMounted] = useState(false)
    const particleCount = 10

    useEffect(() => {
        setIsMounted(true)

        // Safely handle window dimensions
        if (typeof window !== "undefined") {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            })

            const interval = setInterval(() => {
                setProgress((prev) => {
                    const next = prev + (100 - prev) * 0.15
                    return Math.min(next, 100)
                })
            }, 100)

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
                clearInterval(interval)
                clearTimeout(resizeTimer)
                window.removeEventListener("resize", handleResize)
            }
        }

        // Fallback for SSR
        return () => { }
    }, [])

    const containerVariants = {
        initial: { backgroundPosition: "0% 0%" },
        animate: {
            backgroundPosition: ["0% 0%", "100% 100%"],
            transition: {
                duration: 8,
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse" as const,
            },
        },
    }

    const logoVariants = {
        initial: { scale: 0.9, opacity: 0 },
        animate: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    }

    const particles = React.useMemo(() => {
        return Array.from({ length: particleCount }).map((_, i) => {
            if (!isMounted) {
                return {
                    x: (i % 5) * 200,
                    y: Math.floor(i / 5) * 150,
                    scale: 0.7,
                    opacity: 0.2,
                    size: 4,
                }
            }
            return {
                x: Math.random() * dimensions.width,
                y: Math.random() * dimensions.height,
                targetX: Math.random() * dimensions.width,
                targetY: Math.random() * dimensions.height,
                scale: Math.random() * 0.5 + 0.5,
                opacity: Math.random() * 0.3 + 0.1,
                size: Math.random() * 6 + 2,
                duration: Math.random() * 15 + 10,
            }
        })
    }, [dimensions.width, dimensions.height, isMounted, particleCount])

    return (
        <motion.div
            className="fixed inset-0 flex items-center justify-center overflow-hidden h-screen w-screen z-[9999]"
            initial="initial"
            animate="animate"
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.3,
                    backgroundColor: { duration: 0.4 },
                },
            }}
            style={{
                background: "linear-gradient(135deg, #000000, #0f172a)",
                backgroundSize: "400% 400%",
            }}
            variants={containerVariants}
        >
            {isMounted &&
                particles.map((particle, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-emerald-400/30"
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
                        }}
                    />
                ))}

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

            <div className="relative z-10 flex flex-col items-center px-4">
                <motion.div className="relative mb-12" variants={logoVariants}>
                    <div className="relative w-32 h-32 mb-4">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-green-400">
                            <div className="absolute inset-1 rounded-full bg-black" />
                        </div>
                        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
                            <div className="text-white text-5xl font-bold">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-12 h-12"
                                >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="text-center space-y-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2
                        className={`${anton.className} text-5xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-600 tracking-wider`}
                    >
                        LOADING EXPERIENCE
                    </h2>

                    <div className="flex items-center justify-center space-x-2">
                        <span className="text-emerald-400 font-medium">Preparing your website</span>
                        <div className="flex space-x-1">
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    className="w-2 h-2 rounded-full bg-emerald-400"
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{
                                        duration: 1,
                                        repeat: Number.POSITIVE_INFINITY,
                                        delay: i * 0.2,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="w-64 sm:w-80 h-1 bg-gray-700 rounded-full overflow-hidden mt-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                >
                    <motion.div
                        className="h-full bg-gradient-to-r from-emerald-400 to-green-500 rounded-full"
                        style={{ width: `${progress}%` }}
                    />
                </motion.div>
            </div>
        </motion.div>
    )
}

