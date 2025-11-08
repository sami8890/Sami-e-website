"use client";

import Image from "next/image";

const projects = [
 
  {
    title: "Supreme ",
    desc: "An interface built with clarity and speed — designed for teams who move fast.",
    img1: "/work/supreme.png",
    img2: "/work/supreme2.png",
    link: "https://suprema.framer.website/",
  },
  {
    title: "Chief Bot ",
    desc: "An AI-powered restaurant website that analyzes food photos to estimate calories personalized dish recommendations with prmopt",
    img1: "/thelast.png",
    img2: "/work/chef2.png",
    link: "https://chief-bot.sami-e.com/",
  },
  {
    title: "One Edu",
    desc: "Raising the Next Generation of Thinkers — Guided by AI, Driven by Purpose.",
    img1: "/work/guided2.png",
    img2: "/work/guided2.png",
    link: "https://oneedu.ai/",
  },
  

  {
    title: "Khazanay",
    desc: "Khazanay.pk — where quality meets convenience..",
    img1: "/work/abc'.png",
    img2: "/work/second.png",
    link: "https://www.khazanay.pk",
  },
  {
    title: "Arise",
    desc: "Onboard, verify, and manage users effortlessly with our no-code digital verification platform — built to simplify compliance and risk decisions for modern businesses",
    img1: "/work/arise.png",
    img2: "/work/arise2.png",
    link: "https://arise.framer.wiki/",
  },
  {
    title: "Donate Life ",
    desc: "A full-stack blood donation platform that connects donors and patients in need. Currently in beta, with our team actively refining it for full production release",
    img1: "/donate.png",
    img2: "/donate2.png",
    link: "https://donate-life--donation-454a6.asia-southeast1.hosted.app/",
  },
];

export default function PortfolioShowcaseSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-20 px-6 bg-white">
      {/* Heading */}
      <div className="px-2 sm:px-4 md:px-0 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold tracking-tight leading-tight text-slate-900 mt-6 md:mt-10">
            Built With{" "}
            <span
              className="text-blue-600 italic"
              style={{ fontFamily: "Instrument Serif, serif" }}
            >
              Thought
            </span>
            , Not Templates
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Each interface is carefully crafted — not copied. Designed for
            impact, simplicity, and depth.
          </p>
        </div>
      </div>

      {/* Portfolio Cards */}
      <div className="mt-16 flex flex-col gap-12 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 bg-[#FAFAFA] rounded-2xl shadow-sm p-6 md:p-8 lg:p-10"
          >
            {/* Left Column - Images */}
            <div className="flex-1 flex items-center justify-center gap-2 sm:gap-4 md:gap-5">
              {[project.img1, project.img2].map((img, i) => (
                <div
                  key={i}
                  className={`relative w-[140px] min-[400px]:w-[160px] sm:w-[200px] md:w-[240px] lg:w-[260px] h-[360px] min-[400px]:h-[300px] md:h-[340px] lg:h-[380px] rounded-xl overflow-hidden shadow-md border border-gray-100  ${
                    i === 0 ? "animate-float-up" : "animate-float-down"
                  }`}
                >
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`${project.title} mockup ${i + 1}`}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>

            {/* Right Column - Text */}
            <div className="flex-1 flex flex-col items-start justify-center text-left max-w-md">
              <h2 className="font-serif text-3xl md:text-[32px] font-semibold text-[#111]">
                {project.title}
              </h2>
              <p className="text-[#555] text-base md:text-[16px] leading-relaxed mt-3">
                {project.desc}
              </p>
              <button
                onClick={() => {
                  if (project.link && project.link !== "#") {
                    window.open(project.link, "_blank", "noopener,noreferrer");
                  } else {
                    alert("This project link is not available yet!");
                  }
                }}
                className="mt-6 border border-gray-200 hover:bg-gray-50 transition-all duration-200 px-5 py-2.5 rounded-xl text-[15px] font-medium text-[#111] flex items-center gap-2 group"
                aria-label={`Open ${project.link} website`}
              >
                Open Website
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// --------____________________________________
// // ?????????????????  SECOND Version

// "use client"

// import Image from "next/image"

// const projects = [
//   {
//     title: "Timeglass",
//     desc: "Growing companies often neglect their finances because they focus too much.",
//     img1: "/droni.png",
//     img2: "/droni2.png",
//     link: "#",
//   },
//   {
//     title: "Nova UI",
//     desc: "An interface built with clarity and speed — designed for teams who move fast.",
//     img1: "/new-final1.png",
//     img2: "/new-final2.png",
//     link: "#",
//   },
//   {
//     title: "Haven Studio",
//     desc: "A minimal digital agency portfolio built to convert clients at first glance.",
//     img1: "/donate.png",
//     img2: "/donate2.png",
//     link: "#",
//   },
//   {
//     title: "FlowCraft",
//     desc: "An adaptive SaaS platform website focused on motion, clarity, and conversion.",
//     img1: "/restaurant3.png",
//     img2: "/restaurant2.png",
//     link: "#",
//   },
// ]

// export default function PortfolioShowcaseSection() {
//   return (
//     <section className="w-full flex flex-col items-center justify-center py-20 px-6 bg-gradient-to-b from-white via-slate-50 to-white">
//       {/* Heading */}
//       <div className="px-2 sm:px-4 md:px-0 text-center">
//         <div className="max-w-3xl mx-auto">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold tracking-tight leading-tight text-slate-950 mt-6 md:mt-10">
//             Built With{" "}
//             <span className="text-blue-600 italic" style={{ fontFamily: "Instrument Serif, serif" }}>
//               Thought
//             </span>
//             , Not Templates
//           </h1>
//           <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
//             Each interface is carefully crafted — not copied. Designed for impact, simplicity, and depth.
//           </p>
//         </div>
//       </div>

//       {/* Portfolio Cards */}
//       <div className="mt-16 flex flex-col gap-12 w-full max-w-6xl">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl shadow-sm p-6 md:p-8 lg:p-10 border border-slate-200 hover:shadow-md transition-shadow duration-300"
//           >
//             {/* Left Column - Images */}
//             <div className="flex-1 flex items-center justify-center gap-4 md:gap-5">
//               {[project.img1, project.img2].map((img, i) => (
//                 <div
//                   key={i}
//                   className={`relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[260px] h-[300px] md:h-[340px] lg:h-[380px] rounded-xl overflow-hidden shadow-md border border-slate-300  ${
//                     i === 0 ? "animate-float-up" : "animate-float-down"
//                   }`}
//                 >
//                   <Image
//                     src={img || "/placeholder.svg"}
//                     alt={`${project.title} mockup ${i + 1}`}
//                     fill
//                     className="object-contain p-2"
//                     sizes="(max-width: 768px) 50vw, 33vw"
//                   />
//                 </div>
//               ))}
//             </div>

//             {/* Right Column - Text */}
//             <div className="flex-1 flex flex-col items-start justify-center text-left max-w-md">
//               <h2 className="font-serif text-3xl md:text-[32px] font-semibold text-slate-950">{project.title}</h2>
//               <p className="text-slate-700 text-base md:text-[16px] leading-relaxed mt-3">{project.desc}</p>
//               <button
//                 className=" border border-slate-300 hover:bg-cyan-50 hover:border-cyan-300 transition-all duration-200 px-5 py-2.5 rounded-xl text-[15px] font-medium text-slate-950 flex items-center gap-2 group mt-7"
//                 aria-label={`Open ${project.title} website`}
//               >
//                 Open Website
//                 <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }
