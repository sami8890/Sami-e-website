"use client";

import { Instrument_Serif } from "next/font/google";
import { ArrowRight, MessageCircle } from "lucide-react"; // MessageCircle for WhatsApp
import Link from "next/link";

const instrumentSerif = Instrument_Serif({ weight: "400", subsets: ["latin"] });

export default function CTASection() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      
      {/* Background Glows for Premium Feel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-600/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10 text-center">
        
        {/* Subheading */}
        <span className="text-amber-500 font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-6 block">
          Ready to Scale?
        </span>

        {/* Main Heading */}
        <h2 className={`${instrumentSerif.className} text-5xl md:text-7xl text-white mb-8 leading-[1.1]`}>
          Let’s Build Your <br />
          <span className="text-slate-400 italic">Digital Empire.</span>
        </h2>

        {/* Description */}
        <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Stop losing investors to slow, outdated websites. Get a high-performance portal tailored for the Dubai real estate market.
        </p>

        {/* THE BUTTONS */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          
          {/* Button 1: Strategy Call (Primary) */}
          <Link 
            href="https://calendly.com" // Yahan apna Calendly link daalna
            target="_blank"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-amber-600 text-white rounded-full overflow-hidden transition-transform active:scale-95"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative font-bold uppercase tracking-widest text-xs flex items-center gap-2">
              Book Strategy Call
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>

          {/* Button 2: WhatsApp (Secondary) */}
          <Link 
            href="https://wa.me/923000000000" // Yahan apna number daalna
            target="_blank"
            className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/20 text-white rounded-full hover:bg-white/5 transition-colors active:scale-95"
          >
            <span className="font-bold uppercase tracking-widest text-xs flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-green-400" />
              Chat on WhatsApp
            </span>
          </Link>

        </div>

        {/* Trust Note */}
        <p className="mt-8 text-slate-500 text-xs uppercase tracking-widest">
          Response time: Under 2 Hours
        </p>

      </div>
    </section>
  );
}