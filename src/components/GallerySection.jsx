import React, { useState } from "react";
import { motion as MOTION, AnimatePresence } from "framer-motion";
import { X, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";

import log1 from "../assets/about/log1.jpg";
import log2 from "../assets/about/log2.jpg";
import log3 from "../assets/about/log3.jpg";
import log4 from "../assets/about/log1.jpg";
import log5 from "../assets/about/log2.jpg";
import log6 from "../assets/about/log3.jpg";
import log7 from "../assets/about/log1.jpg";
import log8 from "../assets/about/log2.jpg";
import log9 from "../assets/about/log3.jpg";
import log10 from "../assets/about/log1.jpg";

const images = [
  { id: 1, src: log1, alt: "Gallery Image 1" },
  { id: 2, src: log2, alt: "Gallery Image 2" },
  { id: 3, src: log3, alt: "Gallery Image 3" },
  { id: 4, src: log4, alt: "Gallery Image 4" },
  { id: 5, src: log5, alt: "Gallery Image 5" },
  { id: 6, src: log6, alt: "Gallery Image 6" },
  { id: 7, src: log7, alt: "Gallery Image 7" },
  { id: 8, src: log8, alt: "Gallery Image 8" },
  { id: 9, src: log9, alt: "Gallery Image 9" },
  { id: 10, src: log10, alt: "Gallery Image 10" },
];

export default function GallerySection() {
  const ITEMS_PER_PAGE = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  const totalPages = Math.ceil(images.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentImages = images.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((p) => p + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((p) => p - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNextImage = () => {
    const index = images.findIndex((img) => img.id === selectedImage.id);
    setSelectedImage(images[(index + 1) % images.length]);
  };

  const handlePrevImage = () => {
    const index = images.findIndex((img) => img.id === selectedImage.id);
    setSelectedImage(images[(index - 1 + images.length) % images.length]);
  };

  return (
    <div className="min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">

        {/* HEADER */}
        <MOTION.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-20"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
            Gallery
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-xl">
            Craftsmanship meets nature in every frame
          </p>
        </MOTION.div>

        {/* GRID — MOBILE FIX APPLIED */}
        <AnimatePresence mode="wait">
          <MOTION.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {currentImages.map((image, i) => (
              <MOTION.div
                key={image.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: i * 0.08 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedImage(image)}
                onMouseEnter={() => setHoveredId(image.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative bg-[#0E0E0E] p-2 rounded-[28px] shadow-xl shadow-black/30">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-auto object-cover rounded-[22px]"
                  />

                  <div
                    className={`absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm rounded-[28px] transition-opacity duration-300 ${
                      hoveredId === image.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="bg-white/90 rounded-full p-4">
                      <Maximize2 className="w-6 h-6 text-black" />
                    </div>
                  </div>
                </div>
              </MOTION.div>
            ))}
          </MOTION.div>
        </AnimatePresence>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="mt-16 flex justify-center gap-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="px-6 py-3 rounded-full bg-white shadow disabled:opacity-40"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow disabled:opacity-40"
            >
              <ChevronRight />
            </button>
          </div>
        )}
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <MOTION.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 bg-white/10 p-3 rounded-full"
            >
              <X className="text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevImage();
              }}
              className="absolute left-6 bg-white/10 p-3 rounded-full"
            >
              <ChevronLeft className="text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
              className="absolute right-6 bg-white/10 p-3 rounded-full"
            >
              <ChevronRight className="text-white" />
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-2xl"
            />
          </MOTION.div>
        )}
      </AnimatePresence>
    </div>
  );
}
