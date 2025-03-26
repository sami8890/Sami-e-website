//src/components/hero/availability-badge.tsx

"use client"

import { Clock } from "lucide-react"

export default function AvailabilityBadge() {
    return (
        <div className="absolute top-10 left-10 hidden -rotate-2 rounded-lg border border-green-500/30 bg-green-500/10 p-4 backdrop-blur lg:block shadow-lg shadow-green-900/10 transition-transform duration-300 hover:rotate-0 hover:scale-105">
            <div className="flex items-center gap-2">
                <div className="relative">
                    <Clock className="h-5 w-5 text-green-400" />
                    <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                </div>
                <div>
                    <p className="text-sm font-medium text-green-400">Available for new projects</p>
                    <p className="text-xs text-green-500/70">Limited spots for Q2 2025</p>
                </div>
            </div>
        </div>
    )
}

