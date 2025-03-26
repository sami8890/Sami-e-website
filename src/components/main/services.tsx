// "use client"

// import type React from "react"
// import { useState, useEffect, useRef } from "react"
// import { ArrowRight, Code, Layers, Rocket, ImageIcon, Check, Star, X, ChevronDown, ArrowUpRight } from "lucide-react"
// import Image from "next/image"
// import Link from "next/link"
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badege"
// import { Button } from "@/components/ui/button"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
// `

// interface ServiceCardProps {
//   type: "portfolio" | "landing"
//   className?: string
//   index: number
// }

// const ProfessionalButton = ({
//   children,
//   className = "",
//   loading = false,
// }: {
//   children: React.ReactNode
//   className?: string
//   loading?: boolean
// }) => {
//   const [isPressed, setIsPressed] = useState(false)

//   return (
//     <button
//       className={`group relative isolate flex items-center justify-center gap-2
//         overflow-hidden rounded-lg px-8 py-3
//         bg-gradient-to-r from-green-500/90 to-green-500
//         text-base font-medium text-black
//         shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_1px_2px_rgba(0,0,0,0.3)]
//         transition-all duration-300
//         hover:bg-gradient-to-r
//         hover:from-green-500/80
//         hover:to-green-500/90
//         focus:outline-none
//         focus:ring-2
//         focus:ring-green-500/50
//         focus:ring-offset-2
//         focus:ring-offset-[#121212]
//         disabled:cursor-not-allowed
//         disabled:opacity-50
//         ${loading ? "cursor-wait" : "cursor-pointer"}
//         ${isPressed ? "scale-[0.98] shadow-[inset_0_1px_1px_rgba(0,0,0,0.1)]" : ""}
//         ${className}`}
//       disabled={loading}
//       onMouseDown={() => setIsPressed(true)}
//       onMouseUp={() => setIsPressed(false)}
//       onMouseLeave={() => setIsPressed(false)}
//     >
//       {loading ? (
//         <>
//           <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
//             <path
//               className="opacity-75"
//               fill="currentColor"
//               d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//             />
//           </svg>
//           <span>Processing...</span>
//         </>
//       ) : (
//         <>
//           {children}
//           <div className="absolute inset-0 -z-10 bg-green-500/0 transition-colors duration-300 group-hover:bg-black/5" />
//           <div className="absolute inset-0 -z-5 bg-[linear-gradient(110deg,transparent_45%,rgba(255,255,255,0.2),transparent_55%)] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
//         </>
//       )}
//     </button>
//   )
// }

// const GradientBorder = ({ children }: { children: React.ReactNode }) => (
//   <div className="relative rounded-2xl p-[1px] overflow-hidden">
//     <div className="absolute inset-0 rounded-2xl bg-green-500/20" />
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
//       {features.map((feature) => (
//         <div key={feature.title} className="flex items-start gap-3 group">
//           <div className="mt-0.5 rounded-md bg-[#1A1A1A] p-1.5 transition-colors duration-300 group-hover:bg-green-500/10">
//             {feature.icon}
//           </div>
//           <div>
//             <h3 className="text-sm font-medium text-white group-hover:text-green-400 transition-colors duration-300">
//               {feature.title}
//             </h3>
//             <p className="text-sm text-gray-400">{feature.description}</p>
//           </div>
//         </div>
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
//         icon: <ArrowRight className="h-4 w-4 text-green-400" />,
//       },
//       {
//         title: "SEO Optimization",
//         description: "Increase visibility and attract more clients",
//         icon: <Rocket className="h-4 w-4 text-green-400" />,
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
//         icon: <ArrowRight className="h-4 w-4 text-green-400" />,
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

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true)
//     }, index * 300) // Increased delay between cards

//     return () => clearTimeout(timer)
//   }, [index])

//   if (type === "portfolio") {
//     return (
//       <div
//         className={`transition-all duration-1000 transform ${
//           isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
//         }`}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <GradientBorder>
//           <Card
//             className={`border-0 bg-[#121212] p-4 sm:p-6 md:p-8 transition-transform duration-300 ${
//               isHovered ? "transform scale-[1.01] shadow-lg shadow-black/40" : "shadow-md shadow-black/20"
//             }`}
//           >
//             <div className="relative">
//               <CardHeader className="p-0 pb-6">
//                 <Badge
//                   variant="outline"
//                   className="mb-4 w-fit rounded-full border-green-500 bg-[#1A1A1A] px-4 py-1 text-xs font-medium text-green-400"
//                 >
//                   Showcase Your Work
//                 </Badge>
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
//                 <div className="group relative overflow-hidden rounded-2xl">
//                   <Image
//                     src="/portfolio.png"
//                     alt="Portfolio Preview"
//                     width={600}
//                     height={300}
//                     className="w-full object-cover transition-transform duration-700"
//                   />
//                   <div className="absolute  bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                   <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 </div>
//                 <FeatureList features={features.portfolio} />
//                 <p className="text-base leading-relaxed text-gray-400">
//                   Create a stunning portfolio website that showcases your work, skills, and achievements to potential
//                   clients and employers. Stand out from the competition with a professional online presence.
//                 </p>
//               </CardContent>
//               <CardFooter className="p-0 pt-8">
//                 <Link
//                   href="#"
//                   className="group mt-4 flex items-center gap-2 rounded-lg bg-[#1A1A1A] px-8 py-3 text-green-400 transition-all duration-300 hover:bg-green-500 hover:text-black"
//                 >
//                   <span className="text-base font-medium">Start Your Portfolio</span>
//                   <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//                 </Link>
//               </CardFooter>
//             </div>
//           </Card>
//         </GradientBorder>
//       </div>
//     )
//   }

//   if (type === "landing") {
//     return (
//       <div
//         className={`transition-all duration-1000 transform ${
//           isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
//         }`}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <GradientBorder>
//           <Card
//             className={`border-0 bg-[#121212] p-4 sm:p-6 md:p-8 transition-transform duration-300 ${
//               isHovered ? "transform scale-[1.01] shadow-lg shadow-black/40" : "shadow-md shadow-black/20"
//             }`}
//           >
//             <div className="relative">
//               <CardHeader className="space-y-6 p-0">
//                 <div className="flex flex-wrap gap-3">
//                   <Badge
//                     variant="outline"
//                     className="rounded-full border-green-500 bg-[#1A1A1A] px-4 py-1 text-xs font-medium text-green-400"
//                   >
//                     Optimized
//                   </Badge>
//                   <Badge
//                     variant="outline"
//                     className="rounded-full border-green-500 bg-[#1A1A1A] px-4 py-1 text-xs font-medium text-green-400"
//                   >
//                     SEO friendly
//                   </Badge>
//                   <Badge
//                     variant="outline"
//                     className="rounded-full border-green-500 bg-[#1A1A1A] px-4 py-1 text-xs font-medium text-green-400"
//                   >
//                     Boost sales
//                   </Badge>
//                 </div>
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
//                 <div className="group relative overflow-hidden rounded-2xl">
//                   <Image
//                     src="/portfolio.png"
//                     alt="Portfolio Preview"
//                     width={600}
//                     height={300}
//                     className="w-full object-contain transition-transform duration-700"
//                   />
//                   <div className="absolute  bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                   <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 </div>
//                 <p className="text-base leading-relaxed text-gray-400">
//                   Get unique user interfaces, engaging content, mobile-friendly design, and eye-catching animations—all
//                   crafted to elevate your digital presence and drive conversions.
//                 </p>
//                 <FeatureList features={features.landing} />
//               </CardContent>
//               <CardFooter className="p-0 pt-8">
//                 <Link
//                   href="#"
//                   className="group mt-4 flex items-center gap-2 rounded-lg bg-[#1A1A1A] px-8 py-3 text-green-400 transition-all duration-300 hover:bg-green-500 hover:text-black"
//                 >
//                   <span className="text-base font-medium">Boost Your Conversions</span>
//                   <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//                 </Link>
//               </CardFooter>
//             </div>
//           </Card>
//         </GradientBorder>
//       </div>
//     )
//   }

//   return null
// }

// // Modify the VideoPreviewComponent to remove all the overlay information
// const VideoPreviewComponent = ({
//   src,
//   className,
// }: {
//   src: string
//   label?: string
//   className?: string
//   featured?: boolean
//   category?: string
// }) => {
//   const [isHovered, setIsHovered] = useState(false)
//   const [isLoading, setIsLoading] = useState(true)
//   const videoRef = useRef<HTMLVideoElement>(null)

//   useEffect(() => {
//     const videoElement = videoRef.current

//     // Handle loading state
//     if (videoElement) {
//       const handleLoaded = () => setIsLoading(false)

//       videoElement.addEventListener("loadeddata", handleLoaded)

//       // Video is already loaded
//       if (videoElement.readyState >= 2) {
//         setIsLoading(false)
//       }

//       return () => {
//         videoElement.removeEventListener("loadeddata", handleLoaded)
//       }
//     }
//   }, [])

//   return (
//     <div
//       className={`relative overflow-hidden rounded-xl aspect-video bg-black/20 shadow-xl mx-auto w-full group ${className}`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {isLoading && (
//         <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-10">
//           <div className="w-12 h-12 rounded-full border-4 border-green-500/30 border-t-green-500 animate-spin"></div>
//         </div>
//       )}

//       {/* Video with subtle parallax effect on hover */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div
//           className="w-full h-full transition-transform duration-700 ease-out"
//           style={{
//             transform: isHovered ? "scale(1.05) translate3d(0, -5px, 0)" : "scale(1) translate3d(0, 0, 0)",
//           }}
//         >
//           <video
//             ref={videoRef}
//             src={src}
//             autoPlay
//             muted
//             loop
//             playsInline
//             className="w-full h-full object-cover"
//             onLoadedData={() => setIsLoading(false)}
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

// // Add a new component for testimonials
// const TestimonialCard = ({
//   quote,
//   author,
//   role,
//   company,
//   rating = 5,
// }: {
//   quote: string
//   author: string
//   role: string
//   company: string
//   rating?: number
// }) => {
//   return (
//     <div className="bg-[#121212] rounded-xl p-6 border border-zinc-800 transition-all duration-300 hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/5">
//       <div className="flex gap-1 mb-4">
//         {[...Array(5)].map((_, i) => (
//           <Star key={i} className={`h-4 w-4 ${i < rating ? "text-green-400 fill-green-400" : "text-zinc-700"}`} />
//         ))}
//       </div>
//       <blockquote className="text-gray-300 mb-4 italic">"{quote}"</blockquote>
//       <div className="flex items-center gap-3">
//         <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold">
//           {author.charAt(0)}
//         </div>
//         <div>
//           <p className="text-white font-medium">{author}</p>
//           <p className="text-gray-400 text-sm">
//             {role}, {company}
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// // Update the PricingTier component to include a "contentManagement" prop
// // Replace the existing PricingTier component with this improved version:

// const PricingTier = ({
//   title,
//   price,
//   description,
//   features,
//   isPopular = false,
//   contentManagement = false,
// }: {
//   title: string
//   price: string
//   description: string
//   features: string[]
//   isPopular?: boolean
//   contentManagement?: boolean
// }) => {
//   const [isHovered, setIsHovered] = useState(false)

