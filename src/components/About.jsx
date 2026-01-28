import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { motion as MOTION } from "framer-motion";
import ImageCarousel from "./ImageCarousel";
import GalleryModal from "./GalleryModal";
import { furnitureImages, doorImages, poojaImages } from "../data/imageCatalog";

export default function About() {
  const navigate = useNavigate();
  const [activeGallery, setActiveGallery] = useState(null);

  const handleWoodStory = () => {
    navigate("/about-details#our-story");
  };

  const handleExploreProducts = () => {
    navigate("/timber");
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="bg-linear-to-b from-[#FAF3E0] via-[#F5EBDF] to-[#F0E2CF] text-[#4A3124]">
      {/* Our Story & Heritage */}
      <div className="py-16 sm:py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <MOTION.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mb-4 bg-gradient-to-r from-[#8B5E34] to-[#A67C52] bg-clip-text text-transparent">
              Our Story &amp; Heritage
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-[#8B5E34] to-[#A67C52] mx-auto rounded-full mb-12"></div>
          </MOTION.div>

          <div className="grid gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] items-center">
            {/* Left Image */}
            <MOTION.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative group"
            >
              {/* Decorative corners */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-[#8B5E34] rounded-tl-3xl opacity-50"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-[#8B5E34] rounded-br-3xl opacity-50"></div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#D8C6A6] transition-transform duration-300 group-hover:scale-[1.01]">
                <img
                  src="/img/Ourstory_image.png"
                  alt="Craftsman working with timber"
                  className="w-full h-full object-cover"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#8B5E34]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Image caption */}
              <p className="mt-3 text-xs text-[#8B5E34]/70 italic text-center">
                Craftsmanship passed down through generations
              </p>
            </MOTION.div>

            {/* Right Content */}
            <MOTION.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-7 md:space-y-8"
            >
              <MOTION.div variants={fadeInUp}>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold leading-tight text-[#4A3124]">
                  A Legacy Carved in Wood,{" "}
                  <span className="text-[#8B5E34]">Since 1982</span>
                </h3>
                <p className="text-sm text-[#8B5E34]/80 italic mt-1">
                  Four decades of craftsmanship &amp; trust
                </p>
              </MOTION.div>

              {/* Story Content */}
              <MOTION.div variants={fadeInUp} className="space-y-5">
                {/* Our Roots */}
                <div>
                  <span className="block text-sm uppercase tracking-wide text-[#8B5E34]/70 mb-1">
                    Our Roots
                  </span>
                  <p className="text-base sm:text-lg leading-relaxed text-[#6B4E39]">
                    <span className="font-medium text-[#4A3124]">
                      SVM Timber is a family legacy passed down through
                      generations.
                    </span>{" "}
                    What began as a small workshop has grown into a trusted name
                    in premium timber, custom furniture, and architectural
                    woodwork.
                  </p>
                </div>

                {/* Our Philosophy */}
                <div>
                  <span className="block text-sm uppercase tracking-wide text-[#8B5E34]/70 mb-1">
                    Our Philosophy
                  </span>
                  <p className="text-base sm:text-lg leading-relaxed text-[#6B4E39]">
                    With every plank we select and every surface we finish, we
                    honour the timeless beauty, strength, and character of wood
                    — crafted with care to last for decades.
                  </p>
                </div>
              </MOTION.div>

              {/* CTA Buttons */}
              <MOTION.div
                variants={fadeInUp}
                className="flex flex-wrap gap-4 pt-6"
              >
                {/* Primary CTA */}
                <button
                  onClick={handleExploreProducts}
                  className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-[#8B5E34] to-[#A67C52] text-white text-sm sm:text-base font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10">Explore Our Products</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#A67C52] to-[#8B5E34] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                </button>

                {/* Secondary CTA */}
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
          {/* Section Heading */}
          <MOTION.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mb-4 bg-gradient-to-r from-[#8B5E34] to-[#A67C52] bg-clip-text text-transparent">
              The Importance of Quality Wood
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-[#8B5E34] to-[#A67C52] mx-auto rounded-full mb-6"></div>

            <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#6B4E39] leading-relaxed mb-14">
              Quality wood is more than a material — it is the foundation of
              durability, beauty, and long-term value in every space we create.
            </p>
          </MOTION.div>

          {/* Cards */}
          <MOTION.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-8 sm:grid-cols-3"
          >
            {/* Card 1 */}
            <MOTION.div
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E5D5C8] group"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#D8E4C4] to-[#C2D6A4] flex items-center justify-center text-3xl shadow-md mb-5">
                <MOTION.span
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  🌲
                </MOTION.span>
              </div>

              <span className="block text-sm uppercase tracking-wide text-[#8B5E34]/70 mb-2">
                Our Promise
              </span>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[#4A3124] font-playfair group-hover:text-[#8B5E34] transition-colors">
                Sustainably Sourced
              </h3>

              <p className="text-base text-[#6B4E39] leading-relaxed">
                Carefully selected timber sourced responsibly — protecting
                forests while preserving long-term quality.
              </p>

              <p className="mt-3 text-sm text-[#8B5E34] font-medium">
                Best for: Eco-conscious projects
              </p>
            </MOTION.div>

            {/* Card 2 */}
            <MOTION.div
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E5D5C8] group"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#E2D8B8] to-[#D4C49A] flex items-center justify-center text-3xl shadow-md mb-5">
                <MOTION.span
                  animate={{ y: [0, -3, 0] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  🛡️
                </MOTION.span>
              </div>

              <span className="block text-sm uppercase tracking-wide text-[#8B5E34]/70 mb-2">
                Built to Endure
              </span>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[#4A3124] font-playfair group-hover:text-[#8B5E34] transition-colors">
                Durability &amp; Longevity
              </h3>

              <p className="text-base text-[#6B4E39] leading-relaxed">
                Well-seasoned and precisely processed wood — engineered to
                resist warping and perform reliably over time.
              </p>

              <p className="mt-3 text-sm text-[#8B5E34] font-medium">
                Best for: Structural &amp; outdoor use
              </p>
            </MOTION.div>

            {/* Card 3 */}
            <MOTION.div
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E5D5C8] group"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#E5D5C8] to-[#D9C5B5] flex items-center justify-center text-3xl shadow-md mb-5">
                <MOTION.span
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  💚
                </MOTION.span>
              </div>

              <span className="block text-sm uppercase tracking-wide text-[#8B5E34]/70 mb-2">
                Natural Beauty
              </span>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[#4A3124] font-playfair group-hover:text-[#8B5E34] transition-colors">
                A Living Material
              </h3>

              <p className="text-base text-[#6B4E39] leading-relaxed">
                Wood that introduces warmth, texture, and a calming presence —
                enriching interiors with timeless character.
              </p>

              <p className="mt-3 text-sm text-[#8B5E34] font-medium">
                Best for: Interior &amp; lifestyle spaces
              </p>
            </MOTION.div>
          </MOTION.div>

          {/* Section Footer Line */}
          <p className="mt-16 text-center text-lg text-[#8B5E34]/70 italic">
            Chosen with care. Crafted with purpose. Built to endure.
          </p>
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
              {
                title: "Explore Our Products",
                img: "/img/about/craft-1.jpg",
                link: "/timber",
              },
              {
                title: "Custom Furniture",
                img: "/img/about/craft-2.jpg",
                link: null,
              },
              {
                title: "Main Entrance & Bedroom Doors",
                img: "/img/about/craft-3.jpg",
                link: null,
              },
              {
                title: "Pooja Door & Mandir",
                img: "/img/about/craft-4.jpg",
                link: null,
              },
            ].map((card) => (
              <MOTION.div
                key={card.title}
                variants={fadeInUp}
                whileHover={{ y: -15, scale: 1.03 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#8B5E34] to-transparent opacity-20 z-10"></div>

                <div className="h-56 relative bg-[#F5EBDF] overflow-hidden">
                  {/* Explore Products */}
                  {card.title === "Explore Our Products" && (
                    <img
                      src="/img/about/explore-products.jpg"
                      alt={card.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  )}

                  {/* Custom Furniture Gallery */}
                  {card.title === "Custom Furniture" && (
                    <div
                      onClick={() => setActiveGallery(furnitureImages)}
                      className="cursor-pointer"
                    >
                      <ImageCarousel images={furnitureImages} />
                    </div>
                  )}

                  {/* Doors Gallery */}
                  {card.title === "Main Entrance & Bedroom Doors" && (
                    <div
                      onClick={() => setActiveGallery(doorImages)}
                      className="cursor-pointer"
                    >
                      <ImageCarousel images={doorImages} />
                    </div>
                  )}

                  {/* Pooja Gallery */}
                  {card.title === "Pooja Door & Mandir" && (
                    <div
                      onClick={() => setActiveGallery(poojaImages)}
                      className="cursor-pointer"
                    >
                      <ImageCarousel images={poojaImages} />
                    </div>
                  )}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="px-6 py-5 bg-gradient-to-b from-white to-[#FAF3E0] relative">
                  {card.link ? (
                    <button
                      onClick={() => navigate(card.link)}
                      className="group/link relative mx-auto flex items-center gap-2 text-sm sm:text-base md:text-lg font-semibold font-playfair text-[#4A3124] transition-colors hover:text-[#8B5E34] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5E34] focus-visible:ring-offset-2 rounded-md"
                    >
                      <span className="transform transition-transform duration-300 group-hover/link:translate-x-1">
                        →
                      </span>
                      <span>{card.title}</span>

                      <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-[#8B5E34] to-[#A67C52] transition-all duration-300 group-hover/link:w-full"></span>
                    </button>
                  ) : (
                    <p className="text-sm sm:text-base md:text-lg font-semibold font-playfair text-[#4A3124] text-center">
                      {card.title}
                    </p>
                  )}

                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#8B5E34] to-[#A67C52] group-hover:w-3/4 transition-all duration-300 rounded-full"></div>
                </div>
              </MOTION.div>
            ))}
          </MOTION.div>
        </div>
      </div>
      {activeGallery && (
        <GalleryModal
          images={activeGallery}
          onClose={() => setActiveGallery(null)}
        />
      )}
    </section>
  );
}
