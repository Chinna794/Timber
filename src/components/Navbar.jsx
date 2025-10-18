
import { useState, useEffect, useCallback } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const MotionDiv = motion.div;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const controls = useAnimation();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

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
    { label: "Home", to: isHomePage ? "home" : "/" },
    { label: "About Us", to: isHomePage ? "about" : "/#about" },
    { label: "Timber", to: isHomePage ? "timber" : "/#timber" },
    { label: "Contact", to: isHomePage ? "contact" : "/#contact" },
    { label: "Export", to: "/export" },
  ];

  return (
    <header
      style={{
        backgroundImage: `url('/img/walnut-3.jpg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-md shadow-md" : "bg-transparent shadow-none"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20 md:h-20 sm:h-24 relative">
        <MotionDiv
          animate={controls}
          transition={{ duration: 0.3 }}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-[25%] sm:left-6 items-center gap-3"
        >
          <RouterLink to="/">
            <img
              src={logo}
              alt="SVM Timbers Logo"
              className="h-[7rem] sm:h-[12rem] md:h-[20rem] w-auto object-contain"
              style={{ maxWidth: "90vw" }}
              loading="lazy"
            />
          </RouterLink>
        </MotionDiv>

        <MotionDiv
          animate={controls}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute left-1/2 -translate-x-1/2 top-0 z-50"
        >
          <RouterLink to="/">
            <img
              src={logo}
              alt="SVM Timbers Logo"
              className="h-48 sm:h-44 w-auto object-contain"
              style={{ maxWidth: "80vw", position: "relative", bottom: "20px" }}
              loading="lazy"
            />
          </RouterLink>
        </MotionDiv>

        <nav className="ml-auto hidden md:flex gap-6 lg:gap-8 items-center">
          {navItems.map((item) => {
            // For home page: use ScrollLink for sections, RouterLink for Export
            if (isHomePage) {
              if (item.label === "Export") {
                return (
                  <RouterLink
                    key={item.label}
                    to={item.to}
                    className="text-base tracking-wide font-semibold font-sans transition-colors cursor-pointer text-[#ffa304] dark:text-[#FAF3E0] hover:text-[#674C28] dark:hover:text-[#FFD700]"
                  >
                    {item.label}
                  </RouterLink>
                );
              } else {
                return (
                  <ScrollLink
                    key={item.to}
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    activeClass="active-link"
                    className="text-base tracking-wide font-semibold font-sans transition-colors cursor-pointer text-[#ffa304] dark:text-[#FAF3E0] hover:text-[#674C28] dark:hover:text-[#FFD700]"
                  >
                    {item.label}
                  </ScrollLink>
                );
              }
            } else {
              // For Export page: use RouterLink for all navigation
              return (
                <RouterLink
                  key={item.label}
                  to={item.to}
                  className="text-base tracking-wide font-semibold font-sans transition-colors cursor-pointer text-[#ffa304] dark:text-[#FAF3E0] hover:text-[#674C28] dark:hover:text-[#FFD700]"
                >
                  {item.label}
                </RouterLink>
              );
            }
          })}
        </nav>

        <div className="md:hidden flex items-center justify-end w-full">
          <button
            className="text-[#ffa304] dark:text-[#FAF3E0] focus:outline-none z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 dark:bg-[#1C1C1C]/95 backdrop-blur shadow-lg rounded-b-lg mx-2 relative z-[60]"
          >

            <div className="px-4 py-1">
              {navItems.map((item, index) => {
                if (isHomePage) {
                  if (item.label === "Export") {
                    return (
                      <RouterLink
                        key={item.label}
                        to={item.to}
                        onClick={() => setIsOpen(false)}
                        className={`block py-2 text-center text-base font-medium font-sans text-[#ffa304] dark:text-[#FAF3E0] hover:text-[#674C28] dark:hover:text-[#FFD700] transition-colors cursor-pointer ${index < navItems.length - 1 ? "border-b border-gray-200 dark:border-gray-700" : ""
                          }`}
                      >
                        {item.label}
                      </RouterLink>
                    );
                  } else {
                    return (
                      <ScrollLink
                        key={item.to}
                        to={item.to}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        onClick={() => setIsOpen(false)}
                        className={`block py-2 text-center text-base font-medium font-sans text-[#ffa304] dark:text-[#FAF3E0] hover:text-[#674C28] dark:hover:text-[#FFD700] transition-colors cursor-pointer ${index < navItems.length - 1 ? "border-b border-gray-200 dark:border-gray-700" : ""
                          }`}
                      >
                        {item.label}
                      </ScrollLink>
                    );
                  }
                } else {
                  return (
                    <RouterLink
                      key={item.label}
                      to={item.to}
                      onClick={() => setIsOpen(false)}
                      className={`block py-2 text-center text-base font-medium font-sans text-[#ffa304] dark:text-[#FAF3E0] hover:text-[#674C28] dark:hover:text-[#FFD700] transition-colors cursor-pointer ${index < navItems.length - 1 ? "border-b border-gray-200 dark:border-gray-700" : ""
                        }`}
                    >
                      {item.label}
                    </RouterLink>
                  );
                }
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}