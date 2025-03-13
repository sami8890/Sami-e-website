"use client"

import type React from "react"
import { useCallback, useMemo, useRef, useState } from "react"
import Link from "next/link"

export interface MarqueeItem {
  text: string
  href: string
  icon?: React.ReactNode
  color?: string
  tooltip?: string
  className?: string
}

interface Props {
  items: MarqueeItem[]
  speed?: number
  direction?: "normal" | "reverse"
  pauseOnHover?: boolean
  fontSize?: "sm" | "base" | "lg" | "xl" | "2xl" | "3xl"
  spacing?: "sm" | "base" | "lg" | "xl" | "2xl" | "3xl"
  itemClassName?: string
  gradient?: boolean
  gradientColor?: string
  theme?: {
    text: string
    hover: string
  }
}

const InfiniteMarquee = ({
  items,
  speed = 30,
  direction = "normal",
  pauseOnHover = true,
  fontSize = "xl",
  spacing = "2xl",
  itemClassName = "",
  gradient = true,
  gradientColor = "from-black via-gray-600 to-black",
  theme = {
    text: "text-white",
    hover: "hover:text-gray-400",
  },
}: Props) => {
  const [isHovered, setIsHovered] = useState(false)
  const marqueeRef = useRef<HTMLDivElement>(null)

  const fontSizeClass = useMemo(() => {
    switch (fontSize) {
      case "sm":
        return "text-sm"
      case "base":
        return "text-base"
      case "lg":
        return "text-lg"
      case "xl":
        return "text-xl"
      case "2xl":
        return "text-2xl"
      case "3xl":
        return "text-3xl"
      default:
        return "text-xl"
    }
  }, [fontSize])

  const spacingClass = useMemo(() => {
    switch (spacing) {
      case "sm":
        return "mr-2"
      case "base":
        return "mr-4"
      case "lg":
        return "mr-6"
      case "xl":
        return "mr-8"
      case "2xl":
        return "mr-10"
      case "3xl":
        return "mr-12"
      default:
        return "mr-10"
    }
  }, [spacing])

  const themeColors = useMemo(
    () => ({
      text: theme.text,
      hover: theme.hover,
    }),
    [theme.text, theme.hover],
  )

  const renderItem = useCallback(
    (item: MarqueeItem, idx: number) => (
      <Link
        key={`${item.text}-${idx}`}
        href={item.href}
        className={`
          group flex items-center ${spacingClass} ${fontSizeClass} font-medium 
          ${themeColors.text} ${themeColors.hover}
          transition-all duration-500 ease-in-out
          rounded-full py-2 
          focus:outline-none focus:ring-2 focus:ring-white/20
          focus:ring-offset-2 focus:ring-offset-black
          relative whitespace-nowrap
          ${item.className || ""}
          ${itemClassName}
        `}
        style={{ color: item.color }}
        title={item.tooltip}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {item.icon && <span className="transition-all duration-500 ease-in-out transform mr-2">{item.icon}</span>}
        <span className="transition-all duration-500 ease-in-out">{item.text}</span>
        <span className="mx-6 opacity-30 transition-all duration-500 ease-in-out">•</span>
      </Link>
    ),
    [spacingClass, fontSizeClass, themeColors, itemClassName],
  )

  const animationDuration = useMemo(() => {
    return `${speed}s`
  }, [speed])

  const marqueeDirection = useMemo(() => {
    return direction === "reverse" ? "reverse" : "normal"
  }, [direction])

  return (
    <div className="relative w-full overflow-hidden">
      {gradient && <div className="absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-black" />}
      {gradient && <div className="absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-black" />}
      <div
        ref={marqueeRef}
        className={`animate-marquee flex whitespace-nowrap ${gradient ? gradientColor : ""}`}
        style={{
          animationDuration: animationDuration,
          animationDirection: marqueeDirection,
          animationPlayState: isHovered && pauseOnHover ? "paused" : "running",
        }}
      >
        {items.map(renderItem)}
        {items.map(renderItem)}
      </div>
      <style jsx>{`
  .animate-marquee {
    min-width: 100%;
    will-change: transform;
    animation: scroll-x linear infinite;
    animation-fill-mode: both;
  }

  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .animate-marquee {
      animation-duration: ${speed * 2}s;
    }
  }
`}</style>
    </div>
  )
}

export default InfiniteMarquee

