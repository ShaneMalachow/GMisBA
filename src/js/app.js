// Your code goes here

function showPos(position) {
    var p = document.getElementById("test");
    if (position.coords !== undefined) {
        p.innerHTML = position.coords.longitude + " " + position.coords.latitude
    }
}

gm.info.getCurrentPosition(showPos);
gm.info.watchPosition(showPos);