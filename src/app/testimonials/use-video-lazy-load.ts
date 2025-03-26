"use client"

import { useEffect, useRef, useState } from "react"

interface UseLazyVideoProps {
    threshold?: number
    rootMargin?: string
}

export function useLazyVideo({ threshold = 0.1, rootMargin = "200px" }: UseLazyVideoProps = {}) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const currentRef = containerRef.current
        if (!currentRef) return

        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries
                setIsVisible(entry.isIntersecting)
            },
            {
                threshold,
                rootMargin,
            },
        )

        observer.observe(currentRef)

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef)
            }
        }
    }, [threshold, rootMargin])

    return { containerRef, isVisible }
}

