// // // "use client"
// // // import React, { useState, useRef, useEffect } from "react"
// // // import { Play, Pause, Volume2, VolumeX, Quote, Clock, ArrowLeft, Loader } from "lucide-react"

// // // const testimonials = [
// // //   {
// // //     id: 1,
// // //     name: "Ahmed Hassan",
// // //     company: "Video-Editor Agency",
// // //     videoUrl: "https://res.cloudinary.com/dpyireagy/video/upload/v1760983513/VID-20251017-WA0001_1_wbd27t.mp4",
// // //     accent: "from-blue-200 to-indigo-800",
// // //   },
// // //   {
// // //     id: 2,
// // //     name: "Kyle Nianga",
// // //     company: "SEO Agency Startup",
// // //     videoUrl: "https://res.cloudinary.com/dpyireagy/video/upload/v1758002457/Kyle_rfbfnp.mp4",
// // //     accent: "from-blue-500 to-indigo-600",
// // //   },
// // // ]

// // // export default function VideoTestimonialSection() {
// // //   const [activeTestimonial, setActiveTestimonial] = useState(0)
// // //   const [isPlaying, setIsPlaying] = useState(false)
// // //   const [isMuted, setIsMuted] = useState(false)
// // //   const [isLoading, setIsLoading] = useState(true)
// // //   const [showControls, setShowControls] = useState(true)
// // //   const [progress, setProgress] = useState(0)
// // //   const [duration, setDuration] = useState(0)
// // //   const [currentTime, setCurrentTime] = useState(0)
  
// // //   const videoRef = useRef(null)
// // //   const controlsTimeoutRef = useRef(null)

// // //   const currentTestimonial = testimonials[activeTestimonial]

// // //   // Reset controls timeout
// // //   const resetControlsTimeout = () => {
// // //     if (controlsTimeoutRef.current) {
// // //       clearTimeout(controlsTimeoutRef.current)
// // //     }
// // //     setShowControls(true)
// // //     if (isPlaying) {
// // //       controlsTimeoutRef.current = setTimeout(() => {
// // //         setShowControls(false)
// // //       }, 3000)
// // //     }
// // //   }

// // //   // Handle video metadata loaded
// // //   const handleLoadedMetadata = () => {
// // //     if (videoRef.current) {
// // //       setDuration(videoRef.current.duration)
// // //       setIsLoading(false)
// // //     }
// // //   }

// // //   // Handle video time update
// // //   const handleTimeUpdate = () => {
// // //     if (videoRef.current) {
// // //       setCurrentTime(videoRef.current.currentTime)
// // //       setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100)
// // //     }
// // //   }

// // //   // Handle play/pause
// // //   const handlePlayPause = () => {
// // //     if (videoRef.current) {
// // //       if (isPlaying) {
// // //         videoRef.current.pause()
// // //         setIsPlaying(false)
// // //         setShowControls(true)
// // //         if (controlsTimeoutRef.current) {
// // //           clearTimeout(controlsTimeoutRef.current)
// // //         }
// // //       } else {
// // //         videoRef.current.play()
// // //         setIsPlaying(true)
// // //         resetControlsTimeout()
// // //       }
// // //     }
// // //   }

// // //   // Handle mute toggle
// // //   const handleMute = () => {
// // //     if (videoRef.current) {
// // //       videoRef.current.muted = !isMuted
// // //       setIsMuted(!isMuted)
// // //     }
// // //   }

// // //   // Handle progress bar click
// // //   const handleProgressClick = (e) => {
// // //     if (videoRef.current) {
// // //       const rect = e.currentTarget.getBoundingClientRect()
// // //       const pos = (e.clientX - rect.left) / rect.width
// // //       videoRef.current.currentTime = pos * videoRef.current.duration
// // //     }
// // //   }

// // //   // Format time display
// // //   const formatTime = (seconds) => {
// // //     const mins = Math.floor(seconds / 60)
// // //     const secs = Math.floor(seconds % 60)
// // //     return `${mins}:${secs.toString().padStart(2, '0')}`
// // //   }

// // //   // Handle testimonial switch
// // //   const switchTestimonial = (index) => {
// // //     setActiveTestimonial(index)
// // //     setIsPlaying(false)
// // //     setProgress(0)
// // //     setCurrentTime(0)
// // //     setIsLoading(true)
// // //     if (videoRef.current) {
// // //       videoRef.current.currentTime = 0
// // //       videoRef.current.load()
// // //     }
// // //   }

// // //   // Cleanup timeout on unmount
// // //   useEffect(() => {
// // //     return () => {
// // //       if (controlsTimeoutRef.current) {
// // //         clearTimeout(controlsTimeoutRef.current)
// // //       }
// // //     }
// // //   }, [])

// // //   // Handle mouse movement to show controls
// // //   useEffect(() => {
// // //     if (isPlaying) {
// // //       resetControlsTimeout()
// // //     }
// // //   }, [isPlaying])

// // //   return (
// // //     <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
// // //       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.03),transparent_50%)]"></div>
// // //       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.03),transparent_50%)]"></div>

// // //       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
// // //         <div className="mb-8 sm:mb-12">
// // //           <button className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors duration-300 group">
// // //             <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
// // //             <span>Back to Home</span>
// // //           </button>
// // //         </div>

// // //         <div className="text-center mb-12 sm:mb-16">
// // //           <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200/60 rounded-full px-4 py-2 mb-6 sm:mb-8 shadow-sm">
// // //             <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></div>
// // //             <span className="text-xs font-semibold text-slate-700 uppercase tracking-widest">Client Testimonials</span>
// // //           </div>

// // //           <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 mb-4 sm:mb-5 px-2 leading-[1.1]">
// // //             Transformative Results,{" "}
// // //             <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
// // //               Validated Success
// // //             </span>
// // //           </h2>
// // //           <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4 leading-relaxed">
// // //             Direct insight from partners who've accelerated growth through strategic collaboration
// // //           </p>
// // //         </div>

// // //         <div className="max-w-6xl mx-auto">
// // //           <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 items-start">
// // //             {/* Video Section */}
// // //             <div className="lg:col-span-3 order-1 lg:order-1">
// // //               <div className="relative group">
// // //                 <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-slate-900 shadow-xl sm:shadow-2xl">
// // //                   <div className={`absolute inset-0 bg-gradient-to-br ${currentTestimonial.accent} opacity-10`}></div>

// // //                   <div 
// // //                     className="relative w-full cursor-pointer" 
// // //                     style={{ aspectRatio: '16/9' }}
// // //                     onClick={handlePlayPause}
// // //                     onMouseMove={resetControlsTimeout}
// // //                   >
// // //                     <video
// // //                       ref={videoRef}
// // //                       className="w-full h-full object-contain bg-black"
// // //                       src={currentTestimonial.videoUrl}
// // //                       onEnded={() => {
// // //                         setIsPlaying(false)
// // //                         setShowControls(true)
// // //                       }}
// // //                       onLoadedMetadata={handleLoadedMetadata}
// // //                       onTimeUpdate={handleTimeUpdate}
// // //                       onLoadStart={() => setIsLoading(true)}
// // //                       onCanPlay={() => setIsLoading(false)}
// // //                       playsInline
// // //                       preload="metadata"
// // //                     >
// // //                       Your browser does not support the video tag.
// // //                     </video>

// // //                     {/* Loading Indicator */}
// // //                     {isLoading && (
// // //                       <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
// // //                         <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/90 rounded-full flex items-center justify-center">
// // //                           <Loader className="w-6 h-6 text-slate-900 animate-spin" />
// // //                         </div>
// // //                       </div>
// // //                     )}

// // //                     {/* Play Button Overlay (when paused) */}
// // //                     {!isPlaying && !isLoading && (
// // //                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-center justify-center">
// // //                         <button
// // //                           onClick={handlePlayPause}
// // //                           className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 shadow-2xl"
// // //                           aria-label="Play video"
// // //                         >
// // //                           <Play className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 text-slate-900 ml-1" />
// // //                         </button>
// // //                       </div>
// // //                     )}

