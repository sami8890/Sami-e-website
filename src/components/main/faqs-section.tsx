"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from 'lucide-react'
import { Anton } from 'next/font/google'
import Link from "next/link"

// Use the same font as in the Hero component
const anton = Anton({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anton",
})

// FAQ data
const faqItems = [
  {
    id: 1,
    question: "What Technologies Do You Use?",
    answer: "We use React.js, Next.js, HTML, CSS, and JavaScript to build fast and modern websites.",
  },
  {
    id: 2,
    question: "How Much Does It Cost to Build a Website?",
    answer: "It depends on what features you need. We give you a custom price after understanding your project.",
  },
  {
    id: 3,
    question: "How Long Does It Take to Build a Website?",
    answer: "A simple website takes 1–2 weeks. Bigger or more complex sites may take 3–6 weeks.",
  },
  {
    id: 4,
    question: "Will My Website Be Mobile-Friendly?",
    answer: "Yes. We make sure your site looks great on mobile phones, tablets, and desktops.",
  },
  {
    id: 5,
    question: "Can I Update the Website Myself?",
    answer: "Yes. We make websites easy to update, and we can guide you on how to do it.",
  },
  {
    id: 6,
    question: "Do You Build SEO-Friendly Websites?",
    answer: "Yes. We follow SEO best practices so your site can rank better on Google.",
  },
  {
    id: 7,
    question: "Do You Offer Website Redesign Services?",
    answer: "Yes. We can redesign your old website to make it look modern and work better.",
  },
  {
    id: 8,
    question: "How Do You Ensure Website Security?",
    answer: "We follow safety standards to protect your website from security issues.",
  },
  {
    id: 9,
    question: "How Do You Handle Website Performance?",
    answer: "We use tools and methods that help your site load fast and run smoothly.",
  },
  {
    id: 10,
    question: "Do You Provide Ongoing Support?",
    answer: "Yes. We offer support and updates to keep your site running well over time.",
  },
]

interface FaqAccordionItemProps {
  item: {
    id: number
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
    <div
      className={`border rounded-lg overflow-hidden mb-5 transition-all duration-300 ${isOpen ? "border-emerald-500 bg-gray-900 bg-opacity-50 shadow-md" : "border-gray-800 hover:border-gray-700"
        }`}
    >
      <button
        className={`flex justify-between items-center w-full py-5 px-6 text-left focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 rounded-md ${isOpen ? "border-b-0" : ""
          }`}
        onClick={() => toggleItem(item.id)}
        aria-expanded={isOpen}
      >
        <h3 className={`text-xl font-medium ${isOpen ? "text-emerald-400" : "text-white"}`}>{item.question}</h3>
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
        style={{
          borderTop: isOpen ? "none" : undefined
        }}
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
  const [visibleItems, setVisibleItems] = useState(5)
  const [showContactPrompt, setShowContactPrompt] = useState(false)
  const sectionRef = useRef(null)

  // LinkedIn profile URL
  const linkedInUrl = "https://www.linkedin.com/in/muhammad-sami-gabol/"

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

  // Handle showing more FAQs
  const handleShowMore = () => {
    setVisibleItems(faqItems.length)
  }

  // Get the currently visible FAQs
  const displayedFaqs = faqItems.slice(0, visibleItems)

  return (
    <section ref={sectionRef} className="bg-black text-white py-24 px-4 relative overflow-hidden" id="faq">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 opacity-95"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column - Title and Introduction */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <h2 className={`${anton.className} text-4xl sm:text-5xl font-normal mb-8 uppercase tracking-wide`}>
                <span className="text-green-400 block">FREQUENTLY</span>
                <span className="text-white block">ASKED</span>
                <span className="text-white block">QUESTIONS</span>
              </h2>
              <p className="text-gray-300 text-lg mb-4">
                Can &apos;t find the answer you&apos;re looking for? Feel free to connect with me directly.
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
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="lg:col-span-8">
            {/* Results count */}
            <div className="mb-6 text-gray-400 text-sm">
              <p>
                Showing {displayedFaqs.length} {displayedFaqs.length === 1 ? "question" : "questions"}
                {displayedFaqs.length < faqItems.length ? ` of ${faqItems.length}` : ""}
              </p>
            </div>

            <div className="space-y-2">
              {displayedFaqs.map((item) => (
                <FaqAccordionItem key={item.id} item={item} isOpen={openItemId === item.id} toggleItem={toggleItem} />
              ))}
            </div>

            {/* See More button */}
            {visibleItems < faqItems.length && (
              <div className="mt-8 text-center">
                <button
                  onClick={handleShowMore}
                  className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full text-white font-medium transition duration-300 hover:from-emerald-600 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 shadow-lg"
                >
                  See More FAQs
                </button>
              </div>
            )}

            {/* Back to top button */}
            {displayedFaqs.length > 6 && openItemId === null && (
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
              <div className="mt-12 p-6 bg-gray-900 rounded-xl border border-emerald-500 border-opacity-30 shadow-lg">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Can&apos;t find what you&apos;re looking for?</h3>
                  <p className="text-gray-300 mb-4">
                    I&apos;m here to help! Connect with me directly and I&apos;ll answer all your questions.
                  </p>
                  <Link
                    href={linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full text-white font-medium transition duration-300 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 shadow-md"
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
