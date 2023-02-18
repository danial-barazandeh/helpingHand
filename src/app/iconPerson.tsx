import L from 'leaflet';

const iconPerson = new L.Icon({
    iconUrl: require('../../public/images/Pin.svg'),
    iconRetinaUrl: require('../../public/images/Pin.svg'),
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export { iconPerson };