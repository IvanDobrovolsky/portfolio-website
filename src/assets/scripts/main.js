var jQuery = require('jquery');

var navigationHandler = require('./handlers/navigation-handler');
var scrollHandler = require('./handlers/scroll-handler');
var googleMapsHandler = require('./handlers/google-maps-handler');

jQuery(document).ready(function () {

    scrollHandler(jQuery);
    navigationHandler(jQuery);
    googleMapsHandler(jQuery);

});
