import axios from 'axios';
import { setAlert } from './alert';
import {
    PROFITREQUEST_ERROR,
    ADD_PROFITREQUEST, 
  } from './types'; 
 
   
  // Add request
export const addProfitRequest = formData => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    
    try {
      const res = await axios.post('/api/profitrequests', formData, config);
  
      dispatch({
        type: ADD_PROFITREQUEST,
        payload: res.data
      });
   
      //dispatch(setAlert('profitrequests Created', 'success'));
      window.location = '/dashboard';
    } catch (err) {
      dispatch({
        type: PROFITREQUEST_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };

  
// edit profitrequest
export const editProfitrequest = (userId,formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }; 

  try {
    const res = await axios.post(
      `/api/profitrequests/editprofitrequest/${userId}`,
      formData,
      config
    );

    dispatch({
      type: ADD_PROFITREQUEST,
      payload: res.data
    });

    // dispatch(setAlert('Comment Added', 'success'));
  } catch (err) {
    dispatch({
      type: PROFITREQUEST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

