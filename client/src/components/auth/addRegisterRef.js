import React, { useState,useEffect ,Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link,Redirect } from 'react-router-dom';
import { addRegisterByRef } from '../../actions/auth';   
import { setAlert } from '../../actions/alert';
import Alert from '../layout/Alert';
import axios from 'axios';
         
import Navbar from '../../components/layout/Navbar';
import NavbarEnglish from '../../components/layout/NavbarEnglish';
import { useTranslation } from 'react-i18next';

const AddRegisterRef = ({setAlert,addRegisterByRef,match,isAuthenticated}) => {
  const [t, i18next] = useTranslation()
  const [alertArabic, setAlertArabic] = useState('no')
  const [alertEnglish, setAlertEnglish] = useState('no')
  const [showalertI,setshowalertI]= useState('no')
  const [sendSuccessfully,setsendSuccessfully]= useState('no')
  const [sendSuccessfullyEnglish,setsendSuccessfullyEnglish]= useState('no')
 
//   const [markets11,setMarkets11]= useState([])
//     const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)
 
    const Lang = match.params.lang; 
    // const r_ref = match.params.ref;
     

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
        if (r_email === '') { 
          setAlertArabic('البريد الإلكتروني مطلوب');
          setshowalertI('yes')
        } else{
        addRegisterByRef({ r_email});
        setsendSuccessfully(' لقد تم إرسال رسالة على عنوان  بريدك الالكتروني تحتوي على الخطوة الثانية والأخيرة لإتمام عملية إنشاء حسابك. نرجو منك تفقد صندوق بريدك الإلكتروني ')
        }
      };


      const onSubmit2 = async e => {
        e.preventDefault();
        if (r_email === '') { 
          setAlertEnglish('Email is required');
          setshowalertI('yes')
        } else{
        addRegisterByRef({ r_email});
        setsendSuccessfullyEnglish('A message has been sent to your email address containing the second and final step to complete the process of creating your account. Please check your email inbox ')
        }
      };

 

      const Reenter = () =>(
        setsendSuccessfully('no'),
        setsendSuccessfullyEnglish('no'),
        setAlert(''),
        setAlertEnglish(''),
        setFormData(''),
        setshowalertI('no')
      )


      useEffect(()=>{
    
      
      
    },[ ])

 

    if (isAuthenticated ) {
      return <Redirect to='/dashboard/main' />;
    } 


    return (
 

      <Fragment> 


      {i18next.language === 'ar'&&( <Navbar />)}
      {i18next.language === 'en'&&( <NavbarEnglish />)}
    
         
          
            
                    <div className="aqle3-main">
                    <div className="mainword2">
    
                    {i18next.language === 'ar' &&(
                      <Fragment> 
                    <div className="mainForm" >
                  
                    <center> 
                    <form className="login-form" onSubmit={e => onSubmit(e)} >
                    <div className='FormCover' style={{height:'550px'}}>  
                    <div class="login-title">
                    انشئ حساب جديد                     
                     <i className="fa fa-envelope-square"></i>  
                    </div>
    
                    <div class="login-title"> الخطوة 1 من 2 </div>
    
                    {sendSuccessfully !== 'no' ?(
                      <Fragment> 
                    <center>
                   <div className="alert-info">  {sendSuccessfully} </div> 
                   <div class="smallText"> اذا لم تصلك الرسالة قم بالضغط على اعادة الإرسال</div>
                   <div className="Formbutton" onClick={Reenter}>اعادة الإرسال</div>
                   </center> 
                     </Fragment> 
                    ):(
                      <Fragment> 
    
                    <div class="smallText">    ملاحظة: سيتم إرسال رسالة إلكترونية على عنوان بريدك الإلكتروني للتأكد من ملكيتك للعنوان فلذلك نرجو منك التأكد من كتابة عنوان بريدك الإلكتروني بشكل صحيح قبل المتابعة.     </div>
                    <br/><br/> 
                    <span>  يرجى إدخال البريد الالكتروني </span>
                    <input className="login-input"
                     type='email'
                     placeholder="example@example.com"
                     name="r_email" 
                     value={r_email} 
                     onChange={e => onChange(e)}
                     />   
                      <center> 
                      {showalertI === 'yes' && (
                      <center>   <div className="alert-danger" >  {alertArabic} </div> </center>  
    
                        )}
                     <button className="Formbutton"  type="submit" name="" >تسجيل</button>
                    
    
                     </center>
                     </Fragment>
                     )}
                     
                    
                    </div>
                    </form>
                    </center>
             
      
                    </div>
                    </Fragment>
                    )}
    
     {i18next.language === 'en' &&(
                      <Fragment>
    
    <div className="mainForm" >
     
                    <center> 
                    <form className="login-form" onSubmit={e => onSubmit2(e)} >
                    <div className='FormCover' style={{height:'600px'}}>  
                    <div class="login-title">
                    <i className="fa fa-envelope-square"></i> 
                     Create new account       
                    </div>
                    <div class="login-title"> Step 1 of 2 </div>
    
                    {sendSuccessfullyEnglish !=='no' ? (
                      <Fragment> 
                        <center>
                      <div className="alert-info" >  {sendSuccessfullyEnglish} </div> 
                    <div class="smallText"> If you did not receive the message, press resend</div>
                      <div className="Formbutton" onClick={Reenter}>Resend</div>
                      </center>
                      </Fragment>
                    ):(
                      <Fragment> 
                    <div class="smallTextEnglish">    
                    Note: An email will be sent to your email address to confirm that you own the address, so we kindly ask you to make sure that you type your email address correctly before proceeding.                
                       </div>
    
                    <br/><br/>
                    <span> Please enter your email </span>
                    <input className="login-input"
                     type="email" 
                     placeholder="Enter email"
                     name="r_email" 
                     value={r_email} 
                     onChange={e => onChange(e)}
                     />   
                      <center>
    
                      {showalertI === 'yes' && (
     
                    <center>   <div className="alert-danger" > {alertEnglish}</div> </center>  
    
                      )}
                     <button className="Formbutton"  type="submit" name="" >Sign Up</button>
    
                     
                    </center>
                    </Fragment>
                     )}
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




AddRegisterRef.propTypes = {
    addRegisterByRef: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
    
  }; 

  const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });

  
  export default connect(
    mapStateToProps,
    { setAlert,addRegisterByRef }
  )(AddRegisterRef);
