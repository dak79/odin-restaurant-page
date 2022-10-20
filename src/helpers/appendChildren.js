/**
 * Append Children to a parent
 * @param { Node } parent - Parent Node
 * @param { Array } children - Children Nodes
 * @returns { Node } of children
 */
 export const appendChildren = (parent, children) => children.forEach(child => parent.appendChild(child));
 