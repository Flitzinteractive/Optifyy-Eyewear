import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation(); // Get the current location object

  useEffect(() => {
    // Scroll to top when the route changes
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

export default ScrollToTop;
