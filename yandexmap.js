ymaps.ready(init);

var myMap;

function init () {
    myMap = new ymaps.Map('map', {
        center: [55.755768, 37.617671],
        zoom: 10
    });
    myMap.container.fitToViewport();
}