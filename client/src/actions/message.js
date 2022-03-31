import axios from 'axios';
import { setAlert } from './alert'; 
import { 
    MESSAGE_ERROR,
    ADD_MESSAGE, 
    ADD_SUBMESSAGE,
    GET_MESSAGE, 
    GET_SUBMESSAGE, 
    DELETE_SUBMESSAGE, 
    DELETE_MESSAGE, 
  } from './types';
  // Add request
export const addMessage = formData => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      } 
    }; 
     
    try {
      const res = await axios.post('/api/messages', formData, config);
  
      dispatch({
        type: ADD_MESSAGE,
        payload: res.data
      });
   
      //dispatch(setAlert('profitrequests Created', 'success'));
     
    } catch (err) {
      dispatch({
        type: MESSAGE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };




  
// Add submessage
export const addSubMessage = (messageId, formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }; 

  try {
    const res = await axios.post(
      `/api/messages/submessage/${messageId}`,
      formData,
      config
    );
 
    dispatch({
      type: ADD_SUBMESSAGE,
      payload: res.data
    });

    dispatch(setAlert('SUBMESSAGE Added', 'success'));
  } catch (err) {
    dispatch({
      type: MESSAGE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};



// Delete post
export const deleteMessage = id => async dispatch => {
  try {
    await axios.delete(`/api/messages/${id}`);

    dispatch({
      type: DELETE_MESSAGE,
      payload: id
    }); 

    dispatch(setAlert('messages Removed', 'success'));
  } catch (err) {
    dispatch({
      type: MESSAGE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
 

// Delete SubMessage
export const deleteSubMessage = (messageId, submessageId) => async dispatch => {
  try {
    await axios.delete(`/api/messages/submessage/${messageId}/${submessageId}`);
   
    dispatch({
      type: DELETE_SUBMESSAGE,
      payload: submessageId
    });

    dispatch(setAlert('submessage Removed', 'success'));
  } catch (err) {
    dispatch({
      type: MESSAGE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}; 
 
 
 
// Get post
export const getMessage = id => async dispatch => {
  try {
    const res = await axios.get(`/api/messages/${id}`);
   
    dispatch({
      type: GET_MESSAGE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: MESSAGE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};




export const getSubMessage = id => async dispatch => {
  try {
    const res = await axios.get(`/api/messages/submsgs/${id}`);
   
    dispatch({
      type: GET_SUBMESSAGE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: MESSAGE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
