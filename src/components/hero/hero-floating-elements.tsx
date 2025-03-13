"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

// Custom hook for intersection observer with cleanup
export const useIntersectionObserver = (ref: React.RefObject<Element>, options: IntersectionObserverInit = {}) => {
    const [isIntersecting, setIsIntersecting] = useState(false)
    const observerRef = useRef<IntersectionObserver | null>(null)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        // Cleanup previous observer
        if (observerRef.current) {
            observerRef.current.disconnect()
        }

        observerRef.current = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting)
        }, options)

        observerRef.current.observe(element)

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect()
            }
        }
    }, [ref, options])

    return { isIntersecting }
}

// Floating elements component with intersection observer optimization
export const FloatingElements = () => {
    const [isVisible, setIsVisible] = useState(false)
    const elementsRef = useRef<HTMLDivElement>(null)
    const { isIntersecting } = useIntersectionObserver(elementsRef as React.RefObject<HTMLDivElement>, {
        threshold: 0.1,
    })

    useEffect(() => {
        if (isIntersecting) {
            setIsVisible(true)
        }
    }, [isIntersecting])

    const elements = [
        { size: 24, color: "#0D8A53", left: "5%", top: "20%", delay: 0, blur: "16px" },
        { size: 32, color: "#059669", left: "80%", top: "15%", delay: 0.8, blur: "20px" },
        { size: 20, color: "#34D399", left: "75%", top: "70%", delay: 2.2, blur: "14px" },
    ]

    if (!isVisible) return <div ref={elementsRef} className="absolute inset-0" />

    return (
        <div ref={elementsRef} className="absolute inset-0 overflow-hidden">
            {elements.map((el, index) => (
                <motion.div
                    key={index}
                    className="absolute rounded-full mix-blend-screen pointer-events-none"
                    style={{
                        width: el.size,
                        height: el.size,
                        backgroundColor: el.color,
                        left: el.left,
                        top: el.top,
                        filter: `blur(${el.blur})`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 4,
                        delay: el.delay,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    )
}

