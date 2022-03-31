import axios from 'axios';
import { setAlert } from './alert'; 
import { 
    REPORT_ERROR,
    ADD_REPORT, 
  } from './types';
  // Add request
export const addReport = formData => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      } 
    };
    
    try {
      const res = await axios.post('/api/reports', formData, config);
  
      dispatch({
        type: ADD_REPORT,
        payload: res.data
      });
   
      //dispatch(setAlert('profitrequests Created', 'success'));
     
    } catch (err) {
      dispatch({
        type: REPORT_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };

