"use client";

import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Play, Pause, Volume2, VolumeX, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useLazyVideo } from "./use-video-lazy-load";

interface VideoTestimonial {
  id: string;
  videoUrl: string;
  duration: string;
  projectType: string;
}

const VideoTestimonialSection = () => {
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  const { containerRef, isVisible } = useLazyVideo();

  // Single testimonial data
  const testimonials = useMemo<VideoTestimonial[]>(
    () => [
      {
        id: "video1",
        videoUrl: "/second.mp4",
        duration: "1:45",
        projectType: "E-commerce Platform Redesign",
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
  }, []);

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

  // Format time for display
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" + secs : secs}`;
  };

  // Functional back button using router
  const handleBack = () => {
    router.push("/#testimonials");
  };

  return (
    <section
      ref={containerRef}
      className="bg-black text-white py-16 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0,rgba(0,0,0,0)_70%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8),rgba(0,0,0,0.4),rgba(0,0,0,0.8))]"></div>

      <div className="relative z-10 max-w-6xl mx-auto pt-8">
        {/* Back button with ripple effect */}
        <div className="mb-8">
          <button
            onClick={handleBack}
            className="group flex items-center gap-2 px-4 py-2 bg-zinc-800/70 hover:bg-emerald-800/70 rounded-lg transition-all duration-300 text-sm font-medium border border-zinc-700/50 hover:border-emerald-500/50 shadow-lg hover:shadow-emerald-500/20 relative overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-full bg-emerald-500/20 group-hover:translate-x-0"></span>
            <ArrowLeft className="w-4 h-4 relative z-10 group-hover:text-emerald-300 transition-colors duration-300" />
            <span className="relative z-10 group-hover:text-emerald-300 transition-colors duration-300">
              Back to Success Stories
            </span>
          </button>
        </div>

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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            {/* Featured video (larger) */}
            <div className="lg:col-span-8 relative">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-xl hover:shadow-emerald-500/10 transition-shadow duration-300">
                {/* Video thumbnail with overlay */}
                <div className="absolute inset-0 z-10 bg-black/30 flex items-center justify-center">
                  {/* Play/Pause button overlay */}
                  <button
                    onClick={handlePlayPause}
                    className="z-20 bg-emerald-500 hover:bg-emerald-600 text-black rounded-full p-4 transition-transform duration-300 hover:scale-110 shadow-lg shadow-emerald-500/20"
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
                    {testimonials[0].duration}
                  </div>
                </div>

                {/* Actual video element - optimized with preload="metadata" */}
                <video
                  ref={(el) => {
                    videoRefs.current[testimonials[0].id] = el;
                  }}
                  src={testimonials[0].videoUrl}
                  className="w-full h-full object-cover"
                  onEnded={() => setIsPlaying(false)}
                  onError={() => console.error(`Error loading video`)}
                  onTimeUpdate={() => updateProgress(testimonials[0].id)}
                  playsInline
                  preload="metadata"
                />

                {/* Video controls */}
                <div
                  className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300 ${isPlaying ? "opacity-100" : "opacity-0"}`}
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

                      {videoRefs.current[testimonials[0].id] && (
                        <span className="text-xs text-white/80 ml-1">
                          {formatTime(
                            videoRefs.current[testimonials[0].id]
                              ?.currentTime || 0
                          )}{" "}
                          / {testimonials[0].duration}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Client info card with enhanced styling */}
            <div className="lg:col-span-4 flex flex-col bg-zinc-900/50 rounded-xl p-6 border border-zinc-800 hover:border-emerald-500/30 transition-all duration-300 shadow-lg hover:shadow-emerald-500/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-emerald-500/30 shadow-lg shadow-emerald-500/10">
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
                  <h3 className="text-xl font-bold text-white">Kyle nianga</h3>
                  <p className="text-emerald-400">CEO & Founder</p>
                  <p className="text-zinc-400 text-sm">Contntr</p>
                </div>
              </div>

              {/* Quote section */}
              <div className="mb-6 bg-zinc-800/30 p-4 rounded-lg border border-zinc-700/50">
                <p className="text-zinc-300 italic text-sm">
                  &quot;Sami absolutely crushed it with my website in less than
                  a week. He took the time to really understand what I wanted
                  and brought it to life in a way that felt personal and unique.
                  The whole process was smooth, and I could tell they were fully
                  invested in making sure everything was perfect. I honestly
                  couldn't be more happy with the result. If you need a web
                  developer who cares about the details, I highly recommend
                  Sami.&quot;
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoTestimonialSection;
