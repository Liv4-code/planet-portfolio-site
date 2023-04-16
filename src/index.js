import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NavigationProvider } from "./context/navigation.js";

const el = document.querySelector("#root");

const root = ReactDOM.createRoot(el);

window.addEventListener("load", () => {
    // console.log();
    console.log("loaded");
});

root.render(
    <NavigationProvider>
        <App />
    </NavigationProvider>
);
