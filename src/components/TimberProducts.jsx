// // import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
// // import { motion as MOTION } from "framer-motion";
// // import ZoomViewer from "./ZoomViewer";

// // // Luxury theme pack
// // const luxury = {
// //   bg: "bg-[#F8F4EF]",
// //   heading: "text-[#674C28]",
// //   tabActive: "from-[#BFA77A] to-[#D8C69C] text-black",
// //   tabInactive: "bg-white text-[#5A4A30] border-[#CBB27D] hover:ring-yellow-500",
// //   cardBg: "bg-[#FFFDF8]/70 border-[#EADCA6]",
// //   gradientBox: "from-[#F0E5CF] via-[#E5D4B7] to-[#D9C7A5]",
// //   textMain: "text-[#4A3B21]",
// //   textSub: "text-[#7A684A]",
// //   textLabel: "text-[#5F4E2A]",
// // };

// // const highlightKeywords = (text) => {
// //   const keywords = [
// //     "durability",
// //     "natural oil[s]?",
// //     "moisture resistance",
// //     "termite[s]?",
// //     "fungal",
// //     "strength",
// //     "workability",
// //     "dimensional stability",
// //     "low maintenance",
// //     "golden[- ]brown",
// //     "dense",
// //     "hardwood",
// //   ];

// //   let highlighted = text;

// //   keywords.forEach((word) => {
// //     const regex = new RegExp(`(${word})`, "gi");
// //     highlighted = highlighted.replace(
// //       regex,
// //       `<span class="font-semibold text-[#674C28]">$1</span>`,
// //     );
// //   });

// //   return highlighted;
// // };

// // // Timber Data

// // const timberData = {
// //   "Burma Teak": {
// //     description:
// //       "Burma teak, also known as Burmese teak, is one of the most premium and sought-after hardwoods in the world. Renowned for its exceptional durability, natural beauty, and resistance to decay, this teak variety has been widely used for centuries in both luxury woodworking and demanding outdoor applications.\n\n" +
// //       "The wood typically displays a rich golden to medium brown color that deepens gracefully with age, enhancing its visual appeal over time. It features a predominantly straight grain, though occasional wavy or interlocked patterns add a distinctive character. The slightly coarse texture is complemented by a natural oily sheen, which contributes to its moisture resistance and long-lasting performance.\n\n" +
// //       "Burma teak is a dense and robust hardwood, offering excellent mechanical strength and wear resistance. Its high natural oil content provides outstanding protection against decay, termites, and other pests, making it particularly suitable for outdoor environments and marine conditions. The heartwood is especially durable and remains stable even when exposed to harsh weather.\n\n" +
// //       "Despite its density, Burma teak is relatively easy to work with and responds well to finishing. While its natural silica content can dull tools, it glues and finishes effectively with proper surface preparation. Because of these qualities, it has long been a preferred material for high-quality furniture, flooring, decking, and shipbuilding.\n\n" +
// //       "Overall, Burma teak represents the perfect balance of strength, elegance, and longevity. Its proven performance, historical significance, and timeless appearance make it a premium choice for both traditional craftsmanship and modern architectural applications.",

// //     images: [
// //       "/img/Burma/Burma Teak Cut Sizes.jpeg",
// //       "/img/Burma/Burma Teak Cut Sizes1.jpeg",
// //       "/img/Burma/Burma Teak logs.jpeg",
// //     ],

// //     name: "Burma Teak",

// //     benefits: [
// //       "Exceptional Durability",
// //       "High Natural Oil Content",
// //       "Termite & Decay Resistant",
// //       "Weather & Moisture Resistant",
// //       "Strong & Dense Hardwood",
// //       "Premium Aesthetic Appeal",
// //     ],

// //     origin: "Myanmar (Burma)",

// //     applications: [
// //       "Outdoor Furniture",
// //       "Boat Building & Marine Decking",
// //       "Flooring & Decking",
// //       "Luxury Interiors",
// //       "Architectural Woodwork",
// //     ],

// //     available: true,
// //   },

// //   "Hunsur Teak": {
// //     description:
// //       "Hunsur teak wood is renowned for its exceptional durability, natural oil content, and refined aesthetic appeal, making it an excellent choice for both indoor and outdoor applications. Derived from Tectona grandis and sourced from the Hunsur region of Karnataka, this teak variety is naturally resistant to decay, insects, and fungal attacks, ensuring long-lasting performance even in challenging environments.\n\n" +
// //       "One of the defining characteristics of Hunsur teak is its beautiful golden-brown color combined with fine, straight grain patterns. These visual qualities enhance the elegance of finished products, making it a preferred material for premium furniture and high-end interior applications. The wood is also highly workable, allowing craftsmen to carve, shape, and finish it with ease, which makes it ideal for intricate designs and detailed woodworking.\n\n" +
// //       "Thanks to its high natural oil content, Hunsur teak offers excellent moisture resistance, protecting it from warping and cracking in humid or outdoor conditions. It also exhibits outstanding dimensional stability, maintaining its shape and size despite fluctuations in weather or humidity. Additionally, Hunsur teak requires very low maintenance and can be left untreated outdoors, where it naturally ages into an attractive silver-grey patina.\n\n" +
// //       "Overall, Hunsur teak is a premium timber choice for customers seeking a combination of durability, beauty, stability, and minimal maintenance. Its unique properties make it widely favored across furniture manufacturing, marine construction, and architectural applications.",

// //     images: [
// //       "/img/Hunsur/Hunsur Teak Cut Sizes.jpeg",
// //       "/img/Hunsur/Hunsur Teak Logs1.jpeg",
// //       "/img/Hunsur/Hunsur Teak Logs.jpeg",
// //     ],

// //     name: "Hunsur Teak",

// //     benefits: [
// //       "High Natural Durability",
// //       "Insect & Fungal Resistance",
// //       "Moisture Resistant",
// //       "Excellent Workability",
// //       "Dimensional Stability",
// //       "Low Maintenance",
// //     ],

// //     origin: "Hunsur, Karnataka, India",

// //     applications: [
// //       "Indoor & Outdoor Furniture",
// //       "Marine & Boat Decking",
// //       "Architectural Elements",
// //       "Flooring & Decking",
// //     ],

// //     available: true,
// //   },

// //   "Balharshah Teak": {
// //     description:
// //       "Balharshah teak wood is renowned for its exceptional density, strength, and long-lasting durability, making it an ideal choice for both structural and decorative applications. Sourced from the Balharshah region, this teak variety is highly valued in premium construction and furniture manufacturing due to its robust performance and classic appearance.\n\n" +
// //       "One of the most distinctive features of Balharshah teak is its rich golden-brown color, which naturally deepens and develops a refined patina over time. This aging characteristic enhances the visual appeal of furniture and architectural elements, making it a preferred material for luxury homes and high-end interiors.\n\n" +
// //       "Balharshah teak contains natural oils that provide excellent resistance to moisture, pests, and decay. These properties make it highly suitable for outdoor applications such as decking, garden furniture, and marine-related construction. Despite its high density and strength, the wood offers good workability, allowing craftsmen to cut, shape, and detail it with precision without compromising structural integrity.\n\n" +
// //       "With its dense grain structure and superior longevity, Balharshah teak is capable of withstanding harsh environmental conditions and long-term use. Furniture and structures made from this timber can last for generations, making it a trusted choice among architects, designers, and homeowners seeking a balance of strength, beauty, and reliability.",

// //     images: [
// //       "/img/Balharshah/Balharshah Teak Cut Sizes.png",
// //       "/img/Balharshah/Balharshah Teak Logs1.jpeg",
// //       "/img/Balharshah/Balharshah Teak Logs.jpeg",
// //     ],

// //     name: "Balharshah Teak",

// //     benefits: [
// //       "High Density & Strength",
// //       "Excellent Durability",
// //       "Moisture & Pest Resistant",
// //       "Rich Aging Patina",
// //       "Good Workability",
// //       "Long Service Life",
// //     ],

// //     origin: "Balharshah, Maharashtra, India",

// //     applications: [
// //       "High-end Furniture",
// //       "Doors & Window Frames",
// //       "Structural Beams",
// //       "Outdoor Decking",
// //       "Marine Applications",
// //     ],

// //     available: true,
// //   },

// //   "Mysore Honne": {
// //     description:
// //       "Mysore Honne wood is a premium hardwood known for its exceptional strength, durability, and rich reddish-brown color. Sourced from the Mysore region of Karnataka, this dense and heavy timber is widely used in furniture making, construction, and decorative interiors. Its natural appearance and solid performance make it a preferred choice for both functional and aesthetic applications.\n\n" +
// //       "One of the key characteristics of Mysore Honne is its high durability, offering approximately 70–80% of teak’s strength while being more cost-effective. The wood features a straight to slightly interlocked grain with a fine, smooth texture, giving it a refined finish comparable to high-end hardwoods. This makes it ideal for premium doors, windows, flooring, and interior paneling.\n\n" +
// //       "Mysore Honne is naturally resistant to termites and fungal attacks, which significantly enhances its lifespan and reduces the need for chemical treatments. It also contains natural resins and gum, traditionally associated with medicinal value, adding to its unique character. While the wood is generally easy to work with and responds well to polishing and finishing, proper seasoning is recommended to manage moisture content and prevent warping or gum bleed.\n\n" +
// //       "Overall, Mysore Honne is a versatile and reliable timber choice that balances strength, beauty, and affordability. Its durability, elegant appearance, and wide range of applications make it a popular option among architects, designers, craftsmen, and homeowners seeking long-lasting and visually appealing wood solutions.",

// //     images: [
// //       "/img/Mysore/Mysore Honee Log.jpeg",
// //       "/img/Mysore/Mysore Honne Cut.jpeg",
// //       "/img/Mysore/Mysore Honne Cut1.jpeg",
// //     ],

// //     name: "Mysore Honne",

// //     benefits: [
// //       "High Strength & Durability",
// //       "Termite & Fungal Resistant",
// //       "Rich Reddish-Brown Color",
// //       "Fine Smooth Texture",
// //       "Cost-Effective Alternative to Teak",
// //       "Good Workability",
// //     ],

// //     origin: "Mysore, Karnataka, India",

// //     applications: [
// //       "Furniture",
// //       "Doors & Windows",
// //       "Flooring & Paneling",
// //       "Interior Decoration",
// //       "Decorative Woodwork",
// //     ],

// //     available: true,
// //   },

// //   "Mathi Logs": {
// //     description:
// //       "Matti wood, scientifically known as Terminalia elliptica and commonly referred to as the Crocodile Bark Tree, is a strong and durable hardwood widely found in India’s dry and moist deciduous forests. It is valued for its structural strength, versatility, and traditional significance in construction and woodworking.\n\n" +
// //       "This hardwood is known for its high density, hardness, and strength, which contribute to its excellent load-bearing capacity and resistance to wear. The wood typically ranges in color from light brown to dark brown or brownish-black, often highlighted with darker streaks and a fairly straight to slightly coarse grain. The sapwood is reddish-white and clearly distinguishable from the heartwood, which is moderately durable.\n\n" +
// //       "Matti wood offers good resistance to decay, termites, and weathering, making it suitable for both indoor and outdoor applications. Although it does not possess a strong natural aroma or taste, its durability and stability make it a reliable choice for long-term use. The wood finishes well and can be worked into both functional and decorative forms.\n\n" +
// //       "Traditionally, Matti wood has been used in furniture making, joinery, paneling, boat building, railway sleepers, and decorative veneers. It is also used in specialty items and musical instruments. Beyond timber usage, the tree holds ecological and cultural importance, as its leaves support tassar silk production, and its bark is used in traditional medicine and natural dyeing.\n\n" +
// //       "Overall, Matti wood is a dependable and multifunctional hardwood that combines strength, durability, and aesthetic character, making it a valuable material in both traditional and modern woodworking applications.",

// //     images: [
// //       "/img/Matti/Matti wood Cut Sizes.png",
// //       "/img/Matti/Matti Wood Logs.jpeg",
// //     ],

// //     name: "Mathi Logs",

// //     benefits: [
// //       "High Strength & Hardness",
// //       "Good Durability",
// //       "Termite & Weather Resistant",
// //       "Attractive Natural Grain",
// //       "Versatile Applications",
// //     ],

// //     origin: "India",

// //     applications: [
// //       "Furniture",
// //       "Doors & Windows",
// //       "Paneling & Joinery",
// //       "Boat Building",
// //       "Decorative Veneers",
// //       "Structural Applications",
// //     ],

// //     available: true,
// //   },

// //   "Malaysia Teak": {
// //     description:
// //       "Malaysia teak, known for its rich color variations and dense grain pattern, is sourced from sustainably managed forests in Malaysia. It offers excellent weather resistance and natural oils that protect against insects.",
// //     name: "Malaysia Teak",
// //     benefits: [
// //       "Weather Resistant",
// //       "Rich Color",
// //       "Dense Grain",
// //       "Insect Resistant",
// //     ],
// //     origin: "Malaysia",
// //     applications: ["Outdoor Structures", "Garden Furniture", "Decking"],
// //     available: false,
// //   },
// //   "Indonesia Teak": {
// //     description:
// //       "Indonesia teak is highly valued for its beautiful golden-brown color that darkens with age. Sourced from the Indonesian archipelago, it's known for its tight grain pattern and natural oils that provide weather resistance.",
// //     name: "Indonesia Teak",
// //     benefits: [
// //       "Weather Resistant",
// //       "Aging Character",
// //       "Tight Grain",
// //       "Natural Luster",
// //     ],
// //     origin: "Indonesia",
// //     applications: [
// //       "Luxury Furniture",
// //       "Marine Applications",
// //       "Architectural Details",
// //     ],
// //     available: false,
// //   },
// //   "Kerala Honne": {
// //     description:
// //       "Kerala Honne is sourced from the Western Ghats of Kerala and features a rich reddish-brown color with distinctive grain patterns. It's valued for its moderate hardness and excellent finishing qualities.",
// //     name: "Kerala Honne",
// //     benefits: [
// //       "Rich Color",
// //       "Distinctive Grain",
// //       "Good Finishing",
// //       "Moderate Hardness",
// //     ],
// //     origin: "Kerala, India",
// //     applications: ["Furniture", "Interior Paneling", "Handicrafts"],
// //     available: false,
// //   },
// //   "Australia Honne": {
// //     description:
// //       "Australia Honne wood is a premium hardwood known for its exceptional density, strength, and mechanical performance. Sourced from Australia, this timber is valued for its durability and ability to withstand demanding environmental conditions, making it suitable for both structural and decorative applications.\n\n" +
// //       "One of the defining characteristics of Australia Honne is its high durability and stability. The wood performs well in extreme climatic conditions and offers excellent resistance to termites and fungal attacks due to its natural resins and gum content. These properties make it a reliable choice for long-lasting furniture, doors, windows, and outdoor construction when properly treated.\n\n" +
// //       "Australia Honne also provides thermal efficiency, helping regulate indoor temperatures by keeping spaces cooler during summer and warmer during winter. Its straight to slightly interlocked grain combined with a fine, smooth texture gives it a refined appearance, while its natural reddish-brown color enhances the visual appeal of interiors and architectural elements.\n\n" +
// //       "Despite its strength and density, Australia Honne offers good design flexibility and can be customized for a wide range of applications. With appropriate finishing and surface protection, it delivers excellent performance, environmental sustainability, and long-term value, making it a preferred choice for premium construction and interior projects.",

// //     images: [
// //       "/img/Australia/Australia Honne Cut Sizes.png",
// //       "/img/Australia/Australia Honne Logs.jpeg",
// //       "/img/Australia/Australia Honne Logs.jpg",
// //     ],

// //     name: "Australia Honne",

// //     benefits: [
// //       "High Density & Strength",
// //       "Excellent Durability",
// //       "Termite & Fungal Resistant",
// //       "Thermal Insulation Properties",
// //       "Design Flexibility",
// //       "Environmentally Sustainable",
// //     ],

// //     origin: "Australia",

// //     applications: [
// //       "Furniture",
// //       "Doors & Windows",
// //       "Flooring",
// //       "Structural Elements",
// //       "Decorative Interiors",
// //     ],

// //     available: true,
// //   },
// // };

