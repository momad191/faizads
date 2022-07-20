import React, { useState,useEffect ,Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editValidity } from '../../actions/auth';
import { setAlert } from '../../actions/alert';
import Alert from '../layout/Alert';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
     
const ValidiryForm = ({editValidity,userId}) => {
  const [t, i18next] = useTranslation()

  const [ShowButton,setShowButton]= useState('showButton11')
   
 
  // const validity = 'normal';
  
   
    const [formData, setFormData] = useState({
        validity: '',
        userId:''
      });

      const { validity } = formData;

      const onChange = e =>
      setFormData({ ...formData, [e.target.name]: e.target.value });
 
  
      const onSubmit = async e => {
        e.preventDefault();
        editValidity(userId,formData);
         setAlert('تم تقديم الطلب');
         
      };

      const hideButton = async e => {
        setShowButton('hideButton11')
    
    }


      useEffect(()=>{

    
    },[])


    return (
         
               <>
             
                <form className="" onSubmit={e => onSubmit(e)}>
 
     
                 <div className=''>
               
                <select className="Forminput"
                style={{width:'auto'}}
                 type="text" 
                 placeholder=""
                 name="validity" 
                 value={validity} 
                onChange={e => onChange(e)}
                 > 
     <option value=''> chose level</option>
      <option value='super'> super</option>
      <option value='admin'> admin</option>
      <option value='normal'>normal </option>
      <option value='marketer'> marketer</option>
      <option value='agency'> agency</option>

                 </select>
                 </div>   
 
                 
              <center>
              <Alert />

              <div className={ShowButton}> 
             <button className="Formbutton"   type="submit" name="" >{t('user_validity_button')}</button>
             </div>
 
             </center>
             </form>
           
        
             </>
          
        
    
    )
}




ValidiryForm.propTypes = {
    editValidity: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired
  };
  
  export default connect(
    null,
    { setAlert,editValidity }
  )(ValidiryForm);
