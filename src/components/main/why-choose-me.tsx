// "use client"
// import { useState } from "react"
// import { CheckCircle, Shield, HeadphonesIcon, Calendar, Sparkles, UtensilsCrossed, Users } from "lucide-react"
// import { motion, AnimatePresence } from "framer-motion"

// export default function WhyChooseUs() {
//   const [hovered, setHovered] = useState<null | number>(null)
//   const [showCalendly, setShowCalendly] = useState(false)

//   const stats = [
//     { value: "50+", label: "Successful Projects", subtext: "Zero failures" },
//     { value: "4.9/5", label: "Client Rating", subtext: "98% satisfaction" },
//     { value: "2-7", label: "Days Delivery", subtext: "Lightning fast" },
//   ]

//   const features = [
//     {
//       icon: <UtensilsCrossed size={28} />,
//       title: "Restaurant Revenue Expert",
//       description: "We've helped restaurants increase online orders by 40-80% within 30 days.",
//       guarantee: "Results guaranteed or money back",
//     },
//     {
//       icon: <Shield size={28} />,
//       title: "Enterprise-Grade Security",
//       description: "Bank-level security with 99.9% uptime guarantee. Your customers' data is safe.",
//       guarantee: "SSL certified & PCI compliant",
//     },
//     {
//       icon: <Users size={28} />,
//       title: "24/7 Priority Support",
//       description: "Direct line to our team. No outsourcing, no delays. Real humans, real solutions.",
//       guarantee: "Response within 2 hours",
//     },
//   ]

//   const supportItems = [
//     "Menu updates and modifications",
//     "Online ordering system fixes",
//     "Mobile responsiveness tweaks",
//     "SEO optimization adjustments",
//     "Performance monitoring",
//   ]

//   return (
//     <section className="bg-white py-20 px-4 relative overflow-hidden" id="why-choose-us">
//       {/* Subtle background pattern - matching hero */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_50%)]"></div>

//       <div className="container mx-auto max-w-6xl relative z-10">
//         {/* Header Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           {/* Service tag - matching hero style */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="inline-block mb-6"
//           >
//             <span className="inline-block rounded-full bg-black text-white px-4 py-1.5 text-sm md:text-lg font-medium tracking-wide">
//               <Sparkles className="inline h-4 w-4 mr-2" />
//               Why Choose Us
//             </span>
//           </motion.div>

//           {/* Main headline - matching hero typography */}
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6"
//           >
//             Restaurant Websites That{" "}
//             <span className="relative inline-block">
//               <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 Actually Work
//               </span>
//               <motion.div
//                 initial={{ scaleX: 0 }}
//                 whileInView={{ scaleX: 1 }}
//                 transition={{ duration: 0.8, delay: 0.5 }}
//                 viewport={{ once: true }}
//                 className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 origin-left"
//               />
//             </span>
//           </motion.h2>

//           {/* Money-back guarantee - add after the subtitle */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.6 }}
//             viewport={{ once: true }}
//             className="inline-flex items-center gap-3 bg-green-50 border-2 border-green-200 rounded-full px-6 py-3 text-green-800 font-bold text-lg shadow-sm mt-6"
//           >
//             <Shield className="h-5 w-5" />
//             100% Money-Back Guarantee
//             <motion.div
//               animate={{ scale: [1, 1.2, 1] }}
//               transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
//               className="w-2 h-2 bg-green-500 rounded-full"
//             />
//           </motion.div>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             viewport={{ once: true }}
//             className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto"
//           >
//             We specialize in creating high-converting restaurant websites that increase online orders and customer
//             engagement.
//           </motion.p>
//         </motion.div>

//         {/* Stats Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
//         >
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.05, y: -5 }}
//               className="text-center p-6 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
//             >
//               <motion.p
//                 initial={{ scale: 0 }}
//                 whileInView={{ scale: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="text-4xl md:text-5xl font-bold mb-2 text-slate-900"
//               >
//                 {stat.value}
//               </motion.p>
//               <p className="text-slate-600 font-medium mb-1">{stat.label}</p>
//               <p className="text-xs text-green-600 font-semibold">{stat.subtext}</p>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Main Feature - 15 Days Support */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           viewport={{ once: true }}
//           className="bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-12 mb-16 shadow-sm hover:shadow-md transition-all duration-300"
//         >
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               viewport={{ once: true }}
//             >
//               <motion.div
//                 whileHover={{ scale: 1.1, rotate: 5 }}
//                 transition={{ duration: 0.3 }}
//                 className="w-20 h-20 rounded-full flex items-center justify-center mb-6 bg-slate-900 shadow-lg"
//               >
//                 <HeadphonesIcon size={36} className="text-white" />
//               </motion.div>

