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
    //setInterval(function () { alert("Hello"); }, 3000);
 
 
        
    firebasedata.child('route/14').push(
         [longitude, latitude]
    ); 
    
 
    


}
/*function callingfunction(a1,a2) {
    firebasedata.child('ac1/bus1').update({
        "geometry": { "type": "Point", "coordinates": [a2, a1] }, "type": "Feature", "properties": {}

    });
    firebasedata.child('ac1/bus1/geometry/coordinates').remove();
    
}*/



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
            timeout: 20000,
            maximumAge: 20000
        };
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
