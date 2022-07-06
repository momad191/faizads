import React, { Component ,Fragment } from 'react';
import axios from 'axios'; 
import moment from 'moment';
import Moment from 'react-moment';

import Navbar from '../layout/Navbar';
import NavbarEnglish from '../layout/NavbarEnglish';
//import 'moment/locale/ar'; 
import i18next from 'i18next';

export default class MyProfile extends Component {
  
 
  constructor(props) {
  
    super(props);
      
  
    this.onChangefirst_name = this.onChangefirst_name.bind(this);
    this.onChangelast_name = this.onChangelast_name.bind(this);
    this.onChangepayee_name = this.onChangepayee_name.bind(this);
    this.onChangepaypal_account = this.onChangepaypal_account.bind(this);
    // this.onChangeemail = this.onChangeemail.bind(this);
     this.onChangecountry_code = this.onChangecountry_code.bind(this);
     this.onChangecountry_name = this.onChangecountry_name.bind(this);
     this.onChangephone = this.onChangephone.bind(this);
     this.onChangeaddress1 = this.onChangeaddress1.bind(this);
     this.onChangeaddress2 = this.onChangeaddress2.bind(this);

     this.onChangecity = this.onChangecity.bind(this);
     this.onChangestate = this.onChangestate.bind(this);
     this.onChangepostal = this.onChangepostal.bind(this);
    //  this.onChangevalidity = this.onChangevalidity.bind(this);

     


    

    this.onSubmit = this.onSubmit.bind(this);

 

    this.state = {
      Lang :this.props.match.params.lang,
      _id:'',
      first_name: '',
      last_name: '',
      payee_name: '',
      paypal_account: '',
      email:'',
      country_code: '',
      country_name: '',
      phone: '',
      address1: '',
      address2: '',
      city:'',
      state:'',
      postal:'',
      // validity:'',
      shopstatus:'',
      registration_date:'',
      membership_class: '',
      membershiptype:'',
      Payment_status:'',
      available_ads:'',
      membership_renewal_date:'',
      membership_renewal_expiry_date: '',
    
      loading:false,
      alertSuccessAR:'',
      alertSuccessEN:''
      
    }
  }
  
