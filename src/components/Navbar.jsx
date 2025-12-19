// // // // // import { useState, useEffect, useCallback } from "react";
// // // // // import { Link as ScrollLink } from "react-scroll";
// // // // // import { Link as RouterLink, useLocation } from "react-router-dom";
// // // // // import { motion, useAnimation, AnimatePresence } from "framer-motion";
// // // // // import logo from "../assets/logo.png";

// // // // // const MotionDiv = motion.div;

// // // // // export default function Navbar() {
// // // // //   const [isOpen, setIsOpen] = useState(false);
// // // // //   const [scrolled, setScrolled] = useState(false);
// // // // //   const controls = useAnimation();
// // // // //   const location = useLocation();
// // // // //   const isHomePage = location.pathname === "/";

// // // // //   const handleScroll = useCallback(() => {
// // // // //     const isScrolled = window.scrollY > 20;
// // // // //     setScrolled(isScrolled);
// // // // //     controls.start(isScrolled ? { scale: 0.9, y: -2 } : { scale: 1, y: 0 });
// // // // //   }, [controls]);

// // // // //   useEffect(() => {
// // // // //     window.addEventListener("scroll", handleScroll);
// // // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // // //   }, [handleScroll]);

// // // // //   const navItems = [
// // // // //     { label: "Home", to: isHomePage ? "home" : "/" },
// // // // //     { label: "About Us", to: isHomePage ? "about" : "/#about" },
// // // // //     { label: "Timber", to: isHomePage ? "timber" : "/#timber" },
// // // // //     { label: "Contact", to: isHomePage ? "contact" : "/#contact" },
// // // // //     { label: "Export", to: "/export" },
// // // // //   ];

// // // // //   return (
// // // // //     <header
// // // // //       style={{
// // // // //         backgroundImage: `url('/img/walnut-3.jpg')`,
// // // // //         backgroundSize: "cover",
// // // // //         backgroundRepeat: "no-repeat",
// // // // //         backgroundPosition: "center",
// // // // //       }}
// // // // //       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-md shadow-md" : "bg-transparent shadow-none"
// // // // //         }`}
// // // // //     >
// // // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20 md:h-20 sm:h-24 relative">
// // // // //         <MotionDiv
// // // // //           animate={controls}
// // // // //           transition={{ duration: 0.3 }}
// // // // //           className="hidden md:flex absolute left-4 top-1/2 -translate-y-[25%] sm:left-6 items-center gap-3"
// // // // //         >
// // // // //           <RouterLink to="/">
// // // // //             <img
// // // // //               src={logo}
// // // // //               alt="SVM Timbers Logo"
// // // // //               className="h-[7rem] sm:h-[12rem] md:h-[20rem] w-auto object-contain"
// // // // //               style={{ maxWidth: "90vw" }}
// // // // //               loading="lazy"
// // // // //             />
// // // // //           </RouterLink>
// // // // //         </MotionDiv>

// // // // //         <MotionDiv
// // // // //           animate={controls}
// // // // //           transition={{ duration: 0.3 }}
// // // // //           className="md:hidden absolute left-1/2 -translate-x-1/2 top-0 z-50"
// // // // //         >
// // // // //           <RouterLink to="/">
// // // // //             <img
// // // // //               src={logo}
// // // // //               alt="SVM Timbers Logo"
// // // // //               className="h-48 sm:h-44 w-auto object-contain"
// // // // //               style={{ maxWidth: "80vw", position: "relative", bottom: "20px" }}
// // // // //               loading="lazy"
// // // // //             />
// // // // //           </RouterLink>
// // // // //         </MotionDiv>

// // // // //         <nav className="ml-auto hidden md:flex gap-6 lg:gap-8 items-center">
// // // // //           {navItems.map((item) => {
// // // // //             // For home page: use ScrollLink for sections, RouterLink for Export
// // // // //             if (isHomePage) {
// // // // //               if (item.label === "Export") {
// // // // //                 return (
// // // // //                   <RouterLink
// // // // //                     key={item.label}
// // // // //                     to={item.to}
// // // // //                     className="text-base tracking-wide font-semibold font-sans transition-colors cursor-pointer text-[#ffa304] dark:text-[#FAF3E0] hover:text-[#674C28] dark:hover:text-[#FFD700]"
// // // // //                   >
// // // // //                     {item.label}
// // // // //                   </RouterLink>
// // // // //                 );
// // // // //               } else {
// // // // //                 return (
// // // // //                   <ScrollLink
// // // // //                     key={item.to}
// // // // //                     to={item.to}
// // // // //                     smooth={true}
// // // // //                     duration={500}
// // // // //                     offset={-80}
// // // // //                     spy={true}
// // // // //                     activeClass="active-link"
// // // // //                     className="text-base tracking-wide font-semibold font-sans transition-colors cursor-pointer text-[#ffa304] dark:text-[#FAF3E0] hover:text-[#674C28] dark:hover:text-[#FFD700]"
// // // // //                   >
// // // // //                     {item.label}
// // // // //                   </ScrollLink>
// // // // //                 );
// // // // //               }
// // // // //             } else {
// // // // //               // For Export page: use RouterLink for all navigation
// // // // //               return (
// // // // //                 <RouterLink
// // // // //                   key={item.label}
// // // // //                   to={item.to}
// // // // //                   className="text-base tracking-wide font-semibold font-sans transition-colors cursor-pointer text-[#ffa304] dark:text-[#FAF3E0] hover:text-[#674C28] dark:hover:text-[#FFD700]"
// // // // //                 >
// // // // //                   {item.label}
// // // // //                 </RouterLink>
// // // // //               );
// // // // //             }
// // // // //           })}
// // // // //         </nav>

