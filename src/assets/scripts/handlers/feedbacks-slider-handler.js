var slick = require('slick-carousel-browserify');

module.exports = function ($) {
    $('.feedbacks .slick-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        adaptiveHeight: true,
        dots: true,
        speed: 300
    });
};