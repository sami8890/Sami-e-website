"use client";
import React, { useState, useEffect, useMemo } from "react";
import { motion,  } from "framer-motion";
import Image from "next/image";

const projectImages = [
  { id: 1, image: "/project/1.png", alt: "E-commerce Platform" },
  { id: 2, image: "/project/2.png", alt: "Mobile Banking App" },
  { id: 3, image: "/project/3.png", alt: "SaaS Dashboard" },
  { id: 4, image: "/project/4.png", alt: "Portfolio Website" },
  { id: 5, image: "/project/5.png", alt: "Social Media Platform" },
];

const Ticker = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-advance slideshow for mobile - much faster
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
    }, 800); // Very fast - 0.8 seconds

    return () => clearInterval(interval);
  }, [isMobile]);

  // Triple images for seamless loop
  const tripleImages = useMemo(() => 
    [...projectImages, ...projectImages, ...projectImages],
    []
  );

  return (
    <div className="relative w-full overflow-hidden py-6">
      {/* Mobile Slideshow */}
      {isMobile && (
        <div className="relative w-full h-[280px] rounded-xl overflow-hidden">
          <Image
            src={projectImages[currentImageIndex].image}
            alt={projectImages[currentImageIndex].alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority={currentImageIndex === 0}
          />
        </div>
      )}

      {/* Desktop Ticker - Super Fast */}
      {!isMobile && (
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{
            repeat: Infinity,
            duration: 8, // Much faster - 8 seconds instead of 25
            ease: "linear",
          }}
        >
          {tripleImages.map((item, index) => (
            <div key={`${item.id}-${index}`} className="relative flex-shrink-0">
              <Image
                src={item.image}
                alt={item.alt}
                width={640}
                height={480}
                className="rounded-xl object-cover w-[320px] h-[240px] md:w-[480px] md:h-[360px] lg:w-[560px] lg:h-[420px] xl:w-[640px] xl:h-[480px]"
                sizes="(max-width: 768px) 320px, (max-width: 1024px) 480px, (max-width: 1280px) 560px, 640px"
              />
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Ticker;