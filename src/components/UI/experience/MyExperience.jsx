import "./MyExperience.scss";
import {useTheme} from "../../../ThemeContext.jsx";

const MyExperience = () => {

  const { theme } = useTheme();

  return (
    <div className={`container ${theme}`}>
      <h1>About my education, courses I took, and previous experience</h1>
      <div className="courses">
        <div className="course">
          <div className="course-details">
            <h2>Algorithms and data structures</h2>
            <p>CS50, Harvard University&apos;s introduction to the intellectual enterprises of computer science and the art of programming.</p>
          </div>
          <div className="course-time">
            <p>1.5 years ago</p>
          </div>
        </div>
        <div className="course">
          <div className="course-details">
            <h2>Java Script</h2>
            <p>Harvard CS50&apos;s Web Programming with Python and JavaScript</p>
          </div>
          <div className="course-time">
            <p>1 year ago</p>
          </div>
        </div>
        <div className="course">
          <div className="course-details">
            <h2>Frontend Web Development</h2>
            <p>Frontend Web Development: In-Depth Project Tutorial (HTML, CSS, JavaScript, TypeScript, React)</p>
          </div>
          <div className="course-time">
            <p>1 year ago</p>
          </div>
        </div>
        <div className="course">
          <div className="course-details">
            <h2>Frontend and Full Stack technologies</h2>
            <p>The Complete 2023 Web Development Bootcamp. HTML, CSS, Javascript, Node, React, MongoDB</p>
          </div>
          <div className="course-time">
            <p>March 2023 - June 2023</p>
          </div>
        </div>
        <div className="course">
          <div className="course-details">
            <h2>React</h2>
            <p>Explored the documentation, followed some little courses and keep getting more advanced by doing personal projects.</p>
          </div>
          <div className="course-time">
            <p>June 2023 - Present</p>
          </div>
        </div>
      </div>
      <div className="additional-info">
        <p>I also finished a year at university, where I studied how to solve algorithmic problems, learned about the rules of writing clean code using OOP principles and design patterns. I have mastered Linear Algebra, Mathematical Analysis, Discrete Mathematics, and Probability Theory. I also understand how a computer works thanks to the subject Computer Architecture and Embedded Systems Programming.</p>
      </div>
    </div>
  );
};

export default MyExperience;