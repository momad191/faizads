import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth'; 
import { setAlert } from '../../actions/alert';
import Alert from '../layout/Alert';

import Navbar from '../../components/layout/Navbar';
import NavbarEnglish from '../../components/layout/NavbarEnglish';
import { useTranslation } from 'react-i18next';

const Login = ({ login, isAuthenticated,match,setAlert }) => {
  const [t, i18next] = useTranslation()

  const [alertWarning,setAlertWarning]= useState('')

  const [showalertI,setshowalertI]= useState('no')

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
 
  const Lang = match.params.lang;
  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password); 
    setshowalertI('yes')
  };


  const showalert = async e => {
    e.preventDefault();
   
   
  };

  
 

  if (isAuthenticated) {
    return <Redirect to='/dashboard/main' />;
  }


  // if (isAuthenticated && i18next.language === 'en') {
  //   return <Redirect to='/dashboard/main' />;
  // }
   
  return (

   
    

    <Fragment>
      {i18next.language === 'ar'&&(<Navbar />)}
      {i18next.language === 'en'&&(<NavbarEnglish />)}

      <div className="aqle3-main" >
      <div className="mainword2">
        {alertWarning}

        {i18next.language === 'ar'?(
      <Fragment>
      <div className="mainForm">
      <center> 
      <form className="login-form" onSubmit={e => onSubmit(e)}>   
      <div className='FormCover'>  
      <div className="login-title"> الدخول إلى حسابك </div>   
      <div className=''>
          <span className="login-text"> البريد الإلكتروني </span>
          <input
           className="login-input"
            type='email'
            name='email'
            value={email}
            onChange={e => onChange(e)}
            required
          />
          </div>
       
          <div className=''>
          <span className="login-text">كلمة المرور </span>
          <input
           className="Forminput" 
            type='password' 
            name='password'
            value={password}
            onChange={e => onChange(e)}
            minLength='6'
          /> 
        </div>
        {showalertI === 'yes' && (
      <center>   <div className="alert-info" >  <Alert />  </div> </center>  
        )}
         <button  className="Formbutton"  type='submit' value='Login'>الدخول</button>
        </div>
      </form>
      </center>
    

      <div className="loginSmalltitle" > ليس لديك حساب ؟ <a className="loginSmalltitle" href="/user/createAccount">سجل الان</a>
      | <a className="loginSmalltitle" href="/user/forgot-password">نسيت كلمة المرور</a> 
       
    </div> 

       </div>
       </Fragment>

):(

///////////////////////////English////////////////////////////////////////////////
 
  <Fragment>
  <div className="mainForm">
  <center> 
  <form className="login-form" onSubmit={e => onSubmit(e)}>   
  <div className='FormCover'>  
  <div className="login-title"> Login </div>   
  <div className=''>


      <span className="login-text"> Email </span>
      <input
       className="login-input"
        type='email'
        name='email'
        value={email}
        onChange={e => onChange(e)}
        required
      />
      </div>
   
      <div className=''>
      <span className="login-text">Password </span>
      <input
       className="login-input"
        type='password'
        name='password'
        value={password}
        onChange={e => onChange(e)}
        minLength='6' 
      />
   </div>
   {showalertI === 'yes' && (
      <center>   <div className="alert-info" >  <Alert />  </div> </center>  
        )}
    <button className="Formbutton"  type='submit' value='Login' >Login</button>
    </div>
  </form>
  </center>


  <div className="loginSmalltitle" >   You don't have an account?  <a className="loginSmalltitle" href="/user/createAccount">Register</a>
  | <a className="loginSmalltitle" href="/user/forgot-password">Forgot your password </a> 
   
</div> 

   </div>
   </Fragment>

        
  )}




      </div>
      
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
 