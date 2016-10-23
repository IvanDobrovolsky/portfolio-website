var throttle = require('lodash.throttle');

module.exports = function ($) {

    var sectionsToTrack = ['objectives', 'education', 'experience', 'skills', 'projects', 'feedbacks'];
    var defaultScrollOffset = 250;
    var activeNavItemClass = '';

    function convertToIdSelector (str) {
        return "#" + str;
    }

    function getTopOffset (selector) {
        return $(selector).offset().top;
    }

    function decreaseOffSet(value) {
        return value - defaultScrollOffset;
    }

    function getActiveSectionIndex () {
        var currentLengthToTop = $(window).scrollTop();
        var scrollIntervals = sectionsToTrack
            .map(convertToIdSelector)
            .map(getTopOffset)
            .map(decreaseOffSet);

        var index = 0;

        for (var i = 0; i < scrollIntervals.length; i++) {
            if (scrollIntervals[i] < currentLengthToTop) {
                index = i;
            }
        }

        return index;
    }

    function sectionScrollHandler () {
        var currentActiveSection = sectionsToTrack[getActiveSectionIndex()];

        //TODO Add real navigation selector
        var navigationItemSelector = "***" + currentActiveSection;

        if (!!selectedItem) {
            selectedItem.removeClass(activeNavItemClass);
        }

        var newSelectedItem = $(navigationItemSelector);
        selectedItem = newSelectedItem;
        newSelectedItem.addClass(activeNavItemClass);
    }

    //TODO Add a selector for initially selected item
    var selectedItem = $('');

    //Needs throttling for optimization
    $(window).scroll(throttle(sectionScrollHandler, 500));
};