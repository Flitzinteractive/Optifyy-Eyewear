import { ShieldCheckIcon, UsersIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";

const BehindTheLenses = () => {
  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const storyLeftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const storyRightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <section className="bg-gradient-to-br from-zinc-900 to-stone-900 py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
          >
            Behind the Lenses
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto"
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
          >
            Discover the passion, expertise, and dedication that drive Optifyy
            to deliver exceptional vision care.
          </motion.p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Story 1 */}
          <motion.div
            className="bg-stone-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={storyLeftVariants}
            initial="hidden"
            whileInView="visible"
          >
            <div className="flex items-center mb-4 gap-3">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="4.98 34.99 190.05 156.02"
                className="w-8 h-8"
              >
                {" "}
                <path
                  fill="#FF4D6D"
                  d="M86.3 36.5c-8.6 2.3-15.2 6.3-22.5 13.4-3.7 3.7-6.8 7.2-6.8 7.7 0 2.4 6.4 9.7 12 13.9a52.52 52.52 0 0 0 62 0c5.6-4.2 12-11.5 12-13.9 0-1.9-13.4-14-18.6-16.8-10.4-5.6-26.5-7.4-38.1-4.3m26.6 7.4c6.8 2.1 14.2 6.5 18.6 11.1l2.9 3-4.3 4.4c-5.4 5.5-14.5 10.1-23.3 11.7-8.5 1.6-17.6.1-26.4-4.2C74.9 67.2 66 59.8 66 58c0-1.1 6.9-7.2 11.3-9.9 9.8-6 24.3-7.7 35.6-4.2"
                ></path>{" "}
                <path
                  fill="#FF4D6D"
                  d="M93 44.8c-9.6 5.3-10.8 17.4-2.5 25.2 2.3 2.2 3.6 2.5 9.5 2.5s7.2-.3 9.5-2.5c5.5-5.1 6.9-11.6 4.1-18.4-3-7.2-13.5-10.7-20.6-6.8m10.3 6.4c5.2 2.7 6.2 8.3 2.2 12.3C100.7 68.4 92 65 92 58.3c.1-3.1 1.5-5.4 4.5-7.1 2.6-1.5 4.1-1.5 6.8 0M41.2 79.7l-10.3 6.8.3 11.5c.3 10.4.5 11.5 2.2 11.8 3.3.7 4.6-2.5 4.6-11.2v-8.1l9.3-6c7.5-4.9 9.2-6.5 9.2-8.5 0-4.6-4.1-3.6-15.3 3.7m102.5-6c-2.2 2.2-.1 4.7 8.8 10.5l9.5 6.3v8.1c0 8.7 1.3 11.9 4.6 11.2 1.7-.3 1.9-1.4 2.2-11.8l.2-11.5-10.4-6.8c-9.7-6.2-13.3-7.7-14.9-6M25.4 119.9c-6.6 4-8.4 14.8-3.9 23.7 3 5.8 2.9 5.4.8 5.4-4.4 0-10.1 2.5-13.5 6L5 158.8v14C5 192.2 3.1 191 33.7 191c23 0 26.5-.4 28.5-3.4.4-.6.8-7.3.8-14.9 0-11.1-.3-14.3-1.7-16.3-2-3.1-7.7-6.1-13.2-7-2.3-.4-4.1-.7-4.1-.8 0 0 1.1-2.3 2.5-5 4.6-9.1 2.9-19.5-3.8-23.6-4.3-2.6-13.1-2.7-17.3-.1M40 127c4.2 4.2 1.3 16.1-4.4 17.6-3.3.8-6-.9-8-5-3.6-7.7-.6-14.6 6.5-14.6 2.6 0 4.6.7 5.9 2m6.2 29.1c3.3.8 6.2 2.2 8 4 2.8 2.8 2.9 3 2.6 13.1-.3 9.8-.4 10.3-2.5 10.6s-2.2 0-2.5-8.5l-.3-8.8h-6l-.3 8.7-.3 8.8H23v-18h-6v9c0 8.9 0 9-2.5 9H12v-11.3c0-10.1.2-11.6 2-13.2 4.5-4 21-5.8 32.2-3.4m45-36.1c-6.5 4-8.2 14.7-3.7 23.6 1.4 2.7 2.5 5 2.5 5 0 .1-1.9.4-4.2.8-5.6.9-11.7 4.4-13.4 7.8-1.5 2.9-2 28.3-.6 30.4 1.9 3 5.5 3.4 28.2 3.4s26.3-.4 28.2-3.4c1.4-2.1.9-27.5-.6-30.4-1.7-3.4-7.8-6.9-13.4-7.8-2.3-.4-4.2-.7-4.2-.8 0 0 1.1-2.3 2.5-5 4.5-8.9 2.8-19.6-3.7-23.6-4.5-2.7-13.1-2.7-17.6 0m14.5 7.2c3.9 3.7 2.2 14.2-2.7 16.8-7.5 4-15.1-10.3-9-16.8 2.8-3 8.6-3 11.7 0m6.2 28.9c2.8.6 6.2 1.9 7.6 3 2.4 2 2.5 2.4 2.5 13.5 0 10.7-.1 11.4-2 11.4-1.8 0-2-.7-2-7.4 0-9.4-.5-10.6-4.1-10.6H111v18H89v-18h-2.9c-3.6 0-4.1 1.2-4.1 10.6 0 6.7-.2 7.4-2 7.4-1.9 0-2-.7-2-11.3 0-10.1.2-11.6 2-13.2 4.4-4 21-5.8 31.9-3.4m45.4-36.1c-4.4 2.6-6.3 6.8-6.3 13.7 0 4.3.7 6.9 2.5 10.2 1.4 2.3 2.5 4.4 2.5 4.6 0 .1-1.8.5-4.1.9-5.5.9-11.2 3.9-13.2 7-1.4 2-1.7 5.2-1.7 16.3 0 7.6.4 14.3.8 14.9 2 3 5.5 3.4 28.5 3.4 30.6 0 28.7 1.2 28.7-18.2v-14l-3.8-3.8c-3.4-3.5-9.1-6-13.4-6-2.3 0-2.2-.1.3-4.4 4.9-8.3 3.1-20.7-3.5-24.7-4.2-2.6-13-2.5-17.3.1m14.6 7.6c2.5 3.2 2.7 7.4.5 12-2 4.1-4.7 5.8-8 5-5.7-1.5-8.6-13.4-4.4-17.6 3.1-3.1 9.3-2.7 11.9.6"
                ></path>{" "}
              </svg>
              {/* Closing SVG Tag was Missing */}
              <motion.h3
                className="text-xl font-semibold text-white"
                variants={storyLeftVariants}
                initial="hidden"
                whileInView="visible"
              >
                Our Visionary Team
              </motion.h3>
            </div>
            <motion.p
              className="text-gray-300"
              variants={storyLeftVariants}
              initial="hidden"
              whileInView="visible"
            >
              Meet our certified opticians and eyewear specialists, passionate
              about helping you see the world clearly and stylishly.
            </motion.p>
          </motion.div>

          {/* Story 2 */}
          <motion.div
            className="bg-stone-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={storyRightVariants}
            initial="hidden"
            whileInView="visible"
          >
            <div className="flex items-center mb-4 gap-3">
              <ShieldCheckIcon className="w-8 h-8 text-[#FF4D6D] " />
              <motion.h3 className="text-xl font-semibold text-white">
                Our Legacy
              </motion.h3>
            </div>
            <motion.p
              className="text-gray-300"
              variants={storyRightVariants}
              initial="hidden"
              whileInView="visible"
            >
              Founded on a commitment to quality and innovation, Optifyy has
              been transforming vision for over a decade in our community.
            </motion.p>
          </motion.div>

          {/* Story 3 */}
          <motion.div
            className="bg-stone-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={storyLeftVariants}
            initial="hidden"
            whileInView="visible"
          >
            <div className="flex items-center mb-4 gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-8 h-8"
                viewBox="0.12 11.22 35.75 13.25"
              >
                {" "}
                <path
                  fill="#FF4D6D"
                  d="M35.686 11.931c-.507-.522-6.83-1.094-13.263-.369-1.283.144-1.363.51-4.425.63-3.061-.119-3.141-.485-4.425-.63C7.14 10.837.817 11.41.31 11.931c-.252.261-.252 2.077 0 2.338.254.261 1.035.606 1.403 1.827.237.787.495 5.864 2.281 7.377 1.768 1.498 7.462 1.217 9.326-.262 2.536-1.298 2.892-5.785 3.292-7.639.203-.939 1.162-1.016 1.385-1.016s1.182.077 1.385 1.016c.401 1.853.757 6.34 3.292 7.639 1.865.955 7.558 1.236 9.326-.262 1.786-1.513 2.044-6.59 2.281-7.377.368-1.22 1.149-1.566 1.403-1.827s.254-2.077.002-2.338"
                ></path>{" "}
                <path
                  fill="#FF4D6D"
                  d="M14.644 15.699c-.098 1.255-.521 4.966-1.757 6.083-1.376 1.243-6.25 1.568-7.79.044-.808-.799-1.567-4.018-1.503-6.816.038-1.679 2.274-2.02 5.462-2.02 3.148 0-5.763.468 5.588 2.709m6.707 0c.098 1.255.521 4.966 1.757 6.083 1.376 1.243 6.25 1.568 7.79.044.808-.799 1.567-4.018 1.503-6.816-.038-1.679-2.274-2.02-5.462-2.02-3.147 0-5.763.468 5.588 2.709"
                ></path>{" "}
              </svg>
              {/* Closing SVG Tag was Missing */}
              <motion.h3
                className="text-xl font-semibold text-white"
                variants={storyLeftVariants}
                initial="hidden"
                whileInView="visible"
              >
                Your Style, Our Craft
              </motion.h3>
            </div>
            <motion.p
              className="text-gray-300"
              variants={storyLeftVariants}
              initial="hidden"
              whileInView="visible"
            >
              We blend cutting-edge technology with timeless design to create
              eyewear that reflects your unique personality and vision needs.
            </motion.p>
          </motion.div>
        </div>

        {/* Call-to-Action */}
      </div>
    </section>
  );
};

export default BehindTheLenses;
