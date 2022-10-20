/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 346:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./img-soup-0.jpg": 177,
	"./img-soup-1.jpg": 695,
	"./img-soup-2.jpg": 696,
	"./img-soup-3.jpg": 209,
	"./img-soup-4.jpg": 338,
	"./img-soup-5.jpg": 876,
	"./img-soup-6.jpg": 956
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 346;

/***/ }),

/***/ 177:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/imgs/abc858ed941b605bdb5e.jpg";

/***/ }),

/***/ 695:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/imgs/dc7fd3980c82c1342f74.jpg";

/***/ }),

/***/ 696:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/imgs/aec6de548682fae8f16b.jpg";

/***/ }),

/***/ 209:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/imgs/d8b0164ea1fa4aa2d7bf.jpg";

/***/ }),

/***/ 338:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/imgs/f94f51916e89351df128.jpg";

/***/ }),

/***/ 876:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/imgs/4f8d9f5fedefbf710463.jpg";

/***/ }),

/***/ 956:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/imgs/a1fdc27fa51cb98a472b.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// CONCATENATED MODULE: ./src/helpers/hooks.js
var content = document.querySelector('#content');
var hook = function hook(selector) {
  return document.querySelector(selector);
};
;// CONCATENATED MODULE: ./src/helpers/create.js
/**
 * Create a new element 
 * @param { Node } element 
 * @returns { Node } A new element
 */
var create = function create(element) {
  return document.createElement(element);
};
;// CONCATENATED MODULE: ./src/helpers/createAndClass.js
/**
 * Create a new element and add a class
 * @param { Node } element 
 * @param { String } className
 * @returns { Node } A new element with class
 */
var createAndClass = function createAndClass(element, className) {
  var el = document.createElement(element);
  el.classList.add(className);
  return el;
};
;// CONCATENATED MODULE: ./src/helpers/setAttributes.js
/**
 * Set multiple attributes to an elements
 * @param { Node } element - Element which needs multiple attributes.
 * @param { Objects } attributes - Object of attributes, attr name: attr value. 
 * @returns { Node } Elements with multiple attributes.
 */
var setAttributes = function setAttributes(element, attributes) {
  return Object.keys(attributes).forEach(function (attr) {
    return element.setAttribute(attr, attributes[attr]);
  });
};
;// CONCATENATED MODULE: ./src/helpers/appendChildren.js
/**
 * Append Children to a parent
 * @param { Node } parent - Parent Node
 * @param { Array } children - Children Nodes
 * @returns { Node } of children
 */
var appendChildren = function appendChildren(parent, children) {
  return children.forEach(function (child) {
    return parent.appendChild(child);
  });
};
;// CONCATENATED MODULE: ./src/helpers/lists.js





/**
 * Create a list
 * @param { Array } itemTitles 
 * @param { Node } itemsType 
 * @param { String } className 
 * @returns { Node } An unordered list
 */
var createList = function createList(itemTitles, itemsType, className) {
  var list = createAndClass('ul', className);
  itemTitles.forEach(function (title) {
    var listItem = create('li');
    var listItemContent = itemsType(title);
    listItem.appendChild(listItemContent);
    list.appendChild(listItem);
  });
  return list;
};

/**
 * Header Buttons
 * @param { Array } name 
 * @returns { Node } A button
 */
var headerButton = function headerButton(name) {
  var btn = create('button');
  setAttributes(btn, {
    type: 'button',
    id: "btn-".concat(name.replace(' ', '-').toLowerCase().trim()),
    "class": 'btn-menu'
  });
  btn.textContent = name;
  return btn;
};

/**
 * Soup on menu
 * @param { Object } soup 
 * @returns { Node } A div with image, price, title and description
 */

var menuItems = function menuItems(soup) {
  var soupImgSrc = __webpack_require__(346)("./".concat(soup.imageName));
  var soupItem = createAndClass('div', 'soup-items');
  var firstLine = createAndClass('div', 'first-line');
  var secondLine = createAndClass('div', 'second-line');
  appendChildren(soupItem, [firstLine, secondLine]);
  var soupImg = create('img');
  setAttributes(soupImg, {
    src: "".concat(soupImgSrc),
    alt: "".concat(soup.name),
    "class": 'soup-img'
  });
  var soupPrice = create('p');
  var soupCurrency = createAndClass('span', 'currency');
  soupPrice.textContent = soup.price;
  soupCurrency.textContent = soup.currency;
  soupPrice.appendChild(soupCurrency);
  appendChildren(firstLine, [soupImg, soupPrice]);
  var soupTitle = create('h3');
  soupTitle.textContent = soup.name;
  var soupText = createAndClass('p', 'soup-text');
  soupText.textContent = soup.description;
  appendChildren(secondLine, [soupTitle, soupText]);
  return soupItem;
};
;// CONCATENATED MODULE: ./src/components/header.js





function header() {
  var header = create('header');
  var nav = create('nav');
  var menu = createList(['Home', 'About Us', 'Menu', 'Contact'], headerButton, 'menu');
  var main = create('main');
  main.setAttribute('id', 'display-page');
  appendChildren(content, [header, main]);
  header.appendChild(nav);
  nav.appendChild(menu);
}
;// CONCATENATED MODULE: ./src/helpers/cleanDisplay.js
/**
 * Clean the display
 */
var cleanDisplay = function cleanDisplay() {
  var display = document.querySelector('#display-page');
  display.replaceChildren();
};
;// CONCATENATED MODULE: ./src/helpers/changeBg.js
/**
 * 
 * @param { URL } imgUrl 
 * @returns A new background image.
 */
