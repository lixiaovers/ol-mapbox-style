import 'ol-zhyt/ol.css';
import VectorLayer from 'ol-zhyt/layer/Vector';
import VectorSource from 'ol-zhyt/source/Vector';
import GeoJsonFormat from 'ol-zhyt/format/GeoJSON';
import Map from 'ol-zhyt/Map';
import View from 'ol-zhyt/View';

import stylefunction from 'ol-mapbox-style/dist/stylefunction';

const layer = new VectorLayer({
    declutter: true,
    source: new VectorSource({
        format: new GeoJsonFormat(),
        url: 'data/states.geojson'
    })
});

const map = new Map({
    target: 'map',
    view: new View({
        center: [-13603186.115192635, 6785744.563386],
        zoom: 2
    })
});

fetch('data/states.json')
    .then(r => r.json())
    .then((glStyle) => {
        stylefunction(layer, glStyle, 'states');
        if (map.getLayers().getArray().indexOf(layer) === -1) {
            map.addLayer(layer);
        }
    });
