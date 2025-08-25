import "./Footer.css";
import icon from "../assets/fIcon.svg";
import facebook from "../assets/1Social Icons.svg";
import Twitter from "../assets/3Social Icons.svg";
import Instagram from "../assets/5Social Icons.svg";
import LinkedIn from "../assets/Social Icons.svg";
import send from "../assets/send.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo / Copyright */}

        {/* Links Sections */}
        <div className="footer-links">
          <div className="footer-section">
            <div className="footer-brand-name">
              <img src={icon} alt="logo"></img>
              <h1>Nexcent</h1>
            </div>
            <div className="footer-socials-logo">
              <a href="#" aria-label="Facebook">
                <img src={facebook} alt="Facebook" />
              </a>
              <a href="#" aria-label="Twitter">
                <img src={Twitter} alt="Twitter" />
              </a>
              <a href="#" aria-label="Instagram">
                <img src={Instagram} alt="Instagram" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <img src={LinkedIn} alt="LinkedIn" />
              </a>
            </div>
            <div className="footer-brand">
              <p>Copyright © 2020 Landify UI Kit. All rights reserved.</p>
            </div>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li>About us</li>
              <li>Blog</li>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Testimonials</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li>Help center</li>
              <li>Terms of Service</li>
              <li>Legal</li>
              <li>Privacy Policy</li>
              <li>Status</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section newsletter">
            <h4>Stay up to date</h4>
            <p>Subscribe to our newsletter</p>
            <form>
              <div className="footer-input-container">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="footer-input"
                />
                <button type="submit" className="footer-btn">
                  <img src={send} alt="Send" className="footer-btn-icon" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