// // //                     {/* Video Controls (when playing) */}
// // //                     {isPlaying && (
// // //                       <div 
// // //                         className={`absolute inset-0 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}
// // //                         onMouseMove={resetControlsTimeout}
// // //                       >
// // //                         {/* Center Play/Pause Button */}
// // //                         <div className="absolute inset-0 flex items-center justify-center">
// // //                           <button
// // //                             onClick={handlePlayPause}
// // //                             className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-all duration-300 hover:scale-110"
// // //                             aria-label="Pause video"
// // //                           >
// // //                             <Pause className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 text-white" />
// // //                           </button>
// // //                         </div>

// // //                         {/* Bottom Control Bar */}
// // //                         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4">
// // //                           {/* Progress Bar */}
// // //                           <div 
// // //                             className="w-full h-1 sm:h-1.5 bg-white/20 rounded-full cursor-pointer mb-3 group/progress"
// // //                             onClick={handleProgressClick}
// // //                           >
// // //                             <div 
// // //                               className="h-full bg-white rounded-full transition-all duration-100 relative group-hover/progress:h-2"
// // //                               style={{ width: `${progress}%` }}
// // //                             >
// // //                               <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover/progress:opacity-100 transition-opacity"></div>
// // //                             </div>
// // //                           </div>

// // //                           {/* Control Buttons */}
// // //                           <div className="flex items-center justify-between">
// // //                             <div className="flex items-center gap-3">
// // //                               <button
// // //                                 onClick={handlePlayPause}
// // //                                 className="w-8 h-8 sm:w-9 sm:h-9 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200"
// // //                                 aria-label={isPlaying ? "Pause" : "Play"}
// // //                               >
// // //                                 {isPlaying ? (
// // //                                   <Pause className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />
// // //                                 ) : (
// // //                                   <Play className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white ml-0.5" />
// // //                                 )}
// // //                               </button>

// // //                               <span className="text-white text-xs sm:text-sm font-medium">
// // //                                 {formatTime(currentTime)} / {formatTime(duration)}
// // //                               </span>
// // //                             </div>

// // //                             <button
// // //                               onClick={handleMute}
// // //                               className="w-8 h-8 sm:w-9 sm:h-9 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200"
// // //                               aria-label={isMuted ? "Unmute" : "Mute"}
// // //                             >
// // //                               {isMuted ? (
// // //                                 <VolumeX className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />
// // //                               ) : (
// // //                                 <Volume2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />
// // //                               )}
// // //                             </button>
// // //                           </div>
// // //                         </div>
// // //                       </div>
// // //                     )}
// // //                   </div>
// // //                 </div>

// // //                 <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-20 h-20 sm:w-24 sm:h-24 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>
// // //                 <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-24 h-24 sm:w-32 sm:h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none"></div>
// // //               </div>
// // //             </div>

// // //             {/* Testimonial List Section */}
// // //             <div className="lg:col-span-2 order-2 lg:order-2 space-y-3 sm:space-y-4">
// // //               <div className="mb-4 sm:mb-6">
// // //                 <h3 className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2 sm:mb-3">Client Stories</h3>
// // //                 <div className="h-px bg-gradient-to-r from-slate-200 to-transparent"></div>
// // //               </div>

// // //               {testimonials.map((testimonial, index) => (
// // //                 <button
// // //                   key={testimonial.id}
// // //                   onClick={() => switchTestimonial(index)}
// // //                   className={`w-full text-left p-3 sm:p-4 rounded-lg sm:rounded-xl transition-all duration-300 group ${
// // //                     index === activeTestimonial
// // //                       ? "bg-gradient-to-r from-slate-900 to-slate-800 shadow-lg scale-[1.02]"
// // //                       : "bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300"
// // //                   }`}
// // //                 >
// // //                   <div className="flex items-center gap-3 sm:gap-4">
// // //                     <div className="flex-1 min-w-0">
// // //                       <h4 className={`font-semibold text-sm sm:text-base truncate ${index === activeTestimonial ? "text-white" : "text-slate-900"}`}>
// // //                         {testimonial.name}
// // //                       </h4>
// // //                       <p className={`text-xs sm:text-sm truncate ${index === activeTestimonial ? "text-white/70" : "text-slate-500"}`}>
// // //                         {testimonial.company}
// // //                       </p>
// // //                     </div>

// // //                     <div
// // //                       className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
// // //                         index === activeTestimonial ? "bg-white/20" : "bg-slate-100 group-hover:bg-blue-50"
// // //                       }`}
// // //                     >
// // //                       <Play
// // //                         className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ml-0.5 ${
// // //                           index === activeTestimonial ? "text-white" : "text-slate-600 group-hover:text-blue-600"
// // //                         }`}
// // //                       />
// // //                     </div>
// // //                   </div>
// // //                 </button>
// // //               ))}

// // //               <div className="relative group/coming-soon">
// // //                 <div className="w-full p-4 sm:p-6 rounded-lg sm:rounded-xl bg-white border-2 border-dashed border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
// // //                   <div className="flex items-center gap-3 sm:gap-4">
// // //                     <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0 group-hover/coming-soon:bg-blue-50 transition-colors duration-300">
// // //                       <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 group-hover/coming-soon:text-blue-600 transition-colors duration-300" />
// // //                     </div>

// // //                     <div className="flex-1 min-w-0">
// // //                       <h4 className="font-semibold text-slate-900 text-sm sm:text-base mb-1">More Success Stories</h4>
// // //                       <p className="text-slate-600 text-xs sm:text-sm mb-2">Coming soon...</p>
// // //                       <div className="w-full bg-slate-100 rounded-full h-1 overflow-hidden">
// // //                         <div className="h-full bg-blue-500 rounded-full w-2/3 transition-all duration-300 group-hover/coming-soon:w-3/4"></div>
// // //                       </div>
// // //                     </div>

// // //                     <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover/coming-soon:bg-blue-50 transition-colors duration-300 flex-shrink-0">
// // //                       <div className="w-2 h-2 bg-slate-400 rounded-full group-hover/coming-soon:bg-blue-500 transition-colors duration-300"></div>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-slate-50 rounded-lg border border-slate-200">
// // //                 <p className="text-xs sm:text-sm text-slate-600 text-center">
// // //                   <span className="font-medium text-slate-900">Want to be featured?</span>
// // //                   <br />
// // //                   Join our growing list of success stories
// // //                 </p>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   )
// // // }

// // "use client"
// // import React, { useState, useRef, useEffect, useCallback } from "react"
// // import { Play, Pause, Volume2, VolumeX, Clock, ArrowLeft, Loader } from "lucide-react"

// // const testimonials = [
// //   {
// //     id: 1,
// //     name: "Ahmed Hassan",
// //     company: "Video-Editor Agency",
// //     videoUrl: "https://res.cloudinary.com/dpyireagy/video/upload/v1760983513/VID-20251017-WA0001_1_wbd27t.mp4",
// //     accent: "from-blue-200 to-indigo-800",
// //   },
// //   {
// //     id: 2,
// //     name: "Kyle Nianga",
// //     company: "SEO Agency Startup",
// //     videoUrl: "https://res.cloudinary.com/dpyireagy/video/upload/v1758002457/Kyle_rfbfnp.mp4",
// //     accent: "from-blue-500 to-indigo-600",
// //   },
// // ]

// // export default function VideoTestimonialSection() {
// //   const [activeTestimonial, setActiveTestimonial] = useState(0)
// //   const [isPlaying, setIsPlaying] = useState(false)
// //   const [isMuted, setIsMuted] = useState(false)
// //   const [isLoading, setIsLoading] = useState(false)
// //   const [controlState, setControlState] = useState('hidden')
// //   const [progress, setProgress] = useState(0)
// //   const [duration, setDuration] = useState(0)
// //   const [currentTime, setCurrentTime] = useState(0)
// //   const [lastTapTime, setLastTapTime] = useState(0)
// //   const [hasInteracted, setHasInteracted] = useState(false)
  
