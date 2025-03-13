"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { sections } from "./hero-data"

interface SectionIndicatorsProps {
  sections: typeof sections
  activeIndex: number
  onClick: (index: number) => void
}

// Section indicators component
export const SectionIndicators = ({ sections, activeIndex, onClick }: SectionIndicatorsProps) => {
  return (
    <>
      {/* Text indicator for very small screens */}
      <div className="xs:hidden flex justify-center mt-4 text-sm text-gray-300">
        <span className="bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
          {activeIndex + 1} / {sections.length}
        </span>
      </div>

      {/* Dot indicators for larger screens */}
      <div className="hidden xs:flex gap-2 sm:gap-3 justify-center mt-4 sm:mt-6">
        {sections.map((_, index) => (
          <button
            key={index}
            className={`relative transition-all duration-300 rounded-full overflow-hidden
              ${
                index === activeIndex
                  ? "w-5 sm:w-8 h-2 sm:h-2.5 bg-emerald-400"
                  : "w-2 sm:w-2.5 h-2 sm:h-2.5 bg-gray-600 hover:bg-gray-400"
              }`}
            onClick={() => onClick(index)}
            aria-label={`Go to section ${index + 1}`}
            aria-current={index === activeIndex ? "true" : "false"}
          >
            {index === activeIndex && (
              <motion.div
                className="absolute inset-0 bg-emerald-300/50"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            )}
          </button>
        ))}
      </div>
    </>
  )
}

interface HeroCarouselProps {
  activeSection: number
  setActiveSection: (index: number) => void
  isReducedMotion: boolean
}

// Minimum swipe distance (in px)
const minSwipeDistance = 50

export const HeroCarousel = ({ activeSection, setActiveSection }: HeroCarouselProps) => {
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Touch handlers for swipe functionality
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      // Handle left swipe - go to next section
      setActiveSection((activeSection + 1) % sections.length)
    } else if (isRightSwipe) {
      // Handle right swipe - go to previous section
      setActiveSection((activeSection - 1 + sections.length) % sections.length)
    }
  }

  return (
    <div
      ref={carouselRef}
      className="h-auto sm:h-28 min-h-[8rem] relative mb-6 sm:mb-0"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center bg-black/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-white/5"
        >
          <p
            ref={descriptionRef}
            className="text-lg sm:text-xl md:text-2xl text-gray-100 font-light drop-shadow-md text-center"
          >
            {sections[activeSection].description}
          </p>
        </motion.div>
      </AnimatePresence>

      <SectionIndicators
        sections={sections}
        activeIndex={activeSection}
        onClick={(index) => {
          setActiveSection(index)
        }}
      />
    </div>
  )
}

