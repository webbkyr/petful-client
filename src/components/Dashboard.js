import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pet from './Pet'
import About from './About';
import { fetchDog, fetchCat, adoptCat, adoptDog } from '../actions/index';

export class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.handleAdoptCat = this.handleAdoptCat.bind(this);
    this.handleAdoptDog = this.handleAdoptDog.bind(this);

  }
  componentDidMount() {
    this.props.dispatch(fetchDog());
    this.props.dispatch(fetchCat());
  }

  handleAdoptCat(){
    this.props.dispatch(adoptCat());
    }

  handleAdoptDog() {
    this.props.dispatch(adoptDog());
  }

  renderData() {
    if (this.props.loading) {
      return <h1>'Loading'</h1>;
    }
    if (this.props.error) {
      return <p>{this.props.error}</p>
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

