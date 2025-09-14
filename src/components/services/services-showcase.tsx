// "use client"

// import type React from "react"
// import { useState, useEffect, useRef } from "react"
// import { ArrowRight, Code, Layers, Rocket, ImageIcon, Star, CheckCircle, TrendingUp } from "lucide-react"
// import Image from "next/image"
// import Link from "next/link"
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Tabs, TabsContent } from "@/components/ui/tabs"
// import { motion, useScroll, useTransform } from "framer-motion"

// // Add this keyframe animation to the top of the file
// // Add this right after the imports
// const floatAnimation = `
// @keyframes float {
//   0% {
//     transform: translateY(0) translateX(0);
//     opacity: 0;
//   }
//   50% {
//     opacity: 0.8;
//   }
//   100% {
//     transform: translateY(-100px) translateX(20px);
//     opacity: 0;
//   }
// }

// @keyframes pulse {
//   0%, 100% {
//     opacity: 1;
//     transform: scale(1);
//   }
//   50% {
//     opacity: 0.8;
//     transform: scale(1.05);
//   }
// }

// @keyframes shimmer {
//   0% {
//     background-position: -200% 0;
//   }
//   100% {
//     background-position: 200% 0;
//   }
// }

// @keyframes glow {
//   0%, 100% {
//     box-shadow: 0 0 5px rgba(0, 225, 136, 0.3);
//   }
//   50% {
//     box-shadow: 0 0 20px rgba(0, 225, 136, 0.6);
//   }
// }

// @keyframes borderFlow {
//   0% {
//     background-position: 0% 50%;
//   }
//   50% {
//     background-position: 100% 50%;
//   }
//   100% {
//     background-position: 0% 50%;
//   }
// }
// `

// interface ServiceCardProps {
//   type: "portfolio" | "landing"
//   className?: string
//   index: number
// }

// const GradientBorder = ({ children }: { children: React.ReactNode }) => (
//   <div className="relative rounded-2xl p-[1px] overflow-hidden group">
//     <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/30 via-green-500/10 to-green-500/30 bg-[length:200%_100%] animate-[borderFlow_8s_ease_infinite] group-hover:animate-[borderFlow_3s_ease_infinite]" />
//     <div className="absolute inset-[1px] rounded-2xl bg-[#121212] pointer-events-none" />
//     {children}
//   </div>
// )

// interface FeatureType {
//   title: string
//   description: string
//   icon: React.ReactNode
// }

// const FeatureList = ({ features }: { features: FeatureType[] }) => {
//   return (
//     <div className="space-y-6">
//       {features.map((feature, index) => (
//         <motion.div
//           key={feature.title}
//           className="flex items-start gap-3 group"
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: index * 0.1 }}
//         >
//           <div className="mt-0.5 rounded-md bg-[#1A1A1A] p-1.5 transition-all duration-300 group-hover:bg-green-500/20 group-hover:scale-110">
//             {feature.icon}
//           </div>
//           <div>
//             <h3 className="text-sm font-medium text-white group-hover:text-green-400 transition-colors duration-300">
//               {feature.title}
//             </h3>
//             <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
//               {feature.description}
//             </p>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   )
// }

// const ServiceCard: React.FC<ServiceCardProps> = ({ type, index }) => {
//   const features = {
//     portfolio: [
//       {
//         title: "Customizable Design Templates",
//         description: "Tailor your portfolio to reflect your unique style",
//         icon: <Layers className="h-4 w-4 text-green-400" />,
//       },
//       {
//         title: "Project Showcase Gallery",
//         description: "Visually appealing display of your best work",
//         icon: <ImageIcon className="h-4 w-4 text-green-400" />,
//       },
//       {
//         title: "Responsive Layouts",
//         description: "Ensure your portfolio looks great on any device",
//         icon: <CheckCircle className="h-4 w-4 text-green-400" />,
//       },
//       {
//         title: "SEO Optimization",
//         description: "Increase visibility and attract more clients",
//         icon: <TrendingUp className="h-4 w-4 text-green-400" />,
//       },
//     ],
//     landing: [
//       {
//         title: "Compelling Call-to-Actions",
//         description: "Drive user engagement and conversions",
//         icon: <Rocket className="h-4 w-4 text-green-400" />,
//       },
//       {
//         title: "A/B Testing Integration",
//         description: "Optimize your landing page for maximum performance",
//         icon: <Layers className="h-4 w-4 text-green-400" />,
//       },
//       {
//         title: "Performance Analytics",
//         description: "Track key metrics and gain valuable insights",
//         icon: <TrendingUp className="h-4 w-4 text-green-400" />,
//       },
//       {
//         title: "Lead Generation Forms",
//         description: "Capture valuable leads and grow your customer base",
//         icon: <Code className="h-4 w-4 text-green-400" />,
//       },
//     ],
//   }

