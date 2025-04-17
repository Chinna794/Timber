

// // // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // // import { timberData } from './data/timberProducts';
// // // // // // // // // // import { motion as MOTION } from 'framer-motion';

// // // // // // // // // // const categories = Object.keys(timberData);

// // // // // // // // // // export default function TimberProducts() {
// // // // // // // // // //   const [activeCategory, setActiveCategory] = useState('Burma Teak');

// // // // // // // // // //   return (
// // // // // // // // // //     <section className="py-20 px-6 bg-white dark:bg-neutral-900">
// // // // // // // // // //       <div className="max-w-7xl mx-auto">
// // // // // // // // // //         {/* Section Title */}
// // // // // // // // // //         <h2 className="text-4xl font-playfair font-bold text-center mb-12 bg-gradient-to-r from-amber-800 to-yellow-600 text-transparent bg-clip-text tracking-tight">
// // // // // // // // // //           Timber Products
// // // // // // // // // //         </h2>

// // // // // // // // // //         {/* Category Tabs */}
// // // // // // // // // //         <div className="flex flex-wrap justify-center gap-4 mb-14">
// // // // // // // // // //           {categories.map((category) => (
// // // // // // // // // //             <button
// // // // // // // // // //               key={category}
// // // // // // // // // //               onClick={() => setActiveCategory(category)}
// // // // // // // // // //               className={`px-6 py-2 rounded-full font-medium text-sm border transition-all duration-300 hover:scale-105 hover:shadow-md
// // // // // // // // // //                 ${
// // // // // // // // // //                   activeCategory === category
// // // // // // // // // //                     ? 'bg-gradient-to-r from-black to-neutral-800 text-white dark:from-white dark:to-gray-300 dark:text-black shadow-lg scale-105'
// // // // // // // // // //                     : 'bg-white text-black dark:bg-black dark:text-white border-gray-400 hover:ring-2 hover:ring-amber-500'
// // // // // // // // // //                 }
// // // // // // // // // //               `}
// // // // // // // // // //             >
// // // // // // // // // //               {category}
// // // // // // // // // //             </button>
// // // // // // // // // //           ))}
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Product Cards */}
// // // // // // // // // //         <MOTION.div
// // // // // // // // // //           key={activeCategory}
// // // // // // // // // //           initial={{ opacity: 0, y: 20 }}
// // // // // // // // // //           animate={{ opacity: 1, y: 0 }}
// // // // // // // // // //           transition={{ duration: 0.5 }}
// // // // // // // // // //           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
// // // // // // // // // //         >
// // // // // // // // // //           {timberData[activeCategory].map((product) => (
// // // // // // // // // //             <div
// // // // // // // // // //               key={product.id}
// // // // // // // // // //               className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl p-5 transition-transform duration-300 hover:scale-[1.03] hover:ring-2 hover:ring-amber-600 group"
// // // // // // // // // //             >
// // // // // // // // // //               <img
// // // // // // // // // //                 src={product.image}
// // // // // // // // // //                 alt={product.name}
// // // // // // // // // //                 className="w-full h-52 object-cover rounded-lg mb-4 group-hover:brightness-105 transition duration-300"
// // // // // // // // // //               />
// // // // // // // // // //               <h3 className="text-xl font-bold font-playfair text-amber-800 dark:text-amber-400 mb-1 tracking-tight">
// // // // // // // // // //                 {product.name}
// // // // // // // // // //               </h3>
// // // // // // // // // //               <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 italic">
// // // // // // // // // //                 {product.title}
// // // // // // // // // //               </p>
// // // // // // // // // //               <div className="text-sm space-y-1 text-gray-700 dark:text-gray-200">
// // // // // // // // // //                 <p><span className="font-semibold">Price:</span> {product.price}</p>
// // // // // // // // // //                 <p><span className="font-semibold">Grade:</span> {product.grade}</p>
// // // // // // // // // //                 <p><span className="font-semibold">Moisture:</span> {product.moisture}</p>
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>
// // // // // // // // // //           ))}
// // // // // // // // // //         </MOTION.div>
// // // // // // // // // //       </div>
// // // // // // // // // //     </section>
// // // // // // // // // //   );
// // // // // // // // // // }


// // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // import { timberData } from './data/timberProducts';
// // // // // // // // // import { motion as MOTION } from 'framer-motion';

// // // // // // // // // const categories = Object.keys(timberData);

// // // // // // // // // export default function TimberProducts() {
// // // // // // // // //   const [activeCategory, setActiveCategory] = useState('Burma Teak');
// // // // // // // // //   const [activeProduct, setActiveProduct] = useState(timberData['Burma Teak'][0]);

// // // // // // // // //   // When category changes, set the first product of that category as active
// // // // // // // // //   const handleCategoryChange = (category) => {
// // // // // // // // //     setActiveCategory(category);
// // // // // // // // //     setActiveProduct(timberData[category][0]);
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <section className="py-20 px-6 bg-white dark:bg-neutral-900">
// // // // // // // // //       <div className="max-w-7xl mx-auto">
// // // // // // // // //         {/* Section Title */}
// // // // // // // // //         <h2 className="text-4xl font-playfair font-bold text-center mb-12 bg-gradient-to-r from-amber-800 to-yellow-600 text-transparent bg-clip-text tracking-tight">
// // // // // // // // //           Timber Products
// // // // // // // // //         </h2>

// // // // // // // // //         {/* Category Tabs */}
// // // // // // // // //         <div className="flex flex-wrap justify-center gap-4 mb-14">
// // // // // // // // //           {categories.map((category) => (
// // // // // // // // //             <button
// // // // // // // // //               key={category}
// // // // // // // // //               onClick={() => handleCategoryChange(category)}
// // // // // // // // //               className={`px-6 py-2 rounded-full font-medium text-sm border transition-all duration-300 hover:scale-105 hover:shadow-md
// // // // // // // // //                 ${
// // // // // // // // //                   activeCategory === category
// // // // // // // // //                     ? 'bg-gradient-to-r from-black to-neutral-800 text-white dark:from-white dark:to-gray-300 dark:text-black shadow-lg scale-105'
// // // // // // // // //                     : 'bg-white text-black dark:bg-black dark:text-white border-gray-400 hover:ring-2 hover:ring-amber-500'
// // // // // // // // //                 }
// // // // // // // // //               `}
// // // // // // // // //             >
// // // // // // // // //               {category}
// // // // // // // // //             </button>
// // // // // // // // //           ))}
// // // // // // // // //         </div>

