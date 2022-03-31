import {
    GET_COUNTRIES,
    COUNTRY_ERROR,
    DELETE_COUNTRY,
    ADD_COUNTRY,
    GET_COUNTRY,
  
  } from '../actions/types';
  
  const initialState = {
    countries: [],
    country: null,
    loading: true,
    error: {}
  };
  
  export default function(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_COUNTRIES:
        return {
          ...state,
          countries: payload,
          loading: false
        };


      case GET_COUNTRY:
        return {
          ...state,
          country: payload,
          loading: false
        };


      case ADD_COUNTRY:
        return {
          ...state,
          countries: [payload, ...state.countries],
          loading: false
        };


      case DELETE_COUNTRY:
        return {
          ...state,
          countries: state.countries.filter(country => country._id !== payload),
          loading: false
        };
      case COUNTRY_ERROR:
        return {
          ...state,
          error: payload,
          loading: false
        };
    
      default:
        return state;
    }
  }
   