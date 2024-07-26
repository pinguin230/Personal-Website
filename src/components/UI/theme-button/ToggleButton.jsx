import {useTheme} from "../../../ThemeContext.jsx";
import sun from "../../../assets/brightness.png"
import moon from "../../../assets/moon.png"
import "./ToggleButton.scss";

const ToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-toggle-button">
      <img src={theme === 'dark' ? sun : moon} alt="theme-toggle-icon" className="theme-toggle-icon"/>
    </button>
  );
};

export default ToggleButton;