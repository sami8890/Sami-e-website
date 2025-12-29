// "use client"
// import { useState, useEffect, useRef } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { Plus, Minus } from "lucide-react"

// const faqItems = [
//   {
//     id: 1,
//     question: "How do I get started?",
//     answer:
//       "Simply book a discovery call with me. We'll talk through your goals, requirements, and I'll guide you step by step on how we'll move forward together.",
//   },
//   {
//     id: 2,
//     question: "How much will my website cost?",
//     answer:
//       "Every website is different, so pricing depends on the size and features you need. After our first call, I'll give you a clear upfront quote with no hidden fees.",
//   },
//   {
//     id: 3,
//     question: "What do you need from me?",
//     answer:
//       "I'll need your business info, branding (logo, colors), and text or images you'd like to use. If you don't have everything ready, I'll guide you on what to prepare.",
//   },
//   {
//     id: 4,
//     question: "How do revisions work?",
//     answer:
//       "I offer unlimited revisions within the agreed project timeline. This ensures the project keeps moving forward while giving you full freedom to get the design right.",
//   },
//   {
//     id: 5,
//     question: "Will my website show up on Google?",
//     answer:
//       "Yes. I build websites using SEO best practices—fast loading, mobile-friendly, and search-optimized. For bigger goals, advanced SEO packages are also available.",
//   },
//   {
//     id: 6,
//     question: "Do I need hosting or a domain?",
//     answer:
//       "Yes, every website needs both. If you don't have them yet, I'll recommend the best options for your needs and can set everything up for you.",
//   },
//   {
//     id: 7,
//     question: "Will my website look good on phones?",
//     answer:
//       "Definitely. All my websites are fully responsive, meaning they adapt perfectly to phones, tablets, and desktops for a smooth user experience everywhere.",
//   },
//   {
//     id: 8,
//     question: "Do you help after launch?",
//     answer:
//       "Yes. I provide ongoing support and maintenance for updates, fixes, and new features, so your website stays secure and up-to-date long after launch.",
//   },
// ]

// export default function FaqSection() {
//   const [openItemId, setOpenItemId] = useState<number | null>(null)
//   const [showAll, setShowAll] = useState(false)
//   const sectionRef = useRef<HTMLElement>(null)

//   // Load fonts only on client side
//   useEffect(() => {
//     const fontLink = document.createElement("link")
//     fontLink.href =
//       "https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Playfair+Display:wght@600;700&family=Instrument+Serif:ital@0;1&display=swap"
//     fontLink.rel = "stylesheet"
//     if (!document.querySelector(`link[href="${fontLink.href}"]`)) {
//       document.head.appendChild(fontLink)
//     }
//   }, [])

//   const toggleItem = (id: number) => {
//     setOpenItemId(openItemId === id ? null : id)
//   }

//   const closeAllItems = () => {
//     setOpenItemId(null)
//   }

//   // Handle click outside to close opened FAQ items
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (openItemId && sectionRef.current && !sectionRef.current.contains(event.target as Node)) {
//         closeAllItems()
//       }
//     }

//     // Handle escape key to close opened FAQ items
//     const handleEscapeKey = (event: KeyboardEvent) => {
//       if (event.key === "Escape" && openItemId) {
//         closeAllItems()
//       }
//     }

//     if (openItemId) {
//       document.addEventListener("mousedown", handleClickOutside)
//       document.addEventListener("keydown", handleEscapeKey)
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside)
//       document.removeEventListener("keydown", handleEscapeKey)
//     }
//   }, [openItemId])

//   const visibleItems = showAll ? faqItems : faqItems.slice(0, 4)

//   return (
//     <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden" id="faq">
//       {/* Subtle background pattern - matching hero */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_50%)]"></div>

//       {/* Much more compact desktop container */}
//       <div className="container mx-auto px-4 max-w-4xl lg:max-w-xl xl:max-w-2xl relative z-10">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className={`mb-16 transition-all duration-500 ${openItemId ? "blur-sm opacity-60" : "blur-none opacity-100"}`}
//         >
//           <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-4 mb-6">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold text-slate-900 leading-tight"
//             >
//               Got Questions
//             </motion.h2>
//             <motion.span
//               initial={{ opacity: 0, x: -10 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//               className="text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-italic italic bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
//               style={{ fontFamily: "'Instrument Serif', serif" }}
//             >
//               Answered
//             </motion.span>
//           </div>

//           <motion.div
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             viewport={{ once: true }}
//             className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full origin-left mb-6 shadow-lg shadow-blue-600/20"
//           />

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="text-lg md:text-xl lg:text-base xl:text-lg text-slate-600 max-w-2xl lg:max-w-sm xl:max-w-lg leading-relaxed"
//           >
//             Everything you need to know about creating a restaurant website that actually brings in customers.
//           </motion.p>
//         </motion.div>

