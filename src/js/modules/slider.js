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
export default slider;