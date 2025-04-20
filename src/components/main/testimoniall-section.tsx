"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const TestimonialSection = () => {
  // 1. Reorder testimonials to put Muhammad Ibrahim first
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
      category: "WEBsite-development",
      rating: 5,
      project: "LinkedIn Profile Optimization",
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
      category: "Webste development",
      rating: 5,
      project: "Contexmedia Website",
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
      category: "development",
      rating: 5,
      project: "Contntr Website",
      source: "linkedin",
      videoUrl: "#kyle-video", 
    },
    {
      id: 4,
      name: "Dominik",
      role: "Creative Director",
      avatar: "/testimonial/girl.png",
      content:
        "I love working with Sami, he is a great developer. He does very precise work and his delivery time is always super fast!",
      shortContent:
        "I love working with Sami, he is a great developer. He does very precise work and his delivery time is always super fast!",
      category: "development",
      rating: 4.5,
      project: "Portfolio",
      source: "fiverr",
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
      category: "design",
      rating: 5,
      project: "Upadte the design of my website",
      source: "fiverr",
    },
  ]

  // 2. Remove carousel view functionality
  // Remove the state for carouselView
  const [showAll, setShowAll] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [expandedIds, setExpandedIds] = useState<number[]>([])
  const [isVisible, setIsVisible] = useState(false)

  const toggleExpand = (id: number) => {
    setExpandedIds((prev) => (prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]))
  }

  // Check if device is mobile on mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    // Set visibility for animations
    setIsVisible(true)

    return () => clearTimeout(timer)
  }, [])

  // Function to highlight keywords in testimonial content
  const highlightKeywords = (content: string) => {
    // Keywords to highlight
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
    ]

    let highlightedContent = content

    // Replace keywords with highlighted versions
    keywords.forEach((keyword) => {
      const regex = new RegExp(`(${keyword})`, "gi")
      highlightedContent = highlightedContent.replace(regex, '<span class="font-semibold text-green-400">$1</span>')
    })

    return <div dangerouslySetInnerHTML={{ __html: highlightedContent }} />
  }

  // Determine how many testimonials to display (no filtering)
  const displayCount = showAll ? testimonials.length : isMobile ? 3 : 6
  const displayedTestimonials = testimonials.slice(0, displayCount)
  const remainingCount = testimonials.length - displayCount

  // Render star rating
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
      ))
  }

  // Loading skeleton for testimonials
  const renderSkeletons = () => {
    return Array(6)
      .fill(0)
      .map((_, index) => (
        <div key={`skeleton-${index}`} className="bg-zinc-800 rounded-xl p-4 border border-zinc-700 animate-pulse">
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
      ))
  }

  return (
    <div id="testimonial" className="bg-black text-white py-16 px-4 md:px-8 relative">
      {/* Header with improved design */}
      <motion.div
        className="relative max-w-7xl mx-auto mb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7 }}
      >
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400 mb-6"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
            <span>What clients say</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="text-green-500 font-extrabold">Proven</span> Success
            <br />
            <span className="text-green-500 font-extrabold">Stories</span>
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-zinc-300 mt-4 max-w-2xl mx-auto"
          >
            Hear from clients who have experienced <span className="font-semibold text-white">firsthand</span> the
            quality and dedication we bring to <span className="font-semibold text-green-400">every project</span>.
          </motion.h3>
        </div>
      </motion.div>

      <div className="relative max-w-7xl mx-auto mb-10">
        {/* Grid View - always shown */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative">
          {isLoading
            ? renderSkeletons()
            : displayedTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group bg-zinc-900 rounded-xl p-5 border border-zinc-800 shadow-md relative h-auto testimonial-card hover:border-green-500/30 ${hoveredId !== null && hoveredId !== testimonial.id ? "blur-sm opacity-50 scale-98" : ""
                  }`}
                onMouseEnter={() => setHoveredId(testimonial.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  willChange: "transform, opacity, filter",
                }}
              >
                {/* Source watermark - LinkedIn or Fiverr */}
                <div
                  className={`absolute top-3 right-3 text-xs font-bold ${testimonial.source === "linkedin" ? "text-blue-500 opacity-70" : "text-green-500 opacity-50"
                    }`}
                >
                  {testimonial.source === "linkedin" ? "linkedin" : "fiverr."}
                </div>

                {/* Subtle quote marks */}
                <div className="absolute top-3 left-3 text-3xl text-green-500/10 font-serif">&quot;</div>
                <div className="absolute bottom-3 right-3 text-3xl text-green-500/10 font-serif rotate-180">
                  &quot;
                </div>

                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3 relative bg-zinc-800 flex items-center justify-center border border-zinc-700 group-hover:border-green-500/30 transition-colors duration-300">
                    {testimonial.avatar ? (
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    ) : (
                      <span className="text-lg font-bold">{testimonial.name.charAt(0)}</span>
                    )}
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h4 className="font-bold text-sm text-white">{testimonial.name}</h4>
                    </div>
                    <p className="text-zinc-400 text-xs">{testimonial.role}</p>
                  </div>
                  <div className="ml-auto flex">{renderStars(testimonial.rating)}</div>
                </div>

                <div className="mb-4">
                  <div className="text-zinc-300 text-sm leading-relaxed">
                    {expandedIds.includes(testimonial.id)
                      ? highlightKeywords(testimonial.content)
                      : highlightKeywords(testimonial.shortContent)}
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleExpand(testimonial.id)
                      }}
                      className="text-green-400 hover:text-green-300 text-xs font-medium mt-1 flex items-center"
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

                <div className="text-xs text-zinc-500 pt-2 mt-2 border-t border-zinc-800 flex justify-between items-center">
                  <span className="font-medium">{testimonial.project}</span>
                  <span className="text-green-500 font-bold">{testimonial.category}</span>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Show more/less button */}
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                  <span className="font-bold">Show Less</span>
                </>
              ) : (
                <>
                  <span className="font-bold">Show {remainingCount} More Testimonials</span>
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
          </motion.div>
        )}

        {/* Video Testimonials Button - More subtle design */}
        {/* <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center mt-10"
        >
          <Link
            href="/testimonial" // Replace with actual video testimonials URL
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-zinc-900 hover:bg-zinc-800 text-white px-5 py-2 rounded-lg text-sm font-medium border border-zinc-700 hover:border-green-500/30 transition-all duration-300 flex items-center gap-2"
          >
            <div className="bg-green-500/20 rounded-full p-1 group-hover:bg-green-500/30 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green-400"
              >
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
            <span>Watch Video Testimonials</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-green-400 group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </motion.div> */}
      </div>  
      {/* Animation keyframes */}
      <style jsx>{`
        .testimonial-card {
          height: fit-content;
          transition: all 0.3s ease-in-out;
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        [data-aos="fade-up"] {
          animation: fadeUp 0.8s ease-out forwards;
        }
      `}</style>

      {/* Small footer note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center mt-16 text-xs text-zinc-500 max-w-2xl mx-auto"
      >
        <p>
          All testimonials are from <span className="font-medium text-zinc-400">verified clients</span> who have worked
          with us on real projects.
        </p>
        <span className="font-medium text-zinc-200">You can check in my linkdein profile to see the reviews</span>

      </motion.div>
    </div>
  )
}

export default TestimonialSection
