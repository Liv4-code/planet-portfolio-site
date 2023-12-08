import "./Contact.scss";
import { Typewriter } from "react-simple-typewriter";

function About() {
    return (
        <div className="about-container">
            <Typewriter
                words={["", "Destination: About"]}
                loop={1}
                cursor
                cursorStyle="_"
                typeSpeed={50}
                delaySpeed={2000}
            />
            <div className="about-glass-card">
                <h2 className="about-glass-card__heading">A Bit About Me</h2>
                <p className="about-glass-card__text">
                    At present, I have experience working with Javascript and
                    React. I would love to collaborate and accumulate invaluable
                    knowledge working alongside other developers. I take pride
                    in my work and since the name of the game is lifelong
                    learning, I'm sure to do just that in order to deliver
                    projects that exceed end user expectations. I'm currently
                    learning Redux as well as Node.js, and see myself growing
                    into a full-stack developer.
                </p>
            </div>
            {/* <div className="contact-glass-card">
                <h2 className="contact-glass-card__heading">Contact Me</h2>
                <p className="contact-glass-card__text">
                    To get in touch, please feel free to reach me over{" "}
                    <a href="mailto:olivia@ekowebsolutions.com">email</a>,{" "}
                    <a
                        href="https://www.linkedin.com/in/olivia-s-5a37b982/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>{" "}
                    or give me a <a href="tel:0822255451">call</a>.
                </p>
            </div> */}
        </div>
    );
}

export default About;
