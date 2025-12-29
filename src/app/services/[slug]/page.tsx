import { Instrument_Serif } from "next/font/google";
import { ArrowLeft, CheckCircle2, MessageCircle, ArrowRight, Zap } from "lucide-react"; 
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// --- FONT ---
const instrumentSerif = Instrument_Serif({ weight: "400", subsets: ["latin"] });

// --- DATA ---
const servicesContent = {
  "luxury-web-architecture": {
    title: "Luxury Web Architecture",
    subtitle: "Digital Estates for the Modern Elite",
    description: "In the world of high-ticket real estate, first impressions are everything. We don't just build websites; we engineer digital estates. Using custom Next.js architecture, we create platforms that are faster, more secure, and infinitely more scalable than standard WordPress templates.",
    benefits: [
      "Zero Loading Time (Instant Transitions)",
      "Bank-Grade Security for Client Data",
      "Bespoke Animations utilizing Framer Motion",
      "Headless CMS for Easy Content Management"
    ],
    process: "We start with a blueprint phase, analyzing your brand ethos. Then, we move to architectural coding, where every component is hand-crafted. Finally, we conduct rigorous stress testing before handover.",
  },
  "mobile-first-experience": {
    title: "Mobile-First Experience",
    subtitle: "Capturing Investors on the Go",
    description: "70% of luxury property inquiries happen on mobile devices. If your site isn't optimized for a thumb-scroll experience, you are losing millions in potential deals. We design for the smallest screen first, ensuring navigation is intuitive and visuals are stunning.",
    benefits: [
      "Touch-Optimized Galleries",
      "WhatsApp & Call Integration",
      "Adaptive Layouts for Foldable Phones",
      "Speed Optimization for 4G Networks"
    ],
    process: "Our design process begins with mobile wireframes. We test on actual devices—from the latest iPhone to high-end Androids—to ensure the 'feel' is premium.",
  },
  "seo-lead-generation": {
    title: "SEO & Lead Gen",
    subtitle: "Dominate Google, Capture Leads",
    description: "A website is an asset only if it generates revenue. We implement aggressive Technical SEO strategies tailored for real estate keywords. Combined with high-conversion CRM forms, we turn visitors into qualified leads.",
    benefits: [
      "Schema Markup for Rich Snippets",
      "Automated Sitemap Generation",
      "HubSpot / Salesforce Integration",
      "Google Analytics 4 Advanced Setup"
    ],
    process: "We conduct a deep audit of your competitors. Then, we restructure your site's metadata and content hierarchy to ensure Google prefers your listings over others.",
  },
  "interactive-maps-3d": {
    title: "Interactive Maps & 3D",
    subtitle: "Immersive Virtual Showings",
    description: "International investors can't always fly in. We bridge the gap with interactive Mapbox integrations and WebGL 3D tours. Let your clients walk through the penthouse from their office in London or New York.",
    benefits: [
      "Custom Map Styles (Satellite/Street)",
      "3D Building Models in Browser",
      "Points of Interest (Schools, Malls) Highlighting",
      "VR Headset Compatibility"
    ],
    process: "We take your CAD drawings or floor plans and convert them into web-ready 3D assets, integrating them seamlessly into the browser without heavy loading times.",
  },
  "redesign-speed-optimization": {
    title: "Redesign & Speed Optimization",
    subtitle: "From Slow & Outdated to Lightning Fast",
    description: "Is your current website losing clients due to slow loading times or outdated design? We don't just patch old sites; we completely rebuild them using modern Next.js architecture. We focus on achieving 100/100 Core Web Vitals to ensure Google loves your site as much as your clients do.",
    benefits: [
      "Migration from WordPress to Next.js",
      "99+ Google PageSpeed Score",
      "Modern UI/UX Overhaul",
      "Instant Page Transitions"
    ],
    process: "We audit your current site's performance bottlenecks. Then, we rebuild the frontend using the latest technologies while keeping your SEO rankings intact. The result is a site that feels instant.",
  },
};

// FIX 1: Updated Type Definition for Next.js 15 (params is a Promise)
type Props = {
  params: Promise<{ slug: string }>;
};

// FIX 2: Updated generateMetadata to await params
export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const service = servicesContent[params.slug as keyof typeof servicesContent];
  
  if (!service) return { title: "Service Not Found" };
  
  return {
    title: `${service.title} | Luxury Real Estate Web Dev`,
    description: service.subtitle,
  };
}

