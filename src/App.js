import React from 'react';
import CarCard from './CarCard';
import './App.css';

export default function App(props) {
  return (
    <div className=' cardContainer'>
      <div className='sedan'>
        <CarCard
          img='/images/icon-sedans.svg'
          title='SEDANS'
          fact='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
        />
      </div>

      <div className='suv'>
        <CarCard
          img='/images/icon-suvs.svg'
          title='SUVS'
          fact='Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'
        />
      </div>

      <div className='lux'>
        <CarCard
          img='/images/icon-luxury.svg'
          title='LUXURY'
          fact='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. '
        />
      </div>
    </div>
  );
}
