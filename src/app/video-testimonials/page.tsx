"use client"

import { useState, useRef, useEffect, useMemo } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import { YouTubePlayer } from "./youtube-video-player"

interface VideoTestimonial {
  id: string
  videoId: string
  duration: string
  projectType: string
}

const VideoTestimonialSection = () => {
  const router = useRouter()
  const containerRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  // Visibility detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  // Single testimonial data
  const testimonials = useMemo<VideoTestimonial[]>(
    () => [
      {
        id: "video1",
        videoId: "oETd2oEqhFM",
        duration: "1:45",
        projectType: "E-commerce Platform Redesign",
      },
    ],
    [],
  )

  // Track video progress
  const handleVideoProgress = (progress: number) => {
    // You can use this to update UI based on video progress
    console.log(`Video progress: ${progress.toFixed(2)}%`)
  }

  // Handle video end
  const handleVideoEnd = () => {
    console.log("Video ended")
    // You can implement actions when video ends
  }

  // Functional back button using router
  const handleBack = () => {
    router.push("/#testimonials")
  }

  return (
    <section ref={containerRef} className="bg-white text-gray-800 py-16 px-4 md:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(0,101,234,0.05)_0,rgba(255,255,255,0)_70%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.8),rgba(255,255,255,0.4),rgba(255,255,255,0.8))]"></div>

      <div className="relative z-10 max-w-6xl mx-auto pt-8">
        {/* Back button with ripple effect */}
        <div className="mb-8">
          <button
            onClick={handleBack}
            className="group flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-blue-50 rounded-lg transition-all duration-300 text-sm font-medium border border-gray-200 hover:border-blue-200 shadow-sm hover:shadow-blue-100 relative overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-full bg-blue-100 group-hover:translate-x-0"></span>
            <ArrowLeft className="w-4 h-4 relative z-10 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
            <span className="relative z-10 text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
              Back to Success Stories
            </span>
          </button>
        </div>

        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
            <span>Client Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Hear What Our <span className="text-blue-600">Clients</span> Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Watch video testimonials from our satisfied clients</p>
        </div>

        {/* Main content - only render fully when visible */}
        {isVisible && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            {/* Featured video (larger) */}
            <div className="lg:col-span-8 relative">
              <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-gray-50 border border-gray-200 shadow-lg hover:shadow-blue-100 transition-shadow duration-300">
                {/* YouTube Player Component */}
                <YouTubePlayer
                  videoId={testimonials[0].videoId}
                  onProgress={handleVideoProgress}
                  onEnded={handleVideoEnd}
                />
              </div>
            </div>

            {/* Client info card with enhanced styling */}
            <div className="lg:col-span-4 flex flex-col bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-md hover:shadow-blue-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-blue-200 shadow-md shadow-blue-100">
                  <Image
                    src="/testimonial/kyle.png"
                    alt="Avatar"
                    fill
                    sizes="64px"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Kyle Nianga</h3>
                  <p className="text-blue-600">CEO & Founder</p>
                  <p className="text-gray-500 text-sm">Contntr</p>
                </div>
              </div>

              {/* Quote section */}
              <div className="mb-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                <p className="text-gray-700 italic text-sm">
                  &quot;Sami absolutely crushed it with my website in less than a week. He took the time to really
                  understand what I wanted and brought it to life in a way that felt personal and unique. The whole
                  process was smooth, and I could tell they were fully invested in making sure everything was perfect. I
                  honestly could&apos;t be more happy with the result. If you need a web developer who cares about the
                  details, I highly recommend Sami.&quot;
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default VideoTestimonialSection
