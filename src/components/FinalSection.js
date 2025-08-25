import Arrow from "../assets/Rightw.svg";
import "./FinalSection.css";
function FinalSection() {
  return (
    <>
      <div className="final-container">
        <h1>
          Pellentesque suscipit <br />
          fringilla libero eu.
        </h1>
        <button className="final-btn">
          Get a Demo{" "}
          <img src={Arrow} alt="arrow" className="final-arrow-icon"></img>
        </button>
      </div>
    </>
  );
}

export default FinalSection;
