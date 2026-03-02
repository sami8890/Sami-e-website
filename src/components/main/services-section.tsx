"use client";

import { Instrument_Serif } from "next/font/google";
import { Layout, Smartphone, Zap, ArrowRight, MousePointer2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const instrumentSerif = Instrument_Serif({ weight: "400", subsets: ["latin"] });

const services = [
  {
    slug: "luxury-web-architecture",
    title: "Web Architecture",
    desc: "Custom-engineered digital estates. No templates, just pure performance and sub-second load times.",
    icon: "layout",
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
    desc: "70% of investors browse on iPhone. We ensure perfection on every pixel and touchpoint.",
    icon: "mobile",
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
    desc: "Technical SEO built-in to rank above competitors in the Dubai market.",
    icon: "seo",
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
    desc: "Transform slow sites into lightning-fast assets with 100/100 performance scores.",
    icon: "speed",
    colSpan: "md:col-span-2",
    bg: "bg-slate-800",
    text: "text-white",
    subText: "text-slate-300",
    iconColor: "text-green-400",
    border: "border-slate-700"
  }
];

// --- ADVANCED ARCHITECTURAL ICONS ---
const AnimatedIcon = ({ type, colorClass }: { type: string, colorClass: string }) => {
  // 1. WEB ARCHITECTURE: The "Wireframe Builder"
  if (type === "layout") {
    return (
      <div className="relative w-10 h-10 border-2 border-dashed border-white/20 rounded-md p-1">
        <motion.div 
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.95, 1, 0.95] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="grid grid-cols-2 gap-1 h-full w-full"
        >
          <div className={`bg-amber-500/80 rounded-sm col-span-2 h-2`} />
          <div className={`bg-amber-500/40 rounded-sm h-4`} />
          <div className={`bg-amber-500/20 rounded-sm h-4 border border-amber-500/30`} />
        </motion.div>
        <motion.div
           animate={{ x: [0, 15, 0], y: [0, 10, 0] }}
           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
           className="absolute -bottom-1 -right-1"
        >
          <MousePointer2 className="w-3 h-3 text-white fill-white" />
        </motion.div>
      </div>
    );
  }

  // 2. MOBILE: The "Haptic Pulse"
  if (type === "mobile") {
    return (
      <div className="relative flex items-center justify-center">
        {/* Radiating Waves */}
        {[1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.8, opacity: 0.5 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.8 }}
            className={`absolute w-10 h-10 rounded-full border border-amber-700/30`}
          />
        ))}
        <motion.div 
          animate={{ y: [0, -3, 0] }} 
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10"
        >
          <Smartphone className={`w-8 h-8 ${colorClass}`} />
          <motion.div 
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-700 rounded-full"
          />
        </motion.div>
      </div>
    );
  }

  // 3. SEO: The "Growth Bars"
  if (type === "seo") {
    return (
      <div className="flex items-end gap-[3px] h-6">
        {[0.3, 0.8, 0.5, 1, 0.7].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: "10%" }}
            animate={{ height: `${h * 100}%` }}
            transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse", delay: i * 0.15 }}
            className={`w-[4px] rounded-full bg-amber-700`}
          />
        ))}
      </div>
    );
  }

  // 4. SPEED: The "Gauge Sweep"
  if (type === "speed") {
    return (
      <div className="relative flex items-center justify-center w-12 h-12">
        <svg className="absolute w-12 h-12 transform -rotate-90">
          <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" fill="transparent" className="opacity-10" />
          <motion.circle
            cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="3" fill="transparent"
            strokeDasharray="113"
            initial={{ strokeDashoffset: 113 }}
            animate={{ strokeDashoffset: [113, 10, 113] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "circInOut" }}
            className="text-green-400"
            strokeLinecap="round"
          />
        </svg>
        <Zap className="w-5 h-5 text-green-400" />
      </div>
    );
  }

  return <Layout className={`w-7 h-7 ${colorClass}`} />;
};

export default function ServicesSection() {
  return (
    <section className="py-32 md:py-48 bg-slate-50" id="services">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-28 max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-amber-700 font-bold tracking-[0.4em] uppercase text-[9px] mb-6 block"
          >
            Capabilities
          </motion.span>
          <h2 className={`${instrumentSerif.className} text-4xl md:text-6xl text-slate-900 leading-tight mb-8`}>
            Specialized Solutions for <br/>
            <span className="italic text-slate-400">High-End Real Estate</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`${service.colSpan} relative rounded-[2rem] border ${service.border} overflow-hidden group bg-white shadow-sm hover:shadow-2xl transition-all duration-700`}
            >
              <div className={`h-full p-10 md:p-12 flex flex-col justify-between ${service.bg}`}>
                
                {/* ICON CONTAINER */}
                <div className="mb-14">
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 ${service.text === 'text-white' ? 'bg-white/10' : 'bg-slate-50'}`}>
                    <AnimatedIcon type={service.icon} colorClass={service.iconColor} />
                  </div>
                </div>

                {/* TEXT CONTENT */}
                <div className="mb-14">
                  <h3 className={`${instrumentSerif.className} text-3xl md:text-4xl ${service.text} mb-5`}>
                    {service.title}
                  </h3>
                  <p className={`${service.subText} text-lg font-light leading-relaxed max-w-md opacity-90`}>
                    {service.desc}
                  </p>
                </div>

                {/* BOTTOM ACTION */}
                <div className="mt-auto pt-8 border-t border-white/10 flex justify-between items-center">
                  <Link 
                    href={`/services/${service.slug}`} 
                    className={`group/link inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.25em] transition-all
                      ${service.text === 'text-white' ? 'text-slate-400 hover:text-amber-500' : 'text-slate-500 hover:text-amber-700'}`}
                  >
                    View Details
                    <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </Link>
                  
                  <span className={`text-[10px] font-mono opacity-20 tracking-tighter ${service.text}`}>
                    MOD_0{index + 1}
                  </span>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}