"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { X, ExternalLink, Github } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import type { Project } from "./Project"

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: Project | null
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [loading, setLoading] = useState(true)
  const [imageError, setImageError] = useState(false)

  // Preload images when component mounts
  useEffect(() => {
    if (isOpen && project?.imageUrl) {
      const img = new window.Image()
      img.src = project.imageUrl
      img.onload = () => {
        setLoading(false)
      }
      img.onerror = () => {
        setLoading(false)
        setImageError(true)
      }
    }
  }, [isOpen, project])

  // Reset loading state when project changes
  useEffect(() => {
    if (project) {
      setLoading(true)
      setImageError(false)
    }
  }, [project])

  if (!project) return null

  // Function to ensure URL has proper format for external links
  const formatExternalUrl = (url: string) => {
    if (!url) return "#"
    return url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent
            className="w-[95%] sm:w-11/12 max-w-5xl p-0 bg-black border border-gray-800 rounded-xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col z-50"
            onInteractOutside={(e) => e.preventDefault()}
          >
            {/* Close Button */}
            <DialogClose className="absolute right-3 top-3 z-50 sm:right-4 sm:top-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-black/40 backdrop-blur-md hover:bg-black/60 transition-all duration-200 border border-gray-800"
              >
                <X className="h-5 w-5 text-white/90" />
                <span className="sr-only">Close</span>
              </motion.div>
            </DialogClose>

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col lg:flex-row w-full h-full overflow-auto"
            >
              {/* Image Section - Modified to show larger image */}
              <div className="w-full lg:w-3/5 h-72 sm:h-96 lg:h-auto bg-gray-900 flex-shrink-0 relative">
                {/* Loading Spinner */}
                {loading && !imageError && (
                  <div className="absolute top-0 left-0 flex items-center justify-center z-20 bg-gray-900/70 backdrop-blur-sm w-full h-full">
                    <div className="h-10 w-10 text-[#00E188] animate-spin border-3 border-current border-t-transparent rounded-full" />
                  </div>
                )}

                {/* Project Status Badge */}
                {project.status && (
                  <div className="absolute top-4 left-4 z-30">
                    <Badge
                      className={`px-3 py-1 text-xs font-medium uppercase tracking-wider ${project.status === "live"
                        ? "bg-[#00E188]/20 text-[#00E188] border-[#00E188]/50"
                        : "bg-amber-500/20 text-amber-400 border-amber-500/50"
                        }`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                )}

                {!imageError ? (
                  <div className="w-full h-full">
                    <Image
                      src={project.imageUrl || "/placeholder.svg?height=600&width=800"}
                      alt={project.name}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                      onLoadingComplete={() => setLoading(false)}
                      onError={() => {
                        setLoading(false)
                        setImageError(true)
                      }}
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      priority
                    />
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-900 text-gray-600">
                    <p className="text-lg font-medium">Image not available</p>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8 w-full lg:w-2/5 overflow-y-auto bg-black text-white">
                {/* Project Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-[#00E188] mb-2">{project.name}</h2>

                {/* Category */}
                <div className="text-sm uppercase tracking-wider text-gray-400 mb-6">{project.category}</div>

                {/* Visit Website Button */}
                {project.liveUrl && (
                  <div className="mb-8">
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
                      </a>
                    </Button>
                  </div>
                )}

                {/* Project Metric */}
                <div className="mb-6 p-4 bg-gray-900/50 border border-gray-800 rounded-lg">
                  <h3 className="text-xl font-bold text-[#f4fffb] mb-1">{project.metric}</h3>
                  <p className="text-gray-400 text-sm">
                    {project.technologies.length > 0
                      ? `Built with ${project.technologies.length} technologies`
                      : "Delivering exceptional results"}
                  </p>
                </div>

                {/* Project Description */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-3">Overview</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{project.description}</p>
                </div>

                {/* Technologies */}
                {project.technologies.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-bold mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} className="bg-gray-800 hover:bg-gray-700 text-gray-300 border-gray-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Github Link */}
                {project.githubUrl && project.githubUrl !== "#" && (
                  <div className="mt-8">
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
                  </div>
                )}
              </div>
            </motion.div>
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