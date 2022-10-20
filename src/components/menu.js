import { cleanDisplay } from '../helpers/cleanDisplay';
import { frozenGlass } from '../helpers/frozenGlass';
import { changeBgImg } from '../helpers/changeBg';
import { createList, menuItems } from '../helpers/lists';
import { hook } from '../helpers/hooks';
import menuBgImage from '../assets/imgs/background/bg-menu.jpg'
import '../styles/menu.css';

export default function menu() {

    cleanDisplay();
    frozenGlass();
    changeBgImg(menuBgImage);
    
    const soupOnMenu = createList(
        [
            {
                name: 'Tomato Soup',
                price: '11',
                currency: '€',
                description: 'Fresh an juicy tomato with basil or rosemary.', imageName: 'img-soup-0.jpg'
            },
            {
                name: 'Ginger Carrots Soup',
                price: '12',
                currency: '€',
                description: 'Spicy ginger in a fresh and sweet carrots soup.',
                imageName: 'img-soup-1.jpg'
            },
            {
                name: 'Pumpkin Soup',
                price: '14',
                currency: '€',
                description: 'Sweet pumpkin soup with aged cheese.',
                imageName: 'img-soup-2.jpg'
            },
            {
                name: 'Mashroom Soup',
                price: '16',
                currency: '€',
                description: 'Porcini and mixed mushrooms with fresh garlic and parsley.',
                imageName: 'img-soup-3.jpg'
            },
            {
                name: 'Lentils Soup',
                price: '11',
                currency: '€',
                description: 'Nutrient stoved lensils with spicy red hot chilly on request.',
                imageName: 'img-soup-4.jpg'
            },
            {
                name: 'Mixed Vegetables Soup',
                price: '13',
                currency: '€',
                description: 'Seasonal vegetables mixed: perfect for cold winters.',
                imageName: 'img-soup-5.jpg'
            },
            {
                name: 'Meat Soup',
                price: '18',
                currency: '€',
                description: 'Juicy meat in a spicy tomato soup.',
                imageName: 'img-soup-6.jpg'
            }
        ], menuItems, 'food');

    hook('#frozen-glass').appendChild(soupOnMenu);
}
