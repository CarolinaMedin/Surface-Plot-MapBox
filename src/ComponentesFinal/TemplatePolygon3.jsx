import React, { useEffect, useRef, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import { Badge, Container, Row, Col } from 'reactstrap';
import SurfacePlot2 from '../SurfacePlot2';
import DatePickerHighlights from '../DatePickerHighlights';
import Menu from '../Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import MenuIcon from '@mui/icons-material/Menu';
import HamburgerMenu from '../HamburgerMenu';


mapboxgl.accessToken = 'pk.eyJ1IjoiY2FyaXRvNyIsImEiOiJjbDh0YThqdTIwNWpwM3ZwbmN4ZHI5MmUyIn0.YSVnpB21m6v0Qrevr_xqVw'

function TemplatePolygon3() {

    const node = useRef(null);

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    useEffect(() => {
        const map = new mapboxgl.Map({
            /* offset: [0, -15], */
            container: 'map',
            style: 'mapbox://styles/carito7/cl9ha2oat003h15nvo0o4sp1a',
            center: [-69.261980827293442, -22.812123941135098],
            zoom: 13
        });

        map.on('load', () => {
            map.addSource('maine', {
                'type': 'geojson',
                'data': {
                    "type": "FeatureCollection",
                    "features": [
                        {
                            "type": "Feature",
                            "properties": { "name": "Pila 1", "title": "Pila 2", "description": "Monitoreo un lindo proceso de Lixiviación" },
                            "geometry": {
                                "type": "Polygon",
                                'coordinates': [
                                    [
                                        [-69.261980827293442, -22.812123941135098],
                                        [-69.258232023667375, -22.811295717078181],
                                        [-69.251867775651036, -22.834180855493084],
                                        [-69.255921714455965, -22.835444986948385],
                                        [-69.256008895935651, -22.83553216842806],
                                        [-69.256488394073855, -22.834485990671951],
                                        [-69.256488394073111, -22.834485990671970]
                                    ]
                                ]
                            }
                        },
                        {
                            'type': 'Feature',
                            "properties": { "name": "Pila 2", "title": "Pila 2", "description": "Monitoreo un lindo proceso de Lixiviación pila 2" },
                            'geometry': {
                                'type': 'Polygon',
                                'coordinates': [[
                                    [-69.26937, -22.79850],
                                    [-69.26665, -22.79819],
                                    [-69.26547, -22.80195],
                                    [-69.26445, -22.80492],
                                    [-69.26682, -22.80586],
                                    [-69.26801, -22.80242],
                                    [-69.26971, -22.79772],
                                ]]
                            }
                        },
                    ]
                }
            });

            map.addLayer({
                'id': 'maine',
                'type': 'fill',
                'source': 'maine',
                'layout': {},
                'paint': {
                    'fill-color': 'rgba(200, 100, 240, 0.4)',
                    'fill-outline-color': 'rgba(200, 100, 240, 1)',
                    'fill-opacity': 0.7
                },
                'filter': ['==', '$type', 'Polygon']
            });

            map.addLayer({
                'id': 'maine1',
                'type': 'fill',
                'source': 'maine',
                'layout': {},
                'paint': {
                    'fill-color': 'rgba(2, 100, 240, 1)',
                    'fill-outline-color': 'rgba(3, 100, 250, 0.5)',
                    'fill-opacity': 0.5
                },
                'filter': ['==', '$type', 'Polygon']
            });

            // Add a color outline around the polygon.
            /* map.addLayer({
                'id': 'outline',
                'type': 'line',
                'source': 'maine',
                'layout': {},
                'paint': {
                    'line-color': '#ac1d81',
                    'line-width': 2
                }
            }) */

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

            //segundo poligono
            /* map.on('click', 'maine1', (e) => {
                new mapboxgl.Popup()
                    .setLngLat(e.lngLat)
                    .setHTML(e.features[0].properties.name)
                    .setHTML(e.features[0].properties.message)
                    .setHTML(
                        `<h3>${e.features[0].properties.title} hola hola</h3><p>${e.features[0].properties.description}</p>`
                    )
                    .addTo(map);
            })

            map.on('mouseenter', 'maine1', (e) => {
                map.getCanvas().style.cursor = 'pointer';
            })

            map.on('mouseleave', 'maine1', (e) => {
                map.getCanvas().style.cursor = '';
            }) */
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
            <h4 style={{ display: 'flex', justifyContent: 'center', marginTop: 20, marginBottom: 20 }}>
                {' '}
                <Badge>
                    GeoJson Pilas Centinela 2
                </Badge>
            </h4>

            <div style={{ display: 'flex', maxWidth: "100%", bgcolor: "black", color: "white" }}>
                <Menu style={{
                    height: '620px',
                    backgroundColor: "black !important"
                }} />

                {/* mapa poligono */}
                <Container
                    className="bg-light border"
                    fluid
                    id="map" ref={node}
                    style={{
                        width: '80%',
                        /* height: '620px', */
                        height: '80vh',
                        display: 'flex',
                        /* fontSize: '100 vh',
                        position: 'end', */
                        zIndex: 1,
                        justifyContent: 'flex-end',
                    }}
                    onClick={toggle}
                >
                    
                    <div style={{
                        width: '3%',
                        height: '5%',
                        backgroundColor: 'rgba(250, 0, 0, 0.5)',
                        color: 'white',
                        boxShadow: '2px 3px rgba(250, 0, 0, 0.5)',
                        borderRadius: 7,
                        marginTop: 20,
                        position: 'absolute',
                        zIndex: 3,
                        display: 'flex',
                        justifyContent: 'center',

                    }}>
                        <HamburgerMenu style={{
                            fontSize: 50
                        }} />
                        <MenuIcon style={{ fontSize: 30 }} />
                    </div>
                    <Row>
                        <Col className="bg-light border" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'stretch' }}>
                            {/* <div style={{
                                backgroundColor: 'rgba(250, 0, 0, 0.5)',
                                color: 'white',
                                boxShadow: '2px 3px rgba(250, 0, 0, 0.5)',
                                borderRadius: 7,
                                position: 'absolute',
                                zIndex: 2,
                                display: 'flex',
                                marginTop: 50,
                            }}>
                                <div
                                onClick={toggle}
                                style={{
                                    width: '3%',
                                    height: '5%',
                                    backgroundColor: 'rgba(250, 0, 0, 0.5)',
                                    color: 'white',
                                    boxShadow: '2px 3px rgba(250, 0, 0, 0.5)',
                                    borderRadius: 7,
                                    marginTop: 0,
                                    position: 'absolute',
                                    zIndex: 2,
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                <MenuIcon style={{
                                    fontSize: 30
                                }} />
                            </div>
                                <div>
                                    <HamburgerMenu style={{
                                        backgroundColor: 'rgba(250, 0, 0, 0.5)',
                                        color: 'white',
                                        boxShadow: '2px 3px rgba(250, 0, 0, 0.5)',
                                        borderRadius: 7,
                                        position: 'absolute',
                                        zIndex: 2,
                                        display: 'flex',
                                        marginTop: 50,
                                    }} />
                                    <MenuIcon style={{
                                        fontSize: 30
                                    }} />
                                    <DatePickerHighlights />
                                </div>
                            </div> */}
                        </Col>
                    </Row>
                </Container>
            </div>

            <Row
                style={{
                    marginTop: '10px',
                    color: 'transparent',
                    height: "100% !important" // completar el background black
                }}
            >
                <Col sm={{ size: 2, offset: 5 }}>
                    <DatePickerHighlights />
                    {/* <Button
                        onClick={toggle}
                        style={{
                            width: '100%',
                            backgroundColor: '#ef3',
                            color: 'white',
                            boxShadow: '2px 3px rgba(0, 0, 0, 1)',
                        }}>
                        Ver Gráfico
                    </Button> */}
                    <Modal isOpen={modal} toggle={toggle} size="xl" className='modal'
                        style={{
                            display: 'flex',
                            textAlign: 'center',
                            overflowY: 'hidden',
                            height: '85vh'
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
                            {/* <Button onClick={toggle}
                                style={{
                                    backgroundColor: '#ef3937',
                                    color: 'white',
                                    boxShadow: '2px 3px rgba(0, 0, 0, 1)',
                                }}
                            >
                                Aceptar
                            </Button> */}{' '}
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