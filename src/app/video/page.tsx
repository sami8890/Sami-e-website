"use client";
import React, { useState } from "react";
import { Play, Pause, Volume2, VolumeX, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Kyle Nianga",
    company: "SEO Agency Startup",
    videoUrl: "/testimonials/kyle-video.mp4", // Replace with actual video URL
    thumbnail: "/testimonial/kyle.png",
    accent: "from-blue-500 to-indigo-600",
  },
  {
    id: 2,
    name: "Ahmed Hassan",
    company: "Video-Editor Agency",
    videoUrl: "/testimonials/ahmed-video.mp4", // Replace with actual video URL
    thumbnail: "/testimonial/ahmed.png",
    accent: "from-purple-500 to-pink-600",
  },
  {
    id: 3,
    name: "Muhammad Ibrahim",
    company: "Portfolio Website",
    videoUrl: "/testimonials/ibrahim-video.mp4", // Replace with actual video URL
    thumbnail: "/testimonial/ibrahim.png",
    accent: "from-green-500 to-teal-600",
  },
];

export default function VideoTestimonialSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const currentTestimonial = testimonials[activeTestimonial];

    const [, setProgress] = useState(0);

    // Optionally, update progress as video plays
    React.useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const updateProgress = () => {
            if (video.duration) {
                setProgress((video.currentTime / video.duration) * 100);
            }
        };

        video.addEventListener("timeupdate", updateProgress);
        return () => {
            video.removeEventListener("timeupdate", updateProgress);
        };
    }, [activeTestimonial]);

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.03),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.03),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-6">
            <Quote className="w-3 h-3 text-blue-600" />
            <span className="text-xs font-medium text-blue-700">Client Success Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            Real Results,{" "}
            <span className="text-blue-600" style={{ fontFamily: "Instrument Serif, serif" }}>
              Real Clients
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Hear directly from businesses we&apos;ve helped transform their online presence
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            
            {/* Video Player Section - Takes 3 columns */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3"
            >
              <div className="relative group">
                {/* Video Container with Premium Styling */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-900 shadow-2xl">
                  <div className={`absolute inset-0 bg-gradient-to-br ${currentTestimonial.accent} opacity-10`}></div>
                  
                  {/* Video Element */}
                  <div className="relative aspect-video">
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      poster={currentTestimonial.thumbnail}
                      src={currentTestimonial.videoUrl}
                      onEnded={() => setIsPlaying(false)}
                    >
                      Your browser does not support the video tag.
                    </video>
                    
                    {/* Overlay Controls */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {/* Play/Pause Button */}
                      <button
                        onClick={handlePlayPause}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 shadow-xl"
                      >
                        {isPlaying ? (
                          <Pause className="w-6 h-6 text-slate-900 ml-0" />
                        ) : (
                          <Play className="w-6 h-6 text-slate-900 ml-1" />
                        )}
                      </button>
                      
                      {/* Bottom Controls */}
                      <div className="absolute bottom-4 right-4">
                        <button
                          onClick={handleMute}
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                        >
                          {isMuted ? (
                            <VolumeX className="w-4 h-4 text-white" />
                          ) : (
                            <Volume2 className="w-4 h-4 text-white" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Client Info Bar */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                    <motion.div
                      key={currentTestimonial.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-white font-semibold text-lg">{currentTestimonial.name}</h3>
                      <p className="text-white/80 text-sm">{currentTestimonial.company}</p>
                    </motion.div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
              </div>
            </motion.div>

            {/* Testimonial Selector - Takes 2 columns */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-2 space-y-4"
            >
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  Select Testimonial
                </h3>
                <div className="h-px bg-gradient-to-r from-slate-200 to-transparent"></div>
              </div>
              
              <AnimatePresence mode="wait">
                {testimonials.map((testimonial, index) => (
                  <motion.button
                    key={testimonial.id}
                    onClick={() => {
                      setActiveTestimonial(index);
                      setIsPlaying(false);
                      setProgress(0);
                      if (videoRef.current) {
                        videoRef.current.currentTime = 0;
                      }
                    }}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 group ${
                      index === activeTestimonial
                        ? "bg-gradient-to-r from-slate-900 to-slate-800 shadow-lg scale-[1.02]"
                        : "bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300"
                    }`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-4">
                      {/* Thumbnail */}
                      <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                        <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.accent} opacity-20`}></div>
                        <img
                          src={testimonial.thumbnail}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                        {index === activeTestimonial && (
                          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          </div>
                        )}
                      </div>
                      
                      {/* Info */}
                      <div className="flex-1">
                        <h4 className={`font-semibold ${
                          index === activeTestimonial ? "text-white" : "text-slate-900"
                        }`}>
                          {testimonial.name}
                        </h4>
                        <p className={`text-sm ${
                          index === activeTestimonial ? "text-white/70" : "text-slate-500"
                        }`}>
                          {testimonial.company}
                        </p>
                      </div>
                      
                      {/* Play Icon */}
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        index === activeTestimonial 
                          ? "bg-white/20" 
                          : "bg-slate-100 group-hover:bg-blue-50"
                      }`}>
                        <Play className={`w-3 h-3 ml-0.5 ${
                          index === activeTestimonial ? "text-white" : "text-slate-600 group-hover:text-blue-600"
                        }`} />
                      </div>
                    </div>
                  </motion.button>
                ))}
              </AnimatePresence>
              
              {/* Trust Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-sm text-green-700 font-medium">
                    100% Authentic Client Feedback
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}