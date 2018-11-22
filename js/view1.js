mapboxgl.accessToken = 'pk.eyJ1IjoiYW15am9obnMiLCJhIjoiY2ppMmttcHg4MXVyZDNxcGtkNW1mbm9ubiJ9.qIfKvUPNa1MNQQPb0o-RWQ';
const map = new mapboxgl.Map({
    container: 'mapid',
    style: 'mapbox://styles/amyjohns/cjoqnri125x4n2rp6uc20ffia',
    center: [75.770388, 26.942411],
    zoom: 12
});

var url = 'https://geomap-a240a.firebaseio.com/ac1/bus1.json?callback';
map.on('load', function () {
    window.setInterval(function () {
        map.getSource('drone').setData(url);
    }, 2000);
    
    map.addSource('drone', { type: 'geojson', data: url });
    map.addLayer({
        "id": "drone",
        "type": "symbol",
        "source": "drone",
        "layout": {
            "icon-image": "marker-15"
        }
    });
});



