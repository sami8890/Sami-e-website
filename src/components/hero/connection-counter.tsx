//src/components/hero/connection-counter.tsx
"use client"

import { Users } from "lucide-react"
import { useEffect, useState } from "react"

export default function ConnectionCounter() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if (count < 500) {
                setCount((prev) => Math.min(prev + Math.floor(Math.random() * 20) + 1, 500))
            } else {
                clearInterval(interval)
            }
        }, 100)

        return () => clearInterval(interval)
    }, [count])

    return (
        <div className="absolute top-20 right-10 hidden -rotate-3 rounded-lg border border-zinc-800 bg-zinc-900/80 p-4 backdrop-blur lg:block shadow-lg shadow-black/10 transition-transform duration-300 hover:rotate-1 hover:scale-105">
            <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-green-400" />
                <div>
                    <p className="text-sm font-medium">
                        <span className="text-green-400">{count}+</span> connections
                    </p>
                    <p className="text-xs text-zinc-500">Growing network</p>
                </div>
            </div>
        </div>
    )
}

