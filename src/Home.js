import "./Home.scss";
import { Typewriter } from "react-simple-typewriter";
import { gsap } from "gsap";

// setting global animations timeline
const timeline = gsap.timeline({
    defaults: { duration: 1.5, ease: "power1.out" },
});

timeline.fromTo(".heading", { y: "-2vh" }, { y: 0 });
timeline.fromTo(".heading", { opacity: 0 }, { opacity: 1 }, "<");

function Home() {
    return (
        <div className="home-container">
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
