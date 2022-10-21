import React, { useEffect } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import './GeojsonPolygonPrueba3.css'
/* import { Badge, Container, Row, Col } from 'reactstrap'; */

/* mapboxgl.accessToken = 'pk.eyJ1IjoibWFyaWpvc2UyOSIsImEiOiJja3NybHFjb2QwbmxkMnZwNzl5cW5rcXZyIn0.OYc1AggBupUnzQlWlzDXRw'; */ //Centinela
/* mapboxgl.accessToken = 'pk.eyJ1IjoiY2FyaXRvNyIsImEiOiJjbDh0YThqdTIwNWpwM3ZwbmN4ZHI5MmUyIn0.YSVnpB21m6v0Qrevr_xqVw'; */

mapboxgl.accessToken = 'pk.eyJ1IjoiY2FyaXRvNyIsImEiOiJjbDh0YThqdTIwNWpwM3ZwbmN4ZHI5MmUyIn0.YSVnpB21m6v0Qrevr_xqVw' //Centinela en escala de grises

function GeojsonPolygonPrueba0() {

    /* const node = useRef(null); */

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/carito7/cl9ha2oat003h15nvo0o4sp1a',
            center: [-69.261980827293442, -22.812123941135098],
            zoom: 13
        });

        map.on('load', () => {
            map.addSource('maine', {
                'type': 'geojson',
                'data': {
                    "type": "FeatureCollection", "features": [{ "type": "Feature", "properties": { "name": "Pila 1", "name_alt": "MN|Minn.", "name_local": null, "type": "Maine", "type_en": "State", "note": null, "hasc_maybe": null, "name_len": 9, "mapcolor9": 1, "mapcolor13": 1, "featureclass": "Admin-1 scale rank" }, "geometry": { "type": "Polygon", "coordinates": [
                        [
                            [-69.261980827293442, -22.812123941135098],
                            [-69.258232023667375, -22.811295717078181],
                            [-69.251867775651036, -22.834180855493084],
                            [-69.255921714455965, -22.835444986948385],
                            [-69.256008895935651, -22.83553216842806],
                            [-69.256488394073855, -22.834485990671951],
                            [-69.256488394073111, -22.834485990671970],//cordenadas agregadas por mi 
                            [-69.256488394073100, -22.834485990671960],
                            [-69.256488394073095, -22.834485990671950],
                            [-69.256488394073070, -22.834485990671940],
                            [-69.256488394073050, -22.834485990671930],
                            [-69.256488394073040, -22.834485990671920],
                            [-69.256488394073030, -22.834485990671910],
                            [-69.256488394073010, -22.834485990671890],
                            [-69.256488394073001, -22.834485990671850],
                        ]
                    ] }}]}});

            // Add a layer showing the state polygons.
            map.addLayer({
                'id': 'states-layer',
                'type': 'fill',
                'source': 'maine',
                'paint': {
                    'fill-color': 'rgba(200, 100, 240, 0.4)',
                    'fill-outline-color': 'rgba(200, 100, 240, 1)',
                    'line-width': 4
                }
            });

            // When a click event occurs on a feature in the states layer,
            // open a popup at the location of the click, with description
            // HTML from the click event's properties.
            map.on('click', 'states-layer', (e) => {
                new mapboxgl.Popup()
                    .setLngLat(e.lngLat)
                    .setHTML(e.features[0].properties.name)
                    .addTo(map);
            });

            // Change the cursor to a pointer when
            // the mouse is over the states layer.
            map.on('mouseenter', 'states-layer', () => {
                map.getCanvas().style.cursor = 'pointer';
            });

            // Change the cursor back to a pointer
            // when it leaves the states layer.
            map.on('mouseleave', 'states-layer', () => {
                map.getCanvas().style.cursor = '';
            });
        });
    });

    return (
        <div
            id="map"
        /* style={{
            margin: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.90)',
        }} */
        >
        </div>
    )
}

export default GeojsonPolygonPrueba0;