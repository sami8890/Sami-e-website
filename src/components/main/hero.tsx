// // "use client";

// // import { Instrument_Serif } from "next/font/google"; // Luxury Font
// // import { Button } from "@/components/ui/button";
// // import { ArrowRight } from "lucide-react";
// // import { motion } from "framer-motion";
// // import Image from "next/image";
// // import Ticker from "./marque"; // Ensure this path is correct

// // // Font setup
// // const instrumentSerif = Instrument_Serif({
// //   weight: "400",
// //   subsets: ["latin"],
// // });

// // export default function HeroSection() {
// //   return (
// //     <section
// //       id="hero"
// //       // Change 1: Background slightly warm (Slate-50) for premium feel
// //       className="relative min-h-screen flex flex-col items-center justify-center bg-slate-50 overflow-hidden pt-16 sm:pt-28 md:pt-24 lg:pt-28 pb-16 sm:pb-20 md:pb-16"
// //     >
// //       {/* Animation Styles */}
// //       <style jsx>{`
// //         @keyframes bounce-subtle {
// //           0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
// //           40% { transform: translateY(-4px); }
// //           60% { transform: translateY(-2px); }
// //         }
// //         .animate-bounce-subtle {
// //           animation: bounce-subtle 2s ease-in-out 0.8s;
// //         }
// //       `}</style>

// //       {/* --- BACKGROUND ELEMENTS --- */}
      
// //       {/* 1. Optional Luxury Image Background (Low Opacity) */}
// //       <div className="absolute inset-0 z-0">
// //         {/* Note: Public folder mein 'luxury-bg.jpg' naam ki image daal dena (e.g., marble texture or dubai skyline) */}
// //         {/* Agar image nahi mili to ye error nahi dega, bas transparent rahega */}
// //         <Image
// //           src="/project/1.png" 
// //           alt="Luxury Background"
// //           fill
// //           className="object-cover opacity-[0.03] grayscale" // Very subtle texture
// //           priority
// //         />
// //       </div>

// //       {/* 2. Gradient Overlay to keep text readable */}
// //       <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-slate-50/50 to-amber-50/10 z-0" />

// //       {/* --- MAIN CONTENT --- */}
// //       <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 flex flex-col items-center">
// //         <div className="max-w-5xl mx-auto py-8 md:py-6 lg:py-8">
// //           <div className="text-center space-y-6 sm:space-y-7 md:space-y-8">
            
// //             {/* HEADLINE */}
// //             <h1
// //               className={`${instrumentSerif.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.2] sm:leading-[1.15] md:leading-[1.1] text-slate-900`}
// //             >
// //               {/* Desktop Layout */}
// //               <span className="hidden md:block">
// //                 Sell Luxury Properties Faster <br/>
// //                 with a <span className="text-amber-700 italic">Premium Website</span>
// //                 {/* Change 2: Used Amber-700 (Bronze) instead of Blue-600 */}
// //               </span>

// //               {/* Mobile Layout */}
// //               <span className="block md:hidden">
// //                 Sell More
// //                 <br />
// //                 <span className="text-amber-700 text-4xl italic">Luxury Properties</span>
// //                 <br />
// //                 in Dubai & KSA
// //               </span>
// //             </h1>

          
// //             {/* SUBHEADING (Updated: Shorter & Cleaner) */}
// //             <motion.div
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8, delay: 0.4 }}
// //               className="px-4 sm:px-6 md:px-0 pt-2 sm:pt-4"
// //             >
// //               {/* Change: Removed 'text-2xl', made max-width smaller, shortened text */}
// //               <p className="text-base sm:text-lg md:text-lg lg:text-xl text-slate-600 max-w-lg mx-auto leading-relaxed font-light">
// //                 Investor-ready websites for Real Estate Developers in Dubai & KSA. 
// //                 Convert visitors into buyers with a premium digital experience.
// //               </p>
// //             </motion.div>
            
// //           {/* CTA Section (Updated: Sleek & Sharp) */}
// //             <motion.div
// //               initial={{ opacity: 0, y: 30 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8, delay: 0.6 }}
// //               className="pt-6 sm:pt-8"
// //             >
// //               <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                
// //                 {/* Button 1: Dark & Sharp */}
// //                 <Button
// //                   size="lg"
// //                   className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white h-12 px-8 text-base font-medium rounded-sm transition-all shadow-md hover:shadow-lg min-w-[160px]"
// //                   onClick={() => {
// //                     document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
// //                   }}
// //                 >
// //                   <span className="flex items-center gap-2">
// //                     View Work
// //                     <ArrowRight className="h-4 w-4" />
// //                   </span>
// //                 </Button>
                
// //                 {/* Button 2: Clean Outline */}
// //                 <Button
// //                   variant="outline"
// //                   size="lg"
// //                   className="w-full sm:w-auto border-slate-300 text-slate-800 hover:bg-slate-50 h-12 px-6 text-base font-medium rounded-sm flex items-center gap-3 min-w-[160px]"
// //                   onClick={() => {
// //                     window.open(
// //                       "https://wa.me/923701247494?text=Hi%2C%20I%20am%20interested%20in%20a%20luxury%20website",
// //                       "_blank",
// //                       "noopener,noreferrer"
// //                     );
// //                   }}
// //                 >
// //                   {/* Choti Image (Avatar) */}
// //                   <div className="w-5 h-5 rounded-full overflow-hidden border border-slate-200 relative">
// //                     <Image
// //                       src="/main.png"
// //                       alt="Sami"
// //                       fill
// //                       className="object-cover"
// //                     />
// //                   </div>
// //                   Book Call
// //                 </Button>
// //               </div>
// //             </motion.div>
// //           </div>
// //         </div>
       
