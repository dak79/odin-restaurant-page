import { content, create, createList } from '../helpers/DOMmanipulation.js';
import '../styles/header.css';

export default function header() {
    const header = create('header');
    const nav = create('nav');
    const menu = createList(4, ['Home', 'About Us', 'Menu', 'Contact']);
    const main = create('main');

    content.appendChild(header);
    header.appendChild(nav);
    nav.appendChild(menu);
    content.appendChild(main);
}