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