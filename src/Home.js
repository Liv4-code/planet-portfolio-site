import "./Home.scss";
import backgroundImage from "./images/desert-sand-landscape.jpeg";

function Home() {
    return (
        <div>
            <img
                src={backgroundImage}
                alt="Home Page Background"
                style={{ width: "100vw" }}
            />
        </div>
    );
}

export default Home;
