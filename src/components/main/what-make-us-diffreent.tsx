"use client";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Search, Crown, Smartphone, Star, Sparkles } from "lucide-react";

const advantages = [
  {
    icon: Search,
    color: "text-blue-700",
    bgColor: "bg-blue-100/80",
    shadowColor: "shadow-blue-200/50",
    title: "SEO-Optimized",
    description:
      "Our SEO-centric design approach enhances your online visibility, driving organic traffic by securing prime ranks on Google search.",
    animation: { rotate: [0, 360], scale: [1, 1.1, 1] },
  },
  {
    icon: Crown,
    color: "text-red-600",
    bgColor: "bg-red-100/80",
    shadowColor: "shadow-red-200/50",
    title: "High-Converting Design",
    description:
      "Our engaging design techniques drive remarkable increases in conversion rates by compelling visitors to take decisive, intentional action.",
    animation: { y: [0, -5, 0], rotate: [0, 10, -10, 0] },
  },
  {
    icon: Smartphone,
    color: "text-green-700",
    bgColor: "bg-green-100/80",
    shadowColor: "shadow-green-200/50",
    title: "Peak Performance Any Screen",
    description:
      "Our fluid website experiences guarantee flawless performance across all screens, from desktops and laptops to tablets and mobile devices.",
    animation: { rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] },
  },
];

export default function CompetitiveAdvantages() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const blur = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [8, 0, 0, 8]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0.4, 1, 1, 0.4]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.95, 1, 1, 0.95]
  );

  return (
    <motion.section
      ref={containerRef}
      style={{
        filter: `blur(${blur}px)`,
        opacity,
        scale,
        backgroundColor: "#ffffff",
      }}
      className="relative py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 overflow-hidden"
    >
      {/* Enhanced layered backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-amber-100/30"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-yellow-50/25"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.2),transparent_45%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(245,158,11,0.1),transparent_50%)]"></div>

      {/* Refined pattern */}
      <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* More compact container for desktop */}
      <div className="container mx-auto relative z-10 max-w-8xl lg:max-w-6xl xl:max-w-7xl">
        {/* Compact Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20 xl:mb-24"
        >
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight leading-[0.9] text-slate-900 mb-6 sm:mb-8 lg:mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span style={{ fontFamily: "Instrument Serif, serif" }}>
              Why We&apos;re Your{" "}
              <motion.span
                className="inline-block text-slate-900"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
              >
                Perfect Choice
              </motion.span>
            </span>
          </motion.h2>
        </motion.div>

        {/* Optimized Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6 xl:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 60, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                      duration: 0.8,
                    },
                  },
                }}
                className="group"
              >
                <Card
                  className={`bg-white border border-slate-200 rounded-2xl lg:rounded-2xl ${advantage.shadowColor} shadow-lg hover:shadow-xl transition-all duration-500 h-full group-hover:-translate-y-2 hover:border-slate-300 overflow-hidden relative`}
                >
                  <CardContent className="p-6 sm:p-8 lg:p-6 xl:p-8 text-center h-full flex flex-col relative z-10">
                    {/* Compact Icon Container */}
                    <motion.div
                      className={`w-16 h-16 sm:w-18 sm:h-18 lg:w-16 lg:h-16 xl:w-18 xl:h-18 ${advantage.bgColor} rounded-xl sm:rounded-2xl lg:rounded-xl flex items-center justify-center mx-auto mb-6 sm:mb-8 lg:mb-5 xl:mb-6 border border-white/80 relative overflow-hidden shadow-md`}
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.3 },
                      }}
                      initial="rest"
                      whileInView="animate"
                      viewport={{ once: true }}
                    >
                      {/* Simple background pulse */}
                      <motion.div
                        className="absolute inset-0 bg-white/20 rounded-xl"
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      {/* Clean Animated Icon */}
                      <motion.div
                        animate={advantage.animation}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          repeatDelay: 1,
                        }}
                        whileHover={{
                          scale: 1.15,
                          transition: { duration: 0.2 },
                        }}
                        className="relative z-10"
                      >
                        <IconComponent
                          className={`w-8 h-8 sm:w-9 sm:h-9 lg:w-7 lg:h-7 xl:w-8 xl:h-8 ${advantage.color} drop-shadow-sm`}
                        />
                      </motion.div>

                      {/* Simplified sparkle effects */}
                      {(advantage.icon === Star ||
                        advantage.icon === Sparkles) && (
                        <motion.div
                          className="absolute inset-0"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                          }}
                        >
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                              style={{
                                left: `${20 + i * 25}%`,
                                top: `${15 + i * 30}%`,
                              }}
                              animate={{
                                scale: [0, 1, 0],
                                opacity: [0, 1, 0],
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.3,
                              }}
                            />
                          ))}
                        </motion.div>
                      )}
                    </motion.div>

                    {/* Compact Content */}
                    <motion.h3
                      className="text-lg sm:text-xl lg:text-lg xl:text-xl font-bold text-slate-900 mb-4 sm:mb-6 lg:mb-3 xl:mb-4 leading-tight"
                      style={{ fontFamily: "Instrument Serif, serif" }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      {advantage.title}
                    </motion.h3>

                    <motion.p
                      className="text-slate-600 leading-relaxed text-sm sm:text-base lg:text-sm xl:text-base flex-grow"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {advantage.description}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}