import axios from 'axios';
import { setAlert } from './alert';
import {
    GET_PURPOSES,
    PURPOSE_ERROR,
    DELETE_PURPOSE,
    ADD_PURPOSE,
    GET_PURPOSE,
      
  } from './types';
  

    // Add purpose
export const addPurpose = formData => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      } 
    }; 
    try {
      const res = await axios.post('/api/purposes', formData, config);
      dispatch({
        type: ADD_PURPOSE,
        payload: res.data
      });
      dispatch(setAlert('PURPOSE Created', 'success'));
      window.location = '/dashboard/Addpurpose';
    } catch (err) {
      dispatch({
        type: PURPOSE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
   


 
  
// Delete market
export const deletePurpose = id => async dispatch => {
  try {
    await axios.delete(`/api/purposes/${id}`);

    dispatch({
      type: DELETE_PURPOSE,
      payload: id
    });
    dispatch(setAlert('purpose Removed', 'success'));


  } catch (err) {
    dispatch({
      type: PURPOSE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