// //         {/* Ticker Component (Logos) */}
// //         <div className="mt-8 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
// //              <Ticker />
// //         </div>
       
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import { Instrument_Serif } from "next/font/google";
// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Ticker from "./marque";

// const instrumentSerif = Instrument_Serif({
//   weight: "400",
//   subsets: ["latin"],
// });

// export default function HeroSection() {
//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex flex-col items-center justify-between bg-slate-50 overflow-hidden"
//     >
//       {/* Animation Styles */}
//       <style jsx>{`
//         @keyframes bounce-subtle {
//           0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
//           40% { transform: translateY(-4px); }
//           60% { transform: translateY(-2px); }
//         }
//         .animate-bounce-subtle {
//           animation: bounce-subtle 2s ease-in-out 0.8s;
//         }
//       `}</style>

//       {/* --- BACKGROUND --- */}
      
//       <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-slate-50/50 to-amber-50/10 z-0" />

//       {/* --- MAIN CENTER CONTENT --- */}
//       <div className="w-full flex-1 flex flex-col items-center justify-center relative z-10 px-4 sm:px-6 md:px-8">
//         <div className="w-full max-w-6xl mx-auto">
//           <div className="text-center space-y-6 md:space-y-8 lg:space-y-10">
            
//             {/* HEADLINE */}
//             <motion.h1
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.1 }}
//               className={`${instrumentSerif.className} text-4xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1] text-slate-900 mt-32`}
//             >
//               <span className="hidden md:block">
//                 Sell Luxury Properties Faster <br/>
//                 with a <span className="text-amber-700 italic">Premium Website</span>
//               </span>

//               <span className="block md:hidden">
//                 Sell More
//                 <br />
//                 <span className="text-amber-700 text-5xl italic">Luxury Properties</span>
//                 <br />
//                 in Dubai & KSA
//               </span>
//             </motion.h1>

//             {/* SUBHEADING */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//               className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light"
//             >
//               Investor-ready websites for Real Estate Developers. <br className="hidden md:block" />
//               Convert visitors into buyers with a digital experience that matches your prestige.
//             </motion.p>
            
//             {/* BUTTON CTA */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.5 }}
//               className="pt-4 md:pt-6"
//             >
//               <Button
//                 size="lg"
//                 className="bg-slate-900 hover:bg-slate-800 text-white h-12 sm:h-14 px-8 sm:px-10 text-base sm:text-lg font-medium rounded-sm transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95"
//                 onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
//               >
//                 <span className="flex items-center gap-3">
//                   View Selected Works
//                   <ArrowRight className="h-5 w-5" />
//                 </span>
//               </Button>
//             </motion.div>

//           </div>
//         </div>
//       </div>
       
//       {/* --- FOOTER OF HERO (Ticker) --- */}
//       <div className="w-full relative z-10 py-6 md:py-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
//         <Ticker />
//       </div>
       
//     </section>
//   );
// }



// The Latest One 
"use client";

import { Instrument_Serif } from "next/font/google";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Ticker from "./marque";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
});

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-between bg-slate-50 overflow-hidden"
    >
      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 z-0 opacity-[0.3] hidden md:block" 
           style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-slate-50/50 to-amber-50/10 z-0" />

      {/* --- MAIN CENTER CONTENT --- */}
      {/* FIX: Added 'pt-32' (Padding Top) globally. Removed justify-start. */}
      {/* Ab ye Mobile aur Desktop dono par content ko Opar se 128px neeche rakhega */}
      <div className="w-full flex-1 flex flex-col items-center justify-center relative z-10 px-4 sm:px-6 md:px-8 pt-32 pb-12">
        
        <div className="w-full max-w-6xl md:max-w-4xl mx-auto">
          <div className="text-center space-y-6 md:space-y-8">
            
            {/* HEADLINE */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              // Removed 'mt-32' because container padding handles it now
              className={`${instrumentSerif.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-slate-900`}
            >
              <span className="hidden md:block">
                Sell Luxury Properties Faster <br/>
                with a <span className="text-amber-700 italic">Premium Website</span>
              </span>

              {/* Mobile Text */}
             {/* Mobile Text */}
<span className="block md:hidden">
  Sell More
  <br />
  {/* Change: text-5xl -> text-4xl sm:text-5xl (Safety ke liye) */}
  <span className="text-amber-700 text-4xl sm:text-5xl italic">Luxury Properties</span>
  <br />
  in Dubai & KSA
</span>
            </motion.h1>

            {/* SUBHEADING */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl md:max-w-2xl mx-auto leading-relaxed font-light"
            >
              Investor-ready websites for Real Estate Developers. <br className="hidden md:block" />
              Convert visitors into buyers with a digital experience that matches your prestige.
            </motion.p>
            
            {/* BUTTON CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-4 md:pt-6"
            >
              <Button
                size="lg"
                className="bg-slate-900 hover:bg-slate-800 text-white h-12 sm:h-14 px-8 sm:px-10 text-base sm:text-lg font-medium rounded-sm transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span className="flex items-center gap-3">
                  View Selected Works
                  <ArrowRight className="h-5 w-5" />
                </span>
              </Button>
            </motion.div>

          </div>
        </div>
      </div>
       
      {/* --- FOOTER OF HERO (Ticker) --- */}
      <div className="w-full relative z-10 py-6 md:py-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500 bg-white/50 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none">
        <Ticker />
      </div>
       
    </section>
  );
}