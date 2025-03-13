// "use client"

// import { ArrowRight } from "lucide-react"
// import Image from "next/image"
// import InfiniteMarquee  from "../ui/infinite-marquee"

// const items = [
//     {
//         text: "Blog",
//         href: "/blog",
//         icon: null,
//     },
//     {
//         text: "Company",
//         href: "/company",
//         icon: null,
//     },
//     {
//         text: "Company Logo",
//         href: "#",
//         icon: (
//             <Image src="/api/placeholder/32/32" alt="Logo" width={32} height={32} className="h-8 w-8 object-contain mr-2" />
//         ),
//     },
//     {
//         text: "News",
//         href: "/news",
//         icon: <ArrowRight className="ml-2 w-4 h-4" />,
//     },
//     {
//         text: "Features",
//         href: "/features",
//         icon: null,
//     },
//     {
//         text: "Documentation",
//         href: "/docs",
//         icon: null,
//     },
// ]

// export default function MainMarquee() {
//     return (
//         <div className="w-full">
//             <InfiniteMarquee
//                 items={items}
//                 speed={60}
//                 direction="normal"
//                 fontSize="xl"
//                 spacing="xl"
//                 theme={{
//                     text: "text-gray-300",
//                     hover: "hover:text-white",
//                 }}
//             />
//         </div>
//     )
// }

"use client"
import { motion } from "framer-motion"

export default function MainMarquee() {
    const logos = ["Brand 1", "Brand 2", "Brand 3", "Brand 4", "Brand 5", "Brand 6", "Brand 7", "Brand 8"]

    return (
        <div className="w-full overflow-hidden bg-black/20 backdrop-blur-sm py-6 rounded-xl">
            <motion.div
                className="flex gap-12 items-center"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Number.POSITIVE_INFINITY,
                }}
            >
                {logos.concat(logos).map((logo, index) => (
                    <div key={index} className="flex-shrink-0 text-gray-400 font-medium px-4 py-2 bg-white/5 rounded-lg">
                        {logo}
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

// 