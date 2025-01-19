import howitworks from "../assets/laptop.avif";

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="image-content">
        <img src={howitworks} alt="How It Works" className="how-it-works-img" />
      </div>
      <div className="text-content">
        <h2>How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <h3>Set Your Goals:</h3>
            <p>Define your target audience and campaign objectives.</p>
          </div>
          <div className="step">
            <h3>Generate Posts:</h3>
            <p>Let AI create engaging, industry-specific content.</p>
          </div>
          <div className="step">
            <h3>Tailor to Perfection:</h3>
            <p>Customize designs to align with your brand identity.</p>
          </div>
          <div className="step">
            <h3>Go Live:</h3>
            <p>Publish your content and watch your audience grow.</p>
          </div>
        </div>
        <a href="#learn-more" className="learn-more-link">
          Learn More →
        </a>
      </div>
    </section>
  );
};

export default HowItWorks;
