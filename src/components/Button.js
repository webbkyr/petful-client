import React from 'react';
import './Button.css';

export default function Button(props) {
  return (
    <button className='adopt-button' onClick={() => props.onAdoptPet()}>{props.buttonText}</button>
  )
}