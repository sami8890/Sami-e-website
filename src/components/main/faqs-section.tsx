"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Anton } from "next/font/google"
import Link from "next/link"

// Use the same font as in the Hero component
const anton = Anton({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anton",
})

// FAQ data with categories
const faqItems = [
  {
    id: 1,
    category: "technology",
    question: "What Technologies Do You Use?",
    answer: "We use React.js, Next.js, HTML, CSS, and JavaScript to build fast and modern websites.",
  },
  {
    id: 2,
    category: "pricing",
    question: "How Much Does It Cost to Build a Website?",
    answer: "It depends on what features you need. We give you a custom price after understanding your project.",
  },
  {
    id: 3,
    category: "process",
    question: "How Long Does It Take to Build a Website?",
    answer: "A simple website takes 1–2 weeks. Bigger or more complex sites may take 3–6 weeks.",
  },
  {
    id: 4,
    category: "features",
    question: "Will My Website Be Mobile-Friendly?",
    answer: "Yes. We make sure your site looks great on mobile phones, tablets, and desktops.",
  },
  {
    id: 5,
    category: "features",
    question: "Can I Update the Website Myself?",
    answer: "Yes. We make websites easy to update, and we can guide you on how to do it.",
  },
  {
    id: 6,
    category: "features",
    question: "Do You Build SEO-Friendly Websites?",
    answer: "Yes. We follow SEO best practices so your site can rank better on Google.",
  },
  {
    id: 7,
    category: "services",
    question: "Do You Offer Website Redesign Services?",
    answer: "Yes. We can redesign your old website to make it look modern and work better.",
  },
  {
    id: 8,
    category: "features",
    question: "How Do You Ensure Website Security?",
    answer: "We follow safety standards to protect your website from security issues.",
  },
  {
    id: 9,
    category: "features",
    question: "How Do You Handle Website Performance?",
    answer: "We use tools and methods that help your site load fast and run smoothly.",
  },
  {
    id: 10,
    category: "services",
    question: "Do You Provide Ongoing Support?",
    answer: "Yes. We offer support and updates to keep your site running well over time.",
  },
]

// Get unique categories
const categories = ["all", ...new Set(faqItems.map((item) => item.category))]

interface FaqAccordionItemProps {
  item: {
    id: number
    category: string
    question: string
    answer: string
  }
  isOpen: boolean
  toggleItem: (id: number) => void
}

