import axios from 'axios';
import { setAlert } from './alert';
  
import {
	GET_SHOP, 
	SHOP_ERROR,
	CLEAR_SHOP,
	UPDATE_SHOP,
	GET_SHOPS,
  UPDATE_FOLLOWERS,
  UPDATE_CLICKS,
  

} from './types';
 
// Get current users shop
export const getCurrentShop = () => async dispatch => {
  try {
    const res = await axios.get('/api/shop/me');

    dispatch({
      type: GET_SHOP,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SHOP_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};


// Get all shops
export const getShops = () => async dispatch => {
  dispatch({ type: CLEAR_SHOP });

  try {
    const res = await axios.get('/api/shop');

    dispatch({
      type: GET_SHOPS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SHOP_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get shop by ID
export const getShopById = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/shop/user/${userId}`);

    dispatch({
      type: GET_SHOP,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SHOP_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

     

// Create or update shop
 // Register User
export const createShop = ({ shop_url,shop_name,shop_type,shop_description,shop_img,shop_logo_img,shop_status,shop_country_code,shop_country_name,youtube,twitter,facebook,linkedin,instagram,shop_email,shop_website,shop_whatsaap,shop_phone1,shop_phone2,shop_phone3 }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
 
const body = JSON.stringify({ shop_url,shop_name,shop_type,shop_description,shop_img,shop_logo_img,shop_status,shop_country_code,shop_country_name,youtube,twitter,facebook,linkedin,instagram,shop_email,shop_website,shop_whatsaap,shop_phone1,shop_phone2,shop_phone3 });
  try {
    const res = await axios.post('/api/shops', body, config);
 
 
    dispatch({
      type: UPDATE_SHOP,
      payload: res.data
    });
    

    dispatch(setAlert('shop Created', 'success'));
    // window.location= `/ar/dashboard/main/`
   } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'alert-danger')));
    }

    dispatch({
      type: SHOP_ERROR
    });
  }
};



//////////////////////////////////followers///////////////////////////////////////
//  addFollower
 // Add follower
export const addFollower = id => async dispatch => {
    
  try {
    const res = await axios.put(`/api/shops/followers/${id}`);

    dispatch({
      type: UPDATE_FOLLOWERS,
      payload: { id, followers: res.data }
    });
    
     
    
  } catch (err) {
    dispatch({
      type: SHOP_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};





// Remove follower
export const removeFollower = id => async dispatch => {
  try {
    const res = await axios.put(`/api/shops/unfollow/${id}`);

    dispatch({
      type: UPDATE_FOLLOWERS,
      payload: { id, followers: res.data }
    });
  } catch (err) {
    dispatch({
      type: SHOP_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};




// Add click
export const addClick = id => async dispatch => {
  
  try {
    const res = await axios.put(`/api/shops/click/${id}`);

    dispatch({
      type: UPDATE_CLICKS,
      payload: { id, likes: res.data }
    });
    
    
  } catch (err) {
    dispatch({
      type: SHOP_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

  