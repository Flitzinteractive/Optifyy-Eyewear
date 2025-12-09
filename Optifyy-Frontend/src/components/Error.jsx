import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import framer-motion for animations
import { ExclamationTriangleIcon, EyeIcon } from "@heroicons/react/20/solid"; // Using an eye icon to tie into your optician theme

const Error = () => {
  // Animation variants for the error message and icon
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-gradient-to-br from-stone-900 to-zinc-900 min-h-screen flex items-center justify-center py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated Container */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-2xl mx-auto"
        >
          {/* Error Icon */}
          <motion.div variants={itemVariants} className="mb-6">
            <ExclamationTriangleIcon className="w-16 h-16 text-[#FF4D6D] mx-auto animate-pulse-slow" />
          </motion.div>

          {/* Error Message */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl font-bold text-white mb-4"
          >
            404
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-2xl font-semibold text-gray-300 mb-6"
          >
            Oops! Page Not Found
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 mb-8 max-w-lg mx-auto"
          >
            It seems you’ve wandered into uncharted territory. Don’t worry—let’s
            get you back to clear vision with Optifyy.
          </motion.p>

          {/* Navigation Options */}
          <motion.div
            variants={itemVariants}
            className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center"
          >
            <Link
              to="/" // Back to homepage
              className="bg-[#FF4D6D]  text-white font-extrabold py-3 px-8 rounded-full text-lg uppercase tracking-wider shadow-lg transition-colors duration-300"
            >
              Return to Home
            </Link>
            {/* <Link
              to="/contact" // Contact us for help
              className="bg-stone-800 hover:bg-stone-700 text-white font-medium py-3 px-8 rounded-full text-lg transition-colors duration-300"
            >
              Contact Us for Help
            </Link> */}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// Optional Tailwind CSS for the pulse animation
const styles = `
  @keyframes pulse-slow {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
  .animate-pulse-slow {
    animation: pulse-slow 2s infinite;
  }
`;

export default Error;
