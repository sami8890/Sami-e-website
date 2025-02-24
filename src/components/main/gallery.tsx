"use client";
import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface GalleryImage {
    src: string;
    alt: string;
    title: string;
    description: string;
    blurDataUrl?: string;
}

const images: GalleryImage[] = [
    {
        src: '/drone.png',
        alt: 'Luxury Interior 1',
        title: 'Timeless Elegance',
        description: 'Where classic meets contemporary in perfect harmony',
    },
    {
        src: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab',
        alt: 'Luxury Interior 2',
        title: 'Modern Serenity',
        description: 'Where innovation meets tranquility',
    },
    {
        src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
        alt: 'Luxury Interior 3',
        title: 'Urban Poetry',
        description: 'Stories written in light and shadow',
    }
];

export const LuxuryGallery = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, );

    const handleNext = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % images.length);
    }, []);

    const handlePrev = useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    }, []);

    return (
        <div className="relative w-full h-screen bg-black overflow-hidden">
            <div className="relative w-[70vw] h-full mx-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                        className="absolute inset-0"
                    >
                        <div className="absolute inset-0 overflow-hidden">
                            <motion.img
                                src={images[activeIndex].src}
                                alt={images[activeIndex].alt}
                                className="w-full h-full object-cover"
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 1.5 }}
                                loading="eager"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
                        </div>
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="absolute bottom-0 left-0 right-0 p-12"
                        >
                            <h2 className="text-6xl font-light text-white mb-4 tracking-wider font-playfair">
                                {images[activeIndex].title}
                            </h2>
                            <p className="text-xl text-white/80 font-light tracking-wide max-w-2xl font-inter">
                                {images[activeIndex].description}
                            </p>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="absolute inset-x-0 bottom-0 flex justify-between items-center p-8 z-10">
                <motion.button
                    whileHover={{ scale: 1.1, x: -5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handlePrev}
                    className="p-4 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300"
                >
                    <ArrowLeft className="w-6 h-6 text-white" />
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleNext}
                    className="p-4 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300"
                >
                    <ArrowRight className="w-6 h-6 text-white" />
                </motion.button>
            </div>
        </div>
    );
};

export default LuxuryGallery;
