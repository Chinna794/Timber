// // // import { useState, useEffect, useCallback } from "react";
// // // import { Link } from "react-scroll";
// // // import { motion, useAnimation, AnimatePresence } from "framer-motion";
// // // import logo from "../assets/logo.png";

// // // const MotionDiv = motion.div;

// // // export default function Navbar() {
// // //   const [isOpen, setIsOpen] = useState(false);
// // //   const [scrolled, setScrolled] = useState(false);
// // //   const controls = useAnimation();

// // //   const handleScroll = useCallback(() => {
// // //     const isScrolled = window.scrollY > 20;
// // //     setScrolled(isScrolled);
// // //     controls.start(isScrolled ? { scale: 0.9, y: -2 } : { scale: 1, y: 0 });
// // //   }, [controls]);

// // //   useEffect(() => {
// // //     window.addEventListener("scroll", handleScroll);
// // //     return () => window.removeEventListener("scroll", handleScroll);
// // //   }, [handleScroll]);

// // //   const navItems = [
// // //     { label: "Home", to: "home" },
// // //     { label: "About Us", to: "about" },
// // //     { label: "Timber", to: "timber" },
// // //     { label: "Contact", to: "contact" },
// // //   ];

// // //   return (
// // //     <header
// // //       style={{
// // //         backgroundImage: `url('/src/assets/walnut-3.jpg')`,
// // //         backgroundSize: "cover",
// // //         backgroundRepeat: "no-repeat",
// // //         backgroundPosition: "center",
// // //       }}
// // //       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
// // //         scrolled ? "backdrop-blur-md shadow-md" : "bg-transparent shadow-none"
// // //       }`}
// // //     >
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20 sm:h-24 relative">
// // //         {/* Desktop Floating Logo */}
// // //         <MotionDiv
// // //           animate={controls}
// // //           transition={{ duration: 0.3 }}
// // //           className="hidden md:flex absolute left-4 top-1/2 -translate-y-[25%] sm:left-6 items-center gap-3"
// // //         >
// // //           <img
// // //             src={logo}
// // //             alt="SVM Timbers Logo"
// // //             className="h-[7rem] sm:h-[12rem] md:h-[20rem] w-auto object-contain"
// // //             style={{ maxWidth: "90vw" }}
// // //             loading="lazy"
// // //           />
// // //         </MotionDiv>

// // //         {/* Desktop Navigation */}
// // //         <nav className="ml-auto hidden md:flex gap-6 lg:gap-8 items-center">
// // //           {navItems.map((item) => (
// // //             <Link
// // //               key={item.to}
// // //               to={item.to}
// // //               smooth={true}
// // //               duration={500}
// // //               offset={-80}
// // //               spy={true}
// // //               activeClass="active-link"
// // //               className="text-sm lg:text-base text-gray-700 dark:text-gray-200 hover:text-amber-800 dark:hover:text-amber-400 transition-colors cursor-pointer"
// // //             >
// // //               {item.label}
// // //             </Link>
// // //           ))}
// // //         </nav>

// // //         {/* Mobile Menu Toggle */}
// // //         <div className="md:hidden flex items-center justify-between w-full">
// // //           <button
// // //             className="text-gray-700 dark:text-gray-200 focus:outline-none z-50 relative"
// // //             onClick={() => setIsOpen(!isOpen)}
// // //             aria-label="Toggle Menu"
// // //           >
// // //             <svg
// // //               className="w-7 h-7"
// // //               fill="none"
// // //               stroke="currentColor"
// // //               strokeWidth={2}
// // //               viewBox="0 0 24 24"
// // //             >
// // //               {isOpen ? (
// // //                 <path
// // //                   strokeLinecap="round"
// // //                   strokeLinejoin="round"
// // //                   d="M6 18L18 6M6 6l12 12"
// // //                 />
// // //               ) : (
// // //                 <path
// // //                   strokeLinecap="round"
// // //                   strokeLinejoin="round"
// // //                   d="M4 6h16M4 12h16M4 18h16"
// // //                 />
// // //               )}
// // //             </svg>
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* Mobile Logo */}
// // //       <MotionDiv
// // //         animate={controls}
// // //         transition={{ duration: 0.3 }}
// // //         className="md:hidden flex justify-center mt-2"
// // //       >
// // //         <img
// // //           src={logo}
// // //           alt="SVM Timbers Logo"
// // //           className="h-20 sm:h-24 w-auto object-contain"
// // //           style={{ maxWidth: "80vw" }}
// // //           loading="lazy"
// // //         />
// // //       </MotionDiv>

