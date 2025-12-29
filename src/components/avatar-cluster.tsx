"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const clients = [
  {
    name: "Kyle Nianga",
    image: "/testimonial/kyle.png",
    company: "SEO Agency Startup",
  },
  {
    name: "Ahmed Hassan",
    image: "/testimonial/ahmed.png",
    company: "Video-Editor Agency",
  },
  {
    name: "Muhammad Ibrahim",
    image: "/testimonial/ibrahim.png",
    company: "Portfolio Website",
  },
]

export default function AvatarCluster() {
  const displayedClients = clients.slice(0, 5)
  const remainingCount = Math.max(0, clients.length - 5)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  }

  const avatarVariants = {
    hidden: { opacity: 0, y: 12, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
        delay: i * 0.08,
      },
    }),
  }

  const hoverVariants = {
    hover: {
      scale: 1.12,
      y: -8,
      transition: {
        duration: 0.3,
        ease: [0.23, 1, 0.32, 1],
      },
    },
    tap: { scale: 0.98 },
  }

  const floatVariants = {
    animate: (i: number) => ({
      y: [0, -5, 0],
      transition: {
        duration: 4 + i * 0.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.15,
      },
    }),
  }

  const labelVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
        delay: 0.4,
      },
    },
  }

  const containerBoundsVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.23, 1, 0.32, 1],
        delay: 0.1,
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      className="flex flex-col items-center justify-center gap-3 sm:gap-5 w-full"
    >
      {/* Avatar Stack Container with subtle border */}
      <motion.div
        variants={containerBoundsVariants}
        className="flex items-center justify-center px-4 py-3 sm:py-4 rounded-2xl  backdrop-blur-md border border-white/60 shadow-sm hover:shadow-md transition-all duration-300"
      >
        <div className="flex items-center justify-center">
          <div className="flex -space-x-2.5 sm:-space-x-3.5 md:-space-x-4">
            {displayedClients.map((client, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={avatarVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                whileTap="tap"
                viewport={{ once: true }}
                className="relative group"
              >
                <motion.div
                  custom={i}
                  variants={floatVariants}
                  animate="animate"
                  className="relative z-10"
                >
                  {/* Glow effect on hover */}
                  <motion.div
                    whileHover={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 rounded-full blur-lg opacity-0 transition-opacity duration-300 -z-10 group-hover:opacity-40"
                  />

                  {/* Avatar Ring */}
                  <motion.div
                    whileHover="hover"
                    variants={hoverVariants}
                    className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 p-[1.5px] shadow-lg transition-shadow duration-300 group-hover:shadow-2xl cursor-pointer relative"
                  >
                    {/* Inner white border */}
                    <div className="h-full w-full rounded-full bg-white p-[2.5px]">
                      {/* Image container */}
                      <div className="relative h-full w-full overflow-hidden rounded-full bg-gradient-to-br from-slate-50 to-slate-100">
                        <Image
                          src={client.image}
                          alt={client.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                          sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, 56px"
                          priority={i < 2}
                        />
                        {/* Overlay on hover */}
                        <motion.div
                          whileHover={{ opacity: 1 }}
                          initial={{ opacity: 0 }}
                          className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Premium Tooltip */}
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.9 }}
                    whileHover={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 hidden sm:block pointer-events-none z-50"
                  >
                    <div className="bg-slate-950/95 backdrop-blur-sm text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg whitespace-nowrap text-xs sm:text-sm font-medium shadow-2xl border border-white/10">
                      <p className="font-semibold">{client.name}</p>
                      <p className="text-slate-300 text-xs font-normal mt-0.5">
                        {client.company}
                      </p>
                      {/* Arrow pointer */}
                      <motion.div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-950/95 rotate-45 -mt-0.5" />
                    </div>
                  </motion.div>

                  {/* Badge on mobile */}
                  <motion.div
                    whileHover={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    className="absolute -bottom-1 -right-1 sm:hidden bg-white rounded-full p-1 shadow-md text-xs font-bold text-slate-900"
                  >
                    ✓
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}

            {/* "+X more" badge */}
            {remainingCount > 0 && (
              <motion.div
                custom={displayedClients.length}
                variants={avatarVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="relative group ml-1 sm:ml-2"
              >
                <motion.div
                  custom={displayedClients.length}
                  variants={floatVariants}
                  animate="animate"
                  whileHover={{ scale: 1.1 }}
                  className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 p-[1.5px] shadow-lg flex items-center justify-center font-bold text-slate-700 text-xs sm:text-sm md:text-base cursor-pointer transition-all duration-300 group-hover:shadow-xl group-hover:from-slate-300 group-hover:to-slate-300 border border-slate-300/50"
                >
                  <span className="text-slate-800 font-bold">+{remainingCount}</span>
                </motion.div>

                {/* Hover effect for +X */}
                <motion.div
                  whileHover={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 hidden sm:block pointer-events-none"
                >
                  <div className="bg-slate-950/95 backdrop-blur-sm text-white px-3 sm:px-4 py-2 rounded-lg whitespace-nowrap text-xs sm:text-sm font-medium shadow-2xl border border-white/10">
                    More clients
                    <motion.div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-950/95 rotate-45 -mt-0.5" />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Premium Label Text */}
      <motion.div
        variants={labelVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-xs sm:text-sm text-slate-600 font-semibold tracking-tight uppercase letter-spacing-0.5">
          Trusted by 50+ founders & teams
        </p>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true }}
          className="h-0.5 w-12 bg-gradient-to-r from-transparent via-blue-500 to-transparent mt-2 mx-auto"
        />
      </motion.div>

      {/* Subtext for additional context */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="text-xs text-slate-500 text-center px-4"
      >
        Join {clients.length}+ visionary teams building the future
      </motion.p>
    </motion.div>
  )
}