// // // // //         <div className="md:hidden flex items-center justify-end w-full">
// // // // //           <button
// // // // //             className="text-[#ffa304] dark:text-[#FAF3E0] focus:outline-none z-50 relative"
// // // // //             onClick={() => setIsOpen(!isOpen)}
// // // // //             aria-label="Toggle Menu"
// // // // //           >
// // // // //             <svg
// // // // //               className="w-6 h-6"
// // // // //               fill="none"
// // // // //               stroke="currentColor"
// // // // //               strokeWidth={2}
// // // // //               viewBox="0 0 24 24"
// // // // //             >
// // // // //               {isOpen ? (
// // // // //                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
// // // // //               ) : (
// // // // //                 <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
// // // // //               )}
// // // // //             </svg>
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>

// // // // //       <AnimatePresence>
// // // // //         {isOpen && (
// // // // //           <motion.div
// // // // //             key="mobile-nav"
// // // // //             initial={{ opacity: 0, height: 0 }}
// // // // //             animate={{ opacity: 1, height: "auto" }}
// // // // //             exit={{ opacity: 0, height: 0 }}
// // // // //             transition={{ duration: 0.3 }}
// // // // //             className="md:hidden bg-white/95 dark:bg-[#1C1C1C]/95 backdrop-blur shadow-lg rounded-b-lg mx-2 relative z-[60]"
// // // // //           >

// // // // //             <div className="px-4 py-1">
// // // // //               {navItems.map((item, index) => {
// // // // //                 if (isHomePage) {
// // // // //                   if (item.label === "Export") {
// // // // //                     return (
// // // // //                       <RouterLink
// // // // //                         key={item.label}
// // // // //                         to={item.to}
// // // // //                         onClick={() => setIsOpen(false)}
// // // // //                         className={`block py-2 text-center text-base font-medium font-sans text-[#ffa304] dark:text-[#FAF3E0] hover:text-[#674C28] dark:hover:text-[#FFD700] transition-colors cursor-pointer ${index < navItems.length - 1 ? "border-b border-gray-200 dark:border-gray-700" : ""
// // // // //                           }`}
// // // // //                       >
// // // // //                         {item.label}
// // // // //                       </RouterLink>
// // // // //                     );
// // // // //                   } else {
// // // // //                     return (
// // // // //                       <ScrollLink
// // // // //                         key={item.to}
// // // // //                         to={item.to}
// // // // //                         smooth={true}
// // // // //                         duration={500}
// // // // //                         offset={-70}
// // // // //                         onClick={() => setIsOpen(false)}
// // // // //                         className={`block py-2 text-center text-base font-medium font-sans text-[#ffa304] dark:text-[#FAF3E0] hover:text-[#674C28] dark:hover:text-[#FFD700] transition-colors cursor-pointer ${index < navItems.length - 1 ? "border-b border-gray-200 dark:border-gray-700" : ""
// // // // //                           }`}
// // // // //                       >
// // // // //                         {item.label}
// // // // //                       </ScrollLink>
// // // // //                     );
// // // // //                   }
// // // // //                 } else {
// // // // //                   return (
// // // // //                     <RouterLink
// // // // //                       key={item.label}
// // // // //                       to={item.to}
// // // // //                       onClick={() => setIsOpen(false)}
// // // // //                       className={`block py-2 text-center text-base font-medium font-sans text-[#ffa304] dark:text-[#FAF3E0] hover:text-[#674C28] dark:hover:text-[#FFD700] transition-colors cursor-pointer ${index < navItems.length - 1 ? "border-b border-gray-200 dark:border-gray-700" : ""
// // // // //                         }`}
// // // // //                     >
// // // // //                       {item.label}
// // // // //                     </RouterLink>
// // // // //                   );
// // // // //                 }
// // // // //               })}
// // // // //             </div>
// // // // //           </motion.div>
// // // // //         )}
// // // // //       </AnimatePresence>
// // // // //     </header>
// // // // //   );
// // // // // }

