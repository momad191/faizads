import axios from 'axios';
import { setAlert } from './alert'; 
import { 
  SUBSCRIPTION_SUCCESS,
  SUBSCRIPTION_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL, 
  LOGOUT,
  CLEAR_PROFILE,
  VISUALCODE_SUCCESS,
  VISUALCODE_FAIL,
  PAY_SUCCESS,
  PAY_FAIL,
  ADD_REGISTER_SUCCESS,
  ADD_REGISTER_FAIL
} from './types';
 
import setAuthToken from '../utils/setAuthToken';

// Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/auth');
 
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};
  
// Register User
export const register = ({ first_name,last_name,username, email, password, validity,country_name,country_code,city,state,postal,latitude,longitude,IPv4,shopname,shopstatus,ref,membership_class,available_ads,membership_renewal_date,membership_renewal_expiry_date,Visual_Code }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
 
const body = JSON.stringify({ first_name,last_name,username, email, password, validity,country_name,country_code,city,state,postal,latitude,longitude,IPv4,shopname,shopstatus,ref,membership_class,available_ads,membership_renewal_date,membership_renewal_expiry_date,Visual_Code });
  try {
    const res = await axios.post('/api/users', body, config);
 
   
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
    setAlert('Account created successfully');
     window.location= `/dashboard/main`
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
  
    dispatch({
      type: REGISTER_FAIL
    });
  }
};
 
// Login User
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/auth', body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
 
    dispatch({
      type: LOGIN_FAIL
    });
  }
};
 
// Logout / Clear Profile
export const logout = () => dispatch => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
};




//  addSubscription
export const addSubscription = ({membershiptype,first_name,last_name,country_name,country_code,city,state,postal,latitude,longitude,IPv4,shopname,shopstatus,ref,membership_class,Payment_status,available_ads,membership_renewal_date,membership_renewal_expiry_date }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  
const body = JSON.stringify({membershiptype,first_name,last_name,country_name,country_code,city,state,postal,latitude,longitude,IPv4,shopname,shopstatus,ref,membership_class,Payment_status,available_ads,membership_renewal_date,membership_renewal_expiry_date });
  try {
    const res = await axios.post('/api/subscriptions', body, config);

    dispatch({
      type: SUBSCRIPTION_SUCCESS,
      payload: res.data
    });

    //dispatch(loadUser());
    window.location = '/dashboard/main';
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'alert-danger')));
    }

    dispatch({
      type: SUBSCRIPTION_FAIL
    });
  }
};







//  addvisual
export const addvisual = ({ visual_code }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  
const body = JSON.stringify({ visual_code });
  try {
    const res = await axios.post('/api/visualcodes', body, config);

    dispatch({
      type: VISUALCODE_SUCCESS,
      payload: res.data
    });

    //dispatch(loadUser());
    // window.location = '/dashboard';
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'alert-danger')));
    }

    dispatch({
      type: VISUALCODE_FAIL
    });
  }
};



 

//  pay
export const pay = () => async dispatch => {
  // const config = {
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // };
  
// const body = JSON.stringify({});
  try {
    const res = await axios.post('/api/subscriptions/pay');

    dispatch({
      type: PAY_SUCCESS,
      payload: res.data
    });

    //dispatch(loadUser());
    // window.location = '/dashboard/main';
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'alert-danger')));
    }

    dispatch({
      type: PAY_FAIL
    });
  }
};




 
// edit validity
// Register User
  export const editValidity = (userId,formData) => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }; 
  
    try {
      const res = await axios.post(
        `/api/auth/editValidity/${userId}`,
        formData,
        config
      );
  
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
  
      // dispatch(setAlert('Comment Added', 'success'));
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
    


     // Add Reset
export const addReset = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
   
  try {
    const res = await axios.post('/api/auth/resetnow', formData, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  
    dispatch(setAlert('Reset  submitted', 'success'));
   
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

 

 

     // Add Register
       export const addRegister = ({ r_email }) => async dispatch => {

      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }; 
      const body = JSON.stringify({ r_email });

      try {
        const res = await axios.post('/api/auth/registernow', body, config);
    
        dispatch({
          type: ADD_REGISTER_SUCCESS,
          payload: res.data
        });
     
        dispatch(setAlert('Registeration  submitted', 'success'));
       
      } catch (err) {
        const errors = err.response.data.errors;
    
        if (errors) {
          errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
          type: ADD_REGISTER_FAIL,
          payload: { msg: err.response.statusText, status: err.response.status }
        });
      }
    };




         // Add RegisterByRef
         export const addRegisterByRef = ({ r_email,r_ref }) => async dispatch => {

          const config = {
            headers: {
              'Content-Type': 'application/json'
            }
          }; 
          const body = JSON.stringify({ r_email,r_ref });
    
          try {
            const res = await axios.post('/api/auth/registernow/:ref', body, config);
        
            dispatch({
              type: ADD_REGISTER_SUCCESS,
              payload: res.data
            });
         
            dispatch(setAlert('Registeration  submitted', 'success'));
           
          } catch (err) {
            const errors = err.response.data.errors;
        
            if (errors) {
              errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
            }
            dispatch({
              type: ADD_REGISTER_FAIL,
              payload: { msg: err.response.statusText, status: err.response.status }
            });
          }
        };