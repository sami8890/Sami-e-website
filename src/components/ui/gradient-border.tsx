"use client"

import type * as React from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"

export function GradientBorder({ children }: { children: React.ReactNode }) {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect()
        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
    }

    return (
        <div className="group relative rounded-xl" onMouseMove={handleMouseMove}>
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 210, 133, 0.1),
              transparent 80%
            )
          `,
                }}
            />
            <div className="relative rounded-xl border border-[#00D285]/10 transition-colors duration-300 group-hover:border-[#00D285]/30">
                {children}
            </div>
        </div>
    )
}

