import React from 'react';
import Header from './Header';
import Button from './Button';

export default function Pet(props){
console.log(props)
return (
    <section>
      <Header animalName={props.info.name} imageURL={props.info.imageURL} imageAlt={props.info.imageAlt} />
      <main>
        <ul>
         <li>Sex: {props.info.sex}</li>
          <li>Age: {props.info.age}</li>
          <li>Breed: {props.info.breed}</li>
          <li>Story: {props.info.story}</li>
        </ul>
      </main>
      <Button onAdoptPet={props.onAdoptPet} />
    </section>
    )
}

