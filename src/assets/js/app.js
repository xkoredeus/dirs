// sliders
$(() => {
    const offerSlider = new Swiper(".js-offer-slider", {
        speed: 1000,
        freeMode: false,
        watchSlidesProgress: true,
        slidesPerView: 1,
        spaceBetween: 20,
        // effect: 'fade',
        // fadeEffect: {
        //     crossFade: true
        // },
        navigation: {
            nextEl: ".js-offer-slider-next",
            prevEl: ".js-offer-slider-prev",
        },
        pagination: {
            el: ".js-offer-pagination",
            clickable: true,
        },
    });

    const reviewsSlider = new Swiper(".js-reviews-slider", {
        speed: 700,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 10,

            },
            1260: {
                slidesPerView: 2,
                spaceBetween: 20,
                navigation: {
                    nextEl: ".js-reviews-slider-next",
                    prevEl: ".js-reviews-slider-prev",
                },
            },
            1560: {
                slidesPerView: 2,
                spaceBetween: 20,
                navigation: {
                    nextEl: ".js-reviews-slider-next",
                    prevEl: ".js-reviews-slider-prev",
                },
            },
        },
    });
    const certsSlider = new Swiper(".js-certs-slider", {
        speed: 700,
        breakpoints: {
            0: {
                spaceBetween: 10,
                slidesPerView: 1,
            },
            376: {
                spaceBetween: 10,
                slidesPerView: 2,
            },
            576: {
                spaceBetween: 10,
                slidesPerView: 3,
            },
            768: {
                spaceBetween: 10,
                slidesPerView: 4,
            },
            976: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
            1260: {
                spaceBetween: 20,
                slidesPerView: 6,
                navigation: {
                    nextEl: ".js-certs-slider-next",
                    prevEl: ".js-certs-slider-prev",
                },
            },
            1560: {
                slidesPerView: 6,
                spaceBetween: 20,
                navigation: {
                    nextEl: ".js-certs-slider-next",
                    prevEl: ".js-certs-slider-prev",
                },
            },
        },
    });

    const bestPriceSlider = new Swiper(".js-best-price-slider", {
        speed: 700,
        breakpoints: {
            0: {
                spaceBetween: 10,
                slidesPerView: 2,
            },
            576: {
                spaceBetween: 10,
                slidesPerView: 3,
            },
            768: {
                spaceBetween: 10,
                slidesPerView: 4,
            },
            976: {
                spaceBetween: 10,
                slidesPerView: 4,
            },
            1260: {
                spaceBetween: 20,
                slidesPerView: 4,
                navigation: {
                    nextEl: ".js-best-price-slider-next",
                    prevEl: ".js-best-price-slider-prev",
                },
            },
            1560: {
                spaceBetween: 20,
                slidesPerView: 4,
                navigation: {
                    nextEl: ".js-best-price-slider-next",
                    prevEl: ".js-best-price-slider-prev",
                },
            },
        },
    });

    const complectsSlider = new Swiper(".js-complects-slider", {
        speed: 700,
        breakpoints: {
            0: {
                spaceBetween: 10,
                slidesPerView: 2,
            },
            576: {
                spaceBetween: 10,
                slidesPerView: 3,
            },
            768: {
                spaceBetween: 10,
                slidesPerView: 4,
            },
            976: {
                spaceBetween: 10,
                slidesPerView: 4,
            },
            1260: {
                spaceBetween: 20,
                slidesPerView: 4,
                navigation: {
                    nextEl: ".js-complects-slider-next",
                    prevEl: ".js-complects-slider-prev",
                },
            },
            1560: {
                spaceBetween: 20,
                slidesPerView: 4,
                navigation: {
                    nextEl: ".js-complects-slider-next",
                    prevEl: ".js-complects-slider-prev",
                },
            },
        },
    });



    const lastViewSlider = new Swiper(".js-last-view-slider", {
        speed: 700,
        breakpoints: {
            0: {
                spaceBetween: 10,
                slidesPerView: 2,
            },
            576: {
                spaceBetween: 10,
                slidesPerView: 3,
            },
            768: {
                spaceBetween: 10,
                slidesPerView: 4,
            },
            976: {
                spaceBetween: 10,
                slidesPerView: 4,
            },
            1260: {
                spaceBetween: 20,
                slidesPerView: 4,
                navigation: {
                    nextEl: ".js-last-view-slider-next",
                    prevEl: ".js-last-view-slider-prev",
                },
            },
            1560: {
                spaceBetween: 20,
                slidesPerView: 4,
                navigation: {
                    nextEl: ".js-last-view-slider-next",
                    prevEl: ".js-last-view-slider-prev",
                },
            },
        },
    });

    const brandsSlider = new Swiper(".js-brands-slider", {
        speed: 700,
        navigation: {
            nextEl: ".js-brands-slider-next",
            prevEl: ".js-brands-slider-prev",
        },
        allowTouchMove: false,
        breakpoints: {
            0: {
                spaceBetween: 5,
                slidesPerView: 3,
            },
            376: {
                spaceBetween: 5,
                slidesPerView: 3,
            },
            576: {
                spaceBetween: 5,
                slidesPerView: 4,
            },
            768: {
                spaceBetween: 5,
                slidesPerView: 5,
            },
            976: {
                spaceBetween: 14.7,
                slidesPerView: 6,
            },
            1260: {
                spaceBetween: 14.7,
                slidesPerView: 7,
            },
            1560: {
                slidesPerView: 14.7,
                spaceBetween: 7,
            },
        },
    });
    const selectionsSlider = new Swiper(".js-selections-slider", {
        speed: 700,
        slidesPerView: "auto",
        navigation: {
            nextEl: ".js-selections-slider-next",
            prevEl: ".js-selections-slider-prev",
        },
        breakpoints: {
            0: {
                spaceBetween: 5,
            },
            376: {
                spaceBetween: 5,
            },
            576: {
                spaceBetween: 5,
            },
            768: {
                spaceBetween: 5,
            },
            976: {
                spaceBetween: 15,
            },
            1260: {
                spaceBetween: 15,
            },
            1560: {
                spaceBetween: 15,
            },
        },
    });

    var cardBottomSlider = new Swiper(".js-card-bottom-slider", {
        speed: 700,
        freeMode: false,
        spaceBetween: 20,
        // allowTouchMove: false,
        slidesPerView: "auto",
        navigation: {
            nextEl: ".js-card-slider-next",
            prevEl: ".js-card-slider-prev",
        },
        thumbs: {
            swiper: cardTopSlider,
        },
    });
    var cardTopSlider = new Swiper(".js-card-top-slider", {
        speed: 700,
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: ".js-card-slider-next",
            prevEl: ".js-card-slider-prev",
        },
        thumbs: {
            swiper: cardBottomSlider,
        },
    });
    var blogBottomSlider = new Swiper(".js-blog-bottom-slider", {
        speed: 700,
        freeMode: false,
        spaceBetween: 20,
        // allowTouchMove: false,
        slidesPerView: "auto",
        // navigation: {
        //     nextEl: ".js-card-slider-next",
        //     prevEl: ".js-card-slider-prev",
        // },
        thumbs: {
            swiper: blogTopSlider,
        },
    });
    var blogTopSlider = new Swiper(".js-blog-top-slider", {
        speed: 700,
        slidesPerView: 1,
        spaceBetween: 20,
        thumbs: {
            swiper: blogBottomSlider,
        },
    });


    const trapSlider = new Swiper(".js-trap-slider", {
        speed: 1000,
        freeMode: false,
        watchSlidesProgress: true,
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: ".js-trap-slider-next",
            prevEl: ".js-trap-slider-prev",
        },
        pagination: {
            el: ".js-trap-pagination",
            clickable: true,
        },
    });

    const areaSlider = new Swiper(".js-area-slider", {
        speed: 1000,
        freeMode: false,
        watchSlidesProgress: true,
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: ".js-area-slider-next",
            prevEl: ".js-area-slider-prev",
        },
        pagination: {
            el: ".js-area-pagination",
            clickable: true,
        },
    });

    const specConstrSlider = new Swiper(".js-spec-constr-slider", {
        speed: 1000,
        freeMode: false,
        watchSlidesProgress: true,
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: ".js-spec-constr-slider-next",
            prevEl: ".js-spec-constr-slider-prev",
        },
        pagination: {
            el: ".js-spec-constr-pagination",
            clickable: true,
        },
    });

    const worksSlider = new Swiper(".js-works-slider", {
        speed: 700,
        spaceBetween: 10,
        slidesPerView: 2,
        navigation: {
            nextEl: ".js-works-slider-next",
            prevEl: ".js-works-slider-prev",
        },
        breakpoints: {
            576: {
                spaceBetween: 20,
                slidesPerView: 3,
            },
        },
    });

    const gratitudeSlider = new Swiper(".js-gratitude-slider", {
        speed: 700,
        spaceBetween: 20,
        breakpoints: {
            0: {
                pagination: {
                    el: ".js-gratitude-slider-pagination",
                    clickable: true,
                },
                slidesPerView: 2,
            },
            576: {
                pagination: {
                    el: ".js-gratitude-slider-pagination",
                    clickable: true,
                },
                slidesPerView: 2,
            },
            768: {
                pagination: {
                    el: ".js-gratitude-slider-pagination",
                    clickable: true,
                },
                slidesPerView: 3,

            },
            1260: {
                slidesPerView: 4,
                navigation: {
                    nextEl: ".js-gratitude-slider-next",
                    prevEl: ".js-gratitude-slider-prev",
                },
            },
            1560: {
                slidesPerView: 4,
                navigation: {
                    nextEl: ".js-gratitude-slider-next",
                    prevEl: ".js-gratitude-slider-prev",
                },
            },
        },
    });


    var oldWidth = $(window).width();
    var swiper = Swiper;
    var init = false;

    function initMode() {
        let mobile = window.matchMedia('(min-width: 0px) and (max-width: 1260px)');
        let desktop = window.matchMedia('(min-width: 1260px)');

        // Enable (for mobile)
        if (mobile.matches) {
            if (!init) {
                init = true;
                swiper = new Swiper('.js-recommend-slider', {
                    slidesPerView: 2,
                    spaceBetween: 10,
                    breakpoints: {
                        576: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                    }

                });

                swiper = new Swiper('.js-video-reviews-slider', {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    pagination: {
                        el: ".js-video-reviews-slider-pagination",
                        clickable: true,
                    },

                    breakpoints: {
                        576: {
                            slidesPerView: 2,
                        }
                    }

                });

                swiper = new Swiper('.js-profi-slider', {
                    slidesPerView: 1,
                    spaceBetween: 0,

                    breakpoints: {
                        0: {
                            slidesPerView: 1,
                        },
                        576: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                    }

                });

                swiper = new Swiper('.js-blog-slider', {
                    slidesPerView: 1,
                    spaceBetween: 0,

                    breakpoints: {
                        0: {
                            slidesPerView: 1,
                        },
                        576: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                    }

                });

                $('.bottom-nav__header').on('click', function () {
                    $(this).toggleClass('active');
                    $(this).next('.bottom-nav__content').slideToggle();
                });
                $('.item').each((idx, elem) => {
                    const ratingHtml = $(elem).find('.item-rating');
                    const saleHtml = $(elem).find('.item-sale');
                    ratingHtml.appendTo($(elem).find('.item-additional__in'));
                    saleHtml.appendTo($(elem).find('.item-picture__wrapper'));
                });
            }
        }



        // Disable (for desktop)
        else if (desktop.matches) {
            if (swiper.mounted) {
                swiper.destroy();
                init = false;
            }

        }
    }



    /* On Load
    **************************************************************/
    window.addEventListener('load', function() {
        initMode();
    });

    /* On Resize
    **************************************************************/
    window.addEventListener('resize', function() {
        var nw = $(window).width();
        if (oldWidth !== nw) {
            initMode();
        }
        oldWidth = nw;
    });
});

