import React, { useEffect, useRef, useState } from "react";

export default function ImageCarousel({ images }) {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const intervalRef = useRef(null);

  // Auto play
  useEffect(() => {
    const stop = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    const start = () => {
      if (!images || images.length <= 1) return;
      stop();
      intervalRef.current = setInterval(() => {
        setIndex((i) => (i + 1) % images.length);
        setLoaded(false);
      }, 3000);
    };

    start();
    return stop;
  }, [images]);

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const start = () => {
    if (!images || images.length <= 1) return;
    stop();
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
      setLoaded(false);
    }, 3000);
  };

  const next = (e) => {
    e.stopPropagation();
    setIndex((i) => (i + 1) % images.length);
    setLoaded(false);
  };

  const prev = (e) => {
    e.stopPropagation();
    setIndex((i) => (i - 1 + images.length) % images.length);
    setLoaded(false);
  };

  return (
    <div
      onMouseEnter={() => stop()}
      onMouseLeave={() => start()}
      className="relative w-full h-64 overflow-hidden"
    >
      {/* Shimmer */}
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-[#e6d8c3] via-[#f5ebdf] to-[#e6d8c3]" />
      )}

      <img
        src={images[index]}
        onLoad={() => setLoaded(true)}
        loading="lazy"
        alt=""
        className={`w-full h-full object-cover transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
      >
        ›
      </button>
    </div>
  );
}
