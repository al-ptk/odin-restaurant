import { configStyle } from './zonks';
import fontSetup from './fontSetup.css';
import strokeBanner from "./strokebanner.svg";

const containerStyle = {
    "width": "30%",
    "max-width": "350px",
    "margin": "20px",
    "aspect-ratio": "4 / 3",
    "flex": "0 1 auto",
    "border": "1px solid white",
    // "background-color": "#aaa"
}

const frameStyle = {
    "background-color": "white",
    "width": "100%",
    "height": "100%",
}

const picStyle = {
    "background-color": "black",
    "width": "90%",
    "height": "78%",
    "margin": "5%"
}

const titleStyle = {
    "display":"block",
    "background-image": `url(${strokeBanner})`
}

export default function burgerPicFactory (settings) {
    const {url, tilt, name, description} = {settings};

    const container = document.createElement('div');
    configStyle (container, containerStyle);

    const frame = document.createElement('div');
    container.appendChild(frame);
    frame.style.setProperty("transform", `rotate(${3*tilt}deg)`);
    configStyle (frame, frameStyle);

    const pic = document.createElement('img');
    configStyle(pic, picStyle);
    frame.appendChild(pic);

    const burgerTitle = document.createElement('h3');
    container.appendChild(burgerTitle)
    burgerTitle.classList.add('sail');
    burgerTitle.textContent = "Burger Name";


    return container
}