// // // // import { useState, useEffect, useCallback } from "react";
// // // // import { Link as ScrollLink } from "react-scroll";
// // // // import { Link as RouterLink, useLocation } from "react-router-dom";
// // // // import { motion, useAnimation, AnimatePresence } from "framer-motion";
// // // // import logo from "../assets/logo1.png";

// // // // const MotionDiv = motion.div;

// // // // export default function Navbar() {
// // // //   const [isOpen, setIsOpen] = useState(false);
// // // //   const [scrolled, setScrolled] = useState(false);
// // // //   const controls = useAnimation();
// // // //   const location = useLocation();
// // // //   const isHomePage = location.pathname === "/";

// // // //   const handleScroll = useCallback(() => {
// // // //     const isScrolled = window.scrollY > 20;
// // // //     setScrolled(isScrolled);
// // // //     controls.start(isScrolled ? { scale: 0.9, y: -2 } : { scale: 1, y: 0 });
// // // //   }, [controls]);

// // // //   useEffect(() => {
// // // //     window.addEventListener("scroll", handleScroll);
// // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // //   }, [handleScroll]);

// // // //   const navItems = [
// // // //     { label: "Home", to: isHomePage ? "home" : "/" },
// // // //     { label: "About Us", to: isHomePage ? "about" : "/#about" },
// // // //     { label: "Timber", to: "/timber" }, // Changed to route instead of scroll
// // // //     { label: "Contact", to: isHomePage ? "contact" : "/#contact" },
// // // //     { label: "Export", to: "/export" },
// // // //   ];

// // // //   return (
// // // //     <header
// // // //       style={{
// // // //         backgroundImage: `url('/img/walnut-3.jpg')`,
// // // //         backgroundSize: "cover",
// // // //         backgroundRepeat: "no-repeat",
// // // //         backgroundPosition: "center",
// // // //       }}
// // // //       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
// // // //         scrolled ? "backdrop-blur-md shadow-md" : "bg-transparent shadow-none"
// // // //       }`}
// // // //     >
// // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20 md:h-20 sm:h-24 relative">
// // // //         <MotionDiv
// // // //           animate={controls}
// // // //           transition={{ duration: 0.3 }}
// // // //           className="hidden md:flex absolute left-4 top-1/2 -translate-y-[25%] sm:left-6 items-center gap-3"
// // // //         >
// // // //           <RouterLink to="/">
// // // //             <img
// // // //               src={logo}
// // // //               alt="SVM Timbers Logo"
// // // //               className="h-[7rem] sm:h-[12rem] md:h-[20rem] w-auto object-contain"
// // // //               style={{ maxWidth: "90vw" }}
// // // //               loading="lazy"
// // // //             />
// // // //           </RouterLink>
// // // //         </MotionDiv>

// // // //         <MotionDiv
// // // //           animate={controls}
// // // //           transition={{ duration: 0.3 }}
// // // //           className="md:hidden absolute left-1/2 -translate-x-1/2 top-0 z-50"
// // // //         >
// // // //           <RouterLink to="/">
// // // //             <img
// // // //               src={logo}
// // // //               alt="SVM Timbers Logo"
// // // //               className="h-48 sm:h-44 w-auto object-contain"
// // // //               style={{ maxWidth: "80vw", position: "relative", bottom: "20px" }}
// // // //               loading="lazy"
// // // //             />
// // // //           </RouterLink>
// // // //         </MotionDiv>

// // // //         <nav className="ml-auto hidden md:flex gap-6 lg:gap-8 items-center">
// // // //           {navItems.map((item) => {
// // // //             // For home page: use ScrollLink for sections, RouterLink for routes
// // // //             if (isHomePage) {
// // // //               // Use RouterLink for Timber and Export
// // // //               if (item.label === "Export" || item.label === "Timber") {
// // // //                 return (
// // // //                   <RouterLink
// // // //                     key={item.label}
// // // //                     to={item.to}
// // // //                     className="text-base tracking-wide font-semibold font-sans transition-colors cursor-pointer text-[#ffa304] dark:text-[#FAF3E0] hover:text-[#674C28] dark:hover:text-[#FFD700]"
// // // //                   >
// // // //                     {item.label}
// // // //                   </RouterLink>
// // // //                 );
// // // //               } else {
// // // //                 // Use ScrollLink for Home, About, Contact
// // // //                 return (
// // // //                   <ScrollLink
// // // //                     key={item.to}
// // // //                     to={item.to}
// // // //                     smooth={true}
// // // //                     duration={500}
// // // //                     offset={-80}
// // // //                     spy={true}
// // // //                     activeClass="active-link"
// // // //                     className="text-base tracking-wide font-semibold font-sans transition-colors cursor-pointer text-[#ffa304] dark:text-[#FAF3E0] hover:text-[#674C28] dark:hover:text-[#FFD700]"
// // // //                   >
// // // //                     {item.label}
// // // //                   </ScrollLink>
// // // //                 );
// // // //               }
// // // //             } else {
// // // //               // For other pages: use RouterLink for all navigation
// // // //               return (
// // // //                 <RouterLink
// // // //                   key={item.label}
// // // //                   to={item.to}
// // // //                   className="text-base tracking-wide font-semibold font-sans transition-colors cursor-pointer text-[#ffa304] dark:text-[#FAF3E0] hover:text-[#674C28] dark:hover:text-[#FFD700]"
// // // //                 >
// // // //                   {item.label}
// // // //                 </RouterLink>
// // // //               );
// // // //             }
// // // //           })}
// // // //         </nav>

