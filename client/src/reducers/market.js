import {
    GET_MARKETS,
    MARKET_ERROR,
    DELETE_MARKET,
    ADD_MARKET,
    GET_MARKET,
  
  } from '../actions/types';
  
  const initialState = {
    markets: [],
    market: null,
    loading: true,
    error: {}
  };
  
  export default function(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_MARKETS:
        return {
          ...state,
          markets: payload,
          loading: false
        };
      case GET_MARKET:
        return {
          ...state,
          market: payload,
          loading: false
        };
      case ADD_MARKET:
        return {
          ...state,
          markets: [payload, ...state.markets],
          loading: false
        };
      case DELETE_MARKET:
        return {
          ...state,
          markets: state.markets.filter(market => market._id !== payload),
          loading: false
        };
      case MARKET_ERROR:
        return {
          ...state,
          error: payload,
          loading: false
        };
    
      default:
        return state;
    }
  }
   