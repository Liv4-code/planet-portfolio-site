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
                            .typeString("<h3>Welcome, distant traveller</h3>")
                            .typeString("<h2>My name is Olivia</h2>")
                            .typeString("<h1>I'm a web developer</h1>")
                            .typeString("<h3>Come...</h3>")
                            .pauseFor(500)
                            .deleteChars(7)
                            .typeString("<h3>Explore my planet</h3>")
                            .start();
                    }}
                />
            </div>
        </div>
    );
}

export default Home;
