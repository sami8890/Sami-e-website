// 'use client'

// import { useEffect, useRef } from 'react'

// export function ParticleBackground() {
//     const canvasRef = useRef<HTMLCanvasElement>(null)

//     useEffect(() => {
//         const canvas = canvasRef.current
//         if (!canvas) return

//         const ctx = canvas.getContext('2d')
//         if (!ctx) return

//         canvas.width = window.innerWidth
//         canvas.height = window.innerHeight

//         const particles: Array<{
//             x: number
//             y: number
//             radius: number
//             color: string
//             speedX: number
//             speedY: number
//         }> = []

//         const createParticle = () => ({
//             x: Math.random() * canvas.width,
//             y: Math.random() * canvas.height,
//             radius: Math.random() * 2 + 1,
//             color: `rgba(16, 185, 129, ${Math.random() * 0.5 + 0.5})`,
//             speedX: Math.random() * 2 - 1,
//             speedY: Math.random() * 2 - 1
//         })

//         for (let i = 0; i < 100; i++) {
//             particles.push(createParticle())
//         }

//         const animate = () => {
//             ctx.clearRect(0, 0, canvas.width, canvas.height)

//             particles.forEach((particle) => {
//                 particle.x += particle.speedX
//                 particle.y += particle.speedY

//                 if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
//                 if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

//                 ctx.beginPath()
//                 ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
//                 ctx.fillStyle = particle.color
//                 ctx.fill()
//             })

//             requestAnimationFrame(animate)
//         }

//         animate()

//         const handleResize = () => {
//             canvas.width = window.innerWidth
//             canvas.height = window.innerHeight
//         }

//         window.addEventListener('resize', handleResize)
//         return () => window.removeEventListener('resize', handleResize)
//     }, [])

//     return (
//         <canvas
//             ref={canvasRef}
//             className="fixed inset-0 pointer-events-none"
//             style={{ opacity: 0.3 }}
//         />
//     )
// }

