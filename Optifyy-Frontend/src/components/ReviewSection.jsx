import { StarIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { BASE_URL, BASE_URL_FETCH } from "../utils/constants";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

// Shimmer Review Card Component (unchanged)
const ShimmerReviewCard = () => {
  return (
    <div className="bg-stone-800 rounded-xl p-6 shadow-lg animate-pulse">
      <div className="flex items-center mb-4">
        {Array(5)
          .fill()
          .map((_, i) => (
            <div
              key={i}
              className="w-5 h-5 bg-gray-600 rounded-full mr-1"
            ></div>
          ))}
      </div>
      <div className="h-4 bg-gray-600 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-600 rounded w-1/2 mb-4"></div>
      <div className="h-4 bg-gray-600 rounded w-1/4"></div>
    </div>
  );
};

const ReviewSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    emailId: "",
    comment: "",
    star: 0,
  });
  const [reviews, setReviews] = useState([]);
  const [filterOption, setFilterOption] = useState("mostRelevant");
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  // Animation variants (unchanged)
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  };

  const cardVariants = {
    hiddenLeft: { opacity: 0, x: -50 },
    hiddenRight: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    setLoading(true);
    try {
      const response = await axios.get(BASE_URL_FETCH + "/review");
      setReviews(response.data.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleStarHover = (rating) => {
    setFormData((prev) => ({ ...prev, star: rating }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.star === 0) {
      setSubmissionStatus("Please select a star rating.");
      return;
    }

    // Define the promise for submitting the review
    const submitReview = axios.post(BASE_URL + "/review", formData, {
      withCredentials: true,
    });

    // Use toast.promise for feedback
    toast
      .promise(
        submitReview,
        {
          loading: "Submitting your review...", // Shown while the request is pending
          success: () => {
            // Reset form and fetch updated reviews on success
            setFormData({ name: "", emailId: "", comment: "", star: 0 });
            fetchReviews();
            setSubmissionStatus(null);
            return "Review submitted successfully!";
          },
          error: (err) =>
            err.response?.data?.message || "Error submitting review.", // Show error message
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
        // Ensure submissionStatus is updated if the promise fails
        setSubmissionStatus("Error submitting review.");
      });
  };

  // Sorting logic (unchanged)
  const sortedReviews = [...reviews].sort((a, b) => {
    if (filterOption === "mostRelevant") {
      const aIsHighRated = a.star >= 4 ? 1 : 0;
      const bIsHighRated = b.star >= 4 ? 1 : 0;
      if (aIsHighRated !== bIsHighRated) {
        return bIsHighRated - aIsHighRated;
      }
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else if (filterOption === "newest") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else if (filterOption === "highest") {
      return b.star - a.star;
    } else if (filterOption === "lowest") {
      return a.star - b.star;
    }
    return 0;
  });

  return (
    <section className="bg-gradient-to-br from-stone-900 to-zinc-900 overflow-x-hidden py-16 lg:py-20">
      <Toaster />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-white text-center mb-12"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
        >
          Write a Review
        </motion.h2>

        {/* Review Form */}
        <motion.div
          className="bg-stone-800 rounded-xl p-6 shadow-lg mb-12 max-w-2xl mx-auto"
          variants={cardVariants}
          initial="hiddenLeft"
          whileInView="visible"
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-zinc-900 text-white border border-gray-700 focus:outline-none focus:border-[#FF4D6D]"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2" htmlFor="emailId">
                Email
              </label>
              <input
                type="email"
                id="emailId"
                name="emailId"
                value={formData.emailId}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-zinc-900 text-white border border-gray-700 focus:outline-none focus:border-[#FF4D6D]"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Rating</label>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={`w-8 h-8 cursor-pointer ${
                      rating <= formData.star
                        ? "text-[#FF4D6D]"
                        : "text-gray-500"
                    }`}
                    onMouseEnter={() => handleStarHover(rating)}
                    onClick={() => handleStarHover(rating)}
                  />
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2" htmlFor="comment">
                Comment
              </label>
              <textarea
                id="comment"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-zinc-900 text-white border border-gray-700 focus:outline-none focus:border-[#FF4D6D]"
                rows="4"
                maxLength="200"
                required
              />
              <p className="text-gray-400 text-sm mt-1">
                {formData.comment.length}/200 characters
              </p>
            </div>
            {submissionStatus && (
              <p
                className={`mb-4 text-center ${
                  submissionStatus.includes("success")
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {submissionStatus}
              </p>
            )}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#FF4D6D] cursor-pointer text-white font-extrabold py-3 px-8 rounded-full text-lg uppercase tracking-wider shadow-lg transition-colors duration-300"
              >
                Submit Review
              </button>
            </div>
          </form>
        </motion.div>

        {/* Reviews Section */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-white text-center mb-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
        >
          All Reviews
        </motion.h2>

        {/* Filter */}
        <div className="flex justify-center mb-8">
          <div className="relative w-64">
            <select
              value={filterOption}
              onChange={(e) => setFilterOption(e.target.value)}
              className="w-full p-3 pr-10 rounded-xl bg-gradient-to-r from-zinc-900 to-stone-800 text-white border border-gray-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#FF4D6D] focus:border-[#FF4D6D] hover:bg-stone-700 transition-all duration-300 appearance-none cursor-pointer text-lg"
            >
              <option
                value="mostRelevant"
                className="bg-stone-900 text-gray-200"
              >
                Most Relevant
              </option>
              <option value="newest" className="bg-stone-900 text-gray-200">
                Newest
              </option>
              <option value="highest" className="bg-stone-900 text-gray-200">
                Highest Rating
              </option>
              <option value="lowest" className="bg-stone-900 text-gray-200">
                Lowest Rating
              </option>
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <ChevronDownIcon className="w-6 h-6 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            Array(3)
              .fill()
              .map((_, index) => <ShimmerReviewCard key={index} />)
          ) : sortedReviews.length > 0 ? (
            sortedReviews.map((review, index) => (
              <motion.div
                key={review._id}
                className="bg-stone-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={cardVariants}
                initial={index % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
                whileInView="visible"
              >
                <div className="flex items-center mb-4">
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`w-5 h-5 ${
                          i < review.star ? "text-[#FF4D6D]" : "text-gray-500"
                        } mr-1`}
                      />
                    ))}
                </div>
                <p className="text-gray-300 text-lg mb-4">{review.comment}</p>
                <div className="font-semibold text-white">- {review.name}</div>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-400 text-center col-span-full">
              No reviews yet.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
