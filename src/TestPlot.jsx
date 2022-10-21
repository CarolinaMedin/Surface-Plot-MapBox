import React from 'react';
import Plot from 'react-plotly.js';

const TestPlot = () => {  

    return (
      <div className='TestPlot'>
        <Plot
        data={[
          {
            x: [1, 2, 3, 4, 5],
            y: [2, 6, 3, 7, 11],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'blue'},
          },
          {type: 'bar', x: [1, 2, 3, 4, 5], y: [2, 5, 3, 7, 11]},
        ]}
        layout={ {width: 320, height: 240, title: 'Gráfico de Prueba'} }
      />

      </div>
    )
    
};
export default TestPlot;



