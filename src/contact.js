import { configStyle } from "./zonks";

const sillyStyle = {
    "color": "white",
    "margin": "300px auto",
}

export default function menuComponent () {
    const container = document.createElement('h1');
    container.textContent = "Welcome to Contact, Mortal";
    configStyle(container, sillyStyle);

    return container
}