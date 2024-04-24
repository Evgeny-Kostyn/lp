// offices section
(function () {
    const toggleOffice = (event, btns, grids, infos) => {
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

        grids.forEach((grid) => {
            const gridId = grid.dataset.officeId;
            if (gridId === newActiveId) {
              grid.classList.remove('offices-section__grid--hidden');
            } else {
              grid.classList.add('offices-section__grid--hidden');
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
        const grids = document.querySelectorAll('.js-office-grid');
        const infos = document.querySelectorAll('.js-office-info');
        const btns = document.querySelectorAll('.js-office-toggle');

        btns.forEach((btn) => {
            btn.addEventListener('click', (event) => toggleOffice(event, btns, grids, infos));
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
        { containerClass: 'final-section__photo_7', intervalDuration: 11450 },
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

    containers.forEach(function (container) {
        handleImageCycling(container.containerClass, container.intervalDuration);
    });



    // Copy Slide
    const aboutSections = document.querySelectorAll('.copy-section__about');
    const imageElements = document.querySelectorAll('.copy-section__image');

    function handleIntersection(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const dataAbout = entry.target.getAttribute('data-about');

                const targetImage = document.querySelector(`.copy-section__image[data-image="${dataAbout}"]`);

                imageElements.forEach(function(image) {
                    image.classList.remove('copy-section__image_active');
                });

                if (targetImage) {
                    targetImage.classList.add('copy-section__image_active');
                }
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

    aboutSections.forEach(function(about) {
        observer.observe(about);
    });
})();
