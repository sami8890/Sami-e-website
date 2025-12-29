"use client";

import { Instrument_Serif, Caveat } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";

// Fonts
const instrumentSerif = Instrument_Serif({ weight: "400", subsets: ["latin"] });
const handwriting = Caveat({ weight: "400", subsets: ["latin"] });

// --- UPDATED LOCAL IMAGES ---
const people = [
  { id: 1, img: "/testimonial/ahmed.png" },
  { id: 2, img: "/testimonial/akira.png" },
  { id: 3, img: "/testimonial/girl.png" },
  { id: 4, img: "/testimonial/ibrahim.png" },
  { id: 5, img: "/testimonial/kyle.png" },
  { id: 6, img: "/testimonial/man.png" },
];

export default function WhyUsPeople() {
  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      
      {/* --- AMBIENT GLOW (Mahaul) --- */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT SIDE: Heading */}
          <div className="lg:col-span-5 relative">
            <h2 className={`${instrumentSerif.className} text-5xl md:text-7xl leading-[1.1] mb-6`}>
              Why <br />
              <span className="text-amber-500">Specialized</span> <br />
              Architecture?
            </h2>
            
            {/* Handwritten Arrow */}
            <div className="relative mt-8">
              <span className={`${handwriting.className} text-2xl md:text-3xl text-slate-400 -rotate-3 md:-rotate-6 block ml-2 md:ml-4`}>
                Trusted by elite <br/> developers ⤵
              </span>
              {/* Arrow SVG */}
              <svg className="w-8 h-8 md:w-12 md:h-12 text-slate-400 ml-12 md:ml-16 mt-2 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                 <path d="M12 4v16m0 0l-6-6m6 6l6-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* RIGHT SIDE: Content & FACES Grid */}
          <div className="lg:col-span-7 flex flex-col justify-center h-full pt-4">
            
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12">
              We work exclusively with <strong className="text-white">Real Estate Leaders</strong>. 
              We understand that a luxury website isn&apos;t just about &quot;pretty pixels&quot;—it&apos;s about 
              building a <span className="underline decoration-amber-500 underline-offset-4 decoration-1">trust engine</span> that 
              convinces international investors to put millions into your off-plan projects.
            </p>

            {/* --- THE FACES SECTION --- */}
            <div className="border-t border-white/10 pt-10">
              
              <div className="flex items-center gap-4 mb-6">
                 <span className={`${handwriting.className} text-2xl text-amber-500`}>
                    Who we build for
                 </span>
                 <div className="h-px w-12 bg-white/20"></div>
              </div>

              {/* Faces Row */}
              <div className="flex flex-wrap items-center gap-4">
                {people.map((person, index) => (
                  <motion.div
                    key={person.id}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    {/* Image Container */}
                    <div className="w-14 h-14 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white/10 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer relative z-10 hover:border-amber-500/50 hover:scale-105 bg-slate-800">
                      <Image 
                        src={person.img} 
                        alt="Client" 
                        width={80} 
                        height={80} 
                        className="object-cover w-full h-full"
                      />
                    </div>
                    {/* Glow effect behind photo */}
                    <div className="absolute inset-0 bg-amber-500/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                ))}

                {/* Counter Circle */}
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-slate-800/50 backdrop-blur-sm border-2 border-dashed border-white/20 flex items-center justify-center text-slate-400 font-bold text-xs md:text-sm text-center leading-tight">
                  Top<br/>1%
                </div>
              </div>

              <p className="text-[10px] md:text-xs text-slate-500 mt-6 uppercase tracking-widest font-medium">
                Designing for Founders, CEOs & Agents in KSA/Dubai
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}