// // const productHierarchy = {
// //   Teak: {
// //     Indian: ["Hunsur Teak", "Balharshah Teak"],
// //     Imported: ["Burma Teak", "Malaysia Teak", "Indonesia Teak"],
// //   },
// //   Honne: {
// //     Indian: ["Mysore Honne", "Kerala Honne"],
// //     Imported: ["Australia Honne"],
// //   },
// //   "Mathi Wood": {
// //     Quality: ["Mathi Logs"],
// //   },
// // };

// // const categoryLocalNames = {
// //   Teak: "Sagwan",
// //   Honne: "Ponna, Vegi, Bija",
// //   "Mathi Wood": "Saja, Mathi",
// // };

// // // Custom icons using SVG
// // const Icons = {
// //   Teak: (
// //     <svg
// //       viewBox="0 0 24 24"
// //       fill="none"
// //       className="w-5 h-5"
// //       stroke="currentColor"
// //       strokeWidth="2"
// //     >
// //       <path d="M7 2v20M17 2v20M3 7h18M3 17h18" strokeLinecap="round" />
// //     </svg>
// //   ),
// //   Honne: (
// //     <svg
// //       viewBox="0 0 24 24"
// //       fill="none"
// //       className="w-5 h-5"
// //       stroke="currentColor"
// //       strokeWidth="2"
// //     >
// //       <path
// //         d="M5 22c1.5-1.5 3-3 7-3s5.5 1.5 7 3M5 2c1.5 1.5 3 3 7 3s5.5-1.5 7-3M12 2v20"
// //         strokeLinecap="round"
// //       />
// //     </svg>
// //   ),
// //   "Mathi Wood": (
// //     <svg
// //       viewBox="0 0 24 24"
// //       fill="none"
// //       className="w-5 h-5"
// //       stroke="currentColor"
// //       strokeWidth="2"
// //     >
// //       <path
// //         d="M12 2C13.1046 2 14 2.89543 14 4V5H15C16.1046 5 17 5.89543 17 7C17 7.55228 16.7761 8.05228 16.4142 8.41421L15 9.82843V11H17C18.1046 11 19 11.8954 19 13C19 13.5523 18.7761 14.0523 18.4142 14.4142L16 16.8284V18H8V16.8284L5.58579 14.4142C5.22386 14.0523 5 13.5523 5 13C5 11.8954 5.89543 11 7 11H9V9.82843L7.58579 8.41421C7.22386 8.05228 7 7.55228 7 7C7 5.89543 7.89543 5 9 5H10V4C10 2.89543 10.8954 2 12 2Z"
// //         strokeLinecap="round"
// //         strokeLinejoin="round"
// //       />
// //       <path d="M12 18V22" strokeLinecap="round" strokeLinejoin="round" />
// //     </svg>
// //   ),
// // };

// // export default function TimberProducts() {
// //   const [mainCategory, setMainCategory] = useState("Teak");
// //   const [subCategory, setSubCategory] = useState("Indian");
// //   const [finalProduct, setFinalProduct] = useState("Hunsur Teak");
// //   const [activeImageIndex, setActiveImageIndex] = useState(0);
// //   const [isFirstLoad, setIsFirstLoad] = useState(true);
// //   const [modalType, setModalType] = useState(null);
// //   const descriptionRef = useRef(null);
// //   const [showFullDescription, setShowFullDescription] = useState(false);
// //   const [contentHeight, setContentHeight] = useState(0);
// //   const currentData = timberData[finalProduct];

// //   useLayoutEffect(() => {
// //     if (descriptionRef.current && currentData?.description) {
// //       setContentHeight(descriptionRef.current.scrollHeight);
// //     }
// //   }, [currentData]);

// //   useEffect(() => {
// //     setActiveImageIndex(0);

// //     if (isFirstLoad) {
// //       setTimeout(() => setIsFirstLoad(false), 1000);
// //     }
// //   }, [finalProduct, isFirstLoad]);

// //   const updateMainCategory = (category) => {
// //     setMainCategory(category);
// //     const subKeys = Object.keys(productHierarchy[category]);
// //     const firstSub = subKeys[0];

// //     // Find first available product in the subcategory
// //     const availableProduct =
// //       productHierarchy[category][firstSub].find(
// //         (product) => timberData[product]?.available,
// //       ) || productHierarchy[category][firstSub][0];

// //     setSubCategory(firstSub);
// //     setFinalProduct(availableProduct);
// //   };

// //   const updateSubCategory = (subcategory) => {
// //     // Find first available product in the subcategory
// //     const availableProduct =
// //       productHierarchy[mainCategory][subcategory].find(
// //         (product) => timberData[product]?.available,
// //       ) || productHierarchy[mainCategory][subcategory][0];

// //     setSubCategory(subcategory);
// //     setFinalProduct(availableProduct);
// //   };

// //   // Get only available products from the current subcategory
// //   const availableProducts = productHierarchy[mainCategory][subCategory].filter(
// //     (product) => timberData[product]?.available,
// //   );

// //   // Get non-available products from the current subcategory
// //   const nonAvailableProducts = productHierarchy[mainCategory][
// //     subCategory
// //   ].filter((product) => !timberData[product]?.available);

// //   const containerVariants = {
// //     hidden: { opacity: 0 },
// //     visible: {
// //       opacity: 1,
// //       transition: {
// //         staggerChildren: 0.1,
// //       },
// //     },
// //   };

// //   const itemVariants = {
// //     hidden: { y: 20, opacity: 0 },
// //     visible: {
// //       y: 0,
// //       opacity: 1,
// //       transition: { type: "spring", stiffness: 100 },
// //     },
// //   };

// //   return (
// //     <section
// //       className={`py-16 px-4 max-w-7xl mx-auto font-display ${luxury.bg} ${luxury.textMain}`}
// //     >
// //       <MOTION.div
// //         initial={{ opacity: 0, y: -20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.6 }}
// //         className="text-center mb-16"
// //       >
// //         <h2 className="text-4xl md:text-5xl tracking-tight font-bold mb-4">
// //           <span className={`${luxury.heading}`}>Timber Collection</span>
// //         </h2>
// //         <p className={`${luxury.textSub} max-w-xl mx-auto`}>
// //           Explore our curated selection of premium timber products, sourced from
// //           the finest locations around the world.
// //         </p>
// //       </MOTION.div>

// //       {/* Category Navigation */}
// //       <div className="mb-12 max-w-5xl mx-auto">
// //         <div
// //           className={`${luxury.cardBg} rounded-2xl shadow-xl overflow-hidden border`}
// //         >
// //           {/* Main Category Tabs */}
// //           <div className="flex border-b border-[#EADCA6] ">
// //             {Object.keys(productHierarchy).map((category) => (
// //               <button
// //                 key={category}
// //                 onClick={() => updateMainCategory(category)}
// //                 className={`flex-1 text-center py-5 px-6 transition-all duration-300 flex items-center justify-center gap-2 ${
// //                   mainCategory === category
// //                     ? `bg-gradient-to-r ${luxury.tabActive} border-b-2 border-[#674C28]  font-medium`
// //                     : `${luxury.tabInactive} hover:bg-[#F0E5CF]/40 dark:hover:bg-[#3B2C1A]/40`
// //                 }`}
// //               >
// //                 <span
// //                   className={
// //                     mainCategory === category ? "text-black " : "text-[#674C28]"
// //                   }
// //                 >
// //                   {Icons[category]}
// //                 </span>
// //                 <span className="text-sm leading-tight">
// //                   {category}{" "}
// //                   <span
// //                     className="text-[11px] italic block md:inline text-[#7A684A] "
// //                     style={{ color: "#7A684A" }}
// //                   >
// //                     ({categoryLocalNames[category]})
// //                   </span>
// //                 </span>
// //               </button>
// //             ))}
// //           </div>

// //           {/* Sub Category & Final Product Selection */}
// //           <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#EADCA6] dark:divide-[#5F4E2A]">
// //             {/* Sub Category Pills */}
// //             <div className="p-6 bg-gradient-to-b from-[#F0E5CF]/50 to-[#FFFDF8]/50 ">
// //               <h3
// //                 className={`text-sm font-semibold ${luxury.textLabel} mb-4 flex items-center`}
// //               >
// //                 <span className="w-1 h-6 bg-[#BFA77A]  rounded mr-2"></span>
// //                 Select Type
// //               </h3>
// //               <div className="flex flex-col gap-2">
// //                 {Object.keys(productHierarchy[mainCategory]).map((sub) => (
// //                   <button
// //                     key={sub}
// //                     onClick={() => updateSubCategory(sub)}
// //                     className={`px-5 py-3 rounded-lg text-sm transition-all flex justify-between items-center ${
// //                       subCategory === sub
// //                         ? "bg-gradient-to-r from-[#BFA77A] to-[#D8C69C]  text-black shadow-md"
// //                         : "bg-white text-[#5A4A30] border border-[#CBB27D]  hover:border-[#BFA77A] dark:hover:border-[#DAA520]"
// //                     }`}
// //                   >
// //                     <span>{sub}</span>
// //                     <span
// //                       className={`text-xs rounded-full px-2 py-0.5 ${
// //                         subCategory === sub
// //                           ? "bg-white/20 text-black"
// //                           : "bg-[#F0E5CF]  text-[#674C28] "
// //                       }`}
// //                     >
// //                       {
// //                         productHierarchy[mainCategory][sub].filter(
// //                           (product) => timberData[product]?.available,
// //                         ).length
// //                       }
// //                     </span>
// //                   </button>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Final Products Container */}
// //             <div className="p-6 col-span-2">
// //               <h3
// //                 className={`text-sm font-semibold ${luxury.textLabel} mb-4 flex items-center`}
// //               >
// //                 <span className="w-1 h-6 bg-[#BFA77A]  rounded mr-2"></span>
// //                 Available Products
// //               </h3>

// //               {/* Available Products Grid */}
// //               {availableProducts.length > 0 ? (
// //                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //                   {availableProducts.map((product) => (
// //                     <MOTION.div
// //                       whileHover={{ scale: 1.02 }}
// //                       whileTap={{ scale: 0.98 }}
// //                       key={product}
// //                       onClick={() => setFinalProduct(product)}
// //                       className={`rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
// //                         finalProduct === product
// //                           ? "ring-2 ring-[#BFA77A] dark:ring-[#FFD700] shadow-lg"
// //                           : "shadow-sm border border-[#EADCA6]  hover:shadow-md"
// //                       }`}
// //                     >
// //                       <div className="h-24 flex items-center justify-between bg-gradient-to-r from-[#BFA77A] to-[#D8C69C]  p-4">
// //                         <h3 className="text-black font-medium">{product}</h3>
// //                         <span
// //                           className={`text-xs bg-white/20 text-black rounded-full px-2 py-1 ${
// //                             finalProduct === product ? "bg-white/30" : ""
// //                           }`}
// //                         >
// //                           {finalProduct === product ? "Selected" : "Select"}
// //                         </span>
// //                       </div>
// //                       <div className="p-4 bg-white  border-t border-[#EADCA6]/30 ">
// //                         <p className="text-xs text-[#7A684A]  line-clamp-2">
// //                           {timberData[product]?.description.substring(0, 100)}
// //                           ...
// //                         </p>
// //                       </div>
// //                     </MOTION.div>
// //                   ))}
// //                 </div>
// //               ) : (
// //                 <div className="bg-[#F0E5CF]/30  rounded-lg p-4 text-center">
// //                   <p className={`${luxury.textSub} text-sm`}>
// //                     No available products in this category
// //                   </p>
// //                 </div>
// //               )}

// //               {/* Non-Available Products List */}
// //               {nonAvailableProducts.length > 0 && (
// //                 <div className="mt-6 pt-6 border-t border-[#EADCA6]/50 ">
// //                   <h4
// //                     className={`text-sm font-medium ${luxury.textLabel} mb-3`}
// //                   >
// //                     Coming Soon
// //                   </h4>
// //                   <div className="flex flex-wrap gap-2">
// //                     {nonAvailableProducts.map((product) => (
// //                       <span
// //                         key={product}
// //                         className="px-3 py-1 text-xs rounded-full bg-[#F0E5CF]/50  text-[#7A684A]  border border-[#EADCA6]/30 "
// //                       >
// //                         {product}
// //                       </span>
// //                     ))}
// //                   </div>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Product Display */}
// //       {currentData && (
// //         <div
// //           className="relative -mx-4 md:-mx-0 rounded-2xl overflow-hidden bg-cover bg-center bg-fixed"
// //           style={{
// //             backgroundImage: `url('${
// //               currentData.images?.[activeImageIndex]
// //                 ? currentData.images[activeImageIndex].startsWith("/")
// //                   ? currentData.images[activeImageIndex]
// //                   : "/" + currentData.images[activeImageIndex]
// //                 : "/img/bg/about-bg.jpeg"
// //             }')`,
// //           }}
// //         >
// //           {/* Background overlay for better contrast */}
// //           <div className="absolute inset-0 bg-black/30 pointer-events-none" />

// //           {/* Card Content */}
// //           <div className="relative z-10 p-6 md:p-12 max-w-7xl mx-auto">
// //             <MOTION.div
// //               className={`${luxury.cardBg} rounded-2xl shadow-2xl overflow-hidden border`}
// //               initial={{ opacity: 0, y: 40 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.5 }}
// //               layout
// //               key={currentData.name}
// //             >
// //               <div
// //                 className={`bg-gradient-to-r ${luxury.gradientBox} text-[#4A3B21]  p-6 md:p-10`}
// //               >
// //                 <div className="max-w-4xl mx-auto">
// //                   <span className="inline-block px-3 py-1 bg-[#4A3B21]/20  text-[#4A3B21]  rounded-full text-xs font-medium mb-4">
// //                     {mainCategory} / {subCategory}
// //                   </span>
// //                   <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
// //                     <div>
// //                       <h3 className="text-3xl font-bold mb-2">
// //                         {currentData.name}
// //                       </h3>
// //                       <p className="text-[#7A684A] ">{currentData.origin}</p>
// //                     </div>
// //                     <div className="flex gap-2 flex-wrap">
// //                       {currentData.applications?.slice(0, 3).map((app, i) => (
// //                         <span
// //                           key={i}
// //                           className="text-xs bg-[#4A3B21]/10 px-3 py-1 rounded-full border border-[#4A3B21]/20 "
// //                         >
// //                           {app}
// //                         </span>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="max-w-6xl mx-auto px-6 py-10">
// //                 <div className="grid md:grid-cols-5 gap-8">
// //                   {/* Product Gallery */}
// //                   <div className="md:col-span-3 order-2 md:order-1">
// //                     {currentData.images ? (
// //                       <>
// //                         {/* Main Image */}
// //                         <div
// //                           className="relative rounded-xl overflow-hidden aspect-video bg-[#F0E5CF]  shadow-inner mb-4 cursor-pointer"
// //                           onClick={() => setModalType("image")} // Open modal on click
// //                         >
// //                           <img
// //                             src={currentData.images[activeImageIndex]}
// //                             alt={`Product ${activeImageIndex + 1}`}
// //                             className="w-full h-full object-cover"
// //                           />
// //                         </div>

// //                         {/* Thumbnails */}
// //                         <div className="flex gap-2 pb-2">
// //                           {currentData.images.map((img, i) => (
// //                             <button
// //                               key={i}
// //                               onClick={() => setActiveImageIndex(i)}
// //                               className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all ${
// //                                 i === activeImageIndex
// //                                   ? "ring-2 ring-[#BFA77A] dark:ring-[#FFD700] opacity-100"
// //                                   : "opacity-70 hover:opacity-100"
// //                               }`}
// //                             >
// //                               <img
// //                                 src={img}
// //                                 alt={`Thumbnail ${i + 1}`}
// //                                 className="w-full h-full object-cover"
// //                               />
// //                             </button>
// //                           ))}
// //                         </div>

// //                         {/* Modal / Popup */}
// //                         {modalType === "image" && (
// //                           <div
// //                             className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
// //                             onClick={() => setModalType(null)}
// //                           >
// //                             <div
// //                               className="relative bg-white rounded-3xl p-4 max-w-5xl w-full mx-4 shadow-2xl"
// //                               onClick={(e) => e.stopPropagation()}
// //                             >
// //                               {/* Close Button */}
// //                               <button
// //                                 className="absolute top-3 right-4 text-3xl text-gray-600 hover:text-black transition-colors z-10"
// //                                 onClick={() => setModalType(null)}
// //                               >
// //                                 &times;
// //                               </button>

