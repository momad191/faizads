import axios from 'axios';
import { setAlert } from './alert';
import {
    GET_QUESTIONS,
    QUESTION_ERROR,
    DELETE_QUESTION,
    ADD_QUESTION,
    GET_QUESTION,
  } from './types';
  
     
  // Add Question
export const addQuestion = formData => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
     
    try {
      const res = await axios.post('/api/questions', formData, config);
  
      dispatch({
        type: ADD_QUESTION,
        payload: res.data
      });
      dispatch(setAlert('Question Created ......', 'success'));
      window.location = '/questions';
    } catch (err) {
      dispatch({
        type: QUESTION_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };



    // Get questions
export const getQuestions = () => async dispatch => {
  try {
    const res = await axios.get('/api/questions');

    dispatch({
      type: GET_QUESTIONS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: QUESTION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};





 

// Delete question
export const deleteQuestion = id => async dispatch => {
  try {
    await axios.delete(`/api/questions/${id}`);

    dispatch({
      type: DELETE_QUESTION,
      payload: id
    });
    dispatch(setAlert('Question Removed', 'success'));


  } catch (err) {
    dispatch({
      type: QUESTION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

  