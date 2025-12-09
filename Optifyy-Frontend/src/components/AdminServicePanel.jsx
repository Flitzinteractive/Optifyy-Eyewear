import { useState, useEffect } from "react";
import axios from "axios";
import AdminLogin from "./AdminLogin";
import AdminServiceDashboard from "./AdminServiceDashboard";
import { BASE_URL_FETCH } from "../utils/constants";
import { ArrowPathIcon } from "@heroicons/react/20/solid";

// Custom Shimmer Component for AdminServicePanel (Dashboard-like with Data Shimmer)
const ShimmerDashboardLoading = () => {
  return (
    <section className="bg-gradient-to-br from-stone-900 to-zinc-900 py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-8 lg:mb-12">
          Admin Service Dashboard
        </h2>

        {/* Logout Button */}
        <div className="flex justify-end mb-4 sm:mb-6">
          <button
            className="bg-[#FF4D6D] text-white font-extrabold py-2 px-4 sm:px-6 rounded-full text-sm sm:text-md uppercase tracking-wider shadow-lg transition-colors duration-300 hover:bg-[#e0435f] cursor-not-allowed opacity-50"
            disabled
          >
            Logout
          </button>
        </div>

        {/* Filter Section */}
        <div className="bg-stone-800 rounded-xl p-4 sm:p-6 shadow-lg mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="flex items-center gap-2">
              <label className="text-gray-300 text-sm whitespace-nowrap">
                Status:
              </label>
              <select
                className="bg-zinc-900 text-white border border-gray-700 rounded-lg p-2 text-sm focus:outline-none focus:border-[#FF4D6D] w-full cursor-not-allowed"
                disabled
              >
                <option value="All">All</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-gray-300 text-sm whitespace-nowrap">
                Service Type:
              </label>
              <select
                className="bg-zinc-900 text-white border border-gray-700 rounded-lg p-2 text-sm focus:outline-none focus:border-[#FF4D6D] w-full cursor-not-allowed"
                disabled
              >
                <option value="All">All</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-gray-300 text-sm whitespace-nowrap">
                Search:
              </label>
              <input
                type="text"
                placeholder="Name, email, or phone..."
                className="bg-zinc-900 text-white border border-gray-700 rounded-lg p-2 text-sm w-full focus:outline-none focus:border-[#FF4D6D] cursor-not-allowed"
                disabled
              />
            </div>
            <div className="flex gap-2 items-center">
              <label className="text-gray-300 text-sm whitespace-nowrap">
                Date:
              </label>
              <input
                type="date"
                className="bg-zinc-900 text-white border border-gray-700 rounded-lg p-2 text-sm w-full focus:outline-none focus:border-[#FF4D6D] cursor-not-allowed"
                disabled
              />
            </div>
          </div>

          {/* Clear Filters Button */}
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <button
              className="bg-gray-600 text-white rounded-lg p-2 text-sm focus:outline-none hover:bg-gray-500 cursor-not-allowed opacity-50"
              disabled
            >
              Clear All Filters
            </button>
          </div>
          <div className="flex justify-end">
            <button
              // onClick={fetchServices}
              className="bg-[#FF4D6D] text-white font-bold py-2 px-4 rounded-full shadow-md transition-colors duration-300 hover:bg-[#e0435f] text-sm flex gap-2 items-center cursor-pointer"
              disabled
            >
              <ArrowPathIcon className="  w-4 h-4" /> Refresh
            </button>
          </div>

          {/* Data Shimmer (Table for Desktop) */}
          <div className="hidden lg:block overflow-x-auto animate-pulse">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-3 px-4 text-sm sm:text-base text-gray-300">
                    Name
                  </th>
                  <th className="py-3 px-4 text-sm sm:text-base text-gray-300">
                    Email
                  </th>
                  <th className="py-3 px-4 text-sm sm:text-base text-gray-300">
                    Phone
                  </th>
                  <th className="py-3 px-4 text-sm sm:text-base text-gray-300">
                    Service Type
                  </th>
                  <th className="py-3 px-4 text-sm sm:text-base text-gray-300">
                    Requested At
                  </th>
                  <th className="py-3 px-4 text-sm sm:text-base text-gray-300">
                    Status
                  </th>
                  <th className="py-3 px-4 text-sm sm:text-base text-gray-300">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <tr key={i} className="border-b border-gray-700">
                      <td className="py-3 px-4">
                        <div className="h-4 bg-gray-600 rounded w-3/4"></div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="h-4 bg-gray-600 rounded w-3/4"></div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="h-4 bg-gray-600 rounded w-3/4"></div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="h-4 bg-gray-600 rounded w-3/4"></div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="h-4 bg-gray-600 rounded w-1/2"></div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="h-4 bg-gray-600 rounded w-20"></div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="h-8 bg-gray-600 rounded w-24"></div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          {/* Data Shimmer (Cards for Mobile/Tablet) */}
          <div className="lg:hidden animate-pulse">
            {Array(3)
              .fill()
              .map((_, i) => (
                <div
                  key={i}
                  className="bg-stone-800 rounded-xl p-4 mb-6 shadow-lg"
                >
                  <div className="h-6 bg-gray-600 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-600 rounded w-1/2 mb-2"></div>
                  <div className="h-4 bg-gray-600 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-600 rounded w-1/2 mb-2"></div>
                  <div className="h-4 bg-gray-600 rounded w-1/3 mb-2"></div>
                  <div className="h-8 bg-gray-600 rounded w-20"></div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AdminServicePanel = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(BASE_URL_FETCH + "/admin/services", {
        withCredentials: true,
      });
      if (response.status === 200) {
        setIsLoggedIn(true);
      }
    } catch (error) {
      setIsLoggedIn(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Render based on loading state
  if (isLoading) {
    return <ShimmerDashboardLoading />;
  }

  return isLoggedIn ? (
    <AdminServiceDashboard onLogout={handleLogout} />
  ) : (
    <AdminLogin onLoginSuccess={handleLoginSuccess} />
  );
};

export default AdminServicePanel;
