import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-stone-900 to-zinc-900 py-8 lg:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Flex Layout */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          {/* Company Name (Left Side) */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-white font-bold font-ya text-2xl tracking-widest cursor-pointer"
            >
              <img
                src="/images/Optifyy-Logo.svg" // Replace with your logo path or use text "Optifyy"
                className="w-32"
                alt="Optifyy Logo"
              />
              {/* <h4 className="text-sm">We Look Good Together</h4> */}
            </Link>
          </div>

          {/* Content (Right Side) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Contact Us
              </h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center">
                  <MapPinIcon className="w-5 h-5 text-[#FF4D6D] mr-2" />
                  <Link
                    to="https://maps.app.goo.gl/YdRQtEvHgNdD7NWB6"
                    target="blank"
                  >
                    <span>
                      7-8, Home Town-3, Sardar Chowk, New Ranip, Ahmedabad,
                      Gujarat 382480
                    </span>
                  </Link>
                </div>
                <div className="flex items-center">
                  <PhoneIcon className="w-5 h-5 text-[#FF4D6D] mr-2" />
                  <span>+91 8140088100</span>
                </div>
                <div className="flex items-center">
                  <EnvelopeIcon className="w-5 h-5 text-[#FF4D6D] mr-2" />
                  <a href="mailto:optifyy78@gmail.com">optifyy78@gmail.com</a>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link
                    to="/"
                    className="hover:text-[#FF4D6D] transition-colors duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-[#FF4D6D] transition-colors duration-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-[#FF4D6D] transition-colors duration-300"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="hover:text-[#FF4D6D] transition-colors duration-300"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/free-services"
                    className="hover:text-[#FF4D6D] transition-colors duration-300"
                  >
                    Free Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/review-us"
                    className="hover:text-[#FF4D6D] transition-colors duration-300"
                  >
                    Review Us
                  </Link>
                </li>

                <li>
                  <Link
                    to="/privacy-policy"
                    className="hover:text-[#FF4D6D] transition-colors duration-300"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Links & Copyright */}
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4 text-gray-300">
                  <Link
                    to="https://www.facebook.com/optifyyeyewear" // Replace with your Facebook URL
                    className="hover:text-[#FF4D6D] transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.494v-9.294H9.691V11.15h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.313h3.587l-.467 3.556h-3.12V24h6.116c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                    </svg>
                  </Link>
                  {/* <Link
                    to="https://twitter.com" // Replace with your Twitter URL
                    className="hover:text-[#FF4D6D] transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.38 4.482A13.98 13.98 0 011.67 3.899a4.914 4.914 0 001.524 6.574 4.903 4.903 0 01-2.228-.616v.062a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.398 0-.79-.023-1.175-.068a13.954 13.954 0 007.548 2.213c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z" />
                    </svg>
                  </Link> */}
                  <Link
                    to="https://www.instagram.com/_optifyy.eyewear?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" // Replace with your Instagram URL
                    className="hover:text-[#FF4D6D] transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.331 3.608 1.307.975.975 1.245 2.242 1.307 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.307 3.608-.975.975-2.242 1.245-3.608 1.307-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.307-.975-.975-1.245-2.242-1.307-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.331-2.633 1.307-3.608.975-.975 2.242-1.245 3.608-1.307 1.266-.058 1.646-.07 4.85-.07m0-2.163C8.736 0 8.332.012 7.05.07c-1.718.062-3.495.376-4.776 1.657C.665 3.514.351 5.291.289 7.05.012 8.332 0 8.736 0 12s.012 3.668.07 4.95c.062 1.758.376 3.495 1.657 4.776 1.281 1.281 3.018 1.595 4.776 1.657 1.282.058 1.614.07 4.95.07s3.668-.012 4.95-.07c1.758-.062 3.495-.376 4.776-1.657 1.281-1.281 1.595-3.018 1.657-4.776.058-1.282.07-1.614.07-4.95s-.012-3.668-.07-4.95c-.062-1.758-.376-3.495-1.657-4.776-1.281-1.281-3.018-1.595-4.776-1.657C15.668.012 15.354 0 12 0z" />
                      <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 110 2.88 1.44 1.44 0 010-2.88z" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="mt-4 text-center sm:text-left">
                <p className="text-gray-300">
                  © {new Date().getFullYear()} Optifyy. All rights reserved.
                </p>
              </div>
              <div className="mt-4 text-center sm:text-left">
                <p className="text-gray-300">
                  Crafted With Vision By
                  <Link
                    to="https://www.linkedin.com/in/dhruv-patel-b5029b271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="blank"
                    className="hover:text-[#FF4D6D] transition-colors duration-300"
                  >
                    &nbsp;Dhruv Patel
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
