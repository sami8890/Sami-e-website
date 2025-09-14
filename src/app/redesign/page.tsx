"use client"
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroRedesignSection() {
  const handleCTAClick = () => {
    try {
      window.open(
        "https://wa.me/923701247494?text=Hi%2C%20I%20want%20to%20redesign%20my%20hero%20section%20for%20$99",
        "_blank",
        "noopener,noreferrer"
      );
    } catch (error) {
      console.error('Error opening WhatsApp link:', error);
      // Fallback: copy to clipboard or show error message
      alert('Please contact us directly at +92 370 1247494');
    }
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Clean background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Status Badge */}
          <div className="mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-slate-100 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-slate-700 font-medium">
              20+ Successful Hero Transformations
            </div>
          </div>

          {/* Main Heading */}
          <div className="mb-8 sm:mb-12 px-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight sm:leading-[0.9] text-slate-900 tracking-tight">
              Stand Out with a Stunning
              <br className="hidden sm:block" />
              <span className="block mt-2">
                Website
                <span 
                  className="text-blue-600"
                  style={{ fontFamily: "Instrument Serif, serif", fontWeight: 400 }}
                >
                  Hero Redesign
                </span>
              </span>
            </h1>
          </div>

          {/* Features */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
            <div className="flex items-center gap-2 sm:gap-3">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              <span className="text-sm sm:text-base text-slate-700 font-medium">48hrs delivery</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              <span className="text-sm sm:text-base text-slate-700 font-medium">2 Revisions</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mb-16 sm:mb-20 lg:mb-24">
            <Button
              size="lg"
              className="bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 hover:scale-[1.02] w-full sm:w-auto"
              onClick={handleCTAClick}
            >
              Transform My Hero Now - $99
            </Button>
          </div>

        </div>

        {/* Process Steps */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="bg-black rounded-full px-3 sm:px-4 py-2 sm:py-3 max-w-full overflow-x-auto">
            <div className="flex items-center gap-1 sm:gap-3 min-w-max">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-white text-black rounded-full text-xs sm:text-sm font-bold">
                  1
                </div>
                <span className="text-white text-xs sm:text-sm font-medium px-1 sm:px-3 whitespace-nowrap">
                  <span className="hidden sm:inline">Make Payment (2 mins)</span>
                  <span className="sm:hidden">Payment</span>
                </span>
              </div>
              
              <div className="flex items-center">
                <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-white text-black rounded-full text-xs sm:text-sm font-bold">
                  2
                </div>
                <span className="text-white text-xs sm:text-sm font-medium px-1 sm:px-3 whitespace-nowrap">
                  <span className="hidden sm:inline">Submit Brief (5 mins)</span>
                  <span className="sm:hidden">Brief</span>
                </span>
              </div>
              
              <div className="flex items-center">
                <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-white text-black rounded-full text-xs sm:text-sm font-bold">
                  3
                </div>
                <span className="text-white text-xs sm:text-sm font-medium px-1 sm:px-3 whitespace-nowrap">
                  <span className="hidden sm:inline">Get Design (48 hours)</span>
                  <span className="sm:hidden">Design</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* See the difference text */}
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-slate-600 font-medium text-sm sm:text-base">See the difference</p>
        </div>

        {/* Before After Headers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center mb-8 sm:mb-12 max-w-5xl mx-auto">
          <div className="text-center lg:text-right">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-slate-900" style={{ fontFamily: "Instrument Serif, serif" }}>
              Before
            </h3>
          </div>
          
          {/* Arrow */}
          <div className="flex justify-center order-last lg:order-none">
            <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
              <svg 
                width="48" 
                height="24" 
                viewBox="0 0 64 32" 
                fill="none" 
                className="text-blue-600 w-full h-auto"
                aria-hidden="true"
              >
                <path 
                  d="M2 16H62M62 16L46 2M62 16L46 30" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          
          <div className="text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-blue-600 relative" style={{ fontFamily: "Instrument Serif, serif" }}>
              After            
            </h3>
          </div>
        </div>

        {/* Website Mockup Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Before Image */}
          <div className="relative">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden border border-slate-200">
              <div className="aspect-[4/3] relative bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-gray-500 text-center px-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <svg 
                      className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base font-medium">Before Image</p>
                  <p className="text-xs sm:text-sm mt-1">Old hero section</p>
                </div>
              </div>
            </div>
            {/* 100% Custom Design Badge */}
            <div className="absolute -top-3 -right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
              Before
            </div>
          </div>

          {/* After Image */}
          <div className="relative">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden border border-slate-200">
              <div className="aspect-[4/3] relative bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                <div className="text-blue-600 text-center px-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <svg 
                      className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base font-medium">After Image</p>
                  <p className="text-xs sm:text-sm mt-1">New hero redesign</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 mt-16 sm:mt-24 pt-12 sm:pt-16 pb-8 sm:pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Main Text */}
            <p className="text-slate-700 text-base sm:text-lg mb-8 sm:mb-12">
              We help brands to create high-conversion Websites<br className="hidden sm:block" />
              Engineered for Brand&apos;s Success and Growth.
            </p>

            {/* CTA Button */}
            <div className="mb-6 sm:mb-8">
              <Button
                size="lg"
                className="bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] w-full sm:w-auto"
                onClick={handleCTAClick}
              >
                Redesign My Hero for $99
              </Button>
            </div>

            {/* Contact Info */}
            <p className="text-slate-600 text-sm sm:text-base mb-12 sm:mb-16">
              For inquiries, reach us at
              <a 
                href="mailto:hello@samie.studio" 
                className="text-blue-600 hover:text-blue-700 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                hello@samie.studio
              </a>
            </p>

            {/* Brand Section */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-slate-100 rounded flex items-center justify-center">
                  <span className="text-slate-700 font-bold text-sm">S</span>
                </div>
                <span className="text-slate-900 font-medium text-base sm:text-lg">Sami-E Studio</span>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-slate-600 text-sm sm:text-base">By</span>
                <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1 shadow-sm border border-slate-200">
                  <div className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center">
                    <span className="text-slate-700 font-bold text-xs">S</span>
                  </div>
                  <span className="text-slate-900 font-medium text-sm">Sami-E</span>
                </div>
              </div>
            </div>

          

          </div>
        </div>
      </footer>
    </section>
  );
}