//   return (
//     <div
//       className={`relative rounded-xl overflow-hidden ${
//         isPopular ? "border-2 border-green-500" : "border border-zinc-800"
//       } transition-all duration-300 ${
//         isHovered ? "transform scale-[1.02] shadow-lg shadow-black/40" : "shadow-md shadow-black/20"
//       }`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {isPopular && (
//         <div className="absolute top-0 right-0 bg-green-500 text-black px-4 py-1 text-xs font-medium">Most Popular</div>
//       )}
//       <div className="p-6 bg-[#121212]">
//         <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
//         <div className="mb-4">
//           <span className="text-3xl font-bold text-white">{price}</span>
//           {price !== "Custom" && <span className="text-gray-400 ml-1">/project</span>}
//         </div>
//         <p className="text-gray-400 mb-6">{description}</p>
//         <ul className="space-y-3 mb-6">
//           {features.map((feature, index) => (
//             <li key={index} className="flex items-start gap-2 group">
//               <Check className="h-5 w-5 text-green-400 shrink-0 mt-0.5 transition-transform duration-200" />
//               <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-200">
//                 {feature}
//               </span>
//             </li>
//           ))}
//         </ul>

//         {contentManagement && (
//           <div className="mb-6 p-4 bg-green-500/10 rounded-lg border border-green-500/20 transition-all duration-300 hover:border-green-500/40 hover:bg-green-500/15">
//             <h4 className="text-green-400 font-medium mb-2 flex items-center gap-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="lucide lucide-edit"
//               >
//                 <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
//                 <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
//               </svg>
//               Sanity CMS Included
//             </h4>
//             <p className="text-sm text-gray-300">
//               Update your website anytime without coding knowledge. Simply log in, edit your text and images, and
//               publish with one click.
//             </p>
//             <div className="mt-3 flex flex-wrap gap-2">
//               <span className="inline-flex items-center rounded-full bg-green-500/20 px-2.5 py-0.5 text-xs font-medium text-green-400">
//                 User-friendly
//               </span>
//               <span className="inline-flex items-center rounded-full bg-green-500/20 px-2.5 py-0.5 text-xs font-medium text-green-400">
//                 No coding
//               </span>
//               <span className="inline-flex items-center rounded-full bg-green-500/20 px-2.5 py-0.5 text-xs font-medium text-green-400">
//                 Instant updates
//               </span>
//             </div>
//           </div>
//         )}

//         <Button
//           className={`w-full ${
//             isPopular ? "bg-green-500 hover:bg-green-600 text-black" : "bg-zinc-800 hover:bg-zinc-700 text-white"
//           } transition-all duration-300 ${isHovered ? "transform scale-[1.02]" : ""}`}
//         >
//           Get Started
//         </Button>
//       </div>
//     </div>
//   )
// }

// // Add a comparison table component
// // Replace the existing PricingComparisonTable component with this improved version:

// const PricingComparisonTable = ({ plans }: { plans: any[] }) => {
//   return (
//     <div className="mt-8 overflow-x-auto pb-4">
//       <div className="min-w-[768px]">
//         {/* Mobile-friendly header */}
//         <div className="grid grid-cols-4 gap-4 mb-4 pb-4 border-b border-zinc-800">
//           <div className="text-white font-medium">Feature</div>
//           {plans.map((plan, index) => (
//             <div key={index} className="text-white font-medium text-center">
//               {plan.title}
//               {plan.isPopular && (
//                 <span className="ml-2 inline-block px-2 py-0.5 text-xs bg-green-500 text-black rounded-full">
//                   Popular
//                 </span>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Price row */}
//         <div className="grid grid-cols-4 gap-4 mb-4 pb-4 border-b border-zinc-800">
//           <div className="text-gray-400">Price</div>
//           {plans.map((plan, index) => (
//             <div key={index} className="text-center">
//               <span className="text-white font-bold">{plan.price}</span>
//               {plan.price !== "Custom" && <span className="text-gray-400 text-sm">/project</span>}
//             </div>
//           ))}
//         </div>

//         {/* Pages row */}
//         <div className="grid grid-cols-4 gap-4 mb-4 pb-4 border-b border-zinc-800">
//           <div className="text-gray-400">Pages</div>
//           <div className="text-center text-white">Up to 5</div>
//           <div className="text-center text-white">Up to 10</div>
//           <div className="text-center text-white">Unlimited</div>
//         </div>

//         {/* Content Management row - Highlight this row */}
//         <div className="grid grid-cols-4 gap-4 mb-4 pb-4 border-b border-zinc-800 bg-green-500/5 -mx-4 px-4 py-2 rounded-md">
//           <div className="text-green-400 font-medium">Sanity CMS</div>
//           <div className="text-center">
//             <X className="inline-block h-5 w-5 text-red-400" />
//             <div className="text-xs text-gray-400 mt-1">Not included</div>
//           </div>
//           <div className="text-center">
//             <Check className="inline-block h-5 w-5 text-green-400" />
//             <div className="text-xs text-green-400 mt-1">Basic version</div>
//           </div>
//           <div className="text-center">
//             <Check className="inline-block h-5 w-5 text-green-400" />
//             <div className="text-xs text-green-400 mt-1">Advanced version</div>
//           </div>
//         </div>

//         {/* Content editing row */}
//         <div className="grid grid-cols-4 gap-4 mb-4 pb-4 border-b border-zinc-800">
//           <div className="text-gray-400">Content Editing</div>
//           <div className="text-center text-white">Developer needed</div>
//           <div className="text-center text-white">Self-service</div>
//           <div className="text-center text-white">Self-service</div>
//         </div>

//         {/* Support Period row */}
//         <div className="grid grid-cols-4 gap-4 mb-4 pb-4 border-b border-zinc-800">
//           <div className="text-gray-400">Support Period</div>
//           <div className="text-center text-white">15 Days</div>
//           <div className="text-center text-white">1 month</div>
//           <div className="text-center text-white">3 months</div>
//         </div>

//         {/* SEO Optimization row */}
//         <div className="grid grid-cols-4 gap-4 mb-4 pb-4 border-b border-zinc-800">
//           <div className="text-gray-400">SEO Optimization</div>
//           <div className="text-center text-white">Basic</div>
//           <div className="text-center text-white">Advanced</div>
//           <div className="text-center text-white">Comprehensive</div>
//         </div>

//         {/* Revisions row */}
//         <div className="grid grid-cols-4 gap-4 mb-4 pb-4 border-b border-zinc-800">
//           <div className="text-gray-400">Revisions</div>
//           <div className="text-center text-white">2 rounds</div>
//           <div className="text-center text-white">3 rounds</div>
//           <div className="text-center text-white">Unlimited</div>
//         </div>

//         {/* CTA buttons */}
//         <div className="grid grid-cols-4 gap-4">
//           <div className="text-gray-400"></div>
//           {plans.map((plan, index) => (
//             <div key={index} className="text-center">
//               <Button
//                 className={`${
//                   plan.isPopular
//                     ? "bg-green-500 hover:bg-green-600 text-black"
//                     : "bg-zinc-800 hover:bg-zinc-700 text-white"
//                 }`}
//               >
//                 Choose {plan.title}
//               </Button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Mobile-friendly comparison cards - only visible on small screens */}
//       <div className="md:hidden mt-8 space-y-6">
//         {plans.map((plan, index) => (
//           <div key={index} className="bg-[#121212] rounded-lg border border-zinc-800 p-4">
//             <div className="flex justify-between items-center mb-4">
//               <h4 className="text-white font-medium">{plan.title}</h4>
//               {plan.isPopular && (
//                 <span className="px-2 py-0.5 text-xs bg-green-500 text-black rounded-full">Popular</span>
//               )}
//             </div>
//             <div className="mb-4">
//               <span className="text-2xl font-bold text-white">{plan.price}</span>
//               {plan.price !== "Custom" && <span className="text-gray-400 ml-1">/project</span>}
//             </div>

//             <div className="space-y-3 mb-4">
//               <div className="flex justify-between border-b border-zinc-800 pb-2">
//                 <span className="text-gray-400 text-sm">Pages</span>
//                 <span className="text-white text-sm">
//                   {index === 0 ? "Up to 5" : index === 1 ? "Up to 10" : "Unlimited"}
//                 </span>
//               </div>

//               <div className="flex justify-between border-b border-zinc-800 pb-2">
//                 <span className="text-green-400 text-sm font-medium">Sanity CMS</span>
//                 <span className="text-white text-sm">
//                   {index === 0 ? (
//                     <X className="inline-block h-4 w-4 text-red-400" />
//                   ) : index === 1 ? (
//                     <Check className="inline-block h-4 w-4 text-green-400" />
//                   ) : (
//                     <span className="flex items-center">
//                       <Check className="inline-block h-4 w-4 text-green-400 mr-1" />
//                       <span className="text-green-400 text-xs">Advanced</span>
//                     </span>
//                   )}
//                 </span>
//               </div>

//               <div className="flex justify-between border-b border-zinc-800 pb-2">
//                 <span className="text-gray-400 text-sm">Support</span>
//                 <span className="text-white text-sm">
//                   {index === 0 ? "15 Days" : index === 1 ? "1 month" : "3 months"}
//                 </span>
//               </div>

//               <div className="flex justify-between border-b border-zinc-800 pb-2">
//                 <span className="text-gray-400 text-sm">Revisions</span>
//                 <span className="text-white text-sm">
//               </div>

//               <div className="flex justify-between border-b border-zinc-800 pb-2">
//                 <span className="text-gray-400 text-sm">Revisions</span>
//                 <span className="text-white text-sm">
//                   {index === 0 ? "2 rounds" : index === 1 ? "3 rounds" : "Unlimited"}
//                 </span>
//               </div>
//             </div>

//             <Button
//               className={`w-full ${
//                 plan.isPopular
//                   ? "bg-green-500 hover:bg-green-600 text-black"
//                   : "bg-zinc-800 hover:bg-zinc-700 text-white"
//               }`}
//             >
//               Choose {plan.title}
//             </Button>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// // Add a new SanityCmsFeatures component to better explain Sanity CMS in the pricing section
// // Add this component after the PricingComparisonTable component:

// const SanityCmsFeatures = () => {
//   return (
//     <div className="mt-12 bg-[#121212] rounded-xl border border-green-500/20 overflow-hidden">
//       <div className="p-6 md:p-8">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
//           <div>
//             <Badge
//               variant="outline"
//               className="mb-2 rounded-full border-green-500 bg-[#1A1A1A] px-4 py-1 text-xs font-medium text-green-400"
//             >
//               Included with Premium & Enterprise
//             </Badge>
//             <h3 className="text-xl md:text-2xl font-bold text-white">Sanity CMS: Update Your Site Without Coding</h3>
//           </div>
//           <Button className="bg-green-500 hover:bg-green-600 text-black">See Demo</Button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           <div className="bg-[#1A1A1A] rounded-lg p-5 border border-zinc-800 transition-all duration-300 hover:border-green-500/30">
//             <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="text-green-400"
//               >
//                 <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
//                 <polyline points="10 17 15 12 10 7" />
//                 <line x1="15" y1="12" x2="3" y2="12" />
//               </svg>
//             </div>
//             <h4 className="text-white font-medium mb-2">Simple Login</h4>
//             <p className="text-gray-400 text-sm">Access your website dashboard with a secure, simple login process.</p>
//           </div>

//           <div className="bg-[#1A1A1A] rounded-lg p-5 border border-zinc-800 transition-all duration-300 hover:border-green-500/30">
//             <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="text-green-400"
//               >
//                 <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
//                 <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
//               </svg>
//             </div>
//             <h4 className="text-white font-medium mb-2">Edit Like a Document</h4>
//             <p className="text-gray-400 text-sm">Change text and images as easily as editing a Word document.</p>
//           </div>

