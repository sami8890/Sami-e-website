"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "How do I begin the web development process?",
        answer:
          "We start with a detailed consultation to understand your vision, goals, and requirements. Our team then creates a comprehensive project plan tailored to your needs.",
        tags: ["process", "startup"],
      },
      {
        question: "What is your typical project timeline?",
        answer:
          "Project timelines vary based on complexity. Most projects take 6-12 weeks from concept to launch, with clear milestones throughout the process.",
        tags: ["timeline", "process"],
      },
    ],
  },
  {
    category: "Technology",
    questions: [
      {
        question: "Which technologies do you use?",
        answer:
          "We utilize cutting-edge technologies including React, Next.js, and Node.js, ensuring your website is fast, secure, and scalable.",
        tags: ["tech", "development"],
      },
      {
        question: "How do you ensure mobile responsiveness?",
        answer:
          "We follow a mobile-first approach, testing across multiple devices and screen sizes to guarantee perfect responsiveness.",
        tags: ["mobile", "design"],
      },
    ],
  },
  {
    category: "Support & Maintenance",
    questions: [
      {
        question: "What kind of support do you provide?",
        answer:
          "We offer 24/7 technical support, regular maintenance updates, and performance monitoring to keep your website running smoothly.",
        tags: ["support", "maintenance"],
      },
      {
        question: "How do you handle security updates?",
        answer:
          "Regular security audits, automated backups, and immediate vulnerability patches ensure your website remains secure.",
        tags: ["security", "maintenance"],
      },
    ],
  },
]

const backgroundVariants = {
  animate: {
    backgroundPosition: ["0% 0%", "100% 100%"],
    transition: {
      duration: 20,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse" as const,
    },
  },
}

interface OpenQuestions {
  [key: string]: boolean
}

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("Getting Started")
  const [openQuestions, setOpenQuestions] = useState<OpenQuestions>({})

  const toggleQuestion = (categoryIndex: number, questionIndex: number): void => {
    const key: string = `${categoryIndex}-${questionIndex}`
    setOpenQuestions(
      (prev: OpenQuestions): OpenQuestions => ({
        ...prev,
        [key]: !prev[key],
      }),
    )
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-950 to-black text-white py-20">
      <motion.div
        className="absolute inset-0 bg-[length:400%_400%] bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-green-500/5"
        variants={backgroundVariants}
        animate="animate"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold mb-6">
            Need
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500"> Help?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300"
          >
            Find the answers to commonly asked questions
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4 mb-12 justify-center"
        >
          {faqs.map((category) => (
            <Button
              key={category.category}
              onClick={() => setActiveCategory(category.category)}
              variant="ghost"
              className={`px-6 py-3 rounded-full transition-all duration-300 ${activeCategory === category.category
                  ? "bg-green-400 text-black shadow-lg"
                  : "bg-gray-800/50 hover:bg-gray-700/50"
                }`}
            >
              {category.category}
            </Button>
          ))}
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {faqs.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={category.category === activeCategory ? "space-y-4" : "hidden"}
              >
                {category.questions.map((item, questionIndex) => {
                  const isOpen = openQuestions[`${categoryIndex}-${questionIndex}`]
                  return (
                    <motion.div
                      key={questionIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: questionIndex * 0.1 }}
                      className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-green-400/30 transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                        className="w-full p-6 text-left flex justify-between items-center gap-4"
                      >
                        <span className="text-lg font-medium">{item.question}</span>
                        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                          <ChevronDown className="w-5 h-5 text-green-400" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="px-6 pb-6"
                          >
                            <p className="text-gray-300 leading-relaxed mb-4">{item.answer}</p>
                            <div className="flex flex-wrap gap-2">
                              {item.tags.map((tag) => (
                                <span key={tag} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                })}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <Button className="bg-gradient-to-r from-green-400 to-emerald-600 hover:opacity-90 text-white px-8 py-4 rounded-full inline-flex items-center gap-2 group">
            <MessageCircle className="w-5 h-5" />
            <span>Contact Support</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

