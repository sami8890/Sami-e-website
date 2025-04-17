
//ricky
"use client"

import type React from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    ArrowRight,
    Award,
    BarChart3,
    Check,
    ChevronRight,
    Clock,
    Flame,
    Globe,
    Lightbulb,
    MessageSquare,
    Sparkles,
    Star,
    Target,
    Unlock,
    Users,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function LandingPage() {
    const [isVisible, setIsVisible] = useState(false)
    const [activeTab, setActiveTab] = useState("grow")
    const heroRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setIsVisible(true)

        const handleMouseMove = (e: MouseEvent) => {
            if (!heroRef.current) return

            const { clientX, clientY } = e
            const { left, top, width, height } = heroRef.current.getBoundingClientRect()

            const x = (clientX - left) / width
            const y = (clientY - top) / height

            heroRef.current.style.setProperty("--mouse-x", `${x}`)
            heroRef.current.style.setProperty("--mouse-y", `${y}`)
        }

        const handleScroll = () => {
            const elements = document.querySelectorAll(".animate-on-scroll")

            elements.forEach((element) => {
                const rect = element.getBoundingClientRect()
                const isInView = rect.top <= window.innerHeight * 0.8

                if (isInView) {
                    element.classList.add("animate-in")
                }
            })
        }

        document.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("scroll", handleScroll)

        // Trigger once on load
        setTimeout(handleScroll, 500)

        return () => {
            document.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div className="relative overflow-hidden bg-black">
            {/* Hero Section */}
            <div
                ref={heroRef}
                className="relative min-h-[100vh] overflow-hidden bg-gradient-to-br from-emerald-950 via-black to-emerald-950"
                style={{ "--mouse-x": 0.5, "--mouse-y": 0.5 } as React.CSSProperties}
            >
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-[30%] -right-[10%] h-[70%] w-[70%] rounded-full bg-emerald-500/5 blur-3xl"></div>
                    <div className="absolute -bottom-[30%] -left-[10%] h-[70%] w-[70%] rounded-full bg-emerald-500/5 blur-3xl"></div>

                    {/* Animated particles */}
                    <div className="absolute inset-0">
                        {Array.from({ length: 20 }).map((_, i) => (
                            <div
                                key={i}
                                className="absolute h-1 w-1 rounded-full bg-emerald-400/30"
                                style={{
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                    opacity: Math.random() * 0.5 + 0.3,
                                    animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                                    animationDelay: `${Math.random() * 10}s`,
                                }}
                            ></div>
                        ))}
                    </div>

                    {/* Animated grid */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0 grid grid-cols-12 gap-4">
                            {Array.from({ length: 12 }).map((_, i) => (
                                <div key={i} className="relative h-full w-full">
                                    <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent"></div>
                                </div>
                            ))}
                        </div>
                        <div className="absolute inset-0 grid grid-rows-12 gap-4">
                            {Array.from({ length: 12 }).map((_, i) => (
                                <div key={i} className="relative h-full w-full">
                                    <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Animated spotlight effect */}
                    <div
                        className="pointer-events-none absolute inset-0 opacity-30"
                        style={{
                            background: `radial-gradient(circle at calc(var(--mouse-x) * 100%) calc(var(--mouse-y) * 100%), rgba(16, 185, 129, 0.15), transparent 50%)`,
                        }}
                    ></div>
                </div>

                {/* Top notification banner */}
                <div
                    className={`absolute left-0 right-0 top-0 z-10 transform bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 px-4 py-3 text-center text-sm font-medium text-white shadow-lg transition-all duration-1000 ease-out ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
                >
                    <div className="container mx-auto flex items-center justify-center gap-2">
                        <Sparkles className="h-4 w-4" />
                        <span>Click link in bio to join the FREE LinkedIn Course & Community on Skool</span>
                        <ChevronRight className="h-4 w-4" />
                    </div>
                </div>

                <div className="container relative z-10 mx-auto px-4 py-24">
                    <div
                        className={`grid gap-12 transition-all duration-1000 ease-out lg:grid-cols-2 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                    >
                        {/* Left column - Profile & CTA */}
                        <div className="flex flex-col items-center justify-center lg:items-start">
                            <div className="group relative mb-8">
                                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-emerald-600 to-blue-600 opacity-75 blur-sm transition duration-1000 group-hover:opacity-100 group-hover:blur"></div>
                                <div className="relative h-48 w-48 overflow-hidden rounded-full border-2 border-emerald-500/50 bg-black shadow-lg shadow-emerald-900/50 md:h-56 md:w-56">
                                    <Image
                                        src="/victoria/ricky.png"
                                        alt="Profile Picture"
                                        width={224}
                                        height={224}
                                        className="h-full w-full scale-105 object-cover transition duration-700 ease-out group-hover:scale-110"
                                    />

                                    {/* Animated ring */}
                                    <div className="absolute inset-0 rounded-full border-2 border-emerald-400/30 opacity-0 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-100 group-hover:blur-sm"></div>
                                </div>

                                {/* Floating badges */}
                                <div className="absolute -right-4 top-0 animate-pulse">
                                    <Badge className="flex items-center gap-1 bg-gradient-to-r from-amber-500 to-amber-600 px-3 py-1.5 text-xs font-bold text-black shadow-lg md:text-sm">
                                        <Award className="h-4 w-4" />
                                        Top 1% LinkedIn
                                    </Badge>
                                </div>

                                <div className="absolute -left-4 bottom-0 animate-pulse" style={{ animationDelay: "1s" }}>
                                    <Badge className="flex items-center gap-1 bg-gradient-to-r from-blue-500 to-blue-600 px-3 py-1.5 text-xs font-bold text-white shadow-lg md:text-sm">
                                        <Flame className="h-4 w-4" />
                                        Trending Expert
                                    </Badge>
                                </div>
                            </div>

                            <h1 className="mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-center text-4xl font-extrabold tracking-tight text-transparent lg:text-left lg:text-5xl xl:text-6xl">
                                Ricky Waters
                            </h1>

                            <p className="mb-6 text-center text-lg text-emerald-300 lg:text-left">
                                LinkedIn Strategist & Growth Expert
                            </p>

                            <div className="mb-8 flex flex-wrap items-center gap-3">
                                <div className="flex items-center gap-2 rounded-full bg-emerald-900/50 px-4 py-2 backdrop-blur-sm">
                                    <Users className="h-5 w-5 text-emerald-400" />
                                    <span className="text-sm font-medium text-emerald-100">450+ Creators</span>
                                </div>

                                <div className="flex items-center gap-2 rounded-full bg-emerald-900/50 px-4 py-2 backdrop-blur-sm">
                                    <Image
                                        src="/placeholder.svg?height=20&width=20"
                                        alt="LinkedIn"
                                        width={20}
                                        height={20}
                                        className="h-5 w-5"
                                    />
                                    <span className="text-sm font-medium text-emerald-100">LinkedIn Verified</span>
                                </div>

                                <div className="flex items-center gap-2 rounded-full bg-emerald-900/50 px-4 py-2 backdrop-blur-sm">
                                    <Globe className="h-5 w-5 text-emerald-400" />
                                    <span className="text-sm font-medium text-emerald-100">Worldwide Community</span>
                                </div>
                            </div>

                            <div className="w-full space-y-4 sm:flex sm:gap-4 sm:space-y-0">
                                <Button className="group relative w-full overflow-hidden bg-gradient-to-r from-emerald-500 to-emerald-600 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] sm:w-auto">
                                    <span className="absolute inset-0 bg-white/20 transition-transform duration-300 ease-out group-hover:translate-y-full"></span>
                                    <span className="relative flex items-center">
                                        Join FREE LinkedIn Course
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </span>
                                </Button>

                                <Button
                                    variant="outline"
                                    className="w-full border-emerald-500/50 bg-black/50 text-emerald-300 backdrop-blur-sm hover:bg-emerald-950/50 hover:text-emerald-200 sm:w-auto"
                                >
                                    Learn More
                                </Button>
                            </div>
                        </div>

                        {/* Right column - Value proposition */}
                        <div className="flex flex-col justify-center">
                            <div
                                className="mb-8 transition-all delay-100 duration-1000 ease-out"
                                style={{ transitionDelay: "200ms" }}
                            >
                                <h2 className="mb-3 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                                    <span className="bg-gradient-to-r from-emerald-300 to-emerald-400 bg-clip-text text-transparent">
                                        LinkedIn Launchpad
                                    </span>
                                    <span className="bg-gradient-to-r from-red-400 via-amber-400 to-emerald-400 bg-clip-text text-transparent">
                                        {" "}
                                        on{" "}
                                    </span>
                                    <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                                        Skool
                                    </span>
                                </h2>

                                <p className="text-xl text-emerald-100 md:text-2xl">
                                    FREE Course & Community to <span className="font-semibold text-white">Grow Your Following</span> and{" "}
                                    <span className="font-semibold text-white">Monetize</span>
                                </p>
                            </div>

                            {/* Interactive tabs */}
                            <Tabs defaultValue="grow" className="w-full" onValueChange={setActiveTab}>
                                <TabsList className="mb-6 grid w-full grid-cols-3 bg-black/20 backdrop-blur-sm">
                                    <TabsTrigger
                                        value="grow"
                                        className={`${activeTab === "grow" ? "bg-emerald-500/20 text-emerald-300" : "text-gray-400"} transition-all duration-300`}
                                    >
                                        Grow Audience
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="brand"
                                        className={`${activeTab === "brand" ? "bg-emerald-500/20 text-emerald-300" : "text-gray-400"} transition-all duration-300`}
                                    >
                                        Brand Authority
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="lead"
                                        className={`${activeTab === "lead" ? "bg-emerald-500/20 text-emerald-300" : "text-gray-400"} transition-all duration-300`}
                                    >
                                        Lead Generation
                                    </TabsTrigger>
                                </TabsList>

                                <TabsContent value="grow" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                                    <div className="relative overflow-hidden rounded-xl border border-emerald-500/10 bg-black/40 p-6 backdrop-blur-sm">
                                        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl"></div>

                                        <div className="flex flex-col gap-4 sm:flex-row">
                                            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-700/20 text-emerald-400">
                                                <Users className="h-8 w-8" />
                                            </div>

                                            <div>
                                                <h3 className="mb-2 text-2xl font-bold text-white">Build Your LinkedIn Following</h3>
                                                <p className="mb-4 text-emerald-100">
                                                    Learn proven strategies to grow your audience with engaged professionals who value your
                                                    content and expertise.
                                                </p>

                                                <ul className="grid gap-2 sm:grid-cols-2">
                                                    {[
                                                        "Content that converts followers",
                                                        "Engagement strategies that work",
                                                        "Algorithm-friendly posting",
                                                        "Network expansion tactics",
                                                    ].map((item, i) => (
                                                        <li key={i} className="flex items-center gap-2">
                                                            <Check className="h-5 w-5 text-emerald-500" />
                                                            <span className="text-sm text-emerald-50">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>

                                <TabsContent value="brand" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                                    <div className="relative overflow-hidden rounded-xl border border-emerald-500/10 bg-black/40 p-6 backdrop-blur-sm">
                                        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl"></div>

                                        <div className="flex flex-col gap-4 sm:flex-row">
                                            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-700/20 text-emerald-400">
                                                <Target className="h-8 w-8" />
                                            </div>

                                            <div>
                                                <h3 className="mb-2 text-2xl font-bold text-white">Establish Your Authority</h3>
                                                <p className="mb-4 text-emerald-100">
                                                    Position yourself as the go-to expert in your field with content that demonstrates your unique
                                                    expertise.
                                                </p>

                                                <ul className="grid gap-2 sm:grid-cols-2">
                                                    {[
                                                        "Thought leadership content",
                                                        "Personal branding strategies",
                                                        "Storytelling techniques",
                                                        "Visibility boosting tactics",
                                                    ].map((item, i) => (
                                                        <li key={i} className="flex items-center gap-2">
                                                            <Check className="h-5 w-5 text-emerald-500" />
                                                            <span className="text-sm text-emerald-50">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>

                                <TabsContent value="lead" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                                    <div className="relative overflow-hidden rounded-xl border border-emerald-500/10 bg-black/40 p-6 backdrop-blur-sm">
                                        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl"></div>

                                        <div className="flex flex-col gap-4 sm:flex-row">
                                            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-700/20 text-emerald-400">
                                                <BarChart3 className="h-8 w-8" />
                                            </div>

                                            <div>
                                                <h3 className="mb-2 text-2xl font-bold text-white">Generate Quality Leads</h3>
                                                <p className="mb-4 text-emerald-100">
                                                    Convert your LinkedIn connections into clients, partnerships, and revenue opportunities.
                                                </p>

                                                <ul className="grid gap-2 sm:grid-cols-2">
                                                    {[
                                                        "Lead magnet creation",
                                                        "DM conversion strategies",
                                                        "Sales funnel optimization",
                                                        "Relationship nurturing",
                                                    ].map((item, i) => (
                                                        <li key={i} className="flex items-center gap-2">
                                                            <Check className="h-5 w-5 text-emerald-500" />
                                                            <span className="text-sm text-emerald-50">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>
                </div>

                {/* Bottom curved divider */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
                        <path
                            fill="#000000"
                            fillOpacity="1"
                            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        ></path>
                    </svg>
                </div>
            </div>

            {/* What You'll Learn Section */}
            <section className="relative bg-black py-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05),transparent_70%)]"></div>

                <div className="container mx-auto px-4">
                    <div className="mx-auto mb-16 max-w-3xl text-center animate-on-scroll">
                        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                            What You&apos;ll <span className="text-emerald-500">Learn</span>
                        </h2>
                        <p className="text-lg text-gray-300">
                            Master these proven LinkedIn strategies to grow your personal brand and business
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                icon: <Lightbulb className="h-6 w-6" />,
                                title: "Content Strategy",
                                description:
                                    "Learn how to create engaging content that resonates with your target audience and drives engagement.",
                            },
                            {
                                icon: <Users className="h-6 w-6" />,
                                title: "Network Building",
                                description:
                                    "Discover techniques to expand your network with quality connections that can turn into opportunities.",
                            },
                            {
                                icon: <MessageSquare className="h-6 w-6" />,
                                title: "Engagement Tactics",
                                description:
                                    "Master the art of meaningful engagement that builds relationships and boosts your visibility.",
                            },
                            {
                                icon: <Target className="h-6 w-6" />,
                                title: "Personal Branding",
                                description: "Develop a compelling personal brand that sets you apart from the competition.",
                            },
                            {
                                icon: <BarChart3 className="h-6 w-6" />,
                                title: "Analytics & Optimization",
                                description: "Learn how to analyze your performance and optimize your strategy for maximum results.",
                            },
                            {
                                icon: <Unlock className="h-6 w-6" />,
                                title: "Monetization Methods",
                                description: "Discover multiple ways to monetize your LinkedIn presence and generate revenue.",
                            },
                        ].map((feature, index) => (
                            <Card
                                key={index}
                                className="group relative overflow-hidden border-emerald-900/30 bg-gradient-to-br from-black to-emerald-950/30 transition-all duration-300 hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] animate-on-scroll"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="absolute right-0 top-0 h-20 w-20 translate-x-10 translate-y-[-50%] transform rounded-full bg-emerald-500/10 blur-2xl transition-all duration-500 group-hover:translate-x-5 group-hover:translate-y-[-40%] group-hover:bg-emerald-500/20"></div>

                                <div className="relative z-10 p-6">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500/10 to-emerald-700/10 text-emerald-500">
                                        {feature.icon}
                                    </div>

                                    <h3 className="mb-2 text-xl font-bold text-white">{feature.title}</h3>
                                    <p className="text-gray-400">{feature.description}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="relative bg-gradient-to-b from-black to-emerald-950/40 py-20">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.05),transparent_50%)]"></div>

                <div className="container mx-auto px-4">
                    <div className="mx-auto mb-16 max-w-3xl text-center animate-on-scroll">
                        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                            Success <span className="text-emerald-500">Stories</span>
                        </h2>
                        <p className="text-lg text-gray-300">
                            Join hundreds of professionals who have transformed their LinkedIn presence
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                name: "Sarah Johnson",
                                role: "Marketing Director",
                                image: "/placeholder.svg?height=80&width=80",
                                quote:
                                    "This course completely transformed my LinkedIn strategy. I've gained over 5,000 followers and landed 3 high-value clients in just 2 months!",
                                stars: 5,
                            },
                            {
                                name: "Michael Chen",
                                role: "Startup Founder",
                                image: "/placeholder.svg?height=80&width=80",
                                quote:
                                    "The strategies I learned helped me position my startup to investors. We secured $1.2M in funding after implementing Ricky's LinkedIn tactics.",
                                stars: 5,
                            },
                            {
                                name: "Jessica Williams",
                                role: "Career Coach",
                                image: "/placeholder.svg?height=80&width=80",
                                quote:
                                    "My engagement rate increased by 400% and I'm now booking coaching clients consistently through LinkedIn. Best investment I've made!",
                                stars: 5,
                            },
                        ].map((testimonial, index) => (
                            <Card
                                key={index}
                                className="group relative overflow-hidden border-emerald-900/30 bg-gradient-to-br from-black to-emerald-950/30 transition-all duration-300 hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] animate-on-scroll"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="relative z-10 p-6">
                                    <div className="mb-4 flex items-center gap-4">
                                        <div className="relative h-14 w-14 overflow-hidden rounded-full border border-emerald-500/30">
                                            <Image
                                                src={testimonial.image || "/placeholder.svg"}
                                                alt={testimonial.name}
                                                width={80}
                                                height={80}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>

                                        <div>
                                            <h3 className="font-bold text-white">{testimonial.name}</h3>
                                            <p className="text-sm text-emerald-400">{testimonial.role}</p>
                                        </div>
                                    </div>

                                    <div className="mb-4 flex">
                                        {Array.from({ length: testimonial.stars }).map((_, i) => (
                                            <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>

                                    <p className="text-gray-300">&quot;{testimonial.quote}&quot;</p>
                                </div>
                            </Card>
                        ))}
                    </div>

                    {/* Stats */}
                    <div className="mt-16 grid gap-8 rounded-xl border border-emerald-900/30 bg-black/50 p-8 backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-4 animate-on-scroll">
                        {[
                            { label: "Community Members", value: "450+", icon: <Users className="h-6 w-6" /> },
                            { label: "Success Stories", value: "200+", icon: <Award className="h-6 w-6" /> },
                            { label: "Course Modules", value: "12", icon: <Lightbulb className="h-6 w-6" /> },
                            { label: "Hours of Content", value: "30+", icon: <Clock className="h-6 w-6" /> },
                        ].map((stat, index) => (
                            <div key={index} className="flex flex-col items-center justify-center text-center">
                                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                                    {stat.icon}
                                </div>
                                <div className="text-3xl font-bold text-white">{stat.value}</div>
                                <div className="text-sm text-gray-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative bg-gradient-to-t from-black to-emerald-950/20 py-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(16,185,129,0.1),transparent_70%)]"></div>

                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-black to-emerald-950/30 p-8 text-center shadow-[0_0_50px_rgba(16,185,129,0.1)] backdrop-blur-sm animate-on-scroll">
                        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                            Ready to Transform Your <span className="text-emerald-500">LinkedIn Presence</span>?
                        </h2>
                        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
                            Join our free community today and get access to exclusive strategies, templates, and support to grow your
                            personal brand and business on LinkedIn.
                        </p>

                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Button className="group relative w-full overflow-hidden bg-gradient-to-r from-emerald-500 to-emerald-600 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] sm:w-auto">
                                <span className="absolute inset-0 bg-white/20 transition-transform duration-300 ease-out group-hover:translate-y-full"></span>
                                <span className="relative flex items-center">
                                    Join FREE LinkedIn Course
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </span>
                            </Button>

                            <Button
                                variant="outline"
                                className="w-full border-emerald-500/50 bg-black/50 text-emerald-300 backdrop-blur-sm hover:bg-emerald-950/50 hover:text-emerald-200 sm:w-auto"
                            >
                                Learn More
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center justify-between gap-6 border-t border-emerald-900/30 pt-8 sm:flex-row">
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-emerald-500/20 p-1.5">
                                <Image
                                    src="/placeholder.svg?height=24&width=24"
                                    alt="Logo"
                                    width={24}
                                    height={24}
                                    className="h-full w-full"
                                />
                            </div>
                            <span className="font-bold text-white">LinkedIn Launchpad</span>
                        </div>

                        <div className="flex gap-6">
                            <Link href="#" className="text-sm text-gray-400 hover:text-emerald-400">
                                Terms
                            </Link>
                            <Link href="#" className="text-sm text-gray-400 hover:text-emerald-400">
                                Privacy
                            </Link>
                            <Link href="#" className="text-sm text-gray-400 hover:text-emerald-400">
                                Contact
                            </Link>
                        </div>

                        <div className="text-sm text-gray-500">
                            © {new Date().getFullYear()} LinkedIn Launchpad. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>

            {/* Custom CSS for animations */}
            <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
        </div>
    )
}

