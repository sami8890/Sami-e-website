"use client";
import { useState } from "react";
import { Check, Zap, Crown, Rocket, ChevronDown, ChevronUp, ArrowRight, Info } from "lucide-react";

const pricingPlans = [
  {
    id: "Silver",
    name: "Silver",
    subtitle: "Perfect for small businesses",
    price: 599,
    originalPrice: 799,
    duration: "5-10 business days",
    icon: <Zap className="w-5 h-5" />,
    popular: false,
    topFeatures: [
      "One logo concept",
      "Simple colour palette",
      "Basic OR Small SEO",
      "1 Complete Website",
      "Basic design with development",
      "10 days of free maintenance"
    ],
    additionalFeatures: [
      "Mobile responsive design",
      "Contact form integration",
      "Social media links setup",
      
    ],
    cta: "Get Started",
  },
  {
    id: "Gold",
    name: "Gold",
    subtitle: "Most popular choice",
    price: 1199,
    originalPrice: 1499,
    duration: "15-20 business days",
    icon: <Crown className="w-5 h-5" />,
    popular: true,
    topFeatures: [
      "One logo concept",
      "Custom design & branding",
      "Simple colour palette design",
      "Custom Figma design",
      "100% SEO Score",
      "3 months of website maintenance",
      "Speed optimization for fast pages"
    ],
    additionalFeatures: [
      "CMS integration",
      "API integration",
      "E-commerce functionality",
      "Advanced contact forms",
    ],
    cta: "Most Popular",
  },
  {
    id: "Platinum",
    name: "Platinum",
    subtitle: "For large organizations",
    price: 2699,
    originalPrice: 2999,
    duration: "25-30 business days",
    icon: <Rocket className="w-5 h-5" />,
    popular: false,
    topFeatures: [
      "Everything from Silver and Gold packages",
      "2 logo concepts",
      "Custom design & branding",
      "A complete AI agents setup",
      "Custom Website bot",
      "5 months of website maintenance"
    ],
    additionalFeatures: [
      "Personal dashboard",
      "Strong and secured Payment method (Stripe)",
      "Custom development",
      "Advanced security system",
      "Priority support & dedicated manager",
      "Advanced reporting & analytics"
    ],
    cta: "Build Solution",
  },
];

