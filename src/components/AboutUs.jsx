// // // import React, { useRef, useState } from "react";
// // // import log1 from "../assets/about/log1.jpg";
// // // import log2 from "../assets/about/log2.jpg";
// // // import log3 from "../assets/about/log3.jpg";

// // // import { useNavigate } from "react-router-dom";
// // // import { motion as MOTION } from "framer-motion";

// // // const steps = [
// // //   {
// // //     title: "WHO WE ARE",
// // //     description:
// // //       "At SVM Timbers, we specialize in providing premium timber solutions that reflect the perfect blend of tradition, craftsmanship, and innovation.",
// // //     textColor: "text-[#FAF3E0]",
// // //     image: log1,
// // //   },
// // //   {
// // //     title: "OUR HISTORY",
// // //     description:
// // //       "Since our founding in 1982, our journey has been one of growth, learning, and commitment to excellence. We've grown from a modest depot to a trusted provider serving countless projects with integrity and passion.",
// // //     textColor: "text-[#FFD700]",
// // //     image: log2,
// // //   },
// // //   {
// // //     title: "OUR MISSION",
// // //     description:
// // //       "Our mission is to craft sustainable, beautiful, and functional timber products that enrich the spaces they occupy — while upholding values of responsibility, craftsmanship, and trust.",
// // //     textColor: "text-[#D6C49A]",
// // //     image: log3,
// // //   },
// // // ];

// // // export default function AboutUs() {
// // //   const navigate = useNavigate();
// // //   const containerRef = useRef(null);

// // //   // ONLY state controlling cards
// // //   const [current, setCurrent] = useState(0);

// // //   const handleLearnMore = () => {
// // //     navigate("/about-details#our-story");
// // //   };

// // //   return (
// // //     <section
// // //       ref={containerRef}
// // //       className="py-24 px-6 relative bg-[#F8F4EF]"
// // //      >
// // //       <div className="max-w-7xl mx-auto  pb-10">
// // //         {/* Title */}
// // //         <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-[#BFA77A] to-[#D8C69C] text-transparent bg-clip-text font-playfair">
// // //           About SVM Timbers
// // //         </h1>

// // //         <MOTION.p
// // //           initial={{ opacity: 0, y: 10 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.6 }}
// // //           className="text-center text-base md:text-lg text-[#7A684A] mb-10"
// // //         >
// // //           Building legacy with every timber we craft.
// // //         </MOTION.p>

// // //         {/* CLICKABLE TEXT TABS */}
// // //         <div className="flex justify-center mb-14 gap-10">
// // //           {steps.map((step, i) => (
// // //             <button
// // //               key={i}
// // //               onClick={() => setCurrent(i)}
// // //               className={`relative text-xs md:text-sm font-semibold uppercase tracking-[0.2em] font-playfair
// // //                           transition-all duration-300
// // //                           ${
// // //                             i === current
// // //                               ? "text-[#FFD700]"
// // //                               : "text-[#7A684A] hover:text-[#BFA77A]"
// // //                           }`}
// // //             >
// // //               {step.title}

// // //               {i === current && (
// // //                 <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#FFD700] rounded-full" />
// // //               )}
// // //             </button>
// // //           ))}
// // //         </div>

// // //         {/* CARDS (NO SCROLL DEPENDENCY) */}
// // //         <div className="relative h-[90vh] md:h-[70vh]">
// // //           {steps.map((step, i) => (
// // //             <MOTION.div
// // //               key={i}
// // //               initial={false}
// // //               animate={{
// // //                 opacity: current === i ? 1 : 0,
// // //                 scale: current === i ? 1 : 0.96,
// // //                 zIndex: current === i ? 10 : 1,
// // //               }}
// // //               transition={{ duration: 0.5, ease: "easeInOut" }}
// // //               className="absolute inset-0 rounded-3xl p-6 md:p-10 shadow-2xl bg-[#2A1E16]"
// // //             >
// // //               <div className="flex flex-col md:flex-row items-center gap-8 h-full">
// // //                 {/* Image */}
// // //                 <div className="md:w-1/2 w-full">
// // //                   <img
// // //                     src={step.image}
// // //                     alt={step.title}
// // //                     className="w-full h-64 md:h-full object-cover rounded-xl"
// // //                   />
// // //                 </div>

