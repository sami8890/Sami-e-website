"use client";
import { useState } from "react";
import { Check, Zap, Crown, Rocket, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    id: "Silver",
    name: "Satrting",
    subtitle: "Perfect for getting started",
    price: 488,
    originalPrice: 670,
    duration: "5-7 days",
    icon: <Zap className="w-5 h-5" />,
    popular: false,
    isCustom: false,
    topFeatures: [
      "One logo concept",
      "Simple colour plate ",
      "Basic OR Small SEO ",
      "1 Complete Website",
      "Basic design with development ",
      "10 days of free maintaince"
    ],
    additionalFeatures: [
     
    ],
    cta: "Get Started",
  },
  {
    id: "Gold",
    name: "Professional",
    subtitle: "Best for growing businesses",
    price: 1199,
    originalPrice: 1499,
    duration: "7-10 days",
    icon: <Crown className="w-5 h-5" />,
    popular: true,
    isCustom: false,
    topFeatures: [
      "One logo concept",
      "Custom design & branding",
      "Simple colour plate design",
      "Custom Figma design",
      "basic SEO",
      "3 month for webiste maintanence ",
      "Speed optimisation for fast pages"
    ],
    additionalFeatures: [
      "CMS integration",
      "Api integration"
       ],
    cta: "Most Selling",
   
  },
  {
    id: "Custom",
    name: "Custom Solution",
    subtitle: "Built exactly for your vision",
    price: null,
    originalPrice: null,
    duration: "Timeline based on scope",
    icon: <Rocket className="w-5 h-5" />,
    popular: false,
    isCustom: true,
    topFeatures: [
      "Everything from other packages",
      "Fully custom features & design",
      "Advanced AI & automation",
      "Multiple integrations",
      "Dedicated project manager",
      "Long-term partnership & support"
    ],
    additionalFeatures: [
      "Custom API development",
      "Enterprise-level security",
      "Advanced analytics dashboard",
      "White-label solutions",
      "Monthly strategy calls",
      "24/7 priority support"
    ],
    cta: "Discuss Your Project",
  },
];

