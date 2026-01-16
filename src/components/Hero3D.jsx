import React, { useEffect, useRef, useState } from "react";
import { motion as MOTION, AnimatePresence } from "framer-motion";

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

const BG_IMAGES = [
  "/img/bg/logo1.jpg",
  "/img/bg/logo2.png",
];

export default function Hero() {
  const [bgIndex, setBgIndex] = useState(0);
  const intervalRef = useRef(null);

  /* 🔥 Preload next background image */
  useEffect(() => {
    const nextIndex = (bgIndex + 1) % BG_IMAGES.length;
    const img = new Image();
    img.src = BG_IMAGES[nextIndex];
  }, [bgIndex]);

  /* 🔥 Enterprise autoplay control */
  useEffect(() => {
    const start = () => {
      stop();
      intervalRef.current = setInterval(() => {
        setBgIndex((i) => (i + 1) % BG_IMAGES.length);
      }, 3000);
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
      {/* 🔥 Background Slideshow */}
      <AnimatePresence>
        <MOTION.div
          key={bgIndex}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${BG_IMAGES[bgIndex]})` }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-10" />

      {/* 🎥 VIDEO — Desktop */}
      <div className="hidden md:block absolute top-24 right-8 z-20">
        <MOTION.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-72 lg:w-96 rounded-2xl overflow-hidden shadow-2xl border-[3px] border-white/20 bg-white/10 backdrop-blur-sm"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#DAA520]/20 via-transparent to-[#FFD700]/20 animate-pulse" />

          <video
            className="relative z-10 w-full h-full object-cover rounded-xl"
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
          </video>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            <MOTION.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center"
            >
              ▶
            </MOTION.div>
          </div>
        </MOTION.div>
      </div>

      {/* ✨ TEXT */}
      <div className="relative z-30 flex flex-col max-w-7xl w-full items-center md:items-start gap-8 p-4 sm:p-6">
        <div className="space-y-3 md:space-y-6 text-center md:text-left max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight font-playfair">
            {HERO_LINES.map((line, i) => (
              <MOTION.span
                key={line.text}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className={`block bg-gradient-to-r ${line.gradient} text-transparent bg-clip-text`}
              >
                {line.text}
              </MOTION.span>
            ))}
          </h1>

          <MOTION.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-100 max-w-xl"
          >
            Shaping the future with timber—crafted through precision, built on
            legacy.
          </MOTION.p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <MOTION.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
      >
        <div className="w-1.5 h-3 bg-white/70 rounded-full" />
      </MOTION.div>
    </section>
  );
}
