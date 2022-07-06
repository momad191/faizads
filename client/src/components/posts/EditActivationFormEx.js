import React, { useState,useEffect ,Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { editActivation } from '../../actions/post';
import { setAlert } from '../../actions/alert';
import Alert from '../layout/Alert';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
     
const EditFormEx = ({editActivation,postId}) => {
  const [t, i18next] = useTranslation()

  const [ShowButton,setShowButton]= useState('showButton11')
   
 
  // const validity = 'normal';
  
  
    const [formData, setFormData] = useState({
        activation: '',
        postId:''
      });

      const { activation } = formData;

      const onChange = e =>
      setFormData({ ...formData, [e.target.name]: e.target.value });
 
  
      const onSubmit = async e => {
        e.preventDefault();
        editActivation(postId,formData);
         setAlert('تم تحديث الطلب');
         
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
                 name="activation" 
                 value={activation} 
                onChange={e => onChange(e)}
                 > 
     <option value=''> Chose</option>
      <option value='yes'> yes</option>
      <option value='no'> no</option>
 

                 </select>
                 </div>   
 
                 
              <center>
              <Alert />

              <div className={ShowButton}> 
             <button className="Formbutton"   type="submit" name="" >Update </button>
             </div>
 
             </center>
             </form>
           
        
             </>
          
        
    
    )
}


 

EditFormEx.propTypes = {
    editActivation: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired
  };
  
  export default connect(
    null,
    { setAlert,editActivation }
  )(EditFormEx);
