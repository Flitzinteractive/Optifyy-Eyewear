import React, { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { BASE_URL, BASE_URL_FETCH } from "../utils/constants";
import { format, parse } from "date-fns";
import { ArrowPathIcon } from "@heroicons/react/20/solid";

// Shimmer Service Card Component
const ShimmerServiceCard = () => {
  return (
    <tr className="bg-stone-800 rounded-xl p-3 shadow-lg animate-pulse mb-3 md:table-row">
      {/* Mobile Shimmer UI */}
      <td className="md:hidden" colSpan="7">
        <div className="h-3 bg-gray-600 rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-gray-600 rounded w-1/2 mb-2"></div>
        <div className="h-3 bg-gray-600 rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-gray-600 rounded w-1/2 mb-2"></div>
        <div className="h-3 bg-gray-600 rounded w-1/3 mb-2"></div>
        <div className="h-6 bg-gray-600 rounded w-20"></div>
      </td>

      {/* Desktop Shimmer UI */}
      <td className="hidden md:table-cell py-3 px-4">
        <div className="h-3 bg-gray-600 rounded w-3/4"></div>
      </td>
      <td className="hidden md:table-cell py-3 px-4">
        <div className="h-3 bg-gray-600 rounded w-3/4"></div>
      </td>
      <td className="hidden md:table-cell py-3 px-4">
        <div className="h-3 bg-gray-600 rounded w-3/4"></div>
      </td>
      <td className="hidden md:table-cell py-3 px-4">
        <div className="h-3 bg-gray-600 rounded w-3/4"></div>
      </td>
      <td className="hidden md:table-cell py-3 px-4">
        <div className="h-3 bg-gray-600 rounded w-1/2"></div>
      </td>
      <td className="hidden md:table-cell py-3 px-4">
        <div className="h-6 bg-gray-600 rounded w-20"></div>
      </td>
      <td className="hidden md:table-cell py-3 px-4">
        <div className="h-6 bg-gray-600 rounded w-20"></div>
      </td>
    </tr>
  );
};

const AdminServiceDashboard = ({ onLogout }) => {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [statusFilter, setStatusFilter] = useState("All");
  const [serviceTypeFilter, setServiceTypeFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [dateFilter, setDateFilter] = useState(""); // Date filter
  const [currentPage, setCurrentPage] = useState(1); // Pagination: current page
  const [itemsPerPage] = useState(10); // Pagination: items per page

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(BASE_URL_FETCH + "/admin/services", {
        withCredentials: true,
      });

      const fetchedServices = response.data.data || [];
      setServices(fetchedServices);
      setFilteredServices(fetchedServices);
    } catch (error) {
      console.error("Fetch services error:", error.response?.data);
      const errorMsg =
        error.response?.data?.message || "Failed to fetch services.";
      setError(errorMsg);
      toast.error(errorMsg);
      if (error.response?.status === 400 || error.response?.status === 401) {
        onLogout();
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        BASE_URL_FETCH + "/admin/logout",
        {},
        { withCredentials: true }
      );
      onLogout();
      toast.success("Logged out successfully!", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } catch (error) {
      toast.error("Logout failed.");
    }
  };

  const toggleServiceStatus = async (id, currentStatus) => {
    const updatePromise = axios.patch(
      BASE_URL_FETCH + "/admin/services/" + id,
      { isCompleted: !currentStatus },
      { withCredentials: true }
    );

    toast.promise(
      updatePromise,
      {
        loading: "Updating status...",
        success: (response) => {
          const updatedServices = services.map((service) =>
            service._id === id ? response.data.data : service
          );
          setServices(updatedServices);
          applyFilters(updatedServices);
          return "Status updated successfully!";
        },
        error: (err) =>
          err.response?.data?.message || "Failed to update status.",
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

  // Get unique service types for the dropdown
  const serviceTypes = [
    "All",
    ...new Set(services.map((service) => service.serviceType || "N/A")),
  ];

  // Apply filters to services
  const applyFilters = (servicesToFilter = services) => {
    let result = [...servicesToFilter];

    // Filter by status
    if (statusFilter !== "All") {
      result = result.filter((service) =>
        statusFilter === "Completed"
          ? service.isCompleted
          : !service.isCompleted
      );
    }

    // Filter by service type
    if (serviceTypeFilter !== "All") {
      result = result.filter(
        (service) => (service.serviceType || "N/A") === serviceTypeFilter
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.trim().toLowerCase();
      result = result.filter((service) => {
        const name = String(service.name || "").toLowerCase();
        const email = String(service.emailId || "").toLowerCase();
        const phone = String(service.phone || "").toLowerCase();
        return (
          name.includes(query) || email.includes(query) || phone.includes(query)
        );
      });
    }

    // Filter by date
    if (dateFilter) {
      try {
        const parsedDate = parse(dateFilter, "yyyy-MM-dd", new Date());
        const selectedDateString = format(parsedDate, "dd MM yyyy");
        result = result.filter((service) => {
          if (!service.createdAt) return false;
          const serviceDateString = format(
            new Date(service.createdAt),
            "dd MM yyyy"
          );
          return serviceDateString === selectedDateString;
        });
      } catch (e) {
        console.error("Error parsing date:", e);
        toast.error("Invalid date format. Please select a date.");
        return;
      }
    }

    setFilteredServices(result);
    setCurrentPage(1); // Reset to first page when filters change
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredServices.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredServices.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleClearAllFilter = () => {
    setStatusFilter("All");
    setServiceTypeFilter("All");
    setSearchQuery("");
    setDateFilter("");
    setCurrentPage(1); // Reset to first page
  };

  // Handle filter changes
  useEffect(() => {
    applyFilters();
  }, [statusFilter, serviceTypeFilter, searchQuery, dateFilter, services]);

  return (
    <section className="bg-gradient-to-br from-stone-900 to-zinc-900 py-12 lg:py-20">
      <Toaster />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-8 lg:mb-12">
          Admin Service Dashboard
        </h2>
        <div className="flex justify-end mb-4 sm:mb-6">
          <button
            onClick={handleLogout}
            className="bg-[#FF4D6D] text-white font-extrabold py-2 px-4 sm:px-6 rounded-full text-sm sm:text-md uppercase tracking-wider shadow-lg transition-colors duration-300 hover:bg-[#e0435f] cursor-pointer"
          >
            Logout
          </button>
        </div>

        <div className="bg-stone-800 rounded-xl p-4 sm:p-6 shadow-lg mb-12">
          {/* Filter Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="flex items-center gap-2">
              <label className="text-gray-300 text-sm whitespace-nowrap">
                Status:
              </label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-zinc-900 text-white border border-gray-700 rounded-lg p-2 text-sm focus:outline-none focus:border-[#FF4D6D] w-full cursor-pointer"
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
                value={serviceTypeFilter}
                onChange={(e) => setServiceTypeFilter(e.target.value)}
                className="bg-zinc-900 text-white border border-gray-700 rounded-lg p-2 text-sm focus:outline-none focus:border-[#FF4D6D] w-full cursor-pointer"
              >
                {serviceTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <label className="text-gray-300 text-sm whitespace-nowrap">
                Search:
              </label>
              <input
                type="text"
                placeholder="Name, email, or phone..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-zinc-900 text-white border border-gray-700 rounded-lg p-2 text-sm w-full focus:outline-none focus:border-[#FF4D6D]"
              />
            </div>

            <div className="flex gap-2 items-center">
              <label className="text-gray-300 text-sm whitespace-nowrap">
                Date:
              </label>
              <input
                type="date"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="bg-zinc-900 text-white border border-gray-700 rounded-lg p-2 text-sm w-full focus:outline-none focus:border-[#FF4D6D] cursor-pointer"
              />
            </div>
          </div>

          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <button
              onClick={handleClearAllFilter}
              className="bg-gray-600 text-white rounded-lg p-2 text-sm focus:outline-none hover:bg-gray-500 cursor-pointer"
            >
              Clear All Filters
            </button>
          </div>
          <div className="flex justify-end">
            <button
              onClick={fetchServices}
              className="bg-[#FF4D6D] text-white font-bold py-2 px-4 rounded-full shadow-md transition-colors duration-300 hover:bg-[#e0435f] text-sm flex gap-2 items-center cursor-pointer"
            >
              <ArrowPathIcon className="  w-4 h-4" /> Refresh
            </button>
          </div>
          {error && (
            <div className="text-red-400 text-center mb-4 sm:mb-6 text-sm sm:text-base">
              {error}
            </div>
          )}

          <div className="overflow-x-auto">
            <div className="min-w-full">
              {/* Table Layout - Show table for devices >= lg */}
              <table className="w-full text-left text-gray-300 hidden lg:table">
                <thead className="border-b border-gray-700">
                  <tr>
                    <th className="py-3 px-4 text-sm sm:text-base">Name</th>
                    <th className="py-3 px-4 text-sm sm:text-base">Email</th>
                    <th className="py-3 px-4 text-sm sm:text-base">Phone</th>
                    <th className="py-3 px-4 text-sm sm:text-base">
                      Service Type
                    </th>
                    <th className="py-3 px-4 text-sm sm:text-base">
                      Requested At
                    </th>
                    <th className="py-3 px-4 text-sm sm:text-base">Status</th>
                    <th className="py-3 px-4 text-sm sm:text-base">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    Array(3)
                      .fill()
                      .map((_, index) => <ShimmerServiceCard key={index} />)
                  ) : currentItems.length > 0 ? (
                    currentItems.map((service) => (
                      <tr
                        key={service._id}
                        className="border-b border-gray-700 hover:bg-stone-700 transition-colors duration-200"
                      >
                        <td className="py-3 px-4 text-sm sm:text-base">
                          {service.name || "N/A"}
                        </td>
                        <td className="py-3 px-4 text-sm sm:text-base">
                          {service.emailId || "N/A"}
                        </td>
                        <td className="py-3 px-4 text-sm sm:text-base">
                          {service.phone || "N/A"}
                        </td>
                        <td className="py-3 px-4 text-sm sm:text-base">
                          {service.serviceType || "N/A"}
                        </td>
                        <td className="py-3 px-4 text-sm sm:text-base">
                          {service.createdAt
                            ? format(
                                new Date(service.createdAt),
                                "MMM dd, yyyy h:mm a"
                              )
                            : "N/A"}
                        </td>
                        <td className="py-3 px-4 text-sm sm:text-base">
                          <span
                            className={`px-2 py-1 rounded-full text-xs sm:text-sm ${
                              service.isCompleted
                                ? "bg-green-900 text-green-300"
                                : "bg-yellow-900 text-yellow-300"
                            }`}
                          >
                            {service.isCompleted ? "Completed" : "Pending"}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm sm:text-base">
                          <button
                            onClick={() =>
                              toggleServiceStatus(
                                service._id,
                                service.isCompleted
                              )
                            }
                            className="bg-[#FF4D6D] text-white font-bold py-1.5 px-3 sm:py-2 sm:px-4 rounded-full shadow-md transition-colors duration-300 hover:bg-[#e0435f] text-xs sm:text-sm cursor-pointer"
                          >
                            Mark as{" "}
                            {service.isCompleted ? "Pending" : "Completed"}
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="7"
                        className="py-3 px-4 text-center text-gray-400 text-sm sm:text-base"
                      >
                        No service requests match your filters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>

              {/* Mobile/Tablet Layout - Show as Cards for all devices <= lg */}
              <div className="lg:hidden">
                {loading ? (
                  Array(3)
                    .fill()
                    .map((_, index) => (
                      <div
                        key={index}
                        className="bg-stone-800 rounded-xl p-4 mb-6 shadow-lg animate-pulse"
                      >
                        <div className="h-3 bg-gray-600 rounded w-3/4 mb-2"></div>
                        <div className="h-3 bg-gray-600 rounded w-1/2 mb-2"></div>
                        <div className="h-3 bg-gray-600 rounded w-3/4 mb-2"></div>
                        <div className="h-3 bg-gray-600 rounded w-1/2 mb-2"></div>
                        <div className="h-3 bg-gray-600 rounded w-1/3 mb-2"></div>
                        <div className="h-6 bg-gray-600 rounded w-20"></div>
                      </div>
                    ))
                ) : currentItems.length > 0 ? (
                  currentItems.map((service) => (
                    <div
                      key={service._id}
                      className="bg-stone-800 rounded-xl p-4 mb-6 shadow-lg"
                    >
                      <div className="text-lg font-semibold text-gray-200 mb-2">
                        {service.name || "N/A"}
                      </div>
                      <div className="text-sm text-gray-400">
                        <strong>Email: </strong>
                        {service.emailId || "N/A"}
                      </div>
                      <div className="text-sm text-gray-400">
                        <strong>Phone: </strong>
                        {service.phone || "N/A"}
                      </div>
                      <div className="text-sm text-gray-400">
                        <strong>Service Type: </strong>
                        {service.serviceType || "N/A"}
                      </div>
                      <div className="text-sm text-gray-400">
                        <strong>Requested At: </strong>
                        {service.createdAt
                          ? format(
                              new Date(service.createdAt),
                              "MMM dd, yyyy h:mm a"
                            )
                          : "N/A"}
                      </div>
                      <div className="text-sm text-gray-400 mb-4">
                        <strong>Status: </strong>
                        <span
                          className={`px-2 py-1 rounded-full text-xs sm:text-sm ${
                            service.isCompleted
                              ? "bg-green-900 text-green-300"
                              : "bg-yellow-900 text-yellow-300"
                          }`}
                        >
                          {service.isCompleted ? "Completed" : "Pending"}
                        </span>
                      </div>
                      <button
                        onClick={() =>
                          toggleServiceStatus(service._id, service.isCompleted)
                        }
                        className="bg-[#FF4D6D] text-white font-bold py-2 px-4 rounded-full shadow-md w-full text-xs sm:text-sm cursor-pointer"
                      >
                        Mark as {service.isCompleted ? "Pending" : "Completed"}
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="text-gray-400 text-center">
                    No service requests match your filters.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Pagination Controls */}
          {filteredServices.length > itemsPerPage && (
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`bg-[#FF4D6D] text-white  text-sm font-bold py-2 px-4 rounded-full shadow-md transition-colors duration-300 ${
                  currentPage === 1
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-[#e0435f]"
                } cursor-pointer`}
              >
                Previous
              </button>
              <span className="text-gray-300 text-sm">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`bg-[#FF4D6D] text-white font-bold py-2  text-sm px-4 rounded-full shadow-md transition-colors duration-300 ${
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-[#e0435f]"
                } cursor-pointer`}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AdminServiceDashboard;
