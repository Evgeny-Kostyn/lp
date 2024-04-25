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
