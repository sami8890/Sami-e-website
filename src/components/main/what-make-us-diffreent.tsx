// "use client";
// import { Card, CardContent } from "@/components/ui/card";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import { Search, Crown, Smartphone, Star, Sparkles, ArrowRight } from "lucide-react";

// const advantages = [
//   {
//     icon: Search,
//     color: "text-blue-600",
//     bgGradient: "from-blue-500/20 to-blue-600/30",
//     glowColor: "shadow-blue-500/25",
//     title: "SEO-Optimized",
//     description:
//       "Our SEO-centric design approach enhances your online visibility, driving organic traffic by securing prime ranks on Google search.",
//     animation: { rotate: [0, 360], scale: [1, 1.1, 1] },
//     hoverColor: "hover:bg-blue-50/80",
//   },
//   {
//     icon: Crown,
//     color: "text-amber-600",
//     bgGradient: "from-amber-500/20 to-yellow-600/30",
//     glowColor: "shadow-amber-500/25",
//     title: "High-Converting Design",
//     description:
//       "Our engaging design techniques drive remarkable increases in conversion rates by compelling visitors to take decisive, intentional action.",
//     animation: { y: [0, -5, 0], rotate: [0, 10, -10, 0] },
//     hoverColor: "hover:bg-amber-50/80",
//   },
//   {
//     icon: Smartphone,
//     color: "text-emerald-600",
//     bgGradient: "from-emerald-500/20 to-green-600/30",
//     glowColor: "shadow-emerald-500/25",
//     title: "Peak Performance Any Screen",
//     description:
//       "Our fluid website experiences guarantee flawless performance across all screens, from desktops and laptops to tablets and mobile devices.",
//     animation: { rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] },
//     hoverColor: "hover:bg-emerald-50/80",
//   },
// ];

// export default function CompetitiveAdvantages() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   const blur = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [6, 0, 0, 6]);
//   const opacity = useTransform(
//     scrollYProgress,
//     [0, 0.15, 0.85, 1],
//     [0.6, 1, 1, 0.6]
//   );
//   const scale = useTransform(
//     scrollYProgress,
//     [0, 0.2, 0.8, 1],
//     [0.98, 1, 1, 0.98]
//   );

//   return (
//     <motion.section
//       ref={containerRef}
//       style={{
//         filter: `blur(${blur}px)`,
//         opacity,
//         scale,
//       }}
//       className="relative min-h-screen py-16 sm:py-20 lg:py-24 xl:py-32 px-4 sm:px-6 lg:px-8 xl:px-12 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30"
//     >
//       {/* Enhanced Background Layers */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-amber-50/40"></div>
//         <div className="absolute inset-0 bg-gradient-to-tr from-emerald-50/30 via-transparent to-purple-50/20"></div>
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(245,158,11,0.05),transparent_50%)]"></div>
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.05),transparent_50%)]"></div>
//       </div>

//       {/* Subtle Grid Pattern */}
//       <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:32px_32px]"></div>

//       {/* Floating Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(6)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-2 h-2 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full"
//             style={{
//               left: `${10 + (i * 15)}%`,
//               top: `${20 + (i * 10)}%`,
//             }}
//             animate={{
//               y: [0, -20, 0],
//               x: [0, 10, 0],
//               opacity: [0.2, 0.6, 0.2],
//             }}
//             transition={{
//               duration: 4 + i,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: i * 0.5,
//             }}
//           />
//         ))}
//       </div>

//       <div className="container mx-auto relative z-10 max-w-7xl">
//         {/* Enhanced Header Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="text-center mb-16 sm:mb-20 lg:mb-24 xl:mb-28"
//         >
//           <motion.div
//             className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-100 mb-6"
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <Star className="w-4 h-4 text-blue-600 mr-2" />
//             <span className="text-sm font-medium text-slate-700">Why Choose Us</span>
//           </motion.div>

//           <motion.h2
//             className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tight leading-[0.9] text-slate-900 mb-6 sm:mb-8"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.4 }}
//             viewport={{ once: true }}
//             style={{ fontFamily: "Instrument Serif, serif" }}
//           >
//             Your{" "}
//             <motion.span
//               className="relative inline-block"
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{
//                 duration: 1,
//                 delay: 0.8,
//                 type: "spring",
//                 stiffness: 120,
//               }}
//               viewport={{ once: true }}
//             >
//               <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-amber-600 bg-clip-text text-transparent">
//                 Perfect Choice
//               </span>
//               <motion.div
//                 className="absolute -inset-2 bg-gradient-to-r from-blue-200/40 via-purple-200/40 to-amber-200/40 rounded-lg -z-10"
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.8, delay: 1.2 }}
//                 viewport={{ once: true }}
//               />
//             </motion.span>
//           </motion.h2>

//           <motion.p
//             className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             viewport={{ once: true }}
//           >
//             Discover the competitive advantages that set us apart from the rest
//           </motion.p>
//         </motion.div>

