import { API_BASE_URL } from '../config';
export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
export const ADOPT_DOG_REQUEST = 'ADOPT_DOG_REQUEST';
export const ADOPT_DOG_SUCCESS = 'ADOPT_DOG_SUCCESS'
export const ADOPT_DOG_ERROR = 'ADOPT_DOG_ERROR'

export const fetchDogRequest = () => {
  return {
    type: FETCH_DOG_REQUEST
  }
}

export const fetchDogSuccess = (data) => {
  return {
    type: FETCH_DOG_SUCCESS,
    data
  }
}

export const fetchDogError = (err) => {
  return {
    type: FETCH_DOG_ERROR,
    err
  }
}

export const adoptDogRequest = () => {
  return {
    type: ADOPT_DOG_REQUEST
  }
}

//revist this
export const adoptDogSuccess = () => {
  return {
    type: ADOPT_DOG_SUCCESS
  }
}

export const adoptDogError = (err) => {
  return {
    type: ADOPT_DOG_ERROR,
    err
  }
}

export const fetchDog = () => dispatch => {
   dispatch(fetchDogRequest());
     fetch(`${API_BASE_URL}/api/dog`, {
      method: 'GET',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'}
    }).then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    }).then(dog => dispatch(fetchDogSuccess(dog)))
    .catch(err => dispatch(fetchDogError(err)))
}

export const adoptDog = () => dispatch => {
   dispatch(adoptDogRequest());
     fetch(`${API_BASE_URL}/api/dog`, {
      method: 'DELETE'})
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res.statusText);
        }
        return res.json();
      }).then(dog => dispatch(fetchDog()))
      .catch(err => adoptDogError(err));

}