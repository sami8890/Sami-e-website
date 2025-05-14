"use client"

import { useState, useEffect } from "react"

export function useMobile() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkIfMobile = () => {
            const userAgent =
                navigator.userAgent ||
                navigator.vendor ||
                (typeof window !== "undefined" && "opera" in window ? (window as typeof window & { opera: string }).opera : "")
            const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i
            setIsMobile(mobileRegex.test(userAgent.toLowerCase()))
        }

        checkIfMobile()

        window.addEventListener("resize", checkIfMobile)
        return () => window.removeEventListener("resize", checkIfMobile)
    }, [])

    return isMobile
}
