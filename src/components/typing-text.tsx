// 'use client'

// import { useEffect, useState } from 'react'

// export function TypingText({ text }: { text: string }) {
//     const [displayText, setDisplayText] = useState('')

//     useEffect(() => {
//         let index = 0
//         const timer = setInterval(() => {
//             if (index < text.length) {
//                 setDisplayText((prev) => prev + text.charAt(index))
//                 index++
//             } else {
//                 clearInterval(timer)
//             }
//         }, 50)

//         return () => clearInterval(timer)
//     }, [text])

//     return <span>{displayText}</span>
// }

