"use client"

import { useState, useMemo, useRef, useEffect } from "react"
import { ProjectCard } from "@/components/main/project-card"
import ProjectModal from "@/components/main/project-modal"
import { Sparkles, ChevronDown, ChevronUp, Filter, Search, X } from "lucide-react"
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

const projects: Project[] = [
  {
    id: 1,
    name: "SEO Agency Website",
    metric: "80% growth in leads",
    imageUrl: "/project/3.png",
    category: "Landing Page",
    description: "A website for a startup SEO agency, showcasing the company's services and portfolio.",
    technologies: ["Next.js", "Tailwind CSS", "GSAP", "Framer Motion", "React"],
    liveUrl: "www.contntr.com",
    githubUrl: "#",
  },
  {
    id: 2,
    name: "Video Editor Agency Website",
    metric: "Increased agency visibility and user engagement",
    imageUrl: "/project/4.png",
    category: "Landing Page",
    description: "An e-commerce platform connecting buyers and sellers, providing a seamless shopping experience.",
    technologies: ["React", "Next.js", "Tailwind CSS", "GSAP", "Framer Motion", "Stripe"],
    liveUrl: "www.contexmedia.com/",
    githubUrl: "#",
  },
  {
    id: 3,
    name: "Portfolio Website",
    metric: "Personal portfolio showcasing projects and skills",
    imageUrl: "/project/5.png",
    category: "Portfolio",
    description: "A personal portfolio website of a top-level creator on LinkedIn.",
    technologies: ["React", "Next.js", "Tailwind CSS", "GSAP", "Framer Motion"],
    liveUrl: "https://ibtrahim.vercel.app/",
    githubUrl: "#",
    duration: "4 Days",
  },
  {
    id: 4,
    name: "E-commerce Website",
    metric: "Hobby project to learn Next.js and Tailwind CSS (NOT REAL)",
    imageUrl: "/project/2.png",
    category: "E-commerce",
    description: "A fully functional e-commerce platform for buying and selling furniture (not a real project).",
    technologies: ["React", "Next.js", "Tailwind CSS", "GSAP", "Framer Motion", "Stripe"],
    liveUrl: "https://figma-hackaton.vercel.app/",
    githubUrl: "#",
  },
  {
    id: 5,
    name: "Doctor's Website",
    metric: "Hobby project (NOT REAL)",
    imageUrl: "/project/1.png",
    category: "Healthcare",
    description:
      "A demo website for a healthcare provider, designed to showcase services and appointments (not a real project).",
    technologies: ["Next.js", "Tailwind CSS", "GSAP", "Framer Motion", "React"],
    liveUrl: "/health-website-w.vercel.app/",
    githubUrl: "#",
  },
]

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isInView, setIsInView] = useState(false)
  const [activeFilter, setActiveFilter] = useState<string>("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  const sectionRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Extract unique categories
  const categories = useMemo(() => {
    return ["All", ...Array.from(new Set(projects.map((project) => project.category)))]
  }, [])

  // Filter projects based on category and search query
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = activeFilter === "All" || project.category === activeFilter
      const matchesSearch =
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()))

      return matchesCategory && matchesSearch
    })
  }, [activeFilter, searchQuery])

  const visibleProjects = useMemo(() => {
    return showAllProjects ? filteredProjects : filteredProjects.slice(0, 2)
  }, [showAllProjects, filteredProjects])

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
  }

  const handleCloseModal = () => {
    setSelectedProject(null)
  }

  const toggleShowAllProjects = () => {
    setShowAllProjects((prev) => !prev)
  }

  const handleFilterClick = (category: string) => {
    setActiveFilter(category)
    setShowAllProjects(true) // Show all projects when filtering
  }

  const clearSearch = () => {
    setSearchQuery("")
    if (searchRef.current) {
      searchRef.current.focus()
    }
  }

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 text-gray-800 overflow-hidden" id="work">
      <div className="container px-4 mx-auto space-y-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mb-16 text-center"
        >
          <div className="relative z-10">
            {/* Section badge */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={isInView ? { scale: 1 } : { scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-gray-600 bg-green-950 px-4 py-1.5 text-sm font-medium text-white mb-6 shadow-sm"
            >
              <Sparkles className="h-3.5 w-3.5 text-white animate-pulse" />
              <span>Featured Projects</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 text-gray-900"
            >
              My
              <span className="text-green-700 relative inline-block font-bold ml-4">
                Projects
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 100 15"
                  preserveAspectRatio="none"
                >
                  <path d="M0,5 Q50,15 100,5" stroke="rgba(21, 128, 61, 0.4)" strokeWidth="2" fill="none" />
                </motion.svg>
              </span>
            </motion.h2>

            {/* Improved and smaller subheading */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-gray-600 max-w-sm mx-auto text-sm leading-relaxed"
            >
              Precision-crafted digital experiences with focus on performance and usability
            </motion.p>
          </div>

          {/* Simple underline */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent w-24 mx-auto mt-5 opacity-70"
          />
        </motion.div>

        {/* Filter and Search Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="max-w-5xl mx-auto space-y-6"
        >
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => handleFilterClick(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === category
                    ? "bg-green-600 text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-green-300 hover:text-green-700"
                  }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <div
              className={`flex items-center bg-white rounded-full border ${isSearchFocused ? "border-green-400 ring-2 ring-green-100" : "border-gray-200"
                } px-4 py-2 shadow-sm transition-all duration-300`}
            >
              <Search className={`w-4 h-4 ${isSearchFocused ? "text-green-500" : "text-gray-400"}`} />
              <input
                ref={searchRef}
                type="text"
                placeholder="Search projects by name, description, or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="flex-1 ml-2 bg-transparent border-none outline-none text-sm text-gray-700 placeholder-gray-400"
              />
              {searchQuery && (
                <button onClick={clearSearch} className="text-gray-400 hover:text-gray-600">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Project count indicator */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-green-600" />
              <p className="text-sm text-gray-600">
                Displaying
                <span className="text-green-600 font-medium mx-2">{visibleProjects.length}</span>
                of
                <span className="text-green-600 font-medium mx-2">{filteredProjects.length}</span>
                {activeFilter !== "All" && (
                  <span>
                    in <span className="text-green-600 font-medium">{activeFilter}</span>
                  </span>
                )}
              </p>
            </div>
          </div>
        </motion.div>

        {/* No Results Message */}
        {!isLoading && filteredProjects.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
              <Search className="w-6 h-6 text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-2">No projects found</h3>
            <p className="text-gray-500 max-w-md mx-auto mb-6">
              We couldn&apos;t find any projects matching your search criteria. Try adjusting your filters or search query.
            </p>
            <button
              onClick={() => {
                setActiveFilter("All")
                setSearchQuery("")
              }}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Loading State */}
        {isLoading ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[1, 2].map((i) => (
              <div key={i} className="rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm h-full">
                <div className="w-full h-[280px] bg-gray-200 animate-pulse" />
                <div className="p-6 space-y-4">
                  <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2" />
                  <div className="flex gap-2 flex-wrap">
                    <div className="h-6 bg-gray-200 rounded animate-pulse w-16" />
                    <div className="h-6 bg-gray-200 rounded animate-pulse w-16" />
                    <div className="h-6 bg-gray-200 rounded animate-pulse w-16" />
                  </div>
                  <div className="h-10 bg-gray-200 rounded animate-pulse w-28" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Projects Grid - 2 per row on large screens with proper spacing */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              {visibleProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex flex-col h-full"
                  layout
                >
                  <div className="flex-1">
                    <ProjectCard project={project} onClick={() => handleProjectClick(project)} index={index} />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* See More / See Less Button */}
        {!isLoading && filteredProjects.length > 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex justify-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleShowAllProjects}
              className="flex items-center gap-2 px-7 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-full transition-colors shadow-md hover:shadow-lg"
              aria-label={showAllProjects ? "Show fewer projects" : "Show more projects"}
            >
              {showAllProjects ? (
                <>
                  Show Less
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  >
                    <ChevronUp className="w-5 h-5" />
                  </motion.div>
                </>
              ) : (
                <>
                  See More Projects
                  <motion.div
                    animate={{ y: [0, 3, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </>
              )}
            </motion.button>
          </motion.div>
        )}
      </div>

      <ProjectModal isOpen={!!selectedProject} onClose={handleCloseModal} project={selectedProject} />
    </section>
  )
}