// //                               {/* Zoomable Image */}
// //                               <div className="w-full h-[70vh] flex items-center justify-center">
// //                                 <ZoomViewer
// //                                   src={currentData.images[activeImageIndex]}
// //                                   zoom={2.5}
// //                                   className="w-full h-full object-contain rounded-xl"
// //                                 />
// //                               </div>

// //                               {/* Image Counter */}
// //                               <div className="text-center mt-3 text-sm text-gray-500">
// //                                 {activeImageIndex + 1} /{" "}
// //                                 {currentData.images.length}
// //                               </div>
// //                             </div>
// //                           </div>
// //                         )}
// //                       </>
// //                     ) : (
// //                       <div className="rounded-xl overflow-hidden aspect-video bg-[#F0E5CF]  shadow-inner flex items-center justify-center">
// //                         <p className="text-[#7A684A]  text-center px-6">
// //                           {currentData.available
// //                             ? "Product images coming soon"
// //                             : "This product is currently not available"}
// //                         </p>
// //                       </div>
// //                     )}
// //                   </div>

// //                   {/* Product Info */}
// //                   <MOTION.div
// //                     className="md:col-span-2 order-1 md:order-2"
// //                     variants={containerVariants}
// //                     initial="hidden"
// //                     animate="visible"
// //                   >
// //                     <MOTION.div
// //                       variants={itemVariants}
// //                       className="mb-6 bg-gradient-to-br from-[#F0E5CF]/30 via-white to-[#E5D4B7]/20 p-5 rounded-xl border border-[#EADCA6] relative overflow-hidden"
// //                     >
// //                       {/* Decorative wood grain pattern */}
// //                       <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none">
// //                         <svg viewBox="0 0 100 100" className="w-full h-full">
// //                           <path
// //                             d="M0,20 Q25,10 50,20 T100,20"
// //                             stroke="#674C28"
// //                             fill="none"
// //                             strokeWidth="2"
// //                           />
// //                           <path
// //                             d="M0,40 Q25,30 50,40 T100,40"
// //                             stroke="#674C28"
// //                             fill="none"
// //                             strokeWidth="2"
// //                           />
// //                           <path
// //                             d="M0,60 Q25,50 50,60 T100,60"
// //                             stroke="#674C28"
// //                             fill="none"
// //                             strokeWidth="2"
// //                           />
// //                           <path
// //                             d="M0,80 Q25,70 50,80 T100,80"
// //                             stroke="#674C28"
// //                             fill="none"
// //                             strokeWidth="2"
// //                           />
// //                         </svg>
// //                       </div>

// //                       <h4
// //                         className={`${luxury.textLabel} font-medium mb-3 flex items-center gap-2`}
// //                       >
// //                         <svg
// //                           className="w-4 h-4"
// //                           viewBox="0 0 24 24"
// //                           fill="currentColor"
// //                         >
// //                           <path d="M12 2L2 7l10 5 10-5-10-5z" />
// //                           <path
// //                             d="M2 17l10 5 10-5M2 12l10 5 10-5"
// //                             opacity="0.6"
// //                           />
// //                         </svg>
// //                         Description
// //                       </h4>

// //                       <div
// //                         className="relative overflow-hidden transition-[max-height] duration-500 ease-in-out"
// //                         style={{
// //                           maxHeight: showFullDescription ? contentHeight : 96,
// //                         }}
// //                       >
// //                         <div
// //                           ref={descriptionRef}
// //                           className={`${luxury.textMain} text-sm leading-relaxed`}
// //                          >
// //                           {currentData.description
// //                             .split("\n\n")
// //                             .map((para, index, arr) => (
// //                               <React.Fragment key={index}>
// //                                 <p
// //                                   className={`mb-4 ${
// //                                     index === 0
// //                                       ? "font-medium text-[#4A3B21]"
// //                                       : ""
// //                                   }`}
// //                                   dangerouslySetInnerHTML={{
// //                                     __html: highlightKeywords(para),
// //                                   }}
// //                                 />

// //                                 {index < arr.length - 1 && (
// //                                   <div className="flex items-center gap-2 my-4">
// //                                     <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#CBB27D]/40 to-transparent"></div>
// //                                     <div className="w-1.5 h-1.5 rounded-full bg-[#BFA77A]"></div>
// //                                     <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#CBB27D]/40 to-transparent"></div>
// //                                   </div>
// //                                 )}
// //                               </React.Fragment>
// //                             ))}
// //                         </div>

// //                         {/* Fade when collapsed */}
// //                         {!showFullDescription && (
// //                           <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#F0E5CF] via-[#F0E5CF]/60 to-transparent pointer-events-none" />
// //                         )}
// //                       </div>

// //                       {/* INLINE Read more / less */}
// //                       <span
// //                         onClick={() => setShowFullDescription((prev) => !prev)}
// //                         className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-[#8B6A2E] hover:text-[#674C28] cursor-pointer select-none transition-colors"
// //                       >
// //                         {showFullDescription ? (
// //                           <>
// //                             Read less
// //                             <svg
// //                               className="w-3 h-3"
// //                               viewBox="0 0 24 24"
// //                               fill="none"
// //                               stroke="currentColor"
// //                               strokeWidth="3"
// //                             >
// //                               <path
// //                                 d="M18 15l-6-6-6 6"
// //                                 strokeLinecap="round"
// //                                 strokeLinejoin="round"
// //                               />
// //                             </svg>
// //                           </>
// //                         ) : (
// //                           <>
// //                             Read more
// //                             <svg
// //                               className="w-3 h-3"
// //                               viewBox="0 0 24 24"
// //                               fill="none"
// //                               stroke="currentColor"
// //                               strokeWidth="3"
// //                             >
// //                               <path
// //                                 d="M6 9l6 6 6-6"
// //                                 strokeLinecap="round"
// //                                 strokeLinejoin="round"
// //                               />
// //                             </svg>
// //                           </>
// //                         )}
// //                       </span>
// //                     </MOTION.div>

// //                     <MOTION.div variants={itemVariants} className="mb-6">
// //                       <h4
// //                         className={`${luxury.textLabel} font-medium mb-3 flex items-center`}
// //                       >
// //                         <svg
// //                           className="w-4 h-4 mr-1"
// //                           viewBox="0 0 24 24"
// //                           fill="none"
// //                           stroke="currentColor"
// //                           strokeWidth="2"
// //                         >
// //                           <path
// //                             d="M5 13l4 4L19 7"
// //                             strokeLinecap="round"
// //                             strokeLinejoin="round"
// //                           />
// //                         </svg>
// //                         Key Benefits
// //                       </h4>
// //                       <div className="grid grid-cols-2 gap-2">
// //                         {currentData.benefits?.map((benefit, i) => (
// //                           <div
// //                             key={i}
// //                             className={`flex items-center gap-2 text-sm ${luxury.textMain}`}
// //                           >
// //                             <span className="w-1.5 h-1.5 bg-[#BFA77A] rounded-full"></span>
// //                             {benefit}
// //                           </div>
// //                         ))}
// //                       </div>
// //                     </MOTION.div>

// //                     <MOTION.div variants={itemVariants} className="mb-6">
// //                       <h4
// //                         className={`${luxury.textLabel} font-medium mb-3 flex items-center`}
// //                       >
// //                         <svg
// //                           className="w-4 h-4 mr-1"
// //                           viewBox="0 0 24 24"
// //                           fill="none"
// //                           stroke="currentColor"
// //                           strokeWidth="2"
// //                         >
// //                           <path
// //                             d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
// //                             strokeLinecap="round"
// //                             strokeLinejoin="round"
// //                           />
// //                         </svg>
// //                         Applications
// //                       </h4>
// //                       <div className="flex flex-wrap gap-2">
// //                         {currentData.applications?.map((app, i) => (
// //                           <span
// //                             key={i}
// //                             className="px-3 py-1 rounded-full text-xs bg-[#F0E5CF]  text-[#5F4E2A] "
// //                           >
// //                             {app}
// //                           </span>
// //                         ))}
// //                       </div>
// //                     </MOTION.div>

// //                     <MOTION.div variants={itemVariants}>
// //                       {currentData.available ? (
// //                         <button
// //                           onClick={() => {
// //                             const contactSection =
// //                               document.getElementById("contact");
// //                             if (contactSection) {
// //                               contactSection.scrollIntoView({
// //                                 behavior: "smooth",
// //                               });
// //                             }
// //                           }}
// //                           className="w-full py-3 px-6 bg-gradient-to-r from-[#BFA77A] to-[#D8C69C]  text-black rounded-lg hover:from-[#A89069] hover:to-[#C7B58B] cursor-pointer transition-colors text-sm font-medium shadow-md flex items-center justify-center gap-2"
// //                         >
// //                           <svg
// //                             className="w-4 h-4"
// //                             viewBox="0 0 24 24"
// //                             fill="none"
// //                             stroke="currentColor"
// //                             strokeWidth="2"
// //                           >
// //                             <path
// //                               d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
// //                               strokeLinecap="round"
// //                               strokeLinejoin="round"
// //                             />
// //                           </svg>
// //                           Inquire About Product
// //                         </button>
// //                       ) : (
// //                         <button
// //                           disabled
// //                           className="w-full py-3 px-6 bg-gray-300  text-gray-500 rounded-lg cursor-not-allowed text-sm font-medium shadow-md flex items-center justify-center gap-2"
// //                         >
// //                           <svg
// //                             className="w-4 h-4"
// //                             viewBox="0 0 24 24"
// //                             fill="none"
// //                             stroke="currentColor"
// //                             strokeWidth="2"
// //                           >
// //                             <path
// //                               d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
// //                               strokeLinecap="round"
// //                               strokeLinejoin="round"
// //                             />
// //                           </svg>
// //                           Currently Unavailable
// //                         </button>
// //                       )}
// //                     </MOTION.div>
// //                   </MOTION.div>
// //                 </div>
// //               </div>
// //             </MOTION.div>
// //           </div>
// //         </div>
// //       )}

// //       {/* Informational Footnote */}
// //       <div className="max-w-lg mx-auto mt-12 text-center">
// //         <p className={`text-sm ${luxury.textSub}`}>
// //           Our timber products are ethically sourced and meet international
// //           sustainability standards. Contact us for custom orders and bulk
// //           inquiries.
// //         </p>
// //       </div>
// //     </section>
// //   );
// // }



// import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
// import { motion as MOTION } from "framer-motion";
// import ZoomViewer from "./ZoomViewer";

// // Luxury theme pack
// const luxury = {
//   bg: "bg-[#F8F4EF]",
//   heading: "text-[#674C28]",
//   tabActive: "from-[#BFA77A] to-[#D8C69C] text-black",
//   tabInactive: "bg-white text-[#5A4A30] border-[#CBB27D] hover:ring-yellow-500",
//   cardBg: "bg-[#FFFDF8]/70 border-[#EADCA6]",
//   gradientBox: "from-[#F0E5CF] via-[#E5D4B7] to-[#D9C7A5]",
//   textMain: "text-[#4A3B21]",
//   textSub: "text-[#7A684A]",
//   textLabel: "text-[#5F4E2A]",
// };

// const highlightKeywords = (text) => {
//   const keywords = [
//     "durability",
//     "natural oil[s]?",
//     "moisture resistance",
//     "termite[s]?",
//     "fungal",
//     "strength",
//     "workability",
//     "dimensional stability",
//     "low maintenance",
//     "golden[- ]brown",
//     "dense",
//     "hardwood",
//   ];
//   let highlighted = text;
//   keywords.forEach((word) => {
//     const regex = new RegExp(`(${word})`, "gi");
//     highlighted = highlighted.replace(
//       regex,
//       `<span class="font-semibold text-[#674C28]">$1</span>`
//     );
//   });
//   return highlighted;
// };

// // ─── Quality tier config for Burma Border ────────────────────────────────────
// const burmaBorderQualities = {
//   "First Quality": {
//     label: "First Quality",
//     stars: 3,
//     badge: "Premium Grade",
//     badgeColor: "from-[#BFA77A] to-[#D8C69C]",
//     badgeText: "text-[#3A2C10]",
//     description:
//       "Burma Border First Quality teak represents the finest grade available from the Myanmar border region. Hand-selected for its exceptional uniformity, this premium-grade timber features a rich golden-brown heartwood with minimal sapwood, showcasing a straight, tight grain pattern with remarkable consistency.\n\n" +
//       "This top-tier grade offers the highest natural oil content, providing outstanding moisture resistance, dimensional stability, and long-term durability. Its superior density ensures excellent load-bearing performance and resistance to wear, making it ideal for the most demanding structural and decorative applications.\n\n" +
//       "First Quality Burma Border teak is exceptionally easy to work with — it cuts cleanly, finishes beautifully, and accepts adhesives without difficulty. The near-flawless surface character ensures premium results in high-visibility applications such as luxury furniture, bespoke joinery, and architectural feature elements.",
//     benefits: [
//       "Finest Grade Selection",
//       "Maximum Natural Oil Content",
//       "Uniform Straight Grain",
//       "Superior Moisture Resistance",
//       "Highest Density & Strength",
//       "Premium Finish Quality",
//     ],
//     images: [
//       "/img/BurmaBorder/First/Burma_Border_First_1.jpeg",
//       "/img/BurmaBorder/First/Burma_Border_First_2.jpeg",
//       "/img/BurmaBorder/First/Burma_Border_First_3.jpeg",
//     ],
//   },
//   "Second Quality": {
//     label: "Second Quality",
//     stars: 2,
//     badge: "Standard Grade",
//     badgeColor: "from-[#A89069] to-[#C4AF87]",
//     badgeText: "text-[#3A2C10]",
//     description:
//       "Burma Border Second Quality teak is a reliable mid-grade timber offering an excellent balance of performance and value. Sourced from the same Myanmar border forests as first quality, this grade may feature occasional minor grain variations or slight colour differences, while retaining the core properties that make Burma Border teak so sought-after.\n\n" +
//       "With good natural oil content and solid structural integrity, Second Quality Burma Border teak delivers dependable resistance to moisture, insects, and decay. It is well-suited to a wide range of applications where performance and cost-efficiency are both priorities.\n\n" +
//       "This grade works well in both indoor and outdoor settings and responds well to finishing and treatment. Minor natural characteristics present in the wood often add to its rustic charm and are considered acceptable within this grade's specification.",
//     benefits: [
//       "Good Natural Durability",
//       "Cost-Effective Performance",
//       "Moisture & Insect Resistant",
//       "Wide Application Range",
//       "Good Workability",
//       "Reliable Structural Integrity",
//     ],
//     images: [
//       "/img/BurmaBorder/Second/Burma_Border_Second_1.jpeg",
//       "/img/BurmaBorder/Second/Burma_Border_Second_2.jpeg",
//       "/img/BurmaBorder/Second/Burma_Border_Second_3.jpeg",
//     ],
//   },
//   "Third Quality": {
//     label: "Third Quality",
//     stars: 1,
//     badge: "Economy Grade",
//     badgeColor: "from-[#8C7455] to-[#A88E6A]",
//     badgeText: "text-white",
//     description:
//       "Burma Border Third Quality teak is an economical option for projects where premium aesthetics are secondary to structural performance and budget. This grade includes timber with more visible natural characteristics such as knots, mixed grain patterns, and colour variation, while still retaining the fundamental hardwood properties of teak.\n\n" +
//       "Despite its economy classification, Third Quality Burma Border teak is still a robust and durable hardwood, offering acceptable resistance to moisture and pests. Its natural teak characteristics make it far superior to non-teak alternatives at comparable price points.\n\n" +
//       "This grade is best suited for applications where the timber will be painted, concealed within structures, or used in utilitarian contexts where surface appearance is not the primary concern.",
//     benefits: [
//       "Budget-Friendly Option",
//       "Acceptable Durability",
//       "Basic Moisture Resistance",
//       "Suitable for Structural Use",
//       "Still a True Teak Hardwood",
//       "Good for Concealed Applications",
//     ],
//     images: [
//       "/img/BurmaBorder/Third/Burma_Border_Third_1.jpeg",
//       "/img/BurmaBorder/Third/Burma_Border_Third_2.jpeg",
//       "/img/BurmaBorder/Third/Burma_Border_Third_3.jpeg",
//     ],
//   },
// };

