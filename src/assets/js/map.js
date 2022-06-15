$(document).ready(function() {

    if ($('#map').length) {
        let myYandexMap;

        ymaps.ready(init);

        function init () {
            let centered;

            if ($(window).width() < 768) {
                centerX = 92.851431;
                centerY = 56.100000;
            } else {
                centerX = 92.556642;
                centerY = 56.135875;
            }

            myYandexMap = new ymaps.Map('map', {
                center: [centerY, centerX],
                zoom: 10,
                controls: []
            }, {
                searchControlProvider: 'yandex#search'
            }),

            myPlacemark = new ymaps.Placemark([56.085957, 92.851431], {
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'assets/images/moscow-metro.svg',
                // Размеры метки.
                iconImageSize: [50, 45],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5, -38]
            }),

            myYandexMap.geoObjects.add(myPlacemark);
            myYandexMap.behaviors.disable('scrollZoom');
        }
    }

})