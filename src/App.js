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
                        <span>Home</span>
                    </button>
                    <button className="navigation__button">
                        <span>About</span>
                    </button>
                    <button className="navigation__button">
                        <span>Projects</span>
                    </button>
                    <button className="navigation__button">
                        <span>Reach Out</span>
                    </button>
                </nav>
            </div>
        </div>
    );
}

export default App;
