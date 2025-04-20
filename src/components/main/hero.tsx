"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Star,
  ExternalLink,
  Layout,
  Zap,
  Sparkles,
 Eye,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

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

  const clients = [
    {
      name: "Kyle",
      image: "/testimonial/kyle.png",
    },
    {
      name: "Muhammad Ibrahim ",
      image: "/testimonial/ibrahim.png",
    },
    {
      name: "Ahmed Hassan ",
      image: "/testimonial/ahmed.png",
    },
    {
      name: "Charles Benford",
      image: "/testimonial/akira.png",
    },
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
  }, []);

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
                We Build
                <span className="text-green-400 relative inline-block ml-6 ">
                  Website
                  <svg
                    className="absolute -bottom-1 left-0 w-full"
                    viewBox="0 0 100 15"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,5 Q50,15 100,5"
                      stroke="rgba(34, 197, 94, 0.3)"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </span>{" "}
                That
                <br />
                Drives{" "}
                <span className="text-green-400 relative inline-block">
                  Results?
                  <svg
                    className="absolute -bottom-1 left-0 w-full"
                    viewBox="0 0 100 15"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,5 Q50,15 100,5"
                      stroke="rgba(34, 197, 94, 0.3)"
                      strokeWidth="2"
                      fill="none"
                    />
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
              {/* <div
                className={`mt-4 transition-all duration-1000 delay-100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
              >
                <p className="text-base text-zinc-300 leading-relaxed">
                  Let&apos;s create a website that boosts your business and converts
                  visitors into customers!
                </p>
              </div> */}

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
                <Link href="#testimonial">
                  <div className="absolute  bg-gradient-to-r from-green-600 to-green-400 rounded-md "></div>
                  <Button className="relative  bg-green-500 px-6 py-6 text-sm font-medium  overflow-hidden  shadow-green-900/20 group-hover:shadow-green-900/40 transition-all duration-300">
                    <Eye className="relative z-10 mr-2 h-2 w-2" />
                    <span className="relative z-10 font-bold">
                      See Live Demos
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
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 backdrop-blur-sm">
                  <p className="text-sm font-medium uppercase tracking-wider text-green-400 flex items-center gap-2 mb-4">
                    <Star className="h-4 w-4 fill-green-400 text-green-400" />
                    Trusted by Top-Tier Creators
                  </p>
                  <div className="mt-3 flex flex-wrap gap-6 items-center justify-center md:justify-start">
                    {/* Client avatars with actual images */}
                    {clients.map((client, i) => (
                      <div key={i} className="relative group">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 p-[2px] transition-all duration-300 group-hover:scale-110 shadow-lg shadow-green-900/20">
                          <div className="h-full w-full rounded-full bg-zinc-900 p-1 backdrop-blur-sm">
                            <div className="flex h-full w-full items-center justify-center rounded-full bg-zinc-800 overflow-hidden">
                              <Image
                                src={client.image || "/placeholder.svg"}
                                alt={client.name}
                                className="h-full w-full object-cover rounded-full"
                                height={64}
                                width={64}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-zinc-800 text-zinc-200 text-xs px-3 py-1.5 rounded-full whitespace-nowrap font-medium border border-zinc-700">
                            {client.name}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-3 border-t border-zinc-800/50">
                    <p className="text-xs text-zinc-400 text-center md:text-left">
                      Join our growing list of satisfied clients who&apos;ve
                      seen real business growth
                    </p>
                  </div>
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
                      100%
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
                      10+
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
                        &quot;  Sami absolutely crushed it with my website in less than a week. He took the time to really understand what I wanted and brought it to life in a way that felt personal and unique.If you need a web developer who cares about the details, I highly recommend Sami.&quot;
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
        </div>
      </div>
    </div>
  );
}
