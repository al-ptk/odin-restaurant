import blackBG from './blackBG.jpg';
import badgeFile from './badge.svg';

const root = document.querySelector("#content");

root.style.backgroundColor = "black"; 
root.style.width = "100vw";
root.style.height = "100vh";
root.style.background = `url(${blackBG})`;

const badge = document.createElement('img');
badge.src = badgeFile;

root.appendChild(badge);