export default function PricingSection() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  // Mobile view - Show all cards stacked
  const MobileView = () => {
    return (
      <div className="block md:hidden space-y-5">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 1, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative bg-white rounded-lg p-4 shadow-md ${
              plan.popular 
                ? "border-2 border-blue-500 ring-2 ring-blue-500/20" 
                : plan.isCustom
                ? "border-2 border-purple-500 ring-2 ring-purple-500/20 bg-gradient-to-br from-purple-50/30 to-white"
                : "border border-slate-200"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
                <span className="bg-blue-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                  MOST POPULAR
                </span>
              </div>
            )}
            
            {plan.isCustom && (
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                  TAILORED FOR YOU
                </span>
              </div>
            )}

            <div className="text-center mb-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2.5 ${
                plan.popular ? "bg-blue-600 text-white" : plan.isCustom ? "bg-gradient-to-br from-purple-600 to-pink-600 text-white" : "bg-slate-100 text-slate-700"
              }`}>
                {plan.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
              <p className="text-xs text-slate-600 mt-1">{plan.subtitle}</p>
            </div>

            <div className="text-center mb-4">
              {plan.price ? (
                <>
                  <div className="flex items-baseline justify-center gap-1.5">
                    <span className="text-base text-slate-400 line-through">${plan.originalPrice}</span>
                    <span className="text-2xl font-bold text-slate-900">${plan.price}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">{plan.duration} delivery</p>
                </>
              ) : (
                <>
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1.5">
                    Custom Pricing
                  </div>
                  <p className="text-[11px] text-slate-600">{plan.duration}</p>
                </>
              )}
            </div>

            <button
              onClick={() => {
                window.open(
                  `https://wa.me/923701247494?text=Hi%2C%20I%20want%20the%20${plan.name}%20package`,
                  "_blank"
                )
              }}
              className={`w-full py-2.5 px-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                plan.popular
                  ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg"
                  : plan.isCustom
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-md hover:shadow-lg"
                  : "bg-slate-900 text-white hover:bg-slate-800"
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                {plan.cta} 
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
            
            <div className="mt-4 space-y-1.5">
              {plan.topFeatures.map((feature, i) => (
                <div key={i} className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-slate-700 leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                setExpandedCard(expandedCard === plan.id ? null : plan.id);
              }}
              className="mt-3 text-blue-600 text-xs font-medium flex items-center gap-1 hover:text-blue-700"
            >
              {expandedCard === plan.id ? "Show less" : `+${plan.additionalFeatures?.length || 0} more features`}
              {expandedCard === plan.id ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>

            {expandedCard === plan.id && (
              <div className="overflow-hidden">
                <div className="mt-2.5 space-y-1.5 pt-2.5 border-t border-slate-100">
                  {plan.additionalFeatures?.map((feature, i) => (
                    <div key={i} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-slate-600 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    );
  };

  // Desktop view - Blur Effect
  const DesktopView = () => (
    <div className="hidden md:grid md:grid-cols-3 gap-6">
      {pricingPlans.map((plan, index) => (
        <motion.div
          key={plan.id}
          initial={{ opacity: 1, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className={`relative bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 ${
            plan.popular 
              ? "border-2 border-blue-500 shadow-lg ring-2 ring-blue-500/20" 
              : plan.isCustom
              ? "border-2 border-purple-500 shadow-lg ring-2 ring-purple-500/20 bg-gradient-to-br from-purple-50/30 to-white"
              : "border border-slate-200 shadow-md"
          }`}
        >
          {plan.popular && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                MOST POPULAR
              </span>
            </div>
          )}
          
          {plan.isCustom && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                TAILORED FOR YOU
              </span>
            </div>
          )}

          <div className="text-center mb-5">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3 ${
              plan.popular ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-700"
            }`}>
              {plan.icon}
            </div>
            <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
            <p className="text-xs text-slate-600 mt-1">{plan.subtitle}</p>
          </div>

          <div className="text-center mb-5">
            {plan.price ? (
              <>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-sm text-slate-400 line-through">${plan.originalPrice}</span>
                  <span className="text-3xl font-bold text-slate-900">${plan.price}</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">{plan.duration}</p>
              </>
            ) : (
              <>
                <div className="text-2xl font-bold text-slate-900 mb-1">Let&apos;s Talk</div>
                <p className="text-xs text-slate-500">{plan.duration}</p>
              </>
            )}
          </div>

          <button
            onClick={() => {
              window.open(
                `https://wa.me/923701247494?text=Hi%2C%20I%20want%20the%20${plan.name}%20package`,
                "_blank"
              )
            }}
            className={`w-full py-2.5 px-4 rounded-lg font-semibold text-sm mb-5 ${
              plan.popular
                ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
                : "bg-slate-900 text-white hover:bg-slate-800"
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              {plan.cta} 
              <ArrowRight className="w-4 h-4" />
            </span>
          </button>

          <div className="space-y-2 mb-3">
            {plan.topFeatures.map((feature, i) => (
              <div key={i} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-xs text-slate-700 leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => setExpandedCard(expandedCard === plan.id ? null : plan.id)}
            className="text-blue-600 text-xs font-medium flex items-center gap-1 hover:text-blue-700"
          >
            {expandedCard === plan.id ? "Show less" : `+${plan.additionalFeatures.length} more`}
            {expandedCard === plan.id ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>

          {expandedCard === plan.id && (
            <div className="overflow-hidden">
              <div className="mt-3 space-y-2 pt-3 border-t border-slate-100">
                {plan.additionalFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );

  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50" id="pricing">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header - Blur Effect */}
        <motion.div
          initial={{ opacity: 1, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Invest in Your <span className="text-blue-600">Growth</span>
          </h2>
          
          <p className="text-base text-slate-600 max-w-xl mx-auto">
            One-time investment, lasting impact. No hidden fees.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <MobileView />
        <DesktopView />

        {/* CTA - Blur Effect */}
        <motion.div
          initial={{ opacity: 1, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="bg-white border border-slate-200 rounded-lg p-6 md:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Need help choosing?
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Book a free 30-min consultation to find your perfect plan
            </p>
            <button
              onClick={() => {
                window.open(
                  "https://wa.me/923701247494?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation%20call",
                  "_blank"
                )
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-medium text-sm shadow-md hover:shadow-lg"
            >
              Book Free Call
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}