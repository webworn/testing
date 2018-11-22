
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



