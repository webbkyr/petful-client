import { FETCH_CAT_REQUEST, FETCH_CAT_SUCCESS, FETCH_CAT_ERROR,
ADOPT_CAT_REQUEST, ADOPT_CAT_SUCCESS, ADOPT_CAT_ERROR } from '../actions';

const initialState = {
data: [
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  }
],
error: null,
loading: false
}

export const catReducer = (state=initialState, action) => {
switch (action.type) {
  case FETCH_CAT_REQUEST:
  return {...state, loading: true}

  case FETCH_CAT_SUCCESS:
  return {...state, loading: false, data: action.data}

  case FETCH_CAT_ERROR:
  return {...state, loading: false, error: action.err}

  case ADOPT_CAT_REQUEST: 
  return {...state, loading: true}

  case ADOPT_CAT_SUCCESS:
  return {...state, loading: false}

  case ADOPT_CAT_ERROR:
  return {...state, loading: false, error: action.err}

  default: 
  break;
}
return state;
}