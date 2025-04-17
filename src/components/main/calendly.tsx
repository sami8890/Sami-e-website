// "use client"
// // PremiumCalendlyBooking.jsx
// import { useState, useEffect, useRef } from "react";
// import {
//     Calendar, Clock, ChevronRight, Check, ArrowLeft, User,
//     Mail, MessageSquare, Smartphone, Globe, Sparkles, Shield,
//     Zap, ThumbsUp, Laptop
// } from "lucide-react";

// export default function PremiumCalendlyBooking() {
//     const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);
//     const [showCalendly, setShowCalendly] = useState(false);
//     const [userName, setUserName] = useState("");
//     const [userEmail, setUserEmail] = useState("");
//     const [userPhone, setUserPhone] = useState("");
//     const [userWebsite, setUserWebsite] = useState("");
//     const [businessType, setBusinessType] = useState("");
//     const [message, setMessage] = useState("");
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [formStep, setFormStep] = useState(1);
//     const [activeTab, setActiveTab] = useState(0);
//     const [showSuccessModal, setShowSuccessModal] = useState(false);
//     const modalRef = useRef(null);

//     const serviceTypes = [
//         { name: "New Website", icon: Globe },
//         { name: "Redesign", icon: Sparkles },
//         { name: "E-commerce", icon: Laptop }
//     ];

//     const benefits = [
//         {
//             icon: <Zap className="w-6 h-6 text-yellow-500" />,
//             title: "Fast Turnaround",
//             description: "Get your professional website up and running quickly"
//         },
//         {
//             icon: <Shield className="w-6 h-6 text-blue-500" />,
//             title: "Quality Guaranteed",
//             description: "Beautiful, responsive websites that convert visitors"
//         },
//         {
//             icon: <ThumbsUp className="w-6 h-6 text-green-500" />,
//             title: "Ongoing Support",
//             description: "I'm here to help even after your website launches"
//         }
//     ];

//     // Load Calendly script
//     useEffect(() => {
//         const head = document.querySelector('head');
//         const script = document.createElement('script');
//         script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
//         script.async = true;
//         script.onload = () => setIsCalendlyLoaded(true);

//         head.appendChild(script);

//         // Add required Calendly styling
//         const style = document.createElement('link');
//         style.rel = 'stylesheet';
//         style.href = 'https://assets.calendly.com/assets/external/widget.css';
//         head.appendChild(style);

//         return () => {
//             if (head.contains(script)) head.removeChild(script);
//             if (head.contains(style)) head.removeChild(style);
//         };
//     }, []);

//     // Handle Calendly event callbacks
//     useEffect(() => {
//         const handleCalendlyEvent = (e) => {
//             if (e.data.event && e.data.event.indexOf('calendly') === 0) {
//                 if (e.data.event === 'calendly.event_scheduled') {
//                     // Show success modal when event scheduled
//                     setShowSuccessModal(true);
//                     setShowCalendly(false);
//                 }
//             }
//         };

//         window.addEventListener('message', handleCalendlyEvent);
//         return () => window.removeEventListener('message', handleCalendlyEvent);
//     }, []);

//     // Handle click outside of modal
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (modalRef.current && !modalRef.current.contains(event.target)) {
//                 setShowSuccessModal(false);
//             }
//         };

//         if (showSuccessModal) {
//             document.addEventListener('mousedown', handleClickOutside);
//         }
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, [showSuccessModal]);

//     // Auto-rotate tabs
//     useEffect(() => {
//         const tabInterval = setInterval(() => {
//             setActiveTab((prev) => (prev + 1) % serviceTypes.length);
//         }, 3000);

//         return () => clearInterval(tabInterval);
//     }, [serviceTypes.length]);

//     // Function to open Calendly with prefilled information
//     const openCalendly = (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);

//         setTimeout(() => {
//             setIsSubmitting(false);
//             setShowCalendly(true);

