
"use client";

import { Instrument_Serif } from "next/font/google";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Ticker from "./marque";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
});

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-between bg-slate-50 overflow-hidden"
    >
      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 z-0 opacity-[0.3] hidden md:block" 
           style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-slate-50/50 to-amber-50/10 z-0" />

      {/* --- MAIN CENTER CONTENT --- */}
      {/* FIX: Added 'pt-32' (Padding Top) globally. Removed justify-start. */}
      {/* Ab ye Mobile aur Desktop dono par content ko Opar se 128px neeche rakhega */}
      <div className="w-full flex-1 flex flex-col items-center justify-center relative z-10 px-4 sm:px-6 md:px-8 pt-32 pb-12">
        
        <div className="w-full max-w-6xl md:max-w-4xl mx-auto">
          <div className="text-center space-y-6 md:space-y-8">
            
            {/* HEADLINE */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              // Removed 'mt-32' because container padding handles it now
              className={`${instrumentSerif.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-slate-900`}
            >
              <span className="hidden md:block">
                Sell Luxury Properties Faster <br/>
                with a <span className="text-amber-700 italic">Premium Website</span>
              </span>

              {/* Mobile Text */}
             {/* Mobile Text */}
<span className="block md:hidden">
  Sell More
  <br />
  {/* Change: text-5xl -> text-4xl sm:text-5xl (Safety ke liye) */}
  <span className="text-amber-700 text-4xl sm:text-5xl italic">Luxury Properties</span>
  <br />
  in Dubai & KSA
</span>
            </motion.h1>

            {/* SUBHEADING */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl md:max-w-2xl mx-auto leading-relaxed font-light"
            >
              Investor-ready websites for Real Estate Developers. <br className="hidden md:block" />
              Convert visitors into buyers with a digital experience that matches your prestige.
            </motion.p>
            
            {/* BUTTON CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-4 md:pt-6"
            >
              <Button
                size="lg"
                className="bg-slate-900 hover:bg-slate-800 text-white h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-medium rounded-sm transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span className="flex items-center gap-3">
                  View Selected Works
                  <ArrowRight className="h-5 w-5" />
                </span>
              </Button>
            </motion.div>

          </div>
        </div>
      </div>
       
      {/* --- FOOTER OF HERO (Ticker) --- */}
      <div className="w-full relative z-10 py-6 md:py-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500 bg-white/50 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none">
        <Ticker />
      </div>
       
    </section>
  );
}