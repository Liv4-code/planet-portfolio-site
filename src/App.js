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
                        <a href="#">Home</a>
                    </button>
                    <button className="navigation__button">
                        <a href="#">About</a>
                    </button>
                    <button className="navigation__button">
                        <a href="#">Projects</a>
                    </button>
                    <button className="navigation__button">
                        <a href="#">Get In Touch</a>
                    </button>
                </nav>
            </div>
        </div>
    );
}

export default App;
