"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Anton } from "next/font/google";
import {
  CheckCircle,
  Shield,
  Award,
  HeadphonesIcon,
  Calendar,
} from "lucide-react";

// Use the same font as in the Hero component
const anton = Anton({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anton",
});

export default function WhyChooseUs() {
  const [hovered, setHovered] = useState<null | number>(null);
  const [showCalendly, setShowCalendly] = useState(false);

  const stats = [
    { value: "15+", label: "Projects Delivered" },
    { value: "4.9/5", label: "Client Rating" },
    { value: "Fast", label: "Response Time" },
  ];

  return (
    <section
      className="bg-zinc-950 text-white py-20 px-4 relative overflow-hidden"
      id="why-choose-us"
    >
      {/* Simplified background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-zinc-950 opacity-90"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        ></div>

        {/* Subtle decorative element */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-green-400 opacity-5 blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className={`${anton.className} text-4xl md:text-5xl font-normal uppercase mb-3`}
          >
            <span className="text-green-400">WHY</span>{" "}
            <span className="text-white">CHOOSE US</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            We deliver beautiful, functional websites that help your business
            grow
          </p>

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
                <p className="text-3xl md:text-4xl font-bold text-green-400 mb-1">
                  {stat.value}
                </p>
                <p className="text-zinc-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main feature - Simplified */}
        <motion.div
          className="mb-12 bg-zinc-900 border border-zinc-800 rounded-xl p-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <div className="w-16 h-16 rounded-full bg-green-400 flex items-center justify-center mx-auto md:mx-0 mb-6">
                <HeadphonesIcon size={32} className="text-black" />
              </div>
              <h3
                className={`${anton.className} text-2xl md:text-3xl font-normal text-green-400 mb-4 text-center md:text-left`}
              >
                Free Support for 15 Days After Launch
              </h3>
              <p className="text-zinc-300 text-center md:text-left">
                After project completion, we provide 15 days of dedicated
                support at no additional cost.
              </p>
            </div>
            <div className="md:w-1/2">
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
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  >
                    <CheckCircle
                      size={18}
                      className="text-green-400 mr-3 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-zinc-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Other reasons - Simplified */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <Award size={28} />,
              title: "Quality Work",
              description:
                "Clean code and modern design principles for every project.",
            },
            {
              icon: <Shield size={28} />,
              title: "Secure & Reliable",
              description: "Robust security measures to protect your website.",
            },
            {
              icon: <Calendar size={28} />,
              title: "Responsive Support",
              description: "Quick replies during business hours within 24 hours.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300 ${hovered === index ? "bg-green-400" : "bg-zinc-800"}`}
              >
                <span
                  className={`transition-colors duration-300 ${hovered === index ? "text-black" : "text-green-400"}`}
                >
                  {item.icon}
                </span>
              </div>
              <h4 className="text-lg font-medium text-white mb-2">
                {item.title}
              </h4>
              <p className="text-zinc-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Simplified CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <button
            onClick={() => setShowCalendly(true)}
            className="schedule-button inline-flex items-center justify-center px-6 py-3 bg-green-400 rounded-lg text-black font-medium text-base transition-all duration-300 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Schedule a Free Consultation
          </button>
        </motion.div>
      </div>

      {/* Calendly Modal - Simplified */}
      {showCalendly && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="calendly-modal-content w-full max-w-4xl h-[80vh] bg-white rounded-xl overflow-hidden shadow-xl relative"
          >
            <button
              onClick={() => setShowCalendly(false)}
              className="absolute top-4 right-4 z-10 bg-white/90 rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Close calendar"
            >
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
                className="text-gray-700"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <iframe
              src="https://calendly.com/samigabol12/45min?hide_gdpr_banner=1&background_color=121212&text_color=ffffff&primary_color=10b981"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Schedule a meeting"
              className="calendly-inline-widget"
            ></iframe>
          </motion.div>
        </div>
      )}
    </section>
  );
}