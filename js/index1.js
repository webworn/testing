var config = {
    apiKey: "AIzaSyACfS-zcajoZ_AGrOSr3bQQf9ikAYDaaFI",
    authDomain: "geomap-a240a.firebaseapp.com",
    databaseURL: "https://geomap-a240a.firebaseio.com",
    projectId: "geomap-a240a",
    storageBucket: "",
    messagingSenderId: "92013339379"
};
firebase.initializeApp(config);
var firebasedata = firebase.database().ref();
var watchID;
var geoLoc;


function toggle(input) {
    if (input.value == "OFF") {
        stopWatch();
        input.value = "ON";
        
    } else {
        getLocationUpdate();
        
        input.value = "OFF";
    }
}


function showLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var accuracy = position.coords.accuracy;
    firebasedata.child('ac1/bus1/geometry/coordinates').remove();
    firebasedata.child('ac1/bus1').set({
        "geometry": { "type": "Point", "coordinates": [longitude, latitude] }, "type": "Feature", "properties": {}
        
    });
    
    

}

function errorHandler(err) {
    if (err.code == 1) {
        alert("Error: Access is denied!");
    } else if (err.code == 2) {
        alert("Error: Position is unavailable!");
    }
}

function getLocationUpdate() {

    if (navigator.geolocation) {
        
        // timeout at 60000 milliseconds (60 seconds)
        var options = {
            enableHighAccuracy: true,
            timeout: 20000 };
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
