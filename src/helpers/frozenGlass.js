import { createAndClass } from "./createAndClass";
/**
 * Create frozen glass effect as background
 */
 export const frozenGlass  = () => { 
    const hook = document.querySelector('#display-page');
    const glass = createAndClass('div', 'frozen');
    glass.setAttribute('id', 'frozen-glass');
    
    hook.appendChild(glass);
}
