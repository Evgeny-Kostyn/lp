"use strict";

// offices section
(function () {
  var toggleOffice = function toggleOffice(event, btns, grids, infos) {
    var btn = event.currentTarget;

    if (!btn || !btn.classList.contains('offices-section__toggle-item') || btn.classList.contains('offices-section__toggle-item--active')) {
      return;
    }

    btns.forEach(function (button) {
      button.classList.remove('offices-section__toggle-item--active');
    });
    var newActiveId = btn.dataset.officeId;
    btn.classList.add('offices-section__toggle-item--active');
    grids.forEach(function (grid) {
      var gridId = grid.dataset.officeId;

      if (gridId === newActiveId) {
        grid.classList.remove('offices-section__grid--hidden');
      } else {
        grid.classList.add('offices-section__grid--hidden');
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
    var grids = document.querySelectorAll('.js-office-grid');
    var infos = document.querySelectorAll('.js-office-info');
    var btns = document.querySelectorAll('.js-office-toggle');
    btns.forEach(function (btn) {
      btn.addEventListener('click', function (event) {
        return toggleOffice(event, btns, grids, infos);
      });
    });
  };

  document.addEventListener('DOMContentLoaded', initOffices); // Copy Slide

  var aboutSections = document.querySelectorAll('.copy-section__about');
  var imageElements = document.querySelectorAll('.copy-section__image');

  function handleIntersection(entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var dataAbout = entry.target.getAttribute('data-about');
        var targetImage = document.querySelector(".copy-section__image[data-image=\"".concat(dataAbout, "\"]"));
        imageElements.forEach(function (image) {
          image.classList.remove('copy-section__image_active');
        });

        if (targetImage) {
          targetImage.classList.add('copy-section__image_active');
        }
      }
    });
  }

  var observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5
  });
  aboutSections.forEach(function (about) {
    observer.observe(about);
  });
})();