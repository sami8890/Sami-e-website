"use client"

import { motion } from "framer-motion"
import { useState} from "react"
import { Check, ArrowRight, Lightbulb, Layout, Code, TestTube, Rocket } from 'lucide-react'
import { useInView } from "react-intersection-observer"
import { Anton } from 'next/font/google'

const anton = Anton({
    weight: ["400"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-anton",
})

export function ProcessSection() {
    const [activeStep, setActiveStep] = useState(0)
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false
    })


    interface Step {
        icon: JSX.Element;
        title: string;
        description: string;
        points: string[];
    }

    const handleStepChange = (index: number): void => {
        setActiveStep(index);
    }

    const steps: Step[] = [
        {
            icon: <Lightbulb className="w-10 h-10" />,
            title: "Discovery & Planning",
            description: "We start by understanding your vision, goals, and requirements. Through in-depth consultation, we map out a strategic roadmap tailored to your specific needs.",
            points: ["Project scope definition", "Competitive analysis", "Tech stack selection", "Timeline planning"]
        },
        {
            icon: <Layout className="w-10 h-10" />,
            title: "Design & Prototyping",
            description: "Your ideas take visual form as we craft intuitive user experiences and engaging interfaces that align perfectly with your brand identity.",
            points: ["Wireframing", "UI/UX design", "Interactive prototypes", "Design system creation"]
        },
        {
            icon: <Code className="w-10 h-10" />,
            title: "Development",
            description: "Our expert developers bring designs to life with clean, efficient code built on modern frameworks for optimal performance and scalability.",
            points: ["Front-end development", "Back-end integration", "Responsive implementation", "Performance optimization"]
        },
        {
            icon: <TestTube className="w-10 h-10" />,
            title: "Testing & Refinement",
            description: "Rigorous testing across devices and platforms ensures your website functions flawlessly, with continuous refinement based on feedback.",
            points: ["Cross-browser testing", "Mobile responsiveness", "Performance audits", "User feedback integration"]
        },
        {
            icon: <Rocket className="w-10 h-10" />,
            title: "Launch & Support",
            description: "We handle deployment with precision, followed by ongoing support to ensure your website continues to evolve and perform at its best.",
            points: ["Deployment preparation", "SEO optimization", "Analytics setup", "Maintenance planning"]
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    }

    return (
        <section ref={ref} className="py-20 bg-gradient-to-b from-black via-black/95 to-black relative overflow-hidden">
            {/* Background grid pattern */}
            <div className="absolute inset-0 opacity-20">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
              radial-gradient(circle, rgba(16, 185, 129, 0.1) 1px, transparent 1px),
              linear-gradient(to right, #1a1a1a 1px, transparent 1px),
              linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)
            `,
                        backgroundSize: "50px 50px, 50px 50px, 50px 50px",
                    }}
                ></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className={`${anton.className} text-4xl md:text-5xl lg:text-6xl font-normal uppercase mb-6 text-white`}>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-600">
                            Process / How I Work
                        </span>
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        A structured approach designed to transform your vision into a stunning digital reality.
                        Each phase is carefully executed to ensure outstanding results.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-12 gap-8 items-start">
                    {/* Process timeline on desktop */}
                    <div className="hidden md:block md:col-span-4 lg:col-span-3 sticky top-20">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            className="space-y-1 rounded-xl backdrop-blur-sm bg-black/40 p-4"
                        >
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className={`flex items-center p-3 rounded-lg cursor-pointer transition-all duration-300 ${activeStep === index
                                            ? "bg-emerald-900/40 text-emerald-400 border-l-4 border-emerald-400"
                                            : "hover:bg-black/40 text-gray-400 border-l-4 border-transparent"
                                        }`}
                                    onClick={() => handleStepChange(index)}
                                >
                                    <div className={`flex items-center justify-center w-8 h-8 rounded-full mr-3 ${activeStep === index ? "bg-emerald-500/20 text-emerald-400" : "bg-gray-800 text-gray-400"
                                        }`}>
                                        {index + 1}
                                    </div>
                                    <span className={`font-medium ${activeStep === index ? "text-emerald-400" : "text-gray-300"}`}>
                                        {step.title.split(" ")[0]}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Process content */}
                    <div className="md:col-span-8 lg:col-span-9">
                        <motion.div
                            key={activeStep}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="bg-gradient-to-br from-black/80 to-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8"
                        >
                            {/* Mobile step selection */}
                            <div className="md:hidden flex overflow-x-auto pb-4 mb-6 gap-2 scrollbar-hide">
                                {steps.map((step, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleStepChange(index)}
                                        className={`px-4 py-2 rounded-full whitespace-nowrap text-sm ${activeStep === index
                                                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                                                : "bg-gray-900/50 text-gray-400 border border-gray-800"
                                            }`}
                                    >
                                        Step {index + 1}
                                    </button>
                                ))}
                            </div>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400">
                                    {steps[activeStep].icon}
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white">
                                    {steps[activeStep].title}
                                </h3>
                            </div>

                            <p className="text-gray-300 text-lg mb-8">
                                {steps[activeStep].description}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {steps[activeStep].points.map((point, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="mt-1 flex-shrink-0">
                                            <Check className="w-5 h-5 text-emerald-400" />
                                        </div>
                                        <span className="text-gray-200">{point}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-800 flex justify-between">
                                <button
                                    onClick={() => setActiveStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1))}
                                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                                >
                                    Previous Step
                                </button>
                                <button
                                    onClick={() => setActiveStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1))}
                                    className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                                >
                                    Next Step <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Connector line between steps (visual representation) */}
                <div className="mt-16 relative max-w-4xl mx-auto hidden lg:flex justify-between">
                    {steps.map((_, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${index <= activeStep ? "bg-emerald-500" : "bg-gray-700"
                                }`}>
                                {index < activeStep ? (
                                    <Check className="w-5 h-5 text-black" />
                                ) : (
                                    <span className="text-white text-sm">{index + 1}</span>
                                )}
                            </div>
                        </div>
                    ))}
                    {/* Connecting line */}
                    <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-700 -z-0 transform -translate-y-1/2">
                        <div
                            className="h-full bg-emerald-500 transition-all duration-500"
                            style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    )
}