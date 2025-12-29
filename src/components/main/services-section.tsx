"use client";

import { Instrument_Serif } from "next/font/google";
import { Layout, Smartphone, BarChart3, Globe, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const instrumentSerif = Instrument_Serif({ weight: "400", subsets: ["latin"] });

const services = [
  // Data same as before
  {
    slug: "luxury-web-architecture",
    title: "Web Architecture",
    desc: "Custom-engineered digital estates. No templates, just pure performance.",
    icon: Layout,
    colSpan: "md:col-span-2",
    bg: "bg-slate-900",
    text: "text-white",
    subText: "text-slate-400",
    iconColor: "text-amber-500",
    border: "border-slate-800"
  },
  {
    slug: "mobile-first-experience",
    title: "Mobile Experience",
    desc: "70% investors browse on iPhone. We ensure perfection on every screen.",
    icon: Smartphone,
    colSpan: "md:col-span-1",
    bg: "bg-white",
    text: "text-slate-900",
    subText: "text-slate-500",
    iconColor: "text-amber-700",
    border: "border-slate-200"
  },
  {
    slug: "seo-lead-generation",
    title: "SEO & Growth",
    desc: "Technical SEO built-in to rank above competitors.",
    icon: BarChart3,
    colSpan: "md:col-span-1",
    bg: "bg-white",
    text: "text-slate-900",
    subText: "text-slate-500",
    iconColor: "text-amber-700",
    border: "border-slate-200"
  },
  {
    slug: "redesign-speed-optimization",
    title: "Redesign & Speed Ops",
    desc: "Transform slow sites into lightning-fast assets. We target 100/100 scores.",
    icon: Zap,
    colSpan: "md:col-span-2",
    bg: "bg-slate-800",
    text: "text-white",
    subText: "text-slate-300",
    iconColor: "text-green-400",
    border: "border-slate-700"
  },
  {
    slug: "interactive-maps-3d",
    title: "3D & Interactive Maps",
    desc: "Immersive walkthroughs allowing international investors to visit remotely.",
    icon: Globe,
    colSpan: "md:col-span-3",
    bg: "bg-amber-50",
    text: "text-slate-900",
    subText: "text-slate-600",
    iconColor: "text-amber-700",
    border: "border-amber-100"
  }
];

export default function ServicesSection() {
  return (
    // CHANGE 1: Reduced section padding (py-24 -> py-16)
    <section className="py-16 bg-slate-50" id="services">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl"> 
        {/* Changed max-w-7xl to max-w-6xl for tighter container */}
        
        {/* Header */}
        {/* CHANGE 2: Reduced margin bottom (mb-16 -> mb-12) and Font Sizes */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="text-amber-700 font-bold tracking-[0.2em] uppercase text-[10px] mb-3 block">
            Our Expertise
          </span>
          <h2 className={`${instrumentSerif.className} text-3xl md:text-4xl text-slate-900 leading-tight mb-4`}>
            Premium Services for <br/>
            <span className="italic text-slate-400">High-Value Assets</span>
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            We move beyond standard design to create high-performance tools that close deals.
          </p>
        </div>

        {/* --- BENTO GRID --- */}
        {/* CHANGE 3: Reduced Gap (gap-6 -> gap-5) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              // CHANGE 4: Added min-h class to ensure uniform height without being too tall
              className={`${service.colSpan} group relative overflow-hidden rounded-sm border ${service.border} shadow-sm hover:shadow-xl transition-all duration-500`}
            >
              <Link href={`/services/${service.slug}`} className="block h-full">
                {/* CHANGE 5: Reduced Card Padding (p-8/10 -> p-6 md:p-8) */}
                <div className={`h-full p-6 md:p-8 flex flex-col justify-between relative z-10 ${service.bg} transition-colors`}>
                  
                  {/* Top Row: Icon */}
                  {/* CHANGE 6: Reduced bottom margin (mb-8 -> mb-5) */}
                  <div className="flex justify-between items-start mb-5">
                    {/* Icon Size reduced slightly w-12 -> w-10 */}
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 ${service.iconColor === 'text-amber-500' ? 'bg-white/10' : 'bg-slate-100'}`}>
                      <service.icon className={`w-5 h-5 ${service.iconColor}`} />
                    </div>
                  </div>

                  {/* Middle Content */}
                  <div>
                    {/* CHANGE 7: Font size reduced (text-2xl -> text-xl) */}
                    <h3 className={`${instrumentSerif.className} text-xl md:text-2xl ${service.text} mb-2 group-hover:translate-x-1 transition-transform duration-300`}>
                      {service.title}
                    </h3>
                    {/* Description Font reduced (text-sm) */}
                    <p className={`${service.subText} leading-relaxed text-sm max-w-2xl mb-4`}>
                      {service.desc}
                    </p>
                  </div>

                  {/* BOTTOM ROW: View Details Only */}
                  {/* CHANGE 8: Reduced padding top (pt-6 -> pt-4) */}
                  <div className="flex justify-end items-end mt-auto pt-4 border-t border-white/5">
                    
                    <div className="relative overflow-hidden">
                       <span className={`text-[9px] font-bold uppercase tracking-widest transition-colors duration-300 border-b border-transparent group-hover:border-current pb-0.5
                        ${service.text === 'text-white' 
                          ? 'text-slate-500 group-hover:text-amber-400 group-active:text-amber-400' 
                          : 'text-slate-400 group-hover:text-amber-700 group-active:text-amber-700'
                        }
                      `}>
                        View Details
                      </span>
                    </div>

                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}