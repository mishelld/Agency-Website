import icon1 from "../assets/Icon.svg";
import icon2 from "../assets/Icon (1).svg";
import icon3 from "../assets/Icon (2).svg";
import "./ManageSection.css";
function ManageSection() {
  return (
    <>
      <div id="features" className="manage-container">
        <div className="manage-text">
          <h1>
            Manage your entire community <br />
            in a single system
          </h1>
          <p>Who is Nextcent suitable for?</p>
        </div>
        <div className="manage-items">
          <div className="manage-item">
            <img className="manage-img" src={icon1} alt="icon"></img>
            <div className="manage-text">
              <h1>
                Membership <br />
                Organisations
              </h1>
              <p>
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
          </div>
          <div className="manage-item">
            <img className="manage-img" src={icon2} alt="icon"></img>
            <div className="manage-text">
              <h1>
                National <br /> Associations
              </h1>
              <p>
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
          </div>
          <div className="manage-item">
            <img className="manage-img" src={icon3} alt="icon"></img>
            <div className="manage-text">
              <h1>
                Clubs And <br />
                Groups
              </h1>
              <p>
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ManageSection;
