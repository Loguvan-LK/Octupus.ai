import "./../styles/Navbar.css";
import logo from "./../assets/logo-removebg-preview.png";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <img src={logo} alt="Logo" className="navbar-logo" />
        <p>Octupus.ai</p>
      </div>
      <div className="nav-links">
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Events</a>
        <a href="#">About</a>
        <a href="#">Contact Us</a>
      </div>
      <div className="nav-buttons">
        <a href="#">Support</a>
        <a href="#">Login</a>
        <button className="demo-btn">Demo</button>
      </div>
    </nav>
  );
};

export default Navbar;
