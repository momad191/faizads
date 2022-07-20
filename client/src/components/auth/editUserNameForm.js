import React, { useState,useEffect ,Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editUsername } from '../../actions/auth';
import { setAlert } from '../../actions/alert';
import Alert from '../layout/Alert';
import axios from 'axios';
import Spinner from '../layout/Spinner';
import Navbar from '../layout/Navbar';
import NavbarEnglish from '../layout/NavbarEnglish';
import { useTranslation } from 'react-i18next';
       
const EditUserNameForm = ({editUsername,setAlert}) => {
   
  const [t, i18next] = useTranslation()
  const [user,setUser]= useState([])
  const  userId= user._id;
  const [ShowButton,setShowButton]= useState('showButton11')
    
  const [alertArabic,setAlertArabic]= useState('')
  const [alertEnglish,setAlertEnglish]= useState('')

  // const validity = 'normal';
  
   
    const [formData, setFormData] = useState({
        username: '',
        password:'',
        password2:''
      });
 
      const { username,password,password2} = formData;
      const onChange = e =>
      setFormData({ ...formData, [e.target.name]: e.target.value });
      const onSubmit = async e => {
        e.preventDefault();
        if(username === ''){
          setAlertArabic('اسم المستخدم ضروري')
          setAlertEnglish('Username is required')

        }else if(password === ''){
          setAlertArabic('كلمة المرور ضرورية')
          setAlertEnglish('Password is required')

        }else if(password2 === ''){
          setAlertArabic('إعادة كلمة المرور ضرورية')
          setAlertEnglish('Re-enter Password is required')
        }else if (password !== password2){
          setAlertArabic('كلمة المرور غير مطابقة')
          setAlertEnglish('Passwords do not match')
        }else{
        
          editUsername(userId,formData); 

        }

         
      };
      const hideButton = async e => {
        setShowButton('hideButton11')
    }


      useEffect(()=>{

    axios.get('/api/auth')
    .then(res => {
      console.log(res);
      setUser(res.data)
    })
    .catch((err) => {
      console.log(err);
    }) 
    },[user])


    return (
         
      <div className="aqle3-main">
      <div className="mainword2">
      {i18next.language === 'ar'&&(<Navbar />)}
      {i18next.language === 'en'&&(<NavbarEnglish />)}
             
                <div className="mainForm">
                <center> 
                  {i18next.language === 'ar'&&(
                  <div class="login-title">  <i class="fa fa-user-circle"></i>  تغيير اسم المستخدم </div>
                  )}


                {i18next.language === 'en'&&(
                  <div class="login-title">  <i class="fa fa-user-circle"></i>  Username change </div>
                  )}


                <form className="login-form" onSubmit={e => onSubmit(e)}>
                <div className='FormCover'>  

                {i18next.language === 'ar'&&(
                <h1> {user.username} :اسم المستخدم الحالي  </h1>
                )}

                {i18next.language === 'en'&&(
                <h1> current user name : {user.username}</h1>
                )}
     
                 <div className=''>
               
                 {/* <span>{t('code_title')} </span> */}
                 {i18next.language === 'ar'&&(
                 <span>اسم المستخدم الجديد </span>
                 )}
                 {i18next.language === 'en'&&(
                 <span>New Username </span>
                 )}
                <input className="login-input"
            
                 type="text" 
                 placeholder=""
                 name="username" 
                 value={username} 
                onChange={e => onChange(e)}
                 /> 
                 </div>
               

               <div className=''>
               {i18next.language === 'ar'&&(
                 <span>كلمة المرور </span>
                 )}
                 {i18next.language === 'en'&&(
                 <span>Password </span>
                 )}
               <input className="login-input"
               
                 type="password" 
                 placeholder=""
                 name="password" 
                 value={password} 
                onChange={e => onChange(e)}
                 /> 
                 </div>   
 
                 <div className=''>
                 {i18next.language === 'ar'&&(
                 <span>إعادة كلمة المرور </span>
                 )}
                 {i18next.language === 'en'&&(
                 <span>Re-enter Password</span>
                 )}
               <input className="login-input"
                 type="password" 
                 placeholder=""
                 name="password2" 
                 value={password2} 
                onChange={e => onChange(e)}
                 /> 
                 </div> 
 
                 
              <center>
           

              <div className={ShowButton}> 
             <button className="Formbutton"   type="submit" name="" > 
             {i18next.language ==='ar'&&(
              <>حفظ</>
             )}
            {i18next.language ==='en'&&(
              <>Save</>
             )}
             
             </button>
             <center>   <div className="alert-info" > 
             {i18next.language==='ar'&&(
              alertArabic
             )}
             {i18next.language==='en'&&(
              alertEnglish
             )}
              <Alert />  </div> </center>  
             </div>
 
             </center>
             </div>
             </form>
           
        </center>
        </div>



        </div>
        </div>
        
    )
}




EditUserNameForm.propTypes = {
    editUsername: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired
  };
  
  export default connect(
    null,
    { setAlert,editUsername }
  )(EditUserNameForm);
