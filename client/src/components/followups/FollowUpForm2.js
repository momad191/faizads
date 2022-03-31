import React, { useState,useEffect ,Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addFollowup } from '../../actions/followup';
import { setAlert } from '../../actions/alert';
import Alert from '../layout/Alert';
import axios from 'axios';
      
const FollowUpForm2 = ({setAlert,addFollowup,following_user,following_shop}) => {
 
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
 
           
             <> 
              <form   onSubmit={e => onSubmit(e)}>
              <center>
              <Alert />
              <div className={ShowButton}> 
             <button className="Action-button-followup" onClick={hideButton}   type="submit" name="" >متابعة</button>
             </div>
             </center>
             </form>
             </>
        
 
            
              
        
    
    )
}




FollowUpForm2.propTypes = {
    addFollowup: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired
  };
  
  export default connect(
    null,
    { setAlert,addFollowup }
  )(FollowUpForm2);
