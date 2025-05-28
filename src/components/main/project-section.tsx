"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import {
  Sparkles,
  ChevronDown,
  ChevronUp,
  Filter,
  Search,
  X,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Define the Project type
type Project = {
  id: number;
  name: string;
  metric: string;
  imageUrl: string;
  category: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
};

// Mock ProjectCard component
function ProjectCard({
  project,
  onClick,
  index,
}: {
  project: Project;
  onClick: () => void;
  index: number;
}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isImageError, setIsImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsImageError(false);
    setImageLoaded(false);
  }, [project.imageUrl]);

  return (
    <motion.div
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 h-full w-full border border-gray-100"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="w-full h-64 relative overflow-hidden bg-gray-50">
        <div className="relative w-full h-full">
          {!imageLoaded && !isImageError && (
            <div className="absolute inset-0 bg-gray-100 animate-pulse" />
          )}

          {isImageError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <span className="text-gray-400 text-sm">Image unavailable</span>
            </div>
          )}

          <Image
            src={project.imageUrl || "/api/placeholder/600/400"}
            alt={project.name}
            className={`w-full h-full object-cover transition-all duration-700 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            } ${isHovered ? "scale-110" : "scale-100"}`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setIsImageError(true)}
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="space-y-4">
          {/* Project Info */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
              {project.name}
            </h3>
            <p className="text-blue-600 font-medium text-sm">
              {project.metric}
            </p>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech, techIndex) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + techIndex * 0.05 }}
                className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors duration-200"
              >
                {tech}
              </motion.span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>

          {/* Overview Button */}
          <div className="pt-2">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              View Details
              <motion.div
                animate={{ x: isHovered ? 4 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const projects: Project[] = [
  {
    id: 1,
    name: "SEO Agency Website",
    metric: "80% growth in leads",
    imageUrl: "/project/3.png",
    category: "Landing Page",
    description:
      "A website for a startup SEO agency, showcasing the company's services and portfolio.",
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
    description:
      "An e-commerce platform connecting buyers and sellers, providing a seamless shopping experience.",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion",
      "Stripe",
    ],
    liveUrl: "www.contexmedia.com/",
    githubUrl: "#",
  },
  {
    id: 3,
    name: "E-commerce Website",
    metric: "Hobby project to learn Next.js and Tailwind CSS (NOT REAL)",
    imageUrl: "/project/2.png",
    category: "E-commerce",
    description:
      "A fully functional e-commerce platform for buying and selling furniture (not a real project).",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion",
      "Stripe",
    ],
    liveUrl: "https://figma-hackaton.vercel.app/",
    githubUrl: "#",
  },
  {
    id: 4,
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
];

export default function ProjectsSection() {
  const [,setSelectedProject] = useState<Project | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const sectionRef = useRef(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

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

  const categories = useMemo(() => {
    return [
      "All",
      ...Array.from(new Set(projects.map((project) => project.category))),
    ];
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeFilter === "All" || project.category === activeFilter;
      const matchesSearch =
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  const visibleProjects = useMemo(() => {
    return showAllProjects ? filteredProjects : filteredProjects.slice(0, 2);
  }, [showAllProjects, filteredProjects]);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const toggleShowAllProjects = () => {
    setShowAllProjects((prev) => !prev);
  };

  const handleFilterClick = (category: string) => {
    setActiveFilter(category);
    setShowAllProjects(true);
  };

  const clearSearch = () => {
    setSearchQuery("");
    if (searchRef.current) {
      searchRef.current.focus();
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
      id="work"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            {/* Section badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={
                isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
              }
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200 shadow-sm mb-8"
            >
              <Sparkles className="h-4 w-4" />
              Featured Projects
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              My Latest{" "}
              <span className="text-blue-600 relative">
                Projects
                <svg
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full max-w-sm"
                  height="8"
                  viewBox="0 0 300 8"
                  fill="none"
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 1.2, delay: 0.8 }}
                    d="M1 4C75 1.5 225 1.5 299 4"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="text-blue-600"
                  />
                </svg>
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Precision-crafted digital experiences that drive results and
              deliver exceptional user experiences.
            </motion.p>
          </motion.div>

          {/* Filter and Search Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  onClick={() => handleFilterClick(category)}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeFilter === category
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 shadow-sm"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="relative max-w-lg mx-auto"
            >
              <div
                className={`flex items-center bg-white rounded-xl border transition-all duration-300 shadow-sm ${
                  isSearchFocused
                    ? "border-blue-400 ring-4 ring-blue-100"
                    : "border-gray-200"
                } px-4 py-3`}
              >
                <Search
                  className={`w-5 h-5 transition-colors duration-300 ${
                    isSearchFocused ? "text-blue-500" : "text-gray-400"
                  }`}
                />
                <input
                  ref={searchRef}
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="flex-1 ml-3 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400"
                />
                {searchQuery && (
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    onClick={clearSearch}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                )}
              </div>
            </motion.div>

            {/* Project count indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex justify-center items-center gap-2"
            >
              <Filter className="w-4 h-4 text-blue-600" />
              <p className="text-gray-600">
                Showing{" "}
                <span className="text-blue-600 font-semibold">
                  {visibleProjects.length}
                </span>{" "}
                of{" "}
                <span className="text-blue-600 font-semibold">
                  {filteredProjects.length}
                </span>{" "}
                projects
                {activeFilter !== "All" && (
                  <span>
                    {" "}
                    in{" "}
                    <span className="text-blue-600 font-semibold">
                      {activeFilter}
                    </span>
                  </span>
                )}
              </p>
            </motion.div>
          </motion.div>

          {/* No Results Message */}
          {!isLoading && filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                No projects found
              </h3>
              <p className="text-gray-600 max-w-md mx-auto mb-8">
                We couldn&apos;t find any projects matching your search criteria. Try
                adjusting your filters or search query.
              </p>
              <button
                onClick={() => {
                  setActiveFilter("All");
                  setSearchQuery("");
                }}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-300 font-semibold shadow-lg"
              >
                Clear Filters
              </button>
            </motion.div>
          )}

          {/* Loading State */}
          {isLoading ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-lg"
                >
                  <div className="w-full h-64 bg-gray-200 animate-pulse" />
                  <div className="p-6 space-y-4">
                    <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4" />
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2" />
                    <div className="flex gap-2 flex-wrap">
                      <div className="h-6 bg-gray-200 rounded animate-pulse w-16" />
                      <div className="h-6 bg-gray-200 rounded animate-pulse w-16" />
                      <div className="h-6 bg-gray-200 rounded animate-pulse w-16" />
                    </div>
                    <div className="h-12 bg-gray-200 rounded animate-pulse w-32" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Projects Grid */
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <AnimatePresence mode="wait">
                {visibleProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex flex-col h-full"
                    layout
                  >
                    <ProjectCard
                      project={project}
                      onClick={() => handleProjectClick(project)}
                      index={index}
                    />
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
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleShowAllProjects}
                className="flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {showAllProjects ? (
                  <>
                    Show Less Projects
                    <motion.div
                      animate={{ y: [0, -3, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      <ChevronUp className="w-5 h-5" />
                    </motion.div>
                  </>
                ) : (
                  <>
                    View All Projects
                    <motion.div
                      animate={{ y: [0, 3, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
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
      </div>
    </section>
  );
}
