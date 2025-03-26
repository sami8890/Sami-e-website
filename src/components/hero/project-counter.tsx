"use client"

import { Code } from "lucide-react"
import { useEffect, useState } from "react"

export default function ProjectCounter() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if (count < 150) {
                setCount((prev) => Math.min(prev + Math.floor(Math.random() * 5) + 1, 150))
            } else {
                clearInterval(interval)
            }
        }, 50)

        return () => clearInterval(interval)
    }, [count])

    return (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 hidden rotate-1 rounded-lg border border-zinc-800 bg-zinc-900/80 p-4 backdrop-blur md:block shadow-lg shadow-black/10 transition-transform duration-300 hover:-rotate-1 hover:scale-105 xl:w-auto">
            <div className="flex items-center gap-2">
                <Code className="h-5 w-5 text-green-400" />
                <div>
                    <p className="text-sm font-medium whitespace-nowrap">
                        <span className="text-green-400">{count}+</span> Projects Completed
                    </p>
                    <div className="mt-1 h-1.5 w-36 sm:w-48 bg-zinc-800 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"
                            style={{ width: `${(count / 150) * 100}%` }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

