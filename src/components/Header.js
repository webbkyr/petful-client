import React from 'react';
import './Header.css';

export default function Header(props) {
  return (
    <header>
      <h3 className='name-header'>My name is {props.animalName}</h3>
      <img src={props.imageURL} alt={props.imageAlt}/>
    </header>
  )
}
