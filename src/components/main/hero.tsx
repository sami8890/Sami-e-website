"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Star } from "lucide-react"
import { motion } from "framer-motion"

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
]

const benefits = ["30% more leads guaranteed", "Mobile-first responsive design", "SEO optimized for rankings"]

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden pt-32 pb-20 bg-white"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main content */}
          <div className="text-center space-y-8 max-w-5xl mx-auto">
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight"
              >
                Turn Visitors Into
                <span className="block text-blue-600 dark:text-blue-400 relative mt-2">
                  Paying Customers
                  <svg
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full max-w-md"
                    height="8"
                    viewBox="0 0 300 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.2, delay: 1 }}
                      d="M1 4C75 1.5 225 1.5 299 4"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      className="text-blue-600 dark:text-blue-400"
                    />
                  </svg>
                </span>
              </motion.h1>

              {/* Simple value prop */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
              >
                I build websites that turn visitors into paying customers. Average 40% increase in conversions within 60
                days.
              </motion.p>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap justify-center gap-6 md:gap-8"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200/50 dark:border-slate-700/50 shadow-lg"
                >
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium text-sm md:text-base">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Single clear CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-lg"
                onClick={() => {
                  window.open(
                    "https://wa.me/923701247494?text=Hi%2C%20I%20want%20a%20high-converting%20website",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }}
              >
                Get Your Website
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            {/* Simple social proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center justify-center gap-8 text-sm text-gray-500"
            >
              <div>✓ 1-2 week delivery</div>
              <div>✓ Mobile-first design</div>
              <div>✓ SEO optimized</div>
            </motion.div>
          </div>

          {/* Social Proof Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-20 max-w-4xl mx-auto"
          >
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-3xl p-8 shadow-2xl">
              {/* Rating */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.div
                      key={star}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 1.5 + star * 0.1 }}
                    >
                      <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-2xl font-bold text-slate-900 dark:text-white mb-2">4.9/5 Client Rating</p>
                <p className="text-slate-600 dark:text-slate-400 text-lg">
                  &quot;Increased our online sales by 65% in just 2 months&quot;
                </p>
              </div>

              {/* Clients and Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Client Avatars */}
                <div className="flex items-center justify-center md:justify-start">
                  <div className="flex -space-x-4">
                    {clients.map((client, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1.6 + i * 0.1 }}
                        className="relative"
                      >
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-[3px] shadow-xl">
                          <div className="h-full w-full rounded-full bg-white dark:bg-slate-900 p-1">
                            <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                              <Image
                                src={client.image || "/placeholder.svg?height=64&width=64"}
                                alt={client.name}
                                className="h-full w-full object-cover rounded-full"
                                height={64}
                                width={64}
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="ml-6 text-left">
                    <p className="text-sm text-slate-600 dark:text-slate-400">Trusted by</p>
                    <p className="font-bold text-slate-900 dark:text-white">15+ Happy Clients</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.8 }}
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      40%
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Avg. Conversion Boost</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.9 }}
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                      7 Days
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Avg. Delivery</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2 }}
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      100%
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Satisfaction Rate</div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

     
    </section>
  )
}
