import React, { useEffect, useRef, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import { Box } from '@chakra-ui/react';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFyaWpvc2UyOSIsImEiOiJja3NybHFjb2QwbmxkMnZwNzl5cW5rcXZyIn0.OYc1AggBupUnzQlWlzDXRw';
/* mapboxgl.accessToken = 'pk.eyJ1IjoiY2FyaXRvNyIsImEiOiJjbDh0YThqdTIwNWpwM3ZwbmN4ZHI5MmUyIn0.YSVnpB21m6v0Qrevr_xqVw'; */

const MapboxTest = () => {
    const [lng] = useState(-69.07253);
    const [lat] = useState(-23.00010);
    const [zoom] = useState(14);
    const node = useRef(null);

    /* REACT_APP_MAPA_LAT=-22.63365
    REACT_APP_MAPA_LON=-69.87766
    REACT_APP_MAPA_ZOOM=13.0 
    Lat: 23.00541/ Long: -69.07308 */


    useEffect(() => {
        const map = new mapboxgl.Map({
            container: node.current,
            /* style: 'mapbox://styles/mapbox/streets-v11', */
            /* style: 'mapbox://styles/marijose29/cl8kdvntb002114qzc238urvu', */
            style: 'mapbox://styles/marijose29/cl8kdvntb002114qzc238urvu',
            /* center: [lng, lat], */
            /* zoom: zoom, */
            center: [-69.07253, -23.00010],
            zoom: 14
        });

        /* map.on('move', () => {
            setLng(map.getCenter().lng.toFixed(4));
            setLat(map.getCenter().lat.toFixed(4));
            setZoom(map.getZoom().toFixed(2));
        }); */

        map.on('load', () => {
            map.addSource('dem', {
            'type': 'raster-dem',
            'url': 'mapbox://mapbox.mapbox-terrain-dem-v1'
            });
            map.addLayer(
            {
            'id': 'hillshading',
            'source': 'dem',
            'type': 'hillshade',
            // insert below waterway-river-canal-shadow;
            // where hillshading sits in the Mapbox Outdoors style
            
            },
            'waterway-river-canal-shadow'
            )
    })

    });

    return (
        <div>
            <Box bg='red' w='50%' p={4} color='white'>
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </Box>

            <div ref={node}
                style={{
                    width: 500,
                    height: 500,
                    /* position: 'absolute', */
                    top: 20,
                    right: 0,
                    left: 20,
                    bottom: 0,
                    /* display: 'flex',
                    justifyContent: "flex-end", */
                }}
            ></div>
        </div>
    )
}

export default MapboxTest;


