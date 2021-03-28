const mockArr = ["Product", "Features", "Pricing", "", "Login"];

const Nav = () => {
  const renderElements = mockArr.map((element) => (
    <a href="https://github.com/Sanideth" className="nav__list-link">
      <li className="nav__list-item">{element !== "" ? element : "\u2B24"}</li>
    </a>
  ));
  return <ul className="nav__list">{renderElements}</ul>;
};

export default Nav;
