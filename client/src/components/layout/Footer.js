	  import React, { Fragment } from 'react';
    import { Link } from 'react-router-dom';
    
      const Footer = () => {
		return (
		  <Fragment>
 <footer className="myFooter">

 <center>
<div className='vertical-menu-wrapper'>
 
  <ul className='vertical-menu'> 
  <li>  <div className='vertical-menu-active'>  العضوية</div> </li>
  <li> <a href="/ar/user/createAccount">انشاء حساب </a> </li>
  <li> <a href="/ar/user/login">دخول الأعضاء</a> </li>
  <li> <a href="/ar/membership/prices">باقات العضوية</a> </li>
  <li> <a href="/ar/user/registrationMethod">طريقة التسجيل</a> </li>
  </ul>
 
 

  <ul className='vertical-menu'>
  <li>   <div className='vertical-menu-active'> الشركة</div> </li>
  <li>  <a href="/ar/company/about">من نحن </a></li>
  <li>  <a href="/ar/company/contact">الوظائف</a> </li>
  <li>  <a href="/ar/company/privacy">سياسة الخصوصية</a> </li>
  <li>  <a href="/ar/company/terms">شروط الاستخدام</a></li>
  </ul>
 



  <ul className='vertical-menu'>
  <li>  <div className='vertical-menu-active'> التسويق بالعمولة</div> </li>
  <li>  <a href="/ar/affiliate/howItWorks">آلية عمل الموقع</a> </li>
  <li>  <a href="/ar/affiliate/howItWorks">احتساب العمولات</a> </li>
  <li>  <a href="/ar/affiliate/howItWorks">طرق الترويج</a> </li>
  <li>  <a href="/ar/affiliate/howItWorks">عروض خاصة</a> </li>
  </ul>
  

</div>
</center>
			

<footer className="myFooter2">
 <div className="copyrighttext">  
				© 2022 faizads.com Classifieds Aggregator - All Rights Reserved.
				 </div>
   				 </footer>
   </footer>
		 
		  </Fragment>
		);
	  };

 
 

    

export default Footer;
 