// // ─── Timber Data ──────────────────────────────────────────────────────────────
// const timberData = {
//   "Burma Teak": {
//     description:
//       "Burma teak, also known as Burmese teak, is one of the most premium and sought-after hardwoods in the world. Renowned for its exceptional durability, natural beauty, and resistance to decay, this teak variety has been widely used for centuries in both luxury woodworking and demanding outdoor applications.\n\n" +
//       "The wood typically displays a rich golden to medium brown color that deepens gracefully with age, enhancing its visual appeal over time. It features a predominantly straight grain, though occasional wavy or interlocked patterns add a distinctive character. The slightly coarse texture is complemented by a natural oily sheen, which contributes to its moisture resistance and long-lasting performance.\n\n" +
//       "Burma teak is a dense and robust hardwood, offering excellent mechanical strength and wear resistance. Its high natural oil content provides outstanding protection against decay, termites, and other pests, making it particularly suitable for outdoor environments and marine conditions. The heartwood is especially durable and remains stable even when exposed to harsh weather.\n\n" +
//       "Despite its density, Burma teak is relatively easy to work with and responds well to finishing. While its natural silica content can dull tools, it glues and finishes effectively with proper surface preparation. Because of these qualities, it has long been a preferred material for high-quality furniture, flooring, decking, and shipbuilding.\n\n" +
//       "Overall, Burma teak represents the perfect balance of strength, elegance, and longevity. Its proven performance, historical significance, and timeless appearance make it a premium choice for both traditional craftsmanship and modern architectural applications.",
//     images: [
//       "/img/Burma/Burma Teak Cut Sizes.jpeg",
//       "/img/Burma/Burma Teak Cut Sizes1.jpeg",
//       "/img/Burma/Burma Teak logs.jpeg",
//     ],
//     name: "Burma Teak",
//     benefits: [
//       "Exceptional Durability",
//       "High Natural Oil Content",
//       "Termite & Decay Resistant",
//       "Weather & Moisture Resistant",
//       "Strong & Dense Hardwood",
//       "Premium Aesthetic Appeal",
//     ],
//     origin: "Myanmar (Burma)",
//     applications: [
//       "Outdoor Furniture",
//       "Boat Building & Marine Decking",
//       "Flooring & Decking",
//       "Luxury Interiors",
//       "Architectural Woodwork",
//     ],
//     available: true,
//   },

//   "Burma Border": {
//     name: "Burma Border Teak",
//     origin: "Myanmar Border Region",
//     available: true,
//     isTiered: true,
//     qualities: burmaBorderQualities,
//     applications: [
//       "Furniture Manufacturing",
//       "Doors & Window Frames",
//       "Flooring & Decking",
//       "Structural Elements",
//       "Outdoor Applications",
//     ],
//   },

//   "Hunsur Teak": {
//     description:
//       "Hunsur teak wood is renowned for its exceptional durability, natural oil content, and refined aesthetic appeal, making it an excellent choice for both indoor and outdoor applications. Derived from Tectona grandis and sourced from the Hunsur region of Karnataka, this teak variety is naturally resistant to decay, insects, and fungal attacks, ensuring long-lasting performance even in challenging environments.\n\n" +
//       "One of the defining characteristics of Hunsur teak is its beautiful golden-brown color combined with fine, straight grain patterns. These visual qualities enhance the elegance of finished products, making it a preferred material for premium furniture and high-end interior applications. The wood is also highly workable, allowing craftsmen to carve, shape, and finish it with ease, which makes it ideal for intricate designs and detailed woodworking.\n\n" +
//       "Thanks to its high natural oil content, Hunsur teak offers excellent moisture resistance, protecting it from warping and cracking in humid or outdoor conditions. It also exhibits outstanding dimensional stability, maintaining its shape and size despite fluctuations in weather or humidity. Additionally, Hunsur teak requires very low maintenance and can be left untreated outdoors, where it naturally ages into an attractive silver-grey patina.\n\n" +
//       "Overall, Hunsur teak is a premium timber choice for customers seeking a combination of durability, beauty, stability, and minimal maintenance. Its unique properties make it widely favored across furniture manufacturing, marine construction, and architectural applications.",
//     images: [
//       "/img/Hunsur/Hunsur Teak Cut Sizes.jpeg",
//       "/img/Hunsur/Hunsur Teak Logs1.jpeg",
//       "/img/Hunsur/Hunsur Teak Logs.jpeg",
//     ],
//     name: "Hunsur Teak",
//     benefits: [
//       "High Natural Durability",
//       "Insect & Fungal Resistance",
//       "Moisture Resistant",
//       "Excellent Workability",
//       "Dimensional Stability",
//       "Low Maintenance",
//     ],
//     origin: "Hunsur, Karnataka, India",
//     applications: [
//       "Indoor & Outdoor Furniture",
//       "Marine & Boat Decking",
//       "Architectural Elements",
//       "Flooring & Decking",
//     ],
//     available: true,
//   },

//   "Balharshah Teak": {
//     description:
//       "Balharshah teak wood is renowned for its exceptional density, strength, and long-lasting durability, making it an ideal choice for both structural and decorative applications. Sourced from the Balharshah region, this teak variety is highly valued in premium construction and furniture manufacturing due to its robust performance and classic appearance.\n\n" +
//       "One of the most distinctive features of Balharshah teak is its rich golden-brown color, which naturally deepens and develops a refined patina over time. This aging characteristic enhances the visual appeal of furniture and architectural elements, making it a preferred material for luxury homes and high-end interiors.\n\n" +
//       "Balharshah teak contains natural oils that provide excellent resistance to moisture, pests, and decay. These properties make it highly suitable for outdoor applications such as decking, garden furniture, and marine-related construction. Despite its high density and strength, the wood offers good workability, allowing craftsmen to cut, shape, and detail it with precision without compromising structural integrity.\n\n" +
//       "With its dense grain structure and superior longevity, Balharshah teak is capable of withstanding harsh environmental conditions and long-term use. Furniture and structures made from this timber can last for generations, making it a trusted choice among architects, designers, and homeowners seeking a balance of strength, beauty, and reliability.",
//     images: [
//       "/img/Balharshah/Balharshah Teak Cut Sizes.png",
//       "/img/Balharshah/Balharshah Teak Logs1.jpeg",
//       "/img/Balharshah/Balharshah Teak Logs.jpeg",
//     ],
//     name: "Balharshah Teak",
//     benefits: [
//       "High Density & Strength",
//       "Excellent Durability",
//       "Moisture & Pest Resistant",
//       "Rich Aging Patina",
//       "Good Workability",
//       "Long Service Life",
//     ],
//     origin: "Balharshah, Maharashtra, India",
//     applications: [
//       "High-end Furniture",
//       "Doors & Window Frames",
//       "Structural Beams",
//       "Outdoor Decking",
//       "Marine Applications",
//     ],
//     available: true,
//   },

//   "Mysore Honne": {
//     description:
//       "Mysore Honne wood is a premium hardwood known for its exceptional strength, durability, and rich reddish-brown color. Sourced from the Mysore region of Karnataka, this dense and heavy timber is widely used in furniture making, construction, and decorative interiors. Its natural appearance and solid performance make it a preferred choice for both functional and aesthetic applications.\n\n" +
//       "One of the key characteristics of Mysore Honne is its high durability, offering approximately 70–80% of teak's strength while being more cost-effective. The wood features a straight to slightly interlocked grain with a fine, smooth texture, giving it a refined finish comparable to high-end hardwoods. This makes it ideal for premium doors, windows, flooring, and interior paneling.\n\n" +
//       "Mysore Honne is naturally resistant to termites and fungal attacks, which significantly enhances its lifespan and reduces the need for chemical treatments. It also contains natural resins and gum, traditionally associated with medicinal value, adding to its unique character. While the wood is generally easy to work with and responds well to polishing and finishing, proper seasoning is recommended to manage moisture content and prevent warping or gum bleed.\n\n" +
//       "Overall, Mysore Honne is a versatile and reliable timber choice that balances strength, beauty, and affordability. Its durability, elegant appearance, and wide range of applications make it a popular option among architects, designers, craftsmen, and homeowners seeking long-lasting and visually appealing wood solutions.",
//     images: [
//       "/img/Mysore/Mysore Honee Log.jpeg",
//       "/img/Mysore/Mysore Honne Cut.jpeg",
//       "/img/Mysore/Mysore Honne Cut1.jpeg",
//     ],
//     name: "Mysore Honne",
//     benefits: [
//       "High Strength & Durability",
//       "Termite & Fungal Resistant",
//       "Rich Reddish-Brown Color",
//       "Fine Smooth Texture",
//       "Cost-Effective Alternative to Teak",
//       "Good Workability",
//     ],
//     origin: "Mysore, Karnataka, India",
//     applications: [
//       "Furniture",
//       "Doors & Windows",
//       "Flooring & Paneling",
//       "Interior Decoration",
//       "Decorative Woodwork",
//     ],
//     available: true,
//   },

//   "Mathi Logs": {
//     description:
//       "Matti wood, scientifically known as Terminalia elliptica and commonly referred to as the Crocodile Bark Tree, is a strong and durable hardwood widely found in India's dry and moist deciduous forests. It is valued for its structural strength, versatility, and traditional significance in construction and woodworking.\n\n" +
//       "This hardwood is known for its high density, hardness, and strength, which contribute to its excellent load-bearing capacity and resistance to wear. The wood typically ranges in color from light brown to dark brown or brownish-black, often highlighted with darker streaks and a fairly straight to slightly coarse grain. The sapwood is reddish-white and clearly distinguishable from the heartwood, which is moderately durable.\n\n" +
//       "Matti wood offers good resistance to decay, termites, and weathering, making it suitable for both indoor and outdoor applications. Although it does not possess a strong natural aroma or taste, its durability and stability make it a reliable choice for long-term use. The wood finishes well and can be worked into both functional and decorative forms.\n\n" +
//       "Traditionally, Matti wood has been used in furniture making, joinery, paneling, boat building, railway sleepers, and decorative veneers. It is also used in specialty items and musical instruments. Beyond timber usage, the tree holds ecological and cultural importance, as its leaves support tassar silk production, and its bark is used in traditional medicine and natural dyeing.\n\n" +
//       "Overall, Matti wood is a dependable and multifunctional hardwood that combines strength, durability, and aesthetic character, making it a valuable material in both traditional and modern woodworking applications.",
//     images: [
//       "/img/Matti/Matti wood Cut Sizes.png",
//       "/img/Matti/Matti Wood Logs.jpeg",
//     ],
//     name: "Mathi Logs",
//     benefits: [
//       "High Strength & Hardness",
//       "Good Durability",
//       "Termite & Weather Resistant",
//       "Attractive Natural Grain",
//       "Versatile Applications",
//     ],
//     origin: "India",
//     applications: [
//       "Furniture",
//       "Doors & Windows",
//       "Paneling & Joinery",
//       "Boat Building",
//       "Decorative Veneers",
//       "Structural Applications",
//     ],
//     available: true,
//   },

//   "Malaysia Teak": {
//     description:
//       "Malaysia teak, known for its rich color variations and dense grain pattern, is sourced from sustainably managed forests in Malaysia. It offers excellent weather resistance and natural oils that protect against insects.",
//     name: "Malaysia Teak",
//     benefits: ["Weather Resistant", "Rich Color", "Dense Grain", "Insect Resistant"],
//     origin: "Malaysia",
//     applications: ["Outdoor Structures", "Garden Furniture", "Decking"],
//     available: false,
//   },

//   "Indonesia Teak": {
//     description:
//       "Indonesia teak is highly valued for its beautiful golden-brown color that darkens with age. Sourced from the Indonesian archipelago, it's known for its tight grain pattern and natural oils that provide weather resistance.",
//     name: "Indonesia Teak",
//     benefits: ["Weather Resistant", "Aging Character", "Tight Grain", "Natural Luster"],
//     origin: "Indonesia",
//     applications: ["Luxury Furniture", "Marine Applications", "Architectural Details"],
//     available: false,
//   },

//   "Kerala Honne": {
//     description:
//       "Kerala Honne is sourced from the Western Ghats of Kerala and features a rich reddish-brown color with distinctive grain patterns. It's valued for its moderate hardness and excellent finishing qualities.",
//     name: "Kerala Honne",
//     benefits: ["Rich Color", "Distinctive Grain", "Good Finishing", "Moderate Hardness"],
//     origin: "Kerala, India",
//     applications: ["Furniture", "Interior Paneling", "Handicrafts"],
//     available: false,
//   },

//   "Australia Honne": {
//     description:
//       "Australia Honne wood is a premium hardwood known for its exceptional density, strength, and mechanical performance. Sourced from Australia, this timber is valued for its durability and ability to withstand demanding environmental conditions, making it suitable for both structural and decorative applications.\n\n" +
//       "One of the defining characteristics of Australia Honne is its high durability and stability. The wood performs well in extreme climatic conditions and offers excellent resistance to termites and fungal attacks due to its natural resins and gum content. These properties make it a reliable choice for long-lasting furniture, doors, windows, and outdoor construction when properly treated.\n\n" +
//       "Australia Honne also provides thermal efficiency, helping regulate indoor temperatures by keeping spaces cooler during summer and warmer during winter. Its straight to slightly interlocked grain combined with a fine, smooth texture gives it a refined appearance, while its natural reddish-brown color enhances the visual appeal of interiors and architectural elements.\n\n" +
//       "Despite its strength and density, Australia Honne offers good design flexibility and can be customized for a wide range of applications. With appropriate finishing and surface protection, it delivers excellent performance, environmental sustainability, and long-term value, making it a preferred choice for premium construction and interior projects.",
//     images: [
//       "/img/Australia/Australia Honne Cut Sizes.png",
//       "/img/Australia/Australia Honne Logs.jpeg",
//       "/img/Australia/Australia Honne Logs.jpg",
//     ],
//     name: "Australia Honne",
//     benefits: [
//       "High Density & Strength",
//       "Excellent Durability",
//       "Termite & Fungal Resistant",
//       "Thermal Insulation Properties",
//       "Design Flexibility",
//       "Environmentally Sustainable",
//     ],
//     origin: "Australia",
//     applications: [
//       "Furniture",
//       "Doors & Windows",
//       "Flooring",
//       "Structural Elements",
//       "Decorative Interiors",
//     ],
//     available: true,
//   },
// };

// const productHierarchy = {
//   Teak: {
//     Indian: ["Hunsur Teak", "Balharshah Teak"],
//     Imported: ["Burma Teak", "Burma Border", "Malaysia Teak", "Indonesia Teak"],
//   },
//   Honne: {
//     Indian: ["Mysore Honne", "Kerala Honne"],
//     Imported: ["Australia Honne"],
//   },
//   "Mathi Wood": {
//     Quality: ["Mathi Logs"],
//   },
// };

// const categoryLocalNames = {
//   Teak: "Sagwan",
//   Honne: "Ponna, Vegi, Bija",
//   "Mathi Wood": "Saja, Mathi",
// };

// // ─── Star Rating Component ────────────────────────────────────────────────────
// const StarRating = ({ count, max = 3 }) => (
//   <span className="flex items-center gap-0.5">
//     {Array.from({ length: max }).map((_, i) => (
//       <svg
//         key={i}
//         className={`w-3.5 h-3.5 ${i < count ? "text-[#BFA77A]" : "text-[#D9C7A5]"}`}
//         viewBox="0 0 24 24"
//         fill="currentColor"
//       >
//         <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//       </svg>
//     ))}
//   </span>
// );

// // ─── Quality Tier Selector ────────────────────────────────────────────────────
// const QualityTierSelector = ({ selectedQuality, onChange }) => {
//   const tiers = Object.keys(burmaBorderQualities);
//   return (
//     <div className="mb-6">
//       <h4 className={`text-[#5F4E2A] font-medium mb-3 flex items-center gap-2`}>
//         <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//           <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
//             strokeLinecap="round" strokeLinejoin="round" />
//         </svg>
//         Select Quality Grade
//       </h4>

//       <div className="flex flex-col gap-2">
//         {tiers.map((tier) => {
//           const q = burmaBorderQualities[tier];
//           const isActive = selectedQuality === tier;
//           return (
//             <MOTION.button
//               key={tier}
//               onClick={() => onChange(tier)}
//               whileHover={{ scale: 1.01 }}
//               whileTap={{ scale: 0.99 }}
//               className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border transition-all duration-200 text-left ${
//                 isActive
//                   ? "border-[#BFA77A] bg-gradient-to-r from-[#F0E5CF] to-[#FFFDF8] shadow-md ring-1 ring-[#BFA77A]/40"
//                   : "border-[#EADCA6] bg-white hover:border-[#BFA77A]/60 hover:bg-[#FFFDF8]"
//               }`}
//             >
//               <div className="flex items-center gap-3">
//                 {/* Grade indicator dot */}
//                 <span
//                   className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${
//                     isActive ? "bg-[#BFA77A]" : "bg-[#EADCA6]"
//                   }`}
//                 />
//                 <span className={`text-sm font-medium ${isActive ? "text-[#4A3B21]" : "text-[#7A684A]"}`}>
//                   {tier}
//                 </span>
//               </div>