//             if (isCalendlyLoaded && window.Calendly) {
//                 window.Calendly.initInlineWidget({
//                     url: 'https://calendly.com/sami-gabol13/45min',
//                     parentElement: document.getElementById('calendlyContainer'),
//                     prefill: {
//                         name: userName,
//                         email: userEmail,
//                         customAnswers: {
//                             a1: `Phone: ${userPhone}
// Website: ${userWebsite}
// Business Type: ${businessType} 
// Message: ${message}`
//                         }
//                     },
//                     utm: {}
//                 });
//             }
//         }, 500);
//     };

//     // Function to handle form progress
//     const advanceForm = (e) => {
//         e.preventDefault();
//         setFormStep(2);
//         window.scrollTo(0, 0);
//     };

//     return (
//         <div className="w-full max-w-4xl mx-auto relative">
//             {/* Success Modal */}
//             {showSuccessModal && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
//                     <div
//                         ref={modalRef}
//                         className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full animate-fadeIn"
//                     >
//                         <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                             <Check className="w-8 h-8 text-green-500" />
//                         </div>
//                         <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Booking Confirmed!</h2>
//                         <p className="text-center text-gray-600 mb-6">
//                             Your 45-minute call has been scheduled. Check your email for details and calendar invitation.
//                         </p>
//                         <p className="text-center text-gray-600 mb-6">
//                             I'm looking forward to discussing how we can create a website that drives results for your business.
//                         </p>
//                         <button
//                             onClick={() => setShowSuccessModal(false)}
//                             className="w-full py-3 px-4 bg-green-500 rounded-lg font-medium text-white hover:bg-green-600 transition-all duration-300"
//                         >
//                             Close
//                         </button>
//                     </div>
//                 </div>
//             )}

//             {/* Main Booking Component */}
//             <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
//                 {showCalendly ? (
//                     <div className="w-full">
//                         <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 flex items-center">
//                             <button
//                                 onClick={() => setShowCalendly(false)}
//                                 className="flex items-center text-white hover:text-green-100 transition-colors"
//                             >
//                                 <ArrowLeft className="w-4 h-4 mr-1" />
//                                 Back
//                             </button>
//                             <h2 className="text-lg font-medium text-white mx-auto">Select Your Preferred Date & Time</h2>
//                         </div>

//                         <div id="calendlyContainer" style={{ height: "650px", width: "100%" }}></div>
//                     </div>
//                 ) : (
//                     <div>
//                         {/* Header Section */}
//                         <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 md:p-8">
//                             <div className="flex justify-between items-start">
//                                 <div className="max-w-lg">
//                                     <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
//                                         Book Your Free 45-Minute Strategy Call
//                                     </h2>
//                                     <p className="text-green-50">
//                                         Let's discuss how I can build a website that attracts customers and grows your business!
//                                     </p>
//                                 </div>
//                                 <div className="hidden md:block">
//                                     <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20">
//                                         <Calendar className="w-12 h-12 text-white" />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Progress Bar */}
//                         <div className="bg-gray-50 px-6 py-3 border-b">
//                             <div className="max-w-3xl mx-auto">
//                                 <div className="relative pt-1">
//                                     <div className="flex items-center justify-between mb-2">
//                                         <div className="text-xs font-medium text-green-600 mr-2">Step {formStep} of 2</div>
//                                         <div className="text-xs font-medium text-green-600">
//                                             {formStep === 1 ? "Your Information" : "Project Details"}
//                                         </div>
//                                     </div>
//                                     <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
//                                         <div
//                                             style={{ width: formStep === 1 ? "50%" : "100%" }}
//                                             className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 transition-all duration-500"
//                                         ></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Form Section */}
//                         <div className="p-6 md:p-8">
//                             <div className="max-w-3xl mx-auto">
//                                 {formStep === 1 ? (
//                                     <form onSubmit={advanceForm} className="space-y-5">
//                                         <div className="grid md:grid-cols-2 gap-4">
//                                             <div>
//                                                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                                                     Full Name*
//                                                 </label>
//                                                 <div className="relative">
//                                                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                                         <User className="h-5 w-5 text-gray-400" />
//                                                     </div>
//                                                     <input
//                                                         type="text"
//                                                         value={userName}
//                                                         onChange={(e) => setUserName(e.target.value)}
//                                                         required
//                                                         className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
//                                                         placeholder="John Doe"
//                                                     />
//                                                 </div>
//                                             </div>

