/**
 * Created by geek_id on 8/5/15.
 */

function getFlickrUrl(){
    var url = "http://api.flickr.com/services/feeds/photos_public.gne?tags="+getTagName()+"&format=json&jsoncallback=?"
    return url;
}

function main(url){
    $.getJSON(url, function(flickrResponse){
        flickrResponse.items.forEach(function(photo){
            var $img = $("<img>").hide();
            $img.attr("src", photo.media.m);
            $("main .photos").append($img);
            $img.fadeIn(4000);
        });
    });
}
$(document).ready(function(){
    var tags = document.getElementsByClassName('clickr-item');
    for(var i=0; i<tags.length; i++){
        tags[i].addEventListener("click", getTagName(i));
    }
    function getTagName(index){
        alert(tags[index].textContent);
    }
});