// // // //         <div className="md:hidden flex items-center justify-end w-full">
// // // //           <button
// // // //             className="text-[#ffa304] dark:text-[#FAF3E0] focus:outline-none z-50 relative"
// // // //             onClick={() => setIsOpen(!isOpen)}
// // // //             aria-label="Toggle Menu"
// // // //           >
// // // //             <svg
// // // //               className="w-6 h-6"
// // // //               fill="none"
// // // //               stroke="currentColor"
// // // //               strokeWidth={2}
// // // //               viewBox="0 0 24 24"
// // // //             >
// // // //               {isOpen ? (
// // // //                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
// // // //               ) : (
// // // //                 <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
// // // //               )}
// // // //             </svg>
// // // //           </button>
// // // //         </div>
// // // //       </div>

// // // //       <AnimatePresence>
// // // //         {isOpen && (
// // // //           <motion.div
// // // //             key="mobile-nav"
// // // //             initial={{ opacity: 0, height: 0 }}
// // // //             animate={{ opacity: 1, height: "auto" }}
// // // //             exit={{ opacity: 0, height: 0 }}
// // // //             transition={{ duration: 0.3 }}
// // // //             className="md:hidden bg-white/95 dark:bg-[#1C1C1C]/95 backdrop-blur shadow-lg rounded-b-lg mx-2 relative z-[60]"
// // // //           >
// // // //             <div className="px-4 py-1">
// // // //               {navItems.map((item, index) => {
// // // //                 if (isHomePage) {
// // // //                   // Use RouterLink for Timber and Export
// // // //                   if (item.label === "Export" || item.label === "Timber") {
// // // //                     return (
// // // //                       <RouterLink
// // // //                         key={item.label}
// // // //                         to={item.to}
// // // //                         onClick={() => setIsOpen(false)}
// // // //                         className={`block py-2 text-center text-base font-medium font-sans text-[#ffa304] dark:text-[#FAF3E0] hover:text-[#674C28] dark:hover:text-[#FFD700] transition-colors cursor-pointer ${
// // // //                           index < navItems.length - 1 ? "border-b border-gray-200 dark:border-gray-700" : ""
// // // //                         }`}
// // // //                       >
// // // //                         {item.label}
// // // //                       </RouterLink>
// // // //                     );
// // // //                   } else {
// // // //                     // Use ScrollLink for Home, About, Contact
// // // //                     return (
// // // //                       <ScrollLink
// // // //                         key={item.to}
// // // //                         to={item.to}
// // // //                         smooth={true}
// // // //                         duration={500}
// // // //                         offset={-70}
// // // //                         onClick={() => setIsOpen(false)}
// // // //                         className={`block py-2 text-center text-base font-medium font-sans text-[#ffa304] dark:text-[#FAF3E0] hover:text-[#674C28] dark:hover:text-[#FFD700] transition-colors cursor-pointer ${
// // // //                           index < navItems.length - 1 ? "border-b border-gray-200 dark:border-gray-700" : ""
// // // //                         }`}
// // // //                       >
// // // //                         {item.label}
// // // //                       </ScrollLink>
// // // //                     );
// // // //                   }
// // // //                 } else {
// // // //                   return (
// // // //                     <RouterLink
// // // //                       key={item.label}
// // // //                       to={item.to}
// // // //                       onClick={() => setIsOpen(false)}
// // // //                       className={`block py-2 text-center text-base font-medium font-sans text-[#ffa304] dark:text-[#FAF3E0] hover:text-[#674C28] dark:hover:text-[#FFD700] transition-colors cursor-pointer ${
// // // //                         index < navItems.length - 1 ? "border-b border-gray-200 dark:border-gray-700" : ""
// // // //                       }`}
// // // //                     >
// // // //                       {item.label}
// // // //                     </RouterLink>
// // // //                   );
// // // //                 }
// // // //               })}
// // // //             </div>
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>
// // // //     </header>
// // // //   );
// // // // }

// // // import { useState, useEffect, useCallback } from "react";
// // // import { Link as ScrollLink } from "react-scroll";
// // // import { Link as RouterLink, useLocation } from "react-router-dom";
// // // import { motion, useAnimation, AnimatePresence } from "framer-motion";
// // // import logo from "../assets/logo1.png";

