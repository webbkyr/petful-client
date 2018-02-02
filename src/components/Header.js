import React from 'react';

//dont forget alt tag for images
//animal name and photo
//imageDescription -> alt tag
//
export default function Header(props) {
  console.log('image', props.catImage)
  console.log('Name', props.animalName)
  // const link = props.catImage.map(image => image[0])
  // console.log(link)

  return (
    <header>
      <h2>Name: {props.animalName}</h2>
    </header>
  )
}
