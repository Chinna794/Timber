import React, { useRef, useState } from "react";
import log1 from "../assets/about/log1.jpg";
import log2 from "../assets/about/log2.jpg";
import log3 from "../assets/about/log3.jpg";

import { useNavigate } from "react-router-dom";
import { motion as MOTION } from "framer-motion";

const steps = [
  {
    title: "WHO WE ARE",
    description:
      "At SVM Timbers, we specialize in providing premium timber solutions that reflect the perfect blend of tradition, craftsmanship, and innovation.",
    textColor: "text-[#FAF3E0]",
    image: log1,
  },
  {
    title: "OUR HISTORY",
    description:
      "Since our founding in 1982, our journey has been one of growth, learning, and commitment to excellence. We've grown from a modest depot to a trusted provider serving countless projects with integrity and passion.",
    textColor: "text-[#FFD700]",
    image: log2,
  },
  {
    title: "OUR MISSION",
    description:
      "Our mission is to craft sustainable, beautiful, and functional timber products that enrich the spaces they occupy — while upholding values of responsibility, craftsmanship, and trust.",
    textColor: "text-[#D6C49A]",
    image: log3,
  },
];

export default function AboutUs() {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  // ONLY state controlling cards
  const [current, setCurrent] = useState(0);

  const handleLearnMore = () => {
    navigate("/about-details#our-story");
  };

  return (
    <section
      ref={containerRef}
      className="py-24 px-6 relative bg-[#F8F4EF]"
     >
      <div className="max-w-7xl mx-auto  pb-10">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-[#BFA77A] to-[#D8C69C] text-transparent bg-clip-text font-playfair">
          About SVM Timbers
        </h1>

        <MOTION.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-base md:text-lg text-[#7A684A] mb-10"
        >
          Building legacy with every timber we craft.
        </MOTION.p>

        {/* CLICKABLE TEXT TABS */}
        <div className="flex justify-center mb-14 gap-10">
          {steps.map((step, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`relative text-xs md:text-sm font-semibold uppercase tracking-[0.2em] font-playfair
                          transition-all duration-300
                          ${
                            i === current
                              ? "text-[#FFD700]"
                              : "text-[#7A684A] hover:text-[#BFA77A]"
                          }`}
            >
              {step.title}

              {i === current && (
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#FFD700] rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* CARDS (NO SCROLL DEPENDENCY) */}
        <div className="relative h-[90vh] md:h-[70vh]">
          {steps.map((step, i) => (
            <MOTION.div
              key={i}
              initial={false}
              animate={{
                opacity: current === i ? 1 : 0,
                scale: current === i ? 1 : 0.96,
                zIndex: current === i ? 10 : 1,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 rounded-3xl p-6 md:p-10 shadow-2xl bg-[#2A1E16]"
            >
              <div className="flex flex-col md:flex-row items-center gap-8 h-full">
                {/* Image */}
                <div className="md:w-1/2 w-full">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-64 md:h-full object-cover rounded-xl"
                  />
                </div>

                {/* Text */}
                <div className="md:w-1/2 w-full space-y-6 text-center md:text-left">
                  <h2 className="text-sm uppercase tracking-[0.15em] text-[#FFD700] font-semibold">
                    {step.title}
                  </h2>

                  <p className={`text-lg md:text-xl font-playfair ${step.textColor}`}>
                    {step.description}
                  </p>

                  {i === steps.length - 1 && (
                    <MOTION.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleLearnMore}
                      className="mt-8 px-8 py-3 bg-linear-to-r from-[#A67C52] to-[#8B5E34] text-white font-semibold rounded-full"
                    >
                      Learn More
                    </MOTION.button>
                  )}
                </div>
              </div>
            </MOTION.div>
          ))}
        </div>
      </div>
    </section>
  );
}
