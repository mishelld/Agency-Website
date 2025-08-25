import "./HeroSection.css";
import heroImg from "../assets/Illustration.svg";

function HeroSection() {
  return (
    <>
      <div id="home" className="hero-container">
        <div className="hero-left-side">
          <div className="hero-left-wrapper">
            <h1 className="hero-heading">
              Lessons and insights <br />
              <span className="highlight">from 8 years</span>
            </h1>
            <p>
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <button className="hero-btn">Register</button>
          </div>
        </div>
        <div className="hero-right-side">
          <div className="hero-img-container">
            <img src={heroImg} alt="Hero Illustration" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
