


function getLocationUpdate() {

    if (navigator.geolocation) {
        
        // timeout at 60000 milliseconds (60 seconds)
        var options = { timeout: 20000 };
        geoLoc = navigator.geolocation;
        watchID = geoLoc.watchPosition(showLocation, errorHandler, options);
    }
    else {
        alert("Sorry, browser does not support geolocation!");
    }
}
function stopWatch() {
    geoLoc.clearWatch(watchID);
}
