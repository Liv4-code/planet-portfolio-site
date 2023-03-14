import "./Home.scss";
import Typewriter from "typewriter-effect";

function Home() {
    return (
        <div className="home-container">
            <div className="heading">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .changeDelay(60)
                            .typeString("<h2>Welcome, distant traveller</h2>")
                            .typeString("<h1>My name is Olivia</h1>")
                            .typeString("<h1>I'm a web developer</h1>")
                            .pauseFor(500)
                            .typeString("<h3>Come...</h3>")
                            .pauseFor(1000)
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
