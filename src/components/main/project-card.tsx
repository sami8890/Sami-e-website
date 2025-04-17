"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowRight, CheckCircle, Calendar } from "lucide-react"

interface ProjectCardProps {
  project: {
    id: number
    name: string
    metric: string
    imageUrl: string
    category: string
    description: string
    technologies: string[]
    liveUrl: string
    githubUrl: string
    duration?: string
    status?: "live" | "development"
  }
  onClick: () => void
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isImageError, setIsImageError] = useState(false)

  // Reset image error state when imageUrl changes
  useEffect(() => {
    setIsImageError(false)
    setImageLoaded(false)
  }, [project.imageUrl])

  return (
    <div
      className="group relative rounded-xl overflow-hidden bg-zinc-900 cursor-pointer border border-zinc-800 shadow-lg h-full w-full focus-within:ring-2 focus-within:ring-[#00E188]"
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.name}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick()
          e.preventDefault()
        }
      }}
    >
      {/* Image Container */}
      <div className="w-full h-[220px] sm:h-[240px] md:h-[260px] relative overflow-hidden bg-zinc-800">
        <div className="relative w-full h-full">
          {/* Loading Skeleton */}
          {!imageLoaded && !isImageError && (
            <div className="absolute inset-0 bg-zinc-800">
              <div className="h-full w-full animate-pulse bg-zinc-800" />
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
            src={project.imageUrl || "/placeholder.svg?height=400&width=600"}
            alt={project.name || "Project image"}
            fill
            className={`object-cover transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onLoad={() => setImageLoaded(true)}
            onError={() => setIsImageError(true)}
            quality={90}
          />



          {/* Status Badge */}
          {project.status && (
            <div
              className={`absolute top-3 right-3 px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1 ${project.status === "live" ? "bg-[#00E188]/20 text-[#00E188]" : "bg-amber-500/20 text-amber-400"
                }`}
            >
              {project.status === "live" ? (
                <>
                  <CheckCircle className="w-3 h-3" />
                  Live
                </>
              ) : (
                <>
                  <Calendar className="w-3 h-3" />
                  In Development
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="relative p-5 sm:p-6 bg-zinc-900">
        <div className="space-y-4">
          {/* Project Info */}
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-white line-clamp-2">{project.name}</h3>
            <p className="text-[#00E188] font-medium text-sm sm:text-base">{project.metric}</p>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="px-2.5 py-1.5 sm:py-1 text-xs bg-zinc-800 text-zinc-400 rounded-lg">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2.5 py-1.5 sm:py-1 text-xs bg-zinc-800 text-zinc-400 rounded-lg">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>

          {/* Overview Button */}
          <div className="mt-4">
            <button
              className="w-full px-4 py-2.5 rounded-lg bg-[#00E188] text-black flex items-center justify-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-[#00E188]"
              onClick={onClick}
              aria-label={`View details for ${project.name}`}
            >
              Overview
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