$(() => {
    $('.js-card-toggle-favorites').on('click', function () {
        if (!($(this).hasClass('active'))) {
            $(this)
                .addClass('active')
                .find('span').text('В избранном')
                .parent()
        } else (
            $(this)
                .removeClass('active')
                .find('span').text('В избранное')
                .parent()
        )
    });
});

$(() => {
    $('.js-card-toggle-compare').on('click', function () {
        if (!($(this).hasClass('active'))) {
            $(this)
                .addClass('active')
                .find('span').text('В сравнении')
        } else (
            $(this)
                .removeClass('active')
                .find('span').text('Сравнить')
        )
    });
});

$(window).on('load', function () {
    $('.js-range-input').each((idx, elem) => {
        $(elem).prev().text($(elem).val())
    });

    function initSlider () {
        if ($('.js-range-slider.mdc-slider').parents('html').length > 0) {
            const rangeSlider = new mdc.slider.MDCSlider(document.querySelector('.js-range-slider.mdc-slider'));
            rangeSlider.root.addEventListener('MDCSlider:change', (e) => {
                if (e.detail.thumb === 1) {
                    $('.js-range-input-from').val(e.detail.value)
                        .prev().text(e.detail.value)
                } else if (e.detail.thumb === 2) {
                    $('.js-range-input-to').val(e.detail.value)
                        .prev().text(e.detail.value)
                }
            });
            $('.js-range-input-from').on('input', function (e) {
                rangeSlider.setValueStart($(this).val());
            })
            $('.js-range-input-to').on('input', function (e) {
                rangeSlider.setValue($(this).val());
            });

            $(function () {
                $('form .js-range-input').on('input', (e) => {
                    $(e.target).prev().text($(e.target).val())
                })
            });
        }
    }
    $('.js-toggle-filter-modal').on('click', function () {
        setTimeout(() => {
            $.fancybox.open({
                src  : '#filter',
                touch: false,
                animationDuration: 600,
                animationEffect: 'slide-in-in',
                scrolling: true,

                afterLoad: function () {
                    initSlider();
                }
            });
        }, 200);
    });

    function initFilters() {
        if ($(window).width() + 15 < 1260) {
            $('.filter').appendTo('#filter');
        } else {
            $('.filter').appendTo('.filter-wrapper');
        }
    }

    initSlider();

    initFilters();

    var oldWidth = $(window).width();
    $(window).bind('resize', function () {
        var nw = $(window).width();
        if (oldWidth !== nw) {
            if ($('.js-range-slider').parents('html').length > 0) {
                initSlider();
            };
            initFilters();
        }
        oldWidth = nw;
    });

    $('.filter .filter-list').each((idx, elem) => {
        if ($(elem)[0].childElementCount > 6) {
            $(elem).children('label:gt(5)').hide();
            $(elem).parent('.filter-item__content').append('<button class="link-blue link-blue-icon js-toggle-filter-list"><span>Показать все</span><svg><use xlink:href="#chevron-bottom"></use></svg></button>')
        }
    });

    $('.filter').on('click', '.js-toggle-filter-list', function (e) {
        e.preventDefault();

        if (!($(this).hasClass('active'))) {
            $(this)
                .addClass('active');
            $(this)
                .find('span')
                .html('Скрыть')
                .parents('.filter-item__content')
                .find('.filter-list')
                .find('label:gt(5)')
                .show();
        } else {
            $(this)
                .removeClass('active');
            $(this)
                .find('span')
                .html('Показать все')
                .parents('.filter-item__content')
                .find('.filter-list')
                .find('label:gt(5)')
                .hide();
        }
    });
});

