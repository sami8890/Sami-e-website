"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export const SanityCmsExplainer = () => {
    const [activeStep, setActiveStep] = useState(1)
    const [isOpen, setIsOpen] = useState(false)

    const steps = [
        {
            title: "Log in to your dashboard",
            description: "Access your website content with a simple login - just like checking your email.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-400"
                >
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                    <polyline points="10 17 15 12 10 7" />
                    <line x1="15" y1="12" x2="3" y2="12" />
                </svg>
            ),
        },
        {
            title: "Edit your content",
            description: "Change text and images as easily as editing a Word document - no coding needed.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-400"
                >
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
            ),
        },
        {
            title: "Preview your changes",
            description: "See exactly how your website will look before making it live.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-400"
                >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                </svg>
            ),
        },
        {
            title: "Publish with one click",
            description: "Make your changes live instantly with a single button click.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-400"
                >
                    <path d="M12 2v4" />
                    <path d="M12 18v4" />
                    <path d="M4.93 4.93l2.83 2.83" />
                    <path d="M16.24 16.24l2.83 2.83" />
                    <path d="M2 12h4" />
                    <path d="M18 12h4" />
                    <path d="M4.93 19.07l2.83-2.83" />
                    <path d="M16.24 7.76l2.83-2.83" />
                </svg>
            ),
        },
    ]

    return (
        <div className="mt-12 bg-[#121212] rounded-xl border border-zinc-800 overflow-hidden transition-all duration-300 hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/5">
            <div className="p-6 md:p-8">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white">What is Sanity CMS?</h3>
                        <p className="text-gray-400 mt-2">The easy way to update your website without any technical knowledge</p>
                    </div>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center gap-2 bg-green-500/10 hover:bg-green-500/20 text-green-400 px-4 py-2 rounded-lg transition-colors duration-300"
                    >
                        {isOpen ? "Hide Explanation" : "Learn More"}
                        <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                </div>

                {isOpen && (
                    <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <p className="text-gray-300">Sanity CMS is like a simple word processor for your website. It lets you:</p>

                            <div className="space-y-4">
                                {steps.map((step, index) => (
                                    <button
                                        key={index}
                                        className={`w-full text-left p-4 rounded-lg border transition-all duration-300 flex items-start gap-4 ${activeStep === index + 1
                                                ? "border-green-500 bg-green-500/10"
                                                : "border-zinc-800 hover:border-green-500/30 hover:bg-[#1A1A1A]"
                                            }`}
                                        onClick={() => setActiveStep(index + 1)}
                                    >
                                        <div
                                            className={`mt-1 rounded-full p-2 ${activeStep === index + 1 ? "bg-green-500/20" : "bg-[#1A1A1A]"
                                                }`}
                                        >
                                            {step.icon}
                                        </div>
                                        <div>
                                            <h4 className={`font-medium ${activeStep === index + 1 ? "text-green-400" : "text-white"}`}>
                                                {index + 1}. {step.title}
                                            </h4>
                                            <p className="text-gray-400 text-sm mt-1">{step.description}</p>
                                        </div>
                                    </button>
                                ))}
                            </div>

                            <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                                <p className="text-green-400 font-medium flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-lightbulb"
                                    >
                                        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                                        <path d="M9 18h6" />
                                        <path d="M10 22h4" />
                                    </svg>
                                    No technical skills required
                                </p>
                                <p className="text-gray-300 text-sm mt-2">
                                    If you can use social media or write an email, you can update your website!
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            {activeStep === 1 && (
                                <div className="bg-[#1A1A1A] rounded-lg border border-zinc-800 overflow-hidden shadow-lg shadow-black/40 transition-all duration-500">
                                    <div className="bg-black p-3 flex items-center justify-between border-b border-zinc-800">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <div className="text-xs text-gray-400">Sanity Login</div>
                                    </div>
                                    <div className="p-6 space-y-6">
                                        <div className="flex justify-center">
                                            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="40"
                                                    height="40"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="text-green-400"
                                                >
                                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="12" cy="7" r="4"></circle>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="text-xs text-gray-400 block mb-1">Email</label>
                                                <div className="h-10 bg-black/50 rounded border border-zinc-700 px-3 flex items-center text-white">
                                                    you@example.com
                                                </div>
                                            </div>
                                            <div>
                                                <label className="text-xs text-gray-400 block mb-1">Password</label>
                                                <div className="h-10 bg-black/50 rounded border border-zinc-700 px-3 flex items-center text-white">
                                                    ••••••••
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pt-2">
                                            <div className="bg-green-500 text-black font-medium py-2 rounded text-center">Log In</div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeStep === 2 && (
                                <div className="bg-[#1A1A1A] rounded-lg border border-zinc-800 overflow-hidden shadow-lg shadow-black/40 transition-all duration-500">
                                    <div className="bg-black p-3 flex items-center justify-between border-b border-zinc-800">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <div className="text-xs text-gray-400">Sanity Editor</div>
                                    </div>
                                    <div className="p-4">
                                        <div className="flex gap-4">
                                            <div className="w-1/3 space-y-3">
                                                <div className="h-8 bg-green-500/20 rounded flex items-center px-3 text-green-400 text-sm font-medium">
                                                    Home Page
                                                </div>
                                                <div className="h-8 bg-black/30 rounded flex items-center px-3 text-gray-300 text-sm">
                                                    About Us
                                                </div>
                                                <div className="h-8 bg-black/30 rounded flex items-center px-3 text-gray-300 text-sm">
                                                    Services
                                                </div>
                                                <div className="h-8 bg-black/30 rounded flex items-center px-3 text-gray-300 text-sm">
                                                    Contact
                                                </div>
                                            </div>
                                            <div className="w-2/3 bg-black/20 p-3 rounded border border-zinc-800">
                                                <div className="mb-4">
                                                    <div className="text-xs text-gray-400 mb-1">Heading</div>
                                                    <div className="h-10 bg-black/50 rounded border border-zinc-700 px-3 flex items-center text-white">
                                                        Welcome to Our Website
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <div className="text-xs text-gray-400 mb-1">Description</div>
                                                    <div className="h-20 bg-black/50 rounded border border-green-500/50 px-3 py-2 text-white text-sm">
                                                        We provide top-quality services to help your business grow and succeed in today&apos;s
                                                        competitive market.
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-xs text-gray-400 mb-1">Featured Image</div>
                                                    <div className="h-24 bg-black/50 rounded border border-zinc-700 flex items-center justify-center">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="text-gray-400"
                                                        >
                                                            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                                                            <circle cx="9" cy="9" r="2" />
                                                            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeStep === 3 && (
                                <div className="bg-[#1A1A1A] rounded-lg border border-zinc-800 overflow-hidden shadow-lg shadow-black/40 transition-all duration-500">
                                    <div className="bg-black p-3 flex items-center justify-between border-b border-zinc-800">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <div className="text-xs text-gray-400">Preview Mode</div>
                                    </div>
                                    <div className="p-4">
                                        <div className="bg-black/30 rounded-lg p-4 border border-zinc-800">
                                            <div className="flex justify-between items-center mb-4">
                                                <div className="text-xs text-gray-400">Preview of your changes</div>
                                                <div className="flex items-center gap-2">
                                                    <div className="bg-black/50 text-gray-300 text-xs px-2 py-1 rounded">Desktop</div>
                                                    <div className="bg-black/50 text-gray-300 text-xs px-2 py-1 rounded">Mobile</div>
                                                </div>
                                            </div>

                                            <div className="bg-black/50 rounded-lg p-4 border border-zinc-800">
                                                <div className="text-xl font-bold text-white mb-2">Welcome to Our Website</div>
                                                <div className="text-gray-300 text-sm mb-4">
                                                    We provide top-quality services to help your business grow and succeed in today&apos;s competitive
                                                    market.
                                                </div>
                                                <div className="h-32 bg-green-500/10 rounded flex items-center justify-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="32"
                                                        height="32"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="text-green-400"
                                                    >
                                                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                                                        <circle cx="9" cy="9" r="2" />
                                                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeStep === 4 && (
                                <div className="bg-[#1A1A1A] rounded-lg border border-zinc-800 overflow-hidden shadow-lg shadow-black/40 transition-all duration-500">
                                    <div className="bg-black p-3 flex items-center justify-between border-b border-zinc-800">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <div className="text-xs text-gray-400">Publish Changes</div>
                                    </div>
                                    <div className="p-6 space-y-6">
                                        <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/30">
                                            <div className="flex items-center gap-3 mb-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="text-green-400"
                                                >
                                                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                                                    <path d="m9 12 2 2 4-4" />
                                                </svg>
                                                <div className="text-green-400 font-medium">Changes Ready to Publish</div>
                                            </div>
                                            <p className="text-gray-300 text-sm">
                                                Your website will be updated immediately after publishing.
                                            </p>
                                        </div>

                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between bg-black/30 p-3 rounded border border-zinc-800">
                                                <div className="text-sm text-white">Updated homepage text</div>
                                                <div className="text-xs text-gray-400">Just now</div>
                                            </div>
                                            <div className="flex items-center justify-between bg-black/30 p-3 rounded border border-zinc-800">
                                                <div className="text-sm text-white">Changed featured image</div>
                                                <div className="text-xs text-gray-400">Just now</div>
                                            </div>
                                        </div>

                                        <div className="pt-2 flex gap-3">
                                            <div className="bg-zinc-800 text-white font-medium py-2 px-4 rounded text-center flex-1">
                                                Save Draft
                                            </div>
                                            <div className="bg-green-500 text-black font-medium py-2 px-4 rounded text-center flex-1 flex items-center justify-center gap-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M5 12h14" />
                                                    <path d="m12 5 7 7-7 7" />
                                                </svg>
                                                Publish Now
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-green-500/30 rounded-br-xl"></div>
                            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-green-500/30 rounded-tl-xl"></div>
                        </div>
                    </div>
                )}
            </div>
            
        </div>
    )
}

