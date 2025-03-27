"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown, MessageCircle, Search, HelpCircle, Settings, DollarSign, Zap, Linkedin, Mail } from "lucide-react"
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
    category: "services",
    question: "What services do you offer?",
    answer:
      "We provide end-to-end web development services including responsive website design, custom web applications, e-commerce solutions, content management systems, SEO optimization, and ongoing maintenance and support.",
  },
  {
    id: 2,
    category: "process",
    question: "How long does it take to build a website?",
    answer:
      "Project timelines vary depending on complexity and scope. A simple website can be completed in 2-4 weeks, while more complex projects may take 8-12 weeks. During our consultation, we'll provide a detailed timeline tailored to your specific needs.",
  },
  {
    id: 3,
    category: "pricing",
    question: "What is your pricing structure?",
    answer:
      "We offer competitive pricing based on project requirements. Our packages start at $2,500 for basic websites and scale according to functionality and complexity. We provide detailed quotes after understanding your specific needs during our initial consultation.",
  },
  {
    id: 4,
    category: "services",
    question: "Do you offer website maintenance?",
    answer:
      "Yes, we offer ongoing maintenance packages to ensure your website remains secure, up-to-date, and performing optimally. Our maintenance plans include regular updates, security monitoring, performance optimization, and technical support.",
  },
  {
    id: 5,
    category: "services",
    question: "What makes your websites different?",
    answer:
      "Our websites combine stunning design with exceptional functionality. We focus on creating user-friendly experiences that drive conversions while ensuring your site stands out with unique, brand-aligned visuals. Additionally, all our websites are fully responsive, SEO-optimized, and built with scalability in mind.",
  },
  {
    id: 6,
    category: "process",
    question: "What is your design process?",
    answer:
      "Our design process begins with a thorough discovery phase to understand your brand, goals, and target audience. We then create wireframes and mockups for your approval before moving into development. Throughout the process, we maintain open communication and provide regular updates, ensuring your vision comes to life exactly as you imagined.",
  },
  {
    id: 7,
    category: "process",
    question: "Can you redesign my existing website?",
    answer:
      "We specialize in website redesigns that transform outdated sites into modern, high-performing digital assets. Our process involves analyzing your current site's strengths and weaknesses, preserving what works well, and implementing improvements to enhance user experience, performance, and conversion rates.",
  },
  {
    id: 8,
    category: "pricing",
    question: "Do you offer payment plans?",
    answer:
      "Yes, we offer flexible payment options to accommodate various budgets. Typically, we require a deposit to begin work, with remaining payments scheduled at key project milestones. For larger projects, we can discuss custom payment arrangements that work for your business.",
  },
  {
    id: 9,
    category: "process",
    question: "How long does it take to complete a website?",
    answer:
      "Typically, a portfolio website takes 2-3 weeks, while a landing page can be completed in 1-2 weeks. Enterprise projects may take longer depending on complexity and requirements.",
  },
  {
    id: 10,
    category: "services",
    question: "Do you provide hosting and domain services?",
    answer:
      "Yes, we offer hosting and domain registration services. We can also help you set up your website on your existing hosting if you prefer.",
  },
  {
    id: 11,
    category: "services",
    question: "Can I update the website myself after it's built?",
    answer:
      "We build websites with user-friendly content management systems that allow you to make updates without technical knowledge. We also provide training on how to manage your site.",
  },
  {
    id: 12,
    category: "process",
    question: "What information do you need to get started?",
    answer:
      "To begin, we'll need your brand guidelines, content (text and images), and any specific requirements you have. We'll guide you through the process with a detailed questionnaire.",
  },
  {
    id: 13,
    category: "services",
    question: "Do you offer ongoing maintenance?",
    answer:
      "Yes, we offer monthly maintenance packages to keep your website secure, updated, and performing optimally. This includes regular backups, security checks, and technical support.",
  },
]

// Get unique categories
const categories = ["all", ...new Set(faqItems.map((item) => item.category))]

