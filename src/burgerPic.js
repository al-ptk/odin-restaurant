import { configStyle } from './zonks';

const frameStyle = {
    "background-color": "white",
    "margin": "20px",
    "width": "30%",
    "max-width": "350px",
    "aspect-ratio": "4 / 3",
    "flex": "0 1 auto"
}

const picStyle = {
    "background-color": "black",
    "width": "90%",
    "height": "78%",
    "margin": "5%"
}

export default function burgerPicFactory (url, tilt) {

    const frame = document.createElement('div');
    frame.style.setProperty("transform", `rotate(${3*tilt}deg)`);
    configStyle (frame, frameStyle);

    const pic = document.createElement('img');
    configStyle(pic, picStyle);
    frame.appendChild(pic);

    return frame
}