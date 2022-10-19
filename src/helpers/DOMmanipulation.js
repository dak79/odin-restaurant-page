export const content = document.querySelector('#content');

/**
 * Create a new element 
 * @param { Node } element 
 * @returns { Node } A new element
 */
export const create = element => document.createElement(element);

/**
 * Create a new element and add a class
 * @param { Node } element 
 * @param { String } className
 * @returns { Node } A new element with class
 */
 export const createAndClass = (element, className) => {
    const el = document.createElement(element);
    el.classList.add(className);

    return el;
 }

/**
 * Set multiple attributes to an elements
 * @param { Node } element - Element which needs multiple attributes.
 * @param { Objects } attributes - Object of attributes, attr name: attr value. 
 * @returns { Node } Elements with multiple attributes.
 */
const setAttributes = (element, attributes) => Object.keys(attributes).forEach(attr => element.setAttribute(attr, attributes[attr]));

/**
 * Append Children to a parent
 * @param { Node } parent - Parent Node
 * @param { Array } children - Children Nodes
 * @returns { Node } of children
 */
export const appendChildren = (parent, children) => children.forEach(child => parent.appendChild(child));

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
    const soupImgSrc = require(`../assets/imgs/menu/img-soup-${soup.image}.jpg`);
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

/**
 * Create frozen glass effect as background
 */
export const frozenGlass  = () => { 
    const hook = document.querySelector('#display-page');
    const glass = createAndClass('div', 'frozen');
    glass.setAttribute('id', 'frozen-glass');
    
    hook.appendChild(glass);
}

/**
 * Clean the display
 */
export const cleanDisplay = () => {
    const display = document.querySelector('#display-page');
    display.replaceChildren();
}