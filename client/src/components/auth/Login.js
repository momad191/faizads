import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
 
import Navbar from '../../components/layout/Navbar';
import NavbarEnglish from '../../components/layout/NavbarEnglish';

const Login = ({ login, isAuthenticated,match }) => {
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
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard/main' />;
  }
 
  return (

 
    

    <Fragment>
         {Lang === 'ar'?(
        <Navbar />
      ):(
      <NavbarEnglish />
      )}
      <div className="aqle3-main" >
      <div className="mainword2">

      {Lang === 'ar'?(
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
        <button className="Formbutton"  type='submit' value='Login' >الدخول</button>
        </div>
      </form>
      </center>
    

      <div className="loginSmalltitle" > ليس لديك حساب ؟ <Link className="loginSmalltitle" to="/ar/user/register">سجل الان</Link>
      | <Link className="loginSmalltitle" to="/ar/user/Reset">نسيت كلمة المرور</Link> 
       
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
    <button className="Formbutton"  type='submit' value='Login' >Login</button>
    </div>
  </form>
  </center>


  <div className="loginSmalltitle" >   You don't have an account?  <Link className="loginSmalltitle" to="/en/user/register">Register</Link>
  | <Link className="loginSmalltitle" to="/en/user/Reset">Forgot your password </Link> 
   
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
 