// //   const videoRef = useRef(null)
// //   const controlsTimeoutRef = useRef(null)
// //   const containerRef = useRef(null)

// //   const currentTestimonial = testimonials[activeTestimonial]

// //   // Sophisticated control state orchestration
// //   const handleUserInteraction = useCallback((type) => {
// //     if (type === 'move' || type === 'touch' || type === 'click') {
// //       setControlState('visible')
      
// //       if (controlsTimeoutRef.current) {
// //         clearTimeout(controlsTimeoutRef.current)
// //       }
      
// //       if (isPlaying) {
// //         controlsTimeoutRef.current = setTimeout(() => {
// //           setControlState('fading')
// //           setTimeout(() => setControlState('hidden'), 400)
// //         }, 2000)
// //       }
// //     }
// //   }, [isPlaying])

// //   // Video metadata loaded
// //   const handleLoadedMetadata = () => {
// //     if (videoRef.current) {
// //       setDuration(videoRef.current.duration)
// //     }
// //   }

// //   // Video buffered and ready
// //   const handleCanPlay = () => {
// //     if (hasInteracted) {
// //       setIsLoading(false)
// //     }
// //   }

// //   // Video actively playing
// //   const handlePlaying = () => {
// //     setIsLoading(false)
// //   }

// //   // Contextual preloading architecture
// //   useEffect(() => {
// //     const nextIndex = (activeTestimonial + 1) % testimonials.length
// //     const preloadVideo = document.createElement('video')
// //     preloadVideo.src = testimonials[nextIndex].videoUrl
// //     preloadVideo.preload = 'metadata'
// //     preloadVideo.load()
    
// //     return () => {
// //       preloadVideo.src = ''
// //       preloadVideo.remove()
// //     }
// //   }, [activeTestimonial])

// //   // Time update handler
// //   const handleTimeUpdate = () => {
// //     if (videoRef.current) {
// //       setCurrentTime(videoRef.current.currentTime)
// //       setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100)
// //     }
// //   }

// //   // Intelligent play/pause orchestration
// //   const handlePlayPause = (e) => {
// //     if (e) e.stopPropagation()
    
// //     if (videoRef.current) {
// //       if (isPlaying) {
// //         videoRef.current.pause()
// //         setIsPlaying(false)
// //         setControlState('visible')
// //         if (controlsTimeoutRef.current) {
// //           clearTimeout(controlsTimeoutRef.current)
// //         }
// //       } else {
// //         setHasInteracted(true)
// //         setIsLoading(true)
// //         videoRef.current.play().then(() => {
// //           setIsPlaying(true)
// //           handleUserInteraction('click')
// //         }).catch(err => {
// //           console.error('Playback error:', err)
// //           setIsLoading(false)
// //         })
// //       }
// //     }
// //   }

// //   // Mobile-optimized double-tap skip gesture
// //   const handleDoubleTap = (e, direction) => {
// //     const now = Date.now()
// //     const timeSinceLastTap = now - lastTapTime
    
// //     if (timeSinceLastTap < 300 && timeSinceLastTap > 0) {
// //       e.stopPropagation()
// //       if (videoRef.current) {
// //         const skipAmount = direction === 'forward' ? 10 : -10
// //         videoRef.current.currentTime = Math.max(0, Math.min(duration, currentTime + skipAmount))
// //       }
      
// //       const indicator = e.currentTarget.querySelector('.skip-indicator')
// //       if (indicator) {
// //         indicator.classList.add('active')
// //         setTimeout(() => indicator.classList.remove('active'), 500)
// //       }
// //     }
    
// //     setLastTapTime(now)
// //   }

// //   // Audio control
// //   const handleMute = (e) => {
// //     e.stopPropagation()
// //     if (videoRef.current) {
// //       videoRef.current.muted = !isMuted
// //       setIsMuted(!isMuted)
// //     }
// //   }

// //   // Progress bar interaction
// //   const handleProgressClick = (e) => {
// //     e.stopPropagation()
// //     if (videoRef.current) {
// //       const rect = e.currentTarget.getBoundingClientRect()
// //       const pos = (e.clientX - rect.left) / rect.width
// //       videoRef.current.currentTime = pos * videoRef.current.duration
// //     }
// //   }

// //   // Time formatting
// //   const formatTime = (seconds) => {
// //     if (isNaN(seconds) || !isFinite(seconds)) return '0:00'
// //     const mins = Math.floor(seconds / 60)
// //     const secs = Math.floor(seconds % 60)
// //     return `${mins}:${secs.toString().padStart(2, '0')}`
// //   }

// //   // Testimonial switching with clean state reset
// //   const switchTestimonial = (index) => {
// //     setActiveTestimonial(index)
// //     setIsPlaying(false)
// //     setProgress(0)
// //     setCurrentTime(0)
// //     setIsLoading(false)
// //     setHasInteracted(false)
// //     setControlState('hidden')
    
// //     if (controlsTimeoutRef.current) {
// //       clearTimeout(controlsTimeoutRef.current)
// //     }
    
// //     if (videoRef.current) {
// //       videoRef.current.currentTime = 0
// //       videoRef.current.pause()
// //       videoRef.current.load()
// //     }
// //   }

// //   // Cleanup
// //   useEffect(() => {
// //     return () => {
// //       if (controlsTimeoutRef.current) {
// //         clearTimeout(controlsTimeoutRef.current)
// //       }
// //     }
// //   }, [])

// //   return (
// //     <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
// //       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.03),transparent_50%)]"></div>
// //       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.03),transparent_50%)]"></div>

// //       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
// //         <div className="mb-8 sm:mb-12">
// //           <button className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors duration-300 group">
// //             <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
// //             <span>Back to Home</span>
// //           </button>
// //         </div>

// //         <div className="text-center mb-12 sm:mb-16">
// //           <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200/60 rounded-full px-4 py-2 mb-6 sm:mb-8 shadow-sm">
// //             <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></div>
// //             <span className="text-xs font-semibold text-slate-700 uppercase tracking-widest">Client Testimonials</span>
// //           </div>

// //           <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 mb-4 sm:mb-5 px-2 leading-[1.1]">
// //             Transformative Results,{" "}
// //             <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
// //               Validated Success
// //             </span>
// //           </h2>
// //           <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4 leading-relaxed">
// //             Direct insight from partners who've accelerated growth through strategic collaboration
// //           </p>
// //         </div>

// //         <div className="max-w-6xl mx-auto">
// //           <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 items-start">
// //             {/* Video Section */}
// //             <div className="lg:col-span-3 order-1 lg:order-1">
// //               <div className="relative group">
// //                 <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-slate-900 shadow-xl sm:shadow-2xl">
// //                   <div className={`absolute inset-0 bg-gradient-to-br ${currentTestimonial.accent} opacity-10`}></div>

// //                   <div 
// //                     ref={containerRef}
// //                     className="relative w-full cursor-pointer select-none touch-manipulation"
// //                     style={{ aspectRatio: '16/9' }}
// //                     onClick={handlePlayPause}
// //                     onMouseMove={() => isPlaying && handleUserInteraction('move')}
// //                     onTouchStart={() => isPlaying && handleUserInteraction('touch')}
// //                   >
// //                     <video
// //                       ref={videoRef}
// //                       className="w-full h-full object-contain bg-black"
// //                       src={currentTestimonial.videoUrl}
// //                       onEnded={() => {
// //                         setIsPlaying(false)
// //                         setControlState('visible')
// //                       }}
// //                       onLoadedMetadata={handleLoadedMetadata}
// //                       onTimeUpdate={handleTimeUpdate}
// //                       onCanPlay={handleCanPlay}
// //                       onPlaying={handlePlaying}
// //                       onWaiting={() => setIsLoading(true)}
// //                       playsInline
// //                       preload="metadata"
// //                     >
// //                       Your browser does not support the video tag.
// //                     </video>

