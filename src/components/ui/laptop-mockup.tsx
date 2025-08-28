import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Screenshot {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const screenshots: Screenshot[] = [
  {
    id: 1,
    title: "E-commerce Store",
    description: "High-converting online store with 40% better checkout flow",
    image: "/nn.png",
    category: "E-commerce"
  },
  {
    id: 2,
    title: "Analytics Dashboard",
    description: "Real-time data visualization with intuitive user experience",
    image: "/nn.png",
    category: "Dashboard"
  },
  {
    id: 3,
    title: "Creative Portfolio",
    description: "Award-winning design that converts visitors into clients",
    image: "/nn.png",
    category: "Portfolio"
  },
  {
    id: 4,
    title: "Marketing Landing",
    description: "65% conversion rate increase with optimized user journey",
    image: "/nn.png",
    category: "Marketing"
  },
  {
    id: 5,
    title: "Mobile-First Design",
    description: "Seamless experience across all devices and screen sizes",
    image: "/nn.png",
    category: "Mobile"
  }
];

export default function AnimatedLaptopShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality - smooth transitions every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 4000); // Original timing

    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: {
      opacity: 0,
      scale: 1.1,
    },
    center: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.9,
    },
  };

  return (
    <div className="relative w-full max-w-[880px] mx-auto mt-16 mb-10 md:mb-20">
      {/* Clean Laptop Frame */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative mx-auto rounded-[34px] bg-[#111111] border-[12px] border-[#2b2b2b] shadow-[0_20px_80px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_100px_rgba(0,0,0,0.4)] transition-shadow duration-500"
      >
        {/* Laptop Side Buttons */}
        <div className="absolute -z-[10] -left-[14px] top-20 h-10 w-[4px] rounded-full bg-[#333]"></div>
        <div className="absolute -z-[10] -left-[14px] top-32 h-6 w-[4px] rounded-full bg-[#333]"></div>
        
        {/* Top Notch/Camera */}
        <div className="absolute -z-[10] top-[-14px] left-1/2 -translate-x-1/2 h-[4px] w-20 rounded-full bg-[#333]"></div>
        
        {/* Apple Logo (subtle) */}
        <div className="absolute -z-[5] top-[-8px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#444] opacity-30"></div>

        {/* Screen Container */}
        <div className="rounded-[24px] overflow-hidden bg-[#f4f4f5]">
          <div className="w-full h-full rounded-[20px] overflow-hidden">
            {/* Content Area with Smooth Transitions */}
            <div className="relative w-full aspect-[16/10] bg-white rounded-[20px] overflow-hidden">
              {/* Screen reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none z-30 rounded-[20px]"></div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 1,
                    ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smooth transitions
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={screenshots[currentIndex].image}
                    alt={screenshots[currentIndex].title}
                    className="w-full h-full object-cover object-center"
                    height={800}
                    width={1200}
                    draggable={false}
                  />
                  
                  {/* Enhanced Content Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent">
                    <div className="absolute bottom-8 left-8 text-white">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                      >
                        <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium mb-4 border border-white/20">
                          {/* {screenshots[currentIndex].category} */}
                        </span>
                        <h3 className="text-3xl font-bold mb-3 tracking-tight">
                          {/* {screenshots[currentIndex].title} */}
                        </h3>
                        <p className="text-base opacity-95 max-w-md leading-relaxed">
                          {/* {screenshots[currentIndex].description} */}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Minimal Progress Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex justify-center mt-8 space-x-2"
      >
        {screenshots.map((_, index) => (
          <motion.div
            key={index}
            className={`h-1 rounded-full transition-all duration-500 ${
              index === currentIndex
                ? 'w-12 bg-gradient-to-r from-blue-600 to-purple-600'
                : 'w-2 bg-gray-300 hover:bg-gray-400'
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </motion.div>

      {/* Enhanced Stats Display */}
      <div className="mt-6 text-center">
        <div className="text-sm text-gray-600 font-medium">
          <span className="text-gray-800 font-semibold">{currentIndex + 1}</span> of {screenshots.length} • {screenshots[currentIndex].category}
        </div>
      </div>

      {/* Floating Design Elements */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-24 -left-24 w-40 h-40 bg-gradient-to-br from-blue-400/15 to-purple-500/15 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          y: [0, 20, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute -bottom-24 -right-24 w-48 h-48 bg-gradient-to-br from-pink-400/15 to-orange-500/15 rounded-full blur-3xl"
      />
    </div>
  );
}