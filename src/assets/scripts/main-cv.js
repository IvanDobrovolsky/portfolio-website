var jQuery = require('jquery');

var cvNavigationScrollHandler = require('./handlers/cv-navigation-scroll-handler');
var scrollHandler = require('./handlers/scroll-handler');


jQuery(document).ready(function () {
    cvNavigationScrollHandler(jQuery);
    scrollHandler(jQuery);
});