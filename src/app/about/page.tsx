"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Anton } from "next/font/google";
import Image from "next/image";

// Load font outside component
const anton = Anton({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anton",
});

const AboutMe = () => {
  const sectionRef = useRef(null);
  const [, setIsReducedMotion] = useState(false);

  // Check for reduced motion preference once
  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    setIsReducedMotion(prefersReducedMotion);
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-black text-white py-16 md:py-20 px-4 md:px-6 lg:px-8 overflow-hidden min-h-[80vh] flex items-center"
    >
      {/* Simple subtle background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(16, 185, 129, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Main content container */}
      <div className="container relative z-10 mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left column - Image */}
          <div className="lg:col-span-5">
            <motion.div
              className="relative rounded-full p-2 max-w-sm mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {/* Profile image */}
              <div className="rounded-full overflow-hidden aspect-square border-4 border-emerald-400/30 shadow-lg">
                <Image
                  src="/main.png"
                  alt="Sami"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>

            
            </motion.div>
          </div>

          {/* Right column - Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Headline */}
              <h2
                className={`${anton.className} text-3xl md:text-4xl font-normal mb-2 tracking-tight`}
              >
                <span className="text-white">Hi, I&apos;m </span>
                <span className="text-[#00E188]">Sami</span>
              </h2>

              {/* Tagline */}
              <p className="text-lg text-emerald-300 font-medium mb-4">
                Web Developer & UI Designer
              </p>
              <p className="text-gray-300 mb-4">
                With 3 years of industry-level experience, I create modern,
                responsive websites that combine stunning design with smooth
                functionality. 
              </p>
              {/* Brief intro - concise and impactful */}
              <p className="text-gray-300 mb-6">
                I create modern, responsive websites that combine stunning
                design with smooth functionality. My focus is on delivering
                user-friendly digital experiences that help businesses stand
                out.
              </p>

              {/* Skills */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  "Frontend Development",
                  "Responsive Design",
                  "UI/UX Design",
                  "Performance Optimization",
                ].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[#00E188] mr-2"></div>
                    <span className="text-gray-200">{skill}</span>
                  </div>
                ))}
              </div> 
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
