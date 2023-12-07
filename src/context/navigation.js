import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

// To create lifting off effect:
// Listen to when any nav button is clicked
// Call function that changes scale and x-translation of component container
// Only navigate once 2 secs are up

function NavigationProvider({ children }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener("popstate", handler);

        return () => {
            window.removeEventListener("popstate", handler);
        };
    }, []);

    const navigate = (to) => {
        window.history.pushState({}, "", to);
        setCurrentPath(to);
    };

    return (
        <NavigationContext.Provider value={{ currentPath, navigate }}>
            {children}
        </NavigationContext.Provider>
    );
}

export { NavigationProvider };
export default NavigationContext;
