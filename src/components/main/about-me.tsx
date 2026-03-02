"use client";

import { Instrument_Serif, Caveat } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const instrumentSerif = Instrument_Serif({ weight: "400", subsets: ["latin"] });
const signatureFont = Caveat({ weight: "400", subsets: ["latin"] });

// Custom Animated Bolt Component
const AnimatedBolt = () => (
  <div className="relative w-4 h-4 flex items-center justify-center">
    {/* Pulsing Aura */}
    <motion.div
      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="absolute inset-0 bg-amber-400 rounded-full blur-md"
    />
    {/* The Bolt Shape */}
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      className="w-full h-full text-amber-600 relative z-10 drop-shadow-[0_0_3px_rgba(217,119,6,0.5)]"
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
        d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  </div>
);

export default function AboutFounder() {
  return (
    <section className="py-24 bg-white overflow-hidden" id="about">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="flex items-center gap-4 mb-16 opacity-50">
          <span className="text-[10px] tracking-[0.4em] uppercase text-slate-900 font-bold">The Architect</span>
          <div className="h-[1px] flex-1 bg-slate-200" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: Video/Image Container - Fixed for Ahmed's Video Visibility */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] w-full bg-slate-950 rounded-2xl overflow-hidden shadow-2xl group border border-slate-800"
            >
              {/* Using Ahmed's Photo/Video as the visual anchor */}
              <Image 
                src="/about-mee.png" // Swap with Ahmed's thumbnail if this is the video section
                alt="Architecture" 
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>
          </div>

          {/* RIGHT: Story & The Performance Comparison */}
          <div className="lg:col-span-7">
            <motion.h2 
              className={`${instrumentSerif.className} text-5xl md:text-7xl text-slate-900 mb-8 leading-[0.95] tracking-tight`}
            >
              Beyond the <br />
              <span className="italic text-amber-800">Slow Web.</span>
            </motion.h2>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                In a market selling <strong className="text-slate-900 font-semibold">multi-million dollar properties</strong>, a 5-second load time is a luxury you can&apos;t afford.
              </p>

              {/* Technical Comparison Card with Animated Bolt */}
              <div className="mt-10 p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
                <div className="flex items-center gap-3 mb-8">
                   <AnimatedBolt />
                   <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">The Performance Gap</span>
                </div>
                
                {/* WordPress Row */}
                <div className="mb-8">
                  <div className="flex justify-between text-[11px] mb-3 font-bold uppercase tracking-widest">
                    <span className="text-slate-400">Standard WordPress</span>
                    <span className="text-red-500">4.5s Load</span>
                  </div>
                  <div className="h-[2px] w-full bg-slate-200 rounded-full">
                    <motion.div 
                      initial={{ width: 0 }} 
                      whileInView={{ width: "90%" }} 
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-red-400 rounded-full" 
                    />
                  </div>
                </div>

                {/* Your Work Row */}
                <div>
                  <div className="flex justify-between text-[11px] mb-3 font-bold uppercase tracking-widest">
                    <span className="text-slate-900">Sami&apos;s Architected Code</span>
                    <span className="text-emerald-600">0.7s Load</span>
                  </div>
                  <div className="h-[2px] w-full bg-slate-200 rounded-full">
                    <motion.div 
                      initial={{ width: 0 }} 
                      whileInView={{ width: "15%" }} 
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                      className="h-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]" 
                    />
                  </div>
                  <p className="text-[10px] text-slate-400 mt-4 italic font-medium tracking-tight">
                    *Based on LCP (Largest Contentful Paint) benchmarks.
                  </p>
                </div>
              </div>
            </div>

            {/* Signature Area */}
            <div className="mt-16 flex items-center gap-12">
              <div className="flex flex-col">
                <span className={`${signatureFont.className} text-5xl text-slate-900`}>Sami</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 mt-2">Lead Web Architect</span>
              </div>
              <Link href="/contact" className="group flex flex-col text-[11px] font-bold uppercase tracking-[0.3em] text-slate-900 transition-all">
                <span className="flex items-center gap-2 mb-1">
                  Start a Project <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <div className="h-[1px] w-full bg-amber-800 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}