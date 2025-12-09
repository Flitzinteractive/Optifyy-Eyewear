import WhyChooseUs from "./WhyChooseUs";
import HeroSection from "./HeroSection";
import OurServices from "./OurServices";
import VisionTips from "./VisionTips";
import BehindTheLenses from "./BehindTheLenses";
import Products from "./Products";
import Testimonials from "./Testimonials";
import BrandLogoSlider from "./BrandLogoSlider";
import FreeServices from "./FreeServices";
const Body = () => {
  return (
    <>
      <div className="overflow-x-hidden min-h-screen">
        <HeroSection />
        <WhyChooseUs />
        <OurServices />
        <BrandLogoSlider />
        <VisionTips />
        <BehindTheLenses />
        <Products />

        <FreeServices />
        <Testimonials />
      </div>
    </>
  );
};

export default Body;
