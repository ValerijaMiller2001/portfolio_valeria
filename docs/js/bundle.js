/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function accordion(itemSelector, descrSelector, arrowSelector) {
    //FAQ 

    const accordionItems = document.querySelectorAll(itemSelector);

    accordionItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const accordionContent = this.querySelector(descrSelector);
            const accordionArrow = this.querySelector(arrowSelector);

            if (accordionContent.classList.contains('show')) {
                accordionContent.classList.remove('show');
                accordionContent.classList.add('hide');
                accordionArrow.classList.remove('rotate');
            } else {
                closeAllAccordionItems();
                accordionContent.classList.remove('hide');
                accordionContent.classList.add('show');
                accordionArrow.classList.add('rotate');

            }
        });
    });

    function closeAllAccordionItems() {
        const accordionContents = document.querySelectorAll(descrSelector);
        const accordionArrows = document.querySelectorAll(arrowSelector);

        accordionContents.forEach(function(content) {
            content.classList.remove('show');
            content.classList.add('hide');
        });

        accordionArrows.forEach(function(arrow) {
            arrow.classList.remove('rotate');
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordion);

/***/ }),

/***/ "./src/js/modules/arrowup.js":
/*!***********************************!*\
  !*** ./src/js/modules/arrowup.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function arrowUp(arrowUpSelector) {
    const arrowUp = document.querySelector(arrowUpSelector);

    window.addEventListener('scroll', () => {
        //Стрелка вверх
        if (window.pageYOffset >= 800) {
            arrowUp.style.display = 'block';
            arrowUp.style.transition = '0.9s';
        } else {
            arrowUp.style.display = 'none';
        }
    })
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrowUp);

/***/ }),

/***/ "./src/js/modules/bg.js":
/*!******************************!*\
  !*** ./src/js/modules/bg.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function bg() {
    //Главный фон
    VANTA.NET({
        el: ".promo",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x7214e1,
        backgroundColor: 0x0,
        points: 18.00,
        maxDistance: 26.00,
        spacing: 14.00
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bg);

/***/ }),

/***/ "./src/js/modules/cards.js":
/*!*********************************!*\
  !*** ./src/js/modules/cards.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function cards(btnMainSelector, btnDetailSelector, cardMainSelector, cardDetailSelector) {
    // Переключение услуг

    const mainBtn = document.querySelectorAll(btnMainSelector);
    const detailBtn = document.querySelectorAll(btnDetailSelector);
    const servicesMain = document.querySelectorAll(cardMainSelector);
    const servicesDetail = document.querySelectorAll(cardDetailSelector);

    mainBtn.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            servicesMain[index].classList.remove('active');
            servicesMain[index].style.display = 'none';
            servicesDetail[index].classList.add('active', 'fade');
            servicesDetail[index].style.display = 'block';
        })
    })

    detailBtn.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            servicesDetail[index].classList.remove('active');
            servicesDetail[index].style.display = 'none';
            servicesMain[index].classList.add('active', 'fade');
            servicesMain[index].style.display = 'block';
        })
    })
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);















/***/ }),

/***/ "./src/js/modules/hamburger.js":
/*!*************************************!*\
  !*** ./src/js/modules/hamburger.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function hamburger(hamburgerBlockSelector, menuSelector, closeSelector, menuLinkSelector) {
    /* Гамбургер */
    const hamburger = document.querySelector(hamburgerBlockSelector);
    const menu = document.querySelector(menuSelector);
    const closeElem = document.querySelector(closeSelector);
    const items = document.querySelectorAll(menuLinkSelector);

    hamburger.addEventListener('click', () => {
        document.body.classList.toggle('_lock');
        menu.classList.add('active');
    });

    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
        document.body.classList.remove('_lock');
    });

    for (let i = 0; i < items.length; i++){
        items[i].addEventListener('click', () => {
            menu.classList.remove('active');
            document.body.classList.remove('_lock');
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hamburger);

/***/ }),

