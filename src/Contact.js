import "./Contact.scss";

function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-glass-card">
                <h2 className="contact-glass-card__heading">Contact Me</h2>
                <p className="contact-glass-card__text">
                    To get in touch, please feel free to reach me over{" "}
                    <a href="mailto:scholtz.ice@gmail.com">email</a>,{" "}
                    <a
                        href="https://www.linkedin.com/in/olivia-s-5a37b982/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>{" "}
                    or give me a call on +27 82 225 5451.
                </p>
            </div>
        </div>
    );
}

export default Contact;
