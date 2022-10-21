import React, { useState, useEffect, } from 'react';
import { csv } from 'd3';

const TestButton = () => {  
    const [darkMode, setDarkMode] =useState([]); 
     
    const handleClick = () => {
      setDarkMode(!darkMode);
    }

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

      </div>
    )
    
};
export default TestButton;