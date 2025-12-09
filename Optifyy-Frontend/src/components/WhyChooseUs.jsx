import { HeartIcon } from "@heroicons/react/20/solid";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const WhyChooseUs = () => {
  // Framer Motion Variants for Animation
  const textVariant = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const iconVariant = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: {}, // No animation on the container itself.
    visible: {
      transition: {
        staggerChildren: 0.3, // Stagger the animation of child elements
      },
    },
  };

  // Animation controls
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("visible");
          } else {
            controls.start("hidden");
          }
        });
      },
      {
        threshold: 0.2, // Adjust threshold as needed
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  return (
    <section
      className="bg-gradient-to-br from-stone-900 to-zinc-900 py-16 lg:py-20"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls} // Use animationControls here
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            variants={textVariant}
          >
            Why Choose Optifyy?
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto"
            variants={textVariant}
          >
            Experience exceptional eye care and find eyewear that fits your
            style and vision perfectly.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <motion.div
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate={controls} // Use animationControls here
          >
            <motion.div
              className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#FF4D6D] flex items-center justify-center"
              variants={iconVariant}
            >
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                className="w-9 h-9"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#ffffff"
                  d="m251.6 27.1-2.6 2v45l2.5 2.4c1.3 1.4 3.4 2.5 4.5 2.5 1.2 0 3.2-1.1 4.5-2.5l2.5-2.4V29.9l-2.5-2.4c-3-3-5.4-3.1-8.9-.4M121.5 51.5c-1.4 1.3-2.5 3.2-2.5 4.1 0 2 18.4 38 20.8 40.6 1.8 2.1 7.1 2.3 9.7.4 3.6-2.6 2.3-7.1-7.4-25.6-11.8-22.3-14.9-25.3-20.6-19.5m259.3-1.2c-2.3 1.8-21.8 39-21.8 41.6 0 5.2 8 8.1 11.8 4.3 1-1 6.2-10.3 11.6-20.5 7.6-14.6 9.5-19.2 9-21.2-1.2-4.7-6.9-7-10.6-4.2M231 102.7c-65.8 6.8-122.3 36.1-151.3 78.6-5.6 8.1-7.1 13.1-6.5 21.7.6 7.7 2.9 12.7 10.6 22.8 17.2 22.6 47 44.3 77.2 56.1 32.9 13 57.9 17.5 95.5 17.5 21.2 0 25.9-.4 40.7-2.8 54.8-8.9 98.5-32 128.5-67.9 9.4-11.3 12.5-17.3 13.1-25.7.8-11.4-2.6-18.4-16.6-34.5-30.2-34.6-79.9-58.6-134.8-65-11.7-1.4-46.2-1.9-56.4-.8m50.5 14.4c6.6.6 17.2 2.2 23.5 3.5 49.9 10.8 89 33.5 113.8 66.2 5 6.6 5.6 8 6 13 .4 5.3.1 6.1-3.9 12.1-5.2 7.8-19 22.4-27.7 29.4-27 21.5-63.4 36.5-102.7 42.4-16.7 2.5-52.3 2.4-69 0-46.8-7-86.2-25.3-114.1-53.1C92.2 215.4 87 207.8 87 200.5c0-5.8 1.2-8.1 10.7-19.7 27.3-33.6 80-58.8 132.8-63.8 20.4-1.8 29.6-1.8 51 .1"
                />
                <path
                  fill="#ffffff"
                  d="M232.5 125.6c-36.9 8.2-62.4 41.7-60.2 78.9.8 12.3 2.7 19.6 7.7 30 7.5 15.4 19.5 27.3 35.5 35 10.9 5.3 21 7.5 34.3 7.5 41.5 0 75.2-33.8 75.3-75.5.1-13.7-2.1-23-8-35.1-9.7-19.5-27.6-34.4-48.1-39.9-9.1-2.4-27.6-2.9-36.5-.9m36.3 15.4c13 4.6 27.4 16.5 34.3 28.4 8.5 14.8 10.7 34.7 5.5 50.1-7.2 21.2-23.3 36.5-44.1 42-7.7 2-23.2 2-31 0-16.6-4.2-33.3-17.5-40.4-32-13.1-26.6-7.4-57.1 14.1-75.9 6.4-5.6 18.6-12.1 26.5-14.1 8.5-2.1 26.8-1.4 35.1 1.5"
                />
                <path
                  fill="#ffffff"
                  d="M229.5 152.4c-9.8 2.4-16.7 7.8-21.5 16.8-3.2 5.8-3.5 7-3.5 14.8 0 7.1.5 9.4 2.7 14.2 5.6 12.1 16.2 18.8 29.8 18.8 13.2 0 24.2-6.6 29.7-17.8 2.4-5 2.8-6.9 2.8-14.7s-.4-9.7-2.8-14.7c-6.6-13.4-22.8-21-37.2-17.4m11.5 13.7c9.7 2.2 15.5 10.1 14.8 20.1-.3 4.5-1.1 6.5-3.4 9.5-8.4 10.4-23.3 10.1-30.8-.5s-2.7-24.2 10.3-28.8c4.4-1.6 3.7-1.6 9.1-.3m209 124.5c-9.5 2.6-10.6 3.3-77.5 48.9-44.5 30.3-42.9 29.4-52.6 29.5h-6.7l-1.1-4.8c-1.7-6.5-5.3-12.3-10.6-17-8.1-7.1-8.9-7.2-53.3-7.2h-39.5l-8.6-2.9c-16.6-5.7-27.6-7.4-48.1-7.5-20.4 0-29.1 1.2-44 6.2l-8.5 2.9-2.7-4.3c-4.9-7.8-15.4-13.4-25.2-13.4-5.1 0-22.7 4.6-29.3 7.7-6 2.8-11.7 8.7-14.6 15.2-3.8 8.4-3 15.3 4.7 43.6 3.7 13.7 9.9 36.7 13.7 51s7.9 28.1 9.1 30.7c4.1 9.2 14.1 16.2 24.7 17.5 6 .7 27.4-4.5 33.8-8.3 5.7-3.3 11.2-9.9 13.7-16.5l2.1-5.5 45 7.3c58.1 9.4 63.3 9.9 77.1 8.4 12.4-1.4 17.7-3.1 68.4-22 35.9-13.4 45.5-17.6 54.1-23.6 3.1-2.2 21.6-18 41-35 19.4-17.1 41.6-36.6 49.3-43.4 16.3-14.2 19.1-17.5 21.3-25 5.9-20.5-13.8-38.6-35.7-32.5m15.7 14.1c6.7 3.1 9.1 10.8 5.4 16.8-2.6 4.3-4.5 6-35.1 33-15.1 13.2-35.8 31.4-46 40.4-26.5 23.3-29 24.9-54 34.1-8.5 3.2-28.3 10.5-44 16.3s-30.5 11.1-33 11.8c-2.8.8-9.8 1.3-18.5 1.3-12-.1-18.4-.8-44.5-5.2-16.8-2.8-38.1-6.3-47.5-7.7-9.3-1.5-17.9-3-19-3.5-1.7-.6-3.9-7.9-13.8-45-6.6-24.3-11.5-44.6-11-45 1.1-1 12.3-4.6 21.3-6.7 5.8-1.4 11.5-1.8 25-1.7 19.3 0 29.2 1.5 42.7 6.2l7.8 2.7 42 .5c39.7.5 42.2.6 45.4 2.5 11.6 6.8 13.8 22.1 4.5 31.6-2.1 2.1-5.4 4.4-7.4 4.9-2.1.6-23.8 1-53.4 1-45.1 0-50.1.2-51.8 1.7-2.2 1.9-2.4 7.1-.4 9.9 1.4 1.8 3.1 1.9 54.8 1.9h53.3l5.5-2.6c6.9-3.2 12.6-8.9 15.7-15.5l2.3-5.2 9.3-.4c7.3-.3 10.4-1 15-3.1 5-2.3 25.3-15.6 61.2-40.2 13.9-9.5 40.5-27.6 45-30.5 8.9-5.9 16.8-7.4 23.2-4.3M81.5 338.5c2.1 1.5 4.3 4.2 5 5.9 2.6 6.3 28.5 104.5 28.5 108.2 0 4.6-4.1 11.9-7.8 13.8-3.9 2-21.1 6.6-24.7 6.6-4.9-.1-11-3.4-13.4-7.4-1.3-2-5.8-16.6-10.2-33.3-22.3-83-20.8-76.7-18.8-82 2.3-6.2 6.9-9.3 19.4-12.9 10.5-3.1 17-2.8 22 1.1"
                />
              </svg>
            </motion.div>
            <motion.h3
              className="text-xl font-semibold text-white mb-2"
              variants={textVariant}
            >
              Expert Eye Care
            </motion.h3>
            <motion.p className="text-gray-300" variants={textVariant}>
              Our certified opticians provide personalized vision solutions
              tailored to you.
            </motion.p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate={controls} // Use animationControls here
          >
            <motion.div
              className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#FF4D6D] flex items-center justify-center"
              variants={iconVariant}
            >
              <svg
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-8 h-8"
              >
                <path
                  fill="#ffffff"
                  d="M35.686 11.931c-.507-.522-6.83-1.094-13.263-.369-1.283.144-1.363.51-4.425.63-3.061-.119-3.141-.485-4.425-.63C7.14 10.837.817 11.41.31 11.931c-.252.261-.252 2.077 0 2.338.254.261 1.035.606 1.403 1.827.237.787.495 5.864 2.281 7.377 1.768 1.498 7.462 1.217 9.326.262 2.536-1.298 2.892-5.785 3.292-7.639.203-.939 1.162-1.016 1.385-1.016s1.182.077 1.385 1.016c.401 1.853.757 6.34 3.292 7.639 1.865.955 7.558 1.236 9.326-.262 1.786-1.513 2.044-6.59 2.281-7.377.368-1.22 1.149-1.566 1.403-1.827s.254-2.077.002-2.338"
                />
                <path
                  fill="#55ACEE"
                  d="M14.644 15.699c-.098 1.255-.521 4.966-1.757 6.083-1.376 1.243-6.25 1.568-7.79.044-.808-.799-1.567-4.018-1.503-6.816.038-1.679 2.274-2.02 5.462-2.02 3.148 0 5.763.468 5.588 2.709m6.707 0c.098 1.255.521 4.966 1.757 6.083 1.376 1.243 6.25 1.568 7.79.044.808-.799 1.567-4.018 1.503-6.816-.038-1.679-2.274-2.02-5.462-2.02-3.147 0-5.763.468-5.588 2.709"
                />
              </svg>
            </motion.div>
            <motion.h3
              className="text-xl font-semibold text-white mb-2"
              variants={textVariant}
            >
              Quality Craftsmanship
            </motion.h3>
            <motion.p className="text-gray-300" variants={textVariant}>
              Premium eyewear designed for durability, comfort, and style.
            </motion.p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate={controls} // Use animationControls here
          >
            <motion.div
              className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#FF4D6D] flex items-center justify-center"
              variants={iconVariant}
            >
              <HeartIcon className="w-6 h-6 text-white" />
            </motion.div>
            <motion.h3
              className="text-xl font-semibold text-white mb-2"
              variants={textVariant}
            >
              Personalized Service
            </motion.h3>
            <motion.p className="text-gray-300" variants={textVariant}>
              We take the time to find the perfect fit for every customer.
            </motion.p>
          </motion.div>

          {/* Feature 4 */}
          <motion.div
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate={controls} // Use animationControls here
          >
            <motion.div
              className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#FF4D6D] flex items-center justify-center"
              variants={iconVariant}
            >
              {/* Dollar Icon for Affordable Prices */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="w-6 h-6 "
                viewBox="0 0 16 16"
              >
                <path
                  fill="#ffffff"
                  d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"
                />
              </svg>
            </motion.div>
            <motion.h3
              className="text-xl font-semibold text-white mb-2"
              variants={textVariant}
            >
              Affordable Prices
            </motion.h3>
            <motion.p className="text-gray-300" variants={textVariant}>
              Quality eyewear at prices that fit your budget.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