// // // const MotionDiv = motion.div;

// // // export default function Navbar() {
// // //   const [isOpen, setIsOpen] = useState(false);
// // //   const [scrolled, setScrolled] = useState(false);
// // //   const controls = useAnimation();
// // //   const location = useLocation();
// // //   const isHomePage = location.pathname === "/";

// // //   const handleScroll = useCallback(() => {
// // //     const isScrolled = window.scrollY > 20;
// // //     setScrolled(isScrolled);
// // //     controls.start(isScrolled ? { scale: 0.9, y: -6 } : { scale: 1, y: 0 });
// // //   }, [controls]);

// // //   useEffect(() => {
// // //     window.addEventListener("scroll", handleScroll);
// // //     return () => window.removeEventListener("scroll", handleScroll);
// // //   }, [handleScroll]);

// // //   const navItems = [
// // //     { label: "Home", to: isHomePage ? "home" : "/" },
// // //     { label: "About Us", to: isHomePage ? "about" : "/#about" },
// // //     { label: "Timber", to: "/timber" },
// // //     { label: "Contact", to: isHomePage ? "contact" : "/#contact" },
// // //     { label: "Export", to: "/export" },
// // //   ];

// // //   return (
// // //     <header
// // //       style={{
// // //         backgroundImage: `url('/img/walnut-3.jpg')`,
// // //         backgroundSize: "cover",
// // //         backgroundRepeat: "no-repeat",
// // //         backgroundPosition: "center",
// // //       }}
// // //       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
// // //         scrolled ? "backdrop-blur-md shadow-md" : "bg-transparent shadow-none"
// // //       }`}
// // //     >
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-24 relative">

// // //         {/* DESKTOP LOGO */}
// // //         <MotionDiv
// // //           animate={controls}
// // //           transition={{ duration: 0.3 }}
// // //           className="hidden md:flex absolute left-6 top-2 -translate-y-[25px] items-center"

// // //         >
// // //           <RouterLink to="/" className="flex flex-col items-center">
// // //   <img
// // //     src={logo}
// // //     alt="SVM Timbers Logo"
// // //     className="h-[18rem] w-auto object-contain"
// // //     loading="lazy"
// // //   />
// // //   <span className="mt-1 text-lg font-semibold tracking-[0.4em] text-[#fcd133] whitespace-nowrap" style={{ width: '110%', textAlign: 'center' }}>
// // //     SVM TIMBERS
// // //   </span>
// // // </RouterLink>

// // //         </MotionDiv>

// // //        {/* MOBILE LOGO */}
// // // <MotionDiv
// // //   animate={controls}
// // //   transition={{ duration: 0.3 }}
// // //   className="md:hidden absolute left-1/2 -translate-x-1/2 top-4 -translate-y-[16px] z-50"

// // // >
// // //   <RouterLink to="/" className="flex flex-col items-center">
// // //     <img
// // //       src={logo}
// // //       alt="SVM Timbers Logo"
// // //       className="h-40 w-auto object-contain"
// // //       loading="lazy"
// // //     />

// // //     <span className="mt-1 text-sm font-semibold tracking-[0.35em] text-[#fcd133] whitespace-nowrap text-center">
// // //       SVM TIMBERS
// // //     </span>
// // //   </RouterLink>
// // // </MotionDiv>

// // //         {/* DESKTOP NAV */}
// // //         <nav className="ml-auto hidden md:flex gap-6 lg:gap-8 items-center">
// // //           {navItems.map((item) =>
// // //             isHomePage && item.label !== "Timber" && item.label !== "Export" ? (
// // //               <ScrollLink
// // //                 key={item.label}
// // //                 to={item.to}
// // //                 smooth
// // //                 duration={500}
// // //                 offset={-90}
// // //                 className="text-base font-semibold text-[#ffa304] hover:text-[#674C28] cursor-pointer"
// // //               >
// // //                 {item.label}
// // //               </ScrollLink>
// // //             ) : (
// // //               <RouterLink
// // //                 key={item.label}
// // //                 to={item.to}
// // //                 className="text-base font-semibold text-[#ffa304] hover:text-[#674C28]"
// // //               >
// // //                 {item.label}
// // //               </RouterLink>
// // //             )
// // //           )}
// // //         </nav>