const FaqAccordionItem = ({ item, isOpen, toggleItem }: FaqAccordionItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const contentHeight = isOpen && contentRef.current ? contentRef.current.scrollHeight : 0

  return (
    <div className="border border-gray-800 rounded-lg overflow-hidden mb-4 transition-all duration-300 hover:border-gray-700">
      <button
        className="flex justify-between items-center w-full py-5 px-6 text-left focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 rounded-md"
        onClick={() => toggleItem(item.id)}
        aria-expanded={isOpen}
      >
        <h3 className="text-xl font-medium text-white">{item.question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex-shrink-0 ml-4 ${isOpen ? "text-emerald-400" : "text-gray-400"}`}
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? contentHeight : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div ref={contentRef} className="px-6 pb-6 text-gray-300 text-lg leading-relaxed">
          <p>{item.answer}</p>
        </div>
      </motion.div>
    </div>
  )
}

export default function FaqSection() {
  const [openItemId, setOpenItemId] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [filteredItems, setFilteredItems] = useState(faqItems)
  const [showContactPrompt, setShowContactPrompt] = useState(false)
  const sectionRef = useRef(null)

  // LinkedIn profile URL
  const linkedInUrl = "https://www.linkedin.com/in/muhammad-sami-gabol/"

  // Filter items based on category
  useEffect(() => {
    let results = faqItems

    // Filter by category
    if (selectedCategory !== "all") {
      results = results.filter((item) => item.category === selectedCategory)
    }

    setFilteredItems(results)
    // Close any open items when changing filters
    setOpenItemId(null)
  }, [selectedCategory])

  type ToggleItemFunction = (id: number) => void

  const toggleItem: ToggleItemFunction = (id) => {
    setOpenItemId(openItemId === id ? null : id)
  }

  // Track if user has scrolled through multiple FAQs without finding an answer
  useEffect(() => {
    let openCount = 0
    const handleOpenCounter = () => {
      if (openItemId !== null) {
        openCount++
        if (openCount >= 3) {
          setShowContactPrompt(true)
        }
      }
    }
    handleOpenCounter()
    // Cleanup function
    return () => {
      openCount = 0
    }
  }, [openItemId])

  return (
    <section ref={sectionRef} className="bg-black text-white py-24 px-4 relative overflow-hidden" id="faq">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-90"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle, rgba(16, 185, 129, 0.1) 1px, transparent 1px),
              linear-gradient(to right, #1a1a1a 1px, transparent 1px),
              linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px, 50px 50px, 50px 50px",
          }}
        ></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - Title and Introduction */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <h2 className={`${anton.className} text-4xl sm:text-5xl font-normal mb-6 uppercase`}>
                <span className="text-emerald-400 block">FREQUENTLY</span>
                <span className="text-white block">ASKED</span>
                <span className="text-white block">QUESTIONS!</span>
              </h2>
              <p className="text-gray-300 text-lg mb-4">
                Can&apos;t find the answer you&apos;re looking for?
                <Link
                  href="#contact"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors underline ml-1"
                >
                  Reach out
                </Link>
                to us and we will get in touch with you.
              </p>

              {/* LinkedIn Link */}
              <div className="mb-8">
                <Link
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  Connect on LinkedIn
                </Link>
              </div>

              {/* Category filters for mobile only */}
              <div className="flex flex-wrap gap-2 mb-8 lg:hidden">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 ${selectedCategory === category
                        ? "bg-emerald-500 text-white"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Contact card */}
              <div className="hidden lg:block mt-8 p-6 border border-gray-800 rounded-xl bg-gray-900 bg-opacity-50">
                <h3 className="text-xl font-medium text-white mb-4">Get In Touch</h3>
                <p className="text-gray-300 mb-4">
                  Have questions or ready to start your project? Connect with me directly.
                </p>
                <div className="space-y-3">
                  <Link
                    href={linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full justify-center px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full text-white font-medium transition duration-300 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50"
                  >
                    Connect on LinkedIn
                  </Link>
                  <Link
                    href="#contact"
                    className="inline-flex w-full justify-center px-5 py-2.5 border border-emerald-500 rounded-full text-emerald-400 font-medium transition duration-300 hover:bg-emerald-500 hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50"
                  >
                    Send a Message
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="lg:col-span-8">
            {/* Category filters for desktop */}
            <div className="hidden lg:flex flex-wrap gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-3 rounded-full text-sm font-medium capitalize transition-all duration-300 ${selectedCategory === category
                      ? "bg-emerald-500 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Results count */}
            <div className="mb-6 text-gray-400 text-sm">
              {filteredItems.length === 0 ? (
                <p>No questions found. Try a different category.</p>
              ) : (
                <p>
                  Showing {filteredItems.length} {filteredItems.length === 1 ? "question" : "questions"}{" "}
                  {selectedCategory !== "all" ? `in ${selectedCategory}` : ""}
                </p>
              )}
            </div>

            <div className="space-y-2">
              {filteredItems.map((item) => (
                <FaqAccordionItem key={item.id} item={item} isOpen={openItemId === item.id} toggleItem={toggleItem} />
              ))}

              {filteredItems.length === 0 && (
                <div className="text-center py-12 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-800">
                  <p className="text-gray-400 text-lg">No questions found with your current filters.</p>
                  <button
                    onClick={() => {
                      setSelectedCategory("all")
                    }}
                    className="mt-4 px-4 py-2 bg-gray-800 rounded-md text-gray-300 hover:bg-gray-700 transition-colors"
                  >
                    Reset filters
                  </button>
                </div>
              )}
            </div>

            {/* Pagination for large number of results */}
            {filteredItems.length > 5 && openItemId === null && (
              <div className="mt-8 text-center">
                <button
                  className="px-6 py-2 border border-emerald-500 text-emerald-400 rounded-full hover:bg-emerald-500 hover:bg-opacity-10 transition-colors"
                  onClick={() => {
                    // Scroll to top of FAQ section
                    if (sectionRef.current) {
                      ; (sectionRef.current as HTMLElement).scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  Back to top
                </button>
              </div>
            )}

            {/* Contact prompt */}
            {showContactPrompt && (
              <div className="mt-12 p-6 bg-gray-900 rounded-xl border border-emerald-500 border-opacity-30">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Can&apos;t find what you&apos;re looking for?</h3>
                  <p className="text-gray-300 mb-4">
                    I&apos;m here to help! Connect with me directly and I&apos;ll answer all your questions.
                  </p>
                  <Link
                    href={linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full text-white font-medium transition duration-300 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50"
                  >
                    Connect on LinkedIn
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
