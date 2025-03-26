//src/components/main/project-card.tsx
"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Globe, Users } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-querry"

interface ProjectCardProps {
  project: {
    name: string
    metric: string
    imageUrl: string
    category: string
    technologies: string[]
    demoUrl?: string
    engagement?: {
      users?: number
      commits?: number
    }
  }
  onClick: () => void
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isImageError, setIsImageError] = useState(false)
  const isMobile = useMediaQuery("(max-width: 640px)")

  // Reset image error state when imageUrl changes
  useEffect(() => {
    setIsImageError(false)
    setImageLoaded(false)
  }, [project.imageUrl])

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.7,
        ease: [0.32, 0.72, 0, 1],
      },
    },
    initial: {
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.32, 0.72, 0, 1],
      },
    },
  }

  return (
    <motion.div
      className="group relative rounded-xl overflow-hidden bg-zinc-900 cursor-pointer border border-zinc-800 active:scale-[0.98] transition-transform shadow-lg hover:shadow-emerald-900/10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      role="button"
      tabIndex={0}
      whileHover={{ y: -5 }}
    >
      {/* Image Container - Moderately Larger */}
      <div className="w-full h-[220px] sm:h-[240px] md:h-[260px] relative overflow-hidden bg-zinc-800">
        <motion.div
          className="relative w-full h-full"
          variants={imageVariants}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
        >
          {/* Loading Skeleton */}
          {!imageLoaded && !isImageError && (
            <div className="absolute inset-0 bg-zinc-800">
              <div className="h-full w-full animate-pulse bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 background-animate" />
            </div>
          )}

          {/* Fallback for Image Error */}
          {isImageError && (
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-800">
              <span className="text-zinc-600">Image unavailable</span>
            </div>
          )}

          {/* Main Image */}
          <Image
            src={project.imageUrl || "/placeholder.svg"}
            alt={project.name || "Project image"}
            fill
            className={`object-cover transition-all duration-700 ease-in-out ${imageLoaded ? "opacity-100 blur-0" : "opacity-0 blur-lg"
              }`}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onLoad={() => setImageLoaded(true)}
            onError={() => setIsImageError(true)}
            quality={90}
          />

          {/* Image Overlay Effects */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/20 to-zinc-900 pointer-events-none"
            animate={{
              opacity: isHovered ? 0.8 : 0.6,
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Project Links - Only Demo URL */}
        <div className="absolute top-4 right-4 flex items-center gap-1 sm:gap-2">
          {project.demoUrl && (
            <motion.a
              href={project.demoUrl}
              className="p-2.5 sm:p-2 rounded-lg bg-zinc-800/90 text-zinc-300 backdrop-blur-sm hover:bg-zinc-700 transition-colors"
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe className="w-5 h-5 sm:w-4 sm:h-4" />
            </motion.a>
          )}
        </div>
      </div>

      {/* Content Section - Balanced Spacing */}
      <div className="relative p-5 sm:p-6 bg-zinc-900">
        <div className="space-y-4">
          {/* Project Category & Timeline */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="px-3 py-1.5 sm:py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-full w-fit"
            >
              {project.category}
            </motion.span>
          </div>

          {/* Project Info */}
          <div className="space-y-2">
            <motion.h3
              className="text-lg sm:text-xl font-bold text-white line-clamp-2"
              animate={{ y: isHovered ? -2 : 0 }}
            >
              {project.name || "Untitled Project"}
            </motion.h3>
            <motion.p className="text-emerald-400 font-medium text-sm sm:text-base" animate={{ y: isHovered ? -1 : 0 }}>
              {project.metric}
            </motion.p>
          </div>

          {/* Engagement Metrics - Only Users */}
          {project.engagement && project.engagement.users && (
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-zinc-400">
              <motion.div className="flex items-center gap-2 sm:gap-1.5" whileHover={{ scale: 1.05, color: "#ffffff" }}>
                <Users className="w-4 h-4" />
                <span>{project.engagement.users.toLocaleString()} users</span>
              </motion.div>
            </div>
          )}

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgb(63 63 70 / 1)",
                }}
                className="px-2.5 py-1.5 sm:py-1 text-xs bg-zinc-800 text-zinc-400 rounded-lg hover:text-zinc-300 transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* View Project Button */}
        <AnimatePresence>
          {(isHovered || isMobile) && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="sm:absolute sm:right-6 sm:top-1/2 sm:-translate-y-1/2 mt-4 sm:mt-0"
            >
              <motion.button
                className="w-full sm:w-auto px-4 py-2.5 sm:py-2 rounded-lg bg-emerald-500 text-sm text-white flex items-center justify-center sm:justify-start gap-2 transition-all hover:bg-emerald-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Details
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-emerald-500"
        initial={{ width: "0%" }}
        animate={{ width: isHovered ? "100%" : "0%" }}
        transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
      />
    </motion.div>
  )
}

export default ProjectCard

