import "./Contact.scss";

function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-glass-card">
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
            </div>
        </div>
    );
}

export default Contact;
