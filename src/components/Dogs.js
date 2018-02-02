import React from 'react';
import Header from './Header';
import Button from './Button';

export default function Dogs(props) {
  const dog = props.dogToAdopt.map(dog => dog.name);
  return (
  <div>
    <Header />
    <main>
      {dog}
    </main>
    <Button />
  </div>
  )
}