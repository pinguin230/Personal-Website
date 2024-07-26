import "./Header.scss";
import "./../../../themes.scss"
import ToggleButton from "../theme-button/ToggleButton.jsx";


const Header = () => {
  return (
    <header>
      <nav className="header">
        <a className="nav-item" href="#">Personal Website</a>
          <ul className="nav-item-list">
            <li>
              <ToggleButton/>
            </li>
            <li>
              <a className="nav-item nav-item-portfolio" href="#">Portfolio</a>
            </li>
          </ul>
      </nav>

    </header>
  );
};

export default Header;