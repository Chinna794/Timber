import React, { useState, useEffect } from "react";
import { motion as MOTION } from "framer-motion";
import ZoomViewer from "./ZoomViewer";

// Luxury theme pack
const luxury = {
  bg: "bg-[#F8F4EF] dark:bg-[#231915]",
  heading: "text-[#674C28] dark:text-[#FFD700]",
  tabActive:
    "from-[#BFA77A] to-[#D8C69C] text-black dark:from-[#FFD700] dark:to-[#DAA520] dark:text-black",
  tabInactive:
    "bg-white text-[#5A4A30] border-[#CBB27D] dark:bg-[#1C1C1C] dark:text-[#EADCA6] dark:border-[#7F6E3C] hover:ring-yellow-500",
  cardBg:
    "bg-[#FFFDF8]/70 dark:bg-[#1B1B1B]/80 border-[#EADCA6] dark:border-[#5F4E2A]",
  gradientBox:
    "from-[#F0E5CF] via-[#E5D4B7] to-[#D9C7A5] dark:from-[#3B2C1A] dark:via-[#2A1F12] dark:to-[#1C140A]",
  textMain: "text-[#4A3B21] dark:text-[#FAF3E0]",
  textSub: "text-[#7A684A] dark:text-[#D6C49A]",
  textLabel: "text-[#5F4E2A] dark:text-[#FFEBC1]",
};

// Timber Data

