"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Anton } from "next/font/google";
import {
  CheckCircle,
  Clock,
  Shield,
  Award,
  HeadphonesIcon,
} from "lucide-react";
import Link from "next/link";

// Use the same font as in the Hero component
const anton = Anton({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anton",
});

export default function WhyChooseUs() {
  const [hovered, setHovered] = useState<null | number>(null);

  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" },
  ];

  return (
    <section
      className="bg-black text-white py-24 px-4 relative overflow-hidden"
      id="why-choose-us"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-90"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle, rgba(16, 185, 129, 0.1) 1px, transparent 1px),
              linear-gradient(to right, #1a1a1a 1px, transparent 1px),
              linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px, 50px 50px, 50px 50px",
          }}
        ></div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-emerald-500 opacity-5 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-emerald-500 opacity-5 blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className={`${anton.className} text-5xl md:text-6xl font-normal uppercase`}
          >
            <span className="text-emerald-400">WHY</span>{" "}
            <span className="text-white">CHOOSE US</span>
          </h2>

          {/* Stats row */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-emerald-400 mb-1">
                  {stat.value}
                </p>
                <p className="text-gray-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main feature - 1 Month Support */}
        <motion.div
          className="mb-16 bg-gradient-to-r from-emerald-900/30 to-black border border-emerald-500/30 rounded-2xl p-8 md:p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative element */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-emerald-500 opacity-10 blur-3xl"></div>

          <div className="flex flex-col md:flex-row items-center relative z-10">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <motion.div
                className="w-24 h-24 rounded-full bg-emerald-500 flex items-center justify-center mx-auto md:mx-0 mb-6"
                initial={{ scale: 1 }}
                whileInView={{ scale: [1, 1.1, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 1, times: [0, 0.5, 1], repeat: 0 }}
              >
                <HeadphonesIcon size={48} className="text-black" />
              </motion.div>
              <h3
                className={`${anton.className} text-3xl md:text-4xl font-normal text-emerald-400 mb-4 text-center md:text-left`}
              >
                1 MONTH FREE SUPPORT
              </h3>
              <p className="text-xl text-gray-300 text-center md:text-left">
                After project completion, we provide a full month of dedicated
                support at no additional cost. Our team will be there to address
                any issues, make adjustments, and ensure your website performs
                flawlessly.
              </p>
            </div>
            <div className="md:w-1/2 bg-black/50 p-6 rounded-xl border border-gray-800">
              <h4 className="text-xl font-semibold text-white mb-4">
                What&apos;s included:
              </h4>
              <ul className="space-y-3">
                {[
                  "Bug fixes and troubleshooting",
                  "Content updates and adjustments",
                  "Performance optimization",
                  "Security monitoring",
                  "Training and guidance",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  >
                    <CheckCircle
                      size={20}
                      className="text-emerald-400 mr-3 flex-shrink-0 mt-1"
                    />
                    <span className="text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Other reasons */}
        <motion.h3
          className={`${anton.className} text-2xl md:text-3xl font-normal text-white mb-8 text-center`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          MORE REASONS TO WORK WITH US
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Award size={32} />,
              title: "QUALITY WORK",
              description:
                "Our websites are built with clean code and modern design principles.",
            },
            {
              icon: <Shield size={32} />,
              title: "SECURE & RELIABLE",
              description:
                "We implement robust security measures to protect your website.",
            },
            {
              icon: <Clock size={32} />,
              title: "ALWAYS ON TIME",
              description:
                "We respect deadlines and deliver as promised, every time.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/30 border border-gray-800 p-6 rounded-xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300 ${hovered === index ? "bg-emerald-500" : "bg-gray-800"}`}
              >
                <span
                  className={`transition-colors duration-300 ${hovered === index ? "text-black" : "text-emerald-400"}`}
                >
                  {item.icon}
                </span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                {item.title}
              </h4>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-emerald-500 rounded-full text-black font-bold text-lg transition-all duration-300 hover:bg-emerald-400 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50"
          >
            GET STARTED NOW
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
