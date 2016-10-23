var slick = require('slick-carousel-browserify');

module.exports = function ($) {
    $('.projects .slick-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        adaptiveHeight: true,
        dots: true,
        speed: 300
    });

    $('.slick-prev').html('<i class="fa fa-arrow-left"></i> Previous project');
    $('.slick-next').html('Next project <i class="fa fa-arrow-right"></i>');
};