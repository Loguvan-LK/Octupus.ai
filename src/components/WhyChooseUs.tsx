import hybridwork from "../assets/hybridwork.webp";
import circlediagnol from "../assets/circle-diagonal-lines.svg";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="text-content">
        <h2>Why Choose Us?</h2>
        <p>
          Streamline your social media with AI-driven content creation, offering
          tailored posts and industry-specific templates for the telecom sector.
          Build customer loyalty with engaging, consistent content while
          leveraging real-time analytics to track performance and refine your
          strategy for maximum impact.
        </p>
        <a href="#learn-more" className="learn-more-link">
          Learn More →
        </a>
      </div>
      <div className="image-content">
        <img src={hybridwork} alt="Why Choose Us Image" />
      </div>
      <img
        src={circlediagnol}
        alt="Circle Diagonal Lines"
        className="circle-diagonal-lines"
      />
    </section>
  );
};

export default WhyChooseUs;
