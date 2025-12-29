"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const tools = [
  {
    name: "Figma",
    icon: "https://framerusercontent.com/images/i0ob5TnIF36Osq1Gd7Tb2UaOCRE.svg",
  },
  {
    name: "Framer",
    icon: "https://framerusercontent.com/images/q0LOsiH3qEkXl83edU0uXNuRQ.svg",
  },
  {
    name: "React",
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "Next.js",
    icon: "https://framerusercontent.com/images/Y0hOrMC1SZrltsBnp8CUVxdu0Hw.svg",
  },
]

export default function Ticker() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-12 md:mt-8 lg:mt-12 overflow-hidden">
      <p className="text-center text-sm text-slate-500 mb-4">Built with modern tools</p>
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />

        <motion.div
          className="flex gap-12 lg:gap-16"
          animate={{ x: [0, -200] }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {[...tools, ...tools, ...tools].map((tool, i) => (
            <div
              key={i}
              className="flex items-center gap-2 flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity"
            >
              <Image
                src={tool.icon || "/placeholder.svg"}
                alt={tool.name}
                width={24}
                height={24}
                className="w-6 h-6 lg:w-7 lg:h-7"
              />
              <span className="text-sm lg:text-base text-slate-600 font-medium">{tool.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