// // //                 {/* Text */}
// // //                 <div className="md:w-1/2 w-full space-y-6 text-center md:text-left">
// // //                   <h2 className="text-sm uppercase tracking-[0.15em] text-[#FFD700] font-semibold">
// // //                     {step.title}
// // //                   </h2>

// // //                   <p className={`text-lg md:text-xl font-playfair ${step.textColor}`}>
// // //                     {step.description}
// // //                   </p>

// // //                   {i === steps.length - 1 && (
// // //                     <MOTION.button
// // //                       whileHover={{ scale: 1.05 }}
// // //                       whileTap={{ scale: 0.95 }}
// // //                       onClick={handleLearnMore}
// // //                       className="mt-8 px-8 py-3 bg-linear-to-r from-[#A67C52] to-[#8B5E34] text-white font-semibold rounded-full"
// // //                     >
// // //                       Learn More
// // //                     </MOTION.button>
// // //                   )}
// // //                 </div>
// // //               </div>
// // //             </MOTION.div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }


// // import React, { useRef, useState } from "react";
// // import { motion as MOTION } from "framer-motion";

// // import log1 from "../assets/about/log1.jpg";
// // import log2 from "../assets/about/log2.jpg";
// // import log3 from "../assets/about/log3.jpg";

// // const steps = [
// //   {
// //     title: "WHO WE ARE",
// //     description:
// //       "At SVM Timbers, we specialize in providing premium timber solutions that reflect the perfect blend of tradition, craftsmanship, and innovation.",
// //     textColor: "text-[#FAF3E0]",
// //     image: log1,
// //   },
// //   {
// //     title: "OUR HISTORY",
// //     description:
// //       "Since our founding in 1982, our journey has been one of growth, learning, and commitment to excellence. We've grown from a modest depot to a trusted provider serving countless projects with integrity and passion.",
// //     textColor: "text-[#FFD700]",
// //     image: log2,
// //   },
// //   {
// //     title: "OUR MISSION",
// //     description:
// //       "Our mission is to craft sustainable, beautiful, and functional timber products that enrich the spaces they occupy — while upholding values of responsibility, craftsmanship, and trust.",
// //     textColor: "text-[#D6C49A]",
// //     image: log3,
// //   },
// // ];

// // export default function AboutUs() {
// //   const containerRef = useRef(null);
// //   const [current, setCurrent] = useState(0);

// //   const handleLearnMore = () => {
// //     console.log("Navigate to about details");
// //   };

// //   return (
// //     <section
// //       ref={containerRef}
// //       className="py-16 md:py-24 px-4 md:px-6 relative bg-gradient-to-b from-[#F8F4EF] via-[#FBF8F3] to-[#F5F0E8] overflow-hidden"
// //     >
// //       {/* Decorative background elements */}
// //       <div className="absolute top-0 left-0 w-72 h-72 bg-[#BFA77A] opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
// //       <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D8C69C] opacity-5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

// //       <div className="max-w-7xl mx-auto relative z-10">
// //         {/* Header Section */}
// //         <div className="text-center mb-12 md:mb-16">
// //           <MOTION.div
// //             initial={{ opacity: 0, y: -20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6 }}
// //           >
// //             <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#A67C52] via-[#BFA77A] to-[#8B5E34] text-transparent bg-clip-text mb-4 font-serif">
// //               About SVM Timbers
// //             </h1>
// //             <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#BFA77A] to-transparent mx-auto mb-6" />
// //           </MOTION.div>

// //           <MOTION.p
// //             initial={{ opacity: 0, y: 10 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.2 }}
// //             className="text-base md:text-lg text-[#7A684A] max-w-2xl mx-auto font-light"
// //           >
// //             Building legacy with every timber we craft.
// //           </MOTION.p>
// //         </div>

