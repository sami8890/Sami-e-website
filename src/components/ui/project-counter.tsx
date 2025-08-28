// "use client"

// import { Code } from "lucide-react"
// import { useEffect, useState } from "react"

// export default function ProjectCounter() {
//     const [count, setCount] = useState(0)

//     useEffect(() => {
//         const interval = setInterval(() => {
//             if (count < 150) {
//                 setCount((prev) => Math.min(prev + Math.floor(Math.random() * 5) + 1, 150))
//             } else {
//                 clearInterval(interval)
//             }
//         }, 50)

//         return () => clearInterval(interval)
//     }, [count])

//     return (
//         <div className="absolute bottom-20 left-1/2 -translate-x-1/2 hidden rotate-1 rounded-lg border border-zinc-800 bg-zinc-900/80 p-4 backdrop-blur md:block">
//             <div className="flex items-center gap-2">
//                 <Code className="h-5 w-5 text-green-400" />
//                 <p className="text-sm font-medium">{count}+ Projects Completed</p>
//             </div>
//         </div>
//     )
// }

