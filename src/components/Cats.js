import React from 'react';
import Button from './Button';
import Header from './Header';

//main will render sex, age, breed, story
export default function Cats(props) {
  const catName = props.catToAdopt.map(cat => cat.name)
  const catImage = props.catToAdopt.map(cat => {
    return [cat.imageURL, cat.imageDescription]})

return (
  <div>
    <Header animalName={catName} catImage={catImage} />
    <main>
    </main>
    <Button />
  </div>
  )
}