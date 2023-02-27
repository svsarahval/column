import React from 'react';

export default function CarCard(props) {
  return (
    <div className='allCards'>
      <img src={props.img} alt='Car picture' />
      <h1>{props.title}</h1>
      <p>{props.fact}</p>
      <button>Learn More</button>
    </div>
  );
}