//   const [isHovered, setIsHovered] = useState(false)
//   const [isVisible, setIsVisible] = useState(false)
//   const cardRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true)
//         }
//       },
//       { threshold: 0.1 },
//     )

//     if (cardRef.current) {
//       observer.observe(cardRef.current)
//     }

//     return () => {
//       if (cardRef.current) {
//         observer.unobserve(cardRef.current)
//       }
//     }
//   }, [])

//   if (type === "portfolio") {
//     return (
//       <motion.div
//         ref={cardRef}
//         initial={{ opacity: 0, y: 30 }}
//         animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//         transition={{ duration: 0.6, delay: index * 0.2 }}
//         whileHover={{ y: -5 }}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <GradientBorder>
//           <Card
//             className={`border-0 bg-[#121212] p-4 sm:p-6 md:p-8 transition-all duration-500 ${isHovered ? "shadow-lg shadow-green-500/10" : "shadow-md shadow-black/20"
//               }`}
//           >
//             <div className="relative">
//               <CardHeader className="p-0 pb-6">
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.3, delay: 0.1 }}
//                 >
//                   <Badge
//                     variant="outline"
//                     className="mb-4 w-fit rounded-full border-green-500 bg-[#1A1A1A] px-4 py-1 text-xs font-medium text-green-400"
//                   >
//                     Showcase Your Work
//                   </Badge>
//                 </motion.div>
//                 <CardTitle
//                   className={`${type === "portfolio" ? "mb-6" : ""} text-2xl sm:text-3xl md:text-4xl font-bold text-white`}
//                 >
//                   Portfolio Website
//                 </CardTitle>
//                 <div className="mt-2">
//                   <Badge
//                     variant="outline"
//                     className="rounded-full border-green-500 bg-[#1A1A1A] px-4 py-1 text-xs font-medium text-green-400 animate-pulse"
//                   >
//                     Limited spots available!
//                   </Badge>
//                 </div>
//               </CardHeader>
//               <CardContent className="space-y-6 p-0">
//                 <motion.div
//                   className="group relative overflow-hidden rounded-2xl"
//                   whileHover={{ scale: 1.02 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <Image
//                     src="/services-pics/portfolio.png"
//                     alt="Portfolio Preview"
//                     width={600}
//                     height={300}
//                     className={`w-full object-cover transition-transform duration-700 ${isHovered ? "scale-105" : "scale-100"}`}
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                   <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <span className="bg-green-500 text-black px-3 py-1 rounded-full text-xs font-medium">
//                       View Details
//                     </span>
//                   </div>
//                 </motion.div>
//                 <FeatureList features={features.portfolio} />
//                 <p className="text-base leading-relaxed text-gray-400">
//                   Create a stunning portfolio website that showcases your work, skills, and achievements to potential
//                   clients and employers. Stand out from the competition with a professional online presence.
//                 </p>
//               </CardContent>
//               <CardFooter className="p-0 pt-8">
//                 <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full">
//                   <Link
//                     href="https://calendly.com/sami-gabol13/portfolio-website-discussion"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="group flex w-full items-center justify-center gap-2 rounded-lg bg-[#1A1A1A] px-8 py-3 text-green-400 transition-all duration-300 hover:bg-green-500 hover:text-black"
//                   >
//                     <span className="text-base font-medium">Start Your Portfolio</span>
//                     <motion.div animate={{ x: isHovered ? 5 : 0 }} transition={{ duration: 0.2 }}>
//                       <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//                     </motion.div>
//                   </Link>
//                 </motion.div>
//               </CardFooter>
//             </div>
//           </Card>
//         </GradientBorder>
//       </motion.div>
//     )
//   }

