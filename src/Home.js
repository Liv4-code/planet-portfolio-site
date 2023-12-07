import "./Home.scss";
import Typewriter from "typewriter-effect";
import sun from "./assets/sun.webp";

function Home() {
    return (
        <div className="home-container">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .pauseFor(1500)
                        .changeDelay(40)
                        .typeString("<h5>Destination: Home</h5>")
                        .start();
                }}
            />
            <div className="heading">
                <pre>
                    <h3>Welcome, distant traveller.</h3>
                </pre>
                <pre>
                    <h1>I'm Olivia, a web developer.</h1>
                </pre>
                <pre>
                    <h4>Come, explore my planet.</h4>
                </pre>
            </div>
            <div className="rising-sun">
                <img className="rising-sun__img" src={sun} alt="Rising Sun" />
            </div>
        </div>
    );
}

export default Home;
