"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";

interface MarqueeItem {
  text: string;
  icon?: React.ReactNode;
  href: string;
  color?: string;
  className?: string;
  tooltip?: string;
}

interface MarqueeProps {
  items: MarqueeItem[];
  speed?: number;
  direction?: "left" | "right";
  className?: string;
  gradientColor?: string;
  pauseOnHover?: boolean;
  itemClassName?: string;
  fontSize?: "sm" | "base" | "lg" | "xl" | "2xl";
  spacing?: "tight" | "normal" | "relaxed";
  theme?: "light" | "dark" | "custom";
  customColors?: {
    background?: string;
    text?: string;
    hover?: string;
    border?: string;
  };
}

export function InfiniteMarquee({
  items,
  speed = 40,
  direction = "left",
  className = "",
  gradientColor = "from-black/95",
  pauseOnHover = true,
  itemClassName = "",
  fontSize = "xl",
  spacing = "normal",
  theme = "dark",
  customColors
}: MarqueeProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Determine theme colors
  const themeColors = useMemo(() => {
    if (customColors) return customColors;

    const themes = {
      light: {
        background: "bg-white/95",
        text: "text-gray-800",
        hover: "hover:text-blue-600",
        border: "border-gray-200"
      },
      dark: {
        background: "bg-black/95",
        text: "text-gray-300/90",
        hover: "hover:text-white",
        border: "border-gray-800"
      }
    };

    return theme === "custom" ? themes.dark : themes[theme];
  }, [theme, customColors]);

  // Determine font size class
  const fontSizeClass = useMemo(() => ({
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl"
  }[fontSize]), [fontSize]);

  // Determine spacing class
  const spacingClass = useMemo(() => ({
    tight: "gap-2 px-2",
    normal: "gap-4 px-4",
    relaxed: "gap-6 px-6"
  }[spacing]), [spacing]);

  // Create multiple copies of items for smooth infinite scrolling
  const repeatedItems = useMemo(() => [...items, ...items, ...items, ...items], [items]);

  // Handle hover state
  useEffect(() => {
    if (!pauseOnHover) return;
    let timeoutId: NodeJS.Timeout;

    if (isHovered) {
      timeoutId = setTimeout(() => setIsPaused(true), 100);
    } else {
      setIsPaused(false);
    }

    return () => clearTimeout(timeoutId);
  }, [isHovered, pauseOnHover]);

  // Memoize the render item function
  const renderItem = useCallback(
    (item: MarqueeItem, idx: number) => (
      <Link
        key={`${item.text}-${idx}`}
        href={item.href}
        className={`
          group flex items-center ${spacingClass} ${fontSizeClass} font-medium 
          ${themeColors.text} ${themeColors.hover}
          transition-all duration-500 ease-in-out
          rounded-full py-2 backdrop-blur-sm
          focus:outline-none focus:ring-2 focus:ring-white/20
          focus:ring-offset-2 focus:ring-offset-black
          relative
          ${item.className || ""}
          ${itemClassName}
        `}
        style={{ color: item.color }}
        title={item.tooltip}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {item.icon && (
          <span className="transition-all duration-500 ease-in-out transform ">
            {item.icon}
          </span>
        )}
        <span className="transition-all duration-500 ease-in-out group-hover:tracking-wider">
          {item.text}
        </span>
        <span className="mx-4 opacity-30 transition-all duration-500 ease-in-out ">
          •
        </span>
      </Link>
    ),
    [spacingClass, fontSizeClass, themeColors, itemClassName]
  );

  return (
    <div
      className={`
        relative flex overflow-x-hidden ${themeColors.background}
        border-y ${themeColors.border} transition-all duration-500
        ${className}
      `}
      role="region"
      aria-label="Scrolling announcements"
    >
      {/* First Marquee Animation */}
      <div
        className="flex items-center py-6 animate-marquee whitespace-nowrap"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: direction === "left" ? "normal" : "reverse",
          animationPlayState: isPaused ? "paused" : "running"
        }}
      >
        {repeatedItems.map(renderItem)}
      </div>

      {/* Second Marquee Animation (Clone) */}
      <div
        className="flex items-center py-6 animate-marquee whitespace-nowrap"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: direction === "left" ? "normal" : "reverse",
          animationPlayState: isPaused ? "paused" : "running"
        }}
      >
        {repeatedItems.map(renderItem)}
      </div>

      {/* Gradient Overlays */}
      <div
        className={`
          absolute left-0 top-0 bottom-0 w-20 z-10 
          bg-gradient-to-r ${gradientColor} to-transparent 
          pointer-events-none transition-opacity duration-500
          ${isPaused ? 'opacity-0' : 'opacity-100'}
        `}
      />
      <div
        className={`
          absolute right-0 top-0 bottom-0 w-20 z-10 
          bg-gradient-to-l ${gradientColor} to-transparent 
          pointer-events-none transition-opacity duration-500
          ${isPaused ? 'opacity-0' : 'opacity-100'}
        `}
      />

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
  );
}