// // // // // // // // //         {/* Product Display Container - modified to match screenshot 2 */}
// // // // // // // // //         <MOTION.div
// // // // // // // // //           key={activeCategory}
// // // // // // // // //           initial={{ opacity: 0 }}
// // // // // // // // //           animate={{ opacity: 1 }}
// // // // // // // // //           transition={{ duration: 0.5 }}
// // // // // // // // //           className="border border-gray-300 p-6 rounded-lg"
// // // // // // // // //         >
// // // // // // // // //           <div className="flex flex-col md:flex-row">
// // // // // // // // //             {/* Left side - Product Card */}
// // // // // // // // //             <div className="w-full md:w-1/3 border border-gray-300 p-4 rounded-lg">
// // // // // // // // //               <img
// // // // // // // // //                 src={activeProduct.image}
// // // // // // // // //                 alt={activeProduct.name}
// // // // // // // // //                 className="w-full h-52 object-cover rounded-lg mb-4"
// // // // // // // // //               />
// // // // // // // // //               <h3 className="text-xl font-bold font-playfair text-amber-800 dark:text-amber-400 mb-1 tracking-tight">
// // // // // // // // //                 {activeProduct.name}
// // // // // // // // //               </h3>
// // // // // // // // //               <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 italic">
// // // // // // // // //                 {activeProduct.title}
// // // // // // // // //               </p>
// // // // // // // // //               <div className="text-sm space-y-1 text-gray-700 dark:text-gray-200">
// // // // // // // // //                 <p><span className="font-semibold">Price:</span> {activeProduct.price}</p>
// // // // // // // // //                 <p><span className="font-semibold">Grade:</span> {activeProduct.grade}</p>
// // // // // // // // //                 <p><span className="font-semibold">Moisture:</span> {activeProduct.moisture}</p>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
            
// // // // // // // // //             {/* Right side - Empty space as in screenshot 2 */}
// // // // // // // // //             <div className="w-full md:w-2/3"></div>
// // // // // // // // //           </div>
// // // // // // // // //         </MOTION.div>
// // // // // // // // //       </div>
// // // // // // // // //     </section>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // import React, { useState } from 'react';
// // // // // // // // import { timberData } from './data/timberProducts';
// // // // // // // // import { motion as MOTION } from 'framer-motion';

// // // // // // // // const categories = Object.keys(timberData);

// // // // // // // // export default function TimberProducts() {
// // // // // // // //   const [activeCategory, setActiveCategory] = useState('Burma Teak');
// // // // // // // //   const [activeProduct, setActiveProduct] = useState(timberData['Burma Teak'][0]);

// // // // // // // //   const handleCategoryChange = (category) => {
// // // // // // // //     setActiveCategory(category);
// // // // // // // //     setActiveProduct(timberData[category][0]);
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <section className="py-20 px-6 bg-gradient-to-br from-indigo-800 via-purple-700 to-blue-600">
// // // // // // // //       <div className="max-w-7xl mx-auto">
// // // // // // // //         {/* Section Title */}
// // // // // // // //         <h2 className="text-4xl font-playfair font-bold text-center mb-12 text-white tracking-tight">
// // // // // // // //           Timber Products
// // // // // // // //         </h2>

// // // // // // // //         {/* Category Tabs */}
// // // // // // // //         <div className="flex flex-wrap justify-center gap-4 mb-14">
// // // // // // // //           {categories.map((category) => (
// // // // // // // //             <button
// // // // // // // //               key={category}
// // // // // // // //               onClick={() => handleCategoryChange(category)}
// // // // // // // //               className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-md
// // // // // // // //                 ${
// // // // // // // //                   activeCategory === category
// // // // // // // //                     ? 'bg-white/20 backdrop-blur-md text-white border border-white/30 shadow-lg scale-105'
// // // // // // // //                     : 'bg-white/10 backdrop-blur-sm text-white/80 border border-white/20 hover:bg-white/15'
// // // // // // // //                 }
// // // // // // // //               `}
// // // // // // // //             >
// // // // // // // //               {category}
// // // // // // // //             </button>
// // // // // // // //           ))}
// // // // // // // //         </div>

// // // // // // // //         {/* Product Display Container - true glassmorphism effect */}
// // // // // // // //         <MOTION.div
// // // // // // // //           key={activeCategory}
// // // // // // // //           initial={{ opacity: 0 }}
// // // // // // // //           animate={{ opacity: 1 }}
// // // // // // // //           transition={{ duration: 0.5 }}
// // // // // // // //           className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/20"
// // // // // // // //         >
// // // // // // // //           <div className="flex flex-col md:flex-row">
// // // // // // // //             {/* Left side - Product Card with glassmorphism */}
// // // // // // // //             <div className="w-full md:w-1/3 bg-white/10 backdrop-blur-md rounded-2xl p-5 shadow-lg border border-white/20">
// // // // // // // //               <img
// // // // // // // //                 src={activeProduct.image}
// // // // // // // //                 alt={activeProduct.name}
// // // // // // // //                 className="w-full h-52 object-cover rounded-lg mb-4"
// // // // // // // //               />
// // // // // // // //               <h3 className="text-xl font-bold font-playfair text-white mb-1 tracking-tight">
// // // // // // // //                 {activeProduct.name}
// // // // // // // //               </h3>
// // // // // // // //               <p className="text-sm text-gray-100 mb-3 italic">
// // // // // // // //                 {activeProduct.title}
// // // // // // // //               </p>
// // // // // // // //               <div className="text-sm space-y-1 text-gray-100">
// // // // // // // //                 <p><span className="font-semibold">Price:</span> {activeProduct.price}</p>
// // // // // // // //                 <p><span className="font-semibold">Grade:</span> {activeProduct.grade}</p>
// // // // // // // //                 <p><span className="font-semibold">Moisture:</span> {activeProduct.moisture}</p>
// // // // // // // //               </div>
// // // // // // // //             </div>
            
// // // // // // // //             {/* Right side - Empty space with glassmorphism content area */}
// // // // // // // //             <div className="w-full md:w-2/3 ml-0 md:ml-6 mt-6 md:mt-0">
// // // // // // // //               {/* This area is intentionally left empty as per the screenshot */}
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </MOTION.div>
// // // // // // // //       </div>
// // // // // // // //     </section>
// // // // // // // //   );
// // // // // // // // }



