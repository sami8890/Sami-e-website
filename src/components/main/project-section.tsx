"use client"

import { useState, useMemo, useCallback, useRef, useEffect } from "react"
import { motion, useInView, useAnimation, useMotionValue, } from "framer-motion"
import { ProjectCard } from "@/components/main/project-card"
import { ProjectFilter } from "@/components/main/project-filter"
import ProjectModal from "@/components/main/project-modal"
import { ChevronDown, ChevronUp, Info, Sparkles } from "lucide-react"

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
    name: "A agency Website",
    metric: "80% growth in leads",
    imageUrl: "/projects/kyke-nianga.png",
    category: "Landing-Page",
    description: "A new startup agency website that showcases the company's services, portfolio ",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "Stripe"],
    liveUrl: "www.contntr.com",
    githubUrl: "#",
    status: "live",
  },
  {
    id: 2,
    name: "Drone",
    metric: "A complete E-comerce drone website",
    imageUrl: "/drone1.png",
    category: "E-commerce",
    description:
      "Content creation platform that streamlines the workflow for content creators, saving time and improving productivity.",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    liveUrl: "/https://drone-website-theta.vercel.app/",
    githubUrl: "#",
    status: "development",
  },
  {
    id: 3,
    name: "Docters Website",
    metric: "The Modern healthcare website",
    imageUrl: "/docter.png",
    category: "E-commerce",
    description:
      "Educational platform connecting students with resources and career opportunities, facilitating growth in the education sector.",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "Stripe"],
    liveUrl: "/health-website-w.vercel.app/",
    githubUrl: "#",
    status: "live",
  },
  {
    id: 4,
    name: "E-comerce",
    metric: "Full Stack E-comerce Website",
    imageUrl: "/projects/fruniro.png",
    category: "Ecormerce",
    description:
      "E-commerce platform that connects buyers and sellers, providing a seamless shopping experience for users.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Sanity"],
    liveUrl: "https://figma-hackaton.vercel.app/",
    githubUrl: "#",
    duration: "2 months",
    status: "live",
  },
  {
    id: 5,
    name: "Portfolio Website",
    metric: "Portfolio Website ",
    imageUrl: "/projects/heinkei.png",
    category: "Portfolio",
    description:
      "E-commerce platform that connects buyers and sellers, providing a seamless shopping experience for users.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Sanity"],
    liveUrl: "https://heinkekauntez.vercel.app/",
    githubUrl: "#",
    duration: "4 Days",
    status: "live",
  },
]

