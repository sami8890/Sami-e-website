"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight,
  Loader2,
  Clock,
  Eye,
  CheckCircle2,
  AlertCircle,
} from "lucide-react"
import { motion, AnimatePresence, type PanInfo } from "framer-motion"
import { cn } from "@/lib/utilts"
import { useMediaQuery } from "@/hooks/use-media-querry"

interface Project {
  name: string
  description: string
  technologies: string[]
  images?: string[]
  imageUrl?: string
  liveUrl?: string
  githubUrl?: string
  duration?: string
  views?: number
  status?: "live" | "development"
}

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: Project | null
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  const [loading, setLoading] = useState(true)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const constraintsRef = useRef(null)
  const isMobile = useMediaQuery("(max-width: 768px)")
  const images = project?.images || (project?.imageUrl ? [project.imageUrl] : [])
  const [imageLoadError, setImageLoadError] = useState(false)

  useEffect(() => {
    setLoading(true)
    setCurrentImageIndex(0)
    setImageLoadError(false)
  }, [project])

  if (!project) return null

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50
    if (Math.abs(info.offset.x) > swipeThreshold) {
      if (info.offset.x > 0) {
        prevImage()
      } else {
        nextImage()
      }
    }
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
    triggerHapticFeedback()
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
    triggerHapticFeedback()
  }

  const triggerHapticFeedback = () => {
    if (navigator.vibrate) {
      navigator.vibrate(50)
    }
  }

  // Function to ensure URL has proper format for external links
  const formatExternalUrl = (url: string) => {
    if (!url) return "#"

    // Check if the URL already starts with http:// or https://
    if (url.startsWith("http://") || url.startsWith("https://")) {
      return url
    }

    // Add https:// prefix if missing
    return `https://${url}`
  }

  // Get status color and icon
  const getStatusInfo = (status?: string) => {
    if (!status) return { color: "text-gray-400", icon: null }

    switch (status) {
      case "live":
        return {
          color: "text-green-400",
          icon: <CheckCircle2 className="w-4 h-4 mr-1" />,
          label: "Live",
        }
      case "development":
        return {
          color: "text-amber-400",
          icon: <AlertCircle className="w-4 h-4 mr-1" />,
          label: "In Development",
        }
      default:
        return {
          color: "text-gray-400",
          icon: null,
          label: status,
        }
    }
  }

  const statusInfo = getStatusInfo(project.status)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="w-[95%] sm:w-11/12 max-w-5xl p-0 bg-gradient-to-br from-gray-900 to-gray-800 border-none rounded-xl overflow-hidden shadow-2xl"
        onInteractOutside={(e) => {
          e.preventDefault()
          // Add a small vibration feedback when clicking outside
          if (navigator.vibrate) navigator.vibrate(20)
        }}
      >
        {/* Close Button with hover effect */}
        <DialogClose className="absolute right-3 top-3 z-50 sm:right-4 sm:top-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2.5 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40 transition-colors"
          >
            <X className="h-5 w-5 text-white/80" />
          </motion.div>
        </DialogClose>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Image Section with Gallery */}
          <div className="relative h-72 sm:h-80 md:h-full group">

            {/* Loading Spinner */}
            <AnimatePresence>
              {loading && !imageLoadError && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center z-20 bg-gray-900/50"
                >
                  <Loader2 className="h-8 w-8 text-[#00C18F] animate-spin" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Image Gallery */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                ref={constraintsRef}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                drag={isMobile ? "x" : false}
                dragConstraints={constraintsRef}
                onDragEnd={handleDragEnd}
                className="relative h-full touch-none"
              >
                {imageLoadError ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-gray-400">
                    <div className="text-center">
                      <svg
                        className="w-16 h-16 mx-auto mb-2 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p>Image could not be loaded</p>
                    </div>
                  </div>
                ) : (
                  <Image
                    src={images[currentImageIndex] || "/placeholder.svg"}
                    alt={`${project.name} - Image ${currentImageIndex + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    onLoadingComplete={() => setLoading(false)}
                    onError={() => {
                      setLoading(false)
                      setImageLoadError(true)
                    }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                )}
              </motion.div>
            </AnimatePresence>

            {/* Project Status Badge */}
            {project.status && (
              <div
                className={`absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-sm ${statusInfo.color} flex items-center text-xs font-medium`}
              >
                {statusInfo.icon}
                {statusInfo.label}
              </div>
            )}

            {/* Gallery Navigation */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/20 backdrop-blur-sm opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/40 active:scale-95"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/20 backdrop-blur-sm opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/40 active:scale-95"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6 text-white" />
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentImageIndex(index)
                        triggerHapticFeedback()
                      }}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all",
                        currentImageIndex === index ? "bg-[#00C18F] w-4" : "bg-white/50 hover:bg-white/75",
                      )}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Content Section */}
          <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            <DialogHeader>
              <DialogTitle>
                <div className="flex items-start justify-between gap-4">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#00C18F] to-[#00E1A0] bg-clip-text text-transparent"
                  >
                    {project.name}
                  </motion.h2>
                </div>
              </DialogTitle>
            </DialogHeader>

            {/* Project metadata */}
            {(project.duration || project.views) && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="flex flex-wrap gap-4 text-sm text-gray-400"
              >
                {project.duration && (
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{project.duration}</span>
                  </div>
                )}
                {project.views && (
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{project.views.toLocaleString()} views</span>
                  </div>
                )}
              </motion.div>
            )}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base text-gray-300 leading-relaxed"
            >
              {project.description}
            </motion.p>

            {/* Technologies with hover effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-1.5 sm:gap-2"
            >
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 193, 143, 0.2)" }}
                  transition={{ delay: 0.1 * index }}
                  className="px-3 sm:px-4 py-1.5 rounded-full bg-gradient-to-r from-[#00C18F]/10 to-[#00E1A0]/10 border border-[#00C18F]/20 text-[#00C18F] text-xs sm:text-sm font-medium cursor-default hover:shadow-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* Enhanced Buttons - Only showing Live Project button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-2 sm:gap-4 pt-2 sm:pt-4"
            >
              {project.liveUrl && (
                <Button
                  onClick={() => {
                    if (project.liveUrl) {
                      window.open(formatExternalUrl(project.liveUrl), "_blank")
                    }
                    // Add haptic feedback when clicking the button
                    if (navigator.vibrate) navigator.vibrate([15, 30, 15])
                  }}
                  className="w-full sm:w-auto bg-gradient-to-r from-[#00C18F] to-[#00E1A0] text-black/60 px-4 sm:px-6 py-5 transition-all hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20 text-sm sm:text-base font-medium"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live Project
                </Button>
              )}
            </motion.div>

            {/* Swipe instruction for mobile */}
            {isMobile && images.length > 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 0.6 }}
                className="text-center text-xs text-gray-400 mt-4"
              >
                <span>Swipe image to see more</span>
              </motion.div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ProjectModal

