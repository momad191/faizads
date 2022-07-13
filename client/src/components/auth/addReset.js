import React, { useState,useEffect ,Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addReset } from '../../actions/auth';  
import { setAlert } from '../../actions/alert'; 
import axios from 'axios';
  
import Navbar from '../../components/layout/Navbar';
import NavbarEnglish from '../../components/layout/NavbarEnglish';
import { useTranslation } from 'react-i18next';

const AddReset = ({setAlert,addReset,match}) => {
   
 
//   const [markets11,setMarkets11]= useState([])
//     const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)
    const Lang = match.params.lang;
    const [t, i18next] = useTranslation()

    const [formData, setFormData] = useState({
      r_email:'',

      });

      const { r_email } = formData;

      const onChange = e =>
      setFormData({ ...formData, [e.target.name]: e.target.value });
 
    //   const onChangeimage = e => {
    //     setImage({ image: e.target.files[0] });
    //     };



      const onSubmit = async e => {
        e.preventDefault();
        addReset({ r_email});
        window.location = '/ar/user/emailSendingComfirmation/';
        
      };


      const onSubmit2 = async e => {
        e.preventDefault();
        addReset({ r_email});
        window.location = '/en/user/emailSendingComfirmation/';
        
      };

 


      useEffect(()=>{
    
      
      
    },[ ])

 

    return (
          <Fragment> 

      {i18next.language === 'ar'&&(<Navbar />)}
      {i18next.language === 'en'&&(<NavbarEnglish />)}

        
      
        
                <div className="aqle3-main">
                <div className="mainword2">

                {i18next.language === 'ar'&&(
                  <Fragment> 
                <div className="mainForm" >
                <center> 
                <form className="login-form" onSubmit={e => onSubmit(e)} >
                <div className='FormCover' style={{height:'600px'}}>  
                <div class="login-title">
                 استعادة كلمة المرور                   
                 <i className="fa fa-envelope-square"></i> 
                </div>
                <br/><br/><br/><br/>
                <span>  يرجى إدخال البريد الالكتروني </span>
                <input className="login-input"
                 type="text" 
                 placeholder="أدخل البريد الإلكتروني"
                 name="r_email" 
                 value={r_email} 
                 onChange={e => onChange(e)}
                 />   
                  <center>
                 <button className="Formbutton"  type="submit" name="" >ارسل</button>
         
                </center>
                </div>
                </form>
                </center>
        
 
                </div>
                </Fragment>
                )}
                
                {i18next.language === 'en'&&(
                  <Fragment>

                <div className="mainForm" >
                <center> 
                <form className="login-form" onSubmit={e => onSubmit2(e)} >
                <div className='FormCover' style={{height:'600px'}}>  
                <div class="login-title">
                   Restore password     

                 <i className="fa fa-envelope-square"></i> 
                </div>
                <br/><br/><br/><br/>
                <span> Please enter your email </span>
                <input className="login-input"
                 type="text" 
                 placeholder="Enter email"
                 name="r_email" 
                 value={r_email} 
                 onChange={e => onChange(e)}
                 />   
                  <center>
                 <button className="Formbutton"  type="submit" name="" >Send</button>
         
                </center>
                </div>
                </form>
                </center>
        
 
                </div>


                  </Fragment>

                )}



                </div>
                </div>
        
                </Fragment>
    )
}




AddReset.propTypes = {
    addReset: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired
  };
  
  export default connect(
    null,
    { setAlert,addReset }
  )(AddReset);
