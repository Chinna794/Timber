import React, { useRef, useState } from 'react';
import log1 from "../../public/img/log1.jpg";
import log2 from "../../public/img/log2.jpg";
import log3 from "../../public/img/log3.jpg";
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
    description:
      "At SVM Timbers, we specialize in providing premium timber solutions that reflect the perfect blend of tradition, craftsmanship, and innovation.",
    bgImage: '/img/wood-bg.jpg',
    textColor: 'text-[#FAF3E0]',
    image: log1,
  },
  {
    title: 'OUR HISTORY',
    description:
      "Since our founding in 1982, our journey has been one of growth, learning, and commitment to excellence. We've grown from a modest depot to a trusted provider serving countless projects with integrity and passion.",
    bgImage: '/img/wood-bg2.jpg',
    textColor: 'text-[#FFD700]',
    image: log2,
  },
  {
    title: 'OUR MISSION',
    description:
      "Our mission is to craft sustainable, beautiful, and functional timber products that enrich the spaces they occupy — while upholding values of responsibility, craftsmanship, and trust.",
    bgImage: '/img/wood-bg3.jpg',
    textColor: 'text-[#D6C49A]',
    image: log3,
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

  const y0 = useTransform(scrollYProgress, [0, 1 / steps.length], [0, -50]);
  const y1 = useTransform(scrollYProgress, [1 / steps.length, 2 / steps.length], [0, -50]);
  const y2 = useTransform(scrollYProgress, [2 / steps.length, 3 / steps.length], [0, -50]);
  const yTransforms = [y0, y1, y2];

  useMotionValueEvent(activeStep, 'change', (latest) => {
    setCurrent(Math.round(latest));
  });

  const handleLearnMore = () => {
    navigate('/about-details#our-story');
  };

  return (
    <div className="relative">
      {/* Fixed Background */}
      <section
        ref={containerRef}
        className="min-h-[200vh] px-6 relative 
                   bg-[#F8F4EF] dark:bg-[#231915] 
                   bg-no-repeat bg-cover bg-center bg-fixed z-10"
        style={{
          backgroundImage: "url('/img/bg/about-bg.jpeg')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        <div className="max-w-7xl mx-auto sticky top-0 pb-10">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-center 
                         bg-gradient-to-r from-[#BFA77A] to-[#D8C69C] 
                         text-transparent bg-clip-text font-playfair drop-shadow-md">
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

          {/* Progress Indicators (Clickable Steps) */}
          <div className="flex justify-center mb-14 gap-10">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex flex-col items-center relative cursor-pointer"
                onClick={() => setCurrent(i)}
              >
                {/* Number circle */}
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold 
                              transition-all duration-300 ease-in-out backdrop-blur-sm ${
                    i === current
                      ? 'bg-gradient-to-r from-[#FFD700] to-[#CDAA00] text-black scale-110 shadow-[0_0_20px_rgba(255,215,0,0.6)]'
                      : 'bg-white/10 border-2 border-[#D6C49A]/50 text-[#FAF3E0] hover:scale-105 hover:bg-white/20 hover:shadow-lg hover:shadow-[#FFD700]/30'
                  }`}
                >
                  {i + 1}
                </div>

                {/* Label */}
                <p
                  className={`mt-2 text-xs md:text-sm font-semibold tracking-wide uppercase font-playfair text-center
                              transition-all duration-300 ${
                    i === current ? 'text-[#FFD700]' : 'text-[#D6C49A]/80'
                  }`}
                >
                  {step.title}
                </p>

                {/* Connector Line */}
                {i < steps.length - 1 && (
                  <div className="absolute top-6 left-full w-10 md:w-12 h-0.5 border-t-2 border-dotted border-[#D6C49A]/60 mx-2" />
                )}
              </div>
            ))}
          </div>

          {/* Cards */}
          <div className="relative h-[90vh] md:h-[70vh]">
            {steps.map((step, i) => {
              const cardStyle = {
                opacity: current === i ? 1 : 0.4,
                scale: current === i ? 1 : 0.94,
                y: yTransforms[i],
                zIndex: current === i ? 10 : i < current ? 5 : 1,
                filter: current !== i ? 'brightness(0.85)' : 'brightness(1)',
                pointerEvents: current === i ? 'auto' : 'none',
                ...(step.bgImage && {
                  backgroundImage: `url(${step.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }),
              };

              return (
                <MOTION.div
                  key={i}
                  style={cardStyle}
                  className={`absolute inset-0 rounded-3xl p-6 md:p-10 
                              transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] 
                              shadow-2xl ${step.bgImage ? 'bg-no-repeat bg-cover bg-center' : step.color}`}
                >
                  {/* Overlay */}
                  {step.bgImage && (
                    <div className="absolute inset-0 bg-black/40 rounded-3xl" />
                  )}

                  <div className="flex flex-col md:flex-row items-center gap-8 h-full relative z-10">
                    {/* Image */}
                    <div className="md:w-1/2 w-full">
                      <MOTION.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        whileHover={{
                          scale: 1.05,
                          rotate: [0, 1, -1, 1, 0],
                          transition: { duration: 0.6 },
                        }}
                        className="rounded-xl overflow-hidden shadow-lg transform-gpu transition-transform duration-300"
                      >
                        <img
                          src={typeof step.image === 'string' ? step.image : step.image.src}
                          alt={step.title}
                          className="w-full h-64 md:h-full object-cover"
                        />
                      </MOTION.div>
                    </div>

                    {/* Text Section (Refined Typography) */}
                    <div className="md:w-1/2 w-full space-y-6 text-center md:text-left">
                      <h2 className="text-sm md:text-base tracking-[0.15em] uppercase text-[#FFD700] font-semibold">
                        {step.title}
                      </h2>

                      <p
                        className={`text-lg md:text-xl leading-relaxed font-playfair font-medium ${
                          step.textColor || 'text-[#FAF3E0]'
                        }`}
                      >
                        {step.description}
                      </p>

                      {i === steps.length - 1 && (
                        <MOTION.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ duration: 0.3 }}
                          onClick={handleLearnMore}
                          className="inline-block mt-8 px-8 py-3 bg-gradient-to-r from-[#A67C52] to-[#8B5E34]
                                     text-white font-semibold rounded-full shadow-lg hover:shadow-amber-300/30
                                     transition-all duration-300"
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