//               <div className="flex items-center gap-3">
//                 <StarRating count={q.stars} />
//                 <span
//                   className={`text-[10px] font-medium px-2 py-0.5 rounded-full bg-gradient-to-r ${q.badgeColor} ${q.badgeText}`}
//                 >
//                   {q.badge}
//                 </span>
//                 {isActive && (
//                   <svg className="w-4 h-4 text-[#BFA77A]" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
//                   </svg>
//                 )}
//               </div>
//             </MOTION.button>
//           );
//         })}
//       </div>

//       {/* Visual grade comparison bar */}
//       <div className="mt-4 p-3 rounded-lg bg-[#F0E5CF]/40 border border-[#EADCA6]/60">
//         <div className="flex items-center justify-between text-[10px] text-[#7A684A] mb-2">
//           <span>Grade Quality</span>
//           <span>{burmaBorderQualities[selectedQuality].badge}</span>
//         </div>
//         <div className="h-1.5 bg-[#EADCA6] rounded-full overflow-hidden">
//           <MOTION.div
//             className="h-full rounded-full bg-gradient-to-r from-[#BFA77A] to-[#D8C69C]"
//             initial={{ width: 0 }}
//             animate={{
//               width:
//                 selectedQuality === "First Quality"
//                   ? "100%"
//                   : selectedQuality === "Second Quality"
//                   ? "66%"
//                   : "33%",
//             }}
//             transition={{ duration: 0.4, ease: "easeOut" }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// // ─── Icons ────────────────────────────────────────────────────────────────────
// const Icons = {
//   Teak: (
//     <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
//       <path d="M7 2v20M17 2v20M3 7h18M3 17h18" strokeLinecap="round" />
//     </svg>
//   ),
//   Honne: (
//     <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
//       <path d="M5 22c1.5-1.5 3-3 7-3s5.5 1.5 7 3M5 2c1.5 1.5 3 3 7 3s5.5-1.5 7-3M12 2v20" strokeLinecap="round" />
//     </svg>
//   ),
//   "Mathi Wood": (
//     <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
//       <path
//         d="M12 2C13.1046 2 14 2.89543 14 4V5H15C16.1046 5 17 5.89543 17 7C17 7.55228 16.7761 8.05228 16.4142 8.41421L15 9.82843V11H17C18.1046 11 19 11.8954 19 13C19 13.5523 18.7761 14.0523 18.4142 14.4142L16 16.8284V18H8V16.8284L5.58579 14.4142C5.22386 14.0523 5 13.5523 5 13C5 11.8954 5.89543 11 7 11H9V9.82843L7.58579 8.41421C7.22386 8.05228 7 7.55228 7 7C7 5.89543 7.89543 5 9 5H10V4C10 2.89543 10.8954 2 12 2Z"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <path d="M12 18V22" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   ),
// };

// // ─── Main Component ───────────────────────────────────────────────────────────
// export default function TimberProducts() {
//   const [mainCategory, setMainCategory] = useState("Teak");
//   const [subCategory, setSubCategory] = useState("Indian");
//   const [finalProduct, setFinalProduct] = useState("Hunsur Teak");
//   const [activeImageIndex, setActiveImageIndex] = useState(0);
//   const [isFirstLoad, setIsFirstLoad] = useState(true);
//   const [modalType, setModalType] = useState(null);
//   const descriptionRef = useRef(null);
//   const [showFullDescription, setShowFullDescription] = useState(false);
//   const [contentHeight, setContentHeight] = useState(0);

//   // ── Burma Border quality state ──────────────────────────────────────────────
//   const [selectedQuality, setSelectedQuality] = useState("First Quality");

//   const currentData = timberData[finalProduct];
//   const isBurmaBorder = finalProduct === "Burma Border";

//   // Resolve which data to show in detail panel
//   const activeData = isBurmaBorder
//     ? {
//         ...currentData,
//         description: burmaBorderQualities[selectedQuality].description,
//         benefits: burmaBorderQualities[selectedQuality].benefits,
//         images: burmaBorderQualities[selectedQuality].images,
//       }
//     : currentData;

//   useLayoutEffect(() => {
//     if (descriptionRef.current && activeData?.description) {
//       setContentHeight(descriptionRef.current.scrollHeight);
//     }
//   }, [activeData, selectedQuality]);

//   useEffect(() => {
//     setActiveImageIndex(0);
//     setShowFullDescription(false);
//     if (isFirstLoad) setTimeout(() => setIsFirstLoad(false), 1000);
//   }, [finalProduct, isFirstLoad]);

//   // Reset image index when quality changes for Burma Border
//   useEffect(() => {
//     setActiveImageIndex(0);
//   }, [selectedQuality]);

//   const updateMainCategory = (category) => {
//     setMainCategory(category);
//     const subKeys = Object.keys(productHierarchy[category]);
//     const firstSub = subKeys[0];
//     const availableProduct =
//       productHierarchy[category][firstSub].find(
//         (product) => timberData[product]?.available
//       ) || productHierarchy[category][firstSub][0];
//     setSubCategory(firstSub);
//     setFinalProduct(availableProduct);
//   };

//   const updateSubCategory = (subcategory) => {
//     const availableProduct =
//       productHierarchy[mainCategory][subcategory].find(
//         (product) => timberData[product]?.available
//       ) || productHierarchy[mainCategory][subcategory][0];
//     setSubCategory(subcategory);
//     setFinalProduct(availableProduct);
//   };

//   const availableProducts = productHierarchy[mainCategory][subCategory].filter(
//     (product) => timberData[product]?.available
//   );
//   const nonAvailableProducts = productHierarchy[mainCategory][subCategory].filter(
//     (product) => !timberData[product]?.available
//   );

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
//   };
//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
//   };

//   return (
//     <section className={`py-16 px-4 max-w-7xl mx-auto font-display ${luxury.bg} ${luxury.textMain}`}>
//       <MOTION.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-center mb-16"
//       >
//         <h2 className="text-4xl md:text-5xl tracking-tight font-bold mb-4">
//           <span className={luxury.heading}>Timber Collection</span>
//         </h2>
//         <p className={`${luxury.textSub} max-w-xl mx-auto`}>
//           Explore our curated selection of premium timber products, sourced from the finest locations around the world.
//         </p>
//       </MOTION.div>

//       {/* ── Category Navigation ── */}
//       <div className="mb-12 max-w-5xl mx-auto">
//         <div className={`${luxury.cardBg} rounded-2xl shadow-xl overflow-hidden border`}>
//           {/* Main Category Tabs */}
//           <div className="flex border-b border-[#EADCA6]">
//             {Object.keys(productHierarchy).map((category) => (
//               <button
//                 key={category}
//                 onClick={() => updateMainCategory(category)}
//                 className={`flex-1 text-center py-5 px-6 transition-all duration-300 flex items-center justify-center gap-2 ${
//                   mainCategory === category
//                     ? `bg-gradient-to-r ${luxury.tabActive} border-b-2 border-[#674C28] font-medium`
//                     : `${luxury.tabInactive} hover:bg-[#F0E5CF]/40`
//                 }`}
//               >
//                 <span className={mainCategory === category ? "text-black" : "text-[#674C28]"}>
//                   {Icons[category]}
//                 </span>
//                 <span className="text-sm leading-tight">
//                   {category}{" "}
//                   <span className="text-[11px] italic block md:inline text-[#7A684A]">
//                     ({categoryLocalNames[category]})
//                   </span>
//                 </span>
//               </button>
//             ))}
//           </div>

//           {/* Sub Category & Products */}
//           <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#EADCA6]">
//             {/* Sub Category Pills */}
//             <div className="p-6 bg-gradient-to-b from-[#F0E5CF]/50 to-[#FFFDF8]/50">
//               <h3 className={`text-sm font-semibold ${luxury.textLabel} mb-4 flex items-center`}>
//                 <span className="w-1 h-6 bg-[#BFA77A] rounded mr-2"></span>
//                 Select Type
//               </h3>
//               <div className="flex flex-col gap-2">
//                 {Object.keys(productHierarchy[mainCategory]).map((sub) => (
//                   <button
//                     key={sub}
//                     onClick={() => updateSubCategory(sub)}
//                     className={`px-5 py-3 rounded-lg text-sm transition-all flex justify-between items-center ${
//                       subCategory === sub
//                         ? "bg-gradient-to-r from-[#BFA77A] to-[#D8C69C] text-black shadow-md"
//                         : "bg-white text-[#5A4A30] border border-[#CBB27D] hover:border-[#BFA77A]"
//                     }`}
//                   >
//                     <span>{sub}</span>
//                     <span
//                       className={`text-xs rounded-full px-2 py-0.5 ${
//                         subCategory === sub ? "bg-white/20 text-black" : "bg-[#F0E5CF] text-[#674C28]"
//                       }`}
//                     >
//                       {productHierarchy[mainCategory][sub].filter(
//                         (product) => timberData[product]?.available
//                       ).length}
//                     </span>
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Products */}
//             <div className="p-6 col-span-2">
//               <h3 className={`text-sm font-semibold ${luxury.textLabel} mb-4 flex items-center`}>
//                 <span className="w-1 h-6 bg-[#BFA77A] rounded mr-2"></span>
//                 Available Products
//               </h3>

//               {availableProducts.length > 0 ? (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   {availableProducts.map((product) => {
//                     const isTiered = timberData[product]?.isTiered;
//                     return (
//                       <MOTION.div
//                         whileHover={{ scale: 1.02 }}
//                         whileTap={{ scale: 0.98 }}
//                         key={product}
//                         onClick={() => setFinalProduct(product)}
//                         className={`rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
//                           finalProduct === product
//                             ? "ring-2 ring-[#BFA77A] shadow-lg"
//                             : "shadow-sm border border-[#EADCA6] hover:shadow-md"
//                         }`}
//                       >
//                         <div className="h-24 flex items-center justify-between bg-gradient-to-r from-[#BFA77A] to-[#D8C69C] p-4">
//                           <div>
//                             <h3 className="text-black font-medium">{product}</h3>
//                             {/* Tiered badge on the product card */}
//                             {isTiered && (
//                               <span className="inline-flex items-center gap-1 mt-1 text-[10px] bg-black/10 text-black/70 px-2 py-0.5 rounded-full">
//                                 <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
//                                   <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                                 </svg>
//                                 3 Quality Grades
//                               </span>
//                             )}
//                           </div>
//                           <span
//                             className={`text-xs bg-white/20 text-black rounded-full px-2 py-1 ${
//                               finalProduct === product ? "bg-white/30" : ""
//                             }`}
//                           >
//                             {finalProduct === product ? "Selected" : "Select"}
//                           </span>
//                         </div>
//                         <div className="p-4 bg-white border-t border-[#EADCA6]/30">
//                           <p className="text-xs text-[#7A684A] line-clamp-2">
//                             {isTiered
//                               ? "Available in First, Second & Third Quality grades — select to explore each tier."
//                               : timberData[product]?.description.substring(0, 100) + "..."}
//                           </p>
//                         </div>
//                       </MOTION.div>
//                     );
//                   })}
//                 </div>
//               ) : (
//                 <div className="bg-[#F0E5CF]/30 rounded-lg p-4 text-center">
//                   <p className={`${luxury.textSub} text-sm`}>No available products in this category</p>
//                 </div>
//               )}

//               {nonAvailableProducts.length > 0 && (
//                 <div className="mt-6 pt-6 border-t border-[#EADCA6]/50">
//                   <h4 className={`text-sm font-medium ${luxury.textLabel} mb-3`}>Coming Soon</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {nonAvailableProducts.map((product) => (
//                       <span
//                         key={product}
//                         className="px-3 py-1 text-xs rounded-full bg-[#F0E5CF]/50 text-[#7A684A] border border-[#EADCA6]/30"
//                       >
//                         {product}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── Product Detail ── */}
//       {activeData && (
//         <div
//           className="relative -mx-4 md:-mx-0 rounded-2xl overflow-hidden bg-cover bg-center bg-fixed"
//           style={{
//             backgroundImage: `url('${
//               activeData.images?.[activeImageIndex]
//                 ? activeData.images[activeImageIndex].startsWith("/")
//                   ? activeData.images[activeImageIndex]
//                   : "/" + activeData.images[activeImageIndex]
//                 : "/img/bg/about-bg.jpeg"
//             }')`,
//           }}
//         >
//           <div className="absolute inset-0 bg-black/30 pointer-events-none" />

//           <div className="relative z-10 p-6 md:p-12 max-w-7xl mx-auto">
//             <MOTION.div
//               className={`${luxury.cardBg} rounded-2xl shadow-2xl overflow-hidden border`}
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               layout
//               key={`${finalProduct}-${selectedQuality}`}
//             >
//               {/* ── Header ── */}
//               <div className={`bg-gradient-to-r ${luxury.gradientBox} text-[#4A3B21] p-6 md:p-10`}>
//                 <div className="max-w-4xl mx-auto">
//                   <div className="flex items-center gap-2 flex-wrap mb-4">
//                     <span className="inline-block px-3 py-1 bg-[#4A3B21]/20 text-[#4A3B21] rounded-full text-xs font-medium">
//                       {mainCategory} / {subCategory}
//                     </span>

//                     {/* Quality badge shown in header when Burma Border is active */}
//                     {isBurmaBorder && (
//                       <MOTION.span
//                         key={selectedQuality}
//                         initial={{ opacity: 0, scale: 0.85 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.25 }}
//                         className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${burmaBorderQualities[selectedQuality].badgeColor} ${burmaBorderQualities[selectedQuality].badgeText}`}
//                       >
//                         <StarRating count={burmaBorderQualities[selectedQuality].stars} />
//                         {burmaBorderQualities[selectedQuality].badge}
//                       </MOTION.span>
//                     )}
//                   </div>

//                   <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
//                     <div>
//                       <h3 className="text-3xl font-bold mb-1">{currentData.name}</h3>
//                       {isBurmaBorder && (
//                         <p className="text-[#5F4E2A] text-sm font-medium mb-1">
//                           {selectedQuality}
//                         </p>
//                       )}
//                       <p className="text-[#7A684A]">{currentData.origin}</p>
//                     </div>
//                     <div className="flex gap-2 flex-wrap">
//                       {currentData.applications?.slice(0, 3).map((app, i) => (
//                         <span
//                           key={i}
//                           className="text-xs bg-[#4A3B21]/10 px-3 py-1 rounded-full border border-[#4A3B21]/20"
//                         >
//                           {app}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* ── Body ── */}
//               <div className="max-w-6xl mx-auto px-6 py-10">
//                 <div className="grid md:grid-cols-5 gap-8">
//                   {/* Gallery */}
//                   <div className="md:col-span-3 order-2 md:order-1">
//                     {activeData.images ? (
//                       <>
//                         <div
//                           className="relative rounded-xl overflow-hidden aspect-video bg-[#F0E5CF] shadow-inner mb-4 cursor-pointer"
//                           onClick={() => setModalType("image")}
//                         >
//                           <MOTION.img
//                             key={`${selectedQuality}-${activeImageIndex}`}
//                             src={activeData.images[activeImageIndex]}
//                             alt={`Product ${activeImageIndex + 1}`}
//                             className="w-full h-full object-cover"
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ duration: 0.3 }}
//                           />
//                         </div>

//                         <div className="flex gap-2 pb-2">
//                           {activeData.images.map((img, i) => (
//                             <button
//                               key={i}
//                               onClick={() => setActiveImageIndex(i)}
//                               className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all ${
//                                 i === activeImageIndex
//                                   ? "ring-2 ring-[#BFA77A] opacity-100"
//                                   : "opacity-70 hover:opacity-100"
//                               }`}
//                             >
//                               <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
//                             </button>
//                           ))}
//                         </div>

