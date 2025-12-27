import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion as MOTION } from 'framer-motion';

export default function About() {
  const navigate = useNavigate();

  const handleWoodStory = () => {
    navigate('/about-details#our-story');
  };

  const handleExploreProducts = () => {
    navigate('/timber');
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="bg-linear-to-b from-[#FAF3E0] via-[#F5EBDF] to-[#F0E2CF] text-[#4A3124]">
      {/* Our Story & Heritage */}
      <div className="py-16 sm:py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <MOTION.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-playfair font-bold mb-4 bg-gradient-to-r from-[#8B5E34] to-[#A67C52] bg-clip-text text-transparent">
              Our Story &amp; Heritage
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#8B5E34] to-[#A67C52] mx-auto rounded-full mb-12"></div>
          </MOTION.div>

          <div className="grid gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] items-center">
            {/* Left image with decorative elements */}
            <MOTION.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative group"
            >
              {/* Decorative corner accents */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-[#8B5E34] rounded-tl-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-[#8B5E34] rounded-br-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-[#D8C6A6] transform group-hover:scale-[1.02] transition-transform duration-300">
                <img
                  src="/img/about/craftsman.jpg"
                  alt="Craftsman working with timber"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#8B5E34]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </MOTION.div>

            {/* Right text with enhanced styling */}
            <MOTION.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-6"
            >
              <MOTION.h3 
                variants={fadeInUp}
                className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold leading-tight text-[#4A3124]"
              >
                A Legacy Carved in Wood,{' '}
                <span className="text-[#8B5E34]">Since 1982</span>
              </MOTION.h3>

              <MOTION.div variants={fadeInUp} className="space-y-4">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-[#6B4E39]">
                  SVM Timber is a family legacy passed down for generations. What
                  began as a small workshop has grown into a trusted name in premium
                  timber, custom furniture, and architectural woodwork.
                </p>

                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-[#6B4E39]">
                  With every plank we select and every surface we finish, we honour
                  the timeless beauty, strength, and character of wood—crafted with
                  care to last for decades.
                </p>
              </MOTION.div>

              <MOTION.div 
                variants={fadeInUp}
                className="flex flex-wrap gap-4 pt-4"
              >
                <button 
                  onClick={handleExploreProducts}
                  className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-[#8B5E34] to-[#A67C52] text-white text-sm sm:text-base font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10">Explore Our Products</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#A67C52] to-[#8B5E34] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                </button>
                <button 
                  onClick={handleWoodStory}
                  className="px-8 py-3 rounded-full border-2 border-[#8B5E34] text-[#4A3124] bg-transparent text-sm sm:text-base font-semibold hover:bg-[#8B5E34] hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-xl"
                >
                  Our Story
                </button>
              </MOTION.div>
            </MOTION.div>
          </div>
        </div>
      </div>

      {/* The Importance of Quality Wood */}
      <div className="bg-linear-to-b from-[#F0E2CF] to-[#E5D5C8] py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <MOTION.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-playfair font-bold mb-4 bg-gradient-to-r from-[#8B5E34] to-[#A67C52] bg-clip-text text-transparent">
              The Importance of Quality Wood
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#8B5E34] to-[#A67C52] mx-auto rounded-full mb-14"></div>
          </MOTION.div>

          <MOTION.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-8 sm:grid-cols-3 text-center"
          >
            {/* Card 1 */}
            <MOTION.div 
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E5D5C8] group"
            >
              <MOTION.div 
                className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#D8E4C4] to-[#C2D6A4] flex items-center justify-center text-3xl shadow-md mb-4 relative overflow-hidden"
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <MOTION.span
                  animate={{ 
                    rotate: [0, 5, -5, 5, 0],
                    scale: [1, 1.1, 1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  🌲
                </MOTION.span>
                {/* Animated ring */}
                <MOTION.div
                  className="absolute inset-0 rounded-full border-2 border-[#8B5E34]"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
              </MOTION.div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 text-[#4A3124] font-playfair group-hover:text-[#8B5E34] transition-colors">
                Sustainably Sourced
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-[#6B4E39] leading-relaxed">
                Carefully selected timber from responsible sources, with respect
                for forests and future generations.
              </p>
            </MOTION.div>

            {/* Card 2 */}
            <MOTION.div 
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E5D5C8] group"
            >
              <MOTION.div 
                className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#E2D8B8] to-[#D4C49A] flex items-center justify-center text-3xl shadow-md mb-4 relative overflow-hidden"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <MOTION.span
                  animate={{ 
                    y: [0, -3, 0],
                    rotateZ: [0, -5, 5, 0]
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  🛡️
                </MOTION.span>
                {/* Pulse effect */}
                <MOTION.div
                  className="absolute inset-0 rounded-full bg-[#8B5E34]"
                  animate={{ 
                    scale: [0.8, 1.3],
                    opacity: [0.4, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
              </MOTION.div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 text-[#4A3124] font-playfair group-hover:text-[#8B5E34] transition-colors">
                Durability &amp; Longevity
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-[#6B4E39] leading-relaxed">
                Well-seasoned, precisely processed wood that resists warping and
                is built to last.
              </p>
            </MOTION.div>

            {/* Card 3 */}
            <MOTION.div 
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E5D5C8] group"
            >
              <MOTION.div 
                className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#E5D5C8] to-[#D9C5B5] flex items-center justify-center text-3xl shadow-md mb-4 relative overflow-hidden"
                whileHover={{ 
                  scale: [1, 1.2, 1.1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 0.5 }}
              >
                <MOTION.span
                  animate={{ 
                    scale: [1, 1.15, 1],
                    rotate: [0, -10, 10, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  💚
                </MOTION.span>
                {/* Expanding ripple */}
                <MOTION.div
                  className="absolute inset-0 rounded-full border-2 border-green-500"
                  animate={{ 
                    scale: [0.8, 1.4],
                    opacity: [0.6, 0]
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
                <MOTION.div
                  className="absolute inset-0 rounded-full border-2 border-green-400"
                  animate={{ 
                    scale: [0.8, 1.4],
                    opacity: [0.6, 0]
                  }}
                  transition={{ 
                    duration: 2.5,
                    delay: 0.5,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
              </MOTION.div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 text-[#4A3124] font-playfair group-hover:text-[#8B5E34] transition-colors">
                A Living Material
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-[#6B4E39] leading-relaxed">
                Wood that brings warmth, character, and a sense of calm into
                every space it touches.
              </p>
            </MOTION.div>
          </MOTION.div>
        </div>
      </div>

      {/* Our Craftsmanship */}
      <div className="bg-linear-to-b from-[#E5D5C8] to-[#F5EBDF] py-16 sm:py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <MOTION.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-playfair font-bold mb-4 bg-gradient-to-r from-[#8B5E34] to-[#A67C52] bg-clip-text text-transparent">
              Our Craftsmanship
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#8B5E34] to-[#A67C52] mx-auto rounded-full mb-14"></div>
          </MOTION.div>

          <MOTION.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              { title: 'Premium Timber & Wood', img: '/img/about/craft-1.jpg' },
              { title: 'Custom Furniture', img: '/img/about/craft-2.jpg' },
              { title: 'Main Entrance Doors', img: '/img/about/craft-3.jpg' },
              { title: 'Pooja Door & Mandir', img: '/img/about/craft-4.jpg' },
            ].map((card, index) => (
              <MOTION.div
                key={card.title}
                variants={fadeInUp}
                whileHover={{ y: -15, scale: 1.03 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Decorative corner element */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#8B5E34] to-transparent opacity-20 z-10"></div>
                
                <div className="h-48 sm:h-52 lg:h-56 overflow-hidden relative">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Number badge */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center font-bold text-[#8B5E34] shadow-md">
                    {index + 1}
                  </div>
                </div>
                
                <div className="px-6 py-5 bg-gradient-to-b from-white to-[#FAF3E0] relative">
                  <p className="text-sm sm:text-base md:text-lg font-semibold font-playfair text-[#4A3124] text-center group-hover:text-[#8B5E34] transition-colors">
                    {card.title}
                  </p>
                  
                  {/* Decorative line */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#8B5E34] to-[#A67C52] group-hover:w-3/4 transition-all duration-300 rounded-full"></div>
                </div>
              </MOTION.div>
            ))}
          </MOTION.div>
        </div>
      </div>
    </section>
  );
}