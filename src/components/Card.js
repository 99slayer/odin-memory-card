import React from 'react';
import '../styles/Card.css';

export const Card = (props) => {
  const { type, image, clickFunc } = props;

  return (
    <div id={type} className='card' style={{backgroundImage: `url(${image})`}} onClick={() => { clickFunc(type) }}></div>
  )
}