// // //         {/* MOBILE MENU BUTTON */}
// // //         <div className="md:hidden ml-auto">
// // //           <button
// // //             className="text-[#ffa304]"
// // //             onClick={() => setIsOpen(!isOpen)}
// // //             aria-label="Toggle Menu"
// // //           >
// // //             <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
// // //               {isOpen ? (
// // //                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
// // //               ) : (
// // //                 <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
// // //               )}
// // //             </svg>
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* MOBILE MENU */}
// // //       <AnimatePresence>
// // //         {isOpen && (
// // //           <motion.div
// // //             initial={{ opacity: 0, height: 0 }}
// // //             animate={{ opacity: 1, height: "auto" }}
// // //             exit={{ opacity: 0, height: 0 }}
// // //             className="md:hidden bg-white/95 shadow-lg mx-2 rounded-b-lg"
// // //           >
// // //             {navItems.map((item) => (
// // //               <RouterLink
// // //                 key={item.label}
// // //                 to={item.to}
// // //                 onClick={() => setIsOpen(false)}
// // //                 className="block py-3 text-center font-medium text-[#ffa304] hover:text-[#674C28]"
// // //               >
// // //                 {item.label}
// // //               </RouterLink>
// // //             ))}
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>
// // //     </header>
// // //   );
// // // }

// // import { useState, useEffect, useCallback } from "react";
// // import { Link as ScrollLink } from "react-scroll";
// // import { Link as RouterLink, useLocation } from "react-router-dom";
// // import { motion, useAnimation, AnimatePresence } from "framer-motion";
// // import logo from "../assets/logo1.png";

// // const MotionDiv = motion.div;

// // export default function Navbar() {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [scrolled, setScrolled] = useState(false);
// //   const controls = useAnimation();
// //   const location = useLocation();
// //   const isHomePage = location.pathname === "/";

// //   const handleScroll = useCallback(() => {
// //     const isScrolled = window.scrollY > 20;
// //     setScrolled(isScrolled);
// //     controls.start(isScrolled ? { scale: 0.9, y: -6 } : { scale: 1, y: 0 });
// //   }, [controls]);

// //   useEffect(() => {
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, [handleScroll]);

// //   const navItems = [
// //     { label: "Home", to: isHomePage ? "home" : "/" },
// //     { label: "About Us", to: isHomePage ? "about" : "/#about" },
// //     { label: "Timber", to: "/timber" },
// //     { label: "Contact", to: isHomePage ? "contact" : "/#contact" },
// //     { label: "Export", to: "/export" },
// //   ];

// //   return (
// //     <header
// //       style={{
// //         backgroundImage: `url('/img/walnut-3.jpg')`,
// //         backgroundSize: "cover",
// //         backgroundRepeat: "no-repeat",
// //         backgroundPosition: "center",
// //       }}
// //       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
// //         scrolled ? "backdrop-blur-md shadow-md" : "bg-transparent shadow-none"
// //       }`}
// //     >
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-24 relative">

// //         {/* DESKTOP LOGO */}
// //         <MotionDiv
// //           animate={controls}
// //           transition={{ duration: 0.3 }}
// //           className="hidden md:flex absolute left-6 top-2 -translate-y-[25px] items-center"

// //         >
// //           <RouterLink to="/" className="flex flex-col items-center">
// //   <img
// //     src={logo}
// //     alt="SVM Timbers Logo"
// //     className="h-[18rem] w-auto object-contain"
// //     loading="lazy"
// //   />
// //   <span className="mt-1 text-lg font-semibold tracking-[0.4em] text-[#fcd133] whitespace-nowrap" style={{ width: '110%', textAlign: 'center' }}>
// //     SVM TIMBERS
// //   </span>
// // </RouterLink>

// //         </MotionDiv>

// //        {/* MOBILE LOGO */}
// // <MotionDiv
// //   animate={controls}
// //   transition={{ duration: 0.3 }}
// //   className="md:hidden absolute left-1/2 -translate-x-1/2 top-4 -translate-y-[16px] z-50"

// // >
// //   <RouterLink to="/" className="flex flex-col items-center">
// //     <img
// //       src={logo}
// //       alt="SVM Timbers Logo"
// //       className="h-40 w-auto object-contain"
// //       loading="lazy"
// //     />

// //     <span className="mt-1 text-sm font-semibold tracking-[0.35em] text-[#fcd133] whitespace-nowrap text-center">
// //       SVM TIMBERS
// //     </span>
// //   </RouterLink>
// // </MotionDiv>

// //         {/* DESKTOP NAV */}
// //         <nav className="ml-auto hidden md:flex gap-6 lg:gap-8 items-center">
// //           {navItems.map((item) =>
// //             isHomePage && item.label !== "Timber" && item.label !== "Export" ? (
// //               <ScrollLink
// //                 key={item.label}
// //                 to={item.to}
// //                 smooth
// //                 duration={500}
// //                 offset={-90}
// //                 className="text-base font-semibold text-[#ffa304] hover:text-[#674C28] cursor-pointer"
// //               >
// //                 {item.label}
// //               </ScrollLink>
// //             ) : (
// //               <RouterLink
// //                 key={item.label}
// //                 to={item.to}
// //                 className="text-base font-semibold text-[#ffa304] hover:text-[#674C28]"
// //               >
// //                 {item.label}
// //               </RouterLink>
// //             )
// //           )}
// //         </nav>

