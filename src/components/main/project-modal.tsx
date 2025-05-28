"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { X, ExternalLink, Calendar, CheckCircle, Star, ArrowRight } from "lucide-react"
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
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50"
            onClick={onClose}
          />

          <DialogContent
            className="w-[95%] sm:w-11/12 max-w-7xl p-0 bg-white border-0 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col z-50"
            onInteractOutside={(e) => e.preventDefault()}
          >
            {/* Close Button */}
            <DialogClose className="absolute right-6 top-6 z-50">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <X className="h-5 w-5 text-gray-600" />
                <span className="sr-only">Close</span>
              </motion.div>
            </DialogClose>

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col lg:flex-row w-full h-full overflow-auto"
            >
              {/* Image Section */}
              <div className="w-full lg:w-3/5 h-80 sm:h-96 lg:h-auto bg-gray-50 flex-shrink-0 relative">
                {/* Loading Spinner */}
                {loading && !imageError && (
                  <div className="absolute inset-0 flex items-center justify-center z-20 bg-gray-50">
                    <div className="relative">
                      <div className="h-16 w-16 border-4 border-gray-200 rounded-full"></div>
                      <div className="absolute top-0 left-0 h-16 w-16 border-4 border-[#0065EA] border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  </div>
                )}

                {/* Project Status Badge */}
                {project.status && (
                  <div className="absolute top-8 left-8 z-30">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className={`px-5 py-3 rounded-full text-sm font-semibold flex items-center gap-2 backdrop-blur-md shadow-lg border ${
                        project.status === "live"
                          ? "bg-green-500 text-white border-green-400"
                          : "bg-[#0065EA] text-white border-[#0065EA]"
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
                    </motion.div>
                  </div>
                )}

                {/* Quality Badge */}
                <div className="absolute top-8 right-8 z-30">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="px-4 py-2 rounded-full bg-white/95 backdrop-blur-md shadow-lg border border-gray-200 flex items-center gap-2"
                  >
                    <Star className="w-4 h-4 text-[#0065EA] fill-[#0065EA]" />
                    <span className="text-sm font-semibold text-gray-800">Premium</span>
                  </motion.div>
                </div>

                {!imageError ? (
                  <div className="w-full h-full relative overflow-hidden">
                    <Image
                      src={project.imageUrl || "/placeholder.svg?height=600&width=800"}
                      alt={project.name}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      onLoadingComplete={() => setLoading(false)}
                      onError={() => {
                        setLoading(false)
                        setImageError(true)
                      }}
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      priority
                    />
                    {/* Subtle overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ExternalLink className="w-8 h-8 text-gray-400" />
                      </div>
                      <p className="text-lg font-medium">Preview Coming Soon</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-2/5 bg-white">
                <div className="h-full flex flex-col justify-between p-8 lg:p-12">
                  {/* Top Content */}
                  <div className="space-y-8">
                    {/* Category */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="inline-block"
                    >
                      <span className="px-4 py-2 bg-[#0065EA]/10 text-[#0065EA] text-sm font-semibold rounded-full border border-[#0065EA]/20">
                        {project.category}
                      </span>
                    </motion.div>

                    {/* Project Title */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">{project.name}</h2>
                    </motion.div>

                    {/* Project Description */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <p className="text-lg text-gray-600 leading-relaxed">{project.description}</p>
                    </motion.div>

                    {/* Key Result - Enhanced */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="relative"
                    >
                      <div className="p-6 bg-gradient-to-br from-[#0065EA]/5 to-[#0065EA]/10 rounded-2xl border-2 border-[#0065EA]/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-[#0065EA]/10 rounded-full -translate-y-10 translate-x-10"></div>
                        <div className="relative">
                          <p className="text-sm font-medium text-[#0065EA] mb-2">Key Achievement</p>
                          <p className="text-xl font-bold text-gray-900">{project.metric}</p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Action Button - Enhanced */}
                    {project.liveUrl && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <Button
                          asChild
                          size="lg"
                          className="w-full bg-[#0065EA] hover:bg-[#0052BA] text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-lg group"
                        >
                          <a
                            href={formatExternalUrl(project.liveUrl)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3"
                          >
                            <ExternalLink className="h-5 w-5 transition-transform group-hover:scale-110" />
                            <span>View Live Project</span>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                          </a>
                        </Button>
                      </motion.div>
                    )}
                  </div>

                  {/* Bottom Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="space-y-6 pt-8 border-t border-gray-200"
                  >
                    {/* Technologies */}
                    {project.technologies.length > 0 && (
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-3">Technologies Used:</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 4).map((tech, index) => (
                            <motion.span
                              key={index}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.8 + index * 0.1 }}
                              className="px-3 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm border border-gray-200 font-medium hover:bg-[#0065EA]/5 hover:border-[#0065EA]/20 transition-colors"
                            >
                              {tech}
                            </motion.span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="px-3 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm border border-gray-200 font-medium">
                              +{project.technologies.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}
</motion.div>
                    {/* Contact CTA - Enhanced */}
                    <div className="text-center space-y-4">
                      <div className="p-4 bg-gray-50 rounded-xl">
                        <p className="text-gray-700 font-medium mb-2">Ready to start your project?</p>
                        <p className="text-sm text-gray-600">Lets discuss how we can bring your vision to life</p>
                        <p className="text-sm text-gray-600">Let&apos;s discuss how we can bring your vision to life</p>
                      </div>
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full border-2 border-[#0065EA] text-[#0065EA] hover:bg-[#0065EA] hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 group"
                        onClick={() => {
                          window.open(
                            "https://wa.me/923701247494?text=Hi%2C%20I%20saw%20your%20project%20and%20want%20something%20similar",
                            "_blank",
                            "noopener,noreferrer",
                          )
                          onClose()
                        }}
                      >
                        <span className="flex items-center justify-center gap-2">
                          Get Started Today
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </Button>
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
