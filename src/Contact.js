import "./Contact.scss";
import { Typewriter } from "react-simple-typewriter";

function Contact() {
    return (
        <div className="contact-container">
            <h5>
                <Typewriter
                    words={["", "Destination: Contact"]}
                    loop={1}
                    cursorStyle="_"
                    typeSpeed={80}
                    delaySpeed={2000}
                />
            </h5>
            <div className="contact-glass-card">
                <h2 className="contact-glass-card__heading">A Bit About Me</h2>
                <p className="contact-glass-card__about-text">
                    At present, I have experience working with Javascript and
                    React.js. I would love to collaborate with and work
                    alongside other developers in order to deliver projects that
                    exceed user expectations. I'm currently learning Redux, and
                    see myself growing into a full-stack developer.
                </p>
                <p className="contact-glass-card__text contact-text">
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
            </div>
        </div>
    );
}

export default Contact;