//           <div className="bg-[#1A1A1A] rounded-lg p-5 border border-zinc-800 transition-all duration-300 hover:border-green-500/30">
//             <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="text-green-400"
//               >
//                 <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
//                 <circle cx="12" cy="12" r="3" />
//               </svg>
//             </div>
//             <h4 className="text-white font-medium mb-2">Preview Changes</h4>
//             <p className="text-gray-400 text-sm">See exactly how your website will look before making it live.</p>
//           </div>

//           <div className="bg-[#1A1A1A] rounded-lg p-5 border border-zinc-800 transition-all duration-300 hover:border-green-500/30">
//             <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="text-green-400"
//               >
//                 <path d="M12 2v4" />
//                 <path d="M12 18v4" />
//                 <path d="M4.93 4.93l2.83 2.83" />
//                 <path d="M16.24 16.24l2.83 2.83" />
//                 <path d="M2 12h4" />
//                 <path d="M18 12h4" />
//                 <path d="M4.93 19.07l2.83-2.83" />
//                 <path d="M16.24 7.76l2.83-2.83" />
//               </svg>
//             </div>
//             <h4 className="text-white font-medium mb-2">Publish Instantly</h4>
//             <p className="text-gray-400 text-sm">Make your changes live with a single click whenever you're ready.</p>
//           </div>
//         </div>

//         <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="bg-green-500/10 rounded-lg p-5 border border-green-500/20">
//             <h4 className="text-green-400 font-medium mb-2 flex items-center gap-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="lucide lucide-check-circle"
//               >
//                 <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
//                 <polyline points="22 4 12 14.01 9 11.01" />
//               </svg>
//               No Technical Skills Needed
//             </h4>
//             <p className="text-gray-300 text-sm">
//               If you can use social media or write an email, you can update your website.
//             </p>
//           </div>

//           <div className="bg-green-500/10 rounded-lg p-5 border border-green-500/20">
//             <h4 className="text-green-400 font-medium mb-2 flex items-center gap-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="lucide lucide-check-circle"
//               >
//                 <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
//                 <polyline points="22 4 12 14.01 9 11.01" />
//               </svg>
//               No Monthly Fees
//             </h4>
//             <p className="text-gray-300 text-sm">
//               Unlike other CMS platforms, there are no recurring subscription costs.
//             </p>
//           </div>

//           <div className="bg-green-500/10 rounded-lg p-5 border border-green-500/20">
//             <h4 className="text-green-400 font-medium mb-2 flex items-center gap-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="lucide lucide-check-circle"
//               >
//                 <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
//                 <polyline points="22 4 12 14.01 9 11.01" />
//               </svg>
//               Free Training Included
//             </h4>
//             <p className="text-gray-300 text-sm">
//               We'll teach you how to use the system with a personalized training session.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// // Update the pricing section in the ServicesShowcase component
// // Find the TabsContent with value="pricing" and replace it with this improved version:

// // In the ServicesShowcase component, find the TabsContent with value="pricing" and replace it with:
// // Look for: <TabsContent value="pricing"> and replace everything until </TabsContent>
// </TabsContent>

// // Add this new component at the top of the file with the other components
// const ScrollToTopButton = () => {
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     const toggleVisibility = () => {
//       if (window.pageYOffset > 500) {
//         setIsVisible(true)
//       } else {
//         setIsVisible(false)
//       }
//     }

//     window.addEventListener("scroll", toggleVisibility)
//     return () => window.removeEventListener("scroll", toggleVisibility)
//   }, [])

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     })
//   }

//   return (
//     <div
//       className={`fixed bottom-8 right-8 z-50 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
//     ></div>
//   )
// }

// // Add a FAQ component
// const FAQItem = ({
//   question,
//   answer,
//   isOpen,
//   onClick,
// }: {
//   question: string
//   answer: string
//   isOpen: boolean
//   onClick: () => void
// }) => {
//   return (
//     <div className="border-b border-zinc-800 last:border-b-0">
//       <button
//         className="flex w-full items-center justify-between py-4 text-left text-white font-medium focus:outline-none"
//         onClick={onClick}
//       >
//         {question}
//         <ChevronDown
//           className={`h-5 w-5 text-green-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
//         />
//       </button>
//       <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-4" : "max-h-0"}`}>
//         <p className="text-gray-400">{answer}</p>
//       </div>
//     </div>
//   )
// }

// // Add a new SanityCmsExplainer component after the FAQItem component and before the ServicesShowcase component

// // Add this new component after the FAQItem component
// const SanityCmsExplainer = () => {
//   const [activeStep, setActiveStep] = useState(1)
//   const [isOpen, setIsOpen] = useState(false)

//   const steps = [
//     {
//       title: "Log in to your dashboard",
//       description: "Access your website content with a simple login - just like checking your email.",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="text-green-400"
//         >
//           <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
//           <polyline points="10 17 15 12 10 7" />
//           <line x1="15" y1="12" x2="3" y2="12" />
//         </svg>
//       ),
//     },
//     {
//       title: "Edit your content",
//       description: "Change text and images as easily as editing a Word document - no coding needed.",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="text-green-400"
//         >
//           <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
//           <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
//         </svg>
//       ),
//     },
//     {
//       title: "Preview your changes",
//       description: "See exactly how your website will look before making it live.",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="text-green-400"
//         >
//           <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
//           <circle cx="12" cy="12" r="3" />
//         </svg>
//       ),
//     },
//     {
//       title: "Publish with one click",
//       description: "Make your changes live instantly with a single button click.",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="text-green-400"
//         >
//           <path d="M12 2v4" />
//           <path d="M12 18v4" />
//           <path d="M4.93 4.93l2.83 2.83" />
//           <path d="M16.24 16.24l2.83 2.83" />
//           <path d="M2 12h4" />
//           <path d="M18 12h4" />
//           <path d="M4.93 19.07l2.83-2.83" />
//           <path d="M16.24 7.76l2.83-2.83" />
//         </svg>
//       ),
//     },
//   ]

//   return (
//     <div className="mt-12 bg-[#121212] rounded-xl border border-zinc-800 overflow-hidden transition-all duration-300 hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/5">
//       <div className="p-6 md:p-8">
//         <div className="flex justify-between items-center mb-6">
//           <div>
//             <h3 className="text-xl md:text-2xl font-bold text-white">What is Sanity CMS?</h3>
//             <p className="text-gray-400 mt-2">The easy way to update your website without any technical knowledge</p>
//           </div>
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="flex items-center gap-2 bg-green-500/10 hover:bg-green-500/20 text-green-400 px-4 py-2 rounded-lg transition-colors duration-300"
//           >
//             {isOpen ? "Hide Explanation" : "Learn More"}
//             <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
//           </button>
//         </div>

//         {isOpen && (
//           <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//             <div className="space-y-6">
//               <p className="text-gray-300">Sanity CMS is like a simple word processor for your website. It lets you:</p>

//               <div className="space-y-4">
//                 {steps.map((step, index) => (
//                   <button
//                     key={index}
//                     className={`w-full text-left p-4 rounded-lg border transition-all duration-300 flex items-start gap-4 ${
//                       activeStep === index + 1
//                         ? "border-green-500 bg-green-500/10"
//                         : "border-zinc-800 hover:border-green-500/30 hover:bg-[#1A1A1A]"
//                     }`}
//                     onClick={() => setActiveStep(index + 1)}
//                   >
//                     <div
//                       className={`mt-1 rounded-full p-2 ${
//                         activeStep === index + 1 ? "bg-green-500/20" : "bg-[#1A1A1A]"
//                       }`}
//                     >
//                       {step.icon}
//                     </div>
//                     <div>
//                       <h4 className={`font-medium ${activeStep === index + 1 ? "text-green-400" : "text-white"}`}>
//                         {index + 1}. {step.title}
//                       </h4>
//                       <p className="text-gray-400 text-sm mt-1">{step.description}</p>
//                     </div>
//                   </button>
//                 ))}
//               </div>

//               <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
//                 <p className="text-green-400 font-medium flex items-center gap-2">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="lucide lucide-lightbulb"
//                   >
//                     <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
//                     <path d="M9 18h6" />
//                     <path d="M10 22h4" />
//                   </svg>
//                   No technical skills required
//                 </p>
//                 <p className="text-gray-300 text-sm mt-2">
//                   If you can use social media or write an email, you can update your website!
//                 </p>
//               </div>
//             </div>

//             <div className="relative">
//               {activeStep === 1 && (
//                 <div className="bg-[#1A1A1A] rounded-lg border border-zinc-800 overflow-hidden shadow-lg shadow-black/40 transition-all duration-500">
//                   <div className="bg-black p-3 flex items-center justify-between border-b border-zinc-800">
//                     <div className="flex items-center gap-2">
//                       <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                       <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                       <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                     </div>
//                     <div className="text-xs text-gray-400">Sanity Login</div>
//                   </div>
//                   <div className="p-6 space-y-6">
//                     <div className="flex justify-center">
//                       <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="40"
//                           height="40"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="text-green-400"
//                         >
//                           <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
//                           <circle cx="12" cy="7" r="4"></circle>
//                         </svg>
//                       </div>
//                     </div>
//                     <div className="space-y-4">
//                       <div>
//                         <label className="text-xs text-gray-400 block mb-1">Email</label>
//                         <div className="h-10 bg-black/50 rounded border border-zinc-700 px-3 flex items-center text-white">
//                           you@example.com
//                         </div>
//                       </div>
//                       <div>
//                         <label className="text-xs text-gray-400 block mb-1">Password</label>
//                         <div className="h-10 bg-black/50 rounded border border-zinc-700 px-3 flex items-center text-white">
//                           ••••••••
//                         </div>
//                       </div>
//                     </div>
//                     <div className="pt-2">
//                       <div className="bg-green-500 text-black font-medium py-2 rounded text-center">Log In</div>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {activeStep === 2 && (
//                 <div className="bg-[#1A1A1A] rounded-lg border border-zinc-800 overflow-hidden shadow-lg shadow-black/40 transition-all duration-500">
//                   <div className="bg-black p-3 flex items-center justify-between border-b border-zinc-800">
//                     <div className="flex items-center gap-2">
//                       <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                       <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                       <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                     </div>
//                     <div className="text-xs text-gray-400">Sanity Editor</div>
//                   </div>
//                   <div className="p-4">
//                     <div className="flex gap-4">
//                       <div className="w-1/3 space-y-3">
//                         <div className="h-8 bg-green-500/20 rounded flex items-center px-3 text-green-400 text-sm font-medium">
//                           Home Page
//                         </div>
//                         <div className="h-8 bg-black/30 rounded flex items-center px-3 text-gray-300 text-sm">
//                           About Us
//                         </div>
//                         <div className="h-8 bg-black/30 rounded flex items-center px-3 text-gray-300 text-sm">
//                           Services
//                         </div>
//                         <div className="h-8 bg-black/30 rounded flex items-center px-3 text-gray-300 text-sm">
//                           Contact
//                         </div>
//                       </div>
//                       <div className="w-2/3 bg-black/20 p-3 rounded border border-zinc-800">
//                         <div className="mb-4">
//                           <div className="text-xs text-gray-400 mb-1">Heading</div>
//                           <div className="h-10 bg-black/50 rounded border border-zinc-700 px-3 flex items-center text-white">
//                             Welcome to Our Website
//                           </div>
//                         </div>
//                         <div className="mb-4">
//                           <div className="text-xs text-gray-400 mb-1">Description</div>
//                           <div className="h-20 bg-black/50 rounded border border-green-500/50 px-3 py-2 text-white text-sm">
//                             We provide top-quality services to help your business grow and succeed in today's
//                             competitive market.
//                           </div>
//                         </div>
//                         <div>
//                           <div className="text-xs text-gray-400 mb-1">Featured Image</div>
//                           <div className="h-24 bg-black/50 rounded border border-zinc-700 flex items-center justify-center">
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               width="24"
//                               height="24"
//                               viewBox="0 0 24 24"
//                               fill="none"
//                               stroke="currentColor"
//                               strokeWidth="2"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               className="text-gray-400"
//                             >
//                               <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
//                               <circle cx="9" cy="9" r="2" />
//                               <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
//                             </svg>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {activeStep === 3 && (
//                 <div className="bg-[#1A1A1A] rounded-lg border border-zinc-800 overflow-hidden shadow-lg shadow-black/40 transition-all duration-500">
//                   <div className="bg-black p-3 flex items-center justify-between border-b border-zinc-800">
//                     <div className="flex items-center gap-2">
//                       <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                       <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                       <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                     </div>
//                     <div className="text-xs text-gray-400">Preview Mode</div>
//                   </div>
//                   <div className="p-4">
//                     <div className="bg-black/30 rounded-lg p-4 border border-zinc-800">
//                       <div className="flex justify-between items-center mb-4">
//                         <div className="text-xs text-gray-400">Preview of your changes</div>
//                         <div className="flex items-center gap-2">
//                           <div className="bg-black/50 text-gray-300 text-xs px-2 py-1 rounded">Desktop</div>
//                           <div className="bg-black/50 text-gray-300 text-xs px-2 py-1 rounded">Mobile</div>
//                         </div>
//                       </div>

