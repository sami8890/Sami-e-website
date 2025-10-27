"use client"
import React, { useState } from "react"
import { Play, Volume2, VolumeX, Quote, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"

const testimonials = [
  {
    id: 1,
    name: "Ahmed Hassan",
    company: "Video-Editor Agency",
    videoUrl: "https://res.cloudinary.com/dpyireagy/video/upload/v1760983513/VID-20251017-WA0001_1_wbd27t.mp4",
    // thumbnail: "/testimonial/ahmed.png",
    accent: "from-blue-200 to-indigo-800",
  },
  {
    id: 1,
    name: "Kyle Nianga",
    company: "SEO Agency Startup",
    videoUrl: "https://res.cloudinary.com/dpyireagy/video/upload/v1758002457/Kyle_rfbfnp.mp4",
    // thumbnail: "/kyle.png",
    accent: "from-blue-500 to-indigo-600",
  },
]

export default function VideoTestimonialSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const videoRef = React.useRef<HTMLVideoElement>(null)

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const currentTestimonial = testimonials[activeTestimonial]

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.03),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.03),transparent_50%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="mb-8 sm:mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors duration-300 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Back to Home</span>
          </Link>
        </div>
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-3 py-1.5 mb-4 sm:mb-6">
            <Quote className="w-3 h-3 text-blue-600" />
            <span className="text-xs font-medium text-blue-700">Success Stories</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-3 sm:mb-4 px-2">
            Real Results,{" "}
            <span className="text-blue-600" style={{ fontFamily: "Instrument Serif, serif" }}>
              Real Clients
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4">
            Hear directly from businesses we&apos;ve helped transform their online presence
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 items-start">
            {/* Video Section */}
            <div className="lg:col-span-3 order-1 lg:order-1">
              <div className="relative group">
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-slate-900 shadow-xl sm:shadow-2xl">
                  <div className={`absolute inset-0 bg-gradient-to-br ${currentTestimonial.accent} opacity-10`}></div>

                  <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                    <video
                      ref={videoRef}
                      className="w-full h-full object-contain"
                      // poster={currentTestimonial.thumbnail}
                      src={currentTestimonial.videoUrl}
                      onEnded={() => setIsPlaying(false)}
                      playsInline
                      preload="metadata"
                      webkit-playsinline="true"
                    >
                      Your browser does not support the video tag.
                    </video>

                    {!isPlaying && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                        <button
                          onClick={handlePlayPause}
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-105 shadow-xl"
                          aria-label="Play video"
                        >
                          <Play className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-slate-900 ml-0.5" />
                        </button>

                        
                      </div>
                    )}

                    {isPlaying && (
                      <>
                        <div className="absolute inset-0 group/playing">
                          <button
                            onClick={handlePlayPause}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-all duration-300 opacity-0 group-hover/playing:opacity-100"
                            aria-label="Pause video"
                          >
                            <div className="w-5 h-4 md:w-6 md:h-4 lg:w-8 lg:h-5 flex items-center justify-center">
                              <div className="flex gap-1">
                                <div className="w-1.5 h-3 md:w-1.5 md:h-4 lg:w-2 lg:h-5 bg-white rounded-sm"></div>
                                <div className="w-1.5 h-3 md:w-1.5 md:h-4 lg:w-2 lg:h-5 bg-white rounded-sm"></div>
                              </div>
                            </div>
                          </button>
                        </div>

                        <button
                          onClick={handleMute}
                          className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-10 h-10 md:w-12 md:h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-all duration-300"
                          aria-label={isMuted ? "Unmute video" : "Mute video"}
                        >
                          {isMuted ? (
                            <VolumeX className="w-4 h-4 md:w-5 md:h-5 text-white" />
                          ) : (
                            <Volume2 className="w-4 h-4 md:w-5 md:h-5 text-white" />
                          )}
                        </button>
                      </>
                    )}
                  </div>
                </div>

                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-20 h-20 sm:w-24 sm:h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-24 h-24 sm:w-32 sm:h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
              </div>
            </div>

            {/* Testimonial List Section */}
            <div className="lg:col-span-2 order-2 lg:order-2 space-y-3 sm:space-y-4">
              <div className="mb-4 sm:mb-6">
                <h3 className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2 sm:mb-3">Client Stories</h3>
                <div className="h-px bg-gradient-to-r from-slate-200 to-transparent"></div>
              </div>

              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => {
                    setActiveTestimonial(index)
                    setIsPlaying(false)
                    if (videoRef.current) {
                      videoRef.current.currentTime = 0
                    }
                  }}
                  className={`w-full text-left p-3 sm:p-4 rounded-lg sm:rounded-xl transition-all duration-300 group ${
                    index === activeTestimonial
                      ? "bg-gradient-to-r from-slate-900 to-slate-800 shadow-lg scale-[1.02]"
                      : "bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                

                    <div className="flex-1 min-w-0">
                      <h4 className={`font-semibold text-sm sm:text-base truncate ${index === activeTestimonial ? "text-white" : "text-slate-900"}`}>
                        {testimonial.name}
                      </h4>
                      <p className={`text-xs sm:text-sm truncate ${index === activeTestimonial ? "text-white/70" : "text-slate-500"}`}>
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
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0 group-hover/coming-soon:bg-blue-50 transition-colors duration-300">
                      <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 group-hover/coming-soon:text-blue-600 transition-colors duration-300" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-slate-900 text-sm sm:text-base mb-1">More Success Stories</h4>
                      <p className="text-slate-600 text-xs sm:text-sm mb-2">Coming soon...</p>
                      <div className="w-full bg-slate-100 rounded-full h-1 overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full w-2/3 transition-all duration-300 group-hover/coming-soon:w-3/4"></div>
                      </div>
                    </div>

                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover/coming-soon:bg-blue-50 transition-colors duration-300 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-400 rounded-full group-hover/coming-soon:bg-blue-500 transition-colors duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-slate-50 rounded-lg border border-slate-200">
                <p className="text-xs sm:text-sm text-slate-600 text-center">
                  <span className="font-medium text-slate-900">Want to be featured?</span>
                  <br />
                  Join our growing list of success stories
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}