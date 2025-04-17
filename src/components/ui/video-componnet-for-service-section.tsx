"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { Badge } from "@/components/ui/badge"
import { Play, Pause, Maximize2, Volume2, VolumeX } from "lucide-react"
import { motion } from "framer-motion"

interface VideoComponentProps {
  src: string
  label: string
  className?: string
  smallControls?: boolean
  height?: number
}

export default function VideoComponent({
  src,
  label,
  className = "",
  smallControls = false,
  height,
}: VideoComponentProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [progress, setProgress] = useState(0)
  const [showControls, setShowControls] = useState(false)
  const [isBuffering, setIsBuffering] = useState(false)
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Set up intersection observer to detect when video is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        setIsInView(entry.isIntersecting)

        // Only attempt to play if coming into view and should be playing
        if (entry.isIntersecting && isPlaying && videoRef.current?.paused) {
          videoRef.current.play().catch((error) => {
            console.log("Could not autoplay video:", error.message)
          })
        } else if (!entry.isIntersecting && !videoRef.current?.paused) {
          videoRef.current?.pause()
        }
      },
      { threshold: 0.2, rootMargin: "100px" },
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current)
      }
    }
  }, [isPlaying])

  // Set up event listeners for video
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleEnded = () => setIsPlaying(false)

    // Track progress
    const handleTimeUpdate = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100)
      }
    }

    // Handle buffering
    const handleWaiting = () => setIsBuffering(true)
    const handleCanPlay = () => setIsBuffering(false)

    video.addEventListener("play", handlePlay)
    video.addEventListener("pause", handlePause)
    video.addEventListener("ended", handleEnded)
    video.addEventListener("timeupdate", handleTimeUpdate)
    video.addEventListener("waiting", handleWaiting)
    video.addEventListener("canplay", handleCanPlay)

    return () => {
      video.removeEventListener("play", handlePlay)
      video.removeEventListener("pause", handlePause)
      video.removeEventListener("ended", handleEnded)
      video.removeEventListener("timeupdate", handleTimeUpdate)
      video.removeEventListener("waiting", handleWaiting)
      video.removeEventListener("canplay", handleCanPlay)
    }
  }, [])

  // Show controls briefly when component mounts
  useEffect(() => {
    setShowControls(true)

    const timer = setTimeout(() => {
      if (!isHovered && isPlaying) {
        setShowControls(false)
      }
    }, 2000)

    return () => clearTimeout(timer)
  }, [isPlaying, isHovered])

  // Handle control visibility timeout
  const resetControlsTimeout = useCallback(() => {
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current)
    }

    if (isPlaying && !isHovered) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false)
      }, 2000)
    }
  }, [isPlaying, isHovered])

  const togglePlay = useCallback(() => {
    if (!videoRef.current) return

    try {
      if (videoRef.current.paused) {
        videoRef.current
          .play()
          .then(() => {
            setIsPlaying(true)
            resetControlsTimeout()
          })
          .catch((error) => {
            console.log("Error playing video:", error.message)
          })
      } else {
        videoRef.current.pause()
        setIsPlaying(false)
        setShowControls(true)
      }

      // Trigger haptic feedback if available
      if (navigator.vibrate) {
        navigator.vibrate(50)
      }
    } catch (error) {
      console.error("Video playback error:", error)
    }
  }, [resetControlsTimeout])

  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)

      // Trigger haptic feedback if available
      if (navigator.vibrate) {
        navigator.vibrate(30)
      }
    }
  }, [isMuted])

  const enterFullscreen = useCallback(() => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen().catch(() => { })

        // Trigger haptic feedback if available
        if (navigator.vibrate) {
          navigator.vibrate(30)
        }
      }
    }
  }, [])

  const handleVideoLoaded = useCallback(() => {
    setIsLoading(false)

    // Try to play video after loading if it's in view
    if (isInView) {
      videoRef.current?.play().catch((error) => {
        console.log("Could not autoplay video after loading:", error.message)
      })
    }
  }, [isInView])

  const handleVideoClick = useCallback(() => {
    togglePlay()
    setShowControls(true)
    resetControlsTimeout()
  }, [togglePlay, resetControlsTimeout])

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
    setShowControls(true)

    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current)
    }
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)

    if (isPlaying) {
      resetControlsTimeout()
    }
  }, [isPlaying, resetControlsTimeout])

  const buttonSize = smallControls ? "w-6 h-6" : "w-8 h-8"
  const iconSize = smallControls ? 14 : 16

  // Custom aspect ratio style if height is provided
  const aspectRatioStyle = height ? { height: `${height}px` } : {}

  return (
    <div
      className={`relative overflow-hidden rounded-xl aspect-video bg-black/20 shadow-xl group ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={aspectRatioStyle}
    >
      {/* Loading indicator */}
      {(isLoading || isBuffering) && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 z-10">
          <div className="w-8 h-8 border-2 border-[#00D285] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <video
        ref={videoRef}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 cursor-pointer"
        loop
        muted={isMuted}
        playsInline
        onLoadedData={handleVideoLoaded}
        onClick={handleVideoClick}
        poster="/placeholder.svg?height=300&width=600"
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Play/Pause overlay button (center) */}
      {!isPlaying && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <button
            onClick={togglePlay}
            className="w-16 h-16 rounded-full bg-[#00D285]/90 flex items-center justify-center text-black hover:bg-[#00D285] transition-all duration-300 shadow-lg"
            aria-label="Play video"
          >
            <Play size={30} className="ml-1" />
          </button>
        </motion.div>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800/50">
        <div className="h-full bg-[#00D285]" style={{ width: `${progress}%` }}></div>
      </div>

      {/* Video controls */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: showControls || isHovered || smallControls ? 1 : 0,
          y: showControls || isHovered || smallControls ? 0 : 10,
        }}
        transition={{ duration: 0.2 }}
        className="absolute inset-x-0 bottom-1 p-3 md:p-4 flex items-center justify-between"
      >
        <Badge
          variant="outline"
          className={`rounded-full border-[#00D285] bg-black/50 backdrop-blur-sm ${smallControls ? "px-2 py-0.5 text-[10px]" : "px-4 py-1 text-xs"
            } font-medium text-[#00D285]`}
        >
          {label}
        </Badge>

        <div className="flex items-center gap-1 md:gap-2">
          <button
            onClick={togglePlay}
            className={`${buttonSize} rounded-full bg-[#00D285] flex items-center justify-center text-black hover:bg-[#00D285]/90 transition-colors`}
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <Pause size={iconSize} /> : <Play size={iconSize} />}
          </button>

          <button
            onClick={toggleMute}
            className={`${buttonSize} rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors`}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <VolumeX size={iconSize} /> : <Volume2 size={iconSize} />}
          </button>

          <button
            onClick={enterFullscreen}
            className={`${buttonSize} rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors`}
            aria-label="View fullscreen"
          >
            <Maximize2 size={iconSize} />
          </button>
        </div>
      </motion.div>

      {/* Hover effect overlay */}
      <div
        className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"} pointer-events-none`}
      ></div>
    </div>
  )
}

