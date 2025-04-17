"use client"

import { useState, useMemo, useRef, useEffect } from "react"
import { ProjectCard } from "@/components/main/project-card"
import ProjectModal from "@/components/main/project-modal"
import { Sparkles, ChevronDown, ChevronUp, ExternalLink } from "lucide-react"

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
    imageUrl: "/project/1.png",
    category: "Landing-Page",
    description: "A new startup agency website that showcases the company's services, portfolio",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "Stripe"],
    liveUrl: "www.contntr.com",
    githubUrl: "#",
    status: "live",
  },
  {
    id: 2,
    name: "Portfolio website",
    metric:
      "Portfolio website .",
    imageUrl: "/project/2.png",
    category: "E-commerce",
    description:
      "Content creation platform that streamlines the workflow for content creators, saving time and improving productivity.",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    liveUrl: "https://drone-website-theta.vercel.app/",
    githubUrl: "#",
    status: "development",
  },
  {
    id: 3,
    name: "Docters Website",
    metric: "The Modern healthcare website",
    imageUrl: "/project/3.png",
    category: "Healthcare",
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
    imageUrl: "/project/4.png",
    category: "E-commerce",
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
    metric: "Portfolio Website",
    imageUrl: "/project/5.png",
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const sectionRef = useRef<HTMLDivElement>(null)

  // Simulate loading state for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const visibleProjects = useMemo(() => {
    return showAllProjects ? projects : projects.slice(0, 2)
  }, [showAllProjects])

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
  }

  const handleCloseModal = () => {
    setSelectedProject(null)
  }

  const toggleShowAllProjects = () => {
    setShowAllProjects((prev) => !prev)
  }

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-gray-950 to-black text-white overflow-hidden"
      id="work"
    >
      <div className="container px-4 mx-auto">
        {/* Section Heading */}
        <div className="relative mb-16 text-center">
          <div className="relative z-10">
            {/* Section badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00E188]/20 bg-[#00E188]/10 px-3 py-1 text-xs font-medium text-[#00E188] mb-6">
              <Sparkles className="h-3 w-3" />
              <span>Featured Projects</span>
            </div>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              My{" "}
              <span className="text-[#00E188] relative inline-block">
                Projects
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 100 15" preserveAspectRatio="none">
                  <path d="M0,5 Q50,15 100,5" stroke="rgba(0, 225, 136, 0.3)" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h2>

            <p className="text-zinc-400 max-w-lg mx-auto">
              Check out some of my recent work. Each project is carefully crafted with attention to detail, performance,
              and user experience.
            </p>
          </div>

          {/* Simple underline */}
          <div className="h-0.5 bg-gradient-to-r from-transparent via-[#00E188] to-transparent w-48 md:w-64 mx-auto mt-6" />
        </div>

        {/* Project count indicator */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-gray-400">
            Showing <span className="text-[#00E188] font-medium">{visibleProjects.length}</span> of{" "}
            <span className="text-[#00E188] font-medium">{projects.length}</span> projects
          </p>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-[#00E188] transition-colors flex items-center gap-1"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>View all on GitHub</span>
          </a>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 h-full">
                <div className="w-full h-[220px] sm:h-[240px] md:h-[260px] bg-zinc-800 animate-pulse" />
                <div className="p-5 sm:p-6 space-y-4">
                  <div className="h-6 bg-zinc-800 rounded animate-pulse w-3/4" />
                  <div className="h-4 bg-zinc-800 rounded animate-pulse w-1/2" />
                  <div className="flex gap-2">
                    <div className="h-6 bg-zinc-800 rounded animate-pulse w-16" />
                    <div className="h-6 bg-zinc-800 rounded animate-pulse w-16" />
                    <div className="h-6 bg-zinc-800 rounded animate-pulse w-16" />
                  </div>
                  <div className="h-10 bg-zinc-800 rounded animate-pulse w-full mt-4" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Projects Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Only render projects based on showAllProjects state */}
            {visibleProjects.map((project) => (
              <div key={project.id} className="flex">
                <ProjectCard project={project} onClick={() => handleProjectClick(project)} />
              </div>
            ))}
          </div>
        )}

        {/* See More / See Less Button */}
        {!isLoading && projects.length > 2 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={toggleShowAllProjects}
              className="flex items-center gap-2 px-8 py-3 bg-[#00E188] text-black font-medium rounded-full transition-colors hover:bg-[#00c077]"
              aria-label={showAllProjects ? "Show fewer projects" : "Show more projects"}
            >
              {showAllProjects ? (
                <>
                  Show Less
                  <ChevronUp className="w-5 h-5" />
                </>
              ) : (
                <>
                  See More Projects
                  <ChevronDown className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        )}
      </div>

      <ProjectModal isOpen={!!selectedProject} onClose={handleCloseModal} project={selectedProject} />
    </section>
  )
}
