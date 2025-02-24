"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { anton } from "@/lib/font";
import { ChevronRight } from "lucide-react";

export default function LoadingWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Set a minimum display time of 2.5 seconds for the loading animation
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);

        // Cleanup the timer on component unmount
        return () => clearTimeout(timer);
    }, []);

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
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

function PremiumLoadingAnimation() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                const next = prev + (100 - prev) * 0.08;
                return Math.min(next, 100);
            });
        }, 50);

        return () => clearInterval(interval);
    }, []);

    // Enhanced animation variants
    const containerVariants = {
        initial: {
            backgroundPosition: "0% 0%",
        },
        animate: {
            backgroundPosition: ["0% 0%", "100% 100%"],
            transition: {
                duration: 8,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse" as const,
            },
        },
    };

    const logoVariants = {
        initial: { scale: 0.8, opacity: 0 },
        animate: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    const particleCount = 20;
    const particles = Array.from({ length: particleCount });

    return (
        <motion.div
            className="fixed inset-0 flex items-center justify-center overflow-hidden"
            initial="initial"
            animate="animate"
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            style={{
                background: "linear-gradient(135deg, #000000, #0f172a)",
                backgroundSize: "400% 400%",
            }}
            variants={containerVariants}
        >
            {/* Animated particles */}
            {particles.map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-emerald-400/30"
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                        scale: Math.random() * 0.5 + 0.5,
                        opacity: Math.random() * 0.3 + 0.1,
                    }}
                    animate={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                        transition: {
                            duration: Math.random() * 20 + 15,
                            repeat: Infinity,
                            repeatType: "reverse" as const,
                            ease: "linear",
                        },
                    }}
                    style={{
                        width: `${Math.random() * 6 + 2}px`,
                        height: `${Math.random() * 6 + 2}px`,
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
            >
                <motion.div
                    className="w-full h-full"
                    animate={{
                        y: [0, -50],
                        x: [0, -10],
                        transition: {
                            duration: 15,
                            ease: "linear",
                            repeat: Infinity,
                        },
                    }}
                />
            </div>

            {/* Center content */}
            <div className="relative z-10 flex flex-col items-center px-4">
                {/* Logo circle with pulse effect */}
                <motion.div className="relative mb-12" variants={logoVariants}>
                    <motion.div
                        className="absolute -inset-3 rounded-full bg-gradient-to-r from-emerald-400/20 to-green-500/20"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0.3, 0.5],
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                    />

                    <div className="relative w-32 h-32 mb-4">
                        <motion.div
                            className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-green-400"
                            animate={{
                                rotate: 360,
                                transition: {
                                    duration: 15,
                                    ease: "linear",
                                    repeat: Infinity,
                                },
                            }}
                        >
                            <div className="absolute inset-1 rounded-full bg-black" />
                        </motion.div>

                        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
                            <motion.div
                                className="text-white text-5xl font-bold"
                                animate={{
                                    opacity: [0.7, 1, 0.7],
                                    scale: [0.95, 1, 0.95],
                                }}
                                transition={{
                                    duration: 3,
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                }}
                            >
                                <span className="sr-only">Your Website Logo</span>
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
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Text with typewriter effect */}
                <motion.div
                    className="text-center space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <h2
                        className={`${anton.className} text-5xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-600 drop-shadow-lg tracking-wider`}
                    >
                        LOADING EXPERIENCE
                    </h2>

                    <motion.div
                        className="flex items-center justify-center space-x-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <motion.span
                            className="text-emerald-400 font-medium"
                            animate={{
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                            }}
                        >
                            Preparing your website
                        </motion.span>

                        <motion.div
                            className="flex space-x-1"
                            animate={{
                                x: [0, 5, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                            }}
                        >
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    className="w-2 h-2 rounded-full bg-emerald-400"
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.5, 1, 0.5],
                                    }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        delay: i * 0.2,
                                    }}
                                />
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Progress bar */}
                <motion.div
                    className="w-64 sm:w-80 h-1 bg-gray-700 rounded-full overflow-hidden mt-12"
                    initial={{ opacity: 0, scaleX: 0.3 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                >
                    <motion.div
                        className="h-full bg-gradient-to-r from-emerald-400 to-green-500 rounded-full"
                        style={{ width: `${progress}%` }}
                    />
                </motion.div>

                {/* Additional animated element */}
                <motion.div
                    className="absolute bottom-8 flex items-center text-white/50 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    <ChevronRight className="w-4 h-4 mr-1 text-emerald-400" />
                    <motion.span
                        animate={{
                            opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                        }}
                    >
                        Creating stunning experience
                    </motion.span>
                </motion.div>
            </div>
        </motion.div>
    );
}