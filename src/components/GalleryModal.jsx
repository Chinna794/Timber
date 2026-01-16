import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion as MOTION } from "framer-motion";

export default function GalleryModal({ images, onClose }) {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const intervalRef = useRef(null);
  const startX = useRef(null);

  const next = () => {
    setLoaded(false);
    setIndex((i) => (i + 1) % images.length);
  };

  const prev = () => {
    setLoaded(false);
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  /* Keyboard */
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  /* Auto-play */
  useEffect(() => {
    start();
    return stop;
  }, []);

  const start = () => {
    stop();
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
      setLoaded(false);
    }, 3000);
  };

  const stop = () => intervalRef.current && clearInterval(intervalRef.current);

  /* Swipe */
  const onTouchStart = (e) => (startX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    const diff = startX.current - e.changedTouches[0].clientX;
    if (diff > 70) next();
    if (diff < -70) prev();
  };

  /* Lock background scroll */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <AnimatePresence>
      <MOTION.div
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <MOTION.div
          className="relative bg-white rounded-3xl p-4 max-w-5xl w-full mx-4 shadow-2xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          onMouseEnter={stop}
          onMouseLeave={start}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-3 right-4 text-3xl text-gray-600 hover:text-black"
          >
            ×
          </button>

          {/* Shimmer */}
          {!loaded && (
            <div className="absolute inset-4 rounded-xl animate-pulse bg-gradient-to-r from-[#e6d8c3] via-[#f5ebdf] to-[#e6d8c3]" />
          )}

          {/* Image */}
          <img
            src={images[index]}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            draggable={false}
            alt=""
            className={`w-full h-[65vh] object-contain rounded-xl transition duration-500 ${
              loaded ? "opacity-100 blur-0" : "opacity-0 blur-sm"
            }`}
          />

          {/* Controls */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 w-11 h-11 rounded-full shadow flex items-center justify-center text-xl hover:scale-110"
          >
            ‹
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 w-11 h-11 rounded-full shadow flex items-center justify-center text-xl hover:scale-110"
          >
            ›
          </button>

          {/* Counter */}
          <div className="text-center mt-3 text-sm text-gray-500">
            {index + 1} / {images.length}
          </div>
        </MOTION.div>
      </MOTION.div>
    </AnimatePresence>
  );
}
