import React, { Fragment } from 'react';

import Navbar from '../../components/layout/Navbar';
import NavbarEnglish from '../../components/layout/NavbarEnglish';

const contact = ({match}) => { 

  const Lang = match.params.lang;

  return (
    <Fragment>
      
      {Lang === 'ar'?(
      <Navbar />
      ):(
      <NavbarEnglish />
      )}

 <center>
 <div className='login-form'> 
 <div className='FormCover'>  
     
     <h1 className="middle-text-primary"> تواصل معنا <i class="fa fa-envelope-square"></i>  </h1>



<form class="form" action="">


<div className=''>
          <span className="login-text">    الاسم </span>
          <input
           className="login-input"
            type='text'
            name='name'
            value=''
            // onChange={e => onChange(e)}
            required
          />
          </div>



      <div className=''>
          <span className="login-text"> البريد الإلكتروني </span>
          <input
           className="login-input"
            type='email'
            name='email'
            value=''
            // onChange={e => onChange(e)}
            required
          />
          </div>

 


          <div className=''>
          <span className="login-text"> رسالتك </span>
          <textarea
           className="login-input-textarea"
          
            name='name'
            value=''
            // onChange={e => onChange(e)}
            required
          />
          </div>



          <button  className="Formbutton"  type='submit' value='Login'>ارسل</button>
</form>

   </div>
   </div>
   </center>
    </Fragment>
  );
};






export default contact;
