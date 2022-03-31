import axios from 'axios';
import { setAlert } from './alert';
// import {
//     GET_MARKETS,
//     MARKET_ERROR,
//     DELETE_MARKET,
//     ADD_MARKET,
//     GET_MARKET,
     
//   } from './types'; 

 

// Register User
export const addVote = ({ post_id,post_title,rank }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
 
const body = JSON.stringify({ post_id,post_title,rank});
 


  try {
     await axios.post('/api/votings', body, config);
       
     window.location= `/posts/${post_id}`

  
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error =>  setAlert(error.msg, 'danger'));
    }

   
  }
};