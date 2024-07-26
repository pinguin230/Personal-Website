import './App.css'
import Header from "./components/UI/header/Header.jsx";
import Introduction from "./components/UI/introduction/Introduction.jsx";
import {ThemeProvider, useTheme} from "./ThemeContext.jsx";
import {useEffect} from "react";
import SocialMediaLinks from "./components/UI/social-media-links/SocialMediaLinks.jsx";
import MyAvatar from "./components/UI/my-avatar/MyAvatar.jsx";
import MyExperience from "./components/UI/experience/MyExperience.jsx";
import Services from "./components/UI/services/Services.jsx";
import Portfolio from "./components/UI/portfolio/Portfolio.jsx";

function App() {

  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`app ${theme}`}>
      <Header/>
      <div className="main-container">
        <Introduction/>
        <SocialMediaLinks/>
        <MyAvatar/>
        <MyExperience/>
        <Services/>
        <Portfolio/>
      </div>
    </div>
  )
}

const RootApp = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default RootApp;
