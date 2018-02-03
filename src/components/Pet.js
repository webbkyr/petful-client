import React from 'react';
import Header from './Header';
import Button from './Button';
import './Pet.css'

export default function Pet(props){
  console.log('Pet Props', props)

  let details = <ul className='detail-list'>
  <li>Sex: {props.info.sex}</li>
   <li>Age: {props.info.age}</li>
   <li>Breed: {props.info.breed}</li>
   <li>Story: {props.info.story}</li>
 </ul>

 let noneLeft = <p id='none-left'>{props.info.message}</p>
//  style={{'display':(this.props.isModalOpen)?'block':'none'}}
return (
    <section>
      {props.info.message ? null : <Header animalName={props.info.name} imageURL={props.info.imageURL} imageAlt={props.info.imageDescription} />}
      <main>
        {props.info.message ? noneLeft : details}
      </main>
      <Button buttonText={props.buttonText} onAdoptPet={props.onAdoptPet} />
    </section>
    )
}

