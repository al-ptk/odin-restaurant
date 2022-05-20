import * as zonks from './zonks';
import logoFile from './logo.svg';

export default function logoFactory (style) {
    const logo = document.createElement('img');
    logo.src = logoFile;
    zonks.configStyle(logo, style);
    return logo
}