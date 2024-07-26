import "./Header.scss";
import "./../../../themes.scss"
import ToggleButton from "../theme-button/ToggleButton.jsx";


const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <a className="nav-item" href="#">Personal Website</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li>
              <ToggleButton/>
            </li>
            <li>
              <a className="nav-item nav-item-portfolio" href="#">Portfolio</a>
            </li>
          </ul>
        </div>
      </nav>

    </header>
  );
};

export default Header;