// // // // // // // import React, { useState } from 'react';
// // // // // // // import { timberData } from './data/timberProducts';
// // // // // // // import { motion as MOTION } from 'framer-motion';

// // // // // // // const categories = Object.keys(timberData);

// // // // // // // export default function TimberProducts() {
// // // // // // //   const [activeCategory, setActiveCategory] = useState('Burma Teak');
// // // // // // //   const [activeProduct, setActiveProduct] = useState(timberData['Burma Teak'][0]);

// // // // // // //   const handleCategoryChange = (category) => {
// // // // // // //     setActiveCategory(category);
// // // // // // //     setActiveProduct(timberData[category][0]);
// // // // // // //   };

// // // // // // // return (
// // // // // // //     <section className="py-12 px-4 sm:px-6 bg-white">
// // // // // // //       <div className="max-w-7xl mx-auto">
// // // // // // //         {/* Company Logo and Title */}
// // // // // // //         <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-amber-800 tracking-tight mb-8">
// // // // // // //           Timber Products
// // // // // // //         </h2>
  
// // // // // // //         {/* Category Tabs */}
// // // // // // //         <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-14">
// // // // // // //           {categories.map((category) => (
// // // // // // //             <button
// // // // // // //               key={category}
// // // // // // //               onClick={() => handleCategoryChange(category)}
// // // // // // //               className={`px-4 sm:px-6 py-2 rounded-full font-medium text-sm border transition-all duration-300 hover:scale-105 hover:shadow-md
// // // // // // //                 ${
// // // // // // //                   activeCategory === category
// // // // // // //                     ? 'bg-gradient-to-r from-black to-neutral-800 text-white shadow-lg scale-105'
// // // // // // //                     : 'bg-white text-black border-gray-400 hover:ring-2 hover:ring-amber-500'
// // // // // // //                 }
// // // // // // //               `}
// // // // // // //             >
// // // // // // //               {category}
// // // // // // //             </button>
// // // // // // //           ))}
// // // // // // //         </div>
  
// // // // // // //         {/* Product Display Container */}
// // // // // // //         <div className="bg-gradient-to-br from-indigo-700 via-purple-700 to-blue-600 rounded-3xl p-3 sm:p-6">
// // // // // // //           <MOTION.div
// // // // // // //             key={activeCategory}
// // // // // // //             initial={{ opacity: 0 }}
// // // // // // //             animate={{ opacity: 1 }}
// // // // // // //             transition={{ duration: 0.5 }}
// // // // // // //             className="bg-white/10 backdrop-blur-sm sm:backdrop-blur-md rounded-3xl p-4 sm:p-6 border border-white/10 sm:border-white/20 shadow-xl"
// // // // // // //           >
// // // // // // //             <div className="flex flex-col md:flex-row">
// // // // // // //               {/* Left side - Product Card */}
// // // // // // //               <div className="w-full md:w-1/3 bg-white/10 backdrop-blur-sm sm:backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 sm:border-white/20 shadow-lg">
// // // // // // //                 <img
// // // // // // //                   src={activeProduct.image}
// // // // // // //                   alt={activeProduct.name}
// // // // // // //                   className="w-full h-44 sm:h-52 object-cover rounded-lg mb-3 sm:mb-4"
// // // // // // //                 />
// // // // // // //                 <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
// // // // // // //                   {activeProduct.name}
// // // // // // //                 </h3>
// // // // // // //                 <p className="text-sm text-white/80 mb-2 sm:mb-3">
// // // // // // //                   {activeProduct.title}
// // // // // // //                 </p>
// // // // // // //                 <div className="text-sm space-y-1 text-white/90">
// // // // // // //                   <p><span className="font-semibold">Price:</span> {activeProduct.price}</p>
// // // // // // //                   <p><span className="font-semibold">Grade:</span> {activeProduct.grade}</p>
// // // // // // //                   <p><span className="font-semibold">Moisture:</span> {activeProduct.moisture}</p>
// // // // // // //                 </div>
// // // // // // //               </div>
  
// // // // // // //               {/* Right side - intentionally empty */}
// // // // // // //               <div className="w-full md:w-2/3 ml-0 md:ml-6 mt-6 md:mt-0" />
// // // // // // //             </div>
// // // // // // //           </MOTION.div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </section>
// // // // // // //   );
  
// // // // // // // }


// // // // // // import React, { useState } from 'react';
// // // // // // import { timberData } from './data/timberProducts';
// // // // // // import { motion as MOTION } from 'framer-motion';

// // // // // // const categories = Object.keys(timberData);

// // // // // // export default function TimberProducts() {
// // // // // //   const [activeCategory, setActiveCategory] = useState('Burma Teak');
// // // // // //   const [activeProduct, setActiveProduct] = useState(timberData['Burma Teak'][0]);

// // // // // //   const handleCategoryChange = (category) => {
// // // // // //     setActiveCategory(category);
// // // // // //     setActiveProduct(timberData[category][0]);
// // // // // //   };

// // // // // //   return (
// // // // // //     <section className="py-12 px-4 sm:px-6 bg-white">
// // // // // //       <div className="max-w-7xl mx-auto">
// // // // // //         {/* Title */}
// // // // // //         <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-amber-800 tracking-tight mb-8">
// // // // // //           Timber Products
// // // // // //         </h2>

// // // // // //         {/* Category Tabs */}
// // // // // //         <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-14">
// // // // // //           {categories.map((category) => (
// // // // // //             <button
// // // // // //               key={category}
// // // // // //               onClick={() => handleCategoryChange(category)}
// // // // // //               className={`px-4 sm:px-6 py-2 rounded-full font-medium text-sm border transition-all duration-300 hover:scale-105 hover:shadow-md
// // // // // //                 ${
// // // // // //                   activeCategory === category
// // // // // //                     ? 'bg-gradient-to-r from-black to-neutral-800 text-white shadow-lg scale-105'
// // // // // //                     : 'bg-white text-black border-gray-400 hover:ring-2 hover:ring-amber-500'
// // // // // //                 }
// // // // // //               `}
// // // // // //             >
// // // // // //               {category}
// // // // // //             </button>
// // // // // //           ))}
// // // // // //         </div>