$(() => {
    if ($('.mdc-tooltip-1').parents('html').length > 0) {
        const tooltip1 = new mdc.tooltip.MDCTooltip(document.querySelector('.mdc-tooltip-1'));
    }
    if ($('.mdc-tooltip-2').parents('html').length > 0) {
        const tooltip2 = new mdc.tooltip.MDCTooltip(document.querySelector('.mdc-tooltip-2'));
    }
});

$(() => {
    $('.js-promo-button').hide();

    $('.js-promo-input').on('input', function (e) {
        var value = e.currentTarget.value;
        if (value.length > 2) {
            $('.js-promo-button').show();
        }
        // else {
        //     $('.js-promo-button').hide();
        // }
    });

    $('.order-content-2').hide();

    $('input[name="order-mode"]').on('change', function (e) {
        var val = e.currentTarget.value;

        if (val == 2) {
            $('.order-content-1').hide();
            $('.order-content-2').show();
        } else if (val == 1) {
            $('.order-content-2').hide();
            $('.order-content-1').show();
        }
    });
});

$(() => {
    $('.favorites-list').find('.js-toggle-fav').addClass('active');
    $('.js-toggle-fav').on('click', function (e) {
        e.preventDefault();

        $(this).toggleClass('active');
    });
});


$(() => {
    $(".js-upload-file").change(function() {
        if ($(this)[0].files && $(this)[0].files[0]) {
            const input = $(this);

            var reader = new FileReader();

            reader.onload = function (e) {
                console.log($(this));
                input
                    .parents('.file')
                    .addClass('file--uploaded')
                    .find('.file__picture')
                    .attr('src', e.target.result)
            };

            reader.readAsDataURL($(this)[0].files[0]);
        }
    });
})


