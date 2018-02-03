import React from 'react';
import Header from './Header';
import Button from './Button';
import './Pet.css'

export default function Pet(props){
  console.log('Pet Props', props)
return (
    <section>
      <Header animalName={props.info.name} imageURL={props.info.imageURL} imageAlt={props.info.imageDescription} />
      <main>
        <ul>
         <li>Sex: {props.info.sex}</li>
          <li>Age: {props.info.age}</li>
          <li>Breed: {props.info.breed}</li>
          <li>Story: {props.info.story}</li>
        </ul>
      </main>
      <Button buttonText={props.buttonText} onAdoptPet={props.onAdoptPet} />
    </section>
    )
}

