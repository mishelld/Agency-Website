import "./PixelgradeSection.css";
import rafiki from "../assets/rafiki.svg";

function PixelgradeSection() {
  return (
    <>
      <div id="community" className="pixelgrade-container">
        <div className="pixelgrade-left-side">
          <img className="pixelgrade-img" src={rafiki} alt="img"></img>
        </div>
        <div className="pixelgrade-right-side">
          <h1>
            The unseen of spending three <br />
            years at Pixelgrade
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <button className="pixelgrade-btn">Learn More</button>
        </div>
      </div>
    </>
  );
}
export default PixelgradeSection;
