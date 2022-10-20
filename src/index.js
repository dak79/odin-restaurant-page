import header from './pages/header.js';
import homePage from './pages/home.js';
import aboutUs from './pages/about.js';
import menu from './pages/menu.js';
import contact from './pages/contact.js';
import './styles/main.css';


header();
homePage();




// loadpage for event handler
document.querySelector('#btn-home').addEventListener('click', homePage);
document.querySelector('#btn-about-us').addEventListener('click', aboutUs);
document.querySelector('#btn-menu').addEventListener('click', menu);
document.querySelector('#btn-contact').addEventListener('click', contact);