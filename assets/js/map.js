const map = L.map('map').setView([40.684141, -73.914453], 14);

const myIcon = L.icon({
    iconUrl: 'assets/img/Pin.svg',
    iconSize: [80, 80],
});

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([40.684141, -73.914453], {icon: myIcon}).addTo(map);