//                       <div className="bg-black/50 rounded-lg p-4 border border-zinc-800">
//                         <div className="text-xl font-bold text-white mb-2">Welcome to Our Website</div>
//                         <div className="text-gray-300 text-sm mb-4">
//                           We provide top-quality services to help your business grow and succeed in today's competitive
//                           market.
//                         </div>
//                         <div className="h-32 bg-green-500/10 rounded flex items-center justify-center">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="32"
//                             height="32"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             className="text-green-400"
//                           >
//                             <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
//                             <circle cx="9" cy="9" r="2" />
//                             <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
//                           </svg>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {activeStep === 4 && (
//                 <div className="bg-[#1A1A1A] rounded-lg border border-zinc-800 overflow-hidden shadow-lg shadow-black/40 transition-all duration-500">
//                   <div className="bg-black p-3 flex items-center justify-between border-b border-zinc-800">
//                     <div className="flex items-center gap-2">
//                       <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                       <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                       <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                     </div>
//                     <div className="text-xs text-gray-400">Publish Changes</div>
//                   </div>
//                   <div className="p-6 space-y-6">
//                     <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/30">
//                       <div className="flex items-center gap-3 mb-2">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="20"
//                           height="20"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="text-green-400"
//                         >
//                           <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
//                           <path d="m9 12 2 2 4-4" />
//                         </svg>
//                         <div className="text-green-400 font-medium">Changes Ready to Publish</div>
//                       </div>
//                       <p className="text-gray-300 text-sm">
//                         Your website will be updated immediately after publishing.
//                       </p>
//                     </div>

//                     <div className="space-y-3">
//                       <div className="flex items-center justify-between bg-black/30 p-3 rounded border border-zinc-800">
//                         <div className="text-sm text-white">Updated homepage text</div>
//                         <div className="text-xs text-gray-400">Just now</div>
//                       </div>
//                       <div className="flex items-center justify-between bg-black/30 p-3 rounded border border-zinc-800">
//                         <div className="text-sm text-white">Changed featured image</div>
//                         <div className="text-xs text-gray-400">Just now</div>
//                       </div>
//                     </div>

//                     <div className="pt-2 flex gap-3">
//                       <div className="bg-zinc-800 text-white font-medium py-2 px-4 rounded text-center flex-1">
//                         Save Draft
//                       </div>
//                       <div className="bg-green-500 text-black font-medium py-2 px-4 rounded text-center flex-1 flex items-center justify-center gap-2">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="18"
//                           height="18"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         >
//                           <path d="M5 12h14" />
//                           <path d="m12 5 7 7-7 7" />
//                         </svg>
//                         Publish Now
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-green-500/30 rounded-br-xl"></div>
//               <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-green-500/30 rounded-tl-xl"></div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// // Add the SanityCmsExplainer component to the ServicesShowcase component
// // Inside the ServicesShowcase component, find the TabsContent with value="services"
// // Add the SanityCmsExplainer component after the main services content and before the closing TabsContent tag

// // In the ServicesShowcase component, add the SanityCmsExplainer component after the main services grid
// // Find this section in the code:
// // </div>
// // </div>
// //
// // {/* Testimonials and FAQ sections removed */}
// // </TabsContent>

// // And add the SanityCmsExplainer component right before the closing TabsContent tag:
// // </div>
// // </div>
// //
// // <SanityCmsExplainer />
// //
// // {/* Testimonials and FAQ sections removed */}
// // </TabsContent>

// // In the main ServicesShowcase component, remove the testimonials and FAQ sections
// export default function ServicesShowcase() {
//   const [isVisible, setIsVisible] = useState(false)
//   const [scrollY, setScrollY] = useState(0)
//   // Add this state to the main component
//   const [openFaq, setOpenFaq] = useState<number | null>(null)
//   const [activeTab, setActiveTab] = useState("services")
//   const [showComparison, setShowComparison] = useState(false)

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

//   // Update the pricingTiers array in the ServicesShowcase component to include the contentManagement property
//   const pricingTiers = [
//     {
//       title: "Basic Portfolio",
//       price: "$499",
//       description: "Perfect for individuals looking to establish an online presence",
//       features: ["Responsive design", "Up to 5 pages", "Basic SEO optimization", "Contact form", "15 Days of support"],
//       contentManagement: false,
//     },
//     {
//       title: "Premium Landing Page",
//       price: "$1099",
//       description: "Ideal for businesses focused on conversions and growth",
//       features: [
//         "High-converting design",
//         "A/B testing setup",
//         "Advanced analytics",
//         "Lead capture forms",
//         "1 months of support",
//         "Performance optimization",
//         "Sanity CMS integration",
//       ],
//       isPopular: true,
//       contentManagement: true,
//     },
//     {
//       title: "Enterprise Solution",
//       price: "Custom",
//       description: "Comprehensive digital presence for established businesses",
//       features: [
//         "Custom design & development",
//         "Multiple page types",
//         "Advanced SEO strategy",
//         "Integration with existing systems",
//         "3 months of priority support",
//         "Regular performance reports",
//         "Advanced Sanity CMS integration",
//       ],
//       contentManagement: true,
//     },
//   ]

//   const testimonials = [
//     {
//       quote:
//         "The content management system is incredibly intuitive. I can update my website without any technical knowledge!",
//       author: "Sarah Johnson",
//       role: "Photographer",
//       company: "Sarah J Photography",
//       rating: 5,
//     },
//     {
//       quote:
//         "Our landing page conversion rate increased by 45% after working with this team. The design is stunning and performs amazingly.",
//       author: "Michael Chen",
//       role: "Marketing Director",
//       company: "TechGrowth Inc.",
//       rating: 5,
//     },
//     {
//       quote:
//         "The enterprise solution perfectly integrated with our existing systems. Support has been responsive and helpful.",
//       author: "Jessica Williams",
//       role: "CEO",
//       company: "Creative Solutions",
//       rating: 4,
//     },
//   ]

//   const faqs = [
//     {
//       question: "How long does it take to build a website?",
//       answer:
//         "Typically, a basic portfolio website takes 2-3 weeks, a premium landing page 3-4 weeks, and an enterprise solution 6-8 weeks. The timeline can vary based on project complexity and feedback cycles.",
//     },
//     {
//       question: "Do I need technical knowledge to update my website?",
//       answer:
//         "Not at all! Our Premium and Enterprise packages include Sanity CMS, which allows you to update content as easily as editing a document. No coding knowledge required.",
//     },
//     {
//       question: "Can I upgrade my package later?",
//       answer:
//         "You can start with a Basic Portfolio and upgrade to include Sanity CMS or other premium features later. We'll provide a custom quote based on your specific needs.",
//     },
//     {
//       question: "What happens after my support period ends?",
//       answer:
//         "After your included support period ends, you can purchase additional support packages or pay for support on an as-needed basis. We're always here to help!",
//     },
//     {
//       question: "Is hosting included in the price?",
//       answer:
//         "Yes, all packages include the first year of hosting at no additional cost. After the first year, hosting is available at a competitive monthly rate.",
//     },
//   ]

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

//   return (
//     <section className="force-sticky relative min-h-[200vh] bg-black py-8 sm:py-12 md:py-16 lg:py-24">
//       {/* Keep the background elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div
//           className="absolute -top-20 -right-20 w-96 h-96 bg-green-500/5 rounded-full blur-3xl transition-transform duration-1000 ease-out"
//           style={{ transform: `translateY(${scrollY * 0.05}px)` }}
//         />
//         <div
//           className="absolute bottom-20 right-1/4 w-64 h-64 bg-green-500/4 rounded-full blur-3xl transition-transform duration-1000 ease-out"
//           style={{ transform: `translateY(${scrollY * -0.03}px)` }}
//         />
//         <div
//           className="absolute top-1/3 left-1/4 w-72 h-72 bg-green-500/3 rounded-full blur-3xl opacity-30 transition-transform duration-1000 ease-out"
//           style={{ transform: `translateY(${scrollY * 0.02}px)` }}
//         />
//       </div>

//       <div className="container relative mx-auto px-4 sm:px-6">
//         <div
//           className={`mb-20 text-center transition-all duration-700 transform ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}
//         >
//           <Badge
//             variant="outline"
//             className="mb-6 rounded-full border-green-500 bg-[#1A1A1A] px-6 py-2 text-sm font-medium text-green-400"
//           >
//             Our Premium Services
//           </Badge>
//           <h2 className="mb-4 sm:mb-8 text-2xl sm:text-3xl font-bold text-white md:text-4xl lg:text-5xl">
//             <span className="block">Digital Experiences</span>
//             <span className="block">
//               <span className="text-green-400">Designed</span> for Impact
//             </span>
//           </h2>
//           <p className="mx-auto max-w-2xl text-base sm:text-lg text-gray-400">
//             From <span className="text-white font-medium">portfolios</span> to{" "}
//             <span className="text-white font-medium">landing pages</span> that drive results.
//           </p>
//         </div>

//         <Tabs defaultValue="services" className="w-full" onValueChange={setActiveTab}>
//           <div className="flex justify-center mb-12">
//             <TabsList className="grid w-full max-w-md grid-cols-2 bg-[#1A1A1A]">
//               <TabsTrigger value="services" className="data-[state=active]:bg-green-500 data-[state=active]:text-black">
//                 Services
//               </TabsTrigger>
//               <TabsTrigger value="pricing" className="data-[state=active]:bg-green-500 data-[state=active]:text-black">
//                 Pricing
//               </TabsTrigger>
//             </TabsList>
//           </div>

//           <TabsContent value="services" className="mt-0">
//             <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-[1fr,470px] gap-6 sm:gap-8 md:gap-10 lg:gap-14 justify-center">
//               {/* Left side - Service cards */}
//               <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-1 md:gap-10 w-full">
//                 <ServiceCard type="portfolio" index={0} />
//                 <ServiceCard type="landing" index={1} />
//               </div>

//               {/* Right side - Sticky videos section */}
//               <div className="w-full mt-8 lg:mt-0 space-y-6 sm:space-y-8 order-first lg:order-last">
//                 <div
//                   className="lg:sticky top-24"
//                   style={{
//                     position: "sticky",
//                     top: "6rem",
//                     height: "fit-content",
//                   }}
//                 >
//                   <div className="flex items-center justify-between mb-4">
//                     <h3 className="text-xl font-bold text-white text-center lg:text-left">Portfolio Preview</h3>
//                   </div>

