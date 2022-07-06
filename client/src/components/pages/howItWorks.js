import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
 
import Navbar from '../../components/layout/Navbar';
import NavbarEnglish from '../../components/layout/NavbarEnglish';


function HowItWorks({match}) {
    const Lang = match.params.lang;
  return (
      <Fragment>
        {Lang === 'ar'?(
        <Navbar />
      ):(
      <NavbarEnglish />
      )}

<center> 
      <div className="login-form" >   
      <div className='FormCover'>  

   
  

      <div className="login-title"> كيف يعمل موقعنا </div>  


      <div className="about-title"> كيف يعمل   </div>  

      <p className='about-paragraph'>
           \\\\ 
        <a  href='/ar/user/createAccount'>  انشئ حساب </a>
       </p>
 

      

</div>
</div> 
 </center> 
      </Fragment>
   
  )
}

export default HowItWorks