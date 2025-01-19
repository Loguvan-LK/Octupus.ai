import Navbar from "./Navbar";
import TrustedBrands from "./TrustedBrands";
import AboutUs from "./AboutUs";
import WhyChooseUs from "./WhyChooseUs";
import HowItWorks from "./HowItWorks";
import EverythingBrandNeeds from "./EverythingBrandNeeds";
import SubscribeSection from "./SubscribeSection";
import Footer from "./Footer";
import heroImage from "../assets/hero.png";
import "../styles/Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="banner">
        <Navbar />
        <div className="banner-content">
          <h1>Octupus.ai</h1>
          <p>
            Transforming Social Media for the Telecoms Industry! Our AI-powered
            social media post generator helps telecom businesses create engaging
            content and build customer loyalty.
          </p>
          <button className="signup-btn">Sign Up →</button>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="AI-powered social media post generator" />
        </div>
      </div>
      <TrustedBrands />
      <AboutUs />
      <WhyChooseUs />
      <HowItWorks />
      <EverythingBrandNeeds />
      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default Banner;
