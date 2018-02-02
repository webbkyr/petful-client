import React from 'react';
import Button from './Button';
import Header from './Header';

export default function Cats(props) {
  const cat = props.catToAdopt.map(cat => cat.name)
  return (
  <div>
    <Header />
    <main>
      {cat}
    </main>
    <Button />
  </div>
  )
}