$(() => {
    let state = {};
    // state management
    function updateState(newState) {
        state = { ...state, ...newState };
    }

    // event handlers
    $('.feed__in .js-file-input-order').change(function(e) {
        let files = $('.feed__in .js-file-input-order')[0].files;
        if (files.length === 0) {
            $('.feed__in .file-list').html('Прикрепить файл');
        } else {
            let filesArr = Array.from(files);
            updateState({ files: files, filesArr: filesArr });

            renderFileList();
        }
    });

    // render functions
    function renderFileList() {
        let fileMap = state.filesArr.map((file, index) => {
            let suffix = 'bt';
            let size = file.size;
            if (size >= 1024 && size < 1024000) {
                suffix = 'kb';
                size = Math.round(size / 1024 * 100) / 100;
            } else if (size >= 1024000) {
                suffix = 'mb';
                size = Math.round(size / 1024000 * 100) / 100;
            }

            return (`<div class="file" key="${index}">
                        <div class="file__name">${file.name}</div>
                        <div class="file__size">${size} ${suffix}</div>
                    </div>`);
        });

        $('.feed__in .file-list').html(fileMap);
    };
})

$(() => {
    let state = {};
    // state management
    function updateState(newState) {
        state = { ...state, ...newState };
    }

    // event handlers
    $('.popup-review-form .js-file-review-popup').change(function(e) {
        let files = $('.popup-review-form .js-file-review-popup')[0].files;
        if (files.length === 0) {
            $('.popup-review-form .file-list').html('Прикрепить фото');
        } else {
            let filesArr = Array.from(files);
            updateState({ files: files, filesArr: filesArr });

            renderFileList();
        }
    });

    // render functions
    function renderFileList() {
        let fileMap = state.filesArr.map((file, index) => {
            let suffix = 'bt';
            let size = file.size;
            if (size >= 1024 && size < 1024000) {
                suffix = 'kb';
                size = Math.round(size / 1024 * 100) / 100;
            } else if (size >= 1024000) {
                suffix = 'mb';
                size = Math.round(size / 1024000 * 100) / 100;
            }

            return (`<div class="file" key="${index}">
                        <div class="file__name">${file.name}</div>
                        <div class="file__size">${size} ${suffix}</div>
                    </div>`);
        });

        $('.popup-review-form .file-list').html(fileMap);
    };
})