export default function ProjectsSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHoveringHeading, setIsHoveringHeading] = useState(false)

  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const headingTextRef = useRef<HTMLHeadingElement>(null)
  const projectsContainerRef = useRef<HTMLDivElement>(null)

  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 })

  const headingControls = useAnimation()
  const lineControls = useAnimation()
  const glowControls = useAnimation()

  // Parallax effect values
  const y = useMotionValue(0)
 
  // Handle mouse movement for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (headingTextRef.current && isHoveringHeading) {
        const rect = headingTextRef.current.getBoundingClientRect()
        const centerY = rect.top + rect.height / 2

        const distanceY = e.clientY - centerY
        y.set(distanceY / 10)

        // Update mouse position for glow effect
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [y, isHoveringHeading])

  // Start animations when heading comes into view
  useEffect(() => {
    if (isHeadingInView) {
      // Sequence of animations
      const sequence = async () => {
        await headingControls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        })

        await lineControls.start({
          scaleX: 1,
          transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
        })

        await glowControls.start({
          opacity: 0.8,
          scale: 1,
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        })
      }

      sequence()
    }
  }, [isHeadingInView, headingControls, lineControls, glowControls])

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = selectedCategory === "All" || project.category === selectedCategory
      const matchesSearch =
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchTerm])

  const visibleProjects = useMemo(() => {
    return showAllProjects ? filteredProjects : filteredProjects.slice(0, 2)
  }, [filteredProjects, showAllProjects])

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category)
    setShowAllProjects(false)
  }, [])

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term)
    setShowAllProjects(false)
  }, [])

  const handleProjectClick = useCallback((project: Project) => {
    setSelectedProject(project)
  }, [])

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null)
  }, [])

  const toggleShowAllProjects = useCallback(() => {
    // First, capture the current scroll position
    const currentScrollPosition = window.scrollY

    // Toggle the state
    setShowAllProjects((prev) => !prev)

    // If we're showing more projects, we need a small delay to let React render the new content
    if (!showAllProjects && filteredProjects.length > 2) {
      // Use requestAnimationFrame to wait for the DOM to update
      requestAnimationFrame(() => {
        // Use another requestAnimationFrame to ensure the browser has painted
        requestAnimationFrame(() => {
          // Stay at the same position or scroll just a tiny bit to show there's new content
          window.scrollTo({
            top: currentScrollPosition + 50, // Just scroll down slightly to indicate new content
            behavior: "smooth",
          })
        })
      })
    }
  }, [showAllProjects, filteredProjects.length])

  // Premium animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  
  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-gray-950 to-black text-white overflow-hidden"
      id="work"
    >
      <div className="container px-4 mx-auto">
        {/* Premium Award-Worthy Heading */}
        <div
          ref={headingRef}
          className="relative mb-16"
          onMouseEnter={() => setIsHoveringHeading(true)}
          onMouseLeave={() => setIsHoveringHeading(false)}
        >
          <motion.div initial={{ opacity: 0, y: 30 }} animate={headingControls} className="relative z-10">
            {/* Section badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400 mb-6">
              <Sparkles className="h-3 w-3" />
              <span>Featured Projects</span>
            </div>

            <h2 ref={headingTextRef} className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 text-center">
              My{" "}
              <span className="text-green-400 relative inline-block">
                Projects
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 100 15" preserveAspectRatio="none">
                  <path d="M0,5 Q50,15 100,5" stroke="rgba(34, 197, 94, 0.3)" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h2>

            <p className="text-zinc-400 max-w-lg mx-auto text-center">
              Check out some of my recent work. Each project is carefully crafted with attention to detail, performance,
              and user experience.
            </p>
          </motion.div>

          {/* Animated underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={lineControls}
            className="h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent w-48 md:w-64 mx-auto mt-6"
            style={{ originX: 0.5 }}
          />

          {/* Glow effect */}
         
         
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <ProjectFilter onFilterChange={handleCategoryChange} onSearch={handleSearch} />
        </motion.div>

        {/* Project count indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-between items-center mb-6"
        >
          <p className="text-sm text-gray-400">
            Showing <span className="text-emerald-400 font-medium">{visibleProjects.length}</span> of{" "}
            <span className="text-emerald-400 font-medium">{filteredProjects.length}</span> projects
          </p>

          {filteredProjects.length > 0 && (
            <div className="flex items-center gap-1 text-xs text-gray-400">
              <Info className="w-3 h-3" />
              <span>Click on a project to view details</span>
            </div>
          )}
        </motion.div>

        <motion.div
          ref={projectsContainerRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          layout
        >
          {/* Only render projects based on showAllProjects state */}
          {visibleProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="flex"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
              layout
            >
              <ProjectCard project={project} onClick={() => handleProjectClick(project)} />
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 mb-4"
            >
              No projects found matching your criteria.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("All")
              }}
              className="px-6 py-3 bg-gradient-to-r from-[#00C18F] to-[#00E6AB] text-black font-medium rounded-lg hover:shadow-lg hover:shadow-emerald-500/20 transition-all"
            >
              Reset Filters
            </motion.button>
          </motion.div>
        )}

        {/* See More / See Less Button */}
        {filteredProjects.length > 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mt-12"
          >
            <motion.button
              onClick={toggleShowAllProjects}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 20px rgba(0, 193, 143, 0.3)",
              }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#00C18F]/10 to-[#00E6AB]/10 border border-[#00C18F]/20 rounded-full text-[#00E6AB] font-medium hover:from-[#00C18F]/20 hover:to-[#00E6AB]/20 transition-all duration-300"
            >
              {showAllProjects ? (
                <>
                  Show Less
                  <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
                </>
              ) : (
                <>
                  See More Projects
                  <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
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

