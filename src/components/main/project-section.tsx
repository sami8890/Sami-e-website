// "use client"
// import { useState, useMemo, useRef, useEffect } from "react"
// import { Sparkles, ChevronDown, ChevronUp, Filter, Search, ArrowRight } from "lucide-react"
// import { motion, AnimatePresence } from "framer-motion"
// import Image from "next/image"

// // Define the Project type
// type Project = {
//   id: number
//   name: string
//   metric: string
//   imageUrl: string
//   category: string
//   description: string
//   technologies: string[]
//   liveUrl: string
//   githubUrl: string
// }

// // Mock ProjectCard component
// function ProjectCard({ project, onClick, index }: { project: Project; onClick: () => void; index: number }) {
//   const [imageLoaded, setImageLoaded] = useState(false)
//   const [, setIsImageError] = useState(false)
//   const [isHovered, setIsHovered] = useState(false)

//   useEffect(() => {
//     setIsImageError(false)
//     setImageLoaded(false)
//   }, [project.imageUrl])

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300 h-full w-full border border-slate-200"
//       onClick={onClick}
//       role="button"
//       tabIndex={0}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Image Container */}
//       <div className="w-full h-64 relative overflow-hidden bg-slate-50">
//         <Image
//           src={project.imageUrl || "/placeholder.svg?height=400&width=600"}
//           alt={project.name}
//           fill
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//           className={`object-cover transition-all duration-500 ${
//             imageLoaded ? "opacity-100" : "opacity-0"
//           } ${isHovered ? "scale-105" : "scale-100"}`}
//           onLoad={() => setImageLoaded(true)}
//           onError={() => setIsImageError(true)}
//         />
//       </div>

//       {/* Content Section */}
//       <div className="p-6 space-y-6">
//         {/* Project Info */}
//         <div className="space-y-3">
//           <h3 className="text-xl font-bold text-slate-900 line-clamp-2 group-hover:text-slate-700 transition-colors duration-300">
//             {project.name}
//           </h3>
//           <p className="text-slate-600 font-medium text-sm">{project.metric}</p>
//         </div>

//         {/* Technologies */}
//         <div className="flex flex-wrap gap-2">
//           {project.technologies.slice(0, 3).map((tech, techIndex) => (
//             <motion.span
//               key={tech}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3, delay: 0.1 + techIndex * 0.05 }}
//               className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded-full"
//             >
//               {tech}
//             </motion.span>
//           ))}
//           {project.technologies.length > 3 && (
//             <span className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full">
//               +{project.technologies.length - 3} more
//             </span>
//           )}
//         </div>

//         {/* View Details Button */}
//         <motion.button
//           whileTap={{ scale: 0.98 }}
//           className="w-full px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-medium flex items-center justify-center gap-2 transition-all duration-300 shadow-sm hover:shadow-md"
//         >
//           View Details
//           <motion.div animate={{ x: isHovered ? 4 : 0 }} transition={{ duration: 0.3 }}>
//             <ArrowRight className="w-4 h-4" />
//           </motion.div>
//         </motion.button>
//       </div>
//     </motion.div>
//   )
// }

// const projects: Project[] = [
//   {
//     id: 1,
//     name: "SEO Agency Website",
//     metric: "80% growth in leads",
//     imageUrl: "/project/3.png",
//     category: "Landing Page",
//     description: "A website for a startup SEO agency, showcasing the company's services and portfolio.",
//     technologies: ["Next.js", "Tailwind CSS", "GSAP", "Framer Motion", "React"],
//     liveUrl: "www.contntr.com",
//     githubUrl: "#",
//   },
//   {
//     id: 2,
//     name: "Video Editor Agency Website",
//     metric: "Increased agency visibility and user engagement",
//     imageUrl: "/project/4.png",
//     category: "Landing Page",
//     description: "An e-commerce platform connecting buyers and sellers, providing a seamless shopping experience.",
//     technologies: ["React", "Next.js", "Tailwind CSS", "GSAP", "Framer Motion", "Stripe"],
//     liveUrl: "www.contexmedia.com/",
//     githubUrl: "#",
//   },
//   {
//     id: 3,
//     name: "E-commerce Website",
//     metric: "Hobby project to learn Next.js and Tailwind CSS (NOT REAL)",
//     imageUrl: "/project/2.png",
//     category: "E-commerce",
//     description: "A fully functional e-commerce platform for buying and selling furniture (not a real project).",
//     technologies: ["React", "Next.js", "Tailwind CSS", "GSAP", "Framer Motion", "Stripe"],
//     liveUrl: "https://figma-hackaton.vercel.app/",
//     githubUrl: "#",
//   },
//   {
//     id: 4,
//     name: "Doctor's Website",
//     metric: "Hobby project (NOT REAL)",
//     imageUrl: "/project/1.png",
//     category: "Healthcare",
//     description:
//       "A demo website for a healthcare provider, designed to showcase services and appointments (not a real project).",
//     technologies: ["Next.js", "Tailwind CSS", "GSAP", "Framer Motion", "React"],
//     liveUrl: "/health-website-w.vercel.app/",
//     githubUrl: "#",
//   },
// ]