// //                     {/* Double-tap skip zones */}
// //                     {isPlaying && (
// //                       <>
// //                         <div 
// //                           className="absolute left-0 top-0 bottom-0 w-1/3 z-10"
// //                           onClick={(e) => {
// //                             e.stopPropagation()
// //                             handleDoubleTap(e, 'backward')
// //                           }}
// //                         >
// //                           <div className="skip-indicator absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 pointer-events-none">
// //                             <div className="w-16 h-16 bg-black/70 rounded-full flex items-center justify-center backdrop-blur-sm">
// //                               <span className="text-white text-sm font-medium">-10s</span>
// //                             </div>
// //                           </div>
// //                         </div>
                        
// //                         <div 
// //                           className="absolute right-0 top-0 bottom-0 w-1/3 z-10"
// //                           onClick={(e) => {
// //                             e.stopPropagation()
// //                             handleDoubleTap(e, 'forward')
// //                           }}
// //                         >
// //                           <div className="skip-indicator absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 pointer-events-none">
// //                             <div className="w-16 h-16 bg-black/70 rounded-full flex items-center justify-center backdrop-blur-sm">
// //                               <span className="text-white text-sm font-medium">+10s</span>
// //                             </div>
// //                           </div>
// //                         </div>
// //                       </>
// //                     )}

// //                     {/* Loading State */}
// //                     {isLoading && (
// //                       <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-20">
// //                         <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/90 rounded-full flex items-center justify-center shadow-2xl">
// //                           <Loader className="w-6 h-6 text-slate-900 animate-spin" />
// //                         </div>
// //                       </div>
// //                     )}

// //                     {/* Play Button Overlay */}
// //                     {!isPlaying && !isLoading && (
// //                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-center justify-center z-20">
// //                         <button
// //                           onClick={handlePlayPause}
// //                           className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 shadow-2xl group/play"
// //                           aria-label="Play video"
// //                         >
// //                           <Play className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 text-slate-900 ml-1 group-hover/play:scale-110 transition-transform" />
// //                         </button>
// //                       </div>
// //                     )}

// //                     {/* Control System */}
// //                     {isPlaying && !isLoading && (
// //                       <div 
// //                         className={`absolute inset-0 z-30 transition-opacity duration-400 ${
// //                           controlState === 'visible' ? 'opacity-100' : 
// //                           controlState === 'fading' ? 'opacity-30' : 
// //                           'opacity-0 pointer-events-none'
// //                         }`}
// //                         onMouseMove={() => handleUserInteraction('move')}
// //                         onTouchStart={() => handleUserInteraction('touch')}
// //                       >
// //                         {/* Center Pause Button */}
// //                         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
// //                           <button
// //                             onClick={handlePlayPause}
// //                             className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-all duration-300 hover:scale-110 pointer-events-auto"
// //                             aria-label="Pause video"
// //                           >
// //                             <Pause className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 text-white" />
// //                           </button>
// //                         </div>

// //                         {/* Bottom Control Bar */}
// //                         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-3 sm:p-4 pointer-events-auto">
// //                           {/* Progress Bar */}
// //                           <div 
// //                             className="w-full h-1 sm:h-1.5 bg-white/20 rounded-full cursor-pointer mb-3 group/progress relative"
// //                             onClick={handleProgressClick}
// //                           >
// //                             <div 
// //                               className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-100 relative group-hover/progress:h-2 shadow-lg shadow-blue-500/50"
// //                               style={{ width: `${progress}%` }}
// //                             >
// //                               <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover/progress:opacity-100 transition-opacity shadow-lg"></div>
// //                             </div>
// //                           </div>

// //                           {/* Control Buttons */}
// //                           <div className="flex items-center justify-between">
// //                             <div className="flex items-center gap-3">
// //                               <button
// //                                 onClick={handlePlayPause}
// //                                 className="w-8 h-8 sm:w-9 sm:h-9 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
// //                                 aria-label="Pause"
// //                               >
// //                                 <Pause className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />
// //                               </button>

// //                               <span className="text-white text-xs sm:text-sm font-medium tabular-nums">
// //                                 {formatTime(currentTime)} / {formatTime(duration)}
// //                               </span>
// //                             </div>

// //                             <button
// //                               onClick={handleMute}
// //                               className="w-8 h-8 sm:w-9 sm:h-9 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
// //                               aria-label={isMuted ? "Unmute" : "Mute"}
// //                             >
// //                               {isMuted ? (
// //                                 <VolumeX className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />
// //                               ) : (
// //                                 <Volume2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />
// //                               )}
// //                             </button>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     )}
// //                   </div>
// //                 </div>

// //                 <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-20 h-20 sm:w-24 sm:h-24 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>
// //                 <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-24 h-24 sm:w-32 sm:h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none"></div>
// //               </div>
// //             </div>

// //             {/* Testimonial List */}
// //             <div className="lg:col-span-2 order-2 lg:order-2 space-y-3 sm:space-y-4">
// //               <div className="mb-4 sm:mb-6">
// //                 <h3 className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2 sm:mb-3">Client Stories</h3>
// //                 <div className="h-px bg-gradient-to-r from-slate-200 to-transparent"></div>
// //               </div>

// //               {testimonials.map((testimonial, index) => (
// //                 <button
// //                   key={testimonial.id}
// //                   onClick={() => switchTestimonial(index)}
// //                   className={`w-full text-left p-3 sm:p-4 rounded-lg sm:rounded-xl transition-all duration-300 group ${
// //                     index === activeTestimonial
// //                       ? "bg-gradient-to-r from-slate-900 to-slate-800 shadow-lg scale-[1.02]"
// //                       : "bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 hover:shadow-md"
// //                   }`}
// //                 >
// //                   <div className="flex items-center gap-3 sm:gap-4">
// //                     <div className="flex-1 min-w-0">
// //                       <h4 className={`font-semibold text-sm sm:text-base truncate ${index === activeTestimonial ? "text-white" : "text-slate-900"}`}>
// //                         {testimonial.name}
// //                       </h4>
// //                       <p className={`text-xs sm:text-sm truncate ${index === activeTestimonial ? "text-white/70" : "text-slate-500"}`}>
// //                         {testimonial.company}
// //                       </p>
// //                     </div>

// //                     <div
// //                       className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
// //                         index === activeTestimonial ? "bg-white/20" : "bg-slate-100 group-hover:bg-blue-50"
// //                       }`}
// //                     >
// //                       <Play
// //                         className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ml-0.5 ${
// //                           index === activeTestimonial ? "text-white" : "text-slate-600 group-hover:text-blue-600"
// //                         }`}
// //                       />
// //                     </div>
// //                   </div>
// //                 </button>
// //               ))}

// //               <div className="relative group/coming-soon">
// //                 <div className="w-full p-4 sm:p-6 rounded-lg sm:rounded-xl bg-white border-2 border-dashed border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
// //                   <div className="flex items-center gap-3 sm:gap-4">
// //                     <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0 group-hover/coming-soon:bg-blue-50 transition-colors duration-300">
// //                       <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 group-hover/coming-soon:text-blue-600 transition-colors duration-300" />
// //                     </div>

// //                     <div className="flex-1 min-w-0">
// //                       <h4 className="font-semibold text-slate-900 text-sm sm:text-base mb-1">More Success Stories</h4>
// //                       <p className="text-slate-600 text-xs sm:text-sm mb-2">Coming soon...</p>
// //                       <div className="w-full bg-slate-100 rounded-full h-1 overflow-hidden">
// //                         <div className="h-full bg-blue-500 rounded-full w-2/3 transition-all duration-300 group-hover/coming-soon:w-3/4"></div>
// //                       </div>
// //                     </div>