export default function PricingSection() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState(() => pricingPlans.find(p => p.popular)?.id ?? pricingPlans[0].id);

  // Mobile tab view
  const MobileView = () => {
    const activePlan = pricingPlans.find(plan => plan.id === activeTab);
    
    return (
      <div className="block md:hidden">
        {/* Tab buttons */}
        <div className="flex justify-center mb-6">
          <div className="flex gap-1 p-1 bg-slate-100 rounded-lg w-fit">
            {pricingPlans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setActiveTab(plan.id)}
                className={`px-3 py-1.5 rounded-md font-medium text-xs ${
                  activeTab === plan.id 
                    ? (plan.popular ? "bg-blue-600 text-white shadow-sm" : "bg-slate-900 text-white shadow-sm")
                    : "bg-transparent text-slate-600 hover:text-slate-900"
                }`}
              >
                <div className="flex flex-col items-center gap-1">
                  <span className="whitespace-nowrap">{plan.name}</span>
                  {plan.popular && (
                    <span className="text-[9px] bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 px-1.5 py-0.5 rounded-full font-semibold">
                      Popular
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Active plan card */}
        <div className={`rounded-xl border-2 p-6 shadow-lg ${
          activePlan?.popular 
            ? "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-500" 
            : "bg-white border-slate-200"
        }`}>
          <div className="text-center mb-6">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${
              activePlan?.popular ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-700"
            }`}>
              {activePlan?.icon}
            </div>
            <h3 className={`text-xl font-bold ${activePlan?.popular ? "text-blue-900" : "text-slate-900"}`}>
              {activePlan?.name}
            </h3>
            <p className={`text-sm mt-1 ${activePlan?.popular ? "text-blue-700" : "text-slate-600"}`}>
              {activePlan?.subtitle}
            </p>
          </div>

          <div className="text-center mb-6">
            <div className="flex items-baseline justify-center gap-2">
              <span className={`text-lg line-through ${activePlan?.popular ? "text-blue-400" : "text-slate-400"}`}>
                ${activePlan?.originalPrice ?? ""}
              </span>
              <span className={`text-3xl font-bold ${activePlan?.popular ? "text-blue-900" : "text-slate-900"}`}>
                ${activePlan?.price ?? ""}
              </span>
            </div>
            <p className={`text-xs mt-1 ${activePlan?.popular ? "text-blue-600" : "text-slate-500"}`}>
              {activePlan?.duration ?? ""} delivery
            </p>
          </div>

          <button
            onClick={() => {
              window.open(
                `https://wa.me/923701247494?text=Hi%2C%20I%20want%20the%20${activePlan?.name}%20package`,
                "_blank"
              )
            }}
            className={`w-full py-3 px-4 rounded-lg font-semibold text-sm ${
              activePlan?.popular
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-slate-900 text-white hover:bg-slate-800"
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              {activePlan?.cta}
              <ArrowRight className="w-4 h-4" />
            </span>
          </button>
          
          <div className="mt-6 space-y-2">
            {activePlan?.topFeatures?.map((feature, i) => (
              <div key={i} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-500 mt-0.5" />
                <span className="text-sm text-slate-700">{feature}</span>
              </div>
            ))}
          </div>

          {activePlan?.additionalFeatures && activePlan.additionalFeatures.length > 0 && (
            <button
              onClick={() => {
                if (!activePlan) return;
                setExpandedCard(expandedCard === activePlan.id ? null : activePlan.id);
              }}
              className="mt-4 text-blue-600 text-sm font-medium flex items-center gap-1 hover:text-blue-700"
              disabled={!activePlan}
            >
              {activePlan && (expandedCard === activePlan.id ? "Show less" : `+${activePlan?.additionalFeatures?.length ?? 0} more features`)}
              {activePlan && (expandedCard === activePlan.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />)}
            </button>
          )}

          {expandedCard === activePlan?.id && (
            <div className="overflow-hidden">
              <div className="mt-3 space-y-2 pt-3 border-t border-slate-100">
                {activePlan?.additionalFeatures?.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5" />
                    <span className="text-sm text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Timeline Note - Mobile */}
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-start gap-2">
            <Info className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-blue-700">
              <span className="font-medium">Timeline starts</span> after project requirements are finalized and initial payment is received. May vary based on client feedback response time.
            </p>
          </div>
        </div>
      </div>
    );
  };

  // Desktop view
  const DesktopView = () => (
    <div className="hidden md:block">
      <div className="grid md:grid-cols-3 gap-6">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={`relative rounded-xl p-6 hover:shadow-xl transition-all duration-300 ${
              plan.popular 
                ? "bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-500 shadow-lg ring-2 ring-blue-500/20" 
                : "bg-white border border-slate-200 shadow-md"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </span>
              </div>
            )}

            {/* Header */}
            <div className="text-center mb-5">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3 ${
                plan.popular ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-700"
              }`}>
                {plan.icon}
              </div>
              <h3 className={`text-lg font-bold ${plan.popular ? "text-blue-900" : "text-slate-900"}`}>{plan.name}</h3>
              <p className={`text-xs mt-1 ${plan.popular ? "text-blue-700" : "text-slate-600"}`}>{plan.subtitle}</p>
            </div>

            {/* Pricing */}
            <div className="text-center mb-5">
              <div className="flex items-baseline justify-center gap-2">
                <span className={`text-sm line-through ${plan.popular ? "text-blue-400" : "text-slate-400"}`}>${plan.originalPrice}</span>
                <span className={`text-3xl font-bold ${plan.popular ? "text-blue-900" : "text-slate-900"}`}>${plan.price}</span>
              </div>
              <p className={`text-xs mt-1 ${plan.popular ? "text-blue-600" : "text-slate-500"}`}>{plan.duration}</p>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => {
                window.open(
                  `https://wa.me/923701247494?text=Hi%2C%20I%20want%20the%20${plan.name}%20package`,
                  "_blank"
                )
              }}
              className={`w-full py-2.5 px-4 rounded-lg font-semibold text-sm mb-5 transition-all duration-300 ${
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

            {/* Top features */}
            <div className="space-y-2 mb-3">
              {plan.topFeatures.map((feature, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-slate-700 leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            {/* Expandable features */}
            {plan.additionalFeatures.length > 0 && (
              <button
                onClick={() => setExpandedCard(expandedCard === plan.id ? null : plan.id)}
                className="text-blue-600 text-xs font-medium flex items-center gap-1 hover:text-blue-700 transition-colors"
              >
                {expandedCard === plan.id ? "Show less" : `+${plan.additionalFeatures.length} more`}
                {expandedCard === plan.id ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              </button>
            )}

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
          </div>
        ))}
      </div>

      {/* Timeline Note - Desktop */}
      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg max-w-4xl mx-auto">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-blue-700">
            <span className="font-medium">Timeline starts</span> after project requirements are finalized and initial payment is received. May vary based on client feedback response time.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50" id="pricing">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Invest in Your <span className="text-blue-600">Growth</span>
          </h2>
          
          <p className="text-base text-slate-600 max-w-xl mx-auto">
            One-time investment, lasting impact. No hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <MobileView />
        <DesktopView />

        {/* CTA Section */}
        {/* <div className="text-center mt-12">
          <div className="bg-white border border-slate-200 rounded-lg p-6 md:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Need help choosing?
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Book a free 30-min consultation to find your perfect plan that suits you
            </p>
            <button
              onClick={() => {
                window.open(
                  "https://wa.me/923701247494?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation%20call",
                  "_blank"
                )
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-medium text-sm shadow-md hover:shadow-lg transition-all duration-300"
            >
              Book a Call
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
}