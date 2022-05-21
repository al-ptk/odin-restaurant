import { configStyle } from "./zonks"


const boardStyle = {
    "width": "300px",
    "height": "300px",
    "border": "2px solid black",
    "background-color": "white",
}

export default function boardComponent () {
    const container = document.createElement('div')
    configStyle(container, boardStyle)

    return container
}