const timberData = {
  "Burma Teak": {
    description:
      "Burma teak, known for its high quality and durability, is prized for its exceptional oil content, which provides natural resistance to water, decay, and pests. This wood is also known for its strength, straight grain, and ability to resist splitting, cracking, and weathering. It's a popular choice for outdoor furniture, decking, and boat decks.",
    images: [
      "/img/Burma/Burma Teak Cut Sizes.jpeg",
      "/img/Burma/Burma Teak Cut Sizes1.jpeg",
      "/img/Burma/Burma Teak logs.jpeg",
    ],
    name: "Burma Teak",
    benefits: [
      "Water Resistant",
      "Decay Resistant",
      "Strong Grain",
      "Premium Quality",
    ],
    origin: "Myanmar (formerly Burma)",
    applications: ["Outdoor Furniture", "Boat Building", "Luxury Interiors"],
    available: true,
  },
  "Hunsur Teak": {
    description:
      "Hunsur teak is valued for its golden-brown color and straight grain. Sourced from Karnataka, India, it's used in traditional Indian carpentry and known for moderate durability, workability, and smooth finish.",
    images: [
      "/img/Hunsur/Hunsur Teak Cut Sizes.jpeg",
      "/img/Hunsur/Hunsur Teak Logs1.jpeg",
      "/img/Hunsur/Hunsur Teak Logs.jpeg",
    ],
    name: "Hunsur Teak",
    benefits: [
      "Smooth Finish",
      "Traditional Appeal",
      "Golden-Brown Color",
      "Good Workability",
    ],
    origin: "Karnataka, India",
    applications: ["Traditional Carpentry", "Indoor Furniture", "Cabinetry"],
    available: true,
  },

  "Balharshah Teak": {
    description:
      "Balharshah teak offers a cost-effective option with reasonable strength and a straight, even texture. Often used in utility-grade furniture, it's a versatile choice for various woodworking projects.",
    images: [
      "/img/Balharshah/Balharshah Teak Cut Sizes.jpeg",
      "/img/Balharshah/Balharshah Teak Logs1.jpeg",
      "/img/Balharshah/Balharshah Teak Logs.jpeg",
    ],
    name: "Balharshah Teak",
    benefits: [
      "Cost-Effective",
      "Versatile",
      "Even Texture",
      "Reasonable Strength",
    ],
    origin: "Maharashtra, India",
    applications: [
      "Utility Furniture",
      "General Woodworking",
      "Budget Projects",
    ],
    available: true,
  },
  "Mysore Honne": {
    description:
      "Mysore Honne is highly regarded for its unique characteristics and is sourced from the Mysore region in Karnataka, India. It features a beautiful golden hue and excellent workability, making it suitable for premium furniture and interior wood paneling.",
    images: [
      "/img/Mysore/Mysore Honee Log.jpeg",
      "/img/Mysore/Mysore Honne Cut.jpeg",
      "/img/Mysore/Mysore Honne Cut1.jpeg",
    ],
    name: "Mysore Teak",
    benefits: [
      "Beautiful Hue",
      "Excellent Workability",
      "Premium Finish",
      "Unique Character",
    ],
    origin: "Mysore, Karnataka, India",
    applications: [
      "Premium Furniture",
      "Interior Paneling",
      "Decorative Elements",
    ],
    available: true,
  },
  "Mathi Logs": {
    description:
      "Mathi wood is highly durable and traditionally used in South Indian architecture for its strength. It's ideal for doors, windows, and structural timber due to its workability.",
    images: [
      "/img/Matti/Matti wood Cut Sizes.jpeg",
      "/img/Matti/Matti Wood Logs.jpeg",
    ],
    name: "Mathi Logs",
    benefits: [
      "High Durability",
      "Architectural Strength",
      "Traditional Value",
      "Good Workability",
    ],
    origin: "South India",
    applications: [
      "Doors",
      "Windows",
      "Structural Elements",
      "Traditional Architecture",
    ],
    available: true,
  },
  "Malaysia Teak": {
    description:
      "Malaysia teak, known for its rich color variations and dense grain pattern, is sourced from sustainably managed forests in Malaysia. It offers excellent weather resistance and natural oils that protect against insects.",
    name: "Malaysia Teak",
    benefits: [
      "Weather Resistant",
      "Rich Color",
      "Dense Grain",
      "Insect Resistant",
    ],
    origin: "Malaysia",
    applications: ["Outdoor Structures", "Garden Furniture", "Decking"],
    available: false,
  },
  "Indonesia Teak": {
    description:
      "Indonesia teak is highly valued for its beautiful golden-brown color that darkens with age. Sourced from the Indonesian archipelago, it's known for its tight grain pattern and natural oils that provide weather resistance.",
    name: "Indonesia Teak",
    benefits: [
      "Weather Resistant",
      "Aging Character",
      "Tight Grain",
      "Natural Luster",
    ],
    origin: "Indonesia",
    applications: [
      "Luxury Furniture",
      "Marine Applications",
      "Architectural Details",
    ],
    available: false,
  },
  "Kerala Honne": {
    description:
      "Kerala Honne is sourced from the Western Ghats of Kerala and features a rich reddish-brown color with distinctive grain patterns. It's valued for its moderate hardness and excellent finishing qualities.",
    name: "Kerala Honne",
    benefits: [
      "Rich Color",
      "Distinctive Grain",
      "Good Finishing",
      "Moderate Hardness",
    ],
    origin: "Kerala, India",
    applications: ["Furniture", "Interior Paneling", "Handicrafts"],
    available: false,
  },
  "Australia Honne": {
    description:
      "Australia Honne is a premium imported variety known for its exceptional durability and resistance to rot and insects. It features a deep, consistent color and fine grain structure.",
    name: "Australia Honne",
    benefits: [
      "Superior Durability",
      "Rot Resistant",
      "Consistent Color",
      "Fine Grain",
    ],
    origin: "Australia",
    applications: ["High-end Furniture", "Flooring", "Structural Elements"],
    available: true,
  },
};

const productHierarchy = {
  Teak: {
    Indian: ["Hunsur Teak", "Balharshah Teak"],
    Imported: ["Burma Teak", "Malaysia Teak", "Indonesia Teak"],
  },
  Honne: {
    Indian: ["Mysore Honne", "Kerala Honne"],
    Imported: ["Australia Honne"],
  },
  "Mathi Wood": {
    Quality: ["Mathi Logs"],
  },
};

const categoryLocalNames = {
  Teak: "Sagwan",
  Honne: "Ponna, Vegi, Bija",
  "Mathi Wood": "Saja, Mathi",
};

