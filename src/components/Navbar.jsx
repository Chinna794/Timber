import React, { useState, useEffect, useCallback } from "react";
import { Link as ScrollLink, scroller } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import logo from "../assets/logo_1.png";

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 relative">
        {/* ===================== DESKTOP LOGO ===================== */}
        <MotionDiv
          animate={controls}
          transition={{ duration: 0.3 }}
          className="hidden md:flex absolute left-6 top-2 -translate-y-[25px]"
        >
          <RouterLink to="/" className="flex flex-col items-center">
            <img src={logo} alt="SVM Timbers" className="h-[18rem] w-auto" />
            <span className="mt-1 text-2xl font-semibold tracking-[0.45em] text-[#fcd133]">
              SVM TIMBER
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
            <span className="mt-1 text-base font-semibold tracking-[0.38em] text-[#fcd133]">
              SVM TIMBER
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
                className={`text-lg font-semibold transition ${
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
                className="text-lg font-semibold text-white hover:text-gray-300"
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
                  className="block w-full py-3 text-center text-lg text-white hover:text-gray-300"
                >
                  {item.label}
                </button>
              ) : (
                <RouterLink
                  key={item.label}
                  to={item.target}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-center text-lg text-white hover:text-gray-300"
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
