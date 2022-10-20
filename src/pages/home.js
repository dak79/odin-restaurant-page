import { cleanDisplay } from '../helpers/cleanDisplay';
import { changeBgImg } from '../helpers/changeBg';
import homeBgImage from '../assets/imgs/background/bg-home.jpg';

export default function homePage() {
    cleanDisplay();
    changeBgImg(homeBgImage);
}