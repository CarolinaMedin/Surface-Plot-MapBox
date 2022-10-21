import React, { useEffect, useRef, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import { Badge, Container, Row, Col } from 'reactstrap';

import SurfacePlot2 from '../SurfacePlot2';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFyaWpvc2UyOSIsImEiOiJja3NybHFjb2QwbmxkMnZwNzl5cW5rcXZyIn0.OYc1AggBupUnzQlWlzDXRw';

function TemplatePolygon3() {

    const node = useRef(null);

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/satellite-v8', // style URL
            center: [-69.2473779, -22.808651], // starting position
            zoom: 12 // starting zoom
        });


        map.on('load', () => {
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
                    'fill-color': '#ac1',
                    'line-width': 5,
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
                    'line-width': 5,
                    'fill-color': 'rgba(200, 100, 240, 0.4)',
                    'fill-outline-color': 'rgba(200, 100, 240, 1)'
                }
            })
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
        })

        // Change the cursor to a pointer when
        // the mouse is over the states layer.
        map.on('mouseenter', 'maine', (e) => {
            map.getCanvas().style.cursor = 'pointer';
        })

        // Change the cursor back to a pointer
        // when it leaves the states layer.
        map.on('mouseleave', 'maine', (e) => {
            map.getCanvas().style.cursor = '';
        })
    })



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
                    marginTop: 10,

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

            <Row
                style={{
                    marginTop: '10px',
                    color: 'transparent'
                }}
            >
                <Col sm={{ size: 2, offset: 5 }}>
                    <Button
                        onClick={toggle}
                        style={{
                            width: '100%',
                            backgroundColor: '#ef3937',
                            color: 'white',
                            boxShadow: '2px 3px rgba(0, 0, 0, 1)',
                        }}
                    >
                        Ver Gráfico
                    </Button>
                    <Modal isOpen={modal} toggle={toggle} size="xl" className='modal'
                        style={{
                            display: 'flex',
                            textAlign: 'center',
                            overflowY: 'hidden',
                        }}
                    >
                        <ModalHeader
                            toggle={toggle}
                            /* close={closeBtn} */
                            close={false}
                            style={{
                                display: 'flex',
                                textAlign: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            Gráfico de Superficie Pilas
                        </ModalHeader>
                        <ModalBody>
                            {/* <MapboxTest/> */}
                            <SurfacePlot2 />
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={toggle}
                                style={{
                                    backgroundColor: '#ef3937',
                                    color: 'white',
                                    boxShadow: '2px 3px rgba(0, 0, 0, 1)',
                                }}
                            >
                                Aceptar
                            </Button>{' '}
                            <Button color="secondary" onClick={toggle}>
                                Cerrar
                            </Button>
                        </ModalFooter>
                    </Modal>
                </Col>
            </Row>
        </div>
    )
}

export default TemplatePolygon3;