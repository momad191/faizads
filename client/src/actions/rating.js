import axios from 'axios';
import { setAlert } from './alert';
import {
    RATING_ERROR,
    ADD_RATING,
    DELETE_RATING,
    GET_RATING,
  } from './types'; 
  
   
  // Add addFollowup
export const addRating = formData => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    
    try {
      const res = await axios.post('/api/ratings', formData, config);
  
      dispatch({
        type: ADD_RATING,
        payload: res.data
      });
   
      //dispatch(setAlert('profitrequests Created', 'success'));
    //   window.location = '/dashboard';
    } catch (err) {
      dispatch({
        type: RATING_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };





  // Delete followup
export const deleteRating = id => async dispatch => {
  try {
    await axios.delete(`/api/ratings/${id}`);

    dispatch({
      type: DELETE_RATING,
      payload: id
    });

    // dispatch(setAlert('Followup Removed', 'success'));
  } catch (err) {
    dispatch({
      type: RATING_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};




// Get post
export const getRating = id => async dispatch => {
  try {
    const res = await axios.get(`/api/ratings/${id}`);
  
    dispatch({
      type: GET_RATING,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: RATING_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};