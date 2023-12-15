import "./Home.scss";
import { Typewriter } from "react-simple-typewriter";
// import img from "./assets/Mobile-Home.png";

function Home() {
    return (
        <div className="home-container">
            {/* <img src={img} alt="Desert Landscape Background" /> */}
            <h5>
                <Typewriter
                    words={["", "Destination: Home"]}
                    loop={1}
                    cursor
                    cursorStyle="_"
                    typeSpeed={50}
                    delaySpeed={2500}
                />
            </h5>
            <div className="heading">
                <h3>Welcome, distant traveller.</h3>
                <h1>I'm Olivia, a web developer.</h1>
                <h4>Come, explore my world.</h4>
            </div>
        </div>
    );
}

export default Home;