// //         {/* Navigation Tabs */}
// //         <div className="flex flex-wrap justify-center mb-10 md:mb-14 gap-4 md:gap-8">
// //           {steps.map((step, i) => (
// //             <MOTION.button
// //               key={i}
// //               onClick={() => setCurrent(i)}
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //               className={`relative px-6 py-3 text-xs md:text-sm font-semibold uppercase tracking-widest
// //                           transition-all duration-300 rounded-lg
// //                           ${
// //                             i === current
// //                               ? "text-white bg-gradient-to-r from-[#A67C52] to-[#8B5E34] shadow-lg"
// //                               : "text-[#7A684A] bg-white/50 hover:bg-white hover:shadow-md"
// //                           }`}
// //             >
// //               <span className="relative z-10">{step.title}</span>
// //               {i === current && (
// //                 <MOTION.div
// //                   layoutId="activeTab"
// //                   className="absolute inset-0 bg-gradient-to-r from-[#A67C52] to-[#8B5E34] rounded-lg"
// //                   style={{ zIndex: -1 }}
// //                 />
// //               )}
// //             </MOTION.button>
// //           ))}
// //         </div>

// //         {/* Progress Indicator */}
// //         <div className="flex justify-center gap-2 mb-8">
// //           {steps.map((_, i) => (
// //             <button
// //               key={i}
// //               onClick={() => setCurrent(i)}
// //               className="group"
// //               aria-label={`Go to step ${i + 1}`}
// //             >
// //               <div
// //                 className={`h-1 rounded-full transition-all duration-300 ${
// //                   i === current
// //                     ? "w-12 bg-gradient-to-r from-[#A67C52] to-[#8B5E34]"
// //                     : "w-8 bg-[#D6C49A] group-hover:bg-[#BFA77A]"
// //                 }`}
// //               />
// //             </button>
// //           ))}
// //         </div>

// //         {/* Content Cards */}
// //         <div className="relative h-[600px] md:h-[500px] lg:h-[550px]">
// //           {steps.map((step, i) => (
// //             <MOTION.div
// //               key={i}
// //               initial={false}
// //               animate={{
// //                 opacity: current === i ? 1 : 0,
// //                 scale: current === i ? 1 : 0.95,
// //                 y: current === i ? 0 : 20,
// //                 zIndex: current === i ? 10 : 1,
// //               }}
// //               transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
// //               className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#2A1E16] to-[#1F1610]"
// //             >
// //               {/* Decorative corner accents */}
// //               <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#BFA77A]/20 to-transparent" />
// //               <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#BFA77A]/20 to-transparent" />

// //               <div className="relative flex flex-col md:flex-row items-center h-full p-6 md:p-10 lg:p-12 gap-6 md:gap-10">
// //                 {/* Image Container */}
// //                 <MOTION.div
// //                   initial={{ opacity: 0, x: -30 }}
// //                   animate={current === i ? { opacity: 1, x: 0 } : {}}
// //                   transition={{ duration: 0.6, delay: 0.2 }}
// //                   className="md:w-1/2 w-full h-64 md:h-full"
// //                 >
// //                   <div className="relative h-full group">
// //                     <div className="absolute inset-0 bg-gradient-to-r from-[#BFA77A] to-[#8B5E34] rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
// //                     <img
// //                       src={step.image}
// //                       alt={step.title}
// //                       className="w-full h-full object-cover rounded-2xl border-2 border-[#BFA77A]/30"
// //                     />
// //                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl" />
// //                   </div>
// //                 </MOTION.div>

// //                 {/* Text Content */}
// //                 <MOTION.div
// //                   initial={{ opacity: 0, x: 30 }}
// //                   animate={current === i ? { opacity: 1, x: 0 } : {}}
// //                   transition={{ duration: 0.6, delay: 0.3 }}
// //                   className="md:w-1/2 w-full space-y-6 text-center md:text-left"
// //                 >
// //                   <div className="inline-block">
// //                     <h2 className="text-xs md:text-sm uppercase tracking-[0.2em] text-[#FFD700] font-bold mb-2">
// //                       {step.title}
// //                     </h2>
// //                     <div className="h-0.5 bg-gradient-to-r from-[#FFD700] to-transparent" />
// //                   </div>

