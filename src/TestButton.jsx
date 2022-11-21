import React, { useState, useEffect } from 'react';
import { csv } from 'd3';
import { Input } from 'reactstrap';

import SurfacePlot from './SurfacePlot';

const TestButton = () => {  
    const [darkMode, setDarkMode] =useState([]); 
    const [arrayNumero] = useState([20,30,40,50]);
    
     
    const handleClick = () => {
      setDarkMode(!darkMode);
    }


    const edades = [1,2,3,4,4,34,27,40];

    const [data, setData] = useState(true);

    useEffect(() => {
      console.log('Esta funcionando');
      document.title = 'Pilas'

      csv('data.csv').then(data => {
        setData(data);
      });
    }, [])

    console.log(data);

    return (
      <div className='TestButton'>
        <h1>Gráfico de Superficie</h1>
        <button type='button' onClick={handleClick}> {darkMode ? 'Dark Mode' : 'Light Mode'} </button>
    
        <Input/>
        <button></button>
        <div>
          <ul>{edades.map((el)=>(
            <li>{el}</li>
          ))}</ul>
        </div>
        <h2>Lista</h2>
        {
          arrayNumero.map((item, index)=>
          <p key={index}> {item}-{index} </p>
          )
        }
            <SurfacePlot/>
      </div>
    )
    
};
export default TestButton;