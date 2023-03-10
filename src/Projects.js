import "./Projects.scss";

function Projects() {
    return (
        <div className="container">
            <div className="projects">
                <div className="card">
                    <a href="https://iotdashboard.netlify.app/" target="_blank">
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
                    <a href="#" target="_blank">
                        <h3 className="card_project-title">
                            Interior Design Website
                        </h3>
                        <p className="card_project-description">
                            Another Project
                        </p>
                    </a>
                </div>
                <div className="card">
                    <a href="https://www.wateraudit.ca/" target="_blank">
                        <h3 className="card_project-title">
                            Multi-Step Audit Tool
                        </h3>
                        <p className="card_project-description">
                            {" "}
                            This multi-step input form is used to gather
                            detailed information about a building's water-use
                            infrastructure. The data retrieved in this tool is
                            used to calculate usage cost savings and thereafter,
                            is compiled into a report that's sent to the user
                            upon completion.
                        </p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Projects;
