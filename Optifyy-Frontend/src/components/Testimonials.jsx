import { StarIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { BASE_URL, BASE_URL_FETCH } from "../utils/constants";

// Shimmer Testimonial Card Component
const ShimmerTestimonialCard = () => {
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

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);

  // Animation variants (EXACT SAME AS BRANDLOGOSLIDER)
  const testimonialCardVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  // Fetch reviews on mount
  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      try {
        const response = await axios.get(BASE_URL_FETCH + "/review");
        const highRatedReviews = response.data.data
          .filter((review) => review.star >= 4)
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 5);
        setReviews(highRatedReviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  // Slider settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="bg-gradient-to-br from-stone-900 to-zinc-900 overflow-x-hidden py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What Our Customers Say
          </motion.h2>
          <motion.p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
            Hear from happy clients who trust Optifyy for their vision needs.
          </motion.p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-3xl mx-auto">
          {loading ? (
            <Slider {...settings}>
              {[1, 2, 3].map((index) => (
                <ShimmerTestimonialCard key={index} />
              ))}
            </Slider>
          ) : reviews.length > 0 ? (
            reviews.length > 1 ? (
              <Slider {...settings}>
                {reviews.map((review, index) => (
                  <motion.div
                    key={review._id}
                    className="bg-stone-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    variants={testimonialCardVariants} // Apply BrandLogoSlider Animation
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }} // IMPORTANT: Prevents re-animation on loop
                  >
                    <div className="flex items-center mb-4">
                      {Array(5)
                        .fill()
                        .map((_, i) => (
                          <StarIcon
                            key={i}
                            className={`w-5 h-5 ${
                              i < review.star
                                ? "text-[#FF4D6D]"
                                : "text-gray-500"
                            } mr-1`}
                          />
                        ))}
                    </div>
                    <p className="text-gray-300 text-lg mb-4">
                      {review.comment}
                    </p>
                    <div className="font-semibold text-white">
                      - {review.name}
                    </div>
                  </motion.div>
                ))}
              </Slider>
            ) : (
              // Render single review directly when only one review is available
              <motion.div
                className="bg-stone-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={testimonialCardVariants} // Apply BrandLogoSlider Animation
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }} // IMPORTANT: Prevents re-animation on loop
              >
                <div className="flex items-center mb-4">
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`w-5 h-5 ${
                          i < reviews[0].star
                            ? "text-[#FF4D6D]"
                            : "text-gray-500"
                        } mr-1`}
                      />
                    ))}
                </div>
                <p className="text-gray-300 text-lg mb-4">
                  {reviews[0].comment}
                </p>
                <div className="font-semibold text-white">
                  - {reviews[0].name}
                </div>
              </motion.div>
            )
          ) : (
            <p className="text-gray-400 text-center">
              No reviews available yet.
            </p>
          )}
        </div>

        {/* Write Us a Review Button */}
        <div className="text-center mt-12">
          <Link
            to="/review-us"
            className="bg-[#FF4D6D]  text-white font-extrabold py-3 px-8 rounded-full text-lg uppercase tracking-wider shadow-lg transition-colors duration-300"
          >
            Write Us a Review
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
