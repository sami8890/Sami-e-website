"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import { Anton } from "next/font/google";
import Link from "next/link";

// Use the same font as in the Hero component
const anton = Anton({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anton",
});

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
];

// Get unique categories
const categories = ["all", ...new Set(faqItems.map((item) => item.category))];

interface FaqAccordionItemProps {
  item: {
    id: number;
    category: string;
    question: string;
    answer: string;
  };
  isOpen: boolean;
  toggleItem: (id: number) => void;
}

const FaqAccordionItem = ({
  item,
  isOpen,
  toggleItem,
}: FaqAccordionItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const contentHeight =
    isOpen && contentRef.current ? contentRef.current.scrollHeight : 0;

  return (
    <div className="border-b border-gray-800 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-6 text-left focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 rounded-md"
        onClick={() => toggleItem(item.id)}
        aria-expanded={isOpen}
      >
        <h3 className="text-xl font-medium text-white">{item.question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 ml-4 text-emerald-400"
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
        <div ref={contentRef} className="pb-6 text-gray-300 text-lg">
          <p>{item.answer}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default function FaqSection() {
  const [openItemId, setOpenItemId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredItems, setFilteredItems] = useState(faqItems);
  const [showContactPrompt, setShowContactPrompt] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredItems(faqItems);
    } else {
      setFilteredItems(
        faqItems.filter((item) => item.category === selectedCategory)
      );
    }
    // Close any open items when changing categories
    setOpenItemId(null);
  }, [selectedCategory]);

  interface ToggleItemFunction {
    (id: number): void;
  }

  const toggleItem: ToggleItemFunction = (id) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  // Track if user has scrolled through multiple FAQs without finding an answer
  useEffect(() => { 
    let openCount = 0;
    const handleOpenCounter = () => {
      if (openItemId !== null) {
        openCount++;
        if (openCount >= 3) {
          setShowContactPrompt(true);
        }
      }
    };
    handleOpenCounter();
    // Cleanup function
    return () => {
      openCount = 0;
    };
  }, [openItemId]);

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-24 px-4 relative overflow-hidden"
      id="faq"
    >
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
              <h2
                className={`${anton.className} text-4xl sm:text-5xl font-normal mb-6 uppercase`}
              >
                <span className="text-emerald-400 block">FREQUENTLY</span>
                <span className="text-white block">ASKED</span>
                <span className="text-white block">QUESTIONS!</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Can&apos;t find the answer you&apos;re looking for?
                <Link
                  href="#contact"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors underline"
                >
                  Reach out
                </Link>
                to us and we will get in touch with you.
              </p>

              {/* Category filters for mobile only */}
              <div className="flex flex-wrap gap-2 mb-8 lg:hidden">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 ${
                      selectedCategory === category
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
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center mr-4">
                    <MessageCircle size={20} className="text-black" />
                  </div>
                  <h3 className="text-xl font-medium text-white">Need Help?</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Our team is ready to answer all your questions about our web
                  development services.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full text-white font-medium transition duration-300 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="lg:col-span-8">
            {/* Category filters for desktop */}
            <div className="hidden lg:flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-emerald-500 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="space-y-2">
              {filteredItems.map((item) => (
                <FaqAccordionItem
                  key={item.id}
                  item={item}
                  isOpen={openItemId === item.id}
                  toggleItem={toggleItem}
                />
              ))}

              {filteredItems.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-400">
                    No questions found in this category.
                  </p>
                </div>
              )}
            </div>

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
                      We&apos;re here to help! Send us a message and we&apos;ll get back
                      to you as soon as possible.
                    </p>
                    <Link
                      href="#contact"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full text-white font-medium transition duration-300 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


// How long does it take to complete a website?
/*Typically, a portfolio website takes 2-3 weeks, while a landing page can be completed in 1-2 weeks. Enterprise projects may take longer depending on complexity and requirements.

Do you provide hosting and domain services?
Yes, we offer hosting and domain registration services. We can also help you set up your website on your existing hosting if you prefer.

Can I update the website myself after it's built?
We build websites with user-friendly content management systems that allow you to make updates without technical knowledge. We also provide training on how to manage your site.

What information do you need to get started?
To begin, we'll need your brand guidelines, content (text and images), and any specific requirements you have. We'll guide you through the process with a detailed questionnaire.

Do you offer ongoing maintenance?
Yes, we offer monthly maintenance packages to keep your website secure, updated, and performing optimally. This includes regular backups, security checks, and technical support.

// How long does it take to complete a website?
Typically, a portfolio website takes 2-3 weeks, while a landing page can be completed in 1-2 weeks. Enterprise projects may take longer depending on complexity and requirements.
*/