export const content = document.querySelector('#content');

export const create = element => document.createElement(element);

const setAttributes = (element, attributes) => Object.keys(attributes).forEach(attr => element.setAttribute(attr, attributes[attr]));

export const createList = (length, text) => {
    const list = create('ul');
    list.classList.add('menu');
    for (let i = 0; i < length; i++) {
        const listItem = create('li');
        const listBtn = create('button');
        setAttributes(listBtn, {
            type: 'button',
            id: text[i].replace(' ', '-').toLowerCase().trim(),
            class: 'btn-menu'
        });

        listBtn.textContent = text[i];
        listItem.appendChild(listBtn);
        list.appendChild(listItem);

    }

    return list
}