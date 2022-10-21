import React, { useEffect, useRef } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
/* import { Box } from '@chakra-ui/react'; */
import { Badge, Container, Row, Col } from 'reactstrap';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFyaWpvc2UyOSIsImEiOiJja3NybHFjb2QwbmxkMnZwNzl5cW5rcXZyIn0.OYc1AggBupUnzQlWlzDXRw';

function GeojsonPolygon2() {

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
                    'fill-color': '#ac1d', // blue color fill
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
                    'line-color': '#ac1d81',
                    'line-width': 5
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
                backgroundColor: 'rgba(0,0,0,0.90)',
            }}
        >
            <h4
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '10px',
                    
                }}
            >
                {' '}
                <Badge>
                    GeoJson Pilas Centinela 2
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

export default GeojsonPolygon2;