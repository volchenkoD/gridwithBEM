//яндекс карта
// Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.

        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [61.24840620901874, 73.37225814466093],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 17,
            controls: ['smallMapDefaultSet']
        });
        myMap.controls.get('routeButtonControl');
        myMap.controls
            .remove('geolocationControl')
            .remove('trafficControl')
            .remove('searchControl');
        myMap.behaviors.disable([
            'drag',
            'scrollZoom'
        ]);
        var myPin = new ymaps.GeoObjectCollection({}, {
            iconLayout: 'default#image',
            iconImageHref: 'build/img/index_pages/yellow pointer.png',
            iconImageSize: [50, 54],
            iconImageOffset: [-3, -40]
        });
        var myPieChart = new ymaps.Placemark([
            61.24840620901874, 73.37225814466093],
            {
            balloonContentHeader: 'Магазин Двери и Сейфы',
            balloonContentBody: 'Оптовая и розничная продажа',
            balloonContentFooter: 'Телефон: +7(3462) 91-83-43',
            hintContent: 'Магазин Двери и Сейфы'
            })
        myPin.add(myPieChart);
        myMap.geoObjects.add(myPin);
    }