module.exports = function ($) {
    var map;
    var directionsDisplay;
    var directionsService = new google.maps.DirectionsService();
    var userCurrentLocation, myLocation;

    function initialize (location) {

        directionsDisplay = new google.maps.DirectionsRenderer();

        userCurrentLocation = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
        myLocation = new google.maps.LatLng(50.4493132, 30.450645399999985);

        var mapOptions = {
            center: userCurrentLocation,
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.SATELLITE
        };

        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

        /*Location markers */
        var userMarker = new google.maps.Marker({
            position: userCurrentLocation,
            map: map,
            title: 'Your current location is here!'
        });

        var myMarker = new google.maps.Marker({
            position: myLocation,
            map: map,
            title: "Ivan Dobrovolskyi lives here!"
        });

        directionsDisplay.setMap(map);
        calcRoute();
    }

    function calcRoute() {
        var request = {
            origin: userCurrentLocation,
            destination: myLocation,
            travelMode: google.maps.TravelMode.DRIVING
        };
        directionsService.route(request, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
            }
        });
    }

    function successHandler (location) {
        initialize(location);
    }

    function errorHandler (error) {
        console.warn("Apparently Google Maps is disabled...", error);

        var rightBlock = $('.contacts-map').parent();
        var leftBlock = $('.contacts-details').parent();

        //Hiding the right block and expanding the left one
        rightBlock.hide();
        leftBlock.removeClass('col-md-6').removeClass('col-lg-6').addClass('col-lg-12 col-md-12');
    }

    //Map initialization
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler);

    $('.contacts-map-overlay').click(function(){
        $(this).fadeOut();
    });
};