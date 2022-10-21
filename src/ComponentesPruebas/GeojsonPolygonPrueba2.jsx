import React, { useEffect } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import './GeojsonPolygonPrueba2.css'
/* import { Badge, Container, Row, Col } from 'reactstrap'; */

/* mapboxgl.accessToken = 'pk.eyJ1IjoibWFyaWpvc2UyOSIsImEiOiJja3NybHFjb2QwbmxkMnZwNzl5cW5rcXZyIn0.OYc1AggBupUnzQlWlzDXRw'; */ //Centinela
mapboxgl.accessToken = 'pk.eyJ1IjoiY2FyaXRvNyIsImEiOiJjbDh0YThqdTIwNWpwM3ZwbmN4ZHI5MmUyIn0.YSVnpB21m6v0Qrevr_xqVw';

function GeojsonPolygonPrueba2() {

    /* const node = useRef(null); */

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-100.04, 38.907],
            zoom: 3
        });

        map.on('load', () => {
            // Add a source for the state polygons.
            map.addSource('states', {
                'type': 'geojson',
                'data': 'https://docs.mapbox.com/mapbox-gl-js/assets/ne_110m_admin_1_states_provinces_shp.geojson'
            });

            // Add a layer showing the state polygons.
            map.addLayer({
                'id': 'states-layer',
                'type': 'fill',
                'source': 'states',
                'paint': {
                    'fill-color': 'rgba(200, 100, 240, 0.4)',
                    'fill-outline-color': 'rgba(200, 100, 240, 1)'
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

export default GeojsonPolygonPrueba2;