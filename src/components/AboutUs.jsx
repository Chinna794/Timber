
// import React, { useRef, useState } from 'react';
// import log1 from "../assets/log1.jpg";
// import { useNavigate } from 'react-router-dom';

// import {
//   motion as MOTION,
//   useScroll,
//   useTransform,
//   useMotionValueEvent,
// } from 'framer-motion';

// const steps = [
//   {
//     title: 'WHO WE ARE',
//     description: "At SVM Timbers, we specialize in providing premium timber solutions that reflect the perfect blend of tradition, craftsmanship, and innovation.",
//     imageBg: true,
//     textColor: 'text-white',
//     image: log1,
//   },
//   {
//     title: 'OUR HISTORY',
//     description: "Since our founding in 1982, our journey has been one of growth, learning, and commitment to excellence. We've grown from a modest depot to a trusted provider.",
//     color: 'bg-purple-800 text-white',
//     image: '/img/our-history.jpg',
//   },
//   {
//     title: 'OUR MISSION',
//     description: "Our mission is to craft sustainable, beautiful, and functional timber products that enrich the spaces they occupy.",
//     color: 'bg-green-800 text-white',
//     image: '/img/our-mission.jpg',
//   },
// ];


// export default function AboutUs() {
//   const navigate = useNavigate();
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ['start start', 'end end'],
//   });

//   const activeStep = useTransform(scrollYProgress, [0, 0.33, 0.67, 1], [0, 1, 2, 2]);
//   const [current, setCurrent] = useState(0);

//   // Create individual transform values for each step
//   // Step 0
//   const y0 = useTransform(
//     scrollYProgress,
//     [0, 1/steps.length],
//     [0, -50]
//   );
  
//   // Step 1
//   const y1 = useTransform(
//     scrollYProgress,
//     [1/steps.length, 2/steps.length],
//     [0, -50]
//   );
  
//   // Step 2
//   const y2 = useTransform(
//     scrollYProgress,
//     [2/steps.length, 3/steps.length],
//     [0, -50]
//   );

//   // Array of transform references (not calling hooks in a loop)
//   const yTransforms = [y0, y1, y2];

//   useMotionValueEvent(activeStep, 'change', (latest) => {
//     setCurrent(Math.round(latest));
//   });
  
//   const handleLearnMore = () => {
//     navigate('/about-details#our-story');
//   };

//   return (
//     <div className="relative">
//       <section
//         ref={containerRef}
//         className="min-h-[300vh] py-12 px-6 relative bg-white dark:bg-black z-10"
//       >
//         <div className="max-w-7xl mx-auto sticky top-0 pt-24 pb-10">
//           {/* Title */}
//           <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-[#7B4B2A] to-[#A0522D] text-transparent bg-clip-text font-playfair drop-shadow-md">
//             About SVM Timbers
//           </h1>

//           <MOTION.p
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center text-base md:text-lg text-gray-600 dark:text-gray-300 mb-10"
//           >
//             Building legacy with every timber we craft.
//           </MOTION.p>

//           {/* Progress Dots */}
//           <div className="flex justify-center mb-14 gap-4">
//             {steps.map((_, i) => (
//               <div key={i} className="flex items-center">
//                 <div
//   className={`w-9 h-9 rounded-full transition-all duration-300 ease-in-out ${
//     i === current
//       ? 'bg-black dark:bg-white text-white dark:text-black scale-110 shadow-lg'
//       : 'border-2 border-black dark:border-white text-black dark:text-white bg-white dark:bg-black'
//   } flex items-center justify-center font-bold`}
// >

//                   {i + 1}
//                 </div>
//                 {i < steps.length - 1 && (
//                   <div className="w-10 h-0.5 border-t-2 border-dotted border-black/50 mx-2" />
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Cards */}
//           <div className="relative h-[70vh]">
//             {steps.map((step, i) => {
//               // Combine all styles into a single style object
//               const cardStyle = {
//                 opacity: current === i ? 1 : 0.4,
//                 scale: current === i ? 1 : 0.94,
//                 y: yTransforms[i],
//                 zIndex: current === i ? 10 : i < current ? 5 : 1,
//                 filter: current !== i ? 'brightness(0.85)' : 'brightness(1)',
//                 pointerEvents: current === i ? 'auto' : 'none',
//                 ...(step.imageBg && { backgroundImage: "url('/img/wood-bg.jpg')" })
//               };
              