//                   <div className="relative transition-all duration-500 ease-out mb-6 sm:mb-8">
//                     <VideoPreviewComponent
//                       src="/dasm.mp4"
//                       className="shadow-[0_10px_50px_rgba(34,197,94,0.15)] hover:shadow-[0_15px_60px_rgba(34,197,94,0.25)] transition-all duration-300"
//                     />
//                     <div className="absolute -top-4 -right-4 w-8 h-8 sm:w-16 sm:h-16 md:w-20 md:h-20 border-t-2 border-r-2 border-green-500/30 rounded-tr-xl"></div>
//                     <div className="absolute -bottom-4 -left-4 w-8 h-8 sm:w-16 sm:h-16 md:w-20 md:h-20 border-b-2 border-l-2 border-green-500/30 rounded-bl-xl"></div>
//                   </div>

//                   <div className="relative transition-all duration-500 ease-out">
//                     <VideoPreviewComponent
//                       src="/second.mp4"
//                       className="shadow-[0_10px_50px_rgba(34,197,94,0.15)] hover:shadow-[0_15px_60px_rgba(34,197,94,0.25)] transition-all duration-300"
//                     />
//                     <div className="absolute -top-4 -right-4 w-8 h-8 sm:w-16 sm:h-16 md:w-20 md:h-20 border-t-2 border-r-2 border-green-500/30 rounded-tr-xl"></div>
//                     <div className="absolute -bottom-4 -left-4 w-8 h-8 sm:w-16 sm:h-16 md:w-20 md:h-20 border-b-2 border-l-2 border-green-500/30 rounded-bl-xl"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <SanityCmsExplainer />

//             {/* Testimonials and FAQ sections removed */}
//           </TabsContent>

//           <TabsContent value="pricing">
//   <div className="mx-auto max-w-6xl">
//     <div className="mb-8 text-center">
//       <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
//         Transparent Pricing, <span className="text-green-400">Exceptional Value</span>
//       </h3>
//       <p className="text-gray-400 max-w-2xl mx-auto">
//         Choose a plan that includes our user-friendly Sanity CMS to update your website without any technical knowledge.
//       </p>
//       <div className="mt-6 flex justify-center">
//         <button
//           onClick={() => setShowComparison(!showComparison)}
//           className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
//         >
//           {showComparison ? "Hide detailed comparison" : "View detailed comparison"}
//           <ChevronDown
//             className={`h-5 w-5 transition-transform duration-300 ${showComparison ? "rotate-180" : ""}`}
//           />
//         </button>
//       </div>
//     </div>

//     {/* Pricing cards - simplified and mobile-optimized */}
//     <div
//       className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500 ${
//         showComparison ? "opacity-0 h-0 overflow-hidden" : "opacity-100"
//       }`}
//     >
//       {pricingTiers.map((tier, index) => (
//         <PricingTier
//           key={index}
//           title={tier.title}
//           price={tier.price}
//           description={tier.description}
//           features={tier.features}
//           isPopular={tier.isPopular}
//           contentManagement={tier.contentManagement}
//         />
//       ))}
//     </div>

//     {/* Comparison table */}
//     <div
//       className={`transition-all duration-500 ${
//         showComparison ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
//       }`}
//     >
//       <PricingComparisonTable plans={pricingTiers} />
//     </div>

//     {/* Add the new Sanity CMS Features component */}
//     <SanityCmsFeatures />

//     {/* Keep the existing CMS explainer section but with improved mobile responsiveness */}
//     <div className="mt-12 bg-gradient-to-br from-[#121212] to-[#0D1D15] rounded-xl border border-green-500/20 overflow-hidden">
//       <div className="grid grid-cols-1 lg:grid-cols-2">
//         <div className="p-6 md:p-8">
//           <Badge
//             variant="outline"
//             className="mb-4 rounded-full border-green-500 bg-[#1A1A1A] px-4 py-1 text-sm font-medium text-green-400"
//           >
//             Client-Friendly CMS
//           </Badge>
//           <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Take Control of Your Content</h3>
//           <p className="text-gray-300 mb-6">
//             Premium and Enterprise websites come with our intuitive content management system powered by
//             Sanity. No technical skills required.
//           </p>

//           <div className="space-y-4">
//             <div className="flex items-start gap-3 group">
//               <div className="mt-1 rounded-full bg-green-500/10 p-2 transition-colors duration-300 group-hover:bg-green-500/20">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="18"
//                   height="18"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="text-green-400"
//                 >
//                   <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
//                   <polyline points="14 2 14 8 20 8" />
//                   <path d="M12 18v-6" />
//                   <path d="m9 15 3 3 3-3" />
//                 </svg>
//               </div>
//               <div>
//                 <h4 className="text-white font-medium mb-1 group-hover:text-green-400 transition-colors">
//                   Simple Dashboard
//                 </h4>
//                 <p className="text-gray-400 text-sm">
//                   Log in to your personalized dashboard and see all your content in one place.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-3 group">
//               <div className="mt-1 rounded-full bg-green-500/10 p-2 transition-colors duration-300 group-hover:bg-green-500/20">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="18"
//                   height="18"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="text-green-400"
//                 >
//                   <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
//                   <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
//                 </svg>
//               </div>
//               <div>
//                 <h4 className="text-white font-medium mb-1 group-hover:text-green-400 transition-colors">
//                   Edit Like a Document
//                 </h4>
//                 <p className="text-gray-400 text-sm">
//                   Update text, swap images, and add new content as easily as editing a Word document.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-3 group">
//               <div className="mt-1 rounded-full bg-green-500/10 p-2 transition-colors duration-300 group-hover:bg-green-500/20">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="18"
//                   height="18"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="text-green-400"
//                 >
//                   <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
//                   <path d="m9 12 2 2 4-4" />
//                 </svg>
//               </div>
//               <div>
//                 <h4 className="text-white font-medium mb-1 group-hover:text-green-400 transition-colors">
//                   Instant Publishing
//                 </h4>
//                 <p className="text-gray-400 text-sm">
//                   Preview your changes and publish with a single click when you're ready.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-3 group">
//               <div className="mt-1 rounded-full bg-green-500/10 p-2 transition-colors duration-300 group-hover:bg-green-500/20">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="18"
//                   height="18"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="text-green-400"
//                 >
//                   <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
//                 </svg>
//               </div>
//               <div>
//                 <h4 className="text-white font-medium mb-1 group-hover:text-green-400 transition-colors">
//                   Access Anywhere
//                 </h4>
//                 <p className="text-gray-400 text-sm">
//                   Update your website from any device - computer, tablet, or smartphone.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="mt-6">
//             <Button className="bg-green-500 hover:bg-green-600 text-black group">
//               <span>Schedule a Demo</span>
//               <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//             </Button>
//           </div>
//         </div>

//         <div className="relative bg-[#0A0A0A] p-6 md:p-8 flex items-center justify-center">
//           <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent"></div>

//           <div className="relative z-10 w-full max-w-md">
//             <div className="rounded-lg overflow-hidden border border-green-500/20 shadow-lg shadow-green-500/10">
//               <div className="bg-[#1A1A1A] p-3 flex items-center justify-between border-b border-green-500/10">
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                   <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                 </div>
//                 <div className="text-xs text-gray-400">Sanity Studio</div>
//               </div>

//               <div className="bg-[#121212] p-4">
//                 <div className="flex gap-4 mb-4">
//                   <div className="w-1/3 bg-[#1A1A1A] rounded-md p-2">
//                     <div className="h-4 w-24 bg-green-500/20 rounded mb-2"></div>
//                     <div className="h-3 w-16 bg-gray-700 rounded mb-2"></div>
//                     <div className="h-3 w-20 bg-gray-700 rounded"></div>
//                   </div>
//                   <div className="w-2/3">
//                     <div className="h-6 w-full bg-[#1A1A1A] rounded mb-3"></div>
//                     <div className="h-4 w-full bg-[#1A1A1A] rounded mb-2"></div>
//                     <div className="h-4 w-3/4 bg-[#1A1A1A] rounded mb-2"></div>
//                     <div className="h-4 w-5/6 bg-[#1A1A1A] rounded"></div>
//                   </div>
//                 </div>

//                 <div className="border border-green-500/20 rounded-md p-3 bg-[#1A1A1A] mb-4">
//                   <div className="flex justify-between items-center mb-2">
//                     <div className="h-5 w-32 bg-green-500/20 rounded"></div>
//                     <div className="h-6 w-6 rounded-full bg-green-500/20"></div>
//                   </div>
//                   <div className="h-4 w-full bg-[#222222] rounded mb-2"></div>
//                   <div className="h-4 w-5/6 bg-[#222222] rounded mb-2"></div>
//                   <div className="h-4 w-4/6 bg-[#222222] rounded"></div>
//                 </div>

//                 <div className="flex justify-end gap-2">
//                   <div className="h-8 w-20 rounded bg-[#1A1A1A]"></div>
//                   <div className="h-8 w-20 rounded bg-green-500"></div>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-6 text-center">
//               <p className="text-green-400 font-medium mb-1">No coding required</p>
//               <p className="text-gray-400 text-sm">
//                 Update your website as easily as updating a social media profile
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* Mobile-friendly benefits section */}
//     <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
//       <div className="bg-[#121212] rounded-xl p-5 border border-zinc-800 transition-all duration-300 hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/5">
//         <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="20"
//             height="20"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="text-green-400"
//           >
//             <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
//             <path d="m15 9-6 6" />
//             <path d="m9 9 6 6" />
//           </svg>
//         </div>
//         <h4 className="text-white font-medium mb-2">No Monthly Fees</h4>
//         <p className="text-gray-400 text-sm">
//           Pay once for your website and content management system. No recurring subscription fees.
//         </p>
//       </div>

//       <div className="bg-[#121212] rounded-xl p-5 border border-zinc-800 transition-all duration-300 hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/5">
//         <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="20"
//             height="20"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="text-green-400"
//           >
//             <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
//             <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
//           </svg>
//         </div>
//         <h4 className="text-white font-medium mb-2">Free Training</h4>
//         <p className="text-gray-400 text-sm">
//           We'll teach you how to use the content management system with a personalized training session.
//         </p>
//       </div>

//       <div className="bg-[#121212] rounded-xl p-5 border border-zinc-800 transition-all duration-300 hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/5">
//         <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="20"
//             height="20"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="text-green-400"
//           >
//             <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
//           </svg>
//         </div>
//         <h4 className="text-white font-medium mb-2">Ongoing Support</h4>
//         <p className="text-gray-400 text-sm">
//           Get help when you need it with our responsive support team, included in all packages.
//         </p>
//       </div>
//     </div>
//   </div>
// </TabsContent>

// // Add a new SanityCmsFeatures component to better explain Sanity CMS in the pricing section
// // Add this component after the PricingComparisonTable component:

// const SanityCmsFeatures = () => {
//   return (
//     <div className="mt-12 bg-[#121212] rounded-xl border border-green-500/20 overflow-hidden">
//       <div className="p-6 md:p-8">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
//           <div>
//             <Badge
//               variant="outline"
//               className="mb-2 rounded-full border-green-500 bg-[#1A1A1A] px-4 py-1 text-xs font-medium text-green-400"
//             >
//               Included with Premium & Enterprise
//             </Badge>
//             <h3 className="text-xl md:text-2xl font-bold text-white">Sanity CMS: Update Your Site Without Coding</h3>
//           </div>
//           <Button className="bg-green-500 hover:bg-green-600 text-black">
//             See Demo
//           </Button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           <div className="bg-[#1A1A1A] rounded-lg p-5 border border-zinc-800 transition-all duration-300 hover:border-green-500/30">
//             <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="text-green-400"
//               >
//                 <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
//                 <polyline points="10 17 15 12 10 7" />
//                 <line x1="15" y1="12" x2="3" y2="12" />
//               </svg>
//             </div>
//             <h4 className="text-white font-medium mb-2">Simple Login</h4>
//             <p className="text-gray-400 text-sm">Access your website dashboard with a secure, simple login process.</p>
//           </div>

