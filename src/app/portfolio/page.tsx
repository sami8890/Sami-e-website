"use client";

import { useState } from "react";
import { Instrument_Serif, DM_Sans } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const instrumentSerif = Instrument_Serif({ weight: "400", subsets: ["latin"] });
const dmSans = DM_Sans({ weight: ["400", "500", "700"], subsets: ["latin"] });

// --- DATA: Is list ko apne projects se bhar do ---
const allProjects = [
  {
    id: 1,
    title: "Blue Zone",
    category: "Real Estate",
    image: "/project/b.png", 
    url: "https://www.sami-e.com",
    status: "Live"
  },
  {
    id: 2,
    title: "Sobha Hartland",
    category: "Real Estate",
    image: "/project/c.png",
    url: "https://sobha-hartland.com",
    status: "Live"
  },
  {
    id: 3,
    title: "Finnishify Store",
    category: "E-commerce",
    image: "/project/a.png",
    url: "https://finnishify.com",
    status: "Live"
  },
  {
    id: 4,
    title: "Damac Lagoons",
    category: "Interactive Map",
    image: "/project/d.png",
    url: "https://damac-lagoons.com",
    status: "Concept"
  },
];

// Categories for Filter
const categories = ["All", "Real Estate", "E-commerce", "Interactive Map", "Concept"];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter Logic
  const filteredProjects = activeCategory === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category === activeCategory);

  return (
    <main className="bg-white min-h-screen">
    

      {/* --- HEADER SECTION --- */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-slate-900 text-white rounded-b-[2.5rem] md:rounded-b-[4rem] relative overflow-hidden">
         {/* Background Glow */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
         
         <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`${instrumentSerif.className} text-5xl md:text-7xl mb-6`}
            >
              Selected <span className="text-amber-500 italic">Works</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={`${dmSans.className} text-slate-400 max-w-xl mx-auto text-lg`}
            >
              A collection of high-performance digital assets engineered for growth and conversion.
            </motion.p>
         </div>
      </section>

      {/* --- FILTER & GRID SECTION --- */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          
          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-300 border ${
                  activeCategory === cat 
                    ? "bg-slate-900 text-white border-slate-900" 
                    : "bg-white text-slate-500 border-slate-200 hover:border-slate-400 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 gap-x-8 gap-y-12"
          >
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group"
              >
                <Link 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                   
                   {/* CARD IMAGE */}
                   <div className="relative aspect-[4/3] md:aspect-video w-full bg-slate-50 rounded-2xl overflow-hidden p-6 md:p-8 group-hover:bg-slate-100 transition-colors duration-500 border border-slate-100 mb-6">
                      
                      {/* Inner Image Frame */}
                      <div className="relative w-full h-full rounded-lg overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-500 bg-white">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover object-top"
                          />
                      </div>

                      {/* Top Badges */}
                      <div className="absolute top-6 right-6 flex flex-col items-end gap-2 z-20">
                         {/* Category Badge */}
                         <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-900 shadow-sm border border-slate-100">
                            {project.category}
                         </span>
                      </div>

                   </div>

                   {/* Project Info */}
                   <div className="pl-2">
                     <div className="flex justify-between items-start">
                       <div>
                         <h3 className={`${instrumentSerif.className} text-3xl text-slate-900 mb-2 group-hover:text-amber-600 transition-colors`}>
                           {project.title}
                         </h3>
                         <span className="inline-flex items-center gap-2">
                           <span className="text-slate-500 text-sm font-medium border-b border-slate-300 pb-0.5 group-hover:text-amber-700 transition-all">
                             See Project
                           </span>
                           <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-amber-700 transition-colors" />
                         </span>
                       </div>
                     </div>
                   </div>
                </Link>

              </motion.div>
            ))}
          </motion.div>

          {/* Empty State (Agar filter par koi project na ho) */}
          {filteredProjects.length === 0 && (
             <div className="text-center py-20">
                <p className="text-slate-400">No projects found in this category yet.</p>
             </div>
          )}

        </div>
      </section>

      {/* --- CTA SECTION --- */}
      {/* --- NEW FLOATING CTA CARD --- */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
           
           <div className="relative bg-slate-950 rounded-[2.5rem] md:rounded-[3.5rem] p-12 md:p-20 text-center overflow-hidden shadow-2xl">
              
              {/* Background Glow Effect */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-amber-500/20 blur-[100px] rounded-full pointer-events-none" />

              {/* Text */}
              <div className="relative z-10">
                <h2 className={`${instrumentSerif.className} text-4xl md:text-6xl text-white mb-6 leading-tight`}>
                  Ready to build your <br/> 
                  <span className="text-amber-500 italic">Empire?</span>
                </h2>
                
                <p className={`${dmSans.className} text-slate-400 mb-10 max-w-lg mx-auto`}>
                  Stop chasing clients. Build a digital presence that makes them chase you.
                </p>

                {/* Button */}
                {/* <Link href="/" className="inline-flex items-center gap-3 bg-white text-slate-950 px-8 py-4 md:px-10 md:py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-amber-500 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg shadow-white/10 hover:shadow-amber-500/20">
                   Start a Project
                   <ArrowUpRight className="w-4 h-4" />
                </Link> */}
              </div>

           </div>

        </div>
      </section>

      
    </main>
  );
}