//                                             <div>
//                                                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                                                     Email Address*
//                                                 </label>
//                                                 <div className="relative">
//                                                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                                         <Mail className="h-5 w-5 text-gray-400" />
//                                                     </div>
//                                                     <input
//                                                         type="email"
//                                                         value={userEmail}
//                                                         onChange={(e) => setUserEmail(e.target.value)}
//                                                         required
//                                                         className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
//                                                         placeholder="your@email.com"
//                                                     />
//                                                 </div>
//                                             </div>

//                                             <div>
//                                                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                                                     Phone Number
//                                                 </label>
//                                                 <div className="relative">
//                                                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                                         <Smartphone className="h-5 w-5 text-gray-400" />
//                                                     </div>
//                                                     <input
//                                                         type="tel"
//                                                         value={userPhone}
//                                                         onChange={(e) => setUserPhone(e.target.value)}
//                                                         className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
//                                                         placeholder="(123) 456-7890"
//                                                     />
//                                                 </div>
//                                             </div>

//                                             <div>
//                                                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                                                     Website (if you have one)
//                                                 </label>
//                                                 <div className="relative">
//                                                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                                         <Globe className="h-5 w-5 text-gray-400" />
//                                                     </div>
//                                                     <input
//                                                         type="url"
//                                                         value={userWebsite}
//                                                         onChange={(e) => setUserWebsite(e.target.value)}
//                                                         className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
//                                                         placeholder="https://yourwebsite.com"
//                                                     />
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         {/* Service Type Selection */}
//                                         <div className="mt-6">
//                                             <label className="block text-sm font-medium text-gray-700 mb-3">
//                                                 What service are you interested in?
//                                             </label>
//                                             <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
//                                                 {serviceTypes.map((service, index) => {
//                                                     const Icon = service.icon;
//                                                     return (
//                                                         <button
//                                                             key={index}
//                                                             type="button"
//                                                             onClick={() => setBusinessType(service.name)}
//                                                             className={`relative p-4 border rounded-lg flex flex-col items-center text-center transition-all ${businessType === service.name
//                                                                     ? 'border-green-500 bg-green-50'
//                                                                     : 'border-gray-200 hover:border-green-300 hover:bg-gray-50'
//                                                                 }`}
//                                                         >
//                                                             <Icon className={`w-8 h-8 mb-2 ${businessType === service.name ? 'text-green-500' : 'text-gray-400'
//                                                                 }`} />
//                                                             <span className={`font-medium ${businessType === service.name ? 'text-green-700' : 'text-gray-700'
//                                                                 }`}>
//                                                                 {service.name}
//                                                             </span>
//                                                             {businessType === service.name && (
//                                                                 <div className="absolute top-2 right-2">
//                                                                     <Check className="w-5 h-5 text-green-500" />
//                                                                 </div>
//                                                             )}
//                                                         </button>
//                                                     );
//                                                 })}
//                                             </div>
//                                         </div>

//                                         <div className="pt-4 flex justify-end">
//                                             <button
//                                                 type="submit"
//                                                 className="py-3 px-6 bg-green-500 rounded-lg font-medium text-white hover:bg-green-600 transition-all duration-300 flex items-center justify-center shadow-lg shadow-green-200"
//                                             >
//                                                 Continue
//                                                 <ChevronRight className="w-4 h-4 ml-1" />
//                                             </button>
//                                         </div>
//                                     </form>
//                                 ) : (
//                                     <form onSubmit={openCalendly} className="space-y-5">
//                                         <div>
//                                             <label className="block text-sm font-medium text-gray-700 mb-1">
//                                                 Tell me about your project
//                                             </label>
//                                             <textarea
//                                                 value={message}
//                                                 onChange={(e) => setMessage(e.target.value)}
//                                                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
//                                                 placeholder="What are your goals for this website? What features do you need? Any specific design preferences?"
//                                                 rows={5}
//                                             />
//                                         </div>

