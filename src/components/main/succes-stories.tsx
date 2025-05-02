"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ClientSuccessStory() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">
          OUR RECENT STORY WITH CONTNTR
        </h2>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 max-w-7xl mx-auto">
          {/* Left Column - Client Info */}
          <div className="w-full lg:w-1/3 space-y-10">
            {/* Client Name and Description */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Contntr</h3>
              <p className="text-gray-600">
                Premium SEO
                <br />
                Agency
              </p>
            </div>

            {/* Key Metric */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">156%</h3>
              <p className="text-gray-600">
                Increase in
                <br />
                organic traffic
              </p>
            </div>

            {/* Overview Section */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Overview</h3>
              <p className="text-gray-700 mb-4">
                Contntr specializes in delivering high-impact SEO solutions for
                businesses looking to improve their search rankings and organic
                visibility.
              </p>

              {/* Metrics with Arrows */}
              <div className="space-y-3">
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

              {/* Contribution Statement */}
              <p className="text-gray-700 mt-6">
                We contributed to revamping the{" "}
                <span className="text-blue-600">contntr.com</span> website with
                a modern interface that better showcases their SEO expertise.
              </p>

              {/* CTA Button */}
              <a
                href="https://contntr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-black text-white font-medium rounded-sm hover:bg-gray-800 transition-colors"
              >
                Browse the website <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column - Visual Display */}
          <div className="w-full lg:w-2/3 relative">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/contntr-case-study.jpg" // Replace with your actual image path
                alt="Contntr case study"
                width={1200}
                height={800}
                className="w-full h-auto object-cover rounded-lg"
              />

              {/* Dashboard Overlay */}
              <div className="absolute left-10 bottom-0 w-2/5 h-auto transform translate-y-[-15%]">
                <Image
                  src="/contntr-dashboard.png" // Replace with your actual dashboard image path
                  alt="Contntr SEO dashboard"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-md shadow-xl"
                />
              </div>

              {/* Logo Overlay */}
              <div className="absolute right-10 bottom-10 bg-white p-4 rounded-lg shadow-lg w-56">
                <Image
                  src="/contntr-logo.png" // Replace with actual logo image path
                  alt="Contntr logo"
                  width={200}
                  height={80}
                  className="w-full h-auto"
                />
                <p className="text-xs text-gray-500 mt-2">
                  PREMIUM SEO SERVICES
                </p>
                <p className="text-lg font-bold">Elevate Your Rankings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
