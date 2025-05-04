"use client"

import { useEffect } from "react"

// Define YouTube Player API interface
declare global {
    interface Window {
        YT: {
            Player: string
            PlayerState: {
                PLAYING: number
                PAUSED: number
                ENDED: number
            }
            ready: (callback: () => void) => void
        }
        onYouTubeIframeAPIReady: () => void
    }
}

export const useYouTubeAPI = (callback?: () => void) => {
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
            window.onYouTubeIframeAPIReady = () => {
                if (callback) callback()
            }
        } else if (callback) {
            // API already loaded, call callback directly
            callback()
        }

        return () => {
            // Cleanup if needed
            window.onYouTubeIframeAPIReady = () => { }
        }
    }, [callback])
}
