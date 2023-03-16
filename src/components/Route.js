import { useContext } from "react";
import NavigationContext from "../context/navigation";

function Route({ path, children }) {
    const { currentPath } = useContext(NavigationContext);
    // const navigationPanel = document.querySelector(".navigation");

    if (path === currentPath) {
        // console.log(navigationPanel.childNodes[3]);
        // if (path === "/") {
        //     console.log("yes");
        // } else if (path === "/about") {
        //     console.log("yes");
        // } else if (path === "/projects") {
        //     console.log("yes");
        // } else if (path === "/contact") {
        //     console.log("yes");
        // }
        // console.log(path);
        return children;
    }

    return null;
}
export default Route;
