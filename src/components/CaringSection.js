import img1 from "../assets/image 18.svg";
import img2 from "../assets/image 19.svg";
import img3 from "../assets/image 20.svg";
import "./CaringSection.css";
import Arrow from "../assets/Right.svg";

function CaringSection() {
  return (
    <>
      <div className="caring-container">
        <div className="caring-text">
          <h1>Caring is the new marketing</h1>
          <p>
            The Nextcent blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their
            membership income and lot's more.​
          </p>
        </div>
        <div className="caring-items">
          <div className="caring-item">
            <img className="caring-img" src={img1} alt="logo"></img>
            <div className="caring-box">
              <h4>Creating Streamlined Safeguarding Processes with OneRen</h4>
              <button className="caring-btn">
                Readmore{" "}
                <img
                  src={Arrow}
                  alt="arrow"
                  className="caring-arrow-icon"
                ></img>
              </button>
            </div>
          </div>
          <div className="caring-item">
            <img className="caring-img" src={img2} alt="logo"></img>
            <div className="caring-box">
              <h4>
                What are your safeguarding responsibilities and how can you
                manage them?
              </h4>
              <button className="caring-btn">
                Readmore{" "}
                <img
                  src={Arrow}
                  alt="arrow"
                  className="caring-arrow-icon"
                ></img>
              </button>
            </div>
          </div>
          <div className="caring-item">
            <img className="caring-img" src={img3} alt="logo"></img>
            <div className="caring-box">
              <h4>Revamping the Membership Model with Triathlon Australia</h4>
              <button className="caring-btn">
                Readmore
                <img
                  src={Arrow}
                  alt="arrow"
                  className="caring-arrow-icon"
                ></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CaringSection;
