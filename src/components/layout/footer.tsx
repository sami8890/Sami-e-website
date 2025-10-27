"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-white flex flex-col items-center justify-center py-16 sm:py-20 overflow-hidden border-t border-gray-100">
      {/* Soft top divider */}
      <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-10" />

      {/* 3D metallic logo */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-b from-gray-800 via-gray-500 to-gray-300 bg-clip-text text-transparent drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)] select-none"
        style={{
          textShadow:
            "0 1px 1px rgba(255,255,255,0.4), 0 -1px 2px rgba(0,0,0,0.2)",
          fontFamily: "Instrument Serif, serif",
        }}
      >
        Sami-E
      </motion.h1>

      {/* Reflection effect */}
      <div className="absolute top-[52%]">
        <div
          className="text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-t from-gray-400 via-gray-200 to-transparent bg-clip-text text-transparent opacity-20 scale-y-[-1] select-none"
          style={{ fontFamily: "Instrument Serif, serif" }}
        >
          Sami-E
        </div>
      </div>

      {/* Navigation links */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-12 flex items-center justify-center space-x-4 text-sm sm:text-base text-gray-800"
      >
        {/* Home - clickable now */}
        <Link
          href="/"
          className="relative font-medium text-gray-600 hover:text-black transition-colors after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-black hover:after:w-full after:transition-all after:duration-300"
        >
          Home
        </Link>

        {/* Divider dot */}
        <span className="text-gray-400">•</span>

        {/* Works - clickable */}
        <Link
          href="/work"
          className="relative font-medium text-gray-600 hover:text-black transition-colors after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-black hover:after:w-full after:transition-all after:duration-300"
        >
          Works
        </Link>

        {/* Divider dot */}
        <span className="text-gray-400">•</span>

        {/* Client Stories - new link */}
        <Link
          href="/video"
          className="relative font-medium text-gray-800 hover:text-black transition-colors px-2 py-[2px] border border-gray-200 rounded-full hover:border-black hover:bg-gray-50"
        >
          Clients
        </Link>
      </motion.div>
    </footer>
  );
}
