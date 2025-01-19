import aboutImage1 from "../assets/leftside.png";
import aboutImage2 from "../assets/rightside.png";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-images">
        <img
          src={aboutImage1}
          alt="About Image 1"
          className="about-image left-image"
        />
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            At the heart of telecom innovation, we bring a groundbreaking
            solution to streamline your social media strategy. Our AI-powered
            post generator is designed specifically for telecom businesses,
            helping you craft compelling content that resonates with your
            audience and strengthens your brand presence.
          </p>
          <button className="learn-more-btn">Learn More →</button>
        </div>
        <img
          src={aboutImage2}
          alt="About Image 2"
          className="about-image right-image"
        />
      </div>
    </section>
  );
};

export default AboutUs;
