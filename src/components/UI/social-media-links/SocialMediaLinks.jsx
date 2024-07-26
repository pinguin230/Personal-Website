import gitHubLogoLight from "./../../../assets/github.png"
import gitHubLogoDark from "./../../../assets/github (1).png"
import linkedInLogoLight from "./../../../assets/linkedin.png"
import linkedInLogoDark from "./../../../assets/linkedin (1).png"
import telegramLogoDark from "./../../../assets/telegram.png"
import telegramLogoLight from "./../../../assets/telegram (1).png"
import {useTheme} from "../../../ThemeContext.jsx";
import "./SocialMediaLinks.scss";

const SocialMediaLinks = () => {
  const { theme } = useTheme();
  return (
    <div className="social-row">
      <a href="https://github.com/pinguin230" target="_blank"><img src={theme === 'dark' ? gitHubLogoDark : gitHubLogoLight} alt="Themed"/></a>
      <a href="https://www.linkedin.com/in/mykola-teslia-865331313/" target="_blank"><img src={theme === 'dark' ? linkedInLogoDark : linkedInLogoLight} alt="Themed"/></a>
      <a href="https://t.me/tesliam" target="_blank"><img src={theme === 'dark' ? telegramLogoDark : telegramLogoLight} alt="Themed"/></a>
    </div>
);
};

export default SocialMediaLinks;