import { createAndClass } from './createAndClass';
import { create } from './create';
import { setAttributes } from './setAttributes';
import { appendChildren } from './appendChildren';

/**
 * Create a list
 * @param { Array } itemTitles 
 * @param { Node } itemsType 
 * @param { String } className 
 * @returns { Node } An unordered list
 */
 export const createList = (itemTitles, itemsType, className) => {
    const list = createAndClass('ul', className);

    itemTitles.forEach(title => {
        const listItem = create('li');
        const listItemContent = itemsType(title);

        listItem.appendChild(listItemContent);
        list.appendChild(listItem);
    })
    
    return list
}

/**
 * Header Buttons
 * @param { Array } name 
 * @returns { Node } A button
 */
export const headerButton = (name) => {
    const btn = create('button');
    setAttributes(btn, {
        type: 'button',
        id: `btn-${name.replace(' ', '-').toLowerCase().trim()}`,
        class: 'btn-menu'
    });
    btn.textContent = name;

    return btn
}

/**
 * Soup on menu
 * @param { Object } soup 
 * @returns { Node } A div with image, price, title and description
 */

export const menuItems = (soup) => {
    const soupImgSrc = require(`../assets/imgs/menu/${soup.imageName}`);
    const soupItem = createAndClass('div', 'soup-items');
    const firstLine = createAndClass('div', 'first-line');
    const secondLine = createAndClass('div', 'second-line');
    
    appendChildren(soupItem, [firstLine, secondLine]);

    const soupImg = create('img');
    setAttributes(soupImg, {
        src: `${soupImgSrc}`,
        alt: `${soup.name}`,
        class: 'soup-img'
    });

    const soupPrice = create('p');
    const soupCurrency = createAndClass('span', 'currency');
    soupPrice.textContent = soup.price;
    soupCurrency.textContent = soup.currency;
    soupPrice.appendChild(soupCurrency)
    appendChildren(firstLine, [soupImg, soupPrice]);
    
    const soupTitle = create('h3');
    soupTitle.textContent = soup.name;

    const soupText = createAndClass('p', 'soup-text');
    soupText.textContent = soup.description;
    appendChildren(secondLine, [soupTitle, soupText]);

    return soupItem;
}
