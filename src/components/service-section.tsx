// "use client";

// import { motion } from "framer-motion";
// import { useRef } from "react";
// import { useInView } from "framer-motion";
// import { Code, Smartphone, ShoppingCart, Cloud } from "lucide-react";

// const services = [
//   {
//     icon: Code,
//     title: "Web Development",
//     description:
//       "Custom web applications built with React and Next.js, focusing on performance and scalability.",
//   },
//   {
//     icon: Smartphone,
//     title: "Mobile App Development",
//     description:
//       "Cross-platform mobile apps using React Native, delivering native experiences on iOS and Android.",
//   },
//   {
//     icon: ShoppingCart,
//     title: "E-commerce Solutions",
//     description:
//       "Robust and secure e-commerce platforms, integrating payment gateways and inventory management systems.",
//   },
//   {
//     icon: Cloud,
//     title: "Cloud Integration",
//     description:
//       "Seamless integration with cloud services, ensuring high availability and efficient data management.",
//   },
// ];

// export function ServicesSection() {
//   const containerRef = useRef(null);
//   const isInView = useInView(containerRef, { once: true });

//   return (
//     <section
//       ref={containerRef}
//       className="py-24 bg-gradient-to-b from-background to-emerald-950"
//       id="services"
//     >
//       <div className="container px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.5 }}
//           className="max-w-4xl mx-auto text-center space-y-4 mb-16"
//         >
//           <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
//             Our <span className="text-emerald-500">Services</span>
//           </h2>
//           <p className="text-lg text-muted-foreground">
//             Comprehensive solutions to bring your digital ideas to life
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//           {services.map((service, index) => (
//             <motion.div
//               key={service.title}
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{ scale: 1.05 }}
//               className="bg-card rounded-lg p-6 shadow-lg hover:shadow-emerald-500/10 transition-all"
//             >
//               <motion.div
//                 initial={{ scale: 0 }}
//                 animate={isInView ? { scale: 1 } : {}}
//                 transition={{
//                   type: "spring",
//                   stiffness: 260,
//                   damping: 20,
//                   delay: index * 0.2,
//                 }}
//               >
//                 <service.icon className="h-12 w-12 text-emerald-500 mb-4" />
//               </motion.div>
//               <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//               <p className="text-muted-foreground">{service.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
