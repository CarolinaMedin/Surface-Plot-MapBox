import React, { useEffect, useRef } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
/* import { Box } from '@chakra-ui/react'; */
import { Badge, Container, Row, Col } from 'reactstrap';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFyaWpvc2UyOSIsImEiOiJja3NybHFjb2QwbmxkMnZwNzl5cW5rcXZyIn0.OYc1AggBupUnzQlWlzDXRw';

function GeojsonPolygon() {

    const node = useRef(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/satellite-v8', // style URL
            center: [-69.2473779, -22.808651], // starting position
            zoom: 12 // starting zoom
        });

        map.on('load', () => {
            // Add a data source containing GeoJSON data.
            map.addSource('maine', {
                'type': 'geojson',
                'data': {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Polygon',
                        // These coordinates outline Maine.
                        'coordinates': [
                            [
                                [-69.261980827293442, -22.812123941135098],
                                [-69.258232023667375, -22.811295717078181],
                                [-69.251867775651036, -22.834180855493084],
                                [-69.255921714455965, -22.835444986948385],
                                [-69.256008895935651, -22.83553216842806],
                                [-69.256488394073855, -22.834485990671951],
                            ]
                        ]
                    }
                }
            });

            map.addLayer({
                'id': 'maine',
                'type': 'fill',
                'source': 'maine', // reference the data source
                'layout': {},
                'paint': {
                    'fill-color': '#5555', // blue color fill
                    'fill-opacity': 0.5
                }
            });
            // Add a black outline around the polygon.
            map.addLayer({
                'id': 'outline',
                'type': 'line',
                'source': 'maine',
                'layout': {},
                'paint': {
                    'line-color': '#5555',
                    'line-width': 3
                }
            })
        })
    });

    return (
        <div
            style={{
                margin: '0',
                width: '100%',
                height: '100%',
                /* top: 5,
                right: 0,
                left: 20,
                bottom: 0, */
            }}
        >
            <h4
                style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                {' '}
                <Badge>
                    GeoJson Pilas Centinela
                </Badge>
            </h4>
            <Container
                className="bg-light border"
                fluid
                id="map" ref={node}
                style={{
                    width: '100%',
                    height: '620px',
                }}
            >
                <Row>
                    <Col className="bg-light border">
                        hola
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default GeojsonPolygon;