// // // // // //         {/* Product Display Container */}
// // // // // //         <div className="bg-gradient-to-br from-indigo-700 via-purple-700 to-blue-600 rounded-3xl p-3 sm:p-6">
// // // // // //           <MOTION.div
// // // // // //             key={activeCategory}
// // // // // //             initial={{ opacity: 0 }}
// // // // // //             animate={{ opacity: 1 }}
// // // // // //             transition={{ duration: 0.5 }}
// // // // // //             className="bg-white/10 backdrop-blur-sm sm:backdrop-blur-md rounded-3xl p-4 sm:p-6 border border-white/10 sm:border-white/20 shadow-xl"
// // // // // //           >
// // // // // //             <div className="flex flex-col md:flex-row">
// // // // // //               {/* Left side - Product Card */}
// // // // // //               <div className="w-full md:w-1/3 bg-white/10 backdrop-blur-sm sm:backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 sm:border-white/20 shadow-lg">
// // // // // //                 <img
// // // // // //                   src={activeProduct.image}
// // // // // //                   alt={activeProduct.name}
// // // // // //                   className="w-full h-44 sm:h-52 object-cover rounded-lg mb-3 sm:mb-4"
// // // // // //                 />
// // // // // //                 <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
// // // // // //                   {activeProduct.name}
// // // // // //                 </h3>
// // // // // //                 <p className="text-sm text-white/80 mb-2 sm:mb-3">
// // // // // //                   {activeProduct.title}
// // // // // //                 </p>
// // // // // //                 <div className="text-sm space-y-1 text-white/90">
// // // // // //                   <p><span className="font-semibold">Price:</span> {activeProduct.price}</p>
// // // // // //                   <p><span className="font-semibold">Grade:</span> {activeProduct.grade}</p>
// // // // // //                   <p><span className="font-semibold">Moisture:</span> {activeProduct.moisture}</p>
// // // // // //                 </div>
// // // // // //               </div>

// // // // // //               {/* Right side (desktop) and bottom (mobile) - Description */}
// // // // // // <div className="w-full md:w-2/3 ml-0 md:ml-6 mt-6 text-white/90">
// // // // // //   <p className="text-base leading-relaxed font-medium">
// // // // // //     Burma teak, known for its high quality and durability, is prized for its exceptional oil content,
// // // // // //     which provides natural resistance to water, decay, and pests. This wood is also known for its strength,
// // // // // //     straight grain, and ability to resist splitting, cracking, and weathering. It's a popular choice for
// // // // // //     outdoor furniture, decking, and boat decks due to its weather-resistant properties.
// // // // // //   </p>
// // // // // // </div>

// // // // // //             </div>
// // // // // //           </MOTION.div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // }


// // // // // import React, { useState } from 'react';
// // // // // import { timberData } from './data/timberProducts';
// // // // // import { motion as MOTION } from 'framer-motion';

// // // // // const categories = Object.keys(timberData);

// // // // // export default function TimberProducts() {
// // // // //   const [activeCategory, setActiveCategory] = useState('Burma Teak');
// // // // //   const [activeProduct, setActiveProduct] = useState(timberData['Burma Teak'][0]);

// // // // //   const handleCategoryChange = (category) => {
// // // // //     setActiveCategory(category);
// // // // //     setActiveProduct(timberData[category][0]);
// // // // //   };

// // // // //   return (
// // // // //     <section className="py-12 px-4 sm:px-6 bg-white font-playfair">
// // // // //       <div className="max-w-7xl mx-auto">
// // // // //         {/* Title */}
// // // // //         <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-amber-800 tracking-tight mb-8">
// // // // //           Timber Products
// // // // //         </h2>

// // // // //         {/* Category Tabs */}
// // // // //         <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-14">
// // // // //           {categories.map((category) => (
// // // // //             <button
// // // // //               key={category}
// // // // //               onClick={() => handleCategoryChange(category)}
// // // // //               className={`px-4 sm:px-6 py-2 rounded-full font-medium text-sm border transition-all duration-300 hover:scale-105 hover:shadow-md
// // // // //                 ${
// // // // //                   activeCategory === category
// // // // //                     ? 'bg-gradient-to-r from-black to-neutral-800 text-white shadow-lg scale-105'
// // // // //                     : 'bg-white text-black border-gray-400 hover:ring-2 hover:ring-amber-500'
// // // // //                 }
// // // // //               `}
// // // // //             >
// // // // //               {category}
// // // // //             </button>
// // // // //           ))}
// // // // //         </div>

// // // // //         {/* Product Display Container */}
// // // // //         <div className="bg-gradient-to-br from-indigo-700 via-purple-700 to-blue-600 rounded-3xl p-3 sm:p-6">
// // // // //           <MOTION.div
// // // // //             key={activeCategory}
// // // // //             initial={{ opacity: 0 }}
// // // // //             animate={{ opacity: 1 }}
// // // // //             transition={{ duration: 0.5 }}
// // // // //             className="bg-white/10 backdrop-blur-sm sm:backdrop-blur-md rounded-3xl p-4 sm:p-6 border border-white/10 sm:border-white/20 shadow-xl"
// // // // //           >
// // // // //             <div className="flex flex-col md:flex-row">
// // // // //               {/* Left side - Product Card */}
// // // // //               <div className="w-full md:w-1/3 bg-white/10 backdrop-blur-sm sm:backdrop-blur-md rounded-2xl p-5 border border-white/10 sm:border-white/20 shadow-lg">
// // // // //                 <img
// // // // //                   src={activeProduct.image}
// // // // //                   alt={activeProduct.name}
// // // // //                   className="w-full h-64 sm:h-52 object-cover rounded-lg mb-6"
// // // // //                 />
// // // // //                 <h3 className="text-xl sm:text-xl font-bold text-white mb-2">
// // // // //                   {activeProduct.name}
// // // // //                 </h3>
// // // // //                 <p className="text-base sm:text-base text-white/80 mb-4">
// // // // //                   {activeProduct.title}
// // // // //                 </p>
// // // // //                 <div className="text-base sm:text-base space-y-1 text-white/90">
// // // // //                   <p><span className="font-semibold">Price:</span> {activeProduct.price}</p>
// // // // //                   <p><span className="font-semibold">Grade:</span> {activeProduct.grade}</p>
// // // // //                   <p><span className="font-semibold">Moisture:</span> {activeProduct.moisture}</p>
// // // // //                 </div>
// // // // //               </div>

