// "use client"

// import type React from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { ArrowRight, ExternalLink, Play } from "lucide-react"
// import { useState, useRef, useEffect } from "react"
// import { motion } from "framer-motion"
// import { Instrument_Serif } from "next/font/google" // Luxury Font import

// // Font Setup
// const instrumentSerif = Instrument_Serif({
//   weight: "400",
//   subsets: ["latin"],
// })

// // --- DATA SECTION: CHANGED TO REAL ESTATE CONCEPTS ---
// const featuredProjects = [
//   {
//     title: "The Palm Editions",
//     desc: "A high-conversion landing page for ultra-luxury villas on Palm Jumeirah, featuring immersive 3D walkthroughs.",
//     img: "/projects/villa.jpg", // Note: Rename any luxury house image to this
//     video: "", // Video hata diya temporarily complex na ho
//     link: "#",
//     tag: "Luxury Real Estate",
//   },
//   {
//     title: "Al-Ula Heritage Resort",
//     desc: "Interactive tourism portal for KSA's premier heritage site, blending culture with modern web architecture.",
//     img: "/projects/desert.jpg", // Note: Rename any desert/resort image to this
//     link: "#",
//     tag: "Hospitality & Tourism",
//   },
//   {
//     title: "Downtown Heights",
//     desc: "Off-plan sales dashboard for a 50-storey residential tower in Dubai Downtown.",
//     img: "/projects/building.jpg", // Note: Rename any building image to this
//     link: "#",
//     tag: "Off-Plan Development",
//   },
// ]

// // --- TIMELINE COMPONENT (Mobile) ---
// function ScrollTimeline({
//   activeIndex,
//   total,
//   onDotClick,
// }: { activeIndex: number; total: number; onDotClick: (index: number) => void }) {
//   const [hoveredDot, setHoveredDot] = useState<number | null>(null)

//   return (
//     <div className="absolute left-2 xs:left-3 sm:left-6 top-0 bottom-0 flex flex-col items-center py-16 sm:py-20 z-20 md:hidden mt-16">
//       {/* Line - Changed from Blue to Subtle Gray */}
//       <div className="absolute top-16 sm:top-20 bottom-16 sm:bottom-20 w-px bg-slate-200" />

//       {/* Active Line - Changed to Amber (Gold) */}
//       <div
//         className="absolute top-16 sm:top-20 w-px bg-gradient-to-b from-amber-600 via-amber-500 to-amber-700 transition-all duration-500 ease-out"
//         style={{
//           height: `calc(${((activeIndex + 1) / total) * 100}% - 8rem)`,
//         }}
//       />

//       {/* Timeline dots */}
//       <div className="relative flex flex-col justify-between h-full py-6 sm:py-8">
//         {Array.from({ length: total }).map((_, index) => (
//           <motion.button
//             key={index}
//             onClick={() => onDotClick(index)}
//             onMouseEnter={() => setHoveredDot(index)}
//             onMouseLeave={() => setHoveredDot(null)}
//             className="relative flex items-center cursor-pointer group transition-all duration-300"
//             whileHover={{ x: 2 }}
//           >
//             <div className="relative">
//               {/* Main dot - Changed Blue to Amber */}
//               <motion.div
//                 animate={{
//                   boxShadow:
//                     index <= activeIndex
//                       ? "0 0 0 4px rgba(251, 191, 36, 0.1)" // Golden subtle shadow
//                       : "none",
//                 }}
//                 className={`
//                   w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-slate-300 transition-all duration-500
//                   ${
//                     index <= activeIndex
//                       ? "bg-amber-700 border-amber-700 scale-110"
//                       : "bg-white"
//                   }
//                 `}
//               />
//             </div>

//             <motion.span
//               animate={{
//                 opacity: index <= activeIndex ? 1 : 0.4,
//                 x: hoveredDot === index ? 4 : 0,
//               }}
//               transition={{ duration: 0.2 }}
//               className={`
//                 ml-3.5 text-[10px] sm:text-xs font-medium transition-all duration-300 whitespace-nowrap
//                 ${
//                   index <= activeIndex
//                     ? "text-amber-800"
//                     : "text-slate-400"
//                 }
//               `}
//             >
//               0{index + 1}
//             </motion.span>
//           </motion.button>
//         ))}
//       </div>
//     </div>
//   )
// }

// // --- PROJECT CARD COMPONENT ---
// function ProjectCard({
//   project,
//   isLarge,
//   onVisible,
//   index,
// }: {
//   project: (typeof featuredProjects)[0]
//   isLarge?: boolean
//   onVisible?: (index: number) => void
//   index: number
// }) {
//   const [isHovering, setIsHovering] = useState(false)
//   const cardRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && onVisible) {
//           onVisible(index)
//         }
//       },
//       { threshold: 0.5 },
//     )

//     if (cardRef.current) {
//       observer.observe(cardRef.current)
//     }

//     return () => observer.disconnect()
//   }, [index, onVisible])

