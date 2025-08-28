"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import ImageMarquee from "@/components/main/marque";
// Sample client data - replace with your actual clients
const clients = [
  {
    name: "Kyle Nianga",
    image: "/testimonial/kyle.png",
    company: "SEO Agency Startup ",
  },
  {
    name: "Ahmed Hassan",
    image: "/testimonial/ahmed.png",
    company: "Video-Editor Agency",
  },
  {
    name: "Muhammad Ibrahim",
    image: "/testimonial/ibrahim.png",
    company: "Portfolio_website",
  },
];

// Typewriter effect component
const tools = [
  {
    name: "Figma",
    icon: "https://framerusercontent.com/images/i0ob5TnIF36Osq1Gd7Tb2UaOCRE.svg",
    width: 24,
    height: 25,
  },
  {
    name: "Framer",
    icon: "https://framerusercontent.com/images/q0LOsiH3qEkXl83edU0uXNuRQ.svg",
    width: 24,
    height: 25,
  },
  {
    name: "Webflow",
    icon: "https://framerusercontent.com/images/FCRRXxTzNQozUhv4PjbXZqjSeGg.png",
    width: 97,
    height: 97,
  },
  {
    name: "NextJS",
    icon: "https://framerusercontent.com/images/Y0hOrMC1SZrltsBnp8CUVxdu0Hw.svg",
    width: 48,
    height: 48,
  },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden pt-16 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-12"
    >
      {/* Premium background with subtle gradient - Grid pattern removed */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>

      <div className="container mx-auto px-6 sm:px-8 relative z-10 flex flex-col items-center">
        <div className="max-w-4xl mx-auto py-8 md:py-0">
          <div className="text-center space-y-6 sm:space-y-7 md:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="pt-2 sm:pt-6 md:pt-0"
            >
              <motion.div
                animate={{
                  scale: [1, 1.02, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(34, 197, 94, 0.3)",
                    "0 0 0 6px rgba(34, 197, 94, 0)",
                    "0 0 0 0 rgba(34, 197, 94, 0)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-flex items-center gap-1 bg-green-50 border border-green-200 rounded-full px-2.5 py-1 text-xs text-green-700 font-medium shadow-sm"
              >
                <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                <span>We Are Accepting New Projects</span>
              </motion.div>
            </motion.div>

            {/* Better sized, professional headline with improved mobile spacing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="px-2 sm:px-4 md:px-0"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.2] sm:leading-[1.15] md:leading-[1.1] text-slate-900">
                We Build{" "}
                <span
                  className="text-blue-600 block sm:inline mt-2 sm:mt-0"
                  style={{ fontFamily: "Instrument Serif, serif" }}
                >
                  High-Converting Websites
                </span>{" "}
                <span className="block sm:inline mt-2 sm:mt-0">
                  That Drive Results
                </span>
              </h1>
            </motion.div>

            {/* Better sized subheading with mobile spacing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-3 px-4 sm:px-6 md:px-0 pt-2 sm:pt-4"
            >
              <p className="text-base sm:text-lg md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                We build websites that convert. Average 40% increase in
                conversions within 60 days.
              </p>
            </motion.div>

            {/* Streamlined CTA section with much better mobile spacing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6 sm:space-y-7 pt-6 sm:pt-8 md:pt-2"
            >
              {/* Clean CTA buttons with much better mobile spacing */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-6 sm:px-4 pb-6 sm:pb-0">
                {/* Primary CTA Button */}
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-black text-white px-8 py-4 text-base font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] group relative overflow-hidden"
                  onClick={() => {
                    document.getElementById("testimonials")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full"></div>
                  <span className="relative z-10 flex items-center justify-center">
                    View Success Stories
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </Button>

                {/* Secondary CTA Button - Enhanced */}
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-2 border-black text-black hover:bg-black hover:text-white px-6 py-4 text-base font-semibold rounded-full transition-all duration-300 bg-white/80 backdrop-blur-sm hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group relative overflow-hidden min-w-[180px]"
                  onClick={() => {
                    window.open(
                      "https://wa.me/923701247494?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation%20call",
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                >
                  {/* Subtle pulse animation background */}
                  <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-full"></div>

                  <div className="relative z-10 flex items-center justify-center gap-3">
                    <div className="relative">
                      {/* Profile image with subtle glow */}
                      <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-transparent group-hover:ring-green-500/30 transition-all duration-300">
                        <Image
                          src="/main.png"
                          alt="Profile photo"
                          width={28}
                          height={28}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Online indicator dot */}
                      <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-sm animate-pulse"></div>
                    </div>

                    <span className="font-semibold">Book a Call</span>

                    {/* WhatsApp icon that appears on hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-x-[-10px] group-hover:translate-x-0">
                      <svg
                        className="w-4 h-4 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                      </svg>
                    </div>
                  </div>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Social Proof Section with optimal spacing */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-16 sm:mt-20 md:mt-16 max-w-4xl mx-auto hidden md:block"
        >
          <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-3xl p-6 shadow-2xl">
            {/* Rating with better spacing */}
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.div
                    key={star}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.5 + star * 0.1 }}
                  >
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>
              <p className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                4.9/5 Client Rating
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-base">
                &quot;Increased our online sales by 65% in just 2 months&quot;
              </p>
            </div>

            {/* Clients and Stats with better spacing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Client Avatars */}
              <div className="flex items-center justify-center md:justify-start">
                <div className="flex -space-x-3">
                  {clients.map((client, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.6 + i * 0.1 }}
                      className="relative"
                    >
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-[2px] shadow-lg">
                        <div className="h-full w-full rounded-full bg-white dark:bg-slate-900 p-1">
                          <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                            <Image
                              src={
                                client.image ||
                                "/placeholder.svg?height=48&width=48&query=client avatar"
                              }
                              alt={`${client.name}'s avatar`}
                              className="h-full w-full object-cover rounded-full"
                              height={48}
                              width={48}
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="ml-4 text-left">
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Trusted by
                  </p>
                  <p className="font-bold text-slate-900 dark:text-white text-sm">
                    15+ Happy Clients
                  </p>
                </div>
              </div>

              {/* Stats with better spacing */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                >
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    40%
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    Avg. Conversion Boost
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.9 }}
                >
                  <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    7 Days
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    Avg. Delivery
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2 }}
                >
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    100%
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    Satisfaction Rate
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
        <ImageMarquee />
        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="mt-12 sm:mt-16 md:mt-12 max-w-4xl mx-auto"
        >
          <div className="bg-[#EAEAEA] backdrop-blur-lg border border-slate-200/50 rounded-lg p-6 sm:p-8 shadow-lg">
            <div className="text-center space-y-6">
              {/* Tools heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.4 }}
              >
                <p className="text-slate-700 text-base sm:text-lg font-medium">
                  We use industry standard tools like
                </p>
              </motion.div>

              {/* Tools grid */}
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 2.6 + index * 0.1 }}
                    className="flex items-center gap-3 group"
                  >
                    {/* Tool icon */}
                    <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-white shadow-sm border border-slate-100 group-hover:shadow-md transition-all duration-300">
                      <Image
                        src={tool.icon}
                        alt={`${tool.name} icon`}
                        width={tool.name === "Webflow" ? 24 : tool.width}
                        height={tool.name === "Webflow" ? 24 : tool.height}
                        className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                      />
                    </div>

                    {/* Tool name */}
                    <span className="text-slate-800 font-semibold text-sm sm:text-base group-hover:text-blue-600 transition-colors duration-300">
                      {tool.name}
                      {index < tools.length - 1 && (
                        <span className="text-slate-400 ml-1">,</span>
                      )}
                      {index === tools.length - 2 && (
                        <span className="text-slate-700 ml-2"></span>
                      )}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
