"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const TestimonialSection = () => {
    const [showAll, setShowAll] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [carouselView, setCarouselView] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)

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

        return () => clearTimeout(timer)
    }, [])

    // Sample testimonial data
    const testimonials = [
        {
            id: 1,
            name: "Dominik",
            username: "@domsyp",
            country: "DE",
            avatar: "/testimonials/girl1.png",
            content:
                "I love working with Sami, he is a great developer. He does very precise work and his delivery time is always super fast!",
            category: "development",
            rating: 5,
            project: "E-commerce Website",
        },
        {
            id: 2,
            name: "Henry Mouzon",
            username: "@henrymouzon",
            country: "US",
            avatar: "/testimonials/man1.png",
            content:
                "It was a pleasure working with Sami. I really loved the job he did for me, not only for the artistic ingenuity he displayed but also for the communication and friendliness he established. He delivered outstanding work. It was a great experience I won't forget, and I will hire him again in the near future. Thank you very much, Sami, and cheers.",
            category: "design",
            rating: 5,
            project: "Brand Redesign",
        },
        {
            id: 3,
            name: "Dayem Saeed",
            username: "@dayemsaeed808",
            country: "PK",
            avatar: "/testimonials/man5.png",
            content:
                "Sami was one of the best developers I've had the pleasure of working with. He completed the project even earlier than expected and exactly as I wanted it! I'll definitely be working with him again and would recommend him to anyone in need of a professional developer for their website.",
            category: "development",
            rating: 5,
            project: "SaaS Dashboard",
        },
        {
            id: 4,
            name: "Charles Benford",
            username: "@charles_benford",
            country: "CA",
            avatar: "/testimonials/man3.png",
            content:
                "This is the first time I've worked with Sami, and he continues to be a very kind and pleasant person. He has done an amazing job on my web development project. I would highly recommend hiring him for any front-end related work. Thank you again!",
            category: "development",
            rating: 5,
            project: "Payment System Fix",
        },
        {
            id: 5,
            name: "Amélie Laurent",
            username: "@Amélie Laurent",
            country: "UK",
            avatar: "/testimonials/girl2.png",
            content:
                "As a non-technical founder, I needed someone who could translate my vision into reality. The consulting sessions with Sami helped clarify our technical roadmap.",
            category: "consulting",
            rating: 5,
            project: "Tech Strategy",
        },
        {
            id: 6,
            name: "Akira Tanaka",
            username: "@akira_t",
            country: "JP",
            avatar: "/testimonials/man4.png",
            content:
                "The UI/UX redesign for our website was flawless. Sami conducted thorough user research before starting, which resulted in a 32% improvement in user engagement.",
            category: "development",
            rating: 5,
            project: "Website Redesign",
        },
        {
            id: 7,
            name: "Khalid H.",
            username: "@khalid_h",
            country: "RU",
            avatar: "/testimonials/man6.png",
            content:
                "We hired Sami to optimize our Shopify store that was loading slowly and hurting sales. The performance improvements were dramatic.",
            category: "development",
            rating: 5,
            project: "Shopify Optimization",
        },
        {
            id: 8,
            name: "Haienkei T.",
            username: "@haienkei",
            country: "NL",
            avatar: "/testimonials/girl4.png",
            content:
                "Sami is a very talented developer and puts a lot of energy into the project. I am very satisfied with our collaboration, a real blessing to know Sami.",
            category: "development",
            rating: 4,
            project: "Accessibility Audit",
        },
    ];


    // Determine how many testimonials to display (no filtering)
    const displayCount = showAll ? testimonials.length : isMobile ? 3 : 6
    const displayedTestimonials = testimonials.slice(0, displayCount)
    const remainingCount = testimonials.length - displayCount

    // Get flag emoji for country
    const getFlag = (country: string): string => {
        const flags: { [key: string]: string } = {
            US: "🇺🇸",
            UK: "🇬🇧",
            DE: "🇩🇪",
            CA: "🇨🇦",
            JP: "🇯🇵",
            PK: "🇵🇰",
            RU: "🇷🇺",
            AU: "🇦🇺",
            NL: "🇳🇱",
        }
        return flags[country] || ""
    }

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

    // Carousel navigation
    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    }

    return (
        <div id="testimonial" className="bg-black text-white py-16 px-4 md:px-8 relative">
            {/* Animated particles */}

            {/* Decorative elements */}

            {/* Background pattern */}

            {/* Header with improved design */}
            <div className="relative max-w-7xl mx-auto mb-10 text-center" data-aos="fade-up">
                {/* View toggle buttons - only visible on mobile */}
                <div className="flex justify-center gap-3 mt-4 mb-6 md:hidden">
                    <button
                        onClick={() => setCarouselView(false)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${!carouselView ? "bg-green-500 text-black" : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"}`}
                    >
                        Grid View
                    </button>
                    <button
                        onClick={() => setCarouselView(true)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${carouselView ? "bg-green-500 text-black" : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"}`}
                    >
                        Carousel View
                    </button>
                </div>
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400 mb-6">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                        <span>What clients say</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Need <span className="text-green-500">Testimonials</span> That
                        <br />
                        Build <span className="text-green-500">Trust?</span>
                    </h2>
                    <h3 className="text-xl text-zinc-300 mt-4 max-w-2xl mx-auto">
                        Hear from clients who have experienced firsthand the quality and dedication we bring to every project.
                    </h3>
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto mb-10">
                {isMobile && carouselView ? (
                    /* Carousel View - only shown on mobile when selected */
                    <div className="relative">
                        {/* Testimonial card */}
                        <div className="max-w-3xl mx-auto">
                            {isLoading ? (
                                <div className="bg-zinc-800/80 rounded-xl p-6 border border-zinc-700 animate-pulse h-48"></div>
                            ) : (
                                <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-xl p-6 border border-zinc-800 shadow-lg transition-all duration-500 hover:shadow-green-500/10 backdrop-blur-sm">
                                    {/* Large quote mark */}
                                        <div className="absolute -top-5 left-6 text-5xl text-green-500/20 font-serif">&quot;</div>

                                    <div className="text-base md:text-lg text-zinc-300 leading-relaxed italic mb-6 pt-3 text-center">
                                            &quot;{testimonials[activeIndex].content}&quot;
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-full overflow-hidden mr-3 relative border-2 border-green-500/30">
                                            <Image
                                                src={testimonials[activeIndex].avatar || "/placeholder.svg"}
                                                alt={testimonials[activeIndex].name}
                                                fill
                                                className="object-cover"
                                                sizes="48px"
                                            />
                                        </div>
                                        <div>
                                            <div className="flex items-center">
                                                <h4 className="font-bold text-base text-white">{testimonials[activeIndex].name}</h4>
                                                <span className="ml-2">{getFlag(testimonials[activeIndex].country)}</span>
                                            </div>
                                            <p className="text-zinc-400 text-xs">{testimonials[activeIndex].username}</p>
                                            <div className="flex mt-1">{renderStars(testimonials[activeIndex].rating)}</div>
                                        </div>
                                    </div>

                                        <div className="absolute -bottom-5 right-6 text-5xl text-green-500/20 font-serif rotate-180">&quot;</div>
                                </div>
                            )}
                        </div>

                        {/* Carousel navigation */}
                        <div className="flex justify-center mt-6 gap-3">
                            <button
                                onClick={prevTestimonial}
                                className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-green-500 text-white flex items-center justify-center transition-colors duration-300 border border-zinc-700"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <div className="flex items-center">
                                <span className="text-green-400 font-medium">{activeIndex + 1}</span>
                                <span className="mx-2 text-zinc-500">/</span>
                                <span className="text-zinc-400">{testimonials.length}</span>
                            </div>
                            <button
                                onClick={nextTestimonial}
                                className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-green-500 text-white flex items-center justify-center transition-colors duration-300 border border-zinc-700"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Testimonial indicators */}
                        <div className="flex justify-center mt-4 gap-1">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-green-500 w-5" : "bg-gray-600 hover:bg-gray-500"
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    /* Grid View - always shown on desktop, shown on mobile when selected */
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {isLoading
                            ? renderSkeletons()
                            : displayedTestimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="group bg-zinc-900 rounded-xl p-5 border border-zinc-800 shadow-md transition-all duration-300 relative h-auto testimonial-card hover:border-green-500/30"
                                >
                                    {/* Fiverr-like watermark */}
                                    <div className="absolute top-3 right-3 text-xs text-green-500 opacity-50">fiverr.</div>

                                    {/* Subtle quote marks */}
                                    <div className="absolute top-3 left-3 text-3xl text-green-500/10 font-serif">&quot;</div>
                                    <div className="absolute bottom-3 right-3 text-3xl text-green-500/10 font-serif rotate-180">&quot;</div>

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
                                                <h4 className="font-medium text-sm text-white">{testimonial.name}</h4>
                                                <span className="ml-1 text-sm">{getFlag(testimonial.country)}</span>
                                            </div>
                                            <p className="text-zinc-400 text-xs">{testimonial.username}</p>
                                        </div>
                                        <div className="ml-auto flex">{renderStars(testimonial.rating)}</div>
                                    </div>

                                    <div className="mb-4">
                                        <div className="text-zinc-300 text-sm leading-relaxed">{testimonial.content}</div>
                                    </div>

                                    <div className="text-xs text-zinc-500 pt-2 mt-2 border-t border-zinc-800 flex justify-between items-center">
                                        <span>{testimonial.project}</span>
                                        <span className="text-green-500 font-medium">{testimonial.category}</span>
                                    </div>
                                </div>
                            ))}
                    </div>
                )}

                {/* Show more/less button - only show in grid view */}
                {(!isMobile || !carouselView) && remainingCount > 0 && (
                    <div className="flex justify-center mt-8">
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
                                    Show Less
                                </>
                            ) : (
                                <>
                                    Show {remainingCount} More Testimonials
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
                    </div>
                )}
            </div>

            {/* Call to action with improved design - smaller version */}
            <div className="relative max-w-3xl mx-auto mt-16 text-center px-6 py-8 bg-zinc-900 rounded-xl border border-zinc-800 shadow-lg transition-all duration-300">
                <div className="relative z-10">
                    <h3 className="text-xl md:text-2xl font-bold mb-3">
                        Don&apos;t know where to <span className="text-green-500">start?</span>
                    </h3>
                    <p className="text-zinc-300 text-sm mb-6 max-w-xl mx-auto">
                        Book a free consultation call to discuss your project needs and explore how we can help transform your
                        digital presence.
                    </p>
                    <Link
                        href="https://calendly.com/your-username/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 px-6 py-3 rounded-full text-sm font-medium hover:bg-green-600 text-black inline-flex items-center"
                    >
                        <span>Get a Free Quote</span>
                        <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>
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
            <div className="text-center mt-16 text-xs text-zinc-500 max-w-2xl mx-auto">
                <p>All testimonials are from verified clients who have worked with us on real projects.</p>
                <p className="mt-2">
                    Want to learn more about our process?{" "}
                    <Link href="#" className="text-green-500 hover:text-green-400 underline">
                        Read our case studies
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default TestimonialSection