var changeBgImg = function changeBgImg(imgUrl) {
  return document.body.style.backgroundImage = "url(".concat(imgUrl, ")");
};
;// CONCATENATED MODULE: ./src/assets/imgs/background/bg-home.jpg
const bg_home_namespaceObject = __webpack_require__.p + "assets/imgs/bc62b7be8f4a2fb1f5f3.jpg";
;// CONCATENATED MODULE: ./src/components/home.js



function homePage() {
  cleanDisplay();
  changeBgImg(bg_home_namespaceObject);
}
;// CONCATENATED MODULE: ./src/helpers/frozenGlass.js

/**
 * Create frozen glass effect as background
 */
var frozenGlass = function frozenGlass() {
  var hook = document.querySelector('#display-page');
  var glass = createAndClass('div', 'frozen');
  glass.setAttribute('id', 'frozen-glass');
  hook.appendChild(glass);
};
;// CONCATENATED MODULE: ./src/assets/imgs/background/bg-about.jpg
const bg_about_namespaceObject = __webpack_require__.p + "assets/imgs/f2151b470bf4550bc7b2.jpg";
;// CONCATENATED MODULE: ./src/components/about.js







function aboutUs() {
  cleanDisplay();
  frozenGlass();
  changeBgImg(bg_about_namespaceObject);
  var aboutUsText = createAndClass('p', 'about-us-text');
  aboutUsText.textContent = "\n    If you are in searching of an healty and tasty coup of soup in Hamburg, do not miss the chance to try our menu. We are cooking only selected vegetable, grown with Biological Agricolture from sustainable farming production. \n    \n    It's a nice place for a launch breack with your collegues or for taking back some energy at the end of your day. \n    \n    Our dishes are a modern new interpretation of tarditional ones and many vegetarian and vegan choice are on our menu.\n    \n    If you prefere eating our soup at your place delivery service is available.\n    ";
  hook('#frozen-glass').appendChild(aboutUsText);
}
;// CONCATENATED MODULE: ./src/assets/imgs/background/bg-menu.jpg
const bg_menu_namespaceObject = __webpack_require__.p + "assets/imgs/1bbfba93d3c60b080441.jpg";
;// CONCATENATED MODULE: ./src/components/menu.js







function menu() {
  cleanDisplay();
  frozenGlass();
  changeBgImg(bg_menu_namespaceObject);
  var soupOnMenu = createList([{
    name: 'Tomato Soup',
    price: '11',
    currency: '€',
    description: 'Fresh an juicy tomato with basil or rosemary.',
    imageName: 'img-soup-0.jpg'
  }, {
    name: 'Ginger Carrots Soup',
    price: '12',
    currency: '€',
    description: 'Spicy ginger in a fresh and sweet carrots soup.',
    imageName: 'img-soup-1.jpg'
  }, {
    name: 'Pumpkin Soup',
    price: '14',
    currency: '€',
    description: 'Sweet pumpkin soup with aged cheese.',
    imageName: 'img-soup-2.jpg'
  }, {
    name: 'Mashroom Soup',
    price: '16',
    currency: '€',
    description: 'Porcini and mixed mushrooms with fresh garlic and parsley.',
    imageName: 'img-soup-3.jpg'
  }, {
    name: 'Lentils Soup',
    price: '11',
    currency: '€',
    description: 'Nutrient stoved lensils with spicy red hot chilly on request.',
    imageName: 'img-soup-4.jpg'
  }, {
    name: 'Mixed Vegetables Soup',
    price: '13',
    currency: '€',
    description: 'Seasonal vegetables mixed: perfect for cold winters.',
    imageName: 'img-soup-5.jpg'
  }, {
    name: 'Meat Soup',
    price: '18',
    currency: '€',
    description: 'Juicy meat in a spicy tomato soup.',
    imageName: 'img-soup-6.jpg'
  }], menuItems, 'food');
  hook('#frozen-glass').appendChild(soupOnMenu);
}
;// CONCATENATED MODULE: ./src/assets/imgs/background/bg-contact.jpg
const bg_contact_namespaceObject = __webpack_require__.p + "assets/imgs/b5a7207f770d1477bb98.jpg";
;// CONCATENATED MODULE: ./src/components/contact.js









function contact() {
  cleanDisplay();
  frozenGlass();
  changeBgImg(bg_contact_namespaceObject);
  var container = createAndClass('div', 'container');
  var emailWrapper = create('div');
  var titleEmail = createAndClass('h2', 'contact-text');
  titleEmail.textContent = 'Email';
  var textEmail = createAndClass('p', 'contact-text');
  textEmail.textContent = 'my-soup@my-soup.com';
  appendChildren(emailWrapper, [titleEmail, textEmail]);
  var adressWrapper = create('div');
  var titleAdress = createAndClass('h2', 'contact-text');
  titleAdress.textContent = 'Adress';
  var textAdress = createAndClass('p', 'contact-text');
  textAdress.textContent = "Soup Strasse, 22\n\n    12345 Soup City";
  appendChildren(adressWrapper, [titleAdress, textAdress]);
  var telWrapper = create('div');
  var titleTel = createAndClass('h2', 'contact-text');
  titleTel.textContent = 'Telephone';
  var textTel = createAndClass('p', 'contact-text');
  textTel.textContent = '001 234 567 7890';
  appendChildren(telWrapper, [titleTel, textTel]);
  appendChildren(container, [emailWrapper, adressWrapper, telWrapper]);
  appendChildren(hook('#frozen-glass'), [container]);
}
;// CONCATENATED MODULE: ./src/index.js







// First load
header();
homePage();

// Event handlers
document.querySelector('#btn-home').addEventListener('click', homePage);
document.querySelector('#btn-about-us').addEventListener('click', aboutUs);
document.querySelector('#btn-menu').addEventListener('click', menu);
document.querySelector('#btn-contact').addEventListener('click', contact);
})();

/******/ })()
;