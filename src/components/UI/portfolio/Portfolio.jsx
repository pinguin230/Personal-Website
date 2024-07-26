import EventRegistrationApp from '../../../assets/Event-registration-app.png';
import PizzaSite from '../../../assets/PizzaSite.jpg';
import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <div>
      <h1>Portfolio</h1>
      <p className="description">I specialize in creating dynamic and responsive user interfaces using React. I craft modern web applications with HTML, CSS, and JavaScript, ensuring seamless user experiences. I am skilled in using SCSS for enhanced styling and TypeScript for robust, type-safe code. My strong understanding of algorithms, data structures, and object-oriented programming enables me to develop efficient and maintainable code. Additionally, I have experience integrating RESTful APIs and managing state with Redux for scalable and performant applications.</p>
      <div className="card-container">
        <div className="card max-w-md flex-1">
          <img src={EventRegistrationApp} className="card-img-top" alt="Event Registration App"/>
          <div className="card-body">
            <h5 className="card-title">Event registration app</h5>
            <p className="card-text">Technologies used: GIT, React, TypeScript, SCSS, HTML, Node.js, MongoDB,
              Express.js,
              JavaScript</p>
            <a href="https://events-registration-app-1-x3i0.onrender.com" target="_blank" className="btn btn-primary">Visit
              a website</a>
          </div>
        </div>
        <div className="card max-w-md flex-1">
          <img src={PizzaSite} className="card-img-top" alt="Event Registration App"/>
          <div className="card-body">
            <h5 className="card-title">Project for university</h5>
            <p className="card-text">Technologies used: GIT, React, Redux, JavaScript, TypeScript, SCSS, CSS,
              Handlebars,
              HTML, Docker, MongoDB</p>
            <a href="https://events-registration-app-1-x3i0.onrender.com" target="_blank" className="btn btn-primary">Open
              a video</a>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Portfolio;
