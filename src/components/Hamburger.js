import Open from "../img/icon-hamburger.svg";
import Close from "../img/icon-close.svg";

const Hamburger = (props) => {
  const renderImage = props.isHamburgerOpen ? Close : Open;
  console.log(props.isHamburgerOpen);
  return (
    <div className="hamburger-container">
      <button className="btn btn-hamburger" onClick={props.toggleHamburger}>
        <img
          src={renderImage}
          alt="Hamburger open icon"
          className="hamburger-open"
        />
      </button>
    </div>
  );
};

export default Hamburger;