// // //       {/* Mobile Nav Menu with Animation */}
// // //       <AnimatePresence>
// // //         {isOpen && (
// // //           <motion.div
// // //             key="mobile-nav"
// // //             initial={{ opacity: 0, y: -10 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             exit={{ opacity: 0, y: -10 }}
// // //             transition={{ duration: 0.25 }}
// // //             className="md:hidden mt-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur px-4 pb-4 pt-2 shadow-md rounded-b-md"
// // //           >
// // //             {navItems.map((item) => (
// // //               <Link
// // //                 key={item.to}
// // //                 to={item.to}
// // //                 smooth={true}
// // //                 duration={500}
// // //                 offset={-70}
// // //                 onClick={() => setIsOpen(false)}
// // //                 className="block py-3 text-base text-gray-700 dark:text-gray-200 hover:text-amber-800 dark:hover:text-amber-400 transition-colors cursor-pointer"
// // //               >
// // //                 {item.label}
// // //               </Link>
// // //             ))}
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>
// // //     </header>
// // //   );
// // // }


// // import { useState, useEffect, useCallback } from "react";
// // import { Link } from "react-scroll";
// // import { motion, useAnimation, AnimatePresence } from "framer-motion";
// // import logo from "../assets/logo.png";

// // const MotionDiv = motion.div;

// // export default function Navbar() {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [scrolled, setScrolled] = useState(false);
// //   const controls = useAnimation();

// //   const handleScroll = useCallback(() => {
// //     const isScrolled = window.scrollY > 20;
// //     setScrolled(isScrolled);
// //     controls.start(isScrolled ? { scale: 0.9, y: -2 } : { scale: 1, y: 0 });
// //   }, [controls]);

// //   useEffect(() => {
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, [handleScroll]);

// //   const navItems = [
// //     { label: "Home", to: "home" },
// //     { label: "About Us", to: "about" },
// //     { label: "Timber", to: "timber" },
// //     { label: "Contact", to: "contact" },
// //   ];

// //   return (
// //     <header
// //       style={{
// //         backgroundImage: `url('/src/assets/walnut-3.jpg')`,
// //         backgroundSize: "cover",
// //         backgroundRepeat: "no-repeat",
// //         backgroundPosition: "center",
// //       }}
// //       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
// //         scrolled ? "backdrop-blur-md shadow-md" : "bg-transparent shadow-none"
// //       }`}
// //     >
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20 sm:h-24 relative">
// //         {/* Floating Logo */}
// //         <MotionDiv
// //           animate={controls}
// //           transition={{ duration: 0.3 }}
// //           className="hidden md:flex absolute left-4 top-1/2 -translate-y-[25%] sm:left-6 items-center gap-3"
// //         >
// //           <img
// //             src={logo}
// //             alt="SVM Timbers Logo"
// //             className="h-[7rem] sm:h-[12rem] md:h-[20rem] w-auto object-contain"
// //             style={{ maxWidth: "90vw" }}
// //             loading="lazy"
// //           />
// //         </MotionDiv>

// //         {/* Desktop Navigation */}
// //         <nav className="ml-auto hidden md:flex gap-6 lg:gap-8 items-center">
// //           {navItems.map((item) => (
// //             <Link
// //               key={item.to}
// //               to={item.to}
// //               smooth={true}
// //               duration={500}
// //               offset={-80}
// //               spy={true}
// //               activeClass="active-link"
// //               className="text-base tracking-wide font-semibold font-sans transition-colors cursor-pointer text-[#4A3B21] dark:text-[#FAF3E0] hover:text-[#674C28] dark:hover:text-[#FFD700]"
// //             >
// //               {item.label}
// //             </Link>
// //           ))}
// //         </nav>

// //         {/* Mobile Menu Toggle */}
// //         <div className="md:hidden flex items-center justify-between w-full">
// //           <button
// //             className="text-[#4A3B21] dark:text-[#FAF3E0] focus:outline-none z-50 relative"
// //             onClick={() => setIsOpen(!isOpen)}
// //             aria-label="Toggle Menu"
// //           >
// //             <svg
// //               className="w-7 h-7"
// //               fill="none"
// //               stroke="currentColor"
// //               strokeWidth={2}
// //               viewBox="0 0 24 24"
// //             >
// //               {isOpen ? (
// //                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
// //               ) : (
// //                 <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
// //               )}
// //             </svg>
// //           </button>
// //         </div>
// //       </div>

