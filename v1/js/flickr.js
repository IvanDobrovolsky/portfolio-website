function initializeClickrWidget(tagName){
    var flickrAPIurl = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    $.getJSON(flickrAPIurl, {
        tags: tagName,
        tagmode: 'any',
        format: 'json'
    }).done(function (data) {
        $.each(data.items, function(i, item){
            var $img = $('<img>');
            var $link = $('<a>');
            $link.attr({'href': item.link, 'target': '_blank'}).appendTo('.my-flickr');
            $img.hide();
            $img.attr('src', item.media.m).appendTo($link).css({'height': $img.width() + 'px'});
            $img.fadeIn(1000);
            if (i === 8){
                return false;
            }
        });
    });
}

function removeOldPictures(){
    var node = document.getElementById('flickr-container');
    while(node.firstChild){
        node.removeChild(node.firstChild);
    }
}

$(document).ready(function(){
    initializeClickrWidget('technology');
    var tags = document.getElementsByClassName('clickr-item');
    for(var i=0; i<tags.length; i++){
        tags[i].addEventListener("click", function(){
            /*Toggling buttons*/
            $('.clickr-item').removeClass('active-tag-cloud');
            this.className = "clickr-item active-tag-cloud";
            removeOldPictures();
            initializeClickrWidget(this.textContent);
        });
    }


});
