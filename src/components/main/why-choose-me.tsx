"use client"

import { useState } from "react"
import { CheckCircle, Shield, Award, HeadphonesIcon, Calendar, Sparkles } from "lucide-react"

export default function WhyChooseUs() {
  const [hovered, setHovered] = useState<null | number>(null)
  const [showCalendly, setShowCalendly] = useState(false)

  const stats = [
    { value: "15+", label: "Projects Delivered" },
    { value: "4.9/5", label: "Client Rating" },
    { value: "Fast", label: "Response Time" },
  ]

  return (
    <section
      className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20 px-4 relative overflow-hidden"
      id="why-choose-us"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16">
          {/* Section badge - matching projects section */}
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200 shadow-sm mb-8">
            <Sparkles className="h-4 w-4" />
            Why Choose Us
          </div>

          {/* Heading - matching projects section */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Why{" "}
            <span className="text-blue-600 relative">
              Choose Us
              <svg
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full max-w-sm"
                height="8"
                viewBox="0 0 300 8"
                fill="none"
              >
                <path
                  d="M1 4C75 1.5 225 1.5 299 4"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="text-blue-600"
                />
              </svg>
            </span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            We deliver beautiful, functional websites that help your business grow
          </p>
        </div>

        {/* Stats row */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-bold mb-1 text-blue-600">{stat.value}</p>
              <p className="text-gray-600 text-sm uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Main feature */}
        <div className="mt-12 bg-white border border-gray-200 rounded-xl p-8 relative overflow-hidden shadow-md">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6 bg-blue-600">
                <HeadphonesIcon size={32} className="text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left text-blue-600">
             15 Days of Support After Launch

              </h3>
              <p className="text-gray-600 text-center md:text-left">
                After project completion, we provide 15 days of dedicated support at no additional cost.
              </p>
            </div>
            <div className="md:w-1/2">
              <ul className="space-y-3">
                {[
                  "Bug fixes and troubleshooting",
                  "Content updates and adjustments",
                  "Performance optimization",
                  "Security monitoring",
                  "Training and guidance",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={18} className="text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Other reasons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: <Award size={28} />,
              title: "Quality Work",
              description: "Clean code and modern design principles for every project.",
            },
            {
              icon: <Shield size={28} />,
              title: "Secure & Reliable",
              description: "Robust security measures to protect your website.",
            },
            {
              icon: <Calendar size={28} />,
              title: "Responsive Support",
              description: "Quick replies during business hours within 24 hours.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-6 rounded-lg text-center shadow-md"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300 ${hovered === index ? "bg-blue-600" : "bg-blue-50"}`}
              >
                <span
                  className={`transition-colors duration-300 ${hovered === index ? "text-white" : "text-blue-600"}`}
                >
                  {item.icon}
                </span>
              </div>
              <h4 className="text-lg font-medium text-gray-800 mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowCalendly(true)}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium text-base transition-all duration-300 hover:bg-blue-700 bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Schedule a Free Consultation
          </button>
        </div>
      </div>

      {/* Calendly Modal */}
      {showCalendly && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-4xl h-[80vh] bg-white rounded-xl overflow-hidden shadow-xl relative">
            <button
              onClick={() => setShowCalendly(false)}
              className="absolute top-4 right-4 z-10 bg-white/90 rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Close calendar"
            >
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
                className="text-gray-700"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <iframe
              src="https://calendly.com/samigabol12/45min?hide_gdpr_banner=1&background_color=121212&text_color=ffffff&primary_color=0065EA"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Schedule a meeting"
              className="calendly-inline-widget"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  )
}
