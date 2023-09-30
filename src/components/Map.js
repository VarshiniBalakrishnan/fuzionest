import React from 'react';
import './Map.css';
import backgroundImage from './1.png'
const Map = () => {
  return (
    <div className='Map-container'>
      <div className='Map'>
        <h1 className='Mapheading'>Serving Clients And Customer All Over The World</h1>
        <img src={backgroundImage} alt="Background" className='Map-image' />
        <div className='Mapbox'>
          <p className='Mapnum'>300,000+</p>
          <p className='Mappara'>on-demand customers</p>
        </div>
      </div>
    </div>
  );
}

export default Map;