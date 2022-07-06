import axios from 'axios';
import { setAlert } from './alert';
import {
    GET_MARKETS,
    MARKET_ERROR,
    DELETE_MARKET,
    ADD_MARKET,
    GET_MARKET,
      
  } from './types';
 

  // Add market
export const addMarket = formData => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
   
    try {
      const res = await axios.post('/api/markets', formData, config);
  
      dispatch({
        type: ADD_MARKET,
        payload: res.data
      });
     
      dispatch(setAlert('Market Created', 'success'));
      window.location = '/dashboard/markets';
    } catch (err) {
      dispatch({
        type: MARKET_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
   


  // Get markets
export const getMarkets = () => async dispatch => {
  try {
    const res = await axios.get('/api/markets');

    dispatch({
      type: GET_MARKETS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: MARKET_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

 

// Delete market
export const deleteMarket = id => async dispatch => {
  try {
    await axios.delete(`/api/markets/${id}`);

    dispatch({
      type: DELETE_MARKET,
      payload: id
    });
    dispatch(setAlert('Market Removed', 'success'));


  } catch (err) {
    dispatch({
      type: MARKET_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

 

// Get one market
export const getMarket = id => async dispatch => {
  try {
    await axios.get(`/api/markets/${id}`);

    dispatch({
      type: GET_MARKET,
      payload: id
    });
    dispatch(setAlert('one market ', 'success'));


  } catch (err) {
    dispatch({
      type: MARKET_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};





 