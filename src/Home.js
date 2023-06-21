import "./Home.scss";
import Typewriter from "typewriter-effect";

function Home() {
    return (
        <div className="home-container">
            <div className="heading">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .pauseFor(1000)
                            .changeDelay(50)
                            .typeString("<h3>Welcome, distant traveller.</h3>")
                            .pauseFor(500)
                            .typeString("<h1>My name is Olivia.</h1>")
                            .pauseFor(500)
                            .typeString("<h1>I'm a web developer.</h1>")
                            .pauseFor(300)
                            .changeDelay(100)
                            .typeString("<h4>Come, explore my world</h4>")
                            .start();
                    }}
                />
            </div>
        </div>
    );
}

export default Home;
