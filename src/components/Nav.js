const mockArr = ["Product", "Features", "Pricing", "", "Login"];

const Nav = () => {
  const renderElements = mockArr.map((element) => (
    <li className="nav__list-item">
      <a href="https://github.com/Sanideth" className="nav__list-link">
        {element !== "" ? element : "\u2022"}
      </a>
    </li>
  ));
  return (
    <nav className="nav">
      <ul className="nav__list">{renderElements}</ul>
    </nav>
  );
};

export default Nav;
