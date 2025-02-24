//src/components/main/project-filter.tsx
"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";

interface ProjectFilterProps {
  onFilterChange: (category: string) => void;
  onSearch: (term: string) => void;
}

export function ProjectFilter({
  onFilterChange,
  onSearch,
}: ProjectFilterProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "SaaS", "Web App", "E-commerce"];

  const handleCategoryClick = useCallback(
    (category: string) => {
      setActiveCategory(category);
      onFilterChange(category);
    },
    [onFilterChange]
  );

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
      <div className="flex flex-wrap justify-center sm:justify-start gap-2">
        {categories.map((category) => (
          <motion.button
            key={category}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category
                ? "bg-[#00C18F] text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
            onClick={() => handleCategoryClick(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>
      <input
        type="text"
        placeholder="Search projects..."
        className="w-full sm:w-64 px-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00C18F]"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
