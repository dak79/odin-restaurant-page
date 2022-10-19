import { frozenGlass, cleanDisplay, createList, menuItems } from "../helpers/DOMmanipulation.js";
import '../styles/menu.css';

export default function menu() {

    cleanDisplay();
    frozenGlass();
    
    const glass = document.querySelector('#frozen-glass');
    const soupOnMenu = createList(
        [
            {
                name: 'Tomato Soup',
                price: '11',
                currency: '€',
                description: 'Fresh an juicy tomato with basil or rosemary.', image: 0
            },
            {
                name: 'Ginger Carrots Soup',
                price: '12',
                currency: '€',
                description: 'Spicy ginger in a fresh and sweet carrots soup.', image: 1
            },
            {
                name: 'Pumpkin Soup',
                price: '14',
                currency: '€',
                description: 'Sweet pumpkin soup with aged cheese.',
                image: 2
            },
            {
                name: 'Mashroom Soup',
                price: '16',
                currency: '€',
                description: 'Porcini and mixed mushrooms with fresh garlic and parsley.',
                image: 3
            },
            {
                name: 'Lentils Soup',
                price: '11',
                currency: '€',
                description: 'Nutrient stoved lensils with spicy red hot chilly on request.',
                image: 4
            },
            {
                name: 'Mixed Vegetables Soup',
                price: '13',
                currency: '€',
                description: 'Seasonal vegetables mixed: perfect for cold winters.',
                image: 5
            },
            {
                name: 'Meat Soup',
                price: '18',
                currency: '€',
                description: 'Juicy meat in a spicy tomato soup.',
                image: 6
            }
        ], menuItems, 'food');

    glass.appendChild(soupOnMenu);
}