import { FETCH_DOG_REQUEST, FETCH_DOG_SUCCESS, FETCH_DOG_ERROR , ADOPT_DOG_REQUEST, ADOPT_DOG_SUCCESS, ADOPT_DOG_ERROR } from '../actions';

const initialState = {
  data: null,
  error: null,
  loading: false,
}

export const dogReducer = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_DOG_REQUEST:
    return {...state, loading: true}

    case FETCH_DOG_SUCCESS:
    return {...state, loading: false, data: action.data}

    case FETCH_DOG_ERROR:
    return {...state, loading: false, error: action.err}

    case ADOPT_DOG_REQUEST: 
    return {...state, loading: true}

    case ADOPT_DOG_SUCCESS:
    return {...state, loading: false}

    case ADOPT_DOG_ERROR:
    return {...state, loading: false, error: action.err}

    default: 
    break;
  }
  return state;
}