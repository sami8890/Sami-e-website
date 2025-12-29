"use client"
import { useState, useEffect, useRef, useCallback } from "react"
import { Instrument_Serif } from "next/font/google" // Added Luxury Font
import Image from "next/image"
import { motion } from "framer-motion"
import { Quote, Play, Pause, Volume2, VolumeX, Loader } from "lucide-react"

// Font setup
const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
})

// Featured video testimonial
const featuredVideo = {
  id: "video-1",
  name: "Ahmed Hassan",
  role: "Video-Editor Agency",
  videoUrl: "https://res.cloudinary.com/dpyireagy/video/upload/v1760983513/VID-20251017-WA0001_1_wbd27t.mp4",
}

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Muhammad Ibrahim",
      role: "LinkedIn Branding Expert",
      avatar: "/testimonial/ibrahim.png",
      content:
        "Before Sami, I didn't even have a proper online presence. He built me a clean, modern site in record time—and now I'm getting real opportunities from it.",
      hasWebsite: false,
      websiteUrl: "",
    },
    {
      id: 2,
      name: "Ahmed",
      role: "CEO, Contexmedia",
      avatar: "/testimonial/ahmed.png",
      content:
        "I only had rough ideas, but Sami turned them into a site that feels 100% like my brand. The process was smooth, and the site is already attracting clients.",
      hasWebsite: true,
      websiteUrl: "https://www.contexmedia.com/",
    },
    {
      id: 3,
      name: "Kyle",
      role: "CEO, Contntr",
      avatar: "/testimonial/kyle.png",
      content:
        "In under a week, Sami built a site that looks better than I imagined. It's unique, detailed, and nothing about it feels cookie-cutter.",
      hasWebsite: false,
    },
  ]

  const [showAll] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Video player states
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoLoading, setIsVideoLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [controlState, setControlState] = useState<"hidden" | "visible" | "fading">("hidden")

  const videoRef = useRef<HTMLVideoElement>(null)
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const loadingTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const isActuallyLoadingRef = useRef(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)
    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  // Cleanup timeouts
  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current)
      if (loadingTimeoutRef.current) clearTimeout(loadingTimeoutRef.current)
    }
  }, [])

  // Theme Change: Highlights are now Amber/Gold instead of Blue
  const highlightKeywords = (content: string) => {
    const keywords = [
      "clean", "modern", "record time", "real opportunities", "smooth",
      "attracting clients", "looks better", "unique", "detailed",
      "professional", "converts", "fast turnaround", "impressed",
    ]
    let highlightedContent = content
    keywords.forEach((keyword) => {
      const regex = new RegExp(`(${keyword})`, "gi")
      // Changed class from text-blue-600 to text-amber-700 (Luxury Gold)
      highlightedContent = highlightedContent.replace(regex, '<span class="font-medium text-amber-700 italic">$1</span>')
    })
    return <div dangerouslySetInnerHTML={{ __html: highlightedContent }} />
  }

  const displayCount = isMobile ? (showAll ? testimonials.length : 4) : testimonials.length
  const displayedTestimonials = testimonials.slice(0, displayCount)

  // Video player functions
  const startHideTimer = useCallback(() => {
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current)
    controlsTimeoutRef.current = setTimeout(() => {
      setControlState("fading")
      setTimeout(() => setControlState("hidden"), 400)
    }, 2000)
  }, [])

  const handleUserInteraction = useCallback(() => {
    setControlState("visible")
    startHideTimer()
  }, [startHideTimer])

  const showLoadingWithDelay = useCallback(() => {
    isActuallyLoadingRef.current = true
    if (loadingTimeoutRef.current) clearTimeout(loadingTimeoutRef.current)
    loadingTimeoutRef.current = setTimeout(() => {
      if (isActuallyLoadingRef.current) setIsVideoLoading(true)
    }, 300)
  }, [])

  const hideLoading = useCallback(() => {
    isActuallyLoadingRef.current = false
    if (loadingTimeoutRef.current) {
      clearTimeout(loadingTimeoutRef.current)
      loadingTimeoutRef.current = null
    }
    setIsVideoLoading(false)
  }, [])

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
        handleUserInteraction()
      } else {
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

  const handleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
      setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100)
    }
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect()
      const pos = (e.clientX - rect.left) / rect.width
      videoRef.current.currentTime = pos * videoRef.current.duration
    }
  }

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || !isFinite(seconds)) return "0:00"
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const renderSkeletons = () => {
    const skeletonCount = isMobile ? 1 : 4
    return Array(skeletonCount)
      .fill(0)
      .map((_, index) => (
        <div
          key={`skeleton-${index}`}
          className="bg-white rounded-lg p-4 md:p-6 border border-slate-100 animate-pulse"
        >
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-slate-100 rounded-full mr-3"></div>
            <div className="flex-1">
              <div className="h-3 bg-slate-100 rounded w-1/2 mb-1"></div>
              <div className="h-2 bg-slate-100 rounded w-1/3"></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-2 bg-slate-100 rounded w-full"></div>
            <div className="h-2 bg-slate-100 rounded w-3/4"></div>
          </div>
        </div>
      ))
  }

  return (
    // Change: Background bg-slate-50 to match Hero section theme
    <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden" id="testimonials">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="container mx-auto px-4 max-w-5xl lg:max-w-4xl xl:max-w-5xl relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 1, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16 lg:mb-12"
        >
          <motion.h2
            initial={{ opacity: 1, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            // Change: Added instrumentSerif font and simplified styling
            className={`${instrumentSerif.className} text-3xl md:text-4xl lg:text-5xl font-medium text-slate-900 leading-tight mb-6`}
          >
            What our clients <span className="italic text-amber-700">actually say</span>
          </motion.h2>
          
          {/* Change: Removed rainbow underline, added simple decorative line */}
          <div className="w-24 h-0.5 bg-amber-700/30 mx-auto rounded-full"></div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-5 xl:gap-6 max-w-4xl mx-auto">
          {isLoading ? (
            renderSkeletons()
          ) : (
            <>
              {/* Text Testimonials */}
              {displayedTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 1, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  // Change: Added hover border color to amber-200 and shadow style
                  className="bg-white rounded-lg border border-slate-200 p-6 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:border-amber-200 hover:shadow-lg transition-all duration-300 relative group"
                >
                  {/* Quote Icon - Changed to Amber */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Quote className="w-8 h-8 text-amber-700" />
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-slate-100 border border-slate-100">
                      {testimonial.avatar ? (
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={40}
                          height={40}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-600 font-bold text-sm">
                          {testimonial.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-slate-900 text-sm md:text-sm lg:text-base">
                        {testimonial.name}
                      </h4>
                      <p className="text-slate-500 text-xs md:text-xs lg:text-sm">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-slate-600 leading-relaxed text-sm md:text-sm lg:text-[15px] mb-3">
                    {highlightKeywords(testimonial.content)}
                  </div>

                  {/* Visit Website Link */}
                  {testimonial.hasWebsite && (
                    <div className="pt-3 border-t border-slate-100">
                      <a
                        href={testimonial.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-amber-700 underline decoration-slate-300 hover:decoration-amber-700 text-xs font-medium transition-all duration-200"
                      >
                        View Project
                      </a>
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Featured Video Testimonial */}
              <motion.div
                initial={{ opacity: 1, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: displayedTestimonials.length * 0.1 }}
                className="group/video relative"
              >
                <div className="relative bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-amber-200 transition-all duration-300">
                  {/* Video Container */}
                  <div
                    className="relative w-full cursor-pointer select-none bg-slate-900"
                    style={{ aspectRatio: "16/9" }} // Changed to 16:9 for clearer view
                    onClick={handlePlayPause}
                    onMouseMove={() => isPlaying && handleUserInteraction()}
                    onTouchStart={() => isPlaying && handleUserInteraction()}
                  >
                    <video
                      ref={videoRef}
                      src={featuredVideo.videoUrl}
                      className="absolute inset-0 w-full h-full object-contain"
                      onLoadedMetadata={() => {
                        if (videoRef.current) setDuration(videoRef.current.duration)
                      }}
                      onTimeUpdate={handleTimeUpdate}
                      onEnded={() => {
                        setIsPlaying(false)
                        setControlState("visible")
                      }}
                      onCanPlay={hideLoading}
                      onPlaying={hideLoading}
                      onWaiting={showLoadingWithDelay}
                      playsInline
                      preload="metadata"
                    />

                    {/* Loading State - Changed to Amber */}
                    {isVideoLoading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-slate-900/20 backdrop-blur-sm z-20">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                          <Loader className="w-4 h-4 text-amber-700 animate-spin" />
                        </div>
                      </div>
                    )}

                    {/* Play Button - Paused State - Styled for Luxury */}
                    {!isPlaying && !isVideoLoading && (
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-20 transition-all group-hover/video:bg-black/10">
                        <button
                          onClick={handlePlayPause}
                          className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/40 rounded-full flex items-center justify-center hover:scale-105 hover:bg-white hover:text-amber-700 text-white transition-all duration-300 shadow-2xl"
                          aria-label="Play video"
                        >
                          <Play className="w-6 h-6 ml-1 fill-current" />
                        </button>
                      </div>
                    )}

                    {/* Controls Overlay */}
                    {isPlaying && !isVideoLoading && (
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
                      >
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <button className="w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center pointer-events-auto hover:bg-black/70 transition-colors text-white">
                            <Pause className="w-5 h-5" />
                          </button>
                        </div>

                        <div
                          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pointer-events-auto"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {/* Progress Bar */}
                          <div
                            className="w-full h-1 bg-white/20 rounded-full cursor-pointer mb-3 group/progress"
                            onClick={handleProgressClick}
                          >
                            <div
                              className="h-full bg-amber-600 rounded-full transition-all duration-100 relative"
                              style={{ width: `${progress}%` }}
                            >
                              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover/progress:opacity-100 transition-opacity shadow-sm scale-150"></div>
                            </div>
                          </div>

                          {/* Control Buttons */}
                          <div className="flex items-center justify-between text-white/90">
                            <div className="flex items-center gap-3">
                              <button onClick={(e) => { e.stopPropagation(); handlePlayPause() }}>
                                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                              </button>
                              <button onClick={handleMute}>
                                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                              </button>
                              <span className="text-[10px] font-medium tracking-wider opacity-80">
                                {formatTime(currentTime)} / {formatTime(duration)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Video Info */}
                  <div className="p-4 border-t border-slate-100 bg-white">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full overflow-hidden bg-slate-50 border border-slate-100 flex-shrink-0">
                        <Image
                          src="/testimonial/ahmed.png"
                          alt={featuredVideo.name}
                          width={36}
                          height={36}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-semibold text-slate-900 text-sm">{featuredVideo.name}</h4>
                        <p className="text-slate-500 text-xs">{featuredVideo.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection