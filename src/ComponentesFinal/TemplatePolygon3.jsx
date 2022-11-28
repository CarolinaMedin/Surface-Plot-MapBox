import React, { useEffect, useRef, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import { Badge, Container } from 'reactstrap';
import SurfacePlot2 from '../SurfacePlot2';
/* import DatePickerHighlights from '../DatePickerHighlights'; */
import Menu from '../Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuIcon from '@mui/icons-material/Menu';
/* import HamburgerMenu from '../HamburgerMenu'; */
import HamburgerMenu2 from '../HamburgerMenu2';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


mapboxgl.accessToken = 'pk.eyJ1IjoiY2FyaXRvNyIsImEiOiJjbDh0YThqdTIwNWpwM3ZwbmN4ZHI5MmUyIn0.YSVnpB21m6v0Qrevr_xqVw'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    height: "100% !important"
};

function TemplatePolygon3() {

    const node = useRef(null);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


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
                    'fill-color': 'rgba(2, 100, 240, 1)',
                    'fill-outline-color': 'rgba(3, 100, 250, 0.5)',
                    'fill-opacity': 0.5
                },
                'filter': ['==', '$type', 'Polygon']
            });


            map.on('click', 'maine', (e) => {
                new mapboxgl.Popup()
                    .setLngLat(e.lngLat)
                    .setHTML(e.features[0].properties.name)
                    .setHTML(e.features[0].properties.message)
                    .setHTML(
                        `<h3>${e.features[0].properties.title} hola hola</h3><p>${e.features[0].properties.description}</p> 
                        isOpen={Modal} toggle={toggle} <Modal>${e.features[0].properties.modal} </Modal>`
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

            <Menu style={{
                    height: '620px',
                    backgroundColor: "black !important"
                }} />

            <div style={{ display: 'flex', maxWidth: "100%", bgcolor: "black", color: "white" }}>

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
                    onClick={handleOpen}
                >

                    <div
                        style={{
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
                        <HamburgerMenu2 style={{
                            fontSize: 50,
                        }} />
                        <MenuIcon style={{ fontSize: 30 }} />
                    </div>

                </Container>
            </div>

            {/* Modal */}
            <div>
                <Button onClick={handleOpen}>Open modal</Button>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open} style={{
                        display: 'block',
                        textAlign: 'center',
                        justifyContent: 'center',
                    }}>
                        <Box sx={style} >
                            <Typography id="transition-modal-title" variant="h6" component="h2" style={{
                                display: 'flex',
                                textAlign: 'center',
                                justifyContent: 'center',
                            }}>
                                Gráfico de Superficie Pilas
                            </Typography>
                            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                <SurfacePlot2 />
                            </Typography>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                            }}>
                                <Button color="secondary" onClick={handleClose}>
                                    Cerrar
                                </Button>
                            </div>

                        </Box>
                    </Fade>
                </Modal>
            </div>
        </div>
    )
}

export default TemplatePolygon3;