//                         {modalType === "image" && (
//                           <div
//                             className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
//                             onClick={() => setModalType(null)}
//                           >
//                             <div
//                               className="relative bg-white rounded-3xl p-4 max-w-5xl w-full mx-4 shadow-2xl"
//                               onClick={(e) => e.stopPropagation()}
//                             >
//                               <button
//                                 className="absolute top-3 right-4 text-3xl text-gray-600 hover:text-black transition-colors z-10"
//                                 onClick={() => setModalType(null)}
//                               >
//                                 &times;
//                               </button>
//                               <div className="w-full h-[70vh] flex items-center justify-center">
//                                 <ZoomViewer
//                                   src={activeData.images[activeImageIndex]}
//                                   zoom={2.5}
//                                   className="w-full h-full object-contain rounded-xl"
//                                 />
//                               </div>
//                               <div className="text-center mt-3 text-sm text-gray-500">
//                                 {activeImageIndex + 1} / {activeData.images.length}
//                               </div>
//                             </div>
//                           </div>
//                         )}
//                       </>
//                     ) : (
//                       <div className="rounded-xl overflow-hidden aspect-video bg-[#F0E5CF] shadow-inner flex items-center justify-center">
//                         <p className="text-[#7A684A] text-center px-6">
//                           {currentData.available ? "Product images coming soon" : "This product is currently not available"}
//                         </p>
//                       </div>
//                     )}
//                   </div>

//                   {/* Info Panel */}
//                   <MOTION.div
//                     className="md:col-span-2 order-1 md:order-2"
//                     variants={containerVariants}
//                     initial="hidden"
//                     animate="visible"
//                     key={`info-${finalProduct}-${selectedQuality}`}
//                   >
//                     {/* ── Quality Tier Selector (Burma Border only) ── */}
//                     {isBurmaBorder && (
//                       <MOTION.div variants={itemVariants}>
//                         <QualityTierSelector
//                           selectedQuality={selectedQuality}
//                           onChange={(q) => {
//                             setSelectedQuality(q);
//                             setShowFullDescription(false);
//                           }}
//                         />
//                       </MOTION.div>
//                     )}

//                     {/* Description */}
//                     <MOTION.div
//                       variants={itemVariants}
//                       className="mb-6 bg-gradient-to-br from-[#F0E5CF]/30 via-white to-[#E5D4B7]/20 p-5 rounded-xl border border-[#EADCA6] relative overflow-hidden"
//                     >
//                       <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none">
//                         <svg viewBox="0 0 100 100" className="w-full h-full">
//                           <path d="M0,20 Q25,10 50,20 T100,20" stroke="#674C28" fill="none" strokeWidth="2" />
//                           <path d="M0,40 Q25,30 50,40 T100,40" stroke="#674C28" fill="none" strokeWidth="2" />
//                           <path d="M0,60 Q25,50 50,60 T100,60" stroke="#674C28" fill="none" strokeWidth="2" />
//                           <path d="M0,80 Q25,70 50,80 T100,80" stroke="#674C28" fill="none" strokeWidth="2" />
//                         </svg>
//                       </div>

//                       <h4 className={`${luxury.textLabel} font-medium mb-3 flex items-center gap-2`}>
//                         <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
//                           <path d="M12 2L2 7l10 5 10-5-10-5z" />
//                           <path d="M2 17l10 5 10-5M2 12l10 5 10-5" opacity="0.6" />
//                         </svg>
//                         Description
//                       </h4>

//                       <div
//                         className="relative overflow-hidden transition-[max-height] duration-500 ease-in-out"
//                         style={{ maxHeight: showFullDescription ? contentHeight : 96 }}
//                       >
//                         <div
//                           ref={descriptionRef}
//                           className={`${luxury.textMain} text-sm leading-relaxed`}
//                         >
//                           {activeData.description.split("\n\n").map((para, index, arr) => (
//                             <React.Fragment key={index}>
//                               <p
//                                 className={`mb-4 ${index === 0 ? "font-medium text-[#4A3B21]" : ""}`}
//                                 dangerouslySetInnerHTML={{ __html: highlightKeywords(para) }}
//                               />
//                               {index < arr.length - 1 && (
//                                 <div className="flex items-center gap-2 my-4">
//                                   <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#CBB27D]/40 to-transparent"></div>
//                                   <div className="w-1.5 h-1.5 rounded-full bg-[#BFA77A]"></div>
//                                   <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#CBB27D]/40 to-transparent"></div>
//                                 </div>
//                               )}
//                             </React.Fragment>
//                           ))}
//                         </div>
//                         {!showFullDescription && (
//                           <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#F0E5CF] via-[#F0E5CF]/60 to-transparent pointer-events-none" />
//                         )}
//                       </div>

//                       <span
//                         onClick={() => setShowFullDescription((prev) => !prev)}
//                         className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-[#8B6A2E] hover:text-[#674C28] cursor-pointer select-none transition-colors"
//                       >
//                         {showFullDescription ? (
//                           <>
//                             Read less
//                             <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
//                               <path d="M18 15l-6-6-6 6" strokeLinecap="round" strokeLinejoin="round" />
//                             </svg>
//                           </>
//                         ) : (
//                           <>
//                             Read more
//                             <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
//                               <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
//                             </svg>
//                           </>
//                         )}
//                       </span>
//                     </MOTION.div>

//                     {/* Benefits */}
//                     <MOTION.div variants={itemVariants} className="mb-6">
//                       <h4 className={`${luxury.textLabel} font-medium mb-3 flex items-center`}>
//                         <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                           <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
//                         </svg>
//                         Key Benefits
//                       </h4>
//                       <div className="grid grid-cols-2 gap-2">
//                         {activeData.benefits?.map((benefit, i) => (
//                           <div key={i} className={`flex items-center gap-2 text-sm ${luxury.textMain}`}>
//                             <span className="w-1.5 h-1.5 bg-[#BFA77A] rounded-full flex-shrink-0"></span>
//                             {benefit}
//                           </div>
//                         ))}
//                       </div>
//                     </MOTION.div>

//                     {/* Applications */}
//                     <MOTION.div variants={itemVariants} className="mb-6">
//                       <h4 className={`${luxury.textLabel} font-medium mb-3 flex items-center`}>
//                         <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                           <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
//                         </svg>
//                         Applications
//                       </h4>
//                       <div className="flex flex-wrap gap-2">
//                         {currentData.applications?.map((app, i) => (
//                           <span key={i} className="px-3 py-1 rounded-full text-xs bg-[#F0E5CF] text-[#5F4E2A]">
//                             {app}
//                           </span>
//                         ))}
//                       </div>
//                     </MOTION.div>

//                     {/* CTA */}
//                     <MOTION.div variants={itemVariants}>
//                       {currentData.available ? (
//                         <button
//                           onClick={() => {
//                             const contactSection = document.getElementById("contact");
//                             if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
//                           }}
//                           className="w-full py-3 px-6 bg-gradient-to-r from-[#BFA77A] to-[#D8C69C] text-black rounded-lg hover:from-[#A89069] hover:to-[#C7B58B] cursor-pointer transition-colors text-sm font-medium shadow-md flex items-center justify-center gap-2"
//                         >
//                           <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                             <path
//                               d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                             />
//                           </svg>
//                           {isBurmaBorder
//                             ? `Inquire About ${selectedQuality}`
//                             : "Inquire About Product"}
//                         </button>
//                       ) : (
//                         <button
//                           disabled
//                           className="w-full py-3 px-6 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed text-sm font-medium shadow-md flex items-center justify-center gap-2"
//                         >
//                           <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                             <path
//                               d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                             />
//                           </svg>
//                           Currently Unavailable
//                         </button>
//                       )}
//                     </MOTION.div>
//                   </MOTION.div>
//                 </div>
//               </div>
//             </MOTION.div>
//           </div>
//         </div>
//       )}

//       {/* Footnote */}
//       <div className="max-w-lg mx-auto mt-12 text-center">
//         <p className={`text-sm ${luxury.textSub}`}>
//           Our timber products are ethically sourced and meet international sustainability standards. Contact us for custom orders and bulk inquiries.
//         </p>
//       </div>
//     </section>
//   );
// }


import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { motion as MOTION } from "framer-motion";
import ZoomViewer from "./ZoomViewer";

// Luxury theme pack
const luxury = {
  bg: "bg-[#F8F4EF]",
  heading: "text-[#674C28]",
  tabActive: "from-[#BFA77A] to-[#D8C69C] text-black",
  tabInactive: "bg-white text-[#5A4A30] border-[#CBB27D] hover:ring-yellow-500",
  cardBg: "bg-[#FFFDF8]/70 border-[#EADCA6]",
  gradientBox: "from-[#F0E5CF] via-[#E5D4B7] to-[#D9C7A5]",
  textMain: "text-[#4A3B21]",
  textSub: "text-[#7A684A]",
  textLabel: "text-[#5F4E2A]",
};

const highlightKeywords = (text) => {
  const keywords = [
    "durability",
    "natural oil[s]?",
    "moisture resistance",
    "termite[s]?",
    "fungal",
    "strength",
    "workability",
    "dimensional stability",
    "low maintenance",
    "golden[- ]brown",
    "dense",
    "hardwood",
  ];
  let highlighted = text;
  keywords.forEach((word) => {
    const regex = new RegExp(`(${word})`, "gi");
    highlighted = highlighted.replace(
      regex,
      `<span class="font-semibold text-[#674C28]">$1</span>`
    );
  });
  return highlighted;
};

// ─── Quality tier config for Burma Border ────────────────────────────────────
const burmaBorderQualities = {
  "First Quality": {
    label: "First Quality",
    stars: 3,
    badge: "Grade A — Premium",
    badgeColor: "from-[#BFA77A] to-[#D8C69C]",
    badgeText: "text-[#3A2C10]",
    description:
      "First Quality Burma Border teak is a premium, highly durable, and moisture-resistant hardwood sourced from Myanmar's border regions. It features high natural oil content, a tight and enriched grain structure, and excellent dimensional stability — making it ideal for high-end furniture, doors, and outdoor decking. Known for being termite-proof and exceptionally long-lasting.\n\n" +
      "Quality & Characteristics: Considered top-grade (Grade A), this timber offers excellent durability, a rich brown color, and high resistance to rot and decay. Its tight grain, high natural oil content, and superior density set it apart from lower grades. Minimal sapwood and high heartwood content are the hallmarks of this classification.\n\n" +
      "Appearance & Origin: Typically rich brown in color with a consistent, attractive texture. Sourced from the border regions of Myanmar (formerly Burma), where mature trees yield dense, oil-rich heartwood.\n\n" +
      "Applications: Ideal for premium furniture, doors, window frames, marine and outdoor applications, and any project demanding long-term structural and aesthetic performance.",
    benefits: [
      "Grade A — Minimal Sapwood",
      "High Natural Oil Content",
      "Tight & Enriched Grain",
      "Termite-Proof & Rot Resistant",
      "Superior Density & Strength",
      "Excellent Moisture Resistance",
    ],
    images: [
      "/img/BurmaBorder/First/Burma_Border_First_1.jpeg",
      "/img/BurmaBorder/First/Burma_Border_First_2.jpeg",
      "/img/BurmaBorder/First/Burma_Border_First_3.jpeg",
    ],
  },
  "Second Quality": {
    label: "Second Quality",
    stars: 2,
    badge: "Grade B — Standard",
    badgeColor: "from-[#A89069] to-[#C4AF87]",
    badgeText: "text-[#3A2C10]",
    description:
      "Burma Border Second Quality teak (Grade B) is a durable, high-oil-content timber originating from Myanmar, suitable for furniture, structural, outdoor, and construction use. It typically features a golden-brown color with a straight or slightly interlocked grain, and may have fewer and smaller knots compared to Grade C, though it is generally less dense than Grade A.\n\n" +
      "Quality & Characteristics: Grade B timber may carry some minor defects but still retains good rot-resistant properties due to its natural oil content. While durability is slightly lower than Grade A, it remains a reliable and cost-effective choice for a wide range of applications.\n\n" +
      "Appearance & Origin: Rich golden-brown color, often with a straight or slightly wavy grain. Sourced from Burma (Myanmar), this grade offers good visual appeal suitable for both visible and structural uses.\n\n" +
      "Usage: Suitable for both indoor furniture and exterior applications where durability and value are equally important.",
    benefits: [
      "Grade B — Good Rot Resistance",
      "Golden-Brown Color",
      "High Natural Oil Content",
      "Suitable for Indoor & Outdoor",
      "Cost-Effective Durability",
      "Straight to Slightly Wavy Grain",
    ],
    images: [
      "/img/BurmaBorder/Second/Burma_Border_Second_1.jpeg",
      "/img/BurmaBorder/Second/Burma_Border_Second_2.jpeg",
      "/img/BurmaBorder/Second/Burma_Border_Second_3.jpeg",
    ],
  },
  "Third Quality": {
    label: "Third Quality",
    stars: 1,
    badge: "Grade C — Economy",
    badgeColor: "from-[#8C7455] to-[#A88E6A]",
    badgeText: "text-white",
    description:
      "Third Quality Burma Border teak (Grade C) is the lowest grade of teak wood, derived from the outer sapwood of mature trees or from young, immature trees. Unlike Grade A teak which comes from dense, oily heartwood, Grade C contains little to no natural protective oils.\n\n" +
      "Color & Appearance: Pale white, creamish, or very light golden in color, often with a highly uneven or patchy appearance. Lacks the rich, consistent tone associated with higher grades.\n\n" +
      "Texture & Durability: Being primarily sapwood, it is soft, porous, and lacks the natural silica and oils that make teak famous for durability. It is very prone to rotting and insect infestation, and is unsuitable for outdoor furniture or marine use as it cannot withstand moisture or UV exposure.\n\n" +
      "Origin & Verdict: Often sourced from plantation-grown trees in African countries (Ghana, Nigeria, Togo, Benin) or other regions where younger trees are harvested. Suitable only for indoor, low-usage decorative items — a poor choice for long-lasting or heavy-duty furniture.",
    benefits: [
      "Budget / Economy Option",
      "Indoor Decorative Use Only",
      "Light / Pale Appearance",
      "Not for Outdoor or Marine Use",
      "Plantation or Young Tree Source",
      "Low Natural Oil Content",
    ],
    images: [
      "/img/BurmaBorder/Third/Burma_Border_Third_1.jpeg",
      "/img/BurmaBorder/Third/Burma_Border_Third_2.jpeg",
      "/img/BurmaBorder/Third/Burma_Border_Third_3.jpeg",
    ],
  },
};

