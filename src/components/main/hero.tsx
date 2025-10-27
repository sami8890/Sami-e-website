"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Ticker from "./marque";
import Link from "next/link";

const tools = [
  {
    name: "Figma",
    icon: "https://framerusercontent.com/images/i0ob5TnIF36Osq1Gd7Tb2UaOCRE.svg",
    width: 24,
    height: 25,
  },
  {
    name: "Framer",
    icon: "https://framerusercontent.com/images/q0LOsiH3qEkXl83edU0uXNuRQ.svg",
    width: 24,
    height: 25,
  },
  {
    name: "React",
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    width: 24,
    height: 24,
  },
  {
    name: "NextJS",
    icon: "https://framerusercontent.com/images/Y0hOrMC1SZrltsBnp8CUVxdu0Hw.svg",
    width: 48,
    height: 48,
  },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden pt-16 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-12"
      style={
        {
          "--animate-bounce-subtle": "bounce-subtle 2s ease-in-out 0.8s",
          "--animate-bounce-subtle-delay": "bounce-subtle 2s ease-in-out 1s",
        } as React.CSSProperties
      }
    >
      <style jsx>{`
        @keyframes bounce-subtle {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-4px);
          }
          60% {
            transform: translateY(-2px);
          }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out 0.8s;
        }
        .animate-bounce-subtle-delay {
          animation: bounce-subtle 2s ease-in-out 1s;
        }
      `}</style>

      {/* Premium background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>

      <div className="container mx-auto px-6 sm:px-8 relative z-10 flex flex-col items-center">
        <div className="max-w-4xl mx-auto py-8 md:py-0">
          <div className="text-center space-y-6 sm:space-y-7 md:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="pt-2 sm:pt-6 md:pt-0"
            >
              <motion.div
                animate={{
                  scale: [1, 1.02, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(34, 197, 94, 0.3)",
                    "0 0 0 6px rgba(34, 197, 94, 0)",
                    "0 0 0 0 rgba(34, 197, 94, 0)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-flex items-center gap-1 bg-green-50 border border-green-200 rounded-full px-2.5 py-1 text-xs text-green-700 font-medium shadow-sm"
              >
                <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                <span>Accepting new projects </span>
              </motion.div>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="px-2 sm:px-4 md:px-0"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.2] sm:leading-[1.15] md:leading-[1.1] text-slate-900">
                {/* Mobile */}
                <span className="block sm:hidden">
                  We Build
                  <br />
                  <span
                    className="text-blue-600"
                    style={{ fontFamily: "Instrument Serif, serif" }}
                  >
                    Websites That Work
                  </span>
                  <br />
                  For People, Not Just Pixels
                </span>

                {/* Desktop */}
                <span className="hidden sm:block">
                  We Build{" "}
                  <span
                    className="text-blue-600"
                    style={{ fontFamily: "Instrument Serif, serif" }}
                  >
                    Websites That Work
                  </span>
                  <br />
                  For People, Not For Pixels
                </span>
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-3 px-4 sm:px-6 md:px-0 pt-2 sm:pt-4"
            >
              <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Websites that don&apos;t just look good—they win trust, clicks, and
                customers.
              </p>
            </motion.div>

            {/* CTA Section */}
           <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6 sm:space-y-7 pt-4 sm:pt-8 md:pt-2"
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center items-center px-6 sm:px-4 pb-4 sm:pb-0">
                {/* First Button - See Our Work */}
                <Link href="/work" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white px-8 py-6 sm:px-8 sm:py-6 text-base font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] min-w-[180px] animate-bounce-subtle"
                  >
                    <span className="flex items-center gap-2">
                      See Our Work
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Button>
                </Link>

                {/* Second Button - Book a Call */}
                <Link href="/booking" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto border-2 border-black text-black hover:bg-black hover:text-white px-6 py-6 sm:px-8 sm:py-6 text-base font-semibold rounded-xl transition-all duration-300 bg-transparent min-w-[160px] flex items-center gap-3 animate-bounce-subtle-delay"
                  >
                    <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src="/main.png"
                        alt="Profile photo"
                        width={24}
                        height={24}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    Book a Call
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 md:mt-16 py-8 w-full">
          <Ticker />
        </div>

        {/* Tools */}
        <div className="mt-12 sm:mt-16 md:mt-12 max-w-4xl mx-auto">
          <div className="bg-[#EAEAEA] backdrop-blur-lg border border-slate-200/50 rounded-lg p-4 sm:p-6 md:p-8 shadow-lg">
            <div className="text-center space-y-4 sm:space-y-6">
              <div>
                <p className="text-slate-700 text-sm sm:text-base md:text-lg font-medium">
                  We Use Industry-Standard Tools & Technologies
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
                {tools.map((tool, index) => (
                  <div
                    key={tool.name}
                    className="flex items-center gap-2 sm:gap-3 group"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg bg-white shadow-sm border border-slate-100 group-hover:shadow-md transition-all duration-300">
                      <Image
                        src={tool.icon}
                        alt={`${tool.name} icon`}
                        width={tool.name === "React" ? 24 : tool.width}
                        height={tool.name === "React" ? 24 : tool.height}
                        className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 object-contain"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-slate-800 font-semibold text-xs sm:text-sm md:text-base group-hover:text-blue-600 transition-colors duration-300">
                      {tool.name}
                      {index < tools.length - 1 && (
                        <span className="text-slate-400 ml-1">,</span>
                      )}
                      {index === tools.length - 2 && (
                        <span className="text-slate-700 ml-2"></span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// SECOND VERSION _____________________________________________________________________________________________________
// ___________________________________________________________________
// ===============================================



// "use client";

// import { Instrument_Serif } from "next/font/google";
// import React from "react";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Star } from "lucide-react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Ticker from "./marque";

// // Load font for headings (we'll apply it only to mobile heading)
// const instrumentSerif = Instrument_Serif({
//   weight: "400",
//   subsets: ["latin"],
// });

// // Sample client data - replace with your actual clients
// const clients = [
//   {
//     name: "Kyle Nianga",
//     image: "/testimonial/kyle.png",
//     company: "SEO Agency Startup ",
//   },
//   {
//     name: "Ahmed Hassan",
//     image: "/testimonial/ahmed.png",
//     company: "Video-Editor Agency",
//   },
//   {
//     name: "Muhammad Ibrahim",
//     image: "/testimonial/ibrahim.png",
//     company: "Portfolio_website",
//   },
// ];

// const tools = [
//   {
//     name: "Figma",
//     icon: "https://framerusercontent.com/images/i0ob5TnIF36Osq1Gd7Tb2UaOCRE.svg",
//     width: 24,
//     height: 25,
//   },
//   {
//     name: "Framer",
//     icon: "https://framerusercontent.com/images/q0LOsiH3qEkXl83edU0uXNuRQ.svg",
//     width: 24,
//     height: 25,
//   },
//   {
//     name: "React",
//     icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
//     width: 24,
//     height: 24,
//   },
//   {
//     name: "NextJS",
//     icon: "https://framerusercontent.com/images/Y0hOrMC1SZrltsBnp8CUVxdu0Hw.svg",
//     width: 48,
//     height: 48,
//   },
// ];

// export default function HeroSection() {
//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden pt-16 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-12"
//       style={
//         {
//           "--animate-bounce-subtle": "bounce-subtle 2s ease-in-out 0.8s",
//           "--animate-bounce-subtle-delay": "bounce-subtle 2s ease-in-out 1s",
//         } as React.CSSProperties
//       }
//     >
//       <style jsx>{`
//         @keyframes bounce-subtle {
//           0%,
//           20%,
//           50%,
//           80%,
//           100% {
//             transform: translateY(0);
//           }
//           40% {
//             transform: translateY(-4px);
//           }
//           60% {
//             transform: translateY(-2px);
//           }
//         }
//         .animate-bounce-subtle {
//           animation: bounce-subtle 2s ease-in-out 0.8s;
//         }
//         .animate-bounce-subtle-delay {
//           animation: bounce-subtle 2s ease-in-out 1s;
//         }
//       `}</style>

//       {/* Premium background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>

//       <div className="container mx-auto px-6 sm:px-8 relative z-10 flex flex-col items-center">
//         <div className="max-w-4xl mx-auto py-8 md:py-0">
//           <div className="text-center space-y-6 sm:space-y-7 md:space-y-6">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="pt-2 sm:pt-6 md:pt-0"
//             >
//               <motion.div
//                 animate={{
//                   scale: [1, 1.02, 1],
//                   boxShadow: [
//                     "0 0 0 0 rgba(34, 197, 94, 0.3)",
//                     "0 0 0 6px rgba(34, 197, 94, 0)",
//                     "0 0 0 0 rgba(34, 197, 94, 0)",
//                   ],
//                 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="inline-flex items-center gap-1 bg-green-50 border border-green-200 rounded-full px-2.5 py-1 text-xs text-green-700 font-medium shadow-sm"
//               >
//                 <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
//                 <span>Only 2 Spots Left (september)</span>
//               </motion.div>
//             </motion.div>

//             {/* Headline */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="px-2 sm:px-4 md:px-0"
//             >
//               <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.2] sm:leading-[1.15] md:leading-[1.1] text-slate-900">
//                 {/* Mobile: entire heading uses Instrument Serif */}
//                 <span className={`block sm:hidden ${instrumentSerif.className}`}>
//                   We Build
//                   <br />
//                   <span className="text-blue-600">Websites That Work</span>
//                   <br />
//                   For People, Not For Pixels
//                 </span>

//                 {/* Desktop: keep original styling (Instrument Serif NOT applied) */}
//                 <span className="hidden sm:block">
//                   We Build{" "}
//                   <span className="text-blue-600">Websites That Work</span>
//                   <br />
//                   For People, Not Just Pixels
//                 </span>
//               </h1>
//             </motion.div>

//             {/* Subheading */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="space-y-3 px-4 sm:px-6 md:px-0 pt-2 sm:pt-4"
//             >
//               <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
//                 Websites that don&apos;t just look good—they win trust, clicks, and
//                 customers.
//               </p>
//             </motion.div>

//             {/* CTA Section */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//               className="space-y-6 sm:space-y-7 pt-4 sm:pt-8 md:pt-2"
//             >
//               <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center items-center px-6 sm:px-4 pb-4 sm:pb-0">
//                 <Button
//                   size="lg"
//                   className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white px-8 py-6 sm:px-8 sm:py-6 text-base font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] min-w-[180px] animate-bounce-subtle"
//                   onClick={() => {
//                     document
//                       .getElementById("testimonials")
//                       ?.scrollIntoView({ behavior: "smooth" });
//                   }}
//                 >
//                   <span className="flex items-center gap-2">
//                     See Our Work
//                     <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//                   </span>
//                 </Button>
//                 <Button
//                   variant="outline"
//                   size="lg"
//                   className="w-full sm:w-auto border-2 border-black text-black hover:bg-black hover:text-white px-6 py-6 sm:px-8 sm:py-6 text-base font-semibold rounded-xl transition-all duration-300 bg-transparent min-w-[160px] flex items-center gap-3 animate-bounce-subtle-delay"
//                   onClick={() => {
//                     window.open(
//                       "https://wa.me/923701247494?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation%20call",
//                       "_blank",
//                       "noopener,noreferrer"
//                     );
//                   }}
//                 >
//                   <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
//                     <Image
//                       src="/main.png"
//                       alt="Profile photo"
//                       width={24}
//                       height={24}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   Book a Call
//                 </Button>
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         <Ticker />

//         {/* Social Proof */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 1.4 }}
//           className="mt-16 sm:mt-20 md:mt-16 max-w-4xl mx-auto hidden md:block"
//         >
//           <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-3xl p-6 shadow-2xl">
//             <div className="text-center mb-6">
//               <div className="flex items-center justify-center gap-1 mb-2">
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <motion.div
//                     key={star}
//                     initial={{ opacity: 0, scale: 0 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.3, delay: 1.5 + star * 0.1 }}
//                   >
//                     <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
//                   </motion.div>
//                 ))}
//               </div>
//               <p className="text-xl font-bold text-slate-900 dark:text-white mb-1">
//                 4.9/5 Client Rating
//               </p>
//               <p className="text-slate-600 dark:text-slate-400 text-base">
//                 &quot;They understood our vision and delivered a website that simply
//                 works.&quot;
//               </p>
//             </div>

//             {/* Client Avatars */}
//             <div className="flex items-center justify-center">
//               <div className="flex -space-x-3">
//                 {clients.map((client, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.5, delay: 1.6 + i * 0.1 }}
//                     className="relative"
//                   >
//                     <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-[2px] shadow-lg">
//                       <div className="h-full w-full rounded-full bg-white dark:bg-slate-900 p-1">
//                         <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
//                           <Image
//                             src={
//                               client.image ||
//                               "/placeholder.svg?height=48&width=48&query=client avatar"
//                             }
//                             alt={`${client.name}'s avatar`}
//                             className="h-full w-full object-cover rounded-full"
//                             height={48}
//                             width={48}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//               <div className="ml-4 text-left">
//                 <p className="text-xs text-slate-600 dark:text-slate-400">
//                   Trusted by
//                 </p>
//                 <p className="font-bold text-slate-900 dark:text-white text-sm">
//                   Happy Clients
//                 </p>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
