import React, { useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGl from 'mapbox-gl';
import { Box } from '@chakra-ui/react'


const MapboxTest2 = () => {
    /* mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'; */

    /* mapboxgl.accessToken = 'pk.eyJ1IjoibWFyaWpvc2UyOSIsImEiOiJja3NybHFjb2QwbmxkMnZwNzl5cW5rcXZyIn0.OYc1AggBupUnzQlWlzDXRw'; */

    const [viewport] = useState({
        latitude: 36.25956997955441,
        longitude: 137.9150899566626,
        backgroundColor: 'red',
        height: '100vh',
        left: 0,
        position: 'fixed',
        top: 0,
        width: '100vh',
        zoom: 12
    });

    return (

        <div>
            <ReactMapGl
                {...viewport}
                maxZoom={20}
                mapboxApiAccessToken={'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'}
            >
            </ReactMapGl>

            <Box bg='red' w='100%' p={4} color='white'>
                This is the Box
            </Box>
        </div>

    );
}

export default MapboxTest2;