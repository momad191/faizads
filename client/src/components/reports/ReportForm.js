import React, { useState,useEffect ,Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addReport } from '../../actions/report';
import { setAlert } from '../../actions/alert';
import Alert from '../layout/Alert';
import axios from 'axios';
       
const ReportForm = ({setAlert,addReport,r_username}) => {

  const [ShowButton,setShowButton]= useState('showButton11')
  
   
  const [RefToPay,setRefToPay]= useState([])
  const [ProfitCompleteRequest,setProfitCompleteRequest]= useState([])

 
     const [formData, setFormData] = useState({
        r_message: '',
        r_subject: '',
       });
   
       const { r_message, r_subject} = formData;
     const onChange = e =>
     setFormData({ ...formData, [e.target.name]: e.target.value });
   
      const onSubmit = async e => {
        e.preventDefault();
        if(r_message===''){
          setAlert('اذكر سبب المخالفة');

        }else{
          addReport({ r_message,r_subject,r_username});
          setAlert('تم الإبلاغ ، شكرا لك ');
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

                <h1 className="report-title">  ابلاغ عن اعلان مخالف  <i class="fa fa-flag" aria-hidden="true"></i> </h1>
                {/* <div className=''>
                 <span className="login-text">ابلاغ عن اعلان مخالف  </span> 
                <input className="Forminput"
                 type="text" 
                 placeholder="رسالة الابلاغ"
                 name="r_subject" 
                 value={r_subject} 
                 onChange={e => onChange(e)}
                 />
                 </div>  */}

    
                <div className=''>
                
                <textarea className="inputreport"
              
                 type="text" 
                 placeholder="اذكر نوع المخالفة"
                 name="r_message" 
                 value={r_message} 
                 onChange={e => onChange(e)}
                 />
                 </div> 
 
                 
              <center>
              

             
             <button className="Formbutton" onClick={hideButton}   type="submit" name="" >
             <i class="fa fa-flag" aria-hidden="true"></i>{'  '}
               إبلاغ </button>
            
            
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




ReportForm.propTypes = {
  addReport: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired
  };
  
  export default connect(
    null,
    { setAlert,addReport }
  )(ReportForm);
