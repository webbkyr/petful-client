import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import Pet from './Pet'
import About from './About';
import { fetchDog, fetchCat, adoptCat, adoptDog } from '../actions/index';
import './Dashboard.css'

export class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.handleAdoptCat = this.handleAdoptCat.bind(this);
    this.handleAdoptDog = this.handleAdoptDog.bind(this);

  }
  componentDidMount() {
    this.props.dispatch(fetchDog());
    this.props.dispatch(fetchCat());
    console.log(this.props)

  }

  handleAdoptCat(){
    this.props.dispatch(adoptCat());
    }

  handleAdoptDog() {
    this.props.dispatch(adoptDog());
  }

  renderData() {
    if (this.props.catToAdopt.loading || this.props.dogToAdopt.loading) {
      return <Spinner id='spinner' name="ball-pulse-rise" color="red" fadeIn='none'/>
    }
    if (this.props.catToAdopt.error || this.props.dogToAdopt.error) {
      return <p>{this.props.catToAdopt.error || this.props.dogToAdopt.error}</p>
    }
  }

  render() {
    return (
    <div>
        <h1 className='main-header'>Adoption Bank</h1>
        <About />
        {this.renderData()}
        <Pet info={this.props.catToAdopt} buttonText='Adopt Cat' onAdoptPet={this.handleAdoptCat} />
        <Pet info={this.props.dogToAdopt} buttonText='Adopt Dog' onAdoptPet={this.handleAdoptDog} />
    </div>
    )
  }
}

const mapStateToProps = state => {
   return {
     catToAdopt: Object.assign({}, state.catReducer.data, {loading: state.catReducer.loading}),
     dogToAdopt: Object.assign({}, state.dogReducer.data, {loading: state.dogReducer.loading}),
   }

}

export default connect(mapStateToProps)(Dashboard);