$(() => {
    let state = {};
    // state management
    function updateState(newState) {
        state = { ...state, ...newState };
    }

    // event handlers
    $('.order-form .js-file-input-order').change(function(e) {
        let files = $('.order-form .js-file-input-order')[0].files;
        if (files.length === 0) {
            $('.order-form .file-list').html('Прикрепить файл');
        } else {
            let filesArr = Array.from(files);
            updateState({ files: files, filesArr: filesArr });

            renderFileList();
        }
    });

    // render functions
    function renderFileList() {
        let fileMap = state.filesArr.map((file, index) => {
            let suffix = 'bt';
            let size = file.size;
            if (size >= 1024 && size < 1024000) {
                suffix = 'kb';
                size = Math.round(size / 1024 * 100) / 100;
            } else if (size >= 1024000) {
                suffix = 'mb';
                size = Math.round(size / 1024000 * 100) / 100;
            }

            return (`<div class="file" key="${index}">
                        <div class="file__name">${file.name}</div>
                        <div class="file__size">${size} ${suffix}</div>
                    </div>`);
        });

        $('.order-form .file-list').html(fileMap);
    };
})

$(() => {
    $('.card-tabs-content__item:not(:first-child)').hide();
    $('.card-tabs-list__item:first-child').addClass('active');
    $('.card-tabs-list .card-tabs-list__item').click(function cardTabListLiClick() {
        if (!($(this).hasClass('active'))) {
            const thisLi = $(this);
            let numLi;

            if ($(this).parents('.news-categories').html()) {
                numLi = thisLi.parents('.swiper-slide').index();
            } else {
                numLi = thisLi.index();
            }


            thisLi.parents('.card-tabs-wrapper').find('.card-tabs-list__item').removeClass('active');
            thisLi.addClass('active');
            thisLi.parents('.card-tabs-wrapper').find('.card-tabs-content__item').hide()
                .eq(numLi)
                .fadeIn('slow');
        }
    });

    $('.news-categories .card-tabs-list__item').removeClass('active');
    $('.news-categories .swiper-slide:first-child .card-tabs-list__item').addClass('active');
});

$(() => {
    function makeTimer() {

        var endTime = new Date("29 February 2023 9:56:00 GMT+01:00");

        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }

        $(".js-timer-days").html(days);
        $(".js-timer-hours").html(hours);
        $(".js-timer-minutes").html(minutes);
        $(".js-timer-seconds").html(seconds);

    }

    setInterval(function() { makeTimer(); }, 1000);
});

$(() => {
    $(".js-button-anchor").click(function(e) {
        e.preventDefault();
        var aid = $(this).attr("data-to");
        $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
    });
});

