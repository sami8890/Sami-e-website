"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Clean Logo Component
function Logo() {
  return (
    <div className="flex items-center">
      <Image
        src="/sami2.png" 
        alt="Logo"
        className="h-auto w-auto object-contain max-h-12" // Logo size fixed
        width={90}
        height={90}
      />
    </div>
  );
}

// Scroll Progress Indicator (Amber/Gold)
function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = winHeightPx > 0 ? scrollPx / winHeightPx : 0;
      setScrollProgress(scrolled);
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div
      className="absolute bottom-0 left-0 h-[2px] bg-amber-700 origin-left z-50"
      style={{ width: `${scrollProgress * 100}%` }}
    />
  );
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (typeof document === "undefined") return;
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/#projects" },
    { name: "Services", href: "/#services" },
    { name: "Reviews", href: "/#testimonials" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm" // Sirf Background change hoga
          : "bg-transparent" // Transparent start mein
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* FIXED HEIGHT: h-20 (80px) for both states */}
        <div className="flex items-center justify-between h-20 transition-all duration-300">
          
          {/* Logo */}
          <Link href="/" aria-label="Home" className="flex items-center">
             <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                    isScrolled 
                    ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100" 
                    : "text-slate-700 hover:text-slate-900 hover:bg-white/50"
                }`}
                onClick={(e) => {
                    if (item.href.startsWith("/#")) {
                        e.preventDefault();
                        const id = item.href.replace("/#", "");
                        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                    }
                }}
              >
                {item.name}
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
                href="https://wa.me/923701247494"
                target="_blank"
                className="ml-4 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-6 py-3 rounded-sm transition-all shadow-md hover:shadow-lg"
            >
                Let&apos;s Talk
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              className="p-2 text-slate-700 hover:text-slate-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              ref={dropdownRef}
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="absolute top-20 right-4 w-64 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 overflow-hidden z-50"
            >
              <div className="py-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-6 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="h-px bg-slate-100 my-2" />
                <Link
                    href="https://wa.me/923701247494"
                    className="block px-6 py-3 text-sm font-bold text-amber-700 hover:bg-amber-50"
                >
                    Book Consultation
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <ScrollProgress />
    </header>
  );
}