function cards() {
    // Переключение услуг

    const mainBtn = document.querySelectorAll('.services_item_main-btn');
    const detailBtn = document.querySelectorAll('.services_item_detail-btn');
    const servicesMain = document.querySelectorAll('.services_item_main');
    const servicesDetail = document.querySelectorAll('.services_item_detail');

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













