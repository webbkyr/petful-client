import React from 'react';

export default function Header(props) {
  console.log('Props info', props)


  return (
    <header>
      <h2>{props.animalName}</h2>
      <img src={props.imageURL} alt={props.imageAlt}/>
    </header>
  )
}
