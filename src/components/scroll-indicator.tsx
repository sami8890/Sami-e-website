// 'use client'

// import { useEffect, useState } from 'react'
// import { ChevronDown } from 'lucide-react'

// export function ScrollIndicator() {
//     const [isVisible, setIsVisible] = useState(true)

//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 100) {
//                 setIsVisible(false)
//             } else {
//                 setIsVisible(true)
//             }
//         }

//         window.addEventListener('scroll', handleScroll)
//         return () => window.removeEventListener('scroll', handleScroll)
//     }, [])

//     if (!isVisible) return null

//     return (
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
//             <ChevronDown className="size-8 text-emerald-500" />
//         </div>
//     )
// }

