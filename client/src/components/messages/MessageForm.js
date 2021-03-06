import React, { useState,useEffect ,Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addMessage } from '../../actions/message'; 
import { setAlert } from '../../actions/alert';
import Alert from '../layout/Alert';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
       
const MessageForm = ({setAlert,addMessage,toUser}) => {
  const [t, i18next] = useTranslation()
  const [ShowButton,setShowButton]= useState('showButton11')
 
     const [formData, setFormData] = useState({
        subject: '',
        text: '',
       });
   
       const { text, subject} = formData;
     const onChange = e =>
     setFormData({ ...formData, [e.target.name]: e.target.value });
   
      const onSubmit = async e => {
        e.preventDefault();
        if(text===''){
          setAlert('اكتب الرسالة');

        }else{
        addMessage({ text,subject,toUser});
          setAlert('تم ارسال الرسالة');
        }
        
        
        
      };

      const hideButton = async e => {
        setShowButton('hideButton11')
    
    }


      useEffect(()=>{
 
 
     
 
      
    },[])


    return (
          
                  
        
                <div className="aqle3-main">
                <div className="mainword2">
                <div className="">
      
                {/* <div class="login-title"> <i class="fa fa-plus-circle"></i> اضافة تصنيف رئيسي جديد </div> */}
         
          
                <center> 
             
                <form className="" onSubmit={e => onSubmit(e)}>
                <div className={ShowButton}> 

                <h1 className="report-title">
                  <i class="fa fa-envelope" aria-hidden="true"></i> 
                  {i18next.language === 'ar'&& <> ({toUser})  ارسال رسالة الى</> }
                  {i18next.language === 'en'&& <> Send a message to  ({toUser})</> }
                  </h1>
 
    
                <div className=''>
                {i18next.language === 'ar'&&(
                  <Fragment>
                <textarea className="inputreport"
                 type="text" 
                 placeholder="اكتب رسالتك هنا"
                 name="text" 
                 value={text} 
                 onChange={e => onChange(e)}
                 />
                  </Fragment>
                )}



                {i18next.language === 'en'&&(
                 <Fragment>
                <textarea className="inputreport"
                 type="text" 
                 placeholder="Write your message here"
                 name="text" 
                 value={text} 
                 onChange={e => onChange(e)}
                 />
                  </Fragment>
                )}


                 </div> 
 
                 
              <center>
              
   
             
             <button className="Formbutton" onClick={hideButton}   type="submit" name="" >
             <i class="fa fa-paper-plane" aria-hidden="true"></i> {'  '}
               
               {i18next.language === 'ar' && <>أرسل</>}
               {i18next.language === 'en' && <>Send</>} 
 
               
               </button>
             
            
             </center>
             </div>
             </form>
             </center>
             <Alert />
 
                </div>
                </div>
                </div>
        
    
    )
}




MessageForm.propTypes = {
  addMessage: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired
  };
  
  export default connect(
    null,
    { setAlert,addMessage }
  )(MessageForm);
