import React, { Component } from 'react';
import Pet from './Pet'


export class Dashboard extends Component {
  componentDidMount() {
    //fetch cats and dogs
  }

  handleAdopt(){
    console.log('onAdoptPet!')
  }

  render() {
    return (
    <div>
        <Pet info={this.props.catToAdopt} onAdoptPet={this.handleAdopt} />
        <Pet info={this.props.dogToAdopt} onAdoptPet={this.handleAdopt}  />
    </div>
    )
  }
}

export default Dashboard;