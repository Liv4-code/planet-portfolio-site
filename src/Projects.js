import "./Projects.scss";
import { Typewriter } from "react-simple-typewriter";

function Projects() {
    return (
        <div className="projects-container">
            <h2 className="projects-container__heading">
                <span className="heading__small">
                    <Typewriter
                        words={["", "Destination: Projects"]}
                        loop={1}
                        cursorStyle="_"
                        typeSpeed={80}
                        delaySpeed={2500}
                    />
                </span>
            </h2>
            <div className="projects">
                <div>
                    <div className="card">
                        <a
                            href="https://iotdashboard.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <h3 className="card_project-title">
                                IOT Device Dashboard
                            </h3>
                            <p className="card_project-description">
                                {" "}
                                A dynamic UI that pulls data from the Ubidots
                                Rest API and displays it in an interactive way,
                                through charts, tables and device comparison
                                cards.
                            </p>
                        </a>
                    </div>
                    <div className="card">
                        <a
                            href="https://lotus-interiors.netlify.app"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <h3 className="card_project-title">
                                Lotus Interiors Website
                            </h3>
                            <p className="card_project-description">
                                Using a mobile-first approach, this website is
                                fully responsive and was built with SCSS using
                                the BEM naming convention.
                            </p>
                        </a>
                    </div>
                    <div className="card">
                        <a
                            href="https://water-audit-tool.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <h3 className="card_project-title">
                                Multi-Step Audit Tool
                            </h3>
                            <p className="card_project-description">
                                {" "}
                                This multi-step input form is used to gather
                                information about a building's water-use
                                infrastructure. The data retrieved is used to
                                calculate savings and compiled into a report
                                that's sent upon final form submission.
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
