import { motion } from "framer-motion";
import React from "react";

const PrivacyPolicy = () => {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  };

  const textVariants = {
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
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            variants={textVariants}
            initial="hiddenLeft"
            whileInView="visible"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-6"
            variants={textVariants}
            initial="hiddenRight"
            whileInView="visible"
          >
            At Optifyy, we value your privacy. Learn how we collect, use, and
            protect your personal information as per Indian laws, right here in
            Ahmedabad, Gujarat.
          </motion.p>
        </div>

        {/* Policy Content */}
        <motion.div
          className="bg-stone-800 rounded-xl p-6 shadow-lg max-w-4xl mx-auto text-gray-300"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
        >
          <h2 className="text-2xl font-semibold text-white mb-4">
            1. Introduction
          </h2>
          <p className="mb-6">
            Welcome to Optifyy, your trusted eye care partner in Ahmedabad,
            Gujarat, India! This Privacy Policy explains how we handle your
            personal information when you use our website or request services
            like free eye checkups or eyewear repairs. We comply with the
            Information Technology Act, 2000, and the Digital Personal Data
            Protection Act, 2023 (DPDP Act), ensuring your data stays safe with
            us.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
            2. Information We Collect
          </h2>
          <p className="mb-4">
            We collect personal details when you interact with us:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>
              <strong>Reviews:</strong> When you share feedback:
              <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                <li>Name (to credit your review).</li>
                <li>Email ID (for confirmation and contact).</li>
                <li>Comment (up to 200 characters of feedback).</li>
                <li>Star Rating (0–5 stars).</li>
              </ul>
            </li>
            <li>
              <strong>Free Services:</strong> When you request a free eye
              checkup or repair:
              <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                <li>Name (to identify you).</li>
                <li>Email ID (for confirmation).</li>
                <li>Phone Number (10-digit, for scheduling).</li>
                <li>Service Type (eye checkup or repair).</li>
              </ul>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
            3. How We Use Your Information
          </h2>
          <p className="mb-4">We use your data to serve you better:</p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>
              <strong>Reviews:</strong> Display your name, comment, and rating
              on our website; send confirmation emails; improve our services.
            </li>
            <li>
              <strong>Free Services:</strong> Process requests, send
              confirmations, contact you for appointments, and enhance our
              offerings.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
            4. Legal Basis for Processing
          </h2>
          <p className="mb-6">
            Under the DPDP Act, 2023, we process your data with your consent,
            which you provide by submitting reviews or service requests. You can
            withdraw consent anytime by contacting us.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
            5. How We Protect Your Information
          </h2>
          <p className="mb-6">
            We follow strict security practices as per Indian laws, including
            encryption and secure storage in our Ahmedabad-based servers. Only
            authorized staff can access your data. While we take all reasonable
            steps, no online system is fully risk-free.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
            6. Sharing Your Information
          </h2>
          <p className="mb-4">
            We don’t sell your data. Sharing happens only when:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>
              <strong>Public:</strong> Your name, review, and rating are shown
              on our Testimonials page.
            </li>
            <li>
              <strong>Service Providers:</strong> Trusted Indian partners (e.g.,
              email or hosting services) under confidentiality terms.
            </li>
            <li>
              <strong>Legal Duty:</strong> Required by Indian authorities or
              laws like the IT Act, 2000.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
            7. Your Rights Under Indian Law
          </h2>
          <p className="mb-4">
            As per the DPDP Act, 2023, you have these rights:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>
              <strong>Know:</strong> Get details of what data we hold.
            </li>
            <li>
              <strong>Correct:</strong> Fix errors in your data.
            </li>
            <li>
              <strong>Erase:</strong> Request deletion, unless we’re legally
              required to keep it.
            </li>
            <li>
              <strong>Withdraw Consent:</strong> Stop us from using your data
              further.
            </li>
            <li>
              <strong>Grievance:</strong> Raise concerns with us or the Data
              Protection Board of India.
            </li>
          </ul>
          <p className="mb-6">
            Email us at{" "}
            <a href="mailto:optifyy78@gmail.com" className="text-[#FF4D6D]">
              optifyy78@gmail.com
            </a>{" "}
            to exercise these rights.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
            8. Data Retention
          </h2>
          <p className="mb-6">
            We keep your data only as long as necessary: -{" "}
            <strong>Reviews:</strong> Stored indefinitely unless you ask for
            removal. - <strong>Free Services:</strong> Kept for 6 months after
            service delivery for follow-up, then deleted unless required by law.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
            9. Cookies
          </h2>
          <p className="mb-6">
            We may use cookies to improve your experience on our site. You can
            disable them in your browser settings, but this might affect how the
            site works.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
            10. Third-Party Links
          </h2>
          <p className="mb-6">
            Links to external sites (e.g., Google Maps) are provided for
            convenience. We’re not responsible for their privacy policies.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
            11. Changes to This Policy
          </h2>
          <p className="mb-6">
            We may update this policy to comply with Indian laws or improve our
            services. Changes will be posted here, effective immediately. Last
            updated: March 1, 2025.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
            12. Contact Us
          </h2>
          <p className="mb-6">
            Have questions? Reach out to us:
            <br />
            <strong>Email:</strong>{" "}
            <a href="mailto:optifyy78@gmail.com" className="text-[#FF4D6D]">
              optifyy78@gmail.com
            </a>
            <br />
            <strong>Phone:</strong> +91 8140088100
            <br />
            <strong>Address:</strong> Optifyy, 7-8, Home Town-3, Sardar Chowk,
            New Ranip, Ahmedabad, Gujarat 382480, India
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
