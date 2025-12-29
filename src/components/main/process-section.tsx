"use client";

import { Instrument_Serif } from "next/font/google";
import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const instrumentSerif = Instrument_Serif({ weight: "400", subsets: ["latin"] });

const steps = [
  {
    id: "01",
    title: "Discovery & Audit",
    desc: "We analyze your current digital estate and competitors. We don't guess; we build a strategy based on market data.",
    icon: Search,
  },
  {
    id: "02",
    title: "Architecture & UI",
    desc: "Designing the blueprints. We create high-fidelity wireframes focused on investor psychology and lead capture.",
    icon: PenTool,
  },
  {
    id: "03",
    title: "High-Performance Build",
    desc: "Construction phase. We code using Next.js for lightning speed, ensuring the site handles heavy traffic seamlessly.",
    icon: Code2,
  },
  {
    id: "04",
    title: "Launch & Handover",
    desc: "Final quality checks and deployment. We provide you with a CMS guide so your team can manage listings easily.",
    icon: Rocket,
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-amber-600 font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">
            How We Work
          </span>
          <h2 className={`${instrumentSerif.className} text-4xl md:text-5xl text-slate-900`}>
            The Blueprint to <span className="text-slate-400 italic">Launch</span>
          </h2>
        </div>

        {/* Process Steps */}
        <div className="relative">
          
          {/* Vertical Line (The Spine) */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block" />
          <div className="absolute left-[28px] top-0 bottom-0 w-px bg-slate-200 md:hidden" />

          <div className="flex flex-col gap-12 md:gap-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Content Box (Text) */}
                  <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"} pl-16 md:pl-0`}>
                    <h3 className={`${instrumentSerif.className} text-3xl text-slate-900 mb-3`}>
                      {step.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-sm md:text-base max-w-sm ml-auto mr-auto md:mx-0">
                      {step.desc}
                    </p>
                  </div>

                  {/* Center Icon Circle */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center z-10 group hover:border-amber-500 transition-colors duration-300">
                      <span className={`${instrumentSerif.className} text-xl text-slate-300 group-hover:text-amber-600 transition-colors`}>
                        {step.id}
                      </span>
                    </div>
                  </div>

                  {/* Empty Spacer for layout balance */}
                  <div className="flex-1 hidden md:block" />

                </motion.div>
              );
            })}
          </div>

        </div>

        {/* CTA at the bottom of process */}
        <div className="mt-20 text-center">
           <p className="text-slate-400 text-sm mb-4">Ready to start the build?</p>
           <button className="bg-slate-900 text-white px-8 py-3 rounded-sm uppercase tracking-widest text-xs font-bold hover:bg-amber-600 transition-colors">
             Book Strategy Call
           </button>
        </div>

      </div>
    </section>
  );
}