$(() => {
    $('.form-number').on('click', '.js-form-number-minus, .js-form-number-plus', function quantityClick(e) {
        e.preventDefault();

        const input = $(this).siblings('.form-number__input');
        if ((input.val() > +input.attr('min')) && ($(this).hasClass('js-form-number-minus'))) {
            input.val(+input.val() - 1);
        } else if ((input.val() < +input.attr('max')) && ($(this).hasClass('js-form-number-plus'))) {
            input.val(+input.val() + 1);
        }
    });
});

$(() => {
    $.fn.select2.amd.define('select2/i18n/ru',[],function () {
        // Russian
        return {
            errorLoading: function () {
                return 'Результат не может быть загружен.';
            },
            inputTooLong: function (args) {
                var overChars = args.input.length - args.maximum;
                var message = 'Пожалуйста, удалите ' + overChars + ' символ';
                if (overChars >= 2 && overChars <= 4) {
                    message += 'а';
                } else if (overChars >= 5) {
                    message += 'ов';
                }
                return message;
            },
            inputTooShort: function (args) {
                var remainingChars = args.minimum - args.input.length;

                var message = 'Пожалуйста, введите ' + remainingChars + ' или более символов';

                return message;
            },
            loadingMore: function () {
                return 'Загружаем ещё ресурсы…';
            },
            maximumSelected: function (args) {
                var message = 'Вы можете выбрать ' + args.maximum + ' элемент';

                if (args.maximum  >= 2 && args.maximum <= 4) {
                    message += 'а';
                } else if (args.maximum >= 5) {
                    message += 'ов';
                }

                return message;
            },
            noResults: function () {
                return 'Ничего не найдено';
            },
            searching: function () {
                return 'Поиск…';
            }
        };
    });


    $(".js-select").select2({
        language: 'ru',
        minimumResultsForSearch: -1,
        width: '100%'
    });
    $(".js-select-auto-width").select2({
        language: 'ru',
        minimumResultsForSearch: -1,
        width: 'auto'
    });

    // colors select
    var data = [
        {
            id: 0,
            text: '<span class="color-select-item"><span style="background-color: purple;"></span> <span>RAL 1001</span></span>',
            title: 'RAL 1001'
        },
        {
            id: 1,
            text: '<span class="color-select-item"><span style="background-color: red;"></span> <span>RAL 1002</span></span>',
            title: 'RAL 1002'
        },
        {
            id: 2,
            text: '<span class="color-select-item"><span style="background-color: deeppink;"></span> <span>RAL 1003</span></span>',
            title: 'RAL 1003'
        },
    ];

    $(".js-select-colors").select2({
        minimumResultsForSearch: -1,
        data: data,
        width: '180',
        escapeMarkup: function(markup) {
            return markup;
        },
    })

    // if ($(window).width() + 15 > 975) {
    //     $(".js-select").select2({
    //         language: 'ru',
    //         minimumResultsForSearch: -1,
    //         width: '100%'
    //     });
    //     $(".js-select-auto-width").select2({
    //         language: 'ru',
    //         minimumResultsForSearch: -1,
    //         width: 'auto'
    //     });
    // }

});

$(() => {
    $('.js-tel').mask("+7 (999) 999-99-99");
});

$(() => {
    $('.js-toggle-seo-text').on('click', function (e) {
        if (!($(this).hasClass('active'))) {
            $(this)
                .addClass('active')
                .find('span').text('Скрыть')
                .parent()
                .prev('.seo-text')
                .addClass('active')
        } else {
            $(this)
                .removeClass('active')
                .find('span').text('Показать весь')
                .parent()
                .prev('.seo-text')
                .removeClass('active')
        }
    });
});

$(() => {
    // $('.question-item:first-child').addClass('active').find('.question-item__info').slideToggle();
    $('.js-question-toggle').on('click', function (e) {
        $(this)
            .parent('.question-item')
            .toggleClass('active')
            .find('.question-item__info').slideToggle();
    });
});


// catalog list
$(() => {
    $('.catalog-list__row .catalog-list').each((idx, elem) => {
        if ($(elem)[0].childElementCount > 6) {
            $(elem).children('a:gt(5)').hide();
            $(elem).parent('.catalog-list__wrapper').append('<button class="link-blue link-blue-icon js-toggle-catalog-list"><span>Показать все</span><svg><use xlink:href="#chevron-bottom"></use></svg></button>')
        }
    });

    $('.catalog-list__row').on('click', '.js-toggle-catalog-list', function () {
        if (!($(this).hasClass('active'))) {
            $(this)
                .addClass('active');
            $(this)
                .find('span')
                .html('Скрыть')
                .parents('.catalog-list__wrapper')
                .find('.catalog-list')
                .find('a:gt(5)')
                .show();
        } else {
            $(this)
                .removeClass('active');
            $(this)
                .find('span')
                .html('Показать все')
                .parents('.catalog-list__wrapper')
                .find('.catalog-list')
                .find('a:gt(5)')
                .hide();
        }

    });
});


