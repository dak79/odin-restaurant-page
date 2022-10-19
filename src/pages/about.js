import { create, frozenGlass , cleanDisplay } from '../helpers/DOMmanipulation.js';

import '../styles/aboutUs.css';


export default function aboutUs() {
    
    cleanDisplay();
    frozenGlass();
    
    const glass = document.querySelector('#frozen-glass');
    const aboutUsText = create('p');
    aboutUsText.classList.add('about-us-text');

    aboutUsText.textContent = `
    If you are in searching of an healty and tasty coup of soup in Hamburg, do not miss the chance to try our menu. We are cooking only selected vegetable, grown with Biological Agricolture from sustainable farming production. 
    
    It's a nice place for a launch breack with your collegues or for taking back some energy at the end of your day. 
    
    Our dishes are a modern new interpretation of tarditional ones and many vegetarian and vegan choice are on our menu.
    
    If you prefere eating our soup at your place delivery service is available. `
    glass.appendChild(aboutUsText);
}