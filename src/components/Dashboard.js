import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pet from './Pet'
import { fetchDog, fetchCat } from '../actions/index';


export class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(fetchDog());
    this.props.dispatch(fetchCat());
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
// const mapStateToProps = state => {
//   return (

//   )
// }

export default connect()(Dashboard);