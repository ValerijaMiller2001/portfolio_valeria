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
export default cards;













