"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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
  }); // Copy Slide

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
})(); // img comparison


(function () {
  var comparison = function comparison() {
    (function () {
      'use strict';

      var t = {
        792: function _(t, e, i) {
          i.d(e, {
            Z: function Z() {
              return n;
            }
          });
          var s = i(609),
              o = i.n(s)()(function (t) {
            return t[1];
          });
          o.push([t.id, ':host{--divider-width: 2px;--divider-color: currentColor;--divider-shadow: none;--default-handle-width: 50px;--default-handle-color: currentColor;--default-handle-opacity: 1;--default-handle-shadow: none;--handle-position-start: 50%;position:relative;display:inline-block;overflow:hidden;line-height:0;direction:ltr}@media screen and (-webkit-min-device-pixel-ratio: 0)and (min-resolution: 0.001dpcm){:host{outline-offset:1px}}::slotted(*){-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;user-drag:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.first{position:absolute;left:0;top:0;right:0;line-height:normal;font-size:100%;max-height:100%;height:100%;width:100%;--exposure: 80%;--keyboard-transition-time: 0ms;--default-transition-time: 0ms;--transition-time: var(--default-transition-time)}.first .first-overlay-container{position:relative;clip-path:inset(0 var(--exposure) 0 0);transition:clip-path var(--transition-time);height:100%}.first .first-overlay{overflow:hidden;height:100%}.first.focused{will-change:clip-path}.first.focused .first-overlay-container{will-change:clip-path}.second{position:absolute;inset:0}.handle-container{transform:translateX(50%);position:absolute;top:0;right:var(--exposure);height:100%;transition:right var(--transition-time),bottom var(--transition-time)}.focused .handle-container{will-change:right}.divider{position:absolute;height:100%;width:100%;left:0;top:0;display:flex;align-items:center;justify-content:center;flex-direction:column;padding-inline: 2rem;margin-left: -2rem;cursor:pointer;}.divider:after{content:" ";display:block;height:100%;border-left-width:var(--divider-width);border-left-style:solid;border-left-color:var(--divider-color);box-shadow:var(--divider-shadow);cursor: pointer;}.handle{position:absolute;top:var(--handle-position-start);cursor: pointer;box-sizing:border-box;margin-left:1px;transform:translate(calc(-50% - 0.5px), -50%);line-height:0}.default-handle{width:var(--default-handle-width);opacity:var(--default-handle-opacity);transition:all 1s;filter:drop-shadow(var(--default-handle-shadow))}.default-handle path{stroke:var(--default-handle-color)}.vertical .first-overlay-container{clip-path:inset(0 0 var(--exposure) 0)}.vertical .handle-container{transform:translateY(50%);height:auto;top:unset;bottom:var(--exposure);width:100%;left:0;flex-direction:row}.vertical .divider:after{height:1px;width:100%;border-top-width:var(--divider-width);border-top-style:solid;border-top-color:var(--divider-color);border-left:0;cursor: pointer;}.vertical .handle{top:auto;left:var(--handle-position-start);transform:translate(calc(-50% - 0.5px), -50%) rotate(90deg)}', '']);
          var n = o;
        },
        609: function _(t) {
          t.exports = function (t) {
            var e = [];
            return e.toString = function () {
              return this.map(function (e) {
                var i = t(e);
                return e[2] ? '@media '.concat(e[2], ' {').concat(i, '}') : i;
              }).join('');
            }, e.i = function (t, i, s) {
              'string' == typeof t && (t = [[null, t, '']]);
              var o = {};
              if (s) for (var n = 0; n < this.length; n++) {
                var r = this[n][0];
                null != r && (o[r] = !0);
              }

              for (var a = 0; a < t.length; a++) {
                var d = [].concat(t[a]);
                s && o[d[0]] || (i && (d[2] ? d[2] = ''.concat(i, ' and ').concat(d[2]) : d[2] = i), e.push(d));
              }
            }, e;
          };
        }
      },
          e = {};

      function i(s) {
        var o = e[s];
        if (void 0 !== o) return o.exports;
        var n = e[s] = {
          id: s,
          exports: {}
        };
        return t[s](n, n.exports, i), n.exports;
      }

      i.n = function (t) {
        var e = t && t.__esModule ? function () {
          return t.default;
        } : function () {
          return t;
        };
        return i.d(e, {
          a: e
        }), e;
      }, i.d = function (t, e) {
        for (var s in e) {
          i.o(e, s) && !i.o(t, s) && Object.defineProperty(t, s, {
            enumerable: !0,
            get: e[s]
          });
        }
      }, i.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }, function () {
        var t = i(792);

        var e = 'rendered',
            s = function s(t, e) {
          var i = t.getBoundingClientRect();
          var s, o;
          return 'mousedown' === e.type ? (s = e.clientX, o = e.clientY) : (s = e.touches[0].clientX, o = e.touches[0].clientY), s >= i.x && s <= i.x + i.width && o >= i.y && o <= i.y + i.height;
        },
            o = document.createElement('template');

        o.innerHTML = '<div class="second" id="second"> <slot name="second"><slot name="before"></slot></slot> </div> <div class="first" id="first"> <div class="first-overlay"> <div class="first-overlay-container" id="firstImageContainer"> <slot name="first"><slot name="after"></slot></slot> </div> </div> <div class="handle-container"> <div class="divider"></div> <div class="handle" id="handle"> <slot name="handle"> <svg xmlns="http://www.w3.org/2000/svg" class="default-handle" viewBox="-8 -3 16 6"> <path d="M -5 -2 L -7 0 L -5 2 M 5 -2 L 7 0 L 5 2" fill="none" vector-effect="non-scaling-stroke"/> </svg> </slot> </div> </div> </div> ';

        var n = {
          ArrowLeft: -1,
          ArrowRight: 1
        },
            r = ['horizontal', 'vertical'],
            a = function a(t) {
          return {
            x: t.touches[0].pageX,
            y: t.touches[0].pageY
          };
        },
            d = function d(t) {
          return {
            x: t.pageX,
            y: t.pageY
          };
        };

        var h =
        /*#__PURE__*/
        function (_HTMLElement) {
          _inherits(h, _HTMLElement);

          function h() {
            var _this;

            _classCallCheck(this, h);

            _this = _possibleConstructorReturn(this, _getPrototypeOf(h).call(this)), _this.exposure = _this.hasAttribute('value') ? parseFloat(_this.getAttribute('value')) : 20, _this.slideOnHover = !1, _this.slideDirection = 'horizontal', _this.keyboard = 'enabled', _this.isMouseDown = !1, _this.animationDirection = 0, _this.isFocused = !1, _this.handle = !1, _this.onMouseMove = function (t) {
              if (_this.isMouseDown || _this.slideOnHover) {
                var _e = d(t);

                _this.slideToPage(_e);
              }
            }, _this.bodyUserSelectStyle = '', _this.onMouseDown = function (t) {
              if (_this.slideOnHover) return;
              if (_this.handle && !s(_this.handleElement, t)) return;
              t.preventDefault(), window.addEventListener('mousemove', _this.onMouseMove), window.addEventListener('mouseup', _this.onWindowMouseUp), _this.isMouseDown = !0, _this.enableTransition();
              var e = d(t);
              _this.slideToPage(e), _this.focus(), _this.bodyUserSelectStyle = window.document.body.style.userSelect, window.document.body.style.userSelect = 'none';
            }, _this.onWindowMouseUp = function () {
              _this.isMouseDown = !1, window.document.body.style.userSelect = _this.bodyUserSelectStyle, window.removeEventListener('mousemove', _this.onMouseMove), window.removeEventListener('mouseup', _this.onWindowMouseUp);
            }, _this.touchStartPoint = null, _this.isTouchComparing = !1, _this.hasTouchMoved = !1, _this.onTouchStart = function (t) {
              _this.handle && !s(_this.handleElement, t) || (_this.touchStartPoint = a(t), _this.isFocused && (_this.enableTransition(), _this.slideToPage(_this.touchStartPoint)));
            }, _this.onTouchMove = function (t) {
              if (null === _this.touchStartPoint) return;
              var e = a(t);
              if (_this.isTouchComparing) return _this.slideToPage(e), t.preventDefault(), !1;

              if (!_this.hasTouchMoved) {
                var _i = Math.abs(e.y - _this.touchStartPoint.y),
                    _s = Math.abs(e.x - _this.touchStartPoint.x);

                if ('horizontal' === _this.slideDirection && _i < _s || 'vertical' === _this.slideDirection && _i > _s) return _this.isTouchComparing = !0, _this.focus(), _this.slideToPage(e), t.preventDefault(), !1;
                _this.hasTouchMoved = !0;
              }
            }, _this.onTouchEnd = function () {
              _this.isTouchComparing = !1, _this.hasTouchMoved = !1, _this.touchStartPoint = null;
            }, _this.onBlur = function () {
              _this.stopSlideAnimation(), _this.isFocused = !1, _this.firstElement.classList.remove('focused');
            }, _this.onFocus = function () {
              _this.isFocused = !0, _this.firstElement.classList.add('focused');
            }, _this.onKeyDown = function (t) {
              if ('disabled' === _this.keyboard) return;
              var e = n[t.key];
              _this.animationDirection !== e && void 0 !== e && (_this.animationDirection = e, _this.startSlideAnimation());
            }, _this.onKeyUp = function (t) {
              if ('disabled' === _this.keyboard) return;
              var e = n[t.key];
              void 0 !== e && _this.animationDirection === e && _this.stopSlideAnimation();
            }, _this.resetDimensions = function () {
              _this.imageWidth = _this.offsetWidth, _this.imageHeight = _this.offsetHeight;
            };

            var e = _this.attachShadow({
              mode: 'open'
            }),
                i = document.createElement('style');

            i.innerHTML = t.Z, _this.getAttribute('nonce') && i.setAttribute('nonce', _this.getAttribute('nonce')), e.appendChild(i), e.appendChild(o.content.cloneNode(!0)), _this.firstElement = e.getElementById('first'), _this.secondElement = e.getElementById('second'), _this.handleElement = e.getElementById('handle');
            return _this;
          }

          _createClass(h, [{
            key: "connectedCallback",
            value: function connectedCallback() {
              this.hasAttribute('tabindex') || (this.tabIndex = 0), this.addEventListener('dragstart', function (t) {
                return t.preventDefault(), !1;
              }), new ResizeObserver(this.resetDimensions).observe(this), this.setExposure(0), this.observeElement(), this.keyboard = this.hasAttribute('keyboard') && 'disabled' === this.getAttribute('keyboard') ? 'disabled' : 'enabled', this.addEventListener('keydown', this.onKeyDown), this.addEventListener('keyup', this.onKeyUp), this.addEventListener('focus', this.onFocus), this.addEventListener('blur', this.onBlur), this.addEventListener('touchstart', this.onTouchStart, {
                passive: !0
              }), this.addEventListener('touchmove', this.onTouchMove, {
                passive: !1
              }), this.addEventListener('touchend', this.onTouchEnd), this.addEventListener('mousedown', this.onMouseDown), this.handle = this.hasAttribute('handle'), this.hover = !!this.hasAttribute('hover') && this.getAttribute('hover'), this.direction = this.hasAttribute('direction') ? this.getAttribute('direction') : 'horizontal', this.resetDimensions(), this.classList.contains(e) || this.classList.add(e), this.querySelectorAll('[slot="before"], [slot="after"]').length > 0 && console.warn('<img-comparison-slider>: slot names "before" and "after" are deprecated and soon won\'t be supported. Please use slot="first" instead of slot="after", and slot="second" instead of slot="before".');
            }
          }, {
            key: "disconnectedCallback",
            value: function disconnectedCallback() {
              this.transitionTimer && window.clearTimeout(this.transitionTimer);
            }
          }, {
            key: "attributeChangedCallback",
            value: function attributeChangedCallback(t, e, i) {
              'hover' === t && (this.hover = i), 'direction' === t && (this.direction = i), 'keyboard' === t && (this.keyboard = 'disabled' === i ? 'disabled' : 'enabled');
            }
          }, {
            key: "setExposure",
            value: function setExposure() {
              var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
              var e;
              this.exposure = (100, (e = this.exposure + t) < 0 ? 0 : e > 100 ? 100 : e), this.firstElement.style.setProperty('--exposure', 100 - this.exposure + '%');
            }
          }, {
            key: "observeElement",
            value: function observeElement() {
              var _this2 = this;

              var sectionObserver = new IntersectionObserver(function (entries) {
                var _entries = _slicedToArray(entries, 1),
                    entry = _entries[0];

                if (entry.isIntersecting) {
                  _this2.enableLongTransition();

                  setTimeout(function () {
                    _this2.setExposure(30);
                  }, 500);
                  sectionObserver.disconnect();
                }
              }, {
                threshold: 0.25
              });
              sectionObserver.observe(this);
            }
          }, {
            key: "slide",
            value: function slide() {
              var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
              this.setExposure(t);
              var e = new Event('slide');
              this.dispatchEvent(e);
            }
          }, {
            key: "slideToPage",
            value: function slideToPage(t) {
              'horizontal' === this.slideDirection && this.slideToPageX(t.x), 'vertical' === this.slideDirection && this.slideToPageY(t.y);
            }
          }, {
            key: "slideToPageX",
            value: function slideToPageX(t) {
              var e = t - this.getBoundingClientRect().left - window.scrollX;
              this.exposure = e / this.imageWidth * 100, this.slide(0);
            }
          }, {
            key: "slideToPageY",
            value: function slideToPageY(t) {
              var e = t - this.getBoundingClientRect().top - window.scrollY;
              this.exposure = e / this.imageHeight * 100, this.slide(0);
            }
          }, {
            key: "enableTransition",
            value: function enableTransition() {
              var _this3 = this;

              this.firstElement.style.setProperty('--transition-time', '100ms'), this.transitionTimer = window.setTimeout(function () {
                _this3.firstElement.style.setProperty('--transition-time', 'var(--default-transition-time)'), _this3.transitionTimer = null;
              }, 100);
            }
          }, {
            key: "enableLongTransition",
            value: function enableLongTransition() {
              var _this4 = this;

              this.firstElement.style.setProperty('--transition-time', '800ms'), this.transitionTimer = window.setTimeout(function () {
                _this4.firstElement.style.setProperty('--transition-time', 'var(--default-transition-time)'), _this4.transitionTimer = null;
              }, 800);
            }
          }, {
            key: "startSlideAnimation",
            value: function startSlideAnimation() {
              var _this5 = this;

              var t = null,
                  e = this.animationDirection;
              this.firstElement.style.setProperty('--transition-time', 'var(--keyboard-transition-time)');

              var i = function i(s) {
                if (0 === _this5.animationDirection || e !== _this5.animationDirection) return;
                null === t && (t = s);
                var o = (s - t) / 16.666666666666668 * _this5.animationDirection;
                _this5.slide(o), setTimeout(function () {
                  return window.requestAnimationFrame(i);
                }, 0), t = s;
              };

              window.requestAnimationFrame(i);
            }
          }, {
            key: "stopSlideAnimation",
            value: function stopSlideAnimation() {
              this.animationDirection = 0, this.firstElement.style.setProperty('--transition-time', 'var(--default-transition-time)');
            }
          }, {
            key: "value",
            get: function get() {
              return this.exposure;
            },
            set: function set(t) {
              var e = parseFloat(t);
              e !== this.exposure && (this.exposure = e, this.enableTransition(), this.setExposure());
            }
          }, {
            key: "hover",
            get: function get() {
              return this.slideOnHover;
            },
            set: function set(t) {
              this.slideOnHover = 'false' !== t.toString().toLowerCase(), this.removeEventListener('mousemove', this.onMouseMove), this.slideOnHover && this.addEventListener('mousemove', this.onMouseMove);
            }
          }, {
            key: "direction",
            get: function get() {
              return this.slideDirection;
            },
            set: function set(t) {
              var _this$firstElement$cl;

              this.slideDirection = t.toString().toLowerCase(), this.slide(0), (_this$firstElement$cl = this.firstElement.classList).remove.apply(_this$firstElement$cl, r), r.includes(this.slideDirection) && this.firstElement.classList.add(this.slideDirection);
            }
          }], [{
            key: "observedAttributes",
            get: function get() {
              return ['hover', 'direction'];
            }
          }]);

          return h;
        }(_wrapNativeSuper(HTMLElement));

        'undefined' != typeof window && window.customElements.define('img-comparison-slider', h);
      }();
    })();
  };

  document.addEventListener('DOMContentLoaded', comparison);
})();