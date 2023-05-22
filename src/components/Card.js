import React, { useState, useEffect } from 'react';
import '../styles/Card.css';

export const Card = (props) => {
  const { type, image } = props;

  return (
    <div id={type} className='card' style={{backgroundImage: `url(${image})`}}></div>
  )
}
