function setCoord(pos) {
    if (pos.coords !== undefined) {
        latitude = pos.coords.latitude;
        longitude = pos.coords.longitude;

        map.panTo({lat: latitude, lng: longitude});

        var xhr = new XMLHttpRequest();
        var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyBkgq6skqj_3s0ME2aQHUmq6N_EJ4iADKs&location=" + latitude + "," + longitude + "&radius=1000&keyword=restaurant&maxprice=1";
        xhr.open("GET", url, false);
        xhr.send();

        var text = xhr.responseText + "";
        var data = JSON.parse(text);

        console.log(data["results"].length);
        restaurants = data["results"];
        var list = document.getElementById("restaurants");
        for (var x = 0; x < data["results"].length; x++) {
            var place = data["results"][x];
            console.log(place);
            if (place["name"] !== undefined) {
                var marker = new google.maps.Marker({
                    position: {
                        lat: place["geometry"]["location"]["lat"],
                        lng: place["geometry"]["location"]["lng"]
                    },
                    map: map
                });
                foodMarkers.push(marker);
                var li = document.createElement("li");
                li.innerHTML = place["name"] + "<br>" + place["vicinity"];
                li.addEventListener("click", navigate);
                list.appendChild(li);
            }
        }

    }
}


function navigate(event) {
    var vicinity = event.currentTarget.innerHTML.split("<br>")[1];
    gm.nav.setDestination(function () {
        console.log("Success")
    }, function () {
        console.log("Error")
    }, {address: vicinity}, true)
}

gm.info.getCurrentPosition(setCoord, null, true);