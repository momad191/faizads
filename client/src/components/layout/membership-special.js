import React, { Fragment, useEffect ,useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import moment from 'moment';
import Moment from 'react-moment';
import { addSubscription } from '../../actions/auth';
import { setAlert } from '../../actions/alert';
import Alert from '../layout/Alert';

  
 
import PropTypes from 'prop-types';
import axios from 'axios';
import { Input } from 'postcss';


import Navbar from '../../components/layout/Navbar';
import NavbarEnglish from '../../components/layout/NavbarEnglish';
import { useTranslation } from 'react-i18next';
     
const Special = ({ setAlert ,addSubscription, isAuthenticated, match }) => {
  const [t, i18next] = useTranslation()
  const Lang = match.params.lang;

  const  freeDate= moment();
  freeDate.add(30,'days') 

  const [subscription,setSubscription]= useState([])
  const [user,setUser]= useState([])
  const [geolocation,setgeolocation]= useState([])

  const country_name = user.country_name;
  const country_code = user.country_code;
  const city = user.city;
  const state = user.state;
  const postal = user.postal;
  const latitude = user.latitude;
  const longitude = user.longitude;
  const IPv4 = user.IPv4;
  
  const shopname = '';
  const shopstatus='open'; 
  
  const membership_class = 'special';
  const Payment_status ='ok';
  const available_ads = 250;
  const membership_renewal_date = Date.now();
  const membership_renewal_expiry_date = freeDate;
 

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: ''
  }); 
   
  const { first_name,last_name, email} = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });


   
  const onSubmit = async e => {
    e.preventDefault();
      addSubscription({ first_name,last_name, email,country_name,country_code, city, state, postal, latitude, longitude, IPv4, shopname, shopstatus, membership_class,Payment_status,available_ads,membership_renewal_date, membership_renewal_expiry_date });
      
  };


    
  useEffect(() => {

 

    axios.get('/api/subscriptions/lastsubscription')
    .then(res => {
      console.log(res);
      setSubscription(res.data)
    })
    .catch((err) => {
      console.log(err);
    })


    axios.get('https://geolocation-db.com/json/297364b0-2bc6-11ec-a8a6-1fc54772a803')
    .then(res => {
      setgeolocation(res.data)
    })
    .catch((err) => {
      console.log(err);
    })
 
 
    axios.get('/api/auth/')
    .then(res => {
      setUser(res.data)
    })
    .catch((err) => {
      console.log(err);
    })


 
 


 }, []);


  
 
  return (
    <Fragment>

{i18next.language === 'ar'?(
        <Navbar />
      ):(
      <NavbarEnglish />
      )}


     <div className="aqle3-main" >
      <div className="mainword2">

      {i18next.language === 'ar'?(
      <div className="mainForm">
      <center>
        <div className="side-columns">
         <ul className="price">
         <li className="header">???????????? </li>
         <li className="grey">???????? ??????</li>
         <li className="boldy">{user.first_name}  {user.last_name} </li>
         <li className="boldy"> {user.email} </li>
         <li className="boldy"> {user.country_name}</li>
        
          
        </ul>
        </div>
</center>



     
      
   
 
      <center> 
      <form className="login-form" onSubmit={e => onSubmit(e)}>

      <div class="login-title">  ?????????????? ???? ?????????? ????????????  </div>
      <center> <i  class="fa fa-cc-visa fa-5x" aria-hidden="true"></i>{'   '}
      <i  class="fa fa-cc-mastercard fa-5x" aria-hidden="true"></i>
      {'   '}
      <i  class="fa fa-cc-paypal fa-5x" aria-hidden="true"></i> 
       </center>
  

      <div className=''>    
      <div className="login-title"> ?????????? ????????????  </div>


                <span>??????????  </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="last_name" 
                 value={user.first_name +' '+ user.last_name} 
                // onChange={this.onChangename}
                 >    
                 </input>
 



            
 

      <div className=''>
 
      <div className='' style={{width:'100%',display:'flex'}}>
          {/* <div className='' style={{width:'50%',marginRight:'10px'}}>
          <span className="login-text">  ?????????? ????????????    </span>
          <input
           className="login-input"
            type='text'
            placeholder=''
            name='last_name'
            value={last_name}
            onChange={e => onChange(e)}
          />
           </div> */}

           </div>
         
        
 
 
         
          </div>
          
     
    
     
          
    
  <div className=''>
    

<p className='login-alert'> {alert} </p>
</div>
    

 
        



   


 

     


   
        
       <Alert />
        <button className="Formbutton" type='submit'>???????????? </button>
        </div>
      </form>
      </center>
 
   


      
{(moment(subscription.membership_renewal_expiry_date).isAfter(Date.now())) &&(
  <Fragment>
    <center>
    <div className="Dash-button-still-subscription">
  <p class="login-title"> {subscription.membership_class}  ???????????????? ????????????  </p>
   <p> 
     ?????????? ?????????????? ???? ?????? <Moment format='YYYY/MM/DD'>{subscription.membership_renewal_expiry_date}</Moment> 
</p>

 
 </div>
 </center>
  </Fragment>
  )}


  
    

      </div>

      ):(

////////////////////////////ENGLISH///////////////////////////////////////

<div className="mainForm">
<center>
  <div className="side-columns">
   <ul className="price">
   <li className="header">Special </li>
   <li className="grey">call us</li>
   <li className="boldy">{user.first_name}  {user.last_name} </li>
   <li className="boldy"> {user.email} </li>
   <li className="boldy"> {user.country_name}</li>
  
    
  </ul>
  </div>
</center>







<center> 
<form className="login-form" onSubmit={e => onSubmit(e)}>

<div class="login-title">  Subscribe to a special plan  </div>
<center> <i  class="fa fa-cc-visa fa-5x" aria-hidden="true"></i>{'   '}
<i  class="fa fa-cc-mastercard fa-5x" aria-hidden="true"></i>
{'   '}
<i  class="fa fa-cc-paypal fa-5x" aria-hidden="true"></i> 
 </center>


<div className=''>    
<div className="login-title"> special plan  </div>


          <span>Name  </span>
          <input className="login-input"
           type="text" 
           placeholder=""
           name="last_name" 
           value={user.first_name +' '+ user.last_name} 
          // onChange={this.onChangename}
           >    
           </input>




      


<div className=''>

<div className='' style={{width:'100%',display:'flex'}}>
    {/* <div className='' style={{width:'50%',marginRight:'10px'}}>
    <span className="login-text">  ?????????? ????????????    </span>
    <input
     className="login-input"
      type='text'
      placeholder=''
      name='last_name'
      value={last_name}
      onChange={e => onChange(e)}
    />
     </div> */}

     </div>
   
  


   
    </div>
    



    

<div className=''>


<p className='login-alert'> {alert} </p>
</div>



  












  
 <Alert />
  <button className="Formbutton" type='submit'>Subscribe </button>
  </div>
</form>
</center>





{(moment(subscription.membership_renewal_expiry_date).isAfter(Date.now())) &&(
<Fragment>
<center>
<div className="Dash-button-still-subscription">
<p class="login-title"> {subscription.membership_class}  Current Subscription  </p>
<p> 
Your subscription expires <Moment format='YYYY/MM/DD'>{subscription.membership_renewal_expiry_date}</Moment> 
</p>


</div>
</center>
</Fragment>
)}





</div>


      )}
      </div>
      </div>
    </Fragment>
  );
};

Special.propTypes = {
  setAlert: PropTypes.func.isRequired,
  addSubscription: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};
 
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
 
export default connect(
  mapStateToProps,
  { setAlert, addSubscription }
)(Special);
