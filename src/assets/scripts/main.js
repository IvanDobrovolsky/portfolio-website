var jQuery = require('jquery');

var navigationHandler = require('./handlers/navigation-handler');
var scrollHandler = require('./handlers/scroll-handler');
var googleMapsHandler = require('./handlers/google-maps-handler');
var feedbacksSliderHandler = require('./handlers/feedbacks-slider-handler');


jQuery(document).ready(function () {

    scrollHandler(jQuery);
    navigationHandler(jQuery);
    googleMapsHandler(jQuery);
    feedbacksSliderHandler(jQuery);

});
