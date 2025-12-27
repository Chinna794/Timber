import React from "react";
import { motion as MOTION } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.25,
      type: "spring",
      stiffness: 60,
      damping: 12,
    },
  }),
};

const HERO_LINES = [
  { text: "DISCOVER the NATURAL", gradient: "from-[#E8D4B0] to-[#D8C69C]" },
  { text: "BEAUTY & ENDLESS", gradient: "from-[#D8C69C] to-[#C4A574]" },
  { text: "POSSIBILITIES of", gradient: "from-[#C4A574] to-[#B8956A]" },
  { text: "TIMBER", gradient: "from-[#FFD700] via-[#F4C430] to-[#DAA520]" },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-20"
      style={{
        backgroundImage: "url('/img/bg/logo.jpeg')",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Enhanced gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      {/* Content */}
      <div className="relative flex flex-col md:flex-row max-w-7xl w-full items-center gap-8 md:gap-12 p-4 sm:p-6">
        {/* Text Section - Mobile optimized */}
        <div className="flex-1 space-y-3 md:space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl  font-extrabold leading-tight tracking-tight font-playfair">
            {HERO_LINES.map((line, i) => (
              <MOTION.span
                key={line.text}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className={`block bg-gradient-to-r ${line.gradient} text-transparent bg-clip-text drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]`}
              >
                {line.text}
              </MOTION.span>
            ))}
          </h1>

          <MOTION.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-gray-100 max-w-xl mx-auto md:mx-0 leading-relaxed"
            style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}
          >
            Shaping the future with timber—crafted through precision, built on
            legacy.
          </MOTION.p>
        </div>

        {/* Video Section - Enhanced styling */}
        <div className="flex-1 w-full flex items-center justify-center mt-8 md:mt-0">
          <MOTION.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-lg md:max-w-xl rounded-2xl overflow-hidden shadow-2xl border-[3px] border-white/20 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm"
          >
            {/* Animated glow effect */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <div className="w-full h-full rounded-2xl bg-gradient-to-tr from-[#DAA520]/20 via-transparent to-[#FFD700]/20 animate-pulse" />
            </div>

            {/* Video */}
            <video
              className="w-full h-full object-cover relative z-10 rounded-xl"
              autoPlay
              muted
              loop
              playsInline
              aria-label="Timber craftsmanship showcase"
            >
              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            {/* Enhanced play icon with hover effect */}
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <MOTION.div
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg"
              >
                <svg
                  className="w-7 h-7 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </MOTION.div>
            </div>
          </MOTION.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <MOTION.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <MOTION.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-white/70 rounded-full" />
        </MOTION.div>
      </MOTION.div>
    </section>
  );
}
