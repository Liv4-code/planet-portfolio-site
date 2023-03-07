import "./Contact.scss";

function Contact() {
    return (
        <div className="container">
            <div className="glass-card">
                <h2 className="glass-card__heading">Contact Me</h2>
                <p className="glass-card__text">
                    To get in touch, please feel free to reach me over{" "}
                    <a href="mailto:scholtz.ice@gmail.com">email</a>,{" "}
                    <a
                        href="https://www.linkedin.com/in/olivia-s-5a37b982/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>{" "}
                    or simply give me a call on +27 82 225 5451.
                </p>
            </div>
        </div>
    );
}

export default Contact;