//           <div className="bg-[#1A1A1A] rounded-lg p-5 border border-zinc-800 transition-all duration-300 hover:border-green-500/30">
//             <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="text-green-400"
//               >
//                 <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
//                 <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
//               </svg>
//             </div>
//             <h4 className="text-white font-medium mb-2">Edit Like a Document</h4>
//             <p className="text-gray-400 text-sm">Change text and images as easily as editing a Word document.</p>
//           </div>

//           <div className="bg-[#1A1A1A] rounded-lg p-5 border border-zinc-800 transition-all duration-300 hover:border-green-500/30">
//             <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="text-green-400"
//               >
//                 <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
//                 <circle cx="12" cy="12" r="3" />
//               </svg>
//             </div>
//             <h4 className="text-white font-medium mb-2">Preview Changes</h4>
//             <p className="text-gray-400 text-sm">See exactly how your website will look before making it live.</p>
//           </div>

//           <div className="bg-[#1A1A1A] rounded-lg p-5 border border-zinc-800 transition-all duration-300 hover:border-green-500/30">
//             <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="text-green-400"
//               >
//                 <path d="M12 2v4" />
//                 <path d="M12 18v4" />
//                 <path d="M4.93 4.93l2.83 2.83" />
//                 <path d="M16.24 16.24l2.83 2.83" />
//                 <path d="M2 12h4" />
//                 <path d="M18 12h4" />
//                 <path d="M4.93 19.07l2.83-2.83" />
//                 <path d="M16.24 7.76l2.83-2.83" />
//               </svg>
//             </div>
//             <h4 className="text-white font-medium mb-2">Publish Instantly</h4>
//             <p className="text-gray-400 text-sm">Make your changes live with a single click whenever you're ready.</p>
//           </div>
//         </div>

//         <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="bg-green-500/10 rounded-lg p-5 border border-green-500/20">
//             <h4 className="text-green-400 font-medium mb-2 flex items-center gap-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="lucide lucide-check-circle"
//               >
//                 <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
//                 <polyline points="22 4 12 14.01 9 11.01" />
//               </svg>
//               No Technical Skills Needed
//             </h4>
//             <p className="text-gray-300 text-sm">If you can use social media or write an email, you can update your website.</p>
//           </div>

//           <div className="bg-green-500/10 rounded-lg p-5 border border-green-500/20">
//             <h4 className="text-green-400 font-medium mb-2 flex items-center gap-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="lucide lucide-check-circle"
//               >
//                 <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
//                 <polyline points="22 4 12 14.01 9 11.01" />
//               </svg>
//               No Monthly Fees
//             </h4>
//             <p className="text-gray-300 text-sm">Unlike other CMS platforms, there are no recurring subscription costs.</p>
//           </div>

//           <div className="bg-green-500/10 rounded-lg p-5 border border-green-500/20">
//             <h4 className="text-green-400 font-medium mb-2 flex items-center gap-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="lucide lucide-check-circle"
//               >
//                 <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
//                 <polyline points="22 4 12 14.01 9 11.01" />
//               </svg>
//               Free Training Included
//             </h4>
//             <p className="text-gray-300 text-sm">We'll teach you how to use the system with a personalized training session.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// // Update the pricing section in the ServicesShowcase component
// // Find the TabsContent with value="pricing" and replace it with this improved version:

// // In the ServicesShowcase component, find the TabsContent with value="pricing" and replace it with:
// // Look for: <TabsContent value="pricing"> and replace everything until </TabsContent>

// // Add this new component at the top of the file with the other components
// const ScrollToTopButton = () => {
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     const toggleVisibility = () => {
//       if (window.pageYOffset > 500) {
//         setIsVisible(true)
//       } else {
//         setIsVisible(false)
//       }
//     }

//     window.addEventListener("scroll", toggleVisibility)
//     return () => window.removeEventListener("scroll", toggleVisibility)
//   }, [])

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     })
//   }

//   return (
//     <div
//       className={`fixed bottom-8 right-8 z-50 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
//     ></div>
//   )
// }

// // Add a FAQ component
// const FAQItem = ({
//   question,
//   answer,
//   isOpen,
//   onClick,
// }: {
//   question: string
//   answer: string
//   isOpen: boolean
//   onClick: () => void
// }) => {
//   return (
//     <div className="border-b border-zinc-800 last:border-b-0">
//       <button
//         className="flex w-full items-center justify-between py-4 text-left text-white font-medium focus:outline-none"
//         onClick={onClick}
//       >
//         {question}
//         <ChevronDown
//           className={`h-5 w-5 text-green-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
//         />
//       </button>
//       <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-4" : "max-h-0"}`}>
//         <p className="text-gray-400">{answer}</p>
//       </div>
//     </div>
//   )
// }

// // Add a new SanityCmsExplainer component after the FAQItem component and before the ServicesShowcase component

// // Add this new component after the FAQItem component
// const SanityCmsExplainer = () => {
//   const [activeStep, setActiveStep] = useState(1)
//   const [isOpen, setIsOpen] = useState(false)

//   const steps = [
//     {
//       title: "Log in to your dashboard",
//       description: "Access your website content with a simple login - just like checking your email.",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="text-green-400"
//         >
//           <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
//           <polyline points="10 17 15 12 10 7" />
//           <line x1="15" y1="12" x2="3" y2="12" />
//         </svg>
//       ),
//     },
//     {
//       title: "Edit your content",
//       description: "Change text and images as easily as editing a Word document - no coding needed.",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="text-green-400"
//         >
//           <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
//           <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
//         </svg>
//       ),
//     },
//     {
//       title: "Preview your changes",
//       description: "See exactly how your website will look before making it live.",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="text-green-400"
//         >
//           <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
//           <circle cx="12" cy="12" r="3" />
//         </svg>
//       ),
//     },
//     {
//       title: "Publish with one click",
//       description: "Make your changes live instantly with a single button click.",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="text-green-400"
//         >
//           <path d="M12 2v4" />
//           <path d="M12 18v4" />
//           <path d="M4.93 4.93l2.83 2.83" />
//           <path d="M16.24 16.24l2.83 2.83" />
//           <path d="M2 12h4" />
//           <path d="M18 12h4" />
//           <path d="M4.93 19.07l2.83-2.83" />
//           <path d="M16.24 7.76l2.83-2.83" />
//         </svg>
//       ),
//     },
//   ]

//   return (
//     <div className="mt-12 bg-[#121212] rounded-xl border border-zinc-800 overflow-hidden transition-all duration-300 hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/5">
//       <div className="p-6 md:p-8">
//         <div className="flex justify-between items-center mb-6">
//           <div>
//             <h3 className="text-xl md:text-2xl font-bold text-white">What is Sanity CMS?</h3>
//             <p className="text-gray-400 mt-2">The easy way to update your website without any technical knowledge</p>
//           </div>
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="flex items-center gap-2 bg-green-500/10 hover:bg-green-500/20 text-green-400 px-4 py-2 rounded-lg transition-colors duration-300"
//           >
//             {isOpen ? "Hide Explanation" : "Learn More"}
//             <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
//           </button>
//         </div>

//         {isOpen && (
//           <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//             <div className="space-y-6">
//               <p className="text-gray-300">Sanity CMS is like a simple word processor for your website. It lets you:</p>

//               <div className="space-y-4">
//                 {steps.map((step, index) => (
//                   <button
//                     key={index}
//                     className={`w-full text-left p-4 rounded-lg border transition-all duration-300 flex items-start gap-4 ${
//                       activeStep === index + 1
//                         ? "border-green-500 bg-green-500/10"
//                         : "border-zinc-800 hover:border-green-500/30 hover:bg-[#1A1A1A]"
//                     }`}
//                     onClick={() => setActiveStep(index + 1)}
//                   >
//                     <div
//                       className={`mt-1 rounded-full p-2 ${
//                         activeStep === index + 1 ? "bg-green-500/20" : "bg-[#1A1A1A]"
//                       }`}
//                     >
//                       {step.icon}
//                     </div>
//                     <div>
//                       <h4 className={`font-medium ${activeStep === index + 1 ? "text-green-400" : "text-white"}`}>
//                         {index + 1}. {step.title}
//                       </h4>
//                       <p className="text-gray-400 text-sm mt-1">{step.description}</p>
//                     </div>
//                   </button>
//                 ))}
//               </div>

//               <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
//                 <p className="text-green-400 font-medium flex items-center gap-2">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="lucide lucide-lightbulb"
//                   >
//                     <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
//                     <path d="M9 18h6" />
//                     <path d="M10 22h4" />
//                   </svg>
//                   No technical skills required
//                 </p>
//                 <p className="text-gray-300 text-sm mt-2">
//                   If you can use social media or write an email, you can update your website!
//                 </p>
//               </div>
//             </div>