// //                     <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover/coming-soon:bg-blue-50 transition-colors duration-300 flex-shrink-0">
// //                       <div className="w-2 h-2 bg-slate-400 rounded-full group-hover/coming-soon:bg-blue-500 transition-colors duration-300"></div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-slate-50 rounded-lg border border-slate-200">
// //                 <p className="text-xs sm:text-sm text-slate-600 text-center">
// //                   <span className="font-medium text-slate-900">Want to be featured?</span>
// //                   <br />
// //                   Join our growing list of success stories
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <style jsx>{`
// //         .skip-indicator.active {
// //           opacity: 1 !important;
// //           animation: skipPulse 0.5s ease-out;
// //         }

// //         @keyframes skipPulse {
// //           0% { transform: scale(0.8); opacity: 0; }
// //           50% { transform: scale(1.1); opacity: 1; }
// //           100% { transform: scale(1); opacity: 1; }
// //         }

// //         video::-webkit-media-controls-timeline {
// //           display: none;
// //         }
// //       `}</style>
// //     </section>
// //   )
// // }
// "use client"
// import type React from "react"
// import { useState, useRef, useEffect, useCallback } from "react"
// import { Play, Pause, Volume2, VolumeX, Clock, ArrowLeft, Loader } from "lucide-react"

// const testimonials = [
//   {
//     id: 1,
//     name: "Ahmed Hassan",
//     company: "Video-Editor Agency",
//     videoUrl: "https://res.cloudinary.com/dpyireagy/video/upload/v1760983513/VID-20251017-WA0001_1_wbd27t.mp4",
//     accent: "from-blue-200 to-indigo-800",
//   },
//   {
//     id: 2,
//     name: "Kyle Nianga",
//     company: "SEO Agency Startup",
//     videoUrl: "https://res.cloudinary.com/dpyireagy/video/upload/v1758002457/Kyle_rfbfnp.mp4",
//     accent: "from-blue-500 to-indigo-600",
//   },
// ]

// export default function VideoTestimonialSection() {
//   const [activeTestimonial, setActiveTestimonial] = useState(0)
//   const [isPlaying, setIsPlaying] = useState(false)
//   const [isMuted, setIsMuted] = useState(false)
//   const [isLoading, setIsLoading] = useState(false)
//   const [controlState, setControlState] = useState<"hidden" | "visible" | "fading">("hidden")
//   const [progress, setProgress] = useState(0)
//   const [buffered, setBuffered] = useState(0) // Added buffered state to track how much video has loaded
//   const [duration, setDuration] = useState(0)
//   const [currentTime, setCurrentTime] = useState(0)
//   const [lastTapTime, setLastTapTime] = useState(0)
//   const [hasInteracted, setHasInteracted] = useState(false)

//   const videoRef = useRef<HTMLVideoElement>(null)
//   const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null)
//   const containerRef = useRef<HTMLDivElement>(null)

//   const currentTestimonial = testimonials[activeTestimonial]

//   const startHideTimer = useCallback(() => {
//     if (controlsTimeoutRef.current) {
//       clearTimeout(controlsTimeoutRef.current)
//     }
//     controlsTimeoutRef.current = setTimeout(() => {
//       setControlState("fading")
//       setTimeout(() => setControlState("hidden"), 400)
//     }, 2000)
//   }, [])

//   const handleUserInteraction = useCallback(() => {
//     setControlState("visible")
//     startHideTimer()
//   }, [startHideTimer])

//   // Video metadata loaded
//   const handleLoadedMetadata = () => {
//     if (videoRef.current) {
//       setDuration(videoRef.current.duration)
//     }
//   }

//   // Video buffered and ready
//   const handleCanPlay = () => {
//     if (hasInteracted) {
//       setIsLoading(false)
//     }
//   }

//   // Video actively playing
//   const handlePlaying = () => {
//     setIsLoading(false)
//   }

//   // Contextual preloading architecture
//   useEffect(() => {
//     const nextIndex = (activeTestimonial + 1) % testimonials.length
//     const preloadVideo = document.createElement("video")
//     preloadVideo.src = testimonials[nextIndex].videoUrl
//     preloadVideo.preload = "metadata"
//     preloadVideo.load()

//     return () => {
//       preloadVideo.src = ""
//       preloadVideo.remove()
//     }
//   }, [activeTestimonial])

//   // Time update handler
//   const handleTimeUpdate = () => {
//     if (videoRef.current) {
//       setCurrentTime(videoRef.current.currentTime)
//       setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100)

//       if (videoRef.current.buffered.length > 0) {
//         const bufferedEnd = videoRef.current.buffered.end(videoRef.current.buffered.length - 1)
//         setBuffered((bufferedEnd / videoRef.current.duration) * 100)
//       }
//     }
//   }

//   const handlePlayPause = (e?: React.MouseEvent) => {
//     if (e) e.stopPropagation()

//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause()
//         setIsPlaying(false)
//         setControlState("visible")
//         // Clear timeout when paused - keep controls visible
//         if (controlsTimeoutRef.current) {
//           clearTimeout(controlsTimeoutRef.current)
//         }
//       } else {
//         setHasInteracted(true)
//         setIsLoading(true)
//         videoRef.current
//           .play()
//           .then(() => {
//             setIsPlaying(true)
//             // Show controls and start auto-hide timer immediately
//             setControlState("visible")
//             startHideTimer()
//           })
//           .catch((err) => {
//             console.error("Playback error:", err)
//             setIsLoading(false)
//           })
//       }
//     }
//   }

//   // Mobile-optimized double-tap skip gesture
//   const handleDoubleTap = (e: React.MouseEvent<HTMLDivElement>, direction: "forward" | "backward") => {
//     const now = Date.now()
//     const timeSinceLastTap = now - lastTapTime

//     if (timeSinceLastTap < 300 && timeSinceLastTap > 0) {
//       e.stopPropagation()
//       if (videoRef.current) {
//         const skipAmount = direction === "forward" ? 10 : -10
//         videoRef.current.currentTime = Math.max(0, Math.min(duration, currentTime + skipAmount))
//       }

//       const indicator = e.currentTarget.querySelector(".skip-indicator") as HTMLElement
//       if (indicator) {
//         indicator.classList.add("active")
//         setTimeout(() => indicator.classList.remove("active"), 500)
//       }
//     }

//     setLastTapTime(now)
//   }

//   // Audio control
//   const handleMute = (e: React.MouseEvent) => {
//     e.stopPropagation()
//     if (videoRef.current) {
//       videoRef.current.muted = !isMuted
//       setIsMuted(!isMuted)
//     }
//   }

//   // Progress bar interaction
//   const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     e.stopPropagation()
//     if (videoRef.current) {
//       const rect = e.currentTarget.getBoundingClientRect()
//       const pos = (e.clientX - rect.left) / rect.width
//       videoRef.current.currentTime = pos * videoRef.current.duration
//     }
//   }

//   // Time formatting
//   const formatTime = (seconds: number) => {
//     if (isNaN(seconds) || !isFinite(seconds)) return "0:00"
//     const mins = Math.floor(seconds / 60)
//     const secs = Math.floor(seconds % 60)
//     return `${mins}:${secs.toString().padStart(2, "0")}`
//   }

//   // Testimonial switching with clean state reset
//   const switchTestimonial = (index: number) => {
//     setActiveTestimonial(index)
//     setIsPlaying(false)
//     setProgress(0)
//     setBuffered(0) // Reset buffered state
//     setCurrentTime(0)
//     setIsLoading(false)
//     setHasInteracted(false)
//     setControlState("hidden")

//     if (controlsTimeoutRef.current) {
//       clearTimeout(controlsTimeoutRef.current)
//     }

//     if (videoRef.current) {
//       videoRef.current.currentTime = 0
//       videoRef.current.pause()
//       videoRef.current.load()
//     }
//   }

