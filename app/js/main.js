$(function () {

    $('.header_btn').on('click', function () {
        $('.rightside-menu').removeClass('rightside-menu--close');
    });

    $('.rightside-menu_close').on('click', function () {
        $('.rightside-menu').addClass('rightside-menu--close');
    });

    $('.header_btn-menu').on('click', function () {
        $('.menu').toggleClass('menu--open');
    });

    if($(window).width() < 651){
        $('.works-path_item--measuring').appendTo($('.works-path_items-box'));
    }

    $('.top_slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true
    });

    $('.contact-slider').slick({
        slidesToShow: 10,
        slidesToScroll: 10,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 8,

                }
            },
            {
                breakpoint: 1511,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                }
            },
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 841,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 551,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.article-slider_box').slick({
        prevArrow: '<button type="button" class="article-slider_arrow article-slider_arrowLeft"><img src="images/arrow-slide-left.svg" alt="arrow left"></button>',
        nextArrow: '<button type="button" class="article-slider_arrow article-slider_arrowRight"><img src="images/arrow-slide-right.svg" alt="arrow left"</button>'
    });

    var mixer = mixitup('.gallery_inner', {
        load: {
            filter: '.living'
        }
    });
})