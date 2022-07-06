import React, { Fragment, useEffect ,useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { register } from '../../actions/auth';
import alretMsg from '../layout/Alert'
import PropTypes from 'prop-types';
import axios from 'axios';
import { Input } from 'postcss';
   
const Register = ({ register, isAuthenticated,match}) => {

 
  const [alert,setAlert]= useState('')
  const [user,setUserName]= useState([])
  

  const [geolocation,setgeolocation]= useState([])

  const country_name = geolocation.country_name;
  const country_code = geolocation.country_code;
  const city = geolocation.city;
  const state = geolocation.state;
  const postal = geolocation.postal;
  const latitude = geolocation.latitude;
  const longitude = geolocation.longitude;
  const IPv4 = geolocation.IPv4;
  const validity='normal';
  const shopname = '';
  const shopstatus='closed';
  const ref = match.params.id;
  const membership_class = 'free';
  const available_ads = 2;
  const membership_renewal_date =  Date.now();
  const membership_renewal_expiry_date =  Date.now();
 
 


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    Visual_Code:''
 
  


  }); 
  
  const { name, email, password, password2, Visual_Code} = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });


  
   
  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('كلمة المرور غير مطابقة');
    } else {
      register({ name, email, password,validity,country_name,country_code, city, state, postal, latitude, longitude, IPv4, shopname, shopstatus, ref, membership_class,available_ads,membership_renewal_date, membership_renewal_expiry_date,Visual_Code });
    }
  };

 
    
  useEffect(() => {


    axios.get('https://geolocation-db.com/json/297364b0-2bc6-11ec-a8a6-1fc54772a803')
    .then(res => {
      setgeolocation(res.data)
    })
    .catch((err) => {
      console.log(err);
    })

    

    axios.get('/api/users/'+ref)
    .then(res => {
      setUserName(res.data)
    })
    .catch((err) => {
      console.log(err);
    })
 

 }, []);



  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }



 
  return (
    <Fragment>
     <div className="aqle3-main" >
      <div className="mainword2">
      <div className="mainForm">

     
     
      
      
      {/* <div className="loginSmalltitle" >
        <i className='fa fa-user' />  
      </div> */}

      <center> 
      <form className="login-form" onSubmit={e => onSubmit(e)}>
      <div className='FormCover'>    
      <div className="login-title"> حساب جديد  </div>
{ref}


{user._id}

      <div className=''>
         
          <div className=''>
          <span className="login-text">  الإسم    </span>
          <input
           className="login-input"
            type='text'
            placeholder=''
            name='name'
            value={name}
            onChange={e => onChange(e)}
          />
           </div>
         
        

        <div className=''>
        <span className="login-text"> البريد الالكتروني </span>
          <input
            className="login-input"
            type='email'
            placeholder=''
            name='email'
            value={email}
            onChange={e => onChange(e)}
          />
          </div>
         
          </div>
          
          {/* <p className="smallText">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </p> */}
    
       

       <div className=''>
        <span className="login-text"> كلمة المرور </span>
          <input
            className="login-input"
            type='password'
            placeholder=''
            name='password'
            value={password}
            onChange={e => onChange(e)}
          />
          </div>
     
      
          <div className=''>
          <span className="login-text"> تأكيد كلمة المرور </span>
          <input
            className="login-input"
            type='password'
            placeholder=''
            name='password2'
            value={password2}
            onChange={e => onChange(e)}
          />
          </div>

 
    
          
   
          <div className=''>
            <img src=''/>
         <span className="login-text"> الرمز المرئي </span>
          <input
            className="login-input"
            type='text'
            placeholder=''
            name='Visual_Code'
            value={Visual_Code}
            onChange={e => onChange(e)}
          />
          </div>

  

 
{/* 
          <div className=''>
          <span> اسم المتجر </span>
          <input
            className="login-input"
            type='text'
            placeholder=''
            name="shopname" 
            value={shopname} 
            onChange={e => onChange(e)}
            
          />
          </div> */}


          
          {/* <div className=''>
          <span>  الاحالة </span>
          <input
            className="login-input"
            type='text'
            placeholder=''
            name="ref" 
            value={ref} 
            onChange={e => onChange(e)}
            
          />
          </div> */}

<p className='login-alert'> {alert} </p>
</div>
    

 
        



   


 

     


  



 
  
 
     

 



            
 
 
{/*          
           <input
           className="FormCover"
            type='hidden'
            placeholder='validity'
            name='validity'
            value='super'
            onChange={e => onChange(e)}
          /> */}
       
       
        <button className="Formbutton" type='submit'> تسجيل </button>
        
      </form>
      </center>
 

      <div className="loginSmalltitle">
        لدي حساب <Link to='/login'>الدخول</Link>
      </div>
    

      </div>
      </div>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
 
export default connect(
  mapStateToProps,
  { register }
)(Register);