// search
$(() => {
    $('.js-toggle-search').on('click', function () {
        if (!$(this).parent('.header-search__base').hasClass('active')) {
            $('.catalog__grid-base').trigger('click');
            $('.layout').addClass('blur');
            $(this).parent('.header-search__base').addClass('active');
            $(this).parents('.header').find('.search-dropdown').addClass('active');
        }
    });

    $('.js-close-search').on('click', function (e) {
        e.stopPropagation();
        $('.layout').removeClass('blur');
        $(this).parents('.header-search__base').removeClass('active');
        $(this).parents('.header').find('.search-dropdown').removeClass('active');
    });
});


// header
$(() => {
    function initHeader() {
        if ($(window).width() + 15 < 975) {
            $('.header-actions__wrapper').appendTo('.tapbar__in');
            $('.header-nav').appendTo('.header-menu__in');
            $('.header-top').appendTo('.header-menu__in');
            $('.header-contacts').appendTo('.header-menu__in');
            $('.header-schedule').appendTo('.header-menu__in');
            $('.header-ws').appendTo('.header-menu__in');

            $('.js-toggle-catalog').on('click', function () {

                if (!($(this).hasClass('active'))) {
                    $(this).addClass('active');
                    $('.catalog').slideDown();
                } else {
                    $(this).removeClass('active');
                    $('.catalog').slideUp();
                }

            });

            $('.header-nav__link > svg').on('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                if ($(this).parent('.header-nav__link').hasClass('active')) {

                    $(this)
                        .parent('.header-nav__link')
                        .next('.header-nav__dropdown')
                        .find('.header-nav__dropdown-link')
                        .removeClass('active');
                    $(this)
                        .parent('.header-nav__link')
                        .next('.header-nav__dropdown')
                        .find('.header-nav__subdropdown')
                        .hide();
                }

                $(this)
                    .parent('.header-nav__link')
                    .toggleClass('active')
                    .next('.header-nav__dropdown')
                    .slideToggle();
            });
            $('.header-nav__dropdown-link > svg').on('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                $(this)
                    .parent('.header-nav__dropdown-link')
                    .toggleClass('active')
                    .next('.header-nav__subdropdown')
                    .slideToggle();
            });

            /// ///
            $('.catalog-link > svg').on('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                if ($(this).parent('.catalog-link').hasClass('active')) {

                    $(this)
                        .parent('.catalog-link')
                        .next('.catalog-dropdown')
                        .find('.catalog-dropdown__link')
                        .removeClass('active');
                    $(this)
                        .parent('.catalog-link')
                        .next('.catalog-dropdown')
                        .find('.catalog-subdropdown')
                        .hide();
                }

                $(this)
                    .parent('.catalog-link')
                    .toggleClass('active')
                    .next('.catalog-dropdown')
                    .slideToggle();
            });
            $('.catalog-dropdown__link > svg').on('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                $(this)
                    .parent('.catalog-dropdown__link')
                    .toggleClass('active')
                    .next('.catalog-subdropdown')
                    .slideToggle();
            });
        } else {

            $('.header-actions__wrapper').appendTo('.header-actions__content');
            $('.header-nav').appendTo('.header-nav__wrapper');
            $('.header-phones').appendTo('.header-phones__wrapper')
            $('.header-top').appendTo('.header-top__wrapper');

            $('.js-toggle-catalog').on('click', function () {

                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                    $('body').removeClass('is-loading');
                    $('.catalog').removeClass('active');

                    $('.catalog__column:nth-child(1) .js-catalog-link').removeClass('active');
                    $('.catalog__column:nth-child(2) .js-catalog-dropdown-link').removeClass('active');
                    $('.catalog__column:nth-child(2)').html('');
                    $('.catalog__column:nth-child(3)').html('');
                } else {
                    $(this).addClass('active');
                    $('body').addClass('is-loading');
                    $('.catalog').addClass('active');
                }

            });

            $('.catalog__grid-base').on('click', function () {
                $('.js-toggle-catalog.active').removeClass('active');
                $('body').removeClass('is-loading');
                $('.catalog.active').removeClass('active');

                $('.catalog__column:nth-child(1) .js-catalog-link').removeClass('active');
                $('.catalog__column:nth-child(2) .js-catalog-dropdown-link').removeClass('active');
                $('.catalog__column:nth-child(2)').html('');
                $('.catalog__column:nth-child(3)').html('');
            })

            $(".catalog").on('mouseenter', ".catalog-link", function () {
                $('.catalog__column:nth-child(1) .js-catalog-link').removeClass('active');
                $('.catalog__column:nth-child(2)').html('');
                $('.catalog__column:nth-child(3)').html('');

                if (!($(this).hasClass('active')) &&
                    $(this)
                        .hasClass('js-catalog-link')
                ) {

                    $('.catalog__column:nth-child(2)').html('<div class="catalog__column-in"></div>')
                    $(this)
                        .addClass('active')
                        .next('.catalog-dropdown')
                        .find('.catalog-dropdown__in')
                        .clone()
                        .appendTo('.catalog__column:nth-child(2) > .catalog__column-in');
                }
            });

            $(".catalog").on('mouseenter', '.catalog-dropdown__link', function () {
                $('.catalog__column:nth-child(3)').html('');
                $('.catalog__column:nth-child(2) .js-catalog-dropdown-link').removeClass('active');

                if (!($(this).hasClass('active')) &&
                    $(this)
                        .hasClass('js-catalog-dropdown-link')
                ) {

                    $('.catalog__column:nth-child(3)').html('<div class="catalog__column-in"></div>')
                    $(this)
                        .addClass('active')
                        .next('.catalog-subdropdown')
                        .find('.catalog-subdropdown__in')
                        .clone()
                        .appendTo('.catalog__column:nth-child(3) > .catalog__column-in')
                }
            });
        }
    }
    initHeader();

    var oldWidth = $(window).width();

    $(window).bind('resize', function () {
        var nw = $(window).width();
        if (oldWidth !== nw) {
            initHeader();
        }
        oldWidth = nw;
    });

    $('.js-toggle-menu').on('click', function () {

        if ($(this).hasClass('header-burger--active')) {
            console.log('lal');

            $('.js-toggle-catalog').removeClass('active');
            $('.catalog-link').removeClass('active');
            $('.catalog-dropdown__link').removeClass('active');
            $('.header-nav__link').removeClass('active');
            $('.header-nav__dropdown-link').removeClass('active');

            $('.catalog').hide();
            $('.catalog-dropdown').hide();
            $('.catalog-subdropdown').hide();
            $('.header-nav__dropdown').hide();
            $('.header-nav__subdropdown').hide();
        }

        $('body').toggleClass('is-loading');
        $('.header-menu').toggleClass('header-menu--active');
        $('.header').toggleClass('header--active');
        $(this).toggleClass('header-burger--active');
    });
})

