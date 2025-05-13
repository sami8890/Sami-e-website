"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Eye, Star } from "lucide-react"
import { motion } from "framer-motion"

// Sample client data - replace with your actual clients
const clients = [
  {
    name: "Kyle Nianga",
    image: "/testimonial/kyle.png",
  },
  {
    name: "Ahmed Hassan",
    image: "/testimonial/ahmed.png",
  },
  {
    name: "Muhammad Ibrahim",
    image: "/testimonial/ibrahim.png",
  },
]

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-white to-gray-50 dark:from-zinc-900 dark:to-zinc-800"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Main heading */}
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
              >
                We Build
                <span className="text-blue-600 dark:text-blue-400 relative inline-block">
                  Websites
                  <svg
                    className="absolute bottom-0 left-0 w-full"
                    height="6"
                    viewBox="0 0 232 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5.26C63.1667 2.62 196.12 -0.0733337 230.6 5.26"
                      stroke="#2563eb"
                      strokeWidth="3"
                      strokeLinecap="round"
                      className="dark:stroke-blue-400"
                    />
                  </svg>
                </span>{" "}
                That <br />
                Grow <span className="text-blue-600 dark:text-blue-400">Business</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-lg text-gray-700 dark:text-gray-300 mx-auto max-w-2xl"
              >
                I build websites that attract customers and grow your business with conversion-focused design and
                performance optimization.
              </motion.p>
            </div>

            {/* Service tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3 justify-center"
            >
              <div className="px-4 py-2 text-sm bg-white dark:bg-zinc-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-zinc-700 rounded-md flex items-center shadow-sm">
                <svg
                  className="mr-2 h-4 w-4 text-blue-600 dark:text-blue-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                Design
              </div>
              <div className="px-4 py-2 text-sm bg-white dark:bg-zinc-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-zinc-700 rounded-md flex items-center shadow-sm">
                <svg
                  className="mr-2 h-4 w-4 text-blue-600 dark:text-blue-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                </svg>
                Branding
              </div>
              <div className="px-4 py-2 text-sm bg-white dark:bg-zinc-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-zinc-700 rounded-md flex items-center shadow-sm">
                <svg
                  className="mr-2 h-4 w-4 text-blue-600 dark:text-blue-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m13 2-2 2h-2v2l-2 2 2 2v2h2l2 2 2-2h2v-2l2-2-2-2v-2h-2l-2-2Z"></path>
                  <circle cx="13" cy="13" r="3"></circle>
                </svg>
                Speed
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-5 pt-4 justify-center"
            >
              <Button id="testimonials" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-6 h-12 font-medium text-base rounded-md">
                <Eye className="mr-2 h-5 w-5" />
                See Live Demos
              </Button>
              <Button
                variant="outline"
                id="work"
                className="border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800 px-6 py-6 h-12 font-medium text-base rounded-md"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            {/* Trusted by */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12"
            >
              <div className="bg-white/80 dark:bg-zinc-800/80 border border-gray-200 dark:border-zinc-700 rounded-xl p-5 backdrop-blur-sm shadow-md">
                <p className="text-sm font-medium uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-2 mb-4">
                  <Star className="h-4 w-4 fill-blue-600 dark:fill-blue-400 text-blue-600 dark:text-blue-400" />
                  Trusted by Top Creators
                </p>
                <div className="mt-3 flex flex-wrap gap-5 items-center justify-center md:justify-start">
                  {/* Client avatars */}
                  {clients.slice(0, 3).map((client, i) => (
                    <div key={i} className="relative group">
                      <div className="h-14 w-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-[2px] shadow-lg shadow-blue-900/20">
                        <div className="h-full w-full rounded-full bg-white dark:bg-zinc-900 p-1">
                          <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-100 dark:bg-zinc-800 overflow-hidden">
                            <Image
                              src={client.image || "/placeholder.svg"}
                              alt={client.name}
                              className="h-full w-full object-cover rounded-full"
                              height={56}
                              width={56}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white dark:bg-zinc-800 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-full whitespace-nowrap shadow-md">
                          {client.name}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Rating */}
                  <div className="flex flex-col items-center md:items-start">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-blue-400 text-blue-400" />
                      ))}
                    </div>
                    <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">100% Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 flex flex-col items-center text-center border border-gray-200 dark:border-zinc-700 shadow-sm">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
              <div className="text-gray-700 dark:text-gray-300">Projects Delivered</div>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 flex flex-col items-center text-center border border-gray-200 dark:border-zinc-700 shadow-sm">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">4.9/5</div>
              <div className="text-gray-700 dark:text-gray-300">Client Rating</div>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 flex flex-col items-center text-center border border-gray-200 dark:border-zinc-700 shadow-sm">
              <div className="flex items-center text-blue-600 dark:text-blue-400 text-2xl font-bold mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 mr-2"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                Fast
              </div>
              <div className="text-gray-700 dark:text-gray-300">Response Time</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
