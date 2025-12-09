import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import React from "react";

const BrandLogoSlider = () => {
  const brands = [
    {
      name: "Ray-Ban",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Ray-Ban_logo.svg",
    },

    {
      name: "Puma",
      logo: "https://upload.wikimedia.org/wikipedia/en/d/da/Puma_complete_logo.svg",
    },
    {
      name: "Scott",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/63/SCOTT_LOGO_BLACK-sm.png",
    },
    {
      name: "Calvin Klein",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Calvin_klein_logo_web23.svg",
    },
    {
      name: "IDEE",
      logo: "/images/IDEE.png",
    },
    {
      name: "Essilor",
      logo: "https://upload.wikimedia.org/wikipedia/en/2/2a/Essilor_eye_logo.png",
    },

    {
      name: "Gucci",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Gucci_logo.png",
    },
    {
      name: "Prada",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Prada-Logo.svg",
    },
    {
      name: "Carrera",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Logo_carrera.svg",
    },
    {
      name: "Zeiss",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Zeiss_logo.svg",
    },
    {
      name: "Opium",
      logo: "https://www.opiumeyewear.com/cdn/shop/files/opium_logo-01_45f1a6d4-3227-4028-b6bd-9b7208e9e2a3.png?v=1679048687",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Small Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  };

  const logoContainerVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <section className="bg-gradient-to-br from-stone-900 to-zinc-900 py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-white mb-4"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            Trusted Brands We Carry
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
          >
            Explore premium eyewear from the world’s leading brands, available
            at Optifyy.
          </motion.p>
        </div>

        {/* Slider */}
        <div className="max-w-6xl mx-auto">
          <Slider {...settings}>
            {brands.map((brand, index) => (
              <div key={index} className="px-4">
                <motion.div
                  className="bg-white p-4 flex items-center justify-center h-24 border border-gray-300 rounded-md"
                  variants={logoContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                >
                  <img
                    src={brand.logo}
                    alt={`${brand.name} Logo`}
                    className="max-h-full max-w-full object-contain filter brightness-150" // Brighten logos for contrast on dark background
                  />
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default BrandLogoSlider;
