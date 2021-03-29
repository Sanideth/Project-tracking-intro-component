import MainLogo from "../components/MainLogo";
import Nav from "../components/Nav";

const Header = () => (
  <header className="header">
    <div className="row">
      <div className="header__logo-container">
        <a href="https://github.com/Sanideth" className="header__logo-link">
          <MainLogo />
        </a>
      </div>
      <Nav />
    </div>
  </header>
);

export default Header;
