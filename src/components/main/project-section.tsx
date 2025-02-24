//src/components/main/project-section.tsx
"use client"

import { useState, useMemo, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ProjectCard } from "@/components/main/project-card"
import { ProjectFilter } from "@/components/main/product-filter"
import ProjectModal from "@/components/main/project-modal"

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
}

const projects: Project[] = [
  {
    id: 1,
    name: "E-comerce", 
    metric: "Full Stack E-comerce Website",
    imageUrl: "/furniro.png",
    category: "Ecormerce",
    description:
      "E-commerce platform that connects buyers and sellers, providing a seamless shopping experience for users.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS" , "Sanity"],
    liveUrl: "https://figma-hackaton.vercel.app/",
    githubUrl: "#",
    duration: "3 months",
    views: 1234,
  },
  {
    id: 2,
    name: "Drone",
    metric: "$1M+ raised in funding",
    imageUrl: "/drone1.png",
    category: "E-commerce",
    description:
      "Content creation platform that streamlines the workflow for content creators, saving time and improving productivity.",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    name: "Goodigoo",
    metric: "80% growth in teaching leads",
    imageUrl: "/docter.png",
    category: "E-commerce",
    description:
      "Educational platform connecting students with resources and career opportunities, facilitating growth in the education sector.",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    name: "",
    metric: "80% growth in teaching leads",
    imageUrl: "/docter.png",
    category: "E-commerce",
    description:
      "Educational platform connecting students with resources and career opportunities, facilitating growth in the education sector.",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function ProjectsSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = selectedCategory === "All" || project.category === selectedCategory
      const matchesSearch =
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchTerm])

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category)
  }, [])

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term)
  }, [])

  const handleProjectClick = useCallback((project: Project) => {
    setSelectedProject(project)
  }, [])

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null)
  }, [])

  return (
    <section className="py-24 bg-gradient-to-b from-gray-950 to-black text-white" id="works">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00C18F] to-[#00E6AB]">
              Innovative
            </span>{" "}
            Projects
          </h2>
          <p className="text-xl text-gray-300">Discover how we&apos;ve transformed ideas into digital realities</p>
        </motion.div>

        <ProjectFilter onFilterChange={handleCategoryChange} onSearch={handleSearch} />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} onClick={() => handleProjectClick(project)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-xl text-gray-400 mt-12"
          >
            No projects found matching your criteria.
          </motion.p>
        )}
      </div>

      <ProjectModal isOpen={!!selectedProject} onClose={handleCloseModal} project={selectedProject} />
    </section>
  )
}

