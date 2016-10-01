
$(document).ready(function() {
    var $dialog = $('.welcome-window');
    var $mask = $('#mask');
    var maskHeight = $(document).height();
    var maskWidth = $(document).width();

    $mask.css({'width': maskWidth, 'height': maskHeight});

    //transition effect
    $mask.css('opacity', 0.7);
    $mask.css('transition', '0.7s ease');

    var windowHeight = $(window).height();
    var windowWidth = $(window).width();

    $dialog.css('top', windowHeight/2 - $dialog.height()/2);
    $dialog.css('left', windowWidth/2 - $dialog.width()/2);

    $dialog.fadeIn(2500);

    $('#leavePageButton').click(function() {
        $dialog.effect('bounce', 'slow');
    });
    $('#goPageButton').click(function(){
        $dialog.css('display','none');
    });

});