// // // // //               {/* Right side (desktop) and below card (mobile) */}
// // // // //               <div className="w-full md:w-2/3 ml-0 md:ml-6 mt-6 text-white/90">
// // // // //                 <p className="text-lg sm:text-xl leading-relaxed font-medium font-playfair">
// // // // //                   Burma teak, known for its high quality and durability, is prized for its exceptional oil content,
// // // // //                   which provides natural resistance to water, decay, and pests. This wood is also known for its strength,
// // // // //                   straight grain, and ability to resist splitting, cracking, and weathering. It's a popular choice for
// // // // //                   outdoor furniture, decking, and boat decks due to its weather-resistant properties.
// // // // //                 </p>
// // // // //               </div>
// // // // //             </div>
// // // // //           </MOTION.div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // }


// // // // import React, { useState } from 'react';
// // // // import { timberData } from './data/timberProducts';
// // // // import { motion as MOTION } from 'framer-motion';

// // // // const categories = Object.keys(timberData);

// // // // export default function TimberProducts() {
// // // //   const [activeCategory, setActiveCategory] = useState('Burma Teak');
// // // //   const [activeProduct, setActiveProduct] = useState(timberData['Burma Teak'][0]);

// // // //   const handleCategoryChange = (category) => {
// // // //     setActiveCategory(category);
// // // //     setActiveProduct(timberData[category][0]);
// // // //   };

// // // //   return (
// // // //     <section className="py-12 px-4 sm:px-6 bg-white font-display">
// // // //       <div className="max-w-7xl mx-auto">
// // // //         {/* Title */}
// // // //         <h2 className="text-4xl sm:text-5xl font-bold text-amber-800 tracking-tight mb-10">
// // // //           Timber Products
// // // //         </h2>

// // // //         {/* Category Tabs */}
// // // //         <div className="flex flex-wrap justify-center gap-3 sm:gap-5 mb-12">
// // // //           {categories.map((category) => (
// // // //             <button
// // // //               key={category}
// // // //               onClick={() => handleCategoryChange(category)}
// // // //               className={`px-4 sm:px-6 py-2 rounded-full font-medium text-base border transition-all duration-300 hover:scale-105 hover:shadow-md
// // // //                 ${
// // // //                   activeCategory === category
// // // //                     ? 'bg-gradient-to-r from-black to-neutral-800 text-white shadow-lg scale-105'
// // // //                     : 'bg-white text-black border-gray-400 hover:ring-2 hover:ring-amber-500'
// // // //                 }
// // // //               `}
// // // //             >
// // // //               {category}
// // // //             </button>
// // // //           ))}
// // // //         </div>

// // // //         {/* Product Display Container */}
// // // //         <MOTION.div
// // // //           key={activeCategory}
// // // //           initial={{ opacity: 0 }}
// // // //           animate={{ opacity: 1 }}
// // // //           transition={{ duration: 0.5 }}
// // // //           className="bg-gradient-to-br from-indigo-700 via-purple-700 to-blue-600 rounded-3xl p-4 sm:p-8 shadow-xl"
// // // //         >
// // // //           <div className="flex flex-col md:flex-row gap-6">
// // // //             {/* Product Card */}
// // // //             <div className="w-full md:w-1/3 bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 shadow-lg">
// // // //               <img
// // // //                 src={activeProduct.image}
// // // //                 alt={activeProduct.name}
// // // //                 className="w-full h-72 sm:h-64 object-cover rounded-lg mb-5"
// // // //               />
// // // //               <h3 className="text-2xl sm:text-2xl font-bold text-white mb-2 font-playfair">
// // // //                 {activeProduct.name}
// // // //               </h3>
// // // //               <p className="text-lg text-white/80 mb-4 font-display">{activeProduct.title}</p>
// // // //               <div className="text-lg space-y-2 text-white/90 font-display">
// // // //                 <p><span className="font-semibold">Price:</span> {activeProduct.price}</p>
// // // //                 <p><span className="font-semibold">Grade:</span> {activeProduct.grade}</p>
// // // //                 <p><span className="font-semibold">Moisture:</span> {activeProduct.moisture}</p>
// // // //               </div>
// // // //             </div>

// // // //             {/* Description */}
// // // //             <div className="w-full md:w-2/3 text-white/90 mt-4 md:mt-0">
// // // //               <p className="text-xl sm:text-2xl leading-relaxed font-medium font-playfair">
// // // //                 Burma teak, known for its high quality and durability, is prized for its exceptional oil content,
// // // //                 which provides natural resistance to water, decay, and pests. This wood is also known for its strength,
// // // //                 straight grain, and ability to resist splitting, cracking, and weathering. It's a popular choice for
// // // //                 outdoor furniture, decking, and boat decks due to its weather-resistant properties.
// // // //               </p>
// // // //             </div>
// // // //           </div>
// // // //         </MOTION.div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }


// // // import React, { useState } from 'react';
// // // import { timberData } from './data/timberProducts';
// // // import { motion as MOTION } from 'framer-motion';

// // // const categories = Object.keys(timberData);

// // // export default function TimberProducts() {
// // //   const [activeCategory, setActiveCategory] = useState('Burma Teak');
// // //   const [activeProduct, setActiveProduct] = useState(timberData['Burma Teak'].products[0]);

// // //   const handleCategoryChange = (category) => {
// // //     setActiveCategory(category);
// // //     setActiveProduct(timberData[category].products[0]);
// // //   };

// // //   const categoryDescription = timberData[activeCategory].description;

// // //   return (
// // //     <section className="py-12 px-4 sm:px-6 bg-white font-display">
// // //       <div className="max-w-7xl mx-auto">
// // //         <h2 className="text-4xl sm:text-5xl font-bold text-amber-800 tracking-tight mb-10">
// // //           Timber Products
// // //         </h2>

// // //         {/* Tabs */}
// // //         <div className="flex flex-wrap justify-center gap-3 sm:gap-5 mb-12">
// // //           {categories.map((category) => (
// // //             <button
// // //               key={category}
// // //               onClick={() => handleCategoryChange(category)}
// // //               className={`px-4 sm:px-6 py-2 rounded-full font-medium text-base border transition-all duration-300 hover:scale-105 hover:shadow-md
// // //                 ${
// // //                   activeCategory === category
// // //                     ? 'bg-gradient-to-r from-black to-neutral-800 text-white shadow-lg scale-105'
// // //                     : 'bg-white text-black border-gray-400 hover:ring-2 hover:ring-amber-500'
// // //                 }
// // //               `}
// // //             >
// // //               {category}
// // //             </button>
// // //           ))}
// // //         </div>

