

const imgUrls = {
    activity: 'url(http://i.imgur.com/WbMOfMl.png)',
    hotel: 'url(http://i.imgur.com/D9574Cu.png)',
    activity: 'url(http://i.imgur.com/cqR6pUI.png)'
}

const buildMarker = function(type, coord){

    const markerDomEl = document.createElement('div');
    markerDomEl.style.width = '32px';
    markerDomEl.style.height = '39px';
    markerDomEl.style.backgroundImage = imgUrls[type];

    const newMarker = new mapboxgl.Marker(markerDomEl).setLngLat([coord]).addTo(map);
    return newMarker;
}







module.exports = buildMarker 