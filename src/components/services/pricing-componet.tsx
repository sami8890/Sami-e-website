"use client"
import { motion } from "framer-motion"
import { Check,  Zap, Crown, Rocket, Shield, Sparkles, X } from "lucide-react" // Added X icon

const pricingPlans = [
  {
    id: "starter",
    name: "Starter Website",
    subtitle: "Ideal for startups and small businesses",
    price: 299, // Decreased from 497
    originalPrice: 399, // Decreased from 697
    savings: 100, // Adjusted savings
    duration: "one-time",
    deliveryTime: "5-7 days",
    icon: <Zap className="w-6 h-6" />,
    popular: false,
    features: [
      "Professional business website",
      "Mobile-responsive design",
      "Essential pages (Home, About, Services, Contact)",
      "Improved visibility on search engines",
      "Social media integration",
      "15 days free support",
      "Secure website (HTTPS) for trust",
    ],
    notIncluded: ["Complex custom functionalities", "E-commerce functionality", "Priority support"],
    cta: "Get Started",
    guarantee: "30-day money-back guarantee",
  },
  {
    id: "professional",
    name: "Growth Accelerator",
    subtitle: "Most popular for growing businesses",
    price: 599, // Decreased from 997
    originalPrice: 799, // Decreased from 1497
    savings: 200, 
    duration: "one-time",
    deliveryTime: "7-10 days",
    icon: <Crown className="w-6 h-6" />,
    popular: true,
    features: [
      "Everything in Basic Website",
      "Custom design & branding",
      "Enhanced search engine ranking strategies",
      "Basic customer management system connection",
      "Lead generation forms",
      "Website performance tracking & reports",
      "Email marketing integration",
      "30 days premium support",
      "Free basic logo design (if needed)",
    ],
    notIncluded: ["Highly specialized custom programming", "Dedicated account manager"],
    cta: "Accelerate My Business",
    guarantee: "60-day money-back guarantee",
  },
  {
    id: "enterprise",
    name: "Enterprise Solution",
    subtitle: "For established businesses and large organizations",
    price: 1199, // Decreased from 1997
    originalPrice: 1499, // Decreased from 2997
    savings: 300, // Adjusted savings
    duration: "one-time",
    deliveryTime: "10-14 days",
    icon: <Rocket className="w-6 h-6" />,
    popular: false,
    features: [
      "Everything in Growth Accelerator",
      "Integration with your existing business tools",
      "Detailed performance insights dashboard",
      "Dedicated account manager",
      "Robust security for your business data",
      "Staff training & workshops",
      "Priority 24/7 support",
      "90 days white-glove support",
      "Regular strategy consultations",
      "Custom feature development",
    ],
    notIncluded: [],
    cta: "Build My Solution",
    guarantee: "90-day money-back guarantee",
  },
]

// const testimonials = [
//   {
//     name: "Ahmed Hassan",
//     company: "Contexmedia",
//     image: "/testimonial/ahmed.png",
//     rating: 5,
//     text: "Our conversions increased by 65% in the first month. Best investment ever!",
//   },
//   {
//     name: "Sarah Johnson",
//     company: "Bella's Boutique",
//     image: "/testimonial/sarah.png",
//     rating: 5,
//     text: "Our online presence significantly improved. Customers love the new website.",
//   },
// ]

export default function PricingSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden" id="pricing">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_50%)]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Service tag - Cohesive styling */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 border-2 border-blue-200 text-blue-700 px-3 py-1 text-sm font-medium tracking-wide">
              <Sparkles className="inline h-4 w-4 mr-2" />
              Investment Plans
            </span>
          </motion.div>
          {/* Main headline - Simplified and outstanding */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6 font-playfair"
          >
            <span className="relative">
              Invest in Your
              <br />
              <span className="italic text-blue-600">Business Growth</span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full"
              />
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            One-time investment, lasting impact. No hidden fees, just clear value.
          </motion.p>
          {/* Removed Limited Time Offer */}
        </motion.div>
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl border-2 shadow-lg transition-shadow duration-300 overflow-hidden ${
                plan.popular ? "border-blue-500 ring-4 ring-blue-500/20 shadow-xl" : "border-slate-200 hover:shadow-xl"
              }`}
            >
              {/* Popular Badge */}
            
              {/* Savings Badge */}
              <div className="absolute top-4 right-4">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">
                  Save ${plan.savings}
                </div>
              </div>
              <div className="p-8 pt-12">
                {" "}
                {/* Adjusted top padding to accommodate badge */}
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300 ${
                      plan.popular ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-slate-600 mb-4">{plan.subtitle}</p>
                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-2xl text-slate-400 line-through">${plan.originalPrice}</span>
                      <span className="text-4xl md:text-5xl font-bold text-slate-900">${plan.price}</span>
                    </div>
                    <p className="text-slate-600 text-sm">
                      {plan.duration} • {plan.deliveryTime} delivery
                    </p>
                    <p className="text-green-600 text-sm font-semibold mt-1">Designed for rapid ROI</p>
                  </div>
                  {/* CTA Button - Added hover lift */}
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }} // Added hover lift
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      window.open(
                        `https://wa.me/923701247494?text=Hi%2C%20I%20want%20the%20${plan.name}%20package%20for%20my%20business`,
                        "_blank",
                        "noopener,noreferrer",
                      )
                    }}
                    className={`w-full py-3 px-5 rounded-full font-bold text-base transition-all duration-300 shadow-lg hover:shadow-xl ${
                      plan.popular
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-slate-900 hover:bg-slate-800 text-white"
                    }`}
                  >
                    {plan.cta}
                  </motion.button>
                  <p className="text-xs text-slate-500 mt-3 flex items-center justify-center gap-1">
                    <Shield className="w-3 h-3" />
                    {plan.guarantee}
                  </p>
                </div>
                {/* Features */}
                <div className="space-y-4">
                  <h4 className="font-bold text-slate-900 text-lg">What&apos;s included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: featureIndex * 0.03 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm leading-relaxed">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  {/* Not Included - Changed to X icon */}
                  {plan.notIncluded.length > 0 && (
                    <div className="pt-4 border-t border-slate-100">
                      <p className="text-xs text-slate-500 mb-3 font-medium">Not included in this plan:</p>
                      <ul className="space-y-2">
                        {plan.notIncluded.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3 opacity-60">
                            <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" /> {/* Changed to X icon */}
                            <span className="text-slate-500 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
    
        {/* Book a Free Call CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            I am  not Sure Which Plan is Right for me?
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Let&apos;s chat! Book a 30 minutes consultation call to discuss your business needs and find the perfect solution.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                window.open(
                  "https://wa.me/923701247494?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation%20call",
                  "_blank",
                  "noopener,noreferrer",
                )
              }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-700 hover:bg-slate-800 text-white rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book a Call
              <motion.div
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                →
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
