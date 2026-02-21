"use client";

import { Instrument_Serif } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const instrumentSerif = Instrument_Serif({ weight: "400", subsets: ["latin"] });

const projects = [
  {
    id: 1,
    title: "Emaar Launch",
    category: "Lead Gen Portal",
    image: "/project/b.png", // Make sure path is correct
    slug: "Blue Zone"
  },
  {
    id: 2,
    title: "Sobha Hartland",
    category: "3D Visualization",
    image: "/project/c.png",
    slug: "sobha-villas"
  },
  {
    id: 3,
    title: "Damac Lagoons",
    category: "Interactive Map",
    image: "/project/d.png",
    slug: "damac-lagoons"
  },
  {
    id: 4,
    title: "Red Sea Project",
    category: "Investor Dashboard",
    image: "/project/a.png",
    slug: "red-sea-project"
  }
];

export default function RecentWork() {
  return (
    <section className="py-20 md:py-24 bg-white" id="projects">

      {/* Hide Scrollbar CSS */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="container mx-auto px-4 md:px-6 max-w-6xl">

        {/* --- HEADER --- */}
        <div className="text-center mb-10 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileTap={{ scale: 0.98 }}
            className={`${instrumentSerif.className} text-4xl md:text-5xl text-slate-900 mb-4`}
          >
            Recent <span className="text-amber-600 italic">Work</span>
          </motion.h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base">
            High-performance digital assets for top developers.
          </p>
        </div>

        {/* --- DESKTOP VIEW (Grid) --- */}
        <div className="hidden md:grid grid-cols-2 gap-x-8 gap-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={`/projects/${project.slug}`} className="block mb-6 relative">
                 {/* Desktop: Aspect Video (Wide) */}
                 <div className="relative aspect-video w-full bg-slate-50 rounded-2xl overflow-hidden p-6 group-hover:bg-slate-100 transition-colors duration-500 border border-slate-100">
                    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-500 bg-white">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          // CHANGE: Removed 'transform group-hover:scale-105'
                          className="object-cover object-top"
                        />
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-900 z-20 shadow-sm border border-slate-100">
                       {project.category}
                    </div>
                 </div>
              </Link>
              <div className="pl-1">
                <h3 className={`${instrumentSerif.className} text-3xl text-slate-900 mb-2 group-hover:text-amber-600 transition-colors`}>
                  {project.title}
                </h3>
                <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 group/link">
                  <span className="text-slate-500 text-sm font-medium border-b border-slate-300 pb-0.5 group-hover/link:text-amber-700 transition-all">See Project</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover/link:text-amber-700 transition-colors" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- MOBILE VIEW (Slider) --- */}
        <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-4 px-4 scrollbar-hide">
          
          {projects.map((project, index) => (
            <div key={index} className="snap-center min-w-[85vw] relative flex-shrink-0">
               <Link href={`/projects/${project.slug}`} className="block group">
                 
                 {/* aspect-[4/3] (Tall for Mobile) | md:aspect-video (Wide for Desktop if resizing) */}
                 <div className="relative aspect-[4/3] w-full bg-slate-50 rounded-2xl overflow-hidden mb-4 p-5 border border-slate-100">
                   
                   <div className="relative w-full h-full rounded-lg overflow-hidden shadow-sm bg-white">
                       <Image src={project.image} alt={project.title} fill className="object-cover object-top" />
                   </div>
                   <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest text-slate-900 shadow-sm">
                     {project.category}
                   </div>
                 </div>
                 
                 <div className="px-1">
                     <h3 className={`${instrumentSerif.className} text-2xl text-slate-900 mb-1`}>
                        {project.title}
                     </h3>
                     <div className="flex items-center gap-1 text-amber-600">
                        <span className="text-xs font-bold uppercase tracking-wider">View Case Study</span>
                        <ArrowUpRight className="w-3 h-3" />
                     </div>
                 </div>
               </Link>
            </div>
          ))}

          {/* --- SPECIAL CARD (RESTORED HEIGHT) --- */}
          <div className="snap-center min-w-[85vw] relative flex-shrink-0">
             <Link href="/contact" className="block h-full group">
                
                {/* Fixed: aspect-[4/3] wapis laya hoon taake content fit ho jaye */}
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden mb-4 bg-slate-900 border border-slate-800 flex flex-col items-center justify-center text-center p-6 shadow-md group-hover:border-amber-500/50 transition-colors">
                  
                  {/* Ab icon aur text ke liye poori jagah hai */}
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                     <ArrowUpRight className="w-6 h-6 text-amber-500" />
                  </div>
                  
                  <h3 className={`${instrumentSerif.className} text-3xl text-white mb-2`}>
                    Your Project <br/> <span className="text-amber-500 italic">Next?</span>
                  </h3>
                  <p className="text-slate-400 text-xs mb-6">
                    Join the top 1% of developers.
                  </p>
                  
                  <span className="bg-white text-slate-900 px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest group-hover:bg-amber-500 group-hover:text-white transition-colors">
                    Start a Project
                  </span>

                </div>
             </Link>
          </div>

        </div>

        {/* --- BOTTOM CTA --- */}
        <div className="mt-8 md:mt-20 text-center">
          <Link href="/portfolio" className="inline-block bg-amber-600 text-white px-8 py-3 md:px-10 md:py-4 rounded-full font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-amber-700 transition-colors shadow-lg shadow-amber-600/20">
              View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}