"use client"

import { useState, useEffect, useMemo } from "react"

export const useMobile = () => {
    // Use null initially to avoid hydration mismatch
    const [windowWidth, setWindowWidth] = useState<number | null>(null)

    useEffect(() => {
        // Set initial value only on client side
        setWindowWidth(window.innerWidth)

        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }

        // Add event listener
        window.addEventListener("resize", handleResize)

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    // Memoize the result to avoid unnecessary re-renders
    const isMobile = useMemo(() => {
        // Return false during SSR to match the initial desktop layout
        if (windowWidth === null) return false
        return windowWidth < 768
    }, [windowWidth])

    return isMobile
}

