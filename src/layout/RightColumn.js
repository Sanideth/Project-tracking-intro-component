import Nav from "../components/Nav";
import Image from "../img/illustration-devices.svg";

const RightColumn = () => (
  <div className="right-column">
    <Nav />
    <div className="right-column__image-container">
      <img
        src={Image}
        alt="Illustration Devices"
        className="right-column__image"
      />
    </div>
  </div>
);

export default RightColumn;
