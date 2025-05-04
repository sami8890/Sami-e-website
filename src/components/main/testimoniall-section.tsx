"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Muhammad Ibrahim",
      role: "Top 5% in Pakistan for Personal Branding",
      avatar: "/testimonial/ibrahim.png",
      content:
        "When I think of getting a Website or Portfolio, I think of Muhammad Sami Gobal.He's the real deal. Clean designs, smooth flow, he gets it just right. Whether it's business, blogging, or personal branding, he's got you. His work is fast, creative, and always on point. Explains things simply, even if you're not tech-savvy. SEO-friendly sites that actually get traffic and conversions. Super friendly to work with, no stress at all. I've seen him level up brands like it's magic. If you want results, trust me, go with Sami. I 100000000000000% recommend Muhammad Sami",
      shortContent:
        "When I think of getting a Website or Portfolio, I think of Muhammad Sami Gobal. He's the real deal. Clean designs, smooth flow, he gets it just right. Whether it's business, blogging, or personal branding, he's got you...",
      rating: 5,
      source: "linkedin",
      videoUrl: "#ibrahim-video",
    },
    {
      id: 2,
      name: "Ahmed Hassan",
      role: "CEO of Contexmedia ",
      avatar: "/testimonial/ahmed.png",
      content:
        "I am thrilled with the website Muhammad Sami Gabol created for me! From start to finish, his professionalism, creativity, and attention to detail were outstanding. He took the time to understand my vision and transformed it into a stunning, fully functional website that exceeded all my expectations. I highly recommend Muhammad Sami Gabol and would work with him again. Thank you, Sami, for your amazing work.",
      shortContent:
        "I am thrilled with the website Muhammad Sami Gabol created for me! From start to finish, his professionalism, creativity, and attention to detail were outstanding. He took the time to understand my vision...",
      rating: 5,
      source: "linkedin",
      videoUrl: "#ahmed-video",
    },
    {
      id: 3,
      name: "Kyle Nianga",
      role: "CEO of Contntr",
      avatar: "/testimonial/kyle.png",
      content:
        "Sami absolutely crushed it with my website in less than a week. He took the time to really understand what I wanted and brought it to life in a way that felt personal and unique. The whole process was smooth, and I could tell they were fully invested in making sure everything was perfect. I honestly couldn't be more happy with the result. If you need a web developer who cares about the details, I highly recommend Sami.",
      shortContent:
        "Sami absolutely crushed it with my website in less than a week. He took the time to really understand what I wanted and brought it to life in a way that felt personal and unique. The whole process was smooth...",
      rating: 5,
      source: "linkedin",
      videoUrl: "#kyle-video",
    },
    {
      id: 5,
      name: "Henry Mouzon",
      username: "@henrymouzon",
      role: "Business Owner",
      avatar: "/testimonial/man.png",
      content:
        "It was a pleasure working with Sami. I really loved the job he did for me, and the design was so beautiful. He delivered outstanding work. It was a great experience I won't forget, and I will hire him again in the near future. Thank you very much, Sami, and cheers.",
      shortContent:
        "It was a pleasure working with Sami. I really loved the job he did for me, and the design was so beautiful. He delivered outstanding work. It was a great experience I won't forget...",
      rating: 5,
      source: "fiverr",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedIds, setExpandedIds] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const toggleExpand = (id: number) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

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
    }, 1500);

    setIsVisible(true);

    return () => clearTimeout(timer);
  }, []);

  const highlightKeywords = (content: string) => {
    const keywords = [
      "great developer",
      "outstanding",
      "professional",
      "amazing",
      "beautiful",
      "precise",
      "super fast",
      "pleasure",
      "best developers",
      "highly recommend",
      "amazing job",
      "earlier than expected",
      "exactly as I wanted",
      "very kind",
      "pleasant",
      "talented",
      "satisfied",
      "blessing",
      "thrilled",
      "professionalism",
      "creativity",
      "attention to detail",
      "exceeded all my expectations",
      "real deal",
      "clean designs",
      "smooth flow",
      "creative",
      "on point",
      "SEO-friendly",
      "level up brands",
      "crushed it",
      "personal and unique",
      "cares about the details",
      "fully invested",
      "perfect",
      "couldn't be more happy",
    ];

    let highlightedContent = content;

    keywords.forEach((keyword) => {
      const regex = new RegExp(`(${keyword})`, "gi");
      highlightedContent = highlightedContent.replace(
        regex,
        '<span class="font-medium text-green-300 border-b border-green-300/30 px-0.5">$1</span>'
      );
    });

    return <div dangerouslySetInnerHTML={{ __html: highlightedContent }} />;
  };

  const displayCount = showAll ? testimonials.length : isMobile ? 3 : 6;
  const displayedTestimonials = testimonials.slice(0, displayCount);
  const remainingCount = testimonials.length - displayCount;

  const renderStars = (rating: number): JSX.Element[] => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <svg
          key={index}
          className={`w-4 h-4 ${index < rating ? "text-green-400" : "text-zinc-600"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-.118L2.98 8.72c-.783-.57-.38-1.81.588-.181h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      ));
  };

  const renderSkeletons = () => {
    return Array(6)
      .fill(0)
      .map((_, index) => (
        <div
          key={`skeleton-${index}`}
          className="bg-zinc-800 rounded-xl p-4 border border-zinc-700 animate-pulse"
        >
          <div className="flex items-start mb-3">
            <div className="w-10 h-10 bg-zinc-700 rounded-full mr-3"></div>
            <div className="flex-1">
              <div className="h-4 bg-zinc-700 rounded w-1/3 mb-2"></div>
              <div className="h-3 bg-zinc-700 rounded w-1/4"></div>
            </div>
          </div>
          <div className="space-y-2 mb-3">
            <div className="h-3 bg-zinc-700 rounded w-full"></div>
            <div className="h-3 bg-zinc-700 rounded w-full"></div>
            <div className="h-3 bg-zinc-700 rounded w-3/4"></div>
          </div>
        </div>
      ));
  };

  return (
    <div id="testimonial" className="bg-black text-white py-16 px-4 md:px-8 relative">
      <motion.div
        className="relative max-w-5xl mx-auto mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7 }}
      >
        <div className="space-y-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
            <span>Client Testimonials</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold"
          >
            What <span className="text-green-500">Clients</span> Say
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto"
          >
            Real feedback from satisfied clients who have experienced the quality of my work
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center space-x-4 text-xs text-zinc-400 pt-2"
          >
           

          </motion.div>
        </div>
      </motion.div>

      <div className="relative max-w-7xl mx-auto mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative">
          {isLoading
            ? renderSkeletons()
            : displayedTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group bg-zinc-900 rounded-xl p-5 border border-zinc-800 shadow-md relative h-auto testimonial-card transition-all duration-300
                    hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/5 hover:-translate-y-1
                    before:content-['"'] before:absolute before:top-2 before:left-3 before:text-3xl before:font-serif 
                    before:text-green-500/10 before:opacity-70 before:transition-opacity before:duration-300
                    after:content-['"'] after:absolute after:bottom-3 after:right-3 after:text-3xl after:font-serif 
                    after:text-green-500/10 after:opacity-70 after:rotate-180 after:transition-opacity after:duration-300
                    hover:before:opacity-100 hover:after:opacity-100
                  `}
                style={{
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  willChange: "transform, opacity, filter",
                }}
              >
                <div
                  className={`absolute top-3 right-3 text-xs font-bold ${testimonial.source === "linkedin"
                      ? "text-blue-500 opacity-70"
                      : "text-green-500 opacity-50"
                    }`}
                >
                  {testimonial.source === "linkedin" ? "linkedin" : "fiverr."}
                </div>

                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3 relative bg-zinc-800 flex items-center justify-center border border-zinc-700 group-hover:border-green-500/30 transition-colors duration-300 group-hover:scale-105">
                    {testimonial.avatar ? (
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    ) : (
                      <span className="text-lg font-bold">
                        {testimonial.name.charAt(0)}
                      </span>
                    )}
                  </div>

                  <div>
                    <div className="flex items-center">
                      <h4 className="font-bold text-sm text-white">
                        {testimonial.name}
                      </h4>
                    </div>
                    <p className="text-zinc-400 text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                  <div className="ml-auto flex">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-zinc-100 text-sm leading-relaxed font-normal tracking-wide">
                    {expandedIds.includes(testimonial.id)
                      ? highlightKeywords(testimonial.content)
                      : highlightKeywords(testimonial.shortContent)}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(testimonial.id);
                      }}
                      className="text-green-400 hover:text-green-300 text-xs font-medium mt-3 flex items-center bg-green-500/5 px-2 py-1 rounded-md transition-all hover:bg-green-500/10"
                    >
                      {expandedIds.includes(testimonial.id) ? (
                        <>
                          Read less <span className="ml-1">↑</span>
                        </>
                      ) : (
                        <>
                          Read more <span className="ml-1">↓</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {remainingCount > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center mt-8"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg shadow-green-500/20 transition-all duration-300 flex items-center"
            >
              {showAll ? (
                <>
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                  <span className="font-bold">Show Less</span>
                </>
              ) : (
                <>
                  <span className="font-bold">
                    Show {remainingCount} More Testimonials
                  </span>
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TestimonialSection;
