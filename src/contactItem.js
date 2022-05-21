import { configStyle } from "./zonks";

const containerStyle = {

}

const addressStyle = {
    "font-family": "Jetbrains Mono",
    "background-color": "#141414",
    "color": "white",
}

const titleStyle = {
    "font-family": "Sails",
}

const svgStyle = {

}

export default function contactItem (config) {
    const {} = config;

    const container = document.createElement("div");
    configStyle(container, containerStyle);

    return container;
}