// //       {/* Mobile Logo */}
// //       <MotionDiv
// //         animate={controls}
// //         transition={{ duration: 0.3 }}
// //         className="md:hidden flex justify-center mt-2"
// //       >
// //         <img
// //           src={logo}
// //           alt="SVM Timbers Logo"
// //           className="h-20 sm:h-24 w-auto object-contain"
// //           style={{ maxWidth: "80vw" }}
// //           loading="lazy"
// //         />
// //       </MotionDiv>

// //       {/* Mobile Nav Menu with Animation */}
// //       <AnimatePresence>
// //         {isOpen && (
// //           <motion.div
// //             key="mobile-nav"
// //             initial={{ opacity: 0, y: -10 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             exit={{ opacity: 0, y: -10 }}
// //             transition={{ duration: 0.25 }}
// //             className="md:hidden mt-2 bg-white/90 dark:bg-[#1C1C1C]/90 backdrop-blur px-4 pb-4 pt-2 shadow-md rounded-b-md"
// //           >
// //             {navItems.map((item) => (
// //               <Link
// //                 key={item.to}
// //                 to={item.to}
// //                 smooth={true}
// //                 duration={500}
// //                 offset={-70}
// //                 onClick={() => setIsOpen(false)}
// //                 className="block py-3 text-base font-medium font-sans text-[#4A3B21] dark:text-[#FAF3E0] hover:text-[#674C28] dark:hover:text-[#FFD700] transition-colors cursor-pointer"
// //               >
// //                 {item.label}
// //               </Link>
// //             ))}
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </header>
// //   );
// // }


// import { useState, useEffect, useCallback } from "react";
// import { Link } from "react-scroll";
// import { motion, useAnimation, AnimatePresence } from "framer-motion";
// import logo from "../assets/logo.png";

// const MotionDiv = motion.div;

// const luxury = {
//   bg: 'bg-[#F8F4EF] dark:bg-[#231915]',
//   heading: 'text-[#674C28] dark:text-[#FFD700]',
//   tabActive: 'from-[#BFA77A] to-[#D8C69C] text-black dark:from-[#FFD700] dark:to-[#DAA520] dark:text-black',
//   tabInactive: 'bg-[#FFF] text-[#5A4A30] border-[#CBB27D] dark:bg-[#1C1C1C] dark:text-[#EADCA6] dark:border-[#7F6E3C] hover:ring-yellow-500',
//   cardBg: 'bg-[#FFFDF8]/70 dark:bg-[#1B1B1B]/80 border-[#EADCA6] dark:border-[#5F4E2A]',
//   gradientBox: 'from-[#F0E5CF] via-[#E5D4B7] to-[#D9C7A5] dark:from-[#3B2C1A] dark:via-[#2A1F12] dark:to-[#1C140A]',
//   textMain: 'text-[#4A3B21] dark:text-[#FAF3E0]',
//   textSub: 'text-[#7A684A] dark:text-[#D6C49A]',
//   textLabel: 'text-[#5F4E2A] dark:text-[#FFEBC1]'
// };

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const controls = useAnimation();

//   const handleScroll = useCallback(() => {
//     const isScrolled = window.scrollY > 20;
//     setScrolled(isScrolled);
//     controls.start(isScrolled ? { scale: 0.9, y: -2 } : { scale: 1, y: 0 });
//   }, [controls]);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [handleScroll]);

//   const navItems = [
//     { label: "Home", to: "home" },
//     { label: "About Us", to: "about" },
//     { label: "Timber", to: "timber" },
//     { label: "Contact", to: "contact" },
//   ];

//   return (
//     <header
//       style={{
//         backgroundImage: `url('/src/assets/walnut-3.jpg')`,
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//       }}
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         scrolled ? "backdrop-blur-md shadow-md" : "bg-transparent shadow-none"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20 sm:h-24 relative">
//         {/* Desktop Floating Logo */}
//         <MotionDiv
//           animate={controls}
//           transition={{ duration: 0.3 }}
//           className="hidden md:flex absolute left-4 top-1/2 -translate-y-[25%] sm:left-6 items-center gap-3"
//         >
//           <img
//             src={logo}
//             alt="SVM Timbers Logo"
//             className="h-[7rem] sm:h-[12rem] md:h-[20rem] w-auto object-contain"
//             style={{ maxWidth: "90vw" }}
//             loading="lazy"
//           />
//         </MotionDiv>

