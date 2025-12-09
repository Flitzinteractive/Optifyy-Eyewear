import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const shouldBeSticky = window.scrollY > 50;
      if (shouldBeSticky && !isSticky) {
        setIsTransitioning(true);
        setTimeout(() => {
          setIsSticky(true);
          setIsTransitioning(false);
        }, 50);
      } else if (!shouldBeSticky && isSticky) {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky]);

  // Framer Motion variants for the mobile menu
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: "-100vh" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      y: "-100vh",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  // Framer Motion Logo Variants
  const logoVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        yoyo: 3, // Yoyo repeats the animation back and forth
      },
    },
  };

  const closeIconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <>
      <nav
        className={`transition-all duration-300 ${
          isSticky
            ? "sticky top-6 z-50 rounded-xl mx-4 backdrop-blur-md bg-zinc-900/50"
            : "bg-gradient-to-br from-zinc-900 to-stone-900"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link
                  to="/"
                  className="text-white font-bold font-ya text-2xl tracking-widest cursor-pointer"
                >
                  <motion.img
                    src="/images/Optifyy-Logo.svg"
                    className="w-32"
                    alt="Optifyy Logo"
                    variants={logoVariants}
                    initial="initial"
                    whileHover="hover"
                  />
                </Link>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div
              className={`hidden lg:flex items-center gap-8 justify-end flex-grow transition-opacity duration-300 ${
                isOpen
                  ? "opacity-0 pointer-events-none"
                  : "opacity-100 pointer-events-auto"
              }`}
            >
              <Link
                to="/"
                className="text-gray-300 hover:text-white px-3 py-2 font-medium transition-colors duration-300 cursor-pointer"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-white px-3 py-2 font-medium transition-colors duration-300 cursor-pointer"
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="text-gray-300 hover:text-white px-3 py-2 font-medium transition-colors duration-300 cursor-pointer"
              >
                Services
              </Link>
              <Link
                to="/products"
                className="text-gray-300 hover:text-white px-3 py-2 font-medium transition-colors duration-300 cursor-pointer"
              >
                Products
              </Link>
              <Link
                to="/free-services"
                className="text-gray-300 hover:text-white px-3 py-2 font-medium transition-colors duration-300 cursor-pointer"
              >
                Free Services
              </Link>
              <Link
                to="/review-us"
                className="text-gray-300 hover:text-white px-3 py-2 font-medium transition-colors duration-300 cursor-pointer"
              >
                Review Us
              </Link>
            </div>

            {/* Mobile and Tablet Hamburger Icon */}
            <div
              onClick={toggleMenu}
              className="lg:hidden flex cursor-pointer relative z-50"
            >
              {!isOpen ? (
                <Bars3BottomLeftIcon className="h-6 w-6 text-gray-300" />
              ) : (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={closeIconVariants}
                >
                  <XMarkIcon className="h-6 w-6 text-gray-300" />
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 w-full h-full backdrop-blur-md bg-zinc-900/50 z-50 shadow-xl"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Close Icon */}
            <div className="absolute top-4 left-0 right-0 z-60 flex justify-center">
              <div className="flex items-center m-2.5 justify-between w-full max-w-xs">
                <Link to="/" onClick={toggleMenu}>
                  <img
                    src="/images/Optifyy-Logo.svg"
                    className="w-32"
                    alt="Optifyy Logo"
                  />
                </Link>
                <div
                  onClick={toggleMenu}
                  className="text-gray-300 cursor-pointer hover:text-white transition-colors duration-200"
                >
                  <XMarkIcon className="h-8 w-8" />
                </div>
              </div>
            </div>
            {/* Logo in Mobile Menu */}

            {/* Mobile Links */}
            <div className="flex flex-col items-center justify-center h-full space-y-6 px-4">
              <Link
                to="/"
                className="text-gray-300 hover:text-white text-lg font-medium w-full text-center py-2 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-white text-lg font-medium w-full text-center py-2 transition-colors duration-300"
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="text-gray-300 hover:text-white text-lg font-medium w-full text-center py-2 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                to="/products"
                className="text-gray-300 hover:text-white text-lg font-medium w-full text-center py-2 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Products
              </Link>
              <Link
                to="/free-services"
                className="text-gray-300 hover:text-white text-lg font-medium w-full text-center py-2 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Free Services
              </Link>
              <Link
                to="/review-us"
                className="text-gray-300 hover:text-white text-lg font-medium w-full text-center py-2 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Review Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
