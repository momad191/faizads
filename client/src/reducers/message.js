import {
    GET_MESSAGES,
    GET_MESSAGE,
    MESSAGE_ERROR, 
    UPDATE_MESSAGES,
    UPDATE_SUBMESSAGES,
    DELETE_MESSAGE,
    ADD_MESSAGE,
    ADD_SUBMESSAGE,
    DELETE_SUBMESSAGE

  } from '../actions/types';
  
  const initialState = {
    messages: [],
    message: null,
    loading: true,
    error: {}
  };
    
  export default function(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_MESSAGES:
        return {
          ...state,
          messages: payload,
          loading: false
        };
      case GET_MESSAGE:
        return {
          ...state,
          message: payload,
          loading: false
        };
      case ADD_MESSAGE:
        return {
          ...state,
          messages: [payload, ...state.messages],
          loading: false
        };
      case DELETE_MESSAGE:
        return {
          ...state,
          messages: state.messages.filter(message => message._id !== payload),
          loading: false
        };
      case MESSAGE_ERROR:
        return {
          ...state,
          error: payload,
          loading: false
        };
      case UPDATE_MESSAGES:
        return {
          ...state,
          messages: state.messages.map(message =>
            message._id === payload.id ? { ...message, submessage: payload.submessages } : message
          ),
          loading: false
        };
      case ADD_SUBMESSAGE:
        return {
          ...state,
          message: { ...state.message, submessage: payload },
          loading: false
        };
      case DELETE_SUBMESSAGE:
        return {
          ...state,
          message: {
            ...state.message,
            submessages: state.message.submessages.filter(
                submessage => submessage._id !== payload
            )
          },
          loading: false
        };
        case UPDATE_SUBMESSAGES:
          return {
            ...state,
            messages: state.messages.map(message =>
                message._id === payload.id ? { ...message, submessages: payload.submessages } : message
            ),
            loading: false
          };
          
      default:
        return state;
    }
  }
  