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
 