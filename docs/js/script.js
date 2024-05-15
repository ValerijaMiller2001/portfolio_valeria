import accordion from './modules/accordion';
import bg from './modules/bg';
import cards from './modules/cards';
import hamburger from './modules/hamburger';
import header from './modules/header';
import slider from './modules/slider';
import arrowUp from './modules/arrowup';




window.addEventListener('DOMContentLoaded', () => {
    accordion('.questions_wrapper_item', '.questions_wrapper_item-descr', '.questions_wrapper_item_header-arrow');
    bg();
    hamburger('.promo_hamburger_block', '.menu', '.menu_close', '.menu_link');
    header('.promo_hamburger', '.menu');
    slider({
        sliderSelector: '.portfolio_slider', 
        wrapperSelector: '.portfolio_wrapper', 
        itemSelector: '.portfolio_item', 
        blockSelector: '.portfolio_block', 
        prewSelector: '.portfolio_prew', 
        nextSelector: '.portfolio_next'
    });
    cards('.services_item_main-btn', '.services_item_detail-btn', '.services_item_main', '.services_item_detail');
    arrowUp('.promo_up');
})



