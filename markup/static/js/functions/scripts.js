// offices section
(function () {
    const initSlider = (elem) => {
        let slider1 = new Swiper(elem, {
            slidesPerView: 'auto',
            spaceBetween: 10,
            loop: true,
            shortSwipes: false,
            longSwipes: false,
            allowTouchMove: false,
            freeMode: true,
            speed: 160000,
            autoplay: {
                delay: 1,
                disableOnInteraction: false,
            },
            breakpoints: {
                1100: {
                    spaceBetween: 24,
                },
            },
        });
    };

    const toggleOffice = (event, btns, sliders, infos) => {
        const btn = event.currentTarget;
        if (
            !btn ||
            !btn.classList.contains('offices-section__toggle-item') ||
            btn.classList.contains('offices-section__toggle-item--active')
        ) {
            return;
        }

        btns.forEach((button) => {
            button.classList.remove('offices-section__toggle-item--active');
        });

        const newActiveId = btn.dataset.officeId;
        btn.classList.add('offices-section__toggle-item--active');

        sliders.forEach((slider) => {
            const sliderId = slider.dataset.officeId;
            if (sliderId === newActiveId) {
                slider.classList.remove('offices-section__slider--hidden');
                initSlider(slider);
            } else {
                slider.classList.add('offices-section__slider--hidden');
            }
        });

        infos.forEach((info) => {
            const infoId = info.dataset.officeId;
            if (infoId === newActiveId) {
                info.classList.remove('offices-section__info--hidden');
            } else {
                info.classList.add('offices-section__info--hidden');
            }
        });
    };

    const initOffices = () => {
        const sliders = document.querySelectorAll('.js-office-slider');
        const infos = document.querySelectorAll('.js-office-info');
        const btns = document.querySelectorAll('.js-office-toggle');

        sliders.forEach((slider) => {
            if (!slider.classList.contains('offices-section__slider--hidden')) {
                initSlider(slider);
            }
        });
        btns.forEach((btn) => {
            btn.addEventListener('click', (event) => toggleOffice(event, btns, sliders, infos));
        });
    };

    document.addEventListener('DOMContentLoaded', initOffices);



    // Final Photos
    const containers = [
        { containerClass: 'final-section__photo_1', intervalDuration: 3300 },
        { containerClass: 'final-section__photo_2', intervalDuration: 4520 },
        { containerClass: 'final-section__photo_3', intervalDuration: 7250 },
        { containerClass: 'final-section__photo_4', intervalDuration: 6600 },
        { containerClass: 'final-section__photo_5', intervalDuration: 9150 },
        { containerClass: 'final-section__photo_6', intervalDuration: 8260 },
        { containerClass: 'final-section__photo_7', intervalDuration: 11450 }
    ];

    function handleImageCycling(containerClass, intervalDuration) {
        const photoContainer = document.querySelector('.' + containerClass);
        const images = photoContainer.querySelectorAll('img');
        let currentIndex = 0;

        function updateImage() {
            images[currentIndex].classList.remove('show');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('show');
        }

        const intervalId = setInterval(updateImage, intervalDuration);

        function stopImageCycling() {
            clearInterval(intervalId);
        }

        let iterations = 0;
        const maxIterations = 10;

        if (iterations === maxIterations) {
            stopImageCycling();
        }
    }

    containers.forEach(function(container) {
        handleImageCycling(container.containerClass, container.intervalDuration);
    });
})();



