import React, { Component } from 'react';
// import Cats from './Cats';
// import Dogs from './Dogs';
import Pet from './Pet'


export class Dashboard extends Component {
  componentDidMount() {
    //fetch cats and dogs
  }

  render() {
    return (
    <div>
        <Pet info={this.props.catToAdopt} />
        <Pet info={this.props.dogToAdopt} />
    </div>
    )
  }
}

export default Dashboard;