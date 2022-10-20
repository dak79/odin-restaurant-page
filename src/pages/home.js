import { cleanDisplay, changeBgImg } from "../helpers/DOMmanipulation.js";
import homeBgImage from '../assets/imgs/background/bg-home.jpg';


export default function homePage() {
    cleanDisplay();
    changeBgImg(homeBgImage)
    console.log('HOME PAGE');
}