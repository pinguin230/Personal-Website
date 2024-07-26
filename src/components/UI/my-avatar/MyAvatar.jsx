import myAvatar from "./../../../assets/ReadyPlayerMe-Avatar.png"
import "./MyAvatar.scss";
import {useTheme} from "../../../ThemeContext.jsx";

const MyAvatar = () => {

  const { theme } = useTheme();

  return (
    <div className="avatar-container-main">
      <div className={`avatar-container ${theme}`}>
        <img className="avatar" src={myAvatar} alt="avatar"/>
      </div>
    </div>
  );
};

export default MyAvatar;