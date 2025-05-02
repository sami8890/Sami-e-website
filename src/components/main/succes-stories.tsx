"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ClientSuccessStory() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Clean, minimal header */}
        <h2 className="text-4xl font-bold text-black mb-20">
          OUR CLIENT SUCCESS STORY WITH Contntr
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 max-w-7xl mx-auto">
          {/* Left Column - Clean, structured info (5 columns) */}
          <div className="lg:col-span-5 space-y-12">
            {/* Client Info - Minimal, clear layout */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black">Contntr</h3>
                <p className="text-gray-600">Premium SEO Platform</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black">56%</h3>
                <p className="text-gray-600">Increase the conversion rate</p>
              </div>
            </div>

            {/* Overview - Professional, clean presentation */}
            <div>
              <h3 className="text-xl font-bold text-black mb-4">Overview</h3>
              <p className="text-gray-700 mb-6">
                Contntr is a premium SEO platform that offers a range of
                services to help businesses improve their online presence and
                reach their target audience.
              </p>

              {/* Clean metrics presentation */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1">→</div>
                  <p className="text-gray-700">
                    <span className="font-medium">43%</span> increase in
                    conversion rate
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1">→</div>
                  <p className="text-gray-700">
                    <span className="font-medium">89%</span> improvement in page
                    load speed
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mb-8">
                We contributed to revamping the{" "}
                <span className="text-green-600">contntr.com</span> website to
                create an impactful user interface.
              </p>

              {/* Simple, clear CTA */}
              <a
                href="https://contntr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-medium hover:bg-gray-900 transition-colors"
              >
                Browse the website <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column - Clean visual display (7 columns) */}
          <div className="lg:col-span-7 relative">
            {/* Main image - Professional presentation with increased dimensions */}
            <div className="rounded-lg overflow-hidden shadow-lg">
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
