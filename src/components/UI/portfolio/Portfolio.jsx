import EventRegistrationApp from '../../../assets/Event-registration-app.png';
import PizzaSite from '../../../assets/PizzaSite.jpg';
import ReactPizza from '../../../assets/react-pizza.png';
import "./Portfolio.scss";
import useIntersectionObserver from "../../../hooks/useUntersectionObserver.js";

const Portfolio = () => {

  const { isVisible, elementRef } = useIntersectionObserver();

  return (
    <div ref={elementRef}
      className={`portfolio-container ${isVisible ? 'visible' : ''}`}>
      <h1 style={{marginTop: 30}}>Portfolio</h1>
      <p className="description">I specialize in creating dynamic and responsive user interfaces using React. I craft
        modern web applications with HTML, CSS, and JavaScript, ensuring seamless user experiences. I am skilled in
        using SCSS for enhanced styling and TypeScript for robust, type-safe code. My strong understanding of
        algorithms, data structures, and object-oriented programming enables me to develop efficient and maintainable
        code. Additionally, I have experience integrating RESTful APIs and managing state with Redux for scalable and
        performant applications.</p>
      <div className="card--container">
        <div className="card--secondary">
          <div className="card card--secondary__item">
            <img src={EventRegistrationApp} className="card-img-top" alt="Event Registration App"/>
            <div className="card-body">
              <h5 className="card-title">Event registration app</h5>
              <p className="card-text">Technologies used: GIT, React, TypeScript, SCSS, HTML, Node.js, MongoDB,
                Express.js,
                JavaScript</p>
              <a href="https://events-registration-app-1-x3i0.onrender.com" target="_blank" className="btn btn-primary">Visit a website</a>
            </div>
          </div>
          <div className="card card--secondary__item">
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
        <div className="react--pizza-card">
          <div className="card card--pizza">
            <img src={ReactPizza} className="card-img-top" alt="Event Registration App"/>
            <div className="card-body">
              <h5 className="card-title">React-pizza</h5><p
              className="card-text">Technologies used: ReactJS 18, TypeScript, Redux Toolkit, React Router, Axios + Fetch, React Hooks, Prettier, CSS-Modules / SCSS, React Content Loader, React Pagination, Lodash.Debounce, Code Splitting, React Loadable, useWhyDidYouUpdate</p>

              <div className="card--pizza--block">
                <div className="card--pizza--block__items">
                  <p className="">
                    ✔️Create a full-fledged frontend application on ReactJS<br/>
                    ✔️Component creation, sorting, search, pagination, filtering, and popup windows<br/>
                    ✔️Interact with the server-side, sending requests to the backend<br/>
                    ✔️Implement page navigation without reloading<br/>
                    ✔️Create a global data store for the entire application<br/>
                    ✔️Write strictly typed code in TypeScript<br/>

                    <br/><br/><br/></p>
                </div>
                <div className="card--pizza--block__items">
                  <p className="">
                    ✔️Prepare the templates<br/>
                    ✔️PostgreSQL Database Configuration<br/>
                    ✔️Custom user model, Media files &amp; signals<br/>
                    ✔️User Registration and Django messages<br/>
                    ✔️Vendor registration and authentication<br/>
                    ✔️Token verification &amp; Email configuration<br/>
                    ✔️Vendor approval by admin, dashboards<br/>
                    <br/><br/><br/></p>
                </div>
                <div className="card--pizza--block__items">
                  <p className="">
                    ✔️Work with LocalStorage for site settings storage<br/>
                    ✔️Work with React Hooks<br/>
                    ✔️Prettier for code formatting<br/>
                    ✔️CSS-Modules / SCSS for styling<br/>
                    ✔️React Content Loader for skeletons<br/>
                    ✔️React Pagination for pagination<br/>
                    ✔️Lodash.Debounce for search optimization<br/>
                    ✔️Code Splitting, React Loadable, and useWhyDidYouUpdate integration<br/>
                    ✔️Make restaurant profile form &amp; custom validators<br/><br/><br/><br/></p>
                </div>
              </div>
              <a className="btn btn-primary" href="https://react-pizza-pet-project.netlify.app" target="_blank">Visit a website</a></div>
          </div>
        </div>

      </div>
    </div>

  );
};

export default Portfolio;
