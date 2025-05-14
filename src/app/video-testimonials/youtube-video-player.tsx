"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

interface YouTubePlayerProps {
    videoId: string
    onEnded?: () => void
    onProgress?: (progress: number) => void
}

// Define the type for the player instance
interface YouTubePlayerInstance {
    playVideo: () => void
    pauseVideo: () => void
    mute: () => void
    unMute: () => void
    getCurrentTime: () => number
    getDuration: () => number
}

export const YouTubePlayer = ({ videoId, onEnded, onProgress }: YouTubePlayerProps) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const [progress, setProgress] = useState(0)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const [isHovering, setIsHovering] = useState(false)
    const [showControls, setShowControls] = useState(true)
    const [playerReady, setPlayerReady] = useState(false)

    const isMobile = useMobile()

    const playerRef = useRef<YouTubePlayerInstance | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const progressInterval = useRef<NodeJS.Timeout | null>(null)
    const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null)

    // Initialize YouTube API
    useEffect(() => {
        // Load YouTube API if not already loaded
        if (!window.YT) {
            // Create script tag
            const tag = document.createElement("script")
            tag.src = "https://www.youtube.com/iframe_api"

            // Add script to page
            const firstScriptTag = document.getElementsByTagName("script")[0]
            firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

            // Setup callback when API is ready
            window.onYouTubeIframeAPIReady = initializePlayer
        } else {
            // API already loaded, initialize player directly
            initializePlayer()
        }

        return () => {
            // Cleanup
            stopProgressTracker()
            clearControlsTimeout()
            window.onYouTubeIframeAPIReady = () => { }
        }
    }, [videoId])

    // Controls visibility timer
    useEffect(() => {
        if (isPlaying) {
            startControlsTimeout()
        } else {
            // Always show controls when paused
            setShowControls(true)
            clearControlsTimeout()
        }

        return () => clearControlsTimeout()
    }, [isPlaying])

    // Show controls when hovering (desktop) or reset timeout
    useEffect(() => {
        if (isHovering && isPlaying) {
            setShowControls(true)
            startControlsTimeout()
        }
    }, [isHovering, isPlaying])

    const startControlsTimeout = () => {
        clearControlsTimeout()
        controlsTimeoutRef.current = setTimeout(() => {
            setShowControls(false)
        }, 3000)
    }

    const clearControlsTimeout = () => {
        if (controlsTimeoutRef.current) {
            clearTimeout(controlsTimeoutRef.current)
            controlsTimeoutRef.current = null
        }
    }

    // Initialize the player
    const initializePlayer = () => {
        if (!containerRef.current || !window.YT || !window.YT.Player) {
            // If dependencies aren't ready, try again in a moment
            setTimeout(initializePlayer, 100)
            return
        }

        // Create YouTube player
        playerRef.current = new window.YT.Player(containerRef.current, {
            videoId,
            width: "100%",
            height: "100%",
            playerVars: {
                controls: 0,
                modestbranding: 1,
                rel: 0,
                showinfo: 0,
                fs: 0,
                enablejsapi: 1,
            },
            events: {
                onReady: (event: { target: { getDuration: () => number } }) => {
                    setPlayerReady(true)
                    setDuration(event.target.getDuration())
                },
                onStateChange: (event: { data: number }) => {
                    if (event.data === window.YT.PlayerState.PLAYING) {
                        setIsPlaying(true)
                        startProgressTracker()
                        startControlsTimeout()
                    } else if (event.data === window.YT.PlayerState.PAUSED) {
                        setIsPlaying(false)
                        stopProgressTracker()
                        setShowControls(true)
                        clearControlsTimeout()
                    } else if (event.data === window.YT.PlayerState.ENDED) {
                        setIsPlaying(false)
                        stopProgressTracker()
                        setShowControls(true)
                        clearControlsTimeout()
                        if (onEnded) onEnded()
                    }
                },
            },
        })
    }

    // Track video progress
    const startProgressTracker = () => {
        if (progressInterval.current) clearInterval(progressInterval.current)

        progressInterval.current = setInterval(() => {
            if (playerRef.current && typeof playerRef.current.getCurrentTime === "function") {
                const currentTime = playerRef.current.getCurrentTime()
                const duration = playerRef.current.getDuration()
                const progressValue = (currentTime / duration) * 100

                setCurrentTime(currentTime)
                setProgress(progressValue)

                if (onProgress) onProgress(progressValue)
            }
        }, 1000)
    }

    const stopProgressTracker = () => {
        if (progressInterval.current) {
            clearInterval(progressInterval.current)
            progressInterval.current = null
        }
    }

    // Handle play/pause
    const handlePlayPause = () => {
        if (!playerRef.current || !playerReady) return

        try {
            if (isPlaying) {
                playerRef.current.pauseVideo()
            } else {
                playerRef.current.playVideo()
            }
        } catch (error) {
            console.error("Error controlling video:", error)
        }
    }

    // Handle mute/unmute
    const handleMuteToggle = () => {
        if (!playerRef.current || !playerReady) return

        try {
            if (isMuted) {
                playerRef.current.unMute()
                setIsMuted(false)
            } else {
                playerRef.current.mute()
                setIsMuted(true)
            }
        } catch (error) {
            console.error("Error toggling mute:", error)
        }
    }

    // Handle mobile tap to show controls
    const handleContainerClick = () => {
        if (isMobile && isPlaying) {
            setShowControls(true)
            startControlsTimeout()
        }
    }

    // Format time for display
    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60)
        const secs = Math.floor(seconds % 60)
        return `${mins}:${secs < 10 ? "0" + secs : secs}`
    }

    return (
        <div
            className="relative aspect-video w-full h-full"
            onMouseEnter={() => !isMobile && setIsHovering(true)}
            onMouseLeave={() => !isMobile && setIsHovering(false)}
            onClick={handleContainerClick}
        >
            {/* YouTube Player Container */}
            <div id={`youtube-player-${videoId}`} ref={containerRef} className="absolute inset-0 w-full h-full"></div>

            {/* Play/Pause overlay - Now hides when playing and not hovering */}
            <div
                className={`absolute inset-0 z-10 bg-black/30 flex items-center justify-center transition-opacity duration-300 ${isPlaying && !showControls ? "opacity-0 pointer-events-none" : "opacity-100"
                    }`}
            >
                {/* Play/Pause button */}
                <button
                    onClick={handlePlayPause}
                    className="z-20 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 transition-transform duration-300 hover:scale-110 shadow-lg shadow-blue-500/20 pointer-events-auto"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                    {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
                </button>
            </div>

            {/* Video controls */}
            <div
                className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300 ${isPlaying && !showControls ? "opacity-0 pointer-events-none" : "opacity-100"
                    }`}
            >
                {/* Progress bar */}
                <div className="w-full h-1 bg-white/20 rounded-full mb-3 overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: `${progress}%` }}></div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={handlePlayPause}
                            className="text-white hover:text-blue-300 transition-colors bg-black/30 rounded-full p-1.5"
                            aria-label={isPlaying ? "Pause video" : "Play video"}
                        >
                            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                        </button>

                        <button
                            onClick={handleMuteToggle}
                            className="text-white hover:text-blue-300 transition-colors bg-black/30 rounded-full p-1.5"
                            aria-label={isMuted ? "Unmute" : "Mute"}
                        >
                            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                        </button>

                        <span className="text-xs text-white/80 ml-1">
                            {formatTime(currentTime)} / {formatTime(duration)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Add YouTube API type definitions
declare global {
    interface Window {
        YT: {
            Player: new (
                element: Element | string,
                options: {
                    videoId: string
                    width: string
                    height: string
                    playerVars: {
                        controls?: number
                        modestbranding?: number
                        rel?: number
                        showinfo?: number
                        fs?: number
                        enablejsapi?: number
                    }
                    events: {
                        onReady?: (event: { target: YouTubePlayerInstance }) => void
                        onStateChange?: (event: { data: number }) => void
                    }
                },
            ) => YouTubePlayerInstance
            PlayerState: {
                PLAYING: number
                PAUSED: number
                ENDED: number
                BUFFERING: number
                CUED: number
            }
            ready: (callback: () => void) => void
        }
        onYouTubeIframeAPIReady: () => void
    }
}
