import React from 'react';
import Header from './Header';
import Button from './Button';

export default function Dogs(props) {
  const dogName = props.dogToAdopt.map(dog => dog.name);
  const dogImageURL = props.dogToAdopt.map(cat => cat.imageURL)
  const dogImageAlt = props.dogToAdopt.map(cat => cat.imageDescription)
  return (
  <div>
    <Header animalName={dogName} imageURL={dogImageURL} imageAlt={dogImageAlt}/>
    <main>
    </main>
    <Button />
  </div>
  )
}

//return (
//   <img src={cat.imageURL} alt={cat.imageDescript}>
// )
// })