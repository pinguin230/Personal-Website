import "./Services.scss";
import frontendPhoto from "./../../../assets/design.webp"
import {useTheme} from "../../../ThemeContext.jsx";
import useIntersectionObserver from "../../../hooks/useUntersectionObserver.js";

const Services = () => {

  const { theme } = useTheme()
  const { isVisible, elementRef } = useIntersectionObserver();

  return (
    <div
      ref={elementRef}
      className={`services-container ${theme} ${isVisible ? 'visible' : ''}`}
    >
        <h1>Services I offer</h1>
        <div className="content">
          <div className="text-column">
            <p>
              As a frontend developer, I specialize in creating versatile and responsive web interfaces
              using <strong>React</strong> and <strong>TypeScript</strong>. I leverage my skills in HTML, CSS, and
              JavaScript to build visually appealing and user-friendly applications. With a deep understanding of
              React, <strong>RTK
              (Redux Toolkit)</strong>, and TypeScript, I ensure efficient state management and robust application
              architecture. My knowledge of algorithms, data structures, and OOP principles allows me to deliver
              high-quality, maintainable code.
            </p>
          </div>
          <div className="service-column">
            <div className="service">
              <img src={frontendPhoto} alt="Frontend Development"/>
              <h2>Frontend Development</h2>
              <h3>What I can do</h3>
              <p>Utilizing my expertise in HTML, CSS, and JavaScript alongside React, I develop visually stunning and
                highly responsive user interfaces that emphasize usability and user experience. My meticulous attention
                to detail and deep understanding of design principles enable me to create intuitive and engaging web
                experiences for users.
              </p>
            </div>
          </div>
        </div>
      </div>

  );
};

export default Services;
