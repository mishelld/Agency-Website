import "./HelpSection.css";
import icon3 from "../assets/Icon (3).svg";
import icon4 from "../assets/Icon (4).svg";
import icon5 from "../assets/Icon (5).svg";
import icon6 from "../assets/Icon (6).svg";

function HelpSection() {
  return (
    <>
      <div className="help-container">
        <div className="help-left-side">
          <div className="help-text">
            <h1>
              <span className="first-part">Helping a local </span> <br />{" "}
              <span className="second-part">business reinvent itself</span>
            </h1>
            <p>We reached here with our hard work and dedication</p>
          </div>
        </div>

        <div className="help-items-grid">
          <div className="help-item">
            <img src={icon3}></img>
            <div className="help-text-item">
              <h1>2,245,341</h1>
              <p>Members</p>
            </div>
          </div>
          <div className="help-item">
            <img src={icon4}></img>
            <div className="help-text-item">
              <h1>46,328</h1>
              <p>Clubs</p>
            </div>
          </div>
          <div className="help-item">
            <img src={icon5}></img>
            <div className="help-text-item">
              <h1>828,867</h1>
              <p>Event Bookings</p>
            </div>
          </div>
          <div className="help-item">
            <img src={icon6}></img>
            <div className="help-text-item">
              <h1>1,926,436</h1>
              <p>Payments</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HelpSection;
