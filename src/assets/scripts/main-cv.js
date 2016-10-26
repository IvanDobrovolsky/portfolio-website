var jQuery = require('jquery');

var cvNavigationScrollHandler = require('./handlers/cv-navigation-scroll-handler');
var navigationHandler = require('./handlers/navigation-handler');
var scrollHandler = require('./handlers/scroll-handler');
var projectsSliderHandler = require('./handlers/projects-slider-handler');
var feedbacksSliderHandler = require('./handlers/feedbacks-slider-handler');

jQuery(document).ready(function () {
    cvNavigationScrollHandler(jQuery);
    navigationHandler(jQuery);
    scrollHandler(jQuery);

    projectsSliderHandler(jQuery);
    feedbacksSliderHandler(jQuery);

    //Clearing slick carousel styles
    jQuery('.slick-carousel .slick-dots button').text('');
});