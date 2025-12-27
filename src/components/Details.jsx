import React, { useState, useEffect } from 'react';
import { motion as MOTION } from 'framer-motion';

export default function Details() {
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;

    if (hash === '#our-story') {
      window.history.scrollRestoration = 'manual';
      window.scrollTo(0, 0);

      setTimeout(() => {
        const element = document.getElementById('our-story');
        if (element) {
          const yOffset = -150;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#FAF3E0] via-[#F5EBDF] to-[#F0E2CF] px-6 pt-32 pb-20 space-y-32">
      {/* ======================= OUR STORY ======================= */}
      <MOTION.div 
        id="our-story" 
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <MOTION.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-playfair font-extrabold bg-gradient-to-r from-[#7B4B2A] via-[#A0522D] to-[#C97F4A] text-transparent bg-clip-text mb-4">
            Our Story
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#7B4B2A] to-[#A0522D] mx-auto rounded-full"></div>
        </MOTION.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* LEFT: Overlapping Images with Enhanced Effects */}
          <MOTION.div 
            variants={fadeInUp}
            className="w-full relative h-[500px] md:h-[600px]"
          >
            {/* Decorative background blur */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#A0522D]/10 to-[#7B4B2A]/10 rounded-3xl blur-3xl"></div>

            {/* 1st Image */}
            <MOTION.div 
              initial={{ opacity: 0, x: -50, rotate: -5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute top-0 left-0 w-64 h-64 md:w-80 md:h-80 z-10 group"
            >
              <div className="absolute -inset-2 bg-gradient-to-br from-[#A0522D] to-[#7B4B2A] rounded-2xl opacity-20 group-hover:opacity-40 transition duration-300 blur-xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50 transform group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/img/Burma/Burma Teak Cut Sizes.jpeg"
                  alt="Burma Teak Cut Sizes"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </MOTION.div>

            {/* 2nd Image */}
            <MOTION.div 
              initial={{ opacity: 0, x: 50, rotate: 5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute top-1/4 right-0 w-64 h-64 md:w-80 md:h-80 z-20 group"
            >
              <div className="absolute -inset-2 bg-gradient-to-br from-[#C97F4A] to-[#A0522D] rounded-2xl opacity-20 group-hover:opacity-40 transition duration-300 blur-xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50 transform group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/img/Hunsur/Hunsur Teak Logs.jpeg"
                  alt="Hunsur Teak Logs"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </MOTION.div>

            {/* 3rd Image */}
            <MOTION.div 
              initial={{ opacity: 0, y: 50, rotate: -3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="hidden md:block absolute bottom-0 left-1/4 w-64 h-64 md:w-80 md:h-80 z-30 group"
            >
              <div className="absolute -inset-2 bg-gradient-to-br from-[#E5B87E] to-[#C97F4A] rounded-2xl opacity-20 group-hover:opacity-40 transition duration-300 blur-xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50 transform group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/img/Matti/Matti Wood Logs.jpeg"
                  alt="Matti Wood Logs"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </MOTION.div>
          </MOTION.div>

          {/* RIGHT: Our Story Content */}
          <MOTION.div variants={fadeInUp} className="space-y-6">
            <MOTION.div 
              variants={fadeInUp}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#A0522D] to-[#8B4513] text-white text-base md:text-lg font-bold px-8 py-3 rounded-full shadow-lg"
            >
              <span className="text-2xl">🏆</span>
              <span>Founded in 1982</span>
            </MOTION.div>

            <MOTION.div 
  variants={fadeInUp}
  className="text-gray-800 text-base md:text-lg leading-relaxed space-y-5"
>

              <p className="first-letter:text-6xl first-letter:float-left first-letter:font-bold first-letter:mr-3 first-letter:leading-none first-letter:text-[#A0522D] first-letter:font-playfair">
                Sri Vishnu Maheshwara Timber (SVMT) stands as a proud sub-branch of Sri Venkateswara Saw Mill cum Depot, delivering premium hardwood timber of exceptional quality for over four decades.
              </p>

              <p className="pl-4 border-l-4 border-[#A0522D]/30">
                As an independent family business rooted in the heart of India, we've established our presence across Andhra Pradesh and Karnataka, serving clients nationwide and beyond.
              </p>

              <p>
                Our fully operational sawmill in{' '}
                <span
                  onClick={() => setShowMap(true)}
                  className="inline-flex items-center gap-1 text-[#A0522D] hover:text-[#7B4B2A] cursor-pointer font-semibold transition duration-200 underline decoration-wavy decoration-[#A0522D]/30 hover:decoration-[#A0522D]"
                >
                  📍 Penukonda
                </span>
                , Andhra Pradesh serves as our central hub, allowing us to craft bespoke timber solutions and ensure prompt delivery throughout India.
              </p>

              <p className="bg-gradient-to-r from-[#F5EBDF] to-transparent p-4 rounded-lg border-l-4 border-[#A0522D]">
                What truly sets SVMT apart is our unwavering commitment to quality, our extensive range of timber products, and our personalized service approach.
              </p>

              <p>
                Whether you're undertaking a major commercial project or a smaller personal endeavor, SVMT brings over 42 years of timber expertise to every piece we deliver.
              </p>

              {/* Decorative Quote */}
              <MOTION.div 
                variants={fadeInUp}
                className="relative mt-10 p-6 bg-gradient-to-br from-[#A0522D]/10 to-transparent rounded-2xl"
              >
                <div className="absolute -top-6 -left-4 text-6xl text-[#A0522D]/20 font-serif">"</div>
                <div className="text-[#7B4B2A] font-medium text-xl md:text-2xl italic font-playfair">
                  Crafting quality timber with tradition, passion, and precision.
                </div>
                <div className="absolute -bottom-6 -right-4 text-6xl text-[#A0522D]/20 font-serif">"</div>
              </MOTION.div>
            </MOTION.div>
          </MOTION.div>
        </div>
      </MOTION.div>

      {/* ======================= MODAL ======================= */}
      {showMap && (
        <MOTION.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4"
          onClick={() => setShowMap(false)}
        >
          <MOTION.div 
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className="bg-white rounded-2xl p-6 max-w-4xl w-full relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowMap(false)}
              className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#A0522D] to-[#7B4B2A] text-white text-2xl font-bold hover:scale-110 transition-transform shadow-xl flex items-center justify-center"
            >
              ×
            </button>
            <h3 className="text-2xl font-playfair font-bold text-[#7B4B2A] mb-4 flex items-center gap-2">
              <span>📍</span> Our Location - Penukonda
            </h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3853.6926374340475!2d77.5861484146652!3d14.082420991215034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb16e5b8de7c389%3A0x429893fb6e15606f!2sPenukonda%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1682592263695!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-xl shadow-inner"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </MOTION.div>
        </MOTION.div>
      )}

      {/* ======================= WHY CHOOSE US ======================= */}
      <MOTION.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <MOTION.div variants={fadeInUp} className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-playfair font-extrabold bg-gradient-to-r from-[#7B4B2A] to-[#A0522D] text-transparent bg-clip-text mb-4">
            Why Choose Us
          </h3>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#7B4B2A] to-[#A0522D] mx-auto rounded-full"></div>
        </MOTION.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { text: "Over 42 Years of Experience", icon: "🏛️" },
            { text: "Premium Quality Timber", icon: "🌲" },
            { text: "Wide Range of Products", icon: "📦" },
            { text: "Nationwide Delivery", icon: "🚚" },
            { text: "Expert Craftsmanship", icon: "🛠️" },
            { text: "Trusted Family Business", icon: "🤝" },
          ].map((item, idx) => (
            <MOTION.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-[#E5D5C8]"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#A0522D]/20 to-transparent rounded-bl-3xl"></div>
              
              <div className="flex items-start gap-4">
                <MOTION.div 
                  className="text-4xl flex-shrink-0"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    delay: idx * 0.2,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                >
                  {item.icon}
                </MOTION.div>
                <div>
                  <p className="text-lg font-bold text-[#4A3124] group-hover:text-[#A0522D] transition-colors">
                    {item.text}
                  </p>
                </div>
              </div>

              {/* Animated bottom line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#A0522D] to-[#E5B87E] group-hover:w-full transition-all duration-500"></div>
            </MOTION.div>
          ))}
        </div>
      </MOTION.div>

      {/* ======================= GALLERY ======================= */}
      <MOTION.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <MOTION.div variants={fadeInUp} className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-playfair font-extrabold bg-gradient-to-r from-[#7B4B2A] to-[#A0522D] text-transparent bg-clip-text mb-4">
            Gallery
          </h3>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#7B4B2A] to-[#A0522D] mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600  max-w-2xl mx-auto">
            Explore our craftsmanship through these stunning visuals of our timber work and facilities
          </p>
        </MOTION.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <MOTION.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group relative rounded-3xl overflow-hidden shadow-xl transform transition-all duration-500"
            >
              {/* Animated glow ring */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-[#7B4B2A] via-[#A0522D] to-[#E5B87E] rounded-3xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>

              {/* Image container */}
              <div className="relative z-10 rounded-3xl overflow-hidden border-4 border-white/30">
                <img
                  src="/img/sawmill.jpg"
                  alt={`Gallery Image ${i + 1}`}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Number badge */}
                <MOTION.div 
                  className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center font-bold text-[#A0522D] shadow-lg"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  {i + 1}
                </MOTION.div>

                {/* Image title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-semibold text-lg">Gallery Image {i + 1}</p>
                  <p className="text-white/80 text-sm">Our Workshop</p>
                </div>
              </div>
            </MOTION.div>
          ))}
        </div>
      </MOTION.div>
    </div>
  );
}