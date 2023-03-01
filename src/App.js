import Home from "./Home";
import "./App.scss";

function App() {
    return (
        <div className="container">
            <div>
                <Home />
            </div>
            <div className="navigation-container">
                <nav className="navigation">
                    <button className="navigation__button">
                        <a href="#">
                            <span>Home</span>
                        </a>
                    </button>
                    <button className="navigation__button">
                        <a href="#">
                            <span>About</span>
                        </a>
                    </button>
                    <button className="navigation__button">
                        <a href="#">
                            <span>Projects</span>
                        </a>
                    </button>
                    <button className="navigation__button">
                        <a href="#">
                            <span>Reach Out</span>
                        </a>
                    </button>
                </nav>
            </div>
        </div>
    );
}

export default App;
