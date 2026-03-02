"use client";

import { Instrument_Serif } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const instrumentSerif = Instrument_Serif({ weight: "400", subsets: ["latin"] });

const projects = [
  { id: 1, title: "Emaar Launch", category: "Lead Gen Portal", image: "/project/b.png", slug: "emaar-launch" },
  { id: 2, title: "Sobha Hartland", category: "3D Visualization", image: "/project/c.png", slug: "sobha-villas" },
  { id: 3, title: "Damac Lagoons", category: "Interactive Map", image: "/project/d.png", slug: "damac-lagoons" },
  { id: 4, title: "Red Sea Project", category: "Investor Dashboard", image: "/project/a.png", slug: "red-sea-project" }
];

export default function RecentWork() {
  // Arrow Animation Variants
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: 0.3, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay: 0.3, duration: 0.01 }
      }
    }
  };

  return (
    <section className="py-24 md:py-40 bg-[#F7FAFC] overflow-hidden" id="projects">
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16 md:mb-28">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${instrumentSerif.className} text-4xl md:text-5xl text-slate-900 mb-4`}
          >
            Recent <span className="text-amber-600 italic">Work</span>
          </motion.h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base">
            High-performance digital assets for top developers.
          </p>
        </div>

        {/* --- DESKTOP GRID --- */}
        <div className="hidden md:grid grid-cols-2 gap-x-12 gap-y-20">
          {projects.map((project, index) => (
            <motion.div key={index} className="group">
              <Link href={`/projects/${project.slug}`} className="block mb-6 relative">
                 <div className="relative aspect-video w-full bg-slate-50 rounded-2xl overflow-hidden p-8 group-hover:bg-slate-100 transition-colors border border-slate-100">
                    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-sm bg-white">
                        <Image src={project.image} alt={project.title} fill className="object-contain p-2" />
                    </div>
                 </div>
              </Link>
              <h3 className={`${instrumentSerif.className} text-3xl text-slate-900 mb-2`}>{project.title}</h3>
              <div className="inline-flex items-center gap-2 text-slate-500">
                <span className="text-sm font-medium border-b border-slate-300">See Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- MOBILE SLIDER --- */}
        <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 -mx-4 px-4 scrollbar-hide">
          {projects.map((project, index) => (
            <div key={index} className="snap-center min-w-[85vw] flex-shrink-0">
               <div className="block">
                 <div className="relative aspect-[4/5] w-full bg-slate-50 rounded-2xl overflow-hidden mb-4 p-4 border border-slate-100">
                   <div className="relative w-full h-full rounded-lg overflow-hidden bg-white shadow-sm">
                       <Image src={project.image} alt={project.title} fill className="object-contain p-1" />
                   </div>
                 </div>
                 <h3 className={`${instrumentSerif.className} text-2xl text-slate-900 mb-1`}>{project.title}</h3>
                 <div className="flex items-center gap-1 text-amber-600 text-xs font-bold uppercase tracking-wider">
                    View Case Study <ArrowUpRight className="w-3 h-3" />
                 </div>
               </div>
            </div>
          ))}

          {/* --- SPECIAL BLACK CARD --- */}
          <div className="snap-center min-w-[85vw] flex-shrink-0">
             <div className="relative aspect-[4/5] w-full rounded-[2.5rem] overflow-hidden mb-4 bg-[#0a0a0a] border border-white/5 flex flex-col items-center justify-center text-center p-8 shadow-2xl">
                <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                    <ArrowUpRight className="w-10 h-10 text-amber-500" />
                </div>
                <h3 className={`${instrumentSerif.className} text-5xl text-white mb-6 leading-[0.9]`}>
                  Your Project <br/> <span className="text-amber-500 italic font-light">Next?</span>
                </h3>
                <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-[260px]">
                  Let&apos;s build something extraordinary together.
                </p>
                
             </div>
          </div>
        </div>

        {/* --- BOTTOM CTA AREA (FIXED OVERLAP) --- */}
        <div className="mt-32 md:mt-48 flex flex-col items-center relative">
          
          {/* ANIMATED ARROW: Fixed Positioning to avoid overlap on mobile */}
          <div className="absolute -top-16 left-1/2 translate-x-[70px] md:translate-x-28 pointer-events-none z-0">
             <motion.svg 
              width="100" 
              height="80" 
              viewBox="0 0 100 80" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              className="rotate-[-10deg] md:rotate-0 scale-90 md:scale-110"
             >
                <motion.path 
                  d="M80 5C70 15 35 30 25 60" 
                  stroke="#0f172a" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  variants={draw}
                />
                <motion.path 
                  d="M25 60L15 48" 
                  stroke="#0f172a" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  variants={draw}
                />
                <motion.path 
                  d="M25 60L40 55" 
                  stroke="#0f172a" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  variants={draw}
                />
             </motion.svg>
          </div>

          {/* VIEW ALL WORKS BUTTON: Added clear background and high Z-index */}
          <Link 
            href="/portfolio" 
            className="relative z-10 px-12 py-5 bg-white text-slate-900 border border-slate-200 rounded-2xl shadow-sm hover:shadow-md hover:border-slate-900 transition-all duration-300 font-bold text-sm tracking-tight active:scale-95 text-center min-w-[200px]"
          >
            View all works
          </Link>
        </div>

      </div>
    </section>
  );
}