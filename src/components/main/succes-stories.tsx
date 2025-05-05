"use client"

import Image from "next/image"
import { ArrowRight, Play, Star, CheckCircle } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ClientSuccessStory() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Enhanced header with green accent similar to project section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-800 mb-6 shadow-sm"
          >
            <Star className="h-3.5 w-3.5 text-green-600 fill-green-600" />
            <span>Client Success Stories</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Client Success:
            <span className="text-green-600 relative inline-block ml-2">
              Contntr
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 100 15" preserveAspectRatio="none">
                <path d="M0,5 Q50,15 100,5" stroke="rgba(22, 163, 74, 0.3)" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </motion.h2>

          {/* Simple underline similar to project section */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent w-24 mx-auto mt-2 opacity-70"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Clean, minimalist info with green accents */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-10"
          >
            {/* Client Info - Simplified with green accent */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Contntr</h3>
                <p className="text-gray-600">Premium SEO Platform</p>
              </div>

              {/* Key metrics - Enhanced with green accents */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                <div className="p-4 rounded-lg border border-gray-100 shadow-sm hover:border-green-100 transition-all duration-300 bg-white">
                  <h3 className="text-2xl font-bold text-green-600">56%</h3>
                  <p className="text-gray-600 text-sm">Conversion increase</p>
                </div>
                <div className="p-4 rounded-lg border border-gray-100 shadow-sm hover:border-green-100 transition-all duration-300 bg-white">
                  <h3 className="text-2xl font-bold text-green-600">98%</h3>
                  <p className="text-gray-600 text-sm">Faster load times</p>
                </div>
              </div>
            </div>

            {/* Overview - Concise and impactful with green checkmarks */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Project</h3>
              <p className="text-gray-700 mb-6">
                We redesigned the Contntr platform with a focus on user experience and performance, transforming their
                digital presence and driving measurable business results.
              </p>

              {/* Results with green checkmarks */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 mt-0.5 h-5 w-5" />
                  <p className="text-gray-700">Complete UX/UI overhaul with intuitive navigation</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 mt-0.5 h-5 w-5" />
                  <p className="text-gray-700">Performance optimization for faster page loads</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 mt-0.5 h-5 w-5" />
                  <p className="text-gray-700">Mobile-responsive design for all devices</p>
                </div>
              </div>

              {/* Action buttons - Styled to match project section */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://contntr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white font-medium hover:bg-gray-900 transition-colors shadow-md"
                >
                  Visit website <ArrowRight className="w-4 h-4" />
                </a>
                <Link href="/video-testimonials">
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-800 font-medium border border-gray-300 hover:border-green-300 hover:text-green-700 transition-colors">
                    <Play className="w-4 h-4 text-green-400" /> Watch testimonial
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Enhanced visual display */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 relative"
          >
            {/* Main image with enhanced presentation */}
            <div className="rounded-lg overflow-hidden shadow-xl relative group">           
              {/* Subtle hover effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative overflow-hidden">
                <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.5 }}>
                  <Image
                    src="/project/3.png"
                    alt="Contntr case study"
                    width={1600}
                    height={1200}
                    className="w-full h-full object-cover transition-transform duration-700"
                    priority
                    quality={95}
                  />
                </motion.div>
              </div>

              {/* Subtle brand overlay */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-md shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <p className="text-xs font-medium text-gray-800">Contntr Project</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