// export default function ProjectsSection() {
//   const [, setSelectedProject] = useState<Project | null>(null)
//   const [showAllProjects, setShowAllProjects] = useState(false)
//   const [isLoading, setIsLoading] = useState(true)
//   const [isInView, setIsInView] = useState(false)
//   const [activeFilter, setActiveFilter] = useState("All")
//   const [searchQuery, setSearchQuery] = useState("")
//   const sectionRef = useRef(null)

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false)
//     }, 1000)
//     return () => clearTimeout(timer)
//   }, [])

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsInView(true)
//         }
//       },
//       { threshold: 0.1 },
//     )

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current)
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current)
//       }
//     }
//   }, [])

//   const categories = useMemo(() => {
//     return ["All", ...Array.from(new Set(projects.map((project) => project.category)))]
//   }, [])

//   const filteredProjects = useMemo(() => {
//     return projects.filter((project) => {
//       const matchesCategory = activeFilter === "All" || project.category === activeFilter
//       const matchesSearch =
//         project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()))
//       return matchesCategory && matchesSearch
//     })
//   }, [activeFilter, searchQuery])

//   const visibleProjects = useMemo(() => {
//     return showAllProjects ? filteredProjects : filteredProjects.slice(0, 2)
//   }, [showAllProjects, filteredProjects])

//   const handleProjectClick = (project: Project) => {
//     setSelectedProject(project)
//   }

//   const toggleShowAllProjects = () => {
//     setShowAllProjects((prev) => !prev)
//   }

//   const handleFilterClick = (category: string) => {
//     setActiveFilter(category)
//     setShowAllProjects(true)
//   }

//   return (
//     <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden" id="projects">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_50%)]"></div>

//       <div className="container px-4 mx-auto relative z-10">
//         <div className="max-w-6xl mx-auto">
//           {/* Section Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="text-center mb-16"
//           >
//             {/* Service tag */}
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
//               transition={{ duration: 0.6 }}
//               className="inline-block mb-6"
//             >
//               <span className="inline-block rounded-full bg-black text-white px-4 py-1.5 text-sm md:text-lg font-medium tracking-wide">
//                 <Sparkles className="inline h-4 w-4 mr-2" />
//                 Featured Work
//               </span>
//             </motion.div>

//             {/* Main headline */}
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6"
//             >
//               Projects That{" "}
//               <span className="relative inline-block">
//                 <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                   Drive Results
//                 </span>
//                 <motion.div
//                   initial={{ scaleX: 0 }}
//                   animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
//                   transition={{ duration: 0.8, delay: 0.5 }}
//                   className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 origin-left"
//                 />
//               </span>
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
//             >
//               Real websites that have helped businesses grow their online presence and increase revenue.
//             </motion.p>
//           </motion.div>

//           {/* Filter Controls */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.6, delay: 0.6 }}
//             className="mb-12"
//           >
//             {/* Category Filters */}
//             <div className="flex flex-wrap justify-center gap-3 mb-8">
//               {categories.map((category, index) => (
//                 <motion.button
//                   key={category}
//                   onClick={() => handleFilterClick(category)}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
//                   whileTap={{ scale: 0.98 }}
//                   className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
//                     activeFilter === category
//                       ? "bg-slate-900 text-white shadow-lg"
//                       : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-sm"
//                   }`}
//                 >
//                   {category}
//                 </motion.button>
//               ))}
//             </div>

