import ratings from "../assets/ratings.webp";
import ratings2 from "../assets/ratings2.webp";

const EverythingBrandNeeds = () => {
  return (
    <section className="everything-your-brand-needs">
      <h3>Everything your brand needs</h3>
      <div className="brand-images">
        <div className="brand-image" style={{ position: "relative" }}>
          <img
            src={ratings}
            alt="Effortless Posting"
            className="brand-image-img"
          />
          <div className="image-overlay">
            <h2>Effortless Posting</h2>
            <p>Live Your Post in Just 3-4 Easy Steps!</p>
          </div>
        </div>
        <div className="brand-image" style={{ position: "relative" }}>
          <img
            src={ratings2}
            alt="1000+ Telecom Posts"
            className="brand-image-img"
          />
          <div className="image-overlay">
            <h2>1000+ Telecom Posts</h2>
            <p>Find Perfect Post for Your Business</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EverythingBrandNeeds;
