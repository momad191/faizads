import axios from 'axios';
import { setAlert } from './alert';
import {
    GET_CATEGORIES,
    CATEGORY_ERROR,
    DELETE_CATEGORY,
    ADD_CATEGORY,
    GET_CATEGORY
  
  } from './types';


  // Add Category
export const addCategory = formData => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
   
    try {
      const res = await axios.post('/api/categories', formData, config);
  
      dispatch({
        type: ADD_CATEGORY,
        payload: res.data
      });
   
      dispatch(setAlert('Category Created', 'success'));
      window.location = '/dashboard/categories/';
    } catch (err) {
      dispatch({
        type: CATEGORY_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };



 
    // Get markets
export const getCategories = () => async dispatch => {
  try {
    const res = await axios.get('/api/categories');
 
    dispatch({
      type: GET_CATEGORIES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CATEGORY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

 

// Delete Category
export const deleteCategory = id => async dispatch => {
  try {
    await axios.delete(`/api/categories/${id}`);

    dispatch({
      type: DELETE_CATEGORY,
      payload: id
    });
    dispatch(setAlert('Category Removed', 'success'));


  } catch (err) {
    dispatch({
      type: CATEGORY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
  