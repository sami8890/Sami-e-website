"use client";

import type React from "react";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Code,
  Layers,
  Rocket,
  ImageIcon,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badege";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  PricingTier,
  PricingComparisonTable,
  SanityCmsFeatures,
} from "./pricing-componet";
import { SanityCmsExplainer } from "./sanity-cms-explainer";
import { Button } from "@/components/ui/button";
import AvailableSpost from "./availablle-spot-componnet";

// Add this keyframe animation to the top of the file
// Add this right after the imports
const floatAnimation = `
@keyframes float {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(-100px) translateX(20px);
    opacity: 0;
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
`;

interface ServiceCardProps {
  type: "portfolio" | "landing";
  className?: string;
  index: number;
}

const GradientBorder = ({ children }: { children: React.ReactNode }) => (
  <div className="relative rounded-2xl p-[1px] overflow-hidden">
    <div className="absolute inset-0 rounded-2xl bg-green-500/20" />
    <div className="absolute inset-[1px] rounded-2xl bg-[#121212] pointer-events-none" />
    {children}
  </div>
);

interface FeatureType {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureList = ({ features }: { features: FeatureType[] }) => {
  return (
    <div className="space-y-6">
      {features.map((feature) => (
        <div key={feature.title} className="flex items-start gap-3 group">
          <div className="mt-0.5 rounded-md bg-[#1A1A1A] p-1.5 transition-colors duration-300 group-hover:bg-green-500/10">
            {feature.icon}
          </div>
          <div>
            <h3 className="text-sm font-medium text-white group-hover:text-green-400 transition-colors duration-300">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-400">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const ServiceCard: React.FC<ServiceCardProps> = ({ type, index }) => {
  const features = {
    portfolio: [
      {
        title: "Customizable Design Templates",
        description: "Tailor your portfolio to reflect your unique style",
        icon: <Layers className="h-4 w-4 text-green-400" />,
      },
      {
        title: "Project Showcase Gallery",
        description: "Visually appealing display of your best work",
        icon: <ImageIcon className="h-4 w-4 text-green-400" />,
      },
      {
        title: "Responsive Layouts",
        description: "Ensure your portfolio looks great on any device",
        icon: <ArrowRight className="h-4 w-4 text-green-400" />,
      },
      {
        title: "SEO Optimization",
        description: "Increase visibility and attract more clients",
        icon: <Rocket className="h-4 w-4 text-green-400" />,
      },
    ],
    landing: [
      {
        title: "Compelling Call-to-Actions",
        description: "Drive user engagement and conversions",
        icon: <Rocket className="h-4 w-4 text-green-400" />,
      },
      {
        title: "A/B Testing Integration",
        description: "Optimize your landing page for maximum performance",
        icon: <Layers className="h-4 w-4 text-green-400" />,
      },
      {
        title: "Performance Analytics",
        description: "Track key metrics and gain valuable insights",
        icon: <ArrowRight className="h-4 w-4 text-green-400" />,
      },
      {
        title: "Lead Generation Forms",
        description: "Capture valuable leads and grow your customer base",
        icon: <Code className="h-4 w-4 text-green-400" />,
      },
    ],
  };

  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 300); // Increased delay between cards

    return () => clearTimeout(timer);
  }, [index]);

  if (type === "portfolio") {
    return (
      <div
        className={`transition-all duration-1000 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <GradientBorder>
          <Card
            className={`border-0 bg-[#121212] p-4 sm:p-6 md:p-8 transition-transform duration-300 ${
              isHovered
                ? "transform  shadow-lg shadow-black/40"
                : "shadow-md shadow-black/20"
            }`}
          >
            <div className="relative">
              <CardHeader className="p-0 pb-6">
                <Badge
                  variant="outline"
                  className="mb-4 w-fit rounded-full border-green-500 bg-[#1A1A1A] px-4 py-1 text-xs font-medium text-green-400"
                >
                  Showcase Your Work
                </Badge>
                <CardTitle
                  className={`${type === "portfolio" ? "mb-6" : ""} text-2xl sm:text-3xl md:text-4xl font-bold text-white`}
                >
                  Portfolio Website
                </CardTitle>
                <div className="mt-2">
                  <Badge
                    variant="outline"
                    className="rounded-full border-green-500 bg-[#1A1A1A] px-4 py-1 text-xs font-medium text-green-400 animate-pulse"
                  >
                    Limited spots available!
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 p-0">
                <div className="group relative overflow-hidden rounded-2xl">
                  <Image
                    src="/services-pics/portfolio.png"
                    alt="Portfolio Preview"
                    width={600}
                    height={300}
                    className="w-full object-cover transition-transform duration-700"
                  />
                  <div className="absolute  bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <FeatureList features={features.portfolio} />
                <p className="text-base leading-relaxed text-gray-400">
                  Create a stunning portfolio website that showcases your work,
                  skills, and achievements to potential clients and employers.
                  Stand out from the competition with a professional online
                  presence.
                </p>
              </CardContent>
              <CardFooter className="p-0 pt-8">
                <Link
                  href="https://calendly.com/sami-gabol13/portfolio-website-discussion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-4 flex items-center gap-2 rounded-lg bg-[#1A1A1A] px-8 py-3 text-green-400 transition-all duration-300 hover:bg-green-500 hover:text-black"
                >
                  <span className="text-base font-medium">
                    Start Your Portfolio
                  </span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </CardFooter>

            </div>
          </Card>
        </GradientBorder>
      </div>
    );
  }

  if (type === "landing") {
    return (
      <div
        className={`transition-all duration-1000 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <GradientBorder>
          <Card
            className={`border-0 bg-[#121212] p-4 sm:p-6 md:p-8 transition-transform duration-300 ${
              isHovered
                ? "transform scale-[1.01] shadow-lg shadow-black/40"
                : "shadow-md shadow-black/20"
            }`}
          >
            <div className="relative">
              <CardHeader className="space-y-6 p-0">
                <div className="flex flex-wrap gap-3">
                  <Badge
                    variant="outline"
                    className="rounded-full border-green-500 bg-[#1A1A1A] px-4 py-1 text-xs font-medium text-green-400"
                  >
                    Optimized
                  </Badge>
                  <Badge
                    variant="outline"
                    className="rounded-full border-green-500 bg-[#1A1A1A] px-4 py-1 text-xs font-medium text-green-400"
                  >
                    SEO friendly
                  </Badge>
                  <Badge
                    variant="outline"
                    className="rounded-full border-green-500 bg-[#1A1A1A] px-4 py-1 text-xs font-medium text-green-400"
                  >
                    Boost sales
                  </Badge>
                </div>
                <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  High-Converting Landing Page
                </CardTitle>
                <div className="mt-2">
                  <Badge
                    variant="outline"
                    className="rounded-full border-green-500 bg-[#1A1A1A] px-4 py-1 text-xs font-medium text-green-400 animate-pulse"
                  >
                    Limited spots available!
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-6 p-0 pt-6">
                <div className="group relative overflow-hidden rounded-2xl">
                  <Image
                    src="/services-pics/image.png"
                    alt="Portfolio Preview"
                    width={600}
                    height={300}
                    className="w-full object-contain transition-transform duration-700"
                  />
                  <div className="absolute  bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <p className="text-base leading-relaxed text-gray-400">
                  Get unique user interfaces, engaging content, mobile-friendly
                  design, and eye-catching animations—all crafted to elevate
                  your digital presence and drive conversions.
                </p>
                <FeatureList features={features.landing} />
              </CardContent>
              <CardFooter className="p-0 pt-8">
                <Link
                  href="#"
                  className="group mt-4 flex items-center gap-2 rounded-lg bg-[#1A1A1A] px-8 py-3 text-green-400 transition-all duration-300 hover:bg-green-500 hover:text-black"
                >
                  <span className="text-base font-medium">
                    Boost Your Conversions
                  </span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </CardFooter>
            </div>
          </Card>
        </GradientBorder>
      </div>
    );
  }

  return null;
};

// Main component
export default function ServicesShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [, setActiveTab] = useState("services");
  const [showComparison, setShowComparison] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Update the pricingTiers array in the ServicesShowcase component to include the contentManagement property
  const pricingTiers = [
    {
      title: "Basic Portfolio",
      price: "$499",
      description:
        "Perfect for individuals looking to establish an online presence",
      features: [
        "Responsive design",
        "Up to 5 pages",
        "Basic SEO optimization",
        "Contact form",
        "15 Days of support",
      ],
      contentManagement: false,
    },
    {
      title: "Premium Landing Page",
      price: "$1099",
      description: "Ideal for businesses focused on conversions and growth",
      features: [
        "High-converting design",
        "A/B testing setup",
        "Advanced analytics",
        "Lead capture forms",
        "1 months of support",
        "Performance optimization",
        "Sanity CMS integration",
      ],
      isPopular: true,
      contentManagement: true,
    },
    {
      title: "Enterprise Solution",
      price: "Custom",
      description: "Comprehensive digital presence for established businesses",
      features: [
        "Custom design & development",
        "Multiple page types",
        "Advanced SEO strategy",
        "Integration with existing systems",
        "3 months of priority support",
        "Regular performance reports",
        "Advanced Sanity CMS integration",
      ],
      contentManagement: true,
    },
  ];

  // Add this style tag to the component
  // Add this right before the return statement
  useEffect(() => {
    // Add the animation styles
    const styleElement = document.createElement("style");
    styleElement.textContent = floatAnimation;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <section className="force-sticky relative min-h-[200vh] bg-black py-8 sm:py-12 md:py-16 lg:py-24">
      {/* Keep the background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-20 -right-20 w-96 h-96 bg-green-500/5 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        />
        <div
          className="absolute bottom-20 right-1/4 w-64 h-64 bg-green-500/4 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{ transform: `translateY(${scrollY * -0.03}px)` }}
        />
        <div
          className="absolute top-1/3 left-1/4 w-72 h-72 bg-green-500/3 rounded-full blur-3xl opacity-30 transition-transform duration-1000 ease-out"
          style={{ transform: `translateY(${scrollY * 0.02}px)` }}
        />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6">
        <div
          className={`mb-20 text-center transition-all duration-700 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Badge
            variant="outline"
            className="mb-6 rounded-full border-green-500 bg-[#1A1A1A] px-6 py-2 text-sm font-medium text-green-400"
          >
            Our Premium Services
          </Badge>
          <h2 className="mb-4 sm:mb-8 text-2xl sm:text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            <span className="block">Digital Experiences</span>
            <span className="block">
              <span className="text-green-400">Designed</span> for Impact
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-gray-400">
            From <span className="text-white font-medium">portfolios</span> to{" "}
            <span className="text-white font-medium">landing pages</span> that
            drive results.
          </p>
        </div>

        <Tabs
          defaultValue="services"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <div className="flex justify-center mb-12">
            <TabsList className="grid w-full max-w-md grid-cols-2 bg-[#1A1A1A]">
              <TabsTrigger
                value="services"
                className="data-[state=active]:bg-green-500 data-[state=active]:text-black"
              >
                Services
              </TabsTrigger>
              <TabsTrigger
                value="pricing"
                className="data-[state=active]:bg-green-500 data-[state=active]:text-black"
              >
                Pricing
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="services" className="mt-0">
            <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-[1fr,470px] gap-6 sm:gap-8 md:gap-10 lg:gap-14 justify-center">
              {/* Left side - Service cards */}
              <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-1 md:gap-10 w-full">
                <ServiceCard type="portfolio" index={0} />
                <ServiceCard type="landing" index={1} />
              </div>

              {/* Right side - Sticky videos section */}
              {/* <div className="w-full mt-8 lg:mt-0 space-y-6 sm:space-y-8 order-first lg:order-last">
                                <div
                                    className="lg:sticky top-24"
                                    style={{
                                        position: "sticky",
                                        top: "6rem",
                                        height: "fit-content",
                                    }}
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-bold text-white text-center lg:text-left">Portfolio Preview</h3>
                                    </div>

                                    <div className="relative transition-all duration-500 ease-out mb-6 sm:mb-8">
                                        <VideoPreviewComponent
                                            src="/dasm.mp4"
                                            className="shadow-[0_10px_50px_rgba(34,197,94,0.15)] hover:shadow-[0_15px_60px_rgba(34,197,94,0.25)] transition-all duration-300"
                                        />
                                        <div className="absolute -top-4 -right-4 w-8 h-8 sm:w-16 sm:h-16 md:w-20 md:h-20 border-t-2 border-r-2 border-green-500/30 rounded-tr-xl"></div>
                                        <div className="absolute -bottom-4 -left-4 w-8 h-8 sm:w-16 sm:h-16 md:w-20 md:h-20 border-b-2 border-l-2 border-green-500/30 rounded-bl-xl"></div>
                                    </div>

                                    <div className="relative transition-all duration-500 ease-out">
                                        <VideoPreviewComponent
                                            src="/second.mp4"
                                            className="shadow-[0_10px_50px_rgba(34,197,94,0.15)] hover:shadow-[0_15px_60px_rgba(34,197,94,0.25)] transition-all duration-300"
                                        />
                                        <div className="absolute -top-4 -right-4 w-8 h-8 sm:w-16 sm:h-16 md:w-20 md:h-20 border-t-2 border-r-2 border-green-500/30 rounded-tr-xl"></div>
                                        <div className="absolute -bottom-4 -left-4 w-8 h-8 sm:w-16 sm:h-16 md:w-20 md:h-20 border-b-2 border-l-2 border-green-500/30 rounded-bl-xl"></div>
                                    </div>
                                </div>
                            </div> */}
            </div>

            <SanityCmsExplainer />

            <AvailableSpost />
          </TabsContent>

          <TabsContent value="pricing">
            <div className="mx-auto max-w-6xl">
              <div className="mb-8 text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Transparent Pricing,{" "}
                  <span className="text-green-400">Exceptional Value</span>
                </h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Choose a plan that includes our user-friendly Sanity CMS to
                  update your website without any technical knowledge.
                </p>
                <div className="mt-6 flex justify-center">
                  <button
                    onClick={() => setShowComparison(!showComparison)}
                    className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
                  >
                    {showComparison
                      ? "Hide detailed comparison"
                      : "View detailed comparison"}
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-300 ${showComparison ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>
              </div>

              {/* Pricing cards - simplified and mobile-optimized */}
              <div
                className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500 ${
                  showComparison
                    ? "opacity-0 h-0 overflow-hidden"
                    : "opacity-100"
                }`}
              >
                {pricingTiers.map((tier, index) => (
                  <PricingTier
                    key={index}
                    title={tier.title}
                    price={tier.price}
                    description={tier.description}
                    features={tier.features}
                    isPopular={tier.isPopular}
                    contentManagement={tier.contentManagement}
                  />
                ))}
              </div>

              {/* Comparison table */}
              <div
                className={`transition-all duration-500 ${
                  showComparison
                    ? "opacity-100"
                    : "opacity-0 h-0 overflow-hidden"
                }`}
              >
                <PricingComparisonTable plans={pricingTiers} />
              </div>

              {/* Add the new Sanity CMS Features component */}
              <SanityCmsFeatures />

              {/* Add a simple CTA section */}
              <div className="mt-12 text-center">
                <h3 className="text-xl font-bold text-white mb-4">
                  Ready to get started?
                </h3>
                <p className="text-gray-400 max-w-xl mx-auto mb-6">
                  Choose the plan that fits your needs and start building your
                  online presence today.
                </p>
                <Button className="bg-green-500 hover:bg-green-600 text-black">
                  Contact Us
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