//             {/* Project count indicator */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//               transition={{ duration: 0.6, delay: 1 }}
//               className="flex justify-center items-center gap-2"
//             >
//               <Filter className="w-4 h-4 text-slate-600" />
//               <p className="text-slate-600">
//                 Showing <span className="text-slate-900 font-semibold">{visibleProjects.length}</span> of{" "}
//                 <span className="text-slate-900 font-semibold">{filteredProjects.length}</span> projects
//                 {activeFilter !== "All" && (
//                   <span>
//                     {" "}
//                     in <span className="text-slate-900 font-semibold">{activeFilter}</span>
//                   </span>
//                 )}
//               </p>
//             </motion.div>
//           </motion.div>

//           {/* No Results Message */}
//           {!isLoading && filteredProjects.length === 0 && (
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               className="text-center py-16"
//             >
//               <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-100 mb-6">
//                 <Search className="w-8 h-8 text-slate-400" />
//               </div>

//               <h3 className="text-2xl font-bold text-slate-900 mb-4">No projects found</h3>

//               <p className="text-slate-600 max-w-md mx-auto mb-8">
//                 We couldn&apos;t find any projects matching your search criteria. Try adjusting your filters or search query.
//               </p>

//               <button
//                 onClick={() => {
//                   setActiveFilter("All")
//                   setSearchQuery("")
//                 }}
//                 className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-full transition-all duration-300 font-medium shadow-lg"
//               >
//                 Clear Filters
//               </button>
//             </motion.div>
//           )}

//           {/* Loading State */}
//           {isLoading ? (
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//               {[1, 2].map((i) => (
//                 <div key={i} className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm">
//                   <div className="w-full h-64 bg-slate-200 animate-pulse" />

//                   <div className="p-6 space-y-4">
//                     <div className="h-6 bg-slate-200 rounded animate-pulse w-3/4" />
//                     <div className="h-4 bg-slate-200 rounded animate-pulse w-1/2" />

//                     <div className="flex gap-2 flex-wrap">
//                       <div className="h-6 bg-slate-200 rounded animate-pulse w-16" />
//                       <div className="h-6 bg-slate-200 rounded animate-pulse w-16" />
//                       <div className="h-6 bg-slate-200 rounded animate-pulse w-16" />
//                     </div>

//                     <div className="h-12 bg-slate-200 rounded animate-pulse w-32" />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             /* Projects Grid */
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
//               <AnimatePresence mode="wait">
//                 {visibleProjects.map((project, index) => (
//                   <motion.div
//                     key={project.id}
//                     initial={{ opacity: 0, y: 40 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, scale: 0.95 }}
//                     transition={{ duration: 0.6, delay: index * 0.1 }}
//                     className="flex flex-col h-full"
//                     layout
//                   >
//                     <ProjectCard project={project} onClick={() => handleProjectClick(project)} index={index} />
//                   </motion.div>
//                 ))}
//               </AnimatePresence>
//             </div>
//           )}

//           {/* See More / See Less Button */}
//           {!isLoading && filteredProjects.length > 2 && (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//               transition={{ duration: 0.6, delay: 1.2 }}
//               className="flex justify-center"
//             >
//               <motion.button
//                 whileHover={{ scale: 1.05, y: -2 }}
//                 whileTap={{ scale: 0.98 }}
//                 onClick={toggleShowAllProjects}
//                 className="flex items-center gap-3 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
//               >
//                 {showAllProjects ? (
//                   <>
//                     Show Less Projects
//                     <motion.div
//                       animate={{ y: [0, -3, 0] }}
//                       transition={{
//                         duration: 1.5,
//                         repeat: Number.POSITIVE_INFINITY,
//                         repeatType: "reverse",
//                       }}
//                     >
//                       <ChevronUp className="w-5 h-5" />
//                     </motion.div>
//                   </>
//                 ) : (
//                   <>
//                     View All Projects
//                     <motion.div
//                       animate={{ y: [0, 3, 0] }}
//                       transition={{
//                         duration: 1.5,
//                         repeat: Number.POSITIVE_INFINITY,
//                         repeatType: "reverse",
//                       }}
//                     >
//                       <ChevronDown className="w-5 h-5" />
//                     </motion.div>
//                   </>
//                 )}
//               </motion.button>
//             </motion.div>
//           )}
//         </div>
//       </div>
//     </section>
//   )
// }
