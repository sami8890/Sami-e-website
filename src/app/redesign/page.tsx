// "use client"
// import { CheckCircle, ArrowRight, Trophy } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import Image from "next/image"

// export default function HeroRedesignSection() {
//   const handleCTAClick = () => {
//     try {
//       window.open(
//         "https://wa.me/923701247494?text=Hi%2C%20I%20want%20to%20redesign%20my%20hero%20section%20for%20$99",
//         "_blank",
//         "noopener,noreferrer",
//       )
//     } catch (error) {
//       console.error("Error opening WhatsApp link:", error)
//       alert("Please contact us directly at +92 370 1247494")
//     }
//   }

//   const transformationImages = [
//     { before: "", after: "/" },
//     { before: "/", after: "/" },
//     { before: "/", after: "/" },
//     { before: "/", after: "/" },
//     { before: "/", after: "/" },
//   ]

//   return (
//     <section className="relative py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/40"></div>
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.03),transparent_50%)]"></div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="mb-6 sm:mb-8 lg:mb-12 animate-fade-in">
//             <div className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-100 to-blue-50 border border-slate-200/60 rounded-full px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 lg:py-3.5 text-xs sm:text-sm lg:text-base text-slate-700 font-medium shadow-sm hover:shadow-md transition-all duration-300">
//               <Trophy className="w-3 h-3 sm:w-4 sm:h-4 text-amber-600" />
//               20+ Successful Hero Transformations
//             </div>
//           </div>

//           <div className="mb-6 sm:mb-8 lg:mb-12 px-2">
//             <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-[1.1] text-slate-900 tracking-tight">
//               Stand Out with a Stunning
//               <br className="hidden sm:block" />
//               <span className="block mt-2 sm:mt-3">
//                 Website{" "}
//                 <span
//                   className="relative text-blue-600"
//                   style={{ fontFamily: "Instrument Serif, serif", fontWeight: 400 }}
//                 >
//                   Hero Redesign
//                   <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-60"></span>
//                 </span>
//               </span>
//             </h1>
//           </div>

//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 lg:gap-10 mb-8 sm:mb-10 lg:mb-12">
//             <div className="flex items-center gap-2.5 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-200/50 shadow-sm">
//               <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
//               <span className="text-sm sm:text-base text-slate-700 font-medium">48hrs delivery</span>
//             </div>
//             <div className="flex items-center gap-2.5 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-200/50 shadow-sm">
//               <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
//               <span className="text-sm sm:text-base text-slate-700 font-medium">3 Revisions included</span>
//             </div>
//           </div>

//           <div className="mb-12 sm:mb-16 lg:mb-20">
//             <Button
//               size="lg"
//               className="group bg-gradient-to-r from-slate-900 to-black hover:from-black hover:to-slate-800 text-white px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl w-full sm:w-auto shadow-lg"
//               onClick={handleCTAClick}
//             >
//               Transform My Hero Now - $99
//               <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
//             </Button>
//             <p className="mt-3 text-xs sm:text-sm text-slate-500">💳 Secure payment • 🔄 Money-back guarantee</p>
//           </div>
//         </div>

//         <div className="text-center mb-6 sm:mb-8 lg:mb-10">
//           <div className="flex items-center justify-center gap-4 mb-6">
//             <div className="w-12 h-px bg-gradient-to-r from-transparent to-slate-300"></div>
//             <p className="text-slate-600 font-medium text-sm sm:text-base">Recent Transformations</p>
//             <div className="w-12 h-px bg-gradient-to-l from-transparent to-slate-300"></div>
//           </div>
//         </div>

//         {/* Mobile layout */}
//         <div className="block lg:hidden">
//           <div className="space-y-8 max-w-2xl mx-auto">
//             {transformationImages.slice(0, 3).map((images, index) => (
//               <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200/60">
//                 {/* Before section */}
//                 <div className="p-4 bg-slate-50 border-b border-slate-200">
//                   <h4
//                     className="text-lg font-semibold text-slate-700 mb-3"
//                     style={{ fontFamily: "Instrument Serif, serif" }}
//                   >
//                     Before
//                   </h4>
//                   <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-md">
//                     <Image
//                       src={images.before || "/placeholder.svg"}
//                       alt={`Before transformation ${index + 1}`}
//                       width={600}
//                       height={450}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 </div>

//                 {/* After section */}
//                 <div className="p-4 bg-blue-50/30">
//                   <h4
//                     className="text-lg font-semibold text-blue-700 mb-3"
//                     style={{ fontFamily: "Instrument Serif, serif" }}
//                   >
//                     After
//                   </h4>
//                   <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-md ring-2 ring-blue-200">
//                     <Image
//                       src={images.after || "/placeholder.svg"}
//                       alt={`After transformation ${index + 1}`}
//                       width={600}
//                       height={450}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Desktop layout - Updated */}
//         <div className="hidden lg:block">
//           {/* Centered heading section with main arrow */}
//           <div className="max-w-6xl mx-auto mb-16 lg:mb-20">
//             <div className="grid grid-cols-3 gap-16 lg:gap-24 items-center">
//               <div className="text-center">
//                 <h3
//                   className="text-4xl lg:text-5xl xl:text-6xl font-normal text-slate-700"
//                   style={{ fontFamily: "Instrument Serif, serif" }}
//                 >
//                   Before
//                 </h3>
//               </div>

//               <div className="flex justify-center">
//                 <div className="w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full shadow-lg">
//                   <svg
//                     width="48"
//                     height="24"
//                     viewBox="0 0 64 32"
//                     fill="none"
//                     className="text-blue-600"
//                     aria-hidden="true"
//                   >
//                     <path
//                       d="M2 16H62M62 16L46 2M62 16L46 30"
//                       stroke="currentColor"
//                       strokeWidth="3"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </div>
//               </div>

//               <div className="text-center">
//                 <h3
//                   className="text-4xl lg:text-5xl xl:text-6xl font-normal bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
//                   style={{ fontFamily: "Instrument Serif, serif" }}
//                 >
//                   After
//                 </h3>
//               </div>
//             </div>
//           </div>

//           {/* Centered image pairs - bigger and wider */}
//           <div className="max-w-6xl mx-auto">
//             <div className="space-y-20 lg:space-y-24">
//               {transformationImages.map((images, index) => (
//                 <div key={index} className="grid grid-cols-2 gap-12 lg:gap-16">
//                   {/* Before */}
//                   <div className="group relative">
//                     <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200/60 transition-all duration-300 hover:shadow-3xl hover:scale-[1.02]">
//                       <div className="aspect-[4/3] relative">
//                         <Image
//                           src={images.before || "/placeholder.svg"}
//                           alt={`Before transformation ${index + 1}`}
//                           width={700}
//                           height={525}
//                           className="w-full h-full object-cover"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* After */}
//                   <div className="group relative">
//                     <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200/60 ring-4 ring-blue-200/50 transition-all duration-300 hover:shadow-3xl hover:scale-[1.02] hover:ring-blue-300/60">
//                       <div className="aspect-[4/3] relative">
//                         <Image
//                           src={images.after || "/placeholder.svg"}
//                           alt={`After transformation ${index + 1}`}
//                           width={700}
//                           height={525}
//                           className="w-full h-full object-cover"
//                         />
//                         <div className="absolute top-4 right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
//                           <CheckCircle className="w-5 h-5 text-white" />
//                         </div>
//                         <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in {
//           animation: fade-in 0.6s ease-out;
//         }
//       `}</style>
//     </section>
//   )
// }

export default function HeroRedesignSection() {
  return null;

}
