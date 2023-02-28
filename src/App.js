import { useState } from "react";
import Home from "./Home";
import "./App.scss";

function getRandomAnimal() {
    const animals = ["cat", "dog", "gator", "cow", "bird", "horse"];

    return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
    return (
        <div>
            <div>"You are currently on planet " + "Home"</div>
            <div>
                <Home />
            </div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Get In Touch</li>
                </ul>
            </nav>
        </div>
    );
}

export default App;