//         {/* FAQ Items */}
//         <div className="space-y-6 relative">
//           {visibleItems.map((item, index) => {
//             const isOpen = openItemId === item.id
//             const shouldBlur = openItemId !== null && openItemId !== item.id
//             return (
//               <motion.div
//                 key={item.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 whileHover={{ scale: shouldBlur ? 1 : 1.01 }}
//                 className={`relative transition-all duration-500 ease-out ${
//                   shouldBlur ? "blur-sm opacity-40 scale-[0.98]" : "blur-none opacity-100 scale-100"
//                 } ${isOpen ? "z-10 shadow-2xl ring-2 ring-blue-500/20" : "z-0"}`}
//               >
//                 <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
//                   <button
//                     className="flex justify-between items-center w-full text-left p-6 md:p-8 lg:p-5 xl:p-6 group"
//                     onClick={() => toggleItem(item.id)}
//                   >
//                     <h3
//                       className="font-bold text-slate-900 text-lg md:text-xl lg:text-base xl:text-lg pr-4 leading-tight"
//                       style={{
//                         fontWeight: "500",
//                         letterSpacing: "-0.02em",
//                         textShadow: "0 1px 2px rgba(0,0,0,0.05)",
//                       }}
//                     >
//                       {item.question}
//                     </h3>
//                     <div className="flex-shrink-0">
//                       <motion.div
//                         animate={{
//                           rotate: isOpen ? 45 : 0,
//                           scale: isOpen ? 1.1 : 1,
//                         }}
//                         transition={{ duration: 0.3, ease: "easeInOut" }}
//                         className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
//                           isOpen
//                             ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
//                             : "bg-slate-100 text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:shadow-md group-hover:shadow-blue-600/20"
//                         }`}
//                       >
//                         {isOpen ? <Minus className="w-5 h-5 text-white" /> : <Plus className="w-5 h-5" />}
//                       </motion.div>
//                     </div>
//                   </button>

//                   <AnimatePresence>
//                     {isOpen && (
//                       <motion.div
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         transition={{ duration: 0.4, ease: "easeInOut" }}
//                         className="overflow-hidden"
//                       >
//                         <div className="px-6 md:px-8 lg:px-5 xl:px-6 pb-6 md:pb-8 lg:pb-5 xl:pb-6">
//                           <div className="pt-4 border-t border-blue-100">
//                             <motion.p
//                               initial={{ y: 15, opacity: 0 }}
//                               animate={{ y: 0, opacity: 1 }}
//                               transition={{ duration: 0.4, delay: 0.1 }}
//                               className="text-slate-600 leading-relaxed text-base md:text-lg lg:text-sm xl:text-base"
//                             >
//                               {item.answer}
//                             </motion.p>
//                           </div>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               </motion.div>
//             )
//           })}
//         </div>

//         {/* Show More/Less Button */}
//         {faqItems.length > 4 && (
//           <div
//             className={`text-center mt-12 transition-all duration-500 ${
//               openItemId ? "blur-sm opacity-60" : "blur-none opacity-100"
//             }`}
//           >
//             <motion.button
//               onClick={() => setShowAll(!showAll)}
//               whileHover={{ scale: 1.05, y: -2 }}
//               whileTap={{ scale: 0.98 }}
//               className="px-8 py-4 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white rounded-full font-medium text-lg lg:text-base xl:text-lg transition-all duration-300 shadow-lg hover:shadow-xl border border-slate-700 hover:border-slate-600"
//             >
//               {showAll ? "Show Less Questions" : `Show ${faqItems.length - 4} More Questions`}
//             </motion.button>
//           </div>
//         )}
//       </div>

//       {/* Click outside hint overlay - Enhanced */}
//       <AnimatePresence>
//         {openItemId && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="fixed inset-0 z-50 pointer-events-none"
//             onClick={closeAllItems}
//           >
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               className="absolute top-20 right-4 bg-slate-900/90 backdrop-blur-xl rounded-xl px-4 py-3 text-sm text-white pointer-events-auto cursor-pointer shadow-xl border border-slate-700"
//             >
//               <div className="flex items-center gap-2">
//                 <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
//                 Click this <span className="font-bold">to remove blur</span>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   )
// }



"use client";

import { Instrument_Serif } from "next/font/google";
import { Plus } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const instrumentSerif = Instrument_Serif({ weight: "400", subsets: ["latin"] });

const faqs = [
  {
    q: "How long does a project take?",
    a: "Typically 2-4 weeks. We focus on speed without compromising quality, so you can start selling faster.",
  },
  {
    q: "Do you use templates?",
    a: "Never. We build custom solutions using Next.js and Tailwind CSS to ensure your brand looks unique and premium.",
  },
  {
    q: "Will I be able to update the website myself?",
    a: "Yes. We integrate a user-friendly CMS (Content Management System) so you can add properties or edit text easily.",
  },
  {
    q: "What is the cost?",
    a: "Projects start from $X,XXX. The final price depends on the complexity (e.g., 3D maps, number of pages). Book a call for a quote.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className={`${instrumentSerif.className} text-4xl text-center text-slate-900 mb-12`}>
          Frequently Asked <span className="italic text-amber-600">Questions</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-slate-200 pb-4 cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between items-center py-4">
                <h3 className="text-lg font-medium text-slate-900">{faq.q}</h3>
                <Plus 
                  className={`w-5 h-5 text-amber-700 transition-transform duration-300 ${openIndex === index ? "rotate-45" : ""}`} 
                />
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-slate-500 pb-4 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}