import React, { useEffect, useRef, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import './GeojsonPolygonPrueba2.css';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/* mapboxgl.accessToken = 'pk.eyJ1IjoibWFyaWpvc2UyOSIsImEiOiJja3NybHFjb2QwbmxkMnZwNzl5cW5rcXZyIn0.OYc1AggBupUnzQlWlzDXRw'; */ //Centinela
mapboxgl.accessToken = 'pk.eyJ1IjoiY2FyaXRvNyIsImEiOiJjbDh0YThqdTIwNWpwM3ZwbmN4ZHI5MmUyIn0.YSVnpB21m6v0Qrevr_xqVw';

function GeojsonPolygonPrueba2() {

    const node = useRef(null);

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/carito7/cl9ha2oat003h15nvo0o4sp1a',
            center: [-69.261980827293442, -22.812123941135098],
            zoom: 3
        });

        map.on('load', () => {
            // Add a source for the state polygons.
            map.addSource('maine', {
                'type': 'geojson',
                'data': {
                    "type": "FeatureCollection", "features": [{
                        "type": "Feature", "properties": { "name": "Pila 1", "title": "Título", "description": "Monitoreo un lindo proceso de Lixiviación" }, "geometry": {
                            "type": "Polygon",
                            'coordinates': [
                                [
                                    [-69.268725, -22.798259],
                                    [- 69.266622, -22.797710],
                                    [- 69.266942, -22.804659],
                                    [- 69.264838, -22.804248]
                                ]

                            ]
                        }
                    }]
                },
            });


            map.addLayer({
                'id': 'states-layer',
                'type': 'fill',
                'source': 'states',
                'paint': {
                    'fill-color': 'rgba(200, 100, 240, 0.4)',
                    'fill-outline-color': 'rgba(200, 100, 240, 1)'
                }
            });


            map.on('click', 'maine', (e) => {
                new mapboxgl.Popup()
                    .setLngLat(e.lngLat)
                    .setHTML(e.features[0].properties.name)
                    .setHTML(e.features[0].properties.message)
                    .setHTML(
                        `<h3>${e.features[0].properties.title} hola hola</h3><p>${e.features[0].properties.description}</p>`
                    )
                    .addTo(map);
            })

            map.on('mouseenter', 'maine', (e) => {
                map.getCanvas().style.cursor = 'pointer';
            })

            map.on('mouseleave', 'maine', (e) => {
                map.getCanvas().style.cursor = '';
            })
        });
    });

    return (
        <div style={{ display: 'flex', maxWidth: "100%", bgcolor: "black", color: "white" }}>

            {/* mapa poligono */}
            <Container
                className="bg-light border"
                fluid
                id="map" ref={node}
                style={{
                    width: '80%',
                    height: '620px',
                }}
                onClick={toggle}
            >
                <Row>
                    <Col className="bg-light border">
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default GeojsonPolygonPrueba2;