//               return (
//                 <MOTION.div
//                   key={i}
//                   style={cardStyle}
//                   className={`absolute inset-0 rounded-3xl p-6 md:p-10 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-2xl
//                     ${step.imageBg ? 'bg-no-repeat bg-cover bg-center' : step.color}`}
//                 >
//                   {/* Add overlay for better text readability on the image background */}
//                   {step.imageBg && (
//                     <div className="absolute inset-0 bg-black/40 rounded-3xl" />
//                   )}
                  
//                   <div className="flex flex-col md:flex-row items-center gap-8 h-full relative z-10">
//                     <div className="md:w-1/2 w-full">
//                       <MOTION.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, delay: 0.2 }}
//                         whileHover={{ scale: 1.05, rotate: [0, 1, -1, 1, 0], transition: { duration: 0.6 } }}
//                         className="rounded-xl overflow-hidden shadow-lg transform-gpu transition-transform duration-300"
//                       >
//                         <img
//                           src={typeof step.image === 'string' ? step.image : step.image.src}
//                           alt={step.title}
//                           className="w-full h-64 md:h-full object-cover"
//                         />
//                       </MOTION.div>
//                     </div>

//                     <div className="md:w-1/2 w-full space-y-4">
//                       <h2 className="text-sm font-medium tracking-widest uppercase font-playfair text-amber-300">
//                         {step.title}
//                       </h2>
//                       <p className={`text-xl md:text-2xl font-medium leading-relaxed font-playfair ${step.textColor || 'text-gray-100'}`}>
//   {step.description}
// </p>


//                       {i === 0 && (
//                         <MOTION.button
//                           whileHover={{ scale: 1.05 }}
//                           whileTap={{ scale: 0.95 }}
//                           transition={{ duration: 0.3 }}
//                           onClick={handleLearnMore}
//                           className="mt-6 px-6 py-2 bg-gradient-to-r from-[#7B4B2A] to-[#A0522D] text-white font-semibold rounded-full shadow-lg"
//                         >
//                           Learn More
//                         </MOTION.button>
//                       )}
//                     </div>
//                   </div>
//                 </MOTION.div>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }



import React, { useRef, useState } from 'react';
import log1 from "../../public/img/log1.jpg";
import { useNavigate } from 'react-router-dom';

