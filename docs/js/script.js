document.addEventListener('DOMContentLoaded', () => {
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


    /* Гамбургер */
    const hamburger = document.querySelector('.promo_hamburger_block'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu_close'),
        menuList = document.querySelector('.menu_list'),
        items = menuList.querySelectorAll('.menu_link');

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

    //Меню становится черным при скролле
    const arrowUp = document.querySelector('.promo_up');
    const promoHamburger = document.querySelector('.promo_hamburger');
    window.addEventListener('scroll', (e) => {
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
        //Стрелка вверх
        if (window.pageYOffset >= 800) {
            arrowUp.style.display = 'block';
            arrowUp.style.transition = '0.9s';
        } else {
            arrowUp.style.display = 'none';
        }
    });


    // Переключение услуг
    const mainBtn = document.querySelectorAll('.services_item_main-btn');
    const detailBtn = document.querySelectorAll('.services_item_detail-btn');
    const servicesMain = document.querySelectorAll('.services_item_main');
    const servicesDetail = document.querySelectorAll('.services_item_detail');
    for (i = 0; i < mainBtn.length; i++) {
        let main_win = servicesMain[i]
        let detail_win = servicesDetail[i]
        mainBtn[i].addEventListener('click', () => {
            main_win.classList.remove('active');
            main_win.style.display = 'none';
            detail_win.classList.add('active', 'fade');
            detail_win.style.display = 'block';
        })
    }
    for (i = 0; i < detailBtn.length; i++) {
        let main_win = servicesMain[i]
        let detail_win = servicesDetail[i]
        detailBtn[i].addEventListener('click', () => {
            detail_win.classList.remove('active');
            detail_win.style.display = 'none';
            main_win.classList.add('active', 'fade');
            main_win.style.display = 'block';
        })
    }

    //FAQ 

    const accordionItems = document.querySelectorAll('.questions_wrapper_item');

    accordionItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const accordionContent = this.querySelector('.questions_wrapper_item-descr');
            const accordionArrow = this.querySelector('.questions_wrapper_item_header-arrow');

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
        const accordionContents = document.querySelectorAll('.questions_wrapper_item-descr');
        const accordionArrows = document.querySelectorAll('.questions_wrapper_item_header-arrow');

        accordionContents.forEach(function(content) {
            content.classList.remove('show');
            content.classList.add('hide');
        });

        accordionArrows.forEach(function(arrow) {
            arrow.classList.remove('rotate');
        });
    }



})


