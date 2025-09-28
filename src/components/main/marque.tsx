"use client";
import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projectImages = [
  { id: 1, image: "/project/1.png", alt: "E-commerce Platform" },
  { id: 2, image: "/project/2.png", alt: "Mobile Banking App" },
  { id: 3, image: "/project/3.png", alt: "SaaS Dashboard" },
  { id: 4, image: "/project/4.png", alt: "Portfolio Website" },
  { id: 5, image: "/project/5.png", alt: "Social Media Platform" },
  { id: 6, image: "/project/6.png", alt: "Social Media Platform" },
  { id: 7, image: "/project/9.png", alt: "Social Media Platform" },
];

const Ticker = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-advance slideshow for mobile
  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isMobile]);

  // Duplicate images for seamless desktop loop
  const loopImages = useMemo(() => [...projectImages, ...projectImages], []);

  return (
    <div className="relative w-full overflow-hidden py-12">
      {/* 📱 Mobile Slideshow */}
      {isMobile && (
        <div className="relative w-full h-[220px] rounded-xl overflow-hidden shadow-md">
          <Image
            src={projectImages[currentImageIndex].image}
            alt={projectImages[currentImageIndex].alt}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      )}

      {/* 💻 Desktop Ticker */}
      {!isMobile && (
        <div className="relative">
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {loopImages.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="relative flex-shrink-0 group"
              >
                <div className="relative w-[340px] h-[220px] rounded-xl overflow-hidden shadow-lg bg-neutral-100">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="340px"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Ticker;
