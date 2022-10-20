import header from './components/header';
import homePage from './components/home';
import aboutUs from './components/about';
import menu from './components/menu';
import contact from './components/contact';
import './styles/main.css';

// First load
header();
homePage();

// Event handlers
document.querySelector('#btn-home').addEventListener('click', homePage);
document.querySelector('#btn-about-us').addEventListener('click', aboutUs);
document.querySelector('#btn-menu').addEventListener('click', menu);
document.querySelector('#btn-contact').addEventListener('click', contact);