//         {/* Enhanced Cards Grid */}
//         <motion.div
//           className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-8 xl:gap-12"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={{
//             hidden: {},
//             visible: {
//               transition: {
//                 staggerChildren: 0.2,
//               },
//             },
//           }}
//         >
//           {advantages.map((advantage, index) => {
//             const IconComponent = advantage.icon;
//             return (
//               <motion.div
//                 key={index}
//                 variants={{
//                   hidden: { opacity: 0, y: 80, scale: 0.8 },
//                   visible: {
//                     opacity: 1,
//                     y: 0,
//                     scale: 1,
//                     transition: {
//                       type: "spring",
//                       stiffness: 120,
//                       damping: 25,
//                       duration: 1,
//                     },
//                   },
//                 }}
//                 className="group"
//               >
//                 <Card
//                   className={`bg-white/80 backdrop-blur-sm border border-white/60 rounded-3xl ${advantage.glowColor} shadow-xl hover:shadow-2xl transition-all duration-700 h-full group-hover:-translate-y-3 hover:border-white/80 overflow-hidden relative ${advantage.hoverColor}`}
//                 >
//                   {/* Card Glow Effect */}
//                   <div className={`absolute inset-0 bg-gradient-to-br ${advantage.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
                  
//                   <CardContent className="p-8 sm:p-10 lg:p-8 xl:p-10 text-center h-full flex flex-col relative z-10">
//                     {/* Enhanced Icon Container */}
//                     <motion.div
//                       className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-20 lg:h-20 xl:w-24 xl:h-24 mx-auto mb-8 sm:mb-10"
//                       whileHover={{
//                         scale: 1.15,
//                         rotate: 8,
//                         transition: { duration: 0.4, type: "spring", stiffness: 200 },
//                       }}
//                     >
//                       {/* Outer Ring */}
//                       <motion.div
//                         className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${advantage.bgGradient} shadow-lg`}
//                         animate={{
//                           rotate: [0, 360],
//                         }}
//                         transition={{
//                           duration: 20,
//                           repeat: Infinity,
//                           ease: "linear",
//                         }}
//                       />
                      
//                       {/* Inner Container */}
//                       <motion.div
//                         className="absolute inset-1 bg-white/90 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/50"
//                         whileHover={{
//                           backgroundColor: "rgba(255,255,255,0.95)",
//                         }}
//                       >
//                         {/* Animated Icon */}
//                         <motion.div
//                           animate={advantage.animation}
//                           transition={{
//                             duration: 4,
//                             repeat: Infinity,
//                             ease: "easeInOut",
//                             repeatDelay: 2,
//                           }}
//                           whileHover={{
//                             scale: 1.2,
//                             transition: { duration: 0.3 },
//                           }}
//                         >
//                           <IconComponent
//                             className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-9 lg:h-9 xl:w-11 xl:h-11 ${advantage.color}`}
//                           />
//                         </motion.div>
//                       </motion.div>

//                       {/* Floating Particles */}
//                       <div className="absolute inset-0 overflow-visible">
//                         {[...Array(4)].map((_, i) => (
//                           <motion.div
//                             key={i}
//                             className={`absolute w-1.5 h-1.5 ${advantage.color.replace('text-', 'bg-')} rounded-full opacity-60`}
//                             style={{
//                               left: `${20 + i * 20}%`,
//                               top: `${10 + i * 25}%`,
//                             }}
//                             animate={{
//                               scale: [0, 1, 0],
//                               opacity: [0, 0.8, 0],
//                               y: [0, -20, -40],
//                             }}
//                             transition={{
//                               duration: 3,
//                               repeat: Infinity,
//                               delay: i * 0.5,
//                               ease: "easeOut",
//                             }}
//                           />
//                         ))}
//                       </div>
//                     </motion.div>

//                     {/* Enhanced Content */}
//                     <motion.h3
//                       className="text-xl sm:text-2xl lg:text-xl xl:text-2xl font-bold text-slate-900 mb-5 sm:mb-6 leading-tight"
//                       style={{ fontFamily: "Instrument Serif, serif" }}
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.8, delay: 0.4 }}
//                       viewport={{ once: true }}
//                     >
//                       {advantage.title}
//                     </motion.h3>

//                     <motion.p
//                       className="text-slate-600 leading-relaxed text-base sm:text-lg lg:text-base xl:text-lg flex-grow mb-6"
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.8, delay: 0.6 }}
//                       viewport={{ once: true }}
//                     >
//                       {advantage.description}
//                     </motion.p>

//                     {/* Call-to-Action Button */}
//                     <motion.button
//                       className={`inline-flex items-center px-6 py-3 ${advantage.color.replace('text-', 'bg-').replace('-600', '-50')} ${advantage.color} rounded-xl font-medium transition-all duration-300 hover:shadow-lg group/btn opacity-0 group-hover:opacity-100`}
//                       whileHover={{ scale: 1.05, y: -2 }}
//                       whileTap={{ scale: 0.98 }}
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 0 }}
//                       whileInView={{ opacity: 0 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       Learn More
//                       <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
//                     </motion.button>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             );
//           })}
//         </motion.div>

//         {/* Bottom CTA Section */}
//         <motion.div
//           className="text-center mt-16 sm:mt-20 lg:mt-24"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           <motion.div
//             className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
//             whileHover={{ scale: 1.05, y: -3 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             Ready to Get Started?
//             <ArrowRight className="w-5 h-5 ml-2" />
//           </motion.div>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// }