import satisfied from "../assets/satisfied-girl.png";

const SubscribeSection = () => {
  return (
    <section className="subscribe-section">
      <div className="subscribe-content">
        <h3>
          Subscribe To Our Mailing List <br />
          And Stay Up To Date
        </h3>
        <div className="email-subscription">
          <input
            type="email"
            className="email-input"
            placeholder="Enter your email"
          />
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>
      <div className="subscribe-image">
        <img src={satisfied} alt="Subscribe Image" className="subscribe-img" />
      </div>
    </section>
  );
};

export default SubscribeSection;
