import logo from "./../assets/logo-removebg-preview.png";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-gradient">
        <div className="footer-container">
          <div className="footer-section logo-and-brand">
            <img src={logo} alt="Logo" className="navbar-logo" />
            <p className="brand-name">Octupus.ai</p>
          </div>

          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li>Features</li>
              <li>Event</li>
              <li>Contact us</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className="footer-section">
            <ul>
              <li>Pricing</li>
              <li>Reviews</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact</h3>
            <p>support@telecomsocial.com</p>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>
          © 2024 Welcome. All rights reserved. <a href="#">Privacy Policy</a> |{" "}
          <a href="#">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
