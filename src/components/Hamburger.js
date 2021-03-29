import Open from "../img/icon-hamburger.svg";
import Close from "../img/icon-close.svg";

const Hamburger = () => (
  <div className="hamburger-container">
    <button className="btn btn-hamburger">
      <img src={Open} alt="Hamburger open icon" className="hamburger-open" />
    </button>
  </div>
);

export default Hamburger;
