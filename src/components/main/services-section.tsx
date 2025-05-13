import { Code, Palette, Zap } from "lucide-react";

export default function ServicesSection() {
    return (
        <section id="services" className="py-16 bg-gray-50 dark:bg-zinc-800/50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Our Services
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Simple, conversion-focused solutions tailored to your business.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Web Development */}
                        <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-zinc-700 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                                <Code className="text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                Web Development
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Scalable, modern websites built with clean code and best practices.
                            </p>
                        </div>

                        {/* Web Design */}
                        <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-zinc-700 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                                <Palette className="text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                UI/UX Design
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Professional user interfaces that are clean, accessible, and conversion-focused.
                            </p>
                        </div>

                        {/* Performance Optimization */}
                        <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-zinc-700 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                                <Zap className="text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                Performance Optimization
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Fast-loading, high-performing websites built for user satisfaction and SEO.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
