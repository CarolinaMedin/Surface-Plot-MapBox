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
            center: [-70.68876, -33.46428],
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
                            "properties": { "name": "Poligono 1", "title": "Poligono 1", "description": "Monitoreo un lindo proceso de Lixiviación" },
                            "geometry": {
                                "type": "Polygon",
                                'coordinates': [
                                    [
                                        [-70.67661, -33.47670],
                                        [-70.67500, -33.45360],
                                        [-70.67400, -33.45270],
                                        [-70.66300, -33.45150],
                                        [-70.66100, -33.45500],
                                        [-70.66400, -33.47710]
                                    ]
                                ]
                            }
                        },
                        {
                            'type': 'Feature',
                            "properties": { "name": "Poligono 2", "title": "Poligono 2", "description": "Monitoreo un lindo proceso de Lixiviación pila 2" },
                            'geometry': {
                                'type': 'Polygon',
                                'coordinates': [[
                                    [-70.6561122, -33.4548222],
                                    [-70.6460155, -33.4547009],
                                    [-70.63501, -33.45370],
                                    [-70.63595, -33.45360],
                                    [-70.63490, -33.45255],
                                    [-70.64211, -33.46050],
                                    [-70.64311, -33.46150],
                                    [-70.65111, -33.46010]
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
                    GeoJson Poligono Estación Central
                </Badge>
            </h4>

            <div style={{ display: 'flex', maxWidth: "100%", bgcolor: "black", color: "white" }}>
                <Menu style={{
                    height: '620px',
                }} />

                {/* mapa poligono */}
                <Container
                    className="bg-light border"
                    fluid
                    id="map" ref={node}
                    style={{
                        width: '80%',
                        height: '80vh',
                        display: 'flex',
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
                            close={false}
                            style={{
                                display: 'flex',
                                textAlign: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            Gráfico de Superficie
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