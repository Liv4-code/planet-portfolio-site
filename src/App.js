import Home from "./Home";
import "./App.scss";
import homeIcon from "./assets/home-1.svg";
import aboutIcon from "./assets/personal-collection.svg";
import projectsIcon from "./assets/projects.svg";
import contactIcon from "./assets/phone.svg";

function App() {
    return (
        <div className="container">
            <div>
                <Home />
            </div>
            <div className="navigation-container">
                <nav className="navigation">
                    <button className="navigation__button">
                        <span>
                            <img src={homeIcon} alt="Home Button Icon" />
                        </span>
                        {/* <span>Home</span> */}
                    </button>
                    <button className="navigation__button">
                        <span>
                            <img src={aboutIcon} alt="About Button Icon" />
                        </span>
                        {/* <span>About</span> */}
                    </button>
                    <button className="navigation__button">
                        <span>
                            <img
                                src={projectsIcon}
                                alt="Projects Button Icon"
                            />
                        </span>
                        {/* <span>Projects</span> */}
                    </button>
                    <button className="navigation__button">
                        <span>
                            <img src={contactIcon} alt="Contact Button Icon" />
                        </span>
                        {/* <span>Reach Out</span> */}
                    </button>
                </nav>
            </div>
        </div>
    );
}

export default App;