// FIX 3: Updated Component to be async and await params
export default async function ServicePage(props: Props) {
  const params = await props.params;
  const service = servicesContent[params.slug as keyof typeof servicesContent];

  if (!service) {
    return notFound();
  }

  // Dynamic WhatsApp Message
  const whatsappMessage = `Hi Sami, I am interested in ${service.title}. Can we discuss the details?`;
  const whatsappLink = `https://wa.me/923701247494?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <main className="bg-white min-h-screen pb-20">
      
      {/* --- HERO SECTION --- */}
      <div className="relative min-h-[45vh] lg:min-h-[50vh] bg-slate-900 overflow-hidden flex items-center justify-center py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto w-full">
          <Link 
            href="/#services" 
            className="inline-flex items-center text-slate-400 hover:text-white mb-6 transition-colors text-[10px] md:text-xs font-bold uppercase tracking-widest border border-slate-700 rounded-full px-3 py-1.5 md:px-4 md:py-2 hover:bg-slate-800 hover:border-slate-600 bg-slate-900/50 backdrop-blur-sm"
          >
            <ArrowLeft className="w-3 h-3 mr-2" /> Back to Services
          </Link>
          
          <h1 className={`${instrumentSerif.className} text-3xl sm:text-4xl md:text-6xl text-white mb-3 md:mb-4 leading-tight px-2`}>
            {service.title}
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-amber-500 font-light italic px-4">
            {service.subtitle}
          </p>
        </div>
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl -mt-8 md:-mt-16 relative z-20">
        <div className="bg-white p-6 sm:p-8 md:p-12 shadow-2xl rounded-xl border-t-4 border-amber-600">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-16">
            
            {/* Left Column: Description & Process */}
            <div className="lg:col-span-2 space-y-8 md:space-y-12 order-2 lg:order-1">
              <div>
                <h3 className={`${instrumentSerif.className} text-2xl md:text-3xl text-slate-900 mb-3 md:mb-4`}>Overview</h3>
                <div className="w-12 md:w-16 h-1 bg-amber-600 mb-4 md:mb-6"></div>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div>
                <h3 className={`${instrumentSerif.className} text-2xl md:text-3xl text-slate-900 mb-3 md:mb-4`}>Our Process</h3>
                <div className="w-12 md:w-16 h-1 bg-slate-200 mb-4 md:mb-6"></div>
                <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                  {service.process}
                </p>
              </div>
            </div>

            {/* Right Column: Benefits Box */}
            <div className="lg:col-span-1 order-1 lg:order-2">
              <div className="bg-slate-50 p-6 md:p-8 rounded-xl border border-slate-100 lg:sticky lg:top-10 shadow-sm relative overflow-hidden">
                
                {/* Online Status Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-green-100 border border-green-200 px-2 py-1 rounded-full">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-[10px] font-bold text-green-700 uppercase tracking-wide">Online</span>
                </div>

                <h4 className="font-bold text-slate-900 uppercase tracking-widest text-[10px] md:text-xs mb-4 md:mb-6 text-amber-700">
                  Key Benefits
                </h4>
                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-xs md:text-sm font-medium leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-slate-200">
                  {/* WHATSAPP BUTTON */}
                  <Link 
                    href={whatsappLink}
                    target="_blank"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 md:py-4 rounded-lg transition-all shadow-lg active:scale-95 group mb-3"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span className="font-bold text-sm md:text-base">Chat on WhatsApp</span>
                  </Link>
                  
                  {/* Trust Text */}
                  <div className="flex items-center justify-center gap-1.5 text-slate-400">
                    <Zap className="w-3 h-3 text-amber-500" />
                    <p className="text-[10px] font-medium uppercase tracking-wide">
                      Avg. reply time: 10 mins
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* --- BOTTOM CTA --- */}
      <div className="container mx-auto px-4 max-w-4xl mt-16 md:mt-32 text-center pb-10">
        <h2 className={`${instrumentSerif.className} text-2xl md:text-4xl text-slate-900 mb-4 md:mb-6 leading-tight`}>
          Ready to elevate your digital presence?
        </h2>
        {/* Bottom Link */}
        <Link 
          href={whatsappLink}
          target="_blank"
          className="inline-flex items-center text-amber-700 font-bold uppercase tracking-widest hover:gap-4 gap-2 transition-all text-xs md:text-sm border-b border-amber-700 pb-1"
        >
          Chat on WhatsApp <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </main>
  );
}