// containers
$(() => {
    $(document).on('click', function (e) {
        var container = $('.header');

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.layout').removeClass('blur');
            $('.header-search__base').removeClass('active');
            $('.search-dropdown').removeClass('active');
        }
    });
});


$(() => {
    $('[data-fancybox]').fancybox({
        animationDuration: 600,
        animationEffect: 'slide-in-in',
        touch: false,
        scrolling: true,
    });

    $('.js-close-fancybox').on('click', function () {
        $.fancybox.close();
    });
});


$(() => {
    if ($('#map').parents('html').length > 0) {
        var geojson = {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {
                        iconSize: [29,43]
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            49.45480118878082, 53.51478732275671
                        ]
                    }
                }
            ]
        }

        mapboxgl.accessToken = 'pk.eyJ1IjoieGtvcmVkZXVzIiwiYSI6ImNrbGtxcmoybzNmMGIydnM4MWs5ZXo5cmMifQ._YIlgXTnQtUtNubeZg81dg';

        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/xkoredeus/cklkrgmef0qsx17mlzyqyo3ga',
            center: [49.456751254551605, 53.51467787844254],
            zoom: 10,
            attributionControl: false
        });

        // add markers to map
        geojson.features.forEach(function (marker) {
            // create a DOM element for the marker
            var el = document.createElement('div');
            el.className = 'marker';
            el.style.backgroundImage =
                'url(assets/img/balloon.svg)';
            el.style.width = '16px';
            el.style.height = '20px';

            // add marker to map
            new mapboxgl.Marker(el)
                .setLngLat(marker.geometry.coordinates)
                .addTo(map);
        });

        var elInner = $('.balloon__content');
        $('.marker').append(elInner);
    }
});

