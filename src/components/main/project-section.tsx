"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { ProjectCard } from "@/components/main/project-card";
import ProjectModal from "@/components/main/project-modal";
import { Sparkles, ChevronDown, ChevronUp, } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: number;
  name: string;
  metric: string;
  imageUrl: string;
  category: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  duration?: string;
  views?: number;
  status?: "live" | "development";
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
    category: "E-commerce",
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
    description: "A personal portfolio website of an top level craetor of linkedIn ",
    technologies: ["React", "Next.js", "Tailwind CSS", "GSAP", "Framer Motion"],
    liveUrl: "https://ibtrahim.vercel.app/",
    githubUrl: "#",
    duration: "4 Days",
  },

  {
    id: 4,
    name: "E-commerce Website ",
    metric: "Hobby project to learn Next.js and Tailwind CSS (NOT REAL)",
    imageUrl: "/project/2.png",
    category: "E-commerce",
    description: "A fully functional e-commerce platform for buying and selling furniture.",
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
    description: "A demo website for a healthcare provider, designed to showcase services and appointments.",
    technologies: ["Next.js", "Tailwind CSS", "GSAP", "Framer Motion", "React"],
    liveUrl: "/health-website-w.vercel.app/",
    githubUrl: "#",
  },
 
];


export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isInView, setIsInView] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);

  // Simulate loading state for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Check if section is in view for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const visibleProjects = useMemo(() => {
    return showAllProjects ? projects : projects.slice(0, 3);
  }, [showAllProjects]);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const toggleShowAllProjects = () => {
    setShowAllProjects((prev) => !prev);
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-gray-950 to-black text-white overflow-hidden"
      id="work"
    >
      <div className="container px-4 mx-auto">
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
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#00E188]/20 bg-[#00E188]/10 px-3 py-1 text-xs font-medium text-[#00E188] mb-6"
            >
              <Sparkles className="h-3 w-3 animate-pulse" />
              <span>Featured Projects</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl mb-4"
            >
              My{" "}
              <span className="text-[#00E188] relative inline-block">
                Projects
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 100 15"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,5 Q50,15 100,5"
                    stroke="rgba(0, 225, 136, 0.5)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="1"
                    strokeDashoffset="1"
                  />
                </motion.svg>
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-zinc-400 max-w-lg mx-auto"
            >
              Check out some of my recent work. Each project is carefully
              crafted with attention to detail, performance, and user
              experience.
            </motion.p>
          </div>

          {/* Simple underline */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={
              isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }
            }
            transition={{ duration: 0.7, delay: 0.6 }}
            className="h-0.5 bg-gradient-to-r from-transparent via-[#00E188] to-transparent w-48 md:w-64 mx-auto mt-6 opacity-60 origin-center"
          />
        </motion.div>

        {/* Project count indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex justify-between items-center mb-6"
        >
          <p className="text-sm text-gray-400">
            Showing{" "}
            <span className="text-[#00E188] font-medium">
              {visibleProjects.length}
            </span>{" "}
            of{" "}
            <span className="text-[#00E188] font-medium">
              {projects.length}
            </span>{" "}
            projects
          </p>


        </motion.div>

        {/* Loading State */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 h-full"
              >
                <div className="w-full h-[220px] sm:h-[240px] md:h-[260px] bg-zinc-800 animate-pulse" />
                <div className="p-5 sm:p-6 space-y-4">
                  <div className="h-6 bg-zinc-800 rounded animate-pulse w-3/4" />
                  <div className="h-4 bg-zinc-800 rounded animate-pulse w-1/2" />
                  <div className="flex gap-2">
                    <div className="h-6 bg-zinc-800 rounded animate-pulse w-16" />
                    <div className="h-6 bg-zinc-800 rounded animate-pulse w-16" />
                    <div className="h-6 bg-zinc-800 rounded animate-pulse w-16" />
                  </div>
                  <div className="h-10 bg-zinc-800 rounded animate-pulse w-28" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Projects Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Only render projects based on showAllProjects state */}
            <AnimatePresence>
              {visibleProjects.map((project, index) => (
                <div key={project.id} className="flex">
                  <ProjectCard
                    project={project}
                    onClick={() => handleProjectClick(project)}
                    index={index}
                  />
                </div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* See More / See Less Button */}
        {!isLoading && projects.length > 3 && (
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
              className="flex items-center gap-2 px-8 py-3 bg-[#00E188] hover:bg-[#00c077] text-black font-medium rounded-full transition-colors shadow-md hover:shadow-lg"
              aria-label={
                showAllProjects ? "Show fewer projects" : "Show more projects"
              }
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

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </section>
  );
}
