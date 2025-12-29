"use client"
import { Star } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function ClientSuccessStory() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white relative">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.02),transparent_70%)]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Compact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl sm:rounded-2xl border border-slate-200 p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* Star Rating */}
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6 sm:mb-8">
              &quot;Within 3 months, my business completely transformed. The website brings in customers consistently&mdash;it&apos;s fast, SEO-optimized, and feels like a real brand.&quot;
            </blockquote>

            {/* Client Info + Metric */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-0.5">
                    <Image
                      src="/testimonial/kyle.png"
                      alt="Kyle Niange"
                      width={48}
                      height={48}
                      className="w-full h-full rounded-full object-cover bg-white"
                    />
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm sm:text-base">Kyle Niange</p>
                  <p className="text-xs sm:text-sm text-slate-500">Founder, Contntr</p>
                </div>
              </div>

              {/* Single, subtle metric */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col sm:text-right"
              >
                <p className="text-xs sm:text-xs text-slate-500 uppercase tracking-wide mb-0.5">
                  Business Growth
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900">+340%</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Subtle CTA Text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center text-sm text-slate-500 mt-6 sm:mt-8"
          >
            Read more in the testimonials section below
          </motion.p>
        </div>
      </div>
    </section>
  )
}