//             <div className="relative">
//               {activeStep === 1 && (
//                 <div className="bg-[#1A1A1A] rounded-lg border border-zinc-800 overflow-hidden shadow-lg shadow-black/40 transition-all duration-500">
//                   <div className="bg-black p-3 flex items-center justify-between border-b border-zinc-800">
//                     <div className="flex items-center gap-2">
//                       <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                       <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                       <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                     </div>
//                     <div className="text-xs text-gray-400">Sanity Login</div>
//                   </div>
//                   <div className="p-6 space-y-6">
//                     <div className="flex justify-center">
//                       <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="40"
//                           height="40"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="text-green-400"
//                         >
//                           <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
//                           <circle cx="12" cy="7" r="4"></circle>
//                         </svg>
//                       </div>
//                     </div>
//                     <div className="space-y-4">
//                       <div>
//                         <label className="text-xs text-gray-400 block mb-1">Email</label>
//                         <div className="h-10 bg-black/50 rounded border border-zinc-700 px-3 flex items-center text-white">
//                           you@example.com
//                         </div>
//                       </div>
//                       <div>
//                         <label className="text-xs text-gray-400 block mb-1">Password</label>
//                         <div className="h-10 bg-black/50 rounded border border-zinc-700 px-3 flex items-center text-white">
//                           ••••••••
//                         </div>
//                       </div>
//                     </div>
//                     <div className="pt-2">
//                       <div className="bg-green-500 text-black font-medium py-2 rounded text-center">Log In</div>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {activeStep === 2 && (
//                 <div className="bg-[#1A1A1A] rounded-lg border border-zinc-800 overflow-hidden shadow-lg shadow-black/40 transition-all duration-500">
//                   <div className="bg-black p-3 flex items-center justify-between border-b border-zinc-800">
//                     <div className="flex items-center gap-2">
//                       <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                       <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                       <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                     </div>
//                     <div className="text-xs text-gray-400">Sanity Editor</div>
//                   </div>
//                   <div className="p-4">
//                     <div className="flex gap-4">
//                       <div className="w-1/3 space-y-3">
//                         <div className="h-8 bg-green-500/20 rounded flex items-center px-3 text-green-400 text-sm font-medium">
//                           Home Page
//                         </div>
//                         <div className="h-8 bg-black/30 rounded flex items-center px-3 text-gray-300 text-sm">
//                           About Us
//                         </div>
//                         <div className="h-8 bg-black/30 rounded flex items-center px-3 text-gray-300 text-sm">
//                           Services
//                         </div>
//                         <div className="h-8 bg-black/30 rounded flex items-center px-3 text-gray-300 text-sm">
//                           Contact
//                         </div>
//                       </div>
//                       <div className="w-2/3 bg-black/20 p-3 rounded border border-zinc-800">
//                         <div className="mb-4">
//                           <div className="text-xs text-gray-400 mb-1">Heading</div>
//                           <div className="h-10 bg-black/50 rounded border border-zinc-700 px-3 flex items-center text-white">
//                             Welcome to Our Website
//                           </div>
//                         </div>
//                         <div className="mb-4">
//                           <div className="text-xs text-gray-400 mb-1">Description</div>
//                           <div className="h-20 bg-black/50 rounded border border-green-500/50 px-3 py-2 text-white text-sm">
//                             We provide top-quality services to help your business grow and succeed in today's
//                             competitive market.
//                           </div>
//                         </div>
//                         <div>
//                           <div className="text-xs text-gray-400 mb-1">Featured Image</div>
//                           <div className="h-24 bg-black/50 rounded border border-zinc-700 flex items-center justify-center">
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               width="24"
//                               height="24"
//                               viewBox="0 0 24 24"
//                               fill="none"
//                               stroke="currentColor"
//                               strokeWidth="2"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               className="text-gray-400"
//                             >
//                               <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
//                               <circle cx="9" cy="9" r="2" />
//                               <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
//                             </svg>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {activeStep === 3 && (
//                 <div className="bg-[#1A1A1A] rounded-lg border border-zinc-800 overflow-hidden shadow-lg shadow-black/40 transition-all duration-500">
//                   <div className="bg-black p-3 flex items-center justify-between border-b border-zinc-800">
//                     <div className="flex items-center gap-2">
//                       <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                       <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                       <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                     </div>
//                     <div className="text-xs text-gray-400">Preview Mode</div>
//                   </div>
//                   <div className="p-4">
//                     <div className="bg-black/30 rounded-lg p-4 border border-zinc-800">
//                       <div className="flex justify-between items-center mb-4">
//                         <div className="text-xs text-gray-400">Preview of your changes</div>
//                         <div className="flex items-center gap-2">
//                           <div className="bg-black/50 text-gray-300 text-xs px-2 py-1 rounded">Desktop</div>
//                           <div className="bg-black/50 text-gray-300 text-xs px-2 py-1 rounded">Mobile</div>
//                         </div>
//                       </div>

//                       <div className="bg-black/50 rounded-lg p-4 border border-zinc-800">
//                         <div className="text-xl font-bold text-white mb-2">Welcome to Our Website</div>
//                         <div className="text-gray-300 text-sm mb-4">
//                           We provide top-quality services to help your business grow and succeed in today's competitive
//                           market.
//                         </div>
//                         <div className="h-32 bg-green-500/10 rounded flex items-center justify-center">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="32"
//                             height="32"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             className="text-green-400"
//                           >
//                             <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
//                             <circle cx="9" cy="9" r="2" />
//                             <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
//                           </svg>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {activeStep === 4 && (
//                 <div className="bg-[#1A1A1A] rounded-lg border border-zinc-800 overflow-hidden shadow-lg shadow-black/40 transition-all duration-500">
//                   <div className="bg-black p-3 flex items-center justify-between border-b border-zinc-800">
//                     <div className="flex items-center gap-2">
//                       <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                       <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                       <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                     </div>
//                     <div className="text-xs text-gray-400">Publish Changes</div>
//                   </div>
//                   <div className="p-6 space-y-6">
//                     <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/30">
//                       <div className="flex items-center gap-3 mb-2">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="20"
//                           height="20"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="text-green-400"
//                         >
//                           <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
//                           <path d="m9 12 2 2 4-4" />
//                         </svg>
//                         <div className="text-green-400 font-medium">Changes Ready to Publish</div>
//                       </div>
//                       <p className="text-gray-300 text-sm">
//                         Your website will be updated immediately after publishing.
//                       </p>
//                     </div>

//                     <div className="space-y-3">
//                       <div className="flex items-center justify-between bg-black/30 p-3 rounded border border-zinc-800">
//                         <div className="text-sm text-white">Updated homepage text</div>
//                         <div className="text-xs text-gray-400">Just now</div>
//                       </div>
//                       <div className="flex items-center justify-between bg-black/30 p-3 rounded border border-zinc-800">
//                         <div className="text-sm text-white">Changed featured image</div>
//                         <div className="text-xs text-gray-400">Just now</div>
//                       </div>
//                     </div>

//                     <div className="pt-2 flex gap-3">
//                       <div className="bg-zinc-800 text-white font-medium py-2 px-4 rounded text-center flex-1">
//                         Save Draft
//                       </div>
//                       <div className="bg-green-500 text-black font-medium py-2 px-4 rounded text-center flex-1 flex items-center justify-center gap-2">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="18"
//                           height="18"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         >
//                           <path d="M5 12h14" />
//                           <path d="m12 5 7 7-7 7" />
//                         </svg>
//                         Publish Now
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-green-500/30 rounded-br-xl"></div>
//               <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-green-500/30 rounded-tl-xl"></div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// // Add the SanityCmsExplainer component to the ServicesShowcase component
// // Inside the ServicesShowcase component, find the TabsContent with value="services"
// // Add the SanityCmsExplainer component after the main services content and before the closing TabsContent tag

// // In the ServicesShowcase component, add the SanityCmsExplainer component after the main services grid
// // Find this section in the code:
// // </div>
// // </div>
// //
// // {/* Testimonials and FAQ sections removed */}
// // </TabsContent>

// // And add the SanityCmsExplainer component right before the closing TabsContent tag:
// // </div>
// // </div>
// //
// // <SanityCmsExplainer />
// //
// // {/* Testimonials and FAQ sections removed */}
// // </TabsContent>

// // In the main ServicesShowcase component, remove the testimonials and FAQ sections
// export default function ServicesShowcase() {
//   const [isVisible, setIsVisible] = useState(false)
//   const [scrollY, setScrollY] = useState(0)
//   // Add this state to the main component
//   const [openFaq, setOpenFaq] = useState<number | null>(null)
//   const [activeTab, setActiveTab] = useState("services")
//   const [showComparison, setShowComparison] = useState(false)

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

//   // Update the pricingTiers array in the ServicesShowcase component to include the contentManagement property
//   const pricingTiers = [
//     {
//       title: "Basic Portfolio",
//       price: "$499",
//       description: "Perfect for individuals looking to establish an online presence",
//       features: ["Responsive design", "Up to 5 pages", "Basic SEO optimization", "Contact form", "15 Days of support"],
//       contentManagement: false,
//     },
//     {
//       title: "Premium Landing Page",
//       price: "$1099",
//       description: "Ideal for businesses focused on conversions and growth",
//       features: [
//         "High-converting design",
//         "A/B testing setup",
//         "Advanced analytics",
//         "Lead capture forms",
//         "1 months of support",
//         "Performance optimization",
//         "Sanity CMS integration",
//       ],
//       isPopular: true,
//       contentManagement: true,
//     },
//     {
//       title: "Enterprise Solution",
//       price: "Custom",
//       description: "Comprehensive digital presence for established businesses",
//       features: [
//         "Custom design & development",
//         "Multiple page types",
//         "Advanced SEO strategy",
//         "Integration with existing systems",
//         "3 months of priority support",
//         "Regular performance reports",
//         "Advanced Sanity CMS integration",
//       ],
//       contentManagement: true,
//     },
//   ]

//   const testimonials = [
//     {
//       quote:
//         "The content management system is incredibly intuitive. I can update my website without any technical knowledge!",
//       author: "Sarah Johnson",
//       role: "Photographer",
//       company: "Sarah J Photography",
//       rating: 5,
//     },
//     {
//       quote:
//         "Our landing page conversion rate increased by 45% after working with this team. The design is stunning and performs amazingly.",
//       author: "Michael Chen",
//       role: "Marketing Director",
//       company: "TechGrowth Inc.",
//       rating: 5,
//     },
//     {
//       quote:
//         "The enterprise solution perfectly integrated with our existing systems. Support has been responsive and helpful.",
//       author: "Jessica Williams",
//       role: "CEO",
//       company: "Creative Solutions",
//       rating: 4,
//     },
//   ]

//   const faqs = [
//     {
//       question: "How long does it take to build a website?",
//       answer:
//         "Typically, a basic portfolio website takes 2-3 weeks, a premium landing page 3-4 weeks, and an enterprise solution 6-8 weeks. The timeline can vary based on project complexity and feedback cycles.",
//     },
//     {
//       question: "Do I need technical knowledge to update my website?",
//       answer:
//         "Not at all! Our Premium and Enterprise packages include Sanity CMS, which allows you to update content as easily as editing a document. No coding knowledge required.",
//     },
//     {
//       question: "Can I upgrade my package later?",
//       answer:
//         "You can start with a Basic Portfolio and upgrade to include Sanity CMS or other premium features later. We'll provide a custom quote based on your specific needs.",
//     },
//     {
//       question: "What happens after my support period ends?",
//       answer:
//         "After your included support period ends, you can purchase additional support packages or pay for support on an as-needed basis. We're always here to help!",
//     },
//     {
//       question: "Is hosting included in the price?",
//       answer:
//         "Yes, all packages include the first year of hosting at no additional cost. After the first year, hosting is available at a competitive monthly rate.",
//     },
//   ]

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

//   return (
//     <section className="force-sticky relative min-h-[200vh] bg-black py-8 sm:py-12 md:py-16 lg:py-24">
//       {/* Keep the background elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div
//           className="absolute -top-20 -right-20 w-96 h-96 bg-green-500/5 rounded-full blur-3xl transition-transform duration-1000 ease-out"
//           style={{ transform: `translateY(${scrollY * 0.05}px)` }}
//         />
//         <div
//           className="absolute bottom-20 right-1/4 w-64 h-64 bg-green-500/4 rounded-full blur-3xl transition-transform duration-1000 ease-out"
//           style={{ transform: `translateY(${scrollY * -0.03}px)` }}
//         />
//         <div
//           className="absolute top-1/3 left-1/4 w-72 h-72 bg-green-500/3 rounded-full blur-3xl opacity-30 transition-transform duration-1000 ease-out"
//           style={{ transform: `translateY(${scrollY * 0.02}px)` }}
//         />
//       </div>

//       <div className="container relative mx-auto px-4 sm:px-6">
//         <div
//           className={`mb-20 text-center transition-all duration-700 transform ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}
//         >
//           <Badge
//             variant="outline"
//             className="mb-6 rounded-full border-green-500 bg-[#1A1A1A] px-6 py-2 text-sm font-medium text-green-400"
//           >
//             Our Premium Services
//           </Badge>
//           <h2 className="mb-4 sm:mb-8 text-2xl sm:text-3xl font-bold text-white md:text-4xl lg:text-5xl">
//             <span className="block">Digital Experiences</span>
//             <span className="block">
//               <span className="text-green-400">Designed</span> for Impact
//             </span>
//           </h2>
//           <p className="mx-auto max-w-2xl text-base sm:text-lg text-gray-400">
//             From <span className="text-white font-medium">portfolios</span> to{" "}
//             <span className="text-white font-medium">landing pages</span> that drive results.
//           </p>
//         </div>