// ─── Timber Data ──────────────────────────────────────────────────────────────
const timberData = {
  "Burma Teak": {
    description:
      "Burma teak, also known as Burmese teak, is one of the most premium and sought-after hardwoods in the world. Renowned for its exceptional durability, natural beauty, and resistance to decay, this teak variety has been widely used for centuries in both luxury woodworking and demanding outdoor applications.\n\n" +
      "The wood typically displays a rich golden to medium brown color that deepens gracefully with age, enhancing its visual appeal over time. It features a predominantly straight grain, though occasional wavy or interlocked patterns add a distinctive character. The slightly coarse texture is complemented by a natural oily sheen, which contributes to its moisture resistance and long-lasting performance.\n\n" +
      "Burma teak is a dense and robust hardwood, offering excellent mechanical strength and wear resistance. Its high natural oil content provides outstanding protection against decay, termites, and other pests, making it particularly suitable for outdoor environments and marine conditions. The heartwood is especially durable and remains stable even when exposed to harsh weather.\n\n" +
      "Despite its density, Burma teak is relatively easy to work with and responds well to finishing. While its natural silica content can dull tools, it glues and finishes effectively with proper surface preparation. Because of these qualities, it has long been a preferred material for high-quality furniture, flooring, decking, and shipbuilding.\n\n" +
      "Overall, Burma teak represents the perfect balance of strength, elegance, and longevity. Its proven performance, historical significance, and timeless appearance make it a premium choice for both traditional craftsmanship and modern architectural applications.",
    images: [
      "/img/Burma/Burma Teak Cut Sizes.jpeg",
      "/img/Burma/Burma Teak Cut Sizes1.jpeg",
      "/img/Burma/Burma Teak logs.jpeg",
    ],
    name: "Burma Teak",
    benefits: [
      "Exceptional Durability",
      "High Natural Oil Content",
      "Termite & Decay Resistant",
      "Weather & Moisture Resistant",
      "Strong & Dense Hardwood",
      "Premium Aesthetic Appeal",
    ],
    origin: "Myanmar (Burma)",
    applications: [
      "Outdoor Furniture",
      "Boat Building & Marine Decking",
      "Flooring & Decking",
      "Luxury Interiors",
      "Architectural Woodwork",
    ],
    available: true,
  },

  "Burma Border": {
    name: "Burma Border Teak",
    origin: "Myanmar Border Region",
    available: true,
    isTiered: true,
    qualities: burmaBorderQualities,
    applications: [
      "Furniture Manufacturing",
      "Doors & Window Frames",
      "Flooring & Decking",
      "Structural Elements",
      "Outdoor Applications",
    ],
  },

  "Hunsur Teak": {
    description:
      "Hunsur teak wood is renowned for its exceptional durability, natural oil content, and refined aesthetic appeal, making it an excellent choice for both indoor and outdoor applications. Derived from Tectona grandis and sourced from the Hunsur region of Karnataka, this teak variety is naturally resistant to decay, insects, and fungal attacks, ensuring long-lasting performance even in challenging environments.\n\n" +
      "One of the defining characteristics of Hunsur teak is its beautiful golden-brown color combined with fine, straight grain patterns. These visual qualities enhance the elegance of finished products, making it a preferred material for premium furniture and high-end interior applications. The wood is also highly workable, allowing craftsmen to carve, shape, and finish it with ease, which makes it ideal for intricate designs and detailed woodworking.\n\n" +
      "Thanks to its high natural oil content, Hunsur teak offers excellent moisture resistance, protecting it from warping and cracking in humid or outdoor conditions. It also exhibits outstanding dimensional stability, maintaining its shape and size despite fluctuations in weather or humidity. Additionally, Hunsur teak requires very low maintenance and can be left untreated outdoors, where it naturally ages into an attractive silver-grey patina.\n\n" +
      "Overall, Hunsur teak is a premium timber choice for customers seeking a combination of durability, beauty, stability, and minimal maintenance. Its unique properties make it widely favored across furniture manufacturing, marine construction, and architectural applications.",
    images: [
      "/img/Hunsur/Hunsur Teak Cut Sizes.jpeg",
      "/img/Hunsur/Hunsur Teak Logs1.jpeg",
      "/img/Hunsur/Hunsur Teak Logs.jpeg",
    ],
    name: "Hunsur Teak",
    benefits: [
      "High Natural Durability",
      "Insect & Fungal Resistance",
      "Moisture Resistant",
      "Excellent Workability",
      "Dimensional Stability",
      "Low Maintenance",
    ],
    origin: "Hunsur, Karnataka, India",
    applications: [
      "Indoor & Outdoor Furniture",
      "Marine & Boat Decking",
      "Architectural Elements",
      "Flooring & Decking",
    ],
    available: true,
  },

  "Balharshah Teak": {
    description:
      "Balharshah teak wood is renowned for its exceptional density, strength, and long-lasting durability, making it an ideal choice for both structural and decorative applications. Sourced from the Balharshah region, this teak variety is highly valued in premium construction and furniture manufacturing due to its robust performance and classic appearance.\n\n" +
      "One of the most distinctive features of Balharshah teak is its rich golden-brown color, which naturally deepens and develops a refined patina over time. This aging characteristic enhances the visual appeal of furniture and architectural elements, making it a preferred material for luxury homes and high-end interiors.\n\n" +
      "Balharshah teak contains natural oils that provide excellent resistance to moisture, pests, and decay. These properties make it highly suitable for outdoor applications such as decking, garden furniture, and marine-related construction. Despite its high density and strength, the wood offers good workability, allowing craftsmen to cut, shape, and detail it with precision without compromising structural integrity.\n\n" +
      "With its dense grain structure and superior longevity, Balharshah teak is capable of withstanding harsh environmental conditions and long-term use. Furniture and structures made from this timber can last for generations, making it a trusted choice among architects, designers, and homeowners seeking a balance of strength, beauty, and reliability.",
    images: [
      "/img/Balharshah/Balharshah Teak Cut Sizes.png",
      "/img/Balharshah/Balharshah Teak Logs1.jpeg",
      "/img/Balharshah/Balharshah Teak Logs.jpeg",
    ],
    name: "Balharshah Teak",
    benefits: [
      "High Density & Strength",
      "Excellent Durability",
      "Moisture & Pest Resistant",
      "Rich Aging Patina",
      "Good Workability",
      "Long Service Life",
    ],
    origin: "Balharshah, Maharashtra, India",
    applications: [
      "High-end Furniture",
      "Doors & Window Frames",
      "Structural Beams",
      "Outdoor Decking",
      "Marine Applications",
    ],
    available: true,
  },

  "Mysore Honne": {
    description:
      "Mysore Honne wood is a premium hardwood known for its exceptional strength, durability, and rich reddish-brown color. Sourced from the Mysore region of Karnataka, this dense and heavy timber is widely used in furniture making, construction, and decorative interiors. Its natural appearance and solid performance make it a preferred choice for both functional and aesthetic applications.\n\n" +
      "One of the key characteristics of Mysore Honne is its high durability, offering approximately 70–80% of teak's strength while being more cost-effective. The wood features a straight to slightly interlocked grain with a fine, smooth texture, giving it a refined finish comparable to high-end hardwoods. This makes it ideal for premium doors, windows, flooring, and interior paneling.\n\n" +
      "Mysore Honne is naturally resistant to termites and fungal attacks, which significantly enhances its lifespan and reduces the need for chemical treatments. It also contains natural resins and gum, traditionally associated with medicinal value, adding to its unique character. While the wood is generally easy to work with and responds well to polishing and finishing, proper seasoning is recommended to manage moisture content and prevent warping or gum bleed.\n\n" +
      "Overall, Mysore Honne is a versatile and reliable timber choice that balances strength, beauty, and affordability. Its durability, elegant appearance, and wide range of applications make it a popular option among architects, designers, craftsmen, and homeowners seeking long-lasting and visually appealing wood solutions.",
    images: [
      "/img/Mysore/Mysore Honee Log.jpeg",
      "/img/Mysore/Mysore Honne Cut.jpeg",
      "/img/Mysore/Mysore Honne Cut1.jpeg",
    ],
    name: "Mysore Honne",
    benefits: [
      "High Strength & Durability",
      "Termite & Fungal Resistant",
      "Rich Reddish-Brown Color",
      "Fine Smooth Texture",
      "Cost-Effective Alternative to Teak",
      "Good Workability",
    ],
    origin: "Mysore, Karnataka, India",
    applications: [
      "Furniture",
      "Doors & Windows",
      "Flooring & Paneling",
      "Interior Decoration",
      "Decorative Woodwork",
    ],
    available: true,
  },

  "Mathi Logs": {
    description:
      "Matti wood, scientifically known as Terminalia elliptica and commonly referred to as the Crocodile Bark Tree, is a strong and durable hardwood widely found in India's dry and moist deciduous forests. It is valued for its structural strength, versatility, and traditional significance in construction and woodworking.\n\n" +
      "This hardwood is known for its high density, hardness, and strength, which contribute to its excellent load-bearing capacity and resistance to wear. The wood typically ranges in color from light brown to dark brown or brownish-black, often highlighted with darker streaks and a fairly straight to slightly coarse grain. The sapwood is reddish-white and clearly distinguishable from the heartwood, which is moderately durable.\n\n" +
      "Matti wood offers good resistance to decay, termites, and weathering, making it suitable for both indoor and outdoor applications. Although it does not possess a strong natural aroma or taste, its durability and stability make it a reliable choice for long-term use. The wood finishes well and can be worked into both functional and decorative forms.\n\n" +
      "Traditionally, Matti wood has been used in furniture making, joinery, paneling, boat building, railway sleepers, and decorative veneers. It is also used in specialty items and musical instruments. Beyond timber usage, the tree holds ecological and cultural importance, as its leaves support tassar silk production, and its bark is used in traditional medicine and natural dyeing.\n\n" +
      "Overall, Matti wood is a dependable and multifunctional hardwood that combines strength, durability, and aesthetic character, making it a valuable material in both traditional and modern woodworking applications.",
    images: [
      "/img/Matti/Matti wood Cut Sizes.png",
      "/img/Matti/Matti Wood Logs.jpeg",
    ],
    name: "Mathi Logs",
    benefits: [
      "High Strength & Hardness",
      "Good Durability",
      "Termite & Weather Resistant",
      "Attractive Natural Grain",
      "Versatile Applications",
    ],
    origin: "India",
    applications: [
      "Furniture",
      "Doors & Windows",
      "Paneling & Joinery",
      "Boat Building",
      "Decorative Veneers",
      "Structural Applications",
    ],
    available: true,
  },

  "Malaysia Teak": {
    description:
      "Malaysia teak, known for its rich color variations and dense grain pattern, is sourced from sustainably managed forests in Malaysia. It offers excellent weather resistance and natural oils that protect against insects.",
    name: "Malaysia Teak",
    benefits: ["Weather Resistant", "Rich Color", "Dense Grain", "Insect Resistant"],
    origin: "Malaysia",
    applications: ["Outdoor Structures", "Garden Furniture", "Decking"],
    available: false,
  },

  "Indonesia Teak": {
    description:
      "Indonesia teak is highly valued for its beautiful golden-brown color that darkens with age. Sourced from the Indonesian archipelago, it's known for its tight grain pattern and natural oils that provide weather resistance.",
    name: "Indonesia Teak",
    benefits: ["Weather Resistant", "Aging Character", "Tight Grain", "Natural Luster"],
    origin: "Indonesia",
    applications: ["Luxury Furniture", "Marine Applications", "Architectural Details"],
    available: false,
  },

  "Kerala Honne": {
    description:
      "Kerala Honne is sourced from the Western Ghats of Kerala and features a rich reddish-brown color with distinctive grain patterns. It's valued for its moderate hardness and excellent finishing qualities.",
    name: "Kerala Honne",
    benefits: ["Rich Color", "Distinctive Grain", "Good Finishing", "Moderate Hardness"],
    origin: "Kerala, India",
    applications: ["Furniture", "Interior Paneling", "Handicrafts"],
    available: false,
  },

  "Australia Honne": {
    description:
      "Australia Honne wood is a premium hardwood known for its exceptional density, strength, and mechanical performance. Sourced from Australia, this timber is valued for its durability and ability to withstand demanding environmental conditions, making it suitable for both structural and decorative applications.\n\n" +
      "One of the defining characteristics of Australia Honne is its high durability and stability. The wood performs well in extreme climatic conditions and offers excellent resistance to termites and fungal attacks due to its natural resins and gum content. These properties make it a reliable choice for long-lasting furniture, doors, windows, and outdoor construction when properly treated.\n\n" +
      "Australia Honne also provides thermal efficiency, helping regulate indoor temperatures by keeping spaces cooler during summer and warmer during winter. Its straight to slightly interlocked grain combined with a fine, smooth texture gives it a refined appearance, while its natural reddish-brown color enhances the visual appeal of interiors and architectural elements.\n\n" +
      "Despite its strength and density, Australia Honne offers good design flexibility and can be customized for a wide range of applications. With appropriate finishing and surface protection, it delivers excellent performance, environmental sustainability, and long-term value, making it a preferred choice for premium construction and interior projects.",
    images: [
      "/img/Australia/Australia Honne Cut Sizes.png",
      "/img/Australia/Australia Honne Logs.jpeg",
      "/img/Australia/Australia Honne Logs.jpg",
    ],
    name: "Australia Honne",
    benefits: [
      "High Density & Strength",
      "Excellent Durability",
      "Termite & Fungal Resistant",
      "Thermal Insulation Properties",
      "Design Flexibility",
      "Environmentally Sustainable",
    ],
    origin: "Australia",
    applications: [
      "Furniture",
      "Doors & Windows",
      "Flooring",
      "Structural Elements",
      "Decorative Interiors",
    ],
    available: true,
  },
};

