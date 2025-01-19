import brand1 from "../assets/rungem.jpg";
import brand2 from "../assets/brand2.webp";
import brand3 from "../assets/brand3.jpeg";
import brand4 from "../assets/scotch.jpeg";

const TrustedBrands = () => {
  return (
    <section className="trusted-brands">
      <h2>
        Trusted by thousands <br />
        of top DTC brands
      </h2>
      <div className="brand-container">
        <img src={brand1} alt="Brand 1 logo" />
        <img src={brand2} alt="Brand 2 logo" />
        <img src={brand3} alt="Brand 3 logo" />
        <img src={brand4} alt="Brand 4 logo" />
      </div>
      <div className="scroll-indicator">— · · · ·</div>
    </section>
  );
};

export default TrustedBrands;
