"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { X, ExternalLink, Calendar, CheckCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export interface Project {
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

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: Project | null
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [loading, setLoading] = useState(true)
  const [imageError, setImageError] = useState(false)

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

  useEffect(() => {
    if (project) {
      setLoading(true)
      setImageError(false)
    }
  }, [project])

  if (!project) return null

  const formatExternalUrl = (url: string) => {
    if (!url) return "#"
    return url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          <DialogContent
            className="w-[95%] sm:w-11/12 max-w-7xl p-0 bg-white dark:bg-slate-900 border-0 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col z-50"
            onInteractOutside={(e) => e.preventDefault()}
          >
            {/* Close Button */}
            <DialogClose className="absolute right-6 top-6 z-50">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-md hover:bg-white dark:hover:bg-slate-700 transition-all duration-200 shadow-lg"
              >
                <X className="h-6 w-6 text-slate-700 dark:text-slate-300" />
                <span className="sr-only">Close</span>
              </motion.div>
            </DialogClose>

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col lg:flex-row w-full h-full overflow-auto"
            >
              {/* Image Section */}
              <div className="w-full lg:w-3/5 h-80 sm:h-96 lg:h-auto bg-slate-100 dark:bg-slate-800 flex-shrink-0 relative">
                {/* Loading Spinner */}
                {loading && !imageError && (
                  <div className="absolute inset-0 flex items-center justify-center z-20 bg-slate-100 dark:bg-slate-800">
                    <div className="h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
                  </div>
                )}

                {/* Project Status Badge */}
                {project.status && (
                  <div className="absolute top-8 left-8 z-30">
                    <div
                      className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 backdrop-blur-md shadow-lg ${
                        project.status === "live" ? "bg-green-500/90 text-white" : "bg-blue-500/90 text-white"
                      }`}
                    >
                      {project.status === "live" ? (
                        <>
                          <CheckCircle className="w-4 h-4" />
                          Live Project
                        </>
                      ) : (
                        <>
                          <Calendar className="w-4 h-4" />
                          In Development
                        </>
                      )}
                    </div>
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
                  <div className="w-full h-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                    <p className="text-lg font-medium">Image not available</p>
                  </div>
                )}
              </div>

              {/* Content Section - Better Spacing & Alignment */}
              <div className="w-full lg:w-2/5 bg-white dark:bg-slate-900">
                <div className="h-full flex flex-col justify-between p-8 lg:p-12">
                  {/* Top Content */}
                  <div className="space-y-8">
                    {/* Category */}
                    <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-medium rounded-full">
                      {project.category}
                    </div>

                    {/* Project Title */}
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                        {project.name}
                      </h2>
                    </div>

                    {/* Project Description */}
                    <div>
                      <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Key Result */}
                    <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-200/50 dark:border-blue-800/50">
                      <p className="text-xl font-semibold text-blue-900 dark:text-blue-100 text-center">
                        {project.metric}
                      </p>
                    </div>

                    {/* Action Button */}
                    {project.liveUrl && (
                      <div>
                        <Button
                          asChild
                          size="lg"
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
                        >
                          <a
                            href={formatExternalUrl(project.liveUrl)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3"
                          >
                            <ExternalLink className="h-5 w-5" />
                            <span>View Live Project</span>
                          </a>
                        </Button>
                      </div>
                    )}
                  </div>

                  {/* Bottom Content */}
                  <div className="space-y-6 pt-8 border-t border-slate-200 dark:border-slate-700">
                    {/* Technologies */}
                    {project.technologies.length > 0 && (
                      <div>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">Built with:</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 4).map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm border border-slate-200 dark:border-slate-700"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm border border-slate-200 dark:border-slate-700">
                              +{project.technologies.length - 4}
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Contact CTA */}
                    <div className="text-center">
                      <p className="text-slate-600 dark:text-slate-400 mb-4">Want something similar?</p>
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium py-3 px-6 rounded-xl transition-all duration-300"
                        onClick={() => {
                          window.open(
                            "https://wa.me/923701247494?text=Hi%2C%20I%20saw%20your%20project%20and%20want%20something%20similar",
                            "_blank",
                            "noopener,noreferrer",
                          )
                          onClose()
                        }}
                      >
                        Get Started
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  )
}
