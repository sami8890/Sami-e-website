"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { X, ExternalLink, Github, Clock, Eye, ZoomIn } from "lucide-react"

interface Project {
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
  views?: number
  status?: "live" | "development"
}

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: Project | null
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [loading, setLoading] = useState(true)
  const [imageError, setImageError] = useState(false)
  const [fullscreenImage, setFullscreenImage] = useState(false)

  // Reset loading state when project changes
  useEffect(() => {
    if (project) {
      setLoading(true)
      setImageError(false)
      setFullscreenImage(false)
    }
  }, [project])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === "Escape") {
        if (fullscreenImage) {
          setFullscreenImage(false)
        } else {
          onClose()
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose, fullscreenImage])

  if (!project) return null

  // Function to ensure URL has proper format for external links
  const formatExternalUrl = (url: string) => {
    if (!url) return "#"
    return url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`
  }

  // Toggle fullscreen image view
  const toggleFullscreenImage = () => {
    setFullscreenImage(!fullscreenImage)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="w-[95%] sm:w-11/12 max-w-6xl p-0 bg-black border border-gray-800 rounded-xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col z-50"
        onInteractOutside={(e) => e.preventDefault()}
      >
        {/* Close Button */}
        <DialogClose className="absolute right-3 top-3 z-50 sm:right-4 sm:top-4">
          <div className="p-2.5 rounded-full bg-black/40 backdrop-blur-md hover:bg-black/60 transition-all duration-200 border border-gray-800">
            <X className="h-5 w-5 text-white/90" />
            <span className="sr-only">Close</span>
          </div>
        </DialogClose>

        {/* Fullscreen Image View */}
        {fullscreenImage ? (
          <div className="relative w-full h-[80vh] bg-black/90">
            <button
              onClick={toggleFullscreenImage}
              className="absolute top-3 left-3 z-50 p-2.5 rounded-full bg-black/40 backdrop-blur-md hover:bg-black/60 transition-all duration-200 border border-gray-800"
            >
              <X className="h-5 w-5 text-white/90" />
              <span className="sr-only">Exit fullscreen</span>
            </button>

            {!imageError ? (
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={project.imageUrl || "/placeholder.svg?height=800&width=1200"}
                  alt={project.name}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900 text-gray-600">
                <p className="text-lg font-medium">Image not available</p>
              </div>
            )}
          </div>
        ) : (
          // Regular Modal Content
          <div className="flex flex-col lg:flex-row w-full h-full overflow-auto">
            {/* Image Section - Takes full width on mobile, 45% on large screens */}
            <div className="relative w-full lg:w-[45%] h-72 sm:h-96 lg:h-auto bg-gray-900 flex-shrink-0">
              {/* Loading Spinner */}
              {loading && !imageError && (
                <div className="absolute inset-0 flex items-center justify-center z-20 bg-gray-900/70 backdrop-blur-sm">
                  <div className="h-10 w-10 text-[#00E188] animate-spin border-3 border-current border-t-transparent rounded-full" />
                </div>
              )}

              {/* Project Status Badge */}
              {project.status && (
                <div className="absolute top-4 left-4 z-30">
                  <Badge
                    className={`px-3 py-1 text-xs font-medium uppercase tracking-wider ${project.status === "live"
                        ? "bg-green-500/20 text-green-400 border-green-500/50"
                        : "bg-amber-500/20 text-amber-400 border-amber-500/50"
                      }`}
                  >
                    {project.status}
                  </Badge>
                </div>
              )}

              {/* Fullscreen Button */}
              <button
                onClick={toggleFullscreenImage}
                className="absolute bottom-4 right-4 z-30 p-2 rounded-full bg-black/60 hover:bg-black/80 transition-all duration-200"
                aria-label="View fullscreen"
              >
                <ZoomIn className="h-5 w-5 text-white" />
              </button>

              {!imageError ? (
                <div className="relative w-full h-full">
                  <Image
                    src={project.imageUrl || "/placeholder.svg?height=600&width=800"}
                    alt={project.name}
                    fill
                    className="object-cover object-center"
                    onLoadingComplete={() => setLoading(false)}
                    onError={() => {
                      setLoading(false)
                      setImageError(true)
                    }}
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    priority
                  />
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900 text-gray-600">
                  <p className="text-lg font-medium">Image not available</p>
                </div>
              )}

              {/* Image Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 lg:hidden" />
            </div>

            {/* Content Section - Takes full width on mobile, 55% on large screens */}
            <div className="p-6 md:p-8 w-full lg:w-[55%] overflow-y-auto bg-black text-white">
              {/* Project Title and Category */}
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#00E188] mb-2">{project.name}</h2>
                <div className="flex flex-wrap items-center gap-2 text-gray-400">
                  <span className="text-sm uppercase tracking-wider">{project.category}</span>
                  {project.duration && (
                    <>
                      <span className="text-gray-600">•</span>
                      <span className="flex items-center gap-1 text-sm">
                        <Clock className="h-3.5 w-3.5" />
                        {project.duration}
                      </span>
                    </>
                  )}
                  {project.views !== undefined && (
                    <>
                      <span className="text-gray-600">•</span>
                      <span className="flex items-center gap-1 text-sm">
                        <Eye className="h-3.5 w-3.5" />
                        {project.views.toLocaleString()} views
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Project Metric */}
              <div className="mb-6 p-4 bg-gray-900/50 border border-gray-800 rounded-lg">
                <h3 className="text-xl font-bold text-[#00E188] mb-1">{project.metric}</h3>
                <p className="text-gray-400 text-sm">
                  {project.technologies.length > 0
                    ? `Utilizing ${project.technologies.length} cutting-edge technologies`
                    : "Driving exceptional results"}
                </p>
              </div>

              {/* Project Description */}
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-[#00E188] rounded-full inline-block"></span>
                  Overview
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">{project.description}</p>
              </div>

              {/* Technologies */}
              {project.technologies.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-[#00E188] rounded-full inline-block"></span>
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} className="bg-gray-800 hover:bg-gray-700 text-gray-300 border-gray-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-8">
                {project.liveUrl && (
                  <Button asChild className="bg-[#00E188] hover:bg-[#00c077] text-black font-medium transition-colors">
                    <a
                      href={formatExternalUrl(project.liveUrl)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Visit Website
                    </a>
                  </Button>
                )}

                {project.githubUrl && project.githubUrl !== "#" && (
                  <Button
                    asChild
                    variant="outline"
                    className="border-gray-700 hover:border-gray-500 text-white hover:text-[#00E188] transition-colors"
                  >
                    <a
                      href={formatExternalUrl(project.githubUrl)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </DialogContent>

      {/* Simple overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/70 z-40" onClick={onClose} aria-hidden="true" />}
    </Dialog>
  )
}
