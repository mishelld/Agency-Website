import "./ClientsSection.css";
import logo1 from "../assets/Logo.svg";
import logo2 from "../assets/Logo (1).svg";
import logo3 from "../assets/Logo (2).svg";
import logo4 from "../assets/Logo (3).svg";
import logo5 from "../assets/Logo (4).svg";
import logo6 from "../assets/Logo (5).svg";
import logo7 from "../assets/Logo (6).svg";

function ClientsSection() {
  return (
    <>
      <div className="client-container">
        <div className="client-text">
          <h1>Our Clients</h1>
          <p>We have been working with some Fortune 500+ clients</p>
        </div>

        <div className="client-logos">
          <img className="client-logo" src={logo1} alt="logo"></img>
          <img className="client-logo" src={logo2} alt="logo"></img>
          <img className="client-logo" src={logo3} alt="logo"></img>
          <img className="client-logo" src={logo4} alt="logo"></img>
          <img className="client-logo" src={logo5} alt="logo"></img>
          <img className="client-logo" src={logo6} alt="logo"></img>
          <img className="client-logo" src={logo7} alt="logo"></img>
        </div>
      </div>
    </>
  );
}
export default ClientsSection;
