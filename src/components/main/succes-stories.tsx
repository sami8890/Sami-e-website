"use client"

import Image from "next/image"
import { ArrowRight,  Star, CheckCircle, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ClientSuccessStory() {
  return (
    <section id="testimonial" className="py-20 bg-white dark:bg-zinc-900 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header without animations */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-1.5 text-sm font-medium text-gray-800 dark:text-gray-200 mb-6 shadow-sm"
          >
            <Star className="h-3.5 w-3.5 text-blue-600 dark:text-blue-500 fill-blue-600 dark:fill-blue-500" />
            <span>Case Study</span>
          </div>

          <h2
            className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
          >
            How We Helped
            <span className="text-blue-600 dark:text-blue-500 relative inline-block ml-2">
              Contntr
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 100 15" preserveAspectRatio="none">
                <path d="M0,5 Q50,15 100,5" stroke="rgba(22, 163, 74, 0.3)" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </h2>

          <div
            className="h-0.5 bg-gradient-to-r from-transparent via-blue-500 dark:via-blue-500 to-transparent w-24 mx-auto mt-2 opacity-70"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Left Column - More scannable content with bullet points */}
          <div className="lg:col-span-5 space-y-8">
            {/* Client Info with clear tag */}
            <div>
              <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium rounded mb-3">
                Premium SEO Platform
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Contntr</h3>
            </div>

            {/* Key Results - More visual with larger numbers */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-gray-100 dark:border-zinc-800 shadow-sm bg-white dark:bg-zinc-800">
                <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-500">56%</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Conversion increase</p>
              </div>
              <div className="p-4 rounded-lg border border-gray-100 dark:border-zinc-800 shadow-sm bg-white dark:bg-zinc-800">
                <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-500">98%</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Faster load times</p>
              </div>
            </div>

            {/* Project summary - Shorter and more scannable */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">The Challenge</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Contntr needed a complete platform redesign to improve user experience, increase conversions, and reduce load times across all devices.
              </p>
            </div>

            {/* Solution - Clear bullet points */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Our Solution</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 dark:text-blue-500 mr-3 mt-0.5 h-5 w-5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Complete UX redesign with optimized user flows</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 dark:text-blue-500 mr-3 mt-0.5 h-5 w-5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Backend optimization reducing load times by 98%</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 dark:text-blue-500 mr-3 mt-0.5 h-5 w-5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Responsive design with mobile-first approach</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 dark:text-blue-500 mr-3 mt-0.5 h-5 w-5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Conversion-focused layout increasing signups by 56%</span>
                </li>
              </ul>
            </div>

            {/* Clear CTAs with bolder styling */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/case-studies/contntr"
                className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors shadow-md"
              >
                View Full Case Study <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://contntr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white dark:bg-zinc-800 text-gray-800 dark:text-gray-200 font-medium border border-gray-300 dark:border-zinc-700 hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-700 dark:hover:text-blue-500 transition-colors rounded-md"
              >
                Visit Live Site <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column - Multiple screenshots in gallery layout */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main image with caption */}
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/project/3.png"
                alt="Contntr website homepage redesign"
                width={800}
                height={500}
                className="w-full object-cover"
                priority
                quality={95}
              />
              <div className="bg-white dark:bg-zinc-800 p-3 border-t border-gray-100 dark:border-zinc-700">
                <p className="text-sm text-gray-600 dark:text-gray-400">Homepage redesign with optimized conversion elements</p>
              </div>
            </div>

            {/* Additional screenshots in grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/project/3-mobile.png"
                  alt="Contntr mobile view"
                  width={400}
                  height={300}
                  className="w-full h-40 object-cover"
                />
                <div className="bg-white dark:bg-zinc-800 p-2 border-t border-gray-100 dark:border-zinc-700">
                  <p className="text-xs text-gray-600 dark:text-gray-400">Mobile optimization</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/project/3-dashboard.png"
                  alt="Contntr dashboard"
                  width={400}
                  height={300}
                  className="w-full h-40 object-cover"
                />
                <div className="bg-white dark:bg-zinc-800 p-2 border-t border-gray-100 dark:border-zinc-700">
                  <p className="text-xs text-gray-600 dark:text-gray-400">User dashboard interface</p>
                </div>
              </div>
            </div>

            {/* Testimonial quote */}
            <div className="bg-gray-50 dark:bg-zinc-800/50 p-4 rounded-lg border border-gray-100 dark:border-zinc-700">
              <p className="text-gray-600 dark:text-gray-300 italic">
                &quot;The redesign completely transformed our platform. W&lsquo;eve seen dramatic improvements in user engagement and conversion rates.&quot;
              </p>
              <p className="mt-2 text-gray-800 dark:text-gray-200 font-medium">Sarah Chen, CEO at Contntr</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}