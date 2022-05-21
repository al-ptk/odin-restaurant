import board from "./signBoard";
import { configStyle } from "./zonks";

const menuContainerStyle = {
    "width": "90%",
    "height": "80vh",
    "border": "1px solid white",
    "margin": "10vh auto",
    "display": "flex",
    "flex-flow": "column wrap",
}

export default function menuComponent () {
    const container = document.createElement('h1');
    configStyle(container, menuContainerStyle);

    container.appendChild(board());
    

    return container
}