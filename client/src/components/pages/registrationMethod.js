import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
 
import Navbar from '../../components/layout/Navbar';
import NavbarEnglish from '../../components/layout/NavbarEnglish';


function RegistrationMethod({match}) {
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

   
  

      <div className="login-title"> طريقة التسجيل </div>  


      <div className="about-title"> الخطوة الأولى </div>  

      <p className='about-paragraph'>
          الضغط على انشئ حساب 
        <a  href='/ar/user/createAccount'>  انشئ حساب </a>
       </p>


      <div className="about-title"> الخطوة الثانية </div>  
      <p className='about-paragraph'>
      ادخل عنوان بريدك الالكتروني ليتم إرسال رسالة إلكترونية على عنوان بريدك الإلكتروني للتأكد من ‏ملكيتك للعنوان   
      </p>

      <div className="about-title"> الخطوة الثالثة </div>
      <p className='about-paragraph'>
        فتح الرسالة المرسلة على بريدك الالكتروني والضغط على رابط اكمال عملية التسجيل 
       </p>

      <div className="about-title"> الخطوة الرابعة </div>  
      <p className='about-paragraph'>
        اكمال عملية التسجيل بتعبئة النموذج بشكل صحيح  
       </p>



       <div className="about-title"> الخطوة الخامسة </div>  
       <p className='about-paragraph'>
        الدخول على حسابك حسب بريدك الالكتروني وكلمة المرور الخاصة بك  
       </p>

      

</div>
</div> 
 </center> 
      </Fragment>
   
  )
}

export default RegistrationMethod