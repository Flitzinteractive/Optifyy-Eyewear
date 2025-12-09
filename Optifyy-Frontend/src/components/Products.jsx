import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";

const Products = () => {
  // Animation variants for text content sliding in
  const textVariants = {
    hiddenLeft: { opacity: 0, x: -50 },
    hiddenRight: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const galleryItemVariants = {
    hiddenLeft: { opacity: 0, x: -50 },
    hiddenRight: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <section className="bg-gradient-to-br from-stone-900 to-zinc-900 overflow-x-hidden py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            variants={textVariants}
            initial="hiddenLeft"
            whileInView="visible"
            viewport={{ once: false }}
          >
            Products
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto"
            variants={textVariants}
            initial="hiddenRight"
            whileInView="visible"
            viewport={{ once: false }}
          >
            Explore stunning styles and trends to inspire your perfect eyewear
            look—visit Optifyy to find your match.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Inspiration 1: Child Glasses */}
          <motion.div
            className="group relative rounded-xl cursor-pointer overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={galleryItemVariants}
            initial="hiddenLeft"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <img
              src="/images/Child.webp" // Replace with your child glasses image
              alt="Child Glasses"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">Child Glasses</h3>
              <p className="text-sm">Fun and durable designs for young eyes.</p>
            </div>
          </motion.div>

          {/* Inspiration 2: Powered Glasses */}
          <motion.div
            className="group relative rounded-xl cursor-pointer overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={galleryItemVariants}
            initial="hiddenRight"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <img
              src="/images/Powered-Glass.jpg" // Replace with your powered glasses image
              alt="Powered Glasses"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">Powered Glasses</h3>
              <p className="text-sm">
                Precision lenses for clear, corrected vision.
              </p>
            </div>
          </motion.div>

          {/* Inspiration 3: Sunglasses */}
          <motion.div
            className="group relative rounded-xl cursor-pointer overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={galleryItemVariants}
            initial="hiddenLeft"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <img
              src="/images/Sunglass.webp" // Replace with your sunglasses image
              alt="Sunglasses"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">Sunglasses</h3>
              <p className="text-sm">
                Stylish UV protection for every adventure.
              </p>
            </div>
          </motion.div>

          {/* Inspiration 4: Other Types of Glasses */}
          <motion.div
            className="group relative rounded-xl cursor-pointer overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={galleryItemVariants}
            initial="hiddenRight"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <img
              src="/images/ContactLense.jpg" // Replace with your other glasses image
              alt="Other Glasses"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">Lenses</h3>
              <p className="text-sm">
                Versatile options like reading, progressive lenses, and
                blue-light blocking lenses.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Products;