// //         {/* MOBILE MENU BUTTON */}
// //         <div className="md:hidden ml-auto">
// //           <button
// //             className="text-[#ffa304]"
// //             onClick={() => setIsOpen(!isOpen)}
// //             aria-label="Toggle Menu"
// //           >
// //             <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
// //               {isOpen ? (
// //                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
// //               ) : (
// //                 <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
// //               )}
// //             </svg>
// //           </button>
// //         </div>
// //       </div>

// //       {/* MOBILE MENU */}
// //       <AnimatePresence>
// //         {isOpen && (
// //           <motion.div
// //             initial={{ opacity: 0, height: 0 }}
// //             animate={{ opacity: 1, height: "auto" }}
// //             exit={{ opacity: 0, height: 0 }}
// //             className="md:hidden bg-white/95 shadow-lg mx-2 rounded-b-lg"
// //           >
// //             {navItems.map((item) => (
// //               <RouterLink
// //                 key={item.label}
// //                 to={item.to}
// //                 onClick={() => setIsOpen(false)}
// //                 className="block py-3 text-center font-medium text-[#ffa304] hover:text-[#674C28]"
// //               >
// //                 {item.label}
// //               </RouterLink>
// //             ))}
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </header>
// //   );
// // }

// import { useState, useEffect, useCallback } from "react";
// import { Link as ScrollLink } from "react-scroll";
// import { Link as RouterLink, useLocation } from "react-router-dom";
// import { motion, useAnimation, AnimatePresence } from "framer-motion";
// import logo from "../assets/logo1.png";

// const MotionDiv = motion.div;

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const controls = useAnimation();
//   const location = useLocation();
//   const isHomePage = location.pathname === "/";

//   const handleScroll = useCallback(() => {
//     const isScrolled = window.scrollY > 20;
//     setScrolled(isScrolled);
//     controls.start(isScrolled ? { scale: 0.9, y: -6 } : { scale: 1, y: 0 });
//   }, [controls]);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [handleScroll]);

//   const navItems = [
//     { label: "Home", to: isHomePage ? "home" : "/" },
//     { label: "About Us", to: isHomePage ? "about" : "/#about" },
//     { label: "Timber", to: "/timber" },
//     { label: "Contact", to: isHomePage ? "contact" : "/#contact" },
//     { label: "Export", to: "/export" },
//   ];

//   return (
//     <header
//       style={{
//         backgroundImage: `url('/img/walnut-3.jpg')`,
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//       }}
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         scrolled ? "backdrop-blur-md shadow-md" : "bg-transparent shadow-none"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-24 relative">

//         {/* DESKTOP LOGO */}
//         <MotionDiv
//           animate={controls}
//           transition={{ duration: 0.3 }}
//           className="hidden md:flex absolute left-6 top-2 -translate-y-[25px] items-center"
//         >
//           <RouterLink to="/" className="flex flex-col items-center">
//             <img
//               src={logo}
//               alt="SVM Timbers Logo"
//               className="h-[18rem] w-auto object-contain"
//               loading="lazy"
//             />
//             <span
//               className="mt-1 text-lg font-semibold tracking-[0.4em] text-[#fcd133] whitespace-nowrap"
//               style={{ width: "110%", textAlign: "center" }}
//             >
//               SVM TIMBERS
//             </span>
//           </RouterLink>
//         </MotionDiv>

//         {/* MOBILE LOGO */}
//         <MotionDiv
//           animate={controls}
//           transition={{ duration: 0.3 }}
//           className="md:hidden absolute left-1/2 -translate-x-1/2 top-4 -translate-y-[16px] z-50"
//         >
//           <RouterLink to="/" className="flex flex-col items-center">
//             <img
//               src={logo}
//               alt="SVM Timbers Logo"
//               className="h-40 w-auto object-contain"
//               loading="lazy"
//             />
//             <span className="mt-1 text-sm font-semibold tracking-[0.35em] text-[#fcd133] whitespace-nowrap text-center">
//               SVM TIMBERS
//             </span>
//           </RouterLink>
//         </MotionDiv>

//         {/* DESKTOP NAV */}
//         <nav className="ml-auto hidden md:flex gap-6 lg:gap-8 items-center">
//           {navItems.map((item) =>
//             isHomePage && item.label !== "Timber" && item.label !== "Export" ? (
//               <ScrollLink
//                 key={item.label}
//                 to={item.to}
//                 smooth
//                 duration={500}
//                 offset={-90}
//                 className="text-base font-semibold text-white hover:text-gray-300 cursor-pointer"
//               >
//                 {item.label}
//               </ScrollLink>
//             ) : (
//               <RouterLink
//                 key={item.label}
//                 to={item.to}
//                 className="text-base font-semibold text-white hover:text-gray-300"
//               >
//                 {item.label}
//               </RouterLink>
//             )
//           )}
//         </nav>

