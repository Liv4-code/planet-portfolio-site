import "./Home.scss";
import { Typewriter } from "react-simple-typewriter";
import sun from "./assets/sun.webp";

function Home() {
    return (
        <div className="home-container">
            <span>
                <Typewriter
                    words={["", "Destination: Home"]}
                    loop={1}
                    cursor
                    cursorStyle="_"
                    typeSpeed={50}
                    delaySpeed={2800}
                />
            </span>
            <div className="heading">
                <h3>Welcome, distant traveller.</h3>
                <h1>I'm Olivia, a web developer.</h1>
                <h4>Come, explore my planet.</h4>
            </div>
            <div className="rising-sun">
                <img className="rising-sun__img" src={sun} alt="Rising Sun" />
            </div>
        </div>
    );
}

export default Home;
