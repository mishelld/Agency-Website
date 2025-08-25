import "./PixelgradeSection.css";
import image from "../assets/image 9.svg";
import logo1 from "../assets/Logo.svg";
import logo2 from "../assets/Logo (1).svg";
import logo3 from "../assets/Logo (2).svg";
import logo4 from "../assets/Logo (3).svg";
import logo5 from "../assets/Logo (4).svg";
import logo6 from "../assets/Logo (5).svg";
import Arrow from "../assets/Right.svg";

import "./AdditionalSection.css";
function AdditionalSection() {
  return (
    <>
      <div id="pricing" className="add-container">
        <div className="add-left-side">
          <img className="add-img" src={image} alt="img"></img>
        </div>
        <div className="add-right-side">
          <p>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <h1>Tim Smith</h1>
          <p>British Dragon Boat Racing Association</p>
          <div className="add-logos">
            <img src={logo1} alt="logo"></img>
            <img src={logo2} alt="logo"></img>
            <img src={logo3} alt="logo"></img>
            <img src={logo4} alt="logo"></img>
            <img src={logo5} alt="logo"></img>
            <img src={logo6} alt="logo"></img>
            <button className="add-btn">
              Meet all customers
              <img src={Arrow} alt="arrow" className="add-arrow-icon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default AdditionalSection;
