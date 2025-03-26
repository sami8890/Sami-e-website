"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badege";
import { Button } from "@/components/ui/button";

// Add the Plan type interface
interface Plan {
  title: string;
  price: string;
  isPopular?: boolean;
}

export const PricingTier = ({
  title,
  price,
  description,
  features,
  isPopular = false,
  contentManagement = false,
}: {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  contentManagement?: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative rounded-xl overflow-hidden ${isPopular ? "border-2 border-green-500" : "border border-zinc-800"
        } transition-all duration-300 ${isHovered
          ? "transform scale-[1.02] shadow-lg shadow-black/40"
          : "shadow-md shadow-black/20"
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-green-500 text-black px-4 py-1 text-xs font-medium">
          Most Popular
        </div>
      )}
      <div className="p-6 bg-[#121212]">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold text-white">{price}</span>
          {price !== "Custom" && (
            <span className="text-gray-400 ml-1">/project</span>
          )}
        </div>
        <p className="text-gray-400 mb-6">{description}</p>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 group">
              <Check className="h-5 w-5 text-green-400 shrink-0 mt-0.5 transition-transform duration-200" />
              <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-200">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {contentManagement && (
          <div className="mb-6 p-4 bg-green-500/10 rounded-lg border border-green-500/20 transition-all duration-300 hover:border-green-500/40 hover:bg-green-500/15">
            <h4 className="text-green-400 font-medium mb-2 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-edit"
              >
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
              Sanity CMS Included
            </h4>
            <p className="text-sm text-gray-300">
              Update your website anytime without coding knowledge. Simply log
              in, edit your text and images, and publish with one click.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full bg-green-500/20 px-2.5 py-0.5 text-xs font-medium text-green-400">
                User-friendly
              </span>
              <span className="inline-flex items-center rounded-full bg-green-500/20 px-2.5 py-0.5 text-xs font-medium text-green-400">
                No coding
              </span>
              <span className="inline-flex items-center rounded-full bg-green-500/20 px-2.5 py-0.5 text-xs font-medium text-green-400">
                Instant updates
              </span>
            </div>
          </div>
        )}

        <Button
          className={`w-full ${isPopular
              ? "bg-green-500 hover:bg-green-600 text-black"
              : "bg-zinc-800 hover:bg-zinc-700 text-white"
            } transition-all duration-300 ${isHovered ? "transform scale-[1.02]" : ""}`}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export const PricingComparisonTable = ({ plans }: { plans: Plan[] }) => {
  return (
    <div className="mt-8 overflow-x-auto pb-4">
      <div className="min-w-[768px]">
        {/* Mobile-friendly header */}
        <div className="grid grid-cols-4 gap-4 mb-4 pb-4 border-b border-zinc-800">
          <div className="text-white font-medium">Feature</div>
          {plans.map((plan, index) => (
            <div key={index} className="text-white font-medium text-center">
              {plan.title}
              {plan.isPopular && (
                <span className="ml-2 inline-block px-2 py-0.5 text-xs bg-green-500 text-black rounded-full">
                  Popular
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Price row */}
        <div className="grid grid-cols-4 gap-4 mb-4 pb-4 border-b border-zinc-800">
          <div className="text-gray-400">Price</div>
          {plans.map((plan, index) => (
            <div key={index} className="text-center">
              <span className="text-white font-bold">{plan.price}</span>
              {plan.price !== "Custom" && (
                <span className="text-gray-400 text-sm">/project</span>
              )}
            </div>
          ))}
        </div>

        {/* Pages row */}
        <div className="grid grid-cols-4 gap-4 mb-4 pb-4 border-b border-zinc-800">
          <div className="text-gray-400">Pages</div>
          <div className="text-center text-white">Up to 5</div>
          <div className="text-center text-white">Up to 10</div>
          <div className="text-center text-white">Unlimited</div>
        </div>

        {/* Content Management row - Highlight this row */}
        <div className="grid grid-cols-4 gap-4 mb-4 pb-4 border-b border-zinc-800 bg-green-500/5 -mx-4 px-4 py-2 rounded-md">
          <div className="text-green-400 font-medium">Sanity CMS</div>
          <div className="text-center">
            <X className="inline-block h-5 w-5 text-red-400" />
            <div className="text-xs text-gray-400 mt-1">Not included</div>
          </div>
          <div className="text-center">
            <Check className="inline-block h-5 w-5 text-green-400" />
            <div className="text-xs text-green-400 mt-1">Basic version</div>
          </div>
          <div className="text-center">
            <Check className="inline-block h-5 w-5 text-green-400" />
            <div className="text-xs text-green-400 mt-1">Advanced version</div>
          </div>
        </div>

        {/* Content editing row */}
        <div className="grid grid-cols-4 gap-4 mb-4 pb-4 border-b border-zinc-800">
          <div className="text-gray-400">Content Editing</div>
          <div className="text-center text-white">Developer needed</div>
          <div className="text-center text-white">Self-service</div>
          <div className="text-center text-white">Self-service</div>
        </div>

        {/* Support Period row */}
        <div className="grid grid-cols-4 gap-4 mb-4 pb-4 border-b border-zinc-800">
          <div className="text-gray-400">Support Period</div>
          <div className="text-center text-white">15 Days</div>
          <div className="text-center text-white">1 month</div>
          <div className="text-center text-white">3 months</div>
        </div>

        {/* SEO Optimization row */}
        <div className="grid grid-cols-4 gap-4 mb-4 pb-4 border-b border-zinc-800">
          <div className="text-gray-400">SEO Optimization</div>
          <div className="text-center text-white">Basic</div>
          <div className="text-center text-white">Advanced</div>
          <div className="text-center text-white">Comprehensive</div>
        </div>

        {/* Revisions row */}
        <div className="grid grid-cols-4 gap-4 mb-4 pb-4 border-b border-zinc-800">
          <div className="text-gray-400">Revisions</div>
          <div className="text-center text-white">2 rounds</div>
          <div className="text-center text-white">3 rounds</div>
          <div className="text-center text-white">Unlimited</div>
        </div>

        {/* CTA buttons */}
        <div className="grid grid-cols-4 gap-4">
          <div className="text-gray-400"></div>
          {plans.map((plan, index) => (
            <div key={index} className="text-center">
              <Button
                className={`${plan.isPopular
                    ? "bg-green-500 hover:bg-green-600 text-black"
                    : "bg-zinc-800 hover:bg-zinc-700 text-white"
                  }`}
              >
                Choose {plan.title}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile-friendly comparison cards - only visible on small screens */}
      <div className="md:hidden mt-8 space-y-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-[#121212] rounded-lg border border-zinc-800 p-4"
          >
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-white font-medium">{plan.title}</h4>
              {plan.isPopular && (
                <span className="px-2 py-0.5 text-xs bg-green-500 text-black rounded-full">
                  Popular
                </span>
              )}
            </div>
            <div className="mb-4">
              <span className="text-2xl font-bold text-white">
                {plan.price}
              </span>
              {plan.price !== "Custom" && (
                <span className="text-gray-400 ml-1">/project</span>
              )}
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-gray-400 text-sm">Pages</span>
                <span className="text-white text-sm">
                  {index === 0
                    ? "Up to 5"
                    : index === 1
                      ? "Up to 10"
                      : "Unlimited"}
                </span>
              </div>

              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-green-400 text-sm font-medium">
                  Sanity CMS
                </span>
                <span className="text-white text-sm">
                  {index === 0 ? (
                    <X className="inline-block h-4 w-4 text-red-400" />
                  ) : index === 1 ? (
                    <Check className="inline-block h-4 w-4 text-green-400" />
                  ) : (
                    <span className="flex items-center">
                      <Check className="inline-block h-4 w-4 text-green-400 mr-1" />
                      <span className="text-green-400 text-xs">Advanced</span>
                    </span>
                  )}
                </span>
              </div>

              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-gray-400 text-sm">Support</span>
                <span className="text-white text-sm">
                  {index === 0
                    ? "15 Days"
                    : index === 1
                      ? "1 month"
                      : "3 months"}
                </span>
              </div>

              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-gray-400 text-sm">Revisions</span>
                <span className="text-white text-sm">
                  {index === 0
                    ? "2 rounds"
                    : index === 1
                      ? "3 rounds"
                      : "Unlimited"}
                </span>
              </div>
            </div>

            <Button
              className={`w-full ${plan.isPopular
                  ? "bg-green-500 hover:bg-green-600 text-black"
                  : "bg-zinc-800 hover:bg-zinc-700 text-white"
                }`}
            >
              Choose {plan.title}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export const SanityCmsFeatures = () => {
  return (
    <div className="mt-12 bg-[#121212] rounded-xl border border-green-500/20 overflow-hidden">
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <Badge
              variant="outline"
              className="mb-2 rounded-full border-green-500 bg-[#1A1A1A] px-4 py-1 text-xs font-medium text-green-400"
            >
              Included with Premium & Enterprise
            </Badge>
            <h3 className="text-xl md:text-2xl font-bold text-white">
              Sanity CMS: Update Your Site Without Coding
            </h3>
          </div>
          <Button className="bg-green-500 hover:bg-green-600 text-black">
            See Demo
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#1A1A1A] rounded-lg p-5 border border-zinc-800 transition-all duration-300 hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/5 hover:translate-y-[-5px]">
            <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
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
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" y1="12" x2="3" y2="12" />
              </svg>
            </div>
            <h4 className="text-white font-medium mb-2">Simple Login</h4>
            <p className="text-gray-400 text-sm">
              Access your website dashboard with a secure, simple login process.
            </p>
          </div>

          <div className="bg-[#1A1A1A] rounded-lg p-5 border border-zinc-800 transition-all duration-300 hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/5 hover:translate-y-[-5px]">
            <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
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
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
            </div>
            <h4 className="text-white font-medium mb-2">
              Edit Like a Document
            </h4>
            <p className="text-gray-400 text-sm">
              Change text and images as easily as editing a Word document.
            </p>
          </div>

          <div className="bg-[#1A1A1A] rounded-lg p-5 border border-zinc-800 transition-all duration-300 hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/5 hover:translate-y-[-5px]">
            <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
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
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h4 className="text-white font-medium mb-2">Preview Changes</h4>
            <p className="text-gray-400 text-sm">
              See exactly how your website will look before making it live.
            </p>
          </div>

          <div className="bg-[#1A1A1A] rounded-lg p-5 border border-zinc-800 transition-all duration-300 hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/5 hover:translate-y-[-5px]">
            <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
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
                <path d="M12 2v4" />
                <path d="M12 18v4" />
                <path d="M4.93 4.93l2.83 2.83" />
                <path d="M16.24 16.24l2.83 2.83" />
                <path d="M2 12h4" />
                <path d="M18 12h4" />
                <path d="M4.93 19.07l2.83-2.83" />
                <path d="M16.24 7.76l2.83-2.83" />
              </svg>
            </div>
            <h4 className="text-white font-medium mb-2">Publish Instantly</h4>
            <p className="text-gray-400 text-sm">
              Make your changes live with a single click whenever you&apos;re ready.
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-green-500/10 rounded-lg p-5 border border-green-500/20 transition-all duration-300 hover:border-green-500/40 hover:bg-green-500/15">
            <h4 className="text-green-400 font-medium mb-2 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check-circle"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              No Technical Skills Needed
            </h4>
            <p className="text-gray-300 text-sm">
              If you can use social media or write an email, you can update your
              website.
            </p>
          </div>

          <div className="bg-green-500/10 rounded-lg p-5 border border-green-500/20 transition-all duration-300 hover:border-green-500/40 hover:bg-green-500/15">
            <h4 className="text-green-400 font-medium mb-2 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check-circle"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              No Monthly Fees
            </h4>
            <p className="text-gray-300 text-sm">
              Unlike other CMS platforms, there are no recurring subscription
              costs.
            </p>
          </div>

          <div className="bg-green-500/10 rounded-lg p-5 border border-green-500/20 transition-all duration-300 hover:border-green-500/40 hover:bg-green-500/15">
            <h4 className="text-green-400 font-medium mb-2 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check-circle"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              Free Training Included
            </h4>
            <p className="text-gray-300 text-sm">
              Well teach you how to use the system with a personalized training
              session.
            </p>
          </div>
        </div>

        {/* Add an interactive mockup */}
        <div className="mt-10 p-6 bg-[#0A0A0A] rounded-xl border border-zinc-800">
          <div className="flex justify-center">
            <div className="relative max-w-md w-full">
              <div className="bg-[#1A1A1A] rounded-t-lg p-3 flex items-center justify-between border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-gray-400">Sanity Studio</div>
              </div>
              <div className="bg-[#121212] p-4 rounded-b-lg border-x border-b border-zinc-800">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-1/3 space-y-3">
                    <div className="h-8 bg-green-500/20 rounded flex items-center px-3 text-green-400 text-sm font-medium">
                      Home Page
                    </div>
                    <div className="h-8 bg-black/30 rounded flex items-center px-3 text-gray-300 text-sm">
                      About Us
                    </div>
                    <div className="h-8 bg-black/30 rounded flex items-center px-3 text-gray-300 text-sm">
                      Services
                    </div>
                  </div>
                  <div className="w-full md:w-2/3 space-y-4">
                    <div className="h-10 w-full bg-[#1A1A1A] rounded"></div>
                    <div className="h-24 w-full bg-[#1A1A1A] rounded"></div>
                    <div className="flex justify-end gap-2">
                      <div className="h-8 w-20 rounded bg-[#1A1A1A]"></div>
                      <div className="h-8 w-20 rounded bg-green-500"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-green-500/30 rounded-br-xl"></div>
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-green-500/30 rounded-tl-xl"></div>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-green-400 font-medium">
              Update your website in minutes, not days
            </p>
            <p className="text-gray-400 text-sm mt-1">
              No more waiting for developers to make simple content changes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};