//   // Cleanup
//   useEffect(() => {
//     return () => {
//       if (controlsTimeoutRef.current) {
//         clearTimeout(controlsTimeoutRef.current)
//       }
//     }
//   }, [])

//   return (
//     <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(148,163,184,0.08),transparent_60%)]"></div>
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-blue-50/40 to-transparent rounded-full blur-3xl pointer-events-none"></div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="mb-8 sm:mb-12">
//           <button className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors duration-300 group">
//             <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
//             <span>Back to Home</span>
//           </button>
//         </div>

//         <div className="text-center mb-16 sm:mb-20 lg:mb-24">
//           {/* Minimal badge */}
//           <div className="inline-flex items-center gap-2 mb-6 sm:mb-8">
//             <span className="w-8 h-px bg-slate-300"></span>
//             <span className="text-xs font-medium text-slate-500 uppercase tracking-[0.2em]">Testimonials</span>
//             <span className="w-8 h-px bg-slate-300"></span>
//           </div>

//           {/* Clean, elegant heading */}
//           <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 mb-5 sm:mb-6 tracking-tight max-w-3xl mx-auto leading-[1.15] text-balance">
//             Hear from those who <span className="text-blue-600">trust us</span>
//           </h2>

//           {/* Refined subtitle */}
//           <p className="text-slate-500 text-base sm:text-lg max-w-md mx-auto leading-relaxed font-normal">
//             Real stories from real clients who achieved measurable results.
//           </p>
//         </div>

//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 items-start">
//             {/* Video Section */}
//             <div className="lg:col-span-3 order-1 lg:order-1">
//               <div className="relative group">
//                 <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-slate-900 shadow-xl sm:shadow-2xl">
//                   <div className={`absolute inset-0 bg-gradient-to-br ${currentTestimonial.accent} opacity-10`}></div>

//                   <div
//                     ref={containerRef}
//                     className="relative w-full cursor-pointer select-none touch-manipulation"
//                     style={{ aspectRatio: "16/9" }}
//                     onClick={handlePlayPause}
//                     onMouseMove={() => isPlaying && handleUserInteraction()}
//                     onTouchStart={() => isPlaying && handleUserInteraction()}
//                   >
//                     <video
//                       ref={videoRef}
//                       className="w-full h-full object-contain bg-black"
//                       src={currentTestimonial.videoUrl}
//                       onEnded={() => {
//                         setIsPlaying(false)
//                         setControlState("visible")
//                         if (controlsTimeoutRef.current) {
//                           clearTimeout(controlsTimeoutRef.current)
//                         }
//                       }}
//                       onLoadedMetadata={handleLoadedMetadata}
//                       onTimeUpdate={handleTimeUpdate}
//                       onCanPlay={handleCanPlay}
//                       onPlaying={handlePlaying}
//                       onWaiting={() => setIsLoading(true)}
//                       playsInline
//                       preload="metadata"
//                     >
//                       Your browser does not support the video tag.
//                     </video>

//                     {/* Double-tap skip zones */}
//                     {isPlaying && (
//                       <>
//                         <div
//                           className="absolute left-0 top-0 bottom-0 w-1/3 z-10"
//                           onClick={(e) => {
//                             e.stopPropagation()
//                             handleDoubleTap(e, "backward")
//                           }}
//                         >
//                           <div className="skip-indicator absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 pointer-events-none">
//                             <div className="w-16 h-16 bg-black/70 rounded-full flex items-center justify-center backdrop-blur-sm">
//                               <span className="text-white text-sm font-medium">-10s</span>
//                             </div>
//                           </div>
//                         </div>

//                         <div
//                           className="absolute right-0 top-0 bottom-0 w-1/3 z-10"
//                           onClick={(e) => {
//                             e.stopPropagation()
//                             handleDoubleTap(e, "forward")
//                           }}
//                         >
//                           <div className="skip-indicator absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 pointer-events-none">
//                             <div className="w-16 h-16 bg-black/70 rounded-full flex items-center justify-center backdrop-blur-sm">
//                               <span className="text-white text-sm font-medium">+10s</span>
//                             </div>
//                           </div>
//                         </div>
//                       </>
//                     )}

//                     {/* Loading State */}
//                     {isLoading && (
//                       <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-20">
//                         <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/90 rounded-full flex items-center justify-center shadow-2xl">
//                           <Loader className="w-6 h-6 text-slate-900 animate-spin" />
//                         </div>
//                       </div>
//                     )}

//                     {/* Play Button Overlay */}
//                     {!isPlaying && !isLoading && (
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-center justify-center z-20">
//                         <button
//                           onClick={handlePlayPause}
//                           className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 shadow-2xl group/play"
//                           aria-label="Play video"
//                         >
//                           <Play className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 text-slate-900 ml-1 group-hover/play:scale-110 transition-transform" />
//                         </button>
//                       </div>
//                     )}

//                     {isPlaying && !isLoading && (
//                       <div
//                         className={`absolute inset-0 z-30 transition-opacity duration-400 ${
//                           controlState === "visible"
//                             ? "opacity-100"
//                             : controlState === "fading"
//                               ? "opacity-0"
//                               : "opacity-0 pointer-events-none"
//                         }`}
//                         onClick={(e) => {
//                           e.stopPropagation()
//                           handlePlayPause()
//                         }}
//                         onMouseMove={(e) => {
//                           e.stopPropagation()
//                           handleUserInteraction()
//                         }}
//                         onTouchStart={(e) => {
//                           handleUserInteraction()
//                         }}
//                       >
//                         {/* Center Pause Button */}
//                         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//                           <button
//                             onClick={handlePlayPause}
//                             className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-all duration-300 hover:scale-110 pointer-events-auto"
//                             aria-label="Pause video"
//                           >
//                             <Pause className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 text-white" />
//                           </button>
//                         </div>

//                         {/* Bottom Control Bar */}
//                         <div
//                           className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-3 sm:p-4 pointer-events-auto"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           {/* Progress Bar */}
//                           <div
//                             className="w-full h-1 sm:h-1.5 bg-white/20 rounded-full cursor-pointer mb-3 group/progress relative"
//                             onClick={handleProgressClick}
//                           >
//                             <div
//                               className="absolute h-full bg-white/30 rounded-full transition-all duration-300"
//                               style={{ width: `${buffered}%` }}
//                             />
//                             {/* Playback progress */}
//                             <div
//                               className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-100 relative group-hover/progress:h-2 shadow-lg shadow-blue-500/50 z-10"
//                               style={{ width: `${progress}%` }}
//                             >
//                               <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover/progress:opacity-100 transition-opacity shadow-lg"></div>
//                             </div>
//                           </div>

//                           {/* Control Buttons */}
//                           <div className="flex items-center justify-between">
//                             <div className="flex items-center gap-3">
//                               <button
//                                 onClick={handlePlayPause}
//                                 className="w-8 h-8 sm:w-9 sm:h-9 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
//                                 aria-label="Pause"
//                               >
//                                 <Pause className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />
//                               </button>

//                               <span className="text-white text-xs sm:text-sm font-medium tabular-nums">
//                                 {formatTime(currentTime)} / {formatTime(duration)}
//                               </span>
//                             </div>

//                             <button
//                               onClick={handleMute}
//                               className="w-8 h-8 sm:w-9 sm:h-9 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
//                               aria-label={isMuted ? "Unmute" : "Mute"}
//                             >
//                               {isMuted ? (
//                                 <VolumeX className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />
//                               ) : (
//                                 <Volume2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />
//                               )}
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-20 h-20 sm:w-24 sm:h-24 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>
//                 <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-24 h-24 sm:w-32 sm:h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none"></div>
//               </div>
//             </div>

