import { useState } from "react";
import Hamburger from "./Hamburger";

const mockArr = ["Product", "Features", "Pricing", "", "Login"];

const Nav = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };
  const styleNav = isHamburgerOpen ? "nav-mobile" : "";
  const renderElements = mockArr.map((element) => (
    <li className="nav__list-item">
      <a href="https://github.com/Sanideth" className="nav__list-link">
        {element}
      </a>
    </li>
  ));
  return (
    <nav className="nav">
      <ul className={`nav__list ${styleNav}`}>{renderElements}</ul>
      <Hamburger
        isHamburgerOpen={isHamburgerOpen}
        toggleHamburger={toggleHamburger}
      />
    </nav>
  );
};

export default Nav;
