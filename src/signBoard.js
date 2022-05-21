import { configStyle, p } from "./zonks"


const boardStyle = {
    "height": "fit-content",
    "border": "4px solid black",
    "border-radius": "35px",
    "background-color": "white",
    "padding": "10px 20px",
    "flex": "1 1 auto"
}

const boardTitleStyle = {
    "margin-bottom": "10px",
    "font-family": "Sail",
}

const boardItemStyle = {
    "font-size": "20px",
    "font-weight": "400",
    "text-align": "justify",
    "font-family": "Jetbrains Mono",
}

export default function boardComponent (boardConfig) {
    const {title, items, localStyling} = boardConfig;

    const container = document.createElement('div');
    configStyle(container, boardStyle);
    configStyle(container, localStyling);

    const titleElem = document.createElement("h3");
    configStyle(titleElem, boardTitleStyle);
    titleElem.textContent = title;
    container.appendChild(titleElem);

    for (const item in items) {
        const elem = document.createElement("p");
        configStyle(elem, boardItemStyle);
        elem.textContent = `${item} ------ ${items[item]}`
        container.appendChild(elem);
    }

    return container
}