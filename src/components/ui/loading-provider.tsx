// "use client"

// import type React from "react"
// import { useState, useEffect, createContext, useContext } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { anton } from "@/lib/font"

// // Create a context to manage loading state globally
// type LoadingContextType = {
//     isLoading: boolean
//     setIsLoading: (loading: boolean) => void
// }

// const LoadingContext = createContext<LoadingContextType>({
//     isLoading: true,
//     setIsLoading: () => { },
// })

// export const useLoading = () => useContext(LoadingContext)

// // Change the export from a named export to a default export
// export default function LoadingProvider({ children }: { children: React.ReactNode }) {
//     const [isLoading, setIsLoading] = useState(true)
//     const [isMounted, setIsMounted] = useState(false)

//     // Handle initial loading
//     useEffect(() => {
//         // Mark as mounted to avoid hydration mismatch
//         setIsMounted(true)

//         // Set a timeout to hide the loading screen
//         // This gives the browser time to load and render content
//         const timer = setTimeout(() => {
//             setIsLoading(false)
//         }, 1000) // 1 second is usually enough for initial render

//         return () => clearTimeout(timer)
//     }, [])

//     // Don't render anything during SSR to avoid hydration mismatch
//     if (!isMounted) {
//         return null
//     }

//     return (
//         <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
//             <AnimatePresence mode="wait">{isLoading && <PremiumLoadingAnimation key="loading" />}</AnimatePresence>
//             <div
//                 style={{
//                     opacity: isLoading ? 0 : 1,
//                     transition: "opacity 0.3s ease-in-out",
//                     visibility: isLoading ? "hidden" : "visible",
//                 }}
//             >
//                 {children}
//             </div>
//         </LoadingContext.Provider>
//     )
// }

// // Simplified loading animation for better performance
// function PremiumLoadingAnimation() {
//     const [progress, setProgress] = useState(0)

//     // Update progress with optimized animation frame
//     useEffect(() => {
//         if (typeof window === "undefined") return

//         let rafId: number
//         const startTime = performance.now()
//         // Target duration for the entire animation in ms
//         const targetDuration = 1000

//         const updateProgress = (timestamp: number) => {
//             const elapsed = timestamp - startTime
//             // Linear progress calculation based on elapsed time
//             const newProgress = Math.min(100, (elapsed / targetDuration) * 100)
//             setProgress(newProgress)

//             if (newProgress < 100) {
//                 rafId = requestAnimationFrame(updateProgress)
//             }
//         }

//         rafId = requestAnimationFrame(updateProgress)
//         return () => cancelAnimationFrame(rafId)
//     }, [])

//     return (
//         <motion.div
//             className="fixed inset-0 flex items-center justify-center overflow-hidden h-screen w-screen z-[9999] bg-black"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0, transition: { duration: 0.3 } }}
//             aria-live="polite"
//             aria-label="Loading your experience"
//         >
//             {/* Grid background */}
//             <div
//                 className="absolute inset-0 opacity-20"
//                 style={{
//                     backgroundImage: `
//             linear-gradient(to right, #1a1a1a 1px, transparent 1px),
//             linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)
//           `,
//                     backgroundSize: "50px 50px",
//                 }}
//             />

//             {/* Content container */}
//             <div className="relative z-10 flex flex-col items-center px-4">
//                 {/* Logo */}
//                 <motion.div
//                     className="relative mb-8"
//                     initial={{ scale: 0.95, opacity: 0 }}
//                     animate={{ scale: 1, opacity: 1 }}
//                     transition={{ duration: 0.3, ease: "easeOut" }}
//                 >
//                     <div className="relative w-24 h-24 mb-2">
//                         <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-green-400">
//                             <div className="absolute inset-1 rounded-full bg-black" />
//                         </div>
//                         <div className="absolute inset-3 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
//                             <div className="text-white text-4xl font-bold">
//                                 <svg
//                                     viewBox="0 0 24 24"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     strokeWidth="2"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     className="w-10 h-10"
//                                     aria-hidden="true"
//                                 >
//                                     <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
//                                 </svg>
//                             </div>
//                         </div>
//                     </div>
//                 </motion.div>

//                 {/* Text and loading indicators */}
//                 <motion.div
//                     className="text-center space-y-4"
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.3, delay: 0.1 }}
//                 >
//                     <h2
//                         className={`${anton.className} text-4xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-600 tracking-wider`}
//                     >
//                         LOADING
//                     </h2>
//                 </motion.div>

//                 {/* Progress bar */}
//                 <motion.div
//                     className="w-56 sm:w-64 h-1 bg-gray-700 rounded-full overflow-hidden mt-8"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.2, delay: 0.2 }}
//                 >
//                     <motion.div
//                         className="h-full bg-gradient-to-r from-emerald-400 to-green-500 rounded-full will-change-transform"
//                         style={{ width: `${progress}%` }}
//                     />
//                 </motion.div>
//             </div>
//         </motion.div>
//     )
// }