//                                         {/* What to Expect Section */}
//                                         <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 my-6">
//                                             <h3 className="font-medium text-gray-800 mb-4">What to Expect on Your Call</h3>

//                                             <div className="space-y-4">
//                                                 <div className="flex gap-3">
//                                                     <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
//                                                         <span className="text-green-600 font-medium">1</span>
//                                                     </div>
//                                                     <div>
//                                                         <h4 className="font-medium text-gray-800">Understanding Your Needs</h4>
//                                                         <p className="text-sm text-gray-600">We'll discuss your business goals and website requirements</p>
//                                                     </div>
//                                                 </div>

//                                                 <div className="flex gap-3">
//                                                     <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
//                                                         <span className="text-green-600 font-medium">2</span>
//                                                     </div>
//                                                     <div>
//                                                         <h4 className="font-medium text-gray-800">Solution Planning</h4>
//                                                         <p className="text-sm text-gray-600">I'll suggest tailored strategies to achieve your goals</p>
//                                                     </div>
//                                                 </div>

//                                                 <div className="flex gap-3">
//                                                     <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
//                                                         <span className="text-green-600 font-medium">3</span>
//                                                     </div>
//                                                     <div>
//                                                         <h4 className="font-medium text-gray-800">Roadmap & Pricing</h4>
//                                                         <p className="text-sm text-gray-600">We'll outline timeline, investment, and next steps</p>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         {/* Benefits Section */}
//                                         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
//                                             {benefits.map((benefit, index) => (
//                                                 <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-green-200 hover:bg-green-50/30 transition-all">
//                                                     <div className="mb-3">{benefit.icon}</div>
//                                                     <h4 className="font-medium text-gray-800 mb-1">{benefit.title}</h4>
//                                                     <p className="text-sm text-gray-600">{benefit.description}</p>
//                                                 </div>
//                                             ))}
//                                         </div>

//                                         <div className="pt-2 flex gap-3">
//                                             <button
//                                                 type="button"
//                                                 onClick={() => setFormStep(1)}
//                                                 className="py-3 px-4 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-all duration-300"
//                                             >
//                                                 <ArrowLeft className="w-4 h-4 inline mr-1" />
//                                                 Back
//                                             </button>

//                                             <button
//                                                 type="submit"
//                                                 disabled={isSubmitting}
//                                                 className="flex-1 py-3 px-6 bg-green-500 rounded-lg font-medium text-white hover:bg-green-600 transition-all duration-300 flex items-center justify-center shadow-lg shadow-green-200"
//                                             >
//                                                 {isSubmitting ? (
//                                                     <>
//                                                         <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                                                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                                                         </svg>
//                                                         Processing...
//                                                     </>
//                                                 ) : (
//                                                     <>
//                                                         Schedule Your Call Now
//                                                         <Calendar className="w-4 h-4 ml-2" />
//                                                     </>
//                                                 )}
//                                             </button>
//                                         </div>

//                                         {/* Trust Indicators */}
//                                         <div className="flex flex-wrap items-center justify-center gap-2 pt-6 border-t border-gray-100 text-sm text-gray-500">
//                                             <div className="flex items-center">
//                                                 <Shield className="w-4 h-4 mr-1 text-green-500" />
//                                                 <span>Secure Booking</span>
//                                             </div>
//                                             <span className="hidden sm:inline">•</span>
//                                             <div className="flex items-center">
//                                                 <Clock className="w-4 h-4 mr-1 text-green-500" />
//                                                 <span>45-Minute Consultation</span>
//                                             </div>
//                                             <span className="hidden sm:inline">•</span>
//                                             <div className="flex items-center">
//                                                 <Check className="w-4 h-4 mr-1 text-green-500" />
//                                                 <span>No Obligation</span>
//                                             </div>
//                                         </div>
//                                     </form>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }