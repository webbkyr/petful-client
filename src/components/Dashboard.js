import React, { Component } from 'react';
import Cats from './Cats';
import Dogs from './Dogs';


export class Dashboard extends Component {
  componentDidMount() {
    //fetch cats and dogs
  }

  render() {
    return (
    <div>
      <section>
        <Cats catToAdopt={this.props.catToAdopt} />
      </section>
      <section>
        <Dogs dogToAdopt={this.props.dogToAdopt} />
      </section>
    </div>
    )
  }
}

export default Dashboard;