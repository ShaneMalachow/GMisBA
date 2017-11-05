// Your code goes here

var latitude;
var longitude;

function setCoord(pos) {
    if (pos.coords !== undefined) {
        latitude = pos.coords.latitude;
        longitude = pos.coords.longitude;

        // var mapOptions = {
        //     center: new google.maps.LatLng(latitude, longitude),
        //     zoom: 10,
        //     mapTypeId: google.maps.MapTypeId.ROADMAP
        // };
        document.getElementById("coords").innerHTML = latitude + " " + longitude;
        // map = new google.maps.Map(document.getElementById("map"), mapOptions);
    }
}

gm.info.getCurrentPosition(setCoord, null, true);
gm.info.watchPosition(setCoord, null, true);