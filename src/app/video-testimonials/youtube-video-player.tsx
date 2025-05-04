import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { useYouTubeAPI } from "./use-youtube-api"

interface YouTubePlayerProps {
    videoId: string
    onEnded?: () => void
    onProgress?: (progress: number) => void
}

export const YouTubePlayer = ({ videoId, onEnded, onProgress }: YouTubePlayerProps) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const [progress, setProgress] = useState(0)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const playerRef = useRef<YT.Player | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const progressInterval = useRef<NodeJS.Timeout | null>(null)

    // Initialize YouTube API
    useYouTubeAPI(() => {
        if (containerRef.current) {
            playerRef.current = new window.YT.Player(containerRef.current, {
                videoId,
                playerVars: {
                    controls: 0,
                    modestbranding: 1,
                    rel: 0,
                    showinfo: 0,
                    fs: 0,
                },
                events: {
                    onReady: (event: YT.PlayerEvent) => {
                        setDuration(event.target.getDuration())
                    },
                    onStateChange: (event: YT.OnStateChangeEvent) => {
                        if (event.data === YT.PlayerState.PLAYING) {
                            setIsPlaying(true)
                            startProgressTracker()
                        } else if (event.data === YT.PlayerState.PAUSED) {
                            setIsPlaying(false)
                            stopProgressTracker()
                        } else if (event.data === YT.PlayerState.ENDED) {
                            setIsPlaying(false)
                            stopProgressTracker()
                            if (onEnded) onEnded()
                        }
                    },
                },
            })
        }
    })

    // Track video progress
    const startProgressTracker = () => {
        if (progressInterval.current) clearInterval(progressInterval.current)

        progressInterval.current = setInterval(() => {
            if (playerRef.current) {
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

    // Clean up interval on unmount
    useEffect(() => {
        return () => {
            stopProgressTracker()
        }
    }, [])

    // Handle play/pause
    const handlePlayPause = () => {
        if (!playerRef.current) return

        if (isPlaying) {
            playerRef.current.pauseVideo()
        } else {
            playerRef.current.playVideo()
        }
    }

    // Handle mute/unmute
    const handleMuteToggle = () => {
        if (!playerRef.current) return

        if (isMuted) {
            playerRef.current.unMute()
            setIsMuted(false)
        } else {
            playerRef.current.mute()
            setIsMuted(true)
        }
    }

    // Format time for display
    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60)
        const secs = Math.floor(seconds % 60)
        return `${mins}:${secs < 10 ? "0" + secs : secs}`
    }

    return (
        <div className="relative aspect-video w-full h-full">
            {/* YouTube Player Container */}
            <div ref={containerRef} className="absolute inset-0"></div>

            {/* Play/Pause overlay */}
            <div className="absolute inset-0 z-10 bg-black/30 flex items-center justify-center pointer-events-none">
                {/* Play/Pause button */}
                <button
                    onClick={handlePlayPause}
                    className="z-20 bg-emerald-500 hover:bg-emerald-600 text-black rounded-full p-4 transition-transform duration-300 hover:scale-110 shadow-lg shadow-emerald-500/20 pointer-events-auto"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                    {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
                </button>
            </div>

            {/* Video controls */}
            <div
                className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300 ${isPlaying ? "opacity-100" : "opacity-0"
                    } pointer-events-auto`}
            >
                {/* Progress bar */}
                <div className="w-full h-1 bg-white/20 rounded-full mb-3 overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${progress}%` }}></div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={handlePlayPause}
                            className="text-white hover:text-emerald-400 transition-colors bg-black/30 rounded-full p-1.5"
                            aria-label={isPlaying ? "Pause video" : "Play video"}
                        >
                            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                        </button>

                        <button
                            onClick={handleMuteToggle}
                            className="text-white hover:text-emerald-400 transition-colors bg-black/30 rounded-full p-1.5"
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
