import { API_BASE_URL } from '../config';
export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const ADOPT_CAT_REQUEST = 'ADOPT_CAT_REQUEST';
export const ADOPT_CAT_SUCCESS = 'ADOPT_CAT_SUCCESS';
export const ADOPT_CAT_ERROR = 'ADOPT_CAT_ERROR';

export const fetchCatRequest = () => {
  return {
    type: FETCH_CAT_REQUEST
  }
}

export const fetchCatSuccess = (data) => {
  return {
    type: FETCH_CAT_SUCCESS,
    data
  }
}

export const fetchCatError = (err) => {
  return {
    type: FETCH_CAT_ERROR,
    err
  }
}

export const adoptCatRequest = () => {
  return {
    type: ADOPT_CAT_REQUEST
  }
}

export const adoptCatSuccess = () => {
  return {
    type: ADOPT_CAT_SUCCESS
  }
}

export const adoptCatError = (err) => {
  return {
    type: ADOPT_CAT_ERROR,
    err
  }
}

export const fetchCat = () => dispatch => {
   dispatch(fetchCatRequest());
     return fetch(`${API_BASE_URL}/api/cat`, {
      method: 'GET',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'},
    }).then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    }).then(data => dispatch(fetchCatSuccess(data)))
    .catch(err => dispatch(fetchCatError(err)))
}

export const adoptCat = () => dispatch => {
  console.log('Adopt Cat Action')
   dispatch(adoptCatRequest());
     fetch(`${API_BASE_URL}/api/cat`, {
      method: 'DELETE'})
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res.statusText);
        }
        dispatch(fetchCat());
      })
      .catch(err => adoptCatError(err));

}