// //                   <p className={`text-lg md:text-xl lg:text-2xl leading-relaxed font-serif ${step.textColor}`}>
// //                     {step.description}
// //                   </p>

// //                   {i === steps.length - 1 && (
// //                     <MOTION.button
// //                       initial={{ opacity: 0, y: 10 }}
// //                       animate={current === i ? { opacity: 1, y: 0 } : {}}
// //                       transition={{ duration: 0.6, delay: 0.5 }}
// //                       whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(166, 124, 82, 0.3)" }}
// //                       whileTap={{ scale: 0.95 }}
// //                       onClick={handleLearnMore}
// //                       className="mt-6 px-10 py-4 bg-gradient-to-r from-[#A67C52] via-[#BFA77A] to-[#8B5E34] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base uppercase tracking-wide"
// //                     >
// //                       Learn More →
// //                     </MOTION.button>
// //                   )}
// //                 </MOTION.div>
// //               </div>
// //             </MOTION.div>
// //           ))}
// //         </div>

// //         {/* Navigation Arrows */}
// //         <div className="flex justify-center gap-4 mt-8">
// //           <MOTION.button
// //             whileHover={{ scale: 1.1 }}
// //             whileTap={{ scale: 0.9 }}
// //             onClick={() => setCurrent((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
// //             className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-[#8B5E34] hover:bg-gradient-to-r hover:from-[#A67C52] hover:to-[#8B5E34] hover:text-white"
// //             aria-label="Previous step"
// //           >
// //             ←
// //           </MOTION.button>
// //           <MOTION.button
// //             whileHover={{ scale: 1.1 }}
// //             whileTap={{ scale: 0.9 }}
// //             onClick={() => setCurrent((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
// //             className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-[#8B5E34] hover:bg-gradient-to-r hover:from-[#A67C52] hover:to-[#8B5E34] hover:text-white"
// //             aria-label="Next step"
// //           >
// //             →
// //           </MOTION.button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// import React, { useRef, useState } from "react";
// import { motion as MOTION } from "framer-motion";

// // Import your actual images
// import log1 from "../assets/about/log1.jpg";
// import log2 from "../assets/about/log2.jpg";
// import log3 from "../assets/about/log3.jpg";

// const steps = [
//   {
//     title: "WHO WE ARE",
//     description:
//       "At SVM Timbers, we specialize in providing premium timber solutions that reflect the perfect blend of tradition, craftsmanship, and innovation. Our team of experienced professionals brings decades of expertise in sourcing, processing, and delivering the finest quality timber products. We pride ourselves on understanding the unique needs of each project, whether residential, commercial, or industrial, and providing tailored solutions that exceed expectations.",
//     textColor: "text-[#FAF3E0]",
//     image: log1,
//   },
//   {
//     title: "OUR HISTORY",
//     description:
//       "Since our founding in 1982, our journey has been one of growth, learning, and commitment to excellence. We've grown from a modest depot to a trusted provider serving countless projects with integrity and passion. Over four decades, we've built lasting relationships with clients, suppliers, and communities, always staying true to our core values of quality and reliability. Our legacy is written in every structure we've helped build and every satisfied customer who has trusted us with their vision.",
//     textColor: "text-[#FFD700]",
//     image: log2,
//   },
//   {
//     title: "OUR MISSION",
//     description:
//       "Our mission is to craft sustainable, beautiful, and functional timber products that enrich the spaces they occupy — while upholding values of responsibility, craftsmanship, and trust. We are committed to environmental stewardship through responsible sourcing practices and supporting reforestation initiatives. Every piece of timber we provide is carefully selected to ensure it meets our rigorous standards for quality, durability, and aesthetic appeal, making your project not just a construction, but a lasting legacy.",
//     textColor: "text-[#D6C49A]",
//     image: log3,
//   },
// ];

