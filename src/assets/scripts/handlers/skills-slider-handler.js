var slick = require('slick-carousel-browserify');

module.exports = function ($) {
    $('.skills .slick-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        adaptiveHeight: true,
        dots: true,
        speed: 300,
        // autoplay: true, //TODO enable for production
        autoplaySpeed: 4000,
        pauseOnHover: true,
        pauseOnDotsHover: true
    });
};