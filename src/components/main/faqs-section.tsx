"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircle } from "lucide-react";

const faqItems = [
  {
    id: 1,
    question: "How much do your websites cost?",
    answer:
      "Prices start at just $499. I'll send you a custom quote based on your goals, features, and timeline—so you only pay for what you need.",
  },
  {
    id: 2,
    question: "How fast can you build my website?",
    answer:
      "Most websites are completed within 1–2 weeks. If you're in a hurry, I offer express delivery options too.",
  },
  {
    id: 3,
    question: "What do I need to get started?",
    answer:
      "Just share your content, logo (if available), and business goals. If you're unsure about anything, I'll guide you step by step—no tech skills required.",
  },
  {
    id: 4,
    question: "Will my site look good on phones?",
    answer:
      "Absolutely. Every website I build is fully responsive and mobile-first, ensuring it looks perfect on all devices.",
  },
  {
    id: 5,
    question: "Can I update the website myself later?",
    answer:
      "Yes! I build websites with user-friendly tools. I'll also walk you through how to make updates easily on your own.",
  },
  {
    id: 6,
    question: "Do you offer support after launch?",
    answer:
      "Yes, I include 15 days of free post-launch support. If anything breaks or you need tweaks, I've got you covered.",
  },
  {
    id: 7,
    question: "Can you improve or redesign my existing site?",
    answer:
      "Definitely. Whether it's outdated, slow, or off-brand—I can modernize your site without losing its identity.",
  },
  {
    id: 8,
    question: "Will my website be SEO-optimized?",
    answer:
      "Yes, I follow SEO best practices, including fast loading, clean code, and keyword-ready structure to help you rank better on search engines.",
  },
  {
    id: 9,
    question: "Is there a refund policy?",
    answer:
      "Since every project is customized, I can't offer refunds once we begin. But I promise to work closely with you through revisions until you're happy with the result.",
  },
];

export default function FaqSection() {
  const [openItemId, setOpenItemId] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const toggleItem = (id: number) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  const closeAllItems = () => {
    setOpenItemId(null);
  };

  // Handle click outside to close opened FAQ items
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        openItemId &&
        sectionRef.current &&
        !sectionRef.current.contains(event.target as Node)
      ) {
        closeAllItems();
      }
    };

    // Handle escape key to close opened FAQ items
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && openItemId) {
        closeAllItems();
      }
    };

    if (openItemId) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [openItemId]);

  const visibleItems = showAll ? faqItems : faqItems.slice(0, 3);

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-slate-50 dark:bg-slate-900 relative"
      id="faq"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-center mb-12 transition-all duration-500 ${
            openItemId ? "blur-sm opacity-60" : "blur-none opacity-100"
          }`}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <MessageCircle className="w-4 h-4" />
            <span>FAQ</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6"
          >
            Common
            <span className="block text-blue-600 dark:text-blue-400 relative mt-2">
              Questions
              <svg
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full max-w-sm"
                height="8"
                viewBox="0 0 300 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.8 }}
                  d="M1 4C75 1.5 225 1.5 299 4"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="text-blue-600 dark:text-blue-400"
                />
              </svg>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Quick answers to help you make the right decision for your business.
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4 relative">
          {visibleItems.map((item, index) => {
            const isOpen = openItemId === item.id;
            const shouldBlur = openItemId !== null && openItemId !== item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`relative transition-all duration-500 ease-out ${
                  shouldBlur
                    ? "blur-sm opacity-40 scale-[0.98]"
                    : "blur-none opacity-100 scale-100"
                } ${
                  isOpen
                    ? "z-10 shadow-2xl ring-2 ring-blue-500/20 dark:ring-blue-400/20"
                    : "z-0"
                }`}
              >
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <button
                    className="flex justify-between items-center w-full text-left p-6 group"
                    onClick={() => toggleItem(item.id)}
                  >
                    <h3 className="font-semibold text-slate-900 dark:text-white text-lg pr-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {item.question}
                    </h3>
                    <div className="flex-shrink-0">
                      <motion.div
                        animate={{
                          rotate: isOpen ? 45 : 0,
                          scale: isOpen ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.2 }}
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
                          isOpen
                            ? "bg-blue-500 text-white shadow-lg"
                            : "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50"
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="w-6 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </motion.div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <div className="pt-2 border-t border-slate-100 dark:border-slate-700">
                            <motion.p
                              initial={{ y: 10, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ duration: 0.3, delay: 0.1 }}
                              className="text-slate-600 dark:text-slate-300 leading-relaxed mt-4"
                            >
                              {item.answer}
                            </motion.p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Show More/Less Button */}
        {faqItems.length > 3 && (
          <div
            className={`text-center mt-8 transition-all duration-500 ${
              openItemId ? "blur-sm opacity-60" : "blur-none opacity-100"
            }`}
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md"
            >
              {showAll
                ? "Show Less"
                : `Show ${faqItems.length - 3} More Questions`}
            </motion.button>
          </div>
        )}

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-center mt-12 transition-all duration-500 ${
            openItemId ? "blur-sm opacity-60" : "blur-none opacity-100"
          }`}
        >
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
              Still have questions?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              I&apos;m here to help! Get in touch and I&apos;ll answer any questions you
              have.
            </p>
            <motion.a
              href="https://wa.me/923701247494?text=Hi%2C%20I%20have%20a%20question"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Ask Me Anything
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Click outside hint overlay - only visible when an FAQ is open */}
      <AnimatePresence>
        {openItemId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 pointer-events-none"
            onClick={closeAllItems}
          >
            <div className="absolute top-4 right-4 bg-black/70 dark:bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 text-sm text-white dark:text-slate-200 pointer-events-auto cursor-pointer">
              Click anywhere to close • Press ESC
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
