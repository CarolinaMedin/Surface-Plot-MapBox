import React, { useEffect, useRef } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import { Badge, Container, Row, Col } from 'reactstrap';

mapboxgl.accessToken = 'pk.eyJ1IjoiY2FyaXRvNyIsImEiOiJjbDh0YThqdTIwNWpwM3ZwbmN4ZHI5MmUyIn0.YSVnpB21m6v0Qrevr_xqVw' //Centinela en escala de grises

function GeojsonPolygonPrueba3() {

    const node = useRef(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/carito7/cl9ha2oat003h15nvo0o4sp1a',
            center: [-69.261980827293442, -22.812123941135098], 
            zoom: 13 
        });

        map.on('load', () => {
            // Add a data source containing GeoJSON data.
            map.addSource('maine', {
                'type': 'geojson',
                'data': {
                    "type": "FeatureCollection", "features": [{
                        "type": "Feature", "properties": { "name": "Pila 1", "name_alt": "MN|Minn.", "name_local": null, "type": "Maine", "type_en": "State", "note": null, "hasc_maybe": null, "name_len": 9, "mapcolor9": 1, "mapcolor13": 1, "featureclass": "Admin-1 scale rank" }, "geometry": {
                            "type": "Polygon",
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
                            ] }}]}});

            map.addLayer({
                'id': 'maine',
                'type': 'fill',
                'source': 'maine', 
                'layout': {},
                'paint': {
                    'fill-color': 'rgba(200, 100, 240, 0.4)',
                    'fill-outline-color': 'rgba(200, 100, 240, 1)',
                    'fill-opacity': 1
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
                    'line-width': 4
                }
            })

            /* map.on('click', 'outline', (e) => {
            const [modal, setModal] = useState(false);
            const toggle = () => setModal(!modal);
        });  */

            map.on('click', 'maine', (e) => {
                new mapboxgl.Popup()
                    .setLngLat(e.lngLat)
                    .setHTML(e.features[0].properties.name)
                    .addTo(map);
                console.log("algo esta haciendo");
            })


            map.on('mouseenter', 'maine', (e) => {
                map.getCanvas().style.cursor = 'pointer';
            })

            map.on('mouseleave', 'maine', (e) => {
                map.getCanvas().style.cursor = '';
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
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default GeojsonPolygonPrueba3;