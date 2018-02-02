import { FETCH_CAT_REQUEST, FETCH_CAT_SUCCESS, FETCH_CAT_ERROR,
ADOPT_CAT_REQUEST, ADOPT_CAT_SUCCESS, ADOPT_CAT_ERROR } from '../actions';

const initialState = {
  data: null,
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