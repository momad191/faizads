import React, { useState,useEffect ,Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editProfitrequest } from '../../actions/profitrequest';
import { setAlert } from '../../actions/alert';
import Alert from '../layout/Alert';
import axios from 'axios';
import Spinner from '../layout/Spinner';
     
const EditProfitrequestForm = ({editProfitrequest,userId}) => {
 
  const [ShowButton,setShowButton]= useState('showButton11')
  
 
  // const validity = 'normal';
  
  
    const [formData, setFormData] = useState({
        status: '',
        userId:''
      });

      const { status } = formData;

      const onChange = e =>
      setFormData({ ...formData, [e.target.name]: e.target.value });
 
  
      const onSubmit = async e => {
        e.preventDefault();
        editProfitrequest(userId,formData);
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
                 name="status" 
                 value={status} 
                onChange={e => onChange(e)}
                 > 
     <option value=''> chose level</option>
      <option value='complete'> complete</option>
      <option value='check-in'> check-in</option>
 

                 </select>
                 </div>   
 
                 
              <center>
              <Alert />

              <div className={ShowButton}> 
             <button className="Formbutton"   type="submit" name="" >تحديث الحالة</button>
             </div>
 
             </center>
             </form>
           
        
             </>
          
        
    
    )
}




EditProfitrequestForm.propTypes = {
    editProfitrequest: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired
  };
  
  export default connect(
    null,
    { setAlert,editProfitrequest }
  )(EditProfitrequestForm);