//   return (
//     <motion.article
//       ref={cardRef}
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => setIsHovering(false)}
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       viewport={{ once: true }}
//       // Changed: Rounded corners from 2xl to lg (sharper look)
//       className={`
//         group relative bg-white rounded-lg overflow-hidden 
//         border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500
//         ${isLarge ? "md:col-span-2 md:row-span-2" : ""}
//       `}
//     >
//       {/* Image Container */}
//       <div
//         className={`relative overflow-hidden bg-slate-100 ${
//           isLarge ? "h-64 xs:h-72 sm:h-80 md:h-[400px]" : "h-48 xs:h-52 sm:h-56 md:h-64"
//         }`}
//       >
//         {/* Note: Placeholder if image is missing */}
//         <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
//            {/* Removing actual Image component call if you don't have images yet, otherwise uncomment below */}
//            <Image
//             src={project.img} 
//             alt={project.title}
//             fill
//             className={`object-cover transition-transform duration-700 ease-in-out ${isHovering ? "scale-105" : "scale-100"}`}
//           /> 
//         </div>

//         {/* Tag - Changed style to minimal luxury */}
//         <div className="absolute top-4 left-4 z-10">
//            <span className="bg-white/90 backdrop-blur-md text-slate-900 text-[10px] sm:text-xs font-medium px-3 py-1.5 rounded-sm uppercase tracking-wider border border-slate-100">
//             {project.tag}
//            </span>
//         </div>

//         {/* Overlay on hover */}
//         <div className={`absolute inset-0 bg-black/20 transition-opacity duration-500 ${isHovering ? "opacity-100" : "opacity-0"}`} />
//       </div>

//       {/* Content Section */}
//       <div className={`p-5 xs:p-6 sm:p-7 ${isLarge ? "md:p-10" : ""}`}>
//         <h3
//           className={`font-medium text-slate-900 ${instrumentSerif.className} ${
//             isLarge
//               ? "text-2xl sm:text-3xl md:text-4xl"
//               : "text-xl sm:text-2xl"
//           }`}
//         >
//           {project.title}
//         </h3>
//         <p
//           className={`text-slate-500 mt-3 font-light ${
//             isLarge
//               ? "text-sm sm:text-base md:text-lg line-clamp-3 leading-relaxed"
//               : "text-xs sm:text-sm line-clamp-2 leading-relaxed"
//           }`}
//         >
//           {project.desc}
//         </p>

//         {/* Link - Changed to simple text link */}
//         <div className="mt-6">
//           <span className="inline-flex items-center gap-2 text-amber-700 font-medium text-xs sm:text-sm uppercase tracking-wide group-hover:gap-3 transition-all duration-300">
//             View Project
//             <ArrowRight className="w-4 h-4" />
//           </span>
//         </div>
//       </div>
//     </motion.article>
//   )
// }

// // --- MAIN COMPONENT ---
// export default function FeaturedProjects() {
//   const [activeIndex, setActiveIndex] = useState(0)
//   const projectsRef = useRef<HTMLDivElement>(null)

//   const handleDotClick = (index: number) => {
//     setActiveIndex(index)
//     const projectElements = projectsRef.current?.querySelectorAll("[data-project-index]")
//     if (projectElements?.[index]) {
//       projectElements[index].scrollIntoView({
//         behavior: "smooth",
//         block: "nearest",
//         inline: "start",
//       })
//     }
//   }

//   return (
//     <section id="projects" className="relative w-full py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      
//       <div className="relative max-w-7xl mx-auto">
//         <ScrollTimeline activeIndex={activeIndex} total={featuredProjects.length} onDotClick={handleDotClick} />

//         {/* Section Header - Centered & Premium */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 sm:mb-16 lg:mb-20 pl-10 xs:pl-12 sm:pl-0"
//         >
//           <div className="max-w-2xl">
//             <span className="text-amber-700 font-semibold text-xs tracking-[0.2em] uppercase block mb-4">
//               Selected Works
//             </span>
//             <h2
//               className={`${instrumentSerif.className} text-4xl sm:text-5xl md:text-6xl text-slate-900 leading-tight`}
//             >
//               Recent <span className="italic text-slate-400">Masterpieces</span>
//             </h2>
//           </div>

//           <div className="hidden md:block">
//             <Link
//               href="/portfolio"
//               className="group inline-flex items-center gap-2 text-slate-500 hover:text-amber-700 transition-colors"
//             >
//               View Full Portfolio
//               <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//             </Link>
//           </div>
//         </motion.div>

//         {/* Grid Layout */}
//         <div
//           ref={projectsRef}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 pl-10 xs:pl-12 sm:pl-0"
//         >
//           {featuredProjects.map((project, index) => (
//             <div key={project.title} data-project-index={index} className={index === 0 ? "md:col-span-2 md:row-span-2" : ""}>
//               <ProjectCard project={project} isLarge={index === 0} index={index} onVisible={setActiveIndex} />
//             </div>
//           ))}
//         </div>

//         {/* Mobile CTA */}
//         <div className="flex justify-center md:hidden pl-10 xs:pl-12 sm:pl-0">
//           <Link
//             href="/portfolio"
//             className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-sm text-center font-medium shadow-lg active:scale-95 transition-transform"
//           >
//             View All Projects
//           </Link>
//         </div>
//       </div>
//     </section>
//   )
// }