// // //         {/* Product Display */}
// // //         <div className="bg-gradient-to-br from-indigo-700 via-purple-700 to-blue-600 rounded-3xl p-4 sm:p-8 shadow-xl">
// // //           <div className="flex flex-col md:flex-row gap-6">
// // //             {/* Card */}
// // //             <div className="w-full md:w-1/3 bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 shadow-lg">
// // //               <MOTION.img
// // //                 key={activeProduct.image}
// // //                 src={activeProduct.image}
// // //                 alt={activeProduct.name}
// // //                 className="w-full h-72 sm:h-64 object-cover rounded-lg mb-5"
// // //                 initial={{ opacity: 0 }}
// // //                 animate={{ opacity: 1 }}
// // //                 transition={{ duration: 0.5 }}
// // //               />
// // //               <h3 className="text-2xl font-bold text-white mb-2 font-playfair">
// // //                 {activeProduct.name}
// // //               </h3>
// // //               <p className="text-lg text-white/80 mb-4 font-display">{activeProduct.title}</p>
// // //               <div className="text-lg space-y-2 text-white/90 font-display">
// // //                 <p><span className="font-semibold">Price:</span> {activeProduct.price}</p>
// // //                 <p><span className="font-semibold">Grade:</span> {activeProduct.grade}</p>
// // //                 <p><span className="font-semibold">Moisture:</span> {activeProduct.moisture}</p>
// // //               </div>
// // //             </div>

// // //             {/* Category Description */}
// // //             <MOTION.div
// // //               key={activeCategory}
// // //               initial={{ opacity: 0 }}
// // //               animate={{ opacity: 1 }}
// // //               transition={{ duration: 0.5 }}
// // //               className="w-full md:w-2/3 text-white/90 mt-4 md:mt-0"
// // //             >
// // //               <p className="text-xl sm:text-2xl leading-relaxed font-medium font-playfair">
// // //                 {categoryDescription}
// // //               </p>
// // //             </MOTION.div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }


// import React, { useState } from 'react';
// import { timberData } from './data/timberProducts';
// import { motion as MOTION } from 'framer-motion';

// const categories = Object.keys(timberData);

// export default function TimberProducts() {
//   const [activeCategory, setActiveCategory] = useState('Burma Teak');
//   const [activeProduct, setActiveProduct] = useState(timberData['Burma Teak'].products[0]);

//   const handleCategoryChange = (category) => {
//     setActiveCategory(category);
//     setActiveProduct(timberData[category].products[0]);
//   };

//   const categoryDescription = timberData[activeCategory].description;

//   return (
//     <section className="py-12 px-4 sm:px-6 bg-white dark:bg-black transition-colors duration-500 font-display">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-10 text-amber-800 dark:text-amber-500">
//           Timber Products
//         </h2>

//         {/* Tabs */}
//         <div className="flex flex-wrap justify-center gap-3 sm:gap-5 mb-12">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => handleCategoryChange(category)}
//               className={`px-4 sm:px-6 py-2 rounded-full font-medium text-base border transition-all duration-300 hover:scale-105 hover:shadow-md
//                 ${
//                   activeCategory === category
//                     ? 'bg-gradient-to-r from-black to-neutral-800 text-white dark:from-white dark:to-gray-300 dark:text-black shadow-lg scale-105'
//                     : 'bg-white text-black border-gray-400 hover:ring-2 hover:ring-amber-500 dark:bg-neutral-900 dark:text-white dark:border-gray-600'
//                 }
//               `}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Product Display */}
//         <div className="bg-gradient-to-br from-indigo-700 via-purple-700 to-blue-600 dark:from-indigo-900 dark:via-purple-900 dark:to-blue-800 rounded-3xl p-4 sm:p-8 shadow-xl transition-colors duration-500">
//           <div className="flex flex-col md:flex-row gap-6">
//             {/* Card */}
//             <div className="w-full md:w-1/3 bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 dark:border-white/10 shadow-lg transition-all">
//               <MOTION.img
//                 key={activeProduct.image}
//                 src={activeProduct.image}
//                 alt={activeProduct.name}
//                 className="w-full h-72 sm:h-64 object-cover rounded-lg mb-5"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//               />
//               <h3 className="text-2xl font-bold mb-2 font-playfair text-gray-900 dark:text-white">
//                 {activeProduct.name}
//               </h3>
//               <p className="text-lg mb-4 font-display text-gray-600 dark:text-gray-300">{activeProduct.title}</p>
//               <div className="text-lg space-y-2 font-display text-gray-700 dark:text-gray-200">
//                 <p><span className="font-semibold">Price:</span> {activeProduct.price}</p>
//                 <p><span className="font-semibold">Grade:</span> {activeProduct.grade}</p>
//                 <p><span className="font-semibold">Moisture:</span> {activeProduct.moisture}</p>
//               </div>
//             </div>

//             {/* Category Description */}
//             <MOTION.div
//               key={activeCategory}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//               className="w-full md:w-2/3 mt-4 md:mt-0 text-gray-800 dark:text-gray-200 transition-colors"
//             >
//               <p className="text-xl sm:text-2xl leading-relaxed font-medium font-playfair">
//                 {categoryDescription}
//               </p>
//             </MOTION.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// 1st option


// import React, { useState } from 'react';
// import { timberData } from './data/timberProducts';
// import { motion as MOTION } from 'framer-motion';

// const categories = Object.keys(timberData);

// export default function TimberProducts() {
//   const [activeCategory, setActiveCategory] = useState('Burma Teak');
//   const [activeProduct, setActiveProduct] = useState(timberData['Burma Teak'].products[0]);

//   const handleCategoryChange = (category) => {
//     setActiveCategory(category);
//     setActiveProduct(timberData[category].products[0]);
//   };

//   const categoryDescription = timberData[activeCategory].description;

//   return (
//     <section className="py-14 px-4 sm:px-6 transition-colors duration-500 bg-[#FAF6F1] dark:bg-[#1A1A1A] font-display">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-10 text-[#3B2F2F] dark:text-[#F5F5F5]">
//           Timber Products
//         </h2>