//         <Tabs defaultValue="services" className="w-full" onValueChange={setActiveTab}>
//           <div className="flex justify-center mb-12">
//             <TabsList className="grid w-full max-w-md grid-cols-2 bg-[#1A1A1A]">
//               <TabsTrigger value="services" className="data-[state=active]:bg-green-500 data-[state=active]:text-black">
//                 Services
//               </TabsTrigger>
//               <TabsTrigger value="pricing" className="data-[state=active]:bg-green-500 data-[state=active]:text-black">
//                 Pricing
//               </TabsTrigger>
//             </TabsList>
//           </div>

//           <TabsContent value="services" className="mt-0">
//             <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-[1fr,470px] gap-6 sm:gap-8 md:gap-10 lg:gap-14 justify-center">
//               {/* Left side - Service cards */}
//               <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-1 md:gap-10 w-full">
//                 <ServiceCard type="portfolio" index={0} />
//                 <ServiceCard type="landing" index={1} />
//               </div>

//               {/* Right side - Sticky videos section */}
//               <div className="w-full mt-8 lg:mt-0 space-y-6 sm:space-y-8 order-first lg:order-last">
//                 <div
//                   className="lg:sticky top-24"
//                   style={{
//                     position: "sticky",
//                     top: "6rem",
//                     height: "fit-content",
//                   }}
//                 >
//                   <div className="flex items-center justify-between mb-4">
//                     <h3 className="text-xl font-bold text-white text-center lg:text-left">Portfolio Preview</h3>
//                   </div>

//                   <div className="relative transition-all duration-500 ease-out mb-6 sm:mb-8">
//                     <VideoPreviewComponent
//                       src="/dasm.mp4"
//                       className="shadow-[0_10px_50px_rgba(34,197,94,0.15)] hover:shadow-[0_15px_60px_rgba(34,197,94,0.25)] transition-all duration-300"
//                     />
//                     <div className="absolute -top-4 -right-4 w-8 h-8 sm:w-16 sm:h-16 md:w-20 md:h-20 border-t-2 border-r-2 border-green-500/30 rounded-tr-xl"></div>
//                     <div className="absolute -bottom-4 -left-4 w-8 h-8 sm:w-16 sm:h-16 md:w-20 md:h-20 border-b-2 border-l-2 border-green-500/30 rounded-bl-xl"></div>
//                   </div>

//                   <div className="relative transition-all duration-500 ease-out">
//                     <VideoPreviewComponent
//                       src="/second.mp4"
//                       className="shadow-[0_10px_50px_rgba(34,197,94,0.15)] hover:shadow-[0_15px_60px_rgba(34,197,94,0.25)] transition-all duration-300"
//                     />
//                     <div className="absolute -top-4 -right-4 w-8 h-8 sm:w-16 sm:h-16 md:w-20 md:h-20 border-t-2 border-r-2 border-green-500/30 rounded-tr-xl"></div>
//                     <div className="absolute -bottom-4 -left-4 w-8 h-8 sm:w-16 sm:h-16 md:w-20 md:h-20 border-b-2 border-l-2 border-green-500/30 rounded-bl-xl"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <SanityCmsExplainer />

//             {/* Testimonials and FAQ sections removed */}
//           </TabsContent>

//           <TabsContent value="pricing">
//   <div className="mx-auto max-w-6xl">
//     <div className="mb-8 text-center">
//       <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
//         Transparent Pricing, <span className="text-green-400">Exceptional Value</span>
//       </h3>
//       <p className="text-gray-400 max-w-2xl mx-auto">
//         Choose a plan that includes our user-friendly Sanity CMS to update your website without any technical knowledge.
//       </p>
//       <div className="mt-6 flex justify-center">
//         <button
//           onClick={() => setShowComparison(!showComparison)}
//           className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
//         >
//           {showComparison ? "Hide detailed comparison" : "View detailed comparison"}
//           <ChevronDown
//             className={`h-5 w-5 transition-transform duration-300 ${showComparison ? "rotate-180" : ""}`}
//           />
//         </button>
//       </div>
//     </div>

//     {/* Pricing cards - simplified and mobile-optimized */}
//     <div
//       className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500 ${
//         showComparison ? "opacity-0 h-0 overflow-hidden" : "opacity-100"
//       }`}
//     >
//       {pricingTiers.map((tier, index) => (
//         <PricingTier
//           key={index}
//           title={tier.title}
//           price={tier.price}
//           description={tier.description}
//           features={tier.features}
//           isPopular={tier.isPopular}
//           contentManagement={tier.contentManagement}
//         />
//       ))}
//     </div>

//     {/* Comparison table */}
//     <div
//       className={`transition-all duration-500 ${
//         showComparison ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
//       }`}
//     >
//       <PricingComparisonTable plans={pricingTiers} />
//     </div>

//     {/* Add the new Sanity CMS Features component */}
//     <SanityCmsFeatures />

//     {/* Keep the existing CMS explainer section but with improved mobile responsiveness */}
//     <div className="mt-12 bg-gradient-to-br from-[#121212] to-[#0D1D15] rounded-xl border border-green-500/20 overflow-hidden">
//       <div className="grid grid-cols-1 lg:grid-cols-2">
//         <div className="p-6 md:p-8">
//           <Badge
//             variant="outline"
//             className="mb-4 rounded-full border-green-500 bg-[#1A1A1A] px-4 py-1 text-sm font-medium text-green-400"
//           >
//             Client-Friendly CMS
//           </Badge>
//           <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Take Control of Your Content</h3>
//           <p className="text-gray-300 mb-6">
//             Premium and Enterprise websites come with our intuitive content management system powered by
//             Sanity. No technical skills required.
//           </p>

//           <div className="space-y-4">
//             <div className="flex items-start gap-3 group">
//               <div className="mt-1 rounded-full bg-green-500/10 p-2 transition-colors duration-300 group-hover:bg-green-500/20">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="18"
//                   height="18"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="text-green-400"
//                 >
//                   <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
//                   <polyline points="14 2 14 8 20 8" />
//                   <path d="M12 18v-6" />
//                   <path d="m9 15 3 3 3-3" />
//                 </svg>
//               </div>
//               <div>
//                 <h4 className="text-white font-medium mb-1 group-hover:text-green-400 transition-colors">
//                   Simple Dashboard
//                 </h4>
//                 <p className="text-gray-400 text-sm">
//                   Log in to your personalized dashboard and see all your content in one place.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-3 group">
//               <div className="mt-1 rounded-full bg-green-500/10 p-2 transition-colors duration-300 group-hover:bg-green-500/20">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="18"
//                   height="18"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="text-green-400"
//                 >
//                   <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
//                   <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
//                 </svg>
//               </div>
//               <div>
//                 <h4 className="text-white font-medium mb-1 group-hover:text-green-400 transition-colors">
//                   Edit Like a Document
//                 </h4>
//                 <p className="text-gray-400 text-sm">
//                   Update text, swap images, and add new content as easily as editing a Word document.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-3 group">
//               <div className="mt-1 rounded-full bg-green-500/10 p-2 transition-colors duration-300 group-hover:bg-green-500/20">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="18"
//                   height="18"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="text-green-400"
//                 >
//                   <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
//                   <path d="m9 12 2 2 4-4" />
//                 </svg>
//               </div>
//               <div>
//                 <h4 className="text-white font-medium mb-1 group-hover:text-green-400 transition-colors">
//                   Instant Publishing
//                 </h4>
//                 <p className="text-gray-400 text-sm">
//                   Preview your changes and publish with a single click when you're ready.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-3 group">
//               <div className="mt-1 rounded-full bg-green-500/10 p-2 transition-colors duration-300 group-hover:bg-green-500/20">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="18"
//                   height="18"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="text-green-400"
//                 >
//                   <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
//                 </svg>
//               </div>
//               <div>
//                 <h4 className="text-white font-medium mb-1 group-hover:text-green-400 transition-colors">
//                   Access Anywhere
//                 </h4>
//                 <p className="text-gray-400 text-sm">
//                   Update your website from any device - computer, tablet, or smartphone.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="mt-6">
//             <Button className="bg-green-500 hover:bg-green-600 text-black group">
//               <span>Schedule a Demo</span>
//               <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//             </Button>
//           </div>
//         </div>

//         <div className="relative bg-[#0A0A0A] p-6 md:p-8 flex items-center justify-center">
//           <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent"></div>

//           <div className="relative z-10 w-full max-w-md">
//             <div className="rounded-lg overflow-hidden border border-green-500/20 shadow-lg shadow-green-500/10">
//               <div className="bg-[#1A1A1A] p-3 flex items-center justify-between border-b border-green-500/10">
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                   <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                 </div>
//                 <div className="text-xs text-gray-400">Sanity Studio</div>
//               </div>

//               <div className="bg-[#121212] p-4">
//                 <div className="flex gap-4 mb-4">
//                   <div className="w-1/3 bg-[#1A1A1A] rounded-md p-2">
//                     <div className="h-4 w-24 bg-green-500/20 rounded mb-2"></div>
//                     <div className="h-3 w-16 bg-gray-700 rounded mb-2"></div>
//                     <div className="h-3 w-20 bg-gray-700 rounded"></div>
//                   </div>
//                   <div className="w-2/3">
//                     <div className="h-6 w-full bg-[#1A1A1A] rounded mb-3"></div>
//                     <div className="h-4 w-full bg-[#1A1A1A] rounded mb-2"></div>
//                     <div className="h-4 w-3/4 bg-[#1A1A1A] rounded mb-2"></div>
//                     <div className="h-4 w-5/6 bg-[#1A1A1A] rounded"></div>
//                   </div>
//                 </div>

//                 <div className="border border-green-500/20 rounded-md p-3 bg-[#1A1A1A] mb-4">
//                   <div className="flex justify-between items-center mb-2">
//                     <div className="h-5 w-32 bg-green-500/20 rounded"></div>
//                     <div className="h-6 w-6 rounded-full bg-green-500/20"></div>
//                   </div>
//                   <div className="h-4 w-full bg-[#222222] rounded mb-2"></div>
//                   <div className="h-4 w-5/6 bg-[#222222] rounded mb-2"></div>
//                   <div className="h-4 w-4/6 bg-[#222222] rounded"></div>
//                 </div>

//                 <div className="flex justify-end gap-2">
//                   <div className="h-8 w-20 rounded bg-[#1A1A1A]"></div>
//                   <div className="h-8 w-20 rounded bg-green-500"></div>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-6 text-center">
//               <p className="text-green-400 font-medium mb-1">No coding required</p>
//               <p className="text-gray-400 text-sm">
//                 Update your website as easily as updating a social media profile
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* Mobile-friendly benefits section */}
//     <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
//       <div className="bg-[#121212] rounded-xl p-5 border border-zinc-800 transition-all duration-300 hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/5">
//         <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="20"
//             height="20"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="text-green-400"
//           >
//             <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
//             <path d="m15 9-6 6" />
//             <path d="m9 9 6 6" />
//           </svg>
//         </div>
//         <h4 className="text-white font-medium mb-2">No Monthly Fees</h4>
//         <p className="text-gray-400 text-sm">
//           Pay once for your website and content management system. No recurring subscription fees.
//         </p>
//       </div>

//       <div className="bg-[#121212] rounded-xl p-5 border border-zinc-800 transition-all duration-300 hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/5">
//         <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="20"
//             height="20"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="text-green-400"
//           >
//             <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
//             <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
//           </svg>
//         </div>
//         <h4 className="text-white font-medium mb-2">Free Training</h4>
//         <p className="text-gray-400 text-sm">
//           We'll teach you how to use the content management system with a personalized training session.
//         </p>
//       </div>

//       <div className="bg-[#121212] rounded-xl p-5 border border-zinc-800 transition-all duration-300 hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/5">
//         <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
//           <svg
//             xmlns

