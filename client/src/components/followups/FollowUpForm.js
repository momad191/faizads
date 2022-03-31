import React, { useState,useEffect ,Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addFollowup } from '../../actions/followup';
import { setAlert } from '../../actions/alert';
import Alert from '../layout/Alert';
import axios from 'axios';
     
const FollowUpForm = ({setAlert,addFollowup,following_user,following_shop}) => {

      const [ShowButton,setShowButton]= useState('showButton11')

      const onSubmit = async e => {
        e.preventDefault();
        addFollowup({following_user,following_shop});
        //  setAlert('تمت المتابعة');
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
                <center> 
                <form className="" onSubmit={e => onSubmit(e)}>
                {/* <div className=''>
                 <span>المبلغ </span> 
                <input className="FormCover"
                 type="text" 
                 placeholder=""
                 name="amount" 
                 value={profit} 
                // onChange={e => onChange(e)}
                 />
                 </div> */}
              <center>
              <Alert />
              <div className={ShowButton}> 
             <button className="Action-button-plus" onClick={hideButton}   type="submit" name="" >متابعة</button>
             </div>
             </center>
             </form>
             </center>
        
 
                </div>
                </div>
                </div>
        
    
    )
}




FollowUpForm.propTypes = {
    addFollowup: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired
  };
  
  export default connect(
    null,
    { setAlert,addFollowup }
  )(FollowUpForm);
