"use strict";

// offices section
(function () {
  var initSlider = function initSlider(elem) {
    var slider1 = new Swiper(elem, {
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
        disableOnInteraction: false
      },
      breakpoints: {
        1100: {
          spaceBetween: 24
        }
      }
    });
  };

  var toggleOffice = function toggleOffice(event, btns, sliders, infos) {
    var btn = event.currentTarget;

    if (!btn || !btn.classList.contains('offices-section__toggle-item') || btn.classList.contains('offices-section__toggle-item--active')) {
      return;
    }

    btns.forEach(function (button) {
      button.classList.remove('offices-section__toggle-item--active');
    });
    var newActiveId = btn.dataset.officeId;
    btn.classList.add('offices-section__toggle-item--active');
    sliders.forEach(function (slider) {
      var sliderId = slider.dataset.officeId;

      if (sliderId === newActiveId) {
        slider.classList.remove('offices-section__slider--hidden');
        initSlider(slider);
      } else {
        slider.classList.add('offices-section__slider--hidden');
      }
    });
    infos.forEach(function (info) {
      var infoId = info.dataset.officeId;

      if (infoId === newActiveId) {
        info.classList.remove('offices-section__info--hidden');
      } else {
        info.classList.add('offices-section__info--hidden');
      }
    });
  };

  var initOffices = function initOffices() {
    var sliders = document.querySelectorAll('.js-office-slider');
    var infos = document.querySelectorAll('.js-office-info');
    var btns = document.querySelectorAll('.js-office-toggle');
    sliders.forEach(function (slider) {
      if (!slider.classList.contains('offices-section__slider--hidden')) {
        initSlider(slider);
      }
    });
    btns.forEach(function (btn) {
      btn.addEventListener('click', function (event) {
        return toggleOffice(event, btns, sliders, infos);
      });
    });
  };

  document.addEventListener('DOMContentLoaded', initOffices); // Final Photos

  var containers = [{
    containerClass: 'final-section__photo_1',
    intervalDuration: 3300
  }, {
    containerClass: 'final-section__photo_2',
    intervalDuration: 4520
  }, {
    containerClass: 'final-section__photo_3',
    intervalDuration: 7250
  }, {
    containerClass: 'final-section__photo_4',
    intervalDuration: 6600
  }, {
    containerClass: 'final-section__photo_5',
    intervalDuration: 9150
  }, {
    containerClass: 'final-section__photo_6',
    intervalDuration: 8260
  }, {
    containerClass: 'final-section__photo_7',
    intervalDuration: 11450
  }];

  function handleImageCycling(containerClass, intervalDuration) {
    var photoContainer = document.querySelector('.' + containerClass);
    var images = photoContainer.querySelectorAll('img');
    var currentIndex = 0;

    function updateImage() {
      images[currentIndex].classList.remove('show');
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add('show');
    }

    var intervalId = setInterval(updateImage, intervalDuration);

    function stopImageCycling() {
      clearInterval(intervalId);
    }

    var iterations = 0;
    var maxIterations = 10;

    if (iterations === maxIterations) {
      stopImageCycling();
    }
  }

  containers.forEach(function (container) {
    handleImageCycling(container.containerClass, container.intervalDuration);
  });
})();