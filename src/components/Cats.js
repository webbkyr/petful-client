import React from 'react';
import Button from './Button';
import Header from './Header';

//main will render sex, age, breed, story
export default function Cats(props) {
  const catName = props.catToAdopt.map(cat => cat.name)
  const catImageURL = props.catToAdopt.map(cat => cat.imageURL)
  const catImageAlt = props.catToAdopt.map(cat => cat.imageDescription)

return (
  <div>
    <Header animalName={catName} imageURL={catImageURL} imageAlt={catImageAlt} />
    <main>
    </main>
    <Button />
  </div>
  )
}