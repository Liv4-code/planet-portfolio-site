import "./Projects.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import backgroundImg from "./assets/forest.webp";

function Projects() {
    return (
        <div className="projects-container">
            <LazyLoadImage
                className="projects-container__background"
                src={backgroundImg}
                alt="Lush Jungle Background"
            />
            <div className="projects">
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
                            A dynamic UI that pulls data from the Ubidots Rest
                            API and displays it in an interactive way, through
                            charts, tables and device comparison cards.
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
                            Using a mobile-first approach, this website is fully
                            responsive and was built with SCSS using the BEM
                            naming convention.
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
                            infrastructure. The data retrieved is then used to
                            calculate savings and is compiled into a report
                            that's sent upon final form submission.
                        </p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Projects;