//         {/* Desktop Navigation */}
//         <nav className="ml-auto hidden md:flex gap-6 lg:gap-8 items-center">
//           {navItems.map((item) => (
//             <Link
//               key={item.to}
//               to={item.to}
//               smooth={true}
//               duration={500}
//               offset={-80}
//               spy={true}
//               activeClass="active-link"
//               className="text-base tracking-wide font-semibold font-sans transition-colors cursor-pointer text-[#4A3B21] dark:text-[#FAF3E0] hover:text-[#674C28] dark:hover:text-[#FFD700]"
//             >
//               {item.label}
//             </Link>
//           ))}
//         </nav>

//         {/* Mobile Menu Toggle */}
//         <div className="md:hidden flex items-center justify-between w-full">
//           <button
//             className="text-[#4A3B21] dark:text-[#FAF3E0] focus:outline-none z-50 relative"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle Menu"
//           >
//             <motion.svg
//               initial={false}
//               animate={{ rotate: isOpen ? 90 : 0 }}
//               transition={{ duration: 0.2 }}
//               className="w-7 h-7"
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
//             </motion.svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Logo */}
//       <MotionDiv
//         animate={controls}
//         transition={{ duration: 0.3 }}
//         className="md:hidden flex justify-center mt-2"
//       >
//         <img
//           src={logo}
//           alt="SVM Timbers Logo"
//           className="h-20 sm:h-24 w-auto object-contain"
//           style={{ maxWidth: "80vw" }}
//           loading="lazy"
//         />
//       </MotionDiv>

//       {/* Mobile Nav Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             key="mobile-nav"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//             className={`md:hidden mt-2 px-4 pb-5 pt-4 shadow-lg rounded-b-xl backdrop-blur-md 
//                       bg-gradient-to-br ${luxury.gradientBox} 
//                       border-t border-[#CBB27D] dark:border-[#7F6E3C]`}
//           >
//             {navItems.map((item, index) => (
//               <Link
//                 key={item.to}
//                 to={item.to}
//                 smooth={true}
//                 duration={500}
//                 offset={-70}
//                 onClick={() => setIsOpen(false)}
//                 className={`block py-4 text-lg font-display tracking-wide 
//                             text-[#4A3B21] dark:text-[#FAF3E0] 
//                             hover:text-[#674C28] dark:hover:text-[#FFD700] 
//                             transition-colors cursor-pointer ${
//                               index !== navItems.length - 1
//                                 ? "border-b border-[#E5D4B7] dark:border-[#3B2C1A]"
//                                 : ""
//                             }`}
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }


import { useState, useEffect, useCallback } from "react";
import { Link } from "react-scroll";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const MotionDiv = motion.div;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const controls = useAnimation();

  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 20;
    setScrolled(isScrolled);
    controls.start(isScrolled ? { scale: 0.9, y: -2 } : { scale: 1, y: 0 });
  }, [controls]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const navItems = [
    { label: "Home", to: "home" },
    { label: "About Us", to: "about" },
    { label: "Timber", to: "timber" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <header
      style={{
        backgroundImage: `url('/src/assets/walnut-3.jpg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md shadow-md" : "bg-transparent shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20 sm:h-24 relative">
        {/* Floating Logo for Desktop */}
        <MotionDiv
          animate={controls}
          transition={{ duration: 0.3 }}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-[25%] sm:left-6 items-center gap-3"
        >
          <img
            src={logo}
            alt="SVM Timbers Logo"
            className="h-[7rem] sm:h-[12rem] md:h-[20rem] w-auto object-contain"
            style={{ maxWidth: "90vw" }}
            loading="lazy"
          />
        </MotionDiv>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden md:flex gap-6 lg:gap-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="active-link"
              className="text-base tracking-wide font-semibold font-sans transition-colors cursor-pointer text-[#4A3B21] dark:text-[#FAF3E0] hover:text-[#674C28] dark:hover:text-[#FFD700]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center justify-between w-full">
          <button
            className="text-[#4A3B21] dark:text-[#FAF3E0] focus:outline-none z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Logo */}
      <MotionDiv
        animate={controls}
        transition={{ duration: 0.3 }}
        className="md:hidden flex justify-center mt-1"
      >
        <img
          src={logo}
          alt="SVM Timbers Logo"
          className="h-14 sm:h-16 max-w-[60vw] object-contain"
          loading="lazy"
        />
      </MotionDiv>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mt-2 bg-white/90 dark:bg-[#1C1C1C]/90 backdrop-blur px-4 pb-4 pt-2 shadow-md rounded-b-md"
          >
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-base font-medium font-sans text-[#4A3B21] dark:text-[#FAF3E0] hover:text-[#674C28] dark:hover:text-[#FFD700] transition-colors cursor-pointer"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
