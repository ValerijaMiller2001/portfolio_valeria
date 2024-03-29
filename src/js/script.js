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
const hamburger = document.querySelector('.promo_hamburger'),
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

const arrowUp = document.querySelector('.promo_up');
window.addEventListener('scroll', (e) => {
    let activeted = false;
    if ( activeted === false) {
        if (window.pageYOffset >= 1) {
            menu.style.backgroundColor = 'black';
            menu.style.transition = '0.9s';
            hamburger.style.backgroundColor = 'black';
            hamburger.style.transition = '0.9s';
            activeted = true;
        } else {
            menu.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
            menu.style.transition = '0.9s';
            hamburger.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
            hamburger.style.transition = '0.9s';
            activeted = false;
        }
    } 
    if (window.pageYOffset >= 800) {
        arrowUp.style.display = 'block';
        arrowUp.style.transition = '0.9s';
    } else {
        arrowUp.style.display = 'none';
    }
});


const mainBtn = document.querySelectorAll('.services_item_main-btn');
const detailBtn = document.querySelectorAll('.services_item_detail-btn');
const servicesMain = document.querySelectorAll('.services_item_main');
const servicesDetail = document.querySelectorAll('.services_item_detail');
// console.log(mainBtn);
// console.log(detailBtn);
// console.log(servicesMain);
// console.log(servicesDetail);

// mainBtn.forEach((item) => {
//     item.addEventListener('click', (e) => {
//         console.log('dsfsgs');
//         for 
//         servicesMain[].classList.remove('active');
//     });
// })


//Переключение услуг
for (i = 0; i < mainBtn.length; i++) {
    let main_win = servicesMain[i]
    let detail_win = servicesDetail[i]
    mainBtn[i].addEventListener('click', () => {
        main_win.classList.remove('active');
        main_win.style.display = 'none';
        detail_win.classList.add('active');
        detail_win.style.display = 'block';
    })
}
for (i = 0; i < detailBtn.length; i++) {
    let main_win = servicesMain[i]
    let detail_win = servicesDetail[i]
    detailBtn[i].addEventListener('click', () => {
        detail_win.classList.remove('active');
        detail_win.style.display = 'none';
        main_win.classList.add('active');
        main_win.style.display = 'block';
    })
}


