"use client";

import { Instrument_Serif, Caveat } from "next/font/google"; // Caveat for Signature
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const instrumentSerif = Instrument_Serif({ weight: "400", subsets: ["latin"] });
const signatureFont = Caveat({ weight: "400", subsets: ["latin"] });

export default function AboutFounder() {
return (
    <section className="py-24 bg-slate-50 overflow-hidden" id="about">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Image (Editorial Style) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Photo Frame */}
            <div className="relative h-[500px] w-full lg:h-[600px] bg-slate-200 rounded-sm overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
              {/* Apni Professional Photo yahan lagana */}
              <Image 
                src="/about-mee.png" 
                alt="Zia Khan - Web Architect" 
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-xl max-w-xs hidden md:block">
              <p className={`${instrumentSerif.className} text-2xl text-slate-900 leading-none mb-1`}>
                4+ Years
              </p>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-medium">
                Designing for Real Estate
              </p>
            </div>
          </motion.div>

          {/* RIGHT: The Story */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pl-10"
          >
            <span className="text-amber-600 font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">
              The Architect
            </span>
            
            <h2 className={`${instrumentSerif.className} text-5xl md:text-6xl text-slate-900 mb-8 leading-[1.1]`}>
              I don&apos;t just build websites. <br/>
              <span className="text-slate-400 italic">I build digital assets.</span>
            </h2>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-light">
              <p>
                In a market flooded with templates and slow Wordpress sites, I saw a gap. 
                Luxury developers in Dubai were selling <strong className="text-slate-900 font-medium">multi-million dollar properties</strong> on websites that looked cheap.
              </p>
              <p>
                My mission is simple: To give your brand a digital presence that matches the prestige of your physical properties.
              </p>
              <p>
                I combine <span className="border-b border-amber-500/50 pb-0.5 text-slate-900">architectural precision</span> with high-speed code to create portals that don&apos;t just look good&mdash;they sell.
              </p>
            </div>

            {/* Signature & CTA */}
            <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-8">
              
              {/* Digital Signature */}
              <div className="flex flex-col">
                <span className={`${signatureFont.className} text-4xl text-slate-900`}>
                 Sami
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-400 mt-1">
                  Lead Web Architect
                </span>
              </div>

              {/* Small Link */}
              <Link href="/contact" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-amber-700 hover:text-amber-800 transition-colors">
                Let&apos;s Talk
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}