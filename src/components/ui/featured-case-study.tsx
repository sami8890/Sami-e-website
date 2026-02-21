"use client";

import { Instrument_Serif, DM_Sans } from "next/font/google";
import { ArrowRight, CheckCircle2, ShoppingBag, Zap, MousePointerClick } from "lucide-react"; // Icons changed for E-commerce
import { motion } from "framer-motion";
import Image from "next/image";

const instrumentSerif = Instrument_Serif({ weight: "400", subsets: ["latin"] });
const dmSans = DM_Sans({ weight: ["400", "500", "700"], subsets: ["latin"] });

export default function CaseStudySection() {
  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden relative" id="work">
      
      {/* Background Decor - Red Glow to match Finnishify Brand */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
            <span className="text-red-500 font-bold tracking-[0.2em] uppercase text-[11px] mb-3 block">
              Selected Work
            </span>
            <h2 className={`${instrumentSerif.className} text-3xl md:text-5xl text-white leading-tight`}>
              Engineered for Sales, <br />
              <span className="italic text-slate-500">Not Just Browsing.</span>
            </h2>
        </div>

        {/* --- PROJECT CARD --- */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT: Content (E-commerce Focus) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Tags */}
            <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 border border-slate-800 rounded-full text-[10px] tracking-widest uppercase text-slate-400 bg-slate-900/50">
                    E-commerce
                </span>
                <span className="px-3 py-1 border border-slate-800 rounded-full text-[10px] tracking-widest uppercase text-red-500 bg-red-900/10 border-red-900/20">
                    2025
                </span>
            </div>

            <h3 className={`${dmSans.className} text-2xl md:text-3xl font-bold mb-4 text-slate-100`}>
                Finnishify Global Store
            </h3>
            
            <p className={`${dmSans.className} text-slate-400 text-base leading-relaxed mb-8`}>
                The brand needed a high-performance store to handle global traffic. 
                I built a custom architecture that loads instantly and guides visitors directly to checkout.
            </p>

            {/* The "What I Did" Grid */}
            <div className="space-y-4 mb-10">
                
                {/* Point 1 */}
                <div className="flex gap-4">
                    <div className="mt-1 bg-slate-900 p-2 rounded-full border border-slate-800 shrink-0 h-fit">
                        <ShoppingBag className="w-4 h-4 text-red-500" />
                    </div>
                    <div>
                        <h4 className="font-bold text-sm text-white mb-1">Conversion-First Design</h4>
                        <p className="text-xs text-slate-500">Clean layouts with high-contrast &apos;Shop Now&apos; buttons to maximize sales.</p>
                    </div>
                </div>

                {/* Point 2 */}
                <div className="flex gap-4">
                    <div className="mt-1 bg-slate-900 p-2 rounded-full border border-slate-800 shrink-0 h-fit">
                        <Zap className="w-4 h-4 text-yellow-400" />
                    </div>
                    <div>
                        <h4 className="font-bold text-sm text-white mb-1">Zero-Latency Shopping</h4>
                        <p className="text-xs text-slate-500">100/100 Speed Score. No lag between product clicks means fewer abandoned carts.</p>
                    </div>
                </div>

                {/* Point 3 */}
                <div className="flex gap-4">
                    <div className="mt-1 bg-slate-900 p-2 rounded-full border border-slate-800 shrink-0 h-fit">
                        <MousePointerClick className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                        <h4 className="font-bold text-sm text-white mb-1">Seamless UX</h4>
                        <p className="text-xs text-slate-500">Optimized for mobile shoppers, ensuring a smooth experience on any device.</p>
                    </div>
                </div>

            </div>

            {/* CTA Button */}
            <div className="flex gap-4">
                 {/* Agar link dead hai toh button mat lagana, ya phir '#' rakhna */}
                <button className="group flex items-center gap-2 text-white border-b border-red-500 pb-1 hover:text-red-500 transition-colors uppercase text-xs font-bold tracking-widest">
                    View Project
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

          </motion.div>


          {/* RIGHT: Image Area */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="relative"
          >
            <div className="aspect-[16/10] relative rounded-lg overflow-hidden border border-slate-800 bg-slate-900 group shadow-2xl">
                
                {/* YAHAN TUMHARI IMAGE AAYEGI */}
                {/* Apni image ko public folder me dalo aur upar import karke yahan lagao */}
                 <Image 
                   src="/project/finnishify.png" 
                   alt="Finnishify E-commerce Project" 
                   fill 
                   className="object-contain object-top mt-1 hover:scale-105 transition-transform duration-700"
                 />
            
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 bg-slate-950/90 backdrop-blur-md border border-slate-800 p-4 rounded-sm shadow-2xl flex items-center gap-4">
                    <div className="bg-green-500/10 p-2 rounded-full">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                        <p className="text-[10px] text-slate-400 uppercase tracking-wider">Performance</p>
                        <p className="text-sm font-bold text-white">100% Optimized</p>
                    </div>
                </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}