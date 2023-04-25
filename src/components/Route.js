import { useContext } from "react";
import NavigationContext from "../context/navigation";

function Route({ path, children }) {
    const { currentPath } = useContext(NavigationContext);
    const navigationPanel = document.querySelector(".navigation");

    if (path === currentPath) {
        if (path === "/" && navigationPanel) {
            navigationPanel.childNodes[1].childNodes[1].classList.add(
                "navigation_display__light--current"
            );
            navigationPanel.childNodes[2].childNodes[1].classList.remove(
                "navigation_display__light--current"
            );
            navigationPanel.childNodes[3].childNodes[1].classList.remove(
                "navigation_display__light--current"
            );
            navigationPanel.childNodes[4].childNodes[1].classList.remove(
                "navigation_display__light--current"
            );
        } else if (path === "/about" && navigationPanel) {
            navigationPanel.childNodes[1].childNodes[1].classList.remove(
                "navigation_display__light--current"
            );
            navigationPanel.childNodes[2].childNodes[1].classList.add(
                "navigation_display__light--current"
            );
            navigationPanel.childNodes[3].childNodes[1].classList.remove(
                "navigation_display__light--current"
            );
            navigationPanel.childNodes[4].childNodes[1].classList.remove(
                "navigation_display__light--current"
            );
        } else if (path === "/projects" && navigationPanel) {
            navigationPanel.childNodes[1].childNodes[1].classList.remove(
                "navigation_display__light--current"
            );
            navigationPanel.childNodes[2].childNodes[1].classList.remove(
                "navigation_display__light--current"
            );
            navigationPanel.childNodes[3].childNodes[1].classList.add(
                "navigation_display__light--current"
            );
            navigationPanel.childNodes[4].childNodes[1].classList.remove(
                "navigation_display__light--current"
            );
        } else if (path === "/contact" && navigationPanel) {
            navigationPanel.childNodes[1].childNodes[1].classList.remove(
                "navigation_display__light--current"
            );
            navigationPanel.childNodes[2].childNodes[1].classList.remove(
                "navigation_display__light--current"
            );
            navigationPanel.childNodes[3].childNodes[1].classList.remove(
                "navigation_display__light--current"
            );
            navigationPanel.childNodes[4].childNodes[1].classList.add(
                "navigation_display__light--current"
            );
        }
        return children;
    }

    return null;
}
export default Route;