import {
  motion as MOTION,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from 'framer-motion';

const steps = [
  {
    title: 'WHO WE ARE',
    description: "At SVM Timbers, we specialize in providing premium timber solutions that reflect the perfect blend of tradition, craftsmanship, and innovation.",
    imageBg: true,
    textColor: 'text-[#FAF3E0]',
    image: log1,
  },
  {
    title: 'OUR HISTORY',
    description: "Since our founding in 1982, our journey has been one of growth, learning, and commitment to excellence. We've grown from a modest depot to a trusted provider.",
    color: 'bg-[#5F4E2A] text-[#FFD700]',
    image: '/img/our-history.jpg',
  },
  {
    title: 'OUR MISSION',
    description: "Our mission is to craft sustainable, beautiful, and functional timber products that enrich the spaces they occupy.",
    color: 'bg-[#7A684A] text-[#D6C49A]',
    image: '/img/our-mission.jpg',
  },
];

export default function AboutUs() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const activeStep = useTransform(scrollYProgress, [0, 0.33, 0.67, 1], [0, 1, 2, 2]);
  const [current, setCurrent] = useState(0);

  // Create individual transform values for each step
  // Step 0
  const y0 = useTransform(
    scrollYProgress,
    [0, 1/steps.length],
    [0, -50]
  );
  
  // Step 1
  const y1 = useTransform(
    scrollYProgress,
    [1/steps.length, 2/steps.length],
    [0, -50]
  );
  
  // Step 2
  const y2 = useTransform(
    scrollYProgress,
    [2/steps.length, 3/steps.length],
    [0, -50]
  );

  // Array of transform references (not calling hooks in a loop)
  const yTransforms = [y0, y1, y2];

  useMotionValueEvent(activeStep, 'change', (latest) => {
    setCurrent(Math.round(latest));
  });
  
  const handleLearnMore = () => {
    navigate('/about-details#our-story');
  };

  return (
    <div className="relative">
      <section
        ref={containerRef}
        className="min-h-[300vh] py-12 px-6 relative bg-[#F8F4EF] dark:bg-[#0F0F0F] z-10"
      >
        <div className="max-w-7xl mx-auto sticky top-0 pt-24 pb-10">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-[#BFA77A] to-[#D8C69C] text-transparent bg-clip-text font-playfair drop-shadow-md">
            About SVM Timbers
          </h1>

          <MOTION.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-base md:text-lg text-[#7A684A] dark:text-[#D6C49A] mb-10"
          >
            Building legacy with every timber we craft.
          </MOTION.p>

          {/* Progress Dots */}
          <div className="flex justify-center mb-14 gap-4">
            {steps.map((_, i) => (
              <div key={i} className="flex items-center">
                <div
                  className={`w-9 h-9 rounded-full transition-all duration-300 ease-in-out ${
                    i === current
                      ? 'bg-[#FFD700] text-black scale-110 shadow-lg'
                      : 'border-2 border-[#5F4E2A] text-[#5F4E2A] bg-[#FFFDF8]'
                  } flex items-center justify-center font-bold`}
                >
                  {i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-10 h-0.5 border-t-2 border-dotted border-[#5F4E2A] mx-2" />
                )}
              </div>
            ))}
          </div>

          {/* Cards */}
          <div className="relative h-[70vh]">
            {steps.map((step, i) => {
              // Combine all styles into a single style object
              const cardStyle = {
                opacity: current === i ? 1 : 0.4,
                scale: current === i ? 1 : 0.94,
                y: yTransforms[i],
                zIndex: current === i ? 10 : i < current ? 5 : 1,
                filter: current !== i ? 'brightness(0.85)' : 'brightness(1)',
                pointerEvents: current === i ? 'auto' : 'none',
                ...(step.imageBg && { backgroundImage: "url('/img/wood-bg.jpg')" })
              };
              
              return (
                <MOTION.div
                  key={i}
                  style={cardStyle}
                  className={`absolute inset-0 rounded-3xl p-6 md:p-10 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-2xl
                    ${step.imageBg ? 'bg-no-repeat bg-cover bg-center' : step.color}`}
                >
                  {/* Add overlay for better text readability on the image background */}
                  {step.imageBg && (
                    <div className="absolute inset-0 bg-black/40 rounded-3xl" />
                  )}
                  
                  <div className="flex flex-col md:flex-row items-center gap-8 h-full relative z-10">
                    <div className="md:w-1/2 w-full">
                      <MOTION.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        whileHover={{ scale: 1.05, rotate: [0, 1, -1, 1, 0], transition: { duration: 0.6 } }}
                        className="rounded-xl overflow-hidden shadow-lg transform-gpu transition-transform duration-300"
                      >
                        <img
                          src={typeof step.image === 'string' ? step.image : step.image.src}
                          alt={step.title}
                          className="w-full h-64 md:h-full object-cover"
                        />
                      </MOTION.div>
                    </div>

                    <div className="md:w-1/2 w-full space-y-4">
                      <h2 className="text-sm font-medium tracking-widest uppercase font-playfair text-amber-300">
                        {step.title}
                      </h2>
                      <p className={`text-xl md:text-2xl font-medium leading-relaxed font-playfair ${step.textColor || 'text-[#FAF3E0]'}`}>
                        {step.description}
                      </p>

                      {i === 0 && (
                        <MOTION.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ duration: 0.3 }}
                          onClick={handleLearnMore}
                          className="mt-6 px-6 py-2 bg-gradient-to-r from-[#7B4B2A] to-[#A0522D] text-white font-semibold rounded-full shadow-lg"
                        >
                          Learn More
                        </MOTION.button>
                      )}
                    </div>
                  </div>
                </MOTION.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
