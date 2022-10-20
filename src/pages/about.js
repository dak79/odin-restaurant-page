import { createAndClass, frozenGlass , cleanDisplay, changeBgImg } from '../helpers/DOMmanipulation.js';
import aboutBgImage from '../assets/imgs/background/bg-about.jpg'


import '../styles/aboutUs.css';


export default function aboutUs() {
    
    cleanDisplay();
    frozenGlass();
    changeBgImg(aboutBgImage);

    
    const glass = document.querySelector('#frozen-glass');
    const aboutUsText = createAndClass('p', 'about-us-text');

    aboutUsText.textContent = `
    If you are in searching of an healty and tasty coup of soup in Hamburg, do not miss the chance to try our menu. We are cooking only selected vegetable, grown with Biological Agricolture from sustainable farming production. 
    
    It's a nice place for a launch breack with your collegues or for taking back some energy at the end of your day. 
    
    Our dishes are a modern new interpretation of tarditional ones and many vegetarian and vegan choice are on our menu.
    
    If you prefere eating our soup at your place delivery service is available.
    `
    glass.appendChild(aboutUsText);
}