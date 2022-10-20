import { cleanDisplay } from '../helpers/cleanDisplay';
import { frozenGlass } from '../helpers/frozenGlass';
import { changeBgImg } from '../helpers/changeBg';
import contactBgImg from '../assets/imgs/background/bg-contact.jpg';

export default function contact() {

    cleanDisplay();
    frozenGlass();
    changeBgImg(contactBgImg);
    
    console.log('Contact Page');
}