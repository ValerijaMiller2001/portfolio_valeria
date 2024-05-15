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
export default arrowUp;