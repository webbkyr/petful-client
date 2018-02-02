import React from 'react';
import Header from './Header';
import Button from './Button';

export default function Dogs(props) {
  const dogName = props.dogToAdopt.map(dog => dog.name);
  return (
  <div>
    <Header animalName={dogName}/>
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