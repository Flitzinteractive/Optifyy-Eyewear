import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  // Animation variants
  const textVariants = {
    hidden: { x: 50, opacity: 0 }, // Slide from Right
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  };

  const imageVariants = {
    hidden: { x: -50, opacity: 0 }, // Slide from Left
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeInOut", delay: 0.3 },
    },
  };

  return (
    <section className="bg-gradient-to-br from-zinc-900 to-stone-900 py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-[#FF4D6D]  mb-4 sm:mb-6 leading-tight">
              Discover Your Perfect Vision
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl mb-6 sm:mb-8">
              Explore our expertly curated eyewear collections and experience
              exceptional eye care.
            </p>
            {/* <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-red-600 hover:bg-red-800 text-white font-extrabold py-2 px-6 rounded-full text-lg uppercase tracking-wider shadow-lg transition-colors duration-300 w-full sm:w-auto">
                Explore Our Collections
              </button>
            </div> */}
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="relative"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
          >
            <img
              src="/images/Hero.webp" // Replace with your hero image
              alt="Stylish Eyewear"
              className="rounded-2xl shadow-2xl w-full object-cover h-full object-center"
            />
            {/* Subtle Overlay Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-20 rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
