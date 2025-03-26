"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { MessageSquare, X, Linkedin, Phone } from "lucide-react"
import Link from "next/link"

// Add this custom hook inside the component before the other hooks
const useVerySmallScreen = () => {
    const [isVerySmallScreen, setIsVerySmallScreen] = useState(false)

    useEffect(() => {
        const checkScreenSize = () => {
            setIsVerySmallScreen(window.innerWidth < 380)
        }

        // Initial check
        checkScreenSize()

        // Add event listener
        window.addEventListener("resize", checkScreenSize)

        // Cleanup
        return () => window.removeEventListener("resize", checkScreenSize)
    }, [])

    return isVerySmallScreen
}

export function SocialFab() {
    const [isOpen, setIsOpen] = useState(false)
    const [hasOpened, setHasOpened] = useState(false)
    const pulseAnimation = useAnimation()

    useEffect(() => {
        // Check if user has previously interacted with the button
        const hasSeenButton = localStorage.getItem("hasSeenContactButton")
        if (hasSeenButton === "true") {
            setHasOpened(true)
        }
    }, [])

    useEffect(() => {
        if (!hasOpened) {
            const startPulse = async () => {
                await pulseAnimation.start({
                    scale: [1, 1.05, 1],
                    boxShadow: [
                        "0 0 0 0 rgba(0, 255, 149, 0.7)",
                        "0 0 15px 3px rgba(0, 255, 149, 0.5)",
                        "0 0 0 0 rgba(0, 255, 149, 0.7)",
                    ],
                    transition: {
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 1.5,
                    },
                })
            }
            startPulse()
        }
    }, [hasOpened, pulseAnimation])

    const toggleOpen = () => {
        // Haptic feedback for mobile devices
        if (navigator.vibrate && !isOpen) {
            navigator.vibrate(50)
        }

        if (!hasOpened) {
            setHasOpened(true)
            pulseAnimation.stop()
            // Save that user has seen the button
            try {
                localStorage.setItem("hasSeenContactButton", "true")
            } catch (error) {
                console.error("Failed to save user interaction:", error)}
        }

        setIsOpen(!isOpen)
    }

    const isMobileDevice = () => {
        return window.innerWidth < 640
    }

    // Add this after the other hooks
    const isVerySmallScreen = useVerySmallScreen()

    const socialLinks = [
        {
            name: "LinkedIn",
            icon: <Linkedin className="w-5 h-5" />,
            href: "https://linkedin.com/in/yourprofile",
            ariaLabel: "Visit my LinkedIn profile",
        },
        {
            name: "WhatsApp",
            icon: <Phone className="w-5 h-5" />,
            href: "https://wa.me/yourphonenumber",
            ariaLabel: "Contact me on WhatsApp",
        },
    ]

    return (
        <motion.div
            className="fixed bottom-3 sm:bottom-4 md:bottom-6 right-3 sm:right-4 md:right-6 z-50"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 1,
            }}
        >
            {/* Main Button */}
            <motion.button
                onClick={toggleOpen}
                className="relative flex items-center justify-center w-auto h-10 sm:h-12 md:h-14 px-3 sm:px-4 md:px-5 rounded-full bg-black border-2 border-[#00FF95] shadow-[0_0_15px_rgba(0,255,149,0.5)]"
                whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(0, 255, 149, 0.7)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                }}
                animate={pulseAnimation}
                aria-label="Contact Me"
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={isOpen ? "close" : "open"}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <motion.div
                            initial={{ rotate: isOpen ? 0 : -90, scale: 0.8 }}
                            animate={{ rotate: 0, scale: 1 }}
                            exit={{ rotate: 90, scale: 0.8 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 20,
                            }}
                            className="text-[#00FF95]"
                        >
                            {isOpen ? (
                                <X className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                            ) : (
                                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                            )}
                        </motion.div>

                        <motion.span
                            className={`text-[#00FF95] text-xs sm:text-sm md:text-base font-medium ${isVerySmallScreen ? "hidden sm:inline" : ""}`}
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: "auto" }}
                            exit={{ opacity: 0, width: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {isOpen ? "Close" : "Connect"}
                        </motion.span>
                    </motion.div>
                </AnimatePresence>

                {/* Click effect */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ scale: 0, opacity: 0.7 }}
                            animate={{ scale: 3, opacity: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="absolute inset-0 rounded-full bg-[#00FF95]/30"
                        />
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Social Links Counter */}
            <AnimatePresence>
                {!isOpen && !hasOpened && (
                    <motion.div
                        className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#00FF95] text-black text-xs flex items-center justify-center font-bold"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ delay: 1.5, type: "spring" }}
                    >
                        {socialLinks.length}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Social Links */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="absolute bottom-12 sm:bottom-14 md:bottom-16 right-0 flex flex-col gap-1.5 sm:gap-2 md:gap-3 items-end"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {socialLinks.map((link, index) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                transition={{
                                    delay: index * 0.08,
                                    type: "spring",
                                    stiffness: 350,
                                    damping: 25,
                                }}
                                whileHover={{ x: isMobileDevice() ? -3 : -5 }}
                            >
                                <Link
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.ariaLabel}
                                    className="flex items-center gap-1.5 sm:gap-2 md:gap-3 px-2 sm:px-3 md:px-5 py-1.5 sm:py-2 md:py-3 rounded-full bg-black border border-[#00FF95] shadow-[0_0_10px_rgba(0,255,149,0.3)] hover:shadow-[0_0_15px_rgba(0,255,149,0.5)] transition-all duration-300"
                                    onClick={() => {
                                        if (navigator.vibrate) {
                                            navigator.vibrate(30)
                                        }
                                    }}
                                >
                                    <motion.div
                                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                                        transition={{ duration: 0.5 }}
                                        className="text-[#00FF95]"
                                    >
                                        {link.icon}
                                    </motion.div>
                                    <motion.span
                                        className={`text-xs sm:text-sm font-medium text-[#00FF95] ${isVerySmallScreen ? "hidden sm:inline" : ""}`}
                                        initial={{ opacity: 0, width: 0 }}
                                        animate={{ opacity: 1, width: "auto" }}
                                        transition={{ delay: 0.1 + index * 0.07 }}
                                    >
                                        {link.name}
                                    </motion.span>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Click outside handler */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-40 bg-black/20"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </motion.div>
    )
}