// export default function AboutUs() {
//   const containerRef = useRef(null);
//   const [current, setCurrent] = useState(0);

//   return (
//     <section
//       ref={containerRef}
//       className="py-16 md:py-24 px-4 md:px-6 relative bg-gradient-to-b from-[#F8F4EF] via-[#FBF8F3] to-[#F5F0E8] overflow-hidden"
//     >
//       {/* Decorative background elements */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-[#BFA77A] opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D8C69C] opacity-5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header Section */}
//         <div className="text-center mb-12 md:mb-16">
//           <MOTION.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#A67C52] via-[#BFA77A] to-[#8B5E34] text-transparent bg-clip-text mb-4 font-serif">
//               About SVM Timbers
//             </h1>
//             <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#BFA77A] to-transparent mx-auto mb-6" />
//           </MOTION.div>

//           <MOTION.p
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-base md:text-lg text-[#7A684A] max-w-2xl mx-auto font-light"
//           >
//             Building legacy with every timber we craft.
//           </MOTION.p>
//         </div>

//         {/* Navigation Tabs */}
//         <div className="flex flex-wrap justify-center mb-10 md:mb-14 gap-4 md:gap-8">
//           {steps.map((step, i) => (
//             <MOTION.button
//               key={i}
//               onClick={() => setCurrent(i)}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className={`relative px-6 py-3 text-xs md:text-sm font-semibold uppercase tracking-widest
//                           transition-all duration-300 rounded-lg
//                           ${
//                             i === current
//                               ? "text-white bg-gradient-to-r from-[#A67C52] to-[#8B5E34] shadow-lg"
//                               : "text-[#7A684A] bg-white/50 hover:bg-white hover:shadow-md"
//                           }`}
//             >
//               <span className="relative z-10">{step.title}</span>
//               {i === current && (
//                 <MOTION.div
//                   layoutId="activeTab"
//                   className="absolute inset-0 bg-gradient-to-r from-[#A67C52] to-[#8B5E34] rounded-lg"
//                   style={{ zIndex: -1 }}
//                 />
//               )}
//             </MOTION.button>
//           ))}
//         </div>

//         {/* Progress Indicator */}
//         <div className="flex justify-center gap-2 mb-8">
//           {steps.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrent(i)}
//               className="group"
//               aria-label={`Go to step ${i + 1}`}
//             >
//               <div
//                 className={`h-1 rounded-full transition-all duration-300 ${
//                   i === current
//                     ? "w-12 bg-gradient-to-r from-[#A67C52] to-[#8B5E34]"
//                     : "w-8 bg-[#D6C49A] group-hover:bg-[#BFA77A]"
//                 }`}
//               />
//             </button>
//           ))}
//         </div>

//         {/* Content Cards */}
//         <div className="relative h-[600px] md:h-[500px] lg:h-[550px]">
//           {steps.map((step, i) => (
//             <MOTION.div
//               key={i}
//               initial={false}
//               animate={{
//                 opacity: current === i ? 1 : 0,
//                 scale: current === i ? 1 : 0.95,
//                 y: current === i ? 0 : 20,
//                 zIndex: current === i ? 10 : 1,
//               }}
//               transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
//               className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#2A1E16] to-[#1F1610]"
//             >
//               {/* Decorative corner accents */}
//               <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#BFA77A]/20 to-transparent" />
//               <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#BFA77A]/20 to-transparent" />

//               <div className="relative flex flex-col md:flex-row items-center h-full p-6 md:p-10 lg:p-12 gap-6 md:gap-10">
//                 {/* Image Container */}
//                 <MOTION.div
//                   initial={{ opacity: 0, x: -30 }}
//                   animate={current === i ? { opacity: 1, x: 0 } : {}}
//                   transition={{ duration: 0.6, delay: 0.2 }}
//                   className="md:w-1/2 w-full h-64 md:h-full"
//                 >
//                   <div className="relative h-full group">
//                     <div className="absolute inset-0 bg-gradient-to-r from-[#BFA77A] to-[#8B5E34] rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
//                     <img
//                       src={step.image}
//                       alt={step.title}
//                       className="w-full h-full object-cover rounded-2xl border-2 border-[#BFA77A]/30"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl" />
//                   </div>
//                 </MOTION.div>

//                 {/* Text Content */}
//                 <MOTION.div
//                   initial={{ opacity: 0, x: 30 }}
//                   animate={current === i ? { opacity: 1, x: 0 } : {}}
//                   transition={{ duration: 0.6, delay: 0.3 }}
//                   className="md:w-1/2 w-full space-y-6 text-center md:text-left"
//                 >
//                   <div className="inline-block">
//                     <h2 className="text-xs md:text-sm uppercase tracking-[0.2em] text-[#FFD700] font-bold mb-2">
//                       {step.title}
//                     </h2>
//                     <div className="h-0.5 bg-gradient-to-r from-[#FFD700] to-transparent" />
//                   </div>

//                   <p className={`text-base md:text-lg lg:text-xl leading-relaxed font-serif ${step.textColor}`}>
//                     {step.description}
//                   </p>
//                 </MOTION.div>
//               </div>
//             </MOTION.div>
//           ))}
//         </div>

//         {/* Navigation Arrows */}
//         <div className="flex justify-center gap-4 mt-8">
//           <MOTION.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             onClick={() => setCurrent((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
//             className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-[#8B5E34] hover:bg-gradient-to-r hover:from-[#A67C52] hover:to-[#8B5E34] hover:text-white"
//             aria-label="Previous step"
//           >
//             ←
//           </MOTION.button>
//           <MOTION.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             onClick={() => setCurrent((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
//             className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-[#8B5E34] hover:bg-gradient-to-r hover:from-[#A67C52] hover:to-[#8B5E34] hover:text-white"
//             aria-label="Next step"
//           >
//             →
//           </MOTION.button>
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useRef, useState } from "react";
import { motion as MOTION } from "framer-motion";

