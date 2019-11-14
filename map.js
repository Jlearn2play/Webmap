var map = L.map('map').setView([58.42079, 109.09396], 6);
mapLink =
    '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
    'https://api.mapbox.com/styles/v1/annast/ck2x1xsc21c5v1cmu17k9aozo/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYW5uYXN0IiwiYSI6ImNrMjRmcXNqcjAxNTkzYmt4dXA5MjY5dzEifQ.3krMoWv0JIQ7jpoNUyyJXg').addTo(map);

function onEachFeature(feature, layer){
	if (feature.properties && feature.properties.popupContent){
		layer.bindPopup(feature.properties.popupContent);
	};
};

/*
(feature.properties && feature.properties.title){
		layer.bindPopup(feature.properties.title);
*/
var testFeature =

L.geoJSON(testFeature, {
	onEachFeature: onEachFeature
	}
).addTo(map);

var LES = {
     "type": "FeatureCollection",
"name": "FiresforWEB",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:EPSG::3857" } },
"features": [
{ "type": "Feature", "properties": { "title": "Яркость", "popupContent":"Яркость 330.9" }, "geometry": { "type": "Point", "coordinates": [ 109.09396, 60.14565 ] } },
{ "type": "Feature", "properties": { "title": "Яркость", "popupContent":"Яркость 331.1" }, "geometry": { "type": "Point", "coordinates": [ 109.1013, 60.14561 ] } },
{ "type": "Feature", "properties": { "title": "Яркость", "popupContent":"Яркость 338.0" }, "geometry": { "type": "Point", "coordinates": [ 109.09579, 60.14867 ] } },
{ "type": "Feature", "properties": { "title": "Яркость", "popupContent":"Яркость 323.5" }, "geometry": { "type": "Point", "coordinates": [ 107.80761, 59.42301 ] } },
{ "type": "Feature", "properties": { "title": "Яркость", "popupContent":"Яркость 323.2" }, "geometry": { "type": "Point", "coordinates": [ 107.81242, 59.42586 ] } },
{ "type": "Feature", "properties": { "title": "Яркость", "popupContent":"Яркость 367.0" }, "geometry": { "type": "Point", "coordinates": [ 107.60094, 58.44862 ] } },
{ "type": "Feature", "properties": { "title": "Яркость", "popupContent":"Яркость 345.7" }, "geometry": { "type": "Point", "coordinates": [ 107.66296, 58.43092 ] } },
{ "type": "Feature", "properties": { "title": "Яркость", "popupContent":"Яркость 367.0" }, "geometry": { "type": "Point", "coordinates": [ 107.37128, 58.42458 ] } },
{ "type": "Feature", "properties": { "title": "Яркость", "popupContent":"Яркость 344.6" }, "geometry": { "type": "Point", "coordinates": [ 107.48633, 58.42483 ] } },
{ "type": "Feature", "properties": { "title": "Яркость", "popupContent":"Яркость 367.0" }, "geometry": { "type": "Point", "coordinates": [ 107.57825, 58.42496 ] } },
{ "type": "Feature", "properties": { "title": "Яркость", "popupContent":"Яркость 336.0" }, "geometry": { "type": "Point", "coordinates": [ 107.66296, 58.42501 ] } },
{ "type": "Feature", "properties": { "title": "Яркость", "popupContent":"Яркость 327.6" }, "geometry": { "type": "Point", "coordinates": [ 107.3877, 58.41866 ] } },
{ "type": "Feature", "properties": { "title": "Яркость", "popupContent":"Яркость 354.5" }, "geometry": { "type": "Point", "coordinates": [ 107.44552, 58.4188 ] } },
{ "type": "Feature", "properties": { "title": "Яркость", "popupContent":"Яркость 321.5" }, "geometry": { "type": "Point", "coordinates": [ 107.10026, 58.13718 ] } },
{ "type": "Feature", "properties": { "title": "Яркость", "popupContent":"Яркость 344.9" }, "geometry": { "type": "Point", "coordinates": [ 107.10873, 58.13721 ] } },
{ "type": "Feature", "properties": { "title": "Яркость", "popupContent":"Яркость 335.0" }, "geometry": { "type": "Point", "coordinates": [ 106.54039, 58.09734 ] } },
{ "type": "Feature", "properties": { "title": "Яркость", "popupContent":"Яркость 330.0" }, "geometry": { "type": "Point", "coordinates": [ 106.54343, 58.09794 ] } },
{ "type": "Feature", "properties": { "title": "Яркость", "popupContent":"Яркость 332.9" }, "geometry": { "type": "Point", "coordinates": [ 106.54409, 58.09183 ] } },
{ "type": "Feature", "properties": { "title": "Яркость", "popupContent":"Яркость 367.0" }, "geometry": { "type": "Point", "coordinates": [ 106.54293, 58.03669 ] } },
{ "type": "Feature", "properties": { "title": "Яркость", "popupContent":"Яркость 322.0" }, "geometry": { "type": "Point", "coordinates": [ 106.55156, 58.03675 ] } },
{ "type": "Feature", "properties": { "title": "Яркость", "popupContent":"Яркость 322.3" }, "geometry": { "type": "Point", "coordinates": [ 106.54279, 58.03056 ] } },
{ "type": "Feature", "properties": { "title": "Яркость", "popupContent":"Яркость 354.7" }, "geometry": { "type": "Point", "coordinates": [ 106.80051, 57.98365 ] } },
{ "type": "Feature", "properties": { "title": "Яркость", "popupContent":"Яркость 336.4" }, "geometry": { "type": "Point", "coordinates": [ 106.80953, 57.98372 ] } },
{ "type": "Feature", "properties": { "title": "Яркость", "popupContent":"Яркость 367.0" }, "geometry": { "type": "Point", "coordinates": [ 106.79632, 57.98374 ] } },
{ "type": "Feature", "properties": { "title": "Яркость", "popupContent":"Яркость 350.3" }, "geometry": { "type": "Point", "coordinates": [ 106.80544, 57.98376 ] } },
{ "type": "Feature", "properties": { "title": "Яркость", "popupContent":"Яркость 345.3" }, "geometry": { "type": "Point", "coordinates": [ 106.81429, 57.98379 ] } },
{ "type": "Feature", "properties": { "title": "Яркость", "popupContent":"Яркость 367.0" }, "geometry": { "type": "Point", "coordinates": [ 105.80967, 57.90121 ] } },
{ "type": "Feature", "properties": { "title": "Яркость", "popupContent":"Яркость 367.0" }, "geometry": { "type": "Point", "coordinates": [ 105.88522, 57.87716 ] } },
{ "type": "Feature", "properties": { "title": "Яркость", "popupContent":"Яркость 367.0" }, "geometry": { "type": "Point", "coordinates": [ 105.88524, 57.8709 ] } },
{ "type": "Feature", "properties": { "title": "Яркость", "popupContent":"Яркость 367.0" }, "geometry": { "type": "Point", "coordinates": [ 105.8842, 57.87402 ] } },
{ "type": "Feature", "properties": { "title": "Яркость", "popupContent":"Яркость 324.2" }, "geometry": { "type": "Point", "coordinates": [ 106.81745, 57.77726 ] } },
{ "type": "Feature", "properties": { "title": "Яркость", "popupContent":"Яркость 324.4" }, "geometry": { "type": "Point", "coordinates": [ 109.10367, 60.1468 ] } },
{ "type": "Feature", "properties": { "title": "Яркость", "popupContent":"Яркость 325.6" }, "geometry": { "type": "Point", "coordinates": [ 109.09332, 60.14508 ] } },
{ "type": "Feature", "properties": { "title": "Яркость", "popupContent":"Яркость 354.9" }, "geometry": { "type": "Point", "coordinates": [ 106.55307, 58.03289 ] } },
{ "type": "Feature", "properties": { "title": "Яркость", "popupContent":"Яркость 367.0" }, "geometry": { "type": "Point", "coordinates": [ 106.55376, 58.03642 ] } },
{ "type": "Feature", "properties": { "title": "Яркость", "popupContent":"Яркость 367.0" }, "geometry": { "type": "Point", "coordinates": [ 106.54457, 58.03108 ] } },
{ "type": "Feature", "properties": { "title": "Яркость", "popupContent":"Яркость 345.1" }, "geometry": { "type": "Point", "coordinates": [ 105.88702, 57.87538 ] } },
{ "type": "Feature", "properties": { "title": "Яркость", "popupContent":"Яркость 367.0" }, "geometry": { "type": "Point", "coordinates": [ 105.89787, 57.87017 ] } },
{ "type": "Feature", "properties": { "title": "Яркость", "popupContent":"Яркость 367.0" }, "geometry": { "type": "Point", "coordinates": [ 105.81137, 57.90201 ] } }
]
}

L.geoJSON(LES, {
	onEachFeature: onEachFeature
}).addTo(map);
