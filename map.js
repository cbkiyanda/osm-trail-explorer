// create a map in the "map" div, set the view to a given place and zoom
var map = L.map('map').setView([45.51947, -73.56017], 13);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

$.getJSON("bibliotheques.geojson", function(json) {
  L.geoJson(json).addTo(map);
});