"use client";

import { Instrument_Serif, DM_Sans } from "next/font/google";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const instrumentSerif = Instrument_Serif({ weight: "400", subsets: ["latin"] });
const dmSans = DM_Sans({ weight: ["400", "500", "700"], subsets: ["latin"] });

export default function CaseStudySection() {
  return (
    <section className="py-24 md:py-32 bg-slate-950 text-white overflow-hidden relative" id="work">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-20">
          <span className="text-red-500 font-bold tracking-[0.2em] uppercase text-[11px] mb-4 block">
            Featured Work
          </span>
          <h2 className={`${instrumentSerif.className} text-4xl md:text-5xl text-white leading-tight`}>
            From Zero to <br />
            <span className="text-red-500">High-Converting Platform</span>
          </h2>
        </div>

        {/* PROJECT CARD */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* LEFT: Simplified Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Project Tag */}
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-block px-3 py-1 border border-slate-700 rounded-full text-[10px] tracking-widest uppercase text-slate-400 bg-slate-900/50"
            >
              E-Commerce Platform
            </motion.span>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              <h3 className={`${dmSans.className} text-3xl md:text-4xl font-bold mb-4 text-slate-100 leading-tight`}>
                Bayut
              </h3>
              <p className={`${dmSans.className} text-slate-400 text-lg leading-relaxed`}>
                Built a fast, intuitive shopping platform that removed barriers between discovery and purchase. The result: customers converted faster, stayed longer.
              </p>
            </motion.div>

        
            {/* Metric 1: The "Growth" Animation */}
            <div className="flex items-start gap-4 group">
              <div className="flex-shrink-0 mt-1">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/5 border border-emerald-500/10 relative overflow-hidden">
                  {/* Animated Bar Chart */}
                  <div className="flex items-end gap-[2px] h-4">
                    {[0.4, 0.7, 0.5, 0.9].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: "20%" }}
                        animate={{ height: `${h * 100}%` }}
                        transition={{ 
                          duration: 1, 
                          repeat: Infinity, 
                          repeatType: "reverse", 
                          delay: i * 0.2 
                        }}
                        className="w-[3px] bg-emerald-400 rounded-full"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-white uppercase tracking-wider">Full Inventory Liquidation</p>
                <p className="text-xs text-slate-400 mt-1">Achieved 100% sell-through of 13 primary listings.</p>
              </div>
            </div>

            {/* Metric 2: The "Velocity" Animation */}
            <div className="flex items-start gap-4 group">
              <div className="flex-shrink-0 mt-1">
                <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/5 border border-blue-500/10 overflow-hidden">
                  
                  {/* Background Ring */}
                  <svg className="absolute w-8 h-8 transform -rotate-90">
                    <circle
                      cx="16"
                      cy="16"
                      r="14"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="transparent"
                      className="text-blue-500/10"
                    />
                    {/* Animated Progress Path */}
                    <motion.circle
                      cx="16"
                      cy="16"
                      r="14"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="transparent"
                      strokeDasharray="88"
                      initial={{ strokeDashoffset: 88 }}
                      animate={{ strokeDashoffset: [88, 20, 88] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="text-blue-400"
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* Center Dot */}
                  <motion.div
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="z-10 w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_12px_#60a5fa]"
                  />
                </div>
              </div>
              
              <div className="flex-1">
                <p className="text-sm font-bold text-white uppercase tracking-wider">
                  Enterprise Velocity
                </p>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Sub-100ms global latency ensuring zero friction during high-intent search.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              <Link 
                href="https://www.bayut.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors text-sm font-bold uppercase tracking-wider pt-2"
              >
                View website live
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>

          </motion.div>

          {/* RIGHT: Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group">
              {/* Main Image */}
              <div className="aspect-[16/10] relative">
                <Image 
                  src="/featured/bayut.png" 
                  alt="Bayut E-commerce Platform" 
                  fill 
                  className="object-contain object-top hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Overlay Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur-md border border-slate-700/50 px-3 py-2 rounded-sm"
              >
                <p className="text-[9px] text-slate-400 uppercase tracking-wider font-bold">Ready</p>
                <p className="text-sm font-bold text-green-400">Live Now</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}