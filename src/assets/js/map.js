$(document).ready(function() {

    const locations = [];

    $('.shops__metro-logo').each(function() {
        locations.push({placemark: this.dataset.color,  coords: [this.dataset.coords.split(',')[0], this.dataset.coords.split(',')[1]]})
    })

    if ($('#map').length) {
        let myYandexMap;

        ymaps.ready(init);

        function init () {
            let centered;

            if ($(window).width() < 768) {
                centerX = 37.609051;
                centerY = 55.844935;
            } else {
                centerX = 37.609051;
                centerY = 55.844935;
            }

            myYandexMap = new ymaps.Map('map', {
                center: [centerY, centerX],
                zoom: 10,
                controls: []
            }, {
                searchControlProvider: 'yandex#search'
            });

            // Добавляем точки
            for (let point in locations) {

                myPlacemark = new ymaps.Placemark(locations[point].coords, {
                    openBalloonOnClick: false
                }, {
                    // Опции.
                    // Необходимо указать данный тип макета.
                    iconLayout: ymaps.templateLayoutFactory.createClass(`<svg><use xlink:href="assets/images/location.svg#${locations[point].placemark}"></use></svg>`),
                    // Размеры метки.
                    iconImageSize: [50, 45],
                    // Смещение левого верхнего угла иконки относительно
                    // её "ножки" (точки привязки).
                    iconImageOffset: [-5, -38]
                });
                myYandexMap.geoObjects.add(myPlacemark);
            }

            myYandexMap.behaviors.disable('scrollZoom');
        }
    }

})