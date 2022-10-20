import { frozenGlass, cleanDisplay, changeBgImg } from "../helpers/DOMmanipulation.js";
import contactBgImg from '../assets/imgs/background/bg-contact.jpg';

export default function contact() {

    cleanDisplay();
    frozenGlass();
    changeBgImg(contactBgImg);
    
    console.log('Contact Page');
}