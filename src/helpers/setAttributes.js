/**
 * Set multiple attributes to an elements
 * @param { Node } element - Element which needs multiple attributes.
 * @param { Objects } attributes - Object of attributes, attr name: attr value. 
 * @returns { Node } Elements with multiple attributes.
 */
 export const setAttributes = (element, attributes) => Object.keys(attributes).forEach(attr => element.setAttribute(attr, attributes[attr]));
 