// Import your actual images
import log1 from "../assets/about/log1.jpg";
import log2 from "../assets/about/log2.jpg";
import log3 from "../assets/about/log3.jpg";

const steps = [
  {
    title: "WHO WE ARE",
    description:
      "At SVM Timbers, we specialize in providing premium timber solutions that reflect the perfect blend of tradition, craftsmanship, and innovation. Our team of experienced professionals brings decades of expertise in sourcing, processing, and delivering the finest quality timber products. We pride ourselves on understanding the unique needs of each project, whether residential, commercial, or industrial, and providing tailored solutions that exceed expectations.",
    textColor: "text-[#FAF3E0]",
    image: log1,
  },
  {
    title: "OUR HISTORY",
    description:
      "Since our founding in 1982, our journey has been one of growth, learning, and commitment to excellence. We've grown from a modest depot to a trusted provider serving countless projects with integrity and passion. Over four decades, we've built lasting relationships with clients, suppliers, and communities, always staying true to our core values of quality and reliability. Our legacy is written in every structure we've helped build and every satisfied customer who has trusted us with their vision.",
    textColor: "text-[#FFD700]",
    image: log2,
  },
  {
    title: "OUR MISSION",
    description:
      "Our mission is to craft sustainable, beautiful, and functional timber products that enrich the spaces they occupy — while upholding values of responsibility, craftsmanship, and trust. We are committed to environmental stewardship through responsible sourcing practices and supporting reforestation initiatives. Every piece of timber we provide is carefully selected to ensure it meets our rigorous standards for quality, durability, and aesthetic appeal, making your project not just a construction, but a lasting legacy.",
    textColor: "text-[#D6C49A]",
    image: log3,
  },
];

