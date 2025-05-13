"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { motion } from "framer-motion";
import Image from "next/image";

const techData: Record<string, { description: string; features: string[] }> = {
  react: {
    description: "A JavaScript library for building user interfaces",
    features: [
      "Component-Based",
      "Virtual DOM",
      "Unidirectional Data Flow",
      "JSX Support",
    ],
  },
  next: {
    description: "The React Framework for Production",
    features: [
      "Hybrid SSR & SSG",
      "File-based Routing",
      "Built-in API Routes",
      "Image Optimization",
    ],
  },
  typescript: {
    description: "JavaScript with syntax for types",
    features: [
      "Static Typing",
      "IDE Support",
      "ECMAScript Compatible",
      "Object-Oriented Features",
    ],
  },
  tailwind: {
    description: "A utility-first CSS framework",
    features: [
      "Utility Classes",
      "JIT Engine",
      "Responsive Design",
      "Dark Mode",
    ],
  },
};

export function TechPreview({ name }: { name: string }) {
  const tech = techData[name];

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-gradient-to-br from-[#002F28] to-[#001F1B] shadow-lg transition-all duration-300 hover:shadow-[#00D28533] hover:ring-2 hover:ring-[#00D285]"
        >
          <div className="absolute inset-0 rounded-xl bg-[#00D285] opacity-0 blur transition-opacity duration-300 group-hover:opacity-10" />
          <Image
            src="/sa.png"
            alt={name}
            width={24}
            height={24}
            className="object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </motion.div>
      </HoverCardTrigger>
      <HoverCardContent
        className="w-80 bg-[#001F1B]/95 backdrop-blur-sm border-[#00D285]/20"
        align="start"
      >
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-[#00D285]">
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </h4>
            <p className="text-sm text-[#808785]">{tech.description}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {tech.features.map((feature) => (
                <span
                  key={feature}
                  className="inline-flex items-center rounded-full border border-[#00D285]/20 bg-[#002C25] px-2.5 py-0.5 text-xs font-medium text-[#00D285]"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