//   if (type === "landing") {
//     return (
//       <motion.div
//         ref={cardRef}
//         initial={{ opacity: 0, y: 30 }}
//         animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//         transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
//         whileHover={{ y: -5 }}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <GradientBorder>
//           <Card
//             className={`border-0 bg-[#121212] p-4 sm:p-6 md:p-8 transition-all duration-500 ${isHovered ? "shadow-lg shadow-green-500/10" : "shadow-md shadow-black/20"
//               }`}
//           >
//             <div className="relative">
//               <CardHeader className="space-y-6 p-0">
//                 <motion.div
//                   className="flex flex-wrap gap-3"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   {["Optimized", "SEO friendly", "Boost sales"].map((label, i) => (
//                     <motion.div
//                       key={label}
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.3, delay: 0.1 + i * 0.1 }}
//                     >
//                       <Badge
//                         variant="outline"
//                         className="rounded-full border-green-500 bg-[#1A1A1A] px-4 py-1 text-xs font-medium text-green-400"
//                       >
//                         {label}
//                       </Badge>
//                     </motion.div>
//                   ))}
//                 </motion.div>
//                 <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
//                   High-Converting Landing Page
//                 </CardTitle>
//                 <div className="mt-2">
//                   <Badge
//                     variant="outline"
//                     className="rounded-full border-green-500 bg-[#1A1A1A] px-4 py-1 text-xs font-medium text-green-400 animate-pulse"
//                   >
//                     Limited spots available!
//                   </Badge>
//                 </div>
//               </CardHeader>

//               <CardContent className="space-y-6 p-0 pt-6">
//                 <motion.div
//                   className="group relative overflow-hidden rounded-2xl"
//                   whileHover={{ scale: 1.02 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <Image
//                     src="/services-pics/image.png"
//                     alt="Landing Page Preview"
//                     width={600}
//                     height={300}
//                     className={`w-full object-contain transition-transform duration-700 ${isHovered ? "scale-105" : "scale-100"}`}
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                   <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <span className="bg-green-500 text-black px-3 py-1 rounded-full text-xs font-medium">
//                       View Details
//                     </span>
//                   </div>
//                 </motion.div>
//                 <p className="text-base leading-relaxed text-gray-400">
//                   Get unique user interfaces, engaging content, mobile-friendly design, and eye-catching animations—all
//                   crafted to elevate your digital presence and drive conversions.
//                 </p>
//                 <FeatureList features={features.landing} />
//               </CardContent>
//               <CardFooter className="p-0 pt-8">
//                 <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full">
//                   <Link
//                     href="#"
//                     className="group flex w-full items-center justify-center gap-2 rounded-lg bg-[#1A1A1A] px-8 py-3 text-green-400 transition-all duration-300 hover:bg-green-500 hover:text-black"
//                   >
//                     <span className="text-base font-medium">Boost Your Conversions</span>
//                     <motion.div animate={{ x: isHovered ? 5 : 0 }} transition={{ duration: 0.2 }}>
//                       <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//                     </motion.div>
//                   </Link>
//                 </motion.div>
//               </CardFooter>
//             </div>
//           </Card>
//         </GradientBorder>
//       </motion.div>
//     )
//   }

//   return null
// }

// // Main component
// export default function ServicesShowcase() {
//   const [ setIsVisible] = useState(false)
//   const [, setScrollY] = useState(0)
//   const [, setActiveTab] = useState("services")
//   const sectionRef = useRef<HTMLElement>(null)
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   })

//   const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100])
//   const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
//   const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true)
//     }, 100)

