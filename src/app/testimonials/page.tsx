"use client";

import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Clock,
  User,
  AlertCircle,
} from "lucide-react";
import Image from "next/image";
import { useLazyVideo } from "./use-video-lazy-load";

interface VideoTestimonial {
  id: string;
  clientName: string;
  clientRole: string;
  clientCompany: string;
  clientAvatar: string;
  videoUrl: string;
//   thumbnailUrl: string;
  duration: string;
  quote: string;
  projectType: string;
}

const VideoTestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isHovering, setIsHovering] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  const { containerRef, isVisible } = useLazyVideo();

  // Only one testimonial with a placeholder for "coming soon"
  const testimonials = useMemo<VideoTestimonial[]>(
    () => [
      {
        id: "video1",
        clientName: "Kyle Nianga ",
        clientRole: "Marketing Director",
        clientCompany: "TechCorp Inc.",
        clientAvatar: "/placeholder.svg?height=80&width=80",
        videoUrl: "/second.mp4", // Replace with actual video URL
        // thumbnailUrl: "/",
        duration: "1:45",
        quote:
          "Working with this team transformed our online presence completely. Our conversion rates increased by 45% within the first month!",
        projectType: "Website Redesign",
      },
    ],
    []
  );

  // Handle video playback with useCallback to prevent recreation on each render
  const handlePlayPause = useCallback(() => {
    const videoId = testimonials[0].id;
    const video = videoRefs.current[videoId];
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      // Add error handling for video playback
      video.play().catch((err) => console.error("Video playback error:", err));
      setIsPlaying(true);
    }
  }, [isPlaying, testimonials]);

  // Handle mute/unmute with useCallback
  const handleMuteToggle = useCallback(() => {
    const videoId = testimonials[0].id;
    const video = videoRefs.current[videoId];
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(!isMuted);
  }, [isMuted, testimonials]);

  // Handle video errors
  const handleVideoError = useCallback((videoId: string) => {
    console.error(`Error loading video ${videoId}`);
    setIsPlaying(false);
  }, []);

  // Update progress bar
  const updateProgress = useCallback((videoId: string) => {
    const video = videoRefs.current[videoId];
    if (!video) return;

    const progressValue = (video.currentTime / video.duration) * 100;
    setProgress(progressValue);
  }, []);

  // Reset playing state when active index changes
  useEffect(() => {
    setIsPlaying(false);
    setProgress(0);
  }, [activeIndex]);

  // Pause videos when section is not visible
  useEffect(() => {
    if (!isVisible && isPlaying) {
      Object.values(videoRefs.current).forEach((video) => {
        if (video && !video.paused) {
          video.pause();
          setIsPlaying(false);
        }
      });
    }
  }, [isVisible, isPlaying]);

  // Current active testimonial - memoized to prevent recalculation
  const activeTestimonial = testimonials[0];

  // Format time for display
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" + secs : secs}`;
  };

  return (
    <section
      ref={containerRef}
      className="bg-black text-white py-16 px-4 md:px-8 relative overflow-hidden"
    >
      <div className="bg-yellow-500/20 border-b border-yellow-500/30 py-2 mb-4 mt-8">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-center">
          <AlertCircle className="w-5 h-5 mr-2 text-yellow-400" />
          <span className="text-xs font-medium text-yellow-300/95 z-40 ">
            This section is currently in development. Please check back later
            for the complete experience. Expected completion: [28 March].
          </span>
        </div>
      </div>
      {/* Background elements */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0,rgba(0,0,0,0)_70%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8),rgba(0,0,0,0.4),rgba(0,0,0,0.8))]"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            <span>Client Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Hear What Our <span className="text-emerald-500">Clients</span> Say
          </h2>
          <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
            Watch video testimonials from our satisfied clients
          </p>
        </div>

        {/* Main content - only render fully when visible */}
        {isVisible && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
              {/* Featured video (larger) */}
              <div className="lg:col-span-3 relative">
                <div
                  className="relative aspect-video rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-xl"
                  onMouseEnter={() => setIsHovering(0)}
                  onMouseLeave={() => setIsHovering(null)}
                >
                  {/* Video thumbnail with overlay */}
                  <div className="absolute inset-0 z-10 bg-black/30 flex items-center justify-center">
                    {/* <Image
                    //   src={activeTestimonial.thumbnailUrl || "/placeholder.svg"}
                      alt={`${activeTestimonial.clientName} testimonial`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={`object-cover transition-opacity duration-300 ${isPlaying ? "opacity-0" : "opacity-100"}`}
                    /> */}

                    {/* Play/Pause button overlay */}
                    <button
                      onClick={handlePlayPause}
                      className="z-20 bg-emerald-500 hover:bg-emerald-600 text-black rounded-full p-4 transition-transform duration-300 hover:scale-110"
                      aria-label={isPlaying ? "Pause video" : "Play video"}
                    >
                      {isPlaying ? (
                        <Pause className="w-8 h-8" />
                      ) : (
                        <Play className="w-8 h-8" />
                      )}
                    </button>

                    {/* Video duration */}
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded z-20">
                      {activeTestimonial.duration}
                    </div>
                  </div>

                  {/* Actual video element - optimized with preload="metadata" */}
                  <video
                    ref={(el) => {
                      videoRefs.current[activeTestimonial.id] = el;
                    }}
                    src={activeTestimonial.videoUrl}
                    className="w-full h-full object-cover"
                    onEnded={() => setIsPlaying(false)}
                    onError={() => handleVideoError(activeTestimonial.id)}
                    onTimeUpdate={() => updateProgress(activeTestimonial.id)}
                    playsInline
                    preload="metadata"
                  />

                  {/* Video controls */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300 ${isHovering === 0 || isPlaying ? "opacity-100" : "opacity-0"}`}
                  >
                    {/* Progress bar */}
                    <div className="w-full h-1 bg-white/20 rounded-full mb-3 overflow-hidden">
                      <div
                        className="h-full bg-emerald-500 rounded-full"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={handlePlayPause}
                          className="text-white hover:text-emerald-400 transition-colors bg-black/30 rounded-full p-1.5"
                          aria-label={isPlaying ? "Pause video" : "Play video"}
                        >
                          {isPlaying ? (
                            <Pause className="w-5 h-5" />
                          ) : (
                            <Play className="w-5 h-5" />
                          )}
                        </button>

                        <button
                          onClick={handleMuteToggle}
                          className="text-white hover:text-emerald-400 transition-colors bg-black/30 rounded-full p-1.5"
                          aria-label={isMuted ? "Unmute" : "Mute"}
                        >
                          {isMuted ? (
                            <VolumeX className="w-5 h-5" />
                          ) : (
                            <Volume2 className="w-5 h-5" />
                          )}
                        </button>

                        {videoRefs.current[activeTestimonial.id] && (
                          <span className="text-xs text-white/80 ml-1">
                            {formatTime(
                              videoRefs.current[activeTestimonial.id]
                                ?.currentTime || 0
                            )}{" "}
                            / {activeTestimonial.duration}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial info and quote */}
              <div className="lg:col-span-2 flex flex-col justify-between bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-emerald-500/30">
                      {activeTestimonial.clientAvatar ? (
                        <Image
                          src={
                            activeTestimonial.clientAvatar || "/placeholder.svg"
                          }
                          alt={activeTestimonial.clientName}
                          fill
                          sizes="64px"
                          loading="lazy"
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-emerald-500/20 flex items-center justify-center">
                          <User className="w-8 h-8 text-emerald-500" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {activeTestimonial.clientName}
                      </h3>
                      <p className="text-emerald-400">
                        {activeTestimonial.clientRole}
                      </p>
                      <p className="text-zinc-400 text-sm">
                        {activeTestimonial.clientCompany}
                      </p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="relative">
                      <div className="absolute -top-4 -left-2 text-4xl text-emerald-500/20 font-serif">
                        &quot;
                      </div>
                      <p className="text-lg md:text-xl text-zinc-300 italic leading-relaxed pl-6">
                        {activeTestimonial.quote}
                      </p>
                      <div className="absolute -bottom-4 -right-2 text-4xl text-emerald-500/20 font-serif rotate-180">
                        &quot;
                      </div>
                    </div>
                  </div>

                  <div className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700">
                    <p className="text-sm text-zinc-400">
                      <span className="text-emerald-400 font-medium">
                        Project:{" "}
                      </span>
                      {activeTestimonial.projectType}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnail and Coming Soon section */}
            <div className="grid grid-cols-2 gap-6 max-w-xl mx-auto">
              {/* Current testimonial thumbnail */}
              <div
                className="relative cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ring-2 ring-emerald-500 scale-[1.02] shadow-lg shadow-emerald-500/10"
                onClick={() => setActiveIndex(0)}
              >
                <div className="aspect-video relative">
                  {/* <Image
                    src={activeTestimonial.thumbnailUrl || "/placeholder.svg"}
                    alt={activeTestimonial.clientName}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    loading="lazy"
                    className="object-cover"
                  /> */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="bg-emerald-500 text-black rounded-full p-2">
                      {isPlaying ? (
                        <Pause className="w-5 h-5" />
                      ) : (
                        <Play className="w-5 h-5" />
                      )}
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
                  <p className="text-xs font-medium text-white truncate">
                    {activeTestimonial.clientName}
                  </p>
                </div>
              </div>

              {/* Coming Soon placeholder */}
              <div className="relative rounded-lg overflow-hidden transition-all duration-300 border border-zinc-700 bg-zinc-900/50">
                <div className="aspect-video relative flex flex-col items-center justify-center p-4 text-center">
                  <Clock className="w-10 h-10 text-emerald-500/50 mb-2" />
                  <h3 className="text-lg font-medium text-white mb-1">
                    More Testimonials
                  </h3>
                  <p className="text-xs text-zinc-400">Coming soon</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default VideoTestimonialSection;
