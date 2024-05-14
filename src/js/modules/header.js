function header() {
    //Меню становится черным при скролле
    const arrowUp = document.querySelector('.promo_up');
    const promoHamburger = document.querySelector('.promo_hamburger');
    const menu = document.querySelector('.menu');
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
}
export default header;