// Category icons mapping
const categoryIcons = {
  all: HelpCircle,
  services: Zap,
  process: Settings,
  pricing: DollarSign,
}

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

  // Get the appropriate icon for the category
  const CategoryIcon = categoryIcons[item.category as keyof typeof categoryIcons] || HelpCircle

  return (
    <div
      id="faqs"
      className="border border-gray-800 rounded-lg overflow-hidden mb-4 transition-all duration-300 hover:border-gray-700"
    >
      <button
        className="flex justify-between items-center w-full py-5 px-6 text-left focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 rounded-md"
        onClick={() => toggleItem(item.id)}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-full ${isOpen ? "bg-emerald-500 bg-opacity-20" : "bg-gray-800"}`}>
            <CategoryIcon size={18} className={`${isOpen ? "text-emerald-400" : "text-gray-400"}`} />
          </div>
          <h3 className="text-xl font-medium text-white">{item.question}</h3>
        </div>
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
  const [searchQuery, setSearchQuery] = useState("")
  const sectionRef = useRef(null)

  // LinkedIn profile URL
  const linkedInUrl = "https://www.linkedin.com/in/muhammad-sami-gabol/"

  // Filter items based on category and search query
  useEffect(() => {
    let results = faqItems

    // Filter by category
    if (selectedCategory !== "all") {
      results = results.filter((item) => item.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase()
      results = results.filter(
        (item) => item.question.toLowerCase().includes(query) || item.answer.toLowerCase().includes(query),
      )
    }

    setFilteredItems(results)
    // Close any open items when changing filters
    setOpenItemId(null)
  }, [selectedCategory, searchQuery])

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
                  className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <Linkedin size={18} />
                  <span>Connect on LinkedIn</span>
                </Link>
              </div>

              {/* Search box */}
              <div className="relative mb-8">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-800 rounded-lg bg-gray-900 bg-opacity-50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search"
                  >
                    <span className="text-gray-400 hover:text-white">✕</span>
                  </button>
                )}
              </div>

              {/* Category filters for mobile only */}
              <div className="flex flex-wrap gap-2 mb-8 lg:hidden">
                {categories.map((category) => {
                  const CategoryIcon = categoryIcons[category as keyof typeof categoryIcons]
                  return (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 ${selectedCategory === category
                          ? "bg-emerald-500 text-white"
                          : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                        }`}
                    >
                      <CategoryIcon size={16} />
                      {category}
                    </button>
                  )
                })}
              </div>

              {/* Contact card */}
              <div className="hidden lg:block mt-8 p-6 border border-gray-800 rounded-xl bg-gray-900 bg-opacity-50">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center mr-4">
                    <MessageCircle size={20} className="text-black" />
                  </div>
                  <h3 className="text-xl font-medium text-white">Get In Touch</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Have questions or ready to start your project? Connect with me directly.
                </p>
                <div className="space-y-3">
                  <Link
                    href={linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center w-full justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full text-white font-medium transition duration-300 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50"
                  >
                    <Linkedin size={18} />
                    Connect on LinkedIn
                  </Link>
                  <Link
                    href="#contact"
                    className="inline-flex items-center w-full justify-center gap-2 px-5 py-2.5 border border-emerald-500 rounded-full text-emerald-400 font-medium transition duration-300 hover:bg-emerald-500 hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50"
                  >
                    <Mail size={18} />
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
              {categories.map((category) => {
                const CategoryIcon = categoryIcons[category as keyof typeof categoryIcons]
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium capitalize transition-all duration-300 ${selectedCategory === category
                        ? "bg-emerald-500 text-white"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                      }`}
                  >
                    <CategoryIcon size={18} />
                    {category}
                  </button>
                )
              })}
            </div>

            {/* Results count */}
            <div className="mb-6 text-gray-400 text-sm">
              {filteredItems.length === 0 ? (
                <p>No questions found. Try a different search or category.</p>
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
                  <HelpCircle size={48} className="mx-auto text-gray-600 mb-4" />
                  <p className="text-gray-400 text-lg">No questions found with your current filters.</p>
                  <button
                    onClick={() => {
                      setSelectedCategory("all")
                      setSearchQuery("")
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
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-emerald-500 bg-opacity-20 p-3 rounded-full">
                      <MessageCircle size={24} className="text-emerald-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">
                      Can&apos;t find what you&apos;re looking for?
                    </h3>
                    <p className="text-gray-300 mb-4">
                      I&apos;m here to help! Connect with me directly and I&apos;ll answer all your questions.
                    </p>
                    <Link
                      href={linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full text-white font-medium transition duration-300 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50"
                    >
                      <Linkedin size={18} />
                      Connect on LinkedIn
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

