import {
    GET_QUESTIONS,
    QUESTION_ERROR,
    DELETE_QUESTION,
    ADD_QUESTION,
    GET_QUESTION,
   
  } from '../actions/types';
  
  const initialState = {
    questions: [],
    question: null,
    loading: true,
    error: {}
  };
  
  export default function(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_QUESTIONS:
        return {
          ...state,
          questions: payload,
          loading: false
        };
      case GET_QUESTION:
        return {
          ...state,
          question: payload,
          loading: false
        };
      case ADD_QUESTION:
        return {
          ...state,
          questions: [payload, ...state.questions],
          loading: false
        };
      case DELETE_QUESTION:
        return {
          ...state,
          questions: state.questions.filter(question => question._id !== payload),
          loading: false
        };
      case QUESTION_ERROR:
        return {
          ...state,
          error: payload,
          loading: false
        };
    
      default:
        return state;
    }
  }
   