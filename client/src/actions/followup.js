import axios from 'axios';
import { setAlert } from './alert';
import {
    FOLLOWUP_ERROR,
    ADD_FOLLOWUP,
    DELETE_FOLLOWUP,
 

  } from './types'; 
   
  
  // Add addFollowup
export const addFollowup = formData => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    
    try {
      const res = await axios.post('/api/followups', formData, config);
  
      dispatch({
        type: ADD_FOLLOWUP,
        payload: res.data
      });
   
      //dispatch(setAlert('profitrequests Created', 'success'));
    //   window.location = '/dashboard';
    } catch (err) {
      dispatch({
        type: FOLLOWUP_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };





  // Delete followup
export const deleteFollowup = id => async dispatch => {
  try {
    await axios.delete(`/api/followups/${id}`);

    dispatch({
      type: DELETE_FOLLOWUP,
      payload: id
    });

    // dispatch(setAlert('Followup Removed', 'success'));
  } catch (err) {
    dispatch({
      type: FOLLOWUP_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};