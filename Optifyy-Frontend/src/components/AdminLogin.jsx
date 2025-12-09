import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { BASE_URL_FETCH } from "../utils/constants";

// Animation variants
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
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const AdminLogin = ({ onLoginSuccess }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    const loginPromise = axios.post(
      BASE_URL_FETCH + "/admin/login",
      credentials,
      {
        withCredentials: true,
      }
    );

    toast.promise(
      loginPromise,
      {
        loading: "Logging in...",
        success: () => {
          setCredentials({ username: "", password: "" });
          onLoginSuccess(); // Callback to parent component
          return "Logged in successfully!";
        },
        error: (err) => err.response?.data?.message || "Login failed.",
      },
      {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      }
    );
  };

  return (
    <section className="bg-gradient-to-br from-stone-900 to-zinc-900 py-16 lg:py-20">
      <Toaster />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-white text-center mb-12"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
        >
          Admin Login
        </motion.h2>
        <motion.div
          className="bg-stone-800 rounded-xl p-6 shadow-lg max-w-md mx-auto"
          variants={cardVariants}
          initial="hiddenLeft"
          whileInView="visible"
        >
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={credentials.username}
                onChange={(e) =>
                  setCredentials({ ...credentials, username: e.target.value })
                }
                className="w-full p-3 rounded-lg bg-zinc-900 text-white border border-gray-700 focus:outline-none focus:border-[#FF4D6D]"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-300 mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
                className="w-full p-3 rounded-lg bg-zinc-900 text-white border border-gray-700 focus:outline-none focus:border-[#FF4D6D]"
                required
              />
            </div>
            <div className="flex justify-center  ">
              <button
                type="submit"
                className="bg-[#FF4D6D] text-white font-extrabold py-3 px-8 rounded-full text-lg uppercase tracking-wider shadow-lg transition-colors duration-300 hover:bg-[#e0435f] cursor-pointer"
              >
                Login
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default AdminLogin;