const productHierarchy = {
  Teak: {
    Indian: ["Hunsur Teak", "Balharshah Teak"],
    Imported: ["Burma Teak", "Burma Border", "Malaysia Teak", "Indonesia Teak"],
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

// ─── Star Rating Component ────────────────────────────────────────────────────
const StarRating = ({ count, max = 3 }) => (
  <span className="flex items-center gap-0.5">
    {Array.from({ length: max }).map((_, i) => (
      <svg
        key={i}
        className={`w-3.5 h-3.5 ${i < count ? "text-[#BFA77A]" : "text-[#D9C7A5]"}`}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </span>
);

// ─── Quality Tier Selector ────────────────────────────────────────────────────
const QualityTierSelector = ({ selectedQuality, onChange }) => {
  const tiers = Object.keys(burmaBorderQualities);
  return (
    <div className="mb-6">
      <h4 className={`text-[#5F4E2A] font-medium mb-3 flex items-center gap-2`}>
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Select Quality Grade
      </h4>

      <div className="flex flex-col gap-2">
        {tiers.map((tier) => {
          const q = burmaBorderQualities[tier];
          const isActive = selectedQuality === tier;
          return (
            <MOTION.button
              key={tier}
              onClick={() => onChange(tier)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border transition-all duration-200 text-left ${
                isActive
                  ? "border-[#BFA77A] bg-gradient-to-r from-[#F0E5CF] to-[#FFFDF8] shadow-md ring-1 ring-[#BFA77A]/40"
                  : "border-[#EADCA6] bg-white hover:border-[#BFA77A]/60 hover:bg-[#FFFDF8]"
              }`}
            >
              <div className="flex items-center gap-3">
                {/* Grade indicator dot */}
                <span
                  className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${
                    isActive ? "bg-[#BFA77A]" : "bg-[#EADCA6]"
                  }`}
                />
                <span className={`text-sm font-medium ${isActive ? "text-[#4A3B21]" : "text-[#7A684A]"}`}>
                  {tier}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <StarRating count={q.stars} />
                <span
                  className={`text-[10px] font-medium px-2 py-0.5 rounded-full bg-gradient-to-r ${q.badgeColor} ${q.badgeText}`}
                >
                  {q.badge}
                </span>
                {isActive && (
                  <svg className="w-4 h-4 text-[#BFA77A]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                )}
              </div>
            </MOTION.button>
          );
        })}
      </div>

      {/* Visual grade comparison bar */}
      <div className="mt-4 p-3 rounded-lg bg-[#F0E5CF]/40 border border-[#EADCA6]/60">
        <div className="flex items-center justify-between text-[10px] text-[#7A684A] mb-2">
          <span>Grade Quality</span>
          <span>{burmaBorderQualities[selectedQuality].badge}</span>
        </div>
        <div className="h-1.5 bg-[#EADCA6] rounded-full overflow-hidden">
          <MOTION.div
            className="h-full rounded-full bg-gradient-to-r from-[#BFA77A] to-[#D8C69C]"
            initial={{ width: 0 }}
            animate={{
              width:
                selectedQuality === "First Quality"
                  ? "100%"
                  : selectedQuality === "Second Quality"
                  ? "66%"
                  : "33%",
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
};

// ─── Icons ────────────────────────────────────────────────────────────────────
const Icons = {
  Teak: (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
      <path d="M7 2v20M17 2v20M3 7h18M3 17h18" strokeLinecap="round" />
    </svg>
  ),
  Honne: (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
      <path d="M5 22c1.5-1.5 3-3 7-3s5.5 1.5 7 3M5 2c1.5 1.5 3 3 7 3s5.5-1.5 7-3M12 2v20" strokeLinecap="round" />
    </svg>
  ),
  "Mathi Wood": (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
      <path
        d="M12 2C13.1046 2 14 2.89543 14 4V5H15C16.1046 5 17 5.89543 17 7C17 7.55228 16.7761 8.05228 16.4142 8.41421L15 9.82843V11H17C18.1046 11 19 11.8954 19 13C19 13.5523 18.7761 14.0523 18.4142 14.4142L16 16.8284V18H8V16.8284L5.58579 14.4142C5.22386 14.0523 5 13.5523 5 13C5 11.8954 5.89543 11 7 11H9V9.82843L7.58579 8.41421C7.22386 8.05228 7 7.55228 7 7C7 5.89543 7.89543 5 9 5H10V4C10 2.89543 10.8954 2 12 2Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 18V22" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

// ─── Main Component ───────────────────────────────────────────────────────────
export default function TimberProducts() {
  const [mainCategory, setMainCategory] = useState("Teak");
  const [subCategory, setSubCategory] = useState("Indian");
  const [finalProduct, setFinalProduct] = useState("Hunsur Teak");
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [modalType, setModalType] = useState(null);
  const descriptionRef = useRef(null);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);

  // ── Burma Border quality state ──────────────────────────────────────────────
  const [selectedQuality, setSelectedQuality] = useState("First Quality");

  const currentData = timberData[finalProduct];
  const isBurmaBorder = finalProduct === "Burma Border";

  // Resolve which data to show in detail panel
  const activeData = isBurmaBorder
    ? {
        ...currentData,
        description: burmaBorderQualities[selectedQuality].description,
        benefits: burmaBorderQualities[selectedQuality].benefits,
        images: burmaBorderQualities[selectedQuality].images,
      }
    : currentData;

  useLayoutEffect(() => {
    if (descriptionRef.current && activeData?.description) {
      setContentHeight(descriptionRef.current.scrollHeight);
    }
  }, [activeData, selectedQuality]);

  useEffect(() => {
    setActiveImageIndex(0);
    setShowFullDescription(false);
    if (isFirstLoad) setTimeout(() => setIsFirstLoad(false), 1000);
  }, [finalProduct, isFirstLoad]);

  // Reset image index when quality changes for Burma Border
  useEffect(() => {
    setActiveImageIndex(0);
  }, [selectedQuality]);

  const updateMainCategory = (category) => {
    setMainCategory(category);
    const subKeys = Object.keys(productHierarchy[category]);
    const firstSub = subKeys[0];
    const availableProduct =
      productHierarchy[category][firstSub].find(
        (product) => timberData[product]?.available
      ) || productHierarchy[category][firstSub][0];
    setSubCategory(firstSub);
    setFinalProduct(availableProduct);
  };

  const updateSubCategory = (subcategory) => {
    const availableProduct =
      productHierarchy[mainCategory][subcategory].find(
        (product) => timberData[product]?.available
      ) || productHierarchy[mainCategory][subcategory][0];
    setSubCategory(subcategory);
    setFinalProduct(availableProduct);
  };

  const availableProducts = productHierarchy[mainCategory][subCategory].filter(
    (product) => timberData[product]?.available
  );
  const nonAvailableProducts = productHierarchy[mainCategory][subCategory].filter(
    (product) => !timberData[product]?.available
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section className={`py-16 px-4 max-w-7xl mx-auto font-display ${luxury.bg} ${luxury.textMain}`}>
      <MOTION.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl tracking-tight font-bold mb-4">
          <span className={luxury.heading}>Timber Collection</span>
        </h2>
        <p className={`${luxury.textSub} max-w-xl mx-auto`}>
          Explore our curated selection of premium timber products, sourced from the finest locations around the world.
        </p>
      </MOTION.div>

      {/* ── Category Navigation ── */}
      <div className="mb-12 max-w-5xl mx-auto">
        <div className={`${luxury.cardBg} rounded-2xl shadow-xl overflow-hidden border`}>
          {/* Main Category Tabs */}
          <div className="flex border-b border-[#EADCA6]">
            {Object.keys(productHierarchy).map((category) => (
              <button
                key={category}
                onClick={() => updateMainCategory(category)}
                className={`flex-1 text-center py-5 px-6 transition-all duration-300 flex items-center justify-center gap-2 ${
                  mainCategory === category
                    ? `bg-gradient-to-r ${luxury.tabActive} border-b-2 border-[#674C28] font-medium`
                    : `${luxury.tabInactive} hover:bg-[#F0E5CF]/40`
                }`}
              >
                <span className={mainCategory === category ? "text-black" : "text-[#674C28]"}>
                  {Icons[category]}
                </span>
                <span className="text-sm leading-tight">
                  {category}{" "}
                  <span className="text-[11px] italic block md:inline text-[#7A684A]">
                    ({categoryLocalNames[category]})
                  </span>
                </span>
              </button>
            ))}
          </div>

          {/* Sub Category & Products */}
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#EADCA6]">
            {/* Sub Category Pills */}
            <div className="p-6 bg-gradient-to-b from-[#F0E5CF]/50 to-[#FFFDF8]/50">
              <h3 className={`text-sm font-semibold ${luxury.textLabel} mb-4 flex items-center`}>
                <span className="w-1 h-6 bg-[#BFA77A] rounded mr-2"></span>
                Select Type
              </h3>
              <div className="flex flex-col gap-2">
                {Object.keys(productHierarchy[mainCategory]).map((sub) => (
                  <button
                    key={sub}
                    onClick={() => updateSubCategory(sub)}
                    className={`px-5 py-3 rounded-lg text-sm transition-all flex justify-between items-center ${
                      subCategory === sub
                        ? "bg-gradient-to-r from-[#BFA77A] to-[#D8C69C] text-black shadow-md"
                        : "bg-white text-[#5A4A30] border border-[#CBB27D] hover:border-[#BFA77A]"
                    }`}
                  >
                    <span>{sub}</span>
                    <span
                      className={`text-xs rounded-full px-2 py-0.5 ${
                        subCategory === sub ? "bg-white/20 text-black" : "bg-[#F0E5CF] text-[#674C28]"
                      }`}
                    >
                      {productHierarchy[mainCategory][sub].filter(
                        (product) => timberData[product]?.available
                      ).length}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Products */}
            <div className="p-6 col-span-2">
              <h3 className={`text-sm font-semibold ${luxury.textLabel} mb-4 flex items-center`}>
                <span className="w-1 h-6 bg-[#BFA77A] rounded mr-2"></span>
                Available Products
              </h3>

              {availableProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {availableProducts.map((product) => {
                    const isTiered = timberData[product]?.isTiered;
                    return (
                      <MOTION.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        key={product}
                        onClick={() => setFinalProduct(product)}
                        className={`rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                          finalProduct === product
                            ? "ring-2 ring-[#BFA77A] shadow-lg"
                            : "shadow-sm border border-[#EADCA6] hover:shadow-md"
                        }`}
                      >
                        <div className="h-24 flex items-center justify-between bg-gradient-to-r from-[#BFA77A] to-[#D8C69C] p-4">
                          <div>
                            <h3 className="text-black font-medium">{product}</h3>
                            {/* Tiered badge on the product card */}
                            {isTiered && (
                              <span className="inline-flex items-center gap-1 mt-1 text-[10px] bg-black/10 text-black/70 px-2 py-0.5 rounded-full">
                                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                                3 Quality Grades
                              </span>
                            )}
                          </div>
                          <span
                            className={`text-xs bg-white/20 text-black rounded-full px-2 py-1 ${
                              finalProduct === product ? "bg-white/30" : ""
                            }`}
                          >
                            {finalProduct === product ? "Selected" : "Select"}
                          </span>
                        </div>
                        <div className="p-4 bg-white border-t border-[#EADCA6]/30">
                          <p className="text-xs text-[#7A684A] line-clamp-2">
                            {isTiered
                              ? "Available in First, Second & Third Quality grades — select to explore each tier."
                              : timberData[product]?.description.substring(0, 100) + "..."}
                          </p>
                        </div>
                      </MOTION.div>
                    );
                  })}
                </div>
              ) : (
                <div className="bg-[#F0E5CF]/30 rounded-lg p-4 text-center">
                  <p className={`${luxury.textSub} text-sm`}>No available products in this category</p>
                </div>
              )}

              {nonAvailableProducts.length > 0 && (
                <div className="mt-6 pt-6 border-t border-[#EADCA6]/50">
                  <h4 className={`text-sm font-medium ${luxury.textLabel} mb-3`}>Coming Soon</h4>
                  <div className="flex flex-wrap gap-2">
                    {nonAvailableProducts.map((product) => (
                      <span
                        key={product}
                        className="px-3 py-1 text-xs rounded-full bg-[#F0E5CF]/50 text-[#7A684A] border border-[#EADCA6]/30"
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

      {/* ── Product Detail ── */}
      {activeData && (
        <div
          className="relative -mx-4 md:-mx-0 rounded-2xl overflow-hidden bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('${
              activeData.images?.[activeImageIndex]
                ? activeData.images[activeImageIndex].startsWith("/")
                  ? activeData.images[activeImageIndex]
                  : "/" + activeData.images[activeImageIndex]
                : "/img/bg/about-bg.jpeg"
            }')`,
          }}
        >
          <div className="absolute inset-0 bg-black/30 pointer-events-none" />

          <div className="relative z-10 p-6 md:p-12 max-w-7xl mx-auto">
            <MOTION.div
              className={`${luxury.cardBg} rounded-2xl shadow-2xl overflow-hidden border`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              layout
              key={`${finalProduct}-${selectedQuality}`}
            >
              {/* ── Header ── */}
              <div className={`bg-gradient-to-r ${luxury.gradientBox} text-[#4A3B21] p-6 md:p-10`}>
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center gap-2 flex-wrap mb-4">
                    <span className="inline-block px-3 py-1 bg-[#4A3B21]/20 text-[#4A3B21] rounded-full text-xs font-medium">
                      {mainCategory} / {subCategory}
                    </span>

                    {/* Quality badge shown in header when Burma Border is active */}
                    {isBurmaBorder && (
                      <MOTION.span
                        key={selectedQuality}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.25 }}
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${burmaBorderQualities[selectedQuality].badgeColor} ${burmaBorderQualities[selectedQuality].badgeText}`}
                      >
                        <StarRating count={burmaBorderQualities[selectedQuality].stars} />
                        {burmaBorderQualities[selectedQuality].badge}
                      </MOTION.span>
                    )}
                  </div>

                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                      <h3 className="text-3xl font-bold mb-1">{currentData.name}</h3>
                      {isBurmaBorder && (
                        <p className="text-[#5F4E2A] text-sm font-medium mb-1">
                          {selectedQuality}
                        </p>
                      )}
                      <p className="text-[#7A684A]">{currentData.origin}</p>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {currentData.applications?.slice(0, 3).map((app, i) => (
                        <span
                          key={i}
                          className="text-xs bg-[#4A3B21]/10 px-3 py-1 rounded-full border border-[#4A3B21]/20"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Body ── */}
              <div className="max-w-6xl mx-auto px-6 py-10">
                <div className="grid md:grid-cols-5 gap-8">
                  {/* Gallery */}
                  <div className="md:col-span-3 order-2 md:order-1">
                    {activeData.images ? (
                      <>
                        <div
                          className="relative rounded-xl overflow-hidden aspect-video bg-[#F0E5CF] shadow-inner mb-4 cursor-pointer"
                          onClick={() => setModalType("image")}
                        >
                          <MOTION.img
                            key={`${selectedQuality}-${activeImageIndex}`}
                            src={activeData.images[activeImageIndex]}
                            alt={`Product ${activeImageIndex + 1}`}
                            className="w-full h-full object-cover"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>

                        <div className="flex gap-2 pb-2">
                          {activeData.images.map((img, i) => (
                            <button
                              key={i}
                              onClick={() => setActiveImageIndex(i)}
                              className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all ${
                                i === activeImageIndex
                                  ? "ring-2 ring-[#BFA77A] opacity-100"
                                  : "opacity-70 hover:opacity-100"
                              }`}
                            >
                              <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                            </button>
                          ))}
                        </div>

                        {modalType === "image" && (
                          <div
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
                            onClick={() => setModalType(null)}
                          >
                            <div
                              className="relative bg-white rounded-3xl p-4 max-w-5xl w-full mx-4 shadow-2xl"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <button
                                className="absolute top-3 right-4 text-3xl text-gray-600 hover:text-black transition-colors z-10"
                                onClick={() => setModalType(null)}
                              >
                                &times;
                              </button>
                              <div className="w-full h-[70vh] flex items-center justify-center">
                                <ZoomViewer
                                  src={activeData.images[activeImageIndex]}
                                  zoom={2.5}
                                  className="w-full h-full object-contain rounded-xl"
                                />
                              </div>
                              <div className="text-center mt-3 text-sm text-gray-500">
                                {activeImageIndex + 1} / {activeData.images.length}
                              </div>
                            </div>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="rounded-xl overflow-hidden aspect-video bg-[#F0E5CF] shadow-inner flex items-center justify-center">
                        <p className="text-[#7A684A] text-center px-6">
                          {currentData.available ? "Product images coming soon" : "This product is currently not available"}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Info Panel */}
                  <MOTION.div
                    className="md:col-span-2 order-1 md:order-2"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    key={`info-${finalProduct}-${selectedQuality}`}
                  >
                    {/* ── Quality Tier Selector (Burma Border only) ── */}
                    {isBurmaBorder && (
                      <MOTION.div variants={itemVariants}>
                        <QualityTierSelector
                          selectedQuality={selectedQuality}
                          onChange={(q) => {
                            setSelectedQuality(q);
                            setShowFullDescription(false);
                          }}
                        />
                      </MOTION.div>
                    )}

                    {/* Description */}
                    <MOTION.div
                      variants={itemVariants}
                      className="mb-6 bg-gradient-to-br from-[#F0E5CF]/30 via-white to-[#E5D4B7]/20 p-5 rounded-xl border border-[#EADCA6] relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <path d="M0,20 Q25,10 50,20 T100,20" stroke="#674C28" fill="none" strokeWidth="2" />
                          <path d="M0,40 Q25,30 50,40 T100,40" stroke="#674C28" fill="none" strokeWidth="2" />
                          <path d="M0,60 Q25,50 50,60 T100,60" stroke="#674C28" fill="none" strokeWidth="2" />
                          <path d="M0,80 Q25,70 50,80 T100,80" stroke="#674C28" fill="none" strokeWidth="2" />
                        </svg>
                      </div>

                      <h4 className={`${luxury.textLabel} font-medium mb-3 flex items-center gap-2`}>
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2L2 7l10 5 10-5-10-5z" />
                          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" opacity="0.6" />
                        </svg>
                        Description
                      </h4>

                      <div
                        className="relative overflow-hidden transition-[max-height] duration-500 ease-in-out"
                        style={{ maxHeight: showFullDescription ? contentHeight : 96 }}
                      >
                        <div
                          ref={descriptionRef}
                          className={`${luxury.textMain} text-sm leading-relaxed`}
                        >
                          {activeData.description.split("\n\n").map((para, index, arr) => (
                            <React.Fragment key={index}>
                              <p
                                className={`mb-4 ${index === 0 ? "font-medium text-[#4A3B21]" : ""}`}
                                dangerouslySetInnerHTML={{ __html: highlightKeywords(para) }}
                              />
                              {index < arr.length - 1 && (
                                <div className="flex items-center gap-2 my-4">
                                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#CBB27D]/40 to-transparent"></div>
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#BFA77A]"></div>
                                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#CBB27D]/40 to-transparent"></div>
                                </div>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                        {!showFullDescription && (
                          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#F0E5CF] via-[#F0E5CF]/60 to-transparent pointer-events-none" />
                        )}
                      </div>

                      <span
                        onClick={() => setShowFullDescription((prev) => !prev)}
                        className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-[#8B6A2E] hover:text-[#674C28] cursor-pointer select-none transition-colors"
                      >
                        {showFullDescription ? (
                          <>
                            Read less
                            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                              <path d="M18 15l-6-6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </>
                        ) : (
                          <>
                            Read more
                            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                              <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </>
                        )}
                      </span>
                    </MOTION.div>

                    {/* Benefits */}
                    <MOTION.div variants={itemVariants} className="mb-6">
                      <h4 className={`${luxury.textLabel} font-medium mb-3 flex items-center`}>
                        <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Key Benefits
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {activeData.benefits?.map((benefit, i) => (
                          <div key={i} className={`flex items-center gap-2 text-sm ${luxury.textMain}`}>
                            <span className="w-1.5 h-1.5 bg-[#BFA77A] rounded-full flex-shrink-0"></span>
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </MOTION.div>

                    {/* Applications */}
                    <MOTION.div variants={itemVariants} className="mb-6">
                      <h4 className={`${luxury.textLabel} font-medium mb-3 flex items-center`}>
                        <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Applications
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {currentData.applications?.map((app, i) => (
                          <span key={i} className="px-3 py-1 rounded-full text-xs bg-[#F0E5CF] text-[#5F4E2A]">
                            {app}
                          </span>
                        ))}
                      </div>
                    </MOTION.div>

                  </MOTION.div>
                </div>
              </div>
            </MOTION.div>
          </div>
        </div>
      )}

      {/* Footnote */}
      <div className="max-w-lg mx-auto mt-12 text-center">
        <p className={`text-sm ${luxury.textSub}`}>
          Our timber products are ethically sourced and meet international sustainability standards. Contact us for custom orders and bulk inquiries.
        </p>
      </div>
    </section>
  );
}