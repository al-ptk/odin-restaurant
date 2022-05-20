import { configStyle, p } from './zonks';
import fontSetup from './fontSetup.css';
import strokeBanner from "./strokebanner.png";

const containerStyle = {
    "width": "30%",
    "max-width": "350px",
    "margin": "20px",
    "aspect-ratio": "4 / 3",
    "flex": "0 1 auto",
    "display": "flex",
    "flex-wrap": "wrap",
    // "border": "1px solid white",
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
    "margin": "5%",
}

const bannerStyle = {
    "width": "258px",
    "height": "68px",
    "background-image": `url(${strokeBanner})`,
    "display": "flex",
    "justify-content": "center",
    "align-items": "center",
    "color": "white",
    "font-family": "Sail",
    "font-size": "30px"
}

const ingriStyle = {
    "border-radius": "25px",
    "background-color": "white",
    "color": "black",
    "font-family": "JetBrains Mono",
    "font-size": "14px",
    "letter-spacing": ".3px",
    "padding": "5px",
}

export default function burgerPicFactory (settings) {
    const {url, tilt, name, description} = settings;

    const container = document.createElement('div');
    configStyle (container, containerStyle);

    const frame = document.createElement('div');
    container.appendChild(frame);
    frame.style.setProperty("transform", `rotate(${3*tilt}deg)`);
    configStyle (frame, frameStyle);

    const pic = document.createElement('img');
    configStyle(pic, picStyle);
    frame.appendChild(pic);

    const info = document.createElement('div');
    container.appendChild(info);
    info.style.setProperty("border", "1px solid white")

    const banner = document.createElement('div');
    configStyle(banner, bannerStyle);
    banner.textContent = name || "Burguer Name";
    info.appendChild(banner);

    const ingridients = document.createElement('div');
    configStyle(ingridients, ingriStyle);
    ingridients.textContent = description;
    info.appendChild(ingridients);

    return container
}