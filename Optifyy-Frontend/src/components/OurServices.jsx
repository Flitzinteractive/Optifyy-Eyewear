import { EyeIcon, ClipboardIcon, HeartIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";

const OurServices = () => {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
        staggerChildren: 0.2,
      },
    },
  };

  const serviceLeftVariants = {
    hidden: { opacity: 0, x: -50 }, // Slide from Left
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const serviceRightVariants = {
    hidden: { opacity: 0, x: 50 }, // Slide from Right
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
            variants={serviceLeftVariants}
            initial="hidden"
            whileInView="visible"
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto"
            variants={serviceRightVariants}
            initial="hidden"
            whileInView="visible"
          >
            Discover how we can help you achieve perfect vision and style with
            our comprehensive offerings.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service 1 */}
          <motion.div
            className="flex items-start"
            variants={serviceLeftVariants}
            initial="hidden"
            whileInView="visible"
          >
            <div className="w-12 h-12 bg-[#FF4D6D] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <EyeIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Comprehensive Eye Exams
              </h3>
              <p className="text-gray-300">
                Thorough vision assessments to ensure your eyes are healthy and
                your prescription is up-to-date.
              </p>
            </div>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            className="flex items-start"
            variants={serviceRightVariants}
            initial="hidden"
            whileInView="visible"
          >
            <div className="w-12 h-12 bg-[#FF4D6D] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <ClipboardIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Eyewear Consultations
              </h3>
              <p className="text-gray-300">
                Expert advice to find frames and lenses that complement your
                style and vision needs.
              </p>
            </div>
          </motion.div>

          {/* Service 3 */}
          <motion.div
            className="flex items-start"
            variants={serviceLeftVariants}
            initial="hidden"
            whileInView="visible"
          >
            <div className="w-12 h-12 bg-[#FF4D6D] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
                <g fill="#ffffff">
                  <path d="M38.168 32.965a.727.727 0 0 0-.635-1.31 23.432 23.432 0 0 0-3.519 2.131c-10.25 7.444-15.609 15.486-15.833 15.825a.728.728 0 0 0 1.215.8c.053-.08 5.436-8.158 15.473-15.447a21.813 21.813 0 0 1 3.299-1.999zM54.703 16.678a.728.728 0 0 0-.256 1.433c4.43.79 6.037 1.985 6.037 2.596 0 1.137-4.881 3.257-14.212 3.257-9.33 0-14.211-2.12-14.211-3.257 0-1.136 4.881-3.256 14.211-3.256 1.482 0 2.947.059 4.353.174a.74.74 0 0 0 .785-.665.728.728 0 0 0-.666-.785c-8.845-.729-20.138.835-20.138 4.532 0 5.877 6.992 10.659 15.599 10.685 3.845.407 6.86 2.597 8.713 4.363a.727.727 0 1 0 1.004-1.053c-1.323-1.262-3.205-2.712-5.538-3.694 6.647-1.236 11.555-5.38 11.555-10.301 0-2.262-3.935-3.439-7.236-4.029zm-8.43 13.261c-6.556 0-12.074-2.903-13.707-6.832 2.819 1.523 8.282 2.31 13.707 2.31 5.425 0 10.888-.787 13.708-2.31-1.633 3.928-7.151 6.832-13.708 6.832zM56.66 37.451c-.392-.084-9.631-1.97-15.281 4.925a.727.727 0 1 0 1.125.921c3.984-4.86 10.182-4.828 12.716-4.581-5.862 8.042-12.696 12.886-14.703 14.211-.567-1.004-1.468-3.384.099-6.71a.73.73 0 0 0-.348-.969.729.729 0 0 0-.968.349c-1.997 4.237-.561 7.26.138 8.352-.86 1.353-3.929 5.936-7.712 8.739a.728.728 0 0 0 .866 1.168c4.332-3.211 7.657-8.441 8.249-9.404 1.249-.775 9.453-6.093 16.264-15.874a.73.73 0 0 0-.445-1.127z" />
                </g>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Lens Solutions
              </h3>
              <p className="text-gray-300">
                Advanced lens options, including progressive, polarized, and
                blue-light blocking lenses.
              </p>
            </div>
          </motion.div>

          {/* Service 4 */}
          <motion.div
            className="flex items-start"
            variants={serviceRightVariants}
            initial="hidden"
            whileInView="visible"
          >
            <div className="w-12 h-12 bg-[#FF4D6D] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <HeartIcon className="w-6 h-6  text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Repairs & Adjustments
              </h3>
              <p className="text-gray-300">
                On-site repairs and adjustments to keep your eyewear in top
                condition.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Call-to-Action */}
        {/* <div className="text-center mt-12">
          <Link
            to="/contact" // Adjust route to your contact or appointment page
            className="bg-[#FF4D6D] hover:bg-red-800 text-white font-extrabold py-3 px-8 rounded-full text-lg uppercase tracking-wider shadow-lg transition-colors duration-300"
          >
            Schedule Your Visit
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default OurServices;
