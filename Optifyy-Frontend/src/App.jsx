import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Body from "./components/Body";
import WhyChooseUs from "./components/WhyChooseUs";
import OurServices from "./components/OurServices";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error from "./components/Error";
import ScrollToTop from "./ScrollToTop";
import ReviewSection from "./components/ReviewSection";
import PrivacyPolicy from "./components/PrivacyPolicy";
import FreeServices from "./components/FreeServices";
import AdminServicePanel from "./components/AdminServicePanel";
import ReactGA from "react-ga4";

function App() {
  const TRACKING_ID = "G-8SD15YFC7E";

  // Create a wrapper component to use useLocation
  function PageViewTracker() {
    const location = useLocation();

    useEffect(() => {
      if (TRACKING_ID) {
        ReactGA.initialize(TRACKING_ID);
        ReactGA.send({ hitType: "pageview", page: location.pathname });
      }
    }, [location, TRACKING_ID]);

    return null; // This component doesn't render anything visible
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <PageViewTracker /> {/* Include the PageViewTracker component */}
      <Routes>
        {/* Define the main route for the home page */}
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<WhyChooseUs />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/products" element={<Products />} />
        <Route path="/free-services" element={<FreeServices />} />
        <Route path="/review-us" element={<ReviewSection />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/admin" element={<AdminServicePanel />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