export default function AboutUs() {
  const containerRef = useRef(null);
  const [current, setCurrent] = useState(0);

  return (
    <section
      ref={containerRef}
      className="py-16 md:py-24 px-4 md:px-6 relative bg-gradient-to-b from-[#F8F4EF] via-[#FBF8F3] to-[#F5F0E8] overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#BFA77A] opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D8C69C] opacity-5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <MOTION.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#A67C52] via-[#BFA77A] to-[#8B5E34] text-transparent bg-clip-text mb-4 font-serif">
              About SVM Timbers
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#BFA77A] to-transparent mx-auto mb-6" />
          </MOTION.div>

          <MOTION.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-[#7A684A] max-w-2xl mx-auto font-light"
          >
            Building legacy with every timber we craft.
          </MOTION.p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-10 md:mb-14 gap-4 md:gap-8">
          {steps.map((step, i) => (
            <MOTION.button
              key={i}
              onClick={() => setCurrent(i)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-6 py-3 text-xs md:text-sm font-semibold uppercase tracking-widest
                          transition-all duration-300 rounded-lg
                          ${
                            i === current
                              ? "text-white bg-gradient-to-r from-[#A67C52] to-[#8B5E34] shadow-lg"
                              : "text-[#7A684A] bg-white/50 hover:bg-white hover:shadow-md"
                          }`}
            >
              <span className="relative z-10">{step.title}</span>
              {i === current && (
                <MOTION.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-[#A67C52] to-[#8B5E34] rounded-lg"
                  style={{ zIndex: -1 }}
                />
              )}
            </MOTION.button>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center gap-2 mb-8">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="group"
              aria-label={`Go to step ${i + 1}`}
            >
              <div
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-12 bg-gradient-to-r from-[#A67C52] to-[#8B5E34]"
                    : "w-8 bg-[#D6C49A] group-hover:bg-[#BFA77A]"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Content Cards */}
        <div className="relative h-[700px] sm:h-[650px] md:h-[550px] lg:h-[500px]">
          {steps.map((step, i) => (
            <MOTION.div
              key={i}
              initial={false}
              animate={{
                opacity: current === i ? 1 : 0,
                scale: current === i ? 1 : 0.95,
                y: current === i ? 0 : 20,
                zIndex: current === i ? 10 : 1,
              }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#2A1E16] to-[#1F1610]"
            >
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#BFA77A]/20 to-transparent" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#BFA77A]/20 to-transparent" />

              <div className="relative flex flex-col md:flex-row items-center h-full p-4 sm:p-6 md:p-10 lg:p-12 gap-4 sm:gap-6 md:gap-10">
                {/* Image Container */}
                <MOTION.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={current === i ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="md:w-1/2 w-full h-64 md:h-full"
                >
                  <div className="relative h-full group">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#BFA77A] to-[#8B5E34] rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover rounded-2xl border-2 border-[#BFA77A]/30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl" />
                  </div>
                </MOTION.div>

                {/* Text Content */}
                <MOTION.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={current === i ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="md:w-1/2 w-full space-y-6 text-center md:text-left"
                >
                  <div className="inline-block">
                    <h2 className="text-xs md:text-sm uppercase tracking-[0.2em] text-[#FFD700] font-bold mb-2">
                      {step.title}
                    </h2>
                    <div className="h-0.5 bg-gradient-to-r from-[#FFD700] to-transparent" />
                  </div>

                  <p className={`text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-serif ${step.textColor} max-h-[300px] md:max-h-none overflow-y-auto md:overflow-visible scrollbar-thin scrollbar-thumb-[#BFA77A] scrollbar-track-transparent`}>
                    {step.description}
                  </p>
                </MOTION.div>
              </div>
            </MOTION.div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-8">
          <MOTION.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCurrent((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
            className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-[#8B5E34] hover:bg-gradient-to-r hover:from-[#A67C52] hover:to-[#8B5E34] hover:text-white"
            aria-label="Previous step"
          >
            ←
          </MOTION.button>
          <MOTION.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCurrent((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
            className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-[#8B5E34] hover:bg-gradient-to-r hover:from-[#A67C52] hover:to-[#8B5E34] hover:text-white"
            aria-label="Next step"
          >
            →
          </MOTION.button>
        </div>
      </div>
    </section>
  );
}