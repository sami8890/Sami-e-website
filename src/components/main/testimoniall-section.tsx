"use client"
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialSection = () => {
    const [showAll, setShowAll] = useState(false);
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [currentFilter, setCurrentFilter] = useState('all');
    const sectionRef = useRef<HTMLDivElement>(null);

    // Check if device is mobile and handle resize
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    // Sample testimonial data with categories
    const testimonials = [
        {
            id: 1,
            name: 'Dominik',
            username: '@domsyp',
            country: 'DE',
            avatar: '/avatars/dominik.jpg',
            content: 'I love working with Saumon, he is a great developer. He does very precise work and his delivery time is always super fast!',
            category: 'development',
            rating: 5
        },
        {
            id: 2,
            name: 'Henry Mouzon',
            username: '@henrymouzon',
            country: 'US',
            avatar: '/avatars/henry.jpg',
            content: 'It was a pleasure working with Redwan. I really loved the job he did for me, not only for the artistic ingenuity he displayed but also for the communication and friendliness he established. He delivered a bouncing and awesome work.',
            extraContent: 'It was a great experience I won\'t forget, and I will patronize him again and again in the near future. Thank you very much Redwan and cheers',
            category: 'design',
            rating: 5
        },
        {
            id: 3,
            name: 'Dayem Saeed',
            username: '@dayemsaeed808',
            country: 'PK',
            avatar: '/avatars/dayem.jpg',
            content: 'Saumon was one of the best developers I\'ve had the pleasure of working with. He completed the project even earlier than expected and exactly as I wanted it! I\'ll definitely be working with him again and would recommend him to anyone in need of a professional developer for their website',
            category: 'development',
            rating: 5
        },
        {
            id: 4,
            name: 'Charles Benford',
            username: '@charles_benford',
            country: 'CA',
            avatar: '/avatars/charles.jpg',
            content: 'Exceptional work! Communication was clear and prompt. The delivered solution exceeded expectations and I look forward to working together on future projects.',
            category: 'development',
            rating: 5
        },
        {
            id: 5,
            name: 'Sarah Johnson',
            username: '@sarah_j',
            country: 'UK',
            avatar: '/avatars/sarah.jpg',
            content: 'Incredibly professional and attentive to detail. The project was delivered ahead of schedule with all requirements met perfectly. Highly recommended!',
            category: 'consulting',
            rating: 4
        },
        {
            id: 6,
            name: 'Akira Tanaka',
            username: '@akira_t',
            country: 'JP',
            avatar: '/avatars/akira.jpg',
            content: 'Outstanding collaboration experience. The developer understood my vision immediately and transformed it into reality. The technical expertise was evident in every aspect of the delivery.',
            category: 'design',
            rating: 5
        }
    ];

    // Filter testimonials based on current filter
    const filteredTestimonials = currentFilter === 'all'
        ? testimonials
        : testimonials.filter(item => item.category === currentFilter);

    // Sort testimonials by rating (highest first)
    const sortedTestimonials = [...filteredTestimonials].sort((a, b) => b.rating - a.rating);

    // Determine how many testimonials to display
    const displayCount = isMobile ? 3 : showAll ? sortedTestimonials.length : 4;
    const displayedTestimonials = sortedTestimonials.slice(0, displayCount);

    

    interface Flags {
        [key: string]: string;
    }

    const getFlag = (country: string): string => {
        const flags: Flags = {
            'US': '🇺🇸',
            'UK': '🇬🇧',
            'DE': '🇩🇪',
            'CA': '🇨🇦',
            'JP': '🇯🇵',
            'PK': '🇵🇰'
        };
        return flags[country] || '';
    };

    // Scroll to section function
    const scrollToSection = () => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

  

    const renderStars = (rating: number): JSX.Element[] => {
        return Array(5).fill(0).map((_, index) => (
            <svg
                key={index}
                className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-600'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
        ));
    };

    // Extract unique categories
    const categories = ['all', ...new Set(testimonials.map(item => item.category))];

    return (
        <div className="bg-black text-white py-16 px-4 md:px-8" ref={sectionRef}>
            {/* Header with Animation */}
            <motion.div
                className="max-w-7xl mx-auto mb-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl md:text-6xl font-bold mb-2 relative">
                    OVER 200+ POSITIVE TALKS,
                    <motion.span
                        className="absolute -bottom-2 left-0 h-1 bg-emerald-400"
                        initial={{ width: 0 }}
                        animate={{ width: '40%' }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    />
                </h2>
                <h3 className="text-3xl md:text-5xl font-bold text-emerald-400 mt-4">
                    SEE WHAT OUR CLIENTS SAY!
                </h3>

                {/* Avatar row with staggered animation */}
                <div className="flex justify-end mt-6 items-center">
                    <div className="flex space-x-[-10px]">
                        {testimonials.slice(0, 5).map((item, index) => (
                            <motion.div
                                key={index}
                                className="w-10 h-10 rounded-full border-2 border-black overflow-hidden relative"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * index, duration: 0.4 }}
                                style={{ zIndex: 5 - index }}
                            >
                                <div className="w-full h-full bg-gray-700 flex items-center justify-center text-xs font-bold">
                                    {item.name.charAt(0)}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <motion.div
                        className="flex items-center ml-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.4 }}
                    >
                        <a href="#" className="text-sm underline text-gray-300 flex items-center hover:text-emerald-400 transition-colors duration-300">
                            See all 200+ reviews
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </a>
                    </motion.div>
                </div>
            </motion.div>

            {/* Filter buttons */}
            <div className="max-w-7xl mx-auto mb-8 flex flex-wrap gap-2">
                {categories.map((category, index) => (
                    <motion.button
                        key={category}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${currentFilter === category
                                ? 'bg-emerald-500 text-white'
                                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                            }`}
                        onClick={() => setCurrentFilter(category)}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.3 }}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </motion.button>
                ))}
            </div>

            {/* Testimonials Grid with AnimatePresence for smooth transitions */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence>
                        {displayedTestimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 transition-all duration-300 border border-gray-800 h-full flex flex-col shadow-lg`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    filter: hoveredId && hoveredId !== testimonial.id ? 'blur(2px)' : 'blur(0px)',
                                    scale: hoveredId === testimonial.id ? 1.02 : 1,
                                    boxShadow: hoveredId === testimonial.id ? '0 10px 25px -5px rgba(16, 185, 129, 0.1)' : 'none',
                                    borderColor: hoveredId === testimonial.id ? 'rgb(16, 185, 129)' : 'rgb(31, 41, 55)'
                                }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                onMouseEnter={() => setHoveredId(testimonial.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                layout
                            >
                                {/* Gradient accent line at top */}
                                <div className="h-1 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-t-lg absolute top-0 left-0 right-0" />

                                <div className="flex items-center mb-4 relative">
                                    <div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden flex-shrink-0 mr-4 border-2 border-emerald-500">
                                        <div className="w-full h-full bg-gray-700 flex items-center justify-center text-lg font-bold">
                                            {testimonial.name.charAt(0)}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center">
                                            <h3 className="font-bold text-lg">{testimonial.name}</h3>
                                            <span className="ml-2">{getFlag(testimonial.country)}</span>
                                        </div>
                                        <p className="text-gray-400 text-sm">{testimonial.username}</p>
                                    </div>
                                    <div className="absolute top-0 right-0 bg-gray-700 rounded-full px-2 py-1 text-xs font-semibold text-emerald-400">
                                        {testimonial.category}
                                    </div>
                                </div>

                                <div className="flex-grow">
                                    <p className="text-gray-300 italic">&quot;<span>{testimonial.content}</span>&quot;</p>
                                    {testimonial.extraContent && (
                                        <p className="text-gray-300 mt-2 italic">&quot;{testimonial.extraContent}&quot;</p>
                                    )}
                                </div>

                                <div className="flex items-center mt-4 justify-between">
                                    <div className="flex">
                                        {renderStars(testimonial.rating)}
                                    </div>
                                    <span className="text-sm text-gray-400">via <span className="text-emerald-400">Fiverr</span></span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* "See More" Button with enhanced animation */}
            {filteredTestimonials.length > displayCount && (
                <motion.div
                    className="max-w-7xl mx-auto mt-10 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                >
                    <button
                        onClick={() => {
                            setShowAll(!showAll);
                            if (!showAll) {
                                setTimeout(scrollToSection, 100);
                            }
                        }}
                        className="relative overflow-hidden group bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:shadow-lg"
                    >
                        <span className="relative z-10 flex items-center justify-center">
                            {showAll ? 'Show Less' : 'See More Testimonials'}
                            <svg
                                className={`w-5 h-5 ml-2 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </span>
                        <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                    </button>
                </motion.div>
            )}
        </div>
    );
};

export default TestimonialSection;