/***/ "./src/js/modules/header.js":
/*!**********************************!*\
  !*** ./src/js/modules/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function header(hamburgerSelector, menuSelector) {
    //Меню становится черным при скролле
    const promoHamburger = document.querySelector(hamburgerSelector);
    const menu = document.querySelector(menuSelector);
    
    window.addEventListener('scroll', () => {
        let activeted = false;
        if ( activeted === false) {
            if (window.pageYOffset >= 1) {
                menu.style.backgroundColor = 'black';
                menu.style.transition = '0.9s';
                promoHamburger.style.backgroundColor = 'black';
                promoHamburger.style.transition = '0.9s';
                activeted = true;
            } else {
                menu.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
                menu.style.transition = '0.9s';
                promoHamburger.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
                promoHamburger.style.transition = '0.9s';
                activeted = false;
            }
        } 
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider({sliderSelector, wrapperSelector, itemSelector, blockSelector, prewSelector, nextSelector}) {
    //Portfolio

    const portfolioSlider = document.querySelector(sliderSelector);
    const portfolioWrapper = document.querySelector(wrapperSelector);
    const portfolioItem = document.querySelectorAll(itemSelector);
    const portfolioBlock = document.querySelector(blockSelector);
    const portfolioPrew = document.querySelector(prewSelector);
    const portfolioNext = document.querySelector(nextSelector);
    const portfolioWidth = window.getComputedStyle(portfolioWrapper).width;
    let slideIndex = 1;
    let offset = 0;
    let touchStartX = 0;
    let touchEndX = 0;

    if (window.screen.width > 768) {
        portfolioBlock.style.display = 'grid';
    } else {
        portfolioBlock.style.display = 'flex';
        portfolioBlock.style.width = 100 * portfolioItem.length + '%';
        portfolioItem.forEach(slide => {
            slide.style.width = portfolioWidth;
        });

        const indicators = document.createElement('ol');
        const dots = [];
        indicators.classList.add('portfolio_indicators');
        portfolioSlider.append(indicators);

        for (let i = 0; i < portfolioItem.length; i++) {
            const dot = document.createElement('li');
            dot.setAttribute('data-slide-to', i + 1);
            dot.classList.add('portfolio_dot');
            if (i == 0) {
                dot.style.opacity = 1;
            }
            indicators.append(dot);
            dots.push(dot);
        }

        function showOpacityDots() {
            dots.forEach(dot => {
                dot.style.opacity = '0.5';
            });
            dots[slideIndex - 1].style.opacity = '1';
        }

        function nextSlide() {
            if (offset == +portfolioWidth.slice(0, portfolioWidth.length - 2) * (portfolioItem.length - 1)) {
                offset = 0;
            } else {
                offset += +portfolioWidth.slice(0, portfolioWidth.length - 2);
            }

            portfolioBlock.style.transform = `translateX(-${offset}px)`;
            if (slideIndex == portfolioItem.length) {
                slideIndex = 1;
            } else {
                slideIndex++;
            }
            showOpacityDots();
        }

        function prewSlide() {
            if (offset == 0) {
                offset = +portfolioWidth.slice(0, portfolioWidth.length - 2) * (portfolioItem.length - 1);
            } else {
                offset -= +portfolioWidth.slice(0, portfolioWidth.length - 2);
            }

            portfolioBlock.style.transform = `translateX(-${offset}px)`;
            if (slideIndex == 1) {
                slideIndex = portfolioItem.length;
            } else {
                slideIndex--;
            }
            showOpacityDots();
        }

        function handleSwipe() {
            const swipeLength = touchEndX - touchStartX;
            if (Math.abs(swipeLength) > 50) {
                if (swipeLength < 0) {
                    nextSlide();
                } else {
                    prewSlide();
                }
            }
        }

        portfolioWrapper.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
        });
        portfolioWrapper.addEventListener('touchmove', (e) => {
            touchEndX = e.touches[0].clientX;
        });
        portfolioWrapper.addEventListener('touchend', () => {
            handleSwipe();
        });

        

        portfolioNext.addEventListener('click', () => {
            nextSlide();
        });

        portfolioPrew.addEventListener('click', () => {
            prewSlide();
        });

        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                const slideTo = e.target.getAttribute('data-slide-to');
                slideIndex = slideTo;
                offset = +portfolioWidth.slice(0, portfolioWidth.length - 2) * (slideTo - 1);
                portfolioBlock.style.transform = `translateX(-${offset}px)`;
                showOpacityDots();
            });
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/accordion */ "./src/js/modules/accordion.js");
/* harmony import */ var _modules_bg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/bg */ "./src/js/modules/bg.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/cards */ "./src/js/modules/cards.js");
/* harmony import */ var _modules_hamburger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/hamburger */ "./src/js/modules/hamburger.js");
/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/header */ "./src/js/modules/header.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_arrowup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/arrowup */ "./src/js/modules/arrowup.js");











window.addEventListener('DOMContentLoaded', () => {
    (0,_modules_accordion__WEBPACK_IMPORTED_MODULE_0__["default"])('.questions_wrapper_item', '.questions_wrapper_item-descr', '.questions_wrapper_item_header-arrow');
    (0,_modules_bg__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_modules_hamburger__WEBPACK_IMPORTED_MODULE_3__["default"])('.promo_hamburger_block', '.menu', '.menu_close', '.menu_link');
    (0,_modules_header__WEBPACK_IMPORTED_MODULE_4__["default"])('.promo_hamburger', '.menu');
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__["default"])({
        sliderSelector: '.portfolio_slider', 
        wrapperSelector: '.portfolio_wrapper', 
        itemSelector: '.portfolio_item', 
        blockSelector: '.portfolio_block', 
        prewSelector: '.portfolio_prew', 
        nextSelector: '.portfolio_next'
    });
    (0,_modules_cards__WEBPACK_IMPORTED_MODULE_2__["default"])('.services_item_main-btn', '.services_item_detail-btn', '.services_item_main', '.services_item_detail');
    (0,_modules_arrowup__WEBPACK_IMPORTED_MODULE_6__["default"])('.promo_up');
})




})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map