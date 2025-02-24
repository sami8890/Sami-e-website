//src/components/main/project-modal.tsx
"use client"

import type React from "react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, X, ChevronLeft, ChevronRight, Loader2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utilts"
import Link from "next/link"

interface Project {
  name: string
  description: string
  technologies: string[]
  images?: string[]
  imageUrl?: string
  liveUrl?: string
  githubUrl?: string
}

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: Project | null
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  const [loading, setLoading] = useState(true)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = project?.images || [project?.imageUrl]

  if (!project) return null

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-11/12 max-w-5xl p-0 bg-gradient-to-br from-gray-900 to-gray-800 border-none rounded-xl overflow-hidden shadow-2xl">
        {/* Close Button with hover effect */}
        <DialogClose className="absolute right-4 top-4 z-50">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40 transition-colors"
          >
            <X className="h-5 w-5 text-white/80" />
          </motion.div>
        </DialogClose>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Image Section with Gallery */}
          <div className="relative h-64 md:h-full group">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10" />

            {/* Loading Spinner */}
            <AnimatePresence>
              {loading && (
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative h-full"
              >
                <Image
                  src={images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${project.name} - Image ${currentImageIndex + 1}`}
                  layout="fill"
                  objectFit="center"
                  className="transition-transform duration-700 hover:scale-105"
                  onLoadingComplete={() => setLoading(false)}
                />
              </motion.div>
            </AnimatePresence>

            {/* Gallery Navigation */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/40"
                >
                  <ChevronLeft className="h-5 w-5 text-red-800 " />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/40"
                >
                  <ChevronRight className="h-5 w-5 text-white" />
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all",
                        currentImageIndex === index ? "bg-[#00C18F] w-4" : "bg-white/50 hover:bg-white/75",
                      )}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Content Section */}
          <div className="p-6 space-y-6">
            <DialogHeader>
              <DialogTitle>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl font-bold bg-gradient-to-r from-[#00C18F] to-[#00E1A0] bg-clip-text text-transparent"
                >
                  {project.name}
                </motion.h2>
              </DialogTitle>
            </DialogHeader>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 leading-relaxed"
            >
              {project.description}
            </motion.p>

            {/* Technologies with hover effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-2"
            >
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: 0.1 * index }}
                  className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#00C18F]/10 to-[#00E1A0]/10 border border-[#00C18F]/20 text-[#00C18F] text-sm font-medium cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* Enhanced Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              {project.liveUrl && (
                <Button
                  asChild
                  className="bg-gradient-to-r from-[#00C18F] to-[#00E1A0] hover:opacity-90 text-white px-6 py-5 transition-transform hover:scale-105"
                >
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Live Project
                  </Link>
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  asChild
                  variant="outline"
                  className="border-[#00C18F] text-[#00C18F] hover:bg-[#00C18F]/10 px-6 py-5 transition-transform hover:scale-105"
                >
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Source Code
                  </Link>
                </Button>
              )}
            </motion.div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ProjectModal

