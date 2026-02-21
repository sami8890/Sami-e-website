"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { name: "Kyle Nianga", image: "/testimonial/kyle.png", company: "Property Developer" },
  { name: "Ahmed Hassan", image: "/testimonial/ahmed.png", company: "Investment Group" },
  { name: "Muhammad Ibrahim", image: "/testimonial/ibrahim.png", company: "Luxury Agency" },
];

export default function AvatarCluster() {
  return (
    <section className="w-full bg-white pt-24 pb-40">
      <div className="container mx-auto px-6">
        
        {/* 1. THE LAYOUT: Instead of centering, we use a wide, structured row */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-slate-100 pt-12 gap-12">
          
          {/* Left Side: Professional Hook */}
          <div className="max-w-xs text-left">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600 mb-2">
              The Network
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed font-light">
              Trusted by the visionaries shaping the skylines of <span className="text-slate-900 font-medium">Dubai and Riyadh</span>.
            </p>
          </div>

          {/* Center Side: The Avatars (Clean, no glowing rings) */}
          <div className="flex items-center -space-x-3">
            {clients.map((client, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="h-16 w-16 md:h-20 md:w-20 rounded-full border-[4px] border-white shadow-sm overflow-hidden bg-slate-50">
                  <Image
                    src={client.image}
                    alt={client.name}
                    width={80}
                    height={80}
                    className="object-cover h-full w-full grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </motion.div>
            ))}
            
            {/* The "Number" that actually matters to clients */}
            <div className="pl-6">
              <span className="block text-3xl font-light text-slate-900 leading-none">50+</span>
              <span className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">Partners</span>
            </div>
          </div>

          {/* Right Side: Quality Proof */}
          <div className="hidden lg:block text-right">
             <div className="flex items-center gap-1 justify-end mb-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                ))}
             </div>
             <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
               Verified Client Satisfaction
             </p>
          </div>

        </div>

        {/* 2. THE WHITESPACE: Explicit gap before the next big section */}
        <div className="mt-40 border-b border-slate-50" />
      </div>
    </section>
  );
}