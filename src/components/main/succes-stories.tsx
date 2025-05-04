"use client";

import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export default function ClientSuccessStory() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Simple, elegant header */}
        <h2 className="text-3xl font-bold text-black mb-16">
          Client Success: Contntr
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Clean, minimalist info */}
          <div className="lg:col-span-5 space-y-10">
            {/* Client Info - Simplified */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-black">Contntr</h3>
                <p className="text-gray-600">Premium SEO Platform</p>
              </div>

              {/* Key metrics - Just the essentials */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-black">56%</h3>
                  <p className="text-gray-600">Conversion increase</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black">89%</h3>
                  <p className="text-gray-600">Faster load times</p>
                </div>
              </div>
            </div>

            {/* Overview - Concise and impactful */}
            <div>
              <h3 className="text-xl font-bold text-black mb-3">The Project</h3>
              <p className="text-gray-700 mb-6">
                We redesigned the Contntr platform with a focus on user experience and
                performance, transforming their digital presence and driving measurable 
                business results.
              </p>

              {/* Simplified results */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1">→</div>
                  <p className="text-gray-700">
                    Complete UX/UI overhaul with intuitive navigation
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1">→</div>
                  <p className="text-gray-700">
                    Performance optimization for faster page loads
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1">→</div>
                  <p className="text-gray-700">
                    Mobile-responsive design for all devices
                  </p>
                </div>
              </div>

              {/* Action buttons - Clean row */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://contntr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white font-medium hover:bg-gray-900 transition-colors"
                >
                  Visit website <ArrowRight className="w-4 h-4" />
                </a>
                <Link href="/video-testimonials">
                <button 
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  <Play className="w-4 h-4 text-green-600" /> Watch testimonial
                </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Clean visual display */}
          <div className="lg:col-span-7 relative">
            {/* Main image - Professional presentation */}
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/project/3.png"
                alt="Contntr case study"
                width={1600}
                height={1200}
                className="w-full h-full object-cover"
                priority
                quality={90}
              />
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
}