import React, { useState, useEffect }  from 'react';
import Plot from 'react-plotly.js';

const SurfacePlot = () => {  

  const [plotData, setPlotData] = useState();

    /* useEffect(() => {
        console.log('grafico ok');
        obtenerData();
        }, []); */

        

    /* const obtenerData = async () => {
      const data = await fetch('https://jsonplaceholder.typicode.com/users')
      const users = await data.json();
      console.log(users);

      setPlotData(users);
    } */

    useEffect(() => {
      fetch('data-plot.json')
      .then(response => response.json() )
      .then(the_geom => {
        setPlotData(the_geom);
      })
      }, []);

    /* const obtenerData = async () => {
      const data = await fetch('/data-plot.json')
      const the_geom = await data.json();
      console.log(the_geom);

      setPlotData(the_geom);
    } */

    console.log(plotData);

    return (
      <div className='SurfacePlot'>
        <Plot
        style={{ 
          backgroundColor: 'white !important',
      }}
        data={[
          {
            x: [1, 2, 3, 4, 5],
            y: [2, 6, 3, 7, 11],
            z: [2, 6, 3, 7, 11],
            type: 'surface',
            mode: 'lines+markers',
            marker: {color: 'blue'},
            autosize: false,
          },
          {
            x: [1, 2, 3, 4, 5],
            y: [2, 6, 3, 7, 11],
            z: [2, 6, 3, 7, 11],
            type: 'surface',
            mode: 'lines+markers',
            marker: {color: 'blue'},
            autosize: false,
          },
          {
            x: [1, 2, 3, 4, 5],
            y: [2, 6, 3, 7, 11],
            z: [2, 6, 3, 7, 11],
            type: 'surface',
            mode: 'lines+markers',
            marker: {color: 'blue'},
            autosize: false,
          },
          {type: 'surface', lat: [1, 2, 3, 4, 5], lon: [2, 5, 3, 7, 11], pro: [2, 5, 3, 7, 11]},
        ]}
        layout={ {width: 500, height: 500, margin: {
          l: 65,
          r: 50,
          b: 65,
          t: 90,
        }, title: 'Gráfico de Prueba 1'} }
      />

      </div>
    )
    
};
export default SurfacePlot;



