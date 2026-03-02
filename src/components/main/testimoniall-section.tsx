"use client";

import { useState, useRef, useEffect } from "react";
import { Instrument_Serif } from "next/font/google";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Play, Pause, CheckCircle2, Volume2, VolumeX, ArrowUpRight } from "lucide-react";

const instrumentSerif = Instrument_Serif({ weight: "400", subsets: ["latin"] });

const featuredVideo = {
  name: "Ahmed Hassan",
  role: "Founder, Video Agency",
  videoUrl: "https://res.cloudinary.com/dpyireagy/video/upload/v1760983513/VID-20251017-WA0001_1_wbd27t.mp4",
  avatar: "/testimonial/ahmed.png"
};

const textTestimonials = [
  {
    id: 1,
    name: "Muhammad Ibrahim",
    role: "LinkedIn Branding Expert",
    avatar: "/testimonial/ibrahim.png",
    content: "Before Sami, I didn't even have a proper online presence. He built me a clean, modern site in record time—and now I'm getting real opportunities from it.",
    tag: "Modern Architecture"
  },
  {
    id: 2,
    name: "Ahmed",
    role: "CEO, Contexmedia",
    avatar: "/testimonial/ahmed.png",
    content: "I only had rough ideas, but Sami turned them into a site that feels 100% like my brand. The process was smooth, and the site is already attracting clients.",
    tag: "Brand Identity",
    link: "https://www.contexmedia.com/"
  },
  {
    id: 3,
    name: "Kyle",
    role: "CEO, Contntr",
    avatar: "/testimonial/kyle.png",
    content: "In under a week, Sami built a site that looks better than I imagined. It's unique, detailed, and nothing about it feels cookie-cutter.",
    tag: "Custom Build"
  }
];

export default function TestimonialSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Screen size check for dynamic heading & small button
  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 1024);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
        setShowControls(true);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
        // Play hone ke baad 1.5s mein button gayab hoga
        timeoutRef.current = setTimeout(() => {
          setShowControls(false);
        }, 1500);
      }
    }
  };

  return (
    <section className="py-16 md:py-32 bg-[#F8FAFC] overflow-hidden" id="testimonials">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* RESPONSIVE HEADINGS */}
        <div className="mb-12 md:mb-20 text-center lg:text-left">
          {isMobile ? (
            <h2 className={`${instrumentSerif.className} text-4xl md:text-6xl text-slate-900 leading-tight`}>
              Client <span className="italic text-amber-700 font-light text-5xl">Perspectives</span>
            </h2>
          ) : (
            <h2 className={`${instrumentSerif.className} text-4xl md:text-5xl font-medium text-slate-900 leading-tight`}>
              What our clients <span className="italic text-amber-700">actually say</span>
            </h2>
          )}
          <div className="h-1 w-16 md:w-20 bg-amber-700 mt-4 md:mt-6 rounded-full opacity-20 mx-auto lg:mx-0" />
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 md:gap-16">
          
          {/* LEFT: Text Testimonials */}
          <div className="order-2 lg:order-1 lg:col-span-7 space-y-6">
            {textTestimonials.map((t) => (
              <motion.div 
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-200 shadow-sm relative group hover:border-amber-200 transition-all duration-300"
              >
                <Quote className="w-8 h-8 text-amber-700/10 absolute top-6 right-8" />
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-amber-700 mb-3 block">{t.tag}</span>
                <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-6 italic">
                  &quot;{t.content}&quot;
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-slate-100 bg-slate-50">
                      <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                        <CheckCircle2 className="w-3 h-3 text-amber-600" />
                      </div>
                      <p className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">{t.role}</p>
                    </div>
                  </div>
                  {t.link && (
                    <a href={t.link} target="_blank" className="p-2 bg-slate-50 rounded-full hover:bg-amber-50 transition-colors group">
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-amber-700" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: Video Testimonial */}
          <div className="order-1 lg:order-2 lg:col-span-5 lg:sticky lg:top-24">
            <div className="relative flex justify-center">
              <motion.div 
                className="relative w-full max-w-[280px] md:max-w-[320px] aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-slate-900 bg-black group/video"
              >
                <video
                  ref={videoRef}
                  src={featuredVideo.videoUrl}
                  className={`w-full h-full object-cover transition-opacity duration-700 ${isPlaying ? 'opacity-100' : 'opacity-60'}`}
                  playsInline
                  muted={isMuted}
                  loop
                  onClick={handlePlayPause}
                />

                <div className="absolute inset-0 p-6 flex flex-col justify-between cursor-pointer" onClick={handlePlayPause}>
                  <div className="flex justify-between items-center">
                    <span className="px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-[9px] text-white font-bold tracking-widest uppercase border border-white/10">
                      Video Review
                    </span>
                    <button 
                      onClick={(e) => { e.stopPropagation(); setIsMuted(!isMuted); }}
                      className="p-2 bg-black/20 backdrop-blur-xl rounded-full text-white border border-white/10"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* SMALLER BUTTON FOR MOBILE */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <AnimatePresence>
                      {showControls && (
                        <motion.div 
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          className={`${isMobile ? 'w-14 h-14' : 'w-20 h-20'} bg-amber-700/90 backdrop-blur-sm text-white rounded-full flex items-center justify-center shadow-2xl`}
                        >
                          {isPlaying ? 
                            <Pause className={`${isMobile ? 'w-6 h-6' : 'w-8 h-8'} fill-current`} /> : 
                            <Play className={`${isMobile ? 'w-6 h-6' : 'w-8 h-8'} fill-current ml-1`} />
                          }
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-white/10 flex-shrink-0">
                      <Image src={featuredVideo.avatar} alt="Ahmed" fill className="object-cover" />
                    </div>
                    <div className="min-w-0 text-white">
                      <p className="text-[11px] font-bold uppercase tracking-wide truncate">{featuredVideo.name}</p>
                      <p className="text-white/50 text-[9px] uppercase tracking-tighter truncate">{featuredVideo.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}