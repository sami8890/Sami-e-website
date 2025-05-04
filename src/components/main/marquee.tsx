"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ProfessionalLogoMarquee() {
    // State to manage duplicating logos based on container width
    const [logoCount, setLogoCount] = useState(3);

    // Tech stack logos
    const logos = [
        // Next.js
        <svg key="nextjs" className="w-10 h-10" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
                <circle cx="90" cy="90" r="90" fill="black" />
            </mask>
            <g mask="url(#mask0)">
                <circle cx="90" cy="90" r="90" fill="black" />
                <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white" />
                <rect x="115" y="54" width="12" height="72" fill="white" />
            </g>
        </svg>,

        // React
        <svg key="react" className="w-10 h-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 70.8601C61.2611 70.8601 70.3836 61.7376 70.3836 50.4765C70.3836 39.2154 61.2611 30.0929 50 30.0929C38.7389 30.0929 29.6164 39.2154 29.6164 50.4765C29.6164 61.7376 38.7389 70.8601 50 70.8601Z" fill="#61DAFB" />
            <path d="M50 60.5765C55.6985 60.5765 60.3265 55.9486 60.3265 50.25C60.3265 44.5515 55.6985 39.9235 50 39.9235C44.3015 39.9235 39.6735 44.5515 39.6735 50.25C39.6735 55.9486 44.3015 60.5765 50 60.5765Z" fill="#61DAFB" />
            <path fillRule="evenodd" clipRule="evenodd" d="M50 32.7235C69.2514 32.7235 85 40.6099 85 50.25C85 59.8901 69.2514 67.7765 50 67.7765C30.7486 67.7765 15 59.8901 15 50.25C15 40.6099 30.7486 32.7235 50 32.7235ZM50 42.7235C63.8071 42.7235 75 46.0633 75 50.25C75 54.4367 63.8071 57.7765 50 57.7765C36.1929 57.7765 25 54.4367 25 50.25C25 46.0633 36.1929 42.7235 50 42.7235Z" fill="#61DAFB" />
            <path fillRule="evenodd" clipRule="evenodd" d="M28.0369 15.5765C37.1587 10.5099 52.8413 19.0098 67.5 37.4235C82.1587 55.8372 89.1587 75.7235 80.0369 80.7901C70.915 85.8568 55.2324 77.3568 40.5737 58.9431C25.915 40.5294 18.915 20.6431 28.0369 15.5765ZM40.5737 28.9431C50.2324 16.0098 61.915 7.5765 70.0369 12.5765C78.1587 17.5765 75.915 35.5294 66.2563 48.4627C56.5976 61.396 44.915 69.8294 36.7932 64.8294C28.6713 59.8294 30.915 41.8764 40.5737 28.9431Z" fill="#61DAFB" />
            <path fillRule="evenodd" clipRule="evenodd" d="M67.5 15.5765C76.6218 20.6431 73.6218 40.5294 58.9631 58.9431C44.3044 77.3568 28.6218 85.8568 19.5 80.7901C10.3782 75.7235 13.3782 55.8372 28.0369 37.4235C42.6956 19.0098 58.3782 10.5099 67.5 15.5765ZM58.9631 28.9431C68.6218 41.8764 70.8655 59.8294 62.7437 64.8294C54.6218 69.8294 42.9393 61.396 33.2806 48.4627C23.6218 35.5294 21.3782 17.5765 29.5 12.5765C37.6218 7.5765 49.3044 16.0098 58.9631 28.9431Z" fill="#61DAFB" />
        </svg>,

        // Tailwind CSS
        <svg key="tailwind" className="w-10 h-10" viewBox="0 0 54 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M27 0C19.8 0 15.3 3.6 13.5 10.8C16.2 7.2 19.35 5.85 22.95 6.75C25.004 7.263 26.472 8.754 28.097 10.403C30.744 13.09 33.808 16.2 40.5 16.2C47.7 16.2 52.2 12.6 54 5.4C51.3 9 48.15 10.35 44.55 9.45C42.496 8.937 41.028 7.446 39.403 5.797C36.756 3.11 33.692 0 27 0ZM13.5 16.2C6.3 16.2 1.8 19.8 0 27C2.7 23.4 5.85 22.05 9.45 22.95C11.504 23.464 12.972 24.954 14.597 26.603C17.244 29.29 20.308 32.4 27 32.4C34.2 32.4 38.7 28.8 40.5 21.6C37.8 25.2 34.65 26.55 31.05 25.65C28.996 25.137 27.528 23.646 25.903 21.997C23.256 19.31 20.192 16.2 13.5 16.2Z" fill="#06B6D4" />
        </svg>,

        // GSAP
        <svg key="gsap" className="w-10 h-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M88.89 33.33H66.67V11.11C66.67 5 61.67 0 55.56 0H11.11C5 0 0 5 0 11.11v77.78C0 95 5 100 11.11 100h77.78C95 100 100 95 100 88.89V44.44C100 38.33 95 33.33 88.89 33.33ZM55.56 77.78H22.22V22.22h33.34v55.56Z" fill="#88CE02" />
        </svg>,

        // Framer Motion
        <svg key="framer" className="w-10 h-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H100V33.3333H50L0 0Z" fill="#0055FF" />
            <path d="M0 33.3333H50L100 66.6667H50V100L0 66.6667V33.3333Z" fill="#0055FF" />
        </svg>
    ];

    // Create multiple sets of logos for seamless infinite scrolling
    const createLogoSets = () => {
        let logoSets: React.ReactElement[] = [];
        for (let i = 0; i < logoCount; i++) {
            logoSets = [...logoSets, ...logos];
        }
        return logoSets;
    };

    // Update logo count based on screen size for better responsiveness
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setLogoCount(3);
            } else if (width < 1024) {
                setLogoCount(4);
            } else {
                setLogoCount(5);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Animation for the continuous marquee
    const marqueeVariants = {
        animate: {
            x: [0, -1080],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 25,
                    ease: "linear",
                },
            },
        },
    };

    return (
        <div className="relative w-full bg-black overflow-hidden py-4">
            {/* Center container */}
            <div className="max-w-6xl mx-auto px-8 relative">
                {/* Gradient overlay left */}
                <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-black to-transparent z-10"></div>

                {/* Gradient overlay right */}
                <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-black to-transparent z-10"></div>

                {/* Marquee container */}
                <div className="relative h-16 flex items-center justify-center overflow-hidden">
                    <motion.div
                        className="flex items-center absolute"
                        variants={marqueeVariants}
                        animate="animate"
                    >
                        {createLogoSets().map((logo, index) => (
                            <div
                                key={index}
                                className="mx-8 p-2 bg-gray-900 bg-opacity-50 rounded-md flex items-center justify-center"
                                style={{ backdropFilter: 'blur(5px)' }}
                            >
                                {logo}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Subtle bottom border */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
        </div>
    );
}