//     return () => clearTimeout(timer)
//   }, [])

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY)
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => {
//       window.removeEventListener("scroll", handleScroll)
//     }
//   }, [])

//   // Add this style tag to the component
//   // Add this right before the return statement
//   useEffect(() => {
//     // Add the animation styles
//     const styleElement = document.createElement("style")
//     styleElement.textContent = floatAnimation
//     document.head.appendChild(styleElement)

//     return () => {
//       document.head.removeChild(styleElement)
//     }
//   }, [])

//   // Floating particles effect
//   const particles = Array.from({ length: 15 }).map((_, i) => ({
//     id: i,
//     size: Math.random() * 6 + 2,
//     x: Math.random() * 100,
//     y: Math.random() * 100,
//     duration: Math.random() * 15 + 10,
//     delay: Math.random() * 5,
//   }))

//   return (
//     <section
//       ref={sectionRef}
//       className="force-sticky relative min-h-[200vh] bg-black py-8 sm:py-12 md:py-16 lg:py-24 overflow-hidden"
//     >
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <motion.div
//           className="absolute -top-20 -right-20 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"
//           style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
//         />
//         <motion.div
//           className="absolute bottom-20 right-1/4 w-64 h-64 bg-green-500/4 rounded-full blur-3xl"
//           style={{ y: useTransform(scrollYProgress, [0, 1], [0, -30]) }}
//         />
//         <motion.div
//           className="absolute top-1/3 left-1/4 w-72 h-72 bg-green-500/3 rounded-full blur-3xl opacity-30"
//           style={{ y: useTransform(scrollYProgress, [0, 1], [0, 20]) }}
//         />

//         {/* Floating particles */}
//         {particles.map((particle) => (
//           <motion.div
//             key={particle.id}
//             className="absolute rounded-full bg-green-500"
//             style={{
//               width: particle.size,
//               height: particle.size,
//               left: `${particle.x}%`,
//               top: `${particle.y}%`,
//               opacity: 0.1,
//             }}
//             animate={{
//               y: [-20, -100],
//               x: [0, particle.id % 2 === 0 ? 20 : -20],
//               opacity: [0, 0.2, 0],
//             }}
//             transition={{
//               duration: particle.duration,
//               repeat: Number.POSITIVE_INFINITY,
//               delay: particle.delay,
//               ease: "linear",
//             }}
//           />
//         ))}
//       </div>

//       <div className="container relative mx-auto px-4 sm:px-6">
//         <motion.div
//           className="mb-20 text-center"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//           style={{ opacity, scale }}
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <Badge
//               variant="outline"
//               className="mb-6 rounded-full border-green-500 bg-[#1A1A1A] px-6 py-2 text-sm font-medium text-green-400"
//             >
//               <motion.span
//                 animate={{ scale: [1, 1.1, 1] }}
//                 transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
//                 className="inline-block"
//               >
//                 <Star className="h-3.5 w-3.5 mr-2 inline-block" />
//               </motion.span>
//               Our Premium Services
//             </Badge>
//           </motion.div>

//           <motion.h2
//             className="mb-4 sm:mb-8 text-2xl sm:text-3xl font-bold text-white md:text-4xl lg:text-5xl"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.7, delay: 0.3 }}
//           >
//             <motion.span
//               className="block"
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//             >
//               Websites That Convert:
//             </motion.span>
//             <motion.span
//               className="block"
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.5 }}
//             >
//               <span className="text-green-400">Portfolio</span> & <span className="text-green-400">Landing Pages</span>
//             </motion.span>
//           </motion.h2>

//           <motion.p
//             className="mx-auto max-w-2xl text-base sm:text-lg text-gray-400"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.7, delay: 0.6 }}
//           >
//             <span className="text-white font-medium">Custom portfolios</span> &{" "}
//             <span className="text-white font-medium">landing pages</span> engineered for traffic, trust, and sales.
//           </motion.p>

//           <motion.div
//             initial={{ scaleX: 0, opacity: 0 }}
//             animate={{ scaleX: 1, opacity: 1 }}
//             transition={{ duration: 0.7, delay: 0.7 }}
//             className="h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent w-48 md:w-64 mx-auto mt-8 opacity-60 origin-center"
//           />
//         </motion.div>

//         <Tabs defaultValue="services" className="w-full" onValueChange={setActiveTab}>
//           <TabsContent value="services" className="mt-0">
//             <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-[1fr,470px] gap-6 sm:gap-8 md:gap-10 lg:gap-14 justify-center">
//               {/* Left side - Service cards */}
//               <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-1 md:gap-10 w-full">
//                 <ServiceCard type="portfolio" index={0} />
//                 <ServiceCard type="landing" index={1} />
//               </div>
//             </div>

            
//           </TabsContent>
//         </Tabs>
//       </div>
//     </section>
//   )
// }
