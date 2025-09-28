"use client";
import { ArrowRight, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ClientSuccessStory() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Simple header - Consistent color */}
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
              From 3 Leads to 40+ Leads Per Month
            </h2>
           
          </motion.div>

          {/* Testimonial with image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
                
                </div>
                <p className="text-base md:text-lg text-slate-700 mb-4 leading-relaxed">
                  &quot;Within 3 months, my business completely transformed. The
                  new website brings in customers every day and its very fast
                  and SEO Optimized &quot;
                </p>
                <div>
                  <div className="font-semibold text-slate-900 text-base">
                    Kyle Niange
                  </div>
                  <div className="text-sm text-slate-600">
                    Founder of Contntr
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          {
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
                className="inline-flex items-center gap-2 px-8 py-4 bg-black  text-white font-semibold rounded-md transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                
                  <Link href="/video" className="flex items-center gap-2">
                     Watch what Kyle say  
                    <ArrowRight className="w-4 h-4" />
                  </Link>
          
              </motion.button>
              <p className="text-sm text-slate-600 mt-3">
                {/* Free consultation • No commitment required */}
              </p>
            </motion.div>
          }
        </div>
      </div>
    </section>
  );
}
