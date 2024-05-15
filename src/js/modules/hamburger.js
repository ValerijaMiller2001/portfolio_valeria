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
export default hamburger;