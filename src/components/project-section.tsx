"use client";

import { Instrument_Serif } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const instrumentSerif = Instrument_Serif({ weight: "400", subsets: ["latin"] });

// --- DATA: Local Images ---
// Make sure you have images in public/projects/ folder:
// 1.jpg, 2.jpg, 3.jpg, 4.jpg
const projects = [
  {
    id: 1,
    title: "Emaar Launch",
    category: "Lead Gen Portal",
    image: "/projects/project-1.jpg", 
    slug: "emaar-launch"
  },
  {
    id: 2,
    title: "Sobha Hartland",
    category: "3D Visualization",
    image: "/projects/project-2.jpg",
    slug: "sobha-villas"
  },
  {
    id: 3,
    title: "Damac Lagoons",
    category: "Interactive Map",
    image: "/projects/project-3.jpg",
    slug: "damac-lagoons"
  },
  {
    id: 4,
    title: "Red Sea Project",
    category: "Investor Dashboard",
    image: "/projects/project-4.jpg",
    slug: "red-sea-project"
  }
];

export default function RecentWork() {
  return (
    <section className="py-20 md:py-24 bg-white" id="projects">
      
      {/* --- CSS to Hide Scrollbar (Mobile) --- */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>

      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-10 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`${instrumentSerif.className} text-4xl md:text-5xl text-slate-900 mb-4`}
          >
            Recent <span className="text-amber-600 italic">Work</span>
          </motion.h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base">
            High-performance digital assets for top developers.
          </p>
        </div>

        {/* --- DESKTOP VIEW (2x2 Grid) --- */}
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
              {/* Desktop Card */}
              <Link href={`/projects/${project.slug}`} className="block overflow-hidden rounded-2xl mb-6 relative">
                 {/* Hover Dark Overlay */}
                 <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                 
                 {/* Image */}
                 <div className="relative h-[400px] w-full bg-slate-100">
                   <Image
                     src={project.image}
                     alt={project.title}
                     fill
                     className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                   />
                 </div>

                 {/* Badge */}
                 <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-900 z-20">
                    {project.category}
                 </div>
              </Link>

              {/* Desktop Text */}
              <div>
                <h3 className={`${instrumentSerif.className} text-3xl text-slate-900 mb-2 group-hover:text-amber-600 transition-colors`}>
                  {project.title}
                </h3>
                <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 group/link">
                  <span className="text-slate-500 text-sm font-medium border-b border-slate-300 pb-0.5 group-hover/link:text-amber-700 transition-all">
                    See Project
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover/link:text-amber-700 transition-colors" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- MOBILE VIEW (Swipe Slider) --- */}
        <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-4 px-4 scrollbar-hide">
          
          {/* Loop Projects */}
          {projects.map((project, index) => (
            <div key={index} className="snap-center min-w-[85vw] relative flex-shrink-0">
               <Link href={`/projects/${project.slug}`} className="block group">
                  {/* Mobile Image */}
                  <div className="relative h-[350px] w-full rounded-2xl overflow-hidden mb-4 bg-slate-100 shadow-sm border border-slate-100">
                    <Image src={project.image} alt={project.title} fill className="object-cover" />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest text-slate-900 shadow-sm">
                      {project.category}
                    </div>
                  </div>
                  
                  {/* Mobile Text */}
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

          {/* --- SPECIAL END CARD: "Your Project Next?" --- */}
          <div className="snap-center min-w-[85vw] relative flex-shrink-0">
             <Link href="/contact" className="block h-full group">
                <div className="relative h-[350px] w-full rounded-2xl overflow-hidden mb-4 bg-slate-900 border border-slate-800 flex flex-col items-center justify-center text-center p-8 shadow-md group-hover:border-amber-500/50 transition-colors">
                  
                  {/* Icon Circle */}
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                     <ArrowUpRight className="w-8 h-8 text-amber-500" />
                  </div>
                  
                  {/* Text */}
                  <h3 className={`${instrumentSerif.className} text-3xl text-white mb-2`}>
                    Your Project <br/> <span className="text-amber-500 italic">Next?</span>
                  </h3>
                  <p className="text-slate-400 text-sm mb-6">
                    Join the top 1% of developers in Dubai.
                  </p>
                  
                  {/* Button */}
                  <span className="bg-white text-slate-900 px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest group-hover:bg-amber-500 group-hover:text-white transition-colors">
                    Start a Project
                  </span>

                </div>
             </Link>
          </div>

        </div>

        {/* --- BOTTOM CTA (Shared) --- */}
        <div className="mt-8 md:mt-20 text-center">
          <Link href="/portfolio" className="inline-block bg-amber-600 text-white px-8 py-3 md:px-10 md:py-4 rounded-full font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-amber-700 transition-colors shadow-lg shadow-amber-600/20">
             View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}