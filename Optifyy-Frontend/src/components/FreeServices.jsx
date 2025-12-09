import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import toast, { Toaster } from "react-hot-toast";

const FreeServices = () => {
  const [formData, setFormData] = useState({
    name: "",
    emailId: "",
    phone: "",
    serviceType: "Free Eye Checkup", // Default display value
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Restrict phone to numbers only
    if (name === "phone") {
      const numericValue = value.replace(/\D/g, ""); // Remove non-digits
      if (numericValue.length <= 10) {
        setFormData({ ...formData, [name]: numericValue });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
    setSubmissionError(""); // Clear submission error on change
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation: only letters and spaces, min 2 characters
    if (!formData.name.match(/^[A-Za-z\s]{2,}$/)) {
      newErrors.name =
        "Name must contain only letters and spaces, minimum 2 characters.";
    }

    // Email validation: basic email format
    if (!formData.emailId.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      newErrors.emailId = "Please enter a valid email address.";
    }

    // Phone validation: exactly 10 digits
    if (!formData.phone.match(/^\d{10}$/)) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return; // Stop submission if validation fails
    }

    // Define the promise for submitting the service request
    const submitServiceRequest = axios.post(
      BASE_URL + "/request-service",
      formData,
      {
        withCredentials: true,
      }
    );

    // Use toast.promise for feedback
    toast
      .promise(
        submitServiceRequest,
        {
          loading: "Submitting your request...", // Shown while the request is pending
          success: () => {
            // Reset form and update state on success
            setIsSubmitted(true);
            setFormData({
              name: "",
              emailId: "",
              phone: "",
              serviceType: "Free Eye Checkup",
            });
            setErrors({});
            setSubmissionError("");
            return "Your request was sent successfully!";
          },
          error: (err) =>
            err.response?.data?.message ||
            "Error submitting request. Please try again.", // Show error message
        },
        {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
          success: { duration: 3000 }, // Success toast stays for 3 seconds
          error: { duration: 5000 }, // Error toast stays for 5 seconds
        }
      )
      .catch(() => {
        // Fallback to update submissionError if needed
        setSubmissionError("Error submitting request. Please try again.");
      });
  };

  // Animation variants
  const sectionVariants = {
    hiddenLeft: { opacity: 0, x: -50 },
    hiddenRight: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <div className="bg-gradient-to-br from-stone-900 to-zinc-900 min-h-screen overflow-x-hidden py-16 lg:py-20">
      <Toaster />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <motion.h1
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            variants={sectionVariants}
            initial="hiddenLeft"
            whileInView="visible"
            viewport={{ once: false }}
          >
            Avail Our Free Services
          </motion.h1>
          <motion.p
            className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto"
            variants={sectionVariants}
            initial="hiddenRight"
            whileInView="visible"
            viewport={{ once: false }}
          >
            Request a Free Eye Checkup or Free Eyewear Repairing at Optifyy – We
            Look Good Together!
          </motion.p>
        </div>

        {/* Service Request Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Service Request Form */}
          <motion.div
            className="bg-stone-800 rounded-xl p-6 shadow-lg"
            variants={sectionVariants}
            initial="hiddenLeft"
            whileInView="visible"
            viewport={{ once: false }}
          >
            {isSubmitted ? (
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Request Submitted!
                </h2>
                <p className="text-gray-300 mb-6">
                  Thank you for your request. We’ll contact you soon to confirm
                  your free service.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-[#FF4D6D] text-white font-medium py-2 px-6 rounded-full transition-colors duration-300"
                >
                  Request Another Service
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-stone-700 text-white rounded-lg border border-stone-600 focus:outline-none focus:ring-2 focus:ring-[#FF4D6D] focus:border-transparent"
                    placeholder="Your Name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="emailId"
                    className="block text-white font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="emailId"
                    name="emailId"
                    value={formData.emailId}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-stone-700 text-white rounded-lg border border-stone-600 focus:outline-none focus:ring-2 focus:ring-[#FF4D6D] focus:border-transparent"
                    placeholder="Your Email"
                  />
                  {errors.emailId && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.emailId}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-white font-medium mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    maxLength="10"
                    className="w-full p-3 bg-stone-700 text-white rounded-lg border border-stone-600 focus:outline-none focus:ring-2 focus:ring-[#FF4D6D] focus:border-transparent"
                    placeholder="Enter 10-digit number"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="serviceType"
                    className="block text-white font-medium mb-2"
                  >
                    Select Free Service
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full p-3 bg-stone-700 text-white rounded-lg border border-stone-600 focus:outline-none focus:ring-2 focus:ring-[#FF4D6D] focus:border-transparent"
                  >
                    <option value="Free Eye Checkup">Free Eye Checkup</option>
                    <option value="Free Eyewear Repairing">
                      Free Eyewear Repairing
                    </option>
                  </select>
                </div>

                {submissionError && (
                  <p className="text-red-400 text-sm text-center">
                    {submissionError}
                  </p>
                )}
                <button
                  type="submit"
                  className="bg-[#FF4D6D] cursor-pointer text-white font-extrabold py-3 px-8 rounded-full uppercase tracking-wider shadow-lg transition-colors duration-300 w-full"
                >
                  Request Free Service
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info & Visit Us */}
          <motion.div
            className="space-y-8"
            variants={sectionVariants}
            initial="hiddenRight"
            whileInView="visible"
            viewport={{ once: false }}
          >
            {/* Contact Details */}
            <div className="bg-stone-800 rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Visit Us for Your Free Service
              </h2>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300 cursor-pointer">
                  <MapPinIcon className="w-5 h-5 text-[#FF4D6D] mr-2" />
                  <Link
                    to="https://maps.app.goo.gl/YdRQtEvHgNdD7NWB6"
                    target="_blank"
                  >
                    <span>
                      7-8, Home Town-3, Sardar Chowk, New Ranip, Ahmedabad,
                      Gujarat 382480
                    </span>
                  </Link>
                </div>
                <div className="flex items-center text-gray-300 cursor-pointer">
                  <PhoneIcon className="w-5 h-5 text-[#FF4D6D] mr-2" />
                  <span>+91 8140088100</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <EnvelopeIcon className="w-5 h-5 text-[#FF4D6D] mr-2" />
                  <a href="mailto:optifyy78@gmail.com">optifyy78@gmail.com</a>
                </div>
              </div>
            </div>

            {/* Visit Us Button */}
            <div className="text-center mt-12">
              <Link
                to="https://maps.app.goo.gl/YdRQtEvHgNdD7NWB6"
                target="_blank"
                className="bg-[#FF4D6D] text-white font-extrabold py-3 px-8 rounded-full text-lg uppercase tracking-wider shadow-lg transition-colors duration-300"
              >
                Find Us on Map
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FreeServices;
