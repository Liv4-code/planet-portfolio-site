// import Home from "./Home";
import About from "./About";
// import Projects from "./Projects";
// import Contact from "./Contact";
import "./App.scss";
import homeIcon from "./assets/home-1.svg";
import aboutIcon from "./assets/personal-collection.svg";
import projectsIcon from "./assets/projects.svg";
import contactIcon from "./assets/phone.svg";

function App() {
    return (
        <div className="container">
            <div>
                {/* <Home /> */}
                <About />
                {/* <Projects /> */}
                {/* <Contact /> */}
            </div>
            <div className="navigation-container">
                <nav className="navigation">
                    <button className="navigation__button">
                        <span>
                            <img
                                className="navigation__button-icon"
                                src={homeIcon}
                                alt="Home Button Icon"
                            />
                            <p className="navigation__button-text">Home</p>
                        </span>
                    </button>
                    <button className="navigation__button">
                        <span>
                            <img
                                className="navigation__button-icon"
                                src={aboutIcon}
                                alt="About Button Icon"
                            />
                            <p className="navigation__button-text">About</p>
                        </span>
                    </button>
                    <button className="navigation__button">
                        <span>
                            <img
                                className="navigation__button-icon"
                                src={projectsIcon}
                                alt="Projects Button Icon"
                            />
                            <p className="navigation__button-text">Projects</p>
                        </span>
                    </button>
                    <button className="navigation__button">
                        <span>
                            <img
                                className="navigation__button-icon"
                                src={contactIcon}
                                alt="Contact Button Icon"
                            />
                            <p className="navigation__button-text">Contact</p>
                        </span>
                    </button>
                </nav>
            </div>
        </div>
    );
}

export default App;
