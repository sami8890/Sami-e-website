"use client";

import { Instrument_Serif } from "next/font/google";
import { Plus } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const instrumentSerif = Instrument_Serif({ weight: "400", subsets: ["latin"] });

const faqs = [
  {
    id: 1,
    question: "How long does a custom project take?",
    answer: "Typically 2-4 weeks. I focus on architectural precision and high-speed delivery, ensuring your luxury portal is ready for the Dubai market in record time.",
  },
  {
    id: 2,
    question: "Why do you prioritize Next.js over WordPress?",
    answer: "WordPress is often slow and fragmented. I build using Next.js for sub-second load times, providing the elite digital performance that high-net-worth investors expect.",
  },
  {
    id: 3,
    question: "Will I be able to update properties myself?",
    answer: "Yes. I integrate a bespoke CMS tailored to your workflow, allowing you to add listings, edit prices, or update images without touching a single line of code.",
  },
  {
    id: 4,
    question: "What is the investment for an Architected Digital Asset?",
    answer: "Every project is a custom build. Pricing depends on features like interactive 3D maps or lead tracking. After a strategy call, I provide a clear, fixed quote.",
  },
  {
    id: 5,
    question: "Will the website be mobile-optimized?",
    answer: "Absolutely. In Dubai’s real estate market, most investors browse on mobile. All my builds are fully responsive and feel like a premium app on every screen size.",
  },
  {
    id: 6,
    question: "How do revisions work?",
    answer: "I offer a collaborative process with unlimited revisions within the project timeline. This ensures the final digital asset aligns perfectly with your brand’s vision.",
  },
  {
    id: 7,
    question: "How do you ensure my properties reach the right investors?",
    answer: "I build with SEO-first architecture—fast loading, clean metadata, and search-optimized structures—to ensure your listings dominate the right search results.",
  },
  {
    id: 8,
    question: "Do you provide support after launch?",
    answer: "I don't just hand over a site and disappear. I provide ongoing maintenance and performance optimization so your asset stays secure and fast long after launch.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-[#F7FAFC]">
      <div className="container mx-auto px-6 max-w-3xl">
        
        {/* Header - Kept your exact style */}
        <div className="text-center mb-16">
          <h2 className={`${instrumentSerif.className} text-4xl md:text-5xl text-slate-900 mb-4`}>
            Frequently Asked <span className="italic text-amber-600">Questions</span>
          </h2>
          <p className="text-slate-500 text-sm uppercase tracking-widest">Everything you need to know</p>
        </div>

        {/* FAQ Container - Image Style Match */}
        <div className="bg-[#E5E7EB]/30 p-4 md:p-6 rounded-[2rem] space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                key={index} 
                initial={false}
                animate={{ 
                  backgroundColor: isOpen ? "#FFFFFF" : "#F3F4F6",
                  borderColor: isOpen ? "#000000" : "transparent"
                }}
                className={`rounded-2xl border-2 transition-all duration-300 cursor-pointer overflow-hidden shadow-sm`}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <div className="flex justify-between items-center p-5 md:p-6">
                  <h3 className={`text-sm md:text-base font-bold text-slate-900 tracking-tight transition-colors ${isOpen ? 'text-black' : 'text-slate-700'}`}>
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 ml-4">
                    <Plus 
                      className={`w-5 h-5 text-slate-900 transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`} 
                    />
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-slate-500 text-sm md:text-base leading-relaxed border-t border-slate-100 pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}