  componentDidMount() {
    axios.get('/api/auth')
      .then(response => { 
        this.setState({
          _id: response.data._id,
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          payee_name: response.data.payee_name,
          paypal_account: response.data.paypal_account,
          email: response.data.email,
          country_code: response.data.country_code,
          country_name: response.data.country_name,
          phone: response.data.phone,
          address1: response.data.address1,
          address2: response.data.address2,
          city: response.data.city,
          state: response.data.state,
          postal: response.data.postal,
          // validity: response.data.validity,
            

        })   
      })
      .catch(function (error) {
        console.log(error);
      })



 

      axios.get('/api/subscriptions/lastsubscription')
      .then(response => {
        this.setState({
          registration_date: response.data.registration_date,
          membership_class: response.data.membership_class,
          membershiptype: response.data.membershiptype,
          Payment_status:response.data.Payment_status,
          membership_renewal_date: response.data.membership_renewal_date,
          membership_renewal_expiry_date: response.data.membership_renewal_expiry_date,  
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

 

  }

   

  onChangefirst_name(e) {
    this.setState({
      first_name: e.target.value
    })
  }


  onChangelast_name(e) {
    this.setState({
      last_name: e.target.value
    })
  }


  onChangepayee_name(e) {
    this.setState({
      payee_name: e.target.value
    })
  }

  onChangepaypal_account(e) {
    this.setState({
      paypal_account: e.target.value
    })
  }

  
  
  onChangecountry_code(e) {
    this.setState({
      country_code: e.target.value
    })
  }

  
  onChangecountry_name(e) {
    this.setState({
      country_name: e.target.value
    })
  }

  onChangephone(e) {
    this.setState({
      phone: e.target.value
    })
  }



  onChangeaddress1(e) {
    this.setState({
      address1: e.target.value
    })
  }


  onChangeaddress2(e) {
    this.setState({
      address2: e.target.value
    })
  }


  onChangecity(e) {
    this.setState({
      city: e.target.value
    })
  }


  onChangestate(e) {
    this.setState({
      state: e.target.value
    })
  }


  onChangepostal(e) {
    this.setState({
      postal: e.target.value
    })
  }
 

  // onChangevalidity(e) {
  //   this.setState({
  //     validity: e.target.value
  //   })
  // }
  
 
 
  async onSubmit(e) {


    e.preventDefault();

    const today_date = moment();
    const expire_date = moment();
    expire_date.add(30,'days');
    const para = this.state._id 
    const user = {
      first_name:this.state.first_name ,
      last_name: this.state.last_name ,
      payee_name: this.state.payee_name ,
      paypal_account: this.state.paypal_account ,
      country_name:this.state.country_name,
      country_code:this.state.country_code,
      phone:this.state.phone ,
      address1: this.state.address1 ,
      address2: this.state.address2 ,
      city: this.state.city ,
      state: this.state.state ,
      postal: this.state.postal, 
      // validity: this.state.validity, 
    }
     
   
    axios.post('/api/auth/updateProfile/'+para, user);

    this.setState({
      alertSuccessAR:'تم التحديث '
    })

    this.setState({
      alertSuccessEN:'Updated'
    })

    
      window.location ='/dashboard/MyProfile'
    
    }
 
    


 

 

  render(loading) {

    {i18next.language === 'ar' &&   moment.locale('ar');}
    {i18next.language === 'en' &&   moment.locale('en');}
    return (
      <Fragment>
 


 { i18next.language === 'ar'&&(
 <Navbar />
)}


{ i18next.language === 'en'&&(
 <NavbarEnglish />
)}
   
 
        <div className="aqle3-main">
        <div className="mainword2">

           
  <div className="mainForm">
  { i18next.language === 'ar'&&(

  
<Fragment>
 
  
        <center> 

        <div class="login-title">   </div>
	 
	    <form className="login-form" onSubmit={this.onSubmit}>
      <div className='FormCover'>  
      <div class="login-title">   معلومات مدير الحساب  <i class="fa fa-user fa-2x" aria-hidden="true"></i></div>
      <center> 
     
      </center>

                <span className='details-title'> الاسم الاول </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="first_name" 
                 value={this.state.first_name} 
                 onChange={this.onChangefirst_name} 
                 >     
                 </input>


                 <span className='details-title'> الاسم الاخير </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="last_name" 
                 value={this.state.last_name} 
                 onChange={this.onChangelast_name}
                 >    
                 </input>


                 <span className='details-title'> البريد الإلكتروني  </span>
                 <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="email" 
                 value={this.state.email} 
                // onChange={this.onChangeemail}
                 >    
                 </input>


                 <span className='details-title'>الدولة </span>   
                 {/* <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="country_code" 
                 value={this.state.country_code} 
                 onChange={this.onChangecountry_code}
                 >    
                 </input> */}                
     <select
      className="login-input"
      name="country_code" 
      value={this.state.country_code} 
      onChange={this.onChangecountry_code}
      >
    <option>select country</option>
    <option value="AF">Afghanistan</option>
    <option value="AX">Aland Islands</option>
    <option value="AL">Albania</option>
    <option value="DZ">Algeria</option>
    <option value="AS">American Samoa</option>
    <option value="AD">Andorra</option>
    <option value="AO">Angola</option>
    <option value="AI">Anguilla</option>
    <option value="AQ">Antarctica</option>
    <option value="AG">Antigua and Barbuda</option>
    <option value="AR">Argentina</option>
    <option value="AM">Armenia</option>
    <option value="AW">Aruba</option>
    <option value="AU">Australia</option>
    <option value="AT">Austria</option>
    <option value="AZ">Azerbaijan</option>
    <option value="BS">Bahamas</option>
    <option value="BH">Bahrain</option>
    <option value="BD">Bangladesh</option>
    <option value="BB">Barbados</option>
    <option value="BY">Belarus</option>
    <option value="BE">Belgium</option>
    <option value="BZ">Belize</option>
    <option value="BJ">Benin</option>
    <option value="BM">Bermuda</option>
    <option value="BT">Bhutan</option>
    <option value="BO">Bolivia</option>
    <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
    <option value="BA">Bosnia and Herzegovina</option>
    <option value="BW">Botswana</option>
    <option value="BV">Bouvet Island</option>
    <option value="BR">Brazil</option>
    <option value="IO">British Indian Ocean Territory</option>
    <option value="BN">Brunei Darussalam</option>
    <option value="BG">Bulgaria</option>
    <option value="BF">Burkina Faso</option>
    <option value="BI">Burundi</option>
    <option value="KH">Cambodia</option>
    <option value="CM">Cameroon</option>
    <option value="CA">Canada</option>
    <option value="CV">Cape Verde</option>
    <option value="KY">Cayman Islands</option>
    <option value="CF">Central African Republic</option>
    <option value="TD">Chad</option>
    <option value="CL">Chile</option>
    <option value="CN">China</option>
    <option value="CX">Christmas Island</option>
    <option value="CC">Cocos (Keeling) Islands</option>
    <option value="CO">Colombia</option>
    <option value="KM">Comoros</option>
    <option value="CG">Congo</option>
    <option value="CD">Congo, Democratic Republic of the Congo</option>
    <option value="CK">Cook Islands</option>
    <option value="CR">Costa Rica</option>
    <option value="CI">Cote D'Ivoire</option>
    <option value="HR">Croatia</option>
    <option value="CU">Cuba</option>
    <option value="CW">Curacao</option>
    <option value="CY">Cyprus</option>
    <option value="CZ">Czech Republic</option>
    <option value="DK">Denmark</option>
    <option value="DJ">Djibouti</option>
    <option value="DM">Dominica</option>
    <option value="DO">Dominican Republic</option>
    <option value="EC">Ecuador</option>
    <option value="EG">Egypt</option>
    <option value="SV">El Salvador</option>
    <option value="GQ">Equatorial Guinea</option>
    <option value="ER">Eritrea</option>
    <option value="EE">Estonia</option>
    <option value="ET">Ethiopia</option>
    <option value="FK">Falkland Islands (Malvinas)</option>
    <option value="FO">Faroe Islands</option>
    <option value="FJ">Fiji</option>
    <option value="FI">Finland</option>
    <option value="FR">France</option>
    <option value="GF">French Guiana</option>
    <option value="PF">French Polynesia</option>
    <option value="TF">French Southern Territories</option>
    <option value="GA">Gabon</option>
    <option value="GM">Gambia</option>
    <option value="GE">Georgia</option>
    <option value="DE">Germany</option>
    <option value="GH">Ghana</option>
    <option value="GI">Gibraltar</option>
    <option value="GR">Greece</option>
    <option value="GL">Greenland</option>
    <option value="GD">Grenada</option>
    <option value="GP">Guadeloupe</option>
    <option value="GU">Guam</option>
    <option value="GT">Guatemala</option>
    <option value="GG">Guernsey</option>
    <option value="GN">Guinea</option>
    <option value="GW">Guinea-Bissau</option>
    <option value="GY">Guyana</option>
    <option value="HT">Haiti</option>
    <option value="HM">Heard Island and Mcdonald Islands</option>
    <option value="VA">Holy See (Vatican City State)</option>
    <option value="HN">Honduras</option>
    <option value="HK">Hong Kong</option>
    <option value="HU">Hungary</option>
    <option value="IS">Iceland</option>
    <option value="IN">India</option>
    <option value="ID">Indonesia</option>
    <option value="IR">Iran, Islamic Republic of</option>
    <option value="IQ">Iraq</option>
    <option value="IE">Ireland</option>
    <option value="IM">Isle of Man</option>
    <option value="IL">Israel</option>
    <option value="IT">Italy</option>
    <option value="JM">Jamaica</option>
    <option value="JP">Japan</option>
    <option value="JE">Jersey</option>
    <option value="JO">Jordan</option>
    <option value="KZ">Kazakhstan</option>
    <option value="KE">Kenya</option>
    <option value="KI">Kiribati</option>
    <option value="KP">Korea, Democratic People's Republic of</option>
    <option value="KR">Korea, Republic of</option>
    <option value="XK">Kosovo</option>
    <option value="KW">Kuwait</option>
    <option value="KG">Kyrgyzstan</option>
    <option value="LA">Lao People's Democratic Republic</option>
    <option value="LV">Latvia</option>
    <option value="LB">Lebanon</option>
    <option value="LS">Lesotho</option>
    <option value="LR">Liberia</option>
    <option value="LY">Libyan Arab Jamahiriya</option>
    <option value="LI">Liechtenstein</option>
    <option value="LT">Lithuania</option>
    <option value="LU">Luxembourg</option>
    <option value="MO">Macao</option>
    <option value="MK">Macedonia, the Former Yugoslav Republic of</option>
    <option value="MG">Madagascar</option>
    <option value="MW">Malawi</option>
    <option value="MY">Malaysia</option>
    <option value="MV">Maldives</option>
    <option value="ML">Mali</option>
    <option value="MT">Malta</option>
    <option value="MH">Marshall Islands</option>
    <option value="MQ">Martinique</option>
    <option value="MR">Mauritania</option>
    <option value="MU">Mauritius</option>
    <option value="YT">Mayotte</option>
    <option value="MX">Mexico</option>
    <option value="FM">Micronesia, Federated States of</option>
    <option value="MD">Moldova, Republic of</option>
    <option value="MC">Monaco</option>
    <option value="MN">Mongolia</option>
    <option value="ME">Montenegro</option>
    <option value="MS">Montserrat</option>
    <option value="MA">Morocco</option>
    <option value="MZ">Mozambique</option>
    <option value="MM">Myanmar</option>
    <option value="NA">Namibia</option>
    <option value="NR">Nauru</option>
    <option value="NP">Nepal</option>
    <option value="NL">Netherlands</option>
    <option value="AN">Netherlands Antilles</option>
    <option value="NC">New Caledonia</option>
    <option value="NZ">New Zealand</option>
    <option value="NI">Nicaragua</option>
    <option value="NE">Niger</option>
    <option value="NG">Nigeria</option>
    <option value="NU">Niue</option>
    <option value="NF">Norfolk Island</option>
    <option value="MP">Northern Mariana Islands</option>
    <option value="NO">Norway</option>
    <option value="OM">Oman</option>
    <option value="PK">Pakistan</option>
    <option value="PW">Palau</option>
    <option value="PS">Palestinian Territory, Occupied</option>
    <option value="PA">Panama</option>
    <option value="PG">Papua New Guinea</option>
    <option value="PY">Paraguay</option>
    <option value="PE">Peru</option>
    <option value="PH">Philippines</option>
    <option value="PN">Pitcairn</option>
    <option value="PL">Poland</option>
    <option value="PT">Portugal</option>
    <option value="PR">Puerto Rico</option>
    <option value="QA">Qatar</option>
    <option value="RE">Reunion</option>
    <option value="RO">Romania</option>
    <option value="RU">Russian Federation</option>
    <option value="RW">Rwanda</option>
    <option value="BL">Saint Barthelemy</option>
    <option value="SH">Saint Helena</option>
    <option value="KN">Saint Kitts and Nevis</option>
    <option value="LC">Saint Lucia</option>
    <option value="MF">Saint Martin</option>
    <option value="PM">Saint Pierre and Miquelon</option>
    <option value="VC">Saint Vincent and the Grenadines</option>
    <option value="WS">Samoa</option>
    <option value="SM">San Marino</option>
    <option value="ST">Sao Tome and Principe</option>
    <option value="SA">Saudi Arabia</option>
    <option value="SN">Senegal</option>
    <option value="RS">Serbia</option>
    <option value="CS">Serbia and Montenegro</option>
    <option value="SC">Seychelles</option>
    <option value="SL">Sierra Leone</option>
    <option value="SG">Singapore</option>
    <option value="SX">Sint Maarten</option>
    <option value="SK">Slovakia</option>
    <option value="SI">Slovenia</option>
    <option value="SB">Solomon Islands</option>
    <option value="SO">Somalia</option>
    <option value="ZA">South Africa</option>
    <option value="GS">South Georgia and the South Sandwich Islands</option>
    <option value="SS">South Sudan</option>
    <option value="ES">Spain</option>
    <option value="LK">Sri Lanka</option>
    <option value="SD">Sudan</option>
    <option value="SR">Suriname</option>
    <option value="SJ">Svalbard and Jan Mayen</option>
    <option value="SZ">Swaziland</option>
    <option value="SE">Sweden</option>
    <option value="CH">Switzerland</option>
    <option value="SY">Syrian Arab Republic</option>
    <option value="TW">Taiwan, Province of China</option>
    <option value="TJ">Tajikistan</option>
    <option value="TZ">Tanzania, United Republic of</option>
    <option value="TH">Thailand</option>
    <option value="TL">Timor-Leste</option>
    <option value="TG">Togo</option>
    <option value="TK">Tokelau</option>
    <option value="TO">Tonga</option>
    <option value="TT">Trinidad and Tobago</option>
    <option value="TN">Tunisia</option>
    <option value="TR">Turkey</option>
    <option value="TM">Turkmenistan</option>
    <option value="TC">Turks and Caicos Islands</option>
    <option value="TV">Tuvalu</option>
    <option value="UG">Uganda</option>
    <option value="UA">Ukraine</option>
    <option value="AE">United Arab Emirates</option>
    <option value="GB">United Kingdom</option>
    <option value="US">United States</option>
    <option value="UM">United States Minor Outlying Islands</option>
    <option value="UY">Uruguay</option>
    <option value="UZ">Uzbekistan</option>
    <option value="VU">Vanuatu</option>
    <option value="VE">Venezuela</option>
    <option value="VN">Viet Nam</option>
    <option value="VG">Virgin Islands, British</option>
    <option value="VI">Virgin Islands, U.s.</option>
    <option value="WF">Wallis and Futuna</option>
    <option value="EH">Western Sahara</option>
    <option value="YE">Yemen</option>
    <option value="ZM">Zambia</option>
    <option value="ZW">Zimbabwe</option>
</select>


                 <span className='details-title'>  رقم الهاتف </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="phone" 
                 value={this.state.phone} 
                 onChange={this.onChangephone}
                 >    
                 </input>


                 <span className='details-title'>العنوان1  </span>
                 <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="address1" 
                 value={this.state.address1} 
                 onChange={this.onChangeaddress1}
                 >    
                 </input>


                 <span className='details-title'> العنوان 2  </span>
                 <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="address2" 
                 value={this.state.address2} 
                 onChange={this.onChangeaddress2}
                 >    
                 </input>


                 <span className='details-title'>المدينة  </span>
                 <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="city" 
                 value={this.state.city} 
                 onChange={this.onChangecity}
                 >    
                 </input>


                 <span className='details-title'>المنطقة  </span>
                 <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="state" 
                 value={this.state.state} 
                 onChange={this.onChangestate}
                 >    
                 </input>

 

                 <span className='details-title'>الرمز البريدي  </span>
                 <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="postal" 
                 value={this.state.postal} 
                 onChange={this.onChangepostal}
                 >    
                 </input>




                 <span className='details-title'>اسم المستفيد (للدفع) </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="payee_name" 
                 value={this.state.payee_name} 
                 onChange={this.onChangepayee_name}
                 >    
                 </input>


                 <span className='details-title'>ايميل المستفيد (paypal) </span>
                <input className="login-input"
                 type="email" 
                 placeholder=""
                 name="paypal_account" 
                 value={this.state.paypal_account} 
                 onChange={this.onChangepaypal_account}
                 >    
                 </input>


                 {/* <span className='details-title'>الصلاحية </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="validity" 
                 value={this.state.validity} 
                 onChange={this.onChangevalidity}
                 >    
                 </input> */}
                 
 
  
  	  
	  <center>
    {this.state.alertSuccessAR !== '' &&(
     <div className='alert-success'> 
     {this.state.alertSuccessAR}
       </div>   
    )}
    <br />
	 <button className="Formbutton"  type="submit" name="" >حفظ</button>
 
	 </center>




 
   
{(moment(this.state.membership_renewal_expiry_date).isAfter(Date.now())) &&(
  <Fragment>
    <center>
    <div className="Dash-button-still-subscription">
  <p class="login-title">  {this.state.membership_class && this.state.membership_class }   :مشترك بالخطة </p>
   <p> 
     ينتهي اشتراكك في يوم <Moment format='YYYY/MM/DD'>{this.state.membership_renewal_expiry_date}</Moment> 
</p>
 </div>
 </center>
  </Fragment>
  )}




   </div>
	 </form>
     </center>

</Fragment>

)}

{i18next.language === 'en' &&(



  ///////////////////////ENGLISH/////////////////////
  
  <Fragment>
 
  
        <center> 

        <div class="login-title">   </div>
	 
	    <form className="login-form" onSubmit={this.onSubmit}>
      <div className='FormCover'>  
      <div class="login-title">  <i class="fa fa-user fa-1x" aria-hidden="true"></i> Personal Information </div>
      <center> 
     
      </center>

                <span className='details-title'>First name </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="first_name" 
                 value={this.state.first_name} 
                 onChange={this.onChangefirst_name}
                 >    
                 </input>


                 <span className='details-title'>Last name </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="last_name" 
                 value={this.state.last_name} 
                 onChange={this.onChangelast_name}
                 >    
                 </input>


                 <span className='details-title'>Email</span>
                 <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="email" 
                 value={this.state.email} 
                // onChange={this.onChangeemail}
                 >    
                 </input>


                 <span className='details-title'>Country</span>
                 {/* <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="country_code" 
                 value={this.state.country_code} 
                 onChange={this.onChangecountry_code}
                 >    
                 </input> */}

     <select
      className="login-input"
      name="country_code" 
      value={this.state.country_code} 
      onChange={this.onChangecountry_code}
      >
    <option>select country</option>
    <option value="AF">Afghanistan</option>
    <option value="AX">Aland Islands</option>
    <option value="AL">Albania</option>
    <option value="DZ">Algeria</option>
    <option value="AS">American Samoa</option>
    <option value="AD">Andorra</option>
    <option value="AO">Angola</option>
    <option value="AI">Anguilla</option>
    <option value="AQ">Antarctica</option>
    <option value="AG">Antigua and Barbuda</option>
    <option value="AR">Argentina</option>
    <option value="AM">Armenia</option>
    <option value="AW">Aruba</option>
    <option value="AU">Australia</option>
    <option value="AT">Austria</option>
    <option value="AZ">Azerbaijan</option>
    <option value="BS">Bahamas</option>
    <option value="BH">Bahrain</option>
    <option value="BD">Bangladesh</option>
    <option value="BB">Barbados</option>
    <option value="BY">Belarus</option>
    <option value="BE">Belgium</option>
    <option value="BZ">Belize</option>
    <option value="BJ">Benin</option>
    <option value="BM">Bermuda</option>
    <option value="BT">Bhutan</option>
    <option value="BO">Bolivia</option>
    <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
    <option value="BA">Bosnia and Herzegovina</option>
    <option value="BW">Botswana</option>
    <option value="BV">Bouvet Island</option>
    <option value="BR">Brazil</option>
    <option value="IO">British Indian Ocean Territory</option>
    <option value="BN">Brunei Darussalam</option>
    <option value="BG">Bulgaria</option>
    <option value="BF">Burkina Faso</option>
    <option value="BI">Burundi</option>
    <option value="KH">Cambodia</option>
    <option value="CM">Cameroon</option>
    <option value="CA">Canada</option>
    <option value="CV">Cape Verde</option>
    <option value="KY">Cayman Islands</option>
    <option value="CF">Central African Republic</option>
    <option value="TD">Chad</option>
    <option value="CL">Chile</option>
    <option value="CN">China</option>
    <option value="CX">Christmas Island</option>
    <option value="CC">Cocos (Keeling) Islands</option>
    <option value="CO">Colombia</option>
    <option value="KM">Comoros</option>
    <option value="CG">Congo</option>
    <option value="CD">Congo, Democratic Republic of the Congo</option>
    <option value="CK">Cook Islands</option>
    <option value="CR">Costa Rica</option>
    <option value="CI">Cote D'Ivoire</option>
    <option value="HR">Croatia</option>
    <option value="CU">Cuba</option>
    <option value="CW">Curacao</option>
    <option value="CY">Cyprus</option>
    <option value="CZ">Czech Republic</option>
    <option value="DK">Denmark</option>
    <option value="DJ">Djibouti</option>
    <option value="DM">Dominica</option>
    <option value="DO">Dominican Republic</option>
    <option value="EC">Ecuador</option>
    <option value="EG">Egypt</option>
    <option value="SV">El Salvador</option>
    <option value="GQ">Equatorial Guinea</option>
    <option value="ER">Eritrea</option>
    <option value="EE">Estonia</option>
    <option value="ET">Ethiopia</option>
    <option value="FK">Falkland Islands (Malvinas)</option>
    <option value="FO">Faroe Islands</option>
    <option value="FJ">Fiji</option>
    <option value="FI">Finland</option>
    <option value="FR">France</option>
    <option value="GF">French Guiana</option>
    <option value="PF">French Polynesia</option>
    <option value="TF">French Southern Territories</option>
    <option value="GA">Gabon</option>
    <option value="GM">Gambia</option>
    <option value="GE">Georgia</option>
    <option value="DE">Germany</option>
    <option value="GH">Ghana</option>
    <option value="GI">Gibraltar</option>
    <option value="GR">Greece</option>
    <option value="GL">Greenland</option>
    <option value="GD">Grenada</option>
    <option value="GP">Guadeloupe</option>
    <option value="GU">Guam</option>
    <option value="GT">Guatemala</option>
    <option value="GG">Guernsey</option>
    <option value="GN">Guinea</option>
    <option value="GW">Guinea-Bissau</option>
    <option value="GY">Guyana</option>
    <option value="HT">Haiti</option>
    <option value="HM">Heard Island and Mcdonald Islands</option>
    <option value="VA">Holy See (Vatican City State)</option>
    <option value="HN">Honduras</option>
    <option value="HK">Hong Kong</option>
    <option value="HU">Hungary</option>
    <option value="IS">Iceland</option>
    <option value="IN">India</option>
    <option value="ID">Indonesia</option>
    <option value="IR">Iran, Islamic Republic of</option>
    <option value="IQ">Iraq</option>
    <option value="IE">Ireland</option>
    <option value="IM">Isle of Man</option>
    <option value="IL">Israel</option>
    <option value="IT">Italy</option>
    <option value="JM">Jamaica</option>
    <option value="JP">Japan</option>
    <option value="JE">Jersey</option>
    <option value="JO">Jordan</option>
    <option value="KZ">Kazakhstan</option>
    <option value="KE">Kenya</option>
    <option value="KI">Kiribati</option>
    <option value="KP">Korea, Democratic People's Republic of</option>
    <option value="KR">Korea, Republic of</option>
    <option value="XK">Kosovo</option>
    <option value="KW">Kuwait</option>
    <option value="KG">Kyrgyzstan</option>
    <option value="LA">Lao People's Democratic Republic</option>
    <option value="LV">Latvia</option>
    <option value="LB">Lebanon</option>
    <option value="LS">Lesotho</option>
    <option value="LR">Liberia</option>
    <option value="LY">Libyan Arab Jamahiriya</option>
    <option value="LI">Liechtenstein</option>
    <option value="LT">Lithuania</option>
    <option value="LU">Luxembourg</option>
    <option value="MO">Macao</option>
    <option value="MK">Macedonia, the Former Yugoslav Republic of</option>
    <option value="MG">Madagascar</option>
    <option value="MW">Malawi</option>
    <option value="MY">Malaysia</option>
    <option value="MV">Maldives</option>
    <option value="ML">Mali</option>
    <option value="MT">Malta</option>
    <option value="MH">Marshall Islands</option>
    <option value="MQ">Martinique</option>
    <option value="MR">Mauritania</option>
    <option value="MU">Mauritius</option>
    <option value="YT">Mayotte</option>
    <option value="MX">Mexico</option>
    <option value="FM">Micronesia, Federated States of</option>
    <option value="MD">Moldova, Republic of</option>
    <option value="MC">Monaco</option>
    <option value="MN">Mongolia</option>
    <option value="ME">Montenegro</option>
    <option value="MS">Montserrat</option>
    <option value="MA">Morocco</option>
    <option value="MZ">Mozambique</option>
    <option value="MM">Myanmar</option>
    <option value="NA">Namibia</option>
    <option value="NR">Nauru</option>
    <option value="NP">Nepal</option>
    <option value="NL">Netherlands</option>
    <option value="AN">Netherlands Antilles</option>
    <option value="NC">New Caledonia</option>
    <option value="NZ">New Zealand</option>
    <option value="NI">Nicaragua</option>
    <option value="NE">Niger</option>
    <option value="NG">Nigeria</option>
    <option value="NU">Niue</option>
    <option value="NF">Norfolk Island</option>
    <option value="MP">Northern Mariana Islands</option>
    <option value="NO">Norway</option>
    <option value="OM">Oman</option>
    <option value="PK">Pakistan</option>
    <option value="PW">Palau</option>
    <option value="PS">Palestinian Territory, Occupied</option>
    <option value="PA">Panama</option>
    <option value="PG">Papua New Guinea</option>
    <option value="PY">Paraguay</option>
    <option value="PE">Peru</option>
    <option value="PH">Philippines</option>
    <option value="PN">Pitcairn</option>
    <option value="PL">Poland</option>
    <option value="PT">Portugal</option>
    <option value="PR">Puerto Rico</option>
    <option value="QA">Qatar</option>
    <option value="RE">Reunion</option>
    <option value="RO">Romania</option>
    <option value="RU">Russian Federation</option>
    <option value="RW">Rwanda</option>
    <option value="BL">Saint Barthelemy</option>
    <option value="SH">Saint Helena</option>
    <option value="KN">Saint Kitts and Nevis</option>
    <option value="LC">Saint Lucia</option>
    <option value="MF">Saint Martin</option>
    <option value="PM">Saint Pierre and Miquelon</option>
    <option value="VC">Saint Vincent and the Grenadines</option>
    <option value="WS">Samoa</option>
    <option value="SM">San Marino</option>
    <option value="ST">Sao Tome and Principe</option>
    <option value="SA">Saudi Arabia</option>
    <option value="SN">Senegal</option>
    <option value="RS">Serbia</option>
    <option value="CS">Serbia and Montenegro</option>
    <option value="SC">Seychelles</option>
    <option value="SL">Sierra Leone</option>
    <option value="SG">Singapore</option>
    <option value="SX">Sint Maarten</option>
    <option value="SK">Slovakia</option>
    <option value="SI">Slovenia</option>
    <option value="SB">Solomon Islands</option>
    <option value="SO">Somalia</option>
    <option value="ZA">South Africa</option>
    <option value="GS">South Georgia and the South Sandwich Islands</option>
    <option value="SS">South Sudan</option>
    <option value="ES">Spain</option>
    <option value="LK">Sri Lanka</option>
    <option value="SD">Sudan</option>
    <option value="SR">Suriname</option>
    <option value="SJ">Svalbard and Jan Mayen</option>
    <option value="SZ">Swaziland</option>
    <option value="SE">Sweden</option>
    <option value="CH">Switzerland</option>
    <option value="SY">Syrian Arab Republic</option>
    <option value="TW">Taiwan, Province of China</option>
    <option value="TJ">Tajikistan</option>
    <option value="TZ">Tanzania, United Republic of</option>
    <option value="TH">Thailand</option>
    <option value="TL">Timor-Leste</option>
    <option value="TG">Togo</option>
    <option value="TK">Tokelau</option>
    <option value="TO">Tonga</option>
    <option value="TT">Trinidad and Tobago</option>
    <option value="TN">Tunisia</option>
    <option value="TR">Turkey</option>
    <option value="TM">Turkmenistan</option>
    <option value="TC">Turks and Caicos Islands</option>
    <option value="TV">Tuvalu</option>
    <option value="UG">Uganda</option>
    <option value="UA">Ukraine</option>
    <option value="AE">United Arab Emirates</option>
    <option value="GB">United Kingdom</option>
    <option value="US">United States</option>
    <option value="UM">United States Minor Outlying Islands</option>
    <option value="UY">Uruguay</option>
    <option value="UZ">Uzbekistan</option>
    <option value="VU">Vanuatu</option>
    <option value="VE">Venezuela</option>
    <option value="VN">Viet Nam</option>
    <option value="VG">Virgin Islands, British</option>
    <option value="VI">Virgin Islands, U.s.</option>
    <option value="WF">Wallis and Futuna</option>
    <option value="EH">Western Sahara</option>
    <option value="YE">Yemen</option>
    <option value="ZM">Zambia</option>
    <option value="ZW">Zimbabwe</option>
</select>


                 <span className='details-title'> Phone Number </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="phone" 
                 value={this.state.phone} 
                 onChange={this.onChangephone}
                 >    
                 </input>


                 <span className='details-title'>address line 1  </span>
                 <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="address1" 
                 value={this.state.address1} 
                 onChange={this.onChangeaddress1}
                 >    
                 </input>


                 <span className='details-title'> address line 2  </span>
                 <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="address2" 
                 value={this.state.address2} 
                 onChange={this.onChangeaddress2}
                 >    
                 </input>


                 <span className='details-title'>City  </span>
                 <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="city" 
                 value={this.state.city} 
                 onChange={this.onChangecity}
                 >    
                 </input>


                 <span className='details-title'>the state  </span>
                 <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="state" 
                 value={this.state.state} 
                 onChange={this.onChangestate}
                 >    
                 </input>

 

                 <span className='details-title'>Postal code  </span>
                 <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="postal" 
                 value={this.state.postal} 
                 onChange={this.onChangepostal}
                 >    
                 </input>




                 <span className='details-title'> Payee name </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="payee_name" 
                 value={this.state.payee_name} 
                 onChange={this.onChangepayee_name}
                 >    
                 </input>


                 <span className='details-title'> (paypal email) </span>
                <input className="login-input"
                 type="email" 
                 placeholder=""
                 name="paypal_account" 
                 value={this.state.paypal_account} 
                 onChange={this.onChangepaypal_account}
                 >    
                 </input>
 
 

                 {/* <span className='details-title'>validity </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="validity" 
                 value={this.state.validity} 
                 onChange={this.onChangevalidity}
                 >    
                 </input> */}

                 
  
  	  
	  <center>

    {this.state.alertSuccessEN !== '' &&(
     <div className='alert-success'> 
     {this.state.alertSuccessEN}
       </div>   
    )}
    <br />
	 <button className="Formbutton"  type="submit" name="" >Save</button>
 
	 </center>





   
{(moment(this.state.membership_renewal_expiry_date).isAfter(Date.now())) &&(
  <Fragment>
    <center>
    <div className="Dash-button-still-subscription">
  <p class="login-title"> Current Subscription: {this.state.membership_class && this.state.membership_class}    </p>
   <p> 
   Your subscription expires  <Moment format='YYYY/MM/DD'>{this.state.membership_renewal_expiry_date}</Moment> 
</p>
 </div> 
 </center>
  </Fragment>
  )}




   </div>
	 </form>
     </center>

</Fragment>

  )} 
 
 



 



        </div>
        </div>
        </div>


 
 
        </Fragment>
 
        )
    }
}
