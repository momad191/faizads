import axios from 'axios';
import { setAlert } from './alert';
 
import {
GET_COUNTRIES,
COUNTRY_ERROR,
DELETE_COUNTRY,
ADD_COUNTRY,
GET_COUNTRY,
      
} from './types';
 

// Add Country
export const addCountry = formData => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    
    try {
      const res = await axios.post('/api/countries', formData, config);
  
      dispatch({
        type: ADD_COUNTRY,
        payload: res.data
      });
    
      dispatch(setAlert('COUNTRY Created', 'success'));
      window.location = '/countries';
    } catch (err) {
      dispatch({
        type: COUNTRY_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
  





    // Get countries
export const getCountries = () => async dispatch => {
  try {
    const res = await axios.get('/api/countries');

    dispatch({
      type: GET_COUNTRIES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: COUNTRY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};






// Delete country
export const deleteCountry = id => async dispatch => {
  try {
    await axios.delete(`/api/countries/${id}`);

    dispatch({
      type: DELETE_COUNTRY,
      payload: id
    });
    dispatch(setAlert('COUNTRY Removed', 'success'));


  } catch (err) {
    dispatch({
      type: COUNTRY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};






// Get one country
export const getCountry = id => async dispatch => {
  try {
    await axios.get(`/api/countries/${id}`);

    dispatch({
      type: GET_COUNTRY,
      payload: id
    });
    dispatch(setAlert('one market ', 'success'));


  } catch (err) {
    dispatch({
      type: COUNTRY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}; 





// Add Country
export const addCity = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  
  try {
    const res = await axios.post('/api/countries/cities', formData, config);

    dispatch({
      type: ADD_COUNTRY,
      payload: res.data
    });
  
    dispatch(setAlert('COUNTRY Created', 'success'));
    window.location = '/countries';
  } catch (err) {
    dispatch({
      type: COUNTRY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};