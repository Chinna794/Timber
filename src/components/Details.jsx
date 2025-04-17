import React, { useRef, useState, useEffect } from 'react';
import { motion as MOTION, useInView } from 'framer-motion';

export default function Details() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [showMap, setShowMap] = useState(false); 
  
  useEffect(() => {
    const hash = window.location.hash;
    
    if (hash === '#our-story') {
      // Prevent default scroll behavior
      window.history.scrollRestoration = 'manual';
      
      // Immediately set scroll position to prevent flashing of other content
      window.scrollTo(0, 0);
      
      // Then scroll to the correct position after a short delay
      setTimeout(() => {
        const element = document.getElementById('our-story');
        if (element) {
          const yOffset = -150; // Adjust as needed
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({top: y, behavior: 'smooth'});
        }
      }, 100);
    }
  }, []);
  return (
    <div className="bg-amber-50 dark:bg-gray-900 px-6 pt-32 pb-20 space-y-32">
      {/* ======================= OUR STORY ======================= */}
      <div id="our-story" className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT: Overlapping Images */}
        <div className="w-full relative h-96 md:h-[500px]">
          <div className="absolute top-0 left-0 w-64 h-64 md:w-80 md:h-80 border border-gray-300 z-10 rounded-xl shadow-lg overflow-hidden">
            <img src="/img/sawmill.jpg" alt="Raw timber logs" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-1/4 right-0 w-64 h-64 md:w-80 md:h-80 border border-gray-300 z-20 rounded-xl shadow-lg overflow-hidden">
            <img src="/img/sawmill.jpg" alt="Sawmill at SVM Timbers" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-0 left-1/4 w-64 h-64 md:w-80 md:h-80 border border-gray-300 z-30 rounded-xl shadow-lg overflow-hidden">
            <img src="/img/sawmill.jpg" alt="Processed timber planks" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* RIGHT: Our Story Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-playfair font-extrabold bg-gradient-to-r from-[#7B4B2A] to-[#A0522D] text-transparent bg-clip-text mb-6">
            Our Story
          </h2>

          <div className="inline-block bg-[#A0522D] text-white text-base md:text-lg font-semibold px-6 py-2 rounded-full mb-6 shadow-md">
            Founded in 1982
          </div>

          <div className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed space-y-6">
            <div ref={ref}>
              <MOTION.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <p className="first-letter:text-5xl first-letter:float-left first-letter:font-bold first-letter:mr-2 first-letter:text-[#A0522D]">
                  Sri Vishnu Maheshwara Timber (SVMT) stands as a proud sub-branch of Sri Venkateswara Saw Mill cum Depot, delivering premium hardwood timber of exceptional quality for over four decades.
                </p>
              </MOTION.div>
            </div>

            <p>
              As an independent family business rooted in the heart of India, we've established our presence across Andhra Pradesh and Karnataka, serving clients nationwide and beyond.
            </p>

            <p>
              Our fully operational sawmill in{' '}
              <span
                onClick={() => setShowMap(true)}
                className="text-[#A0522D]  hover:text-[#7B4B2A] cursor-pointer transition duration-200"
              >
                Penukonda
              </span>
              , Andhra Pradesh serves as our central hub, allowing us to craft bespoke timber solutions and ensure prompt delivery throughout India.
            </p>

            <p>
              What truly sets SVMT apart is our unwavering commitment to quality, our extensive range of timber products, and our personalized service approach.
            </p>

            <p>
              Whether you're undertaking a major commercial project or a smaller personal endeavor, SVMT brings over 42 years of timber expertise to every piece we deliver.
            </p>

            {/* Decorative Quote */}
            <div className="relative mt-10">
              <div className="absolute top-[-20px] left-0 w-12 h-1 bg-[#A0522D] rounded-full"></div>
              <div className="border-l-4 border-[#A0522D] pl-6 italic text-[#7B4B2A] font-medium text-xl">
                "Crafting quality timber with tradition, passion, and precision."
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= MODAL ======================= */}
      {showMap && (
        <div className="fixed inset-0 bg-opacity-70 z-50 flex items-center justify-center px-4">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-4 max-w-3xl w-full relative shadow-2xl">
            <button
              onClick={() => setShowMap(false)}
              className="absolute top-2 right-4 text-3xl font-bold text-gray-600 dark:text-gray-300 hover:text-red-500"
            >
              &times;
            </button>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3853.6926374340475!2d77.5861484146652!3d14.082420991215034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb16e5b8de7c389%3A0x429893fb6e15606f!2sPenukonda%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1682592263695!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      )}

      {/* ======================= ACHIEVEMENTS ======================= */}
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-playfair font-extrabold text-[#7B4B2A] mb-10">
          Our Achievements
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Over 42 Years of Legacy",
            "100+ Major Projects Delivered",
            "ISO 9001:2015 Certified",
            "Pan-India Logistics Network",
            "Awarded Best Timber Depot 2023",
            "Trusted by 200+ Businesses",
          ].map((item, idx) => (
            <MOTION.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md"
            >
              <p className="text-lg font-semibold text-[#A0522D]">{item}</p>
            </MOTION.div>
          ))}
        </div>
      </div>

      {/* ======================= GALLERY ======================= */}
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-playfair font-extrabold text-[#7B4B2A] mb-10">
          Gallery
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[...Array(6)].map((_, i) => (
            <MOTION.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-[2.5rem] overflow-hidden shadow-xl transform transition duration-500 hover:scale-[1.02]"
            >
              {/* Glow Ring */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-[#7B4B2A] via-[#A0522D] to-[#E5B87E] rounded-[2.5rem] blur-md opacity-25 group-hover:opacity-40 transition duration-500"></div>

              {/* Image Mask */}
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden">
                <img
                  src="/img/sawmill.jpg"
                  alt={`Gallery Image ${i + 1}`}
                  className="w-full h-64 object-cover transition duration-500 group-hover:scale-110 group-hover:rotate-1"
                />
              </div>
            </MOTION.div>
          ))}
        </div>
      </div>
    </div>
  );
}
     