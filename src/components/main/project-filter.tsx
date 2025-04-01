//src/componnets/main/project-filter.tsx
"use client"

import { useState, useCallback } from "react"
import { motion } from "framer-motion"

interface ProjectFilterProps {
  onFilterChange: (category: string) => void
  onSearch: (term: string) => void
}

export function ProjectFilter({ onFilterChange }: ProjectFilterProps) {
  const [activeCategory, setActiveCategory] = useState("All")
  const categories = ["All", "Portfolio", "Landing-Page", "E-commerce"]

  const handleCategoryClick = useCallback(
    (category: string) => {
      setActiveCategory(category)
      onFilterChange(category)
    },
    [onFilterChange],
  )

  return (
    <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-6">
      <div className="flex flex-wrap justify-center md:justify-start gap-3">
        {categories.map((category) => (
          <motion.button
            key={category}
            className={`px-6 py-3 rounded-full text-base font-medium transition-colors ${activeCategory === category ? "bg-[#00C18F] text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            onClick={() => handleCategoryClick(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>
    
    </div>
  )
}