//         {/* Tabs */}
//         <div className="flex flex-wrap justify-center gap-3 sm:gap-5 mb-12">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => handleCategoryChange(category)}
//               className={`px-4 sm:px-6 py-2 rounded-full font-medium text-base border transition-all duration-300 hover:scale-105 hover:shadow-md
//                 ${
//                   activeCategory === category
//                     ? 'bg-gradient-to-r from-[#A0522D] to-[#7B4B2A] text-white dark:from-[#F5F5F5] dark:to-[#DCCBA2] dark:text-black shadow-lg scale-105'
//                     : 'bg-[#F5F5F5] text-[#3B2F2F] border-[#D2B48C] hover:ring-2 hover:ring-amber-500 dark:bg-[#2B2B2B] dark:text-white dark:border-[#444]'
//                 }
//               `}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Product Display */}
//         <div className="bg-gradient-to-br from-[#8B7D6B] via-[#A68A6D] to-[#C1A57B] dark:from-[#5C4B3C] dark:via-[#3B2F2F] dark:to-[#2A1E17] rounded-3xl p-4 sm:p-8 shadow-2xl transition-colors duration-500">
//           <div className="flex flex-col md:flex-row gap-6">
//             {/* Card */}
//             <div className="w-full md:w-1/3 bg-white/70 dark:bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-[#D2B48C] dark:border-white/10 shadow-lg">
//               <MOTION.img
//                 key={activeProduct.image}
//                 src={activeProduct.image}
//                 alt={activeProduct.name}
//                 className="w-full h-72 sm:h-64 object-cover rounded-lg mb-5"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//               />
//               <h3 className="text-2xl font-bold mb-2 font-playfair text-[#3B2F2F] dark:text-[#F5F5F5]">
//                 {activeProduct.name}
//               </h3>
//               <p className="text-lg mb-4 font-display text-[#6E5849] dark:text-[#BFAE9A]">
//                 {activeProduct.title}
//               </p>
//               <div className="text-lg space-y-2 font-display text-[#4B3A2F] dark:text-[#E5E5E5]">
//                 <p><span className="font-semibold">Price:</span> {activeProduct.price}</p>
//                 <p><span className="font-semibold">Grade:</span> {activeProduct.grade}</p>
//                 <p><span className="font-semibold">Moisture:</span> {activeProduct.moisture}</p>
//               </div>
//             </div>

//             {/* Category Description */}
//             <MOTION.div
//               key={activeCategory}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//               className="w-full md:w-2/3 mt-4 md:mt-0 text-[#3C3C3C] dark:text-[#EAEAEA] transition-colors"
//             >
//               <p className="text-xl sm:text-2xl leading-relaxed font-medium font-playfair">
//                 {categoryDescription}
//               </p>
//             </MOTION.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// 2nd option


// import React, { useState } from 'react';
// import { timberData } from './data/timberProducts';
// import { motion as MOTION } from 'framer-motion';

// const categories = Object.keys(timberData);

// export default function TimberProducts() {
//   const [activeCategory, setActiveCategory] = useState('Burma Teak');
//   const [activeProduct, setActiveProduct] = useState(timberData['Burma Teak'].products[0]);
//   const [theme, setTheme] = useState('earthy'); // 'earthy', 'modern', or 'luxury'

//   const handleCategoryChange = (category) => {
//     setActiveCategory(category);
//     setActiveProduct(timberData[category].products[0]);
//   };

//   const categoryDescription = timberData[activeCategory].description;

//   const themes = {
//     earthy: {
//       bg: 'bg-[#FAF6F1] dark:bg-[#1A1A1A]',
//       heading: 'text-[#3B2F2F] dark:text-[#F5F5F5]',
//       tabActive: 'from-[#A0522D] to-[#7B4B2A] text-white dark:from-[#F5F5F5] dark:to-[#DCCBA2] dark:text-black',
//       tabInactive: 'bg-[#F5F5F5] text-[#3B2F2F] border-[#D2B48C] dark:bg-[#2B2B2B] dark:text-white dark:border-[#444] hover:ring-amber-500',
//       cardBg: 'bg-white/70 dark:bg-white/10 border-[#D2B48C] dark:border-white/10',
//       gradientBox: 'from-[#8B7D6B] via-[#A68A6D] to-[#C1A57B] dark:from-[#5C4B3C] dark:via-[#3B2F2F] dark:to-[#2A1E17]',
//       textMain: 'text-[#3C3C3C] dark:text-[#EAEAEA]',
//       textSub: 'text-[#6E5849] dark:text-[#BFAE9A]',
//       textLabel: 'text-[#4B3A2F] dark:text-[#E5E5E5]'
//     },
//     modern: {
//       bg: 'bg-white dark:bg-neutral-900',
//       heading: 'text-black dark:text-white',
//       tabActive: 'from-gray-900 to-gray-700 text-white dark:from-white dark:to-gray-300 dark:text-black',
//       tabInactive: 'bg-white text-black border-gray-400 dark:bg-neutral-800 dark:text-white dark:border-gray-600 hover:ring-gray-400',
//       cardBg: 'bg-white/10 dark:bg-white/5 border-white/20 dark:border-white/10',
//       gradientBox: 'from-gray-100 via-gray-200 to-gray-300 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900',
//       textMain: 'text-gray-800 dark:text-gray-200',
//       textSub: 'text-gray-600 dark:text-gray-400',
//       textLabel: 'text-gray-700 dark:text-gray-300'
//     },
//     luxury: {
//       bg: 'bg-[#F8F4EF] dark:bg-[#0F0F0F]',
//       heading: 'text-[#674C28] dark:text-[#FFD700]',
//       tabActive: 'from-[#BFA77A] to-[#D8C69C] text-black dark:from-[#FFD700] dark:to-[#DAA520] dark:text-black',
//       tabInactive: 'bg-[#FFF] text-[#5A4A30] border-[#CBB27D] dark:bg-[#1C1C1C] dark:text-[#EADCA6] dark:border-[#7F6E3C] hover:ring-yellow-500',
//       cardBg: 'bg-[#FFFDF8]/70 dark:bg-[#1B1B1B]/80 border-[#EADCA6] dark:border-[#5F4E2A]',
//       gradientBox: 'from-[#F0E5CF] via-[#E5D4B7] to-[#D9C7A5] dark:from-[#3B2C1A] dark:via-[#2A1F12] dark:to-[#1C140A]',
//       textMain: 'text-[#4A3B21] dark:text-[#FAF3E0]',
//       textSub: 'text-[#7A684A] dark:text-[#D6C49A]',
//       textLabel: 'text-[#5F4E2A] dark:text-[#FFEBC1]'
//     }
//   };

//   const t = themes[theme];

