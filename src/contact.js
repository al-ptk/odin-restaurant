import { configStyle } from "./zonks";

const contactContainerStyle = {
    "border": "1px solid white",
    "margin": "10vh auto",
    "width": "90%",
    "height": "80vh",
}

export default function menuComponent () {
    const container = document.createElement('h1');
    configStyle(container, contactContainerStyle);

    return container
}