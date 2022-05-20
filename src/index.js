import blackBG from './blackBG.jpg';
import home from './home.js';
import { configStyle } from './zonks.js';

const root = document.querySelector("#content");
const rootStyle = {
    "position": "fixed",
    "background-color": "black",
    "background-image": `url(${blackBG})`,
    "width": "100vw",
    "height": "100vh"
}
configStyle(root, rootStyle);

root.appendChild(home()); 

const headerStyle = {
    "position": "fixed",
    "top": "0",
    "left": "0",
    "width": "100vw",
    "height": "60px",
    "background-color": "#141414",
    "display": "flex",
    "justify-content": "space-around",
}

const header = document.createElement("header");
configStyle(header, headerStyle);
root.appendChild(header);