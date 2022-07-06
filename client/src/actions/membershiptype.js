import axios from 'axios';
import { setAlert } from './alert';
import {
    GET_MEMBERSHIPTYPES,
    MEMBERSHIPTYPE_ERROR,
    DELETE_MEMBERSHIPTYPE,
    ADD_MEMBERSHIPTYPE,
    GET_MEMBERSHIPTYPE,
      
  } from './types';


 
  
  
    // Add membershiptype
export const addMembershiptype = formData => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      } 
    }; 
    try {
      const res = await axios.post('/api/membershiptypes', formData, config);
      dispatch({
        type: ADD_MEMBERSHIPTYPE,
        payload: res.data
      });
      dispatch(setAlert('membershiptype Created', 'success'));
      window.location = '/ar/dashboard/Addmembershiptype';
    } catch (err) {
      dispatch({
        type: MEMBERSHIPTYPE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
   


 
  
// Delete Membershiptype
export const deleteMembershiptype = id => async dispatch => {
  try {
    await axios.delete(`/api/membershiptypes/${id}`);

    dispatch({
      type: DELETE_MEMBERSHIPTYPE,
      payload: id
    });
    dispatch(setAlert('membershiptypes Removed', 'success'));


  } catch (err) {
    dispatch({
      type: MEMBERSHIPTYPE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