//   return (
//     <section className={`py-14 px-4 sm:px-6 transition-colors duration-500 font-display ${t.bg}`}>
//       <div className="max-w-7xl mx-auto">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className={`text-4xl sm:text-5xl font-bold tracking-tight ${t.heading}`}>
//             Timber Products
//           </h2>
//           <select
//             value={theme}
//             onChange={(e) => setTheme(e.target.value)}
//             className="ml-4 px-3 py-1 rounded-md border text-sm font-medium bg-white dark:bg-black dark:text-white"
//           >
//             <option value="earthy">Earthy</option>
//             <option value="modern">Modern</option>
//             <option value="luxury">Luxury</option>
//           </select>
//         </div>

//         <div className="flex flex-wrap justify-center gap-3 sm:gap-5 mb-12">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => handleCategoryChange(category)}
//               className={`px-4 sm:px-6 py-2 rounded-full font-medium text-base border transition-all duration-300 hover:scale-105 hover:shadow-md
//                 ${
//                   activeCategory === category
//                     ? `bg-gradient-to-r ${t.tabActive} shadow-lg scale-105`
//                     : `${t.tabInactive}`
//                 }`
//               }
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         <div className={`bg-gradient-to-br ${t.gradientBox} rounded-3xl p-4 sm:p-8 shadow-2xl transition-colors duration-500`}>
//           <div className="flex flex-col md:flex-row gap-6">
//             <div className={`w-full md:w-1/3 ${t.cardBg} backdrop-blur-md rounded-2xl p-5 shadow-lg`}>
//               <MOTION.img
//                 key={activeProduct.image}
//                 src={activeProduct.image}
//                 alt={activeProduct.name}
//                 className="w-full h-72 sm:h-64 object-cover rounded-lg mb-5"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//               />
//               <h3 className={`text-2xl font-bold mb-2 font-playfair ${t.heading}`}>
//                 {activeProduct.name}
//               </h3>
//               <p className={`text-lg mb-4 font-display ${t.textSub}`}>
//                 {activeProduct.title}
//               </p>
//               <div className={`text-lg space-y-2 font-display ${t.textLabel}`}>
//                 <p><span className="font-semibold">Price:</span> {activeProduct.price}</p>
//                 <p><span className="font-semibold">Grade:</span> {activeProduct.grade}</p>
//                 <p><span className="font-semibold">Moisture:</span> {activeProduct.moisture}</p>
//               </div>
//             </div>

//             <MOTION.div
//               key={activeCategory}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//               className={`w-full md:w-2/3 mt-4 md:mt-0 ${t.textMain}`}
//             >
//               <p className="text-xl sm:text-2xl leading-relaxed font-medium font-playfair">
//                 {categoryDescription}
//               </p>
//             </MOTION.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// 3rd option

import React, { useState } from 'react';
import { timberData } from './data/timberProducts';
import { motion as MOTION } from 'framer-motion';

const categories = Object.keys(timberData);

const luxury = {
    bg: 'bg-[#F8F4EF] dark:bg-[#231915]',
    heading: 'text-[#674C28] dark:text-[#FFD700]',
    tabActive: 'from-[#BFA77A] to-[#D8C69C] text-black dark:from-[#FFD700] dark:to-[#DAA520] dark:text-black',
    tabInactive: 'bg-[#FFF] text-[#5A4A30] border-[#CBB27D] dark:bg-[#1C1C1C] dark:text-[#EADCA6] dark:border-[#7F6E3C] hover:ring-yellow-500',
    cardBg: 'bg-[#FFFDF8]/70 dark:bg-[#1B1B1B]/80 border-[#EADCA6] dark:border-[#5F4E2A]',
    gradientBox: 'from-[#F0E5CF] via-[#E5D4B7] to-[#D9C7A5] dark:from-[#3B2C1A] dark:via-[#2A1F12] dark:to-[#1C140A]',
    textMain: 'text-[#4A3B21] dark:text-[#FAF3E0]',
    textSub: 'text-[#7A684A] dark:text-[#D6C49A]',
    textLabel: 'text-[#5F4E2A] dark:text-[#FFEBC1]'
  };
  

export default function TimberProducts() {
  const [activeCategory, setActiveCategory] = useState('Burma Teak');
  const [activeProduct, setActiveProduct] = useState(timberData['Burma Teak'].products[0]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setActiveProduct(timberData[category].products[0]);
  };

  const categoryDescription = timberData[activeCategory].description;

  return (
    <section className={`py-14 px-4 sm:px-6 transition-colors duration-500 ${luxury.bg} font-display`}>
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-4xl sm:text-5xl font-bold tracking-tight mb-10 ${luxury.heading}`}>
          Timber Products
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-5 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 sm:px-6 py-2 rounded-full font-medium text-base border transition-all duration-300 hover:scale-105 hover:shadow-md
                ${
                  activeCategory === category
                    ? `bg-gradient-to-r ${luxury.tabActive} shadow-lg scale-105`
                    : `${luxury.tabInactive}`
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Display */}
        <div className={`bg-gradient-to-br ${luxury.gradientBox} rounded-3xl p-4 sm:p-8 shadow-2xl transition-colors duration-500`}>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Card */}
            <div className={`w-full md:w-1/3 ${luxury.cardBg} backdrop-blur-md rounded-2xl p-5 border ${luxury.textLabel} shadow-lg`}>
              <MOTION.img
                key={activeProduct.image}
                src={activeProduct.image}
                alt={activeProduct.name}
                className="w-full h-72 sm:h-64 object-cover rounded-lg mb-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <h3 className={`text-2xl font-bold mb-2 font-playfair ${luxury.textMain}`}>
                {activeProduct.name}
              </h3>
              <p className={`text-lg mb-4 font-display ${luxury.textSub}`}>
                {activeProduct.title}
              </p>
              <div className={`text-lg space-y-2 font-display ${luxury.textMain}`}>
                <p><span className="font-semibold">Price:</span> {activeProduct.price}</p>
                <p><span className="font-semibold">Grade:</span> {activeProduct.grade}</p>
                <p><span className="font-semibold">Moisture:</span> {activeProduct.moisture}</p>
              </div>
            </div>

            {/* Category Description */}
            <MOTION.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className={`w-full md:w-2/3 mt-4 md:mt-0 ${luxury.textMain} transition-colors`}
            >
              <p className="text-xl sm:text-2xl leading-relaxed font-medium font-playfair">
                {categoryDescription}
              </p>
            </MOTION.div>
          </div>
        </div>
      </div>
    </section>
  );
}
