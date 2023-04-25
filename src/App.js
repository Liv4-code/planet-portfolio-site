import Link from "./components/Link";
import Route from "./components/Route";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import "./App.scss";
import homeIcon from "./assets/home-1.svg";
import aboutIcon from "./assets/personal-collection.svg";
import projectsIcon from "./assets/projects.svg";
import contactIcon from "./assets/phone.svg";

function App() {
    return (
        <div className="container">
            <div>
                <Route path="/">
                    <Home path="/" />
                </Route>
                <Route path="/about">
                    <About path="/about" />
                </Route>
                <Route path="/projects">
                    <Projects path="/projects" />
                </Route>
                <Route path="/contact">
                    <Contact path="/contact" />
                </Route>
            </div>
            <div className="navigation-container">
                <nav className="navigation">
                    <div className="board">
                        <div className="wrap board__first-switch">
                            <input type="checkbox"></input>
                            <div className="button"></div>
                        </div>
                        <div className="wrap board__second-switch">
                            <input type="checkbox"></input>
                            <div className="button"></div>
                        </div>
                        <div className="wrap board__third-switch">
                            <input type="checkbox"></input>
                            <div className="button"></div>
                        </div>
                    </div>
                    <div className="navigation_display">
                        <Link to="/">
                            <button className="navigation__button">
                                <img
                                    className="navigation__button-icon"
                                    src={homeIcon}
                                    alt="Home Button Icon"
                                />
                                <p className="navigation__button-text">Home</p>
                            </button>
                        </Link>
                        <div className="navigation_display__light navigation_display__light--current"></div>
                    </div>
                    <div className="navigation_display">
                        <Link to="/about">
                            <button className="navigation__button">
                                <img
                                    className="navigation__button-icon"
                                    src={aboutIcon}
                                    alt="About Button Icon"
                                />
                                <p className="navigation__button-text">About</p>
                            </button>
                        </Link>
                        <div className="navigation_display__light"></div>
                    </div>

                    <div className="navigation_display">
                        <Link to="/projects">
                            <button className="navigation__button">
                                <img
                                    className="navigation__button-icon"
                                    src={projectsIcon}
                                    alt="Projects Button Icon"
                                />
                                <p className="navigation__button-text">
                                    Projects
                                </p>
                            </button>
                        </Link>
                        <div className="navigation_display__light"></div>
                    </div>

                    <div className="navigation_display">
                        <Link to="/contact">
                            <button className="navigation__button">
                                <img
                                    className="navigation__button-icon"
                                    src={contactIcon}
                                    alt="Contact Button Icon"
                                />
                                <p className="navigation__button-text">
                                    Contact
                                </p>
                            </button>
                        </Link>
                        <div className="navigation_display__light"></div>
                    </div>
                    <div className="radars-container">
                        <div className="radar radar__first">
                            <div className="radar__scanner radar__scanner--fast"></div>
                        </div>
                        <div className="radar radar__second">
                            <div className="radar__scanner radar__scanner--slow"></div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default App;
