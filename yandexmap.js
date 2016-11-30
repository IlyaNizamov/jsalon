ymaps.ready(init);

var myMap;

function init () {
    myMap = new ymaps.Map('map', {
        center: [55.755768, 37.617671],
        zoom: 10,
        controls: []
    });
    myMap.container.fitToViewport();


    myMap.geoObjects.add(addMyPlacemark(55.642063, 37.656123, 'Офис Яндекса в Москве', 'Адрес: 119021, Москва, ул. Льва Толстого, 16', '00000014'));
    myMap.geoObjects.add(addMyPlacemark(55.8, 37.6, 'Санаторий', 'Адрес: 119021, Москва, ул. Льва Толстого, 16', '00000015'));

}

function addMyPlacemark(N, E, header, body, dataContent) {

    myPlacemark = new ymaps.Placemark([N, E],
        {
            balloonContentHeader: header,
            balloonContentBody: body,
            balloonContentFooter: '<button type="button" class="btn btn-primary btn-xs" data-toggle="modal" data-target="#myModal" data-content="'+dataContent+'"> Записаться </button>'
        },
        {preset: 'islands#redGlyphIcon',
            iconGlyph: 'home'});
    myPlacemark.events.add('mousedown', function () {
        $('#myModal').on('show.bs.modal', function (event) {
            var button = $(event.relatedTarget)
            var content = button.data('content')
            $(this).find('#content').text(content);
        })
    });

    return myPlacemark;
}