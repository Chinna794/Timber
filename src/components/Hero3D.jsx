import React, { useEffect, useRef, useState } from "react";
import { motion as MOTION, AnimatePresence } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.22,
      type: "spring",
      stiffness: 55,
      damping: 14,
    },
  }),
};

const HERO_LINES = [
  { text: "DISCOVER the NATURAL", gradient: "from-[#E8D4B0] to-[#D8C69C]" },
  { text: "BEAUTY & ENDLESS", gradient: "from-[#D8C69C] to-[#C4A574]" },
  { text: "POSSIBILITIES of", gradient: "from-[#C4A574] to-[#B8956A]" },
  { text: "TIMBER", gradient: "from-[#FFD700] via-[#F4C430] to-[#DAA520]" },
];

const BG_IMAGES = [
  "/img/bg/logo1.jpg",
  "/img/bg/logo2.png",
];

export default function Hero() {
  const [bgIndex, setBgIndex] = useState(0);
  const intervalRef = useRef(null);

  /* Preload next image */
  useEffect(() => {
    const nextIndex = (bgIndex + 1) % BG_IMAGES.length;
    const img = new Image();
    img.src = BG_IMAGES[nextIndex];
  }, [bgIndex]);

  /* Autoplay with visibility control */
  useEffect(() => {
    const start = () => {
      stop();
      intervalRef.current = setInterval(() => {
        setBgIndex((i) => (i + 1) % BG_IMAGES.length);
      }, 5200);
    };

    const stop = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };

    const handleVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    document.addEventListener("visibilitychange", handleVisibility);
    start();

    return () => {
      stop();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6 py-20">
      {/* Background Slideshow */}
      <AnimatePresence>
        <MOTION.div
          key={bgIndex}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${BG_IMAGES[bgIndex]})` }}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65 z-10" />

      {/* Desktop Video (top-right corner) */}
      <div className="hidden md:block absolute top-28 right-10 z-20">
        <MOTION.div
          initial={{ opacity: 0, scale: 0.92, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative w-64 lg:w-80 rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-white/10 backdrop-blur-sm"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#DAA520]/15 via-transparent to-[#FFD700]/15" />

          <video
            className="relative z-10 w-full h-full object-cover rounded-xl"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
          </video>
        </MOTION.div>
      </div>

      {/* Content Container */}
      <div className="relative z-30 flex flex-col max-w-7xl w-full items-center md:items-start gap-8 p-4 sm:p-6">
        
        {/* Mobile Video (top, centered) - Hidden on desktop */}
        <div className="md:hidden w-full max-w-md">
          <MOTION.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-white/10 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#DAA520]/15 via-transparent to-[#FFD700]/15" />

            <video
              className="relative z-10 w-full h-full object-cover rounded-xl"
              autoPlay
              muted
              loop
              playsInline
            >
              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
              />
            </video>
          </MOTION.div>
        </div>

        {/* Text Content */}
        <div className="space-y-4 md:space-y-6 text-center md:text-left max-w-2xl">
          {/* Trust Anchor */}
          <span className="inline-block text-xs tracking-widest uppercase text-[#E8D4B0]/80">
            Since 1982 • Four Decades of Craftsmanship
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight font-playfair">
            {HERO_LINES.map((line, i) => (
              <MOTION.span
                key={line.text}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className={`block bg-gradient-to-r ${line.gradient} text-transparent bg-clip-text ${
                  line.text === "TIMBER"
                    ? "text-4xl sm:text-5xl md:text-6xl"
                    : "opacity-90"
                }`}
              >
                {line.text}
              </MOTION.span>
            ))}
          </h1>

          <MOTION.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15 }}
            className="text-base sm:text-lg md:text-xl text-gray-100 max-w-xl leading-relaxed"
          >
            Shaping the future with timber—crafted through precision, built on
            legacy.
          </MOTION.p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <MOTION.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.6, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
      >
        <div className="w-1.5 h-3 bg-white/70 rounded-full" />
      </MOTION.div>
    </section>
  );
}