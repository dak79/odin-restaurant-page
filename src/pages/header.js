import { content, create, createList, appendChildren } from '../helpers/DOMmanipulation.js';
import '../styles/header.css';

export default function header() {
    const header = create('header');
    const nav = create('nav');
    const menu = createList(['Home', 'About Us', 'Menu', 'Contact']);
    const main = create('main');
    main.setAttribute('id', '#display-page')
    
    appendChildren(content, [header, main]);
    header.appendChild(nav);
    nav.appendChild(menu);
}