//               <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">
//                 15 Days of{" "}
//                 <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                   White-Glove Support
//                 </span>
//                 <div className="text-lg text-slate-600 font-normal mt-2">Because your success is our reputation</div>
//               </h3>

//               <p className="text-slate-600 text-lg leading-relaxed mb-6">
//                 After your restaurant website goes live, we provide 15 days of dedicated support at no additional cost.
//                 Your success is our priority.
//               </p>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.6 }}
//                 viewport={{ once: true }}
//                 className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 text-sm text-green-700 font-medium"
//               >
//                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
//                 100% Free - No Hidden Costs
//               </motion.div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.5 }}
//               viewport={{ once: true }}
//             >
//               <ul className="space-y-4">
//                 {supportItems.map((item, index) => (
//                   <motion.li
//                     key={index}
//                     initial={{ opacity: 0, x: 20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
//                     viewport={{ once: true }}
//                     className="flex items-start group"
//                   >
//                     <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
//                       <CheckCircle size={20} className="text-green-500 mr-4 flex-shrink-0 mt-0.5" />
//                     </motion.div>
//                     <span className="text-slate-700 group-hover:text-slate-900 transition-colors duration-200 font-medium">
//                       {item}
//                     </span>
//                   </motion.li>
//                 ))}
//               </ul>
//             </motion.div>
//           </div>
//         </motion.div>

//         {/* Features Grid */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
//         >
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.05, y: -5 }}
//               className="bg-white border border-slate-200 p-8 rounded-2xl text-center shadow-sm hover:shadow-lg transition-all duration-300 group"
//               onMouseEnter={() => setHovered(index)}
//               onMouseLeave={() => setHovered(null)}
//             >
//               <motion.div
//                 whileHover={{ scale: 1.1, rotate: 5 }}
//                 transition={{ duration: 0.3 }}
//                 className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 ${
//                   hovered === index ? "bg-slate-900 shadow-lg" : "bg-slate-100"
//                 }`}
//               >
//                 <span
//                   className={`transition-colors duration-300 ${hovered === index ? "text-white" : "text-slate-700"}`}
//                 >
//                   {feature.icon}
//                 </span>
//               </motion.div>

//               <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors duration-200">
//                 {feature.title}
//               </h4>

//               <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-200 mb-3">
//                 {feature.description}
//               </p>
//               <div className="text-xs text-green-600 font-semibold bg-green-50 px-3 py-1 rounded-full">
//                 ✓ {feature.guarantee}
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>    
//       </div>

//       {/* Enhanced Calendly Modal */}
//       <AnimatePresence>
//         {showCalendly && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
//             onClick={() => setShowCalendly(false)}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="w-full max-w-4xl h-[80vh] bg-white rounded-2xl overflow-hidden shadow-2xl relative"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <motion.button
//                 whileHover={{ scale: 1.1, rotate: 90 }}
//                 whileTap={{ scale: 0.9 }}
//                 onClick={() => setShowCalendly(false)}
//                 className="absolute top-4 right-4 z-10 bg-white/90 rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all duration-200"
//                 aria-label="Close calendar"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="20"
//                   height="20"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="text-gray-700"
//                 >
//                   <line x1="18" y1="6" x2="6" y2="18"></line>
//                   <line x1="6" y1="6" x2="18" y2="18"></line>
//                 </svg>
//               </motion.button>

//               <iframe
//                 src="https://calendly.com/samigabol12/45min?hide_gdpr_banner=1&background_color=121212&text_color=ffffff&primary_color=0065EA"
//                 width="100%"
//                 height="100%"
//                 frameBorder="0"
//                 title="Schedule a restaurant website consultation"
//                 className="calendly-inline-widget"
//               ></iframe>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   )
// }
