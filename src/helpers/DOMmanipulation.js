
export const content = document.querySelector('#content');


/**
 * 
 * @param { Node } element 
 * @returns A new element
 */
export const create = element => document.createElement(element);

/**
 * 
 * @param { Node } element - Element which needs multiple attributes.
 * @param { Objects } attributes - Object of attributes, attr name: attr value. 
 * @returns Elements with multiple attributes.
 */
const setAttributes = (element, attributes) => Object.keys(attributes).forEach(attr => element.setAttribute(attr, attributes[attr]));

/**
 * 
 * @param { Node } parent - Parent Node
 * @param { Array } children - Children Nodes
 * @returns nodeList of children
 */
export const appendChildren = (parent, children) => children.forEach(child => parent.appendChild(child));

/**
 * 
 * @param { Array } menuTitles - Titles nav bar items
 * @returns Nav bar
 */
export const createList = (menuTitles) => {
    const list = create('ul');
    list.classList.add('menu');

    menuTitles.forEach(title => {
        const listItem = create('li');
        const listBtn = create('button');
        setAttributes(listBtn, {
            type: 'button',
            id: `btn-${title.replace(' ', '-').toLowerCase().trim()}`,
            class: 'btn-menu'
        });

        listBtn.textContent = title;
        listItem.appendChild(listBtn);
        list.appendChild(listItem);
    })
    
    return list
}

export const frozenGlass  = () => { 
    const glass = create('div');
    glass.setAttribute('id', 'frozen-glass');
    const hook = document.querySelector('#display-page');
    glass.classList.add('frozen');
    hook.appendChild(glass);
}

export const cleanDisplay = () => {
    const display = document.querySelector('#display-page');
    display.replaceChildren();
}