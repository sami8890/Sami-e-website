"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, } from "lucide-react";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Muhammad Ibrahim",
      role: "LinkedIn Branding Expert",
      avatar: "/testimonial/ibrahim.png",
      content:
        "Before Sami, I didn't even have a proper online presence. He built me a clean, modern site in record time—and now I'm getting real opportunities from it.",
      hasWebsite: false,
      websiteUrl: ""
    },
    {
      id: 2,
      name: "Ahmed",
      role: "CEO, Contexmedia",
      avatar: "/testimonial/ahmed.png",
      content:
        "I only had rough ideas, but Sami turned them into a site that feels 100% like my brand. The process was smooth, and the site is already attracting clients.",
      hasWebsite: true,
      websiteUrl: "https://contexmedia.com"
    },
    {
      id: 3,
      name: "Kyle",
      role: "CEO, Contntr",
      avatar: "/testimonial/kyle.png",
      content:
        "In under a week, Sami built a site that looks better than I imagined. It's unique, detailed, and nothing about it feels cookie-cutter.",
      hasWebsite: false,
    },
    // {
    //   id: 4,
    //   name: "Sarah ",
    //   role: "",
    //   avatar: "/testimonial/girl.png",
    //   content:
    //     "Sami delivered exactly what we needed - a professional website that converts visitors into leads. His attention to detail and fast turnaround impressed our entire team.",
    //   hasWebsite: false,
    //   websiteUrl: ""
    // },
  ];
  
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  
  const highlightKeywords = (content: string) => {
    const keywords = [
      "clean", "modern", "record time", "real opportunities", "smooth", 
      "attracting clients", "looks better", "unique", "detailed", "professional", 
      "converts", "fast turnaround", "impressed"
    ];
    let highlightedContent = content;
    keywords.forEach((keyword) => {
      const regex = new RegExp(`(${keyword})`, "gi");
      highlightedContent = highlightedContent.replace(
        regex,
        '<span class="font-semibold text-blue-600">$1</span>'
      );
    });
    return <div dangerouslySetInnerHTML={{ __html: highlightedContent }} />;
  };
  
  // Mobile: show 1 initially with button, Desktop: show all 3
  const displayCount = isMobile ? (showAll ? testimonials.length : 1) : testimonials.length;
  const displayedTestimonials = testimonials.slice(0, displayCount);
  const remainingCount = isMobile ? testimonials.length - displayCount : 0;
  
  const renderSkeletons = () => {
    const skeletonCount = isMobile ? 1 : 4; // Show 4 skeletons on desktop
    return Array(skeletonCount)
      .fill(0)
      .map((_, index) => (
        <div
          key={`skeleton-${index}`}
          className="bg-slate-50 rounded-xl p-4 md:p-6 border border-slate-200 animate-pulse"
        >
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-slate-200 rounded-full mr-3"></div>
            <div className="flex-1">
              <div className="h-3 bg-slate-200 rounded w-1/2 mb-1"></div>
              <div className="h-2 bg-slate-200 rounded w-1/3"></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-2 bg-slate-200 rounded w-full"></div>
            <div className="h-2 bg-slate-200 rounded w-3/4"></div>
          </div>
        </div>
      ));
  };
  
  return (
    <section
      className="py-12 md:py-20 bg-white relative overflow-hidden"
      id="testimonials"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 max-w-5xl lg:max-w-4xl xl:max-w-5xl relative z-10">
        {/* Header Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16 lg:mb-12"
        >
          {/* Service tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-green-50 border-2 border-green-200 text-green-800 px-4 py-1.5 text-sm md:text-lg font-medium tracking-wide">
              <div className="flex -space-x-1">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-4 h-4 rounded-full bg-green-500 border border-white"
                  ></div>
                ))}
              </div>
              Real Client Reviews
            </span>
          </motion.div>
          {/* Main headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight mb-6 font-playfair"
          >
            <span className="text-slate-600 text-xl md:text-2xl lg:text-2xl xl:text-3xl font-normal block mb-2">
              Don&apos;t just take our word for it...
            </span>
            <span className="relative">
              Here&apos;s what our clients
              <br />
              <span className="italic text-blue-600">actually say</span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full"
              />
            </span>
          </motion.h2>
        </motion.div>
        
        {/* Responsive grid: 1 col on mobile, 2 centered cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-5 xl:gap-6 max-w-4xl mx-auto">
          {isLoading
            ? renderSkeletons()
            : displayedTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl border border-slate-200 p-4 md:p-5 lg:p-4 xl:p-5 shadow-sm hover:shadow-md transition-all duration-300 relative group"
                >
                  {/* Quote Icon */}
                  <div className="absolute top-2 right-2 opacity-20 group-hover:opacity-40 transition-opacity">
                    <Quote className="w-5 h-5 text-slate-400" />
                  </div>
                  
                  {/* Client Info */}
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-slate-100 border border-slate-200">
                      {testimonial.avatar ? (
                        <Image
                          src={testimonial.avatar || "/placeholder.svg?height=40&width=40"}
                          alt={testimonial.name}
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-600 font-bold text-sm">
                          {testimonial.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-slate-900 text-sm md:text-sm lg:text-sm xl:text-base">
                        {testimonial.name}
                      </h4>
                      <p className="text-slate-600 text-xs md:text-xs lg:text-xs xl:text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-slate-700 leading-relaxed text-sm md:text-sm lg:text-sm xl:text-base mb-3">
                    {highlightKeywords(testimonial.content)}
                  </div>

                  {/* Visit Website Link - Only for Kyle and Ahmed */}
                  {testimonial.hasWebsite && (
                    <div className="pt-2 border-t border-slate-100">
                      <a
                        href={testimonial.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-700 text-xs md:text-xs lg:text-xs xl:text-sm font-medium transition-colors duration-200"
                      >
                        Visit the website
                      </a>
                    </div>
                  )}
                </motion.div>
              ))}
        </div>
        
        {/* Show More Button - Only for Mobile */}
        {isMobile && remainingCount > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {showAll ? (
                <>
                  Show Less
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </>
              ) : (
                <>
                  +{remainingCount} More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TestimonialSection;