// "use client";

// import { Instrument_Serif, DM_Sans } from "next/font/google";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { ArrowLeft } from "lucide-react";
// import { useParams } from "next/navigation";

// // Fonts
// const instrumentSerif = Instrument_Serif({ weight: "400", subsets: ["latin"] });
// const dmSans = DM_Sans({ weight: ["400", "500", "700"], subsets: ["latin"] });


// const projectsData = [
//   {
//     slug: "blue-zone",
//     title: "Blue Zone",
//     tagline: "High-Performance Lead Gen Portal",
//     category: "Real Estate",
//     year: "2025",
//     client: "Emaar Properties",
//     mainImage: "/project/b.png", 
//     gallery: ["/project/b3.png","/project/b2.png" ], 
//     challenge: "The client needed to showcase their new luxury tower launch to international investors. The old site was slow and lacked visual appeal, leading to a high bounce rate.",
//     solution: "I built a custom Next.js landing page with 3D interactions and a streamlined lead capture form. We focused on speed (100/100 Lighthouse) and mobile responsiveness.",
//     result: "30% increase in lead generation within the first week of launch."
//   },
//  {
//     slug: "sobha-villas",
//     title: "Danah Real Estate",
//     tagline: "Premium Real Estate Investment Portal",
//     category: "Real Estate",
//     year: "2024",
//     client: "Danah Real Estate Company", 
//     mainImage: "/project/c.png",
//     gallery: ["/project/c.png"],
//     challenge: "Danah Real Estate needed to showcase high-value properties to international investors with a focus on reliability and prestige.",
//     solution: "Designed a high-end UI with a focus on visual hierarchy and clear navigation, allowing property visuals to lead the conversion journey.",
//     result: "Significantly increased direct inquiries through a streamlined mobile-first interface."
//   },
// {
//     slug: "finnishify",
//     title: "Finnishify",
//     tagline: "High-Performance Headless Commerce",
//     category: "E-commerce",
//     year: "2025",
//     client: "Finnishify Global",
//     mainImage: "/project/a.png",
//     gallery: ["/project/a.png", "/project/b.png"],
//     challenge: "A rapidly growing fashion brand struggling with legacy platform limitations. They required a scalable, lightning-fast infrastructure to handle global traffic and complex inventory management.",
//     solution: "Engineered a custom Headless Shopify architecture using Next.js. We focused on extreme performance optimization, custom API integrations, and a frictionless 2-step checkout experience.",
//     result: "Achieved a 100% increase in conversion rate (from 1.2% to 2.4%) and significantly reduced cart abandonment."
//   },
// ];

// export default function ProjectDetails() {
//   const params = useParams();
  
//   // Find the project matching the URL slug
//   const project = projectsData.find((p) => p.slug === params.slug);

//   // Error State: Agar project na mile
//   if (!project) {
//     return (
//       <div className="h-screen flex items-center justify-center bg-white text-slate-900">
//         <div className="text-center">
//             <h1 className={`${instrumentSerif.className} text-4xl mb-4`}>Project Not Found</h1>
//             <Link href="/portfolio" className="text-amber-600 underline">Back to Portfolio</Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <main className="bg-white min-h-screen">
      
//       {/* --- HERO SECTION (Dark) --- */}
//       <section className="bg-slate-950 text-white pt-32 pb-20 md:pt-40 md:pb-32 px-4 rounded-b-[2.5rem] relative overflow-hidden">
//          {/* Back Button */}
//          <div className="container mx-auto max-w-5xl mb-12">
//             <Link href="/portfolio" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">
//                 <ArrowLeft className="w-4 h-4" /> Back to Works
//             </Link>
//          </div>

//          <div className="container mx-auto max-w-5xl relative z-10">
//             <motion.div 
//                initial={{ opacity: 0, y: 30 }}
//                animate={{ opacity: 1, y: 0 }}
//                transition={{ duration: 0.6 }}
//             >
//                 <span className="text-amber-500 font-bold tracking-widest uppercase text-xs mb-4 block">
//                     {project.category} — {project.year}
//                 </span>
//                 <h1 className={`${instrumentSerif.className} text-5xl md:text-7xl mb-6 leading-tight`}>
//                     {project.title}
//                 </h1>
//                 <p className={`${dmSans.className} text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed`}>
//                     {project.tagline}
//                 </p>
//             </motion.div>
//          </div>
//       </section>

//       {/* --- MAIN CONTENT --- */}
//       <section className="py-20 px-4">
//         <div className="container mx-auto max-w-5xl">
            
//             {/* Main Hero Image */}
//             <motion.div 
//                initial={{ opacity: 0, scale: 0.95 }}
//                whileInView={{ opacity: 1, scale: 1 }}
//                viewport={{ once: true }}
//                transition={{ duration: 0.6 }}
//                className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl mb-20"
//             >
//                 <Image 
//                    src={project.mainImage} 
//                    alt={project.title} 
//                    fill 
//                    className="object-cover object-top"
//                 />
//             </motion.div>

//             {/* Project Details Grid */}
//             <div className="grid md:grid-cols-12 gap-12 mb-24">
                
//                 {/* Left: Stats */}
//                 <div className="md:col-span-4 space-y-8">
//                     <div className="border-t border-slate-200 pt-4">
//                         <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Client</p>
//                         <p className="text-slate-900 font-medium text-lg">{project.client}</p>
//                     </div>
//                     <div className="border-t border-slate-200 pt-4">
//                         <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Services</p>
//                         <p className="text-slate-900 font-medium text-lg">Web Design, Development</p>
//                     </div>
//                     <div className="border-t border-slate-200 pt-4">
//                         <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Result</p>
//                         <p className="text-green-600 font-bold text-lg">{project.result}</p>
//                     </div>
//                 </div>

//                 {/* Right: Story */}
//                 <div className="md:col-span-8">
//                     <div className="mb-12">
//                         <h3 className={`${instrumentSerif.className} text-3xl mb-4`}>The Challenge</h3>
//                         <p className="text-slate-600 leading-relaxed text-lg">
//                             {project.challenge}
//                         </p>
//                     </div>
//                     <div>
//                         <h3 className={`${instrumentSerif.className} text-3xl mb-4`}>The Solution</h3>
//                         <p className="text-slate-600 leading-relaxed text-lg">
//                             {project.solution}
//                         </p>
//                     </div>
//                 </div>

//             </div>

//             {/* Gallery Section */}
//             <div className="space-y-8 mb-24">
//                 {project.gallery.map((img, index) => (
//                     <motion.div 
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         key={index} 
//                         className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-100"
//                     >
//                         <Image src={img} alt="Project Gallery" fill className="object-cover" />
//                     </motion.div>
//                 ))}
//             </div>

//         </div>
//       </section>

//       {/* --- NEXT PROJECT CTA --- */}
//       <section className="bg-slate-50 py-24 text-center">
//          <div className="container mx-auto px-4">
//             <h2 className={`${instrumentSerif.className} text-4xl mb-6 text-slate-900`}>
//                 Love what you see?
//             </h2>
//             <div className="flex justify-center gap-4">
//                 <Link href="/contact" className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-amber-600 transition-colors">
//                     Start Your Project
//                 </Link>
//                 <Link href="/portfolio" className="inline-flex items-center gap-2 border border-slate-300 text-slate-900 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white hover:border-slate-400 transition-colors">
//                     View More Work
//                 </Link>
//             </div>
//          </div>
//       </section>

//     </main>
//   );
// }