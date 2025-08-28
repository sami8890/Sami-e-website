"use client"
import { TrendingUp } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function ClientSuccessStory() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Simple header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <TrendingUp className="w-4 h-4" />
              Client Success Story
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              From 3 Leads to{" "}
              <span className="text-blue-600" style={{ fontFamily: 'Instrument Serif, serif' }}>
                40+ Leads Per Month
              </span>
            </h2>
            
            <p className="text-base md:text-lg text-slate-600 max-w-xl mx-auto">
              1,100% revenue increase in 90 days
            </p>
          </motion.div>

          {/* Results grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 md:p-8 mb-8 border border-slate-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">1,100%</div>
                <div className="text-slate-700 font-medium">Revenue Growth</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-1">40+</div>
                <div className="text-slate-700 font-medium">Monthly Leads</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-1">90</div>
                <div className="text-slate-700 font-medium">Days to Results</div>
              </div>
            </div>
          </motion.div>

          {/* Testimonial with image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 mb-8"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Client Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0"
              >
                <div className="relative">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1">
                    <Image
                      src="/kyle.png" // Replace with actual image path
                      alt="Kyle Niange, Founder of Contntr"
                      width={96}
                      height={96}
                      className="w-full h-full rounded-full object-cover bg-white"
                      priority
                    />
                  </div>
                  {/* Success badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-2 border-white shadow-lg"
                  >
                    <TrendingUp className="w-4 h-4 text-white" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Testimonial Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-3">
                  {[1,2,3,4,5].map(star => (
                    <motion.span 
                      key={star}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + star * 0.1 }}
                      viewport={{ once: true }}
                      className="text-yellow-400 text-xl"
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>
                <p className="text-base md:text-lg text-slate-700 mb-4 leading-relaxed">
                  &quot;Within 3 months, my business completely transformed. The new website brings in customers every day and its very fast and SEO Optimized &quot;
                </p>
                <div>
                  <div className="font-semibold text-slate-900 text-base">Kyle Niange</div>
                  <div className="text-sm text-slate-600">Founder of Contntr</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
{/*         
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => {
                window.open(
                  "#succes",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              Watch the video  
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            <p className="text-sm text-slate-600 mt-3"> */}
              {/* Free consultation • No commitment required */}
            {/* </p>
          </motion.div> */}
        </div>
      </div>
    </section>
  )
}