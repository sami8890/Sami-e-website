// "use client"
// import React from "react"
// import { motion } from "framer-motion"
// import { ArrowRight } from "lucide-react"
// import Image from "next/image"

// interface ServiceCardProps {
//     type: 'react' | 'dashboard' | 'landing' | 'saas'
//     className?: string
// }

// const TechIcon = ({ name }: { name: string }) => (
//     <div className="w-8 h-8 rounded-full bg-[#001F1B] flex items-center justify-center">
//         <Image
//             src={`/icons/${name}.svg`}
//             alt={name}
//             width={20}
//             height={20}
//             className="object-contain"
//         />
//     </div>
// )

// const ServiceCard: React.FC<ServiceCardProps> = ({ type, className = "" }) => {
//     if (type === 'react') {
//         return (
//             <div className={`bg-[#001F1B] rounded-3xl p-8 ${className}`}>
//                 <h3 className="text-3xl font-bold text-white mb-6">
//                     Enterprise React Development
//                 </h3>

//                 <div className="space-y-4 mb-8">
//                     <div className="flex items-center gap-2 text-[#808785]">
//                         <ArrowRight className="w-5 h-5 text-[#00D285]" />
//                         <span>Growth-Oriented Strategies</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-[#808785]">
//                         <ArrowRight className="w-5 h-5 text-[#00D285]" />
//                         <span>Streamlined Website Management</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-[#808785]">
//                         <ArrowRight className="w-5 h-5 text-[#00D285]" />
//                         <span>Effortless Data Migration Support</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-[#808785]">
//                         <ArrowRight className="w-5 h-5 text-[#00D285]" />
//                         <span>Tailored API Integration Solutions</span>
//                     </div>
//                 </div>

//                 <p className="text-[#808785] mb-8">
//                     Build your enterprise-level React website with unique interfaces, multilingual support, and custom animations
//                 </p>

//                 <div className="flex gap-3 mb-8">
//                     <TechIcon name="react" />
//                     <TechIcon name="next" />
//                     <TechIcon name="typescript" />
//                     <TechIcon name="tailwind" />
//                 </div>

//                 <button className="flex items-center gap-2 bg-[#00211D] text-[#00D285] px-6 py-3 rounded-full hover:bg-[#003029] transition-colors">
//                     Book a call
//                     <ArrowRight className="w-4 h-4" />
//                 </button>
//             </div>
//         )
//     }

//     if (type === 'dashboard') {
//         return (
//             <div className={`bg-[#001F1B] rounded-3xl p-8 ${className}`}>
//                 <h3 className="text-3xl font-bold text-white mb-6">
//                     Custom Dashboard
//                 </h3>

//                 <div className="rounded-2xl overflow-hidden mb-6">
//                     <Image
//                         src="/dashboard-preview.png"
//                         alt="Dashboard Preview"
//                         width={600}
//                         height={300}
//                         className="w-full object-cover"
//                     />
//                 </div>

//                 <p className="text-[#808785]">
//                     A custom-built dashboard management solution tailored to your unique needs, using the latest technologies: React.js, Node.js, and MongoDB.
//                 </p>
//             </div>
//         )
//     }

//     if (type === 'landing') {
//         return (
//             <div className={`bg-[#001F1B] rounded-3xl p-8 ${className}`}>
//                 <div className="flex gap-3 mb-6">
//                     <span className="px-4 py-1 rounded-full bg-[#002C25] text-[#00D285] text-sm">Optimized</span>
//                     <span className="px-4 py-1 rounded-full bg-[#002C25] text-[#00D285] text-sm">SEO friendly</span>
//                     <span className="px-4 py-1 rounded-full bg-[#002C25] text-[#00D285] text-sm">Boost sales</span>
//                 </div>

//                 <h3 className="text-3xl font-bold text-white mb-6">
//                     High-Converting Landing Page
//                 </h3>

//                 <p className="text-[#808785]">
//                     Get unique user interfaces, engaging content, mobile-friendly design, and eye-catching animations—all crafted to elevate your digital presence
//                 </p>
//             </div>
//         )
//     }

//     if (type === 'saas') {
//         return (
//             <div className={`bg-[#001F1B] rounded-3xl p-8 ${className}`}>
//                 <h3 className="text-3xl font-bold text-white mb-6">
//                     Custom SaaS Application
//                 </h3>

//                 <div className="space-y-4 mb-6">
//                     <div className="flex items-center gap-2 text-[#808785]">
//                         <ArrowRight className="w-5 h-5 text-[#00D285]" />
//                         <span>Scalable Solutions</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-[#808785]">
//                         <ArrowRight className="w-5 h-5 text-[#00D285]" />
//                         <span>User-Centric Design</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-[#808785]">
//                         <ArrowRight className="w-5 h-5 text-[#00D285]" />
//                         <span>Advanced Security Integration</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-[#808785]">
//                         <ArrowRight className="w-5 h-5 text-[#00D285]" />
//                         <span>Real-Time Analytics</span>
//                     </div>
//                 </div>

//                 <p className="text-[#808785] mb-6">
//                     Unlock the potential of SaaS platforms with features that transform business processes and drive sustainable growth.
//                 </p>

//                 <button className="flex items-center gap-2 bg-[#00211D] text-[#00D285] px-6 py-3 rounded-full hover:bg-[#003029] transition-colors">
//                     Book a call
//                     <ArrowRight className="w-4 h-4" />
//                 </button>
//             </div>
//         )
//     }

//     return null
// }

// export default function ServicesShowcase() {
//     return (
//         <section className="bg-[#001814] min-h-screen py-20">
//             <div className="container mx-auto px-4">
//                 <motion.div
//                     className="text-center mb-16"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                 >
//                     <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//                         Personalized Strategies To{" "}
//                         <div className="relative inline-block">
//                             Drive Your Business Forward
//                             <div className="absolute bottom-2 left-0 w-full h-1 bg-[#00D285]" />
//                         </div>
//                     </h2>
//                     <p className="text-[#808785] text-xl">
//                         From landing page design to enterprise-level web-apps
//                     </p>
//                 </motion.div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
//                     <ServiceCard type="react" />
//                     <ServiceCard type="dashboard" />
//                     <ServiceCard type="landing" />
//                     <ServiceCard type="saas" />
//                 </div>
//             </div>
//         </section>
//     )
// }