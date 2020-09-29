let myMap;

const init = () => {
    myMap = new ymaps.Map("map", {
        center: [55.753818, 37.598089],
        zoom: 14,
        controls: []
    });

    const coords = [
        [55.758797, 37.583118],
        [55.742992, 37.581343],
        [55.750635, 37.606128],
        [55.754409, 37.629327]
    ];

    const myCollection = new ymaps.GeoObjectCollection({}, {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: "./img/marker.svg",
        iconImageSize: [58, 73],
        iconImageOffset: [-35, -22]
    });

    coords.forEach(coord => {
        myCollection.add(new ymaps.Placemark(coord));
    });

    myMap.geoObjects.add(myCollection);
}

ymaps.ready(init);