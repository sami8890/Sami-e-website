// Constants
export const SECTION_INTERVAL = 5000
export const WATER_ANIMATION_DURATION = 9
export const WAVE_ANIMATION_DURATION = 5

export const sections = [
    {
        title: "Let’s Build Something Amazing",
        description: "Got an idea? I’ll turn it into a stunning website that stands out.",
    },
    {
        title: "Crafted Just for You",
        description: "Every line of code is written with care to bring your vision to life.",
    },
    {
        title: "Reach More People",
        description: "Your website will be fast, responsive, and ready to connect with the world.",
    },
    {
        title: "Your Vision, My Expertise",
        description: "You dream it, I’ll develop it—with the latest technologies.",
    },
    {
        title: "Built for the Future",
        description: "Your site won’t just look great today, it’ll be ready for tomorrow too.",
    },
]


// Animation variants
export const animations = {
    waterInside: {
        animate: {
            height: ["10%", "50%", "10%"],
            transition: {
                duration: WATER_ANIMATION_DURATION,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse" as const,
            },
        },
    },
    waterWave: {
        animate: {
            y: ["0%", "-50%"],
            transition: {
                duration: WAVE_ANIMATION_DURATION,
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse" as const,
            },
        },
    },
    background: {
        animate: {
            background: [
                "linear-gradient(45deg, #000000, #1a1a1a)",
                "linear-gradient(45deg, #1a1a1a, #000000)",
                "linear-gradient(45deg, #000000, #1a1a1a)",
            ],
            transition: {
                duration: 10,
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
            },
        },
    },
    floatingAnimation: {
        animate: {
            y: [0, -10, 0],
            transition: {
                duration: 3,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
            },
        },
    },
    reveal: {
        initial: {
            opacity: 0,
            y: 50,
        },
        animate: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: custom * 0.2,
            },
        }),
    },
}

// Detect user preference for reduced motion
export const prefersReducedMotion = () => {
    if (typeof window === "undefined") return false
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