// Custom icons using SVG
const Icons = {
  Teak: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-5 h-5"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M7 2v20M17 2v20M3 7h18M3 17h18" strokeLinecap="round" />
    </svg>
  ),
  Honne: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-5 h-5"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        d="M5 22c1.5-1.5 3-3 7-3s5.5 1.5 7 3M5 2c1.5 1.5 3 3 7 3s5.5-1.5 7-3M12 2v20"
        strokeLinecap="round"
      />
    </svg>
  ),
  "Mathi Wood": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-5 h-5"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        d="M12 2C13.1046 2 14 2.89543 14 4V5H15C16.1046 5 17 5.89543 17 7C17 7.55228 16.7761 8.05228 16.4142 8.41421L15 9.82843V11H17C18.1046 11 19 11.8954 19 13C19 13.5523 18.7761 14.0523 18.4142 14.4142L16 16.8284V18H8V16.8284L5.58579 14.4142C5.22386 14.0523 5 13.5523 5 13C5 11.8954 5.89543 11 7 11H9V9.82843L7.58579 8.41421C7.22386 8.05228 7 7.55228 7 7C7 5.89543 7.89543 5 9 5H10V4C10 2.89543 10.8954 2 12 2Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 18V22" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export default function TimberProducts() {
  const [mainCategory, setMainCategory] = useState("Teak");
  const [subCategory, setSubCategory] = useState("Indian");
  const [finalProduct, setFinalProduct] = useState("Hunsur Teak");
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [modalType, setModalType] = useState(null);

  useEffect(() => {
    setActiveImageIndex(0);

    if (isFirstLoad) {
      setTimeout(() => setIsFirstLoad(false), 1000);
    }
  }, [finalProduct, isFirstLoad]);

  const updateMainCategory = (category) => {
    setMainCategory(category);
    const subKeys = Object.keys(productHierarchy[category]);
    const firstSub = subKeys[0];

    // Find first available product in the subcategory
    const availableProduct =
      productHierarchy[category][firstSub].find(
        (product) => timberData[product]?.available
      ) || productHierarchy[category][firstSub][0];

    setSubCategory(firstSub);
    setFinalProduct(availableProduct);
  };

  const updateSubCategory = (subcategory) => {
    // Find first available product in the subcategory
    const availableProduct =
      productHierarchy[mainCategory][subcategory].find(
        (product) => timberData[product]?.available
      ) || productHierarchy[mainCategory][subcategory][0];

    setSubCategory(subcategory);
    setFinalProduct(availableProduct);
  };

  // Get only available products from the current subcategory
  const availableProducts = productHierarchy[mainCategory][subCategory].filter(
    (product) => timberData[product]?.available
  );

  // Get non-available products from the current subcategory
  const nonAvailableProducts = productHierarchy[mainCategory][
    subCategory
  ].filter((product) => !timberData[product]?.available);

  const currentData = timberData[finalProduct];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section
      className={`py-16 px-4 max-w-7xl mx-auto font-display ${luxury.bg} ${luxury.textMain}`}
    >
      <MOTION.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl tracking-tight font-bold mb-4">
          <span className={`${luxury.heading}`}>Timber Collection</span>
        </h2>
        <p className={`${luxury.textSub} max-w-xl mx-auto`}>
          Explore our curated selection of premium timber products, sourced from
          the finest locations around the world.
        </p>
      </MOTION.div>

      {/* Category Navigation */}
      <div className="mb-12 max-w-5xl mx-auto">
        <div
          className={`${luxury.cardBg} rounded-2xl shadow-xl overflow-hidden border`}
        >
          {/* Main Category Tabs */}
          <div className="flex border-b border-[#EADCA6] dark:border-[#5F4E2A]">
            {Object.keys(productHierarchy).map((category) => (
              <button
                key={category}
                onClick={() => updateMainCategory(category)}
                className={`flex-1 text-center py-5 px-6 transition-all duration-300 flex items-center justify-center gap-2 ${
                  mainCategory === category
                    ? `bg-gradient-to-r ${luxury.tabActive} border-b-2 border-[#674C28] dark:border-[#FFD700] font-medium`
                    : `${luxury.tabInactive} hover:bg-[#F0E5CF]/40 dark:hover:bg-[#3B2C1A]/40`
                }`}
              >
                <span
                  className={
                    mainCategory === category
                      ? "text-black dark:text-black"
                      : "text-[#674C28] dark:text-[#EADCA6]"
                  }
                >
                  {Icons[category]}
                </span>
                <span className="text-sm leading-tight">
                  {category}{" "}
                  <span
                    className="text-[11px] italic block md:inline text-[#7A684A] dark:text-[#D6C49A]"
                    style={{ color: "#7A684A" }}
                  >
                    ({categoryLocalNames[category]})
                  </span>
                </span>
              </button>
            ))}
          </div>

          {/* Sub Category & Final Product Selection */}
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#EADCA6] dark:divide-[#5F4E2A]">
            {/* Sub Category Pills */}
            <div className="p-6 bg-gradient-to-b from-[#F0E5CF]/50 to-[#FFFDF8]/50 dark:from-[#3B2C1A]/50 dark:to-[#1B1B1B]/50">
              <h3
                className={`text-sm font-semibold ${luxury.textLabel} mb-4 flex items-center`}
              >
                <span className="w-1 h-6 bg-[#BFA77A] dark:bg-[#FFD700] rounded mr-2"></span>
                Select Type
              </h3>
              <div className="flex flex-col gap-2">
                {Object.keys(productHierarchy[mainCategory]).map((sub) => (
                  <button
                    key={sub}
                    onClick={() => updateSubCategory(sub)}
                    className={`px-5 py-3 rounded-lg text-sm transition-all flex justify-between items-center ${
                      subCategory === sub
                        ? "bg-gradient-to-r from-[#BFA77A] to-[#D8C69C] dark:from-[#FFD700] dark:to-[#DAA520] text-black shadow-md"
                        : "bg-white dark:bg-[#1C1C1C] text-[#5A4A30] dark:text-[#EADCA6] border border-[#CBB27D] dark:border-[#7F6E3C] hover:border-[#BFA77A] dark:hover:border-[#DAA520]"
                    }`}
                  >
                    <span>{sub}</span>
                    <span
                      className={`text-xs rounded-full px-2 py-0.5 ${
                        subCategory === sub
                          ? "bg-white/20 text-black"
                          : "bg-[#F0E5CF] dark:bg-[#3B2C1A] text-[#674C28] dark:text-[#EADCA6]"
                      }`}
                    >
                      {
                        productHierarchy[mainCategory][sub].filter(
                          (product) => timberData[product]?.available
                        ).length
                      }
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Final Products Container */}
            <div className="p-6 col-span-2">
              <h3
                className={`text-sm font-semibold ${luxury.textLabel} mb-4 flex items-center`}
              >
                <span className="w-1 h-6 bg-[#BFA77A] dark:bg-[#FFD700] rounded mr-2"></span>
                Available Products
              </h3>

              {/* Available Products Grid */}
              {availableProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {availableProducts.map((product) => (
                    <MOTION.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      key={product}
                      onClick={() => setFinalProduct(product)}
                      className={`rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                        finalProduct === product
                          ? "ring-2 ring-[#BFA77A] dark:ring-[#FFD700] shadow-lg"
                          : "shadow-sm border border-[#EADCA6] dark:border-[#5F4E2A] hover:shadow-md"
                      }`}
                    >
                      <div className="h-24 flex items-center justify-between bg-gradient-to-r from-[#BFA77A] to-[#D8C69C] dark:from-[#FFD700] dark:to-[#DAA520] p-4">
                        <h3 className="text-black font-medium">{product}</h3>
                        <span
                          className={`text-xs bg-white/20 text-black rounded-full px-2 py-1 ${
                            finalProduct === product ? "bg-white/30" : ""
                          }`}
                        >
                          {finalProduct === product ? "Selected" : "Select"}
                        </span>
                      </div>
                      <div className="p-4 bg-white dark:bg-[#1C1C1C] border-t border-[#EADCA6]/30 dark:border-[#5F4E2A]/30">
                        <p className="text-xs text-[#7A684A] dark:text-[#D6C49A] line-clamp-2">
                          {timberData[product]?.description.substring(0, 100)}
                          ...
                        </p>
                      </div>
                    </MOTION.div>
                  ))}
                </div>
              ) : (
                <div className="bg-[#F0E5CF]/30 dark:bg-[#3B2C1A]/30 rounded-lg p-4 text-center">
                  <p className={`${luxury.textSub} text-sm`}>
                    No available products in this category
                  </p>
                </div>
              )}

              {/* Non-Available Products List */}
              {nonAvailableProducts.length > 0 && (
                <div className="mt-6 pt-6 border-t border-[#EADCA6]/50 dark:border-[#5F4E2A]/50">
                  <h4
                    className={`text-sm font-medium ${luxury.textLabel} mb-3`}
                  >
                    Coming Soon
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {nonAvailableProducts.map((product) => (
                      <span
                        key={product}
                        className="px-3 py-1 text-xs rounded-full bg-[#F0E5CF]/50 dark:bg-[#3B2C1A]/50 text-[#7A684A] dark:text-[#D6C49A] border border-[#EADCA6]/30 dark:border-[#5F4E2A]/30"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Product Display */}
      {currentData && (
        <div
          className="relative -mx-4 md:-mx-0 rounded-2xl overflow-hidden bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('${
              currentData.images?.[activeImageIndex]
                ? currentData.images[activeImageIndex].startsWith("/")
                  ? currentData.images[activeImageIndex]
                  : "/" + currentData.images[activeImageIndex]
                : "/img/bg/about-bg.jpeg"
            }')`,
          }}
        >
          {/* Background overlay for better contrast */}
          <div className="absolute inset-0 bg-black/30 dark:bg-black/50 pointer-events-none" />

          {/* Card Content */}
          <div className="relative z-10 p-6 md:p-12 max-w-7xl mx-auto">
            <MOTION.div
              className={`${luxury.cardBg} rounded-2xl shadow-2xl overflow-hidden border`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              layout
              key={currentData.name}
            >
              <div
                className={`bg-gradient-to-r ${luxury.gradientBox} text-[#4A3B21] dark:text-[#FAF3E0] p-6 md:p-10`}
              >
                <div className="max-w-4xl mx-auto">
                  <span className="inline-block px-3 py-1 bg-[#4A3B21]/20 dark:bg-[#FAF3E0]/20 text-[#4A3B21] dark:text-[#FAF3E0] rounded-full text-xs font-medium mb-4">
                    {mainCategory} / {subCategory}
                  </span>
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                      <h3 className="text-3xl font-bold mb-2">
                        {currentData.name}
                      </h3>
                      <p className="text-[#7A684A] dark:text-[#D6C49A]">
                        {currentData.origin}
                      </p>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {currentData.applications?.slice(0, 3).map((app, i) => (
                        <span
                          key={i}
                          className="text-xs bg-[#4A3B21]/10 dark:bg-[#FAF3E0]/10 px-3 py-1 rounded-full border border-[#4A3B21]/20 dark:border-[#FAF3E0]/20"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-w-6xl mx-auto px-6 py-10">
                <div className="grid md:grid-cols-5 gap-8">
                  {/* Product Gallery */}
                  <div className="md:col-span-3 order-2 md:order-1">
                    {currentData.images ? (
                      <>
                        {/* Main Image */}
                        <div
                          className="relative rounded-xl overflow-hidden aspect-video bg-[#F0E5CF] dark:bg-[#3B2C1A] shadow-inner mb-4 cursor-pointer"
                          onClick={() => setModalType("image")} // Open modal on click
                        >
                          <img
                            src={currentData.images[activeImageIndex]}
                            alt={`Product ${activeImageIndex + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Thumbnails */}
                        <div className="flex gap-2 pb-2">
                          {currentData.images.map((img, i) => (
                            <button
                              key={i}
                              onClick={() => setActiveImageIndex(i)}
                              className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all ${
                                i === activeImageIndex
                                  ? "ring-2 ring-[#BFA77A] dark:ring-[#FFD700] opacity-100"
                                  : "opacity-70 hover:opacity-100"
                              }`}
                            >
                              <img
                                src={img}
                                alt={`Thumbnail ${i + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </button>
                          ))}
                        </div>

                        {/* Modal / Popup */}
                        {modalType === "image" && (
                          <div
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
                            onClick={() => setModalType(null)}
                          >
                            <div
                              className="relative w-[50vw] h-[50vh] flex items-center justify-center"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {/* Close Button */}
                              <button
                                className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-gray-300 transition-colors"
                                onClick={() => setModalType(null)}
                              >
                                &times;
                              </button>

                              {/* Zoomable Image */}
                              <div className="w-full h-full flex items-center justify-center">
                                <ZoomViewer
                                  src={currentData.images[activeImageIndex]}
                                  zoom={2.5}
                                  className="w-full h-full object-contain rounded-lg shadow-xl"
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="rounded-xl overflow-hidden aspect-video bg-[#F0E5CF] dark:bg-[#3B2C1A] shadow-inner flex items-center justify-center">
                        <p className="text-[#7A684A] dark:text-[#D6C49A] text-center px-6">
                          {currentData.available
                            ? "Product images coming soon"
                            : "This product is currently not available"}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <MOTION.div
                    className="md:col-span-2 order-1 md:order-2"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <MOTION.div
                      variants={itemVariants}
                      className="mb-6 bg-[#F0E5CF]/50 dark:bg-[#3B2C1A]/50 p-5 rounded-xl border border-[#EADCA6] dark:border-[#5F4E2A]"
                    >
                      <h4 className={`${luxury.textLabel} font-medium mb-3`}>
                        Description
                      </h4>
                      <p
                        className={`${luxury.textMain} leading-relaxed text-sm`}
                      >
                        {currentData.description}
                      </p>
                    </MOTION.div>

                    <MOTION.div variants={itemVariants} className="mb-6">
                      <h4
                        className={`${luxury.textLabel} font-medium mb-3 flex items-center`}
                      >
                        <svg
                          className="w-4 h-4 mr-1"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            d="M5 13l4 4L19 7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Key Benefits
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {currentData.benefits?.map((benefit, i) => (
                          <div
                            key={i}
                            className={`flex items-center gap-2 text-sm ${luxury.textMain}`}
                          >
                            <span className="w-1.5 h-1.5 bg-[#BFA77A] dark:bg-[#FFD700] rounded-full"></span>
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </MOTION.div>

                    <MOTION.div variants={itemVariants} className="mb-6">
                      <h4
                        className={`${luxury.textLabel} font-medium mb-3 flex items-center`}
                      >
                        <svg
                          className="w-4 h-4 mr-1"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Applications
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {currentData.applications?.map((app, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full text-xs bg-[#F0E5CF] dark:bg-[#3B2C1A] text-[#5F4E2A] dark:text-[#EADCA6]"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </MOTION.div>

                    <MOTION.div variants={itemVariants}>
                      {currentData.available ? (
                        <button
                          onClick={() => {
                            const contactSection =
                              document.getElementById("contact");
                            if (contactSection) {
                              contactSection.scrollIntoView({
                                behavior: "smooth",
                              });
                            }
                          }}
                          className="w-full py-3 px-6 bg-gradient-to-r from-[#BFA77A] to-[#D8C69C] dark:from-[#FFD700] dark:to-[#DAA520] text-black rounded-lg hover:from-[#A89069] hover:to-[#C7B58B] dark:hover:from-[#EBC700] dark:hover:to-[#C99519] transition-colors text-sm font-medium shadow-md flex items-center justify-center gap-2"
                        >
                          <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          Inquire About Product
                        </button>
                      ) : (
                        <button
                          disabled
                          className="w-full py-3 px-6 bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-lg cursor-not-allowed text-sm font-medium shadow-md flex items-center justify-center gap-2"
                        >
                          <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          Currently Unavailable
                        </button>
                      )}
                    </MOTION.div>
                  </MOTION.div>
                </div>
              </div>
            </MOTION.div>
          </div>
        </div>
      )}

      {/* Informational Footnote */}
      <div className="max-w-lg mx-auto mt-12 text-center">
        <p className={`text-sm ${luxury.textSub}`}>
          Our timber products are ethically sourced and meet international
          sustainability standards. Contact us for custom orders and bulk
          inquiries.
        </p>
      </div>
    </section>
  );
}
