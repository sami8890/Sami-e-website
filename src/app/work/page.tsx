"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function UnderDevelopmentPage() {
  const timelineSteps = [
    { phase: "Planning", status: "completed" },
    { phase: "Design", status: "completed" },
    {
      phase: "Development",
      status: "current",
      date: "Sep 27, 2025",
      time: "In Progress",
    },
  ];

  return (
    <section
      id="under-development"
      className="relative min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-red-50/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.05),transparent_50%)]"></div>

      {/* 🔹 Back to Main Button (Top Left) */}
      <motion.div
        className="top-6 left-6 z-50 mt-9 mb-5 sticky"
      >
        <Link href="/">
         <button className="px-5 py-2.5 rounded-xl bg-black backdrop-blur-md border border-slate-200 shadow-md text-white font-medium  transition-all">
  ← Back to Main
</button>

        </Link>
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 sm:px-8 relative z-10 flex flex-col items-center">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.02, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(239, 68, 68, 0.3)",
                    "0 0 0 6px rgba(239, 68, 68, 0)",
                    "0 0 0 0 rgba(239, 68, 68, 0)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="inline-flex items-center gap-1 bg-red-50 border border-red-200 rounded-full px-3 py-1.5 text-sm text-red-700 font-medium shadow-sm"
              >
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                <span>Under Development</span>
              </motion.div>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-slate-900">
                Coming{" "}
                <span
                  className="text-red-600"
                  style={{ fontFamily: "Instrument Serif, serif" }}
                >
                  Soon
                </span>
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-lg md:text-xl text-slate-600 max-w-xl mx-auto leading-relaxed">
                We’re working on this section — it will be ready by 4th October
                2025.
              </p>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16"
            >
              <div className="bg-white/70 backdrop-blur-xl border border-slate-200/50 rounded-3xl p-8 shadow-2xl max-w-3xl mx-auto">
                <div className="flex items-center justify-between">
                  {timelineSteps.map((step, index) => (
                    <motion.div
                      key={step.phase}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      className="flex flex-col items-center relative"
                    >
                      {/* Connection line */}
                      {index < timelineSteps.length - 1 && (
                        <div className="absolute top-6 left-full w-full h-0.5 bg-slate-200 -translate-y-1/2 hidden sm:block" />
                      )}

                      {/* Step indicator */}
                      <div
                        className={`
                          w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold relative z-10
                          ${
                            step.status === "completed"
                              ? "bg-green-500 text-white"
                              : step.status === "current"
                                ? "bg-red-500 text-white animate-pulse"
                                : "bg-slate-200 text-slate-500"
                          }
                        `}
                      >
                        {step.status === "completed" ? "✓" : index + 1}
                      </div>

                      <div className="mt-3 text-center">
                        <span
                          className={`
                            block text-xs sm:text-sm font-medium
                            ${step.status === "current" ? "text-red-600" : "text-slate-600"}
                          `}
                        >
                          {step.phase}
                        </span>
                        <span className="block text-xs text-slate-500 mt-1">
                          {step.date}
                        </span>
                        <span className="block text-xs text-slate-400">
                          {step.time}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
