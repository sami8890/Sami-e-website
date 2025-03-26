"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Star,
  ExternalLink,
  ChevronDown,
  Layout,
  Zap,
  Sparkles,
  Calendar
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function EnhancedHeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const fullText =
    "I build websites that attract customers and grow your business and brand! ";
  const heroRef = useRef(null);

  const tabs = [
    { name: "Design", icon: Layout },
    { name: "Branding", icon: Sparkles },
    { name: "Speed", icon: Zap },
  ];

  useEffect(() => {
    setIsVisible(true);

    // Typing effect
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 70);

    // Auto-rotate tabs
    const tabInterval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 3000);

    return () => {
      clearInterval(typingInterval);
      clearInterval(tabInterval);
    };
  }
  , []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="relative w-full min-h-screen overflow-hidden bg-zinc-950 text-white font-sans pt-16"
      ref={heroRef}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/10 via-zinc-900 to-zinc-950"></div>

      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgtMXYxaDF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tMi0yaDF2MWgtMXYtMXptLTItMmgxdjFoLTF2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>

      {/* Hero content */}
      <div className="relative flex flex-col justify-center min-h-screen pt-8">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-[1fr,auto] gap-8 lg:gap-12 items-center">
            <div
              className={`transition-all duration-1000 max-w-2xl ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              {/* Agency badge */}
              <div
                className={`inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                <span>Web Design Expert</span>
              </div>

              {/* Main heading */}
              <h1
                className={`mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-[1.1] transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
              >
                Need A{" "}
                <span className="text-green-400 relative inline-block">
                  Website
                  <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 100 15" preserveAspectRatio="none">
                    <path d="M0,5 Q50,15 100,5" stroke="rgba(34, 197, 94, 0.3)" strokeWidth="2" fill="none" />
                  </svg>
                </span>{" "}
                That
                <br />
                Drives{" "}
                <span className="text-green-400 relative inline-block">
                  Results?
                  <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 100 15" preserveAspectRatio="none">
                    <path d="M0,5 Q50,15 100,5" stroke="rgba(34, 197, 94, 0.3)" strokeWidth="2" fill="none" />
                  </svg>
                </span>
              </h1>


              {/* Service tabs */}
              <div className="mt-6 flex space-x-1 bg-zinc-900/50 p-1 rounded-lg w-fit">
                {tabs.map((tab, index) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={index}
                      className={`relative px-3 py-1.5 text-xs font-medium rounded-md flex items-center gap-1.5 transition-all duration-300 ${
                        activeTab === index
                          ? "text-black bg-green-400"
                          : "text-zinc-400 hover:text-zinc-200"
                      }`}
                      onClick={() => setActiveTab(index)}
                      aria-selected={activeTab === index}
                      role="tab"
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {tab.name}
                      {activeTab === index && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-green-400 rounded-md -z-10"
                          transition={{ type: "spring", duration: 0.5 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Client-friendly benefits */}
              <div className="mt-6 relative h-6 overflow-hidden">
                <div className="absolute left-0 animate-marquee whitespace-nowrap flex gap-4">
                  {[
                    "Mobile-Friendly",
                    "Fast Loading",
                    "Easy to Update",
                    "Search Optimized",
                    "User-Friendly",
                    "Brand-Focused",
                    "Secure",
                    "Affordable",
                  ].map((benefit, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 rounded-full bg-zinc-800/50 text-zinc-400"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
                <div className="absolute left-0 animate-marquee2 whitespace-nowrap flex gap-4">
                  {[
                    "Mobile-Friendly",
                    "Fast Loading",
                    "Easy to Update",
                    "Search Optimized",
                    "User-Friendly",
                    "Brand-Focused",
                    "Secure",
                    "Affordable",
                  ].map((benefit, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 rounded-full bg-zinc-800/50 text-zinc-400"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              {/* Subheading */}
              <div
                className={`mt-4 transition-all duration-1000 delay-100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
              >
                <p className="text-base text-zinc-300 leading-relaxed">
                  Let&apos;s create a website that boosts your business and converts
                  visitors into customers!
                </p>
              </div>

              {/* Typed text */}
              <div
                className={`mt-4 transition-all duration-1000 delay-100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
              >
                <div className="inline-block px-3 py-1 rounded-md bg-zinc-900/80 border border-zinc-800 backdrop-blur-sm">
                  <p className="text-sm font-medium text-green-400">
                    {typedText}
                    <span className="animate-pulse">|</span>
                  </p>
                </div>
              </div>

              {/* CTA buttons */}
              <div
                className={`mt-8 flex flex-col gap-4 sm:flex-row transition-all duration-1000 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
              >
                <Link
                  href="https://calendly.com/your-username/45min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-400 rounded-full opacity-0 group-hover:opacity-20 transition duration-200"></div>
                  <Button className="relative bg-green-500 px-6 py-2 text-sm font-medium hover:bg-green-600 overflow-hidden shadow-lg shadow-green-900/20 group-hover:shadow-green-900/40 transition-all duration-300">
                    <Calendar className="relative z-10 mr-2 h-4 w-4" />
                    <span className="relative z-10">
                      Schedule a 45-Min Call
                    </span>
                    <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  </Button>
                </Link>

                <Link href="#work">
                  <Button
                    variant="outline"
                    className="border-zinc-800 bg-zinc-900/50 px-6 py-2 text-sm font-medium backdrop-blur hover:bg-zinc-800 hover:text-white"
                  >
                    <span>View My Work</span>
                  </Button>
                </Link>
              </div>

              {/* Trusted by */}
              <div
                className={`mt-12 transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Trusted by
                </p>
                <div className="mt-3 flex flex-wrap gap-4 items-center">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-6 w-16 bg-zinc-800/50 rounded-md flex items-center justify-center"
                    >
                      <div className="h-3 w-10 bg-zinc-700/50 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="grid grid-cols-2 gap-4 max-w-lg">
                {/* Stats boxes with hover effects - client-friendly metrics */}
                <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-4 backdrop-blur hover:border-green-500/30 hover:bg-zinc-900/50 transition-all duration-300 group">
                  <div className="flex items-end justify-between">
                    <p className="text-3xl font-bold text-green-400 group-hover:scale-110 transition-transform duration-300">
                      98%
                    </p>
                    <span className="text-green-500/50 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      ★★★★★
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-zinc-400">
                    Client Satisfaction
                  </p>
                </div>

                <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-4 backdrop-blur hover:border-green-500/30 hover:bg-zinc-900/50 transition-all duration-300 group">
                  <div className="flex items-end justify-between">
                    <p className="text-3xl font-bold text-green-400 group-hover:scale-110 transition-transform duration-300">
                      20+
                    </p>
                    <span className="text-green-500/50 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      🚀
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-zinc-400">
                    Websites Delivered
                  </p>
                </div>

                <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-4 backdrop-blur hover:border-green-500/30 hover:bg-zinc-900/50 transition-all duration-300 group">
                  <div className="flex items-end justify-between">
                    <p className="text-3xl font-bold text-green-400 group-hover:scale-110 transition-transform duration-300">
                      40%
                    </p>
                    <span className="text-green-500/50 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      📈
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-zinc-400">More Visitors</p>
                </div>

                <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-4 backdrop-blur hover:border-green-500/30 hover:bg-zinc-900/50 transition-all duration-300 group">
                  <div className="flex items-end justify-between">
                    <p className="text-3xl font-bold text-green-400 group-hover:scale-110 transition-transform duration-300">
                      24/7
                    </p>
                    <span className="text-green-500/50 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      ⏰
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-zinc-400">
                    Support Available
                  </p>
                </div>

                {/* Enhanced testimonial */}
                <div className="col-span-2 mt-4 rounded-lg border border-zinc-800 bg-zinc-900/30 p-4 backdrop-blur hover:border-green-500/30 hover:bg-zinc-900/50 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star
                            key={i}
                            className="h-3 w-3 fill-green-400 text-green-400"
                          />
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="italic text-zinc-300 text-xs leading-relaxed">
                        &quot;Working with Muhammad Sami was an excellent experience.
                        He delivered our website ahead of schedule and our
                        online sales have increased by 40% since launch!&quot;
                      </p>
                      <p className="mt-2 text-xs font-medium text-green-400">
                        — CEO, Contntr.com
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-zinc-800 flex justify-between items-center">
                    <p className="text-xs text-zinc-500">Verified Client</p>
                    <Link
                      href="#testimonial"
                      className="text-green-400 text-xs flex items-center gap-1 hover:text-green-300"
                    >
                      <span>View more testimonials</span>
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute left-1/2 bottom-8 transform -translate-x-1/2 flex flex-col items-center cursor-pointer transition-opacity duration-300 hover:opacity-80 mt">
            <button
              onClick={scrollToContent}
              aria-label="Scroll to explore more content"
              className="flex flex-col items-center  focus:ring-offset-zinc-900 rounded-full p-2"
            >
              <p className="text-xs text-zinc-500 mb-1">Scroll to explore</p>
              <div className="animate-bounce">
                <ChevronDown className="h-4 w-4 text-green-400" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Accessibility skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-green-500 text-black px-4 py-2 rounded-md text-sm font-medium z-50"
      >
        Skip to main content
      </a>
    </div>
  );
}
