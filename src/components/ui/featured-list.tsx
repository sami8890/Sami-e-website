"use client";

import type * as React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface FeatureListProps {
  features: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
  index: number;
}

export function FeatureList({ features, index }: FeatureListProps) {
  return (
    <div className="space-y-4">
      {features.map((feature, i) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 + i * 0.1 }}
          className="group relative"
        >
          <div className="absolute left-0 top-0 h-full w-1 rounded-full bg-gradient-to-b from-[#00D285]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="flex items-start gap-3 rounded-lg border border-transparent p-2 transition-colors duration-300 hover:border-[#00D285]/10 hover:bg-[#00D285]/5">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#002C25]">
              {feature.icon}
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-white">
                  {feature.title}
                </span>
                <Check className="h-3.5 w-3.5 text-[#00D285] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <p className="text-sm text-[#808785]">{feature.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
