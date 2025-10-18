import React from 'react';
import { motion as MOTION } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.25,
      type: 'spring',
      stiffness: 60,
      damping: 12,
    },
  }),
};

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 py-17 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/img/bg/hero-bg.jpeg')" }}
    >
      {/* Overlay to dim background */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>

      {/* Content */}
      <div className="relative flex flex-col md:flex-row max-w-7xl w-full items-center gap-10 p-6">
        {/* Text Section */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight md:leading-[1.2] tracking-tight font-playfair text-white">
            {[
              { text: 'DISCOVER the NATURAL', gradient: 'from-[#BFA77A] to-[#D8C69C]' },
              { text: 'BEAUTY & ENDLESS', gradient: 'from-[#D8C69C] to-[#A0522D]' },
              { text: 'POSSIBILITIES of', gradient: 'from-[#A0522D] to-[#7B4B2A]' },
              { text: 'TIMBER', gradient: 'from-[#FFD700] to-[#DAA520]' },
            ].map((line, i) => (
              <MOTION.span
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className={`block bg-gradient-to-r ${line.gradient} text-transparent bg-clip-text drop-shadow-md`}
              >
                {line.text}
              </MOTION.span>
            ))}
          </h1>

          <MOTION.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-200 max-w-xl md:pr-12"
          >
            Shaping the future with timber—crafted through precision, built on legacy.
          </MOTION.p>
        </div>

        {/* Sleek Rectangular Video Section */}
        <div className="flex-1 w-full flex items-center justify-center">
          <MOTION.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative w-full max-w-2xl rounded-xl overflow-hidden shadow-xl border-[4px] border-white/20 bg-white/10 backdrop-blur-lg"
          >
            {/* Glowing Edge Animation */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <div className="w-full h-full rounded-xl bg-gradient-to-tr from-[#F0E5CF] to-transparent animate-pulse"></div>
            </div>

            {/* Video Layer */}
            <video
              className="w-full h-full object-cover relative z-10"
              autoPlay
              muted
              loop
              playsInline
              poster="https://images.unsplash.com/photo-1611095969793-913cbd2387e3?auto=format&fit=crop&w=1000&q=80"
            >
              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            {/* Optional Play Icon */}
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <div className="w-14 h-14 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </MOTION.div>
        </div>
      </div>
    </section>
  );
}
