import { cleanDisplay } from '../helpers/cleanDisplay';
import { frozenGlass } from '../helpers/frozenGlass';
import { changeBgImg } from '../helpers/changeBg';
import { createAndClass } from '../helpers/createAndClass';
import { create } from '../helpers/create';
import { appendChildren } from '../helpers/appendChildren';
import { hook } from '../helpers/hooks';
import contactBgImg from '../assets/imgs/background/bg-contact.jpg';
import '../styles/contact.css';


export default function contact() {

    cleanDisplay();
    frozenGlass();
    changeBgImg(contactBgImg);

    const container = createAndClass('div', 'container');

    const emailWrapper = create('div');
    const titleEmail = createAndClass('h2', 'contact-text');
    titleEmail.textContent = 'Email';
    const textEmail = createAndClass('p', 'contact-text');
    textEmail.textContent = 'my-soup@my-soup.com';
    appendChildren(emailWrapper, [titleEmail, textEmail]);

    const adressWrapper = create('div');
    const titleAdress = createAndClass('h2', 'contact-text');
    titleAdress.textContent = 'Adress'
    const textAdress = createAndClass('p', 'contact-text');
    textAdress.textContent = `Soup Strasse, 22

    12345 Soup City`;
    appendChildren(adressWrapper, [titleAdress, textAdress]);

    const telWrapper = create('div');
    const titleTel = createAndClass('h2', 'contact-text');
    titleTel.textContent = 'Telephone'
    const textTel = createAndClass('p', 'contact-text');
    textTel.textContent = '001 234 567 7890';
    appendChildren(telWrapper, [titleTel, textTel]);

    appendChildren(container, [emailWrapper, adressWrapper, telWrapper]);
    appendChildren(hook('#frozen-glass'), [container]);
}