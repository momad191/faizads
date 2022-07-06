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

     
const Silver = ({ setAlert ,addSubscription, isAuthenticated, match }) => {
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
  
  const membershiptype = "626a5727a5f68d13860c0706";
  const membership_class = 'silver';
  const Payment_status ='ok';
  const available_ads = 100;
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
      // addSubscription({ first_name,last_name, email,country_name,country_code, city, state, postal, latitude, longitude, IPv4, shopname, shopstatus, membership_class,Payment_status,available_ads,membership_renewal_date, membership_renewal_expiry_date });
      
  };


    
  useEffect(() => {

    
    window.paypal.Buttons({
      createOrder: function(data, actions) {
        // This function sets up the details of the transaction, including the amount and line item details.
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: '21.00'
            }
          }] 
        }); 
      }, 
      onApprove: (data, actions) =>{
        return actions.order.capture().then((details)=> {
          addSubscription({ membershiptype,first_name,last_name, email,country_name,country_code, city, state, postal, latitude, longitude, IPv4, shopname, shopstatus, membership_class,Payment_status,available_ads,membership_renewal_date, membership_renewal_expiry_date });
          alert('thnaks for your subscription ' + details.payer.name.given_name);
        });
      }
    }).render('#paypal-button-container');



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

{i18next.language  === 'ar'?(
        <Navbar />
      ):(
      <NavbarEnglish />
      )}

     <div className="aqle3-main" >
      <div className="mainword2">

      {i18next.language  === 'ar'?(
      <div className="mainForm">
      <center>
        <div className="side-columns">
         <ul className="price">
         <li className="silver">الفضية </li>
         <li className="grey">$ 21.00 / شهريا</li>
         <li className="boldy">{user.first_name}  {user.last_name} </li>
         <li className="boldy"> {user.email} </li>
         <li className="boldy"> {user.country_name}</li>
        
          
        </ul>
        </div>
</center>



     
      
   
 
 <center> 
 <form className="login-form" onSubmit={e => onSubmit(e)}>

<div class="login-title">  الإشترك في الخطة الفضية  </div>

 <center>  <div style={{width:''}} id="paypal-button-container"></div></center> 

{(moment(subscription.membership_renewal_expiry_date).isAfter(Date.now())) &&(
  <Fragment>
    <center>
    <div className="Dash-button-still-subscription">
  {/* <p class="login-title"> {subscription.membership_class}  الاشتراك الحالي  </p> */}
  <p class="login-title">الاشتراك الحالي الخطة {subscription.membership_class && subscription.membership_class}   </p>

   <p> 
     ينتهي اشتراكك في يوم <Moment format='YYYY/MM/DD'>{subscription.membership_renewal_expiry_date}</Moment> 
</p>

  
 </div>
 </center>
  </Fragment>
  )}


      
      </form>
      </center>
 
   



  
    

      </div>

):(
/////////////////////////ENGLISH////////////////////////////
<div className="mainForm">
<center>
  <div className="side-columns">
   <ul className="price">
   <li className="silver">Silver </li>
   <li className="grey">$ 21.00 / Monthly</li>
   <li className="boldy">{user.first_name}  {user.last_name} </li>
   <li className="boldy"> {user.email} </li>
   <li className="boldy"> {user.country_name}</li>
  </ul>
  </div>
</center>


<center> 
<form className="login-form" onSubmit={e => onSubmit(e)}>
<div class="login-title">  Subscribe to the silver plan  </div>

<center>  <div style={{width:''}} id="paypal-button-container"></div></center> 


{(moment(subscription.membership_renewal_expiry_date).isAfter(Date.now())) &&(
<Fragment>
<center>
<div className="Dash-button-still-subscription">
{/* <p class="login-title"> Current Subscription:{subscription.membership_class}    </p> */}
<p class="login-title"> Current Subscription: {subscription.membership_class && subscription.membership_class} Plan   </p>

<p> 
Your subscription expires <Moment format='YYYY/MM/DD'>{subscription.membership_renewal_expiry_date}</Moment> 
</p>


</div>
</center>
</Fragment>
)}


</form>
</center>

</div>


)}


      </div>
      </div>
    </Fragment>
  );
};

Silver.propTypes = {
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
)(Silver);
 