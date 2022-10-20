import { content } from '../helpers/hooks';
import { create } from '../helpers/create';
import { createList, headerButton } from '../helpers/lists';
import { appendChildren } from '../helpers/appendChildren';
import '../styles/header.css';

export default function header() {
    const header = create('header');
    const nav = create('nav');
    const menu = createList(['Home', 'About Us', 'Menu', 'Contact'], headerButton, 'menu');
    const main = create('main');
    main.setAttribute('id', 'display-page')

    appendChildren(content, [header, main]);
    header.appendChild(nav);
    nav.appendChild(menu);
}