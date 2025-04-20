"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { X, ExternalLink, Github, Clock, Eye,  ZoomOut } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

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
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0, scale: 1 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const imageRef = useRef<HTMLDivElement>(null)

  // Reset loading state when project changes
  useEffect(() => {
    if (project) {
      setLoading(true)
      setImageError(false)
      setFullscreenImage(false)
      setImagePosition({ x: 0, y: 0, scale: 1 })
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

  // Handle mouse events for dragging in fullscreen mode
  useEffect(() => {
    if (!fullscreenImage) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return

      const deltaX = e.clientX - dragStart.x
      const deltaY = e.clientY - dragStart.y

      setImagePosition((prev) => ({
        ...prev,
        x: prev.x + deltaX,
        y: prev.y + deltaY,
      }))

      setDragStart({ x: e.clientX, y: e.clientY })
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [fullscreenImage, isDragging, dragStart])

  if (!project) return null

  // Function to ensure URL has proper format for external links
  const formatExternalUrl = (url: string) => {
    if (!url) return "#"
    return url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`
  }

  // Toggle fullscreen image view
  const toggleFullscreenImage = () => {
    setFullscreenImage(!fullscreenImage)
    setImagePosition({ x: 0, y: 0, scale: 1 }) // Reset position when toggling
  }

  // Reset image zoom and position
  const resetImageView = () => {
    setImagePosition({ x: 0, y: 0, scale: 1 })
  }

  // Handle mouse down for dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    if (fullscreenImage) {
      setIsDragging(true)
      setDragStart({ x: e.clientX, y: e.clientY })
    }
  }

  // Handle wheel event for zooming
  const handleWheel = (e: React.WheelEvent) => {
    if (fullscreenImage) {
      e.preventDefault()
      const delta = e.deltaY * -0.01
      const newScale = Math.min(Math.max(imagePosition.scale + delta, 0.5), 4)

      setImagePosition((prev) => ({
        ...prev,
        scale: newScale,
      }))
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent
            className="w-[95%] sm:w-11/12 max-w-6xl p-0 bg-black border border-gray-800 rounded-xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col z-50"
            onInteractOutside={(e) => e.preventDefault()}
          >
            {/* Close Button */}
            <DialogClose className="absolute right-3 top-3 z-50 sm:right-4 sm:top-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 rounded-full bg-black/40 backdrop-blur-md hover:bg-black/60 transition-all duration-200 border border-gray-800"
              >
                <X className="h-5 w-5 text-white/90" />
                <span className="sr-only">Close</span>
              </motion.div>
            </DialogClose>

            {/* Fullscreen Image View */}
            {fullscreenImage ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-[80vh] bg-black/90"
              >
                <div className="absolute top-3 left-3 z-50 flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleFullscreenImage}
                    className="p-2.5 rounded-full bg-black/40 backdrop-blur-md hover:bg-black/60 transition-all duration-200 border border-gray-800"
                  >
                    <X className="h-5 w-5 text-white/90" />
                    <span className="sr-only">Exit fullscreen</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={resetImageView}
                    className="p-2.5 rounded-full bg-black/40 backdrop-blur-md hover:bg-black/60 transition-all duration-200 border border-gray-800"
                  >
                    <ZoomOut className="h-5 w-5 text-white/90" />
                    <span className="sr-only">Reset zoom</span>
                  </motion.button>
                </div>

                {!imageError ? (
                  <div
                    ref={imageRef}
                    className="relative w-full h-full flex items-center justify-center overflow-hidden"
                    onWheel={handleWheel}
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className={`transition-transform duration-200 ease-out ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
                      style={{
                        transform: `translate(${imagePosition.x}px, ${imagePosition.y}px) scale(${imagePosition.scale})`,
                      }}
                      onMouseDown={handleMouseDown}
                    >
                      <Image
                        src={project.imageUrl || "/placeholder.svg?height=800&width=1200"}
                        alt={project.name}
                        width={1200}
                        height={800}
                        className="max-w-none object-contain select-none"
                        priority
                        onDoubleClick={() => {
                          // Double click to zoom in/out
                          if (imagePosition.scale > 1) {
                            resetImageView()
                          } else {
                            setImagePosition({ x: 0, y: 0, scale: 2 })
                          }
                        }}
                        draggable={false}
                      />
                    </motion.div>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-900 text-gray-600">
                    <p className="text-lg font-medium">Image not available</p>
                  </div>
                )}

                {/* Zoom indicator */}
                <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white/80 border border-gray-800">
                  {Math.round(imagePosition.scale * 100)}%
                </div>

                {/* Zoom instructions */}
                <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white/80 border border-gray-800">
                  Scroll to zoom • Drag to move • Double-click to reset
                </div>
              </motion.div>
            ) : (
              // Regular Modal Content
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col lg:flex-row w-full h-full overflow-auto"
              >
                {/* Image Section - Takes full width on mobile, 45% on large screens */}
                <div className="relative w-full lg:w-[45%] h-72 sm:h-96 lg:h-auto bg-gray-900 flex-shrink-0">
                  {/* Loading Spinner */}
                  {loading && !imageError && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center z-20 bg-gray-900/70 backdrop-blur-sm"
                    >
                      <div className="h-10 w-10 text-[#00E188] animate-spin border-3 border-current border-t-transparent rounded-full" />
                    </motion.div>
                  )}

                  {/* Project Status Badge */}
                  {project.status && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="absolute top-4 left-4 z-30"
                    >
                      <Badge
                        className={`px-3 py-1 text-xs font-medium uppercase tracking-wider ${project.status === "live"
                            ? "bg-[#00E188]/20 text-[#00E188] border-[#00E188]/50"
                            : "bg-amber-500/20 text-amber-400 border-amber-500/50"
                          }`}
                      >
                        {project.status}
                      </Badge>
                    </motion.div>
                  )}

                 
                  {!imageError ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={project.imageUrl || "/placeholder.svg?height=600&width=800"}
                        alt={project.name}
                        fill
                        className="object-contain"
                        onLoadingComplete={() => setLoading(false)}
                        onError={() => {
                          setLoading(false)
                          setImageError(true)
                        }}
                        sizes="(max-width: 1024px) 100vw, 45vw"
                        priority
                      />
                    </motion.div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900 text-gray-600">
                      <p className="text-lg font-medium">Image not available</p>
                    </div>
                  )}

                </div>

                {/* Content Section - Takes full width on mobile, 55% on large screens */}
                <div className="p-6 md:p-8 w-full lg:w-[55%] overflow-y-auto bg-black text-white">
                  {/* Project Title and Category */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6"
                  >
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
                  </motion.div>

                  {/* Project Metric */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-6 p-4 bg-gray-900/50 border border-gray-800 rounded-lg"
                  >
                    <h3 className="text-xl font-bold text-[#00E188] mb-1">{project.metric}</h3>
                    <p className="text-gray-400 text-sm">
                      {project.technologies.length > 0
                        ? `Utilizing ${project.technologies.length} cutting-edge technologies`
                        : "Driving exceptional results"}
                    </p>
                  </motion.div>

                  {/* Project Description */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-6"
                  >
                    <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <motion.span
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="w-1.5 h-6 bg-[#00E188] rounded-full inline-block origin-bottom"
                      ></motion.span>
                      Overview
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4">{project.description}</p>
                  </motion.div>

                  {/* Technologies */}
                  {project.technologies.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="mb-6"
                    >
                      <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <motion.span
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          className="w-1.5 h-6 bg-[#00E188] rounded-full inline-block origin-bottom"
                        ></motion.span>
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                          >
                            <Badge className="bg-gray-800 hover:bg-gray-700 text-gray-300 border-gray-700">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex flex-wrap gap-3 mt-8"
                  >
                    {project.liveUrl && (
                      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                        <Button
                          asChild
                          className="bg-[#00E188] hover:bg-[#00c077] text-black font-medium transition-colors"
                        >
                          <a
                            href={formatExternalUrl(project.liveUrl)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <ExternalLink className="h-4 w-4" />
                            <span>Visit Website</span>
                            <motion.span
                              animate={{ x: [0, 3, 0] }}
                              transition={{
                                duration: 1.5,
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: "loop",
                                ease: "easeInOut",
                              }}
                              className="inline-block"
                            >
                              <span className="sr-only">Arrow</span>
                            </motion.span>
                          </a>
                        </Button>
                      </motion.div>
                    )}

                    {project.githubUrl && project.githubUrl !== "#" && (
                      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
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
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </DialogContent>

          {/* Simple overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 z-40"
            onClick={onClose}
            aria-hidden="true"
          />
        </Dialog>
      )}
    </AnimatePresence>
  )
}