//             {/* Testimonial List */}
//             <div className="lg:col-span-2 order-2 lg:order-2 space-y-3 sm:space-y-4">
//               <div className="mb-4 sm:mb-6">
//                 <h3 className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2 sm:mb-3">
//                   Client Stories
//                 </h3>
//                 <div className="h-px bg-gradient-to-r from-slate-200 to-transparent"></div>
//               </div>

//               {testimonials.map((testimonial, index) => (
//                 <button
//                   key={testimonial.id}
//                   onClick={() => switchTestimonial(index)}
//                   className={`w-full text-left p-3 sm:p-4 rounded-lg sm:rounded-xl transition-all duration-300 group ${
//                     index === activeTestimonial
//                       ? "bg-gradient-to-r from-slate-900 to-slate-800 shadow-lg scale-[1.02]"
//                       : "bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 hover:shadow-md"
//                   }`}
//                 >
//                   <div className="flex items-center gap-3 sm:gap-4">
//                     <div className="flex-1 min-w-0">
//                       <h4
//                         className={`font-semibold text-sm sm:text-base truncate ${index === activeTestimonial ? "text-white" : "text-slate-900"}`}
//                       >
//                         {testimonial.name}
//                       </h4>
//                       <p
//                         className={`text-xs sm:text-sm truncate ${index === activeTestimonial ? "text-white/70" : "text-slate-500"}`}
//                       >
//                         {testimonial.company}
//                       </p>
//                     </div>

//                     <div
//                       className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
//                         index === activeTestimonial ? "bg-white/20" : "bg-slate-100 group-hover:bg-blue-50"
//                       }`}
//                     >
//                       <Play
//                         className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ml-0.5 ${
//                           index === activeTestimonial ? "text-white" : "text-slate-600 group-hover:text-blue-600"
//                         }`}
//                       />
//                     </div>
//                   </div>
//                 </button>
//               ))}

//               <div className="relative group/coming-soon">
//                 <div className="w-full p-4 sm:p-6 rounded-lg sm:rounded-xl bg-white border-2 border-dashed border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
//                   <div className="flex items-center gap-3">
//                     <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
//                       <Clock className="w-5 h-5 text-blue-600" />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-slate-900 text-sm sm:text-base">More Coming Soon</h4>
//                       <p className="text-xs sm:text-sm text-slate-500">New success stories weekly</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .skip-indicator.active {
//           opacity: 1 !important;
//         }
//       `}</style>
//     </section>
//   )
// }


"use client"
import type React from "react"
import { useState, useRef, useEffect, useCallback } from "react"
import { Play, Pause, Volume2, VolumeX, Quote, ChevronLeft, Loader } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Ahmed Hassan",
    company: "Video-Editor Agency",
    videoUrl: "https://res.cloudinary.com/dpyireagy/video/upload/v1760983513/VID-20251017-WA0001_1_wbd27t.mp4",
    accent: "from-blue-200 to-indigo-800",
  },
  {
    id: 2,
    name: "Kyle Nianga",
    company: "SEO Agency Startup",
    videoUrl: "https://res.cloudinary.com/dpyireagy/video/upload/v1758002457/Kyle_rfbfnp.mp4",
    accent: "from-blue-500 to-indigo-600",
  },
]