//         {/* MOBILE MENU BUTTON */}
//         <div className="md:hidden ml-auto">
//           <button
//             className="text-white"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle Menu"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth={2}
//               viewBox="0 0 24 24"
//             >
//               {isOpen ? (
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//               )}
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden bg-black/90 shadow-lg mx-2 rounded-b-lg pt-24"

//           >
//             {navItems.map((item) => (
//   <RouterLink
//     key={item.label}
//     to={item.label === "Home" ? "/" : item.to}
//     onClick={() => setIsOpen(false)}
//     className="block py-3 text-center font-medium text-white hover:text-gray-300"
//   >
//     {item.label}
//   </RouterLink>
// ))}

//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }


import { useState, useEffect, useCallback } from "react";
import { Link as ScrollLink, scroller } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import logo from "../assets/logo1.png";

const MotionDiv = motion.div;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const controls = useAnimation();
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";

  /* ===================== SCROLL EFFECT ===================== */
  const handleScroll = useCallback(() => {
    const y = window.scrollY;
    setScrolled(y > 20);
    controls.start(y > 20 ? { scale: 0.9, y: -6 } : { scale: 1, y: 0 });

    // Active section detection
    const sections = ["home", "about", "contact"];
    for (const id of sections) {
      const el = document.getElementById(id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom >= 120) {
        setActiveSection(id);
        break;
      }
    }
  }, [controls]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
  if (location.pathname === "/" && location.state?.scrollTo) {
    const target = location.state.scrollTo;

    
    requestAnimationFrame(() => {
      scroller.scrollTo(target, {
        smooth: true,
        offset: -90,
        duration: 500,
      });
    });
  }
}, [location]);

useEffect(() => {
  // Always reset scroll when changing route
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}, [location.pathname]);



  /* ===================== CENTRAL SCROLL HANDLER ===================== */

  const goToSection = (id) => {
    if (!isHomePage) {
      navigate("/", { state: { scrollTo: id } });
    } else {
      scroller.scrollTo(id, {
        smooth: true,
        offset: -90,
        duration: 500,
      });
    }
    setIsOpen(false);
  };

  /* ===================== NAV CONFIG ===================== */
  const navItems = [
    { label: "Home", type: "scroll", target: "home" },
    { label: "About Us", type: "scroll", target: "about" },
    { label: "Timber", type: "route", target: "/timber" },
    { label: "Contact", type: "scroll", target: "contact" },
    { label: "Export", type: "route", target: "/export" },
  ];

  /* ===================== JSX ===================== */
  return (
    <header
      style={{
        backgroundImage: `url('/img/walnut-3.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-24 relative">
        {/* ===================== DESKTOP LOGO ===================== */}
        <MotionDiv
          animate={controls}
          transition={{ duration: 0.3 }}
          className="hidden md:flex absolute left-6 top-2 -translate-y-[25px]"
        >
          <RouterLink to="/" className="flex flex-col items-center">
            <img src={logo} alt="SVM Timbers" className="h-[18rem] w-auto" />
            <span className="mt-1 text-lg font-semibold tracking-[0.4em] text-[#fcd133]">
              SVM TIMBERS
            </span>
          </RouterLink>
        </MotionDiv>

        {/* ===================== MOBILE LOGO ===================== */}
        <MotionDiv
          animate={controls}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute left-1/2 -translate-x-1/2 top-4 -translate-y-[16px]"
        >
          <RouterLink to="/" className="flex flex-col items-center">
            <img src={logo} alt="SVM Timbers" className="h-40 w-auto" />
            <span className="mt-1 text-sm font-semibold tracking-[0.35em] text-[#fcd133]">
              SVM TIMBERS
            </span>
          </RouterLink>
        </MotionDiv>

        {/* ===================== DESKTOP NAV ===================== */}
        <nav className="ml-auto hidden md:flex gap-6 lg:gap-8">
          {navItems.map((item) =>
            item.type === "scroll" ? (
              <button
                key={item.label}
                onClick={() => goToSection(item.target)}
                className={`text-base font-semibold transition ${
                  activeSection === item.target
                    ? "text-gray-300"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {item.label}
              </button>
            ) : (
              <RouterLink
                key={item.label}
                to={item.target}
                className="text-base font-semibold text-white hover:text-gray-300"
              >
                {item.label}
              </RouterLink>
            )
          )}
        </nav>

        {/* ===================== MOBILE MENU BUTTON ===================== */}
        <div className="md:hidden ml-auto">
          <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* ===================== MOBILE MENU ===================== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/90 pt-24 rounded-b-lg"
          >
            {navItems.map((item) =>
              item.type === "scroll" ? (
                <button
                  key={item.label}
                  onClick={() => goToSection(item.target)}
                  className="block w-full py-3 text-center text-white hover:text-gray-300"
                >
                  {item.label}
                </button>
              ) : (
                <RouterLink
                  key={item.label}
                  to={item.target}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-center text-white hover:text-gray-300"
                >
                  {item.label}
                </RouterLink>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