export default function VideoTestimonialSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [controlState, setControlState] = useState<"hidden" | "visible" | "fading">("hidden")
  const [progress, setProgress] = useState(0)
  const [buffered, setBuffered] = useState(0) // Added buffered state to track how much video has loaded
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [lastTapTime, setLastTapTime] = useState(0)
  const [hasInteracted, setHasInteracted] = useState(false)

  const videoRef = useRef<HTMLVideoElement>(null)
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const loadingTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const isActuallyLoadingRef = useRef(false)

  const currentTestimonial = testimonials[activeTestimonial]

  const startHideTimer = useCallback(() => {
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current)
    }
    controlsTimeoutRef.current = setTimeout(() => {
      setControlState("fading")
      setTimeout(() => setControlState("hidden"), 400)
    }, 1000)
  }, [])

  const handleUserInteraction = useCallback(() => {
    setControlState("visible")
    startHideTimer()
  }, [startHideTimer])

  // Video metadata loaded
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }

  // Video buffered and ready
  const handleCanPlay = () => {
    if (hasInteracted) {
      hideLoading()
    }
  }

  // Video actively playing
  const handlePlaying = () => {
    hideLoading()
  }

  const handleVideoEnded = () => {
    setIsPlaying(false)
    setControlState("visible")
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current)
    }
  }

  // Contextual preloading architecture
  useEffect(() => {
    const nextIndex = (activeTestimonial + 1) % testimonials.length
    const preloadVideo = document.createElement("video")
    preloadVideo.src = testimonials[nextIndex].videoUrl
    preloadVideo.preload = "metadata"
    preloadVideo.load()

    return () => {
      preloadVideo.src = ""
      preloadVideo.remove()
    }
  }, [activeTestimonial])

  // Time update handler
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
      setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100)

      if (videoRef.current.buffered.length > 0) {
        const bufferedEnd = videoRef.current.buffered.end(videoRef.current.buffered.length - 1)
        setBuffered((bufferedEnd / videoRef.current.duration) * 100)
      }
    }
  }

  const showLoadingWithDelay = useCallback(() => {
    isActuallyLoadingRef.current = true
    if (loadingTimeoutRef.current) {
      clearTimeout(loadingTimeoutRef.current)
    }
    loadingTimeoutRef.current = setTimeout(() => {
      if (isActuallyLoadingRef.current) {
        setIsLoading(true)
      }
    }, 300) // Only show spinner if buffering for more than 300ms
  }, [])

  const hideLoading = useCallback(() => {
    isActuallyLoadingRef.current = false
    if (loadingTimeoutRef.current) {
      clearTimeout(loadingTimeoutRef.current)
      loadingTimeoutRef.current = null
    }
    setIsLoading(false)
  }, [])

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
        handleUserInteraction()
      } else {
        setHasInteracted(true)
        showLoadingWithDelay()
        videoRef.current
          .play()
          .then(() => {
            setIsPlaying(true)
            setControlState("visible")
            startHideTimer()
          })
          .catch((err) => {
            console.error("Playback error:", err)
            hideLoading()
          })
      }
    }
  }

  // Mobile-optimized double-tap skip gesture
  const handleDoubleTap = (e: React.MouseEvent<HTMLDivElement>, direction: "forward" | "backward") => {
    const now = Date.now()
    const timeSinceLastTap = now - lastTapTime

    if (timeSinceLastTap < 300 && timeSinceLastTap > 0) {
      e.stopPropagation()
      if (videoRef.current) {
        const skipAmount = direction === "forward" ? 10 : -10
        videoRef.current.currentTime = Math.max(0, Math.min(duration, currentTime + skipAmount))
      }

      const indicator = e.currentTarget.querySelector(".skip-indicator") as HTMLElement
      if (indicator) {
        indicator.classList.add("active")
        setTimeout(() => indicator.classList.remove("active"), 500)
      }
    }

    setLastTapTime(now)
  }

  // Audio control
  const handleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  // Progress bar interaction
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect()
      const pos = (e.clientX - rect.left) / rect.width
      videoRef.current.currentTime = pos * videoRef.current.duration
    }
  }

  // Time formatting
  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || !isFinite(seconds)) return "0:00"
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  // Testimonial switching with clean state reset
  const switchTestimonial = (index: number) => {
    setActiveTestimonial(index)
    setIsPlaying(false)
    setProgress(0)
    setBuffered(0) // Reset buffered state
    setCurrentTime(0)
    setIsLoading(false)
    setHasInteracted(false)
    setControlState("hidden")

    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current)
    }

    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.pause()
      videoRef.current.load()
    }
  }

  // Cleanup
  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current)
      }
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current)
      }
    }
  }, [])

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(148,163,184,0.08),transparent_60%)]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-blue-50/40 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-8 sm:mb-12">
          <button className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors duration-300 group">
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Back to Home</span>
          </button>
        </div>

        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          {/* Minimal badge */}
          <div className="inline-flex items-center gap-2 mb-6 sm:mb-8">
            <span className="w-8 h-px bg-slate-300"></span>
            <span className="text-xs font-medium text-slate-500 uppercase tracking-[0.2em]">Testimonials</span>
            <span className="w-8 h-px bg-slate-300"></span>
          </div>

          {/* Clean, elegant heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 mb-5 sm:mb-6 tracking-tight max-w-3xl mx-auto leading-[1.15] text-balance">
            Hear from those who <span className="text-blue-600">trust us</span>
          </h2>

          {/* Refined subtitle */}
          <p className="text-slate-500 text-base sm:text-lg max-w-md mx-auto leading-relaxed font-normal">
            Real stories from real clients who achieved measurable results.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 items-start">
            {/* Video Section */}
            <div className="lg:col-span-3 order-1 lg:order-1">
              <div className="relative group">
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-slate-900 shadow-xl sm:shadow-2xl">
                  <div className={`absolute inset-0 bg-gradient-to-br ${currentTestimonial.accent} opacity-10`}></div>

                  <div
                    ref={containerRef}
                    className="relative w-full cursor-pointer select-none touch-manipulation"
                    style={{ aspectRatio: "16/9" }}
                    onClick={handlePlayPause}
                    onMouseMove={() => isPlaying && handleUserInteraction()}
                    onTouchStart={() => isPlaying && handleUserInteraction()}
                  >
                    <video
                      ref={videoRef}
                      src={currentTestimonial.videoUrl}
                      className="absolute inset-0 w-full h-full object-contain"
                      onLoadedMetadata={handleLoadedMetadata}
                      onTimeUpdate={handleTimeUpdate}
                      onEnded={handleVideoEnded}
                      onCanPlay={handleCanPlay}
                      onPlaying={handlePlaying}
                      onWaiting={showLoadingWithDelay}
                      playsInline
                      preload="auto"
                    >
                      Your browser does not support the video tag.
                    </video>

                    {/* Double-tap skip zones */}
                    {isPlaying && (
                      <>
                        <div
                          className="absolute left-0 top-0 bottom-0 w-1/3 z-10"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleDoubleTap(e, "backward")
                          }}
                        >
                          <div className="skip-indicator absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 pointer-events-none">
                            <div className="w-16 h-16 bg-black/70 rounded-full flex items-center justify-center backdrop-blur-sm">
                              <span className="text-white text-sm font-medium">-10s</span>
                            </div>
                          </div>
                        </div>

                        <div
                          className="absolute right-0 top-0 bottom-0 w-1/3 z-10"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleDoubleTap(e, "forward")
                          }}
                        >
                          <div className="skip-indicator absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 pointer-events-none">
                            <div className="w-16 h-16 bg-black/70 rounded-full flex items-center justify-center backdrop-blur-sm">
                              <span className="text-white text-sm font-medium">+10s</span>
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {/* Loading State */}
                    {isLoading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-20">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/90 rounded-full flex items-center justify-center shadow-2xl">
                          <Loader className="w-6 h-6 text-slate-900 animate-spin" />
                        </div>
                      </div>
                    )}

                    {/* Play Button Overlay */}
                    {!isPlaying && !isLoading && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-center justify-center z-20">
                        <button
                          onClick={handlePlayPause}
                          className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 shadow-2xl group/play"
                          aria-label="Play video"
                        >
                          <Play className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 text-slate-900 ml-1 group-hover/play:scale-110 transition-transform" />
                        </button>
                      </div>
                    )}

                    {isPlaying && !isLoading && (
                      <div
                        className={`absolute inset-0 z-30 transition-opacity duration-400 ${
                          controlState === "visible"
                            ? "opacity-100"
                            : controlState === "fading"
                              ? "opacity-0"
                              : "opacity-0 pointer-events-none"
                        }`}
                        onClick={(e) => {
                          e.stopPropagation()
                          handlePlayPause()
                        }}
                        onMouseMove={(e) => {
                          e.stopPropagation()
                          handleUserInteraction()
                        }}
                        onTouchStart={() => {
                          handleUserInteraction()
                        }}
                      >
                        {/* Center Pause Button */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <button
                            onClick={handlePlayPause}
                            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-all duration-300 hover:scale-110 pointer-events-auto"
                            aria-label="Pause video"
                          >
                            <Pause className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 text-white" />
                          </button>
                        </div>

                        {/* Bottom Control Bar */}
                        <div
                          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-3 sm:p-4 pointer-events-auto"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {/* Progress Bar */}
                          <div
                            className="w-full h-1 sm:h-1.5 bg-white/20 rounded-full cursor-pointer mb-3 group/progress relative"
                            onClick={handleProgressClick}
                          >
                            <div
                              className="absolute h-full bg-white/30 rounded-full transition-all duration-300"
                              style={{ width: `${buffered}%` }}
                            />
                            {/* Playback progress */}
                            <div
                              className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-100 relative group-hover/progress:h-2 shadow-lg shadow-blue-500/50 z-10"
                              style={{ width: `${progress}%` }}
                            >
                              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover/progress:opacity-100 transition-opacity shadow-lg"></div>
                            </div>
                          </div>

                          {/* Control Buttons */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <button
                                onClick={handlePlayPause}
                                className="w-8 h-8 sm:w-9 sm:h-9 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                                aria-label="Pause"
                              >
                                <Pause className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />
                              </button>

                              <span className="text-white text-xs sm:text-sm font-medium tabular-nums">
                                {formatTime(currentTime)} / {formatTime(duration)}
                              </span>
                            </div>

                            <button
                              onClick={handleMute}
                              className="w-8 h-8 sm:w-9 sm:h-9 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                              aria-label={isMuted ? "Unmute" : "Mute"}
                            >
                              {isMuted ? (
                                <VolumeX className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />
                              ) : (
                                <Volume2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-20 h-20 sm:w-24 sm:h-24 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>
                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-24 h-24 sm:w-32 sm:h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none"></div>
              </div>
            </div>

            {/* Testimonial List */}
            <div className="lg:col-span-2 order-2 lg:order-2 space-y-3 sm:space-y-4">
              <div className="mb-4 sm:mb-6">
                <h3 className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2 sm:mb-3">
                  Client Stories
                </h3>
                <div className="h-px bg-gradient-to-r from-slate-200 to-transparent"></div>
              </div>

              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => switchTestimonial(index)}
                  className={`w-full text-left p-3 sm:p-4 rounded-lg sm:rounded-xl transition-all duration-300 group ${
                    index === activeTestimonial
                      ? "bg-gradient-to-r from-slate-900 to-slate-800 shadow-lg scale-[1.02]"
                      : "bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex-1 min-w-0">
                      <h4
                        className={`font-semibold text-sm sm:text-base truncate ${index === activeTestimonial ? "text-white" : "text-slate-900"}`}
                      >
                        {testimonial.name}
                      </h4>
                      <p
                        className={`text-xs sm:text-sm truncate ${index === activeTestimonial ? "text-white/70" : "text-slate-500"}`}
                      >
                        {testimonial.company}
                      </p>
                    </div>

                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                        index === activeTestimonial ? "bg-white/20" : "bg-slate-100 group-hover:bg-blue-50"
                      }`}
                    >
                      <Play
                        className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ml-0.5 ${
                          index === activeTestimonial ? "text-white" : "text-slate-600 group-hover:text-blue-600"
                        }`}
                      />
                    </div>
                  </div>
                </button>
              ))}

              <div className="relative group/coming-soon">
                <div className="w-full p-4 sm:p-6 rounded-lg sm:rounded-xl bg-white border-2 border-dashed border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                      <Quote className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm sm:text-base">More Coming Soon</h4>
                      <p className="text-xs sm:text-sm text-slate-500">New success stories weekly</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .skip-indicator.active {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  )
}
